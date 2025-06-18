const CACHE_NAME = "lost-melody-cache-v3";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-192x192-v2.png",
  "/icon-512x512-v2.png",
  "/poster.jpg",
  "/Baila%20Baby!%20(1).mp3",
  "/Csak%20nosztalgia.%20(1).mp3",
  "/Csókolózni%20egyedül.%20(1).mp3",
  "/Fortuna%20kisasszony.%20(1).mp3",
  "/Nem%20veszem%20be!%20(1).mp3",
  "/Nosztalgia.%20(1).mp3",
  "/Soy%20Libre.%20(1).mp3",
  "/Soy%20libre%20pepperapabum.mp3",
  "/Szerencse%20kisasszony.%20(1).mp3",
  "/Ááhe!%20(1).mp3",
  "/Őrült%20nyár!%20(1).mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
