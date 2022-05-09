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
