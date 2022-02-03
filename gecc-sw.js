// (A) FILES TO CACHE
const cName = "gecc",
cFiles = [
  "gecc-index.html",
  "gecc-style.css",
  "gecc-main.js"
];

// (B) CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => { return cache.addAll(cFiles); })
    .catch((err) => { console.error(err) })
  );
});

// (C) CACHE STRATEGY
self.addEventListener("fetch", (evt) => {
  // (C1) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
  event.respondWith(
    caches.match(evt.request)
    .then((res) => { return res || fetch(evt.request); })
  );

  /* (C2) LOAD WITH NETWORK FIRST, FALLBACK TO CACHE IF OFFLINE
  evt.respondWith(
    fetch(evt.request)
    .catch(() => { return caches.match(evt.request); })
  );*/
});
