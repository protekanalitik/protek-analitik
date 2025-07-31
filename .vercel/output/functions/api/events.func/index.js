
  
  globalThis._ENTRIES = {};
/**/;self.__BUILD_MANIFEST={"polyfillFiles":["static/chunks/polyfills-c67a75d1b6f99dc8.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/hUOJ7JM78aj_JYXmrfA7O/_buildManifest.js","static/hUOJ7JM78aj_JYXmrfA7O/_ssgManifest.js"],"rootMainFiles":["static/chunks/webpack-082a31737c7af4fd.js","static/chunks/fd9d1056-394c4b9237b372cc.js","static/chunks/993-f208a90c58704b1a.js","static/chunks/main-app-b5434e56c2b0ff6f.js"],"pages":{"/_app":["static/chunks/webpack-082a31737c7af4fd.js","static/chunks/framework-b566207abf043e2e.js","static/chunks/main-4b83e750c2a7d2a0.js","static/chunks/pages/_app-11c09b1e93f7270c.js"],"/_error":["static/chunks/webpack-082a31737c7af4fd.js","static/chunks/framework-b566207abf043e2e.js","static/chunks/main-4b83e750c2a7d2a0.js","static/chunks/pages/_error-7ae0e5d1f9ec0862.js"]},"ampFirstPages":[]}
/**/;self.__REACT_LOADABLE_MANIFEST="{}"
/**/;self.__NEXT_FONT_MANIFEST="{\"pages\":{},\"app\":{},\"appUsingSizeAdjust\":false,\"pagesUsingSizeAdjust\":false}"
/**/;self.__PRERENDER_MANIFEST="{\"version\":4,\"routes\":{},\"dynamicRoutes\":{},\"notFoundRoutes\":[],\"preview\":{\"previewModeId\":\"fe11fd6082bfe6b31bf9f0dbdb1ad9f8\",\"previewModeSigningKey\":\"e5b3ea9ab0b2cb08800175890eb0ea8a4e8796df9f290dd1512c8f8273e55277\",\"previewModeEncryptionKey\":\"70864eaa20a4f805778c2dff61ddbbad6cbb2aab21c7b78d3ba0604305c70b58\"}}"
/**/;/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			993: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;
//# sourceMappingURL=edge-runtime-webpack.js.map
/**/;(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[643],{

/***/ 2067:
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ 6195:
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ 2751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ComponentMod: () => (/* binding */ ComponentMod),
  "default": () => (/* binding */ next_edge_app_route_loaderabsolutePagePath_private_next_app_dir_2Fapi_2Fevents_2Froute_ts_page_2Fapi_2Fevents_2Froute_appDirLoader_bmV4dC1hcHAtbG9hZGVyP25hbWU9YXBwJTJGYXBpJTJGZXZlbnRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZldmVudHMlMkZyb3V0ZSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmV2ZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRlbml6aGFuJTJGRG9jdW1lbnRzJTJGV2luZHN1cmYlMkZwcm90ZWthbmFsaXRpayUyRnNyYyUyRmFwcCZhcHBQYXRocz0lMkZhcGklMkZldmVudHMlMkZyb3V0ZSZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0Qh_nextConfigOutput_standalone_preferredRegion_middlewareConfig_e30_3D_)
});

// NAMESPACE OBJECT: ./src/app/api/events/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST),
  dynamic: () => (dynamic),
  runtime: () => (runtime)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=%2FUsers%2Fdenizhan%2FDocuments%2FWindsurf%2Fprotekanalitik%2Fsrc%2Fapp&appPaths=%2Fapi%2Fevents%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!./src/app/api/events/route.ts?__next_edge_ssr_entry__
var route_next_edge_ssr_entry_namespaceObject = {};
__webpack_require__.r(route_next_edge_ssr_entry_namespaceObject);
__webpack_require__.d(route_next_edge_ssr_entry_namespaceObject, {
  headerHooks: () => (headerHooks),
  originalPathname: () => (originalPathname),
  patchFetch: () => (patchFetch),
  requestAsyncStorage: () => (requestAsyncStorage),
  routeModule: () => (routeModule),
  serverHooks: () => (serverHooks),
  staticGenerationAsyncStorage: () => (staticGenerationAsyncStorage),
  staticGenerationBailout: () => (staticGenerationBailout)
});

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/edge-route-module-wrapper.js + 32 modules
var edge_route_module_wrapper = __webpack_require__(1774);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/module.compiled.js
var module_compiled = __webpack_require__(8381);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/future/route-kind.js
var route_kind = __webpack_require__(2251);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(9845);
// EXTERNAL MODULE: ./src/lib/auth.ts + 69 modules
var auth = __webpack_require__(4110);
// EXTERNAL MODULE: ./src/lib/database.ts
var database = __webpack_require__(3442);
// EXTERNAL MODULE: ./src/lib/api-response.ts
var api_response = __webpack_require__(119);
// EXTERNAL MODULE: ./src/lib/db.ts
var lib_db = __webpack_require__(4193);
;// CONCATENATED MODULE: ./src/app/api/events/route.ts

// Force dynamic rendering to prevent static generation errors
const dynamic = "force-dynamic";
// Use Edge Runtime for Cloudflare Pages compatibility
const runtime = "edge";



// Mock data for development (when D1 is not available)
const MOCK_EVENTS = [
    {
        id: "event-1",
        title: "G\xfcvenlik Teknolojileri Semineri",
        slug: "guvenlik-teknolojileri-semineri",
        description: "Modern g\xfcvenlik teknolojileri ve uygulamaları hakkında kapsamlı seminer",
        content: "Bu seminerde son teknoloji g\xfcvenlik \xe7\xf6z\xfcmlerini ve uygulamalarını detaylı olarak inceleyeceğiz.",
        event_type: "seminer",
        start_date: "2024-02-15",
        end_date: "2024-02-15",
        location: "İstanbul Kongre Merkezi",
        address: "Harbiye, İstanbul",
        registration_url: "https://example.com/register",
        max_participants: 100,
        current_participants: 45,
        image_url: "/images/events/security-seminar.jpg",
        tags: "g\xfcvenlik,teknoloji,seminer",
        is_featured: true,
        is_published: true,
        registration_required: true,
        is_online: false,
        meeting_link: "",
        meta_title: "G\xfcvenlik Teknolojileri Semineri - Protek Analitik",
        meta_description: "Modern g\xfcvenlik teknolojileri semineri",
        meta_keywords: "g\xfcvenlik,teknoloji,seminer",
        created_at: "2024-01-15T10:00:00Z",
        updated_at: "2024-01-15T10:00:00Z",
        created_by: "admin"
    },
    {
        id: "event-2",
        title: "Online Webinar: Siber G\xfcvenlik",
        slug: "online-webinar-siber-guvenlik",
        description: "Siber g\xfcvenlik tehditleri ve korunma y\xf6ntemleri",
        content: "Siber g\xfcvenlik alanındaki en g\xfcncel tehditler ve korunma stratejilerini ele alacağımız webinar.",
        event_type: "webinar",
        start_date: "2024-03-01",
        end_date: "2024-03-01",
        location: "Online",
        address: "",
        registration_url: "https://example.com/webinar",
        max_participants: 500,
        current_participants: 234,
        image_url: "/images/events/cyber-security-webinar.jpg",
        tags: "siber g\xfcvenlik,webinar,online",
        is_featured: false,
        is_published: true,
        registration_required: true,
        is_online: true,
        meeting_link: "https://zoom.us/meeting/123",
        meta_title: "Siber G\xfcvenlik Webinarı - Protek Analitik",
        meta_description: "Siber g\xfcvenlik tehditleri ve korunma y\xf6ntemleri webinarı",
        meta_keywords: "siber g\xfcvenlik,webinar,online",
        created_at: "2024-01-20T14:00:00Z",
        updated_at: "2024-01-20T14:00:00Z",
        created_by: "admin"
    }
];
// Get all events (requires authentication)
async function GET(request) {
    try {
        // Authentication check
        const accessToken = request.cookies.get("accessToken")?.value || request.headers.get("authorization")?.replace("Bearer ", "");
        if (!accessToken) {
            return api_response/* AuthErrors */.C4.MISSING_TOKEN();
        }
        const authResult = await auth/* AuthService */.e8.verifyAccessToken(accessToken);
        if (!authResult.success) {
            return api_response/* AuthErrors */.C4.INVALID_TOKEN();
        }
        // Get database connection
        const db = (0,lib_db/* getD1Database */.j)();
        let events = [];
        if (db) {
            try {
                // Query events from D1 database
                const result = await db.prepare(`
          SELECT * FROM events 
          ORDER BY start_date DESC, created_at DESC
        `).all();
                events = result.results || [];
                console.log(`Fetched ${events.length} events from D1 database`);
            } catch (dbError) {
                console.error("D1 query error:", dbError);
                // Fall back to mock data
                events = MOCK_EVENTS;
                console.log("Using mock events data due to D1 error");
            }
        } else {
            // Use mock data in development
            events = MOCK_EVENTS;
            console.log("Using mock events data (D1 not available)");
        }
        return (0,api_response/* createSuccessResponse */.x_)(events, "Events fetched successfully", {
            total: events.length,
            lastUpdated: new Date().toISOString()
        });
    } catch (error) {
        console.error("Events fetch error:", error);
        return api_response/* CommonErrors */.Gl.SERVER_ERROR("Failed to fetch events");
    }
}
// Create new event
async function POST(request) {
    try {
        // Authentication check
        const accessToken = request.cookies.get("accessToken")?.value || request.headers.get("authorization")?.replace("Bearer ", "");
        if (!accessToken) {
            return api_response/* AuthErrors */.C4.MISSING_TOKEN();
        }
        const authResult = await auth/* AuthService */.e8.verifyAccessToken(accessToken);
        if (!authResult.success) {
            return api_response/* AuthErrors */.C4.INVALID_TOKEN();
        }
        // Check permissions
        if (!auth/* AuthService */.e8.hasRole(authResult.user, "editor")) {
            return api_response/* AuthErrors */.C4.INSUFFICIENT_PERMISSIONS();
        }
        const eventData = await request.json();
        // Validate required fields
        const requiredFields = [
            "title",
            "event_type",
            "start_date"
        ];
        const validation = (0,api_response/* validateRequiredFields */.MN)(eventData, requiredFields);
        if (!validation.isValid) {
            return (0,api_response/* createErrorResponse */.jl)(`Missing required fields: ${validation.missingFields.join(", ")}`, "MISSING_REQUIRED_FIELDS", 400);
        }
        // Validate data types and formats
        const errors = [];
        if (typeof eventData.title !== "string" || eventData.title.trim().length < 5) {
            errors.push("Title must be at least 5 characters long");
        }
        if (![
            "seminer",
            "webinar",
            "fuar",
            "egitim",
            "konferans"
        ].includes(eventData.event_type)) {
            errors.push("Invalid event type. Must be one of: seminer, webinar, fuar, egitim, konferans");
        }
        // Validate start date
        const startDate = new Date(eventData.start_date);
        if (isNaN(startDate.getTime())) {
            errors.push("Invalid start date format");
        }
        // Validate end date if provided
        if (eventData.end_date) {
            const endDate = new Date(eventData.end_date);
            if (isNaN(endDate.getTime())) {
                errors.push("Invalid end date format");
            } else if (endDate <= startDate) {
                errors.push("End date must be after start date");
            }
        }
        // Validate participant limits
        if (eventData.max_participants && (isNaN(eventData.max_participants) || eventData.max_participants < 1)) {
            errors.push("Max participants must be a positive number");
        }
        if (errors.length > 0) {
            return (0,api_response/* createErrorResponse */.jl)("Validation failed", "VALIDATION_ERROR", 400, {
                errors
            });
        }
        // Generate ID and slug
        const eventId = eventData.id || database/* DatabaseUtils */.l3.generateId();
        const slug = eventData.slug || database/* DatabaseUtils */.l3.generateSlug(eventData.title);
        // Get database connection
        const db = (0,lib_db/* getD1Database */.j)();
        if (db) {
            try {
                // Check for duplicate slug in D1
                const existingEvent = await db.prepare("SELECT id FROM events WHERE slug = ?").bind(slug).first();
                if (existingEvent) {
                    return (0,api_response/* createErrorResponse */.jl)("An event with this slug already exists", "DUPLICATE_SLUG", 409);
                }
                // Create event with metadata
                const now = database/* DatabaseUtils */.l3.formatDate();
                const newEvent = {
                    id: eventId,
                    title: eventData.title.trim(),
                    slug,
                    description: eventData.description?.trim() || "",
                    content: eventData.content ? database/* ValidationUtils */.v$.sanitizeHtml(eventData.content) : "",
                    event_type: eventData.event_type,
                    start_date: eventData.start_date,
                    end_date: eventData.end_date || null,
                    location: eventData.location?.trim() || "",
                    address: eventData.address?.trim() || "",
                    registration_url: eventData.registration_url || "",
                    max_participants: eventData.max_participants || null,
                    current_participants: 0,
                    image_url: eventData.image_url || "",
                    tags: typeof eventData.tags === "string" ? eventData.tags : JSON.stringify(eventData.tags || []),
                    is_featured: Boolean(eventData.is_featured) ? 1 : 0,
                    is_published: eventData.is_published !== false ? 1 : 0,
                    registration_required: Boolean(eventData.registration_required) ? 1 : 0,
                    is_online: Boolean(eventData.is_online) ? 1 : 0,
                    meeting_link: eventData.meeting_link || "",
                    meta_title: eventData.meta_title || eventData.title,
                    meta_description: eventData.meta_description || eventData.description || eventData.title,
                    meta_keywords: eventData.meta_keywords || "",
                    created_at: now,
                    updated_at: now,
                    created_by: authResult.user.id
                };
                // Insert into D1 database
                await db.prepare(`
          INSERT INTO events (
            id, title, slug, description, content, event_type, start_date, end_date,
            location, address, registration_url, max_participants, current_participants,
            image_url, tags, is_featured, is_published, registration_required, is_online,
            meeting_link, meta_title, meta_description, meta_keywords,
            created_at, updated_at, created_by
          ) VALUES (
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
          )
        `).bind(newEvent.id, newEvent.title, newEvent.slug, newEvent.description, newEvent.content, newEvent.event_type, newEvent.start_date, newEvent.end_date, newEvent.location, newEvent.address, newEvent.registration_url, newEvent.max_participants, newEvent.current_participants, newEvent.image_url, newEvent.tags, newEvent.is_featured, newEvent.is_published, newEvent.registration_required, newEvent.is_online, newEvent.meeting_link, newEvent.meta_title, newEvent.meta_description, newEvent.meta_keywords, newEvent.created_at, newEvent.updated_at, newEvent.created_by).run();
                console.log(`Event created in D1: ${newEvent.id} by user ${authResult.user.username}`);
                // Return response with proper data format
                const responseEvent = {
                    ...newEvent,
                    is_featured: Boolean(newEvent.is_featured),
                    is_published: Boolean(newEvent.is_published),
                    registration_required: Boolean(newEvent.registration_required),
                    is_online: Boolean(newEvent.is_online)
                };
                return api_response/* DatabaseResponses */.$X.CREATED(responseEvent, "Event");
            } catch (dbError) {
                console.error("D1 event creation error:", dbError);
                return api_response/* CommonErrors */.Gl.SERVER_ERROR("Failed to save event to database");
            }
        } else {
            // Fallback for development - return mock success
            console.log("D1 not available, returning mock event creation success");
            const mockEvent = {
                id: eventId,
                title: eventData.title.trim(),
                slug,
                description: eventData.description?.trim() || "",
                event_type: eventData.event_type,
                start_date: eventData.start_date,
                created_at: database/* DatabaseUtils */.l3.formatDate(),
                updated_at: database/* DatabaseUtils */.l3.formatDate()
            };
            return api_response/* DatabaseResponses */.$X.CREATED(mockEvent, "Event");
        }
    } catch (error) {
        console.error("Event creation error:", error);
        return api_response/* CommonErrors */.Gl.SERVER_ERROR("Failed to create event");
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=%2FUsers%2Fdenizhan%2FDocuments%2FWindsurf%2Fprotekanalitik%2Fsrc%2Fapp&appPaths=%2Fapi%2Fevents%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!./src/app/api/events/route.ts?__next_edge_ssr_entry__




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new module_compiled.AppRouteRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.APP_ROUTE,
        page: "/api/events/route",
        pathname: "/api/events",
        filename: "route",
        bundlePath: "app/api/events/route"
    },
    resolvedPagePath: "/Users/denizhan/Documents/Windsurf/protekanalitik/src/app/api/events/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;
const originalPathname = "/api/events/route";
function patchFetch() {
    return (0,patch_fetch/* patchFetch */.XH)({
        serverHooks,
        staticGenerationAsyncStorage
    });
}


//# sourceMappingURL=app-route.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-edge-app-route-loader/index.js?absolutePagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&page=%2Fapi%2Fevents%2Froute&appDirLoader=bmV4dC1hcHAtbG9hZGVyP25hbWU9YXBwJTJGYXBpJTJGZXZlbnRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZldmVudHMlMkZyb3V0ZSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmV2ZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRlbml6aGFuJTJGRG9jdW1lbnRzJTJGV2luZHN1cmYlMkZwcm90ZWthbmFsaXRpayUyRnNyYyUyRmFwcCZhcHBQYXRocz0lMkZhcGklMkZldmVudHMlMkZyb3V0ZSZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0Qh&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

// Import the userland code.

const ComponentMod = route_next_edge_ssr_entry_namespaceObject;
/* harmony default export */ const next_edge_app_route_loaderabsolutePagePath_private_next_app_dir_2Fapi_2Fevents_2Froute_ts_page_2Fapi_2Fevents_2Froute_appDirLoader_bmV4dC1hcHAtbG9hZGVyP25hbWU9YXBwJTJGYXBpJTJGZXZlbnRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZldmVudHMlMkZyb3V0ZSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmV2ZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRlbml6aGFuJTJGRG9jdW1lbnRzJTJGV2luZHN1cmYlMkZwcm90ZWthbmFsaXRpayUyRnNyYyUyRmFwcCZhcHBQYXRocz0lMkZhcGklMkZldmVudHMlMkZyb3V0ZSZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0Qh_nextConfigOutput_standalone_preferredRegion_middlewareConfig_e30_3D_ = (edge_route_module_wrapper/* EdgeRouteModuleWrapper */.a.wrap(routeModule));

//# sourceMappingURL=edge-app-route.js.map

/***/ }),

/***/ 9462:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 2075:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __dirname = "/";
(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : __webpack_require__.g;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();


/***/ }),

/***/ 9577:
/***/ ((module) => {

var __dirname = "/";
(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();


/***/ }),

/***/ 2834:
/***/ ((module) => {

var __dirname = "/";
(()=>{
    "use strict";
    var t = {
        806: (t, e, i)=>{
            const s = i(190);
            const n = Symbol("max");
            const l = Symbol("length");
            const r = Symbol("lengthCalculator");
            const h = Symbol("allowStale");
            const a = Symbol("maxAge");
            const o = Symbol("dispose");
            const u = Symbol("noDisposeOnSet");
            const f = Symbol("lruList");
            const p = Symbol("cache");
            const v = Symbol("updateAgeOnGet");
            const naiveLength = ()=>1;
            class LRUCache {
                constructor(t){
                    if (typeof t === "number") t = {
                        max: t
                    };
                    if (!t) t = {};
                    if (t.max && (typeof t.max !== "number" || t.max < 0)) throw new TypeError("max must be a non-negative number");
                    const e = this[n] = t.max || Infinity;
                    const i = t.length || naiveLength;
                    this[r] = typeof i !== "function" ? naiveLength : i;
                    this[h] = t.stale || false;
                    if (t.maxAge && typeof t.maxAge !== "number") throw new TypeError("maxAge must be a number");
                    this[a] = t.maxAge || 0;
                    this[o] = t.dispose;
                    this[u] = t.noDisposeOnSet || false;
                    this[v] = t.updateAgeOnGet || false;
                    this.reset();
                }
                set max(t) {
                    if (typeof t !== "number" || t < 0) throw new TypeError("max must be a non-negative number");
                    this[n] = t || Infinity;
                    trim(this);
                }
                get max() {
                    return this[n];
                }
                set allowStale(t) {
                    this[h] = !!t;
                }
                get allowStale() {
                    return this[h];
                }
                set maxAge(t) {
                    if (typeof t !== "number") throw new TypeError("maxAge must be a non-negative number");
                    this[a] = t;
                    trim(this);
                }
                get maxAge() {
                    return this[a];
                }
                set lengthCalculator(t) {
                    if (typeof t !== "function") t = naiveLength;
                    if (t !== this[r]) {
                        this[r] = t;
                        this[l] = 0;
                        this[f].forEach((t)=>{
                            t.length = this[r](t.value, t.key);
                            this[l] += t.length;
                        });
                    }
                    trim(this);
                }
                get lengthCalculator() {
                    return this[r];
                }
                get length() {
                    return this[l];
                }
                get itemCount() {
                    return this[f].length;
                }
                rforEach(t, e) {
                    e = e || this;
                    for(let i = this[f].tail; i !== null;){
                        const s = i.prev;
                        forEachStep(this, t, i, e);
                        i = s;
                    }
                }
                forEach(t, e) {
                    e = e || this;
                    for(let i = this[f].head; i !== null;){
                        const s = i.next;
                        forEachStep(this, t, i, e);
                        i = s;
                    }
                }
                keys() {
                    return this[f].toArray().map((t)=>t.key);
                }
                values() {
                    return this[f].toArray().map((t)=>t.value);
                }
                reset() {
                    if (this[o] && this[f] && this[f].length) {
                        this[f].forEach((t)=>this[o](t.key, t.value));
                    }
                    this[p] = new Map;
                    this[f] = new s;
                    this[l] = 0;
                }
                dump() {
                    return this[f].map((t)=>isStale(this, t) ? false : {
                            k: t.key,
                            v: t.value,
                            e: t.now + (t.maxAge || 0)
                        }).toArray().filter((t)=>t);
                }
                dumpLru() {
                    return this[f];
                }
                set(t, e, i) {
                    i = i || this[a];
                    if (i && typeof i !== "number") throw new TypeError("maxAge must be a number");
                    const s = i ? Date.now() : 0;
                    const h = this[r](e, t);
                    if (this[p].has(t)) {
                        if (h > this[n]) {
                            del(this, this[p].get(t));
                            return false;
                        }
                        const r = this[p].get(t);
                        const a = r.value;
                        if (this[o]) {
                            if (!this[u]) this[o](t, a.value);
                        }
                        a.now = s;
                        a.maxAge = i;
                        a.value = e;
                        this[l] += h - a.length;
                        a.length = h;
                        this.get(t);
                        trim(this);
                        return true;
                    }
                    const v = new Entry(t, e, h, s, i);
                    if (v.length > this[n]) {
                        if (this[o]) this[o](t, e);
                        return false;
                    }
                    this[l] += v.length;
                    this[f].unshift(v);
                    this[p].set(t, this[f].head);
                    trim(this);
                    return true;
                }
                has(t) {
                    if (!this[p].has(t)) return false;
                    const e = this[p].get(t).value;
                    return !isStale(this, e);
                }
                get(t) {
                    return get(this, t, true);
                }
                peek(t) {
                    return get(this, t, false);
                }
                pop() {
                    const t = this[f].tail;
                    if (!t) return null;
                    del(this, t);
                    return t.value;
                }
                del(t) {
                    del(this, this[p].get(t));
                }
                load(t) {
                    this.reset();
                    const e = Date.now();
                    for(let i = t.length - 1; i >= 0; i--){
                        const s = t[i];
                        const n = s.e || 0;
                        if (n === 0) this.set(s.k, s.v);
                        else {
                            const t = n - e;
                            if (t > 0) {
                                this.set(s.k, s.v, t);
                            }
                        }
                    }
                }
                prune() {
                    this[p].forEach((t, e)=>get(this, e, false));
                }
            }
            const get = (t, e, i)=>{
                const s = t[p].get(e);
                if (s) {
                    const e = s.value;
                    if (isStale(t, e)) {
                        del(t, s);
                        if (!t[h]) return undefined;
                    } else {
                        if (i) {
                            if (t[v]) s.value.now = Date.now();
                            t[f].unshiftNode(s);
                        }
                    }
                    return e.value;
                }
            };
            const isStale = (t, e)=>{
                if (!e || !e.maxAge && !t[a]) return false;
                const i = Date.now() - e.now;
                return e.maxAge ? i > e.maxAge : t[a] && i > t[a];
            };
            const trim = (t)=>{
                if (t[l] > t[n]) {
                    for(let e = t[f].tail; t[l] > t[n] && e !== null;){
                        const i = e.prev;
                        del(t, e);
                        e = i;
                    }
                }
            };
            const del = (t, e)=>{
                if (e) {
                    const i = e.value;
                    if (t[o]) t[o](i.key, i.value);
                    t[l] -= i.length;
                    t[p].delete(i.key);
                    t[f].removeNode(e);
                }
            };
            class Entry {
                constructor(t, e, i, s, n){
                    this.key = t;
                    this.value = e;
                    this.length = i;
                    this.now = s;
                    this.maxAge = n || 0;
                }
            }
            const forEachStep = (t, e, i, s)=>{
                let n = i.value;
                if (isStale(t, n)) {
                    del(t, i);
                    if (!t[h]) n = undefined;
                }
                if (n) e.call(s, n.value, n.key, t);
            };
            t.exports = LRUCache;
        },
        76: (t)=>{
            t.exports = function(t) {
                t.prototype[Symbol.iterator] = function*() {
                    for(let t = this.head; t; t = t.next){
                        yield t.value;
                    }
                };
            };
        },
        190: (t, e, i)=>{
            t.exports = Yallist;
            Yallist.Node = Node;
            Yallist.create = Yallist;
            function Yallist(t) {
                var e = this;
                if (!(e instanceof Yallist)) {
                    e = new Yallist;
                }
                e.tail = null;
                e.head = null;
                e.length = 0;
                if (t && typeof t.forEach === "function") {
                    t.forEach(function(t) {
                        e.push(t);
                    });
                } else if (arguments.length > 0) {
                    for(var i = 0, s = arguments.length; i < s; i++){
                        e.push(arguments[i]);
                    }
                }
                return e;
            }
            Yallist.prototype.removeNode = function(t) {
                if (t.list !== this) {
                    throw new Error("removing node which does not belong to this list");
                }
                var e = t.next;
                var i = t.prev;
                if (e) {
                    e.prev = i;
                }
                if (i) {
                    i.next = e;
                }
                if (t === this.head) {
                    this.head = e;
                }
                if (t === this.tail) {
                    this.tail = i;
                }
                t.list.length--;
                t.next = null;
                t.prev = null;
                t.list = null;
                return e;
            };
            Yallist.prototype.unshiftNode = function(t) {
                if (t === this.head) {
                    return;
                }
                if (t.list) {
                    t.list.removeNode(t);
                }
                var e = this.head;
                t.list = this;
                t.next = e;
                if (e) {
                    e.prev = t;
                }
                this.head = t;
                if (!this.tail) {
                    this.tail = t;
                }
                this.length++;
            };
            Yallist.prototype.pushNode = function(t) {
                if (t === this.tail) {
                    return;
                }
                if (t.list) {
                    t.list.removeNode(t);
                }
                var e = this.tail;
                t.list = this;
                t.prev = e;
                if (e) {
                    e.next = t;
                }
                this.tail = t;
                if (!this.head) {
                    this.head = t;
                }
                this.length++;
            };
            Yallist.prototype.push = function() {
                for(var t = 0, e = arguments.length; t < e; t++){
                    push(this, arguments[t]);
                }
                return this.length;
            };
            Yallist.prototype.unshift = function() {
                for(var t = 0, e = arguments.length; t < e; t++){
                    unshift(this, arguments[t]);
                }
                return this.length;
            };
            Yallist.prototype.pop = function() {
                if (!this.tail) {
                    return undefined;
                }
                var t = this.tail.value;
                this.tail = this.tail.prev;
                if (this.tail) {
                    this.tail.next = null;
                } else {
                    this.head = null;
                }
                this.length--;
                return t;
            };
            Yallist.prototype.shift = function() {
                if (!this.head) {
                    return undefined;
                }
                var t = this.head.value;
                this.head = this.head.next;
                if (this.head) {
                    this.head.prev = null;
                } else {
                    this.tail = null;
                }
                this.length--;
                return t;
            };
            Yallist.prototype.forEach = function(t, e) {
                e = e || this;
                for(var i = this.head, s = 0; i !== null; s++){
                    t.call(e, i.value, s, this);
                    i = i.next;
                }
            };
            Yallist.prototype.forEachReverse = function(t, e) {
                e = e || this;
                for(var i = this.tail, s = this.length - 1; i !== null; s--){
                    t.call(e, i.value, s, this);
                    i = i.prev;
                }
            };
            Yallist.prototype.get = function(t) {
                for(var e = 0, i = this.head; i !== null && e < t; e++){
                    i = i.next;
                }
                if (e === t && i !== null) {
                    return i.value;
                }
            };
            Yallist.prototype.getReverse = function(t) {
                for(var e = 0, i = this.tail; i !== null && e < t; e++){
                    i = i.prev;
                }
                if (e === t && i !== null) {
                    return i.value;
                }
            };
            Yallist.prototype.map = function(t, e) {
                e = e || this;
                var i = new Yallist;
                for(var s = this.head; s !== null;){
                    i.push(t.call(e, s.value, this));
                    s = s.next;
                }
                return i;
            };
            Yallist.prototype.mapReverse = function(t, e) {
                e = e || this;
                var i = new Yallist;
                for(var s = this.tail; s !== null;){
                    i.push(t.call(e, s.value, this));
                    s = s.prev;
                }
                return i;
            };
            Yallist.prototype.reduce = function(t, e) {
                var i;
                var s = this.head;
                if (arguments.length > 1) {
                    i = e;
                } else if (this.head) {
                    s = this.head.next;
                    i = this.head.value;
                } else {
                    throw new TypeError("Reduce of empty list with no initial value");
                }
                for(var n = 0; s !== null; n++){
                    i = t(i, s.value, n);
                    s = s.next;
                }
                return i;
            };
            Yallist.prototype.reduceReverse = function(t, e) {
                var i;
                var s = this.tail;
                if (arguments.length > 1) {
                    i = e;
                } else if (this.tail) {
                    s = this.tail.prev;
                    i = this.tail.value;
                } else {
                    throw new TypeError("Reduce of empty list with no initial value");
                }
                for(var n = this.length - 1; s !== null; n--){
                    i = t(i, s.value, n);
                    s = s.prev;
                }
                return i;
            };
            Yallist.prototype.toArray = function() {
                var t = new Array(this.length);
                for(var e = 0, i = this.head; i !== null; e++){
                    t[e] = i.value;
                    i = i.next;
                }
                return t;
            };
            Yallist.prototype.toArrayReverse = function() {
                var t = new Array(this.length);
                for(var e = 0, i = this.tail; i !== null; e++){
                    t[e] = i.value;
                    i = i.prev;
                }
                return t;
            };
            Yallist.prototype.slice = function(t, e) {
                e = e || this.length;
                if (e < 0) {
                    e += this.length;
                }
                t = t || 0;
                if (t < 0) {
                    t += this.length;
                }
                var i = new Yallist;
                if (e < t || e < 0) {
                    return i;
                }
                if (t < 0) {
                    t = 0;
                }
                if (e > this.length) {
                    e = this.length;
                }
                for(var s = 0, n = this.head; n !== null && s < t; s++){
                    n = n.next;
                }
                for(; n !== null && s < e; s++, n = n.next){
                    i.push(n.value);
                }
                return i;
            };
            Yallist.prototype.sliceReverse = function(t, e) {
                e = e || this.length;
                if (e < 0) {
                    e += this.length;
                }
                t = t || 0;
                if (t < 0) {
                    t += this.length;
                }
                var i = new Yallist;
                if (e < t || e < 0) {
                    return i;
                }
                if (t < 0) {
                    t = 0;
                }
                if (e > this.length) {
                    e = this.length;
                }
                for(var s = this.length, n = this.tail; n !== null && s > e; s--){
                    n = n.prev;
                }
                for(; n !== null && s > t; s--, n = n.prev){
                    i.push(n.value);
                }
                return i;
            };
            Yallist.prototype.splice = function(t, e) {
                if (t > this.length) {
                    t = this.length - 1;
                }
                if (t < 0) {
                    t = this.length + t;
                }
                for(var i = 0, s = this.head; s !== null && i < t; i++){
                    s = s.next;
                }
                var n = [];
                for(var i = 0; s && i < e; i++){
                    n.push(s.value);
                    s = this.removeNode(s);
                }
                if (s === null) {
                    s = this.tail;
                }
                if (s !== this.head && s !== this.tail) {
                    s = s.prev;
                }
                for(var i = 2; i < arguments.length; i++){
                    s = insert(this, s, arguments[i]);
                }
                return n;
            };
            Yallist.prototype.reverse = function() {
                var t = this.head;
                var e = this.tail;
                for(var i = t; i !== null; i = i.prev){
                    var s = i.prev;
                    i.prev = i.next;
                    i.next = s;
                }
                this.head = e;
                this.tail = t;
                return this;
            };
            function insert(t, e, i) {
                var s = e === t.head ? new Node(i, null, e, t) : new Node(i, e, e.next, t);
                if (s.next === null) {
                    t.tail = s;
                }
                if (s.prev === null) {
                    t.head = s;
                }
                t.length++;
                return s;
            }
            function push(t, e) {
                t.tail = new Node(e, t.tail, null, t);
                if (!t.head) {
                    t.head = t.tail;
                }
                t.length++;
            }
            function unshift(t, e) {
                t.head = new Node(e, null, t.head, t);
                if (!t.tail) {
                    t.tail = t.head;
                }
                t.length++;
            }
            function Node(t, e, i, s) {
                if (!(this instanceof Node)) {
                    return new Node(t, e, i, s);
                }
                this.list = s;
                this.value = t;
                if (e) {
                    e.next = this;
                    this.prev = e;
                } else {
                    this.prev = null;
                }
                if (i) {
                    i.prev = this;
                    this.next = i;
                } else {
                    this.next = null;
                }
            }
            try {
                i(76)(Yallist);
            } catch (t) {}
        }
    };
    var e = {};
    function __nccwpck_require__(i) {
        var s = e[i];
        if (s !== undefined) {
            return s.exports;
        }
        var n = e[i] = {
            exports: {}
        };
        var l = true;
        try {
            t[i](n, n.exports, __nccwpck_require__);
            l = false;
        } finally{
            if (l) delete e[i];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var i = __nccwpck_require__(806);
    module.exports = i;
})();


/***/ }),

/***/ 4025:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __dirname = "/";
(function() {
    var e = {
        452: function(e) {
            "use strict";
            e.exports = __webpack_require__(8885);
        }
    };
    var t = {};
    function __nccwpck_require__(o) {
        var a = t[o];
        if (a !== undefined) {
            return a.exports;
        }
        var s = t[o] = {
            exports: {}
        };
        var n = true;
        try {
            e[o](s, s.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete t[o];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var o = {};
    !function() {
        var e = o;
        var t, a = (t = __nccwpck_require__(452)) && "object" == typeof t && "default" in t ? t.default : t, s = /https?|ftp|gopher|file/;
        function r(e) {
            "string" == typeof e && (e = d(e));
            var t = function(e, t, o) {
                var a = e.auth, s = e.hostname, n = e.protocol || "", p = e.pathname || "", c = e.hash || "", i = e.query || "", u = !1;
                a = a ? encodeURIComponent(a).replace(/%3A/i, ":") + "@" : "", e.host ? u = a + e.host : s && (u = a + (~s.indexOf(":") ? "[" + s + "]" : s), e.port && (u += ":" + e.port)), i && "object" == typeof i && (i = t.encode(i));
                var f = e.search || i && "?" + i || "";
                return n && ":" !== n.substr(-1) && (n += ":"), e.slashes || (!n || o.test(n)) && !1 !== u ? (u = "//" + (u || ""), p && "/" !== p[0] && (p = "/" + p)) : u || (u = ""), c && "#" !== c[0] && (c = "#" + c), f && "?" !== f[0] && (f = "?" + f), {
                    protocol: n,
                    host: u,
                    pathname: p = p.replace(/[?#]/g, encodeURIComponent),
                    search: f = f.replace("#", "%23"),
                    hash: c
                };
            }(e, a, s);
            return "" + t.protocol + t.host + t.pathname + t.search + t.hash;
        }
        var n = "http://", p = "w.w", c = n + p, i = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i, u = /https?|ftp|gopher|file/;
        function h(e, t) {
            var o = "string" == typeof e ? d(e) : e;
            e = "object" == typeof e ? r(e) : e;
            var a = d(t), s = "";
            o.protocol && !o.slashes && (s = o.protocol, e = e.replace(o.protocol, ""), s += "/" === t[0] || "/" === e[0] ? "/" : ""), s && a.protocol && (s = "", a.slashes || (s = a.protocol, t = t.replace(a.protocol, "")));
            var p = e.match(i);
            p && !a.protocol && (e = e.substr((s = p[1] + (p[2] || "")).length), /^\/\/[^/]/.test(t) && (s = s.slice(0, -1)));
            var f = new URL(e, c + "/"), m = new URL(t, f).toString().replace(c, ""), v = a.protocol || o.protocol;
            return v += o.slashes || a.slashes ? "//" : "", !s && v ? m = m.replace(n, v) : s && (m = m.replace(n, "")), u.test(m) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== m.slice(-1) || (m = m.slice(0, -1)), s && (m = s + ("/" === m[0] ? m.substr(1) : m)), m;
        }
        function l() {}
        l.prototype.parse = d, l.prototype.format = r, l.prototype.resolve = h, l.prototype.resolveObject = h;
        var f = /^https?|ftp|gopher|file/, m = /^(.*?)([#?].*)/, v = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i, _ = /^([a-z0-9.+-]*:)?\/\/\/*/i, b = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
        function d(e, t, o) {
            if (void 0 === t && (t = !1), void 0 === o && (o = !1), e && "object" == typeof e && e instanceof l) return e;
            var s = (e = e.trim()).match(m);
            e = s ? s[1].replace(/\\/g, "/") + s[2] : e.replace(/\\/g, "/"), b.test(e) && "/" !== e.slice(-1) && (e += "/");
            var n = !/(^javascript)/.test(e) && e.match(v), i = _.test(e), u = "";
            n && (f.test(n[1]) || (u = n[1].toLowerCase(), e = "" + n[2] + n[3]), n[2] || (i = !1, f.test(n[1]) ? (u = n[1], e = "" + n[3]) : e = "//" + n[3]), 3 !== n[2].length && 1 !== n[2].length || (u = n[1], e = "/" + n[3]));
            var g, y = (s ? s[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/), w = y && y[1], x = new l, C = "", U = "";
            try {
                g = new URL(e);
            } catch (t) {
                C = t, u || o || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (U = "/", e = e.substr(1));
                try {
                    g = new URL(e, c);
                } catch (e) {
                    return x.protocol = u, x.href = u, x;
                }
            }
            x.slashes = i && !U, x.host = g.host === p ? "" : g.host, x.hostname = g.hostname === p ? "" : g.hostname.replace(/(\[|\])/g, ""), x.protocol = C ? u || null : g.protocol, x.search = g.search.replace(/\\/g, "%5C"), x.hash = g.hash.replace(/\\/g, "%5C");
            var j = e.split("#");
            !x.search && ~j[0].indexOf("?") && (x.search = "?"), x.hash || "" !== j[1] || (x.hash = "#"), x.query = t ? a.decode(g.search.substr(1)) : x.search.substr(1), x.pathname = U + (n ? function(e) {
                return e.replace(/['^|`]/g, function(e) {
                    return "%" + e.charCodeAt().toString(16).toUpperCase();
                }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                    try {
                        return decodeURIComponent(t).split("").map(function(e) {
                            var t = e.charCodeAt();
                            return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase();
                        }).join("");
                    } catch (e) {
                        return t;
                    }
                });
            }(g.pathname) : g.pathname), "about:" === x.protocol && "blank" === x.pathname && (x.protocol = "", x.pathname = ""), C && "/" !== e[0] && (x.pathname = x.pathname.substr(1)), u && !f.test(u) && "/" !== e.slice(-1) && "/" === x.pathname && (x.pathname = ""), x.path = x.pathname + x.search, x.auth = [
                g.username,
                g.password
            ].map(decodeURIComponent).filter(Boolean).join(":"), x.port = g.port, w && !x.host.endsWith(w) && (x.host += w, x.port = w.slice(1)), x.href = U ? "" + x.pathname + x.search + x.hash : r(x);
            var q = /^(file)/.test(x.href) ? [
                "host",
                "hostname"
            ] : [];
            return Object.keys(x).forEach(function(e) {
                ~q.indexOf(e) || (x[e] = x[e] || null);
            }), x;
        }
        e.parse = d, e.format = r, e.resolve = h, e.resolveObject = function(e, t) {
            return d(h(e, t));
        }, e.Url = l;
    }();
    module.exports = o;
})();


/***/ }),

/***/ 1949:
/***/ ((module) => {

var __dirname = "/";
(function() {
    "use strict";
    var e = {
        114: function(e) {
            function assertPath(e) {
                if (typeof e !== "string") {
                    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
                }
            }
            function normalizeStringPosix(e, r) {
                var t = "";
                var i = 0;
                var n = -1;
                var a = 0;
                var f;
                for(var l = 0; l <= e.length; ++l){
                    if (l < e.length) f = e.charCodeAt(l);
                    else if (f === 47) break;
                    else f = 47;
                    if (f === 47) {
                        if (n === l - 1 || a === 1) {} else if (n !== l - 1 && a === 2) {
                            if (t.length < 2 || i !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                                if (t.length > 2) {
                                    var s = t.lastIndexOf("/");
                                    if (s !== t.length - 1) {
                                        if (s === -1) {
                                            t = "";
                                            i = 0;
                                        } else {
                                            t = t.slice(0, s);
                                            i = t.length - 1 - t.lastIndexOf("/");
                                        }
                                        n = l;
                                        a = 0;
                                        continue;
                                    }
                                } else if (t.length === 2 || t.length === 1) {
                                    t = "";
                                    i = 0;
                                    n = l;
                                    a = 0;
                                    continue;
                                }
                            }
                            if (r) {
                                if (t.length > 0) t += "/..";
                                else t = "..";
                                i = 2;
                            }
                        } else {
                            if (t.length > 0) t += "/" + e.slice(n + 1, l);
                            else t = e.slice(n + 1, l);
                            i = l - n - 1;
                        }
                        n = l;
                        a = 0;
                    } else if (f === 46 && a !== -1) {
                        ++a;
                    } else {
                        a = -1;
                    }
                }
                return t;
            }
            function _format(e, r) {
                var t = r.dir || r.root;
                var i = r.base || (r.name || "") + (r.ext || "");
                if (!t) {
                    return i;
                }
                if (t === r.root) {
                    return t + i;
                }
                return t + e + i;
            }
            var r = {
                resolve: function resolve() {
                    var e = "";
                    var r = false;
                    var t;
                    for(var i = arguments.length - 1; i >= -1 && !r; i--){
                        var n;
                        if (i >= 0) n = arguments[i];
                        else {
                            if (t === undefined) t = "";
                            n = t;
                        }
                        assertPath(n);
                        if (n.length === 0) {
                            continue;
                        }
                        e = n + "/" + e;
                        r = n.charCodeAt(0) === 47;
                    }
                    e = normalizeStringPosix(e, !r);
                    if (r) {
                        if (e.length > 0) return "/" + e;
                        else return "/";
                    } else if (e.length > 0) {
                        return e;
                    } else {
                        return ".";
                    }
                },
                normalize: function normalize(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0) === 47;
                    var t = e.charCodeAt(e.length - 1) === 47;
                    e = normalizeStringPosix(e, !r);
                    if (e.length === 0 && !r) e = ".";
                    if (e.length > 0 && t) e += "/";
                    if (r) return "/" + e;
                    return e;
                },
                isAbsolute: function isAbsolute(e) {
                    assertPath(e);
                    return e.length > 0 && e.charCodeAt(0) === 47;
                },
                join: function join() {
                    if (arguments.length === 0) return ".";
                    var e;
                    for(var t = 0; t < arguments.length; ++t){
                        var i = arguments[t];
                        assertPath(i);
                        if (i.length > 0) {
                            if (e === undefined) e = i;
                            else e += "/" + i;
                        }
                    }
                    if (e === undefined) return ".";
                    return r.normalize(e);
                },
                relative: function relative(e, t) {
                    assertPath(e);
                    assertPath(t);
                    if (e === t) return "";
                    e = r.resolve(e);
                    t = r.resolve(t);
                    if (e === t) return "";
                    var i = 1;
                    for(; i < e.length; ++i){
                        if (e.charCodeAt(i) !== 47) break;
                    }
                    var n = e.length;
                    var a = n - i;
                    var f = 1;
                    for(; f < t.length; ++f){
                        if (t.charCodeAt(f) !== 47) break;
                    }
                    var l = t.length;
                    var s = l - f;
                    var o = a < s ? a : s;
                    var u = -1;
                    var h = 0;
                    for(; h <= o; ++h){
                        if (h === o) {
                            if (s > o) {
                                if (t.charCodeAt(f + h) === 47) {
                                    return t.slice(f + h + 1);
                                } else if (h === 0) {
                                    return t.slice(f + h);
                                }
                            } else if (a > o) {
                                if (e.charCodeAt(i + h) === 47) {
                                    u = h;
                                } else if (h === 0) {
                                    u = 0;
                                }
                            }
                            break;
                        }
                        var c = e.charCodeAt(i + h);
                        var v = t.charCodeAt(f + h);
                        if (c !== v) break;
                        else if (c === 47) u = h;
                    }
                    var g = "";
                    for(h = i + u + 1; h <= n; ++h){
                        if (h === n || e.charCodeAt(h) === 47) {
                            if (g.length === 0) g += "..";
                            else g += "/..";
                        }
                    }
                    if (g.length > 0) return g + t.slice(f + u);
                    else {
                        f += u;
                        if (t.charCodeAt(f) === 47) ++f;
                        return t.slice(f);
                    }
                },
                _makeLong: function _makeLong(e) {
                    return e;
                },
                dirname: function dirname(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0);
                    var t = r === 47;
                    var i = -1;
                    var n = true;
                    for(var a = e.length - 1; a >= 1; --a){
                        r = e.charCodeAt(a);
                        if (r === 47) {
                            if (!n) {
                                i = a;
                                break;
                            }
                        } else {
                            n = false;
                        }
                    }
                    if (i === -1) return t ? "/" : ".";
                    if (t && i === 1) return "//";
                    return e.slice(0, i);
                },
                basename: function basename(e, r) {
                    if (r !== undefined && typeof r !== "string") throw new TypeError('"ext" argument must be a string');
                    assertPath(e);
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a;
                    if (r !== undefined && r.length > 0 && r.length <= e.length) {
                        if (r.length === e.length && r === e) return "";
                        var f = r.length - 1;
                        var l = -1;
                        for(a = e.length - 1; a >= 0; --a){
                            var s = e.charCodeAt(a);
                            if (s === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else {
                                if (l === -1) {
                                    n = false;
                                    l = a + 1;
                                }
                                if (f >= 0) {
                                    if (s === r.charCodeAt(f)) {
                                        if (--f === -1) {
                                            i = a;
                                        }
                                    } else {
                                        f = -1;
                                        i = l;
                                    }
                                }
                            }
                        }
                        if (t === i) i = l;
                        else if (i === -1) i = e.length;
                        return e.slice(t, i);
                    } else {
                        for(a = e.length - 1; a >= 0; --a){
                            if (e.charCodeAt(a) === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else if (i === -1) {
                                n = false;
                                i = a + 1;
                            }
                        }
                        if (i === -1) return "";
                        return e.slice(t, i);
                    }
                },
                extname: function extname(e) {
                    assertPath(e);
                    var r = -1;
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a = 0;
                    for(var f = e.length - 1; f >= 0; --f){
                        var l = e.charCodeAt(f);
                        if (l === 47) {
                            if (!n) {
                                t = f + 1;
                                break;
                            }
                            continue;
                        }
                        if (i === -1) {
                            n = false;
                            i = f + 1;
                        }
                        if (l === 46) {
                            if (r === -1) r = f;
                            else if (a !== 1) a = 1;
                        } else if (r !== -1) {
                            a = -1;
                        }
                    }
                    if (r === -1 || i === -1 || a === 0 || a === 1 && r === i - 1 && r === t + 1) {
                        return "";
                    }
                    return e.slice(r, i);
                },
                format: function format(e) {
                    if (e === null || typeof e !== "object") {
                        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    }
                    return _format("/", e);
                },
                parse: function parse(e) {
                    assertPath(e);
                    var r = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (e.length === 0) return r;
                    var t = e.charCodeAt(0);
                    var i = t === 47;
                    var n;
                    if (i) {
                        r.root = "/";
                        n = 1;
                    } else {
                        n = 0;
                    }
                    var a = -1;
                    var f = 0;
                    var l = -1;
                    var s = true;
                    var o = e.length - 1;
                    var u = 0;
                    for(; o >= n; --o){
                        t = e.charCodeAt(o);
                        if (t === 47) {
                            if (!s) {
                                f = o + 1;
                                break;
                            }
                            continue;
                        }
                        if (l === -1) {
                            s = false;
                            l = o + 1;
                        }
                        if (t === 46) {
                            if (a === -1) a = o;
                            else if (u !== 1) u = 1;
                        } else if (a !== -1) {
                            u = -1;
                        }
                    }
                    if (a === -1 || l === -1 || u === 0 || u === 1 && a === l - 1 && a === f + 1) {
                        if (l !== -1) {
                            if (f === 0 && i) r.base = r.name = e.slice(1, l);
                            else r.base = r.name = e.slice(f, l);
                        }
                    } else {
                        if (f === 0 && i) {
                            r.name = e.slice(1, a);
                            r.base = e.slice(1, l);
                        } else {
                            r.name = e.slice(f, a);
                            r.base = e.slice(f, l);
                        }
                        r.ext = e.slice(a, l);
                    }
                    if (f > 0) r.dir = e.slice(0, f - 1);
                    else if (i) r.dir = "/";
                    return r;
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            r.posix = r;
            e.exports = r;
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var i = r[t];
        if (i !== undefined) {
            return i.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var a = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(114);
    module.exports = t;
})();


/***/ }),

/***/ 3014:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
/**
 * Tokenize input string.
 */ function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at " + i);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError('Pattern cannot start with "?" at ' + j);
            }
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern) throw new TypeError("Missing pattern at " + i);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */ function parse(str, options) {
    if (options === void 0) {
        options = {};
    }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function() {
        var result = "";
        var value;
        // tslint:disable-next-line
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
            result += value;
        }
        return result;
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
__webpack_unused_export__ = parse;
/**
 * Compile a string to a template function for the path.
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.MY = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens, options) {
    if (options === void 0) {
        options = {};
    }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array');
                }
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage);
        }
        return path;
    };
}
__webpack_unused_export__ = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */ function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
__webpack_unused_export__ = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */ function regexpToFunction(re, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            // tslint:disable-next-line
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                    return decode(value, key);
                });
            } else {
                params[key.name] = decode(m[i], key);
            }
        };
        for(var i = 1; i < m.length; i++){
            _loop_1(i);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
exports.WS = regexpToFunction;
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for(var i = 0; i < groups.length; i++){
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        } else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    } else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                } else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            } else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict) route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
__webpack_unused_export__ = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.Bo = pathToRegexp; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 8885:
/***/ ((module) => {

var __dirname = "/";
(function() {
    "use strict";
    var e = {
        815: function(e) {
            function hasOwnProperty(e, r) {
                return Object.prototype.hasOwnProperty.call(e, r);
            }
            e.exports = function(e, n, t, o) {
                n = n || "&";
                t = t || "=";
                var a = {};
                if (typeof e !== "string" || e.length === 0) {
                    return a;
                }
                var i = /\+/g;
                e = e.split(n);
                var u = 1e3;
                if (o && typeof o.maxKeys === "number") {
                    u = o.maxKeys;
                }
                var c = e.length;
                if (u > 0 && c > u) {
                    c = u;
                }
                for(var p = 0; p < c; ++p){
                    var f = e[p].replace(i, "%20"), s = f.indexOf(t), _, l, y, d;
                    if (s >= 0) {
                        _ = f.substr(0, s);
                        l = f.substr(s + 1);
                    } else {
                        _ = f;
                        l = "";
                    }
                    y = decodeURIComponent(_);
                    d = decodeURIComponent(l);
                    if (!hasOwnProperty(a, y)) {
                        a[y] = d;
                    } else if (r(a[y])) {
                        a[y].push(d);
                    } else {
                        a[y] = [
                            a[y],
                            d
                        ];
                    }
                }
                return a;
            };
            var r = Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]";
            };
        },
        577: function(e) {
            var stringifyPrimitive = function(e) {
                switch(typeof e){
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return "";
                }
            };
            e.exports = function(e, t, o, a) {
                t = t || "&";
                o = o || "=";
                if (e === null) {
                    e = undefined;
                }
                if (typeof e === "object") {
                    return map(n(e), function(n) {
                        var a = encodeURIComponent(stringifyPrimitive(n)) + o;
                        if (r(e[n])) {
                            return map(e[n], function(e) {
                                return a + encodeURIComponent(stringifyPrimitive(e));
                            }).join(t);
                        } else {
                            return a + encodeURIComponent(stringifyPrimitive(e[n]));
                        }
                    }).join(t);
                }
                if (!a) return "";
                return encodeURIComponent(stringifyPrimitive(a)) + o + encodeURIComponent(stringifyPrimitive(e));
            };
            var r = Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]";
            };
            function map(e, r) {
                if (e.map) return e.map(r);
                var n = [];
                for(var t = 0; t < e.length; t++){
                    n.push(r(e[t], t));
                }
                return n;
            }
            var n = Object.keys || function(e) {
                var r = [];
                for(var n in e){
                    if (Object.prototype.hasOwnProperty.call(e, n)) r.push(n);
                }
                return r;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(n) {
        var t = r[n];
        if (t !== undefined) {
            return t.exports;
        }
        var o = r[n] = {
            exports: {}
        };
        var a = true;
        try {
            e[n](o, o.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete r[n];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var n = {};
    !function() {
        var e = n;
        e.decode = e.parse = __nccwpck_require__(815);
        e.encode = e.stringify = __nccwpck_require__(577);
    }();
    module.exports = n;
})();


/***/ }),

/***/ 6869:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 React
 react-dom-server-rendering-stub.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/ 
var e = __webpack_require__(577), f = {
    usingClientEntryPoint: !1,
    Events: null,
    Dispatcher: {
        current: null
    }
};
function h(b) {
    for(var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, c = 1; c < arguments.length; c++)a += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + b + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function k(b, a) {
    if ("font" === b) return "";
    if ("string" === typeof a) return "use-credentials" === a ? a : "";
}
var l = f.Dispatcher, m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function n() {
    return m.current.useHostTransitionStatus();
}
function r(b, a, c) {
    return m.current.useFormState(b, a, c);
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f;
exports.createPortal = function() {
    throw Error(h(448));
};
exports.experimental_useFormState = function(b, a, c) {
    return r(b, a, c);
};
exports.experimental_useFormStatus = function() {
    return n();
};
exports.flushSync = function() {
    throw Error(h(449));
};
exports.preconnect = function(b, a) {
    var c = l.current;
    c && "string" === typeof b && (a ? (a = a.crossOrigin, a = "string" === typeof a ? "use-credentials" === a ? a : "" : void 0) : a = null, c.preconnect(b, a));
};
exports.prefetchDNS = function(b) {
    var a = l.current;
    a && "string" === typeof b && a.prefetchDNS(b);
};
exports.preinit = function(b, a) {
    var c = l.current;
    if (c && "string" === typeof b && a && "string" === typeof a.as) {
        var d = a.as, g = k(d, a.crossOrigin), p = "string" === typeof a.integrity ? a.integrity : void 0, q = "string" === typeof a.fetchPriority ? a.fetchPriority : void 0;
        "style" === d ? c.preinitStyle(b, "string" === typeof a.precedence ? a.precedence : void 0, {
            crossOrigin: g,
            integrity: p,
            fetchPriority: q
        }) : "script" === d && c.preinitScript(b, {
            crossOrigin: g,
            integrity: p,
            fetchPriority: q,
            nonce: "string" === typeof a.nonce ? a.nonce : void 0
        });
    }
};
exports.preinitModule = function(b, a) {
    var c = l.current;
    if (c && "string" === typeof b) if ("object" === typeof a && null !== a) {
        if (null == a.as || "script" === a.as) {
            var d = k(a.as, a.crossOrigin);
            c.preinitModuleScript(b, {
                crossOrigin: d,
                integrity: "string" === typeof a.integrity ? a.integrity : void 0,
                nonce: "string" === typeof a.nonce ? a.nonce : void 0
            });
        }
    } else null == a && c.preinitModuleScript(b);
};
exports.preload = function(b, a) {
    var c = l.current;
    if (c && "string" === typeof b && "object" === typeof a && null !== a && "string" === typeof a.as) {
        var d = a.as, g = k(d, a.crossOrigin);
        c.preload(b, d, {
            crossOrigin: g,
            integrity: "string" === typeof a.integrity ? a.integrity : void 0,
            nonce: "string" === typeof a.nonce ? a.nonce : void 0,
            type: "string" === typeof a.type ? a.type : void 0,
            fetchPriority: "string" === typeof a.fetchPriority ? a.fetchPriority : void 0,
            referrerPolicy: "string" === typeof a.referrerPolicy ? a.referrerPolicy : void 0,
            imageSrcSet: "string" === typeof a.imageSrcSet ? a.imageSrcSet : void 0,
            imageSizes: "string" === typeof a.imageSizes ? a.imageSizes : void 0
        });
    }
};
exports.preloadModule = function(b, a) {
    var c = l.current;
    if (c && "string" === typeof b) if (a) {
        var d = k(a.as, a.crossOrigin);
        c.preloadModule(b, {
            as: "string" === typeof a.as && "script" !== a.as ? a.as : void 0,
            crossOrigin: d,
            integrity: "string" === typeof a.integrity ? a.integrity : void 0
        });
    } else c.preloadModule(b);
};
exports.unstable_batchedUpdates = function(b, a) {
    return b(a);
};
exports.useFormState = r;
exports.useFormStatus = n;
exports.version = "18.3.0-canary-2c338b16f-20231116"; //# sourceMappingURL=react-dom-server-rendering-stub.production.min.js.map


/***/ }),

/***/ 901:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(6869);
} else {}


/***/ }),

/***/ 8855:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/*
 React
 react-server-dom-webpack-server.edge.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/ 
var aa = __webpack_require__(6379), ba = __webpack_require__(901), m = null, n = 0;
function p(a, b) {
    if (0 !== b.byteLength) if (512 < b.byteLength) 0 < n && (a.enqueue(new Uint8Array(m.buffer, 0, n)), m = new Uint8Array(512), n = 0), a.enqueue(b);
    else {
        var d = m.length - n;
        d < b.byteLength && (0 === d ? a.enqueue(m) : (m.set(b.subarray(0, d), n), a.enqueue(m), b = b.subarray(d)), m = new Uint8Array(512), n = 0);
        m.set(b, n);
        n += b.byteLength;
    }
    return !0;
}
var q = new TextEncoder;
function ca(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var r = Symbol.for("react.client.reference"), t = Symbol.for("react.server.reference");
function u(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: r
        },
        $$id: {
            value: b
        },
        $$async: {
            value: d
        }
    });
}
var da = Function.prototype.bind, ea = Array.prototype.slice;
function fa() {
    var a = da.apply(this, arguments);
    if (this.$$typeof === t) {
        var b = ea.call(arguments, 1);
        return Object.defineProperties(a, {
            $$typeof: {
                value: t
            },
            $$id: {
                value: this.$$id
            },
            $$bound: {
                value: this.$$bound ? this.$$bound.concat(b) : b
            },
            bind: {
                value: fa
            }
        });
    }
    return a;
}
var ha = Promise.prototype, ia = {
    get: function(a, b) {
        switch(b){
            case "$$typeof":
                return a.$$typeof;
            case "$$id":
                return a.$$id;
            case "$$async":
                return a.$$async;
            case "name":
                return a.name;
            case "displayName":
                return;
            case "defaultProps":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
        }
        throw Error("Cannot access " + (String(a.name) + "." + String(b)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
};
function ja(a, b) {
    switch(b){
        case "$$typeof":
            return a.$$typeof;
        case "$$id":
            return a.$$id;
        case "$$async":
            return a.$$async;
        case "name":
            return a.name;
        case "defaultProps":
            return;
        case "toJSON":
            return;
        case Symbol.toPrimitive:
            return Object.prototype[Symbol.toPrimitive];
        case "__esModule":
            var d = a.$$id;
            a.default = u(function() {
                throw Error("Attempted to call the default export of " + d + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
            }, a.$$id + "#", a.$$async);
            return !0;
        case "then":
            if (a.then) return a.then;
            if (a.$$async) return;
            var c = u({}, a.$$id, !0), e = new Proxy(c, ka);
            a.status = "fulfilled";
            a.value = e;
            return a.then = u(function(f) {
                return Promise.resolve(f(e));
            }, a.$$id + "#then", !1);
    }
    c = a[b];
    c || (c = u(function() {
        throw Error("Attempted to call " + String(b) + "() from the server but " + String(b) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
    }, a.$$id + "#" + b, a.$$async), Object.defineProperty(c, "name", {
        value: b
    }), c = a[b] = new Proxy(c, ia));
    return c;
}
var ka = {
    get: function(a, b) {
        return ja(a, b);
    },
    getOwnPropertyDescriptor: function(a, b) {
        var d = Object.getOwnPropertyDescriptor(a, b);
        d || (d = {
            value: ja(a, b),
            writable: !1,
            configurable: !1,
            enumerable: !1
        }, Object.defineProperty(a, b, d));
        return d;
    },
    getPrototypeOf: function() {
        return ha;
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
}, sa = {
    prefetchDNS: la,
    preconnect: ma,
    preload: na,
    preloadModule: oa,
    preinitStyle: pa,
    preinitScript: qa,
    preinitModuleScript: ra
};
function la(a) {
    if ("string" === typeof a && a) {
        var b = v();
        if (b) {
            var d = b.hints, c = "D|" + a;
            d.has(c) || (d.add(c), w(b, "D", a));
        }
    }
}
function ma(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "C|" + (null == b ? "null" : b) + "|" + a;
            c.has(e) || (c.add(e), "string" === typeof b ? w(d, "C", [
                a,
                b
            ]) : w(d, "C", a));
        }
    }
}
function na(a, b, d) {
    if ("string" === typeof a) {
        var c = v();
        if (c) {
            var e = c.hints, f = "L";
            if ("image" === b && d) {
                var g = d.imageSrcSet, k = d.imageSizes, h = "";
                "string" === typeof g && "" !== g ? (h += "[" + g + "]", "string" === typeof k && (h += "[" + k + "]")) : h += "[][]" + a;
                f += "[image]" + h;
            } else f += "[" + b + "]" + a;
            e.has(f) || (e.add(f), (d = y(d)) ? w(c, "L", [
                a,
                b,
                d
            ]) : w(c, "L", [
                a,
                b
            ]));
        }
    }
}
function oa(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "m|" + a;
            if (!c.has(e)) return c.add(e), (b = y(b)) ? w(d, "m", [
                a,
                b
            ]) : w(d, "m", a);
        }
    }
}
function pa(a, b, d) {
    if ("string" === typeof a) {
        var c = v();
        if (c) {
            var e = c.hints, f = "S|" + a;
            if (!e.has(f)) return e.add(f), (d = y(d)) ? w(c, "S", [
                a,
                "string" === typeof b ? b : 0,
                d
            ]) : "string" === typeof b ? w(c, "S", [
                a,
                b
            ]) : w(c, "S", a);
        }
    }
}
function qa(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "X|" + a;
            if (!c.has(e)) return c.add(e), (b = y(b)) ? w(d, "X", [
                a,
                b
            ]) : w(d, "X", a);
        }
    }
}
function ra(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "M|" + a;
            if (!c.has(e)) return c.add(e), (b = y(b)) ? w(d, "M", [
                a,
                b
            ]) : w(d, "M", a);
        }
    }
}
function y(a) {
    if (null == a) return null;
    var b = !1, d = {}, c;
    for(c in a)null != a[c] && (b = !0, d[c] = a[c]);
    return b ? d : null;
}
var ta = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher, ua = "function" === typeof AsyncLocalStorage, va = ua ? new AsyncLocalStorage : null, z = Symbol.for("react.element"), wa = Symbol.for("react.fragment"), xa = Symbol.for("react.server_context"), ya = Symbol.for("react.forward_ref"), za = Symbol.for("react.suspense"), Aa = Symbol.for("react.suspense_list"), Ba = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), Ca = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.postpone");
var Da = Symbol.iterator, B = null;
function C(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var d = b.parent;
        if (null === a) {
            if (null !== d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
            if (null === d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            C(a, d);
            b.context._currentValue = b.value;
        }
    }
}
function Ea(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && Ea(a);
}
function Fa(a) {
    var b = a.parent;
    null !== b && Fa(b);
    a.context._currentValue = a.value;
}
function Ga(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? C(a, b) : Ga(a, b);
}
function Ha(a, b) {
    var d = b.parent;
    if (null === d) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === d.depth ? C(a, d) : Ha(a, d);
    b.context._currentValue = b.value;
}
var Ia = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function Ja() {}
function Ka(a, b, d) {
    d = a[d];
    void 0 === d ? a.push(b) : d !== b && (b.then(Ja, Ja), b = d);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "fulfilled";
                    e.value = c;
                }
            }, function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "rejected";
                    e.reason = c;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            D = b;
            throw Ia;
    }
}
var D = null;
function La() {
    if (null === D) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var a = D;
    D = null;
    return a;
}
var E = null, F = 0, G = null;
function Ma() {
    var a = G;
    G = null;
    return a;
}
function Na(a) {
    return a._currentValue;
}
var Ra = {
    useMemo: function(a) {
        return a();
    },
    useCallback: function(a) {
        return a;
    },
    useDebugValue: function() {},
    useDeferredValue: H,
    useTransition: H,
    readContext: Na,
    useContext: Na,
    useReducer: H,
    useRef: H,
    useState: H,
    useInsertionEffect: H,
    useLayoutEffect: H,
    useImperativeHandle: H,
    useEffect: H,
    useId: Oa,
    useSyncExternalStore: H,
    useCacheRefresh: function() {
        return Pa;
    },
    useMemoCache: function(a) {
        for(var b = Array(a), d = 0; d < a; d++)b[d] = Ca;
        return b;
    },
    use: Qa
};
function H() {
    throw Error("This Hook is not supported in Server Components.");
}
function Pa() {
    throw Error("Refreshing the cache is not supported in Server Components.");
}
function Oa() {
    if (null === E) throw Error("useId can only be used while React is rendering");
    var a = E.identifierCount++;
    return ":" + E.identifierPrefix + "S" + a.toString(32) + ":";
}
function Qa(a) {
    if (null !== a && "object" === typeof a || "function" === typeof a) {
        if ("function" === typeof a.then) {
            var b = F;
            F += 1;
            null === G && (G = []);
            return Ka(G, a, b);
        }
        if (a.$$typeof === xa) return a._currentValue;
    }
    throw Error("An unsupported type was passed to use(): " + String(a));
}
function Sa() {
    return (new AbortController).signal;
}
function Ta() {
    var a = v();
    return a ? a.cache : new Map;
}
var Ua = {
    getCacheSignal: function() {
        var a = Ta(), b = a.get(Sa);
        void 0 === b && (b = Sa(), a.set(Sa, b));
        return b;
    },
    getCacheForType: function(a) {
        var b = Ta(), d = b.get(a);
        void 0 === d && (d = a(), b.set(a, d));
        return d;
    }
}, Va = Array.isArray, Wa = Object.getPrototypeOf;
function Xa(a) {
    return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, d) {
        return d;
    });
}
function Ya(a) {
    switch(typeof a){
        case "string":
            return JSON.stringify(10 >= a.length ? a : a.slice(0, 10) + "...");
        case "object":
            if (Va(a)) return "[...]";
            a = Xa(a);
            return "Object" === a ? "{...}" : a;
        case "function":
            return "function";
        default:
            return String(a);
    }
}
function I(a) {
    if ("string" === typeof a) return a;
    switch(a){
        case za:
            return "Suspense";
        case Aa:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case ya:
            return I(a.render);
        case Ba:
            return I(a.type);
        case A:
            var b = a._payload;
            a = a._init;
            try {
                return I(a(b));
            } catch (d) {}
    }
    return "";
}
function J(a, b) {
    var d = Xa(a);
    if ("Object" !== d && "Array" !== d) return d;
    d = -1;
    var c = 0;
    if (Va(a)) {
        var e = "[";
        for(var f = 0; f < a.length; f++){
            0 < f && (e += ", ");
            var g = a[f];
            g = "object" === typeof g && null !== g ? J(g) : Ya(g);
            "" + f === b ? (d = e.length, c = g.length, e += g) : e = 10 > g.length && 40 > e.length + g.length ? e + g : e + "...";
        }
        e += "]";
    } else if (a.$$typeof === z) e = "<" + I(a.type) + "/>";
    else {
        e = "{";
        f = Object.keys(a);
        for(g = 0; g < f.length; g++){
            0 < g && (e += ", ");
            var k = f[g], h = JSON.stringify(k);
            e += ('"' + k + '"' === h ? k : h) + ": ";
            h = a[k];
            h = "object" === typeof h && null !== h ? J(h) : Ya(h);
            k === b ? (d = e.length, c = h.length, e += h) : e = 10 > h.length && 40 > e.length + h.length ? e + h : e + "...";
        }
        e += "}";
    }
    return void 0 === b ? e : -1 < d && 0 < c ? (a = " ".repeat(d) + "^".repeat(c), "\n  " + e + "\n  " + a) : "\n  " + e;
}
var Za = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $a = aa.__SECRET_SERVER_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
if (!$a) throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
var ab = Object.prototype, K = JSON.stringify, bb = $a.ReactCurrentCache, cb = Za.ReactCurrentDispatcher;
function db(a) {
    console.error(a);
}
function eb() {}
function fb(a, b, d, c, e, f) {
    if (null !== bb.current && bb.current !== Ua) throw Error("Currently React only supports one RSC renderer at a time.");
    ta.current = sa;
    bb.current = Ua;
    var g = new Set;
    c = [];
    var k = new Set, h = {
        status: 0,
        flushScheduled: !1,
        fatalError: null,
        destination: null,
        bundlerConfig: b,
        cache: new Map,
        nextChunkId: 0,
        pendingChunks: 0,
        hints: k,
        abortableTasks: g,
        pingedTasks: c,
        completedImportChunks: [],
        completedHintChunks: [],
        completedRegularChunks: [],
        completedErrorChunks: [],
        writtenSymbols: new Map,
        writtenClientReferences: new Map,
        writtenServerReferences: new Map,
        writtenProviders: new Map,
        writtenObjects: new WeakMap,
        identifierPrefix: e || "",
        identifierCount: 1,
        taintCleanupQueue: [],
        onError: void 0 === d ? db : d,
        onPostpone: void 0 === f ? eb : f,
        toJSON: function(l, x) {
            return gb(h, this, l, x);
        }
    };
    h.pendingChunks++;
    a = L(h, a, null, g);
    c.push(a);
    return h;
}
var M = null;
function v() {
    if (M) return M;
    if (ua) {
        var a = va.getStore();
        if (a) return a;
    }
    return null;
}
function hb(a, b) {
    a.pendingChunks++;
    var d = L(a, null, B, a.abortableTasks);
    switch(b.status){
        case "fulfilled":
            return d.model = b.value, ib(a, d), d.id;
        case "rejected":
            var c = N(a, b.reason);
            O(a, d.id, c);
            return d.id;
        default:
            "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
                "pending" === b.status && (b.status = "fulfilled", b.value = e);
            }, function(e) {
                "pending" === b.status && (b.status = "rejected", b.reason = e);
            }));
    }
    b.then(function(e) {
        d.model = e;
        ib(a, d);
    }, function(e) {
        d.status = 4;
        a.abortableTasks.delete(d);
        e = N(a, e);
        O(a, d.id, e);
        null !== a.destination && P(a, a.destination);
    });
    return d.id;
}
function w(a, b, d) {
    d = K(d);
    var c = a.nextChunkId++;
    b = "H" + b;
    b = c.toString(16) + ":" + b;
    d = q.encode(b + d + "\n");
    a.completedHintChunks.push(d);
    jb(a);
}
function kb(a) {
    if ("fulfilled" === a.status) return a.value;
    if ("rejected" === a.status) throw a.reason;
    throw a;
}
function lb(a) {
    switch(a.status){
        case "fulfilled":
        case "rejected":
            break;
        default:
            "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            }));
    }
    return {
        $$typeof: A,
        _payload: a,
        _init: kb
    };
}
function Q(a, b, d, c, e, f) {
    if (null !== c && void 0 !== c) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof b) {
        if (b.$$typeof === r) return [
            z,
            b,
            d,
            e
        ];
        F = 0;
        G = f;
        e = b(e);
        return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : lb(e) : e;
    }
    if ("string" === typeof b) return [
        z,
        b,
        d,
        e
    ];
    if ("symbol" === typeof b) return b === wa ? e.children : [
        z,
        b,
        d,
        e
    ];
    if (null != b && "object" === typeof b) {
        if (b.$$typeof === r) return [
            z,
            b,
            d,
            e
        ];
        switch(b.$$typeof){
            case A:
                var g = b._init;
                b = g(b._payload);
                return Q(a, b, d, c, e, f);
            case ya:
                return a = b.render, F = 0, G = f, a(e, void 0);
            case Ba:
                return Q(a, b.type, d, c, e, f);
        }
    }
    throw Error("Unsupported Server Component type: " + Ya(b));
}
function ib(a, b) {
    var d = a.pingedTasks;
    d.push(b);
    1 === d.length && (a.flushScheduled = null !== a.destination, setTimeout(function() {
        return mb(a);
    }, 0));
}
function L(a, b, d, c) {
    var e = {
        id: a.nextChunkId++,
        status: 0,
        model: b,
        context: d,
        ping: function() {
            return ib(a, e);
        },
        thenableState: null
    };
    c.add(e);
    return e;
}
function R(a) {
    return "$" + a.toString(16);
}
function nb(a, b, d) {
    a = K(d);
    b = b.toString(16) + ":" + a + "\n";
    return q.encode(b);
}
function ob(a, b, d, c) {
    var e = c.$$async ? c.$$id + "#async" : c.$$id, f = a.writtenClientReferences, g = f.get(e);
    if (void 0 !== g) return b[0] === z && "1" === d ? "$L" + g.toString(16) : R(g);
    try {
        var k = a.bundlerConfig, h = c.$$id;
        g = "";
        var l = k[h];
        if (l) g = l.name;
        else {
            var x = h.lastIndexOf("#");
            -1 !== x && (g = h.slice(x + 1), l = k[h.slice(0, x)]);
            if (!l) throw Error('Could not find the module "' + h + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
        }
        var Gb = !0 === c.$$async ? [
            l.id,
            l.chunks,
            g,
            1
        ] : [
            l.id,
            l.chunks,
            g
        ];
        a.pendingChunks++;
        var Y = a.nextChunkId++, Hb = K(Gb), Ib = Y.toString(16) + ":I" + Hb + "\n", Jb = q.encode(Ib);
        a.completedImportChunks.push(Jb);
        f.set(e, Y);
        return b[0] === z && "1" === d ? "$L" + Y.toString(16) : R(Y);
    } catch (Kb) {
        return a.pendingChunks++, b = a.nextChunkId++, d = N(a, Kb), O(a, b, d), R(b);
    }
}
function S(a, b) {
    a.pendingChunks++;
    b = L(a, b, B, a.abortableTasks);
    pb(a, b);
    return b.id;
}
var T = !1;
function gb(a, b, d, c) {
    switch(c){
        case z:
            return "$";
    }
    for(; "object" === typeof c && null !== c && (c.$$typeof === z || c.$$typeof === A);)try {
        switch(c.$$typeof){
            case z:
                var e = a.writtenObjects, f = e.get(c);
                if (void 0 !== f) {
                    if (-1 === f) {
                        var g = S(a, c);
                        return R(g);
                    }
                    if (T === c) T = null;
                    else return R(f);
                } else e.set(c, -1);
                var k = c;
                c = Q(a, k.type, k.key, k.ref, k.props, null);
                break;
            case A:
                var h = c._init;
                c = h(c._payload);
        }
    } catch (l) {
        b = l === Ia ? La() : l;
        if ("object" === typeof b && null !== b && "function" === typeof b.then) return a.pendingChunks++, a = L(a, c, B, a.abortableTasks), c = a.ping, b.then(c, c), a.thenableState = Ma(), "$L" + a.id.toString(16);
        a.pendingChunks++;
        c = a.nextChunkId++;
        b = N(a, b);
        O(a, c, b);
        return "$L" + c.toString(16);
    }
    if (null === c) return null;
    if ("object" === typeof c) {
        if (c.$$typeof === r) return ob(a, b, d, c);
        b = a.writtenObjects;
        d = b.get(c);
        if ("function" === typeof c.then) {
            if (void 0 !== d) if (T === c) T = null;
            else return "$@" + d.toString(16);
            a = hb(a, c);
            b.set(c, a);
            return "$@" + a.toString(16);
        }
        if (void 0 !== d) {
            if (-1 === d) return a = S(a, c), R(a);
            if (T === c) T = null;
            else return R(d);
        } else b.set(c, -1);
        if (Va(c)) return c;
        if (c instanceof Map) {
            c = Array.from(c);
            for(b = 0; b < c.length; b++)d = c[b][0], "object" === typeof d && null !== d && (e = a.writtenObjects, void 0 === e.get(d) && e.set(d, -1));
            return "$Q" + S(a, c).toString(16);
        }
        if (c instanceof Set) {
            c = Array.from(c);
            for(b = 0; b < c.length; b++)d = c[b], "object" === typeof d && null !== d && (e = a.writtenObjects, void 0 === e.get(d) && e.set(d, -1));
            return "$W" + S(a, c).toString(16);
        }
        null === c || "object" !== typeof c ? a = null : (a = Da && c[Da] || c["@@iterator"], a = "function" === typeof a ? a : null);
        if (a) return Array.from(c);
        a = Wa(c);
        if (a !== ab && (null === a || null !== Wa(a))) throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported.");
        return c;
    }
    if ("string" === typeof c) {
        if ("Z" === c[c.length - 1] && b[d] instanceof Date) return "$D" + c;
        if (1024 <= c.length) return a.pendingChunks += 2, b = a.nextChunkId++, c = q.encode(c), d = c.byteLength, d = b.toString(16) + ":T" + d.toString(16) + ",", d = q.encode(d), a.completedRegularChunks.push(d, c), R(b);
        a = "$" === c[0] ? "$" + c : c;
        return a;
    }
    if ("boolean" === typeof c) return c;
    if ("number" === typeof c) return a = c, Number.isFinite(a) ? 0 === a && -Infinity === 1 / a ? "$-0" : a : Infinity === a ? "$Infinity" : -Infinity === a ? "$-Infinity" : "$NaN";
    if ("undefined" === typeof c) return "$undefined";
    if ("function" === typeof c) {
        if (c.$$typeof === r) return ob(a, b, d, c);
        if (c.$$typeof === t) return b = a.writtenServerReferences, d = b.get(c), void 0 !== d ? a = "$F" + d.toString(16) : (d = c.$$bound, d = {
            id: c.$$id,
            bound: d ? Promise.resolve(d) : null
        }, a = S(a, d), b.set(c, a), a = "$F" + a.toString(16)), a;
        if (/^on[A-Z]/.test(d)) throw Error("Event handlers cannot be passed to Client Component props." + J(b, d) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
        throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + J(b, d));
    }
    if ("symbol" === typeof c) {
        e = a.writtenSymbols;
        f = e.get(c);
        if (void 0 !== f) return R(f);
        f = c.description;
        if (Symbol.for(f) !== c) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (c.description + ") cannot be found among global symbols.") + J(b, d));
        a.pendingChunks++;
        b = a.nextChunkId++;
        d = nb(a, b, "$S" + f);
        a.completedImportChunks.push(d);
        e.set(c, b);
        return R(b);
    }
    if ("bigint" === typeof c) return "$n" + c.toString(10);
    throw Error("Type " + typeof c + " is not supported in Client Component props." + J(b, d));
}
function N(a, b) {
    a = a.onError;
    b = a(b);
    if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b || "";
}
function qb(a, b) {
    null !== a.destination ? (a.status = 2, ca(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function O(a, b, d) {
    d = {
        digest: d
    };
    b = b.toString(16) + ":E" + K(d) + "\n";
    b = q.encode(b);
    a.completedErrorChunks.push(b);
}
function pb(a, b) {
    if (0 === b.status) {
        var d = B, c = b.context;
        d !== c && (null === d ? Fa(c) : null === c ? Ea(d) : d.depth === c.depth ? C(d, c) : d.depth > c.depth ? Ga(d, c) : Ha(d, c), B = c);
        try {
            var e = b.model;
            if ("object" === typeof e && null !== e && e.$$typeof === z) {
                a.writtenObjects.set(e, b.id);
                d = e;
                var f = b.thenableState;
                b.model = e;
                e = Q(a, d.type, d.key, d.ref, d.props, f);
                for(b.thenableState = null; "object" === typeof e && null !== e && e.$$typeof === z;)a.writtenObjects.set(e, b.id), f = e, b.model = e, e = Q(a, f.type, f.key, f.ref, f.props, null);
            }
            "object" === typeof e && null !== e && a.writtenObjects.set(e, b.id);
            var g = b.id;
            T = e;
            var k = K(e, a.toJSON), h = g.toString(16) + ":" + k + "\n", l = q.encode(h);
            a.completedRegularChunks.push(l);
            a.abortableTasks.delete(b);
            b.status = 1;
        } catch (x) {
            g = x === Ia ? La() : x, "object" === typeof g && null !== g && "function" === typeof g.then ? (a = b.ping, g.then(a, a), b.thenableState = Ma()) : (a.abortableTasks.delete(b), b.status = 4, g = N(a, g), O(a, b.id, g));
        }
    }
}
function mb(a) {
    var b = cb.current;
    cb.current = Ra;
    var d = M;
    E = M = a;
    try {
        var c = a.pingedTasks;
        a.pingedTasks = [];
        for(var e = 0; e < c.length; e++)pb(a, c[e]);
        null !== a.destination && P(a, a.destination);
    } catch (f) {
        N(a, f), qb(a, f);
    } finally{
        cb.current = b, E = null, M = d;
    }
}
function P(a, b) {
    m = new Uint8Array(512);
    n = 0;
    try {
        for(var d = a.completedImportChunks, c = 0; c < d.length; c++)a.pendingChunks--, p(b, d[c]);
        d.splice(0, c);
        var e = a.completedHintChunks;
        for(c = 0; c < e.length; c++)p(b, e[c]);
        e.splice(0, c);
        var f = a.completedRegularChunks;
        for(c = 0; c < f.length; c++)a.pendingChunks--, p(b, f[c]);
        f.splice(0, c);
        var g = a.completedErrorChunks;
        for(c = 0; c < g.length; c++)a.pendingChunks--, p(b, g[c]);
        g.splice(0, c);
    } finally{
        a.flushScheduled = !1, m && 0 < n && (b.enqueue(new Uint8Array(m.buffer, 0, n)), m = null, n = 0);
    }
    0 === a.pendingChunks && b.close();
}
function rb(a) {
    a.flushScheduled = null !== a.destination;
    ua ? setTimeout(function() {
        return va.run(a, mb, a);
    }, 0) : setTimeout(function() {
        return mb(a);
    }, 0);
}
function jb(a) {
    if (!1 === a.flushScheduled && 0 === a.pingedTasks.length && null !== a.destination) {
        var b = a.destination;
        a.flushScheduled = !0;
        setTimeout(function() {
            return P(a, b);
        }, 0);
    }
}
function sb(a, b) {
    try {
        var d = a.abortableTasks;
        if (0 < d.size) {
            a.pendingChunks++;
            var c = a.nextChunkId++, e = void 0 === b ? Error("The render was aborted by the server without a reason.") : b, f = N(a, e);
            O(a, c, f, e);
            d.forEach(function(g) {
                g.status = 3;
                var k = R(c);
                g = nb(a, g.id, k);
                a.completedErrorChunks.push(g);
            });
            d.clear();
        }
        null !== a.destination && P(a, a.destination);
    } catch (g) {
        N(a, g), qb(a, g);
    }
}
function tb(a, b) {
    var d = "", c = a[b];
    if (c) d = c.name;
    else {
        var e = b.lastIndexOf("#");
        -1 !== e && (d = b.slice(e + 1), c = a[b.slice(0, e)]);
        if (!c) throw Error('Could not find the module "' + b + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
    }
    return [
        c.id,
        c.chunks,
        d
    ];
}
var U = new Map;
function ub(a) {
    var b = globalThis.__next_require__(a);
    if ("function" !== typeof b.then || "fulfilled" === b.status) return null;
    b.then(function(d) {
        b.status = "fulfilled";
        b.value = d;
    }, function(d) {
        b.status = "rejected";
        b.reason = d;
    });
    return b;
}
function vb() {}
function wb(a) {
    for(var b = a[1], d = [], c = 0; c < b.length;){
        var e = b[c++];
        b[c++];
        var f = U.get(e);
        if (void 0 === f) {
            f = __webpack_require__.e(e);
            d.push(f);
            var g = U.set.bind(U, e, null);
            f.then(g, vb);
            U.set(e, f);
        } else null !== f && d.push(f);
    }
    return 4 === a.length ? 0 === d.length ? ub(a[0]) : Promise.all(d).then(function() {
        return ub(a[0]);
    }) : 0 < d.length ? Promise.all(d) : null;
}
function V(a) {
    var b = globalThis.__next_require__(a[0]);
    if (4 === a.length && "function" === typeof b.then) if ("fulfilled" === b.status) b = b.value;
    else throw b.reason;
    return "*" === a[2] ? b : "" === a[2] ? b.__esModule ? b.default : b : b[a[2]];
}
function xb(a, b, d, c) {
    this.status = a;
    this.value = b;
    this.reason = d;
    this._response = c;
}
xb.prototype = Object.create(Promise.prototype);
xb.prototype.then = function(a, b) {
    switch(this.status){
        case "resolved_model":
            yb(this);
    }
    switch(this.status){
        case "fulfilled":
            a(this.value);
            break;
        case "pending":
        case "blocked":
            a && (null === this.value && (this.value = []), this.value.push(a));
            b && (null === this.reason && (this.reason = []), this.reason.push(b));
            break;
        default:
            b(this.reason);
    }
};
function zb(a, b) {
    for(var d = 0; d < a.length; d++)(0, a[d])(b);
}
function Ab(a, b) {
    if ("pending" === a.status || "blocked" === a.status) {
        var d = a.reason;
        a.status = "rejected";
        a.reason = b;
        null !== d && zb(d, b);
    }
}
function Bb(a, b, d, c, e, f) {
    var g = tb(a._bundlerConfig, b);
    a = wb(g);
    if (d) d = Promise.all([
        d,
        a
    ]).then(function(k) {
        k = k[0];
        var h = V(g);
        return h.bind.apply(h, [
            null
        ].concat(k));
    });
    else if (a) d = Promise.resolve(a).then(function() {
        return V(g);
    });
    else return V(g);
    d.then(Cb(c, e, f), Db(c));
    return null;
}
var W = null, X = null;
function yb(a) {
    var b = W, d = X;
    W = a;
    X = null;
    try {
        var c = JSON.parse(a.value, a._response._fromJSON);
        null !== X && 0 < X.deps ? (X.value = c, a.status = "blocked", a.value = null, a.reason = null) : (a.status = "fulfilled", a.value = c);
    } catch (e) {
        a.status = "rejected", a.reason = e;
    } finally{
        W = b, X = d;
    }
}
function Eb(a, b) {
    a._chunks.forEach(function(d) {
        "pending" === d.status && Ab(d, b);
    });
}
function Z(a, b) {
    var d = a._chunks, c = d.get(b);
    c || (c = a._formData.get(a._prefix + b), c = null != c ? new xb("resolved_model", c, null, a) : new xb("pending", null, null, a), d.set(b, c));
    return c;
}
function Cb(a, b, d) {
    if (X) {
        var c = X;
        c.deps++;
    } else c = X = {
        deps: 1,
        value: null
    };
    return function(e) {
        b[d] = e;
        c.deps--;
        0 === c.deps && "blocked" === a.status && (e = a.value, a.status = "fulfilled", a.value = c.value, null !== e && zb(e, c.value));
    };
}
function Db(a) {
    return function(b) {
        return Ab(a, b);
    };
}
function Fb(a, b) {
    a = Z(a, b);
    "resolved_model" === a.status && yb(a);
    if ("fulfilled" !== a.status) throw a.reason;
    return a.value;
}
function Lb(a, b, d, c) {
    if ("$" === c[0]) switch(c[1]){
        case "$":
            return c.slice(1);
        case "@":
            return b = parseInt(c.slice(2), 16), Z(a, b);
        case "S":
            return Symbol.for(c.slice(2));
        case "F":
            return c = parseInt(c.slice(2), 16), c = Fb(a, c), Bb(a, c.id, c.bound, W, b, d);
        case "Q":
            return b = parseInt(c.slice(2), 16), a = Fb(a, b), new Map(a);
        case "W":
            return b = parseInt(c.slice(2), 16), a = Fb(a, b), new Set(a);
        case "K":
            b = c.slice(2);
            var e = a._prefix + b + "_", f = new FormData;
            a._formData.forEach(function(g, k) {
                k.startsWith(e) && f.append(k.slice(e.length), g);
            });
            return f;
        case "I":
            return Infinity;
        case "-":
            return "$-0" === c ? -0 : -Infinity;
        case "N":
            return NaN;
        case "u":
            return;
        case "D":
            return new Date(Date.parse(c.slice(2)));
        case "n":
            return BigInt(c.slice(2));
        default:
            c = parseInt(c.slice(1), 16);
            a = Z(a, c);
            switch(a.status){
                case "resolved_model":
                    yb(a);
            }
            switch(a.status){
                case "fulfilled":
                    return a.value;
                case "pending":
                case "blocked":
                    return c = W, a.then(Cb(c, b, d), Db(c)), null;
                default:
                    throw a.reason;
            }
    }
    return c;
}
function Mb(a, b) {
    var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new FormData, c = new Map, e = {
        _bundlerConfig: a,
        _prefix: b,
        _formData: d,
        _chunks: c,
        _fromJSON: function(f, g) {
            return "string" === typeof g ? Lb(e, this, f, g) : g;
        }
    };
    return e;
}
function Nb(a) {
    Eb(a, Error("Connection closed."));
}
function Ob(a, b, d) {
    var c = tb(a, b);
    a = wb(c);
    return d ? Promise.all([
        d,
        a
    ]).then(function(e) {
        e = e[0];
        var f = V(c);
        return f.bind.apply(f, [
            null
        ].concat(e));
    }) : a ? Promise.resolve(a).then(function() {
        return V(c);
    }) : Promise.resolve(V(c));
}
function Pb(a, b, d) {
    a = Mb(b, d, a);
    Nb(a);
    a = Z(a, 0);
    a.then(function() {});
    if ("fulfilled" !== a.status) throw a.reason;
    return a.value;
}
exports.createClientModuleProxy = function(a) {
    a = u({}, a, !1);
    return new Proxy(a, ka);
};
exports.decodeAction = function(a, b) {
    var d = new FormData, c = null;
    a.forEach(function(e, f) {
        f.startsWith("$ACTION_") ? f.startsWith("$ACTION_REF_") ? (e = "$ACTION_" + f.slice(12) + ":", e = Pb(a, b, e), c = Ob(b, e.id, e.bound)) : f.startsWith("$ACTION_ID_") && (e = f.slice(11), c = Ob(b, e, null)) : d.append(f, e);
    });
    return null === c ? null : c.then(function(e) {
        return e.bind(null, d);
    });
};
exports.decodeFormState = function(a, b, d) {
    var c = b.get("$ACTION_KEY");
    if ("string" !== typeof c) return Promise.resolve(null);
    var e = null;
    b.forEach(function(g, k) {
        k.startsWith("$ACTION_REF_") && (g = "$ACTION_" + k.slice(12) + ":", e = Pb(b, d, g));
    });
    if (null === e) return Promise.resolve(null);
    var f = e.id;
    return Promise.resolve(e.bound).then(function(g) {
        return null === g ? null : [
            a,
            c,
            f,
            g.length - 1
        ];
    });
};
exports.decodeReply = function(a, b) {
    if ("string" === typeof a) {
        var d = new FormData;
        d.append("0", a);
        a = d;
    }
    a = Mb(b, "", a);
    b = Z(a, 0);
    Nb(a);
    return b;
};
__webpack_unused_export__ = function(a, b, d) {
    return u(a, b + "#" + d, !1);
};
__webpack_unused_export__ = function(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: t
        },
        $$id: {
            value: null === d ? b : b + "#" + d
        },
        $$bound: {
            value: null
        },
        bind: {
            value: fa
        }
    });
};
exports.renderToReadableStream = function(a, b, d) {
    var c = fb(a, b, d ? d.onError : void 0, d ? d.context : void 0, d ? d.identifierPrefix : void 0, d ? d.onPostpone : void 0);
    if (d && d.signal) {
        var e = d.signal;
        if (e.aborted) sb(c, e.reason);
        else {
            var f = function() {
                sb(c, e.reason);
                e.removeEventListener("abort", f);
            };
            e.addEventListener("abort", f);
        }
    }
    return new ReadableStream({
        type: "bytes",
        start: function() {
            rb(c);
        },
        pull: function(g) {
            if (1 === c.status) c.status = 2, ca(g, c.fatalError);
            else if (2 !== c.status && null === c.destination) {
                c.destination = g;
                try {
                    P(c, g);
                } catch (k) {
                    N(c, k), qb(c, k);
                }
            }
        },
        cancel: function(g) {
            c.destination = null;
            sb(c, g);
        }
    }, {
        highWaterMark: 0
    });
}; //# sourceMappingURL=react-server-dom-webpack-server.edge.production.min.js.map


/***/ }),

/***/ 5616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(8855);
} else {}


/***/ }),

/***/ 2898:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 React
 react.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/ 
var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, C = Object.assign, D = {};
function E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = c || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = c || B;
}
var H = G.prototype = new F;
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
    current: null
}, L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function M(a, b, c) {
    var f, d = {}, e = null, g = null;
    if (null != b) for(f in void 0 !== b.ref && (g = b.ref), void 0 !== b.key && (e = "" + b.key), b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = b[f]);
    var h = arguments.length - 2;
    if (1 === h) d.children = c;
    else if (1 < h) {
        for(var k = Array(h), m = 0; m < h; m++)k[m] = arguments[m + 2];
        d.children = k;
    }
    if (a && a.defaultProps) for(f in h = a.defaultProps, h)void 0 === d[f] && (d[f] = h[f]);
    return {
        $$typeof: l,
        type: a,
        key: e,
        ref: g,
        props: d,
        _owner: K.current
    };
}
function N(a, b) {
    return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(c) {
        return b[c];
    });
}
var P = /\/+/g;
function Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, c, f, d) {
    var e = typeof a;
    if ("undefined" === e || "boolean" === e) a = null;
    var g = !1;
    if (null === a) g = !0;
    else switch(e){
        case "string":
        case "number":
            g = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case l:
                case n:
                    g = !0;
            }
    }
    if (g) return g = a, d = d(g), a = "" === f ? "." + Q(g, 0) : f, I(d) ? (c = "", null != a && (c = a.replace(P, "$&/") + "/"), R(d, b, c, "", function(m) {
        return m;
    })) : null != d && (O(d) && (d = N(d, c + (!d.key || g && g.key === d.key ? "" : ("" + d.key).replace(P, "$&/") + "/") + a)), b.push(d)), 1;
    g = 0;
    f = "" === f ? "." : f + ":";
    if (I(a)) for(var h = 0; h < a.length; h++){
        e = a[h];
        var k = f + Q(e, h);
        g += R(e, b, c, k, d);
    }
    else if (k = A(a), "function" === typeof k) for(a = k.call(a), h = 0; !(e = a.next()).done;)e = e.value, k = f + Q(e, h++), g += R(e, b, c, k, d);
    else if ("object" === e) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return g;
}
function S(a, b, c) {
    if (null == a) return a;
    var f = [], d = 0;
    R(a, f, "", "", function(e) {
        return b.call(c, e, d++);
    });
    return f;
}
function T(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(c) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = c;
        }, function(c) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = c;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var U = {
    current: null
};
function V() {
    return new WeakMap;
}
function W() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var X = {
    current: null
}, Y = {
    transition: null
}, Z = {
    ReactCurrentDispatcher: X,
    ReactCurrentCache: U,
    ReactCurrentBatchConfig: Y,
    ReactCurrentOwner: K
};
exports.Children = {
    map: S,
    forEach: function(a, b, c) {
        S(a, function() {
            b.apply(this, arguments);
        }, c);
    },
    count: function(a) {
        var b = 0;
        S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return S(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z;
exports.cache = function(a) {
    return function() {
        var b = U.current;
        if (!b) return a.apply(null, arguments);
        var c = b.getCacheForType(V);
        b = c.get(a);
        void 0 === b && (b = W(), c.set(a, b));
        c = 0;
        for(var f = arguments.length; c < f; c++){
            var d = arguments[c];
            if ("function" === typeof d || "object" === typeof d && null !== d) {
                var e = b.o;
                null === e && (b.o = e = new WeakMap);
                b = e.get(d);
                void 0 === b && (b = W(), e.set(d, b));
            } else e = b.p, null === e && (b.p = e = new Map), b = e.get(d), void 0 === b && (b = W(), e.set(d, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var g = a.apply(null, arguments);
            c = b;
            c.s = 1;
            return c.v = g;
        } catch (h) {
            throw g = b, g.s = 2, g.v = h, h;
        }
    };
};
exports.cloneElement = function(a, b, c) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var f = C({}, a.props), d = a.key, e = a.ref, g = a._owner;
    if (null != b) {
        void 0 !== b.ref && (e = b.ref, g = K.current);
        void 0 !== b.key && (d = "" + b.key);
        if (a.type && a.type.defaultProps) var h = a.type.defaultProps;
        for(k in b)J.call(b, k) && !L.hasOwnProperty(k) && (f[k] = void 0 === b[k] && void 0 !== h ? h[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) f.children = c;
    else if (1 < k) {
        h = Array(k);
        for(var m = 0; m < k; m++)h[m] = arguments[m + 2];
        f.children = h;
    }
    return {
        $$typeof: l,
        type: a.type,
        key: d,
        ref: e,
        props: f,
        _owner: g
    };
};
exports.createContext = function(a) {
    a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: t,
        _context: a
    };
    return a.Consumer = a;
};
exports.createElement = M;
exports.createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.forwardRef = function(a) {
    return {
        $$typeof: v,
        render: a
    };
};
exports.isValidElement = O;
exports.lazy = function(a) {
    return {
        $$typeof: y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: T
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = Y.transition;
    Y.transition = {};
    try {
        a();
    } finally{
        Y.transition = b;
    }
};
exports.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
exports.unstable_useCacheRefresh = function() {
    return X.current.useCacheRefresh();
};
exports.use = function(a) {
    return X.current.use(a);
};
exports.useCallback = function(a, b) {
    return X.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return X.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useDeferredValue = function(a, b) {
    return X.current.useDeferredValue(a, b);
};
exports.useEffect = function(a, b) {
    return X.current.useEffect(a, b);
};
exports.useId = function() {
    return X.current.useId();
};
exports.useImperativeHandle = function(a, b, c) {
    return X.current.useImperativeHandle(a, b, c);
};
exports.useInsertionEffect = function(a, b) {
    return X.current.useInsertionEffect(a, b);
};
exports.useLayoutEffect = function(a, b) {
    return X.current.useLayoutEffect(a, b);
};
exports.useMemo = function(a, b) {
    return X.current.useMemo(a, b);
};
exports.useOptimistic = function(a, b) {
    return X.current.useOptimistic(a, b);
};
exports.useReducer = function(a, b, c) {
    return X.current.useReducer(a, b, c);
};
exports.useRef = function(a) {
    return X.current.useRef(a);
};
exports.useState = function(a) {
    return X.current.useState(a);
};
exports.useSyncExternalStore = function(a, b, c) {
    return X.current.useSyncExternalStore(a, b, c);
};
exports.useTransition = function() {
    return X.current.useTransition();
};
exports.version = "18.3.0-canary-2c338b16f-20231116"; //# sourceMappingURL=react.production.min.js.map


/***/ }),

/***/ 1115:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 React
 react.shared-subset.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = "string" === typeof a || a instanceof URL ? new Request(a, b) : a;
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = {
    current: null
}, u = {
    current: null
}, v = {
    ReactCurrentDispatcher: t,
    ReactCurrentOwner: u
}, w = {
    ReactCurrentCache: n
}, x = Symbol.for("react.element"), y = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), C = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), G = Symbol.iterator;
function H(a) {
    if (null === a || "object" !== typeof a) return null;
    a = G && a[G] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function I(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var J = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, K = {};
function L(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = K;
    this.updater = d || J;
}
L.prototype.isReactComponent = {};
L.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(I(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
L.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function M() {}
M.prototype = L.prototype;
function N(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = K;
    this.updater = d || J;
}
var O = N.prototype = new M;
O.constructor = N;
m(O, L.prototype);
O.isPureReactComponent = !0;
var P = Array.isArray, Q = Object.prototype.hasOwnProperty, R = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function S(a, b) {
    return {
        $$typeof: x,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function T(a) {
    return "object" === typeof a && null !== a && a.$$typeof === x;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var U = /\/+/g;
function V(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function W(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case x:
                case y:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + V(h, 0) : c, P(e) ? (d = "", null != a && (d = a.replace(U, "$&/") + "/"), W(e, b, d, "", function(l) {
        return l;
    })) : null != e && (T(e) && (e = S(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(U, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (P(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + V(f, g);
        h += W(f, b, d, k, e);
    }
    else if (k = H(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + V(f, g++), h += W(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(I(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function X(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    W(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function Y(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function aa() {
    return new WeakMap;
}
function Z() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
exports.Children = {
    map: X,
    forEach: function(a, b, d) {
        X(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        X(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return X(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!T(a)) throw Error(I(143));
        return a;
    }
};
exports.Fragment = z;
exports.Profiler = B;
exports.StrictMode = A;
exports.Suspense = D;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v;
exports.__SECRET_SERVER_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(aa);
        b = d.get(a);
        void 0 === b && (b = Z(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = Z(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = Z(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(I(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = u.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)Q.call(b, k) && !R.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: x,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)Q.call(b, c) && !R.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: x,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: u.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function() {
    throw Error(I(248));
};
exports.forwardRef = function(a) {
    return {
        $$typeof: C,
        render: a
    };
};
exports.isValidElement = T;
exports.lazy = function(a) {
    return {
        $$typeof: F,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: Y
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: E,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    a();
};
exports.use = function(a) {
    return t.current.use(a);
};
exports.useCallback = function(a, b) {
    return t.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return t.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return t.current.useId();
};
exports.useMemo = function(a, b) {
    return t.current.useMemo(a, b);
};
exports.version = "18.3.0-canary-2c338b16f-20231116"; //# sourceMappingURL=react.shared-subset.production.min.js.map


/***/ }),

/***/ 577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(2898);
} else {}


/***/ }),

/***/ 6379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(1115);
} else {}


/***/ }),

/***/ 844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZK: () => (/* binding */ warn)
});

// UNUSED EXPORTS: bootstrap, error, event, info, prefixes, ready, trace, wait, warnOnce

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/lib/picocolors.js
// ISC License
// Copyright (c) 2021 Alexey Raspopov, Kostiantyn Denysov, Anton Verinov
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
//
// https://github.com/alexeyraspopov/picocolors/blob/b6261487e7b81aaab2440e397a356732cad9e342/picocolors.js#L1
var _globalThis;
const { env, stdout } = ((_globalThis = globalThis) == null ? void 0 : _globalThis.process) ?? {};
const enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout == null ? void 0 : stdout.isTTY) && !env.CI && env.TERM !== "dumb");
const replaceClose = (str, close, replace, index)=>{
    const start = str.substring(0, index) + replace;
    const end = str.substring(index + close.length);
    const nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
const formatter = (open, close, replace = open)=>(input)=>{
        const string = "" + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
const picocolors_reset = (/* unused pure expression or super */ null && (enabled ? (s)=>`\x1b[0m${s}\x1b[0m` : String));
const bold = enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String;
const dim = enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String;
const italic = enabled ? formatter("\x1b[3m", "\x1b[23m") : String;
const underline = enabled ? formatter("\x1b[4m", "\x1b[24m") : String;
const inverse = enabled ? formatter("\x1b[7m", "\x1b[27m") : String;
const picocolors_hidden = enabled ? formatter("\x1b[8m", "\x1b[28m") : String;
const strikethrough = enabled ? formatter("\x1b[9m", "\x1b[29m") : String;
const black = enabled ? formatter("\x1b[30m", "\x1b[39m") : String;
const red = enabled ? formatter("\x1b[31m", "\x1b[39m") : String;
const green = enabled ? formatter("\x1b[32m", "\x1b[39m") : String;
const yellow = enabled ? formatter("\x1b[33m", "\x1b[39m") : String;
const blue = enabled ? formatter("\x1b[34m", "\x1b[39m") : String;
const magenta = enabled ? formatter("\x1b[35m", "\x1b[39m") : String;
const purple = enabled ? formatter("\x1b[38;2;173;127;168m", "\x1b[39m") : String;
const cyan = enabled ? formatter("\x1b[36m", "\x1b[39m") : String;
const white = enabled ? formatter("\x1b[37m", "\x1b[39m") : String;
const gray = enabled ? formatter("\x1b[90m", "\x1b[39m") : String;
const bgBlack = enabled ? formatter("\x1b[40m", "\x1b[49m") : String;
const bgRed = enabled ? formatter("\x1b[41m", "\x1b[49m") : String;
const bgGreen = enabled ? formatter("\x1b[42m", "\x1b[49m") : String;
const bgYellow = enabled ? formatter("\x1b[43m", "\x1b[49m") : String;
const bgBlue = enabled ? formatter("\x1b[44m", "\x1b[49m") : String;
const bgMagenta = enabled ? formatter("\x1b[45m", "\x1b[49m") : String;
const bgCyan = enabled ? formatter("\x1b[46m", "\x1b[49m") : String;
const bgWhite = enabled ? formatter("\x1b[47m", "\x1b[49m") : String; //# sourceMappingURL=picocolors.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/build/output/log.js

const prefixes = {
    wait: white(bold("○")),
    error: red(bold("⨯")),
    warn: yellow(bold("⚠")),
    ready: "▲",
    info: white(bold(" ")),
    event: green(bold("✓")),
    trace: magenta(bold("\xbb"))
};
const LOGGING_METHOD = {
    log: "log",
    warn: "warn",
    error: "error"
};
function prefixedLog(prefixType, ...message) {
    if ((message[0] === "" || message[0] === undefined) && message.length === 1) {
        message.shift();
    }
    const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : "log";
    const prefix = prefixes[prefixType];
    // If there's no message, don't print the prefix but a new line
    if (message.length === 0) {
        console[consoleMethod]("");
    } else {
        console[consoleMethod](" " + prefix, ...message);
    }
}
function bootstrap(...message) {
    console.log(" ", ...message);
}
function wait(...message) {
    prefixedLog("wait", ...message);
}
function error(...message) {
    prefixedLog("error", ...message);
}
function warn(...message) {
    prefixedLog("warn", ...message);
}
function ready(...message) {
    prefixedLog("ready", ...message);
}
function info(...message) {
    prefixedLog("info", ...message);
}
function log_event(...message) {
    prefixedLog("event", ...message);
}
function trace(...message) {
    prefixedLog("trace", ...message);
}
const warnOnceMessages = new Set();
function warnOnce(...message) {
    if (!warnOnceMessages.has(message[0])) {
        warnOnceMessages.add(message.join(" "));
        warn(...message);
    }
} //# sourceMappingURL=log.js.map


/***/ }),

/***/ 2568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ createProxy)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* eslint-disable import/no-extraneous-dependencies */ 
// Re-assign to make it typed.
const createProxy = react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.createClientModuleProxy; //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 2002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H4: () => (/* binding */ NEXT_RSC_UNION_QUERY),
/* harmony export */   om: () => (/* binding */ ACTION),
/* harmony export */   vu: () => (/* binding */ FLIGHT_PARAMETERS)
/* harmony export */ });
/* unused harmony exports RSC_HEADER, NEXT_ROUTER_STATE_TREE, NEXT_ROUTER_PREFETCH_HEADER, NEXT_URL, RSC_CONTENT_TYPE_HEADER, RSC_VARY_HEADER, NEXT_DID_POSTPONE_HEADER */
const RSC_HEADER = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC_HEADER + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH_HEADER + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC_HEADER
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH_HEADER
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed"; //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 1681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DYNAMIC_ERROR_CODE: () => (/* binding */ DYNAMIC_ERROR_CODE),
/* harmony export */   DynamicServerError: () => (/* binding */ DynamicServerError)
/* harmony export */ });
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(type){
        super("Dynamic server usage: " + type);
        this.digest = DYNAMIC_ERROR_CODE;
    }
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 8145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ staticGenerationBailout)
/* harmony export */ });
/* harmony import */ var _hooks_server_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1681);
/* harmony import */ var _static_generation_async_storage_external__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8823);


class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
function formatErrorMessage(reason, opts) {
    const { dynamic, link } = opts || {};
    const suffix = link ? " See more info here: " + link : "";
    return "Page" + (dynamic ? ' with `dynamic = "' + dynamic + '"`' : "") + " couldn't be rendered statically because it used `" + reason + "`." + suffix;
}
const staticGenerationBailout = (reason, param)=>{
    let { dynamic, link } = param === void 0 ? {} : param;
    const staticGenerationStore = _static_generation_async_storage_external__WEBPACK_IMPORTED_MODULE_1__/* .staticGenerationAsyncStorage */ .A.getStore();
    if (!staticGenerationStore) return false;
    if (staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore.dynamicShouldError) {
        throw new StaticGenBailoutError(formatErrorMessage(reason, {
            link,
            dynamic: dynamic != null ? dynamic : "error"
        }));
    }
    const message = formatErrorMessage(reason, {
        dynamic,
        // this error should be caught by Next to bail out of static generation
        // in case it's uncaught, this link provides some additional context as to why
        link: "https://nextjs.org/docs/messages/dynamic-server-error"
    });
    // If postpone is available, we should postpone the render.
    staticGenerationStore.postpone == null ? void 0 : staticGenerationStore.postpone.call(staticGenerationStore, reason);
    // As this is a bailout, we don't want to revalidate, so set the revalidate
    // to 0.
    staticGenerationStore.revalidate = 0;
    if (staticGenerationStore.isStaticGeneration) {
        const err = new _hooks_server_context__WEBPACK_IMPORTED_MODULE_0__.DynamicServerError(message);
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
}; //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 1707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ar: () => (/* binding */ NEXT_CACHE_SOFT_TAGS_HEADER),
/* harmony export */   BR: () => (/* binding */ CACHE_ONE_YEAR),
/* harmony export */   EX: () => (/* binding */ NEXT_META_SUFFIX),
/* harmony export */   Et: () => (/* binding */ NEXT_CACHE_TAGS_HEADER),
/* harmony export */   Ho: () => (/* binding */ NEXT_CACHE_TAG_MAX_LENGTH),
/* harmony export */   JT: () => (/* binding */ NEXT_DATA_SUFFIX),
/* harmony export */   Qq: () => (/* binding */ PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER),
/* harmony export */   Sx: () => (/* binding */ RSC_PREFETCH_SUFFIX),
/* harmony export */   X_: () => (/* binding */ NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER),
/* harmony export */   dN: () => (/* binding */ NEXT_QUERY_PARAM_PREFIX),
/* harmony export */   hd: () => (/* binding */ RSC_SUFFIX),
/* harmony export */   of: () => (/* binding */ NEXT_CACHE_REVALIDATED_TAGS_HEADER),
/* harmony export */   y3: () => (/* binding */ PRERENDER_REVALIDATE_HEADER),
/* harmony export */   zt: () => (/* binding */ NEXT_CACHE_IMPLICIT_TAG_ID)
/* harmony export */ });
/* unused harmony exports NEXT_BODY_SUFFIX, NEXT_CACHE_SOFT_TAG_MAX_LENGTH, MIDDLEWARE_FILENAME, MIDDLEWARE_LOCATION_REGEXP, INSTRUMENTATION_HOOK_FILENAME, PAGES_DIR_ALIAS, DOT_NEXT_ALIAS, ROOT_DIR_ALIAS, APP_DIR_ALIAS, RSC_MOD_REF_PROXY_ALIAS, RSC_ACTION_VALIDATE_ALIAS, RSC_ACTION_PROXY_ALIAS, RSC_ACTION_ENCRYPTION_ALIAS, RSC_ACTION_CLIENT_WRAPPER_ALIAS, PUBLIC_DIR_MIDDLEWARE_CONFLICT, SSG_GET_INITIAL_PROPS_CONFLICT, SERVER_PROPS_GET_INIT_PROPS_CONFLICT, SERVER_PROPS_SSG_CONFLICT, STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR, SERVER_PROPS_EXPORT_ERROR, GSP_NO_RETURNED_VALUE, GSSP_NO_RETURNED_VALUE, UNSTABLE_REVALIDATE_RENAME_ERROR, GSSP_COMPONENT_MEMBER_ERROR, NON_STANDARD_NODE_ENV, SSG_FALLBACK_EXPORT_ERROR, ESLINT_DEFAULT_DIRS, ESLINT_PROMPT_VALUES, SERVER_RUNTIME, WEBPACK_LAYERS, WEBPACK_RESOURCE_QUERIES */
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
const RSC_SUFFIX = ".rsc";
const NEXT_DATA_SUFFIX = ".json";
const NEXT_META_SUFFIX = ".meta";
const NEXT_BODY_SUFFIX = ".body";
const NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
const NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = (/* unused pure expression or super */ null && (`(?:src/)?${MIDDLEWARE_FILENAME}`));
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "next/dist/build/webpack/loaders/next-flight-loader/module-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
const ESLINT_DEFAULT_DIRS = (/* unused pure expression or super */ null && ([
    "app",
    "pages",
    "components",
    "lib",
    "src"
]));
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "action-browser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route",
    /**
   * The layer for the server bundle for App Route handlers.
   */ appRouteHandler: "app-route-handler"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        server: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler
        ],
        nonClientServerTarget: [
            // plus middleware and pages api
            WEBPACK_LAYERS_NAMES.middleware,
            WEBPACK_LAYERS_NAMES.api
        ],
        app: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
};
 //# sourceMappingURL=constants.js.map


/***/ }),

/***/ 5932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ RequestAsyncStorageWrapper)
});

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
var app_router_headers = __webpack_require__(2002);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js
var adapters_headers = __webpack_require__(5683);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js
var request_cookies = __webpack_require__(8119);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
var spec_extension_cookies = __webpack_require__(9558);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/lib/constants.js
var constants = __webpack_require__(1707);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/api-utils/index.js


/**
 *
 * @param res response object
 * @param statusCode `HTTP` status code of response
 */ function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
/**
 *
 * @param res response object
 * @param [statusOrUrl] `HTTP` status code of redirect
 * @param url URL of redirect
 */ function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = adapters_headers/* HeadersAdapter */.h.from(req.headers);
    const previewModeId = headers.get(constants/* PRERENDER_REVALIDATE_HEADER */.y3);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(constants/* PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER */.Qq);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = (/* unused pure expression or super */ null && (4 * 1024 * 1024));
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __webpack_require__(9577);
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
/**
 * Custom error class
 */ class ApiError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
/**
 * Sends error in `response`
 * @param res response object
 * @param statusCode of response
 * @param message of response
 */ function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
/**
 * Execute getter function only if its needed
 * @param LazyProps `req` and `params` for lazyProp
 * @param prop name of property
 * @param getter function to get data
 */ function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js

class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && checkIsOnDemandRevalidate(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(COOKIE_NAME_PRERENDER_BYPASS)) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && cookieValue === previewProps.previewModeId);
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error("Invariant: previewProps missing previewModeId this should never happen");
        }
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: this._previewModeId,
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/"
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: "",
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js





function getHeaders(headers) {
    const cleaned = adapters_headers/* HeadersAdapter */.h.from(headers);
    for (const param of app_router_headers/* FLIGHT_PARAMETERS */.vu){
        cleaned.delete(param.toString().toLowerCase());
    }
    return adapters_headers/* HeadersAdapter */.h.seal(cleaned);
}
function getCookies(headers) {
    const cookies = new spec_extension_cookies/* RequestCookies */.q(adapters_headers/* HeadersAdapter */.h.from(headers));
    return request_cookies/* RequestCookiesAdapter */.Qb.seal(cookies);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new spec_extension_cookies/* RequestCookies */.q(adapters_headers/* HeadersAdapter */.h.from(headers));
    return request_cookies/* MutableRequestCookiesAdapter */.vr.wrap(cookies, onUpdateCookies);
}
const RequestAsyncStorageWrapper = {
    /**
   * Wrap the callback with the given store so it can access the underlying
   * store using hooks.
   *
   * @param storage underlying storage object returned by the module
   * @param context context to seed the store
   * @param callback function to call within the scope of the context
   * @returns the result returned by the callback
   */ wrap (storage, { req, res, renderOpts }, callback) {
        let previewProps = undefined;
        if (renderOpts && "previewProps" in renderOpts) {
            // TODO: investigate why previewProps isn't on RenderOpts
            previewProps = renderOpts.previewProps;
        }
        function defaultOnUpdateCookies(cookies) {
            if (res) {
                res.setHeader("Set-Cookie", cookies);
            }
        }
        const cache = {};
        const store = {
            get headers () {
                if (!cache.headers) {
                    // Seal the headers object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.headers = getHeaders(req.headers);
                }
                return cache.headers;
            },
            get cookies () {
                if (!cache.cookies) {
                    // Seal the cookies object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.cookies = getCookies(req.headers);
                }
                return cache.cookies;
            },
            get mutableCookies () {
                if (!cache.mutableCookies) {
                    cache.mutableCookies = getMutableCookies(req.headers, (renderOpts == null ? void 0 : renderOpts.onUpdateCookies) || (res ? defaultOnUpdateCookies : undefined));
                }
                return cache.mutableCookies;
            },
            get draftMode () {
                if (!cache.draftMode) {
                    cache.draftMode = new DraftModeProvider(previewProps, req, this.cookies, this.mutableCookies);
                }
                return cache.draftMode;
            }
        };
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=request-async-storage-wrapper.js.map


/***/ }),

/***/ 2251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ RouteKind)
/* harmony export */ });
var RouteKind;
(function(RouteKind) {
    RouteKind[/**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ "PAGES"] = "PAGES";
    RouteKind[/**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ "PAGES_API"] = "PAGES_API";
    RouteKind[/**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ "APP_PAGE"] = "APP_PAGE";
    RouteKind[/**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ "APP_ROUTE"] = "APP_ROUTE";
})(RouteKind || (RouteKind = {})); //# sourceMappingURL=route-kind.js.map


/***/ }),

/***/ 8381:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (true) {
    module.exports = __webpack_require__(8079);
} else {} //# sourceMappingURL=module.compiled.js.map


/***/ }),

/***/ 8079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AppRouteRouteModule: () => (/* binding */ AppRouteRouteModule)
});

// UNUSED EXPORTS: default

// NAMESPACE OBJECT: ./node_modules/next/dist/esm/client/components/headers.js
var headers_namespaceObject = {};
__webpack_require__.r(headers_namespaceObject);
__webpack_require__.d(headers_namespaceObject, {
  cookies: () => (headers_cookies),
  draftMode: () => (draftMode),
  headers: () => (headers_headers)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/esm/shared/lib/app-router-context.shared-runtime.js
var app_router_context_shared_runtime_namespaceObject = {};
__webpack_require__.r(app_router_context_shared_runtime_namespaceObject);
__webpack_require__.d(app_router_context_shared_runtime_namespaceObject, {
  AppRouterContext: () => (e1),
  CacheStates: () => (e0),
  GlobalLayoutRouterContext: () => (e3),
  LayoutRouterContext: () => (e2),
  TemplateContext: () => (e4)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/esm/server/future/route-modules/app-route/shared-modules.js
var shared_modules_namespaceObject = {};
__webpack_require__.r(shared_modules_namespaceObject);
__webpack_require__.d(shared_modules_namespaceObject, {
  appRouterContext: () => (app_router_context_shared_runtime_namespaceObject)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/route-module.js
/**
 * RouteModule is the base class for all route modules. This class should be
 * extended by all route modules.
 */ class RouteModule {
    constructor({ userland, definition }){
        this.userland = userland;
        this.definition = definition;
    }
} //# sourceMappingURL=route-module.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js + 2 modules
var request_async_storage_wrapper = __webpack_require__(5932);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/static-generation-async-storage-wrapper.js
const StaticGenerationAsyncStorageWrapper = {
    wrap (storage, { urlPathname, renderOpts, postpone }, callback) {
        /**
     * Rules of Static & Dynamic HTML:
     *
     *    1.) We must generate static HTML unless the caller explicitly opts
     *        in to dynamic HTML support.
     *
     *    2.) If dynamic HTML support is requested, we must honor that request
     *        or throw an error. It is the sole responsibility of the caller to
     *        ensure they aren't e.g. requesting dynamic HTML for an AMP page.
     *
     *    3.) If the request is in draft mode, we must generate dynamic HTML.
     *
     *    4.) If the request is a server action, we must generate dynamic HTML.
     *
     * These rules help ensure that other existing features like request caching,
     * coalescing, and ISR continue working as intended.
     */ const isStaticGeneration = !renderOpts.supportsDynamicHTML && !renderOpts.isDraftMode && !renderOpts.isServerAction;
        const store = {
            isStaticGeneration,
            urlPathname,
            pagePath: renderOpts.originalPathname,
            incrementalCache: // so that it can access the fs cache without mocks
            renderOpts.incrementalCache || globalThis.__incrementalCache,
            isRevalidate: renderOpts.isRevalidate,
            isPrerendering: renderOpts.nextExport,
            fetchCache: renderOpts.fetchCache,
            isOnDemandRevalidate: renderOpts.isOnDemandRevalidate,
            isDraftMode: renderOpts.isDraftMode,
            postpone: // we don't need to postpone.
            isStaticGeneration && renderOpts.experimental.ppr && postpone ? (reason)=>{
                // Keep track of if the postpone API has been called.
                store.postponeWasTriggered = true;
                return postpone(`This page needs to bail out of prerendering at this point because it used ${reason}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`);
            } : undefined
        };
        // TODO: remove this when we resolve accessing the store outside the execution context
        renderOpts.store = store;
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=static-generation-async-storage-wrapper.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js
var request_cookies = __webpack_require__(8119);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/helpers/response-handlers.js

function handleRedirectResponse(url, mutableCookies, status) {
    const headers = new Headers({
        location: url
    });
    (0,request_cookies/* appendMutableCookies */._5)(headers, mutableCookies);
    return new Response(null, {
        status,
        headers
    });
}
function handleBadRequestResponse() {
    return new Response(null, {
        status: 400
    });
}
function handleNotFoundResponse() {
    return new Response(null, {
        status: 404
    });
}
function handleMethodNotAllowedResponse() {
    return new Response(null, {
        status: 405
    });
}
function handleInternalServerErrorResponse() {
    return new Response(null, {
        status: 500
    });
} //# sourceMappingURL=response-handlers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/http.js
/**
 * List of valid HTTP methods that can be implemented by Next.js's Custom App
 * Routes.
 */ const HTTP_METHODS = [
    "GET",
    "HEAD",
    "OPTIONS",
    "POST",
    "PUT",
    "DELETE",
    "PATCH"
];
/**
 * Checks to see if the passed string is an HTTP method. Note that this is case
 * sensitive.
 *
 * @param maybeMethod the string that may be an HTTP method
 * @returns true if the string is an HTTP method
 */ function isHTTPMethod(maybeMethod) {
    return HTTP_METHODS.includes(maybeMethod);
} //# sourceMappingURL=http.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/lib/patch-fetch.js
var patch_fetch = __webpack_require__(9845);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/lib/trace/tracer.js
var tracer = __webpack_require__(200);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/lib/trace/constants.js
var constants = __webpack_require__(490);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/helpers/get-pathname-from-absolute-path.js
/**
 * Get pathname from absolute path.
 *
 * @param absolutePath the absolute path
 * @returns the pathname
 */ function getPathnameFromAbsolutePath(absolutePath) {
    // Remove prefix including app dir
    let appDir = "/app/";
    if (!absolutePath.includes(appDir)) {
        appDir = "\\app\\";
    }
    const [, ...parts] = absolutePath.split(appDir);
    const relativePath = appDir[0] + parts.join(appDir);
    // remove extension
    const pathname = relativePath.split(".").slice(0, -1).join(".");
    return pathname;
} //# sourceMappingURL=get-pathname-from-absolute-path.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var cookies = __webpack_require__(9462);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/next-url.js + 10 modules
var next_url = __webpack_require__(2639);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/helpers/clean-url.js
/**
 * Cleans a URL by stripping the protocol, host, and search params.
 *
 * @param urlString the url to clean
 * @returns the cleaned url
 */ function cleanURL(urlString) {
    const url = new URL(urlString);
    url.host = "localhost:3000";
    url.search = "";
    url.protocol = "http";
    return url.toString();
} //# sourceMappingURL=clean-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/helpers/proxy-request.js



function proxyRequest(request, { dynamic }, hooks) {
    function handleNextUrlBailout(prop) {
        switch(prop){
            case "search":
            case "searchParams":
            case "toString":
            case "href":
            case "origin":
                hooks.staticGenerationBailout(`nextUrl.${prop}`);
                return;
            default:
                return;
        }
    }
    const cache = {};
    const handleForceStatic = (url, prop)=>{
        switch(prop){
            case "search":
                return "";
            case "searchParams":
                if (!cache.searchParams) cache.searchParams = new URLSearchParams();
                return cache.searchParams;
            case "url":
            case "href":
                if (!cache.url) cache.url = cleanURL(url);
                return cache.url;
            case "toJSON":
            case "toString":
                if (!cache.url) cache.url = cleanURL(url);
                if (!cache.toString) cache.toString = ()=>cache.url;
                return cache.toString;
            case "headers":
                if (!cache.headers) cache.headers = new Headers();
                return cache.headers;
            case "cookies":
                if (!cache.headers) cache.headers = new Headers();
                if (!cache.cookies) cache.cookies = new cookies.RequestCookies(cache.headers);
                return cache.cookies;
            case "clone":
                if (!cache.url) cache.url = cleanURL(url);
                return ()=>new next_url/* NextURL */.c(cache.url);
            default:
                break;
        }
    };
    const wrappedNextUrl = new Proxy(request.nextUrl, {
        get (target, prop) {
            handleNextUrlBailout(prop);
            if (dynamic === "force-static" && typeof prop === "string") {
                const result = handleForceStatic(target.href, prop);
                if (result !== undefined) return result;
            }
            const value = target[prop];
            if (typeof value === "function") {
                return value.bind(target);
            }
            return value;
        },
        set (target, prop, value) {
            handleNextUrlBailout(prop);
            target[prop] = value;
            return true;
        }
    });
    const handleReqBailout = (prop)=>{
        switch(prop){
            case "headers":
                hooks.headerHooks.headers();
                return;
            // if request.url is accessed directly instead of
            // request.nextUrl we bail since it includes query
            // values that can be relied on dynamically
            case "url":
            case "cookies":
            case "body":
            case "blob":
            case "json":
            case "text":
            case "arrayBuffer":
            case "formData":
                hooks.staticGenerationBailout(`request.${prop}`);
                return;
            default:
                return;
        }
    };
    return new Proxy(request, {
        get (target, prop) {
            handleReqBailout(prop);
            if (prop === "nextUrl") {
                return wrappedNextUrl;
            }
            if (dynamic === "force-static" && typeof prop === "string") {
                const result = handleForceStatic(target.url, prop);
                if (result !== undefined) return result;
            }
            const value = target[prop];
            if (typeof value === "function") {
                return value.bind(target);
            }
            return value;
        },
        set (target, prop, value) {
            handleReqBailout(prop);
            target[prop] = value;
            return true;
        }
    });
} //# sourceMappingURL=proxy-request.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/not-found.js
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
/**
 * When used in a React server component, this will set the status code to 404.
 * When used in a custom app route it will just send a 404 status.
 */ function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
/**
 * Checks an error to determine if it's an error generated by the `notFound()`
 * helper.
 *
 * @param error the error that may reference a not found error
 * @returns true if the error is a not found error
 */ function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
} //# sourceMappingURL=not-found.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/request-async-storage.external.js
var request_async_storage_external = __webpack_require__(2445);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/action-async-storage.external.js
var action_async_storage_external = __webpack_require__(8340);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/redirect-status-code.js
var redirect_status_code_RedirectStatusCode;
(function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
})(redirect_status_code_RedirectStatusCode || (redirect_status_code_RedirectStatusCode = {})); //# sourceMappingURL=redirect-status-code.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/redirect.js



const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = RedirectStatusCode.TemporaryRedirect;
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    const requestStore = requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
/**
 * When used in a streaming context, this will insert a meta tag to
 * redirect the user to the target page. When used in a custom app route, it
 * will serve a 307/303 to the caller.
 *
 * @param url the url to redirect to
 */ function redirect(url, type) {
    if (type === void 0) type = "replace";
    const actionStore = actionAsyncStorage.getStore();
    throw getRedirectError(url, type, // as we don't want the POST request to follow the redirect,
    // as it could result in erroneous re-submissions.
    (actionStore == null ? void 0 : actionStore.isAction) ? RedirectStatusCode.SeeOther : RedirectStatusCode.TemporaryRedirect);
}
/**
 * When used in a streaming context, this will insert a meta tag to
 * redirect the user to the target page. When used in a custom app route, it
 * will serve a 308/303 to the caller.
 *
 * @param url the url to redirect to
 */ function permanentRedirect(url, type) {
    if (type === void 0) type = "replace";
    const actionStore = actionAsyncStorage.getStore();
    throw getRedirectError(url, type, // as we don't want the POST request to follow the redirect,
    // as it could result in erroneous re-submissions.
    (actionStore == null ? void 0 : actionStore.isAction) ? RedirectStatusCode.SeeOther : RedirectStatusCode.PermanentRedirect);
}
/**
 * Checks an error to determine if it's an error generated by the
 * `redirect(url)` helper.
 *
 * @param error the error that may reference a redirect error
 * @returns true if the error is a redirect error
 */ function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination, status] = error.digest.split(";", 4);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in redirect_status_code_RedirectStatusCode;
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return Number(error.digest.split(";", 4)[3]);
} //# sourceMappingURL=redirect.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/helpers/resolve-handler-error.js



function resolveHandlerError(err) {
    if (isRedirectError(err)) {
        const redirect = getURLFromRedirectError(err);
        if (!redirect) {
            throw new Error("Invariant: Unexpected redirect url format");
        }
        const status = getRedirectStatusCodeFromError(err);
        // This is a redirect error! Send the redirect response.
        return handleRedirectResponse(redirect, err.mutableCookies, status);
    }
    if (isNotFoundError(err)) {
        // This is a not found error! Send the not found response.
        return handleNotFoundResponse();
    }
    // Return false to indicate that this is not a handled error.
    return false;
} //# sourceMappingURL=resolve-handler-error.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/build/output/log.js + 1 modules
var log = __webpack_require__(844);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/helpers/auto-implement-methods.js


const AUTOMATIC_ROUTE_METHODS = [
    "HEAD",
    "OPTIONS"
];
function autoImplementMethods(handlers) {
    // Loop through all the HTTP methods to create the initial methods object.
    // Each of the methods will be set to the the 405 response handler.
    const methods = HTTP_METHODS.reduce((acc, method)=>({
            ...acc,
            // If the userland module implements the method, then use it. Otherwise,
            // use the 405 response handler.
            [method]: handlers[method] ?? handleMethodNotAllowedResponse
        }), {});
    // Get all the methods that could be automatically implemented that were not
    // implemented by the userland module.
    const implemented = new Set(HTTP_METHODS.filter((method)=>handlers[method]));
    const missing = AUTOMATIC_ROUTE_METHODS.filter((method)=>!implemented.has(method));
    // Loop over the missing methods to automatically implement them if we can.
    for (const method of missing){
        // If the userland module doesn't implement the HEAD method, then
        // we'll automatically implement it by calling the GET method (if it
        // exists).
        if (method === "HEAD") {
            // If the userland module doesn't implement the GET method, then
            // we're done.
            if (!handlers.GET) break;
            // Implement the HEAD method by calling the GET method.
            methods.HEAD = handlers.GET;
            // Mark it as implemented.
            implemented.add("HEAD");
            continue;
        }
        // If OPTIONS is not provided then implement it.
        if (method === "OPTIONS") {
            // TODO: check if HEAD is implemented, if so, use it to add more headers
            // Get all the methods that were implemented by the userland module.
            const allow = [
                "OPTIONS",
                ...implemented
            ];
            // If the list of methods doesn't include HEAD, but it includes GET, then
            // add HEAD as it's automatically implemented.
            if (!implemented.has("HEAD") && implemented.has("GET")) {
                allow.push("HEAD");
            }
            // Sort and join the list with commas to create the `Allow` header. See:
            // https://httpwg.org/specs/rfc9110.html#field.allow
            const headers = {
                Allow: allow.sort().join(", ")
            };
            // Implement the OPTIONS method by returning a 204 response with the
            // `Allow` header.
            methods.OPTIONS = ()=>new Response(null, {
                    status: 204,
                    headers
                });
            // Mark this method as implemented.
            implemented.add("OPTIONS");
            continue;
        }
        throw new Error(`Invariant: should handle all automatic implementable methods, got method: ${method}`);
    }
    return methods;
} //# sourceMappingURL=auto-implement-methods.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/helpers/get-non-static-methods.js
const NON_STATIC_METHODS = [
    "OPTIONS",
    "POST",
    "PUT",
    "DELETE",
    "PATCH"
];
/**
 * Gets all the method names for handlers that are not considered static.
 *
 * @param handlers the handlers from the userland module
 * @returns the method names that are not considered static or false if all
 *          methods are static
 */ function getNonStaticMethods(handlers) {
    // We can currently only statically optimize if only GET/HEAD are used as
    // prerender can't be used conditionally based on the method currently.
    const methods = NON_STATIC_METHODS.filter((method)=>handlers[method]);
    if (methods.length === 0) return false;
    return methods;
} //# sourceMappingURL=get-non-static-methods.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/helpers/parsed-url-query-to-params.js
/**
 * Converts the query into params.
 *
 * @param query the query to convert to params
 * @returns the params
 */ function parsedUrlQueryToParams(query) {
    const params = {};
    for (const [key, value] of Object.entries(query)){
        if (typeof value === "undefined") continue;
        params[key] = value;
    }
    return params;
} //# sourceMappingURL=parsed-url-query-to-params.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/hooks-server-context.js
var hooks_server_context = __webpack_require__(1681);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js
var headers = __webpack_require__(5683);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
var spec_extension_cookies = __webpack_require__(9558);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/static-generation-bailout.js
var static_generation_bailout = __webpack_require__(8145);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/draft-mode.js

class DraftMode {
    get isEnabled() {
        return this._provider.isEnabled;
    }
    enable() {
        if ((0,static_generation_bailout/* staticGenerationBailout */.o)("draftMode().enable()")) {
            return;
        }
        return this._provider.enable();
    }
    disable() {
        if ((0,static_generation_bailout/* staticGenerationBailout */.o)("draftMode().disable()")) {
            return;
        }
        return this._provider.disable();
    }
    constructor(provider){
        this._provider = provider;
    }
} //# sourceMappingURL=draft-mode.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/headers.js







function headers_headers() {
    if ((0,static_generation_bailout/* staticGenerationBailout */.o)("headers", {
        link: "https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"
    })) {
        return headers/* HeadersAdapter */.h.seal(new Headers({}));
    }
    const requestStore = request_async_storage_external/* requestAsyncStorage */.F.getStore();
    if (!requestStore) {
        throw new Error("Invariant: headers() expects to have requestAsyncStorage, none available.");
    }
    return requestStore.headers;
}
function headers_cookies() {
    if ((0,static_generation_bailout/* staticGenerationBailout */.o)("cookies", {
        link: "https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"
    })) {
        return request_cookies/* RequestCookiesAdapter */.Qb.seal(new spec_extension_cookies/* RequestCookies */.q(new Headers({})));
    }
    const requestStore = request_async_storage_external/* requestAsyncStorage */.F.getStore();
    if (!requestStore) {
        throw new Error("Invariant: cookies() expects to have requestAsyncStorage, none available.");
    }
    const asyncActionStore = action_async_storage_external/* actionAsyncStorage */.W.getStore();
    if (asyncActionStore && (asyncActionStore.isAction || asyncActionStore.isAppRoute)) {
        // We can't conditionally return different types here based on the context.
        // To avoid confusion, we always return the readonly type here.
        return requestStore.mutableCookies;
    }
    return requestStore.cookies;
}
function draftMode() {
    const requestStore = request_async_storage_external/* requestAsyncStorage */.F.getStore();
    if (!requestStore) {
        throw new Error("Invariant: draftMode() expects to have requestAsyncStorage, none available.");
    }
    return new DraftMode(requestStore.draftMode);
} //# sourceMappingURL=headers.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js
var static_generation_async_storage_external = __webpack_require__(8823);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(2568);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/app-router-context.shared-runtime.js

const proxy = (0,module_proxy/* createProxy */.D)(String.raw`/Users/denizhan/Documents/Windsurf/protekanalitik/node_modules/next/dist/esm/shared/lib/app-router-context.shared-runtime.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,module_proxy/* createProxy */.D)(String.raw`/Users/denizhan/Documents/Windsurf/protekanalitik/node_modules/next/dist/esm/shared/lib/app-router-context.shared-runtime.js#CacheStates`);

const e1 = (0,module_proxy/* createProxy */.D)(String.raw`/Users/denizhan/Documents/Windsurf/protekanalitik/node_modules/next/dist/esm/shared/lib/app-router-context.shared-runtime.js#AppRouterContext`);

const e2 = (0,module_proxy/* createProxy */.D)(String.raw`/Users/denizhan/Documents/Windsurf/protekanalitik/node_modules/next/dist/esm/shared/lib/app-router-context.shared-runtime.js#LayoutRouterContext`);

const e3 = (0,module_proxy/* createProxy */.D)(String.raw`/Users/denizhan/Documents/Windsurf/protekanalitik/node_modules/next/dist/esm/shared/lib/app-router-context.shared-runtime.js#GlobalLayoutRouterContext`);

const e4 = (0,module_proxy/* createProxy */.D)(String.raw`/Users/denizhan/Documents/Windsurf/protekanalitik/node_modules/next/dist/esm/shared/lib/app-router-context.shared-runtime.js#TemplateContext`);

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/shared-modules.js
// the name of the export has to be the camelCase version of the file name (without the extension)
// TODO: remove this. We need it because using notFound from next/navigation imports this file :(
 //# sourceMappingURL=shared-modules.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
var app_router_headers = __webpack_require__(2002);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/lib/server-action-request-meta.js

function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(app_router_headers/* ACTION */.om.toLowerCase()) ?? null;
        contentType = req.headers.get("content-type");
    } else {
        actionId = req.headers[app_router_headers/* ACTION */.om.toLowerCase()] ?? null;
        contentType = req.headers["content-type"] ?? null;
    }
    const isURLEncodedAction = Boolean(req.method === "POST" && contentType === "application/x-www-form-urlencoded");
    const isMultipartAction = Boolean(req.method === "POST" && (contentType == null ? void 0 : contentType.startsWith("multipart/form-data")));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === "string" && req.method === "POST");
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction
    };
}
function getIsServerAction(req) {
    const { isFetchAction, isURLEncodedAction, isMultipartAction } = getServerActionRequestMetadata(req);
    return Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
} //# sourceMappingURL=server-action-request-meta.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-modules/app-route/module.js
























/**
 * AppRouteRouteHandler is the handler for app routes.
 */ class AppRouteRouteModule extends RouteModule {
    static #_ = this.sharedModules = shared_modules_namespaceObject;
    constructor({ userland, definition, resolvedPagePath, nextConfigOutput }){
        super({
            userland,
            definition
        });
        /**
   * A reference to the request async storage.
   */ this.requestAsyncStorage = request_async_storage_external/* requestAsyncStorage */.F;
        /**
   * A reference to the static generation async storage.
   */ this.staticGenerationAsyncStorage = static_generation_async_storage_external/* staticGenerationAsyncStorage */.A;
        /**
   * An interface to call server hooks which interact with the underlying
   * storage.
   */ this.serverHooks = hooks_server_context;
        /**
   * An interface to call header hooks which interact with the underlying
   * request storage.
   */ this.headerHooks = headers_namespaceObject;
        /**
   * An interface to call static generation bailout hooks which interact with
   * the underlying static generation storage.
   */ this.staticGenerationBailout = static_generation_bailout/* staticGenerationBailout */.o;
        /**
   * A reference to the mutation related async storage, such as mutations of
   * cookies.
   */ this.actionAsyncStorage = action_async_storage_external/* actionAsyncStorage */.W;
        this.resolvedPagePath = resolvedPagePath;
        this.nextConfigOutput = nextConfigOutput;
        // Automatically implement some methods if they aren't implemented by the
        // userland module.
        this.methods = autoImplementMethods(userland);
        // Get the non-static methods for this route.
        this.nonStaticMethods = getNonStaticMethods(userland);
        // Get the dynamic property from the userland module.
        this.dynamic = this.userland.dynamic;
        if (this.nextConfigOutput === "export") {
            if (!this.dynamic || this.dynamic === "auto") {
                this.dynamic = "error";
            } else if (this.dynamic === "force-dynamic") {
                throw new Error(`export const dynamic = "force-dynamic" on page "${definition.pathname}" cannot be used with "output: export". See more info here: https://nextjs.org/docs/advanced-features/static-html-export`);
            }
        }
        // We only warn in development after here, so return if we're not in
        // development.
        if (false) {}
    }
    /**
   * Resolves the handler function for the given method.
   *
   * @param method the requested method
   * @returns the handler function for the given method
   */ resolve(method) {
        // Ensure that the requested method is a valid method (to prevent RCE's).
        if (!isHTTPMethod(method)) return handleBadRequestResponse;
        // Return the handler.
        return this.methods[method];
    }
    /**
   * Executes the route handler.
   */ async execute(request, context) {
        // Get the handler function for the given method.
        const handler = this.resolve(request.method);
        // Get the context for the request.
        const requestContext = {
            req: request
        };
        requestContext.renderOpts = {
            previewProps: context.prerenderManifest.preview
        };
        // Get the context for the static generation.
        const staticGenerationContext = {
            urlPathname: request.nextUrl.pathname,
            renderOpts: context.renderOpts
        };
        // Add the fetchCache option to the renderOpts.
        staticGenerationContext.renderOpts.fetchCache = this.userland.fetchCache;
        // Run the handler with the request AsyncLocalStorage to inject the helper
        // support. We set this to `unknown` because the type is not known until
        // runtime when we do a instanceof check below.
        const response = await this.actionAsyncStorage.run({
            isAppRoute: true,
            isAction: getIsServerAction(request)
        }, ()=>request_async_storage_wrapper/* RequestAsyncStorageWrapper */.B.wrap(this.requestAsyncStorage, requestContext, ()=>StaticGenerationAsyncStorageWrapper.wrap(this.staticGenerationAsyncStorage, staticGenerationContext, (staticGenerationStore)=>{
                    var _getTracer_getRootSpanAttributes;
                    // Check to see if we should bail out of static generation based on
                    // having non-static methods.
                    if (this.nonStaticMethods) {
                        this.staticGenerationBailout(`non-static methods used ${this.nonStaticMethods.join(", ")}`);
                    }
                    // Update the static generation store based on the dynamic property.
                    switch(this.dynamic){
                        case "force-dynamic":
                            // The dynamic property is set to force-dynamic, so we should
                            // force the page to be dynamic.
                            staticGenerationStore.forceDynamic = true;
                            this.staticGenerationBailout(`force-dynamic`, {
                                dynamic: this.dynamic
                            });
                            break;
                        case "force-static":
                            // The dynamic property is set to force-static, so we should
                            // force the page to be static.
                            staticGenerationStore.forceStatic = true;
                            break;
                        case "error":
                            // The dynamic property is set to error, so we should throw an
                            // error if the page is being statically generated.
                            staticGenerationStore.dynamicShouldError = true;
                            break;
                        default:
                            break;
                    }
                    // If the static generation store does not have a revalidate value
                    // set, then we should set it the revalidate value from the userland
                    // module or default to false.
                    staticGenerationStore.revalidate ??= this.userland.revalidate ?? false;
                    // Wrap the request so we can add additional functionality to cases
                    // that might change it's output or affect the rendering.
                    const wrappedRequest = proxyRequest(request, {
                        dynamic: this.dynamic
                    }, {
                        headerHooks: this.headerHooks,
                        serverHooks: this.serverHooks,
                        staticGenerationBailout: this.staticGenerationBailout
                    });
                    // TODO: propagate this pathname from route matcher
                    const route = getPathnameFromAbsolutePath(this.resolvedPagePath);
                    (_getTracer_getRootSpanAttributes = (0,tracer/* getTracer */.Yz)().getRootSpanAttributes()) == null ? void 0 : _getTracer_getRootSpanAttributes.set("next.route", route);
                    return (0,tracer/* getTracer */.Yz)().trace(constants/* AppRouteRouteHandlersSpan */.PB.runHandler, {
                        spanName: `executing api route (app) ${route}`,
                        attributes: {
                            "next.route": route
                        }
                    }, async ()=>{
                        var _staticGenerationStore_tags;
                        // Patch the global fetch.
                        (0,patch_fetch/* patchFetch */.XH)({
                            serverHooks: this.serverHooks,
                            staticGenerationAsyncStorage: this.staticGenerationAsyncStorage
                        });
                        const res = await handler(wrappedRequest, {
                            params: context.params ? parsedUrlQueryToParams(context.params) : undefined
                        });
                        if (!(res instanceof Response)) {
                            throw new Error(`No response is returned from route handler '${this.resolvedPagePath}'. Ensure you return a \`Response\` or a \`NextResponse\` in all branches of your handler.`);
                        }
                        context.renderOpts.fetchMetrics = staticGenerationStore.fetchMetrics;
                        context.renderOpts.waitUntil = Promise.all(Object.values(staticGenerationStore.pendingRevalidates || []));
                        (0,patch_fetch/* addImplicitTags */.RQ)(staticGenerationStore);
                        context.renderOpts.fetchTags = (_staticGenerationStore_tags = staticGenerationStore.tags) == null ? void 0 : _staticGenerationStore_tags.join(",");
                        // It's possible cookies were set in the handler, so we need
                        // to merge the modified cookies and the returned response
                        // here.
                        const requestStore = this.requestAsyncStorage.getStore();
                        if (requestStore && requestStore.mutableCookies) {
                            const headers = new Headers(res.headers);
                            if ((0,request_cookies/* appendMutableCookies */._5)(headers, requestStore.mutableCookies)) {
                                return new Response(res.body, {
                                    status: res.status,
                                    statusText: res.statusText,
                                    headers
                                });
                            }
                        }
                        return res;
                    });
                })));
        // If the handler did't return a valid response, then return the internal
        // error response.
        if (!(response instanceof Response)) {
            // TODO: validate the correct handling behavior, maybe log something?
            return handleInternalServerErrorResponse();
        }
        if (response.headers.has("x-middleware-rewrite")) {
            // TODO: move this error into the `NextResponse.rewrite()` function.
            // TODO-APP: re-enable support below when we can proxy these type of requests
            throw new Error("NextResponse.rewrite() was used in a app route handler, this is not currently supported. Please remove the invocation to continue.");
        // // This is a rewrite created via `NextResponse.rewrite()`. We need to send
        // // the response up so it can be handled by the backing server.
        // // If the server is running in minimal mode, we just want to forward the
        // // response (including the rewrite headers) upstream so it can perform the
        // // redirect for us, otherwise return with the special condition so this
        // // server can perform a rewrite.
        // if (!minimalMode) {
        //   return { response, condition: 'rewrite' }
        // }
        // // Relativize the url so it's relative to the base url. This is so the
        // // outgoing headers upstream can be relative.
        // const rewritePath = response.headers.get('x-middleware-rewrite')!
        // const initUrl = getRequestMeta(req, 'initURL')!
        // const { pathname } = parseUrl(relativizeURL(rewritePath, initUrl))
        // response.headers.set('x-middleware-rewrite', pathname)
        }
        if (response.headers.get("x-middleware-next") === "1") {
            // TODO: move this error into the `NextResponse.next()` function.
            throw new Error("NextResponse.next() was used in a app route handler, this is not supported. See here for more info: https://nextjs.org/docs/messages/next-response-next-in-app-route-handler");
        }
        return response;
    }
    async handle(request, context) {
        try {
            // Execute the route to get the response.
            const response = await this.execute(request, context);
            // The response was handled, return it.
            return response;
        } catch (err) {
            // Try to resolve the error to a response, else throw it again.
            const response = resolveHandlerError(err);
            if (!response) throw err;
            // The response was resolved, return it.
            return response;
        }
    }
}
/* harmony default export */ const app_route_module = ((/* unused pure expression or super */ null && (AppRouteRouteModule))); //# sourceMappingURL=module.js.map


/***/ }),

/***/ 9845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RQ: () => (/* binding */ addImplicitTags),
/* harmony export */   XH: () => (/* binding */ patchFetch)
/* harmony export */ });
/* unused harmony export validateTags */
/* harmony import */ var _trace_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var _trace_tracer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(200);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1707);
/* harmony import */ var _build_output_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(844);
/* provided dependency */ var Buffer = __webpack_require__(6195)["Buffer"];




const isEdgeRuntime = "edge" === "edge";
function validateTags(tags, description) {
    const validTags = [];
    const invalidTags = [];
    for (const tag of tags){
        if (typeof tag !== "string") {
            invalidTags.push({
                tag,
                reason: "invalid type, must be a string"
            });
        } else if (tag.length > _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .NEXT_CACHE_TAG_MAX_LENGTH */ .Ho) {
            invalidTags.push({
                tag,
                reason: `exceeded max length of ${_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .NEXT_CACHE_TAG_MAX_LENGTH */ .Ho}`
            });
        } else {
            validTags.push(tag);
        }
    }
    if (invalidTags.length > 0) {
        console.warn(`Warning: invalid tags passed to ${description}: `);
        for (const { tag, reason } of invalidTags){
            console.log(`tag: "${tag}" ${reason}`);
        }
    }
    return validTags;
}
const getDerivedTags = (pathname)=>{
    const derivedTags = [
        `/layout`
    ];
    // we automatically add the current path segments as tags
    // for revalidatePath handling
    if (pathname.startsWith("/")) {
        const pathnameParts = pathname.split("/");
        for(let i = 1; i < pathnameParts.length + 1; i++){
            let curPathname = pathnameParts.slice(0, i).join("/");
            if (curPathname) {
                // all derived tags other than the page are layout tags
                if (!curPathname.endsWith("/page") && !curPathname.endsWith("/route")) {
                    curPathname = `${curPathname}${!curPathname.endsWith("/") ? "/" : ""}layout`;
                }
                derivedTags.push(curPathname);
            }
        }
    }
    return derivedTags;
};
function addImplicitTags(staticGenerationStore) {
    const newTags = [];
    const { pagePath, urlPathname } = staticGenerationStore;
    if (!Array.isArray(staticGenerationStore.tags)) {
        staticGenerationStore.tags = [];
    }
    if (pagePath) {
        const derivedTags = getDerivedTags(pagePath);
        for (let tag of derivedTags){
            var _staticGenerationStore_tags;
            tag = `${_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .NEXT_CACHE_IMPLICIT_TAG_ID */ .zt}${tag}`;
            if (!((_staticGenerationStore_tags = staticGenerationStore.tags) == null ? void 0 : _staticGenerationStore_tags.includes(tag))) {
                staticGenerationStore.tags.push(tag);
            }
            newTags.push(tag);
        }
    }
    if (urlPathname) {
        var _staticGenerationStore_tags1;
        const parsedPathname = new URL(urlPathname, "http://n").pathname;
        const tag = `${_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .NEXT_CACHE_IMPLICIT_TAG_ID */ .zt}${parsedPathname}`;
        if (!((_staticGenerationStore_tags1 = staticGenerationStore.tags) == null ? void 0 : _staticGenerationStore_tags1.includes(tag))) {
            staticGenerationStore.tags.push(tag);
        }
        newTags.push(tag);
    }
    return newTags;
}
function trackFetchMetric(staticGenerationStore, ctx) {
    if (!staticGenerationStore) return;
    if (!staticGenerationStore.fetchMetrics) {
        staticGenerationStore.fetchMetrics = [];
    }
    const dedupeFields = [
        "url",
        "status",
        "method"
    ];
    // don't add metric if one already exists for the fetch
    if (staticGenerationStore.fetchMetrics.some((metric)=>{
        return dedupeFields.every((field)=>metric[field] === ctx[field]);
    })) {
        return;
    }
    staticGenerationStore.fetchMetrics.push({
        url: ctx.url,
        cacheStatus: ctx.cacheStatus,
        cacheReason: ctx.cacheReason,
        status: ctx.status,
        method: ctx.method,
        start: ctx.start,
        end: Date.now(),
        idx: staticGenerationStore.nextFetchId || 0
    });
}
// we patch fetch to collect cache information used for
// determining if a page is static or not
function patchFetch({ serverHooks, staticGenerationAsyncStorage }) {
    if (!globalThis._nextOriginalFetch) {
        globalThis._nextOriginalFetch = globalThis.fetch;
    }
    if (globalThis.fetch.__nextPatched) return;
    const { DynamicServerError } = serverHooks;
    const originFetch = globalThis._nextOriginalFetch;
    globalThis.fetch = async (input, init)=>{
        var _init_method, _this;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = "";
            url.password = "";
        } catch  {
            // Error caused by malformed URL should be handled by native fetch
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? "";
        const fetchStart = Date.now();
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || "GET";
        // Do create a new span trace for internal fetches in the
        // non-verbose mode.
        const isInternal = ((_this = init == null ? void 0 : init.next) == null ? void 0 : _this.internal) === true;
        return await (0,_trace_tracer__WEBPACK_IMPORTED_MODULE_1__/* .getTracer */ .Yz)().trace(isInternal ? _trace_constants__WEBPACK_IMPORTED_MODULE_0__/* .NextNodeServerSpan */ .Xy.internalFetch : _trace_constants__WEBPACK_IMPORTED_MODULE_0__/* .AppRenderSpan */ .k0.fetch, {
            kind: _trace_tracer__WEBPACK_IMPORTED_MODULE_1__/* .SpanKind */ .MU.CLIENT,
            spanName: [
                "fetch",
                method,
                fetchUrl
            ].filter(Boolean).join(" "),
            attributes: {
                "http.url": fetchUrl,
                "http.method": method,
                "net.peer.name": url == null ? void 0 : url.hostname,
                "net.peer.port": (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _getRequestMeta;
            const staticGenerationStore = staticGenerationAsyncStorage.getStore() || (fetch.__nextGetStaticStore == null ? void 0 : fetch.__nextGetStaticStore.call(fetch));
            const isRequestInput = input && typeof input === "object" && typeof input.method === "string";
            const getRequestMeta = (field)=>{
                let value = isRequestInput ? input[field] : null;
                return value || (init == null ? void 0 : init[field]);
            };
            // If the staticGenerationStore is not available, we can't do any
            // special treatment of fetch, therefore fallback to the original
            // fetch implementation.
            if (!staticGenerationStore || isInternal || staticGenerationStore.isDraftMode) {
                return originFetch(input, init);
            }
            let revalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== "undefined" ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            // RequestInit doesn't keep extra fields e.g. next so it's
            // only available if init is used separate
            let curRevalidate = getNextField("revalidate");
            const tags = validateTags(getNextField("tags") || [], `fetch ${input.toString()}`);
            if (Array.isArray(tags)) {
                if (!staticGenerationStore.tags) {
                    staticGenerationStore.tags = [];
                }
                for (const tag of tags){
                    if (!staticGenerationStore.tags.includes(tag)) {
                        staticGenerationStore.tags.push(tag);
                    }
                }
            }
            const implicitTags = addImplicitTags(staticGenerationStore);
            const isOnlyCache = staticGenerationStore.fetchCache === "only-cache";
            const isForceCache = staticGenerationStore.fetchCache === "force-cache";
            const isDefaultCache = staticGenerationStore.fetchCache === "default-cache";
            const isDefaultNoStore = staticGenerationStore.fetchCache === "default-no-store";
            const isOnlyNoStore = staticGenerationStore.fetchCache === "only-no-store";
            const isForceNoStore = staticGenerationStore.fetchCache === "force-no-store";
            let _cache = getRequestMeta("cache");
            let cacheReason = "";
            if (typeof _cache === "string" && typeof curRevalidate !== "undefined") {
                // when providing fetch with a Request input, it'll automatically set a cache value of 'default'
                // we only want to warn if the user is explicitly setting a cache value
                if (!(isRequestInput && _cache === "default")) {
                    _build_output_log__WEBPACK_IMPORTED_MODULE_3__/* .warn */ .ZK(`fetch for ${fetchUrl} on ${staticGenerationStore.urlPathname} specified "cache: ${_cache}" and "revalidate: ${curRevalidate}", only one should be specified.`);
                }
                _cache = undefined;
            }
            if (_cache === "force-cache") {
                curRevalidate = false;
            } else if (_cache === "no-cache" || _cache === "no-store" || isForceNoStore || isOnlyNoStore) {
                curRevalidate = 0;
            }
            if (_cache === "no-cache" || _cache === "no-store") {
                cacheReason = `cache: ${_cache}`;
            }
            if (typeof curRevalidate === "number" || curRevalidate === false) {
                revalidate = curRevalidate;
            }
            const _headers = getRequestMeta("headers");
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === "function" ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get("authorization") || initHeaders.get("cookie");
            const isUnCacheableMethod = ![
                "get",
                "head"
            ].includes(((_getRequestMeta = getRequestMeta("method")) == null ? void 0 : _getRequestMeta.toLowerCase()) || "get");
            // if there are authorized headers or a POST method and
            // dynamic data usage was present above the tree we bail
            // e.g. if cookies() is used before an authed/POST fetch
            const autoNoCache = (hasUnCacheableHeader || isUnCacheableMethod) && staticGenerationStore.revalidate === 0;
            if (isForceNoStore) {
                cacheReason = "fetchCache = force-no-store";
            }
            if (isOnlyNoStore) {
                if (_cache === "force-cache" || typeof revalidate !== "undefined" && (revalidate === false || revalidate > 0)) {
                    throw new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`);
                }
                cacheReason = "fetchCache = only-no-store";
            }
            if (isOnlyCache && _cache === "no-store") {
                throw new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`);
            }
            if (isForceCache && (typeof curRevalidate === "undefined" || curRevalidate === 0)) {
                cacheReason = "fetchCache = force-cache";
                revalidate = false;
            }
            if (typeof revalidate === "undefined") {
                if (isDefaultCache) {
                    revalidate = false;
                    cacheReason = "fetchCache = default-cache";
                } else if (autoNoCache) {
                    revalidate = 0;
                    cacheReason = "auto no cache";
                } else if (isDefaultNoStore) {
                    revalidate = 0;
                    cacheReason = "fetchCache = default-no-store";
                } else {
                    cacheReason = "auto cache";
                    revalidate = typeof staticGenerationStore.revalidate === "boolean" || typeof staticGenerationStore.revalidate === "undefined" ? false : staticGenerationStore.revalidate;
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${revalidate}`;
            }
            if (// revalidate although if it occurs during build we do
            !autoNoCache && // If the revalidate value isn't currently set or the value is less
            // than the current revalidate value, we should update the revalidate
            // value.
            (typeof staticGenerationStore.revalidate === "undefined" || typeof revalidate === "number" && (staticGenerationStore.revalidate === false || typeof staticGenerationStore.revalidate === "number" && revalidate < staticGenerationStore.revalidate))) {
                // If we were setting the revalidate value to 0, we should try to
                // postpone instead first.
                if (revalidate === 0) {
                    staticGenerationStore.postpone == null ? void 0 : staticGenerationStore.postpone.call(staticGenerationStore, "revalidate: 0");
                }
                staticGenerationStore.revalidate = revalidate;
            }
            const isCacheableRevalidate = typeof revalidate === "number" && revalidate > 0 || revalidate === false;
            let cacheKey;
            if (staticGenerationStore.incrementalCache && isCacheableRevalidate) {
                try {
                    cacheKey = await staticGenerationStore.incrementalCache.fetchCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const fetchIdx = staticGenerationStore.nextFetchId ?? 1;
            staticGenerationStore.nextFetchId = fetchIdx + 1;
            const normalizedRevalidate = typeof revalidate !== "number" ? _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .CACHE_ONE_YEAR */ .BR : revalidate;
            const doOriginalFetch = async (isStale, cacheReasonOverride)=>{
                const requestInputFields = [
                    "cache",
                    "credentials",
                    "headers",
                    "integrity",
                    "keepalive",
                    "method",
                    "mode",
                    "redirect",
                    "referrer",
                    "referrerPolicy",
                    "window",
                    "duplex",
                    // don't pass through signal when revalidating
                    ...isStale ? [] : [
                        "signal"
                    ]
                ];
                if (isRequestInput) {
                    const reqInput = input;
                    const reqOptions = {
                        body: reqInput._ogBody || reqInput.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        reqOptions[field] = reqInput[field];
                    }
                    input = new Request(reqInput.url, reqOptions);
                } else if (init) {
                    const initialInit = init;
                    init = {
                        body: init._ogBody || init.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        init[field] = initialInit[field];
                    }
                }
                // add metadata to init without editing the original
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: "origin",
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale) {
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason: cacheReasonOverride || cacheReason,
                            cacheStatus: revalidate === 0 || cacheReasonOverride ? "skip" : "miss",
                            status: res.status,
                            method: clonedInit.method || "GET"
                        });
                    }
                    if (res.status === 200 && staticGenerationStore.incrementalCache && cacheKey && isCacheableRevalidate) {
                        const bodyBuffer = Buffer.from(await res.arrayBuffer());
                        try {
                            await staticGenerationStore.incrementalCache.set(cacheKey, {
                                kind: "FETCH",
                                data: {
                                    headers: Object.fromEntries(res.headers.entries()),
                                    body: bodyBuffer.toString("base64"),
                                    status: res.status,
                                    url: res.url
                                },
                                revalidate: normalizedRevalidate
                            }, {
                                fetchCache: true,
                                revalidate,
                                fetchUrl,
                                fetchIdx,
                                tags
                            });
                        } catch (err) {
                            console.warn(`Failed to set fetch cache`, input, err);
                        }
                        const response = new Response(bodyBuffer, {
                            headers: new Headers(res.headers),
                            status: res.status
                        });
                        Object.defineProperty(response, "url", {
                            value: res.url
                        });
                        return response;
                    }
                    return res;
                });
            };
            let handleUnlock = ()=>Promise.resolve();
            let cacheReasonOverride;
            if (cacheKey && staticGenerationStore.incrementalCache) {
                handleUnlock = await staticGenerationStore.incrementalCache.lock(cacheKey);
                const entry = staticGenerationStore.isOnDemandRevalidate ? null : await staticGenerationStore.incrementalCache.get(cacheKey, {
                    kindHint: "fetch",
                    revalidate,
                    fetchUrl,
                    fetchIdx,
                    tags,
                    softTags: implicitTags
                });
                if (entry) {
                    await handleUnlock();
                } else {
                    // in dev, incremental cache response will be null in case the browser adds `cache-control: no-cache` in the request headers
                    cacheReasonOverride = "cache-control: no-cache (hard refresh)";
                }
                if ((entry == null ? void 0 : entry.value) && entry.value.kind === "FETCH") {
                    // when stale and is revalidating we wait for fresh data
                    // so the revalidated entry has the updated data
                    if (!(staticGenerationStore.isRevalidate && entry.isStale)) {
                        if (entry.isStale) {
                            staticGenerationStore.pendingRevalidates ??= {};
                            if (!staticGenerationStore.pendingRevalidates[cacheKey]) {
                                staticGenerationStore.pendingRevalidates[cacheKey] = doOriginalFetch(true).catch(console.error);
                            }
                        }
                        const resData = entry.value.data;
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: "hit",
                            status: resData.status || 200,
                            method: (init == null ? void 0 : init.method) || "GET"
                        });
                        const response = new Response(Buffer.from(resData.body, "base64"), {
                            headers: resData.headers,
                            status: resData.status
                        });
                        Object.defineProperty(response, "url", {
                            value: entry.value.data.url
                        });
                        return response;
                    }
                }
            }
            if (staticGenerationStore.isStaticGeneration && init && typeof init === "object") {
                const { cache } = init;
                // Delete `cache` property as Cloudflare Workers will throw an error
                if (isEdgeRuntime) delete init.cache;
                if (cache === "no-store") {
                    const dynamicUsageReason = `no-store fetch ${input}${staticGenerationStore.urlPathname ? ` ${staticGenerationStore.urlPathname}` : ""}`;
                    // If enabled, we should bail out of static generation.
                    staticGenerationStore.postpone == null ? void 0 : staticGenerationStore.postpone.call(staticGenerationStore, dynamicUsageReason);
                    // PPR is not enabled, or React postpone is not available, we
                    // should set the revalidate to 0.
                    staticGenerationStore.revalidate = 0;
                    const err = new DynamicServerError(dynamicUsageReason);
                    staticGenerationStore.dynamicUsageErr = err;
                    staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                }
                const hasNextConfig = "next" in init;
                const { next = {} } = init;
                if (typeof next.revalidate === "number" && (typeof staticGenerationStore.revalidate === "undefined" || typeof staticGenerationStore.revalidate === "number" && next.revalidate < staticGenerationStore.revalidate)) {
                    const forceDynamic = staticGenerationStore.forceDynamic;
                    if (!forceDynamic && next.revalidate === 0) {
                        const dynamicUsageReason = `revalidate: 0 fetch ${input}${staticGenerationStore.urlPathname ? ` ${staticGenerationStore.urlPathname}` : ""}`;
                        // If enabled, we should bail out of static generation.
                        staticGenerationStore.postpone == null ? void 0 : staticGenerationStore.postpone.call(staticGenerationStore, dynamicUsageReason);
                        const err = new DynamicServerError(dynamicUsageReason);
                        staticGenerationStore.dynamicUsageErr = err;
                        staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                    }
                    if (!forceDynamic || next.revalidate !== 0) {
                        staticGenerationStore.revalidate = next.revalidate;
                    }
                }
                if (hasNextConfig) delete init.next;
            }
            return doOriginalFetch(false, cacheReasonOverride).finally(handleUnlock);
        });
    };
    globalThis.fetch.__nextGetStaticStore = ()=>{
        return staticGenerationAsyncStorage;
    };
    globalThis.fetch.__nextPatched = true;
} //# sourceMappingURL=patch-fetch.js.map


/***/ }),

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PB: () => (/* binding */ AppRouteRouteHandlersSpan),
/* harmony export */   Xy: () => (/* binding */ NextNodeServerSpan),
/* harmony export */   k0: () => (/* binding */ AppRenderSpan),
/* harmony export */   lw: () => (/* binding */ NextVanillaSpanAllowlist)
/* harmony export */ });
/* unused harmony exports BaseServerSpan, LoadComponentsSpan, NextServerSpan, StartServerSpan, RenderSpan, RouterSpan, NodeSpan, ResolveMetadataSpan */
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
// This list is used to filter out spans that are not relevant to the user
const NextVanillaSpanAllowlist = [
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport"
];
 //# sourceMappingURL=constants.js.map


/***/ }),

/***/ 200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MU: () => (/* binding */ SpanKind),
/* harmony export */   Yz: () => (/* binding */ getTracer)
/* harmony export */ });
/* unused harmony export SpanStatusCode */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);

let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if (true) {
    api = __webpack_require__(2075);
} else {}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
const isPromise = (p)=>{
    return p !== null && typeof p === "object" && typeof p.then === "function";
};
const closeSpanWithError = (span, error)=>{
    if ((error == null ? void 0 : error.bubble) === true) {
        span.setAttribute("next.bubble", true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey("next.rootSpanId");
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer("next.js", "0.0.1");
    }
    getContext() {
        return context;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === "function" ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        if (!_constants__WEBPACK_IMPORTED_MODULE_0__/* .NextVanillaSpanAllowlist */ .lw.includes(type) && process.env.NEXT_OTEL_VERBOSE !== "1" || options.hideSpan) {
            return fn();
        }
        const spanName = options.spanName ?? type;
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            "next.span_name": spanName,
            "next.span_type": type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if (isPromise(result)) {
                        result.then(()=>span.end(), (err)=>closeSpanWithError(span, err)).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!_constants__WEBPACK_IMPORTED_MODULE_0__/* .NextVanillaSpanAllowlist */ .lw.includes(name) && process.env.NEXT_OTEL_VERBOSE !== "1") {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === "function" && typeof fn === "function") {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === "function") {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
 //# sourceMappingURL=tracer.js.map


/***/ }),

/***/ 1774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ EdgeRouteModuleWrapper)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/globals.js
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/utils.js
var utils = __webpack_require__(697);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/next-url.js + 10 modules
var next_url = __webpack_require__(2639);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
var cookies = __webpack_require__(9558);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0,utils/* validateURL */.r4)(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new next_url/* NextURL */.c(url, {
            headers: (0,utils/* toNodeOutgoingHttpHeaders */.lb)(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new cookies/* RequestCookies */.q(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js
var spec_extension_response = __webpack_require__(9605);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
var app_router_headers = __webpack_require__(2002);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/shared/lib/modern-browserslist-target.js
var modern_browserslist_target = __webpack_require__(2283);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/constants.js


const COMPILER_NAMES = {
    client: "client",
    server: "server",
    edgeServer: "edge-server"
};
/**
 * Headers that are set by the Next.js server and should be stripped from the
 * request headers going to the user's application.
 */ const constants_INTERNAL_HEADERS = (/* unused pure expression or super */ null && ([
    "x-invoke-error",
    "x-invoke-output",
    "x-invoke-path",
    "x-invoke-query",
    "x-invoke-status",
    "x-middleware-invoke"
]));
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const PHASE_EXPORT = "phase-export";
const PHASE_PRODUCTION_BUILD = "phase-production-build";
const PHASE_PRODUCTION_SERVER = "phase-production-server";
const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
const PHASE_TEST = "phase-test";
const PHASE_INFO = "phase-info";
const PAGES_MANIFEST = "pages-manifest.json";
const APP_PATHS_MANIFEST = "app-paths-manifest.json";
const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
const BUILD_MANIFEST = "build-manifest.json";
const APP_BUILD_MANIFEST = "app-build-manifest.json";
const FUNCTIONS_CONFIG_MANIFEST = "functions-config-manifest.json";
const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
const NEXT_FONT_MANIFEST = "next-font-manifest";
const EXPORT_MARKER = "export-marker.json";
const EXPORT_DETAIL = "export-detail.json";
const PRERENDER_MANIFEST = "prerender-manifest.json";
const ROUTES_MANIFEST = "routes-manifest.json";
const IMAGES_MANIFEST = "images-manifest.json";
const SERVER_FILES_MANIFEST = "required-server-files.json";
const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
const FONT_MANIFEST = "font-manifest.json";
const SERVER_DIRECTORY = "server";
const CONFIG_FILES = (/* unused pure expression or super */ null && ([
    "next.config.js",
    "next.config.mjs"
]));
const BUILD_ID_FILE = "BUILD_ID";
const BLOCKED_PAGES = (/* unused pure expression or super */ null && ([
    "/_document",
    "/_app",
    "/_error"
]));
const CLIENT_PUBLIC_FILES_PATH = "public";
const CLIENT_STATIC_FILES_PATH = "static";
const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
const BARREL_OPTIMIZATION_PREFIX = "__barrel_optimize__";
// server/[entry]/page_client-reference-manifest.js
const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
// server/server-reference-manifest
const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
// server/middleware-build-manifest.js
const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
// server/middleware-react-loadable-manifest.js
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
// static/runtime/main.js
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
// next internal client components chunk for layouts
const APP_CLIENT_INTERNALS = "app-pages-internals";
// static/runtime/react-refresh.js
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
// static/runtime/amp.js
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
// static/runtime/webpack.js
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
// static/runtime/polyfills.js
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
const STATIC_PROPS_ID = "__N_SSG";
const SERVER_PROPS_ID = "__N_SSP";
const PAGE_SEGMENT_KEY = "__PAGE__";
const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
const OPTIMIZED_FONT_PROVIDERS = [
    {
        url: GOOGLE_FONT_PROVIDER,
        preconnect: "https://fonts.gstatic.com"
    },
    {
        url: "https://use.typekit.net",
        preconnect: "https://use.typekit.net"
    }
];
const DEFAULT_SERIF_FONT = {
    name: "Times New Roman",
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: "Arial",
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = (/* unused pure expression or super */ null && ([
    "/500"
]));
const TRACE_OUTPUT_VERSION = 1;
// in `MB`
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: "client",
    server: "server"
};
// comparing
// https://nextjs.org/docs/api-reference/edge-runtime
// with
// https://nodejs.org/docs/latest/api/globals.html
const EDGE_UNSUPPORTED_NODE_APIS = (/* unused pure expression or super */ null && ([
    "clearImmediate",
    "setImmediate",
    "BroadcastChannel",
    "ByteLengthQueuingStrategy",
    "CompressionStream",
    "CountQueuingStrategy",
    "DecompressionStream",
    "DomException",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "TransformStreamDefaultController",
    "WritableStreamDefaultController"
]));
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]); //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js


const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    app_router_headers/* NEXT_RSC_UNION_QUERY */.H4
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
}
/**
 * Strip internal headers from the request headers.
 *
 * @param headers the headers to strip of internal headers
 */ function stripInternalHeaders(headers) {
    for (const key of INTERNAL_HEADERS){
        delete headers[key];
    }
} //# sourceMappingURL=internal-utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/segment.js
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === "(" && segment.endsWith(")");
} //# sourceMappingURL=segment.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js


/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (isGroupSegment(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, "$1");
} //# sourceMappingURL=app-paths.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/lib/constants.js
var constants = __webpack_require__(1707);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js + 2 modules
var request_async_storage_wrapper = __webpack_require__(5932);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/client/components/request-async-storage.external.js
var request_async_storage_external = __webpack_require__(2445);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/server/lib/trace/tracer.js
var trace_tracer = __webpack_require__(200);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js
















class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const headersGetter = {
    keys: (headers)=>Array.from(headers.keys()),
    get: (headers, key)=>headers.get(key) ?? undefined
};
let propagator = (request, fn)=>{
    const tracer = (0,trace_tracer/* getTracer */.Yz)();
    return tracer.withPropagatedContext(request.headers, fn, headersGetter);
};
let testApisIntercepted = false;
function ensureTestApisIntercepted() {
    if (!testApisIntercepted) {
        testApisIntercepted = true;
        if (process.env.NEXT_PRIVATE_TEST_PROXY === "true") {
            const { interceptTestApis, wrapRequestHandler } = __webpack_require__(3471);
            interceptTestApis();
            propagator = wrapRequestHandler(propagator);
        }
    }
}
async function adapter(params) {
    ensureTestApisIntercepted();
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    const prerenderManifest = typeof self.__PRERENDER_MANIFEST === "string" ? JSON.parse(self.__PRERENDER_MANIFEST) : undefined;
    params.request.url = normalizeRscURL(params.request.url);
    const requestUrl = new next_url/* NextURL */.c(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== constants/* NEXT_QUERY_PARAM_PREFIX */.dN && key.startsWith(constants/* NEXT_QUERY_PARAM_PREFIX */.dN)) {
            const normalizedKey = key.substring(constants/* NEXT_QUERY_PARAM_PREFIX */.dN.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = (0,utils/* fromNodeOutgoingHttpHeaders */.EK)(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of app_router_headers/* FLIGHT_PARAMETERS */.vu){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl =  false ? 0 : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: stripInternalSearchParams(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: "production" !== "development",
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response;
    let cookiesFromResponse;
    response = await propagator(request, ()=>{
        // we only care to make async storage available for middleware
        const isMiddleware = params.page === "/middleware" || params.page === "/src/middleware";
        if (isMiddleware) {
            return request_async_storage_wrapper/* RequestAsyncStorageWrapper */.B.wrap(request_async_storage_external/* requestAsyncStorage */.F, {
                req: request,
                renderOpts: {
                    onUpdateCookies: (cookies)=>{
                        cookiesFromResponse = cookies;
                    },
                    // @ts-expect-error: TODO: investigate why previewProps isn't on RenderOpts
                    previewProps: (prerenderManifest == null ? void 0 : prerenderManifest.preview) || {
                        previewModeId: "development-id",
                        previewModeEncryptionKey: "",
                        previewModeSigningKey: ""
                    }
                }
            }, ()=>params.handler(request, event));
        }
        return params.handler(request, event);
    });
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    if (response && cookiesFromResponse) {
        response.headers.set("set-cookie", cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new next_url/* NextURL */.c(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new next_url/* NextURL */.c(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : spec_extension_response/* NextResponse */.x.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol]),
        fetchMetrics: request.fetchMetrics
    };
} //# sourceMappingURL=adapter.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/lru-cache/index.js
var lru_cache = __webpack_require__(2834);
var lru_cache_default = /*#__PURE__*/__webpack_require__.n(lru_cache);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/lib/incremental-cache/fetch-cache.js


let rateLimitedUntil = 0;
let memoryCache;
const CACHE_TAGS_HEADER = "x-vercel-cache-tags";
const CACHE_HEADERS_HEADER = "x-vercel-sc-headers";
const CACHE_STATE_HEADER = "x-vercel-cache-state";
const CACHE_REVALIDATE_HEADER = "x-vercel-revalidate";
const CACHE_FETCH_URL_HEADER = "x-vercel-cache-item-name";
const CACHE_CONTROL_VALUE_HEADER = "x-vercel-cache-control";
class FetchCache {
    static isAvailable(ctx) {
        return !!(ctx._requestHeaders["x-vercel-sc-host"] || process.env.SUSPENSE_CACHE_URL);
    }
    constructor(ctx){
        this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        this.headers = {};
        this.headers["Content-Type"] = "application/json";
        if (CACHE_HEADERS_HEADER in ctx._requestHeaders) {
            const newHeaders = JSON.parse(ctx._requestHeaders[CACHE_HEADERS_HEADER]);
            for(const k in newHeaders){
                this.headers[k] = newHeaders[k];
            }
            delete ctx._requestHeaders[CACHE_HEADERS_HEADER];
        }
        const scHost = ctx._requestHeaders["x-vercel-sc-host"] || process.env.SUSPENSE_CACHE_URL;
        const scBasePath = ctx._requestHeaders["x-vercel-sc-basepath"] || process.env.SUSPENSE_CACHE_BASEPATH;
        if (process.env.SUSPENSE_CACHE_AUTH_TOKEN) {
            this.headers["Authorization"] = `Bearer ${process.env.SUSPENSE_CACHE_AUTH_TOKEN}`;
        }
        if (scHost) {
            this.cacheEndpoint = `https://${scHost}${scBasePath || ""}`;
            if (this.debug) {
                console.log("using cache endpoint", this.cacheEndpoint);
            }
        } else if (this.debug) {
            console.log("no cache endpoint available");
        }
        if (ctx.maxMemoryCacheSize) {
            if (!memoryCache) {
                if (this.debug) {
                    console.log("using memory store for fetch cache");
                }
                memoryCache = new (lru_cache_default())({
                    max: ctx.maxMemoryCacheSize,
                    length ({ value }) {
                        var _JSON_stringify;
                        if (!value) {
                            return 25;
                        } else if (value.kind === "REDIRECT") {
                            return JSON.stringify(value.props).length;
                        } else if (value.kind === "IMAGE") {
                            throw new Error("invariant image should not be incremental-cache");
                        } else if (value.kind === "FETCH") {
                            return JSON.stringify(value.data || "").length;
                        } else if (value.kind === "ROUTE") {
                            return value.body.length;
                        }
                        // rough estimate of size of cache value
                        return value.html.length + (((_JSON_stringify = JSON.stringify(value.pageData)) == null ? void 0 : _JSON_stringify.length) || 0);
                    }
                });
            }
        } else {
            if (this.debug) {
                console.log("not using memory store for fetch cache");
            }
        }
    }
    async revalidateTag(tag) {
        if (this.debug) {
            console.log("revalidateTag", tag);
        }
        if (Date.now() < rateLimitedUntil) {
            if (this.debug) {
                console.log("rate limited ", rateLimitedUntil);
            }
            return;
        }
        try {
            const res = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/revalidate?tags=${tag}`, {
                method: "POST",
                headers: this.headers,
                // @ts-expect-error not on public type
                next: {
                    internal: true
                }
            });
            if (res.status === 429) {
                const retryAfter = res.headers.get("retry-after") || "60000";
                rateLimitedUntil = Date.now() + parseInt(retryAfter);
            }
            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}.`);
            }
        } catch (err) {
            console.warn(`Failed to revalidate tag ${tag}`, err);
        }
    }
    async get(...args) {
        const [key, ctx = {}] = args;
        const { tags, softTags, kindHint, fetchIdx, fetchUrl } = ctx;
        if (kindHint !== "fetch") {
            return null;
        }
        if (Date.now() < rateLimitedUntil) {
            if (this.debug) {
                console.log("rate limited");
            }
            return null;
        }
        let data = memoryCache == null ? void 0 : memoryCache.get(key);
        // memory cache data is only leveraged for up to 1 seconds
        // so that revalidation events can be pulled from source
        if (Date.now() - ((data == null ? void 0 : data.lastModified) || 0) > 2000) {
            data = undefined;
        }
        // get data from fetch cache
        if (!data && this.cacheEndpoint) {
            try {
                const start = Date.now();
                const fetchParams = {
                    internal: true,
                    fetchType: "cache-get",
                    fetchUrl: fetchUrl,
                    fetchIdx
                };
                const res = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/${key}`, {
                    method: "GET",
                    headers: {
                        ...this.headers,
                        [CACHE_FETCH_URL_HEADER]: fetchUrl,
                        [CACHE_TAGS_HEADER]: (tags == null ? void 0 : tags.join(",")) || "",
                        [constants/* NEXT_CACHE_SOFT_TAGS_HEADER */.Ar]: (softTags == null ? void 0 : softTags.join(",")) || ""
                    },
                    next: fetchParams
                });
                if (res.status === 429) {
                    const retryAfter = res.headers.get("retry-after") || "60000";
                    rateLimitedUntil = Date.now() + parseInt(retryAfter);
                }
                if (res.status === 404) {
                    if (this.debug) {
                        console.log(`no fetch cache entry for ${key}, duration: ${Date.now() - start}ms`);
                    }
                    return null;
                }
                if (!res.ok) {
                    console.error(await res.text());
                    throw new Error(`invalid response from cache ${res.status}`);
                }
                const cached = await res.json();
                if (!cached || cached.kind !== "FETCH") {
                    this.debug && console.log({
                        cached
                    });
                    throw new Error(`invalid cache value`);
                }
                const cacheState = res.headers.get(CACHE_STATE_HEADER);
                const age = res.headers.get("age");
                data = {
                    value: cached,
                    // if it's already stale set it to a time in the past
                    // if not derive last modified from age
                    lastModified: cacheState !== "fresh" ? Date.now() - constants/* CACHE_ONE_YEAR */.BR : Date.now() - parseInt(age || "0", 10) * 1000
                };
                if (this.debug) {
                    console.log(`got fetch cache entry for ${key}, duration: ${Date.now() - start}ms, size: ${Object.keys(cached).length}, cache-state: ${cacheState} tags: ${tags == null ? void 0 : tags.join(",")} softTags: ${softTags == null ? void 0 : softTags.join(",")}`);
                }
                if (data) {
                    memoryCache == null ? void 0 : memoryCache.set(key, data);
                }
            } catch (err) {
                // unable to get data from fetch-cache
                if (this.debug) {
                    console.error(`Failed to get from fetch-cache`, err);
                }
            }
        }
        return data || null;
    }
    async set(...args) {
        const [key, data, ctx] = args;
        const { fetchCache, fetchIdx, fetchUrl, tags } = ctx;
        if (!fetchCache) return;
        if (Date.now() < rateLimitedUntil) {
            if (this.debug) {
                console.log("rate limited");
            }
            return;
        }
        memoryCache == null ? void 0 : memoryCache.set(key, {
            value: data,
            lastModified: Date.now()
        });
        if (this.cacheEndpoint) {
            try {
                const start = Date.now();
                if (data !== null && "revalidate" in data) {
                    this.headers[CACHE_REVALIDATE_HEADER] = data.revalidate.toString();
                }
                if (!this.headers[CACHE_REVALIDATE_HEADER] && data !== null && "data" in data) {
                    this.headers[CACHE_CONTROL_VALUE_HEADER] = data.data.headers["cache-control"];
                }
                const body = JSON.stringify({
                    ...data,
                    // we send the tags in the header instead
                    // of in the body here
                    tags: undefined
                });
                if (this.debug) {
                    console.log("set cache", key);
                }
                const fetchParams = {
                    internal: true,
                    fetchType: "cache-set",
                    fetchUrl,
                    fetchIdx
                };
                const res = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/${key}`, {
                    method: "POST",
                    headers: {
                        ...this.headers,
                        [CACHE_FETCH_URL_HEADER]: fetchUrl || "",
                        [CACHE_TAGS_HEADER]: (tags == null ? void 0 : tags.join(",")) || ""
                    },
                    body: body,
                    next: fetchParams
                });
                if (res.status === 429) {
                    const retryAfter = res.headers.get("retry-after") || "60000";
                    rateLimitedUntil = Date.now() + parseInt(retryAfter);
                }
                if (!res.ok) {
                    this.debug && console.log(await res.text());
                    throw new Error(`invalid response ${res.status}`);
                }
                if (this.debug) {
                    console.log(`successfully set to fetch-cache for ${key}, duration: ${Date.now() - start}ms, size: ${body.length}`);
                }
            } catch (err) {
                // unable to set to fetch-cache
                if (this.debug) {
                    console.error(`Failed to update fetch cache`, err);
                }
            }
        }
        return;
    }
} //# sourceMappingURL=fetch-cache.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/shared/lib/isomorphic/path.js
var path = __webpack_require__(62);
var path_default = /*#__PURE__*/__webpack_require__.n(path);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/lib/incremental-cache/file-system-cache.js



let file_system_cache_memoryCache;
let tagsManifest;
class FileSystemCache {
    constructor(ctx){
        this.fs = ctx.fs;
        this.flushToDisk = ctx.flushToDisk;
        this.serverDistDir = ctx.serverDistDir;
        this.appDir = !!ctx._appDir;
        this.pagesDir = !!ctx._pagesDir;
        this.revalidatedTags = ctx.revalidatedTags;
        this.experimental = ctx.experimental;
        this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        if (ctx.maxMemoryCacheSize && !file_system_cache_memoryCache) {
            if (this.debug) {
                console.log("using memory store for fetch cache");
            }
            file_system_cache_memoryCache = new (lru_cache_default())({
                max: ctx.maxMemoryCacheSize,
                length ({ value }) {
                    var _JSON_stringify;
                    if (!value) {
                        return 25;
                    } else if (value.kind === "REDIRECT") {
                        return JSON.stringify(value.props).length;
                    } else if (value.kind === "IMAGE") {
                        throw new Error("invariant image should not be incremental-cache");
                    } else if (value.kind === "FETCH") {
                        return JSON.stringify(value.data || "").length;
                    } else if (value.kind === "ROUTE") {
                        return value.body.length;
                    }
                    // rough estimate of size of cache value
                    return value.html.length + (((_JSON_stringify = JSON.stringify(value.pageData)) == null ? void 0 : _JSON_stringify.length) || 0);
                }
            });
        } else if (this.debug) {
            console.log("not using memory store for fetch cache");
        }
        if (this.serverDistDir && this.fs) {
            this.tagsManifestPath = path_default().join(this.serverDistDir, "..", "cache", "fetch-cache", "tags-manifest.json");
            this.loadTagsManifest();
        }
    }
    loadTagsManifest() {
        if (!this.tagsManifestPath || !this.fs || tagsManifest) return;
        try {
            tagsManifest = JSON.parse(this.fs.readFileSync(this.tagsManifestPath, "utf8"));
        } catch (err) {
            tagsManifest = {
                version: 1,
                items: {}
            };
        }
        if (this.debug) console.log("loadTagsManifest", tagsManifest);
    }
    async revalidateTag(tag) {
        if (this.debug) {
            console.log("revalidateTag", tag);
        }
        // we need to ensure the tagsManifest is refreshed
        // since separate workers can be updating it at the same
        // time and we can't flush out of sync data
        this.loadTagsManifest();
        if (!tagsManifest || !this.tagsManifestPath) {
            return;
        }
        const data = tagsManifest.items[tag] || {};
        data.revalidatedAt = Date.now();
        tagsManifest.items[tag] = data;
        try {
            await this.fs.mkdir(path_default().dirname(this.tagsManifestPath));
            await this.fs.writeFile(this.tagsManifestPath, JSON.stringify(tagsManifest || {}));
            if (this.debug) {
                console.log("Updated tags manifest", tagsManifest);
            }
        } catch (err) {
            console.warn("Failed to update tags manifest.", err);
        }
    }
    async get(...args) {
        var _data_value, _data_value1;
        const [key, ctx = {}] = args;
        const { tags, softTags, kindHint } = ctx;
        let data = file_system_cache_memoryCache == null ? void 0 : file_system_cache_memoryCache.get(key);
        if (this.debug) {
            console.log("get", key, tags, kindHint, !!data);
        }
        // let's check the disk for seed data
        if (!data && "edge" !== "edge") { var _data_value3, _data_value2; }
        if ((data == null ? void 0 : (_data_value = data.value) == null ? void 0 : _data_value.kind) === "PAGE") {
            var _data_value_headers;
            let cacheTags;
            const tagsHeader = (_data_value_headers = data.value.headers) == null ? void 0 : _data_value_headers[constants/* NEXT_CACHE_TAGS_HEADER */.Et];
            if (typeof tagsHeader === "string") {
                cacheTags = tagsHeader.split(",");
            }
            if (cacheTags == null ? void 0 : cacheTags.length) {
                this.loadTagsManifest();
                const isStale = cacheTags.some((tag)=>{
                    var _tagsManifest_items_tag;
                    return (tagsManifest == null ? void 0 : (_tagsManifest_items_tag = tagsManifest.items[tag]) == null ? void 0 : _tagsManifest_items_tag.revalidatedAt) && (tagsManifest == null ? void 0 : tagsManifest.items[tag].revalidatedAt) >= ((data == null ? void 0 : data.lastModified) || Date.now());
                });
                // we trigger a blocking validation if an ISR page
                // had a tag revalidated, if we want to be a background
                // revalidation instead we return data.lastModified = -1
                if (isStale) {
                    data = undefined;
                }
            }
        }
        if (data && (data == null ? void 0 : (_data_value1 = data.value) == null ? void 0 : _data_value1.kind) === "FETCH") {
            this.loadTagsManifest();
            const combinedTags = [
                ...tags || [],
                ...softTags || []
            ];
            const wasRevalidated = combinedTags.some((tag)=>{
                var _tagsManifest_items_tag;
                if (this.revalidatedTags.includes(tag)) {
                    return true;
                }
                return (tagsManifest == null ? void 0 : (_tagsManifest_items_tag = tagsManifest.items[tag]) == null ? void 0 : _tagsManifest_items_tag.revalidatedAt) && (tagsManifest == null ? void 0 : tagsManifest.items[tag].revalidatedAt) >= ((data == null ? void 0 : data.lastModified) || Date.now());
            });
            // When revalidate tag is called we don't return
            // stale data so it's updated right away
            if (wasRevalidated) {
                data = undefined;
            }
        }
        return data ?? null;
    }
    async set(...args) {
        const [key, data, ctx] = args;
        file_system_cache_memoryCache == null ? void 0 : file_system_cache_memoryCache.set(key, {
            value: data,
            lastModified: Date.now()
        });
        if (this.debug) {
            console.log("set", key);
        }
        if (!this.flushToDisk) return;
        if ((data == null ? void 0 : data.kind) === "ROUTE") {
            const filePath = this.getFilePath(`${key}.body`, "app");
            await this.fs.mkdir(path_default().dirname(filePath));
            await this.fs.writeFile(filePath, data.body);
            const meta = {
                headers: data.headers,
                status: data.status,
                postponed: undefined
            };
            await this.fs.writeFile(filePath.replace(/\.body$/, constants/* NEXT_META_SUFFIX */.EX), JSON.stringify(meta, null, 2));
            return;
        }
        if ((data == null ? void 0 : data.kind) === "PAGE") {
            const isAppPath = typeof data.pageData === "string";
            const htmlPath = this.getFilePath(`${key}.html`, isAppPath ? "app" : "pages");
            await this.fs.mkdir(path_default().dirname(htmlPath));
            await this.fs.writeFile(htmlPath, data.html);
            await this.fs.writeFile(this.getFilePath(`${key}${isAppPath ? this.experimental.ppr ? constants/* RSC_PREFETCH_SUFFIX */.Sx : constants/* RSC_SUFFIX */.hd : constants/* NEXT_DATA_SUFFIX */.JT}`, isAppPath ? "app" : "pages"), isAppPath ? data.pageData : JSON.stringify(data.pageData));
            if (data.headers || data.status) {
                const meta = {
                    headers: data.headers,
                    status: data.status,
                    postponed: data.postponed
                };
                await this.fs.writeFile(htmlPath.replace(/\.html$/, constants/* NEXT_META_SUFFIX */.EX), JSON.stringify(meta));
            }
        } else if ((data == null ? void 0 : data.kind) === "FETCH") {
            const filePath = this.getFilePath(key, "fetch");
            await this.fs.mkdir(path_default().dirname(filePath));
            await this.fs.writeFile(filePath, JSON.stringify({
                ...data,
                tags: ctx.tags
            }));
        }
    }
    detectFileKind(pathname) {
        if (!this.appDir && !this.pagesDir) {
            throw new Error("Invariant: Can't determine file path kind, no page directory enabled");
        }
        // If app directory isn't enabled, then assume it's pages and avoid the fs
        // hit.
        if (!this.appDir && this.pagesDir) {
            return "pages";
        } else if (this.appDir && !this.pagesDir) {
            return "app";
        }
        // If both are enabled, we need to test each in order, starting with
        // `pages`.
        let filePath = this.getFilePath(pathname, "pages");
        if (this.fs.existsSync(filePath)) {
            return "pages";
        }
        filePath = this.getFilePath(pathname, "app");
        if (this.fs.existsSync(filePath)) {
            return "app";
        }
        throw new Error(`Invariant: Unable to determine file path kind for ${pathname}`);
    }
    getFilePath(pathname, kind) {
        switch(kind){
            case "fetch":
                // we store in .next/cache/fetch-cache so it can be persisted
                // across deploys
                return path_default().join(this.serverDistDir, "..", "cache", "fetch-cache", pathname);
            case "pages":
                return path_default().join(this.serverDistDir, "pages", pathname);
            case "app":
                return path_default().join(this.serverDistDir, "app", pathname);
            default:
                throw new Error("Invariant: Can't determine file path kind");
        }
    }
} //# sourceMappingURL=file-system-cache.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/sorted-routes.js
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/helpers/interception-routes.js

// order matters here, the first match will be used
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = normalizeAppPath(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/is-dynamic.js

// Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    if (isInterceptionRouteAppPath(route)) {
        route = extractInterceptionRouteInformation(route).interceptedRoute;
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/index.js

 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/utils.js
/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ const WEB_VITALS = (/* unused pure expression or super */ null && ([
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
]));
/**
 * Utils
 */ function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends (/* unused pure expression or super */ null && (Error)) {
}
class PageNotFoundError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends (/* unused pure expression or super */ null && (Error)) {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/page-path/normalize-page-path.js



/**
 * Takes a page and transforms it into its file counterpart ensuring that the
 * output is normalized. Note this function is not idempotent because a page
 * `/index` can be referencing `/index/index.js` and `/index/index` could be
 * referencing `/index/index/index.js`. Examples:
 *  - `/` -> `/index`
 *  - `/index/foo` -> `/index/index/foo`
 *  - `/index` -> `/index/index`
 */ function normalizePagePath(page) {
    const normalized = /^\/index(\/|$)/.test(page) && !isDynamicRoute(page) ? "/index" + page : page === "/" ? "/index" : ensureLeadingSlash(page);
    if (false) {}
    return normalized;
} //# sourceMappingURL=normalize-page-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/lib/incremental-cache/index.js





function toRoute(pathname) {
    return pathname.replace(/\/$/, "").replace(/\/index$/, "") || "/";
}
class CacheHandler {
    // eslint-disable-next-line
    constructor(_ctx){}
    async get(..._args) {
        return {};
    }
    async set(..._args) {}
    async revalidateTag(_tag) {}
}
class IncrementalCache {
    constructor({ fs, dev, appDir, pagesDir, flushToDisk, fetchCache, minimalMode, serverDistDir, requestHeaders, requestProtocol, maxMemoryCacheSize, getPrerenderManifest, fetchCacheKeyPrefix, CurCacheHandler, allowedRevalidateHeaderKeys, experimental }){
        var _this_prerenderManifest_preview, _this_prerenderManifest, _this_prerenderManifest_preview1, _this_prerenderManifest1;
        this.locks = new Map();
        this.unlocks = new Map();
        const debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        if (!CurCacheHandler) {
            if (fs && serverDistDir) {
                if (debug) {
                    console.log("using filesystem cache handler");
                }
                CurCacheHandler = FileSystemCache;
            }
            if (FetchCache.isAvailable({
                _requestHeaders: requestHeaders
            }) && minimalMode && fetchCache) {
                if (debug) {
                    console.log("using fetch cache handler");
                }
                CurCacheHandler = FetchCache;
            }
        } else if (debug) {
            console.log("using custom cache handler", CurCacheHandler.name);
        }
        if (process.env.__NEXT_TEST_MAX_ISR_CACHE) {
            // Allow cache size to be overridden for testing purposes
            maxMemoryCacheSize = parseInt(process.env.__NEXT_TEST_MAX_ISR_CACHE, 10);
        }
        this.dev = dev;
        // this is a hack to avoid Webpack knowing this is equal to this.minimalMode
        // because we replace this.minimalMode to true in production bundles.
        const minimalModeKey = "minimalMode";
        this[minimalModeKey] = minimalMode;
        this.requestHeaders = requestHeaders;
        this.requestProtocol = requestProtocol;
        this.allowedRevalidateHeaderKeys = allowedRevalidateHeaderKeys;
        this.prerenderManifest = getPrerenderManifest();
        this.fetchCacheKeyPrefix = fetchCacheKeyPrefix;
        let revalidatedTags = [];
        if (requestHeaders[constants/* PRERENDER_REVALIDATE_HEADER */.y3] === ((_this_prerenderManifest = this.prerenderManifest) == null ? void 0 : (_this_prerenderManifest_preview = _this_prerenderManifest.preview) == null ? void 0 : _this_prerenderManifest_preview.previewModeId)) {
            this.isOnDemandRevalidate = true;
        }
        if (minimalMode && typeof requestHeaders[constants/* NEXT_CACHE_REVALIDATED_TAGS_HEADER */.of] === "string" && requestHeaders[constants/* NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER */.X_] === ((_this_prerenderManifest1 = this.prerenderManifest) == null ? void 0 : (_this_prerenderManifest_preview1 = _this_prerenderManifest1.preview) == null ? void 0 : _this_prerenderManifest_preview1.previewModeId)) {
            revalidatedTags = requestHeaders[constants/* NEXT_CACHE_REVALIDATED_TAGS_HEADER */.of].split(",");
        }
        if (CurCacheHandler) {
            this.cacheHandler = new CurCacheHandler({
                dev,
                fs,
                flushToDisk,
                serverDistDir,
                revalidatedTags,
                maxMemoryCacheSize,
                _pagesDir: !!pagesDir,
                _appDir: !!appDir,
                _requestHeaders: requestHeaders,
                fetchCacheKeyPrefix,
                experimental
            });
        }
    }
    calculateRevalidate(pathname, fromTime, dev) {
        // in development we don't have a prerender-manifest
        // and default to always revalidating to allow easier debugging
        if (dev) return new Date().getTime() - 1000;
        // if an entry isn't present in routes we fallback to a default
        // of revalidating after 1 second
        const { initialRevalidateSeconds } = this.prerenderManifest.routes[toRoute(pathname)] || {
            initialRevalidateSeconds: 1
        };
        const revalidateAfter = typeof initialRevalidateSeconds === "number" ? initialRevalidateSeconds * 1000 + fromTime : initialRevalidateSeconds;
        return revalidateAfter;
    }
    _getPathname(pathname, fetchCache) {
        return fetchCache ? pathname : normalizePagePath(pathname);
    }
    async unlock(cacheKey) {
        const unlock = this.unlocks.get(cacheKey);
        if (unlock) {
            unlock();
            this.locks.delete(cacheKey);
            this.unlocks.delete(cacheKey);
        }
    }
    async lock(cacheKey) {
        if (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT && process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY && "edge" !== "edge") {}
        let unlockNext = ()=>Promise.resolve();
        const existingLock = this.locks.get(cacheKey);
        if (existingLock) {
            await existingLock;
        } else {
            const newLock = new Promise((resolve)=>{
                unlockNext = async ()=>{
                    resolve();
                };
            });
            this.locks.set(cacheKey, newLock);
            this.unlocks.set(cacheKey, unlockNext);
        }
        return unlockNext;
    }
    async revalidateTag(tag) {
        var _this_cacheHandler_revalidateTag, _this_cacheHandler;
        if (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT && process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY && "edge" !== "edge") {}
        return (_this_cacheHandler = this.cacheHandler) == null ? void 0 : (_this_cacheHandler_revalidateTag = _this_cacheHandler.revalidateTag) == null ? void 0 : _this_cacheHandler_revalidateTag.call(_this_cacheHandler, tag);
    }
    // x-ref: https://github.com/facebook/react/blob/2655c9354d8e1c54ba888444220f63e836925caa/packages/react/src/ReactFetch.js#L23
    async fetchCacheKey(url, init = {}) {
        // this should be bumped anytime a fix is made to cache entries
        // that should bust the cache
        const MAIN_KEY_PREFIX = "v3";
        let cacheKey;
        const bodyChunks = [];
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();
        if (init.body) {
            // handle ReadableStream body
            if (typeof init.body.getReader === "function") {
                const readableBody = init.body;
                const chunks = [];
                try {
                    await readableBody.pipeTo(new WritableStream({
                        write (chunk) {
                            if (typeof chunk === "string") {
                                chunks.push(encoder.encode(chunk));
                                bodyChunks.push(chunk);
                            } else {
                                chunks.push(chunk);
                                bodyChunks.push(decoder.decode(chunk, {
                                    stream: true
                                }));
                            }
                        }
                    }));
                    // Flush the decoder.
                    bodyChunks.push(decoder.decode());
                    // Create a new buffer with all the chunks.
                    const length = chunks.reduce((total, arr)=>total + arr.length, 0);
                    const arrayBuffer = new Uint8Array(length);
                    // Push each of the chunks into the new array buffer.
                    let offset = 0;
                    for (const chunk of chunks){
                        arrayBuffer.set(chunk, offset);
                        offset += chunk.length;
                    }
                    init._ogBody = arrayBuffer;
                } catch (err) {
                    console.error("Problem reading body", err);
                }
            } else if (typeof init.body.keys === "function") {
                const formData = init.body;
                init._ogBody = init.body;
                for (const key of new Set([
                    ...formData.keys()
                ])){
                    const values = formData.getAll(key);
                    bodyChunks.push(`${key}=${(await Promise.all(values.map(async (val)=>{
                        if (typeof val === "string") {
                            return val;
                        } else {
                            return await val.text();
                        }
                    }))).join(",")}`);
                }
            // handle blob body
            } else if (typeof init.body.arrayBuffer === "function") {
                const blob = init.body;
                const arrayBuffer = await blob.arrayBuffer();
                bodyChunks.push(await blob.text());
                init._ogBody = new Blob([
                    arrayBuffer
                ], {
                    type: blob.type
                });
            } else if (typeof init.body === "string") {
                bodyChunks.push(init.body);
                init._ogBody = init.body;
            }
        }
        const cacheString = JSON.stringify([
            MAIN_KEY_PREFIX,
            this.fetchCacheKeyPrefix || "",
            url,
            init.method,
            typeof (init.headers || {}).keys === "function" ? Object.fromEntries(init.headers) : init.headers,
            init.mode,
            init.redirect,
            init.credentials,
            init.referrer,
            init.referrerPolicy,
            init.integrity,
            init.cache,
            bodyChunks
        ]);
        if (true) {
            function bufferToHex(buffer) {
                return Array.prototype.map.call(new Uint8Array(buffer), (b)=>b.toString(16).padStart(2, "0")).join("");
            }
            const buffer = encoder.encode(cacheString);
            cacheKey = bufferToHex(await crypto.subtle.digest("SHA-256", buffer));
        } else {}
        return cacheKey;
    }
    // get data from cache if available
    async get(cacheKey, ctx = {}) {
        var _this_cacheHandler, _cacheData_value, _this_prerenderManifest_routes_toRoute;
        if (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT && process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY && "edge" !== "edge") {}
        // we don't leverage the prerender cache in dev mode
        // so that getStaticProps is always called for easier debugging
        if (this.dev && (ctx.kindHint !== "fetch" || this.requestHeaders["cache-control"] === "no-cache")) {
            return null;
        }
        cacheKey = this._getPathname(cacheKey, ctx.kindHint === "fetch");
        let entry = null;
        let revalidate = ctx.revalidate;
        const cacheData = await ((_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.get(cacheKey, ctx));
        if ((cacheData == null ? void 0 : (_cacheData_value = cacheData.value) == null ? void 0 : _cacheData_value.kind) === "FETCH") {
            const combinedTags = [
                ...ctx.tags || [],
                ...ctx.softTags || []
            ];
            // if a tag was revalidated we don't return stale data
            if (combinedTags.some((tag)=>{
                var _this_revalidatedTags;
                return (_this_revalidatedTags = this.revalidatedTags) == null ? void 0 : _this_revalidatedTags.includes(tag);
            })) {
                return null;
            }
            revalidate = revalidate || cacheData.value.revalidate;
            const age = (Date.now() - (cacheData.lastModified || 0)) / 1000;
            const isStale = age > revalidate;
            const data = cacheData.value.data;
            return {
                isStale: isStale,
                value: {
                    kind: "FETCH",
                    data,
                    revalidate: revalidate
                },
                revalidateAfter: Date.now() + revalidate * 1000
            };
        }
        const curRevalidate = (_this_prerenderManifest_routes_toRoute = this.prerenderManifest.routes[toRoute(cacheKey)]) == null ? void 0 : _this_prerenderManifest_routes_toRoute.initialRevalidateSeconds;
        let isStale;
        let revalidateAfter;
        if ((cacheData == null ? void 0 : cacheData.lastModified) === -1) {
            isStale = -1;
            revalidateAfter = -1 * constants/* CACHE_ONE_YEAR */.BR;
        } else {
            revalidateAfter = this.calculateRevalidate(cacheKey, (cacheData == null ? void 0 : cacheData.lastModified) || Date.now(), this.dev && ctx.kindHint !== "fetch");
            isStale = revalidateAfter !== false && revalidateAfter < Date.now() ? true : undefined;
        }
        if (cacheData) {
            entry = {
                isStale,
                curRevalidate,
                revalidateAfter,
                value: cacheData.value
            };
        }
        if (!cacheData && this.prerenderManifest.notFoundRoutes.includes(cacheKey)) {
            // for the first hit after starting the server the cache
            // may not have a way to save notFound: true so if
            // the prerender-manifest marks this as notFound then we
            // return that entry and trigger a cache set to give it a
            // chance to update in-memory entries
            entry = {
                isStale,
                value: null,
                curRevalidate,
                revalidateAfter
            };
            this.set(cacheKey, entry.value, ctx);
        }
        return entry;
    }
    // populate the incremental cache with new data
    async set(pathname, data, ctx) {
        if (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT && process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY && "edge" !== "edge") {}
        if (this.dev && !ctx.fetchCache) return;
        // fetchCache has upper limit of 2MB per-entry currently
        if (ctx.fetchCache && JSON.stringify(data).length > 2 * 1024 * 1024) {
            if (this.dev) {
                throw new Error(`fetch for over 2MB of data can not be cached`);
            }
            return;
        }
        pathname = this._getPathname(pathname, ctx.fetchCache);
        try {
            var _this_cacheHandler;
            // we use the prerender manifest memory instance
            // to store revalidate timings for calculating
            // revalidateAfter values so we update this on set
            if (typeof ctx.revalidate !== "undefined" && !ctx.fetchCache) {
                this.prerenderManifest.routes[pathname] = {
                    experimentalPPR: undefined,
                    dataRoute: path_default().posix.join("/_next/data", `${normalizePagePath(pathname)}.json`),
                    srcRoute: null,
                    initialRevalidateSeconds: ctx.revalidate,
                    // Pages routes do not have a prefetch data route.
                    prefetchDataRoute: undefined
                };
            }
            await ((_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.set(pathname, data, ctx));
        } catch (error) {
            console.warn("Failed to update prerender cache for", pathname, error);
        }
    }
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js

function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/escape-regexp.js
// regexp is based on https://github.com/sindresorhus/escape-string-regexp
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
var remove_trailing_slash = __webpack_require__(7274);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js



const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0,remove_trailing_slash/* removeTrailingSlash */.Q)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + escapeStringRegexp(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + escapeStringRegexp(segment);
            }
        }).join(""),
        groups
    };
}
/**
 * From a normalized route this function generates a regular expression and
 * a corresponding groups object intended to be used to store matching groups
 * from the regular expression.
 */ function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = "";
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, "");
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? escapeStringRegexp(interceptionMarker) : "";
    return repeat ? optional ? "(?:/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?))?" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?)" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0,remove_trailing_slash/* removeTrailingSlash */.Q)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                const [usedMarker] = segment.split(paramMatches[0]);
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    interceptionMarker: usedMarker,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + escapeStringRegexp(segment);
            }
        }).join(""),
        routeKeys
    };
}
/**
 * This function extends `getRouteRegex` generating also a named regexp where
 * each group is named along with a routeKeys object that indexes the assigned
 * named group with its corresponding key. When the routeKeys need to be
 * prefixed to uniquely identify internally the "prefixRouteKey" arg should
 * be "true" currently this is only the case when creating the routes-manifest
 * during the build
 */ function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
/**
 * Generates a named regexp.
 * This is intended to be using for build time only.
 */ function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/future/route-matchers/route-matcher.js



class RouteMatcher {
    constructor(definition){
        this.definition = definition;
        if (isDynamicRoute(definition.pathname)) {
            this.dynamic = getRouteMatcher(getRouteRegex(definition.pathname));
        }
    }
    /**
   * Identity returns the identity part of the matcher. This is used to compare
   * a unique matcher to another. This is also used when sorting dynamic routes,
   * so it must contain the pathname part.
   */ get identity() {
        return this.definition.pathname;
    }
    get isDynamic() {
        return this.dynamic !== undefined;
    }
    match(pathname) {
        const result = this.test(pathname);
        if (!result) return null;
        return {
            definition: this.definition,
            params: result.params
        };
    }
    test(pathname) {
        if (this.dynamic) {
            const params = this.dynamic(pathname);
            if (!params) return null;
            return {
                params
            };
        }
        if (pathname === this.definition.pathname) {
            return {};
        }
        return null;
    }
} //# sourceMappingURL=route-matcher.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/internal-edge-wait-until.js
// An internal module to expose the "waitUntil" API to Edge SSR and Edge Route Handler functions.
// This is highly experimental and subject to change.
// We still need a global key to bypass Webpack's layering of modules.
const GLOBAL_KEY = Symbol.for("__next_internal_waitUntil__");
const state = globalThis[GLOBAL_KEY] || // @ts-ignore
(globalThis[GLOBAL_KEY] = {
    waitUntilCounter: 0,
    waitUntilResolve: undefined,
    waitUntilPromise: null
});
// No matter how many concurrent requests are being handled, we want to make sure
// that the final promise is only resolved once all of the waitUntil promises have
// settled.
function resolveOnePromise() {
    state.waitUntilCounter--;
    if (state.waitUntilCounter === 0) {
        state.waitUntilResolve();
        state.waitUntilPromise = null;
    }
}
function internal_getCurrentFunctionWaitUntil() {
    return state.waitUntilPromise;
}
function internal_runWithWaitUntil(fn) {
    const result = fn();
    if (result && typeof result === "object" && "then" in result && "finally" in result && typeof result.then === "function" && typeof result.finally === "function") {
        if (!state.waitUntilCounter) {
            // Create the promise for the next batch of waitUntil calls.
            state.waitUntilPromise = new Promise((resolve)=>{
                state.waitUntilResolve = resolve;
            });
        }
        state.waitUntilCounter++;
        return result.finally(()=>{
            resolveOnePromise();
        });
    }
    return result;
} //# sourceMappingURL=internal-edge-wait-until.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/native-url/index.js
var native_url = __webpack_require__(4025);
// EXTERNAL MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
var normalize_locale_path = __webpack_require__(4823);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(3014);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-match.js


/**
 * Generates a path matcher function for a given path and options based on
 * path-to-regexp. By default the match will be case insensitive, non strict
 * and delimited by `/`.
 */ function getPathMatch(path, options) {
    const keys = [];
    const regexp = (0,path_to_regexp/* pathToRegexp */.Bo)(path, keys, {
        delimiter: "/",
        sensitive: typeof (options == null ? void 0 : options.sensitive) === "boolean" ? options.sensitive : false,
        strict: options == null ? void 0 : options.strict
    });
    const matcher = (0,path_to_regexp/* regexpToFunction */.WS)((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
    /**
   * A matcher function that will check if a given pathname matches the path
   * given in the builder function. When the path does not match it will return
   * `false` but if it does it will return an object with the matched params
   * merged with the params provided in the second argument.
   */ return (pathname, params)=>{
        // If no pathname is provided it's not a match.
        if (typeof pathname !== "string") return false;
        const match = matcher(pathname);
        // If the path did not match `false` will be returned.
        if (!match) return false;
        /**
     * If unnamed params are not allowed they must be removed from
     * the matched parameters. path-to-regexp uses "string" for named and
     * "number" for unnamed parameters.
     */ if (options == null ? void 0 : options.removeUnnamedParams) {
            for (const key of keys){
                if (typeof key.name === "number") {
                    delete match.params[key.name];
                }
            }
        }
        return {
            ...params,
            ...match.params
        };
    };
} //# sourceMappingURL=path-match.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/querystring.js
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function querystring_assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-relative-url.js


/**
 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
 * (e.g. `./hello`) then at least base must be.
 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
 * the current origin will be parsed as relative
 */ function parseRelativeUrl(url, base) {
    const globalBase = new URL( true ? "http://n" : 0);
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL( true ? "http://n" : 0) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw new Error("invariant: invalid relative URL, router received " + url);
    }
    return {
        pathname,
        query: searchParamsToUrlQuery(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-url.js


function parseUrl(url) {
    if (url.startsWith("/")) {
        return parseRelativeUrl(url);
    }
    const parsedURL = new URL(url);
    return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: searchParamsToUrlQuery(parsedURL.searchParams),
        search: parsedURL.search
    };
} //# sourceMappingURL=parse-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js
/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __webpack_require__(9577);
        return parseCookieFn(Array.isArray(cookie) ? cookie.join("; ") : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/prepare-destination.js






/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */ function getSafeParamName(paramName) {
    let newParamName = "";
    for(let i = 0; i < paramName.length; i++){
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || // A-Z
        charCode > 96 && charCode < 123 // a-z
        ) {
            newParamName += paramName[i];
        }
    }
    return newParamName;
}
function escapeSegment(str, segmentName) {
    return str.replace(new RegExp(":" + escapeStringRegexp(segmentName), "g"), "__ESC_COLON_" + segmentName);
}
function unescapeSegments(str) {
    return str.replace(/__ESC_COLON_/gi, ":");
}
function matchHas(req, query, has, missing) {
    if (has === void 0) has = [];
    if (missing === void 0) missing = [];
    const params = {};
    const hasMatch = (hasItem)=>{
        let value;
        let key = hasItem.key;
        switch(hasItem.type){
            case "header":
                {
                    key = key.toLowerCase();
                    value = req.headers[key];
                    break;
                }
            case "cookie":
                {
                    if ("cookies" in req) {
                        value = req.cookies[hasItem.key];
                    } else {
                        const cookies = getCookieParser(req.headers)();
                        value = cookies[hasItem.key];
                    }
                    break;
                }
            case "query":
                {
                    value = query[key];
                    break;
                }
            case "host":
                {
                    const { host } = (req == null ? void 0 : req.headers) || {};
                    // remove port from host if present
                    const hostname = host == null ? void 0 : host.split(":", 1)[0].toLowerCase();
                    value = hostname;
                    break;
                }
            default:
                {
                    break;
                }
        }
        if (!hasItem.value && value) {
            params[getSafeParamName(key)] = value;
            return true;
        } else if (value) {
            const matcher = new RegExp("^" + hasItem.value + "$");
            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
            if (matches) {
                if (Array.isArray(matches)) {
                    if (matches.groups) {
                        Object.keys(matches.groups).forEach((groupKey)=>{
                            params[groupKey] = matches.groups[groupKey];
                        });
                    } else if (hasItem.type === "host" && matches[0]) {
                        params.host = matches[0];
                    }
                }
                return true;
            }
        }
        return false;
    };
    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
    if (allMatch) {
        return params;
    }
    return false;
}
function compileNonPath(value, params) {
    if (!value.includes(":")) {
        return value;
    }
    for (const key of Object.keys(params)){
        if (value.includes(":" + key)) {
            value = value.replace(new RegExp(":" + key + "\\*", "g"), ":" + key + "--ESCAPED_PARAM_ASTERISKS").replace(new RegExp(":" + key + "\\?", "g"), ":" + key + "--ESCAPED_PARAM_QUESTION").replace(new RegExp(":" + key + "\\+", "g"), ":" + key + "--ESCAPED_PARAM_PLUS").replace(new RegExp(":" + key + "(?!\\w)", "g"), "--ESCAPED_PARAM_COLON" + key);
        }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
    // the value needs to start with a forward-slash to be compiled
    // correctly
    return (0,path_to_regexp/* compile */.MY)("/" + value, {
        validate: false
    })(params).slice(1);
}
function prepareDestination(args) {
    const query = Object.assign({}, args.query);
    delete query.__nextLocale;
    delete query.__nextDefaultLocale;
    delete query.__nextDataReq;
    delete query.__nextInferredLocaleFromDefault;
    delete query[app_router_headers/* NEXT_RSC_UNION_QUERY */.H4];
    let escapedDestination = args.destination;
    for (const param of Object.keys({
        ...args.params,
        ...query
    })){
        escapedDestination = escapeSegment(escapedDestination, param);
    }
    const parsedDestination = parseUrl(escapedDestination);
    const destQuery = parsedDestination.query;
    const destPath = unescapeSegments("" + parsedDestination.pathname + (parsedDestination.hash || ""));
    const destHostname = unescapeSegments(parsedDestination.hostname || "");
    const destPathParamKeys = [];
    const destHostnameParamKeys = [];
    (0,path_to_regexp/* pathToRegexp */.Bo)(destPath, destPathParamKeys);
    (0,path_to_regexp/* pathToRegexp */.Bo)(destHostname, destHostnameParamKeys);
    const destParams = [];
    destPathParamKeys.forEach((key)=>destParams.push(key.name));
    destHostnameParamKeys.forEach((key)=>destParams.push(key.name));
    const destPathCompiler = (0,path_to_regexp/* compile */.MY)(destPath, // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    {
        validate: false
    });
    const destHostnameCompiler = (0,path_to_regexp/* compile */.MY)(destHostname, {
        validate: false
    });
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)){
        // the value needs to start with a forward-slash to be compiled
        // correctly
        if (Array.isArray(strOrArray)) {
            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
        } else if (typeof strOrArray === "string") {
            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query or path
    let paramKeys = Object.keys(args.params).filter((name)=>name !== "nextInternalLocale");
    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
        for (const key of paramKeys){
            if (!(key in destQuery)) {
                destQuery[key] = args.params[key];
            }
        }
    }
    let newUrl;
    // The compiler also that the interception route marker is an unnamed param, hence '0',
    // so we need to add it to the params object.
    if (isInterceptionRouteAppPath(destPath)) {
        for (const segment of destPath.split("/")){
            const marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            if (marker) {
                args.params["0"] = marker;
                break;
            }
        }
    }
    try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split("#", 2);
        parsedDestination.hostname = destHostnameCompiler(args.params);
        parsedDestination.pathname = pathname;
        parsedDestination.hash = "" + (hash ? "#" : "") + (hash || "");
        delete parsedDestination.search;
    } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = {
        ...query,
        ...parsedDestination.query
    };
    return {
        newUrl,
        destQuery,
        parsedDestination
    };
} //# sourceMappingURL=prepare-destination.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/server-utils.js









function normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex) {
    // make sure to normalize req.url on Vercel to strip dynamic params
    // from the query which are added during routing
    if (pageIsDynamic && trustQuery && defaultRouteRegex) {
        const _parsedUrl = (0,native_url.parse)(req.url, true);
        delete _parsedUrl.search;
        for (const key of Object.keys(_parsedUrl.query)){
            if (key !== constants/* NEXT_QUERY_PARAM_PREFIX */.dN && key.startsWith(constants/* NEXT_QUERY_PARAM_PREFIX */.dN) || (paramKeys || Object.keys(defaultRouteRegex.groups)).includes(key)) {
                delete _parsedUrl.query[key];
            }
        }
        req.url = (0,native_url.format)(_parsedUrl);
    }
}
function interpolateDynamicPath(pathname, params, defaultRouteRegex) {
    if (!defaultRouteRegex) return pathname;
    for (const param of Object.keys(defaultRouteRegex.groups)){
        const { optional, repeat } = defaultRouteRegex.groups[param];
        let builtParam = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
            builtParam = `[${builtParam}]`;
        }
        const paramIdx = pathname.indexOf(builtParam);
        if (paramIdx > -1) {
            let paramValue;
            const value = params[param];
            if (Array.isArray(value)) {
                paramValue = value.map((v)=>v && encodeURIComponent(v)).join("/");
            } else if (value) {
                paramValue = encodeURIComponent(value);
            } else {
                paramValue = "";
            }
            pathname = pathname.slice(0, paramIdx) + paramValue + pathname.slice(paramIdx + builtParam.length);
        }
    }
    return pathname;
}
function normalizeDynamicRouteParams(params, ignoreOptional, defaultRouteRegex, defaultRouteMatches) {
    let hasValidParams = true;
    if (!defaultRouteRegex) return {
        params,
        hasValidParams: false
    };
    params = Object.keys(defaultRouteRegex.groups).reduce((prev, key)=>{
        let value = params[key];
        if (typeof value === "string") {
            value = normalizeRscURL(value);
        }
        if (Array.isArray(value)) {
            value = value.map((val)=>{
                if (typeof val === "string") {
                    val = normalizeRscURL(val);
                }
                return val;
            });
        }
        // if the value matches the default value we can't rely
        // on the parsed params, this is used to signal if we need
        // to parse x-now-route-matches or not
        const defaultValue = defaultRouteMatches[key];
        const isOptional = defaultRouteRegex.groups[key].optional;
        const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
            return Array.isArray(value) ? value.some((val)=>val.includes(defaultVal)) : value == null ? void 0 : value.includes(defaultVal);
        }) : value == null ? void 0 : value.includes(defaultValue);
        if (isDefaultValue || typeof value === "undefined" && !(isOptional && ignoreOptional)) {
            hasValidParams = false;
        }
        // non-provided optional values should be undefined so normalize
        // them to undefined
        if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
        // [[...paramName]] for the root path on Vercel
        (value[0] === "index" || value[0] === `[[...${key}]]`))) {
            value = undefined;
            delete params[key];
        }
        // query values from the proxy aren't already split into arrays
        // so make sure to normalize catch-all values
        if (value && typeof value === "string" && defaultRouteRegex.groups[key].repeat) {
            value = value.split("/");
        }
        if (value) {
            prev[key] = value;
        }
        return prev;
    }, {});
    return {
        params,
        hasValidParams
    };
}
function getUtils({ page, i18n, basePath, rewrites, pageIsDynamic, trailingSlash, caseSensitive }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = getNamedRouteRegex(page, false);
        dynamicRouteMatcher = getRouteMatcher(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        const rewriteParams = {};
        let fsPathname = parsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0,remove_trailing_slash/* removeTrailingSlash */.Q)(fsPathname || "");
            return fsPathnameNoSlash === (0,remove_trailing_slash/* removeTrailingSlash */.Q)(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = getPathMatch(rewrite.source + (trailingSlash ? "(/)?" : ""), {
                removeUnnamedParams: true,
                strict: true,
                sensitive: !!caseSensitive
            });
            let params = matcher(parsedUrl.pathname);
            if ((rewrite.has || rewrite.missing) && params) {
                const hasParams = matchHas(req, parsedUrl.query, rewrite.has, rewrite.missing);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                const { parsedDestination, destQuery } = prepareDestination({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: parsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(parsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                Object.assign(parsedUrl, parsedDestination);
                fsPathname = parsedUrl.pathname;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), "") || "/";
                }
                if (i18n) {
                    const destLocalePathResult = (0,normalize_locale_path/* normalizeLocalePath */.h)(fsPathname, i18n.locales);
                    fsPathname = destLocalePathResult.pathname;
                    parsedUrl.query.nextInternalLocale = destLocalePathResult.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        parsedUrl.query = {
                            ...parsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite of rewrites.beforeFiles || []){
            checkRewrite(rewrite);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return rewriteParams;
    }
    function getParamsFromRouteMatches(req, renderOpts, detectedLocale) {
        return getRouteMatcher(function() {
            const { groups, routeKeys } = defaultRouteRegex;
            return {
                re: {
                    // Simulate a RegExp match from the \`req.url\` input
                    exec: (str)=>{
                        const obj = Object.fromEntries(new URLSearchParams(str));
                        const matchesHasLocale = i18n && detectedLocale && obj["1"] === detectedLocale;
                        for (const key of Object.keys(obj)){
                            const value = obj[key];
                            if (key !== constants/* NEXT_QUERY_PARAM_PREFIX */.dN && key.startsWith(constants/* NEXT_QUERY_PARAM_PREFIX */.dN)) {
                                const normalizedKey = key.substring(constants/* NEXT_QUERY_PARAM_PREFIX */.dN.length);
                                obj[normalizedKey] = value;
                                delete obj[key];
                            }
                        }
                        // favor named matches if available
                        const routeKeyNames = Object.keys(routeKeys || {});
                        const filterLocaleItem = (val)=>{
                            if (i18n) {
                                // locale items can be included in route-matches
                                // for fallback SSG pages so ensure they are
                                // filtered
                                const isCatchAll = Array.isArray(val);
                                const _val = isCatchAll ? val[0] : val;
                                if (typeof _val === "string" && i18n.locales.some((item)=>{
                                    if (item.toLowerCase() === _val.toLowerCase()) {
                                        detectedLocale = item;
                                        renderOpts.locale = detectedLocale;
                                        return true;
                                    }
                                    return false;
                                })) {
                                    // remove the locale item from the match
                                    if (isCatchAll) {
                                        val.splice(0, 1);
                                    }
                                    // the value is only a locale item and
                                    // shouldn't be added
                                    return isCatchAll ? val.length === 0 : true;
                                }
                            }
                            return false;
                        };
                        if (routeKeyNames.every((name)=>obj[name])) {
                            return routeKeyNames.reduce((prev, keyName)=>{
                                const paramName = routeKeys == null ? void 0 : routeKeys[keyName];
                                if (paramName && !filterLocaleItem(obj[keyName])) {
                                    prev[groups[paramName].pos] = obj[keyName];
                                }
                                return prev;
                            }, {});
                        }
                        return Object.keys(obj).reduce((prev, key)=>{
                            if (!filterLocaleItem(obj[key])) {
                                let normalizedKey = key;
                                if (matchesHasLocale) {
                                    normalizedKey = parseInt(key, 10) - 1 + "";
                                }
                                return Object.assign(prev, {
                                    [normalizedKey]: obj[key]
                                });
                            }
                            return prev;
                        }, {});
                    }
                },
                groups
            };
        }())(req.headers["x-now-route-matches"]);
    }
    return {
        handleRewrites,
        defaultRouteRegex,
        dynamicRouteMatcher,
        defaultRouteMatches,
        getParamsFromRouteMatches,
        normalizeDynamicRouteParams: (params, ignoreOptional)=>normalizeDynamicRouteParams(params, ignoreOptional, defaultRouteRegex, defaultRouteMatches),
        normalizeVercelUrl: (req, trustQuery, paramKeys)=>normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex),
        interpolateDynamicPath: (pathname, params)=>interpolateDynamicPath(pathname, params, defaultRouteRegex)
    };
} //# sourceMappingURL=server-utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/edge-route-module-wrapper.js







/**
 * EdgeRouteModuleWrapper is a wrapper around a route module.
 *
 * Note that this class should only be used in the edge runtime.
 */ class EdgeRouteModuleWrapper {
    /**
   * The constructor is wrapped with private to ensure that it can only be
   * constructed by the static wrap method.
   *
   * @param routeModule the route module to wrap
   */ constructor(routeModule){
        this.routeModule = routeModule;
        // TODO: (wyattjoh) possibly allow the module to define it's own matcher
        this.matcher = new RouteMatcher(routeModule.definition);
    }
    /**
   * This will wrap a module with the EdgeModuleWrapper and return a function
   * that can be used as a handler for the edge runtime.
   *
   * @param module the module to wrap
   * @param options any options that should be passed to the adapter and
   *                override the ones passed from the runtime
   * @returns a function that can be used as a handler for the edge runtime
   */ static wrap(routeModule, options = {}) {
        // Create the module wrapper.
        const wrapper = new EdgeRouteModuleWrapper(routeModule);
        // Return the wrapping function.
        return (opts)=>{
            return adapter({
                ...opts,
                ...options,
                IncrementalCache: IncrementalCache,
                // Bind the handler method to the wrapper so it still has context.
                handler: wrapper.handler.bind(wrapper)
            });
        };
    }
    async handler(request, evt) {
        const utils = getUtils({
            pageIsDynamic: this.matcher.isDynamic,
            page: this.matcher.definition.pathname,
            basePath: request.nextUrl.basePath,
            // We don't need the `handleRewrite` util, so can just pass an empty object
            rewrites: {},
            // only used for rewrites, so setting an arbitrary default value here
            caseSensitive: false
        });
        const { params } = utils.normalizeDynamicRouteParams(searchParamsToUrlQuery(request.nextUrl.searchParams));
        const prerenderManifest = typeof self.__PRERENDER_MANIFEST === "string" ? JSON.parse(self.__PRERENDER_MANIFEST) : undefined;
        // Create the context for the handler. This contains the params from the
        // match (if any).
        const context = {
            params,
            prerenderManifest: {
                version: 4,
                routes: {},
                dynamicRoutes: {},
                preview: (prerenderManifest == null ? void 0 : prerenderManifest.preview) || {
                    previewModeEncryptionKey: "",
                    previewModeId: "development-id",
                    previewModeSigningKey: ""
                },
                notFoundRoutes: []
            },
            renderOpts: {
                supportsDynamicHTML: true,
                // App Route's cannot be postponed.
                experimental: {
                    ppr: false
                }
            }
        };
        // Get the response from the handler.
        const res = await this.routeModule.handle(request, context);
        const waitUntilPromises = [
            internal_getCurrentFunctionWaitUntil()
        ];
        if (context.renderOpts.waitUntil) {
            waitUntilPromises.push(context.renderOpts.waitUntil);
        }
        evt.waitUntil(Promise.all(waitUntilPromises));
        return res;
    }
} //# sourceMappingURL=edge-route-module-wrapper.js.map


/***/ }),

/***/ 4040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9605);
// This file is for modularized imports for next/server to get fully-treeshaking.
 //# sourceMappingURL=next-response.js.map


/***/ }),

/***/ 2639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ NextURL)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
var remove_trailing_slash = __webpack_require__(7274);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0,remove_trailing_slash/* removeTrailingSlash */.Q)(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : (0,remove_trailing_slash/* removeTrailingSlash */.Q)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":", 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
var normalize_locale_path = __webpack_require__(4823);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0,normalize_locale_path/* normalizeLocalePath */.h)(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0,normalize_locale_path/* normalizeLocalePath */.h)(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map


/***/ }),

/***/ 5683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ HeadersAdapter)
/* harmony export */ });
/* unused harmony export ReadonlyHeadersError */
/* harmony import */ var _reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1805);

/**
 * @internal
 */ class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect__WEBPACK_IMPORTED_MODULE_0__/* .ReflectAdapter */ .g.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map


/***/ }),

/***/ 1805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ReflectAdapter)
/* harmony export */ });
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map


/***/ }),

/***/ 8119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qb: () => (/* binding */ RequestCookiesAdapter),
/* harmony export */   _5: () => (/* binding */ appendMutableCookies),
/* harmony export */   vr: () => (/* binding */ MutableRequestCookiesAdapter)
/* harmony export */ });
/* unused harmony exports ReadonlyRequestCookiesError, getModifiedCookieValues */
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9558);
/* harmony import */ var _reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1805);


/**
 * @internal
 */ class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect__WEBPACK_IMPORTED_MODULE_1__/* .ReflectAdapter */ .g.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new _cookies__WEBPACK_IMPORTED_MODULE_0__/* .ResponseCookies */ .n(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookes = new _cookies__WEBPACK_IMPORTED_MODULE_0__/* .ResponseCookies */ .n(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookes.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            var _fetch___nextGetStaticStore;
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = fetch.__nextGetStaticStore == null ? void 0 : (_fetch___nextGetStaticStore = fetch.__nextGetStaticStore.call(fetch)) == null ? void 0 : _fetch___nextGetStaticStore.getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookes.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies__WEBPACK_IMPORTED_MODULE_0__/* .ResponseCookies */ .n(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookes, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect__WEBPACK_IMPORTED_MODULE_1__/* .ReflectAdapter */ .g.get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map


/***/ }),

/***/ 9558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.ResponseCookies),
/* harmony export */   q: () => (/* reexport safe */ next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__.RequestCookies)
/* harmony export */ });
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9462);
/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__);
 //# sourceMappingURL=cookies.js.map


/***/ }),

/***/ 9605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ NextResponse)
/* harmony export */ });
/* harmony import */ var _next_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2639);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(697);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9558);



const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies__WEBPACK_IMPORTED_MODULE_2__/* .ResponseCookies */ .n(this.headers),
            url: init.url ? new _next_url__WEBPACK_IMPORTED_MODULE_0__/* .NextURL */ .c(init.url, {
                headers: (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toNodeOutgoingHttpHeaders */ .lb)(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .validateURL */ .r4)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .validateURL */ .r4)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map


/***/ }),

/***/ 697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EK: () => (/* binding */ fromNodeOutgoingHttpHeaders),
/* harmony export */   lb: () => (/* binding */ toNodeOutgoingHttpHeaders),
/* harmony export */   r4: () => (/* binding */ validateURL)
/* harmony export */ });
/* unused harmony export splitCookiesString */
/**
 * Converts a Node.js IncomingHttpHeaders object to a Headers object. Any
 * headers with multiple values will be joined with a comma and space. Any
 * headers that have an undefined value will be ignored and others will be
 * coerced to strings.
 *
 * @param nodeHeaders the headers object to convert
 * @returns the converted headers object
 */ function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
/**
 * Converts a Headers object to a Node.js OutgoingHttpHeaders object. This is
 * required to support the set-cookie header, which may have multiple values.
 *
 * @param headers the headers object to convert
 * @returns the converted headers object
 */ function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 4823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ normalizeLocalePath)
/* harmony export */ });
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 62:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ let path;
if (true) {
    path = __webpack_require__(1949);
} else {}
module.exports = path; //# sourceMappingURL=path.js.map


/***/ }),

/***/ 2283:
/***/ ((module) => {

// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ const MODERN_BROWSERSLIST_TARGET = [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map


/***/ }),

/***/ 7274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ removeTrailingSlash)
/* harmony export */ });
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 8724:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    withRequest: function() {
        return withRequest;
    },
    getTestReqInfo: function() {
        return getTestReqInfo;
    }
});
const _nodeasync_hooks = __webpack_require__(2067);
const testStorage = new _nodeasync_hooks.AsyncLocalStorage();
function extractTestInfoFromRequest(req, reader) {
    const proxyPortHeader = reader.header(req, "next-test-proxy-port");
    if (!proxyPortHeader) {
        return undefined;
    }
    const url = reader.url(req);
    const proxyPort = Number(proxyPortHeader);
    const testData = reader.header(req, "next-test-data") || "";
    return {
        url,
        proxyPort,
        testData
    };
}
function withRequest(req, reader, fn) {
    const testReqInfo = extractTestInfoFromRequest(req, reader);
    if (!testReqInfo) {
        return fn();
    }
    return testStorage.run(testReqInfo, fn);
}
function getTestReqInfo(req, reader) {
    const testReqInfo = testStorage.getStore();
    if (testReqInfo) {
        return testReqInfo;
    }
    if (req && reader) {
        return extractTestInfoFromRequest(req, reader);
    }
    return undefined;
} //# sourceMappingURL=context.js.map


/***/ }),

/***/ 7108:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(6195)["Buffer"];

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    reader: function() {
        return reader;
    },
    handleFetch: function() {
        return handleFetch;
    },
    interceptFetch: function() {
        return interceptFetch;
    }
});
const _context = __webpack_require__(8724);
const reader = {
    url (req) {
        return req.url;
    },
    header (req, name) {
        return req.headers.get(name);
    }
};
function getTestStack() {
    let stack = (new Error().stack ?? "").split("\n");
    // Skip the first line and find first non-empty line.
    for(let i = 1; i < stack.length; i++){
        if (stack[i].length > 0) {
            stack = stack.slice(i);
            break;
        }
    }
    // Filter out franmework lines.
    stack = stack.filter((f)=>!f.includes("/next/dist/"));
    // At most 5 lines.
    stack = stack.slice(0, 5);
    // Cleanup some internal info and trim.
    stack = stack.map((s)=>s.replace("webpack-internal:///(rsc)/", "").trim());
    return stack.join("    ");
}
async function buildProxyRequest(testData, request) {
    const { url, method, headers, body, cache, credentials, integrity, mode, redirect, referrer, referrerPolicy } = request;
    return {
        testData,
        api: "fetch",
        request: {
            url,
            method,
            headers: [
                ...Array.from(headers),
                [
                    "next-test-stack",
                    getTestStack()
                ]
            ],
            body: body ? Buffer.from(await request.arrayBuffer()).toString("base64") : null,
            cache,
            credentials,
            integrity,
            mode,
            redirect,
            referrer,
            referrerPolicy
        }
    };
}
function buildResponse(proxyResponse) {
    const { status, headers, body } = proxyResponse.response;
    return new Response(body ? Buffer.from(body, "base64") : null, {
        status,
        headers: new Headers(headers)
    });
}
async function handleFetch(originalFetch, request) {
    const testInfo = (0, _context.getTestReqInfo)(request, reader);
    if (!testInfo) {
        throw new Error(`No test info for ${request.method} ${request.url}`);
    }
    const { testData, proxyPort } = testInfo;
    const proxyRequest = await buildProxyRequest(testData, request);
    const resp = await originalFetch(`http://localhost:${proxyPort}`, {
        method: "POST",
        body: JSON.stringify(proxyRequest),
        next: {
            // @ts-ignore
            internal: true
        }
    });
    if (!resp.ok) {
        throw new Error(`Proxy request failed: ${resp.status}`);
    }
    const proxyResponse = await resp.json();
    const { api } = proxyResponse;
    switch(api){
        case "continue":
            return originalFetch(request);
        case "abort":
        case "unhandled":
            throw new Error(`Proxy request aborted [${request.method} ${request.url}]`);
        default:
            break;
    }
    return buildResponse(proxyResponse);
}
function interceptFetch(originalFetch) {
    __webpack_require__.g.fetch = function testFetch(input, init) {
        var _init_next;
        // Passthrough internal requests.
        // @ts-ignore
        if (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) {
            return originalFetch(input, init);
        }
        return handleFetch(originalFetch, new Request(input, init));
    };
    return ()=>{
        __webpack_require__.g.fetch = originalFetch;
    };
} //# sourceMappingURL=fetch.js.map


/***/ }),

/***/ 3471:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    interceptTestApis: function() {
        return interceptTestApis;
    },
    wrapRequestHandler: function() {
        return wrapRequestHandler;
    }
});
const _context = __webpack_require__(8724);
const _fetch = __webpack_require__(7108);
function interceptTestApis() {
    return (0, _fetch.interceptFetch)(__webpack_require__.g.fetch);
}
function wrapRequestHandler(handler) {
    return (req, fn)=>(0, _context.withRequest)(req, _fetch.reader, ()=>handler(req, fn));
} //# sourceMappingURL=server-edge.js.map


/***/ }),

/***/ 119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $X: () => (/* binding */ DatabaseResponses),
/* harmony export */   C4: () => (/* binding */ AuthErrors),
/* harmony export */   Gl: () => (/* binding */ CommonErrors),
/* harmony export */   MN: () => (/* binding */ validateRequiredFields),
/* harmony export */   jl: () => (/* binding */ createErrorResponse),
/* harmony export */   x_: () => (/* binding */ createSuccessResponse)
/* harmony export */ });
/* unused harmony exports createValidationErrorResponse, createPaginatedResponse, UploadResponses, isValidEmail, isValidUrl, isValidPhone, sanitizeHtml, generateRequestId, logApiActivity, RateLimitTracker */
/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4040);
// Standardized API response utilities

// Success response builder
function createSuccessResponse(data, message, meta) {
    const response = {
        success: true,
        message,
        data,
        meta: {
            timestamp: new Date().toISOString(),
            version: "1.0.0",
            ...meta
        }
    };
    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json(response);
}
// Error response builder
function createErrorResponse(error, code, status = 400, meta) {
    const response = {
        success: false,
        error,
        code,
        meta: {
            timestamp: new Date().toISOString(),
            version: "1.0.0",
            ...meta
        }
    };
    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json(response, {
        status
    });
}
// Validation error response
function createValidationErrorResponse(errors, message = "Validation failed") {
    return createErrorResponse(message, "VALIDATION_ERROR", 400, {
        errors
    });
}
// Authentication error responses
const AuthErrors = {
    MISSING_TOKEN: ()=>createErrorResponse("Authentication token required", "MISSING_TOKEN", 401),
    INVALID_TOKEN: ()=>createErrorResponse("Invalid or expired token", "INVALID_TOKEN", 401),
    INSUFFICIENT_PERMISSIONS: ()=>createErrorResponse("Insufficient permissions", "INSUFFICIENT_PERMISSIONS", 403),
    RATE_LIMITED: (retryAfter)=>{
        const response = createErrorResponse("Too many requests. Please try again later.", "RATE_LIMITED", 429);
        if (retryAfter) {
            response.headers.set("Retry-After", retryAfter.toString());
        }
        return response;
    }
};
// Common error responses
const CommonErrors = {
    NOT_FOUND: (resource = "Resource")=>createErrorResponse(`${resource} not found`, "NOT_FOUND", 404),
    ALREADY_EXISTS: (resource = "Resource")=>createErrorResponse(`${resource} already exists`, "ALREADY_EXISTS", 409),
    SERVER_ERROR: (message = "Internal server error")=>createErrorResponse(message, "SERVER_ERROR", 500),
    BAD_REQUEST: (message = "Bad request")=>createErrorResponse(message, "BAD_REQUEST", 400),
    FORBIDDEN: (message = "Access forbidden")=>createErrorResponse(message, "FORBIDDEN", 403)
};
// Pagination helper
function createPaginatedResponse(data, page, limit, total, message) {
    const totalPages = Math.ceil(total / limit);
    return createSuccessResponse(data, message, {
        pagination: {
            page,
            limit,
            total,
            totalPages
        }
    });
}
// Database operation response helpers
const DatabaseResponses = {
    CREATED: (data, resource = "Resource")=>createSuccessResponse(data, `${resource} created successfully`),
    UPDATED: (data, resource = "Resource")=>createSuccessResponse(data, `${resource} updated successfully`),
    DELETED: (resource = "Resource")=>createSuccessResponse(null, `${resource} deleted successfully`),
    FETCHED: (data, resource = "Resource")=>createSuccessResponse(data, `${resource} fetched successfully`)
};
// File upload response helpers
const UploadResponses = {
    SUCCESS: (fileData)=>createSuccessResponse(fileData, "File uploaded successfully"),
    MULTIPLE_SUCCESS: (files, total)=>createSuccessResponse({
            files,
            uploaded: files.length,
            total
        }, `${files.length}/${total} files uploaded successfully`),
    INVALID_FILE: (reason)=>createErrorResponse(`Invalid file: ${reason}`, "INVALID_FILE", 400),
    FILE_TOO_LARGE: (maxSize)=>createErrorResponse(`File size exceeds maximum limit of ${maxSize}`, "FILE_TOO_LARGE", 400),
    UNSUPPORTED_TYPE: (allowedTypes)=>createErrorResponse(`Unsupported file type. Allowed types: ${allowedTypes.join(", ")}`, "UNSUPPORTED_TYPE", 400)
};
// Request validation helpers
function validateRequiredFields(data, requiredFields) {
    const missingFields = requiredFields.filter((field)=>data[field] === undefined || data[field] === null || data[field] === "");
    return {
        isValid: missingFields.length === 0,
        missingFields
    };
}
// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// URL validation
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch  {
        return false;
    }
}
// Phone validation (Turkish format)
function isValidPhone(phone) {
    const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
}
// Sanitize HTML content
function sanitizeHtml(html) {
    // Basic HTML sanitization - in production, use a proper library like DOMPurify
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "").replace(/on\w+="[^"]*"/gi, "").replace(/javascript:/gi, "");
}
// Generate request ID for tracking
function generateRequestId() {
    return `req_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
}
// Log API request/response for monitoring
function logApiActivity(method, path, statusCode, userId, duration, error) {
    const logData = {
        timestamp: new Date().toISOString(),
        method,
        path,
        statusCode,
        userId,
        duration,
        error
    };
    // In production, send this to your logging service (e.g., Cloudflare Logs, Sentry)
    console.log("API Activity:", JSON.stringify(logData));
}
// Rate limiting helper
class RateLimitTracker {
    static{
        this.requests = new Map();
    }
    static isRateLimited(identifier, maxRequests = 100, windowMs = 60000) {
        const now = Date.now();
        const record = this.requests.get(identifier);
        if (!record || now > record.resetTime) {
            this.requests.set(identifier, {
                count: 1,
                resetTime: now + windowMs
            });
            return false;
        }
        if (record.count >= maxRequests) {
            return true;
        }
        record.count++;
        return false;
    }
    static getRemainingRequests(identifier, maxRequests = 100) {
        const record = this.requests.get(identifier);
        if (!record) return maxRequests;
        return Math.max(0, maxRequests - record.count);
    }
    static cleanup() {
        const now = Date.now();
        const entries = Array.from(this.requests.entries());
        for (const [identifier, record] of entries){
            if (now > record.resetTime) {
                this.requests.delete(identifier);
            }
        }
    }
}
// Cleanup rate limiter periodically
if (typeof setInterval !== "undefined") {
    setInterval(()=>{
        RateLimitTracker.cleanup();
    }, 5 * 60 * 1000) // Every 5 minutes
    ;
}


/***/ }),

/***/ 4110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e8: () => (/* binding */ AuthService),
  pS: () => (/* binding */ RateLimiter)
});

// UNUSED EXPORTS: JWTUtils, PasswordUtils

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/buffer_utils.js
const buffer_utils_encoder = new TextEncoder();
const buffer_utils_decoder = new TextDecoder();
const MAX_INT32 = (/* unused pure expression or super */ null && (2 ** 32));
function buffer_utils_concat(...buffers) {
    const size = buffers.reduce((acc, { length })=>acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers){
        buf.set(buffer, i);
        i += buffer.length;
    }
    return buf;
}
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
}
function buffer_utils_uint64be(value) {
    const high = Math.floor(value / MAX_INT32);
    const low = value % MAX_INT32;
    const buf = new Uint8Array(8);
    writeUInt32BE(buf, high, 0);
    writeUInt32BE(buf, low, 4);
    return buf;
}
function buffer_utils_uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/base64.js
function base64_encodeBase64(input) {
    if (Uint8Array.prototype.toBase64) {
        return input.toBase64();
    }
    const CHUNK_SIZE = 0x8000;
    const arr = [];
    for(let i = 0; i < input.length; i += CHUNK_SIZE){
        arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
    }
    return btoa(arr.join(""));
}
function base64_decodeBase64(encoded) {
    if (Uint8Array.fromBase64) {
        return Uint8Array.fromBase64(encoded);
    }
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++){
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/util/base64url.js


function decode(input) {
    if (Uint8Array.fromBase64) {
        return Uint8Array.fromBase64(typeof input === "string" ? input : buffer_utils_decoder.decode(input), {
            alphabet: "base64url"
        });
    }
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = buffer_utils_decoder.decode(encoded);
    }
    encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
    try {
        return base64_decodeBase64(encoded);
    } catch  {
        throw new TypeError("The input to be decoded is not correctly encoded.");
    }
}
function encode(input) {
    let unencoded = input;
    if (typeof unencoded === "string") {
        unencoded = buffer_utils_encoder.encode(unencoded);
    }
    if (Uint8Array.prototype.toBase64) {
        return unencoded.toBase64({
            alphabet: "base64url",
            omitPadding: true
        });
    }
    return base64_encodeBase64(unencoded).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/util/errors.js
class errors_JOSEError extends Error {
    static{
        this.code = "ERR_JOSE_GENERIC";
    }
    constructor(message, options){
        super(message, options);
        this.code = "ERR_JOSE_GENERIC";
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
class errors_JWTClaimValidationFailed extends errors_JOSEError {
    static{
        this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    }
    constructor(message, payload, claim = "unspecified", reason = "unspecified"){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JWTExpired extends errors_JOSEError {
    static{
        this.code = "ERR_JWT_EXPIRED";
    }
    constructor(message, payload, claim = "unspecified", reason = "unspecified"){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.code = "ERR_JWT_EXPIRED";
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class errors_JOSEAlgNotAllowed extends errors_JOSEError {
    static{
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
    }
    constructor(...args){
        super(...args);
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
    }
}
class errors_JOSENotSupported extends errors_JOSEError {
    static{
        this.code = "ERR_JOSE_NOT_SUPPORTED";
    }
    constructor(...args){
        super(...args);
        this.code = "ERR_JOSE_NOT_SUPPORTED";
    }
}
class errors_JWEDecryptionFailed extends errors_JOSEError {
    static{
        this.code = "ERR_JWE_DECRYPTION_FAILED";
    }
    constructor(message = "decryption operation failed", options){
        super(message, options);
        this.code = "ERR_JWE_DECRYPTION_FAILED";
    }
}
class errors_JWEInvalid extends errors_JOSEError {
    static{
        this.code = "ERR_JWE_INVALID";
    }
    constructor(...args){
        super(...args);
        this.code = "ERR_JWE_INVALID";
    }
}
class errors_JWSInvalid extends errors_JOSEError {
    static{
        this.code = "ERR_JWS_INVALID";
    }
    constructor(...args){
        super(...args);
        this.code = "ERR_JWS_INVALID";
    }
}
class errors_JWTInvalid extends errors_JOSEError {
    static{
        this.code = "ERR_JWT_INVALID";
    }
    constructor(...args){
        super(...args);
        this.code = "ERR_JWT_INVALID";
    }
}
class errors_JWKInvalid extends errors_JOSEError {
    static{
        this.code = "ERR_JWK_INVALID";
    }
    constructor(...args){
        super(...args);
        this.code = "ERR_JWK_INVALID";
    }
}
class errors_JWKSInvalid extends errors_JOSEError {
    static{
        this.code = "ERR_JWKS_INVALID";
    }
    constructor(...args){
        super(...args);
        this.code = "ERR_JWKS_INVALID";
    }
}
class errors_JWKSNoMatchingKey extends errors_JOSEError {
    static{
        this.code = "ERR_JWKS_NO_MATCHING_KEY";
    }
    constructor(message = "no applicable key found in the JSON Web Key Set", options){
        super(message, options);
        this.code = "ERR_JWKS_NO_MATCHING_KEY";
    }
}
let prop;
class errors_JWKSMultipleMatchingKeys extends errors_JOSEError {
    static{
        prop = Symbol.asyncIterator;
    }
    static{
        this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    }
    constructor(message = "multiple matching keys found in the JSON Web Key Set", options){
        super(message, options);
        this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    }
}
class errors_JWKSTimeout extends errors_JOSEError {
    static{
        this.code = "ERR_JWKS_TIMEOUT";
    }
    constructor(message = "request timed out", options){
        super(message, options);
        this.code = "ERR_JWKS_TIMEOUT";
    }
}
class errors_JWSSignatureVerificationFailed extends errors_JOSEError {
    static{
        this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    }
    constructor(message = "signature verification failed", options){
        super(message, options);
        this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/iv.js

function iv_bitLength(alg) {
    switch(alg){
        case "A128GCM":
        case "A128GCMKW":
        case "A192GCM":
        case "A192GCMKW":
        case "A256GCM":
        case "A256GCMKW":
            return 96;
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
            return 128;
        default:
            throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
    }
}
/* harmony default export */ const iv = ((alg)=>crypto.getRandomValues(new Uint8Array(iv_bitLength(alg) >> 3)));

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/check_iv_length.js


/* harmony default export */ const check_iv_length = ((enc, iv)=>{
    if (iv.length << 3 !== bitLength(enc)) {
        throw new JWEInvalid("Invalid Initialization Vector length");
    }
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/check_cek_length.js

/* harmony default export */ const check_cek_length = ((cek, expected)=>{
    const actual = cek.byteLength << 3;
    if (actual !== expected) {
        throw new JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
    }
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
}
function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
    switch(alg){
        case "ES256":
            return "P-256";
        case "ES384":
            return "P-384";
        case "ES512":
            return "P-521";
        default:
            throw new Error("unreachable");
    }
}
function checkUsage(key, usage) {
    if (usage && !key.usages.includes(usage)) {
        throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
    }
}
function checkSigCryptoKey(key, alg, usage) {
    switch(alg){
        case "HS256":
        case "HS384":
        case "HS512":
            {
                if (!isAlgorithm(key.algorithm, "HMAC")) throw unusable("HMAC");
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, "algorithm.hash");
                break;
            }
        case "RS256":
        case "RS384":
        case "RS512":
            {
                if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5")) throw unusable("RSASSA-PKCS1-v1_5");
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, "algorithm.hash");
                break;
            }
        case "PS256":
        case "PS384":
        case "PS512":
            {
                if (!isAlgorithm(key.algorithm, "RSA-PSS")) throw unusable("RSA-PSS");
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, "algorithm.hash");
                break;
            }
        case "Ed25519":
        case "EdDSA":
            {
                if (!isAlgorithm(key.algorithm, "Ed25519")) throw unusable("Ed25519");
                break;
            }
        case "ES256":
        case "ES384":
        case "ES512":
            {
                if (!isAlgorithm(key.algorithm, "ECDSA")) throw unusable("ECDSA");
                const expected = getNamedCurve(alg);
                const actual = key.algorithm.namedCurve;
                if (actual !== expected) throw unusable(expected, "algorithm.namedCurve");
                break;
            }
        default:
            throw new TypeError("CryptoKey does not support this operation");
    }
    checkUsage(key, usage);
}
function crypto_key_checkEncCryptoKey(key, alg, usage) {
    switch(alg){
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            {
                if (!isAlgorithm(key.algorithm, "AES-GCM")) throw unusable("AES-GCM");
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, "algorithm.length");
                break;
            }
        case "A128KW":
        case "A192KW":
        case "A256KW":
            {
                if (!isAlgorithm(key.algorithm, "AES-KW")) throw unusable("AES-KW");
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, "algorithm.length");
                break;
            }
        case "ECDH":
            {
                switch(key.algorithm.name){
                    case "ECDH":
                    case "X25519":
                        break;
                    default:
                        throw unusable("ECDH or X25519");
                }
                break;
            }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
            if (!isAlgorithm(key.algorithm, "PBKDF2")) throw unusable("PBKDF2");
            break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            {
                if (!isAlgorithm(key.algorithm, "RSA-OAEP")) throw unusable("RSA-OAEP");
                const expected = parseInt(alg.slice(9), 10) || 1;
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, "algorithm.hash");
                break;
            }
        default:
            throw new TypeError("CryptoKey does not support this operation");
    }
    checkUsage(key, usage);
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/invalid_key_input.js
function message(msg, actual, ...types) {
    types = types.filter(Boolean);
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(", ")}, or ${last}.`;
    } else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    } else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    } else if (typeof actual === "function" && actual.name) {
        msg += ` Received function ${actual.name}`;
    } else if (typeof actual === "object" && actual != null) {
        if (actual.constructor?.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
}
/* harmony default export */ const invalid_key_input = ((actual, ...types)=>{
    return message("Key must be ", actual, ...types);
});
function withAlg(alg, actual, ...types) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/is_key_like.js
function is_key_like_assertCryptoKey(key) {
    if (!is_key_like_isCryptoKey(key)) {
        throw new Error("CryptoKey instance expected");
    }
}
function is_key_like_isCryptoKey(key) {
    return key?.[Symbol.toStringTag] === "CryptoKey";
}
function is_key_like_isKeyObject(key) {
    return key?.[Symbol.toStringTag] === "KeyObject";
}
/* harmony default export */ const is_key_like = ((key)=>{
    return is_key_like_isCryptoKey(key) || is_key_like_isKeyObject(key);
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/decrypt.js







async function timingSafeEqual(a, b) {
    if (!(a instanceof Uint8Array)) {
        throw new TypeError("First argument must be a buffer");
    }
    if (!(b instanceof Uint8Array)) {
        throw new TypeError("Second argument must be a buffer");
    }
    const algorithm = {
        name: "HMAC",
        hash: "SHA-256"
    };
    const key = await crypto.subtle.generateKey(algorithm, false, [
        "sign"
    ]);
    const aHmac = new Uint8Array(await crypto.subtle.sign(algorithm, key, a));
    const bHmac = new Uint8Array(await crypto.subtle.sign(algorithm, key, b));
    let out = 0;
    let i = -1;
    while(++i < 32){
        out |= aHmac[i] ^ bHmac[i];
    }
    return out === 0;
}
async function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
    if (!(cek instanceof Uint8Array)) {
        throw new TypeError(invalidKeyInput(cek, "Uint8Array"));
    }
    const keySize = parseInt(enc.slice(1, 4), 10);
    const encKey = await crypto.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, [
        "decrypt"
    ]);
    const macKey = await crypto.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
        hash: `SHA-${keySize << 1}`,
        name: "HMAC"
    }, false, [
        "sign"
    ]);
    const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
    const expectedTag = new Uint8Array((await crypto.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
    let macCheckPassed;
    try {
        macCheckPassed = await timingSafeEqual(tag, expectedTag);
    } catch  {}
    if (!macCheckPassed) {
        throw new JWEDecryptionFailed();
    }
    let plaintext;
    try {
        plaintext = new Uint8Array(await crypto.subtle.decrypt({
            iv,
            name: "AES-CBC"
        }, encKey, ciphertext));
    } catch  {}
    if (!plaintext) {
        throw new JWEDecryptionFailed();
    }
    return plaintext;
}
async function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
    let encKey;
    if (cek instanceof Uint8Array) {
        encKey = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, [
            "decrypt"
        ]);
    } else {
        checkEncCryptoKey(cek, enc, "decrypt");
        encKey = cek;
    }
    try {
        return new Uint8Array(await crypto.subtle.decrypt({
            additionalData: aad,
            iv,
            name: "AES-GCM",
            tagLength: 128
        }, encKey, concat(ciphertext, tag)));
    } catch  {
        throw new JWEDecryptionFailed();
    }
}
/* harmony default export */ const lib_decrypt = (async (enc, cek, ciphertext, iv, tag, aad)=>{
    if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalidKeyInput(cek, "CryptoKey", "KeyObject", "Uint8Array", "JSON Web Key"));
    }
    if (!iv) {
        throw new JWEInvalid("JWE Initialization Vector missing");
    }
    if (!tag) {
        throw new JWEInvalid("JWE Authentication Tag missing");
    }
    checkIvLength(enc, iv);
    switch(enc){
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
            if (cek instanceof Uint8Array) checkCekLength(cek, parseInt(enc.slice(-3), 10));
            return cbcDecrypt(enc, cek, ciphertext, iv, tag, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            if (cek instanceof Uint8Array) checkCekLength(cek, parseInt(enc.slice(1, 4), 10));
            return gcmDecrypt(enc, cek, ciphertext, iv, tag, aad);
        default:
            throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
    }
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/is_disjoint.js
/* harmony default export */ const is_disjoint = ((...headers)=>{
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources){
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters){
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/is_object.js
function isObjectLike(value) {
    return typeof value === "object" && value !== null;
}
/* harmony default export */ const is_object = ((input)=>{
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
        return false;
    }
    if (Object.getPrototypeOf(input) === null) {
        return true;
    }
    let proto = input;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/aeskw.js

function checkKeySize(key, alg) {
    if (key.algorithm.length !== parseInt(alg.slice(1, 4), 10)) {
        throw new TypeError(`Invalid key size for alg: ${alg}`);
    }
}
function getCryptoKey(key, alg, usage) {
    if (key instanceof Uint8Array) {
        return crypto.subtle.importKey("raw", key, "AES-KW", true, [
            usage
        ]);
    }
    checkEncCryptoKey(key, alg, usage);
    return key;
}
async function wrap(alg, key, cek) {
    const cryptoKey = await getCryptoKey(key, alg, "wrapKey");
    checkKeySize(cryptoKey, alg);
    const cryptoKeyCek = await crypto.subtle.importKey("raw", cek, {
        hash: "SHA-256",
        name: "HMAC"
    }, true, [
        "sign"
    ]);
    return new Uint8Array(await crypto.subtle.wrapKey("raw", cryptoKeyCek, cryptoKey, "AES-KW"));
}
async function unwrap(alg, key, encryptedKey) {
    const cryptoKey = await getCryptoKey(key, alg, "unwrapKey");
    checkKeySize(cryptoKey, alg);
    const cryptoKeyCek = await crypto.subtle.unwrapKey("raw", encryptedKey, cryptoKey, "AES-KW", {
        hash: "SHA-256",
        name: "HMAC"
    }, true, [
        "sign"
    ]);
    return new Uint8Array(await crypto.subtle.exportKey("raw", cryptoKeyCek));
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/digest.js
/* harmony default export */ const lib_digest = (async (algorithm, data)=>{
    const subtleDigest = `SHA-${algorithm.slice(-3)}`;
    return new Uint8Array(await crypto.subtle.digest(subtleDigest, data));
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/ecdhes.js



function lengthAndInput(input) {
    return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
    const iterations = Math.ceil((bits >> 3) / 32);
    const res = new Uint8Array(iterations * 32);
    for(let iter = 0; iter < iterations; iter++){
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set(uint32be(iter + 1));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        res.set(await digest("sha256", buf), iter * 32);
    }
    return res.slice(0, bits >> 3);
}
async function deriveKey(publicKey, privateKey, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
    checkEncCryptoKey(publicKey, "ECDH");
    checkEncCryptoKey(privateKey, "ECDH", "deriveBits");
    const value = concat(lengthAndInput(encoder.encode(algorithm)), lengthAndInput(apu), lengthAndInput(apv), uint32be(keyLength));
    let length;
    if (publicKey.algorithm.name === "X25519") {
        length = 256;
    } else {
        length = Math.ceil(parseInt(publicKey.algorithm.namedCurve.slice(-3), 10) / 8) << 3;
    }
    const sharedSecret = new Uint8Array(await crypto.subtle.deriveBits({
        name: publicKey.algorithm.name,
        public: publicKey
    }, privateKey, length));
    return concatKdf(sharedSecret, keyLength, value);
}
function allowed(key) {
    switch(key.algorithm.namedCurve){
        case "P-256":
        case "P-384":
        case "P-521":
            return true;
        default:
            return key.algorithm.name === "X25519";
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/pbes2kw.js





function pbes2kw_getCryptoKey(key, alg) {
    if (key instanceof Uint8Array) {
        return crypto.subtle.importKey("raw", key, "PBKDF2", false, [
            "deriveBits"
        ]);
    }
    checkEncCryptoKey(key, alg, "deriveBits");
    return key;
}
const concatSalt = (alg, p2sInput)=>concat(encoder.encode(alg), new Uint8Array([
        0
    ]), p2sInput);
async function pbes2kw_deriveKey(p2s, alg, p2c, key) {
    if (!(p2s instanceof Uint8Array) || p2s.length < 8) {
        throw new JWEInvalid("PBES2 Salt Input must be 8 or more octets");
    }
    const salt = concatSalt(alg, p2s);
    const keylen = parseInt(alg.slice(13, 16), 10);
    const subtleAlg = {
        hash: `SHA-${alg.slice(8, 11)}`,
        iterations: p2c,
        name: "PBKDF2",
        salt
    };
    const cryptoKey = await pbes2kw_getCryptoKey(key, alg);
    return new Uint8Array(await crypto.subtle.deriveBits(subtleAlg, cryptoKey, keylen));
}
async function pbes2kw_wrap(alg, key, cek, p2c = 2048, p2s = crypto.getRandomValues(new Uint8Array(16))) {
    const derived = await pbes2kw_deriveKey(p2s, alg, p2c, key);
    const encryptedKey = await aeskw.wrap(alg.slice(-6), derived, cek);
    return {
        encryptedKey,
        p2c,
        p2s: b64u(p2s)
    };
}
async function pbes2kw_unwrap(alg, key, encryptedKey, p2c, p2s) {
    const derived = await pbes2kw_deriveKey(p2s, alg, p2c, key);
    return aeskw.unwrap(alg.slice(-6), derived, encryptedKey);
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/check_key_length.js
/* harmony default export */ const check_key_length = ((alg, key)=>{
    if (alg.startsWith("RS") || alg.startsWith("PS")) {
        const { modulusLength } = key.algorithm;
        if (typeof modulusLength !== "number" || modulusLength < 2048) {
            throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
        }
    }
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/rsaes.js



const subtleAlgorithm = (alg)=>{
    switch(alg){
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            return "RSA-OAEP";
        default:
            throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
};
async function rsaes_encrypt(alg, key, cek) {
    checkEncCryptoKey(key, alg, "encrypt");
    checkKeyLength(alg, key);
    return new Uint8Array(await crypto.subtle.encrypt(subtleAlgorithm(alg), key, cek));
}
async function rsaes_decrypt(alg, key, encryptedKey) {
    checkEncCryptoKey(key, alg, "decrypt");
    checkKeyLength(alg, key);
    return new Uint8Array(await crypto.subtle.decrypt(subtleAlgorithm(alg), key, encryptedKey));
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/cek.js

function cek_bitLength(alg) {
    switch(alg){
        case "A128GCM":
            return 128;
        case "A192GCM":
            return 192;
        case "A256GCM":
        case "A128CBC-HS256":
            return 256;
        case "A192CBC-HS384":
            return 384;
        case "A256CBC-HS512":
            return 512;
        default:
            throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
    }
}
/* harmony default export */ const cek = ((alg)=>crypto.getRandomValues(new Uint8Array(cek_bitLength(alg) >> 3)));

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/asn1.js




const formatPEM = (b64, descriptor)=>{
    const newlined = (b64.match(/.{1,64}/g) || []).join("\n");
    return `-----BEGIN ${descriptor}-----\n${newlined}\n-----END ${descriptor}-----`;
};
const genericExport = async (keyType, keyFormat, key)=>{
    if (isKeyObject(key)) {
        if (key.type !== keyType) {
            throw new TypeError(`key is not a ${keyType} key`);
        }
        return key.export({
            format: "pem",
            type: keyFormat
        });
    }
    if (!isCryptoKey(key)) {
        throw new TypeError(invalidKeyInput(key, "CryptoKey", "KeyObject"));
    }
    if (!key.extractable) {
        throw new TypeError("CryptoKey is not extractable");
    }
    if (key.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
    }
    return formatPEM(encodeBase64(new Uint8Array(await crypto.subtle.exportKey(keyFormat, key))), `${keyType.toUpperCase()} KEY`);
};
const toSPKI = (key)=>{
    return genericExport("public", "spki", key);
};
const toPKCS8 = (key)=>{
    return genericExport("private", "pkcs8", key);
};
const asn1_getNamedCurve = (keyData)=>{
    const patterns = Object.entries({
        "P-256": [
            0x06,
            0x08,
            0x2a,
            0x86,
            0x48,
            0xce,
            0x3d,
            0x03,
            0x01,
            0x07
        ],
        "P-384": [
            0x06,
            0x05,
            0x2b,
            0x81,
            0x04,
            0x00,
            0x22
        ],
        "P-521": [
            0x06,
            0x05,
            0x2b,
            0x81,
            0x04,
            0x00,
            0x23
        ]
    });
    const maxPatternLen = Math.max(...patterns.map(([, bytes])=>bytes.length));
    for(let i = 0; i <= keyData.byteLength - maxPatternLen; i++){
        for (const [curve, bytes] of patterns){
            if (i <= keyData.byteLength - bytes.length) {
                if (keyData.subarray(i, i + bytes.length).every((byte, idx)=>byte === bytes[idx])) {
                    return curve;
                }
            }
        }
    }
    return undefined;
};
const genericImport = async (keyFormat, keyData, alg, options)=>{
    let algorithm;
    let keyUsages;
    const isPublic = keyFormat === "spki";
    const getSignatureUsages = ()=>isPublic ? [
            "verify"
        ] : [
            "sign"
        ];
    const getEncryptionUsages = ()=>isPublic ? [
            "encrypt",
            "wrapKey"
        ] : [
            "decrypt",
            "unwrapKey"
        ];
    switch(alg){
        case "PS256":
        case "PS384":
        case "PS512":
            algorithm = {
                name: "RSA-PSS",
                hash: `SHA-${alg.slice(-3)}`
            };
            keyUsages = getSignatureUsages();
            break;
        case "RS256":
        case "RS384":
        case "RS512":
            algorithm = {
                name: "RSASSA-PKCS1-v1_5",
                hash: `SHA-${alg.slice(-3)}`
            };
            keyUsages = getSignatureUsages();
            break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            algorithm = {
                name: "RSA-OAEP",
                hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`
            };
            keyUsages = getEncryptionUsages();
            break;
        case "ES256":
        case "ES384":
        case "ES512":
            {
                const curveMap = {
                    ES256: "P-256",
                    ES384: "P-384",
                    ES512: "P-521"
                };
                algorithm = {
                    name: "ECDSA",
                    namedCurve: curveMap[alg]
                };
                keyUsages = getSignatureUsages();
                break;
            }
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
            {
                const namedCurve = asn1_getNamedCurve(keyData);
                algorithm = namedCurve ? {
                    name: "ECDH",
                    namedCurve
                } : {
                    name: "X25519"
                };
                keyUsages = isPublic ? [] : [
                    "deriveBits"
                ];
                break;
            }
        case "Ed25519":
        case "EdDSA":
            algorithm = {
                name: "Ed25519"
            };
            keyUsages = getSignatureUsages();
            break;
        default:
            throw new JOSENotSupported('Invalid or unsupported "alg" (Algorithm) value');
    }
    return crypto.subtle.importKey(keyFormat, keyData, algorithm, options?.extractable ?? (isPublic ? true : false), keyUsages);
};
const asn1_fromPKCS8 = (pem, alg, options)=>{
    const keyData = decodeBase64(pem.replace(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, ""));
    return genericImport("pkcs8", keyData, alg, options);
};
const asn1_fromSPKI = (pem, alg, options)=>{
    const keyData = decodeBase64(pem.replace(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, ""));
    return genericImport("spki", keyData, alg, options);
};
function spkiFromX509(buf) {
    let pos = 0;
    const parseLength = ()=>{
        const first = buf[pos++];
        if (first & 0x80) {
            const lengthOfLength = first & 0x7f;
            let length = 0;
            for(let i = 0; i < lengthOfLength; i++){
                length = length << 8 | buf[pos++];
            }
            return length;
        }
        return first;
    };
    const skipElement = (count = 1)=>{
        if (count <= 0) return;
        pos++;
        const length = parseLength();
        pos += length;
        if (count > 1) {
            skipElement(count - 1);
        }
    };
    if (buf[pos++] !== 0x30) throw new Error("Invalid certificate structure");
    parseLength();
    if (buf[pos++] !== 0x30) throw new Error("Invalid tbsCertificate structure");
    parseLength();
    if (buf[pos] === 0xa0) {
        skipElement(6);
    } else {
        skipElement(5);
    }
    const spkiStart = pos;
    if (buf[pos++] !== 0x30) throw new Error("Invalid SPKI structure");
    const spkiContentLength = parseLength();
    return buf.subarray(spkiStart, spkiStart + spkiContentLength + (pos - spkiStart));
}
function extractX509SPKI(x509) {
    const base64Content = x509.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, "");
    const derBytes = decodeBase64(base64Content);
    return spkiFromX509(derBytes);
}
const asn1_fromX509 = (pem, alg, options)=>{
    let spki;
    try {
        spki = extractX509SPKI(pem);
    } catch (cause) {
        throw new TypeError("Failed to parse the X.509 certificate", {
            cause
        });
    }
    return genericImport("spki", spki, alg, options);
};

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/jwk_to_key.js

function subtleMapping(jwk) {
    let algorithm;
    let keyUsages;
    switch(jwk.kty){
        case "RSA":
            {
                switch(jwk.alg){
                    case "PS256":
                    case "PS384":
                    case "PS512":
                        algorithm = {
                            name: "RSA-PSS",
                            hash: `SHA-${jwk.alg.slice(-3)}`
                        };
                        keyUsages = jwk.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "RS256":
                    case "RS384":
                    case "RS512":
                        algorithm = {
                            name: "RSASSA-PKCS1-v1_5",
                            hash: `SHA-${jwk.alg.slice(-3)}`
                        };
                        keyUsages = jwk.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        algorithm = {
                            name: "RSA-OAEP",
                            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
                        };
                        keyUsages = jwk.d ? [
                            "decrypt",
                            "unwrapKey"
                        ] : [
                            "encrypt",
                            "wrapKey"
                        ];
                        break;
                    default:
                        throw new errors_JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case "EC":
            {
                switch(jwk.alg){
                    case "ES256":
                        algorithm = {
                            name: "ECDSA",
                            namedCurve: "P-256"
                        };
                        keyUsages = jwk.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ES384":
                        algorithm = {
                            name: "ECDSA",
                            namedCurve: "P-384"
                        };
                        keyUsages = jwk.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ES512":
                        algorithm = {
                            name: "ECDSA",
                            namedCurve: "P-521"
                        };
                        keyUsages = jwk.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        algorithm = {
                            name: "ECDH",
                            namedCurve: jwk.crv
                        };
                        keyUsages = jwk.d ? [
                            "deriveBits"
                        ] : [];
                        break;
                    default:
                        throw new errors_JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case "OKP":
            {
                switch(jwk.alg){
                    case "Ed25519":
                    case "EdDSA":
                        algorithm = {
                            name: "Ed25519"
                        };
                        keyUsages = jwk.d ? [
                            "sign"
                        ] : [
                            "verify"
                        ];
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        algorithm = {
                            name: jwk.crv
                        };
                        keyUsages = jwk.d ? [
                            "deriveBits"
                        ] : [];
                        break;
                    default:
                        throw new errors_JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        default:
            throw new errors_JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return {
        algorithm,
        keyUsages
    };
}
/* harmony default export */ const jwk_to_key = (async (jwk)=>{
    if (!jwk.alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
    }
    const { algorithm, keyUsages } = subtleMapping(jwk);
    const keyData = {
        ...jwk
    };
    delete keyData.alg;
    delete keyData.use;
    return crypto.subtle.importKey("jwk", keyData, algorithm, jwk.ext ?? (jwk.d ? false : true), jwk.key_ops ?? keyUsages);
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/key/import.js





async function importSPKI(spki, alg, options) {
    if (typeof spki !== "string" || spki.indexOf("-----BEGIN PUBLIC KEY-----") !== 0) {
        throw new TypeError('"spki" must be SPKI formatted string');
    }
    return fromSPKI(spki, alg, options);
}
async function importX509(x509, alg, options) {
    if (typeof x509 !== "string" || x509.indexOf("-----BEGIN CERTIFICATE-----") !== 0) {
        throw new TypeError('"x509" must be X.509 formatted string');
    }
    return fromX509(x509, alg, options);
}
async function importPKCS8(pkcs8, alg, options) {
    if (typeof pkcs8 !== "string" || pkcs8.indexOf("-----BEGIN PRIVATE KEY-----") !== 0) {
        throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
    }
    return fromPKCS8(pkcs8, alg, options);
}
async function import_importJWK(jwk, alg, options) {
    if (!isObject(jwk)) {
        throw new TypeError("JWK must be an object");
    }
    let ext;
    alg ??= jwk.alg;
    ext ??= options?.extractable ?? jwk.ext;
    switch(jwk.kty){
        case "oct":
            if (typeof jwk.k !== "string" || !jwk.k) {
                throw new TypeError('missing "k" (Key Value) Parameter value');
            }
            return decodeBase64URL(jwk.k);
        case "RSA":
            if ("oth" in jwk && jwk.oth !== undefined) {
                throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
        case "EC":
        case "OKP":
            return toCryptoKey({
                ...jwk,
                alg,
                ext
            });
        default:
            throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/encrypt.js








async function cbcEncrypt(enc, plaintext, cek, iv, aad) {
    if (!(cek instanceof Uint8Array)) {
        throw new TypeError(invalidKeyInput(cek, "Uint8Array"));
    }
    const keySize = parseInt(enc.slice(1, 4), 10);
    const encKey = await crypto.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, [
        "encrypt"
    ]);
    const macKey = await crypto.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
        hash: `SHA-${keySize << 1}`,
        name: "HMAC"
    }, false, [
        "sign"
    ]);
    const ciphertext = new Uint8Array(await crypto.subtle.encrypt({
        iv,
        name: "AES-CBC"
    }, encKey, plaintext));
    const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
    const tag = new Uint8Array((await crypto.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
    return {
        ciphertext,
        tag,
        iv
    };
}
async function gcmEncrypt(enc, plaintext, cek, iv, aad) {
    let encKey;
    if (cek instanceof Uint8Array) {
        encKey = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, [
            "encrypt"
        ]);
    } else {
        checkEncCryptoKey(cek, enc, "encrypt");
        encKey = cek;
    }
    const encrypted = new Uint8Array(await crypto.subtle.encrypt({
        additionalData: aad,
        iv,
        name: "AES-GCM",
        tagLength: 128
    }, encKey, plaintext));
    const tag = encrypted.slice(-16);
    const ciphertext = encrypted.slice(0, -16);
    return {
        ciphertext,
        tag,
        iv
    };
}
/* harmony default export */ const lib_encrypt = (async (enc, plaintext, cek, iv, aad)=>{
    if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalidKeyInput(cek, "CryptoKey", "KeyObject", "Uint8Array", "JSON Web Key"));
    }
    if (iv) {
        checkIvLength(enc, iv);
    } else {
        iv = generateIv(enc);
    }
    switch(enc){
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
            if (cek instanceof Uint8Array) {
                checkCekLength(cek, parseInt(enc.slice(-3), 10));
            }
            return cbcEncrypt(enc, plaintext, cek, iv, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            if (cek instanceof Uint8Array) {
                checkCekLength(cek, parseInt(enc.slice(1, 4), 10));
            }
            return gcmEncrypt(enc, plaintext, cek, iv, aad);
        default:
            throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
    }
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/aesgcmkw.js



async function aesgcmkw_wrap(alg, key, cek, iv) {
    const jweAlgorithm = alg.slice(0, 7);
    const wrapped = await encrypt(jweAlgorithm, cek, key, iv, new Uint8Array(0));
    return {
        encryptedKey: wrapped.ciphertext,
        iv: b64u(wrapped.iv),
        tag: b64u(wrapped.tag)
    };
}
async function aesgcmkw_unwrap(alg, key, encryptedKey, iv, tag) {
    const jweAlgorithm = alg.slice(0, 7);
    return decrypt(jweAlgorithm, key, encryptedKey, iv, tag, new Uint8Array(0));
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/decrypt_key_management.js











/* harmony default export */ const decrypt_key_management = (async (alg, key, encryptedKey, joseHeader, options)=>{
    switch(alg){
        case "dir":
            {
                if (encryptedKey !== undefined) throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
                return key;
            }
        case "ECDH-ES":
            if (encryptedKey !== undefined) throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
            {
                if (!isObject(joseHeader.epk)) throw new JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
                assertCryptoKey(key);
                if (!ecdhes.allowed(key)) throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                const epk = await importJWK(joseHeader.epk, alg);
                assertCryptoKey(epk);
                let partyUInfo;
                let partyVInfo;
                if (joseHeader.apu !== undefined) {
                    if (typeof joseHeader.apu !== "string") throw new JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
                    try {
                        partyUInfo = b64u(joseHeader.apu);
                    } catch  {
                        throw new JWEInvalid("Failed to base64url decode the apu");
                    }
                }
                if (joseHeader.apv !== undefined) {
                    if (typeof joseHeader.apv !== "string") throw new JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
                    try {
                        partyVInfo = b64u(joseHeader.apv);
                    } catch  {
                        throw new JWEInvalid("Failed to base64url decode the apv");
                    }
                }
                const sharedSecret = await ecdhes.deriveKey(epk, key, alg === "ECDH-ES" ? joseHeader.enc : alg, alg === "ECDH-ES" ? cekLength(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
                if (alg === "ECDH-ES") return sharedSecret;
                if (encryptedKey === undefined) throw new JWEInvalid("JWE Encrypted Key missing");
                return aeskw.unwrap(alg.slice(-6), sharedSecret, encryptedKey);
            }
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            {
                if (encryptedKey === undefined) throw new JWEInvalid("JWE Encrypted Key missing");
                assertCryptoKey(key);
                return rsaes.decrypt(alg, key, encryptedKey);
            }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
            {
                if (encryptedKey === undefined) throw new JWEInvalid("JWE Encrypted Key missing");
                if (typeof joseHeader.p2c !== "number") throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
                const p2cLimit = options?.maxPBES2Count || 10000;
                if (joseHeader.p2c > p2cLimit) throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
                if (typeof joseHeader.p2s !== "string") throw new JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
                let p2s;
                try {
                    p2s = b64u(joseHeader.p2s);
                } catch  {
                    throw new JWEInvalid("Failed to base64url decode the p2s");
                }
                return pbes2kw.unwrap(alg, key, encryptedKey, joseHeader.p2c, p2s);
            }
        case "A128KW":
        case "A192KW":
        case "A256KW":
            {
                if (encryptedKey === undefined) throw new JWEInvalid("JWE Encrypted Key missing");
                return aeskw.unwrap(alg, key, encryptedKey);
            }
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
            {
                if (encryptedKey === undefined) throw new JWEInvalid("JWE Encrypted Key missing");
                if (typeof joseHeader.iv !== "string") throw new JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
                if (typeof joseHeader.tag !== "string") throw new JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
                let iv;
                try {
                    iv = b64u(joseHeader.iv);
                } catch  {
                    throw new JWEInvalid("Failed to base64url decode the iv");
                }
                let tag;
                try {
                    tag = b64u(joseHeader.tag);
                } catch  {
                    throw new JWEInvalid("Failed to base64url decode the tag");
                }
                return aesGcmKw(alg, key, encryptedKey, iv, tag);
            }
        default:
            {
                throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
            }
    }
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/validate_crit.js

/* harmony default export */ const validate_crit = ((Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader)=>{
    if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input)=>typeof input !== "string" || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([
            ...Object.entries(recognizedOption),
            ...recognizedDefault.entries()
        ]);
    } else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit){
        if (!recognized.has(parameter)) {
            throw new errors_JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/validate_algorithms.js
/* harmony default export */ const validate_algorithms = ((option, algorithms)=>{
    if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s)=>typeof s !== "string"))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/is_jwk.js

function is_jwk_isJWK(key) {
    return is_object(key) && typeof key.kty === "string";
}
function isPrivateJWK(key) {
    return key.kty !== "oct" && typeof key.d === "string";
}
function isPublicJWK(key) {
    return key.kty !== "oct" && typeof key.d === "undefined";
}
function isSecretJWK(key) {
    return key.kty === "oct" && typeof key.k === "string";
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/normalize_key.js




let cache;
const handleJWK = async (key, jwk, alg, freeze = false)=>{
    cache ||= new WeakMap();
    let cached = cache.get(key);
    if (cached?.[alg]) {
        return cached[alg];
    }
    const cryptoKey = await jwk_to_key({
        ...jwk,
        alg
    });
    if (freeze) Object.freeze(key);
    if (!cached) {
        cache.set(key, {
            [alg]: cryptoKey
        });
    } else {
        cached[alg] = cryptoKey;
    }
    return cryptoKey;
};
const handleKeyObject = (keyObject, alg)=>{
    cache ||= new WeakMap();
    let cached = cache.get(keyObject);
    if (cached?.[alg]) {
        return cached[alg];
    }
    const isPublic = keyObject.type === "public";
    const extractable = isPublic ? true : false;
    let cryptoKey;
    if (keyObject.asymmetricKeyType === "x25519") {
        switch(alg){
            case "ECDH-ES":
            case "ECDH-ES+A128KW":
            case "ECDH-ES+A192KW":
            case "ECDH-ES+A256KW":
                break;
            default:
                throw new TypeError("given KeyObject instance cannot be used for this algorithm");
        }
        cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, isPublic ? [] : [
            "deriveBits"
        ]);
    }
    if (keyObject.asymmetricKeyType === "ed25519") {
        if (alg !== "EdDSA" && alg !== "Ed25519") {
            throw new TypeError("given KeyObject instance cannot be used for this algorithm");
        }
        cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
            isPublic ? "verify" : "sign"
        ]);
    }
    if (keyObject.asymmetricKeyType === "rsa") {
        let hash;
        switch(alg){
            case "RSA-OAEP":
                hash = "SHA-1";
                break;
            case "RS256":
            case "PS256":
            case "RSA-OAEP-256":
                hash = "SHA-256";
                break;
            case "RS384":
            case "PS384":
            case "RSA-OAEP-384":
                hash = "SHA-384";
                break;
            case "RS512":
            case "PS512":
            case "RSA-OAEP-512":
                hash = "SHA-512";
                break;
            default:
                throw new TypeError("given KeyObject instance cannot be used for this algorithm");
        }
        if (alg.startsWith("RSA-OAEP")) {
            return keyObject.toCryptoKey({
                name: "RSA-OAEP",
                hash
            }, extractable, isPublic ? [
                "encrypt"
            ] : [
                "decrypt"
            ]);
        }
        cryptoKey = keyObject.toCryptoKey({
            name: alg.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
            hash
        }, extractable, [
            isPublic ? "verify" : "sign"
        ]);
    }
    if (keyObject.asymmetricKeyType === "ec") {
        const nist = new Map([
            [
                "prime256v1",
                "P-256"
            ],
            [
                "secp384r1",
                "P-384"
            ],
            [
                "secp521r1",
                "P-521"
            ]
        ]);
        const namedCurve = nist.get(keyObject.asymmetricKeyDetails?.namedCurve);
        if (!namedCurve) {
            throw new TypeError("given KeyObject instance cannot be used for this algorithm");
        }
        if (alg === "ES256" && namedCurve === "P-256") {
            cryptoKey = keyObject.toCryptoKey({
                name: "ECDSA",
                namedCurve
            }, extractable, [
                isPublic ? "verify" : "sign"
            ]);
        }
        if (alg === "ES384" && namedCurve === "P-384") {
            cryptoKey = keyObject.toCryptoKey({
                name: "ECDSA",
                namedCurve
            }, extractable, [
                isPublic ? "verify" : "sign"
            ]);
        }
        if (alg === "ES512" && namedCurve === "P-521") {
            cryptoKey = keyObject.toCryptoKey({
                name: "ECDSA",
                namedCurve
            }, extractable, [
                isPublic ? "verify" : "sign"
            ]);
        }
        if (alg.startsWith("ECDH-ES")) {
            cryptoKey = keyObject.toCryptoKey({
                name: "ECDH",
                namedCurve
            }, extractable, isPublic ? [] : [
                "deriveBits"
            ]);
        }
    }
    if (!cryptoKey) {
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (!cached) {
        cache.set(keyObject, {
            [alg]: cryptoKey
        });
    } else {
        cached[alg] = cryptoKey;
    }
    return cryptoKey;
};
/* harmony default export */ const normalize_key = (async (key, alg)=>{
    if (key instanceof Uint8Array) {
        return key;
    }
    if (is_key_like_isCryptoKey(key)) {
        return key;
    }
    if (is_key_like_isKeyObject(key)) {
        if (key.type === "secret") {
            return key.export();
        }
        if ("toCryptoKey" in key && typeof key.toCryptoKey === "function") {
            try {
                return handleKeyObject(key, alg);
            } catch (err) {
                if (err instanceof TypeError) {
                    throw err;
                }
            }
        }
        let jwk = key.export({
            format: "jwk"
        });
        return handleJWK(key, jwk, alg);
    }
    if (is_jwk_isJWK(key)) {
        if (key.k) {
            return decode(key.k);
        }
        return handleJWK(key, key, alg, true);
    }
    throw new Error("unreachable");
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/check_key_type.js



const tag = (key)=>key?.[Symbol.toStringTag];
const jwkMatchesOp = (alg, key, usage)=>{
    if (key.use !== undefined) {
        let expected;
        switch(usage){
            case "sign":
            case "verify":
                expected = "sig";
                break;
            case "encrypt":
            case "decrypt":
                expected = "enc";
                break;
        }
        if (key.use !== expected) {
            throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
        }
    }
    if (key.alg !== undefined && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
    }
    if (Array.isArray(key.key_ops)) {
        let expectedKeyOp;
        switch(true){
            case usage === "sign" || usage === "verify":
            case alg === "dir":
            case alg.includes("CBC-HS"):
                expectedKeyOp = usage;
                break;
            case alg.startsWith("PBES2"):
                expectedKeyOp = "deriveBits";
                break;
            case /^A\d{3}(?:GCM)?(?:KW)?$/.test(alg):
                if (!alg.includes("GCM") && alg.endsWith("KW")) {
                    expectedKeyOp = usage === "encrypt" ? "wrapKey" : "unwrapKey";
                } else {
                    expectedKeyOp = usage;
                }
                break;
            case usage === "encrypt" && alg.startsWith("RSA"):
                expectedKeyOp = "wrapKey";
                break;
            case usage === "decrypt":
                expectedKeyOp = alg.startsWith("RSA") ? "unwrapKey" : "deriveBits";
                break;
        }
        if (expectedKeyOp && key.key_ops?.includes?.(expectedKeyOp) === false) {
            throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
        }
    }
    return true;
};
const symmetricTypeCheck = (alg, key, usage)=>{
    if (key instanceof Uint8Array) return;
    if (is_jwk_isJWK(key)) {
        if (isSecretJWK(key) && jwkMatchesOp(alg, key, usage)) return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!is_key_like(key)) {
        throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
    }
    if (key.type !== "secret") {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage)=>{
    if (is_jwk_isJWK(key)) {
        switch(usage){
            case "decrypt":
            case "sign":
                if (isPrivateJWK(key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a private JWK`);
            case "encrypt":
            case "verify":
                if (isPublicJWK(key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
    }
    if (!is_key_like(key)) {
        throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key"));
    }
    if (key.type === "secret") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (key.type === "public") {
        switch(usage){
            case "sign":
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
            case "decrypt":
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
            default:
                break;
        }
    }
    if (key.type === "private") {
        switch(usage){
            case "verify":
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
            case "encrypt":
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
            default:
                break;
        }
    }
};
/* harmony default export */ const check_key_type = ((alg, key, usage)=>{
    const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(alg) || /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(alg, key, usage);
    } else {
        asymmetricTypeCheck(alg, key, usage);
    }
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwe/flattened/decrypt.js












async function decrypt_flattenedDecrypt(jwe, key, options) {
    if (!isObject(jwe)) {
        throw new JWEInvalid("Flattened JWE must be an object");
    }
    if (jwe.protected === undefined && jwe.header === undefined && jwe.unprotected === undefined) {
        throw new JWEInvalid("JOSE Header missing");
    }
    if (jwe.iv !== undefined && typeof jwe.iv !== "string") {
        throw new JWEInvalid("JWE Initialization Vector incorrect type");
    }
    if (typeof jwe.ciphertext !== "string") {
        throw new JWEInvalid("JWE Ciphertext missing or incorrect type");
    }
    if (jwe.tag !== undefined && typeof jwe.tag !== "string") {
        throw new JWEInvalid("JWE Authentication Tag incorrect type");
    }
    if (jwe.protected !== undefined && typeof jwe.protected !== "string") {
        throw new JWEInvalid("JWE Protected Header incorrect type");
    }
    if (jwe.encrypted_key !== undefined && typeof jwe.encrypted_key !== "string") {
        throw new JWEInvalid("JWE Encrypted Key incorrect type");
    }
    if (jwe.aad !== undefined && typeof jwe.aad !== "string") {
        throw new JWEInvalid("JWE AAD incorrect type");
    }
    if (jwe.header !== undefined && !isObject(jwe.header)) {
        throw new JWEInvalid("JWE Shared Unprotected Header incorrect type");
    }
    if (jwe.unprotected !== undefined && !isObject(jwe.unprotected)) {
        throw new JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
    }
    let parsedProt;
    if (jwe.protected) {
        try {
            const protectedHeader = b64u(jwe.protected);
            parsedProt = JSON.parse(decoder.decode(protectedHeader));
        } catch  {
            throw new JWEInvalid("JWE Protected Header is invalid");
        }
    }
    if (!isDisjoint(parsedProt, jwe.header, jwe.unprotected)) {
        throw new JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
    }
    const joseHeader = {
        ...parsedProt,
        ...jwe.header,
        ...jwe.unprotected
    };
    validateCrit(JWEInvalid, new Map(), options?.crit, parsedProt, joseHeader);
    if (joseHeader.zip !== undefined) {
        throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
    }
    const { alg, enc } = joseHeader;
    if (typeof alg !== "string" || !alg) {
        throw new JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
    }
    if (typeof enc !== "string" || !enc) {
        throw new JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
    }
    const keyManagementAlgorithms = options && validateAlgorithms("keyManagementAlgorithms", options.keyManagementAlgorithms);
    const contentEncryptionAlgorithms = options && validateAlgorithms("contentEncryptionAlgorithms", options.contentEncryptionAlgorithms);
    if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg) || !keyManagementAlgorithms && alg.startsWith("PBES2")) {
        throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
        throw new JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter value not allowed');
    }
    let encryptedKey;
    if (jwe.encrypted_key !== undefined) {
        try {
            encryptedKey = b64u(jwe.encrypted_key);
        } catch  {
            throw new JWEInvalid("Failed to base64url decode the encrypted_key");
        }
    }
    let resolvedKey = false;
    if (typeof key === "function") {
        key = await key(parsedProt, jwe);
        resolvedKey = true;
    }
    checkKeyType(alg === "dir" ? enc : alg, key, "decrypt");
    const k = await normalizeKey(key, alg);
    let cek;
    try {
        cek = await decryptKeyManagement(alg, k, encryptedKey, joseHeader, options);
    } catch (err) {
        if (err instanceof TypeError || err instanceof JWEInvalid || err instanceof JOSENotSupported) {
            throw err;
        }
        cek = generateCek(enc);
    }
    let iv;
    let tag;
    if (jwe.iv !== undefined) {
        try {
            iv = b64u(jwe.iv);
        } catch  {
            throw new JWEInvalid("Failed to base64url decode the iv");
        }
    }
    if (jwe.tag !== undefined) {
        try {
            tag = b64u(jwe.tag);
        } catch  {
            throw new JWEInvalid("Failed to base64url decode the tag");
        }
    }
    const protectedHeader = encoder.encode(jwe.protected ?? "");
    let additionalData;
    if (jwe.aad !== undefined) {
        additionalData = concat(protectedHeader, encoder.encode("."), encoder.encode(jwe.aad));
    } else {
        additionalData = protectedHeader;
    }
    let ciphertext;
    try {
        ciphertext = b64u(jwe.ciphertext);
    } catch  {
        throw new JWEInvalid("Failed to base64url decode the ciphertext");
    }
    const plaintext = await decrypt(enc, cek, ciphertext, iv, tag, additionalData);
    const result = {
        plaintext
    };
    if (jwe.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jwe.aad !== undefined) {
        try {
            result.additionalAuthenticatedData = b64u(jwe.aad);
        } catch  {
            throw new JWEInvalid("Failed to base64url decode the aad");
        }
    }
    if (jwe.unprotected !== undefined) {
        result.sharedUnprotectedHeader = jwe.unprotected;
    }
    if (jwe.header !== undefined) {
        result.unprotectedHeader = jwe.header;
    }
    if (resolvedKey) {
        return {
            ...result,
            key: k
        };
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwe/compact/decrypt.js



async function decrypt_compactDecrypt(jwe, key, options) {
    if (jwe instanceof Uint8Array) {
        jwe = decoder.decode(jwe);
    }
    if (typeof jwe !== "string") {
        throw new JWEInvalid("Compact JWE must be a string or Uint8Array");
    }
    const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag, length } = jwe.split(".");
    if (length !== 5) {
        throw new JWEInvalid("Invalid Compact JWE");
    }
    const decrypted = await flattenedDecrypt({
        ciphertext,
        iv: iv || undefined,
        protected: protectedHeader,
        tag: tag || undefined,
        encrypted_key: encryptedKey || undefined
    }, key, options);
    const result = {
        plaintext: decrypted.plaintext,
        protectedHeader: decrypted.protectedHeader
    };
    if (typeof key === "function") {
        return {
            ...result,
            key: decrypted.key
        };
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwe/general/decrypt.js



async function generalDecrypt(jwe, key, options) {
    if (!isObject(jwe)) {
        throw new JWEInvalid("General JWE must be an object");
    }
    if (!Array.isArray(jwe.recipients) || !jwe.recipients.every(isObject)) {
        throw new JWEInvalid("JWE Recipients missing or incorrect type");
    }
    if (!jwe.recipients.length) {
        throw new JWEInvalid("JWE Recipients has no members");
    }
    for (const recipient of jwe.recipients){
        try {
            return await flattenedDecrypt({
                aad: jwe.aad,
                ciphertext: jwe.ciphertext,
                encrypted_key: recipient.encrypted_key,
                header: recipient.header,
                iv: jwe.iv,
                protected: jwe.protected,
                tag: jwe.tag,
                unprotected: jwe.unprotected
            }, key, options);
        } catch  {}
    }
    throw new JWEDecryptionFailed();
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/private_symbols.js
const private_symbols_unprotected = Symbol();

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/key_to_jwk.js



async function key_to_jwk_keyToJWK(key) {
    if (isKeyObject(key)) {
        if (key.type === "secret") {
            key = key.export();
        } else {
            return key.export({
                format: "jwk"
            });
        }
    }
    if (key instanceof Uint8Array) {
        return {
            kty: "oct",
            k: b64u(key)
        };
    }
    if (!isCryptoKey(key)) {
        throw new TypeError(invalidKeyInput(key, "CryptoKey", "KeyObject", "Uint8Array"));
    }
    if (!key.extractable) {
        throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
    }
    const { ext, key_ops, alg, use, ...jwk } = await crypto.subtle.exportKey("jwk", key);
    return jwk;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/key/export.js


async function exportSPKI(key) {
    return exportPublic(key);
}
async function exportPKCS8(key) {
    return exportPrivate(key);
}
async function export_exportJWK(key) {
    return keyToJWK(key);
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/encrypt_key_management.js











/* harmony default export */ const encrypt_key_management = (async (alg, enc, key, providedCek, providedParameters = {})=>{
    let encryptedKey;
    let parameters;
    let cek;
    switch(alg){
        case "dir":
            {
                cek = key;
                break;
            }
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
            {
                assertCryptoKey(key);
                if (!ecdhes.allowed(key)) {
                    throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                }
                const { apu, apv } = providedParameters;
                let ephemeralKey;
                if (providedParameters.epk) {
                    ephemeralKey = await normalizeKey(providedParameters.epk, alg);
                } else {
                    ephemeralKey = (await crypto.subtle.generateKey(key.algorithm, true, [
                        "deriveBits"
                    ])).privateKey;
                }
                const { x, y, crv, kty } = await exportJWK(ephemeralKey);
                const sharedSecret = await ecdhes.deriveKey(key, ephemeralKey, alg === "ECDH-ES" ? enc : alg, alg === "ECDH-ES" ? cekLength(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
                parameters = {
                    epk: {
                        x,
                        crv,
                        kty
                    }
                };
                if (kty === "EC") parameters.epk.y = y;
                if (apu) parameters.apu = b64u(apu);
                if (apv) parameters.apv = b64u(apv);
                if (alg === "ECDH-ES") {
                    cek = sharedSecret;
                    break;
                }
                cek = providedCek || generateCek(enc);
                const kwAlg = alg.slice(-6);
                encryptedKey = await aeskw.wrap(kwAlg, sharedSecret, cek);
                break;
            }
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            {
                cek = providedCek || generateCek(enc);
                assertCryptoKey(key);
                encryptedKey = await rsaes.encrypt(alg, key, cek);
                break;
            }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
            {
                cek = providedCek || generateCek(enc);
                const { p2c, p2s } = providedParameters;
                ({ encryptedKey, ...parameters } = await pbes2kw.wrap(alg, key, cek, p2c, p2s));
                break;
            }
        case "A128KW":
        case "A192KW":
        case "A256KW":
            {
                cek = providedCek || generateCek(enc);
                encryptedKey = await aeskw.wrap(alg, key, cek);
                break;
            }
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
            {
                cek = providedCek || generateCek(enc);
                const { iv } = providedParameters;
                ({ encryptedKey, ...parameters } = await aesGcmKw(alg, key, cek, iv));
                break;
            }
        default:
            {
                throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
            }
    }
    return {
        cek,
        encryptedKey,
        parameters
    };
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwe/flattened/encrypt.js










class encrypt_FlattenedEncrypt {
    #plaintext;
    #protectedHeader;
    #sharedUnprotectedHeader;
    #unprotectedHeader;
    #aad;
    #cek;
    #iv;
    #keyManagementParameters;
    constructor(plaintext){
        if (!(plaintext instanceof Uint8Array)) {
            throw new TypeError("plaintext must be an instance of Uint8Array");
        }
        this.#plaintext = plaintext;
    }
    setKeyManagementParameters(parameters) {
        if (this.#keyManagementParameters) {
            throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this.#keyManagementParameters = parameters;
        return this;
    }
    setProtectedHeader(protectedHeader) {
        if (this.#protectedHeader) {
            throw new TypeError("setProtectedHeader can only be called once");
        }
        this.#protectedHeader = protectedHeader;
        return this;
    }
    setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this.#sharedUnprotectedHeader) {
            throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this.#sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.#unprotectedHeader) {
            throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.#unprotectedHeader = unprotectedHeader;
        return this;
    }
    setAdditionalAuthenticatedData(aad) {
        this.#aad = aad;
        return this;
    }
    setContentEncryptionKey(cek) {
        if (this.#cek) {
            throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this.#cek = cek;
        return this;
    }
    setInitializationVector(iv) {
        if (this.#iv) {
            throw new TypeError("setInitializationVector can only be called once");
        }
        this.#iv = iv;
        return this;
    }
    async encrypt(key, options) {
        if (!this.#protectedHeader && !this.#unprotectedHeader && !this.#sharedUnprotectedHeader) {
            throw new JWEInvalid("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!isDisjoint(this.#protectedHeader, this.#unprotectedHeader, this.#sharedUnprotectedHeader)) {
            throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        const joseHeader = {
            ...this.#protectedHeader,
            ...this.#unprotectedHeader,
            ...this.#sharedUnprotectedHeader
        };
        validateCrit(JWEInvalid, new Map(), options?.crit, this.#protectedHeader, joseHeader);
        if (joseHeader.zip !== undefined) {
            throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== "string" || !alg) {
            throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== "string" || !enc) {
            throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (this.#cek && (alg === "dir" || alg === "ECDH-ES")) {
            throw new TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${alg}`);
        }
        checkKeyType(alg === "dir" ? enc : alg, key, "encrypt");
        let cek;
        {
            let parameters;
            const k = await normalizeKey(key, alg);
            ({ cek, encryptedKey, parameters } = await encryptKeyManagement(alg, enc, k, this.#cek, this.#keyManagementParameters));
            if (parameters) {
                if (options && unprotected in options) {
                    if (!this.#unprotectedHeader) {
                        this.setUnprotectedHeader(parameters);
                    } else {
                        this.#unprotectedHeader = {
                            ...this.#unprotectedHeader,
                            ...parameters
                        };
                    }
                } else if (!this.#protectedHeader) {
                    this.setProtectedHeader(parameters);
                } else {
                    this.#protectedHeader = {
                        ...this.#protectedHeader,
                        ...parameters
                    };
                }
            }
        }
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this.#protectedHeader) {
            protectedHeader = encoder.encode(b64u(JSON.stringify(this.#protectedHeader)));
        } else {
            protectedHeader = encoder.encode("");
        }
        if (this.#aad) {
            aadMember = b64u(this.#aad);
            additionalData = concat(protectedHeader, encoder.encode("."), encoder.encode(aadMember));
        } else {
            additionalData = protectedHeader;
        }
        const { ciphertext, tag, iv } = await encrypt(enc, this.#plaintext, cek, this.#iv, additionalData);
        const jwe = {
            ciphertext: b64u(ciphertext)
        };
        if (iv) {
            jwe.iv = b64u(iv);
        }
        if (tag) {
            jwe.tag = b64u(tag);
        }
        if (encryptedKey) {
            jwe.encrypted_key = b64u(encryptedKey);
        }
        if (aadMember) {
            jwe.aad = aadMember;
        }
        if (this.#protectedHeader) {
            jwe.protected = decoder.decode(protectedHeader);
        }
        if (this.#sharedUnprotectedHeader) {
            jwe.unprotected = this.#sharedUnprotectedHeader;
        }
        if (this.#unprotectedHeader) {
            jwe.header = this.#unprotectedHeader;
        }
        return jwe;
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwe/general/encrypt.js










class IndividualRecipient {
    #parent;
    constructor(enc, key, options){
        this.#parent = enc;
        this.key = key;
        this.options = options;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
            throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
    }
    addRecipient(...args) {
        return this.#parent.addRecipient(...args);
    }
    encrypt(...args) {
        return this.#parent.encrypt(...args);
    }
    done() {
        return this.#parent;
    }
}
class GeneralEncrypt {
    #plaintext;
    #recipients;
    #protectedHeader;
    #unprotectedHeader;
    #aad;
    constructor(plaintext){
        this.#recipients = [];
        this.#plaintext = plaintext;
    }
    addRecipient(key, options) {
        const recipient = new IndividualRecipient(this, key, {
            crit: options?.crit
        });
        this.#recipients.push(recipient);
        return recipient;
    }
    setProtectedHeader(protectedHeader) {
        if (this.#protectedHeader) {
            throw new TypeError("setProtectedHeader can only be called once");
        }
        this.#protectedHeader = protectedHeader;
        return this;
    }
    setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this.#unprotectedHeader) {
            throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this.#unprotectedHeader = sharedUnprotectedHeader;
        return this;
    }
    setAdditionalAuthenticatedData(aad) {
        this.#aad = aad;
        return this;
    }
    async encrypt() {
        if (!this.#recipients.length) {
            throw new JWEInvalid("at least one recipient must be added");
        }
        if (this.#recipients.length === 1) {
            const [recipient] = this.#recipients;
            const flattened = await new FlattenedEncrypt(this.#plaintext).setAdditionalAuthenticatedData(this.#aad).setProtectedHeader(this.#protectedHeader).setSharedUnprotectedHeader(this.#unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).encrypt(recipient.key, {
                ...recipient.options
            });
            const jwe = {
                ciphertext: flattened.ciphertext,
                iv: flattened.iv,
                recipients: [
                    {}
                ],
                tag: flattened.tag
            };
            if (flattened.aad) jwe.aad = flattened.aad;
            if (flattened.protected) jwe.protected = flattened.protected;
            if (flattened.unprotected) jwe.unprotected = flattened.unprotected;
            if (flattened.encrypted_key) jwe.recipients[0].encrypted_key = flattened.encrypted_key;
            if (flattened.header) jwe.recipients[0].header = flattened.header;
            return jwe;
        }
        let enc;
        for(let i = 0; i < this.#recipients.length; i++){
            const recipient = this.#recipients[i];
            if (!isDisjoint(this.#protectedHeader, this.#unprotectedHeader, recipient.unprotectedHeader)) {
                throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
            }
            const joseHeader = {
                ...this.#protectedHeader,
                ...this.#unprotectedHeader,
                ...recipient.unprotectedHeader
            };
            const { alg } = joseHeader;
            if (typeof alg !== "string" || !alg) {
                throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
            }
            if (alg === "dir" || alg === "ECDH-ES") {
                throw new JWEInvalid('"dir" and "ECDH-ES" alg may only be used with a single recipient');
            }
            if (typeof joseHeader.enc !== "string" || !joseHeader.enc) {
                throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
            }
            if (!enc) {
                enc = joseHeader.enc;
            } else if (enc !== joseHeader.enc) {
                throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');
            }
            validateCrit(JWEInvalid, new Map(), recipient.options.crit, this.#protectedHeader, joseHeader);
            if (joseHeader.zip !== undefined) {
                throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
            }
        }
        const cek = generateCek(enc);
        const jwe = {
            ciphertext: "",
            iv: "",
            recipients: [],
            tag: ""
        };
        for(let i = 0; i < this.#recipients.length; i++){
            const recipient = this.#recipients[i];
            const target = {};
            jwe.recipients.push(target);
            const joseHeader = {
                ...this.#protectedHeader,
                ...this.#unprotectedHeader,
                ...recipient.unprotectedHeader
            };
            const p2c = joseHeader.alg.startsWith("PBES2") ? 2048 + i : undefined;
            if (i === 0) {
                const flattened = await new FlattenedEncrypt(this.#plaintext).setAdditionalAuthenticatedData(this.#aad).setContentEncryptionKey(cek).setProtectedHeader(this.#protectedHeader).setSharedUnprotectedHeader(this.#unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).setKeyManagementParameters({
                    p2c
                }).encrypt(recipient.key, {
                    ...recipient.options,
                    [unprotected]: true
                });
                jwe.ciphertext = flattened.ciphertext;
                jwe.iv = flattened.iv;
                jwe.tag = flattened.tag;
                if (flattened.aad) jwe.aad = flattened.aad;
                if (flattened.protected) jwe.protected = flattened.protected;
                if (flattened.unprotected) jwe.unprotected = flattened.unprotected;
                target.encrypted_key = flattened.encrypted_key;
                if (flattened.header) target.header = flattened.header;
                continue;
            }
            const alg = recipient.unprotectedHeader?.alg || this.#protectedHeader?.alg || this.#unprotectedHeader?.alg;
            checkKeyType(alg === "dir" ? enc : alg, recipient.key, "encrypt");
            const k = await normalizeKey(recipient.key, alg);
            const { encryptedKey, parameters } = await encryptKeyManagement(alg, enc, k, cek, {
                p2c
            });
            target.encrypted_key = b64u(encryptedKey);
            if (recipient.unprotectedHeader || parameters) target.header = {
                ...recipient.unprotectedHeader,
                ...parameters
            };
        }
        return jwe;
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/subtle_dsa.js

/* harmony default export */ const subtle_dsa = ((alg, algorithm)=>{
    const hash = `SHA-${alg.slice(-3)}`;
    switch(alg){
        case "HS256":
        case "HS384":
        case "HS512":
            return {
                hash,
                name: "HMAC"
            };
        case "PS256":
        case "PS384":
        case "PS512":
            return {
                hash,
                name: "RSA-PSS",
                saltLength: parseInt(alg.slice(-3), 10) >> 3
            };
        case "RS256":
        case "RS384":
        case "RS512":
            return {
                hash,
                name: "RSASSA-PKCS1-v1_5"
            };
        case "ES256":
        case "ES384":
        case "ES512":
            return {
                hash,
                name: "ECDSA",
                namedCurve: algorithm.namedCurve
            };
        case "Ed25519":
        case "EdDSA":
            return {
                name: "Ed25519"
            };
        default:
            throw new errors_JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/get_sign_verify_key.js


/* harmony default export */ const get_sign_verify_key = (async (alg, key, usage)=>{
    if (key instanceof Uint8Array) {
        if (!alg.startsWith("HS")) {
            throw new TypeError(invalid_key_input(key, "CryptoKey", "KeyObject", "JSON Web Key"));
        }
        return crypto.subtle.importKey("raw", key, {
            hash: `SHA-${alg.slice(-3)}`,
            name: "HMAC"
        }, false, [
            usage
        ]);
    }
    checkSigCryptoKey(key, alg, usage);
    return key;
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/verify.js



/* harmony default export */ const verify = (async (alg, key, signature, data)=>{
    const cryptoKey = await get_sign_verify_key(alg, key, "verify");
    check_key_length(alg, cryptoKey);
    const algorithm = subtle_dsa(alg, cryptoKey.algorithm);
    try {
        return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
    } catch  {
        return false;
    }
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jws/flattened/verify.js










async function verify_flattenedVerify(jws, key, options) {
    if (!is_object(jws)) {
        throw new errors_JWSInvalid("Flattened JWS must be an object");
    }
    if (jws.protected === undefined && jws.header === undefined) {
        throw new errors_JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== undefined && typeof jws.protected !== "string") {
        throw new errors_JWSInvalid("JWS Protected Header incorrect type");
    }
    if (jws.payload === undefined) {
        throw new errors_JWSInvalid("JWS Payload missing");
    }
    if (typeof jws.signature !== "string") {
        throw new errors_JWSInvalid("JWS Signature missing or incorrect type");
    }
    if (jws.header !== undefined && !is_object(jws.header)) {
        throw new errors_JWSInvalid("JWS Unprotected Header incorrect type");
    }
    let parsedProt = {};
    if (jws.protected) {
        try {
            const protectedHeader = decode(jws.protected);
            parsedProt = JSON.parse(buffer_utils_decoder.decode(protectedHeader));
        } catch  {
            throw new errors_JWSInvalid("JWS Protected Header is invalid");
        }
    }
    if (!is_disjoint(parsedProt, jws.header)) {
        throw new errors_JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const joseHeader = {
        ...parsedProt,
        ...jws.header
    };
    const extensions = validate_crit(errors_JWSInvalid, new Map([
        [
            "b64",
            true
        ]
    ]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has("b64")) {
        b64 = parsedProt.b64;
        if (typeof b64 !== "boolean") {
            throw new errors_JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    const { alg } = joseHeader;
    if (typeof alg !== "string" || !alg) {
        throw new errors_JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && validate_algorithms("algorithms", options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
        throw new errors_JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (b64) {
        if (typeof jws.payload !== "string") {
            throw new errors_JWSInvalid("JWS Payload must be a string");
        }
    } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
        throw new errors_JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
    }
    let resolvedKey = false;
    if (typeof key === "function") {
        key = await key(parsedProt, jws);
        resolvedKey = true;
    }
    check_key_type(alg, key, "verify");
    const data = buffer_utils_concat(buffer_utils_encoder.encode(jws.protected ?? ""), buffer_utils_encoder.encode("."), typeof jws.payload === "string" ? buffer_utils_encoder.encode(jws.payload) : jws.payload);
    let signature;
    try {
        signature = decode(jws.signature);
    } catch  {
        throw new errors_JWSInvalid("Failed to base64url decode the signature");
    }
    const k = await normalize_key(key, alg);
    const verified = await verify(alg, k, signature, data);
    if (!verified) {
        throw new errors_JWSSignatureVerificationFailed();
    }
    let payload;
    if (b64) {
        try {
            payload = decode(jws.payload);
        } catch  {
            throw new errors_JWSInvalid("Failed to base64url decode the payload");
        }
    } else if (typeof jws.payload === "string") {
        payload = buffer_utils_encoder.encode(jws.payload);
    } else {
        payload = jws.payload;
    }
    const result = {
        payload
    };
    if (jws.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jws.header !== undefined) {
        result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
        return {
            ...result,
            key: k
        };
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jws/compact/verify.js



async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
        jws = buffer_utils_decoder.decode(jws);
    }
    if (typeof jws !== "string") {
        throw new errors_JWSInvalid("Compact JWS must be a string or Uint8Array");
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
    if (length !== 3) {
        throw new errors_JWSInvalid("Invalid Compact JWS");
    }
    const verified = await verify_flattenedVerify({
        payload,
        protected: protectedHeader,
        signature
    }, key, options);
    const result = {
        payload: verified.payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === "function") {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jws/general/verify.js



async function generalVerify(jws, key, options) {
    if (!isObject(jws)) {
        throw new JWSInvalid("General JWS must be an object");
    }
    if (!Array.isArray(jws.signatures) || !jws.signatures.every(isObject)) {
        throw new JWSInvalid("JWS Signatures missing or incorrect type");
    }
    for (const signature of jws.signatures){
        try {
            return await flattenedVerify({
                header: signature.header,
                payload: jws.payload,
                protected: signature.protected,
                signature: signature.signature
            }, key, options);
        } catch  {}
    }
    throw new JWSSignatureVerificationFailed();
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/epoch.js
/* harmony default export */ const epoch = ((date)=>Math.floor(date.getTime() / 1000));

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/secs.js
const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
/* harmony default export */ const secs = ((str)=>{
    const matched = REGEX.exec(str);
    if (!matched || matched[4] && matched[1]) {
        throw new TypeError("Invalid time period format");
    }
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch(unit){
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
            numericDate = Math.round(value);
            break;
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
            numericDate = Math.round(value * minute);
            break;
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
            numericDate = Math.round(value * hour);
            break;
        case "day":
        case "days":
        case "d":
            numericDate = Math.round(value * day);
            break;
        case "week":
        case "weeks":
        case "w":
            numericDate = Math.round(value * week);
            break;
        default:
            numericDate = Math.round(value * year);
            break;
    }
    if (matched[1] === "-" || matched[4] === "ago") {
        return -numericDate;
    }
    return numericDate;
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/jwt_claims_set.js






function validateInput(label, input) {
    if (!Number.isFinite(input)) {
        throw new TypeError(`Invalid ${label} input`);
    }
    return input;
}
const normalizeTyp = (value)=>{
    if (value.includes("/")) {
        return value.toLowerCase();
    }
    return `application/${value.toLowerCase()}`;
};
const checkAudiencePresence = (audPayload, audOption)=>{
    if (typeof audPayload === "string") {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
function jwt_claims_set_validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
    let payload;
    try {
        payload = JSON.parse(buffer_utils_decoder.decode(encodedPayload));
    } catch  {}
    if (!is_object(payload)) {
        throw new errors_JWTInvalid("JWT Claims Set must be a top-level JSON object");
    }
    const { typ } = options;
    if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new errors_JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    const presenceCheck = [
        ...requiredClaims
    ];
    if (maxTokenAge !== undefined) presenceCheck.push("iat");
    if (audience !== undefined) presenceCheck.push("aud");
    if (subject !== undefined) presenceCheck.push("sub");
    if (issuer !== undefined) presenceCheck.push("iss");
    for (const claim of new Set(presenceCheck.reverse())){
        if (!(claim in payload)) {
            throw new errors_JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
        }
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(payload.iss)) {
        throw new errors_JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
    }
    if (subject && payload.sub !== subject) {
        throw new errors_JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
    }
    if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [
        audience
    ] : audience)) {
        throw new errors_JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
    }
    let tolerance;
    switch(typeof options.clockTolerance){
        case "string":
            tolerance = secs(options.clockTolerance);
            break;
        case "number":
            tolerance = options.clockTolerance;
            break;
        case "undefined":
            tolerance = 0;
            break;
        default:
            throw new TypeError("Invalid clockTolerance option type");
    }
    const { currentDate } = options;
    const now = epoch(currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== "number") {
        throw new errors_JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
    }
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== "number") {
            throw new errors_JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
        }
        if (payload.nbf > now + tolerance) {
            throw new errors_JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
        }
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== "number") {
            throw new errors_JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
        }
        if (payload.exp <= now - tolerance) {
            throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
        }
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === "number" ? maxTokenAge : secs(maxTokenAge);
        if (age - tolerance > max) {
            throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
        }
        if (age < 0 - tolerance) {
            throw new errors_JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
        }
    }
    return payload;
}
class jwt_claims_set_JWTClaimsBuilder {
    #payload;
    constructor(payload){
        if (!is_object(payload)) {
            throw new TypeError("JWT Claims Set MUST be an object");
        }
        this.#payload = structuredClone(payload);
    }
    data() {
        return buffer_utils_encoder.encode(JSON.stringify(this.#payload));
    }
    get iss() {
        return this.#payload.iss;
    }
    set iss(value) {
        this.#payload.iss = value;
    }
    get sub() {
        return this.#payload.sub;
    }
    set sub(value) {
        this.#payload.sub = value;
    }
    get aud() {
        return this.#payload.aud;
    }
    set aud(value) {
        this.#payload.aud = value;
    }
    set jti(value) {
        this.#payload.jti = value;
    }
    set nbf(value) {
        if (typeof value === "number") {
            this.#payload.nbf = validateInput("setNotBefore", value);
        } else if (value instanceof Date) {
            this.#payload.nbf = validateInput("setNotBefore", epoch(value));
        } else {
            this.#payload.nbf = epoch(new Date()) + secs(value);
        }
    }
    set exp(value) {
        if (typeof value === "number") {
            this.#payload.exp = validateInput("setExpirationTime", value);
        } else if (value instanceof Date) {
            this.#payload.exp = validateInput("setExpirationTime", epoch(value));
        } else {
            this.#payload.exp = epoch(new Date()) + secs(value);
        }
    }
    set iat(value) {
        if (typeof value === "undefined") {
            this.#payload.iat = epoch(new Date());
        } else if (value instanceof Date) {
            this.#payload.iat = validateInput("setIssuedAt", epoch(value));
        } else if (typeof value === "string") {
            this.#payload.iat = validateInput("setIssuedAt", epoch(new Date()) + secs(value));
        } else {
            this.#payload.iat = validateInput("setIssuedAt", value);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwt/verify.js



async function jwtVerify(jwt, key, options) {
    const verified = await compactVerify(jwt, key, options);
    if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
        throw new errors_JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    const payload = jwt_claims_set_validateClaimsSet(verified.protectedHeader, verified.payload, options);
    const result = {
        payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === "function") {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwt/decrypt.js



async function jwtDecrypt(jwt, key, options) {
    const decrypted = await compactDecrypt(jwt, key, options);
    const payload = validateClaimsSet(decrypted.protectedHeader, decrypted.plaintext, options);
    const { protectedHeader } = decrypted;
    if (protectedHeader.iss !== undefined && protectedHeader.iss !== payload.iss) {
        throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', payload, "iss", "mismatch");
    }
    if (protectedHeader.sub !== undefined && protectedHeader.sub !== payload.sub) {
        throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', payload, "sub", "mismatch");
    }
    if (protectedHeader.aud !== undefined && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
        throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', payload, "aud", "mismatch");
    }
    const result = {
        payload,
        protectedHeader
    };
    if (typeof key === "function") {
        return {
            ...result,
            key: decrypted.key
        };
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwe/compact/encrypt.js

class encrypt_CompactEncrypt {
    #flattened;
    constructor(plaintext){
        this.#flattened = new FlattenedEncrypt(plaintext);
    }
    setContentEncryptionKey(cek) {
        this.#flattened.setContentEncryptionKey(cek);
        return this;
    }
    setInitializationVector(iv) {
        this.#flattened.setInitializationVector(iv);
        return this;
    }
    setProtectedHeader(protectedHeader) {
        this.#flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    setKeyManagementParameters(parameters) {
        this.#flattened.setKeyManagementParameters(parameters);
        return this;
    }
    async encrypt(key, options) {
        const jwe = await this.#flattened.encrypt(key, options);
        return [
            jwe.protected,
            jwe.encrypted_key,
            jwe.iv,
            jwe.ciphertext,
            jwe.tag
        ].join(".");
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/lib/sign.js



/* harmony default export */ const sign = (async (alg, key, data)=>{
    const cryptoKey = await get_sign_verify_key(alg, key, "sign");
    check_key_length(alg, cryptoKey);
    const signature = await crypto.subtle.sign(subtle_dsa(alg, cryptoKey.algorithm), cryptoKey, data);
    return new Uint8Array(signature);
});

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jws/flattened/sign.js








class sign_FlattenedSign {
    #payload;
    #protectedHeader;
    #unprotectedHeader;
    constructor(payload){
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError("payload must be an instance of Uint8Array");
        }
        this.#payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this.#protectedHeader) {
            throw new TypeError("setProtectedHeader can only be called once");
        }
        this.#protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.#unprotectedHeader) {
            throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.#unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this.#protectedHeader && !this.#unprotectedHeader) {
            throw new errors_JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        }
        if (!is_disjoint(this.#protectedHeader, this.#unprotectedHeader)) {
            throw new errors_JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        }
        const joseHeader = {
            ...this.#protectedHeader,
            ...this.#unprotectedHeader
        };
        const extensions = validate_crit(errors_JWSInvalid, new Map([
            [
                "b64",
                true
            ]
        ]), options?.crit, this.#protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has("b64")) {
            b64 = this.#protectedHeader.b64;
            if (typeof b64 !== "boolean") {
                throw new errors_JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== "string" || !alg) {
            throw new errors_JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        check_key_type(alg, key, "sign");
        let payload = this.#payload;
        if (b64) {
            payload = buffer_utils_encoder.encode(encode(payload));
        }
        let protectedHeader;
        if (this.#protectedHeader) {
            protectedHeader = buffer_utils_encoder.encode(encode(JSON.stringify(this.#protectedHeader)));
        } else {
            protectedHeader = buffer_utils_encoder.encode("");
        }
        const data = buffer_utils_concat(protectedHeader, buffer_utils_encoder.encode("."), payload);
        const k = await normalize_key(key, alg);
        const signature = await sign(alg, k, data);
        const jws = {
            signature: encode(signature),
            payload: ""
        };
        if (b64) {
            jws.payload = buffer_utils_decoder.decode(payload);
        }
        if (this.#unprotectedHeader) {
            jws.header = this.#unprotectedHeader;
        }
        if (this.#protectedHeader) {
            jws.protected = buffer_utils_decoder.decode(protectedHeader);
        }
        return jws;
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jws/compact/sign.js

class CompactSign {
    #flattened;
    constructor(payload){
        this.#flattened = new sign_FlattenedSign(payload);
    }
    setProtectedHeader(protectedHeader) {
        this.#flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this.#flattened.sign(key, options);
        if (jws.payload === undefined) {
            throw new TypeError("use the flattened module for creating JWS with b64: false");
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jws/general/sign.js


class IndividualSignature {
    #parent;
    constructor(sig, key, options){
        this.#parent = sig;
        this.key = key;
        this.options = options;
    }
    setProtectedHeader(protectedHeader) {
        if (this.protectedHeader) {
            throw new TypeError("setProtectedHeader can only be called once");
        }
        this.protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
            throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
    }
    addSignature(...args) {
        return this.#parent.addSignature(...args);
    }
    sign(...args) {
        return this.#parent.sign(...args);
    }
    done() {
        return this.#parent;
    }
}
class GeneralSign {
    #payload;
    #signatures;
    constructor(payload){
        this.#signatures = [];
        this.#payload = payload;
    }
    addSignature(key, options) {
        const signature = new IndividualSignature(this, key, options);
        this.#signatures.push(signature);
        return signature;
    }
    async sign() {
        if (!this.#signatures.length) {
            throw new JWSInvalid("at least one signature must be added");
        }
        const jws = {
            signatures: [],
            payload: ""
        };
        for(let i = 0; i < this.#signatures.length; i++){
            const signature = this.#signatures[i];
            const flattened = new FlattenedSign(this.#payload);
            flattened.setProtectedHeader(signature.protectedHeader);
            flattened.setUnprotectedHeader(signature.unprotectedHeader);
            const { payload, ...rest } = await flattened.sign(signature.key, signature.options);
            if (i === 0) {
                jws.payload = payload;
            } else if (jws.payload !== payload) {
                throw new JWSInvalid("inconsistent use of JWS Unencoded Payload (RFC7797)");
            }
            jws.signatures.push(rest);
        }
        return jws;
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwt/sign.js



class SignJWT {
    #protectedHeader;
    #jwt;
    constructor(payload = {}){
        this.#jwt = new jwt_claims_set_JWTClaimsBuilder(payload);
    }
    setIssuer(issuer) {
        this.#jwt.iss = issuer;
        return this;
    }
    setSubject(subject) {
        this.#jwt.sub = subject;
        return this;
    }
    setAudience(audience) {
        this.#jwt.aud = audience;
        return this;
    }
    setJti(jwtId) {
        this.#jwt.jti = jwtId;
        return this;
    }
    setNotBefore(input) {
        this.#jwt.nbf = input;
        return this;
    }
    setExpirationTime(input) {
        this.#jwt.exp = input;
        return this;
    }
    setIssuedAt(input) {
        this.#jwt.iat = input;
        return this;
    }
    setProtectedHeader(protectedHeader) {
        this.#protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        const sig = new CompactSign(this.#jwt.data());
        sig.setProtectedHeader(this.#protectedHeader);
        if (Array.isArray(this.#protectedHeader?.crit) && this.#protectedHeader.crit.includes("b64") && this.#protectedHeader.b64 === false) {
            throw new errors_JWTInvalid("JWTs MUST NOT use unencoded payload");
        }
        return sig.sign(key, options);
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwt/encrypt.js


class EncryptJWT {
    #cek;
    #iv;
    #keyManagementParameters;
    #protectedHeader;
    #replicateIssuerAsHeader;
    #replicateSubjectAsHeader;
    #replicateAudienceAsHeader;
    #jwt;
    constructor(payload = {}){
        this.#jwt = new JWTClaimsBuilder(payload);
    }
    setIssuer(issuer) {
        this.#jwt.iss = issuer;
        return this;
    }
    setSubject(subject) {
        this.#jwt.sub = subject;
        return this;
    }
    setAudience(audience) {
        this.#jwt.aud = audience;
        return this;
    }
    setJti(jwtId) {
        this.#jwt.jti = jwtId;
        return this;
    }
    setNotBefore(input) {
        this.#jwt.nbf = input;
        return this;
    }
    setExpirationTime(input) {
        this.#jwt.exp = input;
        return this;
    }
    setIssuedAt(input) {
        this.#jwt.iat = input;
        return this;
    }
    setProtectedHeader(protectedHeader) {
        if (this.#protectedHeader) {
            throw new TypeError("setProtectedHeader can only be called once");
        }
        this.#protectedHeader = protectedHeader;
        return this;
    }
    setKeyManagementParameters(parameters) {
        if (this.#keyManagementParameters) {
            throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this.#keyManagementParameters = parameters;
        return this;
    }
    setContentEncryptionKey(cek) {
        if (this.#cek) {
            throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this.#cek = cek;
        return this;
    }
    setInitializationVector(iv) {
        if (this.#iv) {
            throw new TypeError("setInitializationVector can only be called once");
        }
        this.#iv = iv;
        return this;
    }
    replicateIssuerAsHeader() {
        this.#replicateIssuerAsHeader = true;
        return this;
    }
    replicateSubjectAsHeader() {
        this.#replicateSubjectAsHeader = true;
        return this;
    }
    replicateAudienceAsHeader() {
        this.#replicateAudienceAsHeader = true;
        return this;
    }
    async encrypt(key, options) {
        const enc = new CompactEncrypt(this.#jwt.data());
        if (this.#protectedHeader && (this.#replicateIssuerAsHeader || this.#replicateSubjectAsHeader || this.#replicateAudienceAsHeader)) {
            this.#protectedHeader = {
                ...this.#protectedHeader,
                iss: this.#replicateIssuerAsHeader ? this.#jwt.iss : undefined,
                sub: this.#replicateSubjectAsHeader ? this.#jwt.sub : undefined,
                aud: this.#replicateAudienceAsHeader ? this.#jwt.aud : undefined
            };
        }
        enc.setProtectedHeader(this.#protectedHeader);
        if (this.#iv) {
            enc.setInitializationVector(this.#iv);
        }
        if (this.#cek) {
            enc.setContentEncryptionKey(this.#cek);
        }
        if (this.#keyManagementParameters) {
            enc.setKeyManagementParameters(this.#keyManagementParameters);
        }
        return enc.encrypt(key, options);
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwk/thumbprint.js








const check = (value, description)=>{
    if (typeof value !== "string" || !value) {
        throw new JWKInvalid(`${description} missing or invalid`);
    }
};
async function calculateJwkThumbprint(key, digestAlgorithm) {
    let jwk;
    if (isJWK(key)) {
        jwk = key;
    } else if (isKeyLike(key)) {
        jwk = await exportJWK(key);
    } else {
        throw new TypeError(invalidKeyInput(key, "CryptoKey", "KeyObject", "JSON Web Key"));
    }
    digestAlgorithm ??= "sha256";
    if (digestAlgorithm !== "sha256" && digestAlgorithm !== "sha384" && digestAlgorithm !== "sha512") {
        throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
    }
    let components;
    switch(jwk.kty){
        case "EC":
            check(jwk.crv, '"crv" (Curve) Parameter');
            check(jwk.x, '"x" (X Coordinate) Parameter');
            check(jwk.y, '"y" (Y Coordinate) Parameter');
            components = {
                crv: jwk.crv,
                kty: jwk.kty,
                x: jwk.x,
                y: jwk.y
            };
            break;
        case "OKP":
            check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
            check(jwk.x, '"x" (Public Key) Parameter');
            components = {
                crv: jwk.crv,
                kty: jwk.kty,
                x: jwk.x
            };
            break;
        case "RSA":
            check(jwk.e, '"e" (Exponent) Parameter');
            check(jwk.n, '"n" (Modulus) Parameter');
            components = {
                e: jwk.e,
                kty: jwk.kty,
                n: jwk.n
            };
            break;
        case "oct":
            check(jwk.k, '"k" (Key Value) Parameter');
            components = {
                k: jwk.k,
                kty: jwk.kty
            };
            break;
        default:
            throw new JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
    }
    const data = encoder.encode(JSON.stringify(components));
    return b64u(await digest(digestAlgorithm, data));
}
async function calculateJwkThumbprintUri(key, digestAlgorithm) {
    digestAlgorithm ??= "sha256";
    const thumbprint = await calculateJwkThumbprint(key, digestAlgorithm);
    return `urn:ietf:params:oauth:jwk-thumbprint:sha-${digestAlgorithm.slice(-3)}:${thumbprint}`;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwk/embedded.js



async function EmbeddedJWK(protectedHeader, token) {
    const joseHeader = {
        ...protectedHeader,
        ...token?.header
    };
    if (!isObject(joseHeader.jwk)) {
        throw new JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
    }
    const key = await importJWK({
        ...joseHeader.jwk,
        ext: true
    }, joseHeader.alg);
    if (key instanceof Uint8Array || key.type !== "public") {
        throw new JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a public key');
    }
    return key;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwks/local.js



function getKtyFromAlg(alg) {
    switch(typeof alg === "string" && alg.slice(0, 2)){
        case "RS":
        case "PS":
            return "RSA";
        case "ES":
            return "EC";
        case "Ed":
            return "OKP";
        default:
            throw new JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
    }
}
function isJWKSLike(jwks) {
    return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
}
function isJWKLike(key) {
    return isObject(key);
}
class LocalJWKSet {
    #jwks;
    #cached;
    constructor(jwks){
        this.#cached = new WeakMap();
        if (!isJWKSLike(jwks)) {
            throw new JWKSInvalid("JSON Web Key Set malformed");
        }
        this.#jwks = structuredClone(jwks);
    }
    jwks() {
        return this.#jwks;
    }
    async getKey(protectedHeader, token) {
        const { alg, kid } = {
            ...protectedHeader,
            ...token?.header
        };
        const kty = getKtyFromAlg(alg);
        const candidates = this.#jwks.keys.filter((jwk)=>{
            let candidate = kty === jwk.kty;
            if (candidate && typeof kid === "string") {
                candidate = kid === jwk.kid;
            }
            if (candidate && typeof jwk.alg === "string") {
                candidate = alg === jwk.alg;
            }
            if (candidate && typeof jwk.use === "string") {
                candidate = jwk.use === "sig";
            }
            if (candidate && Array.isArray(jwk.key_ops)) {
                candidate = jwk.key_ops.includes("verify");
            }
            if (candidate) {
                switch(alg){
                    case "ES256":
                        candidate = jwk.crv === "P-256";
                        break;
                    case "ES384":
                        candidate = jwk.crv === "P-384";
                        break;
                    case "ES512":
                        candidate = jwk.crv === "P-521";
                        break;
                    case "Ed25519":
                    case "EdDSA":
                        candidate = jwk.crv === "Ed25519";
                        break;
                }
            }
            return candidate;
        });
        const { 0: jwk, length } = candidates;
        if (length === 0) {
            throw new JWKSNoMatchingKey();
        }
        if (length !== 1) {
            const error = new JWKSMultipleMatchingKeys();
            const _cached = this.#cached;
            error[Symbol.asyncIterator] = async function*() {
                for (const jwk of candidates){
                    try {
                        yield await importWithAlgCache(_cached, jwk, alg);
                    } catch  {}
                }
            };
            throw error;
        }
        return importWithAlgCache(this.#cached, jwk, alg);
    }
}
async function importWithAlgCache(cache, jwk, alg) {
    const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
    if (cached[alg] === undefined) {
        const key = await importJWK({
            ...jwk,
            ext: true
        }, alg);
        if (key instanceof Uint8Array || key.type !== "public") {
            throw new JWKSInvalid("JSON Web Key Set members must be public keys");
        }
        cached[alg] = key;
    }
    return cached[alg];
}
function local_createLocalJWKSet(jwks) {
    const set = new LocalJWKSet(jwks);
    const localJWKSet = async (protectedHeader, token)=>set.getKey(protectedHeader, token);
    Object.defineProperties(localJWKSet, {
        jwks: {
            value: ()=>structuredClone(set.jwks()),
            enumerable: false,
            configurable: false,
            writable: false
        }
    });
    return localJWKSet;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwks/remote.js



function isCloudflareWorkers() {
    return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" ||  true && "vercel" === "vercel";
}
let USER_AGENT;
if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) {
    const NAME = "jose";
    const VERSION = "v6.0.12";
    USER_AGENT = `${NAME}/${VERSION}`;
}
const customFetch = Symbol();
async function fetchJwks(url, headers, signal, fetchImpl = fetch) {
    const response = await fetchImpl(url, {
        method: "GET",
        signal,
        redirect: "manual",
        headers
    }).catch((err)=>{
        if (err.name === "TimeoutError") {
            throw new JWKSTimeout();
        }
        throw err;
    });
    if (response.status !== 200) {
        throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
    }
    try {
        return await response.json();
    } catch  {
        throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
    }
}
const jwksCache = Symbol();
function isFreshJwksCache(input, cacheMaxAge) {
    if (typeof input !== "object" || input === null) {
        return false;
    }
    if (!("uat" in input) || typeof input.uat !== "number" || Date.now() - input.uat >= cacheMaxAge) {
        return false;
    }
    if (!("jwks" in input) || !isObject(input.jwks) || !Array.isArray(input.jwks.keys) || !Array.prototype.every.call(input.jwks.keys, isObject)) {
        return false;
    }
    return true;
}
class RemoteJWKSet {
    #url;
    #timeoutDuration;
    #cooldownDuration;
    #cacheMaxAge;
    #jwksTimestamp;
    #pendingFetch;
    #headers;
    #customFetch;
    #local;
    #cache;
    constructor(url, options){
        if (!(url instanceof URL)) {
            throw new TypeError("url must be an instance of URL");
        }
        this.#url = new URL(url.href);
        this.#timeoutDuration = typeof options?.timeoutDuration === "number" ? options?.timeoutDuration : 5000;
        this.#cooldownDuration = typeof options?.cooldownDuration === "number" ? options?.cooldownDuration : 30000;
        this.#cacheMaxAge = typeof options?.cacheMaxAge === "number" ? options?.cacheMaxAge : 600000;
        this.#headers = new Headers(options?.headers);
        if (USER_AGENT && !this.#headers.has("User-Agent")) {
            this.#headers.set("User-Agent", USER_AGENT);
        }
        if (!this.#headers.has("accept")) {
            this.#headers.set("accept", "application/json");
            this.#headers.append("accept", "application/jwk-set+json");
        }
        this.#customFetch = options?.[customFetch];
        if (options?.[jwksCache] !== undefined) {
            this.#cache = options?.[jwksCache];
            if (isFreshJwksCache(options?.[jwksCache], this.#cacheMaxAge)) {
                this.#jwksTimestamp = this.#cache.uat;
                this.#local = createLocalJWKSet(this.#cache.jwks);
            }
        }
    }
    pendingFetch() {
        return !!this.#pendingFetch;
    }
    coolingDown() {
        return typeof this.#jwksTimestamp === "number" ? Date.now() < this.#jwksTimestamp + this.#cooldownDuration : false;
    }
    fresh() {
        return typeof this.#jwksTimestamp === "number" ? Date.now() < this.#jwksTimestamp + this.#cacheMaxAge : false;
    }
    jwks() {
        return this.#local?.jwks();
    }
    async getKey(protectedHeader, token) {
        if (!this.#local || !this.fresh()) {
            await this.reload();
        }
        try {
            return await this.#local(protectedHeader, token);
        } catch (err) {
            if (err instanceof JWKSNoMatchingKey) {
                if (this.coolingDown() === false) {
                    await this.reload();
                    return this.#local(protectedHeader, token);
                }
            }
            throw err;
        }
    }
    async reload() {
        if (this.#pendingFetch && isCloudflareWorkers()) {
            this.#pendingFetch = undefined;
        }
        this.#pendingFetch ||= fetchJwks(this.#url.href, this.#headers, AbortSignal.timeout(this.#timeoutDuration), this.#customFetch).then((json)=>{
            this.#local = createLocalJWKSet(json);
            if (this.#cache) {
                this.#cache.uat = Date.now();
                this.#cache.jwks = json;
            }
            this.#jwksTimestamp = Date.now();
            this.#pendingFetch = undefined;
        }).catch((err)=>{
            this.#pendingFetch = undefined;
            throw err;
        });
        await this.#pendingFetch;
    }
}
function createRemoteJWKSet(url, options) {
    const set = new RemoteJWKSet(url, options);
    const remoteJWKSet = async (protectedHeader, token)=>set.getKey(protectedHeader, token);
    Object.defineProperties(remoteJWKSet, {
        coolingDown: {
            get: ()=>set.coolingDown(),
            enumerable: true,
            configurable: false
        },
        fresh: {
            get: ()=>set.fresh(),
            enumerable: true,
            configurable: false
        },
        reload: {
            value: ()=>set.reload(),
            enumerable: true,
            configurable: false,
            writable: false
        },
        reloading: {
            get: ()=>set.pendingFetch(),
            enumerable: true,
            configurable: false
        },
        jwks: {
            value: ()=>set.jwks(),
            enumerable: true,
            configurable: false,
            writable: false
        }
    });
    return remoteJWKSet;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/jwt/unsecured.js




class UnsecuredJWT {
    #jwt;
    constructor(payload = {}){
        this.#jwt = new JWTClaimsBuilder(payload);
    }
    encode() {
        const header = b64u.encode(JSON.stringify({
            alg: "none"
        }));
        const payload = b64u.encode(this.#jwt.data());
        return `${header}.${payload}.`;
    }
    setIssuer(issuer) {
        this.#jwt.iss = issuer;
        return this;
    }
    setSubject(subject) {
        this.#jwt.sub = subject;
        return this;
    }
    setAudience(audience) {
        this.#jwt.aud = audience;
        return this;
    }
    setJti(jwtId) {
        this.#jwt.jti = jwtId;
        return this;
    }
    setNotBefore(input) {
        this.#jwt.nbf = input;
        return this;
    }
    setExpirationTime(input) {
        this.#jwt.exp = input;
        return this;
    }
    setIssuedAt(input) {
        this.#jwt.iat = input;
        return this;
    }
    static decode(jwt, options) {
        if (typeof jwt !== "string") {
            throw new JWTInvalid("Unsecured JWT must be a string");
        }
        const { 0: encodedHeader, 1: encodedPayload, 2: signature, length } = jwt.split(".");
        if (length !== 3 || signature !== "") {
            throw new JWTInvalid("Invalid Unsecured JWT");
        }
        let header;
        try {
            header = JSON.parse(decoder.decode(b64u.decode(encodedHeader)));
            if (header.alg !== "none") throw new Error();
        } catch  {
            throw new JWTInvalid("Invalid Unsecured JWT");
        }
        const payload = validateClaimsSet(header, b64u.decode(encodedPayload), options);
        return {
            payload,
            header
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/util/decode_protected_header.js



function decodeProtectedHeader(token) {
    let protectedB64u;
    if (typeof token === "string") {
        const parts = token.split(".");
        if (parts.length === 3 || parts.length === 5) {
            ;
            [protectedB64u] = parts;
        }
    } else if (typeof token === "object" && token) {
        if ("protected" in token) {
            protectedB64u = token.protected;
        } else {
            throw new TypeError("Token does not contain a Protected Header");
        }
    }
    try {
        if (typeof protectedB64u !== "string" || !protectedB64u) {
            throw new Error();
        }
        const result = JSON.parse(decoder.decode(b64u(protectedB64u)));
        if (!isObject(result)) {
            throw new Error();
        }
        return result;
    } catch  {
        throw new TypeError("Invalid Token or Protected Header formatting");
    }
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/util/decode_jwt.js




function decodeJwt(jwt) {
    if (typeof jwt !== "string") throw new JWTInvalid("JWTs must use Compact JWS serialization, JWT must be a string");
    const { 1: payload, length } = jwt.split(".");
    if (length === 5) throw new JWTInvalid("Only JWTs using Compact JWS serialization can be decoded");
    if (length !== 3) throw new JWTInvalid("Invalid JWT");
    if (!payload) throw new JWTInvalid("JWTs must contain a payload");
    let decoded;
    try {
        decoded = b64u(payload);
    } catch  {
        throw new JWTInvalid("Failed to base64url decode the payload");
    }
    let result;
    try {
        result = JSON.parse(decoder.decode(decoded));
    } catch  {
        throw new JWTInvalid("Failed to parse the decoded payload as JSON");
    }
    if (!isObject(result)) throw new JWTInvalid("Invalid JWT Claims Set");
    return result;
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/key/generate_key_pair.js

function getModulusLengthOption(options) {
    const modulusLength = options?.modulusLength ?? 2048;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
        throw new JOSENotSupported("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
    }
    return modulusLength;
}
async function generateKeyPair(alg, options) {
    let algorithm;
    let keyUsages;
    switch(alg){
        case "PS256":
        case "PS384":
        case "PS512":
            algorithm = {
                name: "RSA-PSS",
                hash: `SHA-${alg.slice(-3)}`,
                publicExponent: new Uint8Array([
                    0x01,
                    0x00,
                    0x01
                ]),
                modulusLength: getModulusLengthOption(options)
            };
            keyUsages = [
                "sign",
                "verify"
            ];
            break;
        case "RS256":
        case "RS384":
        case "RS512":
            algorithm = {
                name: "RSASSA-PKCS1-v1_5",
                hash: `SHA-${alg.slice(-3)}`,
                publicExponent: new Uint8Array([
                    0x01,
                    0x00,
                    0x01
                ]),
                modulusLength: getModulusLengthOption(options)
            };
            keyUsages = [
                "sign",
                "verify"
            ];
            break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
            algorithm = {
                name: "RSA-OAEP",
                hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`,
                publicExponent: new Uint8Array([
                    0x01,
                    0x00,
                    0x01
                ]),
                modulusLength: getModulusLengthOption(options)
            };
            keyUsages = [
                "decrypt",
                "unwrapKey",
                "encrypt",
                "wrapKey"
            ];
            break;
        case "ES256":
            algorithm = {
                name: "ECDSA",
                namedCurve: "P-256"
            };
            keyUsages = [
                "sign",
                "verify"
            ];
            break;
        case "ES384":
            algorithm = {
                name: "ECDSA",
                namedCurve: "P-384"
            };
            keyUsages = [
                "sign",
                "verify"
            ];
            break;
        case "ES512":
            algorithm = {
                name: "ECDSA",
                namedCurve: "P-521"
            };
            keyUsages = [
                "sign",
                "verify"
            ];
            break;
        case "Ed25519":
        case "EdDSA":
            {
                keyUsages = [
                    "sign",
                    "verify"
                ];
                algorithm = {
                    name: "Ed25519"
                };
                break;
            }
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
            {
                keyUsages = [
                    "deriveBits"
                ];
                const crv = options?.crv ?? "P-256";
                switch(crv){
                    case "P-256":
                    case "P-384":
                    case "P-521":
                        {
                            algorithm = {
                                name: "ECDH",
                                namedCurve: crv
                            };
                            break;
                        }
                    case "X25519":
                        algorithm = {
                            name: "X25519"
                        };
                        break;
                    default:
                        throw new JOSENotSupported("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, and X25519");
                }
                break;
            }
        default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    }
    return crypto.subtle.generateKey(algorithm, options?.extractable ?? false, keyUsages);
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/key/generate_secret.js

async function generateSecret(alg, options) {
    let length;
    let algorithm;
    let keyUsages;
    switch(alg){
        case "HS256":
        case "HS384":
        case "HS512":
            length = parseInt(alg.slice(-3), 10);
            algorithm = {
                name: "HMAC",
                hash: `SHA-${length}`,
                length
            };
            keyUsages = [
                "sign",
                "verify"
            ];
            break;
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
            length = parseInt(alg.slice(-3), 10);
            return crypto.getRandomValues(new Uint8Array(length >> 3));
        case "A128KW":
        case "A192KW":
        case "A256KW":
            length = parseInt(alg.slice(1, 4), 10);
            algorithm = {
                name: "AES-KW",
                length
            };
            keyUsages = [
                "wrapKey",
                "unwrapKey"
            ];
            break;
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
            length = parseInt(alg.slice(1, 4), 10);
            algorithm = {
                name: "AES-GCM",
                length
            };
            keyUsages = [
                "encrypt",
                "decrypt"
            ];
            break;
        default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    }
    return crypto.subtle.generateKey(algorithm, options?.extractable ?? false, keyUsages);
}

;// CONCATENATED MODULE: ./node_modules/jose/dist/webapi/index.js





























const cryptoRuntime = "WebCryptoAPI";

;// CONCATENATED MODULE: ./src/lib/password-edge.ts
// Edge Runtime compatible password utilities using Web Crypto API
// Replaces bcryptjs for bundle size optimization and Edge Runtime compatibility
class password_edge_EdgePasswordUtils {
    /**
   * Hash password using PBKDF2 with Web Crypto API
   * Compatible with Edge Runtime, much smaller bundle size than bcryptjs
   */ static async hashPassword(password, salt) {
        // Use provided salt or generate new one
        const saltBytes = salt || crypto.getRandomValues(new Uint8Array(32));
        // Convert password to bytes
        const passwordBytes = new TextEncoder().encode(password);
        // Import password as cryptographic key
        const key = await crypto.subtle.importKey("raw", passwordBytes, {
            name: "PBKDF2"
        }, false, [
            "deriveBits"
        ]);
        // Derive hash using PBKDF2
        const hashBuffer = await crypto.subtle.deriveBits({
            name: "PBKDF2",
            salt: saltBytes,
            iterations: 100000,
            hash: "SHA-256"
        }, key, 256 // 32 bytes = 256 bits
        );
        const hashBytes = new Uint8Array(hashBuffer);
        // Combine salt and hash for storage
        // Format: salt (32 bytes) + hash (32 bytes) = 64 bytes total
        const combined = new Uint8Array(64);
        combined.set(saltBytes, 0);
        combined.set(hashBytes, 32);
        // Convert to base64 for storage
        return btoa(String.fromCharCode.apply(null, Array.from(combined)));
    }
    /**
   * Verify password against hash
   * Compatible with Edge Runtime
   */ static async verifyPassword(password, storedHash) {
        try {
            // Decode base64 hash
            const combined = new Uint8Array(atob(storedHash).split("").map((char)=>char.charCodeAt(0)));
            // Extract salt (first 32 bytes) and stored hash (last 32 bytes)
            const salt = combined.slice(0, 32);
            const storedHashBytes = combined.slice(32, 64);
            // Hash the provided password with the same salt
            const passwordBytes = new TextEncoder().encode(password);
            const key = await crypto.subtle.importKey("raw", passwordBytes, {
                name: "PBKDF2"
            }, false, [
                "deriveBits"
            ]);
            const hashBuffer = await crypto.subtle.deriveBits({
                name: "PBKDF2",
                salt: salt,
                iterations: 100000,
                hash: "SHA-256"
            }, key, 256);
            const computedHashBytes = new Uint8Array(hashBuffer);
            // Constant-time comparison to prevent timing attacks
            return this.constantTimeEquals(storedHashBytes, computedHashBytes);
        } catch (error) {
            console.error("Password verification error:", error);
            return false;
        }
    }
    /**
   * Constant-time comparison to prevent timing attacks
   */ static constantTimeEquals(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        let result = 0;
        for(let i = 0; i < a.length; i++){
            result |= a[i] ^ b[i];
        }
        return result === 0;
    }
    /**
   * Generate random password
   * Same functionality as bcryptjs version
   */ static generateRandomPassword(length = 12) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let password = "";
        const randomBytes = crypto.getRandomValues(new Uint8Array(length));
        for(let i = 0; i < length; i++){
            password += chars.charAt(randomBytes[i] % chars.length);
        }
        return password;
    }
    /**
   * Migrate existing bcrypt hash to new format
   * For backward compatibility during migration
   */ static async migrateBcryptHash(password, bcryptHash) {
        // In a real migration, you would verify against bcrypt first
        // then create new hash. For now, just create new hash
        return await this.hashPassword(password);
    }
}
// Export for compatibility
const PasswordUtils = (/* unused pure expression or super */ null && (password_edge_EdgePasswordUtils));

// EXTERNAL MODULE: ./src/lib/database.ts
var database = __webpack_require__(3442);
;// CONCATENATED MODULE: ./src/lib/auth.ts
// Authentication utilities and services



// JWT Configuration
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production";
const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || "15m";
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "7d";
// JWT Utilities
class JWTUtils {
    static getSecret() {
        return new TextEncoder().encode(JWT_SECRET);
    }
    // Generate access token (short-lived)
    static async generateAccessToken(user) {
        const payload = {
            sub: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            type: "access"
        };
        return await new SignJWT(payload).setProtectedHeader({
            alg: "HS256"
        }).setIssuedAt().setExpirationTime(JWT_ACCESS_EXPIRES_IN).sign(this.getSecret());
    }
    // Generate refresh token (long-lived)
    static async generateRefreshToken(user) {
        const payload = {
            sub: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            type: "refresh"
        };
        return await new SignJWT(payload).setProtectedHeader({
            alg: "HS256"
        }).setIssuedAt().setExpirationTime(JWT_REFRESH_EXPIRES_IN).sign(this.getSecret());
    }
    // Verify JWT token
    static async verifyToken(token) {
        try {
            const { payload } = await jwtVerify(token, this.getSecret());
            return {
                success: true,
                payload
            };
        } catch (error) {
            return {
                success: false,
                error: error.message || "Invalid token"
            };
        }
    }
}
// Password utilities
class auth_PasswordUtils {
    // Hash password
    static async hashPassword(password) {
        return await EdgePasswordUtils.hashPassword(password);
    }
    // Verify password
    static async verifyPassword(password, hashedPassword) {
        return await EdgePasswordUtils.verifyPassword(password, hashedPassword);
    }
    // Generate random password
    static generateRandomPassword(length = 12) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let password = "";
        for(let i = 0; i < length; i++){
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }
}
// Rate limiting utilities
class RateLimiter {
    static{
        this.attempts = new Map();
    }
    static isRateLimited(key, maxAttempts = 5, windowMs = 15 * 60 * 1000) {
        const now = Date.now();
        const record = this.attempts.get(key);
        if (!record || now > record.resetTime) {
            this.attempts.set(key, {
                count: 1,
                resetTime: now + windowMs
            });
            return false;
        }
        if (record.count >= maxAttempts) {
            return true;
        }
        record.count++;
        return false;
    }
    static clearAttempts(key) {
        this.attempts.delete(key);
    }
    static resetRateLimit(key) {
        this.attempts.delete(key);
    }
    static cleanup() {
        const now = Date.now();
        const keysToDelete = [];
        this.attempts.forEach((record, key)=>{
            if (now > record.resetTime) {
                keysToDelete.push(key);
            }
        });
        keysToDelete.forEach((key)=>{
            this.attempts.delete(key);
        });
    }
}
// Authentication service
class AuthService {
    // Authenticate user with username/email and password
    static async authenticate(usernameOrEmail, password) {
        try {
            // For now, use hardcoded admin credentials (will be moved to database later)
            if ((usernameOrEmail === "protekadmin" || usernameOrEmail === "admin@protekanalitik.com") && password === "protek1234") {
                const user = {
                    id: "admin-001",
                    username: "protekadmin",
                    email: "admin@protekanalitik.com",
                    first_name: "Admin",
                    last_name: "User",
                    role: "admin",
                    is_active: true,
                    last_login: database/* DatabaseUtils */.l3.formatDate(),
                    created_at: database/* DatabaseUtils */.l3.formatDate(),
                    updated_at: database/* DatabaseUtils */.l3.formatDate()
                };
                // Generate tokens
                const accessToken = await JWTUtils.generateAccessToken(user);
                const refreshToken = await JWTUtils.generateRefreshToken(user);
                return {
                    success: true,
                    user,
                    accessToken,
                    refreshToken
                };
            } else {
                return {
                    success: false,
                    error: "Ge\xe7ersiz kullanıcı adı veya şifre"
                };
            }
        } catch (error) {
            console.error("Authentication error:", error);
            return {
                success: false,
                error: "Kimlik doğrulama sırasında hata oluştu"
            };
        }
    }
    // Refresh access token using refresh token
    static async refreshAccessToken(refreshToken) {
        try {
            const verification = await JWTUtils.verifyToken(refreshToken);
            if (!verification.success || !verification.payload) {
                return {
                    success: false,
                    error: "Ge\xe7ersiz refresh token"
                };
            }
            if (verification.payload.type !== "refresh") {
                return {
                    success: false,
                    error: "Ge\xe7ersiz token tipi"
                };
            }
            // Create user object from token payload
            const user = {
                id: verification.payload.sub,
                username: verification.payload.username,
                email: verification.payload.email,
                role: verification.payload.role,
                is_active: true,
                created_at: database/* DatabaseUtils */.l3.formatDate(),
                updated_at: database/* DatabaseUtils */.l3.formatDate()
            };
            const newAccessToken = await JWTUtils.generateAccessToken(user);
            return {
                success: true,
                user,
                accessToken: newAccessToken,
                refreshToken
            };
        } catch (error) {
            console.error("Token refresh error:", error);
            return {
                success: false,
                error: "Token yenileme sırasında hata oluştu"
            };
        }
    }
    // Verify access token
    static async verifyAccessToken(token) {
        try {
            const verification = await JWTUtils.verifyToken(token);
            if (!verification.success || !verification.payload) {
                return {
                    success: false,
                    error: "Ge\xe7ersiz token"
                };
            }
            if (verification.payload.type !== "access") {
                return {
                    success: false,
                    error: "Ge\xe7ersiz token tipi"
                };
            }
            // Create user object from token payload
            const user = {
                id: verification.payload.sub,
                username: verification.payload.username,
                email: verification.payload.email,
                role: verification.payload.role,
                is_active: true,
                created_at: database/* DatabaseUtils */.l3.formatDate(),
                updated_at: database/* DatabaseUtils */.l3.formatDate()
            };
            return {
                success: true,
                user
            };
        } catch (error) {
            console.error("Token verification error:", error);
            return {
                success: false,
                error: "Token doğrulama sırasında hata oluştu"
            };
        }
    }
    // Check if user has required role
    static hasRole(user, requiredRole) {
        const roleHierarchy = {
            "viewer": 1,
            "editor": 2,
            "admin": 3,
            "super_admin": 4
        };
        return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
    }
    // Generate password reset token
    static async generatePasswordResetToken(userId) {
        const payload = {
            sub: userId,
            type: "password_reset",
            exp: Math.floor(Date.now() / 1000) + 60 * 60 // 1 hour
        };
        return await new SignJWT(payload).setProtectedHeader({
            alg: "HS256"
        }).setIssuedAt().setExpirationTime("1h").sign(JWTUtils["getSecret"]());
    }
    // Verify password reset token
    static async verifyPasswordResetToken(token) {
        try {
            const verification = await JWTUtils.verifyToken(token);
            if (!verification.success || !verification.payload || verification.payload.type !== "password_reset") {
                return {
                    success: false,
                    error: "Ge\xe7ersiz şifre sıfırlama token"
                };
            }
            return {
                success: true,
                userId: verification.payload.sub
            };
        } catch (error) {
            console.error("Password reset token verification error:", error);
            return {
                success: false,
                error: "Token doğrulama sırasında hata oluştu"
            };
        }
    }
}


/***/ }),

/***/ 3442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l3: () => (/* binding */ DatabaseUtils),
/* harmony export */   v$: () => (/* binding */ ValidationUtils)
/* harmony export */ });
/* unused harmony exports getDatabase, executeQuery, executeQueryFirst, executeTransaction */
// Database connection utility for Cloudflare D1
// Database connection helper
function getDatabase() {
    // In development, we'll use a mock or local database
    if (false) {}
    // In production, this will be injected by Cloudflare Workers
    // @ts-ignore - This will be available in the Cloudflare Workers environment
    return globalThis.DB;
}
// Database query helper with error handling
async function executeQuery(db, query, params = []) {
    try {
        const result = await db.prepare(query).bind(...params).all();
        return {
            success: true,
            data: result.results,
            meta: {
                duration: result.meta?.duration,
                changes: result.meta?.changes,
                last_row_id: result.meta?.last_row_id,
                rows_read: result.meta?.rows_read,
                rows_written: result.meta?.rows_written
            }
        };
    } catch (error) {
        console.error("Database query error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown database error"
        };
    }
}
// Database query helper for single row
async function executeQueryFirst(db, query, params = []) {
    try {
        const result = await db.prepare(query).bind(...params).first();
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error("Database query error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown database error"
        };
    }
}
// Database transaction helper
async function executeTransaction(db, queries) {
    try {
        const statements = queries.map(({ query, params = [] })=>db.prepare(query).bind(...params));
        const results = await db.batch(statements);
        return {
            success: true,
            results: results.map((r)=>r.results)
        };
    } catch (error) {
        console.error("Database transaction error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown transaction error"
        };
    }
}
// Utility functions for common database operations
const DatabaseUtils = {
    // Generate UUID for IDs
    generateId: ()=>{
        return crypto.randomUUID();
    },
    // Convert JavaScript object to JSON string for storage
    toJson: (obj)=>{
        return JSON.stringify(obj);
    },
    // Parse JSON string from database
    fromJson: (jsonString)=>{
        if (!jsonString) return null;
        try {
            return JSON.parse(jsonString);
        } catch  {
            return null;
        }
    },
    // Generate slug from title
    generateSlug: (title)=>{
        return title.toLowerCase().replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c").replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    },
    // Format date for database storage
    formatDate: (date = new Date())=>{
        return date.toISOString();
    },
    // Pagination helper
    getPaginationParams: (page = 1, limit = 20)=>{
        const offset = (page - 1) * limit;
        return {
            limit,
            offset
        };
    }
};
// Database validation helpers
const ValidationUtils = {
    isValidEmail: (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    isValidPhone: (phone)=>{
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone);
    },
    isValidUrl: (url)=>{
        try {
            new URL(url);
            return true;
        } catch  {
            return false;
        }
    },
    sanitizeHtml: (html)=>{
        // Basic HTML sanitization - in production, use a proper library like DOMPurify
        return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "").replace(/on\w+="[^"]*"/gi, "");
    }
};


/***/ }),

/***/ 4193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ getD1Database)
/* harmony export */ });
/* unused harmony export isDatabaseAvailable */
/**
 * Database connection utilities for Cloudflare D1
 */ function getD1Database() {
    // In production/Cloudflare Workers environment
    if (typeof globalThis.D1 !== "undefined") {
        return globalThis.D1;
    }
    // In development environment, D1 is not available
    // Return null to trigger fallback behavior
    return null;
}
function isDatabaseAvailable() {
    return getD1Database() !== null;
}


/***/ }),

/***/ 8340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ actionAsyncStorage)
/* harmony export */ });
/* harmony import */ var _async_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9186);

const actionAsyncStorage = (0,_async_local_storage__WEBPACK_IMPORTED_MODULE_0__/* .createAsyncLocalStorage */ .P)(); //# sourceMappingURL=action-async-storage.external.js.map


/***/ }),

/***/ 9186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ createAsyncLocalStorage)
/* harmony export */ });
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 2445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ requestAsyncStorage)
/* harmony export */ });
/* harmony import */ var _async_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9186);

const requestAsyncStorage = (0,_async_local_storage__WEBPACK_IMPORTED_MODULE_0__/* .createAsyncLocalStorage */ .P)(); //# sourceMappingURL=request-async-storage.external.js.map


/***/ }),

/***/ 8823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ staticGenerationAsyncStorage)
/* harmony export */ });
/* harmony import */ var _async_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9186);

const staticGenerationAsyncStorage = (0,_async_local_storage__WEBPACK_IMPORTED_MODULE_0__/* .createAsyncLocalStorage */ .P)(); //# sourceMappingURL=static-generation-async-storage.external.js.map


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(2751));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES)["middleware_app/api/events/route"] = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=route.js.map;
  export default (function () {
    const module = { exports: {}, loaded: false };
    const fn = (function(module,exports) {var b=Object.create;var p=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var h=e=>p(e,"__esModule",{value:!0});var _=(e,n)=>{h(e);for(var t in n)p(e,t,{get:n[t],enumerable:!0})},U=(e,n,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of T(n))!L.call(e,i)&&i!=="default"&&p(e,i,{get:()=>n[i],enumerable:!(t=w(n,i))||t.enumerable});return e},A=e=>U(h(p(e!=null?b(P(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);_(exports,{default:()=>N});var R=A(require("async_hooks")),S="@next/request-context",f=Symbol.for(S),C=Symbol.for("internal.storage");function O(){let e=globalThis;if(!e[f]){let n=new R.AsyncLocalStorage,t={get:()=>n.getStore(),[C]:n};e[f]=t}return e[f]}var q=O();function m(e,n){return q[C].run(e,n)}function y(e){let n={};return e&&e.forEach((t,i)=>{n[i]=t,i.toLowerCase()==="set-cookie"&&(n[i]=M(t))}),n}function M(e){let n=[],t=0,i,a,g,o,r;function x(){for(;t<e.length&&/\s/.test(e.charAt(t));)t+=1;return t<e.length}function s(){return a=e.charAt(t),a!=="="&&a!==";"&&a!==","}for(;t<e.length;){for(i=t,r=!1;x();)if(a=e.charAt(t),a===","){for(g=t,t+=1,x(),o=t;t<e.length&&s();)t+=1;t<e.length&&e.charAt(t)==="="?(r=!0,t=o,n.push(e.substring(i,g)),i=t):t=g+1}else t+=1;(!r||t>=e.length)&&n.push(e.substring(i,e.length))}return n}function N(e){let n=e.staticRoutes.map(i=>({regexp:new RegExp(i.namedRegex),page:i.page})),t=e.dynamicRoutes?.map(i=>({regexp:new RegExp(i.namedRegex),page:i.page}))||[];return async function(a,g){let o=new URL(a.url).pathname,r={};if(e.nextConfig?.basePath&&o.startsWith(e.nextConfig.basePath)&&(o=o.replace(e.nextConfig.basePath,"")||"/"),e.nextConfig?.i18n)for(let s of e.nextConfig.i18n.locales){let u=new RegExp(`^/${s}($|/)`,"i");if(o.match(u)){o=o.replace(u,"/")||"/";break}}for(let s of n)if(s.regexp.exec(o)){r.name=s.page;break}if(!r.name){let s=E(o);for(let u of t||[]){if(s&&!E(u.page))continue;let d=u.regexp.exec(o);if(d){r={name:u.page,params:d.groups};break}}}let x=await m({waitUntil:g.waitUntil},()=>_ENTRIES[`middleware_${e.name}`].default.call({},{request:{url:a.url,method:a.method,headers:y(a.headers),ip:c(a.headers,l.Ip),geo:{city:c(a.headers,l.City,!0),country:c(a.headers,l.Country,!0),latitude:c(a.headers,l.Latitude),longitude:c(a.headers,l.Longitude),region:c(a.headers,l.Region,!0)},nextConfig:e.nextConfig,page:r,body:a.body}}));return x.waitUntil&&g.waitUntil(x.waitUntil),x.response}}function c(e,n,t=!1){let i=e.get(n)||void 0;return t&&i?decodeURIComponent(i):i}function E(e){return e==="/api"||e.startsWith("/api/")}var l;(function(o){o.City="x-vercel-ip-city",o.Country="x-vercel-ip-country",o.Ip="x-real-ip",o.Latitude="x-vercel-ip-latitude",o.Longitude="x-vercel-ip-longitude",o.Region="x-vercel-ip-country-region"})(l||(l={}));

});
    fn(module, module.exports);
    return module.exports;
  }).call({}).default(
    {"name":"app/api/events/route","staticRoutes":[{"page":"/","regex":"^/(?:/)?$","routeKeys":{},"namedRegex":"^/(?:/)?$"},{"page":"/_not-found","regex":"^/_not\\-found(?:/)?$","routeKeys":{},"namedRegex":"^/_not\\-found(?:/)?$"},{"page":"/admin","regex":"^/admin(?:/)?$","routeKeys":{},"namedRegex":"^/admin(?:/)?$"},{"page":"/admin/categories","regex":"^/admin/categories(?:/)?$","routeKeys":{},"namedRegex":"^/admin/categories(?:/)?$"},{"page":"/admin/contact","regex":"^/admin/contact(?:/)?$","routeKeys":{},"namedRegex":"^/admin/contact(?:/)?$"},{"page":"/admin/contact/messages","regex":"^/admin/contact/messages(?:/)?$","routeKeys":{},"namedRegex":"^/admin/contact/messages(?:/)?$"},{"page":"/admin/products","regex":"^/admin/products(?:/)?$","routeKeys":{},"namedRegex":"^/admin/products(?:/)?$"},{"page":"/admin/products/new","regex":"^/admin/products/new(?:/)?$","routeKeys":{},"namedRegex":"^/admin/products/new(?:/)?$"},{"page":"/admin/resources","regex":"^/admin/resources(?:/)?$","routeKeys":{},"namedRegex":"^/admin/resources(?:/)?$"},{"page":"/admin/resources/events/new","regex":"^/admin/resources/events/new(?:/)?$","routeKeys":{},"namedRegex":"^/admin/resources/events/new(?:/)?$"},{"page":"/admin/resources/news/new","regex":"^/admin/resources/news/new(?:/)?$","routeKeys":{},"namedRegex":"^/admin/resources/news/new(?:/)?$"},{"page":"/cozumler","regex":"^/cozumler(?:/)?$","routeKeys":{},"namedRegex":"^/cozumler(?:/)?$"},{"page":"/cozumler/anahtar-teslim-projeler","regex":"^/cozumler/anahtar\\-teslim\\-projeler(?:/)?$","routeKeys":{},"namedRegex":"^/cozumler/anahtar\\-teslim\\-projeler(?:/)?$"},{"page":"/cozumler/ar-ge-laboratuvarlari","regex":"^/cozumler/ar\\-ge\\-laboratuvarlari(?:/)?$","routeKeys":{},"namedRegex":"^/cozumler/ar\\-ge\\-laboratuvarlari(?:/)?$"},{"page":"/cozumler/endustriyel-laboratuvar-kurulumu","regex":"^/cozumler/endustriyel\\-laboratuvar\\-kurulumu(?:/)?$","routeKeys":{},"namedRegex":"^/cozumler/endustriyel\\-laboratuvar\\-kurulumu(?:/)?$"},{"page":"/cozumler/kalite-guvence-sistemleri","regex":"^/cozumler/kalite\\-guvence\\-sistemleri(?:/)?$","routeKeys":{},"namedRegex":"^/cozumler/kalite\\-guvence\\-sistemleri(?:/)?$"},{"page":"/cozumler/otomasyon-sistemleri","regex":"^/cozumler/otomasyon\\-sistemleri(?:/)?$","routeKeys":{},"namedRegex":"^/cozumler/otomasyon\\-sistemleri(?:/)?$"},{"page":"/hakkimizda","regex":"^/hakkimizda(?:/)?$","routeKeys":{},"namedRegex":"^/hakkimizda(?:/)?$"},{"page":"/iletisim","regex":"^/iletisim(?:/)?$","routeKeys":{},"namedRegex":"^/iletisim(?:/)?$"},{"page":"/kaynaklar","regex":"^/kaynaklar(?:/)?$","routeKeys":{},"namedRegex":"^/kaynaklar(?:/)?$"},{"page":"/login","regex":"^/login(?:/)?$","routeKeys":{},"namedRegex":"^/login(?:/)?$"},{"page":"/sektorler","regex":"^/sektorler(?:/)?$","routeKeys":{},"namedRegex":"^/sektorler(?:/)?$"},{"page":"/teklif-al","regex":"^/teklif\\-al(?:/)?$","routeKeys":{},"namedRegex":"^/teklif\\-al(?:/)?$"},{"page":"/urunler","regex":"^/urunler(?:/)?$","routeKeys":{},"namedRegex":"^/urunler(?:/)?$"}],"dynamicRoutes":[{"page":"/admin/products/[id]/edit","regex":"^/admin/products/([^/]+?)/edit(?:/)?$","routeKeys":{"nxtPid":"nxtPid"},"namedRegex":"^/admin/products/(?<nxtPid>[^/]+?)/edit(?:/)?$"},{"page":"/admin/resources/events/[id]/edit","regex":"^/admin/resources/events/([^/]+?)/edit(?:/)?$","routeKeys":{"nxtPid":"nxtPid"},"namedRegex":"^/admin/resources/events/(?<nxtPid>[^/]+?)/edit(?:/)?$"},{"page":"/admin/resources/news/edit/[id]","regex":"^/admin/resources/news/edit/([^/]+?)(?:/)?$","routeKeys":{"nxtPid":"nxtPid"},"namedRegex":"^/admin/resources/news/edit/(?<nxtPid>[^/]+?)(?:/)?$"},{"page":"/api/events/[id]","regex":"^/api/events/([^/]+?)(?:/)?$","routeKeys":{"nxtPid":"nxtPid"},"namedRegex":"^/api/events/(?<nxtPid>[^/]+?)(?:/)?$"},{"page":"/api/news/[id]","regex":"^/api/news/([^/]+?)(?:/)?$","routeKeys":{"nxtPid":"nxtPid"},"namedRegex":"^/api/news/(?<nxtPid>[^/]+?)(?:/)?$"},{"page":"/api/products/[id]","regex":"^/api/products/([^/]+?)(?:/)?$","routeKeys":{"nxtPid":"nxtPid"},"namedRegex":"^/api/products/(?<nxtPid>[^/]+?)(?:/)?$"},{"page":"/kaynaklar/etkinlik/[id]","regex":"^/kaynaklar/etkinlik/([^/]+?)(?:/)?$","routeKeys":{"nxtPid":"nxtPid"},"namedRegex":"^/kaynaklar/etkinlik/(?<nxtPid>[^/]+?)(?:/)?$"},{"page":"/kaynaklar/haber/[id]","regex":"^/kaynaklar/haber/([^/]+?)(?:/)?$","routeKeys":{"nxtPid":"nxtPid"},"namedRegex":"^/kaynaklar/haber/(?<nxtPid>[^/]+?)(?:/)?$"},{"page":"/urunler/[category]","regex":"^/urunler/([^/]+?)(?:/)?$","routeKeys":{"nxtPcategory":"nxtPcategory"},"namedRegex":"^/urunler/(?<nxtPcategory>[^/]+?)(?:/)?$"},{"page":"/urunler/[category]/[subcategory]","regex":"^/urunler/([^/]+?)/([^/]+?)(?:/)?$","routeKeys":{"nxtPcategory":"nxtPcategory","nxtPsubcategory":"nxtPsubcategory"},"namedRegex":"^/urunler/(?<nxtPcategory>[^/]+?)/(?<nxtPsubcategory>[^/]+?)(?:/)?$"},{"page":"/urunler/[category]/[subcategory]/[product]","regex":"^/urunler/([^/]+?)/([^/]+?)/([^/]+?)(?:/)?$","routeKeys":{"nxtPcategory":"nxtPcategory","nxtPsubcategory":"nxtPsubcategory","nxtPproduct":"nxtPproduct"},"namedRegex":"^/urunler/(?<nxtPcategory>[^/]+?)/(?<nxtPsubcategory>[^/]+?)/(?<nxtPproduct>[^/]+?)(?:/)?$"}],"nextConfig":{"basePath":""}}
  )