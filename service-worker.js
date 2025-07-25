self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  // ничего не кэшируем — просто заглушка
});
