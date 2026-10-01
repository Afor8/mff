self.addEventListener('install', (e) => {
  console.log('Service Worker instalován');
});

self.addEventListener('fetch', (e) => {
  // Základní obsluha pro PWA
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
