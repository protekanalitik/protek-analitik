"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6359],{

/***/ 6359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Products; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/index.mjs + 290 modules
var es = __webpack_require__(477);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(6691);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js
var ArrowRightIcon = __webpack_require__(1122);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BeakerIcon.js
var BeakerIcon = __webpack_require__(8294);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CubeIcon.js
var CubeIcon = __webpack_require__(6551);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/FlagIcon.js
var FlagIcon = __webpack_require__(322);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/WrenchIcon.js
var WrenchIcon = __webpack_require__(6633);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowRightIcon,BeakerIcon,CubeIcon,FlagIcon,WrenchIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js






// EXTERNAL MODULE: ./src/data/products.ts
var data_products = __webpack_require__(2958);
;// CONCATENATED MODULE: ./src/components/sections/Products.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const categoryList = [
    {
        label: "T\xfcm\xfc",
        key: "all"
    },
    ...data_products/* productCategories */.ZH.map((cat)=>({
            label: cat.name,
            key: cat.key
        }))
];
// Helper function to generate product URL
const generateProductUrl = (product)=>{
    // API'den gelen ürünler için category ve subcategory name'den key'e çevirme
    const findCategoryKey = (categoryName)=>{
        const category = data_products/* productCategories */.ZH.find((cat)=>cat.name === categoryName);
        return category ? category.key : "laboratuvar-ekipmanlari" // fallback
        ;
    };
    const findSubcategoryKey = (categoryName, subcategoryName)=>{
        const category = data_products/* productCategories */.ZH.find((cat)=>cat.name === categoryName);
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
    for (const category of data_products/* productCategories */.ZH){
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
function Products() {
    var _productCategories_find;
    const [selected, setSelected] = (0,react.useState)("all");
    const [selectedSub, setSelectedSub] = (0,react.useState)(null);
    const [products, setProducts] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const scrollRef = (0,react.useRef)(null);
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
    // Alt kategori listesi
    const subcategories = selected === "all" ? [] : ((_productCategories_find = data_products/* productCategories */.ZH.find((cat)=>cat.key === selected)) === null || _productCategories_find === void 0 ? void 0 : _productCategories_find.subcategories) || [];
    // Seçili ürünler - API'den gelen ürünleri filtrele
    let filteredProducts = [];
    if (selected === "all") {
        filteredProducts = products;
    } else if (selectedSub) {
        filteredProducts = products.filter((product)=>{
            var _productCategories_find, _productCategories_find_subcategories_find, _productCategories_find1;
            return product.category === ((_productCategories_find = data_products/* productCategories */.ZH.find((cat)=>cat.key === selected)) === null || _productCategories_find === void 0 ? void 0 : _productCategories_find.name) && product.subcategory === ((_productCategories_find1 = data_products/* productCategories */.ZH.find((cat)=>cat.key === selected)) === null || _productCategories_find1 === void 0 ? void 0 : (_productCategories_find_subcategories_find = _productCategories_find1.subcategories.find((sub)=>sub.key === selectedSub)) === null || _productCategories_find_subcategories_find === void 0 ? void 0 : _productCategories_find_subcategories_find.name);
        });
    } else {
        filteredProducts = products.filter((product)=>{
            var _productCategories_find;
            return product.category === ((_productCategories_find = data_products/* productCategories */.ZH.find((cat)=>cat.key === selected)) === null || _productCategories_find === void 0 ? void 0 : _productCategories_find.name);
        });
    }
    // Yatay scroll fonksiyonları
    const scroll = (dir)=>{
        if (!scrollRef.current) return;
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = clientWidth * 0.8;
        scrollRef.current.scrollTo({
            left: dir === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
            behavior: "smooth"
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
            className: "section-padding bg-white",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container-custom",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center space-y-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-gradient",
                                children: "\xdcr\xfcnlerimiz"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-body-lg text-neutral-600 max-w-3xl mx-auto",
                                children: "\xdcr\xfcnler y\xfckleniyor..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-center items-center h-40",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"
                        })
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "section-padding bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center space-y-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-gradient",
                            children: "\xdcr\xfcnlerimiz"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-body-lg text-neutral-600 max-w-3xl mx-auto",
                            children: "Laboratuvarınızın her t\xfcrl\xfc ihtiyacı i\xe7in geniş \xfcr\xfcn yelpazemizle hizmetinizdeyiz."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex flex-wrap justify-center gap-2 mb-4",
                    children: categoryList.map((cat)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: ()=>{
                                setSelected(cat.key);
                                setSelectedSub(null);
                            },
                            className: "px-5 py-2 rounded-full border text-body-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2\n                ".concat(selected === cat.key ? "bg-primary-600 text-white border-primary-600 shadow-md" : "bg-white text-primary-600 border-primary-100 hover:bg-primary-50"),
                            children: cat.label
                        }, cat.key))
                }),
                subcategories.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-wrap justify-center gap-2 mb-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: ()=>setSelectedSub(null),
                            className: "px-4 py-1.5 rounded-full border text-caption font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2\n                  ".concat(selectedSub === null ? "bg-accent-500 text-white border-accent-500 shadow" : "bg-white text-primary-600 border-primary-100 hover:bg-primary-50"),
                            children: "T\xfcm\xfc"
                        }),
                        subcategories.map((sub)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: ()=>setSelectedSub(sub.key),
                                className: "px-4 py-1.5 rounded-full border text-caption font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2\n                  ".concat(selectedSub === sub.key ? "bg-accent-500 text-white border-accent-500 shadow" : "bg-white text-primary-600 border-primary-100 hover:bg-primary-50"),
                                children: sub.name
                            }, sub.key))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: ()=>scroll("left"),
                            className: "hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary-100 border border-primary-200 rounded-full w-8 h-8 items-center justify-center shadow transition-all",
                            "aria-label": "Sola kaydır",
                            style: {
                                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M15 19l-7-7 7-7"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            ref: scrollRef,
                            className: "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar",
                            tabIndex: 0,
                            style: {
                                WebkitOverflowScrolling: "touch"
                            },
                            children: filteredProducts.map((product, idx)=>{
                                var _product_features, _product_applications;
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                    className: "min-w-[280px] max-w-[300px] w-full bg-white rounded-2xl shadow-soft border border-neutral-100 group snap-start transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden flex flex-col",
                                    tabIndex: 0,
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "absolute top-4 right-4 z-10",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                className: "p-2 rounded-full bg-white/90 hover:bg-white border border-neutral-200 shadow-sm transition-all duration-300 hover:scale-110",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FlagIcon/* default */.Z, {
                                                    className: "w-4 h-4 text-neutral-400 hover:text-primary-500 transition-colors"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative w-full h-40 bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "relative w-full h-28",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                        src: product.image || "/images/default-product.webp",
                                                        alt: product.name,
                                                        fill: true,
                                                        className: "object-contain transition-transform duration-500 group-hover:scale-110",
                                                        sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw",
                                                        loading: "lazy"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "p-5 relative z-10 flex-1 flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                            className: "text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2 leading-tight",
                                                            children: product.name
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-body-sm text-neutral-600 line-clamp-2",
                                                            children: product.description
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                                            className: "text-label text-neutral-700 uppercase tracking-wide mb-2 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(BeakerIcon/* default */.Z, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                "\xd6zellikler"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: [
                                                                (_product_features = product.features) === null || _product_features === void 0 ? void 0 : _product_features.slice(0, 3).map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "px-2 py-1 bg-primary-50 text-primary-700 text-caption rounded-md border border-primary-100",
                                                                        children: feature
                                                                    }, index)),
                                                                product.features && product.features.length > 3 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                    className: "px-2 py-1 bg-neutral-100 text-neutral-600 text-caption rounded-md",
                                                                    children: [
                                                                        "+",
                                                                        product.features.length - 3,
                                                                        " daha"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                                            className: "text-label text-neutral-700 uppercase tracking-wide mb-2 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CubeIcon/* default */.Z, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                "Uygulama Alanları"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: [
                                                                (_product_applications = product.applications) === null || _product_applications === void 0 ? void 0 : _product_applications.slice(0, 2).map((app, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "px-2 py-1 bg-secondary-50 text-secondary-700 text-caption rounded-md border border-secondary-100",
                                                                        children: app
                                                                    }, index)),
                                                                product.applications && product.applications.length > 2 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                    className: "px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md",
                                                                    children: [
                                                                        "+",
                                                                        product.applications.length - 2,
                                                                        " alan"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex gap-3 mt-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            href: generateProductUrl(product),
                                                            className: "flex-1 bg-[#001328] text-white text-sm font-semibold py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#001328] hover:via-[#2A50F8] hover:to-[#FF4766] transition-all duration-700 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 flex items-center justify-center gap-2 group/btn relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-600 hover:before:left-[100%]",
                                                            children: [
                                                                "İncele",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon/* default */.Z, {
                                                                    className: "w-4 h-4 group-hover/btn:translate-x-1 transition-all duration-300"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                            className: "p-3 border-2 border-primary-200 text-primary-600 rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WrenchIcon/* default */.Z, {
                                                                className: "w-4 h-4"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, product.id || idx);
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: ()=>scroll("right"),
                            className: "hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary-100 border border-primary-200 rounded-full w-8 h-8 items-center justify-center shadow transition-all",
                            "aria-label": "Sağa kaydır",
                            style: {
                                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M9 5l7 7-7 7"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-center mt-10",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        href: "/urunler",
                        className: "btn-primary",
                        children: [
                            "T\xfcm \xdcr\xfcnleri G\xf6r\xfcnt\xfcle",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon/* default */.Z, {
                                className: "w-5 h-5"
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 6633:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

}]);