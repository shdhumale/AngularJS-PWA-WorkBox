import {skipWaiting, clientsClaim} from 'workbox-core';
import {precacheAndRoute, cleanupOutdatedCaches} from 'workbox-precaching';
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { registerRoute, NavigationRoute } from "workbox-routing";
import { NetworkFirst, NetworkOnly, StaleWhileRevalidate, CacheFirst } from "workbox-strategies";
declare const self: ServiceWorkerGlobalScope;
skipWaiting();
clientsClaim();
cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);
const DAY_IN_SECONDS = 24 * 60 * 60;
const MONTH_IN_SECONDS = DAY_IN_SECONDS * 30;
const YEAR_IN_SECONDS = DAY_IN_SECONDS * 365;
registerRoute(
  'https://jsonplaceholder.typicode.com/posts',
  new CacheFirst({
    cacheName: "json-data",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: YEAR_IN_SECONDS,
        maxEntries: 30,
        purgeOnQuotaError: true, // Automatically cleanup if quota is exceeded.
      }),
    ],
  }),
);
