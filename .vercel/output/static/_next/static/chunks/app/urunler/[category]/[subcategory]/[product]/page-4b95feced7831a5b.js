(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[416],{

/***/ 9180:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5170))

/***/ }),

/***/ 5170:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ProductPage; }
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
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4033);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(5601);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowDownTrayIcon.js
var ArrowDownTrayIcon = __webpack_require__(4209);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BeakerIcon.js
var BeakerIcon = __webpack_require__(8294);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var CalendarIcon = __webpack_require__(1253);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftEllipsisIcon.js
var ChatBubbleLeftEllipsisIcon = __webpack_require__(5535);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftIcon.js
var ChatBubbleLeftIcon = __webpack_require__(6698);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(9186);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(3217);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CubeIcon.js
var CubeIcon = __webpack_require__(6551);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js
var DocumentTextIcon = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js
var HomeIcon = __webpack_require__(4992);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js
var PhoneIcon = __webpack_require__(5587);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ShareIcon.js
var ShareIcon = __webpack_require__(1447);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js
var ShieldCheckIcon = __webpack_require__(2938);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TruckIcon.js
var TruckIcon = __webpack_require__(8265);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/WrenchIcon.js
var WrenchIcon = __webpack_require__(6633);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowDownTrayIcon,BeakerIcon,CalendarIcon,ChatBubbleLeftEllipsisIcon,ChatBubbleLeftIcon,CheckCircleIcon,ChevronRightIcon,CubeIcon,DocumentTextIcon,HomeIcon,PhoneIcon,ShareIcon,ShieldCheckIcon,TruckIcon,WrenchIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js
















// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/StarIcon.js
var StarIcon = __webpack_require__(8682);
;// CONCATENATED MODULE: __barrel_optimize__?names=StarIcon!=!./node_modules/@heroicons/react/24/solid/esm/index.js


// EXTERNAL MODULE: ./src/data/products.ts
var products = __webpack_require__(2958);
// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(4930);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
;// CONCATENATED MODULE: ./src/app/urunler/[category]/[subcategory]/[product]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







// Essential icons for immediate use



// Dynamic import for layout components (safe bundle optimization)

const Header = app_dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(3466), __webpack_require__.e(5330)]).then(__webpack_require__.bind(__webpack_require__, 5330)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(5330)
            ]
    }
});
const Footer = app_dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(1422), __webpack_require__.e(1122)]).then(__webpack_require__.bind(__webpack_require__, 1422)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(1422)
            ]
    }
});
// Helper functions for development mode fallback
const findProductInStaticData = (productId, categoryKey, subcategoryKey)=>{
    try {
        const category = products/* productCategories */.ZH.find((cat)=>cat.key === categoryKey);
        if (!category) return null;
        const subcategory = category.subcategories.find((sub)=>sub.key === subcategoryKey);
        if (!subcategory) return null;
        const product = subcategory.products.find((prod)=>prod.id === productId);
        return product || null;
    } catch (error) {
        console.error("Error finding product in static data:", error);
        return null;
    }
};
const getRelatedProductsFromStaticData = (categoryKey, subcategoryKey, currentProductId)=>{
    try {
        const category = products/* productCategories */.ZH.find((cat)=>cat.key === categoryKey);
        if (!category) return [];
        const subcategory = category.subcategories.find((sub)=>sub.key === subcategoryKey);
        if (!subcategory) return [];
        return subcategory.products.filter((product)=>product.id !== currentProductId).slice(0, 4);
    } catch (error) {
        console.error("Error getting related products from static data:", error);
        return [];
    }
};
const iconMap = {
    beaker: BeakerIcon/* default */.Z,
    cube: CubeIcon/* default */.Z,
    wrench: WrenchIcon/* default */.Z
};
function ProductPage(param) {
    let { params } = param;
    var _product_features, _product_applications, _product_features1, _product_features2, _product_applications1, _product_applications2;
    const [activeTab, setActiveTab] = (0,react.useState)("overview");
    const [isFavorite, setIsFavorite] = (0,react.useState)(false);
    const [selectedImage, setSelectedImage] = (0,react.useState)(0);
    const [isFullscreen, setIsFullscreen] = (0,react.useState)(false);
    const [showVideo, setShowVideo] = (0,react.useState)(false);
    const [product, setProduct] = (0,react.useState)(null);
    const [loading, setLoading] = (0,react.useState)(true);
    const [relatedProducts, setRelatedProducts] = (0,react.useState)([]);
    const [ref, inView] = (0,dist/* useInView */.YD)({
        threshold: 0.1,
        triggerOnce: true
    });
    // Dynamic category and subcategory data from D1
    const [category, setCategory] = (0,react.useState)(null);
    const [subcategory, setSubcategory] = (0,react.useState)(null);
    // Fetch product from API
    const fetchProduct = async ()=>{
        try {
            setLoading(true);
            // Fetch specific product by ID
            const productResponse = await fetch("/api/products/".concat(params.product));
            const productData = await productResponse.json();
            if (productData.success && productData.data) {
                setProduct(productData.data);
                // Get related products (same category and subcategory)
                const relatedResponse = await fetch("/api/products?category_id=".concat(productData.data.category_id, "&subcategory_id=").concat(productData.data.subcategory_id, "&limit=5"));
                const relatedData = await relatedResponse.json();
                if (relatedData.success && Array.isArray(relatedData.data)) {
                    const related = relatedData.data.filter((p)=>p.id !== productData.data.id).slice(0, 4);
                    setRelatedProducts(related);
                }
            } else {
                // Development mode fallback - use static data
                console.log("API failed, using static data fallback");
                const fallbackProduct = findProductInStaticData(params.product, params.category, params.subcategory);
                if (fallbackProduct) {
                    setProduct(fallbackProduct);
                    // Get related products from static data
                    const relatedProducts = getRelatedProductsFromStaticData(params.category, params.subcategory, params.product);
                    setRelatedProducts(relatedProducts);
                } else {
                    console.error("Product not found in static data either:", params.product);
                }
            }
        } catch (error) {
            console.error("Error fetching product:", error);
            // Development mode fallback on error
            console.log("API error, using static data fallback");
            const fallbackProduct = findProductInStaticData(params.product, params.category, params.subcategory);
            if (fallbackProduct) {
                setProduct(fallbackProduct);
                // Get related products from static data
                const relatedProducts = getRelatedProductsFromStaticData(params.category, params.subcategory, params.product);
                setRelatedProducts(relatedProducts);
            }
        } finally{
            setLoading(false);
        }
    };
    (0,react.useEffect)(()=>{
        fetchProduct();
    }, [
        params.product
    ]);
    // Fetch category and subcategory data
    (0,react.useEffect)(()=>{
        const fetchCategoryData = async ()=>{
            try {
                const categoriesResponse = await fetch("/api/categories");
                const categoriesData = await categoriesResponse.json();
                if (categoriesData.success) {
                    const foundCategory = categoriesData.data.find((cat)=>cat.key === params.category);
                    if (foundCategory) {
                        setCategory(foundCategory);
                        const subcategoriesResponse = await fetch("/api/categories?type=subcategories&category_id=".concat(foundCategory.id));
                        const subcategoriesData = await subcategoriesResponse.json();
                        if (subcategoriesData.success) {
                            const foundSubcategory = subcategoriesData.data.find((sub)=>sub.key === params.subcategory);
                            if (foundSubcategory) {
                                setSubcategory(foundSubcategory);
                            }
                        }
                    }
                } else {
                    // Development mode fallback - use static data
                    console.log("Categories API failed, using static data fallback");
                    const staticCategory = products/* productCategories */.ZH.find((cat)=>cat.key === params.category);
                    if (staticCategory) {
                        setCategory({
                            name: staticCategory.name,
                            key: staticCategory.key
                        });
                        const staticSubcategory = staticCategory.subcategories.find((sub)=>sub.key === params.subcategory);
                        if (staticSubcategory) {
                            setSubcategory({
                                name: staticSubcategory.name,
                                key: staticSubcategory.key
                            });
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching category data:", error);
                // Development mode fallback on error
                console.log("Categories API error, using static data fallback");
                const staticCategory = products/* productCategories */.ZH.find((cat)=>cat.key === params.category);
                if (staticCategory) {
                    setCategory({
                        name: staticCategory.name,
                        key: staticCategory.key
                    });
                    const staticSubcategory = staticCategory.subcategories.find((sub)=>sub.key === params.subcategory);
                    if (staticSubcategory) {
                        setSubcategory({
                            name: staticSubcategory.name,
                            key: staticSubcategory.key
                        });
                    }
                }
            }
        };
        fetchCategoryData();
    }, [
        params.category,
        params.subcategory
    ]);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "min-h-screen bg-neutral-50",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Header, {}),
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
                                    children: "\xdcr\xfcn y\xfckleniyor..."
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {})
            ]
        });
    }
    // Handle null product case
    if (!product) {
        (0,navigation.notFound)();
    }
    if (!category || !subcategory) {
        // If product is loaded but category data is still loading, show loading state
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-gray-600",
                        children: "Y\xfckleniyor..."
                    })
                ]
            })
        });
    }
    const IconComponent = iconMap[category === null || category === void 0 ? void 0 : category.icon] || BeakerIcon/* default */.Z;
    // D1 schema'ya uyumlu resim handling - çoklu images desteği
    const productImages = (()=>{
        // Önce images array'ini kontrol et (D1 schema)
        if (Array.isArray(product.images) && product.images.length > 0) {
            return product.images.filter((img)=>img && img.trim() !== "");
        }
        // Fallback: tek image field (backward compatibility)
        if (product.image && product.image.trim() !== "") {
            return [
                product.image
            ];
        }
        // Default fallback image
        return [
            "/images/default-product.webp"
        ];
    })();
    const shareProduct = async ()=>{
        if (navigator.share) {
            try {
                await navigator.share({
                    title: product.name,
                    text: product.description,
                    url: window.location.href
                });
            } catch (err) {
                console.log("Share cancelled");
            }
        } else {
            // Fallback - Copy to clipboard
            navigator.clipboard.writeText(window.location.href);
        // Show toast notification
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-neutral-50",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((noop_head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: product.meta_title || "".concat(product.name, " - Protek Analitik")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: product.meta_description || product.description || "".concat(product.name, " - Laboratuvar ekipmanları ve \xe7\xf6z\xfcmleri")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "keywords",
                        content: product.meta_keywords || "".concat(product.name, ", laboratuvar, analitik, ").concat(category.name, ", ").concat(subcategory.name)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        property: "og:title",
                        content: product.meta_title || product.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        property: "og:description",
                        content: product.meta_description || product.description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        property: "og:image",
                        content: productImages[0]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        property: "og:url",
                        content:  true ? window.location.href : 0
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        property: "og:type",
                        content: "product"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "twitter:title",
                        content: product.meta_title || product.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "twitter:description",
                        content: product.meta_description || product.description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "twitter:image",
                        content: productImages[0]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org/",
                                "@type": "Product",
                                "name": product.name,
                                "description": product.description,
                                "image": productImages,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "Protek Analitik"
                                },
                                "category": category.name,
                                "offers": {
                                    "@type": "Offer",
                                    "availability": "https://schema.org/InStock",
                                    "priceValidUntil": new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
                                }
                            })
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "pt-20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-4 bg-white border-b border-neutral-200",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                className: "flex items-center text-sm text-neutral-600 flex-wrap gap-1",
                                "aria-label": "Breadcrumb",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "/",
                                        className: "hover:text-primary-600 transition-colors flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeIcon/* default */.Z, {
                                                className: "w-4 h-4"
                                            }),
                                            "Ana Sayfa"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                        className: "w-4 h-4 mx-2 text-neutral-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/urunler",
                                        className: "hover:text-primary-600 transition-colors",
                                        children: "\xdcr\xfcnler"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                        className: "w-4 h-4 mx-2 text-neutral-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/urunler/".concat(category.key),
                                        className: "hover:text-primary-600 transition-colors",
                                        children: category.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                        className: "w-4 h-4 mx-2 text-neutral-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/urunler/".concat(category.key, "/").concat(subcategory.key),
                                        className: "hover:text-primary-600 transition-colors",
                                        children: subcategory.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                        className: "w-4 h-4 mx-2 text-neutral-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-neutral-800 font-medium",
                                        children: product.name
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-8 bg-white",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "space-y-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "relative aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl overflow-hidden group",
                                                    style: {
                                                        minHeight: "400px"
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                        src: productImages[selectedImage],
                                                        alt: product.name,
                                                        fill: true,
                                                        className: "object-cover transition-transform duration-500 group-hover:scale-105",
                                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "flex gap-2 mt-4",
                                                    children: productImages.map((image, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                            onClick: ()=>setSelectedImage(index),
                                                            className: "relative w-20 h-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg overflow-hidden border-2 transition-all ".concat(selectedImage === index ? "border-primary-500 scale-105" : "border-transparent hover:border-primary-300"),
                                                            style: {
                                                                minHeight: "80px",
                                                                minWidth: "80px"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                                src: image,
                                                                alt: "".concat(product.name, " ").concat(index + 1),
                                                                fill: true,
                                                                className: "object-cover",
                                                                sizes: "80px"
                                                            })
                                                        }, index))
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-2 text-sm text-primary-600 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                                                className: "w-4 h-4"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: category.name
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                                className: "w-3 h-3"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: subcategory.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-start justify-between mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                                className: "text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight",
                                                                children: product.name
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "flex items-center gap-2",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                    onClick: shareProduct,
                                                                    className: "p-2 text-neutral-600 hover:text-primary-600 transition-colors",
                                                                    title: "Paylaş",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShareIcon/* default */.Z, {
                                                                        className: "w-5 h-5"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-lg text-neutral-600 mb-6 leading-relaxed",
                                                        children: product.description
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-wrap items-center gap-4 mb-6",
                                                        children: [
                                                            product.is_warrantied && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShieldCheckIcon/* default */.Z, {
                                                                        className: "w-4 h-4"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "Garantili \xdcr\xfcn"
                                                                    })
                                                                ]
                                                            }),
                                                            product.has_free_shipping && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TruckIcon/* default */.Z, {
                                                                        className: "w-4 h-4"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "\xdccretsiz Kargo"
                                                                    })
                                                                ]
                                                            }),
                                                            product.is_featured && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StarIcon/* default */.Z, {
                                                                        className: "w-4 h-4"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "\xd6ne \xc7ıkan"
                                                                    })
                                                                ]
                                                            }),
                                                            product.data_sheet && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: product.data_sheet,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex items-center gap-2 text-sm text-purple-600 bg-purple-50 px-3 py-2 rounded-lg hover:bg-purple-100 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocumentTextIcon/* default */.Z, {
                                                                        className: "w-4 h-4"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "Veri Sayfası"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownTrayIcon/* default */.Z, {
                                                                        className: "w-3 h-3"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",
                                                        children: (_product_features = product.features) === null || _product_features === void 0 ? void 0 : _product_features.slice(0, 6).map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center gap-3 p-3 bg-neutral-50 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                        className: "w-5 h-5 text-green-500 flex-shrink-0"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "text-sm text-neutral-700",
                                                                        children: feature
                                                                    })
                                                                ]
                                                            }, index))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                href: "/teklif-al",
                                                                className: "bg-primary-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChatBubbleLeftIcon/* default */.Z, {
                                                                        className: "w-5 h-5"
                                                                    }),
                                                                    "Fiyat Teklifi Al"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                href: "/iletisim",
                                                                className: "border-2 border-primary-600 text-primary-600 px-6 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                                        className: "w-5 h-5"
                                                                    }),
                                                                    "Bilgi Al"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-wrap gap-3",
                                                        children: [
                                                            product.catalog_files && Array.isArray(product.catalog_files) && product.catalog_files.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: product.catalog_files.map((catalogFile, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: catalogFile,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-primary-600 transition-colors bg-white rounded-lg border border-neutral-200 hover:border-primary-200 hover:shadow-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownTrayIcon/* default */.Z, {
                                                                                className: "w-4 h-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                children: [
                                                                                    "Katalog ",
                                                                                    index + 1
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }, index))
                                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                className: "flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-primary-600 transition-colors bg-white rounded-lg border border-neutral-200 hover:border-primary-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownTrayIcon/* default */.Z, {
                                                                        className: "w-4 h-4"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "Katalog İndir"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                href: "/iletisim#demo-talep",
                                                                className: "flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-primary-600 transition-colors bg-white rounded-lg border border-neutral-200 hover:border-primary-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, {
                                                                        className: "w-4 h-4"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "Demo Talep Et"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                href: "/iletisim#canli-destek",
                                                                className: "flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-primary-600 transition-colors bg-white rounded-lg border border-neutral-200 hover:border-primary-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChatBubbleLeftEllipsisIcon/* default */.Z, {
                                                                        className: "w-4 h-4"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "Canlı Destek"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TruckIcon/* default */.Z, {
                                                            className: "w-6 h-6 text-green-600"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "font-semibold text-green-800",
                                                                    children: "Hızlı Teslimat"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-sm text-green-600",
                                                                    children: "İstanbul i\xe7in 24 saat, diğer iller i\xe7in 2-3 iş g\xfcn\xfc"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        ref: ref,
                        className: "py-16 bg-white",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex flex-wrap border-b border-neutral-200 mb-8",
                                    children: [
                                        {
                                            key: "overview",
                                            label: "Genel Bakış",
                                            icon: BeakerIcon/* default */.Z
                                        },
                                        {
                                            key: "specifications",
                                            label: "Teknik \xd6zellikler",
                                            icon: DocumentTextIcon/* default */.Z
                                        },
                                        {
                                            key: "applications",
                                            label: "Uygulama Alanları",
                                            icon: CubeIcon/* default */.Z
                                        },
                                        {
                                            key: "support",
                                            label: "Destek",
                                            icon: ChatBubbleLeftIcon/* default */.Z
                                        }
                                    ].map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: ()=>setActiveTab(tab.key),
                                            className: "flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ".concat(activeTab === tab.key ? "border-primary-500 text-primary-600" : "border-transparent text-neutral-600 hover:text-neutral-800"),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tab.icon, {
                                                    className: "w-4 h-4"
                                                }),
                                                tab.label
                                            ]
                                        }, tab.key))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: [
                                        activeTab === "overview" && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "space-y-8",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "lg:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                className: "text-2xl font-bold text-neutral-800 mb-4",
                                                                children: "\xdcr\xfcn Genel Bakış"
                                                            }),
                                                            product.overview ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "prose prose-neutral max-w-none",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-neutral-700 leading-relaxed mb-6 whitespace-pre-line",
                                                                    children: product.overview
                                                                })
                                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                className: "text-neutral-700 leading-relaxed mb-6",
                                                                children: [
                                                                    product.description,
                                                                    " Bu \xfcr\xfcn, ",
                                                                    (_product_applications = product.applications) === null || _product_applications === void 0 ? void 0 : _product_applications.join(", ").toLowerCase(),
                                                                    " alanlarında kullanılmak \xfczere tasarlanmıştır ve ",
                                                                    (_product_features1 = product.features) === null || _product_features1 === void 0 ? void 0 : _product_features1.join(", ").toLowerCase(),
                                                                    "\xf6zelliklerini sunar."
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "space-y-6",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                            className: "text-xl font-semibold text-neutral-800 mb-4",
                                                                            children: "\xd6ne \xc7ıkan \xd6zellikler"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                            children: (_product_features2 = product.features) === null || _product_features2 === void 0 ? void 0 : _product_features2.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "flex items-start gap-3 p-4 bg-neutral-50 rounded-lg",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                            className: "w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                            className: "text-neutral-700",
                                                                                            children: feature
                                                                                        })
                                                                                    ]
                                                                                }, index))
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                className: "text-xl font-semibold text-neutral-800 mb-4",
                                                                children: "Uygulama Alanları"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "space-y-3",
                                                                children: (_product_applications1 = product.applications) === null || _product_applications1 === void 0 ? void 0 : _product_applications1.map((app, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "px-4 py-3 bg-primary-50 text-primary-700 rounded-lg border border-primary-200",
                                                                        children: app
                                                                    }, index))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        activeTab === "specifications" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-2xl font-bold text-neutral-800 mb-6",
                                                    children: "Teknik \xd6zellikler"
                                                }),
                                                product.specifications && Object.keys(product.specifications).length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "bg-neutral-50 rounded-xl p-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                        children: Object.entries(product.specifications).map((param, index)=>{
                                                            let [key, value] = param;
                                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: -20
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.3,
                                                                    delay: index * 0.1
                                                                },
                                                                className: "flex justify-between items-center py-3 border-b border-neutral-200 last:border-b-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "font-medium text-neutral-800",
                                                                        children: key
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "text-neutral-600 text-right",
                                                                        children: value
                                                                    })
                                                                ]
                                                            }, key);
                                                        })
                                                    })
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-center py-12",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DocumentTextIcon/* default */.Z, {
                                                            className: "w-16 h-16 text-neutral-300 mx-auto mb-4"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-neutral-600 mb-4",
                                                            children: "Detaylı teknik \xf6zellikler i\xe7in l\xfctfen bizimle iletişime ge\xe7in."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                            href: "/iletisim",
                                                            className: "inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors",
                                                            children: "İletişime Ge\xe7"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        activeTab === "applications" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-2xl font-bold text-neutral-800 mb-6",
                                                    children: "Uygulama Alanları ve Kullanım Senaryoları"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                                    children: (_product_applications2 = product.applications) === null || _product_applications2 === void 0 ? void 0 : _product_applications2.map((application, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 30
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            transition: {
                                                                duration: 0.3,
                                                                delay: index * 0.1
                                                            },
                                                            className: "bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BeakerIcon/* default */.Z, {
                                                                        className: "w-6 h-6 text-primary-600"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                    className: "text-lg font-semibold text-neutral-800 mb-2",
                                                                    children: application
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    className: "text-neutral-600 text-sm",
                                                                    children: [
                                                                        product.name,
                                                                        " \xfcr\xfcn\xfc ",
                                                                        application.toLowerCase(),
                                                                        " alanında y\xfcksek performans sağlar."
                                                                    ]
                                                                })
                                                            ]
                                                        }, index))
                                                })
                                            ]
                                        }),
                                        activeTab === "support" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-2xl font-bold text-neutral-800 mb-6",
                                                    children: "Destek ve Hizmetler"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "bg-white border border-neutral-200 rounded-xl p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(DocumentTextIcon/* default */.Z, {
                                                                    className: "w-10 h-10 text-primary-600 mb-4"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                    className: "text-lg font-semibold text-neutral-800 mb-2",
                                                                    children: "Teknik Dok\xfcmantasyon"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-neutral-600 text-sm mb-4",
                                                                    children: "Kullanım kılavuzları, teknik \xe7izimler ve sertifikalar"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                    className: "text-primary-600 hover:text-primary-700 text-sm font-medium",
                                                                    children: "D\xf6k\xfcmanları İndir →"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "bg-white border border-neutral-200 rounded-xl p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ChatBubbleLeftIcon/* default */.Z, {
                                                                    className: "w-10 h-10 text-primary-600 mb-4"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                    className: "text-lg font-semibold text-neutral-800 mb-2",
                                                                    children: "Teknik Destek"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-neutral-600 text-sm mb-4",
                                                                    children: "Uzman ekibimizden 7/24 teknik destek alın"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                    className: "text-primary-600 hover:text-primary-700 text-sm font-medium",
                                                                    children: "Destek Al →"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "bg-white border border-neutral-200 rounded-xl p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(WrenchIcon/* default */.Z, {
                                                                    className: "w-10 h-10 text-primary-600 mb-4"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                    className: "text-lg font-semibold text-neutral-800 mb-2",
                                                                    children: "Kurulum ve Eğitim"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-neutral-600 text-sm mb-4",
                                                                    children: "Profesyonel kurulum ve personel eğitimi hizmetleri"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                    className: "text-primary-600 hover:text-primary-700 text-sm font-medium",
                                                                    children: "Bilgi Al →"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, activeTab)
                            ]
                        })
                    }),
                    relatedProducts.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "py-16 bg-neutral-50",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    className: "text-2xl lg:text-3xl font-bold text-neutral-800 mb-8 text-center",
                                    children: "Benzer \xdcr\xfcnler"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: relatedProducts.map((relatedProduct, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
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
                                                href: "/urunler/".concat(params.category, "/").concat(params.subcategory, "/").concat(relatedProduct.id),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "relative h-48 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                                src: // D1 Schema - Çoklu resim desteği
                                                                Array.isArray(relatedProduct.images) && relatedProduct.images.length > 0 ? relatedProduct.images[0] : relatedProduct.image || "/images/default-product.webp",
                                                                alt: relatedProduct.name,
                                                                fill: true,
                                                                className: "object-cover group-hover:scale-105 transition-transform duration-500",
                                                                sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2",
                                                                    children: relatedProduct.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-neutral-600 text-sm mb-4 line-clamp-2",
                                                                    children: relatedProduct.description
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-primary-600 font-medium text-sm",
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
                                        }, relatedProduct.id))
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
                                        children: "Bu \xdcr\xfcn Hakkında Daha Fazla Bilgi İster misiniz?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xl text-primary-100 max-w-2xl mx-auto",
                                        children: "Uzman ekibimiz size \xfcr\xfcn \xf6zellikleri, fiyat ve kurulum hakkında detaylı bilgi verir"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/teklif-al",
                                                className: "bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors shadow-lg hover:shadow-xl",
                                                children: "Fiyat Teklifi Al"
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {})
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,9751,4166,4403,2958,2971,993,1744], function() { return __webpack_exec__(9180); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);