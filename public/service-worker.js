const VERSION = 1;
const CACHE_NAME = `cache-${VERSION}`;
const STATIC_RESOURCES = ['/', '/index.html'];
const TARGET_FILE_EXTENSION = /\.(js|css|png|jpg|svg|ico|html|json)$/;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_RESOURCES);
      })
      .then(() => {
        self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache during install:', error);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .catch((error) => {
        console.error('Failed to clean up caches during activate:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  const isSameOrigin = event.request.url.startsWith(self.location.origin);
  const isGetRequest = event.request.method === 'GET';

  if (!isSameOrigin || !isGetRequest) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((fetchResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            if (event.request.url.match(TARGET_FILE_EXTENSION)) {
              cache.put(event.request, fetchResponse.clone());
            }

            return fetchResponse;
          });
        })
        .catch((error) => {
          console.error('Failed to fetch resource:', error);
        });
    })
  );
});
