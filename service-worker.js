"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/event-calendar/index.html","88186942ea500b686d62100e913efe4b"],["/event-calendar/static/css/main.5cdc4ec6.css","bc5b0346bf0d66618426ca17fc967920"],["/event-calendar/static/js/main.72683d94.js","04986b2aee60dd7e9d66d834c1955468"],["/event-calendar/static/media/1.ca73719d.jpg","ca73719d083d775d40f893dc3555cfce"],["/event-calendar/static/media/10.43363517.jpg","43363517d86433fe22567c63ef891cb2"],["/event-calendar/static/media/11.e60a955d.jpg","e60a955db3e8020d3cc3c8899685da6c"],["/event-calendar/static/media/12.b50786b5.jpg","b50786b538009c8d081a3a184ca45593"],["/event-calendar/static/media/13.cd553158.jpg","cd55315869ae6d59d821699138a0c8b6"],["/event-calendar/static/media/14.a6f1bec9.jpg","a6f1bec9d9d03b3c8f52eb30c1b2a4e3"],["/event-calendar/static/media/15.2b53e262.jpg","2b53e2628f27eaf695f0cdc03d537871"],["/event-calendar/static/media/16.71aebda4.jpg","71aebda4ab1d90a565e90940824abf26"],["/event-calendar/static/media/17.9b507f91.jpg","9b507f9145d5d71c94f49f2fdf30aeaf"],["/event-calendar/static/media/18.318aeed6.jpg","318aeed6bf8d9c79e976226d91b5cb08"],["/event-calendar/static/media/19.b5c60e7c.jpg","b5c60e7ccb2186c6325be355b6f5b5fe"],["/event-calendar/static/media/2.d572ad32.jpg","d572ad32af4e4e661b415dd5eeb2806b"],["/event-calendar/static/media/20.f4c25f8b.jpg","f4c25f8b5a21e9e378a4f930c9af6553"],["/event-calendar/static/media/21.c6626d78.jpg","c6626d78150c138bbd3b754571bcef44"],["/event-calendar/static/media/23.1c01f2af.jpg","1c01f2af85cc739e2b0ba4db3022dd8d"],["/event-calendar/static/media/24.3453b154.jpg","3453b1545dd0cd2722ad1ff5015e9535"],["/event-calendar/static/media/25.688c6a86.jpg","688c6a860e208d308376fe32152db7e1"],["/event-calendar/static/media/26.8864bd06.jpg","8864bd064e44962d7aa4ccdf69b27d70"],["/event-calendar/static/media/3.1cf37c51.jpg","1cf37c518f5cfac5fdb4a059035697b0"],["/event-calendar/static/media/4.ccf61c15.jpg","ccf61c15b1e1ccee163d8ba037b7f4e4"],["/event-calendar/static/media/5.cbdd80fe.jpg","cbdd80fef384d2b7c3698122a290d901"],["/event-calendar/static/media/6.46e71853.jpg","46e71853226b526af9026651e5a6e3fe"],["/event-calendar/static/media/7.fa3f5736.jpg","fa3f57364c75061d011683a25a3d5f7a"],["/event-calendar/static/media/8.f8e4682a.jpg","f8e4682a7dc510071f7b4fd48c135938"],["/event-calendar/static/media/9.3504ad7b.jpg","3504ad7b3388db99bb53b9d1748d33e8"],["/event-calendar/static/media/btn.f8b590a7.png","f8b590a752ad1ba8cfac753c54c11e6a"],["/event-calendar/static/media/logo.6897d2d4.png","6897d2d4f123b621adc20910c2d59adb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/event-calendar/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});