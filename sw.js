const CACHE_NAME = "mt-varejao-cache-v5";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./admin.html",
  "./dashboard.html",

  "./style.css",
  "./script.js",

  "./studio.css",
  "./studio.js",

  "./manifest.json",
  "./manifest-admin.json",

  "./firebase.js",

  "./Icones/Image/logo.png",
 "./Icones/Image/MTADMIN2.png",
  "./Icones/Image/MTADMIN.png",

  "./Icones/Icon/instagram.svg",
  "./Icones/Icon/mail.svg",
  "./Icones/Icon/badge-check.svg",

  "./Icones/Icon/download.svg",
  "./Icones/Icon/install.svg",

  "./Icones/Icon/layout-grid.svg",
  "./Icones/Icon/layout-list.svg",

  "./Icones/Icon/shopping-bag.svg",
  "./Icones/Icon/shopping-cart.svg",

  "./Icones/Icon/fire.svg",
  "./Icones/Icon/gift.svg",

  "./Icones/Icon/home.svg",
  "./Icones/Icon/info.svg",

  "./Icones/Icon/shield.svg",
  "./Icones/Icon/lock.svg",

  "./Icones/Icon/coin.svg",
  "./Icones/Icon/percent.svg",
  

];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {

  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {

        const responseClone = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;

      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});