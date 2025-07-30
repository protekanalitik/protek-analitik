(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8573],{

/***/ 713:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6454))

/***/ }),

/***/ 6454:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewProductPage; },
/* harmony export */   dynamic: function() { return /* binding */ dynamic; },
/* harmony export */   runtime: function() { return /* binding */ runtime; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4033);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1396);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3753);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5255);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2938);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8265);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4571);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1550);
/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9186);
/* harmony import */ var _components_MultipleImageUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8364);
/* __next_internal_client_entry_do_not_use__ dynamic,runtime,default auto */ 

// Force dynamic rendering to prevent static generation errors
const dynamic = "force-dynamic";
// Use Edge Runtime for Cloudflare Pages compatibility
const runtime = "edge";




function NewProductPage() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: "lab-equipment",
            name: "Laboratuvar Ekipmanları"
        }
    ]);
    const [subcategories, setSubcategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
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
    // Fetch categories and subcategories on component mount
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "w-5 h-5"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "Yeni \xdcr\xfcn Ekle"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "text-gray-600",
                                    children: "Sisteme yeni \xfcr\xfcn bilgilerini girin"
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
                                                                            Array.isArray(categories) && categories.map((category)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                                                    value: (category === null || category === void 0 ? void 0 : category.id) || "",
                                                                                    children: (category === null || category === void 0 ? void 0 : category.name) || "Bilinmeyen Kategori"
                                                                                }, (category === null || category === void 0 ? void 0 : category.id) || Math.random()))
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
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    className: "w-4 h-4"
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
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                                className: "w-3 h-3"
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
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MultipleImageUpload__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            images: form.images,
                                            onChange: (images)=>setForm((prev)=>({
                                                        ...prev,
                                                        images
                                                    })),
                                            label: "\xdcr\xfcn G\xf6rselleri",
                                            maxImages: 8
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        className: "w-5 h-5 mr-2 text-green-600"
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
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
                                disabled: loading,
                                className: "inline-flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors",
                                children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowLeftIcon_CheckCircleIcon_DocumentIcon_FolderPlusIcon_PlusIcon_ShieldCheckIcon_TruckIcon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            className: "w-4 h-4"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,1832,2971,993,1744], function() { return __webpack_exec__(713); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);