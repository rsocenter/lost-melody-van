
const cacheName = "lmv-cache-v1";
const filesToCache = [
  "./",
  "./index.html",
  "./poster.jpg",
  "./icon.png",
  "./Baila Baby! (1).mp3",
  "./Csak nosztalgia. (1).mp3",
  "./Csókolózni egyedül. (1).mp3",
  "./Fortuna kisasszony. (1).mp3",
  "./Nem veszem be! (1).mp3",
  "./Nosztalgia. (1).mp3",
  "./Soy Libre. (1).mp3",
  "./Soy libre pepperappabum. (1).mp3",
  "./Szerencse kisasszony. (1).mp3",
  "./Ááhe! (1).mp3",
  "./Őrült nyár! (1).mp3"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
