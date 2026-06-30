/**
 * Widget Pilot Wealth Tool - Progressive Web App Service Worker
 * File: sw.js
 */

const CACHE_NAME = 'pilot-wealth-cache-v4'; // <-- Increment this every time you change your code!

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './app.html',
    './app2.html',
    './app.js',
    './script.js',
    './storage.js',
    './style.css',
    './images/airplanesunset.jpeg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Offline Engine: Securing structural storage blocks...');
            return Promise.all(
                ASSETS_TO_CACHE.map(url => {
                    return cache.add(url).catch(err => {
                        console.warn(`Offline Engine: Skipping optional asset download: ${url}`, err);
                    });
                })
            );
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('Offline Engine: Discarding expired cache files:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (!event.request.url.startsWith('http')) return;

    // Handle external telemetry/scripts safely
    if (event.request.url.includes('script.js') && !event.request.url.includes('./script.js')) {
        event.respondWith(
            fetch(event.request).catch(() => {
                return new Response('// Telemetry engine paused offline.', {
                    headers: { 'Content-Type': 'application/javascript' }
                });
            })
        );
        return;
    }

    // STRATEGY 1: Network-First for HTML Files (Ensures updates to your pages load instantly)
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
                    return networkResponse;
                })
                .catch(() => {
                    // Fallback to cache if user is completely offline
                    return caches.match(event.request) || caches.match('./index.html');
                })
        );
        return;
    }

    // STRATEGY 2: Stale-While-Revalidate for JS, CSS, and Images
    // Serves the cache immediately for speed, but fetches the updated version in the background for the next visit.
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
                }
                return networkResponse;
            }).catch(() => {
                // Return fallback if network fails completely
                return cachedResponse;
            });

            return cachedResponse || fetchPromise;
        })
    );
});
