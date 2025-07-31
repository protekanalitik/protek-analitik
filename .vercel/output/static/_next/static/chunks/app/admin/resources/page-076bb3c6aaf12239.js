(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5463],{

/***/ 7119:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7283))

/***/ }),

/***/ 7283:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ResourcesPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var CalendarIcon = __webpack_require__(1253);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js
var DocumentTextIcon = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js
var EyeIcon = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js
var MagnifyingGlassIcon = __webpack_require__(4020);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PencilIcon.js
var PencilIcon = __webpack_require__(2125);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js
var TrashIcon = __webpack_require__(7227);
;// CONCATENATED MODULE: __barrel_optimize__?names=CalendarIcon,DocumentTextIcon,EyeIcon,MagnifyingGlassIcon,PencilIcon,TrashIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js







;// CONCATENATED MODULE: ./src/app/admin/resources/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ResourcesPage() {
    const [activeTab, setActiveTab] = (0,react.useState)("all");
    const [searchTerm, setSearchTerm] = (0,react.useState)("");
    const [news, setNews] = (0,react.useState)([]);
    const [events, setEvents] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    // Haber ve etkinlikleri API'den çek
    const fetchResources = async ()=>{
        setLoading(true);
        try {
            const [newsRes, eventsRes] = await Promise.all([
                fetch("/api/news"),
                fetch("/api/events")
            ]);
            const newsData = await newsRes.json();
            const eventsData = await eventsRes.json();
            setNews(newsData.data || []);
            setEvents(eventsData.data || []);
        } catch (e) {
            setNews([]);
            setEvents([]);
        } finally{
            setLoading(false);
        }
    };
    (0,react.useEffect)(()=>{
        fetchResources();
    }, []);
    // Silme işlemleri API üzerinden
    const handleDeleteNews = async (id)=>{
        if (confirm("Bu haberi silmek istediğinizden emin misiniz?")) {
            await fetch("/api/news/".concat(id), {
                method: "DELETE"
            });
            fetchResources();
            alert("Haber başarıyla silindi!");
        }
    };
    const handleDeleteEvent = async (id)=>{
        if (confirm("Bu etkinliği silmek istediğinizden emin misiniz?")) {
            await fetch("/api/events/".concat(id), {
                method: "DELETE"
            });
            fetchResources();
            alert("Etkinlik başarıyla silindi!");
        }
    };
    const filteredNews = news.filter((item)=>searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.summary.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredEvents = events.filter((item)=>searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Kaynak Y\xf6netimi"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-600",
                                children: "Haber ve etkinlik i\xe7eriklerini y\xf6netin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex space-x-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/admin/resources/news/new",
                                className: "inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocumentTextIcon/* default */.Z, {
                                        className: "w-5 h-5"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Yeni Haber"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/admin/resources/events/new",
                                className: "inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, {
                                        className: "w-5 h-5"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Yeni Etkinlik"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "border-b border-gray-200",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                    className: "-mb-px flex space-x-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            onClick: ()=>setActiveTab("all"),
                            className: "py-2 px-1 border-b-2 font-medium text-sm ".concat(activeTab === "all" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"),
                            children: [
                                "T\xfcm\xfc (",
                                news.length + events.length,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            onClick: ()=>setActiveTab("news"),
                            className: "py-2 px-1 border-b-2 font-medium text-sm ".concat(activeTab === "news" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"),
                            children: [
                                "Haberler (",
                                news.length,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            onClick: ()=>setActiveTab("events"),
                            className: "py-2 px-1 border-b-2 font-medium text-sm ".concat(activeTab === "events" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"),
                            children: [
                                "Etkinlikler (",
                                events.length,
                                ")"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "bg-white rounded-lg border border-gray-200 p-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative max-w-md",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MagnifyingGlassIcon/* default */.Z, {
                            className: "w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "Kaynaklarda ara...",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        })
                    ]
                })
            }),
            (activeTab === "all" || activeTab === "news") && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-white rounded-lg border border-gray-200 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "px-6 py-4 border-b border-gray-200",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                            className: "text-lg font-medium text-gray-900 flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(DocumentTextIcon/* default */.Z, {
                                    className: "w-5 h-5 mr-2"
                                }),
                                "Haberler"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                            className: "min-w-full divide-y divide-gray-200",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                    className: "bg-gray-50",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Haber"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Kategori"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Tarih"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Durum"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "İşlemler"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                    className: "bg-white divide-y divide-gray-200",
                                    children: filteredNews.map((news)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                            className: "hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                className: "h-12 w-12 rounded-lg object-cover",
                                                                src: news.image_url || "/images/default-news.jpg",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "ml-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "text-sm font-medium text-gray-900",
                                                                        children: news.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "text-sm text-gray-500 truncate max-w-xs",
                                                                        children: news.summary
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4 whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "px-2 py-1 text-xs rounded-full ".concat(news.category === "sirket-haberleri" ? "bg-blue-100 text-blue-800" : news.category === "sektor-guncel" ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"),
                                                        children: news.category === "sirket-haberleri" ? "Şirket" : news.category === "sektor-guncel" ? "Sekt\xf6r" : "Başarı"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                    children: new Date(news.publish_date || news.created_at).toLocaleDateString("tr-TR")
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4 whitespace-nowrap",
                                                    children: news.is_featured && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full",
                                                        children: "\xd6ne \xc7ıkan"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                className: "text-blue-600 hover:text-blue-900",
                                                                title: "G\xf6r\xfcnt\xfcle",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeIcon/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                                href: "/admin/resources/news/edit/".concat(news.id),
                                                                className: "text-green-600 hover:text-green-900",
                                                                title: "D\xfczenle",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PencilIcon/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                onClick: ()=>handleDeleteNews(news.id),
                                                                className: "text-red-600 hover:text-red-900",
                                                                title: "Sil",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrashIcon/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, news.id))
                                })
                            ]
                        })
                    })
                ]
            }),
            (activeTab === "all" || activeTab === "events") && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-white rounded-lg border border-gray-200 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "px-6 py-4 border-b border-gray-200",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                            className: "text-lg font-medium text-gray-900 flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, {
                                    className: "w-5 h-5 mr-2"
                                }),
                                "Etkinlikler"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                            className: "min-w-full divide-y divide-gray-200",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                    className: "bg-gray-50",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Etkinlik"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "T\xfcr"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Tarih"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "Lokasyon"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                children: "İşlemler"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                    className: "bg-white divide-y divide-gray-200",
                                    children: filteredEvents.map((event)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                            className: "hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                className: "h-12 w-12 rounded-lg object-cover",
                                                                src: event.image_url || "/images/default-event.jpg",
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "ml-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "text-sm font-medium text-gray-900",
                                                                        children: event.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "text-sm text-gray-500 truncate max-w-xs",
                                                                        children: event.description
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4 whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800",
                                                        children: event.event_type
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                    children: new Date(event.start_date).toLocaleDateString("tr-TR")
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                    children: event.location
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                className: "text-blue-600 hover:text-blue-900",
                                                                title: "G\xf6r\xfcnt\xfcle",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeIcon/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                                href: "/admin/resources/events/".concat(event.id, "/edit"),
                                                                className: "text-green-600 hover:text-green-900",
                                                                title: "D\xfczenle",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PencilIcon/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                onClick: ()=>handleDeleteEvent(event.id),
                                                                className: "text-red-600 hover:text-red-900",
                                                                title: "Sil",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrashIcon/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, event.id))
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


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

/***/ }),

/***/ 4020:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function MagnifyingGlassIcon({
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
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MagnifyingGlassIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 2125:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function PencilIcon({
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
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 7227:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function TrashIcon({
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
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TrashIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,2971,993,1744], function() { return __webpack_exec__(7119); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);