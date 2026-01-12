// service-worker.js — minimal + safe
const CACHE_CORE = 'aots-core-v4';

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './app.js',
  './icon-192.png',
  './icon-512.png',
  './icon-1024.png' // keep if you have it
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_CORE).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_CORE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 🚫 Do NOT intercept/caches audio files; let the browser stream them directly
  if (url.pathname.includes('/sounds/')) return;

  // Only cache GET requests
  if (req.method !== 'GET') return;

  // Cache-first for the app shell
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((resp) => {
        // Clone BEFORE caching to avoid "body used" error
        const clone = resp.clone();
        caches.open(CACHE_CORE).then((cache) => cache.put(req, clone));
        return resp;
      }).catch(() => cached);
    })
  );
});
