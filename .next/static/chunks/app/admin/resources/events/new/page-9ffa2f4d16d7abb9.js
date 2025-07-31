(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3067],{

/***/ 7812:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9529))

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

/***/ 9529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NewEventPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4033);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js
var ArrowLeftIcon = __webpack_require__(3753);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var CalendarIcon = __webpack_require__(1253);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowLeftIcon,CalendarIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js



// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(4930);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
;// CONCATENATED MODULE: ./src/app/admin/resources/events/new/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





// Dynamic import için ImageUpload component'ini lazy load yap
const ImageUpload = app_dynamic_default()(()=>__webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(__webpack_require__, 62)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(62)
            ]
    },
    loading: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "animate-pulse bg-gray-200 h-48 rounded-lg"
        }),
    ssr: false
});
function NewEventPage() {
    var _eventTypeOptions_find;
    const router = (0,navigation.useRouter)();
    const [loading, setLoading] = (0,react.useState)(false);
    const [form, setForm] = (0,react.useState)({
        title: "",
        slug: "",
        description: "",
        content: "",
        event_type: "seminer",
        start_date: "",
        end_date: "",
        location: "",
        address: "",
        registration_url: "",
        max_participants: null,
        image_url: "",
        tags: "",
        is_featured: false,
        is_published: true,
        registration_required: false,
        is_online: false,
        meeting_link: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: ""
    });
    const eventTypeOptions = [
        {
            value: "seminer",
            label: "Seminer"
        },
        {
            value: "webinar",
            label: "Webinar"
        },
        {
            value: "fuar",
            label: "Fuar"
        },
        {
            value: "egitim",
            label: "Eğitim"
        },
        {
            value: "konferans",
            label: "Konferans"
        }
    ];
    const generateSlug = (title)=>{
        return title.toLowerCase().replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c").replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
    };
    const handleTitleChange = (value)=>{
        setForm((prev)=>({
                ...prev,
                title: value,
                slug: generateSlug(value),
                meta_title: prev.meta_title || value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            // API'ye POST isteği gönder
            const response = await fetch("/api/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(form)
            });
            const result = await response.json();
            if (result.success) {
                alert("Etkinlik başarıyla eklendi!");
                router.push("/admin/resources");
            } else {
                alert("Hata: ".concat(result.message || result.error));
            }
        } catch (error) {
            console.error("Event creation error:", error);
            alert("Hata: Etkinlik eklenirken bir sorun oluştu.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: "/admin/resources",
                            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowLeftIcon/* default */.Z, {
                                className: "w-5 h-5"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "Yeni Etkinlik Ekle"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-gray-600",
                                    children: "Sisteme yeni etkinlik duyurusu ekleyin"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Temel Bilgiler"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Etkinlik Adı *"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: form.title,
                                                                onChange: (e)=>handleTitleChange(e.target.value),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Etkinlik adını girin"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Kısa A\xe7ıklama *"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                                required: true,
                                                                rows: 3,
                                                                value: form.description,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            description: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Etkinlik'in a\xe7ıklamasını girin"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Etkinlik T\xfcr\xfc *"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("select", {
                                                                        required: true,
                                                                        value: form.event_type,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    event_type: e.target.value
                                                                                })),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                        children: eventTypeOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                value: option.value,
                                                                                children: option.label
                                                                            }, option.value))
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Başlangı\xe7 Tarihi *"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                        type: "date",
                                                                        required: true,
                                                                        value: form.start_date,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    start_date: e.target.value
                                                                                })),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Bitiş Tarihi"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                        type: "date",
                                                                        value: form.end_date,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    end_date: e.target.value
                                                                                })),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Lokasyon *"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                        type: "text",
                                                                        required: true,
                                                                        value: form.location,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    location: e.target.value
                                                                                })),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                        placeholder: "\xd6rn: İstanbul Fuar Center, Online"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Adres"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                        type: "text",
                                                                        value: form.address,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    address: e.target.value
                                                                                })),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                        placeholder: "Detaylı adres bilgisi"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Maksimum Katılımcı"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                        type: "number",
                                                                        min: "1",
                                                                        value: form.max_participants || "",
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    max_participants: e.target.value ? parseInt(e.target.value) : null
                                                                                })),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                        placeholder: "Sınır yok ise boş bırakın"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Etiketler"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                        type: "text",
                                                                        value: form.tags,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    tags: e.target.value
                                                                                })),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                        placeholder: "teknoloji, g\xfcvenlik, seminer"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "mt-1 text-xs text-gray-500",
                                                                        children: "Virg\xfclle ayırın"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Etkinlik Detayları"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Detaylı İ\xe7erik (Markdown destekli) *"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                        required: true,
                                                        rows: 15,
                                                        value: form.content,
                                                        onChange: (e)=>setForm((prev)=>({
                                                                    ...prev,
                                                                    content: e.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm",
                                                        placeholder: "Etkinlik detaylarını markdown formatında yazın..."
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "mt-2 text-xs text-gray-500",
                                                        children: "Program, konuşmacılar, g\xfcndem gibi detayları markdown formatında ekleyebilirsiniz"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageUpload, {
                                            value: form.image_url,
                                            onChange: (url)=>setForm((prev)=>({
                                                        ...prev,
                                                        image_url: url
                                                    })),
                                            label: "Etkinlik G\xf6rseli"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Kayıt Bilgileri"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                id: "registration_required",
                                                                checked: form.registration_required,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            registration_required: e.target.checked
                                                                        })),
                                                                className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                htmlFor: "registration_required",
                                                                className: "ml-2 block text-sm text-gray-900",
                                                                children: "Kayıt zorunlu"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Kayıt URL'si"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "url",
                                                                value: form.registration_url,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            registration_url: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "https://example.com/kayit"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "mt-1 text-xs text-gray-500",
                                                                children: "Katılımcıların kayıt olabileceği web sayfası linki"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                id: "is_online",
                                                                checked: form.is_online,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            is_online: e.target.checked
                                                                        })),
                                                                className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                htmlFor: "is_online",
                                                                className: "ml-2 block text-sm text-gray-900",
                                                                children: "Online etkinlik"
                                                            })
                                                        ]
                                                    }),
                                                    form.is_online && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Toplantı Linki"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "url",
                                                                value: form.meeting_link,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            meeting_link: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "https://zoom.us/meeting/123"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Yayın Ayarları"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                id: "is_published",
                                                                checked: form.is_published,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            is_published: e.target.checked
                                                                        })),
                                                                className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                htmlFor: "is_published",
                                                                className: "ml-2 block text-sm text-gray-900",
                                                                children: "Etkinliği yayına al"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                id: "is_featured",
                                                                checked: form.is_featured,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            is_featured: e.target.checked
                                                                        })),
                                                                className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                htmlFor: "is_featured",
                                                                className: "ml-2 block text-sm text-gray-900",
                                                                children: "\xd6ne \xe7ıkan etkinlik olarak işaretle"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "SEO Ayarları"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "SEO Başlığı"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                value: form.meta_title,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            meta_title: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xd6zel SEO başlığı (boş bırakılırsa etkinlik adı kullanılır)"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "SEO A\xe7ıklaması"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                                rows: 2,
                                                                value: form.meta_description,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            meta_description: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Arama motorları i\xe7in a\xe7ıklama"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "SEO Anahtar Kelimeler"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                value: form.meta_keywords,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            meta_keywords: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "teknoloji, g\xfcvenlik, seminer"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                className: "font-medium text-blue-900 mb-2",
                                                children: "\uD83D\uDCC5 Etkinlik \xd6zeti"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-sm text-blue-800 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                                children: "T\xfcr:"
                                                            }),
                                                            " ",
                                                            (_eventTypeOptions_find = eventTypeOptions.find((t)=>t.value === form.event_type)) === null || _eventTypeOptions_find === void 0 ? void 0 : _eventTypeOptions_find.label
                                                        ]
                                                    }),
                                                    form.start_date && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                                children: "Tarih:"
                                                            }),
                                                            " ",
                                                            new Date(form.start_date).toLocaleDateString("tr-TR"),
                                                            form.end_date && form.end_date !== form.start_date && " - ".concat(new Date(form.end_date).toLocaleDateString("tr-TR"))
                                                        ]
                                                    }),
                                                    form.location && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                                children: "Lokasyon:"
                                                            }),
                                                            " ",
                                                            form.location
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-end space-x-4 pt-6 border-t border-gray-200",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: "/admin/resources",
                                className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                                children: "İptal"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "submit",
                                disabled: loading,
                                className: "inline-flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors",
                                children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Kaydediliyor..."
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, {
                                            className: "w-4 h-4"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Etkinlik Yayınla"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,2971,993,1744], function() { return __webpack_exec__(7812); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);