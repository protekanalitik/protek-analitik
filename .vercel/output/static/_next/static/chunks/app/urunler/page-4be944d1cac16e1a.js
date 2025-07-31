(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9728],{

/***/ 7609:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3939))

/***/ }),

/***/ 3939:
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
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/index.mjs + 290 modules
var es = __webpack_require__(477);
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/dist/index.mjs
var dist = __webpack_require__(4702);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(6691);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BeakerIcon.js
var BeakerIcon = __webpack_require__(8294);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(3217);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CubeIcon.js
var CubeIcon = __webpack_require__(6551);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js
var MagnifyingGlassIcon = __webpack_require__(4020);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/WrenchIcon.js
var WrenchIcon = __webpack_require__(6633);
;// CONCATENATED MODULE: __barrel_optimize__?names=BeakerIcon,ChevronRightIcon,CubeIcon,MagnifyingGlassIcon,WrenchIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js






// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(5330);
// EXTERNAL MODULE: ./src/components/layout/Footer.tsx + 1 modules
var Footer = __webpack_require__(1422);
;// CONCATENATED MODULE: ./src/app/urunler/page.tsx
/* __next_internal_client_entry_do_not_use__ dynamic,runtime,default auto */ 




// Force dynamic rendering to prevent static generation errors
const dynamic = "force-dynamic";
// Use Edge Runtime for Cloudflare Pages compatibility
const runtime = "edge";




const iconMap = {
    beaker: BeakerIcon/* default */.Z,
    cube: CubeIcon/* default */.Z,
    wrench: WrenchIcon/* default */.Z
};
// Helper function to get all products from static data
const getAllStaticProducts = (categories)=>{
    const allProducts = [];
    categories.forEach((category)=>{
        category.subcategories.forEach((subcategory)=>{
            subcategory.products.forEach((product)=>{
                // Add category and subcategory info to each product
                allProducts.push({
                    ...product,
                    category: category.name,
                    subcategory: subcategory.name
                });
            });
        });
    });
    return allProducts;
};
// Helper function to generate product URL - same as in Products.tsx
const generateProductUrl = (product, categories)=>{
    // API'den gelen ürünler için category ve subcategory name'den key'e çevirme
    const findCategoryKey = (categoryName)=>{
        const category = categories.find((cat)=>cat.name === categoryName);
        return category ? category.key : "laboratuvar-ekipmanlari" // fallback
        ;
    };
    const findSubcategoryKey = (categoryName, subcategoryName)=>{
        const category = categories.find((cat)=>cat.name === categoryName);
        if (category) {
            const subcategory = category.subcategories.find((sub)=>sub.name === subcategoryName);
            if (subcategory) {
                return subcategory.key;
            }
        }
        // Fallback: subcategory name'den key oluştur
        return subcategoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/,/g, "").replace(/\s+/g, "-") || "test-sistemleri";
    };
    // Eğer statik ürünse, mevcut mantığı kullan
    for (const category of categories){
        for (const subcategory of category.subcategories){
            if (subcategory.products.some((p)=>p.id === product.id)) {
                return "/urunler/".concat(category.key, "/").concat(subcategory.key, "/").concat(product.id);
            }
        }
    }
    // API'den gelen dinamik ürünler için
    if (product.category && product.subcategory) {
        const categoryKey = findCategoryKey(product.category);
        const subcategoryKey = findSubcategoryKey(product.category, product.subcategory);
        return "/urunler/".concat(categoryKey, "/").concat(subcategoryKey, "/").concat(product.id);
    }
    // Son fallback
    return "/urunler/laboratuvar-ekipmanlari/test-sistemleri/".concat(product.id);
};
function ProductsPage() {
    const [searchQuery, setSearchQuery] = (0,react.useState)("");
    const [searchResults, setSearchResults] = (0,react.useState)([]);
    const [isSearching, setIsSearching] = (0,react.useState)(false);
    const [products, setProducts] = (0,react.useState)([]);
    const [productCategories, setProductCategories] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [ref, inView] = (0,dist/* useInView */.YD)({
        threshold: 0.1,
        triggerOnce: true
    });
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
            // Categories'i de çek
            await fetchCategories();
            const response = await fetch("/api/products");
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) {
                setProducts(data.data);
            } else {
                console.error("Failed to fetch products:", data);
                // Use static data as fallback
                console.log("API failed, using static data fallback");
                const staticProducts = getAllStaticProducts(productCategories);
                setProducts(staticProducts);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            // Development mode fallback on error
            console.log("API error, using static data fallback");
            const staticProducts = getAllStaticProducts(productCategories);
            setProducts(staticProducts);
        } finally{
            setLoading(false);
        }
    };
    (0,react.useEffect)(()=>{
        fetchProducts();
    }, []);
    // Search function using API data
    const searchProducts = (query)=>{
        if (!query.trim()) return [];
        const searchTerm = query.toLowerCase();
        return products.filter((product)=>{
            var _product_features, _product_applications;
            return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm) || product.subcategory.toLowerCase().includes(searchTerm) || ((_product_features = product.features) === null || _product_features === void 0 ? void 0 : _product_features.some((feature)=>feature.toLowerCase().includes(searchTerm))) || ((_product_applications = product.applications) === null || _product_applications === void 0 ? void 0 : _product_applications.some((app)=>app.toLowerCase().includes(searchTerm)));
        });
    };
    const handleSearch = (query)=>{
        setSearchQuery(query);
        if (query.trim().length > 2) {
            setIsSearching(true);
            const results = searchProducts(query);
            setSearchResults(results);
        } else {
            setIsSearching(false);
            setSearchResults([]);
        }
    };
    // Calculate category product counts from API data
    const getCategoryProductCount = (categoryName)=>{
        return products.filter((product)=>product.category === categoryName).length;
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "min-h-screen bg-neutral-50",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Header["default"], {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                    className: "pt-20",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-center items-center h-96",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-neutral-600",
                                    children: "\xdcr\xfcnler y\xfckleniyor..."
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer["default"], {})
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-neutral-50",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "pt-20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "relative py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom relative",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                className: "text-center text-white space-y-6",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                        className: "text-4xl lg:text-5xl xl:text-6xl font-bold mb-4",
                                        children: [
                                            "\xdcr\xfcn ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-gradient-light",
                                                children: "Katalogumuz"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-lg lg:text-xl text-primary-100 max-w-3xl mx-auto",
                                        children: "Laboratuvarınızın her t\xfcrl\xfc ihtiyacı i\xe7in geniş \xfcr\xfcn yelpazemizi keşfedin"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "max-w-2xl mx-auto mt-8",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MagnifyingGlassIcon/* default */.Z, {
                                                    className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "\xdcr\xfcn, kategori veya \xf6zellik ara...",
                                                    value: searchQuery,
                                                    onChange: (e)=>handleSearch(e.target.value),
                                                    className: "w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    isSearching && /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-8 bg-white border-b",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "text-2xl font-bold text-neutral-800 mb-6",
                                    children: [
                                        "Arama Sonu\xe7ları (",
                                        searchResults.length,
                                        ")"
                                    ]
                                }),
                                searchResults.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: searchResults.map((product)=>/*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: generateProductUrl(product, productCategories),
                                            className: "group",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                            src: product.image || "/images/default-product.webp",
                                                            alt: product.name,
                                                            width: 64,
                                                            height: 64,
                                                            className: "object-cover rounded-lg bg-neutral-100"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors",
                                                                    children: product.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-sm text-neutral-600 mt-1",
                                                                    children: product.description
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "text-xs text-neutral-500 mt-2",
                                                                    children: [
                                                                        product.category,
                                                                        " • ",
                                                                        product.subcategory
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, product.id))
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-center py-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-neutral-500",
                                        children: "Arama kriterlerinize uygun \xfcr\xfcn bulunamadı."
                                    })
                                })
                            ]
                        })
                    }),
                    !isSearching && /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        ref: ref,
                        className: "py-16",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: inView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.8
                                    },
                                    className: "text-center mb-12",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                            className: "text-3xl lg:text-4xl font-bold text-neutral-800 mb-4",
                                            children: "\xdcr\xfcn Kategorilerimiz"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "text-lg text-neutral-600 max-w-3xl mx-auto",
                                            children: [
                                                productCategories.length,
                                                " ana kategoride ",
                                                products.length,
                                                "+ \xfcr\xfcn se\xe7eneği"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                    children: productCategories.map((category, index)=>{
                                        const IconComponent = iconMap[category.icon] || BeakerIcon/* default */.Z;
                                        const productCount = getCategoryProductCount(category.name);
                                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 30
                                            },
                                            animate: inView ? {
                                                opacity: 1,
                                                y: 0
                                            } : {},
                                            transition: {
                                                duration: 0.8,
                                                delay: index * 0.1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/urunler/".concat(category.key),
                                                className: "group",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative bg-white rounded-xl border border-neutral-200 p-8 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                                                        className: "w-8 h-8 text-primary-600"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors",
                                                                    children: category.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-neutral-600 mb-4 line-clamp-3",
                                                                    children: category.description
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center justify-between text-sm text-neutral-500 mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                            children: [
                                                                                category.subcategories.length,
                                                                                " alt kategori"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                            children: [
                                                                                productCount,
                                                                                " \xfcr\xfcn"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            children: "Kategoriye Git"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                                            className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, category.key);
                                    })
                                })
                            ]
                        })
                    }),
                    !isSearching && products.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-16 bg-neutral-50",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8
                                    },
                                    className: "text-center mb-12",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                            className: "text-3xl lg:text-4xl font-bold text-neutral-800 mb-4",
                                            children: "T\xfcm \xdcr\xfcnlerimiz"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-lg text-neutral-600 max-w-3xl mx-auto",
                                            children: "Laboratuvarınızın her t\xfcrl\xfc ihtiyacı i\xe7in kapsamlı \xfcr\xfcn gamımızı keşfedin"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                    children: products.map((product, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 30
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.6,
                                                delay: index * 0.05
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: generateProductUrl(product, productCategories),
                                                className: "group",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                                    src: product.image || "/images/default-product.webp",
                                                                    alt: product.name,
                                                                    fill: true,
                                                                    className: "object-cover transition-transform duration-500 group-hover:scale-105",
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "absolute top-2 left-2",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "px-2 py-1 bg-white/90 text-xs font-medium text-neutral-700 rounded-full",
                                                                        children: product.category
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "font-semibold text-neutral-800 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors",
                                                                    children: product.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-sm text-neutral-600 mb-3 line-clamp-2",
                                                                    children: product.description
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "mb-3",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full",
                                                                        children: product.subcategory
                                                                    })
                                                                }),
                                                                product.features && product.features.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "mb-3",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "flex flex-wrap gap-1",
                                                                        children: product.features.slice(0, 2).map((feature, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center text-xs text-neutral-600",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-1.5 h-1.5 bg-primary-400 rounded-full mr-1"
                                                                                    }),
                                                                                    feature
                                                                                ]
                                                                            }, idx))
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors",
                                                                            children: "Detayları G\xf6r"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                                            className: "w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, product.id))
                                })
                            ]
                        })
                    }),
                    !isSearching && /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-16 bg-gradient-to-r from-primary-600 to-primary-700",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4
                                },
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-3xl lg:text-4xl font-bold text-white",
                                        children: "Aradığınız \xdcr\xfcn\xfc Bulamadınız mı?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xl text-primary-100 max-w-2xl mx-auto",
                                        children: "Uzman ekibimiz size \xf6zel \xe7\xf6z\xfcmler geliştirmek i\xe7in burada"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "/iletisim",
                                                className: "bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors",
                                                children: "İletişime Ge\xe7"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "/teknik-destek",
                                                className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors",
                                                children: "Teknik Destek"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer["default"], {})
        ]
    });
}


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

/***/ 6633:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function WrenchIcon({
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
    d: "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.867 19.125h.008v.008h-.008v-.008Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(WrenchIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 4702:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YD: function() { return /* binding */ useInView; }
/* harmony export */ });
/* unused harmony exports InView, defaultFallbackInView, observe */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
"use client";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/InView.tsx


// src/observe.ts
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function defaultFallbackInView(inView) {
  unsupportedValue = inView;
}
function getRootId(root) {
  if (!root) return "0";
  if (RootIds.has(root)) return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter(
    (key) => options[key] !== void 0
  ).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  const id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _a;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const { id, observer, elements } = createObserver(options);
  const callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}

// src/InView.tsx
function isPlainChildren(props) {
  return typeof props.children !== "function";
}
var InView = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    __publicField(this, "node", null);
    __publicField(this, "_unobserveCb", null);
    __publicField(this, "handleNode", (node) => {
      if (this.node) {
        this.unobserve();
        if (!node && !this.props.triggerOnce && !this.props.skip) {
          this.setState({ inView: !!this.props.initialInView, entry: void 0 });
        }
      }
      this.node = node ? node : null;
      this.observeNode();
    });
    __publicField(this, "handleChange", (inView, entry) => {
      if (inView && this.props.triggerOnce) {
        this.unobserve();
      }
      if (!isPlainChildren(this.props)) {
        this.setState({ inView, entry });
      }
      if (this.props.onChange) {
        this.props.onChange(inView, entry);
      }
    });
    this.state = {
      inView: !!props.initialInView,
      entry: void 0
    };
  }
  componentDidMount() {
    this.unobserve();
    this.observeNode();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {
      this.unobserve();
      this.observeNode();
    }
  }
  componentWillUnmount() {
    this.unobserve();
  }
  observeNode() {
    if (!this.node || this.props.skip) return;
    const {
      threshold,
      root,
      rootMargin,
      trackVisibility,
      delay,
      fallbackInView
    } = this.props;
    this._unobserveCb = observe(
      this.node,
      this.handleChange,
      {
        threshold,
        root,
        rootMargin,
        // @ts-ignore
        trackVisibility,
        // @ts-ignore
        delay
      },
      fallbackInView
    );
  }
  unobserve() {
    if (this._unobserveCb) {
      this._unobserveCb();
      this._unobserveCb = null;
    }
  }
  render() {
    const { children } = this.props;
    if (typeof children === "function") {
      const { inView, entry } = this.state;
      return children({ inView, entry, ref: this.handleNode });
    }
    const {
      as,
      triggerOnce,
      threshold,
      root,
      rootMargin,
      onChange,
      skip,
      trackVisibility,
      delay,
      initialInView,
      fallbackInView,
      ...props
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      as || "div",
      { ref: this.handleNode, ...props },
      children
    );
  }
};

// src/useInView.tsx

function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _a;
  const [ref, setRef] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const callback = react__WEBPACK_IMPORTED_MODULE_0__.useRef(onChange);
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
    () => {
      if (skip || !ref) return;
      let unobserve;
      unobserve = observe(
        ref,
        (inView, entry) => {
          setState({
            inView,
            entry
          });
          if (callback.current) callback.current(inView, entry);
          if (entry.isIntersecting && triggerOnce && unobserve) {
            unobserve();
            unobserve = void 0;
          }
        },
        {
          root,
          rootMargin,
          threshold,
          // @ts-ignore
          trackVisibility,
          // @ts-ignore
          delay
        },
        fallbackInView
      );
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;
  const previousEntryTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef(void 0);
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

//# sourceMappingURL=index.mjs.map

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,3466,9751,4166,5330,1422,2971,993,1744], function() { return __webpack_exec__(7609); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);