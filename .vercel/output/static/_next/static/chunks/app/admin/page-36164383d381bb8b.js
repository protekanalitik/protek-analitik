(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3],{

/***/ 2292:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 679))

/***/ }),

/***/ 679:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdminDashboard; },
/* harmony export */   dynamic: function() { return /* binding */ dynamic; },
/* harmony export */   runtime: function() { return /* binding */ runtime; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1396);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6551);
/* harmony import */ var _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7038);
/* harmony import */ var _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6610);
/* harmony import */ var _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1253);
/* harmony import */ var _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3298);
/* harmony import */ var _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9367);
/* __next_internal_client_entry_do_not_use__ dynamic,runtime,default auto */ 

// Force dynamic rendering to prevent static generation errors
const dynamic = "force-dynamic";
// Use Edge Runtime for Cloudflare Pages compatibility
const runtime = "edge";


function AdminDashboard() {
    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        totalProducts: 0,
        totalCategories: 0,
        totalNews: 0,
        totalEvents: 0
    });
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [recentNews, setRecentNews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Fetch stats from API with authentication
    const fetchStats = async ()=>{
        try {
            setLoading(true);
            // Fetch data with credentials for authentication
            const [productsRes, newsRes, eventsRes, categoriesRes] = await Promise.all([
                fetch("/api/products", {
                    credentials: "include"
                }),
                fetch("/api/news", {
                    credentials: "include"
                }),
                fetch("/api/events", {
                    credentials: "include"
                }),
                fetch("/api/categories", {
                    credentials: "include"
                })
            ]);
            const productsData = await productsRes.json();
            const newsData = await newsRes.json();
            const eventsData = await eventsRes.json();
            const categoriesData = await categoriesRes.json();
            // Handle new API response format
            if (productsData.success && Array.isArray(productsData.data)) {
                var _newsData_data, _eventsData_data;
                const products = productsData.data;
                const categories = categoriesData.success ? categoriesData.data.categories.length : new Set(products.map((p)=>p.category)).size;
                setStats({
                    totalProducts: products.length,
                    totalCategories: categories,
                    totalNews: newsData.success ? ((_newsData_data = newsData.data) === null || _newsData_data === void 0 ? void 0 : _newsData_data.length) || 0 : 0,
                    totalEvents: eventsData.success ? ((_eventsData_data = eventsData.data) === null || _eventsData_data === void 0 ? void 0 : _eventsData_data.length) || 0 : 0
                });
                // Set recent news with proper data handling
                if (newsData.success && Array.isArray(newsData.data)) {
                    setRecentNews(newsData.data.slice(0, 3));
                }
            } else {
                var _newsData_data1, _eventsData_data1;
                // API error, use default values
                setStats({
                    totalProducts: 0,
                    totalCategories: 0,
                    totalNews: newsData.success ? ((_newsData_data1 = newsData.data) === null || _newsData_data1 === void 0 ? void 0 : _newsData_data1.length) || 0 : 0,
                    totalEvents: eventsData.success ? ((_eventsData_data1 = eventsData.data) === null || _eventsData_data1 === void 0 ? void 0 : _eventsData_data1.length) || 0 : 0
                });
                // Set recent news even if products failed
                if (newsData.success && Array.isArray(newsData.data)) {
                    setRecentNews(newsData.data.slice(0, 3));
                }
            }
        } catch (error) {
            console.error("Dashboard istatistikleri y\xfcklenirken hata:", error);
            // Error, use default values
            setStats({
                totalProducts: 0,
                totalCategories: 0,
                totalNews: 0,
                totalEvents: 0
            });
            setRecentNews([]);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchStats();
    }, []);
    const dashboardCards = [
        {
            title: "Toplam \xdcr\xfcn",
            value: loading ? "..." : stats.totalProducts,
            icon: _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            color: "blue",
            link: "/admin/products"
        },
        {
            title: "Kategori Sayısı",
            value: loading ? "..." : stats.totalCategories,
            icon: _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            color: "green",
            link: "/admin/categories"
        },
        {
            title: "Haber Sayısı",
            value: stats.totalNews,
            icon: _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            color: "purple",
            link: "/admin/resources"
        },
        {
            title: "Etkinlik Sayısı",
            value: stats.totalEvents,
            icon: _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            color: "orange",
            link: "/admin/resources"
        }
    ];
    const quickActions = [
        {
            title: "Yeni \xdcr\xfcn Ekle",
            description: "Sisteme yeni \xfcr\xfcn kaydet",
            icon: _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            link: "/admin/products/new",
            color: "blue"
        },
        {
            title: "Haber Ekle",
            description: "Yeni haber yazısı oluştur",
            icon: _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            link: "/admin/resources/news/new",
            color: "green"
        },
        {
            title: "Etkinlik Ekle",
            description: "Yeni etkinlik duyurusu ekle",
            icon: _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            link: "/admin/resources/events/new",
            color: "purple"
        },
        {
            title: "İletişim D\xfczenle",
            description: "İletişim sayfa i\xe7eriklerini g\xfcncelle",
            icon: _barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            link: "/admin/contact",
            color: "orange"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "Dashboard"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                className: "text-gray-600 mt-2",
                                children: "Protek Analitik CMS y\xf6netim paneline hoş geldiniz"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: fetchStats,
                        className: "bg-gray-100 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200 text-sm",
                        disabled: loading,
                        children: loading ? "⏳ Y\xfckleniyor..." : "\uD83D\uDD04 Yenile"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: dashboardCards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: card.link,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-sm font-medium text-gray-600",
                                                children: card.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-3xl font-bold text-gray-900",
                                                children: card.value
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "p-3 rounded-lg bg-".concat(card.color, "-100"),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(card.icon, {
                                            className: "w-6 h-6 text-".concat(card.color, "-600")
                                        })
                                    })
                                ]
                            })
                        })
                    }, index))
            }),
            !loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "bg-green-50 border border-green-200 rounded-lg p-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "w-2 h-2 bg-green-500 rounded-full"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-green-700 text-sm font-medium",
                            children: [
                                "✅ API Bağlantısı Aktif - ",
                                stats.totalProducts,
                                " \xfcr\xfcn başarıyla y\xfcklendi"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: quickActions.map((action, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: action.link,
                        className: "flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition group text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "p-3 rounded-full bg-".concat(action.color, "-100 mb-2"),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(action.icon, {
                                    className: "w-6 h-6 text-".concat(action.color, "-600")
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "font-semibold text-gray-800 mb-1 group-hover:text-${action.color}-700 transition-colors",
                                children: action.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-xs text-gray-500",
                                children: action.description
                            })
                        ]
                    }, idx))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: "Son Haberler"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/admin/resources",
                                        className: "text-blue-600 hover:text-blue-700 text-sm font-medium",
                                        children: "T\xfcm\xfcn\xfc G\xf6r"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "space-y-3",
                                children: recentNews.map((news)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "border-b border-gray-100 pb-3 last:border-b-0",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "font-medium text-gray-900 text-sm mb-1",
                                                children: news.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-xs text-gray-500",
                                                children: news.publishDate
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center space-x-2 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "px-2 py-1 text-xs rounded-full ".concat(news.category === "sirket-haberleri" ? "bg-blue-100 text-blue-800" : news.category === "sektor-guncel" ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"),
                                                        children: news.category === "sirket-haberleri" ? "Şirket" : news.category === "sektor-guncel" ? "Sekt\xf6r" : "Başarı"
                                                    }),
                                                    news.featured && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full",
                                                        children: "\xd6ne \xc7ıkan"
                                                    })
                                                ]
                                            })
                                        ]
                                    }, news.id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                className: "text-lg font-semibold text-gray-900 mb-4",
                                children: "Sistem Bilgileri"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-sm text-gray-600",
                                                children: "Sistem Durumu"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",
                                                children: "\xc7evrimi\xe7i"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-sm text-gray-600",
                                                children: "API Durumu"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "px-2 py-1 text-xs rounded-full ".concat(loading ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"),
                                                children: loading ? "Y\xfckleniyor..." : "Bağlı"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-sm text-gray-600",
                                                children: "Son G\xfcncelleme"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-sm font-medium text-gray-900",
                                                children: new Date().toLocaleDateString("tr-TR")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-sm text-gray-600",
                                                children: "Versiyon"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-sm font-medium text-gray-900",
                                                children: "v1.0.0"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "pt-4 border-t border-gray-200",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center space-x-2 text-sm text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowTrendingUpIcon_CalendarIcon_ChatBubbleLeftRightIcon_CubeIcon_DocumentTextIcon_EyeIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    children: "CMS Panel aktif ve kullanıma hazır"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7038:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ArrowTrendingUpIcon({
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
    d: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowTrendingUpIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 1253:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function CalendarIcon({
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
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CalendarIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 3298:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ChatBubbleLeftRightIcon({
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
    d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChatBubbleLeftRightIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 6551:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function CubeIcon({
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
    d: "m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CubeIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 6610:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function DocumentTextIcon({
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
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DocumentTextIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,2971,993,1744], function() { return __webpack_exec__(2292); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);