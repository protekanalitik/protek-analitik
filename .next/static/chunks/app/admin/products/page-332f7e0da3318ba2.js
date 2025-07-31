(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4122],{

/***/ 4525:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8397))

/***/ }),

/***/ 8397:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ProductsPage; },
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
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowsUpDownIcon.js
var ArrowsUpDownIcon = __webpack_require__(6074);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BuildingOffice2Icon.js
var BuildingOffice2Icon = __webpack_require__(1039);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(3217);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js
var ClockIcon = __webpack_require__(2929);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js
var EyeIcon = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/FunnelIcon.js
var FunnelIcon = __webpack_require__(8034);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js
var MagnifyingGlassIcon = __webpack_require__(4020);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PencilIcon.js
var PencilIcon = __webpack_require__(2125);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js
var PlusIcon = __webpack_require__(5255);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TagIcon.js
var TagIcon = __webpack_require__(2469);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js
var TrashIcon = __webpack_require__(7227);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowsUpDownIcon,BuildingOffice2Icon,ChevronRightIcon,ClockIcon,EyeIcon,FunnelIcon,MagnifyingGlassIcon,PencilIcon,PlusIcon,TagIcon,TrashIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js












;// CONCATENATED MODULE: ./src/app/admin/products/page.tsx
/* __next_internal_client_entry_do_not_use__ dynamic,runtime,default auto */ 

// Force dynamic rendering to prevent static generation errors
const dynamic = "force-dynamic";
// Use Edge Runtime for Cloudflare Pages compatibility
const runtime = "edge";

// Essential icons for immediate use

function ProductsPage() {
    const [products, setProducts] = (0,react.useState)([]);
    const [filteredProducts, setFilteredProducts] = (0,react.useState)([]);
    const [productCategories, setProductCategories] = (0,react.useState)([]);
    const [searchTerm, setSearchTerm] = (0,react.useState)("");
    const [selectedCategory, setSelectedCategory] = (0,react.useState)("");
    const [selectedSubcategory, setSelectedSubcategory] = (0,react.useState)("");
    const [sortDirection, setSortDirection] = (0,react.useState)("newest");
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    // Fetch categories from API (static import yerine)
    const fetchCategories = async ()=>{
        try {
            // Fallback categories - static import yerine
            const fallbackCategories = [
                {
                    key: "lab-equipment",
                    name: "Laboratuvar Ekipmanları, Sarf Malzemeler Ve Kitler",
                    description: "Laboratuvar ekipmanları ve sarf malzemeleri",
                    subcategories: [
                        {
                            key: "fiziksel-analiz",
                            name: "Fiziksel Analiz Ekipmanları",
                            description: "",
                            products: []
                        },
                        {
                            key: "kimyasal-analiz",
                            name: "Kimyasal Analiz Ekipmanları",
                            description: "",
                            products: []
                        },
                        {
                            key: "mikrobiyoloji",
                            name: "Mikrobiyoloji Analiz Ekipmanları",
                            description: "",
                            products: []
                        },
                        {
                            key: "test-olcu",
                            name: "Test, \xd6l\xe7\xfc Kontrol Sistemleri",
                            description: "",
                            products: []
                        },
                        {
                            key: "ar-ge",
                            name: "Araştırma ve Geliştirme Ekipmanları",
                            description: "",
                            products: []
                        }
                    ]
                },
                {
                    key: "process-control",
                    name: "Proses Kontrol Ve Hat Tipi Analiz \xc7\xf6z\xfcmleri",
                    description: "Hat tipi analiz sistemleri",
                    subcategories: [
                        {
                            key: "hat-tipi",
                            name: "Hat Tipi Analiz Sistemleri",
                            description: "",
                            products: []
                        }
                    ]
                },
                {
                    key: "pilot-systems",
                    name: "Pilot Tipi \xdcretim ve Proses Sim\xfclasyon Sistemleri",
                    description: "Pilot \xfcretim sistemleri",
                    subcategories: [
                        {
                            key: "karistirma",
                            name: "Karıştırma ve Homojenizasyon",
                            description: "",
                            products: []
                        }
                    ]
                }
            ];
            setProductCategories(fallbackCategories);
        } catch (error) {
            console.error("Kategorileri y\xfcklerken hata:", error);
            setProductCategories([]);
        }
    };
    // Fetch products from API
    const fetchProducts = async ()=>{
        try {
            setLoading(true);
            setError(null);
            // Categories'i de çek
            await fetchCategories();
            const response = await fetch("/api/products", {
                credentials: "include"
            });
            if (!response.ok) {
                throw new Error("API hatası: ".concat(response.status));
            }
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) {
                setProducts(data.data);
                setFilteredProducts(data.data);
            } else {
                throw new Error("API yanıtı beklenenden farklı");
            }
        } catch (error) {
            console.error("\xdcr\xfcnleri y\xfcklerken hata:", error);
            setError(error instanceof Error ? error.message : "Bilinmeyen hata");
            setProducts([]);
            setFilteredProducts([]);
        } finally{
            setLoading(false);
        }
    };
    (0,react.useEffect)(()=>{
        fetchProducts();
    }, []);
    // Sorting function
    const sortProducts = (productsToSort, sortDirection)=>{
        const sorted = [
            ...productsToSort
        ];
        return sorted.sort((a, b)=>{
            // updated_at varsa onu kullan, yoksa created_at'i kullan
            const aTime = a.updated_at || a.created_at ? new Date(a.updated_at || a.created_at).getTime() : 0;
            const bTime = b.updated_at || b.created_at ? new Date(b.updated_at || b.created_at).getTime() : 0;
            if (sortDirection === "newest") {
                return bTime - aTime // En yeni güncellenme üstte
                ;
            } else {
                return aTime - bTime // En eski güncellenme üstte
                ;
            }
        });
    };
    // Format date for display
    const formatDate = (dateString)=>{
        if (!dateString) return "Tarih yok";
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            });
        } catch (e) {
            return "Ge\xe7ersiz tarih";
        }
    };
    // Toggle sort direction
    const toggleSortDirection = ()=>{
        setSortDirection((prev)=>prev === "newest" ? "oldest" : "newest");
    };
    (0,react.useEffect)(()=>{
        let items = [
            ...products
        ];
        // Search filter
        if (searchTerm) {
            items = items.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        // Category filter
        if (selectedCategory) {
            items = items.filter((product)=>product.category === selectedCategory || product.category_id === selectedCategory);
        }
        // Subcategory filter
        if (selectedSubcategory) {
            items = items.filter((product)=>product.subcategory === selectedSubcategory || product.subcategory_id === selectedSubcategory);
        }
        // Apply sorting
        const sortedItems = sortProducts(items, sortDirection);
        setFilteredProducts(sortedItems);
    }, [
        products,
        searchTerm,
        selectedCategory,
        selectedSubcategory,
        sortDirection
    ]);
    const handleDeleteProduct = async (productId)=>{
        if (confirm("Bu \xfcr\xfcn\xfc silmek istediğinizden emin misiniz?")) {
            try {
                const response = await fetch("/api/products/".concat(productId), {
                    method: "DELETE",
                    credentials: "include"
                });
                const result = await response.json();
                if (result.success) {
                    // Refresh products list after deletion
                    await fetchProducts();
                    alert("\xdcr\xfcn başarıyla silindi!");
                } else {
                    alert("Hata: ".concat(result.error));
                }
            } catch (error) {
                console.error("\xdcr\xfcn silme hatası:", error);
                alert("Hata: \xdcr\xfcn silinirken bir sorun oluştu.");
            }
        }
    };
    const getAvailableSubcategories = ()=>{
        if (!selectedCategory) return [];
        const category = productCategories.find((cat)=>cat.name === selectedCategory);
        return (category === null || category === void 0 ? void 0 : category.subcategories) || [];
    };
    // Loading state
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "\xdcr\xfcn Y\xf6netimi"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-600",
                                children: "Sistemdeki t\xfcm \xfcr\xfcnleri g\xf6r\xfcnt\xfcleyin ve y\xf6netin"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "bg-white rounded-lg border border-gray-200 p-12 text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-gray-500",
                        children: "\xdcr\xfcnler y\xfckleniyor..."
                    })
                })
            ]
        });
    }
    // Error state
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "\xdcr\xfcn Y\xf6netimi"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-600",
                                children: "Sistemdeki t\xfcm \xfcr\xfcnleri g\xf6r\xfcnt\xfcleyin ve y\xf6netin"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white rounded-lg border border-red-200 p-12 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-red-600 mb-4",
                            children: [
                                "❌ Hata: ",
                                error
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: fetchProducts,
                            className: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700",
                            children: "Tekrar Dene"
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6 max-w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "\xdcr\xfcn Y\xf6netimi"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-600",
                                children: "Sistemdeki t\xfcm \xfcr\xfcnleri g\xf6r\xfcnt\xfcleyin ve y\xf6netin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                        href: "/admin/products/new",
                        className: "inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                className: "w-5 h-5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "Yeni \xdcr\xfcn"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "bg-white rounded-lg border border-gray-200 px-6 py-3",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-lg font-bold text-blue-600",
                                    children: filteredProducts.length
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-xs text-gray-600",
                                    children: "G\xf6r\xfcnt\xfclenen \xdcr\xfcn"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center border-l border-r border-gray-200",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-lg font-bold text-green-600",
                                    children: new Set(filteredProducts.map((p)=>p.category)).size
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-xs text-gray-600",
                                    children: "Farklı Kategori"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-lg font-bold text-purple-600",
                                    children: new Set(filteredProducts.map((p)=>p.subcategory)).size
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-xs text-gray-600",
                                    children: "Farklı Alt Kategori"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-white rounded-lg border border-gray-200 p-4 sm:p-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative lg:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MagnifyingGlassIcon/* default */.Z, {
                                        className: "w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "text",
                                        placeholder: "\xdcr\xfcn ara...",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                value: selectedCategory,
                                onChange: (e)=>{
                                    setSelectedCategory(e.target.value);
                                    setSelectedSubcategory("");
                                },
                                className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                        value: "",
                                        children: "T\xfcm Kategoriler"
                                    }),
                                    productCategories.map((category)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                            value: category.name,
                                            children: category.name
                                        }, category.key))
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                value: selectedSubcategory,
                                onChange: (e)=>setSelectedSubcategory(e.target.value),
                                disabled: !selectedCategory,
                                className: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 text-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                        value: "",
                                        children: "T\xfcm Alt Kategoriler"
                                    }),
                                    getAvailableSubcategories().map((subcategory)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                            value: subcategory.name,
                                            children: subcategory.name
                                        }, subcategory.key))
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                onClick: toggleSortDirection,
                                className: "inline-flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowsUpDownIcon/* default */.Z, {
                                        className: "w-4 h-4"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: sortDirection === "newest" ? "En Son Değişiklik \xdcstte" : "En Eski Değişiklik \xdcstte"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between mt-4 pt-4 border-t border-gray-200 gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FunnelIcon/* default */.Z, {
                                        className: "w-4 h-4 mr-2"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-medium",
                                        children: filteredProducts.length
                                    }),
                                    " \xfcr\xfcn bulundu"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: fetchProducts,
                                        className: "bg-gray-100 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200 text-sm transition-colors",
                                        children: "\uD83D\uDD04 Yenile"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "Toplam: ",
                                            products.length,
                                            " \xfcr\xfcn"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "space-y-3",
                children: filteredProducts.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center py-16 px-6 bg-white rounded-lg border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TagIcon/* default */.Z, {
                            className: "w-12 h-12 mx-auto text-gray-300"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: "mt-4 text-lg font-medium text-gray-900",
                            children: products.length === 0 ? "Sistemde hi\xe7 \xfcr\xfcn yok" : "\xdcr\xfcn bulunamadı"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "mt-1 text-sm text-gray-500",
                            children: products.length === 0 ? "İlk \xfcr\xfcn\xfcn\xfcz\xfc ekleyerek başlayın." : "Filtreleme kriterlerinizi değiştirmeyi deneyin."
                        }),
                        products.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: "/admin/products/new",
                            className: "mt-6 inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                    className: "w-5 h-5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "İlk \xdcr\xfcn\xfc Ekle"
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "space-y-3",
                    children: filteredProducts.map((product)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 p-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-4 flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    className: "w-16 h-16 object-cover rounded-lg bg-gray-50 border border-gray-100",
                                                    src: product.image || "/images/placeholder.svg",
                                                    alt: product.name
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex-1 min-w-0 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-base font-semibold text-gray-900 truncate",
                                                        children: product.name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-sm text-gray-600 line-clamp-1",
                                                        children: product.description || "A\xe7ıklama bulunmuyor"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex sm:hidden items-center gap-2 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 border border-blue-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(BuildingOffice2Icon/* default */.Z, {
                                                                        className: "w-3 h-3 text-blue-600"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "font-medium text-blue-700 truncate max-w-[80px]",
                                                                        title: product.category || product.category_id || "No Category",
                                                                        children: (product.category || product.category_id || "No Category").length > 10 ? "".concat((product.category || product.category_id || "No Category").substring(0, 10), "...") : product.category || product.category_id || "No Category"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                                className: "w-3 h-3 text-gray-400"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "flex items-center gap-1 px-2 py-0.5 rounded bg-green-50 border border-green-200",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "font-medium text-green-700 truncate max-w-[80px]",
                                                                    title: product.subcategory || product.subcategory_id || "No Subcategory",
                                                                    children: (product.subcategory || product.subcategory_id || "No Subcategory").length > 10 ? "".concat((product.subcategory || product.subcategory_id || "No Subcategory").substring(0, 10), "...") : product.subcategory || product.subcategory_id || "No Subcategory"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-1 text-xs text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ClockIcon/* default */.Z, {
                                                                className: "w-3 h-3"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                children: [
                                                                    "Son Değişiklik: ",
                                                                    formatDate(product.updated_at || product.created_at)
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-6 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "hidden sm:flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(BuildingOffice2Icon/* default */.Z, {
                                                                className: "w-3 h-3 text-blue-600"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-xs font-medium text-blue-700 truncate max-w-[100px]",
                                                                title: product.category || product.category_id || "No Category",
                                                                children: (product.category || product.category_id || "No Category").length > 12 ? "".concat((product.category || product.category_id || "No Category").substring(0, 12), "...") : product.category || product.category_id || "No Category"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                        className: "w-3 h-3 text-gray-400"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 border border-green-200",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-xs font-medium text-green-700 truncate max-w-[100px]",
                                                            title: product.subcategory || product.subcategory_id || "No Subcategory",
                                                            children: (product.subcategory || product.subcategory_id || "No Subcategory").length > 12 ? "".concat((product.subcategory || product.subcategory_id || "No Subcategory").substring(0, 12), "...") : product.subcategory || product.subcategory_id || "No Subcategory"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "hidden md:flex items-center gap-1.5",
                                                children: [
                                                    product.isWarrantied && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200",
                                                        children: "\uD83D\uDEE1️"
                                                    }),
                                                    product.hasFreeShipping && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200",
                                                        children: "\uD83D\uDE9A"
                                                    }),
                                                    product.price && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200",
                                                        children: "\uD83D\uDCB0"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        href: "/urunler/".concat((product.category || product.category_id || "no-category").toLowerCase().replace(/ /g, "-"), "/").concat((product.subcategory || product.subcategory_id || "no-subcategory").toLowerCase().replace(/ /g, "-"), "/").concat(product.id),
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        title: "Sitede G\xf6r\xfcnt\xfcle",
                                                        className: "p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeIcon/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        href: "/admin/products/".concat(product.id, "/edit"),
                                                        title: "D\xfczenle",
                                                        className: "p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PencilIcon/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                        onClick: ()=>handleDeleteProduct(product.id),
                                                        title: "Sil",
                                                        className: "p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrashIcon/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, product.id))
                })
            })
        ]
    });
}


/***/ }),

/***/ 6074:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ArrowsUpDownIcon({
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
    d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowsUpDownIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 1039:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function BuildingOffice2Icon({
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
    d: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(BuildingOffice2Icon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 3217:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ChevronRightIcon({
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
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronRightIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 2929:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ClockIcon({
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
    d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ClockIcon);
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

/***/ 8034:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function FunnelIcon({
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
    d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FunnelIcon);
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
/******/ __webpack_require__.O(0, [1176,2971,993,1744], function() { return __webpack_exec__(4525); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);