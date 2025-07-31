(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8573],{

/***/ 713:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 529))

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

/***/ 529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NewProductPage; },
  dynamic: function() { return /* binding */ dynamic; },
  runtime: function() { return /* binding */ runtime; }
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
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(9186);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js
var DocumentTextIcon = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/FolderPlusIcon.js
var FolderPlusIcon = __webpack_require__(4571);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js
var PlusIcon = __webpack_require__(5255);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js
var ShieldCheckIcon = __webpack_require__(2938);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TruckIcon.js
var TruckIcon = __webpack_require__(8265);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(6689);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowLeftIcon,CheckCircleIcon,DocumentTextIcon,FolderPlusIcon,PlusIcon,ShieldCheckIcon,TruckIcon,XMarkIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js









// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(4930);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
;// CONCATENATED MODULE: ./src/app/admin/products/new/page.tsx
/* __next_internal_client_entry_do_not_use__ dynamic,runtime,default auto */ 





// Force dynamic rendering to prevent static generation errors
const dynamic = "force-dynamic";
// Use Edge Runtime for Cloudflare Pages compatibility
const runtime = "edge";
// Dynamic import için MultipleImageUpload component'ini lazy load yap
const MultipleImageUpload = app_dynamic_default()(()=>__webpack_require__.e(/* import() */ 2041).then(__webpack_require__.bind(__webpack_require__, 2041)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(2041)
            ]
    },
    loading: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "animate-pulse bg-gray-200 h-48 rounded-lg"
        }),
    ssr: false
});
function NewProductPage() {
    const router = (0,navigation.useRouter)();
    const [loading, setLoading] = (0,react.useState)(false);
    const [categories, setCategories] = (0,react.useState)([
        {
            id: "lab-equipment",
            name: "Laboratuvar Ekipmanları"
        }
    ]);
    const [subcategories, setSubcategories] = (0,react.useState)([
        {
            id: "genel-lab",
            category_id: "lab-equipment",
            name: "Genel Laboratuvar Ekipmanları"
        },
        {
            id: "fiziksel-analiz",
            category_id: "lab-equipment",
            name: "Fiziksel Analiz Ekipmanları"
        },
        {
            id: "kimyasal-analiz",
            category_id: "lab-equipment",
            name: "Kimyasal Analiz Ekipmanları"
        }
    ]);
    const [form, setForm] = (0,react.useState)({
        name: "",
        description: "",
        overview: "",
        images: [],
        category: "",
        subcategory: "",
        features: [
            ""
        ],
        applications: [
            ""
        ],
        specifications: {},
        dataSheet: "",
        price: "",
        isWarrantied: false,
        hasFreeShipping: false,
        catalogFiles: []
    });
    const [newSpecKey, setNewSpecKey] = (0,react.useState)("");
    const [newSpecValue, setNewSpecValue] = (0,react.useState)("");
    const [newCatalogUrl, setNewCatalogUrl] = (0,react.useState)("");
    const [newCatalogName, setNewCatalogName] = (0,react.useState)("");
    // Fetch categories and subcategories on component mount
    (0,react.useEffect)(()=>{
        const fetchCategoriesData = async ()=>{
            try {
                // Fetch categories
                const categoriesResponse = await fetch("/api/categories", {
                    credentials: "include"
                });
                const categoriesResult = await categoriesResponse.json();
                if (categoriesResult.success) {
                    // API returns { data: { categories: [...], subcategories: [...] } }
                    const responseData = categoriesResult.data || {};
                    setCategories(Array.isArray(responseData.categories) ? responseData.categories : []);
                    // Also get subcategories from the same response
                    setSubcategories(Array.isArray(responseData.subcategories) ? responseData.subcategories : []);
                } else {
                    // Set fallback data if API fails
                    setCategories([
                        {
                            id: "lab-equipment",
                            name: "Laboratuvar Ekipmanları"
                        }
                    ]);
                    setSubcategories([
                        {
                            id: "genel-lab",
                            category_id: "lab-equipment",
                            name: "Genel Laboratuvar Ekipmanları"
                        },
                        {
                            id: "fiziksel-analiz",
                            category_id: "lab-equipment",
                            name: "Fiziksel Analiz Ekipmanları"
                        },
                        {
                            id: "kimyasal-analiz",
                            category_id: "lab-equipment",
                            name: "Kimyasal Analiz Ekipmanları"
                        }
                    ]);
                }
            } catch (error) {
                console.error("Failed to fetch categories:", error);
                // Fallback to static data if D1 fails
                setCategories([
                    {
                        id: "lab-equipment",
                        name: "Laboratuvar Ekipmanları"
                    }
                ]);
                setSubcategories([
                    {
                        id: "genel-lab",
                        category_id: "lab-equipment",
                        name: "Genel Laboratuvar Ekipmanları"
                    },
                    {
                        id: "fiziksel-analiz",
                        category_id: "lab-equipment",
                        name: "Fiziksel Analiz Ekipmanları"
                    },
                    {
                        id: "kimyasal-analiz",
                        category_id: "lab-equipment",
                        name: "Kimyasal Analiz Ekipmanları"
                    }
                ]);
            }
        };
        fetchCategoriesData();
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            // Generate unique ID
            const id = form.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "") + "-" + Date.now().toString().slice(-3);
            const productData = {
                name: form.name,
                description: form.description,
                overview: form.overview,
                category_id: form.category || "lab-equipment",
                subcategory_id: form.subcategory || "genel-lab",
                image: form.images[0] || "/images/lab-1.jpg",
                images: form.images.length > 0 ? form.images : [],
                features: form.features.filter((f)=>f.trim() !== ""),
                applications: form.applications.filter((a)=>a.trim() !== ""),
                specifications: Object.keys(form.specifications).length > 0 ? form.specifications : {},
                data_sheet: form.dataSheet || undefined,
                catalog_files: form.catalogFiles && form.catalogFiles.length > 0 ? form.catalogFiles : [],
                price: form.price || undefined,
                is_warrantied: Boolean(form.isWarrantied),
                has_free_shipping: Boolean(form.hasFreeShipping),
                is_featured: false,
                is_active: true
            };
            // API çağrısı yap
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(productData)
            });
            const result = await response.json();
            if (result.success) {
                alert("\xdcr\xfcn başarıyla eklendi!");
                router.push("/admin/products");
            } else {
                alert("Hata: ".concat(result.error));
            }
        } catch (error) {
            console.error("\xdcr\xfcn ekleme hatası:", error);
            alert("Hata: \xdcr\xfcn eklenirken bir sorun oluştu.");
        } finally{
            setLoading(false);
        }
    };
    const addFeature = ()=>{
        setForm((prev)=>({
                ...prev,
                features: [
                    ...prev.features,
                    ""
                ]
            }));
    };
    const removeFeature = (index)=>{
        setForm((prev)=>({
                ...prev,
                features: prev.features.filter((_, i)=>i !== index)
            }));
    };
    const updateFeature = (index, value)=>{
        setForm((prev)=>({
                ...prev,
                features: prev.features.map((f, i)=>i === index ? value : f)
            }));
    };
    const addApplication = ()=>{
        setForm((prev)=>({
                ...prev,
                applications: [
                    ...prev.applications,
                    ""
                ]
            }));
    };
    const removeApplication = (index)=>{
        setForm((prev)=>({
                ...prev,
                applications: prev.applications.filter((_, i)=>i !== index)
            }));
    };
    const updateApplication = (index, value)=>{
        setForm((prev)=>({
                ...prev,
                applications: prev.applications.map((a, i)=>i === index ? value : a)
            }));
    };
    const addSpecification = ()=>{
        if (newSpecKey.trim() && newSpecValue.trim()) {
            setForm((prev)=>({
                    ...prev,
                    specifications: {
                        ...prev.specifications,
                        [newSpecKey]: newSpecValue
                    }
                }));
            setNewSpecKey("");
            setNewSpecValue("");
        }
    };
    const removeSpecification = (key)=>{
        setForm((prev)=>{
            const newSpecs = {
                ...prev.specifications
            };
            delete newSpecs[key];
            return {
                ...prev,
                specifications: newSpecs
            };
        });
    };
    const addCatalogFile = ()=>{
        if (newCatalogUrl.trim() && newCatalogName.trim()) {
            const catalogEntry = "".concat(newCatalogName, "|").concat(newCatalogUrl);
            setForm((prev)=>({
                    ...prev,
                    catalogFiles: [
                        ...prev.catalogFiles || [],
                        catalogEntry
                    ]
                }));
            setNewCatalogUrl("");
            setNewCatalogName("");
        }
    };
    const removeCatalogFile = (index)=>{
        setForm((prev)=>({
                ...prev,
                catalogFiles: (prev.catalogFiles || []).filter((_, i)=>i !== index)
            }));
    };
    const getAvailableSubcategories = ()=>{
        if (!form.category || !Array.isArray(subcategories)) return [];
        return subcategories.filter((sub)=>(sub === null || sub === void 0 ? void 0 : sub.category_id) === form.category);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6 max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: "/admin/products",
                            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowLeftIcon/* default */.Z, {
                                className: "w-5 h-5"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "Yeni \xdcr\xfcn Ekle"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-gray-600",
                                    children: "Sisteme yeni \xfcr\xfcn bilgilerini girin"
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
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-6",
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
                                                                children: "\xdcr\xfcn Adı *"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: form.name,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            name: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xdcr\xfcn adını girin"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "A\xe7ıklama *"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                                required: true,
                                                                rows: 4,
                                                                value: form.description,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            description: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xdcr\xfcn a\xe7ıklamasını girin"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Genel Bakış"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                                rows: 6,
                                                                value: form.overview,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            overview: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xdcr\xfcn hakkında detaylı genel bakış metnini girin..."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                className: "text-sm text-gray-500 mt-1",
                                                                children: 'Bu metin \xfcr\xfcn detay sayfasındaki "Genel Bakış" sekmesinde g\xf6r\xfcnt\xfclenecektir.'
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
                                                                        children: "Kategori *"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                        required: true,
                                                                        value: form.category,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    category: e.target.value,
                                                                                    subcategory: ""
                                                                                })),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                value: "",
                                                                                children: "Kategori se\xe7in"
                                                                            }),
                                                                            Array.isArray(categories) && categories.map((category)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                    value: (category === null || category === void 0 ? void 0 : category.id) || "",
                                                                                    children: (category === null || category === void 0 ? void 0 : category.name) || "Bilinmeyen Kategori"
                                                                                }, (category === null || category === void 0 ? void 0 : category.id) || Math.random()))
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Alt Kategori *"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                        required: true,
                                                                        value: form.subcategory,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    subcategory: e.target.value
                                                                                })),
                                                                        disabled: !form.category,
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                value: "",
                                                                                children: "Alt kategori se\xe7in"
                                                                            }),
                                                                            getAvailableSubcategories().map((subcategory)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                    value: (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id) || "",
                                                                                    children: (subcategory === null || subcategory === void 0 ? void 0 : subcategory.name) || "Bilinmeyen Alt Kategori"
                                                                                }, (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id) || Math.random()))
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
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "w-2 h-2 bg-blue-600 rounded-full mr-2"
                                                    }),
                                                    "Teknik \xd6zellikler"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                value: newSpecKey,
                                                                onChange: (e)=>setNewSpecKey(e.target.value),
                                                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xd6zellik adı"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                value: newSpecValue,
                                                                onChange: (e)=>setNewSpecValue(e.target.value),
                                                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Değer"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                type: "button",
                                                                onClick: addSpecification,
                                                                className: "px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-2 max-h-64 overflow-y-auto",
                                                        children: [
                                                            Object.entries(form.specifications).map((param)=>{
                                                                let [key, value] = param;
                                                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                    className: "font-medium text-gray-800",
                                                                                    children: [
                                                                                        key,
                                                                                        ":"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "text-gray-600 ml-1",
                                                                                    children: value
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                            type: "button",
                                                                            onClick: ()=>removeSpecification(key),
                                                                            className: "p-1 text-red-600 hover:bg-red-100 rounded",
                                                                            title: "Sil",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(XMarkIcon/* default */.Z, {
                                                                                className: "w-3 h-3"
                                                                            })
                                                                        })
                                                                    ]
                                                                }, key);
                                                            }),
                                                            Object.keys(form.specifications).length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "text-center py-4 text-gray-500 text-sm",
                                                                children: "Hen\xfcz teknik \xf6zellik eklenmemiş"
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
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-lg font-semibold text-gray-900",
                                                        children: "\xd6zellikler"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                        type: "button",
                                                        onClick: addFeature,
                                                        className: "inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                                                className: "w-4 h-4"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: "Ekle"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "space-y-3",
                                                children: form.features.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                value: feature,
                                                                onChange: (e)=>updateFeature(index, e.target.value),
                                                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xd6zellik girin"
                                                            }),
                                                            form.features.length > 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                type: "button",
                                                                onClick: ()=>removeFeature(index),
                                                                className: "p-2 text-red-600 hover:bg-red-50 rounded-lg",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(XMarkIcon/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-lg font-semibold text-gray-900",
                                                        children: "Uygulama Alanları"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                        type: "button",
                                                        onClick: addApplication,
                                                        className: "inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                                                className: "w-4 h-4"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: "Ekle"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "space-y-3",
                                                children: form.applications.map((application, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                value: application,
                                                                onChange: (e)=>updateApplication(index, e.target.value),
                                                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Uygulama alanı girin"
                                                            }),
                                                            form.applications.length > 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                type: "button",
                                                                onClick: ()=>removeApplication(index),
                                                                className: "p-2 text-red-600 hover:bg-red-50 rounded-lg",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(XMarkIcon/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            })
                                                        ]
                                                    }, index))
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
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MultipleImageUpload, {
                                            images: form.images,
                                            onChange: (images)=>setForm((prev)=>({
                                                        ...prev,
                                                        images
                                                    })),
                                            label: "\xdcr\xfcn G\xf6rselleri",
                                            maxImages: 8
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShieldCheckIcon/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 text-green-600"
                                                    }),
                                                    "\xdcr\xfcn Avantajları"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                id: "isWarrantied",
                                                                checked: form.isWarrantied,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            isWarrantied: e.target.checked
                                                                        })),
                                                                className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                                htmlFor: "isWarrantied",
                                                                className: "flex items-center text-sm font-medium text-gray-700 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShieldCheckIcon/* default */.Z, {
                                                                        className: "w-4 h-4 mr-1 text-green-600"
                                                                    }),
                                                                    "Garantili \xdcr\xfcn"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "checkbox",
                                                                id: "hasFreeShipping",
                                                                checked: form.hasFreeShipping,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            hasFreeShipping: e.target.checked
                                                                        })),
                                                                className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                                htmlFor: "hasFreeShipping",
                                                                className: "flex items-center text-sm font-medium text-gray-700 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TruckIcon/* default */.Z, {
                                                                        className: "w-4 h-4 mr-1 text-blue-600"
                                                                    }),
                                                                    "\xdccretsiz Kargo"
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
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FolderPlusIcon/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 text-purple-600"
                                                    }),
                                                    "\xdcr\xfcnle İlgili Kataloglar"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                value: newCatalogName,
                                                                onChange: (e)=>setNewCatalogName(e.target.value),
                                                                className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Katalog adı (\xf6rn: \xdcr\xfcn Broş\xfcr\xfc)"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "url",
                                                                value: newCatalogUrl,
                                                                onChange: (e)=>setNewCatalogUrl(e.target.value),
                                                                className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Katalog URL'si (PDF linki)"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                type: "button",
                                                                onClick: addCatalogFile,
                                                                className: "px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                                                        className: "w-4 h-4 mr-1"
                                                                    }),
                                                                    "Katalog Ekle"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            (form.catalogFiles || []).map((catalog, index)=>{
                                                                const [name, url] = catalog.split("|");
                                                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center justify-between p-3 bg-purple-50 rounded-lg border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "flex items-center space-x-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(DocumentTextIcon/* default */.Z, {
                                                                                    className: "w-5 h-5"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "text-sm",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                            className: "font-medium text-gray-800",
                                                                                            children: name
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                            className: "text-xs text-gray-500 truncate max-w-xs",
                                                                                            children: url
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                            type: "button",
                                                                            onClick: ()=>removeCatalogFile(index),
                                                                            className: "p-1 text-red-600 hover:bg-red-100 rounded",
                                                                            title: "Sil",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(XMarkIcon/* default */.Z, {
                                                                                className: "w-4 h-4"
                                                                            })
                                                                        })
                                                                    ]
                                                                }, index);
                                                            }),
                                                            (!form.catalogFiles || form.catalogFiles.length === 0) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "text-center py-4 text-gray-500 text-sm",
                                                                children: "Hen\xfcz katalog eklenmemiş"
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
                                                children: "Ek Bilgiler"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Fiyat"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "text",
                                                                value: form.price,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            price: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xd6rn: Teklif alınız"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Veri Sayfası URL"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "url",
                                                                value: form.dataSheet,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            dataSheet: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "PDF veya d\xf6k\xfcman linki"
                                                            })
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
                        className: "flex items-center justify-end space-x-4 pt-6 border-t border-gray-200 bg-white rounded-lg p-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: "/admin/products",
                                className: "px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                                children: "İptal"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "submit",
                                disabled: loading,
                                className: "inline-flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors",
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
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                            className: "w-4 h-4"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "\xdcr\xfcn Ekle"
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

/***/ 9186:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function CheckCircleIcon({
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
    d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckCircleIcon);
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

/***/ 4571:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function FolderPlusIcon({
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
    d: "M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FolderPlusIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 5255:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function PlusIcon({
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
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlusIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 2938:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ShieldCheckIcon({
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
    d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ShieldCheckIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 8265:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function TruckIcon({
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
    d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TruckIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 6689:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function XMarkIcon({
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
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XMarkIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,2971,993,1744], function() { return __webpack_exec__(713); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);