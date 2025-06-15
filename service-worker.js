
const CACHE_NAME = "lost-melody-klari-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-192x192-klari.png",
  "/icon-512x512-klari.png",
  "/poster.jpg",
  "/Soy libre pepperapabum.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
