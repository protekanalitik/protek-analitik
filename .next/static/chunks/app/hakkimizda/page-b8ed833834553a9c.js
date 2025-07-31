(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6933],{

/***/ 1611:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9816))

/***/ }),

/***/ 9816:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HakkimizdaPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4033);
// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(5330);
// EXTERNAL MODULE: ./src/components/layout/Footer.tsx + 1 modules
var Footer = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js
var AcademicCapIcon = __webpack_require__(7933);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BookOpenIcon.js
var BookOpenIcon = __webpack_require__(5375);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BuildingOffice2Icon.js
var BuildingOffice2Icon = __webpack_require__(1039);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var CalendarIcon = __webpack_require__(1253);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(9186);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(3217);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ClipboardDocumentCheckIcon.js
var ClipboardDocumentCheckIcon = __webpack_require__(7548);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CogIcon.js
var CogIcon = __webpack_require__(9010);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js
var DocumentTextIcon = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js
var EnvelopeIcon = __webpack_require__(4424);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/FlagIcon.js
var FlagIcon = __webpack_require__(322);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/GlobeAltIcon.js
var GlobeAltIcon = __webpack_require__(787);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/HeartIcon.js
var HeartIcon = __webpack_require__(927);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/LightBulbIcon.js
var LightBulbIcon = __webpack_require__(1554);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js
var MapPinIcon = __webpack_require__(6263);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js
var PhoneIcon = __webpack_require__(5587);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js
var RocketLaunchIcon = __webpack_require__(2061);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js
var ShieldCheckIcon = __webpack_require__(2938);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Squares2X2Icon.js
var Squares2X2Icon = __webpack_require__(6180);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TrophyIcon.js
var TrophyIcon = __webpack_require__(651);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/UserIcon.js

function UserIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react.forwardRef(UserIcon);
/* harmony default export */ var esm_UserIcon = (ForwardRef);
;// CONCATENATED MODULE: __barrel_optimize__?names=AcademicCapIcon,BookOpenIcon,BuildingOffice2Icon,CalendarIcon,CheckCircleIcon,ChevronRightIcon,ClipboardDocumentCheckIcon,CogIcon,DocumentTextIcon,EnvelopeIcon,FlagIcon,GlobeAltIcon,HeartIcon,LightBulbIcon,MapPinIcon,PhoneIcon,RocketLaunchIcon,ShieldCheckIcon,Squares2X2Icon,TrophyIcon,UserIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js






















;// CONCATENATED MODULE: ./src/app/hakkimizda/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const sections = {
    "Şirket Bilgileri": [
        {
            id: "sirketimiz",
            name: "Şirketimiz",
            icon: BuildingOffice2Icon/* default */.Z
        },
        {
            id: "tarihcemiz",
            name: "Tarih\xe7emiz",
            icon: DocumentTextIcon/* default */.Z
        },
        {
            id: "organizasyon",
            name: "Organizasyon Şeması",
            icon: Squares2X2Icon/* default */.Z
        }
    ],
    "Kalite ve Sertifikalar": [
        {
            id: "iso-sertifikalari",
            name: "ISO Sertifikaları",
            icon: ShieldCheckIcon/* default */.Z
        },
        {
            id: "kalite-politikasi",
            name: "Kalite Politikamız",
            icon: TrophyIcon/* default */.Z
        },
        {
            id: "akreditasyon",
            name: "Akreditasyon",
            icon: AcademicCapIcon/* default */.Z
        },
        {
            id: "uygunluk",
            name: "Uygunluk Beyanları",
            icon: ClipboardDocumentCheckIcon/* default */.Z
        }
    ],
    "Sosyal Sorumluluk": [
        {
            id: "cevre-politikasi",
            name: "\xc7evre Politikası",
            icon: GlobeAltIcon/* default */.Z
        },
        {
            id: "sosyal-projeler",
            name: "Sosyal Projeler",
            icon: FlagIcon/* default */.Z
        },
        {
            id: "egitim-destegi",
            name: "Eğitim Desteği",
            icon: AcademicCapIcon/* default */.Z
        }
    ]
};
function HakkimizdaPage() {
    const [activeSection, setActiveSection] = (0,react.useState)("sirketimiz");
    const router = (0,navigation.useRouter)();
    // Hash navigation handling
    (0,react.useEffect)(()=>{
        const handleHashChange = ()=>{
            const hash = window.location.hash.slice(1);
            if (hash) {
                setActiveSection(hash);
                setTimeout(()=>{
                    const element = document.getElementById(hash);
                    if (element) {
                        const headerOffset = 120;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }, 100);
            }
        };
        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return ()=>window.removeEventListener("hashchange", handleHashChange);
    }, []);
    // Active section detection on scroll
    (0,react.useEffect)(()=>{
        const handleScroll = ()=>{
            const allSections = Object.values(sections).flat();
            for (const section of allSections){
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToSection = (sectionId)=>{
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    const groupedSections = sections;
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
                                    children: "Hakkımızda"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                                    children: "25+ yıllık deneyimimiz ve uzman kadromuzla laboratuvar teknolojilerinde g\xfcvenilir \xe7\xf6z\xfcm ortağınız."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col lg:flex-row gap-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "lg:w-80 flex-shrink-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "lg:sticky lg:top-28",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100",
                                            children: [
                                                Object.entries(groupedSections).map((param)=>{
                                                    let [category, items] = param;
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "mb-6 last:mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                className: "text-sm font-medium text-gray-500 uppercase tracking-wider mb-3",
                                                                children: category
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "space-y-1",
                                                                children: items.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                        onClick: ()=>scrollToSection(item.id),
                                                                        className: "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ".concat(activeSection === item.id ? "bg-blue-50 text-blue-700 border border-blue-200" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(item.icon, {
                                                                                className: "w-5 h-5 ".concat(activeSection === item.id ? "text-blue-600" : "text-gray-400")
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "font-medium",
                                                                                children: item.name
                                                                            }),
                                                                            activeSection === item.id && /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                                                className: "w-4 h-4 text-blue-600 ml-auto"
                                                                            })
                                                                        ]
                                                                    }, item.id))
                                                            })
                                                        ]
                                                    }, category);
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mt-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white",
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
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex-1 space-y-16",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "sirketimiz",
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
                                                                        children: "Şirketimiz"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Misyon, vizyon ve değerlerimiz"
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
                                                                        children: "Misyonumuz"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-700 mb-6",
                                                                        children: "Laboratuvar teknolojilerinde g\xfcvenilir, yenilik\xe7i ve kullanıcı odaklı \xe7\xf6z\xfcmler sunarak, m\xfcşterilerimizin analiz kalitesini artırmak ve iş s\xfcre\xe7lerini optimize etmek."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Vizyonumuz"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-700",
                                                                        children: "T\xfcrkiye’de laboratuvar teknolojileri alanında lider konumumuzu koruyarak, b\xf6lgesel bir g\xfc\xe7 olmak ve uluslararası pazarlarda tanınır bir marka haline gelmek."
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Değerlerimiz"
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
                                                                                        children: "G\xfcvenilirlik ve kalite"
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
                                                                                        children: "S\xfcrekli yenilik"
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
                                                                                        children: "M\xfcşteri odaklılık"
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
                                                                                        children: "Etik ve şeffaflık"
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
                                                                                        children: "\xc7evresel sorumluluk"
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
                                            id: "tarihcemiz",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-emerald-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Tarih\xe7emiz"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Kuruluştan bug\xfcne yolculuğumuz"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "space-y-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-start space-x-6 relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BuildingOffice2Icon/* default */.Z, {
                                                                                    className: "w-6 h-6"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex-1 pb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center gap-3 mb-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                className: "bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full",
                                                                                                children: "1998"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-semibold text-gray-900 text-sm",
                                                                                                children: "Kuruluş"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 leading-relaxed",
                                                                                        children: "İstanbul’da laboratuvar ekipmanları distrib\xfct\xf6rl\xfcğ\xfc olarak faaliyete başladık."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-start space-x-6 relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                className: "w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MapPinIcon/* default */.Z, {
                                                                                    className: "w-6 h-6"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex-1 pb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center gap-3 mb-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                className: "bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full",
                                                                                                children: "2005"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-semibold text-gray-900 text-sm",
                                                                                                children: "B\xf6lgesel Gelişim"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 leading-relaxed",
                                                                                        children: "Ankara ve İzmir’de şubeler a\xe7arak T\xfcrkiye geneline hizmet ağımızı genişlettik."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-start space-x-6 relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                className: "w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LightBulbIcon/* default */.Z, {
                                                                                    className: "w-6 h-6"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex-1 pb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center gap-3 mb-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                className: "bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full",
                                                                                                children: "2010"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-semibold text-gray-900 text-sm",
                                                                                                children: "AR-GE Yatırımı"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 leading-relaxed",
                                                                                        children: "Kendi AR-GE merkezimizi kurarak, \xf6zelleştirilmiş analiz \xe7\xf6z\xfcmleri geliştirmeye başladık."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-start space-x-6 relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                className: "w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobeAltIcon/* default */.Z, {
                                                                                    className: "w-6 h-6"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex-1 pb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center gap-3 mb-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                className: "bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full",
                                                                                                children: "2018"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-semibold text-gray-900 text-sm",
                                                                                                children: "Uluslararası Ağ"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 leading-relaxed",
                                                                                        children: "Yurt dışı distrib\xfct\xf6rl\xfckler ve b\xf6lge ofisleriyle global m\xfcşteri portf\xf6y\xfcm\xfcz\xfc b\xfcy\xfctt\xfck."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-start space-x-6 relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                                className: "w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrophyIcon/* default */.Z, {
                                                                                    className: "w-6 h-6"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex-1 pb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "flex items-center gap-3 mb-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                                className: "bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full",
                                                                                                children: "2024"
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                                className: "font-semibold text-gray-900 text-sm",
                                                                                                children: "Lider Konum"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                        className: "text-sm text-gray-600 leading-relaxed",
                                                                                        children: "T\xfcrkiye’nin \xf6nde gelen laboratuvar teknolojileri şirketlerinden biri olarak sekt\xf6rde liderliğe ulaştık."
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
                                            id: "organizasyon",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Squares2X2Icon/* default */.Z, {
                                                                    className: "w-6 h-6 text-indigo-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Organizasyon Şeması"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Şirket yapısı ve departmanlar"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "inline-block p-4 bg-blue-100 rounded-lg border border-blue-200",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                        className: "font-semibold text-blue-900",
                                                                        children: "Genel M\xfcd\xfcrl\xfck"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "p-4 bg-green-50 rounded-lg border border-green-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                    className: "font-medium text-green-900",
                                                                                    children: "Teknik Departman"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                    className: "text-sm text-green-700 mt-1",
                                                                                    children: "Ar-Ge & Teknik Destek"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "p-4 bg-orange-50 rounded-lg border border-orange-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                    className: "font-medium text-orange-900",
                                                                                    children: "Satış Departmanı"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                    className: "text-sm text-orange-700 mt-1",
                                                                                    children: "İ\xe7 & Dış Satış"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "p-4 bg-purple-50 rounded-lg border border-purple-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                    className: "font-medium text-purple-900",
                                                                                    children: "Operasyon"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                    className: "text-sm text-purple-700 mt-1",
                                                                                    children: "Lojistik & Kurulum"
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
                                            id: "iso-sertifikalari",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShieldCheckIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-emerald-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "ISO Sertifikaları"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Kalite standartlarımız"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "p-6 bg-green-50 rounded-xl border border-green-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center space-x-3 mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TrophyIcon/* default */.Z, {
                                                                                className: "w-8 h-8 text-green-600"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                                className: "font-semibold text-green-900",
                                                                                children: "ISO 9001:2015"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-green-700 text-sm",
                                                                        children: "Kalite Y\xf6netim Sistemi"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-green-600 text-xs mt-2",
                                                                        children: "Ge\xe7erlilik: 2024-2027"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "p-6 bg-blue-50 rounded-xl border border-blue-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center space-x-3 mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TrophyIcon/* default */.Z, {
                                                                                className: "w-8 h-8 text-blue-600"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                                className: "font-semibold text-blue-900",
                                                                                children: "ISO 14001:2015"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-blue-700 text-sm",
                                                                        children: "\xc7evre Y\xf6netim Sistemi"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-blue-600 text-xs mt-2",
                                                                        children: "Ge\xe7erlilik: 2024-2027"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "kalite-politikasi",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrophyIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-yellow-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Kalite Politikamız"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Kalite y\xf6netim sistemimiz"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                className: "text-gray-700 leading-relaxed",
                                                                children: "Protek Analitik olarak, m\xfcşteri memnuniyetini esas alarak, uluslararası kalite standartlarına uygun \xfcr\xfcn ve hizmetler sunmayı taahh\xfct ediyoruz."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "p-4 bg-gray-50 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                className: "font-medium text-gray-900 mb-2",
                                                                                children: "M\xfcşteri Odaklılık"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                className: "text-sm text-gray-600",
                                                                                children: "M\xfcşteri ihtiya\xe7larını anlama ve beklentileri aşma"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "p-4 bg-gray-50 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                className: "font-medium text-gray-900 mb-2",
                                                                                children: "S\xfcrekli İyileştirme"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                className: "text-sm text-gray-600",
                                                                                children: "S\xfcre\xe7lerimizi s\xfcrekli g\xf6zden ge\xe7irme ve geliştirme"
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
                                            id: "akreditasyon",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AcademicCapIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-cyan-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Akreditasyon"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Laboratuvar akreditasyon belgeleri"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "space-y-4",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "p-4 bg-cyan-50 rounded-lg border border-cyan-200",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                    className: "font-medium text-cyan-900 mb-2",
                                                                    children: "T\xdcRKAK Akreditasyonu"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-cyan-700 text-sm",
                                                                    children: "Kalibrasyon ve test laboratuvarı akreditasyonu"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "inline-block mt-2 px-3 py-1 bg-cyan-200 text-cyan-800 text-xs rounded-full",
                                                                    children: "Aktif"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "uygunluk",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClipboardDocumentCheckIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-rose-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Uygunluk Beyanları"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "\xdcr\xfcn uygunluk beyanları ve CE belgeleri"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "p-4 bg-rose-50 rounded-lg border border-rose-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                        className: "font-medium text-rose-900 mb-2",
                                                                        children: "CE Belgeleri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-rose-700 text-sm",
                                                                        children: "Avrupa Birliği uygunluk beyanları"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "p-4 bg-orange-50 rounded-lg border border-orange-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                        className: "font-medium text-orange-900 mb-2",
                                                                        children: "TSE Belgeleri"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-orange-700 text-sm",
                                                                        children: "T\xfcrk Standartları Enstit\xfcs\xfc belgeleri"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "cevre-politikasi",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobeAltIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-green-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "\xc7evre Politikası"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "\xc7evresel sorumluluklarımız"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                className: "text-gray-700",
                                                                children: "\xc7evresel s\xfcrd\xfcr\xfclebilirlik konusunda sorumluluklarımızın bilincindeyiz. T\xfcm faaliyetlerimizde \xe7evre dostu yaklaşımları benimser ve uygularız."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "text-center p-4 bg-green-50 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(HeartIcon/* default */.Z, {
                                                                                className: "w-8 h-8 text-green-600 mx-auto mb-2"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                className: "font-medium text-green-900",
                                                                                children: "Geri D\xf6n\xfcş\xfcm"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "text-center p-4 bg-green-50 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(LightBulbIcon/* default */.Z, {
                                                                                className: "w-8 h-8 text-green-600 mx-auto mb-2"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                className: "font-medium text-green-900",
                                                                                children: "Enerji Verimliliği"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "text-center p-4 bg-green-50 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CogIcon/* default */.Z, {
                                                                                className: "w-8 h-8 text-green-600 mx-auto mb-2"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                                className: "font-medium text-green-900",
                                                                                children: "S\xfcrd\xfcr\xfclebilirlik"
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
                                            id: "sosyal-projeler",
                                            className: "scroll-mt-28",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FlagIcon/* default */.Z, {
                                                                    className: "w-6 h-6 text-red-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                        className: "text-2xl font-bold text-gray-900",
                                                                        children: "Sosyal Projeler"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "Toplumsal katkı projelerimiz"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "p-6 bg-red-50 rounded-xl border border-red-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-red-900 mb-3",
                                                                        children: "Laboratuvar Donanım Desteği"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-red-700 text-sm",
                                                                        children: "\xdcniversite laboratuvarlarına ekipman desteği sağlayarak eğitim kalitesinin artırılmasına katkıda bulunuyoruz."
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "p-6 bg-blue-50 rounded-xl border border-blue-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-blue-900 mb-3",
                                                                        children: "Burslu \xd6ğrenci Programı"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-blue-700 text-sm",
                                                                        children: "Başarılı \xf6ğrencilere burs desteği sağlayarak geleceğin bilim insanlarının yetişmesine destek oluyoruz."
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                                            id: "egitim-destegi",
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
                                                                        children: "Eğitim Desteği"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-gray-600",
                                                                        children: "\xdcniversite ve araştırma kurumlarına desteğimiz"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "font-semibold text-gray-900 mb-4",
                                                                        children: "Eğitim Programları"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(BookOpenIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-amber-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "text-sm",
                                                                                        children: "Teknik eğitim seminerleri"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RocketLaunchIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-amber-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "text-sm",
                                                                                        children: "Staj programları"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AcademicCapIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-amber-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "text-sm",
                                                                                        children: "\xdcniversite iş birlikleri"
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
                                                                        children: "Araştırma Desteği"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LightBulbIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-blue-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "text-sm",
                                                                                        children: "Ar-Ge projeleri"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CogIcon/* default */.Z, {
                                                                                        className: "w-5 h-5 text-blue-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "text-sm",
                                                                                        children: "Ekipman desteği"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_UserIcon, {
                                                                                        className: "w-5 h-5 text-blue-500"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "text-sm",
                                                                                        children: "Uzman danışmanlık"
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

/***/ 1253:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function CalendarIcon({
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
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CalendarIcon);
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

/***/ 927:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function HeartIcon({
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
    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HeartIcon);
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
/******/ __webpack_require__.O(0, [1176,9751,4166,3466,5330,1422,2971,993,1744], function() { return __webpack_exec__(1611); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);