const cName = "gecc",
const version = "1.1"

cFiles = [
  "index.html",
  "style.css",
  "main.js",
  "gecc-reference.html"
];

// (B) CREATE/INSTALL CACHE
/*
self.addEventListener("install", function(evt) => {
  console.log('[ServiceWorker] Install');
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => {
		console.log('[ServiceWorker] Caching app shell');
		return cache.addAll(cFiles); 
		})
    .catch((err) => { console.error(err) })
  );
});
*/

// (B) CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => { return cache.addAll(cFiles); })
    .catch((err) => { console.error(err) })
  );
});


// (C) CACHE STRATEGY
self.addEventListener("fetch", (event) => {
  /* (C1) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
  event.respondWith(
    caches.match(event.request)
    .then((res) => { return res || fetch(event.request); })
  );*/

  // (C2) LOAD WITH NETWORK FIRST, FALLBACK TO CACHE IF OFFLINE
  event.respondWith(
    fetch(event.request)
    .catch(() => { return caches.match(event.request); })
  );
});
