"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1422],{

/***/ 1422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Footer; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(6691);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js
var ArrowRightIcon = __webpack_require__(1122);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(9186);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowRightIcon,CheckCircleIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js



;// CONCATENATED MODULE: ./src/components/layout/Footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const footerSections = {
    company: {
        title: "Kurumsal",
        links: [
            {
                name: "Hakkımızda",
                href: "/hakkimizda"
            },
            {
                name: "Sekt\xf6rler",
                href: "/sektorler"
            },
            {
                name: "\xc7\xf6z\xfcmler",
                href: "/cozumler"
            },
            {
                name: "Kaynaklar",
                href: "/kaynaklar"
            }
        ]
    },
    products: {
        title: "\xdcr\xfcnler",
        links: [
            {
                name: "Laboratuvar Ekipmanları",
                href: "/urunler/laboratuvar-ekipmanlari"
            },
            {
                name: "Kimyasal Analiz",
                href: "/urunler/laboratuvar-ekipmanlari/kimyasal-analiz"
            },
            {
                name: "Fiziksel Analiz",
                href: "/urunler/laboratuvar-ekipmanlari/fiziksel-analiz"
            },
            {
                name: "Mikrobiyoloji",
                href: "/urunler/laboratuvar-ekipmanlari/mikrobiyoloji"
            }
        ]
    },
    support: {
        title: "Destek",
        links: [
            {
                name: "Teklif Al",
                href: "/teklif-al"
            },
            {
                name: "İletişim",
                href: "/iletisim"
            },
            {
                name: "Teknik Destek",
                href: "/iletisim#teknik-servis"
            },
            {
                name: "Canlı Destek",
                href: "/iletisim#canli-destek"
            }
        ]
    }
};
const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/protek-analytical-industrial-systems/posts/?feedView=all",
        description: "Bize yazın",
        color: "bg-blue-600 hover:bg-blue-700",
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            })
        })
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/protek.analitik/",
        description: "Bizi takip edin",
        color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            })
        })
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/channel/UCEBjbLKziuAJliIjjCaOERg",
        description: "Bizi izleyin",
        color: "bg-red-600 hover:bg-red-700",
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            })
        })
    }
];
function Footer() {
    const [email, setEmail] = (0,react.useState)("");
    const [isSubmitted, setIsSubmitted] = (0,react.useState)(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsSubmitted(true);
        setEmail("");
        setTimeout(()=>setIsSubmitted(false), 3000);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "bg-slate-900 text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute top-0 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container-custom relative z-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "py-12 border-b border-slate-800",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-3xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    className: "text-2xl font-bold mb-3",
                                    children: "Laboratuvar Teknolojilerinde G\xfcncel Kalın"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-slate-400 mb-6",
                                    children: "Yeni \xfcr\xfcnler, teknik g\xfcncellemeler ve \xf6zel kampanyalardan ilk siz haberdar olun."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                                    onSubmit: handleSubmit,
                                    className: "max-w-sm mx-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "email",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                placeholder: "E-posta adresiniz",
                                                required: true,
                                                className: "flex-1 px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                type: "submit",
                                                disabled: isSubmitted,
                                                className: "px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-green-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap text-sm",
                                                children: isSubmitted ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        "Kaydedildi"
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        "Abone Ol",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon/* default */.Z, {
                                                            className: "w-3.5 h-3.5"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "py-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid lg:grid-cols-6 gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "lg:col-span-2 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                                    src: "/images/logo-protek-white.png",
                                                    alt: "Protek Analitik Logo",
                                                    className: "h-10 w-auto mb-3",
                                                    width: 120,
                                                    height: 40
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-slate-400 text-sm leading-relaxed",
                                                    children: "Laboratuvar teknolojilerinde 20+ yıllık deneyimimizle, g\xfcvenilir analiz cihazları, otomasyon sistemleri ve anahtar teslim \xe7\xf6z\xfcmler sunuyoruz."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "space-y-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-lg font-semibold mb-3 text-white",
                                                        children: "İletişim"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                        className: "w-4 h-4 mt-0.5 text-blue-400",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                            d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                className: "text-slate-300",
                                                                                children: "Merkez Ofis:"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                className: "text-slate-400 text-xs",
                                                                                children: "Atakent Mah. Dicle Cad. No:29"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                className: "text-slate-400 text-xs",
                                                                                children: "34760 \xdcmraniye / İstanbul / T\xdcRKİYE"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                        className: "w-4 h-4 text-blue-400",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                            d: "M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "text-slate-300 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                children: "T: +90 (216) 329 39 60 Pbx"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                children: "T: +90 (216) 329 37 70 Pbx"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                children: "F: +90 (216) 329 41 47"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "mt-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-slate-300 text-sm",
                                                                        children: "Ortadoğu Ofis:"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-slate-400 text-xs",
                                                                        children: "Ras Al Khaimah, United Arab Emirates"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-slate-300 text-xs",
                                                                        children: "T: +971 7 203 1257 | +971 50 653 62 75"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                Object.entries(footerSections).map((param)=>{
                                    let [key, section] = param;
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                className: "font-medium text-white",
                                                children: section.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                                className: "space-y-2",
                                                children: section.links.map((link, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                            href: link.href,
                                                            className: "text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    children: link.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon/* default */.Z, {
                                                                    className: "w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-0.5 transition-all"
                                                                })
                                                            ]
                                                        })
                                                    }, index))
                                            })
                                        ]
                                    }, key);
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                            className: "font-medium text-white",
                                            children: "Sosyal Medya"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "space-y-3",
                                            children: socialLinks.map((social)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: social.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "block p-3 rounded-lg ".concat(social.color, " text-white hover:scale-105 transition-all duration-300 group"),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "flex-shrink-0",
                                                                children: social.icon
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "font-medium text-sm",
                                                                        children: social.name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-xs opacity-90 truncate",
                                                                        children: social.description
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon/* default */.Z, {
                                                                className: "w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                                                            })
                                                        ]
                                                    })
                                                }, social.name))
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-6 space-y-2.5",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                    href: "/teklif-al",
                                                    className: "block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 px-3 rounded-lg font-medium transition-colors text-sm",
                                                    children: "Hızlı Teklif Al"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                    href: "/iletisim#canli-destek",
                                                    className: "block w-full border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-center py-2.5 px-3 rounded-lg font-medium transition-colors text-sm",
                                                    children: "Canlı Destek"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "border-t border-slate-800 py-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col md:flex-row justify-between items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-slate-400 text-xs",
                                            children: "\xa9 2025 Protek Analitik. T\xfcm hakları saklıdır."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/login",
                                            className: "text-slate-500 hover:text-slate-300 text-xs transition-colors opacity-50 hover:opacity-100",
                                            title: "CMS Panel Erişimi",
                                            children: "\uD83D\uDD27 Admin"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-wrap gap-4 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/gizlilik-politikasi",
                                            className: "text-slate-400 hover:text-white transition-colors",
                                            children: "Gizlilik Politikası"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/kvkk",
                                            className: "text-slate-400 hover:text-white transition-colors",
                                            children: "KVKK"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/kullanim-kosullari",
                                            className: "text-slate-400 hover:text-white transition-colors",
                                            children: "Kullanım Koşulları"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/cerez-politikasi",
                                            className: "text-slate-400 hover:text-white transition-colors",
                                            children: "\xc7erez Politikası"
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