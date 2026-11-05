// Caches every file the app needs so it works with no internet connection.
// Bump VERSION whenever you change any file, so devices pick up the update.
const VERSION = "skills-matcher-v4";
const FILES = [
  "./",
  "index.html",
  "data.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "logos/virgin-money.png",
  "logos/nationwide.png",
  "slides/slide-2.jpg",
  "slides/slide-3.jpg",
  "slides/slide-4.jpg",
  "slides/slide-5.jpg",
  "slides/slide-6.jpg",
  "slides/slide-7.jpg",
  "slides/slide-8.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((hit) =>
      hit || fetch(event.request).catch(() => caches.match("index.html"))
    )
  );
});
