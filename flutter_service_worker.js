'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9eee169fa942fce5718a0bd00ed453b2",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/img/head.jpg": "a47c483431e407ec473ddc0fa7861301",
"assets/img/icon.png": "e2e5b8579ee0ec4bee5f817c06761984",
"assets/img/pic_dc1.png": "f0816ce3c547fd91141647bbc1a8c14a",
"assets/LICENSE": "1a8aa6ff46a364d028459f85faba5869",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cc4119638547996485d8bc1967e1694a",
"/": "cc4119638547996485d8bc1967e1694a",
"main.dart.js": "c422b9764b69d26611daf8deb068547f",
"manifest.json": "b3284f9d05c55a03d2cd7578b58a85ac"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
