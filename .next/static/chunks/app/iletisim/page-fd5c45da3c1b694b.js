(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6480],{

/***/ 3354:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9937))

/***/ }),

/***/ 9937:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ContactPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(5330);
// EXTERNAL MODULE: ./src/components/layout/Footer.tsx + 1 modules
var Footer = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js
var AcademicCapIcon = __webpack_require__(7933);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BanknotesIcon.js
var BanknotesIcon = __webpack_require__(3352);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BuildingOffice2Icon.js
var BuildingOffice2Icon = __webpack_require__(1039);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js
var ChatBubbleLeftRightIcon = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(9186);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(3217);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js
var ClockIcon = __webpack_require__(2929);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CogIcon.js
var CogIcon = __webpack_require__(9010);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js
var EnvelopeIcon = __webpack_require__(4424);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/GlobeAltIcon.js
var GlobeAltIcon = __webpack_require__(787);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js
var MapPinIcon = __webpack_require__(6263);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js
var PhoneIcon = __webpack_require__(5587);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/WrenchScrewdriverIcon.js
var WrenchScrewdriverIcon = __webpack_require__(7478);
;// CONCATENATED MODULE: __barrel_optimize__?names=AcademicCapIcon,BanknotesIcon,BuildingOffice2Icon,ChatBubbleLeftRightIcon,CheckCircleIcon,ChevronRightIcon,ClockIcon,CogIcon,EnvelopeIcon,GlobeAltIcon,MapPinIcon,PhoneIcon,WrenchScrewdriverIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js














;// CONCATENATED MODULE: ./src/app/iletisim/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const contactSections = [
    // İletişim Bilgileri
    {
        id: "genel-mudurluk",
        title: "Genel M\xfcd\xfcrl\xfck",
        icon: BuildingOffice2Icon/* default */.Z,
        category: "İletişim Bilgileri"
    },
    {
        id: "teknik-servis",
        title: "Teknik Servis",
        icon: WrenchScrewdriverIcon/* default */.Z,
        category: "İletişim Bilgileri"
    },
    {
        id: "muhasebe",
        title: "Muhasebe",
        icon: BanknotesIcon/* default */.Z,
        category: "İletişim Bilgileri"
    },
    {
        id: "sosyal-medya",
        title: "Sosyal Medya",
        icon: GlobeAltIcon/* default */.Z,
        category: "İletişim Bilgileri"
    },
    // Destek Hizmetleri
    {
        id: "canli-destek",
        title: "Canlı Destek",
        icon: ChatBubbleLeftRightIcon/* default */.Z,
        category: "Destek Hizmetleri"
    },
    {
        id: "uzaktan-erisim",
        title: "Uzaktan Erişim",
        icon: GlobeAltIcon/* default */.Z,
        category: "Destek Hizmetleri"
    },
    {
        id: "egitim-talepleri",
        title: "Eğitim Talepleri",
        icon: AcademicCapIcon/* default */.Z,
        category: "Destek Hizmetleri"
    },
    {
        id: "sikayet-oneriler",
        title: "Şikayet ve \xd6neriler",
        icon: EnvelopeIcon/* default */.Z,
        category: "Destek Hizmetleri"
    },
    // Lojistik ve Teslimat
    {
        id: "kurulum-hizmetleri",
        title: "Kurulum Hizmetleri",
        icon: CogIcon/* default */.Z,
        category: "Lojistik ve Teslimat"
    }
];
function ContactPage() {
    const [activeSection, setActiveSection] = (0,react.useState)("genel-mudurluk");
    (0,react.useEffect)(()=>{
        const handleScroll = ()=>{
            const sections = contactSections.map((section)=>document.getElementById(section.id));
            const scrollPosition = window.scrollY + 200;
            for(let i = sections.length - 1; i >= 0; i--){
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(contactSections[i].id);
                    break;
                }
            }
        };
        // Handle initial hash if present
        const handleHashChange = ()=>{
            const hash = window.location.hash.substring(1);
            if (hash && contactSections.some((section)=>section.id === hash)) {
                setTimeout(()=>scrollToSection(hash), 100);
            }
        };
        // Check hash on mount
        handleHashChange();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("hashchange", handleHashChange);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80;
            const yPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: yPosition,
                behavior: "smooth"
            });
        }
    };
    const groupedSections = contactSections.reduce((acc, section)=>{
        if (!acc[section.category]) {
            acc[section.category] = [];
        }
        acc[section.category].push(section);
        return acc;
    }, {});
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container-custom py-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "text-5xl font-bold text-gray-900 mb-6",
                                    children: "İletişim"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                                    children: "7/24 destek i\xe7in yanınızdayız. İhtiyacınıza g\xf6re doğru departmanla hızlıca iletişime ge\xe7in."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col lg:flex-row gap-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "lg:w-80 flex-shrink-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "lg:sticky lg:top-28",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100",
                                                children: Object.entries(groupedSections).map((param)=>{
                                                    let [category, sections] = param;
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "mb-6 last:mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                className: "text-sm font-medium text-gray-500 uppercase tracking-wider mb-3",
                                                                children: category
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "space-y-1",
                                                                children: sections.map((section)=>{
                                                                    const IconComponent = section.icon;
                                                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                        onClick: ()=>scrollToSection(section.id),
                                                                        className: "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ".concat(activeSection === section.id ? "bg-blue-50 text-blue-700 border border-blue-200" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                                                                className: "w-5 h-5 ".concat(activeSection === section.id ? "text-blue-600" : "text-gray-400")
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "font-medium",
                                                                                children: section.title
                                                                            }),
                                                                            activeSection === section.id && /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                                                className: "w-4 h-4 text-blue-600 ml-auto"
                                                                            })
                                                                        ]
                                                                    }, section.id);
                                                                })
                                                            })
                                                        ]
                                                    }, category);
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mt-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                        className: "font-semibold mb-4",
                                                        children: "Hızlı İletişim"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "tel:+902163293960",
                                                                className: "flex items-center space-x-3 text-blue-100 hover:text-white transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                                        className: "w-5 h-5"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "+90 (216) 329 39 60"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "mailto:info@protekanalitik.com",
                                                                className: "flex items-center space-x-3 text-blue-100 hover:text-white transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeIcon/* default */.Z, {
                                                                        className: "w-5 h-5"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "info@protekanalitik.com"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "/iletisim",
                                                                className: "flex items-center space-x-3 text-blue-100 hover:text-white transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MapPinIcon/* default */.Z, {
                                                                        className: "w-5 h-5"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "İletişim"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex-1 space-y-16",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "genel-mudurluk",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BuildingOffice2Icon/* default */.Z, {
                                                                    className: "w-6 h-6 text-blue-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Genel M\xfcd\xfcrl\xfck"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Ana ofis ve y\xf6netim iletişim"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "İletişim Bilgileri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-gray-400"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "font-medium",
                                                                                                children: "+90 (216) 329 39 60"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Ana Hat"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-gray-400"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "font-medium",
                                                                                                children: "+90 (216) 329 37 70"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Pbx"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-gray-400"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "font-medium",
                                                                                                children: "+90 (216) 329 41 47"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Fax"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-gray-400"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "font-medium",
                                                                                                children: "info@protekanalitik.com"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Genel Bilgi"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MapPinIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-gray-400 mt-1"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "font-medium",
                                                                                                children: "Merkez Ofis"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                                                className: "text-gray-600",
                                                                                                children: [
                                                                                                    "Atakent Mah. Dicle Cad. No:29",
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                                                                    "34760 \xdcmraniye / İstanbul / T\xdcRKİYE"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3 mt-4 pt-4 border-t border-gray-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MapPinIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-gray-400 mt-1"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "font-medium",
                                                                                                children: "Ortadoğu Ofis"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-gray-600",
                                                                                                children: "Ras Al Khaimah, United Arab Emirates"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "mt-2 space-y-1",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                        className: "text-sm text-gray-600",
                                                                                                        children: "T: +971 7 203 1257"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                        className: "text-sm text-gray-600",
                                                                                                        children: "T: +971 50 653 62 75"
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
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "\xc7alışma Saatleri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Pazartesi - Cuma"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "font-medium",
                                                                                        children: "08:30 - 18:30"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Cumartesi"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "font-medium",
                                                                                        children: "09:00 - 13:00"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Pazar"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "Kapalı"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "mt-6 p-4 bg-green-50 rounded-lg border border-green-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-600"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "font-medium text-green-900",
                                                                                        children: "A\xe7ık"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                className: "text-sm text-green-700 mt-1",
                                                                                children: "18:30’a kadar hizmetdeyiz"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "teknik-servis",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WrenchScrewdriverIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-orange-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Teknik Servis"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "7/24 teknik destek hizmeti"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Acil Teknik Destek"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3 p-4 bg-red-50 rounded-lg border border-red-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ClockIcon/* default */.Z, {
                                                                                        className: "w-6 h-6 text-red-600"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "font-medium text-red-900",
                                                                                                children: "Acil Hat"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-red-700",
                                                                                                children: "+90 (216) 329 39 60"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "space-y-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center space-x-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                                                                className: "w-5 h-5 text-gray-400"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                        className: "font-medium",
                                                                                                        children: "Teknik Destek Hattı"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                        className: "text-gray-600",
                                                                                                        children: "+90 (216) 329 39 60"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center space-x-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeIcon/* default */.Z, {
                                                                                                className: "w-5 h-5 text-gray-400"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                        className: "font-medium",
                                                                                                        children: "E-posta Desteği"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                        className: "text-gray-600",
                                                                                                        children: "info@protekanalitik.com"
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
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Servis Hizmetleri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Preventif bakım hizmetleri"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Cihaz kalibrasyonu"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Yedek par\xe7a temini"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Uzaktan erişim desteği"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Yerinde teknik m\xfcdahale"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "mt-6 p-4 bg-blue-50 rounded-lg",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                            className: "text-sm text-blue-800",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                                                    children: "Yanıt S\xfcresi:"
                                                                                }),
                                                                                " Acil: 2 saat, Rutin: 24 saat"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "muhasebe",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BanknotesIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-purple-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Muhasebe"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Fatura ve \xf6deme işlemleri"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "İletişim Bilgileri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-gray-400"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "font-medium",
                                                                                                children: "+90 (212) 123 45 69"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Muhasebe Departmanı"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-gray-400"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "font-medium",
                                                                                                children: "muhasebe@protekanalitik.com"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Fatura ve \xd6deme"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4 mt-6",
                                                                        children: "\xc7alışma Saatleri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Pazartesi - Cuma"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "font-medium",
                                                                                        children: "09:00 - 17:00"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Cumartesi - Pazar"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "Kapalı"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "\xd6deme Y\xf6ntemleri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Banka havalesi"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Kredi kartı"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "\xc7ek"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-green-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Senet"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                            className: "text-sm text-yellow-800",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                                                    children: "Not:"
                                                                                }),
                                                                                " Fatura talepleri 3 iş g\xfcn\xfc \xf6nceden bildirilmeli"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "sosyal-medya",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobeAltIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-blue-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Sosyal Medya"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Bizi sosyal medyada takip edin"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "https://www.linkedin.com/company/protek-analytical-industrial-systems/posts/?feedView=all",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "group block p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center space-x-4 mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                className: "w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                                    className: "w-8 h-8 text-white",
                                                                                    fill: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                                        className: "text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors",
                                                                                        children: "LinkedIn"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-gray-600",
                                                                                        children: "Bize hızlıca yazın"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "text-blue-600 font-medium group-hover:text-blue-700",
                                                                                children: "Takip Et"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                                className: "w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "https://www.instagram.com/protek.analitik/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "group block p-6 bg-gradient-to-br from-pink-50 to-purple-100 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-300 hover:scale-105",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center space-x-4 mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                className: "w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                                    className: "w-8 h-8 text-white",
                                                                                    fill: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                                        className: "text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors",
                                                                                        children: "Instagram"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-gray-600",
                                                                                        children: "Bizi takip edin"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "text-purple-600 font-medium group-hover:text-purple-700",
                                                                                children: "Takip Et"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                                className: "w-5 h-5 text-purple-600 group-hover:text-purple-700 group-hover:translate-x-1 transition-all",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "https://www.youtube.com/channel/UCEBjbLKziuAJliIjjCaOERg",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "group block p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300 hover:scale-105",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center space-x-4 mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                className: "w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                                    className: "w-8 h-8 text-white",
                                                                                    fill: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                                        d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                                        className: "text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors",
                                                                                        children: "YouTube"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-gray-600",
                                                                                        children: "Bizi izleyin"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "text-red-600 font-medium group-hover:text-red-700",
                                                                                children: "İzle"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                                className: "w-5 h-5 text-red-600 group-hover:text-red-700 group-hover:translate-x-1 transition-all",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "canli-destek",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChatBubbleLeftRightIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-indigo-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Canlı Destek"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Online anlık destek"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Canlı Sohbet"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3 mb-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-3 h-3 bg-green-400 rounded-full animate-pulse"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "font-medium text-green-700",
                                                                                        children: "Online"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                className: "text-gray-700 mb-4",
                                                                                children: "Teknik sorularınız i\xe7in uzman ekibimiz hazır. Anında destek alın."
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                                className: "w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors",
                                                                                children: "Canlı Sohbet Başlat"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "mt-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                className: "font-medium text-gray-900 mb-3",
                                                                                children: "Destek Saatleri"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "space-y-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "Pazartesi - Cuma"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                className: "font-medium",
                                                                                                children: "09:00 - 18:00"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "Cumartesi"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                className: "font-medium",
                                                                                                children: "10:00 - 16:00"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "Pazar"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                className: "text-red-500",
                                                                                                children: "Kapalı"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Sık Sorulan Sorular"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 bg-gray-50 rounded-lg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                        className: "font-medium text-gray-900 mb-2",
                                                                                        children: "Cihaz kurulum s\xfcreci nasıl işliyor?"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600",
                                                                                        children: "Kurulum ekibimiz size uygun tarihte gelir ve t\xfcm kurulum işlemlerini tamamlar."
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 bg-gray-50 rounded-lg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                        className: "font-medium text-gray-900 mb-2",
                                                                                        children: "Garantiim ne kadar s\xfcreli?"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600",
                                                                                        children: "T\xfcm cihazlarımız minimum 2 yıl garantilidir. Bazı \xfcr\xfcnlerde 5 yıla kadar garanti sunuyoruz."
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 bg-gray-50 rounded-lg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                        className: "font-medium text-gray-900 mb-2",
                                                                                        children: "Eğitim hizmetleri veriyor musunuz?"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600",
                                                                                        children: "Evet, t\xfcm cihazlarımız i\xe7in kapsamlı kullanıcı eğitimleri veriyoruz."
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
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "uzaktan-erisim",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobeAltIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-cyan-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Uzaktan Erişim"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Uzaktan teknik destek hizmeti"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Nasıl \xc7alışır?"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm",
                                                                                        children: "1"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-gray-900",
                                                                                                children: "Bağlantı Kurulumu"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-600",
                                                                                                children: "G\xfcvenli erişim kodu ile bağlantı"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm",
                                                                                        children: "2"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-gray-900",
                                                                                                children: "Problem Tespiti"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-600",
                                                                                                children: "Hızlı sorun tespiti"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm",
                                                                                        children: "3"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-gray-900",
                                                                                                children: "Anında \xc7\xf6z\xfcm"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-600",
                                                                                                children: "Anında \xe7\xf6z\xfcm veya randevu"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Uzaktan Erişim Talep Et"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "p-6 bg-cyan-50 rounded-xl border border-cyan-200",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "space-y-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                            children: "Sorun A\xe7ıklaması"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                                                            className: "w-full p-3 border border-gray-300 rounded-lg resize-none",
                                                                                            rows: 3,
                                                                                            placeholder: "Yaşadığınız sorunu kısaca a\xe7ıklayın..."
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                            children: "Telefon Numaranız"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                                            type: "tel",
                                                                                            className: "w-full p-3 border border-gray-300 rounded-lg",
                                                                                            placeholder: "+90 xxx xxx xx xx"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                                    className: "w-full bg-cyan-600 text-white py-3 px-4 rounded-lg hover:bg-cyan-700 transition-colors",
                                                                                    children: "Uzaktan Destek Talep Et"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "egitim-talepleri",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AcademicCapIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-amber-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Eğitim Talepleri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "\xd6zel eğitim ve workshop"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Eğitim Programları"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 border border-gray-200 rounded-lg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                        className: "font-medium text-gray-900 mb-2",
                                                                                        children: "Temel Kullanıcı Eğitimi"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 mb-3",
                                                                                        children: "Cihaz kullanımı ve temel bakım"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center space-x-4 text-sm text-gray-500",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "\uD83D\uDD50 4 saat"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "\uD83D\uDC65 Max 8 kişi"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "\uD83D\uDCCD Yerinde/Online"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 border border-gray-200 rounded-lg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                        className: "font-medium text-gray-900 mb-2",
                                                                                        children: "İleri Seviye Eğitim"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 mb-3",
                                                                                        children: "Metod geliştirme ve kalibrasyon"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center space-x-4 text-sm text-gray-500",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "\uD83D\uDD50 8 saat"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "\uD83D\uDC65 Max 6 kişi"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "\uD83D\uDCCD Merkez"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 border border-gray-200 rounded-lg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                        className: "font-medium text-gray-900 mb-2",
                                                                                        children: "\xd6zel Workshop"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 mb-3",
                                                                                        children: "İhtiyaca \xf6zel eğitim programı"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center space-x-4 text-sm text-gray-500",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "\uD83D\uDD50 Esnek"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "\uD83D\uDC65 Esnek"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                children: "\uD83D\uDCCD G\xf6r\xfcşme"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Eğitim Talep Formu"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                        children: "Eğitim T\xfcr\xfc"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                                        className: "w-full p-3 border border-gray-300 rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                                children: "Temel Kullanıcı Eğitimi"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                                children: "İleri Seviye Eğitim"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                                children: "\xd6zel Workshop"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                        children: "Katılımcı Sayısı"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                                        type: "number",
                                                                                        className: "w-full p-3 border border-gray-300 rounded-lg",
                                                                                        placeholder: "Ka\xe7 kişi katılacak?"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                        children: "Tercih Edilen Tarih"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                                        type: "date",
                                                                                        className: "w-full p-3 border border-gray-300 rounded-lg"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                        children: "Ek Notlar"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                                                        className: "w-full p-3 border border-gray-300 rounded-lg resize-none",
                                                                                        rows: 3,
                                                                                        placeholder: "\xd6zel istekleriniz..."
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                                className: "w-full bg-amber-600 text-white py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors",
                                                                                children: "Eğitim Talebi G\xf6nder"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "sikayet-oneriler",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-rose-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Şikayet ve \xd6neriler"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Geri bildirimleriniz değerli"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Geri Bildirim Formu"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                        children: "Konu T\xfcr\xfc"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                                        className: "w-full p-3 border border-gray-300 rounded-lg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                                children: "Şikayet"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                                children: "\xd6neri"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                                children: "Teşekk\xfcr"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                                                                children: "Kalite Geri Bildirimi"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                        children: "Konu Başlığı"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                                        type: "text",
                                                                                        className: "w-full p-3 border border-gray-300 rounded-lg",
                                                                                        placeholder: "Konuyu \xf6zetleyin..."
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                        children: "Detaylı A\xe7ıklama"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                                                        className: "w-full p-3 border border-gray-300 rounded-lg resize-none",
                                                                                        rows: 5,
                                                                                        placeholder: "Geri bildiriminizi detaylı olarak yazın..."
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                                                        children: "İletişim E-posta"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                                        type: "email",
                                                                                        className: "w-full p-3 border border-gray-300 rounded-lg",
                                                                                        placeholder: "email@example.com"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                                className: "w-full bg-rose-600 text-white py-3 px-4 rounded-lg hover:bg-rose-700 transition-colors",
                                                                                children: "Geri Bildirim G\xf6nder"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Kalite Politikamız"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 bg-green-50 rounded-lg border border-green-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center space-x-3 mb-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                className: "w-5 h-5 text-green-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-green-900",
                                                                                                children: "M\xfcşteri Memnuniyeti"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-green-700",
                                                                                        children: "M\xfcşteri memnuniyeti \xf6nceliğimiz. Geri bildirimler 24 saat i\xe7inde değerlendirilir."
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 bg-blue-50 rounded-lg border border-blue-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center space-x-3 mb-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                className: "w-5 h-5 text-blue-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-blue-900",
                                                                                                children: "S\xfcrekli İyileştirme"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-blue-700",
                                                                                        children: "\xd6nerilerinizle hizmet kalitemizi s\xfcrekli geliştiriyoruz."
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 bg-purple-50 rounded-lg border border-purple-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center space-x-3 mb-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                className: "w-5 h-5 text-purple-600"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-purple-900",
                                                                                                children: "Gizlilik"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-purple-700",
                                                                                        children: "Geri bildirimler gizli tutulur ve iyileştirme ama\xe7lı kullanılır."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "mt-6 p-4 bg-gray-50 rounded-lg",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                            className: "text-sm text-gray-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                                                    children: "İletişim:"
                                                                                }),
                                                                                " Acil durumlar i\xe7in +90 (212) 123 45 67 numarasından bize ulaşabilirsiniz."
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "kurulum-hizmetleri",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CogIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-slate-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Kurulum Hizmetleri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Yerinde kurulum ve devreye alma"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Kurulum S\xfcreci"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm",
                                                                                        children: "1"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-gray-900",
                                                                                                children: "\xd6n Değerlendirme"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-600",
                                                                                                children: "Saha incelemesi ve analiz"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm",
                                                                                        children: "2"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-gray-900",
                                                                                                children: "Kurulum Planlaması"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-600",
                                                                                                children: "Kurulum planı ve zaman \xe7izelgesi"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm",
                                                                                        children: "3"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-gray-900",
                                                                                                children: "Fiziksel Kurulum"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-600",
                                                                                                children: "Cihaz yerleştirme ve bağlantı"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm",
                                                                                        children: "4"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-gray-900",
                                                                                                children: "Test ve Devreye Alma"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-600",
                                                                                                children: "Test ve performans doğrulama"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                        className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm",
                                                                                        children: "5"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-medium text-gray-900",
                                                                                                children: "Eğitim ve Teslim"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                                className: "text-sm text-gray-600",
                                                                                                children: "Kullanıcı eğitimi ve teslim"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Kurulum Hizmet Paketleri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 border border-gray-200 rounded-lg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                        className: "font-medium text-gray-900 mb-2",
                                                                                        children: "Temel Kurulum"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 mb-3",
                                                                                        children: "Standart kurulum ve temel eğitim"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "space-y-1 text-sm text-gray-500",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "Fiziksel kurulum"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "Temel kalibrasyon"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "2 saat eğitim"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 border border-gray-200 rounded-lg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                        className: "font-medium text-gray-900 mb-2",
                                                                                        children: "Gelişmiş Kurulum"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 mb-3",
                                                                                        children: "Kapsamlı kurulum ve detaylı eğitim"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "space-y-1 text-sm text-gray-500",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "Temel kurulum + optimizasyon"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "İleri seviye kalibrasyon"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "4 saat detaylı eğitim"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "30 g\xfcn telefon desteği"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "p-4 border border-gray-200 rounded-lg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                        className: "font-medium text-gray-900 mb-2",
                                                                                        children: "Premium Kurulum"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 mb-3",
                                                                                        children: "Anahtar teslim \xe7\xf6z\xfcm ve s\xfcrekli destek"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "space-y-1 text-sm text-gray-500",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "Tam optimizasyon paketi"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "\xd6zel metod geliştirme"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "8 saat kapsamlı eğitim"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "flex items-center space-x-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                                                        className: "w-4 h-4 text-green-500"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                        children: "1 yıl uzaktan destek"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "mt-6",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                            className: "w-full bg-slate-600 text-white py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors",
                                                                            children: "Kurulum Talebi Oluştur"
                                                                        })
                                                                    })
                                                                ]
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
                    ]
                })
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

/***/ 6263:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function MapPinIcon({
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
    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MapPinIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,2695,1776,5330,1422,2971,993,1744], function() { return __webpack_exec__(3354); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);