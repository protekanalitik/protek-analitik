(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[540],{

/***/ 8253:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1214))

/***/ }),

/***/ 8619:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* reexport safe */ _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_0__.Z; },
/* harmony export */   f: function() { return /* reexport safe */ _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_1__.Z; }
/* harmony export */ });
/* harmony import */ var _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3753);
/* harmony import */ var _NewspaperIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3949);




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

/***/ 1214:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewResourceNews; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4033);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_NewspaperIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8619);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4930);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




// Dynamic import için ImageUpload component'ini lazy load yap
const ImageUpload = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(__webpack_require__, 62)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(62)
            ]
    },
    loading: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "animate-pulse bg-gray-200 h-48 rounded-lg"
        }),
    ssr: false
});
function NewResourceNews() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        slug: "",
        summary: "",
        content: "",
        category: "sirket-haberleri",
        author: "",
        publish_date: "",
        image_url: "",
        tags: "",
        is_featured: false,
        is_published: false,
        meta_title: "",
        meta_description: "",
        meta_keywords: ""
    });
    const categoryOptions = [
        {
            value: "sirket-haberleri",
            label: "Şirket Haberleri"
        },
        {
            value: "sektor-guncel",
            label: "Sekt\xf6r G\xfcncel"
        },
        {
            value: "basari-hikayeleri",
            label: "Başarı Hikayeleri"
        }
    ];
    const generateSlug = (title)=>{
        return title.toLowerCase().replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c").replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
    };
    const handleTitleChange = (value)=>{
        setFormData((prev)=>({
                ...prev,
                title: value,
                slug: generateSlug(value)
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/news", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                router.push("/admin/resources");
            } else {
                throw new Error(data.error || "Failed to create news article");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to create news article");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: ()=>router.push("/admin/resources"),
                        className: "p-2 text-gray-400 hover:text-gray-600",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_NewspaperIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__/* .ArrowLeftIcon */ .Y, {
                            className: "w-5 h-5"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_NewspaperIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__/* .NewspaperIcon */ .f, {
                                className: "w-8 h-8 text-indigo-600"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "Yeni Haber"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white shadow rounded-lg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "px-6 py-4 border-b border-gray-200",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                    className: "text-lg font-medium text-gray-900",
                                    children: "Haber Bilgileri"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-6 py-4 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "title",
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Başlık *"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "text",
                                                id: "title",
                                                required: true,
                                                value: formData.title,
                                                onChange: (e)=>handleTitleChange(e.target.value),
                                                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                placeholder: "Haber başlığını girin"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "slug",
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "URL Slug *"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "text",
                                                id: "slug",
                                                required: true,
                                                value: formData.slug,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            slug: e.target.value
                                                        })),
                                                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                placeholder: "url-slug"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "mt-1 text-sm text-gray-500",
                                                children: [
                                                    "URL: /haberler/",
                                                    formData.slug
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "summary",
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "\xd6zet"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
                                                id: "summary",
                                                rows: 3,
                                                value: formData.summary,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            summary: e.target.value
                                                        })),
                                                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                placeholder: "Haber \xf6zetini girin"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "content",
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "İ\xe7erik *"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
                                                id: "content",
                                                rows: 10,
                                                required: true,
                                                value: formData.content,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            content: e.target.value
                                                        })),
                                                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                placeholder: "Haber i\xe7eriğini girin"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                        htmlFor: "category",
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Kategori *"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", {
                                                        id: "category",
                                                        required: true,
                                                        value: formData.category,
                                                        onChange: (e)=>setFormData((prev)=>({
                                                                    ...prev,
                                                                    category: e.target.value
                                                                })),
                                                        className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                        children: categoryOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                                value: option.value,
                                                                children: option.label
                                                            }, option.value))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                        htmlFor: "author",
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Yazar *"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                        type: "text",
                                                        id: "author",
                                                        required: true,
                                                        value: formData.author,
                                                        onChange: (e)=>setFormData((prev)=>({
                                                                    ...prev,
                                                                    author: e.target.value
                                                                })),
                                                        className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                        placeholder: "Yazar adı"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                    htmlFor: "publish_date",
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Yayın Tarihi"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                    type: "date",
                                                    id: "publish_date",
                                                    value: formData.publish_date,
                                                    onChange: (e)=>setFormData((prev)=>({
                                                                ...prev,
                                                                publish_date: e.target.value
                                                            })),
                                                    className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageUpload, {
                                            value: formData.image_url,
                                            onChange: (url)=>setFormData((prev)=>({
                                                        ...prev,
                                                        image_url: url
                                                    })),
                                            label: "Haber G\xf6rseli"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "tags",
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Etiketler"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "text",
                                                id: "tags",
                                                value: formData.tags,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            tags: e.target.value
                                                        })),
                                                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                placeholder: "etiket1, etiket2, etiket3"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "mt-1 text-sm text-gray-500",
                                                children: "Etiketleri virg\xfclle ayırın"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                        id: "is_featured",
                                                        type: "checkbox",
                                                        checked: formData.is_featured,
                                                        onChange: (e)=>setFormData((prev)=>({
                                                                    ...prev,
                                                                    is_featured: e.target.checked
                                                                })),
                                                        className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                        htmlFor: "is_featured",
                                                        className: "ml-2 block text-sm text-gray-900",
                                                        children: "\xd6ne \xe7ıkan haber olarak işaretle"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                        id: "is_published",
                                                        type: "checkbox",
                                                        checked: formData.is_published,
                                                        onChange: (e)=>setFormData((prev)=>({
                                                                    ...prev,
                                                                    is_published: e.target.checked
                                                                })),
                                                        className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                        htmlFor: "is_published",
                                                        className: "ml-2 block text-sm text-gray-900",
                                                        children: "Haberi yayına al"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white shadow rounded-lg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "px-6 py-4 border-b border-gray-200",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                    className: "text-lg font-medium text-gray-900",
                                    children: "SEO Ayarları"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-6 py-4 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "meta_title",
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "SEO Başlığı"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "text",
                                                id: "meta_title",
                                                value: formData.meta_title,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            meta_title: e.target.value
                                                        })),
                                                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                placeholder: "SEO i\xe7in \xf6zel başlık (boş bırakılırsa normal başlık kullanılır)"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "meta_description",
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "SEO A\xe7ıklaması"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
                                                id: "meta_description",
                                                rows: 3,
                                                value: formData.meta_description,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            meta_description: e.target.value
                                                        })),
                                                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                placeholder: "Arama motorları i\xe7in a\xe7ıklama"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                htmlFor: "meta_keywords",
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "SEO Anahtar Kelimeler"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "text",
                                                id: "meta_keywords",
                                                value: formData.meta_keywords,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            meta_keywords: e.target.value
                                                        })),
                                                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                                                placeholder: "anahtar1, anahtar2, anahtar3"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "bg-red-50 border border-red-200 rounded-md p-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "text-red-800",
                            children: error
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-end space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                type: "button",
                                onClick: ()=>router.push("/admin/resources"),
                                className: "px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                children: "İptal"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                type: "submit",
                                disabled: loading,
                                className: "px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: loading ? "Kaydediliyor..." : "Haber Oluştur"
                            })
                        ]
                    })
                ]
            })
        ]
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

/***/ 3949:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function NewspaperIcon({
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
    d: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(NewspaperIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2971,993,1744], function() { return __webpack_exec__(8253); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);