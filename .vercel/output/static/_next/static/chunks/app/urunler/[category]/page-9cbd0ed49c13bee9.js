(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6381],{

/***/ 6577:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1134))

/***/ }),

/***/ 1134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CategoryPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/index.mjs + 290 modules
var es = __webpack_require__(477);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(6691);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4033);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BeakerIcon.js
var BeakerIcon = __webpack_require__(8294);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(3217);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CubeIcon.js
var CubeIcon = __webpack_require__(6551);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/FlagIcon.js
var FlagIcon = __webpack_require__(322);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js
var HomeIcon = __webpack_require__(4992);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/WrenchIcon.js
var WrenchIcon = __webpack_require__(6633);
;// CONCATENATED MODULE: __barrel_optimize__?names=BeakerIcon,ChevronRightIcon,CubeIcon,FlagIcon,HomeIcon,WrenchIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js







// EXTERNAL MODULE: ./src/data/products.ts
var data_products = __webpack_require__(2958);
// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(5330);
// EXTERNAL MODULE: ./src/components/layout/Footer.tsx + 1 modules
var Footer = __webpack_require__(1422);
;// CONCATENATED MODULE: ./src/app/urunler/[category]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const iconMap = {
    beaker: BeakerIcon/* default */.Z,
    cube: CubeIcon/* default */.Z,
    wrench: WrenchIcon/* default */.Z
};
function CategoryPage(param) {
    let { params } = param;
    const [selectedSubcategory, setSelectedSubcategory] = (0,react.useState)(null);
    const [products, setProducts] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    // Kategoriyi bul
    const category = data_products/* productCategories */.ZH.find((cat)=>cat.key === params.category);
    if (!category) {
        (0,navigation.notFound)();
    }
    // Fetch products from API
    const fetchProducts = async ()=>{
        try {
            setLoading(true);
            const response = await fetch("/api/products");
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) {
                setProducts(data.data);
            } else {
                console.error("Failed to fetch products:", data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally{
            setLoading(false);
        }
    };
    (0,react.useEffect)(()=>{
        fetchProducts();
    }, []);
    // Filter products by category from API data
    const categoryProducts = products.filter((product)=>product.category === category.name);
    // Helper function to get subcategory key for a product
    const getSubcategoryKeyForProduct = (productId)=>{
        // Önce statik yapıda ara
        for (const subcategory of category.subcategories){
            if (subcategory.products.some((p)=>p.id === productId)) {
                return subcategory.key;
            }
        }
        // API'den gelen ürün için subcategory name'den key oluştur
        const product = categoryProducts.find((p)=>p.id === productId);
        if (product && product.subcategory) {
            const subcategory = category.subcategories.find((sub)=>sub.name === product.subcategory);
            if (subcategory) {
                return subcategory.key;
            }
            // Fallback: name'den key oluştur
            return product.subcategory.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/,/g, "").replace(/\s+/g, "-") || "test-sistemleri";
        }
        return "unknown";
    };
    // Generate product URL function
    const generateProductUrl = (product)=>{
        const subcategoryKey = getSubcategoryKeyForProduct(product.id);
        return "/urunler/".concat(category.key, "/").concat(subcategoryKey, "/").concat(product.id);
    };
    // Get subcategory counts from API data
    const getSubcategoryProductCount = (subcategoryName)=>{
        return categoryProducts.filter((product)=>product.subcategory === subcategoryName).length;
    };
    // Seçili alt kategoriye göre ürünleri filtrele
    const filteredProducts = selectedSubcategory ? categoryProducts.filter((product)=>{
        const subcategory = category.subcategories.find((sub)=>sub.key === selectedSubcategory);
        return subcategory && product.subcategory === subcategory.name;
    }) : categoryProducts;
    const IconComponent = iconMap[category.icon] || BeakerIcon/* default */.Z;
    const totalProducts = categoryProducts.length;
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
                        className: "py-4 bg-white border-b border-neutral-200",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                className: "flex items-center text-sm text-neutral-600",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/",
                                        className: "hover:text-primary-600 transition-colors",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeIcon/* default */.Z, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                        className: "w-4 h-4 mx-2"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/urunler",
                                        className: "hover:text-primary-600 transition-colors",
                                        children: "\xdcr\xfcnler"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                        className: "w-4 h-4 mx-2"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-neutral-800 font-medium",
                                        children: category.name
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "relative py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
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
                                className: "text-center text-white space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                            className: "w-10 h-10 text-white"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                        className: "text-4xl lg:text-5xl font-bold",
                                        children: category.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-lg lg:text-xl text-primary-100 max-w-3xl mx-auto",
                                        children: category.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex justify-center items-center gap-8 text-primary-100",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: category.subcategories.length
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "text-sm",
                                                        children: "Alt Kategori"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: totalProducts
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "text-sm",
                                                        children: "\xdcr\xfcn"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-8 bg-white border-b",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: ()=>setSelectedSubcategory(null),
                                        className: "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ".concat(selectedSubcategory === null ? "bg-primary-600 text-white shadow-md" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"),
                                        children: [
                                            "T\xfcm\xfc (",
                                            totalProducts,
                                            ")"
                                        ]
                                    }),
                                    category.subcategories.map((subcategory)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: ()=>setSelectedSubcategory(subcategory.key),
                                            className: "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ".concat(selectedSubcategory === subcategory.key ? "bg-primary-600 text-white shadow-md" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"),
                                            children: [
                                                subcategory.name,
                                                " (",
                                                getSubcategoryProductCount(subcategory.name),
                                                ")"
                                            ]
                                        }, subcategory.key))
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-16",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom",
                            children: filteredProducts.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: filteredProducts.map((product, index)=>{
                                    var _product_features, _product_applications;
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
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
                                            delay: index * 0.1
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: generateProductUrl(product),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative h-48 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                                    src: product.image || "/images/default-product.webp",
                                                                    alt: product.name,
                                                                    fill: true,
                                                                    className: "object-cover group-hover:scale-105 transition-transform duration-500",
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                    className: "absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FlagIcon/* default */.Z, {
                                                                        className: "w-5 h-5 text-neutral-400 hover:text-primary-500 transition-colors"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "text-xs text-primary-600 font-medium mb-2",
                                                                    children: product.subcategory
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "text-lg font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors",
                                                                    children: product.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-neutral-600 text-sm mb-4 line-clamp-3",
                                                                    children: product.description
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "space-y-2 mb-4",
                                                                    children: (_product_features = product.features) === null || _product_features === void 0 ? void 0 : _product_features.slice(0, 3).map((feature, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "flex items-center text-xs text-neutral-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                    className: "w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"
                                                                                }),
                                                                                feature
                                                                            ]
                                                                        }, idx))
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "flex flex-wrap gap-1 mb-4",
                                                                    children: (_product_applications = product.applications) === null || _product_applications === void 0 ? void 0 : _product_applications.slice(0, 3).map((app, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full",
                                                                            children: app
                                                                        }, idx))
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
                                        })
                                    }, product.id);
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center py-16",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BeakerIcon/* default */.Z, {
                                            className: "w-12 h-12 text-neutral-400"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "text-xl font-semibold text-neutral-800 mb-2",
                                        children: "Bu kategoride \xfcr\xfcn bulunamadı"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-neutral-600 mb-6",
                                        children: "Yakında yeni \xfcr\xfcnler eklenecektir."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "/urunler",
                                        className: "inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors",
                                        children: [
                                            "Diğer Kategorilere Bak",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                className: "w-4 h-4 ml-2"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-16 bg-gradient-to-r from-primary-600 to-primary-700",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.3
                                },
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-3xl lg:text-4xl font-bold text-white",
                                        children: "Teknik Destek İhtiyacınız mı Var?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xl text-primary-100 max-w-2xl mx-auto",
                                        children: "\xdcr\xfcn se\xe7imi ve teknik \xf6zellikler hakkında uzman desteği alın"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/iletisim",
                                                className: "bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors",
                                                children: "İletişime Ge\xe7"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,2695,1776,5330,1422,2958,2971,993,1744], function() { return __webpack_exec__(6577); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);