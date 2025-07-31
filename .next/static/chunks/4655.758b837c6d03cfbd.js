"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4655],{

/***/ 4655:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Clients; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(477);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6691);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
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
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useInView */ .JC)(ref, {
        once: true
    });
    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useMotionValue */ .c$)(0);
    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useSpring */ .q_)(motionValue, {
        duration: duration * 1000
    });
    const [displayValue, setDisplayValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isInView) {
            motionValue.set(value);
        }
    }, [
        isInView,
        motionValue,
        value
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return springValue.onChange((latest)=>{
            setDisplayValue(Math.round(latest));
        });
    }, [
        springValue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: "text-4xl font-bold text-gradient mb-2",
        children: [
            displayValue,
            suffix
        ]
    });
}
function Clients() {
    const [hoveredLogo, setHoveredLogo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [hoveredStat, setHoveredStat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Double the logos for seamless infinite scroll
    const doubledLogos = [
        ...clientLogos,
        ...clientLogos
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "clients-section",
        className: "section-padding bg-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "absolute inset-0 bg-pattern opacity-30"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container-custom relative z-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-label text-neutral-700",
                                        children: "G\xfcvenilir Ortaklarımız"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.h2, {
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-gradient",
                                        children: "G\xfcvenilir Markalar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.p, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
                                className: "text-center group cursor-pointer",
                                onMouseEnter: ()=>setHoveredStat("brands"),
                                onMouseLeave: ()=>setHoveredStat(null),
                                whileHover: {
                                    scale: 1.05
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-gradient-to-br from-white to-primary-50 rounded-2xl p-6 border border-primary-100 group-hover:border-primary-200 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary-500/10",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnimatedCounter, {
                                            value: 25,
                                            suffix: "+",
                                            duration: 2.5
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "text-body text-neutral-600 font-medium group-hover:text-primary-600 transition-colors",
                                            children: "Uluslararası Marka"
                                        }),
                                        hoveredStat === "brands" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
                                            initial: {
                                                opacity: 0,
                                                height: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                height: "auto"
                                            },
                                            className: "mt-3 pt-3 border-t border-primary-100",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "text-caption text-primary-600 font-medium",
                                                children: "D\xfcnya \xe7apında g\xfcvenilir markalar"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
                                className: "text-center group cursor-pointer",
                                onMouseEnter: ()=>setHoveredStat("customers"),
                                onMouseLeave: ()=>setHoveredStat(null),
                                whileHover: {
                                    scale: 1.05
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-6 border border-secondary-100 group-hover:border-secondary-200 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-secondary-500/10",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnimatedCounter, {
                                            value: 1000,
                                            suffix: "+",
                                            duration: 3
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "text-body text-neutral-600 font-medium group-hover:text-secondary-600 transition-colors",
                                            children: "Mutlu M\xfcşteri"
                                        }),
                                        hoveredStat === "customers" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
                                            initial: {
                                                opacity: 0,
                                                height: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                height: "auto"
                                            },
                                            className: "mt-3 pt-3 border-t border-secondary-100",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "text-caption text-secondary-600 font-medium",
                                                children: "T\xfcrkiye geneli memnun m\xfcşteriler"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
                                className: "text-center group cursor-pointer",
                                onMouseEnter: ()=>setHoveredStat("experience"),
                                onMouseLeave: ()=>setHoveredStat(null),
                                whileHover: {
                                    scale: 1.05
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-gradient-to-br from-white to-accent-50 rounded-2xl p-6 border border-accent-100 group-hover:border-accent-200 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-500/10",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnimatedCounter, {
                                            value: 15,
                                            suffix: "+",
                                            duration: 2
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "text-body text-neutral-600 font-medium group-hover:text-accent-600 transition-colors",
                                            children: "Sekt\xf6r Deneyimi"
                                        }),
                                        hoveredStat === "experience" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
                                            initial: {
                                                opacity: 0,
                                                height: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                height: "auto"
                                            },
                                            className: "mt-3 pt-3 border-t border-accent-100",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "text-caption text-accent-600 font-medium",
                                                children: "Farklı end\xfcstri alanlarında uzman"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative py-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "overflow-hidden mb-12 pb-8",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
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
                                    children: doubledLogos.map((client, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
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
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-36 h-24 bg-white rounded-2xl border border-neutral-200/50 flex items-center justify-center transition-all duration-300 relative overflow-hidden group-hover:border-primary-200 group-hover:shadow-xl group-hover:shadow-primary-500/10",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: client.logo,
                                                        alt: client.name,
                                                        width: 96,
                                                        height: 48,
                                                        className: "max-w-28 max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                                                    }),
                                                    hoveredLogo === "top-".concat(client.name) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
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
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "overflow-hidden pb-8",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
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
                                    children: doubledLogos.reverse().map((client, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
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
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-36 h-24 bg-white rounded-2xl border border-neutral-200/50 flex items-center justify-center transition-all duration-300 relative overflow-hidden group-hover:border-accent-200 group-hover:shadow-xl group-hover:shadow-accent-500/10",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: client.logo,
                                                        alt: client.name,
                                                        width: 96,
                                                        height: 48,
                                                        className: "max-w-28 max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                                                    }),
                                                    hoveredLogo === "bottom-".concat(client.name) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
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
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.div, {
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
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                    className: "text-2xl font-bold text-neutral-900 mb-4",
                                    children: "Siz de Bu G\xfcvenilir Ağa Katılın"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "text-neutral-600 mb-6 max-w-xl mx-auto",
                                    children: "D\xfcnya standartlarında analitik \xe7\xf6z\xfcmler i\xe7in bizimle iletişime ge\xe7in. Uzman ekibimiz size en uygun \xe7\xf6z\xfcm\xfc sunar."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.a, {
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
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .EA.a, {
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


/***/ })

}]);