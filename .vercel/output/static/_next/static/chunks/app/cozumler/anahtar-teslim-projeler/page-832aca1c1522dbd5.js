(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8311],{

/***/ 4433:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 209))

/***/ }),

/***/ 209:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AnahtarTeslimProjelerPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/index.mjs + 290 modules
var es = __webpack_require__(477);
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/dist/index.mjs
var dist = __webpack_require__(4702);
// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(5330);
// EXTERNAL MODULE: ./src/components/layout/Footer.tsx + 1 modules
var Footer = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js
var ArrowRightIcon = __webpack_require__(1122);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(9186);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js
var ClockIcon = __webpack_require__(2929);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js
var PhoneIcon = __webpack_require__(5587);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PlayIcon.js
var PlayIcon = __webpack_require__(1001);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js
var ShieldCheckIcon = __webpack_require__(2938);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/StarIcon.js
var StarIcon = __webpack_require__(260);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TrophyIcon.js
var TrophyIcon = __webpack_require__(651);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js
var UserGroupIcon = __webpack_require__(9649);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/WrenchScrewdriverIcon.js
var WrenchScrewdriverIcon = __webpack_require__(7478);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowRightIcon,CheckCircleIcon,ClockIcon,PhoneIcon,PlayIcon,ShieldCheckIcon,StarIcon,TrophyIcon,UserGroupIcon,WrenchScrewdriverIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js











;// CONCATENATED MODULE: ./src/app/cozumler/anahtar-teslim-projeler/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const benefits = [
    {
        icon: UserGroupIcon/* default */.Z,
        title: "Tek Koordinat\xf6r Avantajı",
        description: "T\xfcm s\xfcre\xe7leri tek elden y\xf6netim ile proje karmaşıklığını minimuma indiriyoruz.",
        value: "100%"
    },
    {
        icon: ClockIcon/* default */.Z,
        title: "Zamanında Teslim Garantisi",
        description: "Detaylı planlama ve proje y\xf6netimi ile belirlenen s\xfcrede teslim garantisi.",
        value: "%98"
    },
    {
        icon: ShieldCheckIcon/* default */.Z,
        title: "Kalite G\xfcvencesi",
        description: "ISO standartlarında kalite g\xfcvencesi ve 2 yıl tam garanti.",
        value: "ISO 9001"
    },
    {
        icon: TrophyIcon/* default */.Z,
        title: "Uzun D\xf6nem Destek",
        description: "24/7 teknik destek ve s\xfcrekli bakım hizmetleri.",
        value: "7/24"
    }
];
const projectTypes = [
    {
        name: "End\xfcstriyel Laboratuvarlar",
        description: "Gıda, kimya, ila\xe7 sekt\xf6rlerine \xf6zel laboratuvar projeleri",
        icon: "\uD83C\uDFED",
        duration: "8-16 hafta",
        scope: [
            "Tasarım",
            "Kurulum",
            "Eğitim",
            "Devreye alma"
        ]
    },
    {
        name: "AR-GE Merkezleri",
        description: "Araştırma geliştirme odaklı laboratuvar kompleksleri",
        icon: "\uD83D\uDD2C",
        duration: "12-20 hafta",
        scope: [
            "Konsept tasarım",
            "Teknoloji se\xe7imi",
            "Kurulum",
            "Validasyon"
        ]
    },
    {
        name: "Kalite Kontrol Laboratuvarları",
        description: "QC/QA odaklı analiz ve test laboratuvarları",
        icon: "⚗️",
        duration: "6-12 hafta",
        scope: [
            "İhtiya\xe7 analizi",
            "Ekipman se\xe7imi",
            "Kurulum",
            "Sertifikasyon"
        ]
    },
    {
        name: "Akademik Laboratuvarlar",
        description: "\xdcniversite ve araştırma kurumları i\xe7in eğitim laboratuvarları",
        icon: "\uD83C\uDF93",
        duration: "10-18 hafta",
        scope: [
            "Eğitim odaklı tasarım",
            "Mod\xfcler kurulum",
            "Eğitim",
            "Dok\xfcmentasyon"
        ]
    }
];
const testimonials = [
    {
        name: "M\xfchendis Ali Vural",
        position: "Proje M\xfcd\xfcr\xfc",
        company: "Ar\xe7elik A.Ş.",
        content: "Anahtar teslim projemizde g\xf6sterdikleri profesyonellik m\xfckemmeldi. Zamanında teslim edildi ve beklentilerimizi aştı.",
        rating: 5
    },
    {
        name: "Dr. Fatma Şen",
        position: "Kalite Direkt\xf6r\xfc",
        company: "Ko\xe7 Holding",
        content: "Tek koordinat\xf6r ile \xe7alışmanın avantajını g\xf6rd\xfck. Hi\xe7bir aksaklık yaşamadık ve s\xfcre\xe7 \xe7ok rahat ilerledi.",
        rating: 5
    }
];
function AnahtarTeslimProjelerPage() {
    const [ref, inView] = (0,dist/* useInView */.YD)({
        triggerOnce: true,
        threshold: 0.1
    });
    const [activeTestimonial, setActiveTestimonial] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        const interval = setInterval(()=>{
            setActiveTestimonial((prev)=>(prev + 1) % testimonials.length);
        }, 5000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "relative pt-24 pb-20 bg-gradient-to-br from-[#001328] via-[#000a1a] to-black overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-full blur-3xl"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "container-custom relative z-10",
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
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-white/20",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WrenchScrewdriverIcon/* default */.Z, {
                                                            className: "w-4 h-4 text-green-400"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-white/90 font-medium text-sm",
                                                            children: "Komple \xc7\xf6z\xfcm"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                                    className: "text-3xl lg:text-4xl font-bold text-white leading-tight",
                                                    children: [
                                                        "Anahtar Teslim",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent",
                                                            children: "Projeler"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-lg text-gray-300 leading-relaxed",
                                                    children: "Konsept tasarımından devreye almaya kadar t\xfcm s\xfcre\xe7leri tek elden y\xf6netiyoruz. Proje s\xfcrenizi kısaltır, kaliteyi artırırız."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                {
                                                    icon: "\uD83C\uDFAF",
                                                    text: "Tek Koordinat\xf6r"
                                                },
                                                {
                                                    icon: "⏰",
                                                    text: "Zamanında Teslim"
                                                },
                                                {
                                                    icon: "\uD83D\uDEE1️",
                                                    text: "2 Yıl Garanti"
                                                },
                                                {
                                                    icon: "\uD83E\uDD1D",
                                                    text: "Uzun D\xf6nem Destek"
                                                }
                                            ].map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: 0.2 + index * 0.1
                                                    },
                                                    className: "flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-lg",
                                                            children: item.icon
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-white font-medium text-sm",
                                                            children: item.text
                                                        })
                                                    ]
                                                }, index))
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col sm:flex-row gap-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.a, {
                                                    href: "/teklif-al",
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: 0.6
                                                    },
                                                    className: "flex-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group",
                                                    children: [
                                                        "Proje Teklifi Al",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon/* default */.Z, {
                                                            className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.button, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: 0.7
                                                    },
                                                    className: "px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PlayIcon/* default */.Z, {
                                                            className: "w-4 h-4 group-hover:scale-110 transition-transform"
                                                        }),
                                                        "Proje \xd6rnekleri"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                    initial: {
                                        opacity: 0,
                                        x: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.2
                                    },
                                    className: "relative",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                src: "/images/lab-3.jpg",
                                                alt: "Anahtar Teslim Proje",
                                                className: "w-full h-64 lg:h-80 object-cover rounded-xl shadow-2xl"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-xl shadow-2xl",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "text-xl font-bold",
                                                        children: "300+"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "text-xs opacity-90",
                                                        children: "Tamamlanan Proje"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "absolute -bottom-3 -left-3 bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-xl shadow-2xl",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "text-xl font-bold",
                                                        children: "%98"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "text-xs opacity-90",
                                                        children: "Zamanında Teslim"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                ref: ref,
                className: "py-20 bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container-custom",
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
                                duration: 0.8
                            },
                            className: "text-center mb-16",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                                children: [
                                    "Anahtar Teslim",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent",
                                        children: " Avantajları"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "grid lg:grid-cols-2 gap-8",
                            children: benefits.map((benefit, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
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
                                    className: "bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-6 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(benefit.icon, {
                                                        className: "w-8 h-8 text-white"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "text-2xl font-bold text-green-600 mb-1",
                                                            children: benefit.value
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "text-xl font-bold text-gray-900",
                                                            children: benefit.title
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-gray-600",
                                            children: benefit.description
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: "py-20 bg-gradient-to-br from-gray-50 to-green-50/50",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container-custom",
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
                                duration: 0.8
                            },
                            className: "text-center mb-16",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                                children: [
                                    "Proje",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent",
                                        children: " T\xfcrlerimiz"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "grid lg:grid-cols-2 gap-8",
                            children: projectTypes.map((project, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(es/* motion */.EA.div, {
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
                                    className: "bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-4xl",
                                                    children: project.icon
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "text-xl font-bold text-gray-900",
                                                            children: project.name
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "text-green-600 font-semibold text-sm",
                                                            children: project.duration
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-gray-600 mb-6",
                                            children: project.description
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                    className: "font-semibold text-gray-900 mb-3",
                                                    children: "Kapsam"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: project.scope.map((item, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2 text-sm text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                    className: "w-4 h-4 text-green-500 flex-shrink-0"
                                                                }),
                                                                item
                                                            ]
                                                        }, idx))
                                                })
                                            ]
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: "py-20 bg-gradient-to-br from-[#001328] via-[#000a1a] to-black",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container-custom",
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
                                duration: 0.8
                            },
                            className: "text-center mb-16",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                className: "text-4xl lg:text-5xl font-bold text-white mb-6",
                                children: [
                                    "M\xfcşteri",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent",
                                        children: " Memnuniyeti"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "relative max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* AnimatePresence */.M_, {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* motion */.EA.div, {
                                        initial: {
                                            opacity: 0,
                                            x: 50
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            x: -50
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: "bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col items-center text-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: testimonials[activeTestimonial].name.split(" ").map((n)=>n[0]).join("")
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "flex gap-1 mb-6",
                                                    children: [
                                                        ...Array(testimonials[activeTestimonial].rating)
                                                    ].map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(StarIcon/* default */.Z, {
                                                            className: "w-6 h-6 text-yellow-400 fill-current"
                                                        }, i))
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    className: "text-xl text-white/90 mb-8 italic leading-relaxed",
                                                    children: [
                                                        "“",
                                                        testimonials[activeTestimonial].content,
                                                        "”"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "font-bold text-white text-lg",
                                                            children: testimonials[activeTestimonial].name
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "text-white/70",
                                                            children: testimonials[activeTestimonial].position
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "text-green-400 font-semibold",
                                                            children: testimonials[activeTestimonial].company
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, activeTestimonial)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "flex justify-center gap-3 mt-8",
                                    children: testimonials.map((_, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            onClick: ()=>setActiveTestimonial(index),
                                            className: "w-3 h-3 rounded-full transition-all duration-300 ".concat(index === activeTestimonial ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50")
                                        }, index))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: "py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "container-custom",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "max-w-4xl mx-auto text-center",
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
                                duration: 0.8
                            },
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "text-4xl lg:text-5xl font-bold text-white",
                                    children: [
                                        "Projenizi",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "block",
                                            children: "Bizimle Başlatın"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-xl text-white/90",
                                    children: "\xdccretsiz proje danışmanlığı i\xe7in bug\xfcn iletişime ge\xe7in."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "/teklif-al",
                                            className: "bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(WrenchScrewdriverIcon/* default */.Z, {
                                                    className: "w-6 h-6"
                                                }),
                                                "Proje Teklifi Al",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon/* default */.Z, {
                                                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "tel:+902123456789",
                                            className: "bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-3 group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                    className: "w-6 h-6"
                                                }),
                                                "Hemen Ara"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer["default"], {})
        ]
    });
}


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

/***/ 1001:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function PlayIcon({
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
    d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlayIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 260:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function StarIcon({
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
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(StarIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 9649:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function UserGroupIcon({
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
    d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserGroupIcon);
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
/******/ __webpack_require__.O(0, [1176,2695,1776,5330,1422,2971,993,1744], function() { return __webpack_exec__(4433); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);