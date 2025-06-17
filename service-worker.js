
const CACHE_NAME = "lost-melody-van-v3";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/poster.jpg",
  "/icon-192x192-v2.png",
  "/icon-512x512-v2.png",
  "/songs/1.mp3",
  "/songs/2.mp3",
  "/songs/3.mp3",
  "/songs/4.mp3",
  "/songs/5.mp3",
  "/songs/6.mp3",
  "/songs/7.mp3",
  "/songs/8.mp3"
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
