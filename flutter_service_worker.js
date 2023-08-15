'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9645a6fd56fe9843849b2011ab578d54",
"assets/AssetManifest.json": "f12684fe2c7527cccc5489a539495c4e",
"assets/assets/fonts/UIcons.ttf": "2ad6bee10ea3cc0484091a4d7f01ec04",
"assets/assets/images/covers/empty.png": "40f9d9e56fa3b4b5f3675d1647cfa4e8",
"assets/assets/images/covers/forest-light.png": "7a90f66e28325eaa917ad46b8730006f",
"assets/assets/images/covers/forest-walk.png": "c6f2bf3cab534abba5b1d8bea951a84b",
"assets/assets/images/covers/island.png": "1c5d0c70622bad8238e0a89adcf706d3",
"assets/assets/images/covers/light-rays.png": "f6654a06ef1e5f595cb65779812c9f01",
"assets/assets/images/covers/lighthouse.png": "8359b8f13010e93acaf85b64f1149746",
"assets/assets/images/covers/mic.png": "64deadef7a90c55f328a38dd667fc06e",
"assets/assets/images/covers/morning-light.png": "bd5a4e604eec70298b6a7ca8dfd047c5",
"assets/assets/images/covers/ocean-wave.png": "ce02f04a1f8089c88c455d78685de9a6",
"assets/assets/images/covers/plant-jar.png": "0b3495d1f13a71fc5e813c2333da3c0f",
"assets/assets/images/covers/plant-pot.png": "5e585519229bddb563927e8fa2564f1a",
"assets/assets/images/covers/vast-mountains.png": "ad96c87168ac0468c3e51df2ec7540bd",
"assets/assets/images/emojis/fruits/banana.png": "73cc848db676478a34e79720a743eb09",
"assets/assets/images/emojis/fruits/blueberries.png": "79f146654cea37973071a36b36bae37b",
"assets/assets/images/emojis/fruits/cherries.png": "f7d2c03f810be210a21550dd3d4d18d4",
"assets/assets/images/emojis/fruits/coconut.png": "149513705dd1c6d590def1757f9e771a",
"assets/assets/images/emojis/fruits/grapes.png": "83afbb3bcc8ec779e66d07b2495f9e25",
"assets/assets/images/emojis/fruits/green-apple.png": "1e5b6b26d03bf9f25ccda8e420cf1483",
"assets/assets/images/emojis/fruits/kiwi-fruit.png": "45e1bea7406add1c078be827d0cae9a9",
"assets/assets/images/emojis/fruits/lemon.png": "483ead925c3fbc0336f3f43db413f6fb",
"assets/assets/images/emojis/fruits/mango.png": "d4e56345e5f618130b9a90267558c00b",
"assets/assets/images/emojis/fruits/melon.png": "8d029c6f14662ca20a418e02b0d14a62",
"assets/assets/images/emojis/fruits/olive.png": "8ed89d2909a994112a3c9484957d1ae5",
"assets/assets/images/emojis/fruits/peach.png": "73bf8c913ba3d17fb6428ce09557374a",
"assets/assets/images/emojis/fruits/pear.png": "7bc7476c9b6275f6550fee9ccd7d2c4e",
"assets/assets/images/emojis/fruits/pineapple.png": "3c8a9f45610139ccf4bbe3233879ca54",
"assets/assets/images/emojis/fruits/red-apple.png": "b1048ac550bac1c81491c95671107523",
"assets/assets/images/emojis/fruits/strawberry.png": "dbfba29ef9942b02e661f013a0b1636c",
"assets/assets/images/emojis/fruits/tangerine.png": "e76936b781934a8150281be0000f8725",
"assets/assets/images/emojis/fruits/tomato.png": "65e1771a51c11b0900cd726428b65144",
"assets/assets/images/emojis/fruits/watermelon.png": "aa734d07049b095aab8dff635ccf7c72",
"assets/assets/images/emojis/warning.png": "83fcbf327a3c45aa3852b679b606877f",
"assets/assets/images/icons/launcher_icon.png": "9d1ac82a23d59d7fd5f90bd2f14e3e40",
"assets/assets/images/icons/splash_screen_icon_dark.png": "2b9d68ea81c9a8a9d4c792850e5b028d",
"assets/assets/images/icons/splash_screen_icon_light.png": "d4130f3a81fd9e2148ed97c8c9a0be1b",
"assets/assets/images/social_links/google_maps.png": "6b4ffe3b993cd8c2b6a4b37311993b4c",
"assets/assets/images/social_links/youtube.png": "769c47a6777b82a82c3152ec2efe97a6",
"assets/assets/images/social_links/zoom.png": "3c40a4def73b4ed97ab46273e39aa625",
"assets/FontManifest.json": "b9fe21b8b8574af13fc99911c90319c1",
"assets/fonts/MaterialIcons-Regular.otf": "dae28b3a5cb032e41edb7a2ea0a00aba",
"assets/NOTICES": "af0c802dc26044fc207bd9576ea3bbf7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e0ff7003281bcba43063c9352a866c9",
"/": "1e0ff7003281bcba43063c9352a866c9",
"main.dart.js": "64814892374fdd6b29666a15f9239a86",
"manifest.json": "73c5e8b095859efb7e568b162989bd1c",
"version.json": "3492b8365abd858fb8581e664d66a0e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
