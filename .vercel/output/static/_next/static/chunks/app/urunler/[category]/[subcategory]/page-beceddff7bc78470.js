(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3386],{

/***/ 297:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9502))

/***/ }),

/***/ 9502:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SubcategoryPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/index.mjs + 290 modules
var es = __webpack_require__(477);
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/dist/index.mjs
var dist = __webpack_require__(4702);
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
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/FunnelIcon.js
var FunnelIcon = __webpack_require__(8034);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js
var HomeIcon = __webpack_require__(4992);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/WrenchIcon.js
var WrenchIcon = __webpack_require__(6633);
;// CONCATENATED MODULE: __barrel_optimize__?names=BeakerIcon,ChevronRightIcon,CubeIcon,FlagIcon,FunnelIcon,HomeIcon,WrenchIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js








// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(5330);
// EXTERNAL MODULE: ./src/components/layout/Footer.tsx + 1 modules
var Footer = __webpack_require__(1422);
;// CONCATENATED MODULE: ./src/app/urunler/[category]/[subcategory]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const iconMap = {
    beaker: BeakerIcon/* default */.Z,
    cube: CubeIcon/* default */.Z,
    wrench: WrenchIcon/* default */.Z
};
function SubcategoryPage(param) {
    let { params } = param;
    const [sortBy, setSortBy] = (0,react.useState)("name");
    const [productCategories, setProductCategories] = (0,react.useState)([]);
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
                    icon: "beaker",
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
                    icon: "cube",
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
                    icon: "wrench",
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
    // useEffect to fetch categories on mount
    (0,react.useEffect)(()=>{
        fetchCategories();
    }, []);
    // Kategori ve alt kategoriyi bul
    const category = productCategories.find((cat)=>cat.key === params.category);
    const subcategory = category === null || category === void 0 ? void 0 : category.subcategories.find((sub)=>sub.key === params.subcategory);
    if (!category || !subcategory) {
        (0,navigation.notFound)();
    }
    // Ürünleri sırala
    const sortedProducts = [
        ...subcategory.products
    ].sort((a, b)=>{
        if (sortBy === "name") {
            return a.name.localeCompare(b.name, "tr", {
                sensitivity: "base"
            });
        } else {
            return a.applications.length - b.applications.length;
        }
    });
    const IconComponent = iconMap[category.icon] || BeakerIcon/* default */.Z;
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
                                className: "flex items-center text-sm text-neutral-600 flex-wrap gap-1",
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
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/urunler/".concat(category.key),
                                        className: "hover:text-primary-600 transition-colors",
                                        children: category.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                        className: "w-4 h-4 mx-2"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-neutral-800 font-medium",
                                        children: subcategory.name
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
                                        children: subcategory.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-lg lg:text-xl text-primary-100 max-w-3xl mx-auto",
                                        children: subcategory.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-primary-100",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-2xl font-bold text-white",
                                                children: subcategory.products.length
                                            }),
                                            " \xfcr\xfcn bulundu"
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-6 bg-white border-b",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-sm text-neutral-600",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "font-medium text-neutral-800",
                                                children: subcategory.products.length
                                            }),
                                            " \xfcr\xfcn listeleniyor"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center gap-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FunnelIcon/* default */.Z, {
                                                    className: "w-4 h-4 text-neutral-500"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "text-sm text-neutral-600",
                                                    children: "Sırala:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                    value: sortBy,
                                                    onChange: (e)=>setSortBy(e.target.value),
                                                    className: "text-sm border border-neutral-300 rounded-lg px-3 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                            value: "name",
                                                            children: "İsme G\xf6re (A-Z)"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                            value: "applications",
                                                            children: "Uygulama Sayısına G\xf6re"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        ref: ref,
                        className: "py-16",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom",
                            children: sortedProducts.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: sortedProducts.map((product, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.6,
                                            delay: index * 0.1
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/urunler/".concat(category.key, "/").concat(params.subcategory, "/").concat(product.id),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative h-48 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                                    src: product.image,
                                                                    alt: product.name,
                                                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "text-lg font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors",
                                                                    children: product.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-neutral-600 text-sm mb-4 line-clamp-3",
                                                                    children: product.description
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "space-y-2 mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                            className: "text-xs font-semibold text-neutral-700 uppercase tracking-wide",
                                                                            children: "\xd6ne \xc7ıkan \xd6zellikler"
                                                                        }),
                                                                        product.features.slice(0, 3).map((feature, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center text-xs text-neutral-500",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 flex-shrink-0"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "line-clamp-1",
                                                                                        children: feature
                                                                                    })
                                                                                ]
                                                                            }, idx))
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                            className: "text-xs font-semibold text-neutral-700 uppercase tracking-wide mb-2",
                                                                            children: "Uygulama Alanları"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "flex flex-wrap gap-1",
                                                                            children: [
                                                                                product.applications.slice(0, 3).map((app, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full",
                                                                                        children: app
                                                                                    }, idx)),
                                                                                product.applications.length > 3 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                    className: "px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full",
                                                                                    children: [
                                                                                        "+",
                                                                                        product.applications.length - 3
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                product.specifications && Object.keys(product.specifications).length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                            className: "text-xs font-semibold text-neutral-700 uppercase tracking-wide mb-2",
                                                                            children: "Teknik \xd6zellikler"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            className: "text-xs text-neutral-500 space-y-1",
                                                                            children: Object.entries(product.specifications || {}).slice(0, 2).map((param)=>{
                                                                                let [key, value] = param;
                                                                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "flex justify-between",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                            className: "font-medium",
                                                                                            children: [
                                                                                                key,
                                                                                                ":"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                            children: String(value)
                                                                                        })
                                                                                    ]
                                                                                }, key);
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center justify-between pt-4 border-t border-neutral-100",
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
                                    }, product.id))
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
                                        children: "Bu alt kategoride \xfcr\xfcn bulunamadı"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-neutral-600 mb-6",
                                        children: "Yakında yeni \xfcr\xfcnler eklenecektir."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "/urunler/".concat(category.key),
                                        className: "inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors",
                                        children: [
                                            "Kategoriye Geri D\xf6n",
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
                        className: "py-16 bg-white",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "text-2xl font-bold text-neutral-800 mb-8 text-center",
                                    children: [
                                        category.name,
                                        " - Diğer Alt Kategoriler"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: category.subcategories.filter((sub)=>sub.key !== params.subcategory).map((sub, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: inView ? {
                                                opacity: 1,
                                                y: 0
                                            } : {},
                                            transition: {
                                                duration: 0.5,
                                                delay: index * 0.1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/urunler/".concat(category.key, "/").concat(sub.key),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-neutral-50 hover:bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors mb-2",
                                                            children: sub.name
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-sm text-neutral-600 mb-4 line-clamp-2",
                                                            children: sub.description
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center justify-between text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                    className: "text-neutral-500",
                                                                    children: [
                                                                        sub.products.length,
                                                                        " \xfcr\xfcn"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                                    className: "w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, sub.key))
                                })
                            ]
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
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.8,
                                    delay: 0.3
                                },
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-3xl lg:text-4xl font-bold text-white",
                                        children: "\xdcr\xfcn Karşılaştırması mı Yapıyorsunuz?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xl text-primary-100 max-w-2xl mx-auto",
                                        children: "Uzman ekibimiz size en uygun \xfcr\xfcn\xfc se\xe7menizde yardımcı olur"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/iletisim",
                                                className: "bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors",
                                                children: "\xdcr\xfcn Karşılaştırması İste"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/teknik-destek",
                                                className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors",
                                                children: "Teknik Danışmanlık"
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
/******/ __webpack_require__.O(0, [1176,3466,9751,4166,5330,1422,2971,993,1744], function() { return __webpack_exec__(297); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);