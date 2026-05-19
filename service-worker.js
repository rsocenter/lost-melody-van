const CACHE_NAME = 'isaska-cache-v17-poster-fixed';
const urlsToCache = [
  "./",
  "index.html",
  "manifest.json",
  "icon-192x192-v2.png",
  "icon-512x512-v2.png",
  "poster.jpg",
  "poster.png",
  "01-soy-libre.mp3",
  "02-soy-libre-pepperapabum.mp3",
  "03-nem-veszem-be.mp3",
  "04-csak-nosztalgia.mp3",
  "05-nosztalgia.mp3",
  "06-baila-baby.mp3",
  "07-orult-nyar.mp3",
  "08-aahe.mp3",
  "09-fortuna-kisasszony.mp3",
  "10-szerencse-kisasszony.mp3",
  "11-csokolozni-egyedul.mp3",
  "12-rabotaty.mp3",
  "13-tanc.mp3",
  "14-mimi-a-mini-hippie.mp3",
  "15-kutyaszorito.mp3"
];
self.addEventListener('install', event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(names => Promise.all(names.map(name => name !== CACHE_NAME ? caches.delete(name) : null))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))); });
