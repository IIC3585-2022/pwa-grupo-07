const staticDevCoffee = "dev-coffee-site-v1"
// (A) FILES TO CACHE
const cName = "JSCam"
const cFiles = [
  // (A3) JS
  "/js/cb.js",
  "/js/js-cam.js",
  // (A4) MANIFEST
  "/manifest.json",
  // (A5) PAGES
  "/index.html",
  "/gallery.inc",
  "/home.inc"
];
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/manifest.json",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
      cache.addAll(cFiles)
    })
  );
  installEvent.waitUntil(
    caches.open(cName)
    .then((cache) => { return cache.addAll(cFiles); })
    .catch((err) => { console.error(err) })
  );
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})


// (B) CREATE/INSTALL CACHE
// self.addEventListener("install", (evt) => {
//   self.skipWaiting();
//   evt.waitUntil(
//     caches.open(cName)
//     .then((cache) => { return cache.addAll(cFiles); })
//     .catch((err) => { console.error(err) })
//   );
// });

// (C) LOAD FROM CACHE, FALLBACK TO NETWORK IF NOT FOUND
// self.addEventListener("fetch", (evt) => {
//   evt.respondWith(
//     caches.match(evt.request)
//     .then((res) => { return res || fetch(evt.request); })
//   );
// });