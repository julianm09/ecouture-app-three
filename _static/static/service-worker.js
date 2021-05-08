try{self["workbox:core:5.1.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class a extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const c=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class i{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:a}=this.findMatchingRoute({url:s,request:e,event:t});let c,i=a&&a.handler;if(!i&&this.s&&(i=this.s),i){try{c=i.handle({url:s,request:e,event:t,params:n})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this.i&&(c=c.catch(n=>this.i.handle({url:s,request:e,event:t}))),c}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const a of n){let n;const c=a.match({url:e,request:t,event:s});if(c)return n=c,(Array.isArray(c)&&0===c.length||c.constructor===Object&&0===Object.keys(c).length||"boolean"==typeof c)&&(n=void 0),{route:a,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new i,r.addFetchListener(),r.addCacheListener()),r);const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},f=e=>[u.prefix,e,u.suffix].filter(e=>e&&e.length>0).join("-"),h=e=>e||f(u.precache),d=e=>e||f(u.runtime);function l(e){e.then(()=>{})}const b=new Set;class p{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.u=e,this.h=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.h);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:a,includeKeys:c=!1}={}){return await this.transaction([e],"readonly",(i,r)=>{const o=i.objectStore(e),u=t?o.index(t):o,f=[],h=u.openCursor(s,n);h.onsuccess=()=>{const e=h.result;e?(f.push(c?e:e.value),a&&f.length>=a?r(f):e.continue()):r(f)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,a)=>{const c=this.o.transaction(e,t);c.onabort=()=>a(c.error),c.oncomplete=()=>n(),s(c,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,a)=>{const c=s.objectStore(t),i=c[e].apply(c,n);i.onsuccess=()=>a(i.result)})}close(){this.o&&(this.o.close(),this.o=null)}}p.prototype.OPEN_TIMEOUT=2e3;const w={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(w))for(const s of t)s in IDBObjectStore.prototype&&(p.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}const g=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class y{constructor(e){this.m=e,this.o=new p("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=g(e),timestamp:t,cacheName:this.m,id:this._(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this._(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const a=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),c=[];let i=0;a.onsuccess=()=>{const s=a.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&i>=t?c.push(s.value):i++),s.continue()}else n(c)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}_(e){return this.m+"|"+g(e)}}class m{constructor(e,t={}){this.q=!1,this.k=!1,this.R=t.maxEntries,this.j=t.maxAgeSeconds,this.m=e,this.U=new y(e)}async expireEntries(){if(this.q)return void(this.k=!0);this.q=!0;const e=this.j?Date.now()-1e3*this.j:0,t=await this.U.expireEntries(e,this.R),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.q=!1,this.k&&(this.k=!1,l(this.expireEntries()))}async updateTimestamp(e){await this.U.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.j){return await this.U.getTimestamp(e)<Date.now()-1e3*this.j}return!1}async delete(){this.k=!1,await this.U.expireEntries(1/0)}}const v=(e,t)=>e.filter(e=>t in e),x=async({request:e,mode:t,plugins:s=[]})=>{const n=v(s,"cacheKeyWillBeUsed");let a=e;for(const e of n)a=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},q=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:a=[]})=>{const c=await self.caches.open(e),i=await x({plugins:a,request:t,mode:"read"});let r=await c.match(i,n);for(const t of a)if("cachedResponseWillBeUsed"in t){const a=t.cachedResponseWillBeUsed;r=await a.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:i})}return r},k=async({cacheName:e,request:s,response:n,event:a,plugins:i=[],matchOptions:r})=>{const o=await x({plugins:i,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:c(o.url)});const u=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let a=t,c=!1;for(const t of n)if("cacheWillUpdate"in t){c=!0;const n=t.cacheWillUpdate;if(a=await n.call(t,{request:e,response:a,event:s}),!a)break}return c||(a=a&&200===a.status?a:void 0),a||null})({event:a,plugins:i,response:n,request:o});if(!u)return;const f=await self.caches.open(e),h=v(i,"cacheDidUpdate"),d=h.length>0?await q({cacheName:e,matchOptions:r,request:o}):null;try{await f.put(o,u)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of b)await e()}(),e}for(const t of h)await t.cacheDidUpdate.call(t,{cacheName:e,event:a,oldResponse:d,newResponse:u,request:o})},R=q,j=async({request:e,fetchOptions:s,event:n,plugins:a=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const c=v(a,"fetchDidFail"),i=c.length>0?e.clone():null;try{for(const t of a)if("requestWillFetch"in t){const s=t.requestWillFetch,a=e.clone();e=await s.call(t,{request:a,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of a)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of c)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:i.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}const U={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let L;async function E(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,c=function(){if(void 0===L){const e=new Response("");if("body"in e)try{new Response(e.body),L=!0}catch(e){L=!1}L=!1}return L}()?s.body:await s.blob();return new Response(c,a)}try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}function N(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),c=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:c.href}}class M{constructor(e){this.m=h(e),this.L=new Map,this.N=new Map,this.M=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:a}=N(n),c="string"!=typeof n&&n.revision?"reload":"default";if(this.L.has(a)&&this.L.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.L.get(a),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.M.has(e)&&this.M.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this.M.set(e,n.integrity)}if(this.L.set(a,e),this.N.set(a,c),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],a=await self.caches.open(this.m),c=await a.keys(),i=new Set(c.map(e=>e.url));for(const[e,t]of this.L)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const a=this.M.get(s),c=this.N.get(n);return this.T({cacheKey:s,cacheMode:c,event:e,integrity:a,plugins:t,url:n})});await Promise.all(r);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.L.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async T({cacheKey:e,url:s,cacheMode:n,event:a,plugins:c,integrity:i}){const r=new Request(s,{integrity:i,cache:n,credentials:"same-origin"});let o,u=await j({event:a,plugins:c,request:r});for(const e of c||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:a,request:r,response:u}):u.status<400))throw new t("bad-precaching-response",{url:s,status:u.status});u.redirected&&(u=await E(u)),await k({event:a,plugins:c,response:u,request:e===s?r:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.L}getCachedURLs(){return[...this.L.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.L.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),a=new Request(e);return()=>n({request:a})}}let T;const K=()=>(T||(T=new M),T);const O=(e,t)=>{const s=K().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(c,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:c});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let P=!1;function D(e){P||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const a=h();self.addEventListener("fetch",c=>{const i=O(c.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return;let r=self.caches.open(a).then(e=>e.match(i)).then(e=>e||fetch(i));c.respondWith(r)})})(e),P=!0)}const I=[],C={get:()=>I,add(e){I.push(...e)}},S=e=>{const t=K(),s=C.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},A=e=>{const t=K();e.waitUntil(t.activate())};var F;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),F={},function(e){K().addToCacheList(e),e.length>0&&(self.addEventListener("install",S),self.addEventListener("activate",A))}([{url:"_next/static/FaaE3MrnUqyLQkIEwOSTl/_buildManifest.js",revision:"5ff4f6e4b411033ab9b29f9904989a54"},{url:"_next/static/FaaE3MrnUqyLQkIEwOSTl/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"_next/static/chunks/205ca35f8fead2189a2149e5f9a6d04d402cec37.efa9525e59e7d4d9ba83.js",revision:"19b718e64edb969bb80d9ba33244024c"},{url:"_next/static/chunks/292926cb4448b9fe325580fb3fdbc2a73426caca.b7b37861e122699ad6c5.js",revision:"1378ae8e486c0e807c17b531fbfa37e6"},{url:"_next/static/chunks/35e8d117fb9ad6434a439921cd37a1388cb9f462.477358d494a0ef5ee6b5.js",revision:"bca0891e06d17fd47c192bfb17b56aaa"},{url:"_next/static/chunks/4d9cea63bfc974522b2804445612738a99d8b820.bab7537e9dfcbe4e0c53.js",revision:"45c78d22578aa817bf68a39b0f9855c2"},{url:"_next/static/chunks/c961013c34aa41b3e5b904afbc32b54b8c6173fa.49e64d879291d116db14.js",revision:"f8f1931e9b22a1b8c69eeb84ddca6bce"},{url:"_next/static/chunks/d79e550b31379c67787bc990267d6c03dcdbf326.f67050eaa737f2c896c4.js",revision:"a8c84d4b9e4a666c378d30ddf9077e6a"},{url:"_next/static/chunks/f503105a20d9ad4da2347d395885449f7a26a127.b13e1f480bffde7fd71b.js",revision:"72609b7ad548943ffd0430d12fc22781"},{url:"_next/static/chunks/framework.900ff9a55f86e5377e8c.js",revision:"147fd4ed91ff17d009aad0f0979796c9"},{url:"_next/static/chunks/main-80d5fd1f5e176106c697.js",revision:"6299b4d44cbc163135102db54af014d1"},{url:"_next/static/chunks/pages/404-ee76e94c75377acbbe0a.js",revision:"fe8f08806fdfaede0ee827dd1777bedf"},{url:"_next/static/chunks/pages/500-5295420aaa7361531829.js",revision:"ebfd8e0e9e53a0b429346226a6fdcf88"},{url:"_next/static/chunks/pages/_app-eb2505351ab320dd092c.js",revision:"cf5aef68ce31e8d551f25eead558d9e0"},{url:"_next/static/chunks/pages/_error-3624e2d37837aa8b3ac8.js",revision:"96c7f8d462b67f56b60ba08fae19099b"},{url:"_next/static/chunks/pages/form1-0440dd3783c6e06ed8f3.js",revision:"4d79a0fc0af7e99ee70b275540a0ab39"},{url:"_next/static/chunks/pages/form2-16d0cc9291cf6a2d1070.js",revision:"3e1a36e59fc67ceaf35a0c08332c2b73"},{url:"_next/static/chunks/pages/form3-964b5b391c2b0add3533.js",revision:"d9cf170b18fbbb35e4d285ab5a0dff14"},{url:"_next/static/chunks/pages/form4-74a0db9b0d3d70b690be.js",revision:"39c0e87b86ab86998d9904e17b9f7d3e"},{url:"_next/static/chunks/pages/form5-ec6745ef3e8dca3c4b30.js",revision:"bb35a4eb9d688f216e12275c7e7c4f18"},{url:"_next/static/chunks/pages/home-bac7d1e10ef019cc1f8d.js",revision:"a279515045090fc6a1cb8a28b7540342"},{url:"_next/static/chunks/pages/ice-impact-8c4ea21b61a73f6e7051.js",revision:"3cdeac17d2f62322a702f1467426dc01"},{url:"_next/static/chunks/pages/impacts-1-1-f733d87024512feb1c50.js",revision:"124dc047ef7609a0a19ec0d3276872c2"},{url:"_next/static/chunks/pages/impacts-1-2-648b76f9d4674943ee81.js",revision:"f4f3a8213849b66441c127c0a60e4d2b"},{url:"_next/static/chunks/pages/impacts-1-3-dcb831c18145e1e8ed16.js",revision:"3b9432283e9f73aab1c92015858af03d"},{url:"_next/static/chunks/pages/impacts-2-1-a09078a3c137e9d09dce.js",revision:"3ad52551d97723851f41b5b5fabd29ac"},{url:"_next/static/chunks/pages/impacts-2-2-c60bc6e66fec56214bce.js",revision:"e1fc07737ff485193622ed18381bc6f2"},{url:"_next/static/chunks/pages/impacts-2-3-33111e6b95a8993eff3e.js",revision:"afff163b8b8979b74f7062d84301d6ab"},{url:"_next/static/chunks/pages/impacts-3-1-43f5f832d7e3d830ef7b.js",revision:"98365ef85273f2776ab3bef4879b6d15"},{url:"_next/static/chunks/pages/impacts-3-2-0db42fbb5052cc556ecb.js",revision:"2010e634c90ea771808ca11ad7318e39"},{url:"_next/static/chunks/pages/impacts-3-3-6a908f87818b6a095b3d.js",revision:"d2b16bf6f9e9b8152d9bfc47a006ba21"},{url:"_next/static/chunks/pages/impacts-4-1-d31b9a64f183c6424f4b.js",revision:"e61a06f78ed6bd88298cecf96c7b64db"},{url:"_next/static/chunks/pages/impacts-4-2-b642ad89eea951c183b4.js",revision:"619bc1b8dfb23c252c8b94455ed66100"},{url:"_next/static/chunks/pages/impacts-4-3-3365426fbbf6bb2cfbd3.js",revision:"892f25e0cd1555c322d0073e082ddc47"},{url:"_next/static/chunks/pages/index-2593c4448c6e2203ec2b.js",revision:"27b571e0702d11e82bb4ae6c9c807b1c"},{url:"_next/static/chunks/pages/intro-baa936399058b80771ec.js",revision:"394c3f0e9dbf0963d438f1d65fe06a89"},{url:"_next/static/chunks/pages/learn-b4b20555ce1b18e174df.js",revision:"13021a3a632132b88d3a6a56ffb2cd78"},{url:"_next/static/chunks/pages/loading-fd07952fefa1bf78d52f.js",revision:"508a8e5b29b381456e5720b730d2faef"},{url:"_next/static/chunks/pages/material-57727739b81abde5dd21.js",revision:"8079d8193eadce200bb2588fb4057ec0"},{url:"_next/static/chunks/pages/materials-7b49538739b69c6541f3.js",revision:"8267d1cfb9bc33460cc7de4e2580c84b"},{url:"_next/static/chunks/pages/results-d29710c233a97331a97c.js",revision:"271fdfb70ab3fde15adc71bdba41c5ec"},{url:"_next/static/chunks/pages/shops-eb1c579247864023f16b.js",revision:"98cf362a9918288cece06a62ec48d69f"},{url:"_next/static/chunks/pages/store-f629a0fa5548ffaeaef9.js",revision:"cb2b5af187994bc80279fb78857920c7"},{url:"_next/static/chunks/polyfills-c187b3492310cbd1eb58.js",revision:"0767c0de065419f9457dc7dc569f30e5"},{url:"_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"_next/static/css/20af85a82eea15c7efdc.css",revision:"8c544b843f01012faa471c30bb4599ed"}]),D(F),function(e,s,c){let i;if("string"==typeof e){const t=new URL(e,location.href);i=new n(({url:e})=>e.href===t.href,s,c)}else if(e instanceof RegExp)i=new a(e,s,c);else if("function"==typeof e)i=new n(e,s,c);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=e}o().registerRoute(i)}(/^https?.*/,new class{constructor(e={}){if(this.m=d(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.K=t?e.plugins:[U,...e.plugins]}else this.K=[U];this.O=e.networkTimeoutSeconds||0,this.P=e.fetchOptions,this.D=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const a=[];let c;if(this.O){const{id:t,promise:i}=this.I({request:s,event:e,logs:n});c=t,a.push(i)}const i=this.C({timeoutId:c,request:s,event:e,logs:n});a.push(i);let r=await Promise.race(a);if(r||(r=await i),!r)throw new t("no-response",{url:s.url});return r}I({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.S({request:e,event:s}))},1e3*this.O)}),id:n}}async C({timeoutId:e,request:t,logs:s,event:n}){let a,c;try{c=await j({request:t,event:n,fetchOptions:this.P,plugins:this.K})}catch(e){a=e}if(e&&clearTimeout(e),a||!c)c=await this.S({request:t,event:n});else{const e=c.clone(),s=k({cacheName:this.m,request:t,response:e,event:n,plugins:this.K});if(n)try{n.waitUntil(s)}catch(e){}}return c}S({event:e,request:t}){return R({cacheName:this.m,request:t,event:e,matchOptions:this.D,plugins:this.K})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this.A(n),c=this.F(s);l(c.expireEntries());const i=c.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.F(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.W=e,this.j=e.maxAgeSeconds,this.B=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),b.add(t))}F(e){if(e===d())throw new t("expire-custom-caches-only");let s=this.B.get(e);return s||(s=new m(e,this.W),this.B.set(e,s)),s}A(e){if(!this.j)return!0;const t=this.H(e);if(null===t)return!0;return t>=Date.now()-1e3*this.j}H(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.B)await self.caches.delete(e),await t.delete();this.B=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
