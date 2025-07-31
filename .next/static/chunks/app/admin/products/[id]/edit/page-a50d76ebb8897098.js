(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9435,9349],{

/***/ 3988:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5541))

/***/ }),

/***/ 1781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* reexport safe */ _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_0__.Z; },
/* harmony export */   r: function() { return /* reexport safe */ _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_1__.Z; }
/* harmony export */ });
/* harmony import */ var _ArrowLeftIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3753);
/* harmony import */ var _CheckCircleIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9186);




/***/ }),

/***/ 5541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditProductPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4033);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1396);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1781);
/* __next_internal_client_entry_do_not_use__ default auto */ 




// Dynamic imports for large components and icons
const MultipleImageUpload = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>__webpack_require__.e(/* import() */ 7697).then(__webpack_require__.bind(__webpack_require__, 7697)));
// Simplified icon imports - keep most critical ones static for stability
const PhotoIcon = /*#__PURE__*/ (/* unused pure expression or super */ null && (lazy(()=>Promise.all(/* import() */[__webpack_require__.e(3466), __webpack_require__.e(7239)]).then(__webpack_require__.bind(__webpack_require__, 7239)).then((m)=>({
            default: m.PhotoIcon
        })))));
const PlusIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(3466), __webpack_require__.e(7239)]).then(__webpack_require__.bind(__webpack_require__, 7239)).then((m)=>({
            default: m.PlusIcon
        })));
const XMarkIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(3466), __webpack_require__.e(7239)]).then(__webpack_require__.bind(__webpack_require__, 7239)).then((m)=>({
            default: m.XMarkIcon
        })));
const DocumentIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(3466), __webpack_require__.e(7239)]).then(__webpack_require__.bind(__webpack_require__, 7239)).then((m)=>({
            default: m.DocumentIcon
        })));
const TruckIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(3466), __webpack_require__.e(7239)]).then(__webpack_require__.bind(__webpack_require__, 7239)).then((m)=>({
            default: m.TruckIcon
        })));
const ShieldCheckIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(3466), __webpack_require__.e(7239)]).then(__webpack_require__.bind(__webpack_require__, 7239)).then((m)=>({
            default: m.ShieldCheckIcon
        })));
const FolderPlusIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(3466), __webpack_require__.e(7239)]).then(__webpack_require__.bind(__webpack_require__, 7239)).then((m)=>({
            default: m.FolderPlusIcon
        })));
function EditProductPage() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const productId = params.id;
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true) // API'den yükleniyor
    ;
    const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
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
    const [newSpecKey, setNewSpecKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newSpecValue, setNewSpecValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newCatalogUrl, setNewCatalogUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [newCatalogName, setNewCatalogName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Fetch categories from API
    const fetchCategories = async ()=>{
        try {
            const response = await fetch("/api/categories");
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) {
                setCategories(data.data);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    // API'den ürün verisini çek
    const fetchProduct = async ()=>{
        try {
            setLoading(true);
            const response = await fetch("/api/products");
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) {
                const foundProduct = data.data.find((p)=>p.id === productId);
                if (foundProduct) {
                    setProduct(foundProduct);
                    setForm({
                        name: foundProduct.name,
                        description: foundProduct.description,
                        overview: foundProduct.overview || "",
                        images: foundProduct.images || [
                            foundProduct.image
                        ],
                        category: foundProduct.category,
                        subcategory: foundProduct.subcategory,
                        features: foundProduct.features.length > 0 ? foundProduct.features : [
                            ""
                        ],
                        applications: foundProduct.applications.length > 0 ? foundProduct.applications : [
                            ""
                        ],
                        specifications: foundProduct.specifications || {},
                        dataSheet: foundProduct.dataSheet || "",
                        price: foundProduct.price || "",
                        isWarrantied: foundProduct.isWarrantied || false,
                        hasFreeShipping: foundProduct.hasFreeShipping || false,
                        catalogFiles: foundProduct.catalogFiles || []
                    });
                } else {
                    alert("\xdcr\xfcn bulunamadı!");
                    router.push("/admin/products");
                }
            } else {
                console.error("API hatası:", data);
                alert("\xdcr\xfcn verisi y\xfcklenirken hata oluştu.");
            }
        } catch (error) {
            console.error("\xdcr\xfcn y\xfckleme hatası:", error);
            alert("\xdcr\xfcn y\xfcklenirken hata oluştu.");
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchCategories();
        fetchProduct();
    }, [
        productId
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSaving(true);
        try {
            const productData = {
                ...form,
                id: productId,
                image: form.images[0] || "/images/lab-1.jpg",
                images: form.images.length > 0 ? form.images : undefined,
                features: form.features.filter((f)=>f.trim() !== ""),
                applications: form.applications.filter((a)=>a.trim() !== ""),
                specifications: Object.keys(form.specifications).length > 0 ? form.specifications : undefined,
                catalogFiles: form.catalogFiles && form.catalogFiles.length > 0 ? form.catalogFiles : undefined
            };
            // API çağrısı yap
            const response = await fetch("/api/products/".concat(productId), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });
            const result = await response.json();
            if (result.success) {
                alert("\xdcr\xfcn başarıyla g\xfcncellendi!");
                router.push("/admin/products");
            } else {
                alert("Hata: ".concat(result.error));
            }
        } catch (error) {
            console.error("\xdcr\xfcn g\xfcncelleme hatası:", error);
            alert("Hata: \xdcr\xfcn g\xfcncellenirken bir sorun oluştu.");
        } finally{
            setSaving(false);
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
        if (!form.category) return [];
        const category = categories.find((cat)=>cat.name === form.category);
        return (category === null || category === void 0 ? void 0 : category.subcategories) || [];
    };
    if (loading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "text-gray-600",
                        children: "\xdcr\xfcn bilgileri API'den y\xfckleniyor..."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-sm text-gray-400 mt-2",
                        children: [
                            "Product ID: ",
                            productId
                        ]
                    })
                ]
            })
        });
    }
    if (!product) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "text-red-600 text-6xl mb-4",
                        children: "⚠️"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-2",
                        children: "\xdcr\xfcn Bulunamadı"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-gray-600 mb-4",
                        children: [
                            "ID: ",
                            productId
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/admin/products",
                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                        children: "\xdcr\xfcn Listesine D\xf6n"
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-6 max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/admin/products",
                            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__/* .ArrowLeftIcon */ .Y, {
                                className: "w-5 h-5"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "\xdcr\xfcn D\xfczenle"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-gray-600",
                                    children: [
                                        product.name,
                                        " - ID: ",
                                        product.id
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Temel Bilgiler"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "\xdcr\xfcn Adı *"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "A\xe7ıklama *"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Genel Bakış"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
                                                                rows: 6,
                                                                value: form.overview,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            overview: e.target.value
                                                                        })),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xdcr\xfcn hakkında detaylı genel bakış metnini girin..."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-sm text-gray-500 mt-1",
                                                                children: 'Bu metin \xfcr\xfcn detay sayfasındaki "Genel Bakış" sekmesinde g\xf6r\xfcnt\xfclenecektir.'
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Kategori *"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                        required: true,
                                                                        value: form.category,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    category: e.target.value,
                                                                                    subcategory: ""
                                                                                })),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                                                value: "",
                                                                                children: "Kategori se\xe7in"
                                                                            }),
                                                                            categories.map((category)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                                                    value: category.name,
                                                                                    children: category.name
                                                                                }, category.key))
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Alt Kategori *"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                        required: true,
                                                                        value: form.subcategory,
                                                                        onChange: (e)=>setForm((prev)=>({
                                                                                    ...prev,
                                                                                    subcategory: e.target.value
                                                                                })),
                                                                        disabled: !form.category,
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                                                value: "",
                                                                                children: "Alt kategori se\xe7in"
                                                                            }),
                                                                            getAvailableSubcategories().map((subcategory)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                                                    value: subcategory.name,
                                                                                    children: subcategory.name
                                                                                }, subcategory.key))
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "w-2 h-2 bg-blue-600 rounded-full mr-2"
                                                    }),
                                                    "Teknik \xd6zellikler"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "text",
                                                                value: newSpecKey,
                                                                onChange: (e)=>setNewSpecKey(e.target.value),
                                                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xd6zellik adı"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "text",
                                                                value: newSpecValue,
                                                                onChange: (e)=>setNewSpecValue(e.target.value),
                                                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Değer"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                type: "button",
                                                                onClick: addSpecification,
                                                                className: "px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                                                                    fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "w-4 h-4 bg-white/20 rounded animate-pulse"
                                                                    }),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PlusIcon, {
                                                                        className: "w-4 h-4"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "space-y-2 max-h-64 overflow-y-auto",
                                                        children: [
                                                            Object.entries(form.specifications).map((param)=>{
                                                                let [key, value] = param;
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    className: "font-medium text-gray-800",
                                                                                    children: [
                                                                                        key,
                                                                                        ":"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                    className: "text-gray-600 ml-1",
                                                                                    children: value
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                            type: "button",
                                                                            onClick: ()=>removeSpecification(key),
                                                                            className: "p-1 text-red-600 hover:bg-red-100 rounded",
                                                                            title: "Sil",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(XMarkIcon, {
                                                                                className: "w-4 h-4"
                                                                            })
                                                                        })
                                                                    ]
                                                                }, key);
                                                            }),
                                                            Object.keys(form.specifications).length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-center py-4 text-gray-500 text-sm",
                                                                children: "Hen\xfcz teknik \xf6zellik eklenmemiş"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                        className: "text-lg font-semibold text-gray-900",
                                                        children: "\xd6zellikler"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        type: "button",
                                                        onClick: addFeature,
                                                        className: "inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PlusIcon, {
                                                                className: "w-4 h-4"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                children: "Ekle"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "space-y-3",
                                                children: form.features.map((feature, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "text",
                                                                value: feature,
                                                                onChange: (e)=>updateFeature(index, e.target.value),
                                                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "\xd6zellik girin"
                                                            }),
                                                            form.features.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                type: "button",
                                                                onClick: ()=>removeFeature(index),
                                                                className: "p-2 text-red-600 hover:bg-red-50 rounded-lg",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(XMarkIcon, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                        className: "text-lg font-semibold text-gray-900",
                                                        children: "Uygulama Alanları"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        type: "button",
                                                        onClick: addApplication,
                                                        className: "inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PlusIcon, {
                                                                className: "w-4 h-4"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                children: "Ekle"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "space-y-3",
                                                children: form.applications.map((application, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "text",
                                                                value: application,
                                                                onChange: (e)=>updateApplication(index, e.target.value),
                                                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Uygulama alanı girin"
                                                            }),
                                                            form.applications.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                type: "button",
                                                                onClick: ()=>removeApplication(index),
                                                                className: "p-2 text-red-600 hover:bg-red-50 rounded-lg",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(XMarkIcon, {
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                                            fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "animate-pulse bg-gray-200 h-32 rounded"
                                            }),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MultipleImageUpload, {
                                                images: form.images,
                                                onChange: (images)=>setForm((prev)=>({
                                                            ...prev,
                                                            images
                                                        })),
                                                label: "\xdcr\xfcn G\xf6rselleri",
                                                maxImages: 8
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                                                        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "w-5 h-5 mr-2 bg-green-200 rounded animate-pulse"
                                                        }),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShieldCheckIcon, {
                                                            className: "w-5 h-5 mr-2 text-green-600"
                                                        })
                                                    }),
                                                    "\xdcr\xfcn Avantajları"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "checkbox",
                                                                id: "isWarrantied",
                                                                checked: form.isWarrantied,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            isWarrantied: e.target.checked
                                                                        })),
                                                                className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "isWarrantied",
                                                                className: "flex items-center text-sm font-medium text-gray-700 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShieldCheckIcon, {
                                                                        className: "w-4 h-4 mr-1 text-green-600"
                                                                    }),
                                                                    "Garantili \xdcr\xfcn"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "checkbox",
                                                                id: "hasFreeShipping",
                                                                checked: form.hasFreeShipping,
                                                                onChange: (e)=>setForm((prev)=>({
                                                                            ...prev,
                                                                            hasFreeShipping: e.target.checked
                                                                        })),
                                                                className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "hasFreeShipping",
                                                                className: "flex items-center text-sm font-medium text-gray-700 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TruckIcon, {
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FolderPlusIcon, {
                                                        className: "w-5 h-5 mr-2 text-purple-600"
                                                    }),
                                                    "\xdcr\xfcnle İlgili Kataloglar"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "grid grid-cols-1 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "text",
                                                                value: newCatalogName,
                                                                onChange: (e)=>setNewCatalogName(e.target.value),
                                                                className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Katalog adı (\xf6rn: \xdcr\xfcn Broş\xfcr\xfc)"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "url",
                                                                value: newCatalogUrl,
                                                                onChange: (e)=>setNewCatalogUrl(e.target.value),
                                                                className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                placeholder: "Katalog URL'si (PDF linki)"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                type: "button",
                                                                onClick: addCatalogFile,
                                                                className: "px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PlusIcon, {
                                                                        className: "w-4 h-4 mr-1"
                                                                    }),
                                                                    "Katalog Ekle"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            (form.catalogFiles || []).map((catalog, index)=>{
                                                                const [name, url] = catalog.split("|");
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center justify-between p-3 bg-purple-50 rounded-lg border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-center space-x-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocumentIcon, {
                                                                                    className: "w-4 h-4 text-purple-600"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "text-sm",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                            className: "font-medium text-gray-800",
                                                                                            children: name
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                            className: "text-xs text-gray-500 truncate max-w-xs",
                                                                                            children: url
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                            type: "button",
                                                                            onClick: ()=>removeCatalogFile(index),
                                                                            className: "p-1 text-red-600 hover:bg-red-100 rounded",
                                                                            title: "Sil",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(XMarkIcon, {
                                                                                className: "w-4 h-4"
                                                                            })
                                                                        })
                                                                    ]
                                                                }, index);
                                                            }),
                                                            (!form.catalogFiles || form.catalogFiles.length === 0) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-center py-4 text-gray-500 text-sm",
                                                                children: "Hen\xfcz katalog eklenmemiş"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Ek Bilgiler"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Fiyat"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Veri Sayfası URL"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-end space-x-4 pt-6 border-t border-gray-200 bg-white rounded-lg p-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/admin/products",
                                className: "px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                                children: "İptal"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                type: "submit",
                                disabled: saving,
                                className: "inline-flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors",
                                children: saving ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            children: "Kaydediliyor..."
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__/* .CheckCircleIcon */ .r, {
                                            className: "w-4 h-4"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            children: "Değişiklikleri Kaydet"
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,2971,993,1744], function() { return __webpack_exec__(3988); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);