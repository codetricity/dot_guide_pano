'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "29734ea74d9f64e934d02ebbc7d69b50",
"/": "29734ea74d9f64e934d02ebbc7d69b50",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/AssetManifest.bin.json": "d4fd405b732acbe0dc5b17de2d554d66",
"assets/assets/images/bunker.jpeg": "da09c2ce275a7242a290033a9fc79d62",
"assets/assets/images/dock.jpg": "d7f0664a386e0b90599404b82f26b72c",
"assets/assets/images/carlsbad.jpg": "31eb7156ceb841f233a0df48b7240ecc",
"assets/assets/images/thumbs/carlsbad_nps_thumb.webp": "59ca303798e3e3db2364ccebbf4d889a",
"assets/assets/images/thumbs/planet_thumb.webp": "561e7a0e1f8a33868f1b05cb1369ca09",
"assets/assets/images/thumbs/bunker_thumb.webp": "ad06ad8876fe97c545e7e09be157fcf0",
"assets/assets/images/thumbs/trees_thumb.webp": "af35a12ed5353430e2283f97eb108a33",
"assets/assets/images/thumbs/room_thumb.webp": "c1e2388d2e7211e02434f8f009f837ac",
"assets/assets/images/thumbs/boat_thumb.webp": "027814a779c119a8cddf46eb790f9d16",
"assets/assets/images/thumbs/dock_thumb.webp": "7416f4c9106bc241b376b9a2fa8ad5af",
"assets/assets/images/thumbs/carlsbad_thumb.jpg": "31eb7156ceb841f233a0df48b7240ecc",
"assets/assets/images/thumbs/game_world_thumb.webp": "8d2903d7f125d8a9fd41b591aa8c09a9",
"assets/assets/images/thumbs/mountain_thumb.webp": "bdfba4c83814ee875e1bcc322d0237f9",
"assets/assets/images/thumbs/balcony_water_thumb.webp": "4eaf4cdb8044d43bc095af12ed4f8a6c",
"assets/assets/images/thumbs/lagoon_thumb.webp": "2f2219dc015dbaca2ab54ee990de30ad",
"assets/assets/images/thumbs/grocery_thumb.webp": "123b0eb51fb33baf92a42ad4eca55d7e",
"assets/assets/images/game_world.jpeg": "4e5bc92e0c4b2a21829470f274cc5b46",
"assets/assets/images/balcony_water.jpg": "1d7bcdd0c85e615a9ef97addc7370dee",
"assets/assets/images/grocery.jpeg": "35f12aa9bbdbb96cc436bbd891490cba",
"assets/assets/images/trees.jpeg": "5168e9902b4110f1ec1495e69b7a402c",
"assets/assets/images/room.jpeg": "704986dfa8f130d2e248e303ea34775a",
"assets/assets/images/boat.jpg": "e20ee98993d3898828b789298e72a558",
"assets/assets/images/planet.jpeg": "28c564d8ad9e50abb85540861b64fc0c",
"assets/assets/images/carlsbad_nps.jpg": "d61dda77e0b346a1145057e260458117",
"assets/assets/images/mountain.jpg": "c192c9661d39e6ac9c0cfb310d5049ec",
"assets/assets/images/lagoon.jpg": "18a4d5da48cc7e0236c919d6181acdb2",
"assets/AssetManifest.bin": "4405c47c78fdb3b6b0b6ef6bdad491a9",
"assets/NOTICES": "430e943763c8c6773490547c1bf12c7d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "79483362f518ae6dd1ec6707d60e4d84",
"version.json": "5b82ca5bc0c01b82d40718ce27b89a42",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/favicon.ico": "7b286019abb9e8199deaf37adab308d6",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "acfb52fee4ef0d8a0f6eaa357f059744",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "2910d9b84c215fde59dc74092eca8b3b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
