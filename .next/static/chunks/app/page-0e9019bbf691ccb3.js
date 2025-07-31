(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1931],{

/***/ 232:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4443))

/***/ }),

/***/ 4443:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HomePage; },
  dynamic: function() { return /* binding */ dynamic; },
  runtime: function() { return /* binding */ runtime; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(5330);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/index.mjs + 290 modules
var es = __webpack_require__(477);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/ArrowRightIcon.js
var ArrowRightIcon = __webpack_require__(2521);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/BeakerIcon.js
var BeakerIcon = __webpack_require__(4495);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/ChatBubbleLeftRightIcon.js
var ChatBubbleLeftRightIcon = __webpack_require__(909);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(432);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/CogIcon.js
var CogIcon = __webpack_require__(6417);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/PlayIcon.js
var PlayIcon = __webpack_require__(6414);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/ShieldCheckIcon.js
var ShieldCheckIcon = __webpack_require__(5785);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowRightIcon,BeakerIcon,ChatBubbleLeftRightIcon,CheckCircleIcon,CogIcon,PlayIcon,ShieldCheckIcon!=!./node_modules/@heroicons/react/24/solid/esm/index.js








// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(6691);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/sections/Hero.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const features = [
    {
        icon: BeakerIcon/* default */.Z,
        title: "Analiz Teknolojileri",
        description: "En gelişmiş laboratuvar analiz cihazları",
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50",
        delay: 0
    },
    {
        icon: CogIcon/* default */.Z,
        title: "Otomasyon Sistemleri",
        description: "Akıllı laboratuvar otomasyon \xe7\xf6z\xfcmleri",
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-50 to-pink-50",
        delay: 0.1
    },
    {
        icon: ShieldCheckIcon/* default */.Z,
        title: "Kalite G\xfcvencesi",
        description: "Uluslararası standartlarda hizmet",
        gradient: "from-green-500 to-emerald-500",
        bgGradient: "from-green-50 to-emerald-50",
        delay: 0.2
    },
    {
        icon: ChatBubbleLeftRightIcon/* default */.Z,
        title: "Teknik Destek",
        description: "7/24 uzman destek hizmeti",
        gradient: "from-orange-500 to-red-500",
        bgGradient: "from-orange-50 to-red-50",
        delay: 0.3
    }
];
const rotatingWords = [
    "Yenilik\xe7i",
    "Sertifikalı",
    "D\xfcnya Standartlarında",
    "Ar-Ge Odaklı",
    "Anahtar Teslim",
    "360\xb0",
    "Y\xfcksek Teknolojili",
    "G\xfcvenilir",
    "Entegre"
];
const promoImages = [
    "/images/promo-images/banner-lab.jpg",
    "/images/promo-images/banner-lab2.jpg",
    "/images/promo-images/banner-lab3.jpg"
];
function Hero() {
    const [currentWord, setCurrentWord] = (0,react.useState)(0);
    const [currentImage, setCurrentImage] = (0,react.useState)(0);
    const [isImageLoaded, setIsImageLoaded] = (0,react.useState)(false);
    const [hoveredFeature, setHoveredFeature] = (0,react.useState)(null);
    const containerRef = (0,react.useRef)(null);
    const { scrollY } = (0,es/* useScroll */.vO)();
    const y1 = (0,es/* useTransform */.Hm)(scrollY, [
        0,
        300
    ], [
        0,
        -50
    ]);
    const y2 = (0,es/* useTransform */.Hm)(scrollY, [
        0,
        300
    ], [
        0,
        -25
    ]);
    const opacity = (0,es/* useTransform */.Hm)(scrollY, [
        0,
        300
    ], [
        1,
        0.8
    ]);
    (0,react.useEffect)(()=>{
        const wordInterval = setInterval(()=>{
            setCurrentWord((prev)=>(prev + 1) % rotatingWords.length);
        }, 2200);
        const imageInterval = setInterval(()=>{
            setCurrentImage((prev)=>(prev + 1) % promoImages.length);
        }, 3000);
        return ()=>{
            clearInterval(wordInterval);
            clearInterval(imageInterval);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-blue-50/30 to-red-50/20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute inset-0 bg-pattern opacity-30"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                        animate: {
                            rotate: [
                                0,
                                360
                            ],
                            x: [
                                0,
                                50,
                                0
                            ],
                            y: [
                                0,
                                -30,
                                0
                            ]
                        },
                        transition: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full blur-xl opacity-60"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                        animate: {
                            rotate: [
                                360,
                                0
                            ],
                            x: [
                                0,
                                -40,
                                0
                            ],
                            y: [
                                0,
                                40,
                                0
                            ]
                        },
                        transition: {
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute bottom-32 left-32 w-32 h-32 bg-gradient-to-r from-secondary-200 to-accent-200 rounded-full blur-xl opacity-40"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "container-custom relative z-10 pt-16 md:pt-16 lg:pt-16",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-8 items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "space-y-6 pt-8 md:pt-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
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
                                                delay: 0.2,
                                                duration: 0.6
                                            },
                                            whileHover: {
                                                scale: 1.05,
                                                y: -2
                                            },
                                            className: "inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 rounded-full text-caption font-medium border border-primary-200/50 shadow-lg backdrop-blur-sm cursor-pointer group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(BeakerIcon/* default */.Z, {
                                                    className: "w-4 h-4 group-hover:text-primary-600 transition-colors"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-bold",
                                                    children: "T\xfcrkiye’nin Laboratuvar Teknolojileri Lideri"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                    className: "w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full",
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.2,
                                                            1
                                                        ],
                                                        opacity: [
                                                            0.7,
                                                            1,
                                                            0.7
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "font-display font-bold text-neutral-900 leading-tight text-3xl lg:text-4xl xl:text-5xl",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "inline-block min-w-[140px] align-top",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* AnimatePresence */.M_, {
                                                        mode: "wait",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.span, {
                                                            initial: {
                                                                opacity: 0,
                                                                scale: 1.2,
                                                                filter: "blur(8px)"
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                scale: 1,
                                                                filter: "blur(0px)"
                                                            },
                                                            exit: {
                                                                opacity: 0,
                                                                scale: 0.8,
                                                                filter: "blur(12px)"
                                                            },
                                                            transition: {
                                                                duration: 0.7,
                                                                ease: "easeInOut"
                                                            },
                                                            className: "bg-gradient-to-r from-[#2A50F8] via-primary-500 to-secondary-500 bg-clip-text text-transparent font-bold",
                                                            style: {
                                                                display: "inline-block"
                                                            },
                                                            children: rotatingWords[currentWord]
                                                        }, rotatingWords[currentWord])
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                "Laboratuvar",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                "\xc7\xf6z\xfcmleri"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-body text-neutral-600 max-w-lg",
                                            children: "Laboratuvar teknolojilerinde 20+ yıllık deneyimimizle, g\xfcvenilir analiz cihazları, otomasyon sistemleri ve anahtar teslim laboratuvar kurulum hizmetleri sunuyoruz."
                                        })
                                    ]
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
                                        delay: 0.4,
                                        duration: 0.6
                                    },
                                    className: "flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "/cozumler",
                                            className: "btn-primary px-5 py-2.5",
                                            children: [
                                                "\xc7\xf6z\xfcmlerimizi Keşfedin",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon/* default */.Z, {
                                                    className: "w-4 h-4"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            className: "btn-outline px-5 py-2.5 group",
                                            onClick: ()=>{
                                                const videoSection = document.getElementById("tanitim-videosu");
                                                if (videoSection) {
                                                    videoSection.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "center"
                                                    });
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(PlayIcon/* default */.Z, {
                                                    className: "w-4 h-4 group-hover:scale-110 transition-transform"
                                                }),
                                                "Tanıtım Videosu"
                                            ]
                                        })
                                    ]
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
                                        delay: 0.6,
                                        duration: 0.6
                                    },
                                    className: "flex flex-row flex-wrap justify-start gap-6 pt-4 border-t border-neutral-200",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xl lg:text-2xl font-bold text-[#2A50F8]",
                                                    children: "500+"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-caption text-neutral-600",
                                                    children: "Tamamlanan Proje"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xl lg:text-2xl font-bold text-secondary-600",
                                                    children: "20+"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-caption text-neutral-600",
                                                    children: "Yıllık Deneyim"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xl lg:text-2xl font-bold text-accent-600",
                                                    children: "1000+"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-caption text-neutral-600",
                                                    children: "Mutlu M\xfcşteri"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                            ref: containerRef,
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "relative",
                            style: {
                                opacity
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                    className: "relative p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl",
                                    style: {
                                        y: y1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary-200/60 to-secondary-200/60 rounded-full blur-2xl"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative z-10 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: features.map((feature, index)=>{
                                                        const IconComponent = feature.icon;
                                                        const isHovered = hoveredFeature === index;
                                                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                scale: 0.8,
                                                                rotateY: -15
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                scale: 1,
                                                                rotateY: 0
                                                            },
                                                            transition: {
                                                                delay: 0.8 + feature.delay,
                                                                duration: 0.6,
                                                                type: "spring",
                                                                stiffness: 100
                                                            },
                                                            whileHover: {
                                                                scale: 1.02,
                                                                y: -2,
                                                                transition: {
                                                                    duration: 0.2
                                                                }
                                                            },
                                                            style: {
                                                                y: y2
                                                            },
                                                            className: "group relative cursor-pointer",
                                                            onMouseEnter: ()=>setHoveredFeature(index),
                                                            onMouseLeave: ()=>setHoveredFeature(null),
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "absolute inset-0 -rotate-45 rounded-2xl bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300",
                                                                    style: {
                                                                        background: "linear-gradient(135deg, ".concat(feature.gradient.replace("from-", "").replace("to-", ", "), ")"),
                                                                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                                    className: "relative p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg transition-all duration-300 ".concat(isHovered ? "shadow-xl border-white/80" : ""),
                                                                    animate: {
                                                                        backgroundColor: isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)"
                                                                    },
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "relative flex-shrink-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                                                        className: "w-12 h-12 rounded-xl bg-gradient-to-br ".concat(feature.gradient, " p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg"),
                                                                                        animate: {
                                                                                            rotate: isHovered ? 5 : 0
                                                                                        },
                                                                                        transition: {
                                                                                            duration: 0.3
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                                                                            className: "w-full h-full text-white"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                                                        className: "absolute -top-1 -right-1",
                                                                                        initial: {
                                                                                            scale: 0
                                                                                        },
                                                                                        animate: {
                                                                                            scale: isHovered ? 1 : 0
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                            className: "w-4 h-4 text-green-500"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex-1 min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                                        className: "font-semibold text-sm text-neutral-900 leading-tight mb-1",
                                                                                        children: feature.title
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.p, {
                                                                                        className: "text-xs text-neutral-600 leading-relaxed",
                                                                                        animate: {
                                                                                            opacity: isHovered ? 1 : 0.8
                                                                                        },
                                                                                        children: feature.description
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                                                        className: "h-1 bg-neutral-100 rounded-full overflow-hidden mt-2",
                                                                                        initial: {
                                                                                            opacity: 0
                                                                                        },
                                                                                        animate: {
                                                                                            opacity: isHovered ? 1 : 0
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                                                            className: "h-full bg-gradient-to-r ".concat(feature.gradient, " rounded-full"),
                                                                                            initial: {
                                                                                                width: 0
                                                                                            },
                                                                                            animate: {
                                                                                                width: isHovered ? "85%" : 0
                                                                                            },
                                                                                            transition: {
                                                                                                duration: 0.8,
                                                                                                delay: 0.2
                                                                                            }
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* AnimatePresence */.M_, {
                                                                    children: isHovered && /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                                        className: "absolute inset-0 pointer-events-none",
                                                                        initial: {
                                                                            opacity: 0
                                                                        },
                                                                        animate: {
                                                                            opacity: 1
                                                                        },
                                                                        exit: {
                                                                            opacity: 0
                                                                        },
                                                                        children: [
                                                                            ...Array(3)
                                                                        ].map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                                                className: "absolute w-1 h-1 bg-gradient-to-r ".concat(feature.gradient, " rounded-full"),
                                                                                initial: {
                                                                                    x: "50%",
                                                                                    y: "50%",
                                                                                    scale: 0
                                                                                },
                                                                                animate: {
                                                                                    x: "".concat(50 + (i - 1) * 30, "%"),
                                                                                    y: "".concat(30 + i * 20, "%"),
                                                                                    scale: 1
                                                                                },
                                                                                transition: {
                                                                                    duration: 0.6,
                                                                                    delay: i * 0.1
                                                                                }
                                                                            }, i))
                                                                    })
                                                                })
                                                            ]
                                                        }, index);
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0.9
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    transition: {
                                                        delay: 1.4,
                                                        duration: 0.6
                                                    },
                                                    className: "relative mt-6 overflow-hidden rounded-2xl group cursor-pointer",
                                                    whileHover: {
                                                        scale: 1.02
                                                    },
                                                    style: {
                                                        y: y2
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "relative h-40 bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-2xl overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* AnimatePresence */.M_, {
                                                                mode: "wait",
                                                                initial: false,
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                                    initial: {
                                                                        opacity: 0,
                                                                        x: 20
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        x: 0
                                                                    },
                                                                    exit: {
                                                                        opacity: 0,
                                                                        x: -20
                                                                    },
                                                                    transition: {
                                                                        duration: 0.5,
                                                                        ease: "easeInOut"
                                                                    },
                                                                    className: "absolute inset-0",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                                        src: promoImages[currentImage],
                                                                        alt: "Modern Laboratuvar",
                                                                        className: "w-full h-full object-cover",
                                                                        width: 800,
                                                                        height: 400,
                                                                        priority: true,
                                                                        onLoadingComplete: ()=>setIsImageLoaded(true),
                                                                        style: {
                                                                            opacity: isImageLoaded ? 1 : 0,
                                                                            transition: "opacity 0.3s"
                                                                        }
                                                                    })
                                                                }, currentImage)
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 mix-blend-multiply"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "absolute bottom-4 left-4 right-4",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                            className: "text-white text-sm font-semibold drop-shadow-md",
                                                                            children: "Modern Laboratuvar"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-white/95 text-xs drop-shadow-md",
                                                                            children: "İleri Teknoloji Ekipmanları"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0,
                                        rotate: -180
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0
                                    },
                                    transition: {
                                        delay: 1.6,
                                        duration: 0.8,
                                        type: "spring"
                                    },
                                    className: "absolute -top-3 -right-3 group cursor-pointer",
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: 5
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg",
                                                style: {
                                                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "absolute inset-0 flex flex-col items-center justify-center text-white",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-xs font-bold leading-tight",
                                                        children: "ISO"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-xs font-medium leading-tight",
                                                        children: "9001"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "absolute inset-0 bg-emerald-400/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 2,
                    duration: 0.5
                },
                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                    animate: {
                        y: [
                            0,
                            10,
                            0
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity
                    },
                    className: "w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                        animate: {
                            y: [
                                0,
                                12,
                                0
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5
                        },
                        className: "w-1 h-3 bg-neutral-400 rounded-full mt-2"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/react-intersection-observer/dist/index.mjs
var dist = __webpack_require__(4702);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BeakerIcon.js
var esm_BeakerIcon = __webpack_require__(8294);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js
var ClockIcon = __webpack_require__(2929);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CogIcon.js
var esm_CogIcon = __webpack_require__(9010);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/GlobeAltIcon.js
var GlobeAltIcon = __webpack_require__(787);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/LightBulbIcon.js
var LightBulbIcon = __webpack_require__(1554);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js
var esm_ShieldCheckIcon = __webpack_require__(2938);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TrophyIcon.js
var TrophyIcon = __webpack_require__(651);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/UsersIcon.js
var UsersIcon = __webpack_require__(1615);
;// CONCATENATED MODULE: __barrel_optimize__?names=BeakerIcon,ClockIcon,CogIcon,GlobeAltIcon,LightBulbIcon,ShieldCheckIcon,TrophyIcon,UsersIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js









;// CONCATENATED MODULE: ./src/components/sections/Features.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Features_features = [
    {
        icon: esm_BeakerIcon/* default */.Z,
        title: "Gelişmiş Analiz Teknolojileri",
        description: "En son teknoloji analiz cihazları ile y\xfcksek hassasiyetli \xf6l\xe7\xfcmler",
        color: "from-primary-500 to-primary-600"
    },
    {
        icon: esm_CogIcon/* default */.Z,
        title: "Otomasyon Sistemleri",
        description: "Akıllı laboratuvar otomasyon \xe7\xf6z\xfcmleri ile verimliliği artırın",
        color: "from-secondary-500 to-secondary-600"
    },
    {
        icon: esm_ShieldCheckIcon/* default */.Z,
        title: "Kalite G\xfcvencesi",
        description: "ISO standartlarında hizmet ve sertifikalı \xe7\xf6z\xfcmler",
        color: "from-accent-500 to-accent-600"
    },
    {
        icon: ClockIcon/* default */.Z,
        title: "24/7 Teknik Destek",
        description: "Kesintisiz hizmet i\xe7in s\xfcrekli teknik destek ve bakım",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: UsersIcon/* default */.Z,
        title: "Uzman Ekip",
        description: "Alanında uzman m\xfchendis ve teknisyen kadrosu",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: GlobeAltIcon/* default */.Z,
        title: "Global \xc7\xf6z\xfcmler",
        description: "Uluslararası standartlarda yerel hizmet anlayışı",
        color: "from-teal-500 to-cyan-500"
    },
    {
        icon: TrophyIcon/* default */.Z,
        title: "20+ Yıl Deneyim",
        description: "Sekt\xf6rdeki k\xf6kl\xfc deneyimimiz g\xfcvencesinde",
        color: "from-yellow-500 to-orange-500"
    },
    {
        icon: LightBulbIcon/* default */.Z,
        title: "İnovatif Yaklaşım",
        description: "S\xfcrekli gelişim ve yenilik\xe7i \xe7\xf6z\xfcmler",
        color: "from-indigo-500 to-blue-500"
    }
];
function Features() {
    const [ref, inView] = (0,dist/* useInView */.YD)({
        triggerOnce: true,
        threshold: 0.1
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        ref: ref,
        className: "py-12 lg:py-16 bg-white",
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
                        duration: 0.6
                    },
                    className: "text-center space-y-3 mb-10",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-gradient",
                            children: "Neden Protek Analitik?"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-body text-neutral-600 max-w-2xl mx-auto",
                            children: "Laboratuvar teknolojilerinde \xf6nc\xfc konumumuz, kaliteli hizmet anlayışımız ve m\xfcşteri odaklı yaklaşımımızla sekt\xf6rde fark yaratan \xe7\xf6z\xfcmler sunuyoruz."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: Features_features.map((feature, index)=>{
                        const IconComponent = feature.icon;
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
                                duration: 0.6,
                                delay: index * 0.1
                            },
                            className: "group",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "card-hover p-4 text-center space-y-3 h-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mx-auto w-12 h-12 relative",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "absolute inset-0 bg-gradient-to-r ".concat(feature.color, " rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300")
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "relative bg-gradient-to-r ".concat(feature.color, " rounded-xl flex items-center justify-center w-full h-full group-hover:scale-110 transition-transform duration-300"),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                                    className: "w-6 h-6 text-white"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                className: "font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors text-sm leading-tight",
                                                children: feature.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-caption text-neutral-600 leading-snug",
                                                children: feature.description
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
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
                        delay: 0.8
                    },
                    className: "text-center mt-10",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 lg:p-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "font-bold text-neutral-900 text-lg lg:text-xl",
                                    children: "Laboratuvarınız İ\xe7in En İyi \xc7\xf6z\xfcm\xfc Birlikte Bulalım"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-body-sm text-neutral-600 max-w-xl mx-auto",
                                    children: "Uzman ekibimiz, ihtiya\xe7larınıza \xf6zel laboratuvar \xe7\xf6z\xfcmleri geliştirmek i\xe7in sizlerle birlikte \xe7alışmaya hazır."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-wrap justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "/teklif-al",
                                            className: "btn-primary",
                                            children: "\xdccretsiz Teklif Alın"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "/iletisim",
                                            className: "btn-outline",
                                            children: "Uzmanlarımızla G\xf6r\xfcş\xfcn"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js
var AcademicCapIcon = __webpack_require__(7933);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js
var esm_ArrowRightIcon = __webpack_require__(1122);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js
var CheckIcon = __webpack_require__(7805);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js
var RocketLaunchIcon = __webpack_require__(2061);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/SparklesIcon.js
var SparklesIcon = __webpack_require__(4713);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/WrenchScrewdriverIcon.js
var WrenchScrewdriverIcon = __webpack_require__(7478);
;// CONCATENATED MODULE: __barrel_optimize__?names=AcademicCapIcon,ArrowRightIcon,BeakerIcon,CheckIcon,CogIcon,RocketLaunchIcon,ShieldCheckIcon,SparklesIcon,WrenchScrewdriverIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js










;// CONCATENATED MODULE: ./src/components/sections/Solutions.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const solutions = [
    {
        id: "endustriyel",
        icon: esm_BeakerIcon/* default */.Z,
        title: "End\xfcstriyel Laboratuvar Kurulumu",
        subtitle: "Modern ve verimli laboratuvar alanları",
        description: "Sekt\xf6r\xfcn\xfcze \xf6zel tasarlanmış, en son teknoloji ile donatılmış laboratuvar kurulum \xe7\xf6z\xfcmleri sunuyoruz. Planlama aşamasından teslime kadar her adımda yanınızdayız.",
        image: "/images/lab-1.jpg",
        features: [
            "Laboratuvar Dizayn ve Planlama",
            "Cihaz Se\xe7imi ve Entegrasyonu",
            "İş G\xfcvenliği Sistemleri",
            "Otomasyon ve Veri Y\xf6netimi",
            "7/24 Teknik Destek"
        ],
        benefits: [
            "Verimlilik artışı %40",
            "Maliyet tasarrufu %25",
            "Hızlı kurulum s\xfcreci"
        ],
        href: "/cozumler/endustriyel-laboratuvar-kurulumu",
        badge: "Pop\xfcler"
    },
    {
        id: "otomasyon",
        icon: esm_CogIcon/* default */.Z,
        title: "Laboratuvar Otomasyon Sistemleri",
        subtitle: "Akıllı otomasyon ile verimlilik",
        description: "LIMS yazılımları, robotik sistemler ve akıllı sens\xf6rlerle laboratuvar s\xfcre\xe7lerinizi tamamen otomatize edin. İnsan hatasını minimuma indirirken verimliliği maksimuma \xe7ıkarın.",
        image: "/images/lab-2.jpg",
        features: [
            "LIMS Yazılım Entegrasyonu",
            "Robotik Numune İşleme",
            "Akıllı Sens\xf6r Ağları",
            "Ger\xe7ek Zamanlı Monitoring",
            "Uzaktan Kontrol Sistemi"
        ],
        benefits: [
            "Hata oranı %90 azalma",
            "İşlem hızı 3x artış",
            "Tam izlenebilirlik"
        ],
        href: "/cozumler/otomasyon-sistemleri",
        badge: "Yenilik\xe7i"
    },
    {
        id: "anahtar-teslim",
        icon: WrenchScrewdriverIcon/* default */.Z,
        title: "Anahtar Teslim Projeler",
        subtitle: "Baştan sona komple \xe7\xf6z\xfcm",
        description: "Konsept tasarımından devreye almaya kadar t\xfcm s\xfcre\xe7leri y\xf6netiyoruz. Tek noktadan koordinasyon ile proje s\xfcrenizi kısaltır, kaliteyi artırırız.",
        image: "/images/lab-3.jpg",
        features: [
            "Proje Y\xf6netimi ve Koordinasyon",
            "Anahtar Teslim Uygulama",
            "Eğitim ve Operasyonel Destek",
            "Kalite G\xfcvence Sistemleri",
            "Garanti ve Bakım Hizmetleri"
        ],
        benefits: [
            "Tek koordinat\xf6r avantajı",
            "Zamanında teslim garantisi",
            "Uzun d\xf6nem destek"
        ],
        href: "/cozumler/anahtar-teslim-projeler",
        badge: "G\xfcvenilir"
    },
    {
        id: "arge",
        icon: AcademicCapIcon/* default */.Z,
        title: "AR-GE Laboratuvarları",
        subtitle: "Araştırma odaklı \xf6zel tasarım",
        description: "\xdcniversiteler ve araştırma kurumları i\xe7in \xf6zel geliştirilen, esneklik ve genişletilebilirlik odaklı laboratuvar \xe7\xf6z\xfcmleri.",
        image: "/images/lab-4.jpg",
        features: [
            "Mod\xfcler ve Esnek Tasarım",
            "Araştırma Ekipmanları",
            "Akademik İş Birlikleri",
            "\xd6ğrenci Eğitim Programları",
            "S\xfcrd\xfcr\xfclebilir Teknolojiler"
        ],
        benefits: [
            "Araştırma kapasitesi artışı",
            "Akademik iş birliği fırsatları",
            "S\xfcrd\xfcr\xfclebilir \xe7\xf6z\xfcmler"
        ],
        href: "/cozumler/ar-ge-laboratuvarlari",
        badge: "Akademik"
    },
    {
        id: "kalite-guvence",
        icon: esm_ShieldCheckIcon/* default */.Z,
        title: "Kalite G\xfcvence Sistemleri",
        subtitle: "ISO standartları ile kalite y\xf6netimi",
        description: "ISO 17025, GLP ve GMP standartlarına uygun kalite g\xfcvence sistemleri kurarak laboratuvarınızın akreditasyon s\xfcre\xe7lerini destekliyoruz.",
        image: "/images/lab-7.jpg",
        features: [
            "ISO 17025 Akreditasyon Desteği",
            "Kalite Y\xf6netim Sistemleri",
            "Dok\xfcman Y\xf6netimi",
            "İ\xe7 Denetim S\xfcre\xe7leri",
            "S\xfcrekli İyileştirme Programları"
        ],
        benefits: [
            "Uluslararası tanınırlık",
            "M\xfcşteri g\xfcveni artışı",
            "S\xfcre\xe7 standardizasyonu"
        ],
        href: "/cozumler/kalite-guvence-sistemleri",
        badge: "Sertifikalı"
    }
];
function Solutions() {
    const [ref, inView] = (0,dist/* useInView */.YD)({
        triggerOnce: true,
        threshold: 0.1
    });
    const [activeTab, setActiveTab] = (0,react.useState)(0);
    const activeSolution = solutions[activeTab];
    const [isPaused, setIsPaused] = (0,react.useState)(false);
    // Auto-cycle through tabs
    (0,react.useEffect)(()=>{
        if (isPaused) return;
        const interval = setInterval(()=>{
            setActiveTab((prev)=>(prev + 1) % solutions.length);
        }, 10000) // 10 saniye olarak yavaşlattık
        ;
        return ()=>clearInterval(interval);
    }, [
        isPaused
    ]);
    const getBadgeColor = (badge)=>{
        switch(badge){
            case "Pop\xfcler":
                return "bg-gradient-to-r from-orange-500 to-red-500";
            case "Yenilik\xe7i":
                return "bg-gradient-to-r from-purple-500 to-blue-500";
            case "G\xfcvenilir":
                return "bg-gradient-to-r from-green-500 to-emerald-500";
            case "Akademik":
                return "bg-gradient-to-r from-indigo-500 to-purple-500";
            case "Sertifikalı":
                return "bg-gradient-to-r from-cyan-500 to-teal-500";
            default:
                return "bg-gradient-to-r from-primary-500 to-secondary-500";
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        ref: ref,
        className: "py-16 lg:py-20 bg-gradient-to-br from-[#001328] via-[#000a1a] to-black relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute inset-0 opacity-30",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-[#001328]/20 to-black/30"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute top-0 left-0 w-96 h-96 bg-[#001328]/10 rounded-full blur-3xl shadow-2xl"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute bottom-0 right-0 w-96 h-96 bg-[#001328]/15 rounded-full blur-3xl shadow-2xl"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute top-1/2 left-1/2 w-64 h-64 bg-[#001328]/8 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 shadow-xl"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-[#001328]/10"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container-custom relative z-10",
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
                            duration: 0.6
                        },
                        className: "text-center space-y-4 mb-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SparklesIcon/* default */.Z, {
                                        className: "w-4 h-4 text-secondary-400"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-white/90 text-label",
                                        children: "\xc7\xf6z\xfcmlerimiz"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                className: "font-bold text-white",
                                children: [
                                    "Laboratuvarınız İ\xe7in",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent",
                                        children: "\xd6zel Tasarlanmış \xc7\xf6z\xfcmler"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-body-lg text-neutral-300 max-w-2xl mx-auto",
                                children: "25+ yıllık deneyimimizle sekt\xf6r\xfcn\xfcze \xf6zel, yenilik\xe7i ve s\xfcrd\xfcr\xfclebilir laboratuvar \xe7\xf6z\xfcmleri sunuyoruz."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "max-w-5xl mx-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid lg:grid-cols-12 gap-4 lg:gap-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "lg:col-span-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -30
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            x: 0
                                        } : {},
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.2
                                        },
                                        className: "grid grid-rows-5 gap-2 h-full",
                                        children: solutions.map((solution, index)=>{
                                            const IconComponent = solution.icon;
                                            const isActive = activeTab === index;
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.button, {
                                                onClick: ()=>setActiveTab(index),
                                                onMouseEnter: ()=>setIsPaused(true),
                                                onMouseLeave: ()=>setIsPaused(false),
                                                className: "w-full text-left p-3 lg:p-4 rounded-xl border transition-all duration-500 group h-full flex flex-col justify-between ".concat(isActive ? "bg-white/10 border-white/30 backdrop-blur-sm scale-[1.02]" : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"),
                                                whileHover: {
                                                    scale: isActive ? 1.02 : 1.01
                                                },
                                                whileTap: {
                                                    scale: 0.98
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-start gap-3 flex-grow",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ".concat(isActive ? "bg-gradient-to-br from-primary-500 to-secondary-500 scale-110" : "bg-white/10 group-hover:bg-white/20"),
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                                                    className: "w-4 h-4 transition-colors ".concat(isActive ? "text-white" : "text-white/70")
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center justify-between gap-2 mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h5", {
                                                                                className: "text-sm font-semibold transition-colors leading-tight ".concat(isActive ? "text-white" : "text-white/80"),
                                                                                children: solution.title
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "px-1.5 py-0.5 text-caption font-medium text-white rounded-full flex-shrink-0 ".concat(getBadgeColor(solution.badge)),
                                                                                children: solution.badge
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-caption transition-colors leading-tight ".concat(isActive ? "text-white/90" : "text-white/60"),
                                                                        children: solution.subtitle
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    isActive && !isPaused && /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                        className: "mt-3 w-full h-0.5 bg-white/20 rounded-full overflow-hidden",
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                                            className: "h-full bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full",
                                                            initial: {
                                                                width: "0%"
                                                            },
                                                            animate: {
                                                                width: "100%"
                                                            },
                                                            transition: {
                                                                duration: 10,
                                                                ease: "linear"
                                                            }
                                                        }, activeTab)
                                                    })
                                                ]
                                            }, solution.id);
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "lg:col-span-7",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* AnimatePresence */.M_, {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                            initial: {
                                                opacity: 0,
                                                x: 30
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: -30
                                            },
                                            transition: {
                                                duration: 0.5
                                            },
                                            className: "bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative h-40 lg:h-48 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                            src: activeSolution.image,
                                                            alt: activeSolution.title,
                                                            className: "w-full h-full object-cover transition-transform duration-700 hover:scale-110",
                                                            fill: true,
                                                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "absolute top-4 left-4",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "px-2 py-1 text-caption font-medium text-white rounded-full ".concat(getBadgeColor(activeSolution.badge)),
                                                                children: activeSolution.badge
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "p-4 lg:p-5 space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "text-lg font-bold text-white mb-2",
                                                                    children: activeSolution.title
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-neutral-300 text-body-sm",
                                                                    children: activeSolution.description
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "grid md:grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                                                            className: "text-white font-semibold mb-3 flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckIcon/* default */.Z, {
                                                                                    className: "w-4 h-4 text-primary-400"
                                                                                }),
                                                                                "\xd6zellikler"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                                                            className: "space-y-2",
                                                                            children: activeSolution.features.slice(0, 3).map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.li, {
                                                                                    initial: {
                                                                                        opacity: 0,
                                                                                        x: -20
                                                                                    },
                                                                                    animate: {
                                                                                        opacity: 1,
                                                                                        x: 0
                                                                                    },
                                                                                    transition: {
                                                                                        delay: index * 0.1
                                                                                    },
                                                                                    className: "flex items-center gap-2 text-caption text-neutral-300",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                            className: "w-1 h-1 bg-primary-400 rounded-full"
                                                                                        }),
                                                                                        feature
                                                                                    ]
                                                                                }, index))
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                                                            className: "text-white font-semibold mb-3 flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(RocketLaunchIcon/* default */.Z, {
                                                                                    className: "w-4 h-4 text-secondary-400"
                                                                                }),
                                                                                "Avantajlar"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                                                            className: "space-y-2",
                                                                            children: activeSolution.benefits.map((benefit, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.li, {
                                                                                    initial: {
                                                                                        opacity: 0,
                                                                                        x: -20
                                                                                    },
                                                                                    animate: {
                                                                                        opacity: 1,
                                                                                        x: 0
                                                                                    },
                                                                                    transition: {
                                                                                        delay: index * 0.1 + 0.3
                                                                                    },
                                                                                    className: "flex items-center gap-2 text-caption text-neutral-300",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SparklesIcon/* default */.Z, {
                                                                                            className: "w-3 h-3 text-secondary-400"
                                                                                        }),
                                                                                        benefit
                                                                                    ]
                                                                                }, index))
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex flex-col sm:flex-row gap-3 pt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                    href: activeSolution.href,
                                                                    className: "flex-1 bg-[#001328] text-white px-5 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#001328] hover:via-[#2A50F8] hover:to-[#FF4766] transition-all duration-700 hover:scale-110 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group text-body-sm relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-600 hover:before:left-[100%]",
                                                                    children: [
                                                                        "Detayları İncele",
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowRightIcon/* default */.Z, {
                                                                            className: "w-4 h-4 group-hover:translate-x-1 transition-all duration-300"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                                    href: "/teklif-al",
                                                                    className: "px-5 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20 text-body-sm text-center",
                                                                    children: "Teklif Al"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, activeTab)
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
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
                            delay: 1
                        },
                        className: "text-center mt-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: "/cozumler",
                            className: "inline-flex items-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl group",
                            children: [
                                "T\xfcm \xc7\xf6z\xfcmlerimizi Keşfedin",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowRightIcon/* default */.Z, {
                                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

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
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_BeakerIcon/* default */.Z, {
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
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowRightIcon/* default */.Z, {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowRightIcon/* default */.Z, {
                                className: "w-5 h-5"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/sections/Clients.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const clientLogos = [
    {
        name: "Behr",
        logo: "/client-images/behr.jpg"
    },
    {
        name: "Novasina",
        logo: "/client-images/novasina.jpg"
    },
    {
        name: "Alliance",
        logo: "/client-images/allience.jpg"
    },
    {
        name: "Atago",
        logo: "/client-images/atago.jpg"
    },
    {
        name: "Awerness",
        logo: "/client-images/awernes.jpg"
    },
    {
        name: "Interline",
        logo: "/client-images/interline.jpg"
    },
    {
        name: "Foodtech",
        logo: "/client-images/foodtech.jpg"
    },
    {
        name: "Atre2",
        logo: "/client-images/atre2.jpg"
    },
    {
        name: "Apera",
        logo: "/client-images/apera.jpg"
    },
    {
        name: "WaterID",
        logo: "/client-images/waterid.jpg"
    },
    {
        name: "Orion",
        logo: "/client-images/orion.jpg"
    },
    {
        name: "LabPlus",
        logo: "/client-images/labplus.jpg"
    },
    {
        name: "Mazyme",
        logo: "/client-images/mazyme.jpg"
    },
    {
        name: "Xebios",
        logo: "/client-images/xebios.jpg"
    },
    {
        name: "Chemo",
        logo: "/client-images/chemo.jpg"
    },
    {
        name: "Harrer",
        logo: "/client-images/harrer.jpg"
    },
    {
        name: "3NH",
        logo: "/client-images/3nh.jpg"
    },
    {
        name: "Maselli",
        logo: "/client-images/maselli.jpg"
    },
    {
        name: "Pentair",
        logo: "/client-images/pentair.jpg"
    },
    {
        name: "Moist",
        logo: "/client-images/moist.jpg"
    },
    {
        name: "Neogen",
        logo: "/client-images/neogen.jpg"
    },
    {
        name: "Gold Standard",
        logo: "/client-images/goldstandard.jpg"
    },
    {
        name: "Miris",
        logo: "/client-images/miris.png"
    }
];
// Animated Counter Component
function AnimatedCounter(param) {
    let { value, suffix = "", duration = 2 } = param;
    const ref = (0,react.useRef)(null);
    const isInView = (0,es/* useInView */.JC)(ref, {
        once: true
    });
    const motionValue = (0,es/* useMotionValue */.c$)(0);
    const springValue = (0,es/* useSpring */.q_)(motionValue, {
        duration: duration * 1000
    });
    const [displayValue, setDisplayValue] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        if (isInView) {
            motionValue.set(value);
        }
    }, [
        isInView,
        motionValue,
        value
    ]);
    (0,react.useEffect)(()=>{
        return springValue.onChange((latest)=>{
            setDisplayValue(Math.round(latest));
        });
    }, [
        springValue
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ref: ref,
        className: "text-4xl font-bold text-gradient mb-2",
        children: [
            displayValue,
            suffix
        ]
    });
}
function Clients() {
    const [hoveredLogo, setHoveredLogo] = (0,react.useState)(null);
    const [hoveredStat, setHoveredStat] = (0,react.useState)(null);
    // Double the logos for seamless infinite scroll
    const doubledLogos = [
        ...clientLogos,
        ...clientLogos
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        id: "clients-section",
        className: "section-padding bg-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute inset-0 bg-pattern opacity-30"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container-custom relative z-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6
                                },
                                className: "inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full px-6 py-2 mb-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-label text-neutral-700",
                                        children: "G\xfcvenilir Ortaklarımız"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.h2, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.1
                                },
                                className: "font-bold text-neutral-900 mb-4",
                                children: [
                                    "D\xfcnya \xc7apında ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-gradient",
                                        children: "G\xfcvenilir Markalar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                className: "text-body-lg text-neutral-600 max-w-2xl mx-auto",
                                children: "25+ yıllık deneyimimizle, d\xfcnya standartlarında analitik \xe7\xf6z\xfcmler sunuyoruz. Prestijli markaların T\xfcrkiye temsilcisi olarak hizmet veriyoruz."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.3
                        },
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                className: "text-center group cursor-pointer",
                                onMouseEnter: ()=>setHoveredStat("brands"),
                                onMouseLeave: ()=>setHoveredStat(null),
                                whileHover: {
                                    scale: 1.05
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-gradient-to-br from-white to-primary-50 rounded-2xl p-6 border border-primary-100 group-hover:border-primary-200 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary-500/10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedCounter, {
                                            value: 25,
                                            suffix: "+",
                                            duration: 2.5
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-body text-neutral-600 font-medium group-hover:text-primary-600 transition-colors",
                                            children: "Uluslararası Marka"
                                        }),
                                        hoveredStat === "brands" && /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                            initial: {
                                                opacity: 0,
                                                height: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                height: "auto"
                                            },
                                            className: "mt-3 pt-3 border-t border-primary-100",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-caption text-primary-600 font-medium",
                                                children: "D\xfcnya \xe7apında g\xfcvenilir markalar"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                className: "text-center group cursor-pointer",
                                onMouseEnter: ()=>setHoveredStat("customers"),
                                onMouseLeave: ()=>setHoveredStat(null),
                                whileHover: {
                                    scale: 1.05
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-6 border border-secondary-100 group-hover:border-secondary-200 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-secondary-500/10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedCounter, {
                                            value: 1000,
                                            suffix: "+",
                                            duration: 3
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-body text-neutral-600 font-medium group-hover:text-secondary-600 transition-colors",
                                            children: "Mutlu M\xfcşteri"
                                        }),
                                        hoveredStat === "customers" && /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                            initial: {
                                                opacity: 0,
                                                height: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                height: "auto"
                                            },
                                            className: "mt-3 pt-3 border-t border-secondary-100",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-caption text-secondary-600 font-medium",
                                                children: "T\xfcrkiye geneli memnun m\xfcşteriler"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                className: "text-center group cursor-pointer",
                                onMouseEnter: ()=>setHoveredStat("experience"),
                                onMouseLeave: ()=>setHoveredStat(null),
                                whileHover: {
                                    scale: 1.05
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-gradient-to-br from-white to-accent-50 rounded-2xl p-6 border border-accent-100 group-hover:border-accent-200 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-500/10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatedCounter, {
                                            value: 15,
                                            suffix: "+",
                                            duration: 2
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-body text-neutral-600 font-medium group-hover:text-accent-600 transition-colors",
                                            children: "Sekt\xf6r Deneyimi"
                                        }),
                                        hoveredStat === "experience" && /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                            initial: {
                                                opacity: 0,
                                                height: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                height: "auto"
                                            },
                                            className: "mt-3 pt-3 border-t border-accent-100",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-caption text-accent-600 font-medium",
                                                children: "Farklı end\xfcstri alanlarında uzman"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative py-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "overflow-hidden mb-12 pb-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                    className: "flex space-x-12",
                                    animate: {
                                        x: [
                                            "0%",
                                            "-50%"
                                        ]
                                    },
                                    transition: {
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 30,
                                            ease: "linear"
                                        }
                                    },
                                    children: doubledLogos.map((client, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                            className: "flex-shrink-0 group relative",
                                            onMouseEnter: ()=>setHoveredLogo("top-".concat(client.name)),
                                            onMouseLeave: ()=>setHoveredLogo(null),
                                            whileHover: {
                                                scale: 1.08,
                                                y: -4
                                            },
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeOut"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "w-36 h-24 bg-white rounded-2xl border border-neutral-200/50 flex items-center justify-center transition-all duration-300 relative overflow-hidden group-hover:border-primary-200 group-hover:shadow-xl group-hover:shadow-primary-500/10",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                        src: client.logo,
                                                        alt: client.name,
                                                        width: 96,
                                                        height: 48,
                                                        className: "max-w-28 max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                                                    }),
                                                    hoveredLogo === "top-".concat(client.name) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10,
                                                            scale: 0.8
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0,
                                                            scale: 1
                                                        },
                                                        className: "absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap z-30 shadow-lg font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-600 rotate-45"
                                                            }),
                                                            client.name
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, "top-".concat(index)))
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "overflow-hidden pb-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                    className: "flex space-x-12",
                                    animate: {
                                        x: [
                                            "-50%",
                                            "0%"
                                        ]
                                    },
                                    transition: {
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 25,
                                            ease: "linear"
                                        }
                                    },
                                    children: doubledLogos.reverse().map((client, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                            className: "flex-shrink-0 group relative",
                                            onMouseEnter: ()=>setHoveredLogo("bottom-".concat(client.name)),
                                            onMouseLeave: ()=>setHoveredLogo(null),
                                            whileHover: {
                                                scale: 1.08,
                                                y: -4
                                            },
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeOut"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "w-36 h-24 bg-white rounded-2xl border border-neutral-200/50 flex items-center justify-center transition-all duration-300 relative overflow-hidden group-hover:border-accent-200 group-hover:shadow-xl group-hover:shadow-accent-500/10",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                        src: client.logo,
                                                        alt: client.name,
                                                        width: 96,
                                                        height: 48,
                                                        className: "max-w-28 max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                                                    }),
                                                    hoveredLogo === "bottom-".concat(client.name) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 10,
                                                            scale: 0.8
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0,
                                                            scale: 1
                                                        },
                                                        className: "absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent-600 to-primary-600 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap z-30 shadow-lg font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-600 rotate-45"
                                                            }),
                                                            client.name
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, "bottom-".concat(index)))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.4
                        },
                        className: "text-center mt-16",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "text-2xl font-bold text-neutral-900 mb-4",
                                    children: "Siz de Bu G\xfcvenilir Ağa Katılın"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-neutral-600 mb-6 max-w-xl mx-auto",
                                    children: "D\xfcnya standartlarında analitik \xe7\xf6z\xfcmler i\xe7in bizimle iletişime ge\xe7in. Uzman ekibimiz size en uygun \xe7\xf6z\xfcm\xfc sunar."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.a, {
                                            href: "/iletisim",
                                            className: "btn-primary",
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            children: "İletişime Ge\xe7in"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.a, {
                                            href: "/hakkimizda/referanslar",
                                            className: "btn-outline",
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            children: "Referanslarımızı İnceleyin"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CakeIcon.js
var CakeIcon = __webpack_require__(4302);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CircleStackIcon.js
var CircleStackIcon = __webpack_require__(6754);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/GlobeAmericasIcon.js
var GlobeAmericasIcon = __webpack_require__(9027);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/SunIcon.js
var SunIcon = __webpack_require__(7323);
;// CONCATENATED MODULE: __barrel_optimize__?names=AcademicCapIcon,ArrowRightIcon,BeakerIcon,CakeIcon,CircleStackIcon,GlobeAmericasIcon,SparklesIcon,SunIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js









;// CONCATENATED MODULE: ./src/components/sections/Sectors.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const sectors = [
    {
        name: "Gıda & İ\xe7ecek",
        icon: CakeIcon/* default */.Z,
        description: "Gıda g\xfcvenliği ve kalite analizi \xe7\xf6z\xfcmleri",
        color: "from-emerald-500 to-green-600",
        bgColor: "from-emerald-50 to-green-50",
        projects: "150+",
        specialty: "HACCP Uyumlu"
    },
    {
        name: "S\xfct & S\xfct \xdcr\xfcnleri",
        icon: CircleStackIcon/* default */.Z,
        description: "S\xfct \xfcr\xfcnleri analiz ve kalite kontrol \xe7\xf6z\xfcmleri",
        color: "from-blue-500 to-indigo-600",
        bgColor: "from-blue-50 to-indigo-50",
        projects: "80+",
        specialty: "ISO 22000"
    },
    {
        name: "Su & Atıksu",
        icon: GlobeAmericasIcon/* default */.Z,
        description: "Su kalitesi ve \xe7evre analizleri",
        color: "from-cyan-500 to-blue-600",
        bgColor: "from-cyan-50 to-blue-50",
        projects: "200+",
        specialty: "\xc7evre Dostu"
    },
    {
        name: "Tarım & Hayvancılık",
        icon: SunIcon/* default */.Z,
        description: "Tarımsal \xfcr\xfcn ve hayvan sağlığı analizleri",
        color: "from-amber-500 to-orange-600",
        bgColor: "from-amber-50 to-orange-50",
        projects: "120+",
        specialty: "Organik Sertifika"
    },
    {
        name: "Kimya & Petrokimya",
        icon: esm_BeakerIcon/* default */.Z,
        description: "End\xfcstriyel kimyasal analizler ve test hizmetleri",
        color: "from-purple-500 to-violet-600",
        bgColor: "from-purple-50 to-violet-50",
        projects: "90+",
        specialty: "End\xfcstri 4.0"
    },
    {
        name: "Ar-Ge & \xdcniversiteler",
        icon: AcademicCapIcon/* default */.Z,
        description: "Araştırma ve eğitim kurumları i\xe7in \xf6zel \xe7\xf6z\xfcmler",
        color: "from-pink-500 to-rose-600",
        bgColor: "from-pink-50 to-rose-50",
        projects: "60+",
        specialty: "İnovasyon"
    }
];
function Sectors() {
    const [ref, inView] = (0,dist/* useInView */.YD)({
        triggerOnce: true,
        threshold: 0.1
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        ref: ref,
        className: "py-20 lg:py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute inset-0 opacity-30",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute top-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute top-1/2 left-1/2 w-64 h-64 bg-accent-200/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container-custom relative z-10",
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
                            duration: 0.6
                        },
                        className: "text-center space-y-6 mb-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SparklesIcon/* default */.Z, {
                                        className: "w-4 h-4 text-primary-500"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-label font-medium text-neutral-700",
                                        children: "Uzmanlık Alanlarımız"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                className: "text-gradient font-bold",
                                children: [
                                    "Hizmet Verdiğimiz",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "block",
                                        children: "Sekt\xf6rler"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-body-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed",
                                children: "25+ yıllık deneyimimizle farklı sekt\xf6rlerde \xf6zelleşmiş laboratuvar \xe7\xf6z\xfcmleri sunuyor, her alanda en y\xfcksek kalite standartlarını sağlıyoruz."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
                        children: sectors.map((sector, index)=>{
                            const IconComponent = sector.icon;
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
                                    duration: 0.6,
                                    delay: index * 0.1
                                },
                                className: "group",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100/50 hover:border-neutral-200/50 group-hover:scale-[1.02] overflow-hidden h-full",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "absolute inset-0 bg-gradient-to-br ".concat(sector.bgColor, " opacity-0 group-hover:opacity-60 transition-all duration-500")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative z-10 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-start justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "w-14 h-14 rounded-2xl bg-gradient-to-br ".concat(sector.color, " flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"),
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                                                className: "w-7 h-7 text-white"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex flex-col gap-2 items-end",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-neutral-200/50 shadow-sm",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "text-xs font-semibold text-neutral-700",
                                                                        children: [
                                                                            sector.projects,
                                                                            " Proje"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "inline-flex items-center px-3 py-1.5 bg-neutral-100/90 backdrop-blur-sm rounded-full border border-neutral-200/40",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "text-xs font-medium text-neutral-600",
                                                                        children: sector.specialty
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors leading-tight",
                                                            children: sector.name
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-body text-neutral-600 leading-relaxed",
                                                            children: sector.description
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        })
                                    ]
                                })
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
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
                            delay: 0.8
                        },
                        className: "text-center mt-16",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-neutral-100",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-6 max-w-2xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SparklesIcon/* default */.Z, {
                                            className: "w-8 h-8 text-white"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "text-2xl lg:text-3xl font-bold text-neutral-900",
                                        children: "Sekt\xf6r\xfcn\xfcze \xd6zel \xc7\xf6z\xfcm Arıyorsunuz?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-body-lg text-neutral-600 leading-relaxed",
                                        children: "Uzman ekibimiz, ihtiya\xe7larınıza g\xf6re \xf6zelleştirilmiş laboratuvar \xe7\xf6z\xfcmleri geliştirmek i\xe7in sizlerle birlikte \xe7alışmaya hazır."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                href: "/iletisim",
                                                className: "btn-primary group",
                                                children: [
                                                    "\xdccretsiz Danışmanlık Alın",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowRightIcon/* default */.Z, {
                                                        className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "/cozumler",
                                                className: "btn-outline",
                                                children: "T\xfcm \xc7\xf6z\xfcmlerimizi İnceleyin"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/sections/About.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function About() {
    const [ref, inView] = (0,dist/* useInView */.YD)({
        triggerOnce: true,
        threshold: 0.1
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        id: "protek-hakkinda",
        ref: ref,
        className: "section-padding bg-white overflow-x-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container-custom",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        animate: inView ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: 0.8
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-gradient",
                                children: "Protek Analitik Hakkında"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-body-lg text-neutral-600",
                                children: "20 yılı aşkın deneyimimizle laboratuvar teknolojileri alanında T\xfcrkiye'nin \xf6nde gelen firmalarından biriyiz. M\xfcşterilerimize en kaliteli hizmeti sunmak i\xe7in s\xfcrekli gelişen teknolojileri takip ediyor ve uzman ekibimizle \xe7\xf6z\xfcmler \xfcretiyoruz."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "w-2 h-2 bg-primary-500 rounded-full"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-body text-neutral-700",
                                                children: "ISO 9001:2015 Kalite Y\xf6netim Sistemi"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "w-2 h-2 bg-secondary-500 rounded-full"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-body text-neutral-700",
                                                children: "500+ Başarıyla Tamamlanan Proje"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "w-2 h-2 bg-accent-500 rounded-full"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-body text-neutral-700",
                                                children: "1000+ Memnun M\xfcşteri"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: "/hakkimizda",
                                className: "btn-primary",
                                children: "Daha Fazla Bilgi"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        animate: inView ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: 0.8
                        },
                        className: "relative w-full max-w-[600px] mx-auto lg:mx-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                id: "tanitim-videosu",
                                className: "relative bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl w-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-neutral-800 px-4 py-3 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "w-3 h-3 bg-red-500 rounded-full"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "w-3 h-3 bg-yellow-500 rounded-full"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "w-3 h-3 bg-green-500 rounded-full"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-white text-sm font-medium truncate",
                                                children: "Protek Analitik Tanıtım Videosu"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "relative w-full pb-[75%]",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                                            src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7328309007935291392?compact=1",
                                            className: "absolute top-0 left-0 w-full h-full border-0",
                                            allowFullScreen: true,
                                            title: "Protek Analitik Tanıtım Videosu"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-neutral-800 px-4 py-2 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-2 text-white text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "w-2 h-2 bg-red-500 rounded-full"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "LinkedIn Video"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-white text-sm",
                                                children: "HD • 4:3"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute -top-3 -right-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg",
                                children: "Yeni Video"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js
var EnvelopeIcon = __webpack_require__(4424);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js
var MapPinIcon = __webpack_require__(6263);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js
var PhoneIcon = __webpack_require__(5587);
;// CONCATENATED MODULE: __barrel_optimize__?names=EnvelopeIcon,MapPinIcon,PhoneIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js




;// CONCATENATED MODULE: ./src/components/sections/Contact.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Contact() {
    const [ref, inView] = (0,dist/* useInView */.YD)({
        triggerOnce: true,
        threshold: 0.1
    });
    const [formData, setFormData] = (0,react.useState)({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        messageType: "genel"
    });
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    const [submitStatus, setSubmitStatus] = (0,react.useState)("idle");
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    subject: formData.subject,
                    message: formData.message,
                    message_type: formData.messageType,
                    source: "website-contact-form"
                })
            });
            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    subject: "",
                    message: "",
                    messageType: "genel"
                });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        ref: ref,
        className: "section-padding bg-gradient-to-br from-black via-[#000510] to-[#001328] text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute inset-0 opacity-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black to-[#001328]/20"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute top-0 right-0 w-96 h-96 bg-[#001328]/15 rounded-full blur-3xl"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute bottom-0 left-0 w-80 h-80 bg-black/30 rounded-full blur-3xl"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container-custom relative z-10",
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
                            duration: 0.6
                        },
                        className: "text-center space-y-4 mb-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-white",
                                children: "İletişime Ge\xe7in"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-body-lg text-neutral-300 max-w-3xl mx-auto",
                                children: "Projeleriniz i\xe7in uzman ekibimizden destek almak istiyorsanız, bizimle iletişime ge\xe7in."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
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
                                    delay: 0.2
                                },
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                    className: "w-6 h-6 text-primary-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "+90 (216) 329 39 60 Pbx"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                    className: "w-6 h-6 text-primary-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "+90 (216) 329 37 70 Pbx"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeIcon/* default */.Z, {
                                                    className: "w-6 h-6 text-primary-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "info@protekanalitik.com"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MapPinIcon/* default */.Z, {
                                                    className: "w-6 h-6 text-primary-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Atakent Mah. Dicle Cad. No:29"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "flex items-center gap-3 pl-9",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "34760 \xdcmraniye / İstanbul / T\xdcRKİYE"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
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
                                    delay: 0.4
                                },
                                className: "lg:col-span-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "text",
                                                    name: "firstName",
                                                    value: formData.firstName,
                                                    onChange: handleInputChange,
                                                    placeholder: "Adınız",
                                                    required: true,
                                                    className: "input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "text",
                                                    name: "lastName",
                                                    value: formData.lastName,
                                                    onChange: handleInputChange,
                                                    placeholder: "Soyadınız",
                                                    className: "input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleInputChange,
                                                    placeholder: "E-posta",
                                                    required: true,
                                                    className: "input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "tel",
                                                    name: "phone",
                                                    value: formData.phone,
                                                    onChange: handleInputChange,
                                                    placeholder: "Telefon",
                                                    className: "input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            name: "company",
                                            value: formData.company,
                                            onChange: handleInputChange,
                                            placeholder: "Şirket",
                                            className: "input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                    name: "messageType",
                                                    value: formData.messageType,
                                                    onChange: handleInputChange,
                                                    className: "input bg-neutral-900 border-neutral-800 text-white focus:border-primary-500 focus:ring-primary-500",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                            value: "genel",
                                                            children: "Genel Bilgi"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                            value: "teklif-talebi",
                                                            children: "Teklif Talebi"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                            value: "teknik-destek",
                                                            children: "Teknik Destek"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                            value: "satis",
                                                            children: "Satış"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                            value: "is-birligi",
                                                            children: "İş Birliği"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                    type: "text",
                                                    name: "subject",
                                                    value: formData.subject,
                                                    onChange: handleInputChange,
                                                    placeholder: "Konu",
                                                    required: true,
                                                    className: "input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                            rows: 4,
                                            name: "message",
                                            value: formData.message,
                                            onChange: handleInputChange,
                                            placeholder: "Mesajınız",
                                            required: true,
                                            className: "input bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:ring-primary-500 resize-none"
                                        }),
                                        submitStatus === "success" && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-300",
                                            children: "Mesajınız başarıyla g\xf6nderildi! En kısa s\xfcrede size d\xf6n\xfcş yapacağız."
                                        }),
                                        submitStatus === "error" && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300",
                                            children: "Mesaj g\xf6nderilirken bir hata oluştu. L\xfctfen tekrar deneyiniz."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: isSubmitting ? "G\xf6nderiliyor..." : "Mesaj G\xf6nder"
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

// EXTERNAL MODULE: ./src/components/layout/Footer.tsx + 1 modules
var Footer = __webpack_require__(1422);
;// CONCATENATED MODULE: ./src/app/page.tsx
/* __next_internal_client_entry_do_not_use__ dynamic,runtime,default auto */ 










// Force dynamic rendering to prevent static generation errors
const dynamic = "force-dynamic";
// Use Edge Runtime for Cloudflare Pages compatibility
const runtime = "edge";
function HomePage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Hero, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Features, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Solutions, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Products, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Clients, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Sectors, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(About, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Contact, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer["default"], {})
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,2695,1776,856,5330,1422,2958,2971,993,1744], function() { return __webpack_exec__(232); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);