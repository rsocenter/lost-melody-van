
const CACHE_NAME = 'lost-melody-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/poster.jpg',
  '/icon.png',
  '/Baila Baby! (1).mp3',
  '/Csak nosztalgia. (1).mp3',
  '/Csókolózni egyedül. (1).mp3',
  '/Fortuna kisasszony. (1).mp3',
  '/Nem veszem be! (1).mp3',
  '/Nosztalgia. (1).mp3',
  '/Soy Libre. (1).mp3',
  '/Soy libre pepperappabumm. (1).mp3',
  '/Szerencse kisasszony. (1).mp3',
  '/Ááhe! (1).mp3',
  '/Őrült nyár! (1).mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
