(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1931],{

/***/ 232:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6039))

/***/ }),

/***/ 4930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return dynamic;
    }
}));
const _interop_require_default = __webpack_require__(1024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _loadable = /*#__PURE__*/ _interop_require_default._(__webpack_require__(4795));
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    return {
        default: (mod == null ? void 0 : mod.default) || mod
    };
}
function dynamic(dynamicOptions, options) {
    const loadableFn = _loadable.default;
    const loadableOptions = {
        // A loading component is not required, so we default it
        loading: (param)=>{
            let { error, isLoading, pastDelay } = param;
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    if (typeof dynamicOptions === "function") {
        loadableOptions.loader = dynamicOptions;
    }
    Object.assign(loadableOptions, options);
    const loaderFn = loadableOptions.loader;
    const loader = ()=>loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(()=>null));
    return loadableFn({
        ...loadableOptions,
        loader: loader
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map


/***/ }),

/***/ 6005:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NoSSR", ({
    enumerable: true,
    get: function() {
        return NoSSR;
    }
}));
const _nossrerror = __webpack_require__(6491);
function NoSSR(param) {
    let { children } = param;
    if (false) {}
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 4795:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(1024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _dynamicnossr = __webpack_require__(6005);
function Loadable(options) {
    const opts = Object.assign({
        loader: null,
        loading: null,
        ssr: true
    }, options);
    opts.lazy = /*#__PURE__*/ _react.default.lazy(opts.loader);
    function LoadableComponent(props) {
        const Loading = opts.loading;
        const fallbackElement = /*#__PURE__*/ _react.default.createElement(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        });
        const Wrap = opts.ssr ? _react.default.Fragment : _dynamicnossr.NoSSR;
        const Lazy = opts.lazy;
        return /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, {
            fallback: fallbackElement
        }, /*#__PURE__*/ _react.default.createElement(Wrap, null, /*#__PURE__*/ _react.default.createElement(Lazy, props)));
    }
    LoadableComponent.displayName = "LoadableComponent";
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map


/***/ }),

/***/ 6039:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomePage; },
/* harmony export */   dynamic: function() { return /* binding */ dynamic; },
/* harmony export */   runtime: function() { return /* binding */ runtime; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4930);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5330);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1422);
/* __next_internal_client_entry_do_not_use__ dynamic,runtime,default auto */ 



// Dynamic imports to reduce bundle size (safe optimization)
const Hero = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 2257).then(__webpack_require__.bind(__webpack_require__, 2257)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(2257)
            ]
    }
});
const Features = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 4116).then(__webpack_require__.bind(__webpack_require__, 4116)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(4116)
            ]
    }
});
const Solutions = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 2386).then(__webpack_require__.bind(__webpack_require__, 2386)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(2386)
            ]
    }
});
const Products = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2958), __webpack_require__.e(6359)]).then(__webpack_require__.bind(__webpack_require__, 6359)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(6359)
            ]
    }
});
const Clients = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 4655).then(__webpack_require__.bind(__webpack_require__, 4655)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(4655)
            ]
    }
});
const Sectors = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 2355).then(__webpack_require__.bind(__webpack_require__, 2355)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(2355)
            ]
    }
});
const About = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 2707).then(__webpack_require__.bind(__webpack_require__, 2707)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(2707)
            ]
    }
});
const Contact = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 3166).then(__webpack_require__.bind(__webpack_require__, 3166)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(3166)
            ]
    }
});
// Force dynamic rendering to prevent static generation errors
const dynamic = "force-dynamic";
// Use Edge Runtime for Cloudflare Pages compatibility
const runtime = "edge";
function HomePage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Hero, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Features, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Solutions, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Products, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Clients, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Sectors, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(About, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Contact, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,9751,4166,3466,5330,1422,2971,993,1744], function() { return __webpack_exec__(232); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);