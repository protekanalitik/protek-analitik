(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[382],{

/***/ 7721:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5753))

/***/ }),

/***/ 5753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HaberDetayPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4033);
// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(5330);
// EXTERNAL MODULE: ./src/components/layout/Footer.tsx + 1 modules
var Footer = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js
var ArrowLeftIcon = __webpack_require__(3753);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var CalendarIcon = __webpack_require__(1253);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js
var ChatBubbleLeftRightIcon = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js
var EyeIcon = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/HeartIcon.js
var HeartIcon = __webpack_require__(927);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ShareIcon.js
var ShareIcon = __webpack_require__(1447);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TagIcon.js
var TagIcon = __webpack_require__(2469);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowLeftIcon,CalendarIcon,ChatBubbleLeftRightIcon,EyeIcon,HeartIcon,ShareIcon,TagIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js








// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(6691);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/kaynaklar/haber/[id]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function HaberDetayPage(param) {
    let { params } = param;
    const router = (0,navigation.useRouter)();
    const [news, setNews] = (0,react.useState)(null);
    const [relatedNews, setRelatedNews] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    // Helper function to safely parse tags
    const parseTagsArray = (tags)=>{
        if (typeof tags === "string") {
            return tags.split(",").map((tag)=>tag.trim()).filter((tag)=>tag !== "");
        }
        if (Array.isArray(tags)) {
            return tags;
        }
        return [];
    };
    (0,react.useEffect)(()=>{
        const fetchNews = async ()=>{
            try {
                // Tek haber çek
                const newsResponse = await fetch("/api/news/".concat(params.id));
                const newsResult = await newsResponse.json();
                if (newsResult.success) {
                    setNews(newsResult.data);
                    // Tüm haberleri çek ve ilgili haberleri filtrele
                    const allNewsResponse = await fetch("/api/news");
                    const allNewsResult = await allNewsResponse.json();
                    if (allNewsResult.success) {
                        const allNews = allNewsResult.data;
                        const related = allNews.filter((n)=>n.id !== params.id && n.category === newsResult.data.category).slice(0, 3);
                        setRelatedNews(related);
                    }
                } else {
                    (0,navigation.notFound)();
                }
            } catch (error) {
                console.error("Haber y\xfckleme hatası:", error);
                (0,navigation.notFound)();
            } finally{
                setLoading(false);
            }
        };
        fetchNews();
    }, [
        params.id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Header["default"], {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-600",
                                children: "Haber y\xfckleniyor..."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer["default"], {})
            ]
        });
    }
    if (!news) {
        (0,navigation.notFound)();
    }
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    const getCategoryName = (category)=>{
        switch(category){
            case "sirket-haberleri":
                return "Şirket Haberleri";
            case "sektor-guncel":
                return "Sekt\xf6r G\xfcncel";
            case "basari-hikayeleri":
                return "Başarı Hikayeleri";
            default:
                return category;
        }
    };
    const getCategoryColor = (category)=>{
        switch(category){
            case "sirket-haberleri":
                return "blue";
            case "sektor-guncel":
                return "green";
            case "basari-hikayeleri":
                return "yellow";
            default:
                return "gray";
        }
    };
    const shareUrl =  true ? window.location.href : 0;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative h-96 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                        src: news.imageUrl || "/images/default-news.webp",
                                        alt: news.title,
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "100vw",
                                        priority: true
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute top-8 left-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    onClick: ()=>router.back(),
                                    className: "flex items-center space-x-2 bg-white/90 hover:bg-white px-4 py-2 rounded-xl font-medium text-gray-900 transition-colors backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowLeftIcon/* default */.Z, {
                                            className: "w-4 h-4"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Geri D\xf6n"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute bottom-0 left-0 right-0 p-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "container-custom",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "max-w-4xl",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center space-x-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "inline-block bg-".concat(getCategoryColor(news.category), "-600 text-white px-3 py-1 rounded-lg text-sm font-medium"),
                                                        children: getCategoryName(news.category)
                                                    }),
                                                    news.featured && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "bg-yellow-500 text-yellow-900 px-3 py-1 rounded-lg text-sm font-medium",
                                                        children: "\xd6ne \xc7ıkan"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",
                                                children: news.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-xl text-gray-200 mb-6",
                                                children: news.summary
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center space-x-6 text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, {
                                                                className: "w-5 h-5"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: formatDate(news.publishDate)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeIcon/* default */.Z, {
                                                                className: "w-5 h-5"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: "2.4K g\xf6r\xfcnt\xfcleme"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "container-custom py-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "prose prose-lg max-w-none",
                                            children: news.content.split("\n").map((paragraph, index)=>{
                                                if (paragraph.startsWith("## ")) {
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                        className: "text-2xl font-bold text-gray-900 mt-8 mb-4",
                                                        children: paragraph.replace("## ", "")
                                                    }, index);
                                                } else if (paragraph.startsWith("### ")) {
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-xl font-semibold text-gray-900 mt-6 mb-3",
                                                        children: paragraph.replace("### ", "")
                                                    }, index);
                                                } else if (paragraph.startsWith("- ")) {
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                                        className: "list-disc list-inside my-4",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                            className: "text-gray-700",
                                                            children: paragraph.replace("- ", "")
                                                        })
                                                    }, index);
                                                } else if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("blockquote", {
                                                        className: "border-l-4 border-blue-500 pl-6 my-6 italic text-gray-600 bg-blue-50 py-4 rounded-r-lg",
                                                        children: paragraph.replace(/^\*|\*$/g, "")
                                                    }, index);
                                                } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "font-semibold text-gray-900 my-4",
                                                        children: paragraph.replace(/^\*\*|\*\*$/g, "")
                                                    }, index);
                                                } else if (paragraph.trim()) {
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-gray-700 leading-relaxed my-4",
                                                        children: paragraph
                                                    }, index);
                                                }
                                                return null;
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "mt-8 pt-6 border-t border-gray-200",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TagIcon/* default */.Z, {
                                                        className: "w-5 h-5 text-gray-400"
                                                    }),
                                                    parseTagsArray(news.tags).map((tag, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer",
                                                            children: tag
                                                        }, index))
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-6 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                            className: "flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(HeartIcon/* default */.Z, {
                                                                    className: "w-5 h-5"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    children: "Beğen"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                            className: "flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ShareIcon/* default */.Z, {
                                                                    className: "w-5 h-5"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    children: "Paylaş"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    className: "flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ChatBubbleLeftRightIcon/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: "Yorum Yap"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                relatedNews.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            className: "text-2xl font-bold text-gray-900 mb-6",
                                            children: "İlgili Haberler"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                            children: relatedNews.map((relatedItem)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                                                    className: "group cursor-pointer",
                                                    onClick: ()=>router.push("/kaynaklar/haber/".concat(relatedItem.id)),
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "relative w-full h-48 overflow-hidden rounded-lg mb-4 group-hover:shadow-lg transition-shadow",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                                src: relatedItem.imageUrl || "/images/default-news.webp",
                                                                alt: relatedItem.title,
                                                                fill: true,
                                                                className: "object-cover",
                                                                sizes: "(max-width: 768px) 100vw, 33vw"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                            className: "font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2",
                                                            children: relatedItem.title
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            className: "text-gray-600 text-sm mb-3",
                                                            children: [
                                                                relatedItem.summary.slice(0, 100),
                                                                "..."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: formatDate(relatedItem.publishDate)
                                                        })
                                                    ]
                                                }, relatedItem.id))
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer["default"], {})
        ]
    });
}


/***/ }),

/***/ 3753:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ArrowLeftIcon({
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
    d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowLeftIcon);
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

/***/ 927:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function HeartIcon({
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
    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HeartIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 1447:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ShareIcon({
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
    d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ShareIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 2469:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function TagIcon({
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
    d: "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 6h.008v.008H6V6Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TagIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,9751,4166,3466,5330,1422,2971,993,1744], function() { return __webpack_exec__(7721); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);