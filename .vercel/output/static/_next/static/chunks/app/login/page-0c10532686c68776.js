(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2626],{

/***/ 1837:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5021))

/***/ }),

/***/ 5021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ LoginPage; },
  dynamic: function() { return /* binding */ dynamic; },
  runtime: function() { return /* binding */ runtime; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4033);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js
var EyeIcon = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EyeSlashIcon.js
var EyeSlashIcon = __webpack_require__(1543);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/LockClosedIcon.js
var LockClosedIcon = __webpack_require__(4238);
;// CONCATENATED MODULE: __barrel_optimize__?names=EyeIcon,EyeSlashIcon,LockClosedIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js




;// CONCATENATED MODULE: ./src/app/login/page.tsx
/* __next_internal_client_entry_do_not_use__ dynamic,runtime,default auto */ 



// Force dynamic rendering to prevent static generation errors
const dynamic = "force-dynamic";
// Use Edge Runtime for Cloudflare Pages compatibility
const runtime = "edge";
function LoginPage() {
    const [usernameOrEmail, setUsernameOrEmail] = (0,react.useState)("");
    const [password, setPassword] = (0,react.useState)("");
    const [rememberMe, setRememberMe] = (0,react.useState)(false);
    const [showPassword, setShowPassword] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)("");
    const [loading, setLoading] = (0,react.useState)(false);
    const router = (0,navigation.useRouter)();
    const searchParams = (0,navigation.useSearchParams)();
    const redirectTo = searchParams.get("redirect") || "/admin";
    // Check if user is already logged in
    (0,react.useEffect)(()=>{
        const checkAuth = async ()=>{
            try {
                const response = await fetch("/api/auth/me");
                if (response.ok) {
                    router.push(redirectTo);
                }
            } catch (error) {
            // User not authenticated, stay on login page
            }
        };
        checkAuth();
    }, [
        router,
        redirectTo
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usernameOrEmail,
                    password,
                    rememberMe
                })
            });
            const data = await response.json();
            if (data.success) {
                // Store tokens in localStorage as backup (cookies are primary)
                localStorage.setItem("accessToken", data.data.accessToken);
                localStorage.setItem("refreshToken", data.data.refreshToken);
                localStorage.setItem("user", JSON.stringify(data.data.user));
                // Redirect to intended page
                router.push(redirectTo);
            } else {
                setError(data.error || "Giriş başarısız");
                // Show specific error messages
                if (data.code === "RATE_LIMITED") {
                    setError("\xc7ok fazla giriş denemesi. L\xfctfen 15 dakika sonra tekrar deneyin.");
                }
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("Bağlantı hatası oluştu. L\xfctfen tekrar deneyin.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-md w-full space-y-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LockClosedIcon/* default */.Z, {
                                className: "h-6 w-6 text-indigo-600"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
                            children: "Admin Panel Girişi"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "mt-2 text-center text-sm text-gray-600",
                            children: "Protek Analitik CMS y\xf6netim paneline erişim"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                    className: "mt-8 space-y-6",
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "rounded-md shadow-sm -space-y-px",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            htmlFor: "usernameOrEmail",
                                            className: "sr-only",
                                            children: "Kullanıcı Adı veya E-posta"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            id: "usernameOrEmail",
                                            name: "usernameOrEmail",
                                            type: "text",
                                            autoComplete: "username",
                                            required: true,
                                            value: usernameOrEmail,
                                            onChange: (e)=>setUsernameOrEmail(e.target.value),
                                            className: "relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
                                            placeholder: "Kullanıcı Adı veya E-posta"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            htmlFor: "password",
                                            className: "sr-only",
                                            children: "Şifre"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            id: "password",
                                            name: "password",
                                            type: showPassword ? "text" : "password",
                                            autoComplete: "current-password",
                                            required: true,
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            className: "relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
                                            placeholder: "Şifre"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            type: "button",
                                            className: "absolute inset-y-0 right-0 pr-3 flex items-center",
                                            onClick: ()=>setShowPassword(!showPassword),
                                            children: showPassword ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeSlashIcon/* default */.Z, {
                                                className: "h-5 w-5 text-gray-400"
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeIcon/* default */.Z, {
                                                className: "h-5 w-5 text-gray-400"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            id: "remember-me",
                                            name: "remember-me",
                                            type: "checkbox",
                                            checked: rememberMe,
                                            onChange: (e)=>setRememberMe(e.target.checked),
                                            className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            htmlFor: "remember-me",
                                            className: "ml-2 block text-sm text-gray-900",
                                            children: "Beni hatırla"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-sm",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: "font-medium text-indigo-600 hover:text-indigo-500",
                                        children: "Şifremi unuttum"
                                    })
                                })
                            ]
                        }),
                        error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm",
                            children: error
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "submit",
                                disabled: loading,
                                className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                        }),
                                        "Giriş yapılıyor..."
                                    ]
                                }) : "Giriş Yap"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "/",
                                className: "text-indigo-600 hover:text-indigo-500 text-sm font-medium transition-colors",
                                children: "← Ana sayfaya d\xf6n"
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 622:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/*
 React
 react-jsx-runtime.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var f=__webpack_require__(2265),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;

//# sourceMappingURL=react-jsx-runtime.production.min.js.map


/***/ }),

/***/ 7437:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(622);
} else {}


/***/ }),

/***/ 4033:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5313)


/***/ }),

/***/ 9367:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function EyeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EyeIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 1543:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function EyeSlashIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EyeSlashIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 4238:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function LockClosedIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LockClosedIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2971,993,1744], function() { return __webpack_exec__(1837); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);