(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9435,2041],{

/***/ 3988:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4535))

/***/ }),

/***/ 4535:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EditProductPage; }
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
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/DocumentIcon.js

function DocumentIcon({
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
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react.forwardRef(DocumentIcon);
/* harmony default export */ var esm_DocumentIcon = (ForwardRef);
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
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowLeftIcon,CheckCircleIcon,DocumentIcon,FolderPlusIcon,PlusIcon,ShieldCheckIcon,TruckIcon,XMarkIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js









// EXTERNAL MODULE: ./src/data/products.ts
var products = __webpack_require__(2958);
// EXTERNAL MODULE: ./src/components/MultipleImageUpload.tsx + 3 modules
var MultipleImageUpload = __webpack_require__(2041);
;// CONCATENATED MODULE: ./src/app/admin/products/[id]/edit/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function EditProductPage() {
    const router = (0,navigation.useRouter)();
    const params = (0,navigation.useParams)();
    const productId = params.id;
    const [loading, setLoading] = (0,react.useState)(true) // API'den yükleniyor
    ;
    const [saving, setSaving] = (0,react.useState)(false);
    const [product, setProduct] = (0,react.useState)(null);
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
    (0,react.useEffect)(()=>{
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
        const category = products/* productCategories */.ZH.find((cat)=>cat.name === form.category);
        return (category === null || category === void 0 ? void 0 : category.subcategories) || [];
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-gray-600",
                        children: "\xdcr\xfcn bilgileri API'den y\xfckleniyor..."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
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
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-red-600 text-6xl mb-4",
                        children: "⚠️"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "text-xl font-semibold text-gray-800 mb-2",
                        children: "\xdcr\xfcn Bulunamadı"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "text-gray-600 mb-4",
                        children: [
                            "ID: ",
                            productId
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "/admin/products",
                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                        children: "\xdcr\xfcn Listesine D\xf6n"
                    })
                ]
            })
        });
    }
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
                                    children: "\xdcr\xfcn D\xfczenle"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
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
                                                                            products/* productCategories */.ZH.map((category)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                    value: category.name,
                                                                                    children: category.name
                                                                                }, category.key))
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
                                                                                className: "w-4 h-4"
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
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MultipleImageUpload["default"], {
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
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_DocumentIcon, {
                                                                                    className: "w-4 h-4 text-purple-600"
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
                                disabled: saving,
                                className: "inline-flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors",
                                children: saving ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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

/***/ 2041:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MultipleImageUpload; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowDownIcon.js

function ArrowDownIcon({
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
    d: "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
  }));
}
const ForwardRef = /*#__PURE__*/ react.forwardRef(ArrowDownIcon);
/* harmony default export */ var esm_ArrowDownIcon = (ForwardRef);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowUpIcon.js

function ArrowUpIcon({
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
    d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
  }));
}
const ArrowUpIcon_ForwardRef = /*#__PURE__*/ react.forwardRef(ArrowUpIcon);
/* harmony default export */ var esm_ArrowUpIcon = (ArrowUpIcon_ForwardRef);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowUpTrayIcon.js
var ArrowUpTrayIcon = __webpack_require__(7993);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js
var PhotoIcon = __webpack_require__(3524);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js
var PlusIcon = __webpack_require__(5255);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(6689);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowDownIcon,ArrowUpIcon,ArrowUpTrayIcon,PhotoIcon,PlusIcon,XMarkIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js







;// CONCATENATED MODULE: ./src/components/MultipleImageUpload.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function MultipleImageUpload(param) {
    let { images = [], onChange, label = "\xdcr\xfcn G\xf6rselleri", maxImages = 10, className = "" } = param;
    const [uploading, setUploading] = (0,react.useState)(false);
    const [dragOver, setDragOver] = (0,react.useState)(false);
    const [urlInput, setUrlInput] = (0,react.useState)("");
    const fileInputRef = (0,react.useRef)(null);
    const handleFileSelect = async (files)=>{
        if (images.length + files.length > maxImages) {
            alert("En fazla ".concat(maxImages, " resim y\xfckleyebilirsiniz."));
            return;
        }
        setUploading(true);
        try {
            var _result_data;
            // Dosyaları sunucuya yükle
            const formData = new FormData();
            const validFiles = [];
            // Dosyaları filtrele ve FormData'ya ekle
            for(let i = 0; i < files.length; i++){
                const file = files[i];
                if (!file.type.startsWith("image/")) {
                    alert("".concat(file.name, " ge\xe7erli bir resim dosyası değil."));
                    continue;
                }
                if (file.size > 5 * 1024 * 1024) {
                    alert("".concat(file.name, " dosyası 5MB'dan b\xfcy\xfck."));
                    continue;
                }
                validFiles.push(file);
                formData.append("files", file);
            }
            if (validFiles.length === 0) {
                setUploading(false);
                return;
            }
            // Çoklu dosya yükleme API'sini çağır
            formData.append("type", "products") // Upload type belirt
            ;
            const response = await fetch("/api/upload", {
                method: "PUT",
                body: formData,
                credentials: "include" // Include cookies for authentication
            });
            const result = await response.json();
            if (result.success && ((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.uploadedFiles)) {
                const urls = result.data.uploadedFiles.map((file)=>file.url);
                onChange([
                    ...images,
                    ...urls
                ]);
                alert("".concat(urls.length, " resim başarıyla y\xfcklendi."));
            } else {
                alert(result.error || "Resimler y\xfcklenirken hata oluştu.");
            }
        } catch (error) {
            console.error("Multiple upload error:", error);
            alert("Resimler y\xfcklenirken hata oluştu.");
        } finally{
            setUploading(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileSelect(files);
        }
    };
    const handleFileInput = (e)=>{
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileSelect(files);
        }
    };
    const addUrlImage = ()=>{
        if (!urlInput.trim()) return;
        // Basic URL validation - sadece format kontrolü, URL'nin çalışıp çalışmadığı kontrol edilmiyor
        const urlPattern = /^(https?:\/\/|\/)/i;
        if (!urlPattern.test(urlInput.trim())) {
        // URL formatı geçersizse bile ekle - kullanıcı yerel path de girebilir
        }
        if (images.length >= maxImages) {
            alert("En fazla ".concat(maxImages, " resim ekleyebilirsiniz."));
            return;
        }
        if (!images.includes(urlInput.trim())) {
            onChange([
                ...images,
                urlInput.trim()
            ]);
            setUrlInput("");
        } else {
            alert("Bu resim zaten eklenmiş.");
        }
    };
    const removeImage = (index)=>{
        const newImages = images.filter((_, i)=>i !== index);
        onChange(newImages);
    };
    const moveImage = (index, direction)=>{
        const newImages = [
            ...images
        ];
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        if (targetIndex >= 0 && targetIndex < newImages.length) {
            [newImages[index], newImages[targetIndex]] = [
                newImages[targetIndex],
                newImages[index]
            ];
            onChange(newImages);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-4 ".concat(className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: [
                    label,
                    " (",
                    images.length,
                    "/",
                    maxImages,
                    ")"
                ]
            }),
            images.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4 mb-4",
                children: images.map((image, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: image,
                                alt: "Resim ".concat(index + 1),
                                className: "w-full h-32 object-cover rounded-lg border border-gray-200",
                                onError: (e)=>{
                                    const target = e.target;
                                    target.src = "/images/lab-1.jpg" // fallback resim
                                    ;
                                    target.style.backgroundColor = "#f3f4f6";
                                    target.style.color = "#6b7280";
                                    target.alt = "Resim y\xfcklenemiyor";
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2",
                                children: [
                                    index > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        onClick: ()=>moveImage(index, "up"),
                                        className: "p-1 bg-blue-600 text-white rounded hover:bg-blue-700",
                                        title: "Yukarı taşı",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowUpIcon, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    index < images.length - 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        onClick: ()=>moveImage(index, "down"),
                                        className: "p-1 bg-blue-600 text-white rounded hover:bg-blue-700",
                                        title: "Aşağı taşı",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowDownIcon, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        onClick: ()=>removeImage(index),
                                        className: "p-1 bg-red-600 text-white rounded hover:bg-red-700",
                                        title: "Sil",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(XMarkIcon/* default */.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded",
                                children: index + 1
                            })
                        ]
                    }, index))
            }),
            images.length < maxImages && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                onDrop: handleDrop,
                onDragOver: (e)=>{
                    e.preventDefault();
                    setDragOver(true);
                },
                onDragLeave: ()=>setDragOver(false),
                className: "border-2 border-dashed rounded-lg p-6 text-center transition-colors ".concat(dragOver ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: "image/*",
                        multiple: true,
                        onChange: handleFileInput,
                        className: "hidden"
                    }),
                    uploading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm text-gray-600",
                                children: "Y\xfckleniyor..."
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PhotoIcon/* default */.Z, {
                                className: "w-12 h-12 text-gray-400 mx-auto"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            var _fileInputRef_current;
                                            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                        },
                                        className: "inline-flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowUpTrayIcon/* default */.Z, {
                                                className: "w-4 h-4"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "Resimler Se\xe7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm text-gray-500 mt-2",
                                        children: "veya resimleri s\xfcr\xfckleyip bırakın"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-xs text-gray-400",
                                children: "PNG, JPG, JPEG, WebP (Max: 5MB her biri)"
                            })
                        ]
                    })
                ]
            }),
            images.length < maxImages && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute inset-0 flex items-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-full border-t border-gray-300"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "relative flex justify-center text-sm",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "px-2 bg-gray-50 text-gray-500",
                                    children: "veya URL ile ekle"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "text",
                                value: urlInput,
                                onChange: (e)=>setUrlInput(e.target.value),
                                onKeyPress: (e)=>e.key === "Enter" && (e.preventDefault(), addUrlImage()),
                                placeholder: "https://example.com/image.jpg veya /images/product.jpg",
                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: addUrlImage,
                                disabled: !urlInput.trim(),
                                className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                    className: "w-4 h-4"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-xs text-gray-500 space-y-1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "• İlk resim ana \xfcr\xfcn resmi olarak kullanılır"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "• Resimleri sıralamak i\xe7in \xfczerine gelin ve ok butonlarını kullanın"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "• Yerel dosya yolları (/images/...) da kullanabilirsiniz"
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

/***/ 7993:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ArrowUpTrayIcon({
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
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowUpTrayIcon);
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

/***/ 3524:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function PhotoIcon({
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
    d: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PhotoIcon);
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
/******/ __webpack_require__.O(0, [1176,2958,2971,993,1744], function() { return __webpack_exec__(3988); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);