
const CACHE_NAME = "lost-melody-van-v4";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/poster.jpg",
  "/icon-192x192-v2.png",
  "/icon-512x512-v2.png",
  "/Baila Baby! (1).mp3",
  "/Csak nosztalgia. (1).mp3",
  "/Csókolózni egyedül. (1).mp3",
  "/Fortuna kisasszony. (1).mp3",
  "/Nem veszem be! (1).mp3",
  "/Nosztalgia. (1).mp3",
  "/Soy Libre. (1).mp3",
  "/Soy libre pepperapabum.mp3",
  "/Szerencse kisasszony. (1).mp3",
  "/Ááhe! (1).mp3",
  "/Őrült nyár! (1).mp3"
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => {
      return response || fetch(evt.request);
    })
  );
});
