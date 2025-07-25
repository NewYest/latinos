self.addEventListener('install', e => {
  console.log('Service Worker установлен');
  e.waitUntil(
    caches.open('latinos-cache').then(cache => {
      return cache.addAll(['index.html']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => {
      return resp || fetch(e.request);
    })
  );
});