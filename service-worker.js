
const CACHE_NAME = 'lost-melody-final-v2';
const urlsToCache = ['/', '/index_LOST_MELODY_FINAL_FIXED.html', '/poster.jpg', '/icon.png', '/manifest.json', '/Soy Libre. (1).mp3', '/Soy libre pepperapabum.mp3', '/Nem veszem be! (1).mp3', '/Csak nosztalgia. (1).mp3', '/Nosztalgia. (1).mp3', '/Baila Baby! (1).mp3', '/Őrült nyár! (1).mp3', '/Ááhe! (1).mp3', '/Fortuna kisasszony. (1).mp3', '/Szerencse kisasszony. (1).mp3', '/Csókolózni egyedül. (1).mp3'];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
