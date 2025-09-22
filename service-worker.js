// service-worker.js
const CACHE_CORE   = "aots-core-v1";
const CACHE_SOUNDS = "aots-sounds-v1";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./app.js",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  // Take control immediately and cache core assets
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_CORE).then((cache) => cache.addAll(CORE_ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  // Clean up old cache versions and take control of open clients
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => ![CACHE_CORE, CACHE_SOUNDS].includes(k))
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Runtime cache for audio files
  if (/\.(mp3|wav|ogg)$/i.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_SOUNDS).then(async (cache) => {
        const hit = await cache.match(request);
        if (hit) return hit;
        try {
          const resp = await fetch(request);
          if (resp && resp.ok) cache.put(request, resp.clone());
          return resp;
        } catch (err) {
          // If offline and not cached yet
          return hit || Response.error();
        }
      })
    );
    return;
  }

  // Network-first for everything else with cache fallback
  event.respondWith(
    fetch(request)
      .then((resp) => {
        if (request.method === "GET" && resp && resp.ok) {
          caches.open(CACHE_CORE).then((cache) => cache.put(request, resp.clone()));
        }
        return resp;
      })
      .catch(() => caches.match(request))
  );
});
