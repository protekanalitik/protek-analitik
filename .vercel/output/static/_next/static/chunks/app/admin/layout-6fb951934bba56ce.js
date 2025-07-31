(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9091],{

/***/ 3007:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9459))

/***/ }),

/***/ 9459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AdminLayout; },
  dynamic: function() { return /* binding */ dynamic; },
  runtime: function() { return /* binding */ runtime; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(6691);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4033);
;// CONCATENATED MODULE: ./src/hooks/useAuth.ts
/* __next_internal_client_entry_do_not_use__ useAuth auto */ 

function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = (0,react.useState)(false);
    const [loading, setLoading] = (0,react.useState)(true);
    const [user, setUser] = (0,react.useState)(null);
    const [error, setError] = (0,react.useState)(null);
    const router = (0,navigation.useRouter)();
    // Check authentication status
    const checkAuth = (0,react.useCallback)(async ()=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("/api/auth/me", {
                credentials: "include" // Include cookies
            });
            if (response.ok) {
                const data = await response.json();
                if (data.success && data.data.user) {
                    setIsAuthenticated(true);
                    setUser(data.data.user);
                    return true;
                }
            }
            // If /api/auth/me fails, try to refresh token
            const refreshResponse = await fetch("/api/auth/refresh", {
                method: "POST",
                credentials: "include"
            });
            if (refreshResponse.ok) {
                const refreshData = await refreshResponse.json();
                if (refreshData.success && refreshData.data.user) {
                    setIsAuthenticated(true);
                    setUser(refreshData.data.user);
                    return true;
                }
            }
            // Authentication failed
            setIsAuthenticated(false);
            setUser(null);
            // Clear localStorage tokens
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("user");
            return false;
        } catch (error) {
            console.error("Auth check error:", error);
            setError("Kimlik doğrulama kontrol\xfc sırasında hata oluştu");
            setIsAuthenticated(false);
            setUser(null);
            return false;
        } finally{
            setLoading(false);
        }
    }, []);
    // Login function
    const login = async function(usernameOrEmail, password) {
        let rememberMe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    usernameOrEmail,
                    password,
                    rememberMe
                })
            });
            const data = await response.json();
            if (data.success) {
                setIsAuthenticated(true);
                setUser(data.data.user);
                // Store tokens in localStorage as backup
                localStorage.setItem("accessToken", data.data.accessToken);
                localStorage.setItem("refreshToken", data.data.refreshToken);
                localStorage.setItem("user", JSON.stringify(data.data.user));
                return {
                    success: true,
                    user: data.data.user
                };
            } else {
                setError(data.error || "Giriş başarısız");
                return {
                    success: false,
                    error: data.error
                };
            }
        } catch (error) {
            const errorMessage = "Bağlantı hatası oluştu";
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setLoading(false);
        }
    };
    // Logout function
    const logout = async ()=>{
        try {
            // Call logout API
            await fetch("/api/auth/logout", {
                method: "POST",
                credentials: "include"
            });
        } catch (error) {
            console.error("Logout API error:", error);
        } finally{
            // Clear local state regardless of API success
            setIsAuthenticated(false);
            setUser(null);
            setError(null);
            // Clear localStorage
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("user");
            // Redirect to login
            router.push("/login");
        }
    };
    // Redirect to login with current path
    const redirectToLogin = ()=>{
        const currentPath = window.location.pathname;
        const loginUrl = currentPath === "/login" ? "/login" : "/login?redirect=".concat(encodeURIComponent(currentPath));
        router.push(loginUrl);
    };
    // Refresh access token
    const refreshToken = async ()=>{
        try {
            const response = await fetch("/api/auth/refresh", {
                method: "POST",
                credentials: "include"
            });
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    // Update localStorage
                    localStorage.setItem("accessToken", data.data.accessToken);
                    localStorage.setItem("user", JSON.stringify(data.data.user));
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error("Token refresh error:", error);
            return false;
        }
    };
    // Check if user has required role
    const hasRole = (requiredRole)=>{
        if (!user) return false;
        const roleHierarchy = {
            viewer: 1,
            editor: 2,
            admin: 3,
            super_admin: 4
        };
        return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
    };
    // Initialize auth check on mount
    (0,react.useEffect)(()=>{
        checkAuth();
    }, [
        checkAuth
    ]);
    return {
        isAuthenticated,
        loading,
        user,
        error,
        login,
        logout,
        redirectToLogin,
        checkAuth,
        refreshToken,
        hasRole
    };
}

;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowLeftOnRectangleIcon.js

/** @deprecated */
function ArrowLeftOnRectangleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
  }));
}
const ForwardRef = /*#__PURE__*/ react.forwardRef(ArrowLeftOnRectangleIcon);
/* harmony default export */ var esm_ArrowLeftOnRectangleIcon = (ForwardRef);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(9874);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js
var ChatBubbleLeftRightIcon = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CogIcon.js
var CogIcon = __webpack_require__(9010);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CubeIcon.js
var CubeIcon = __webpack_require__(6551);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js
var DocumentTextIcon = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js
var HomeIcon = __webpack_require__(4992);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/InboxIcon.js

function InboxIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
  }));
}
const InboxIcon_ForwardRef = /*#__PURE__*/ react.forwardRef(InboxIcon);
/* harmony default export */ var esm_InboxIcon = (InboxIcon_ForwardRef);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/UsersIcon.js
var UsersIcon = __webpack_require__(1615);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(6689);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowLeftOnRectangleIcon,Bars3Icon,ChatBubbleLeftRightIcon,CogIcon,CubeIcon,DocumentTextIcon,HomeIcon,InboxIcon,UsersIcon,XMarkIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js











;// CONCATENATED MODULE: ./src/app/admin/layout.tsx
/* __next_internal_client_entry_do_not_use__ dynamic,runtime,default auto */ 






const layout_navigation = [
    {
        name: "Dashboard",
        href: "/admin",
        icon: HomeIcon/* default */.Z
    },
    {
        name: "\xdcr\xfcnler",
        href: "/admin/products",
        icon: CubeIcon/* default */.Z
    },
    {
        name: "Kategoriler",
        href: "/admin/categories",
        icon: CogIcon/* default */.Z
    },
    {
        name: "Kaynaklar",
        href: "/admin/resources",
        icon: DocumentTextIcon/* default */.Z
    },
    {
        name: "İletişim Bilgileri",
        href: "/admin/contact",
        icon: ChatBubbleLeftRightIcon/* default */.Z
    },
    {
        name: "İletişim Mesajları",
        href: "/admin/contact/messages",
        icon: esm_InboxIcon
    },
    {
        name: "Edge Runtime",
        href: "/admin/edge-runtime",
        icon: UsersIcon/* default */.Z
    }
];
const dynamic = "force-dynamic";
const runtime = "edge";
function AdminLayout(param) {
    let { children } = param;
    const [sidebarOpen, setSidebarOpen] = (0,react.useState)(false);
    const pathname = (0,navigation.usePathname)();
    const { isAuthenticated, loading, user, error, logout, redirectToLogin } = useAuth();
    // Show loading spinner while checking authentication
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-gray-600",
                        children: "Kimlik doğrulama kontrol ediliyor..."
                    })
                ]
            })
        });
    }
    // Show error if authentication failed
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "font-medium",
                                children: "Kimlik Doğrulama Hatası"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm",
                                children: error
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: ()=>window.location.reload(),
                        className: "bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors",
                        children: "Tekrar Dene"
                    })
                ]
            })
        });
    }
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        redirectToLogin();
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-gray-600",
                    children: "Giriş sayfasına y\xf6nlendiriliyorsunuz..."
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-gray-50 flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "fixed inset-0 z-50 lg:hidden ".concat(sidebarOpen ? "" : "hidden"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "fixed inset-0 bg-black bg-opacity-50",
                        onClick: ()=>setSidebarOpen(false)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "fixed left-0 top-0 h-full w-64 bg-white shadow-lg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between p-6 border-b",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                        src: "/images/logo-protek.png",
                                        alt: "Protek Analitik Logo",
                                        width: 80,
                                        height: 80,
                                        className: "w-20 h-20 object-contain"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: ()=>setSidebarOpen(false),
                                        className: "p-2 rounded-md text-gray-400 hover:text-gray-600",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(XMarkIcon/* default */.Z, {
                                            className: "w-5 h-5"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                                className: "p-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                    className: "space-y-2",
                                    children: layout_navigation.map((item)=>{
                                        const isActive = pathname === item.href;
                                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: item.href,
                                                className: "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ".concat(isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"),
                                                onClick: ()=>setSidebarOpen(false),
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(item.icon, {
                                                        className: "w-5 h-5"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: item.name
                                                    })
                                                ]
                                            })
                                        }, item.name);
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute bottom-4 left-4 right-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: "/",
                                    className: "flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowLeftOnRectangleIcon, {
                                            className: "w-5 h-5"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Ana Siteye D\xf6n"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:bg-white lg:border-r lg:border-gray-200",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-center h-20 px-4 py-3 border-b border-gray-200",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                            src: "/images/logo-protek.png",
                            alt: "Protek Analitik Logo",
                            width: 120,
                            height: 120,
                            className: "w-28 h-28 object-contain"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                        className: "flex-1 p-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                            className: "space-y-2",
                            children: layout_navigation.map((item)=>{
                                const isActive = pathname === item.href;
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: item.href,
                                        className: "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ".concat(isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(item.icon, {
                                                className: "w-5 h-5"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: item.name
                                            })
                                        ]
                                    })
                                }, item.name);
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "p-6 border-t border-gray-200",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: "/",
                            className: "flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowLeftOnRectangleIcon, {
                                    className: "w-5 h-5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Ana Siteye D\xf6n"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex-1 lg:ml-64",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "bg-white border-b border-gray-200 px-4 py-4 lg:px-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    onClick: ()=>setSidebarOpen(true),
                                    className: "lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Bars3Icon/* default */.Z, {
                                        className: "w-6 h-6"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "Protek Analitik CMS"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Hoş geldiniz, "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "font-medium",
                                                    children: (user === null || user === void 0 ? void 0 : user.first_name) && (user === null || user === void 0 ? void 0 : user.last_name) ? "".concat(user.first_name, " ").concat(user.last_name) : (user === null || user === void 0 ? void 0 : user.username) || "Kullanıcı"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "text-xs text-gray-400 ml-2",
                                                    children: [
                                                        "(",
                                                        user === null || user === void 0 ? void 0 : user.role,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: logout,
                                            className: "flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowLeftOnRectangleIcon, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "\xc7ıkış"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "p-4 lg:p-8 max-w-full overflow-x-auto",
                            children: children
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1615:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function UsersIcon({
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
    d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UsersIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,2695,2971,993,1744], function() { return __webpack_exec__(3007); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);