(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2560],{

/***/ 6010:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8176))

/***/ }),

/***/ 8176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EtkinlikDetayPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4033);
// EXTERNAL MODULE: ./src/components/layout/Header.tsx + 1 modules
var Header = __webpack_require__(5330);
// EXTERNAL MODULE: ./src/components/layout/Footer.tsx + 1 modules
var Footer = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js
var ArrowLeftIcon = __webpack_require__(3753);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowTopRightOnSquareIcon.js
var ArrowTopRightOnSquareIcon = __webpack_require__(3042);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BuildingOffice2Icon.js
var BuildingOffice2Icon = __webpack_require__(1039);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var CalendarIcon = __webpack_require__(1253);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(9186);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js
var EyeIcon = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/HeartIcon.js
var HeartIcon = __webpack_require__(927);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ShareIcon.js
var ShareIcon = __webpack_require__(1447);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js
var UserGroupIcon = __webpack_require__(9649);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowLeftIcon,ArrowTopRightOnSquareIcon,BuildingOffice2Icon,CalendarIcon,CheckCircleIcon,EyeIcon,HeartIcon,ShareIcon,UserGroupIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js










// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./src/app/kaynaklar/etkinlik/[id]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function EtkinlikDetayPage(param) {
    let { params } = param;
    const router = (0,navigation.useRouter)();
    const [event, setEvent] = (0,react.useState)(null);
    const [relatedEvents, setRelatedEvents] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    (0,react.useEffect)(()=>{
        const fetchEvent = async ()=>{
            try {
                // Tek etkinlik çek
                const eventResponse = await fetch("/api/events/".concat(params.id));
                const eventResult = await eventResponse.json();
                if (eventResult.success) {
                    setEvent(eventResult.data);
                    // Tüm etkinlikleri çek ve ilgili etkinlikleri filtrele
                    const allEventsResponse = await fetch("/api/events");
                    const allEventsResult = await allEventsResponse.json();
                    if (allEventsResult.success) {
                        const allEvents = allEventsResult.data;
                        const related = allEvents.filter((e)=>e.id !== params.id && e.eventType === eventResult.data.eventType).slice(0, 3);
                        setRelatedEvents(related);
                    }
                } else {
                    (0,navigation.notFound)();
                }
            } catch (error) {
                console.error("Etkinlik y\xfckleme hatası:", error);
                (0,navigation.notFound)();
            } finally{
                setLoading(false);
            }
        };
        fetchEvent();
    }, [
        params.id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Header["default"], {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-600",
                                children: "Etkinlik y\xfckleniyor..."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer["default"], {})
            ]
        });
    }
    if (!event) {
        (0,navigation.notFound)();
    }
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    const getEventTypeName = (eventType)=>{
        switch(eventType){
            case "fuar":
                return "Fuar";
            case "seminer":
                return "Seminer";
            case "webinar":
                return "Webinar";
            case "workshop":
                return "Workshop";
            case "konferans":
                return "Konferans";
            default:
                return eventType;
        }
    };
    const getEventTypeColor = (eventType)=>{
        switch(eventType){
            case "fuar":
                return "purple";
            case "seminer":
                return "blue";
            case "webinar":
                return "indigo";
            case "workshop":
                return "teal";
            case "konferans":
                return "green";
            default:
                return "gray";
        }
    };
    const isUpcoming = new Date(event.startDate) > new Date();
    const isPast = new Date(event.endDate || event.startDate) < new Date();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "h-96 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: event.imageUrl,
                                        alt: event.title,
                                        className: "w-full h-full object-cover"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute top-8 left-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    onClick: ()=>router.back(),
                                    className: "flex items-center space-x-2 bg-white/90 hover:bg-white px-4 py-2 rounded-xl font-medium text-gray-900 transition-colors backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowLeftIcon/* default */.Z, {
                                            className: "w-4 h-4"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Geri D\xf6n"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "absolute top-8 right-8",
                                children: [
                                    isUpcoming && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "bg-green-600 text-white px-4 py-2 rounded-xl font-medium",
                                        children: "Yaklaşan Etkinlik"
                                    }),
                                    isPast && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "bg-gray-600 text-white px-4 py-2 rounded-xl font-medium",
                                        children: "Ge\xe7miş Etkinlik"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute bottom-0 left-0 right-0 p-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "container-custom",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "max-w-4xl",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center space-x-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "inline-block bg-".concat(getEventTypeColor(event.eventType), "-600 text-white px-3 py-1 rounded-lg text-sm font-medium uppercase"),
                                                        children: getEventTypeName(event.eventType)
                                                    }),
                                                    event.featured && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "bg-yellow-500 text-yellow-900 px-3 py-1 rounded-lg text-sm font-medium",
                                                        children: "\xd6ne \xc7ıkan"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                className: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",
                                                children: event.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-xl text-gray-200 mb-6",
                                                children: event.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, {
                                                                className: "w-5 h-5"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        formatDate(event.startDate),
                                                                        event.endDate && " - ".concat(formatDate(event.endDate))
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(BuildingOffice2Icon/* default */.Z, {
                                                                className: "w-5 h-5"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: event.location
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeIcon/* default */.Z, {
                                                                className: "w-5 h-5"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: "1.2K ilgi g\xf6sterme"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "container-custom py-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "lg:col-span-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "prose prose-lg max-w-none",
                                                        children: event.content.split("\n").map((paragraph, index)=>{
                                                            if (paragraph.startsWith("## ")) {
                                                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                                    className: "text-2xl font-bold text-gray-900 mt-8 mb-4",
                                                                    children: paragraph.replace("## ", "")
                                                                }, index);
                                                            } else if (paragraph.startsWith("### ")) {
                                                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "text-xl font-semibold text-gray-900 mt-6 mb-3",
                                                                    children: paragraph.replace("### ", "")
                                                                }, index);
                                                            } else if (paragraph.startsWith("#### ")) {
                                                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                    className: "text-lg font-medium text-gray-900 mt-4 mb-2",
                                                                    children: paragraph.replace("#### ", "")
                                                                }, index);
                                                            } else if (paragraph.startsWith("- ")) {
                                                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                                                    className: "list-disc list-inside my-4",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                                        className: "text-gray-700",
                                                                        children: paragraph.replace("- ", "")
                                                                    })
                                                                }, index);
                                                            } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                                                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "font-semibold text-gray-900 my-4",
                                                                    children: paragraph.replace(/^\*\*|\*\*$/g, "")
                                                                }, index);
                                                            } else if (paragraph.trim()) {
                                                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-gray-700 leading-relaxed my-4",
                                                                    children: paragraph
                                                                }, index);
                                                            }
                                                            return null;
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "mt-8 pt-6 border-t border-gray-200 flex items-center justify-between",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center space-x-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                    className: "flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(HeartIcon/* default */.Z, {
                                                                            className: "w-5 h-5"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            children: "İlgi G\xf6ster"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                    className: "flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ShareIcon/* default */.Z, {
                                                                            className: "w-5 h-5"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            children: "Paylaş"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "text-xl font-bold text-gray-900 mb-4",
                                                            children: "Etkinlik Bilgileri"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, {
                                                                            className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: "Tarih"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                                    className: "text-gray-600",
                                                                                    children: [
                                                                                        formatDate(event.startDate),
                                                                                        event.endDate && " - ".concat(formatDate(event.endDate))
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(BuildingOffice2Icon/* default */.Z, {
                                                                            className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: "Konum"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                    className: "text-gray-600",
                                                                                    children: event.location
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-start space-x-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(UserGroupIcon/* default */.Z, {
                                                                            className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: "Etkinlik T\xfcr\xfc"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                    className: "text-gray-600",
                                                                                    children: getEventTypeName(event.eventType)
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        isUpcoming && event.registrationUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "mt-6",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: event.registrationUrl,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "w-full flex items-center justify-center space-x-2 bg-".concat(getEventTypeColor(event.eventType), "-600 hover:bg-").concat(getEventTypeColor(event.eventType), "-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"),
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "Kayıt Ol"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowTopRightOnSquareIcon/* default */.Z, {
                                                                        className: "w-4 h-4"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        isPast && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "mt-6",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                disabled: true,
                                                                className: "w-full flex items-center justify-center space-x-2 bg-gray-300 text-gray-500 px-6 py-3 rounded-xl font-medium cursor-not-allowed",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                                        className: "w-4 h-4"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        children: "Etkinlik Tamamlandı"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                            className: "font-semibold mb-4",
                                                            children: "Sorularınız mı var?"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-blue-100 text-sm mb-4",
                                                            children: "Etkinlik hakkında daha fazla bilgi almak i\xe7in bizimle iletişime ge\xe7in."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                            href: "/iletisim",
                                                            className: "block text-center bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg text-sm font-medium",
                                                            children: "İletişime Ge\xe7"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                relatedEvents.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            className: "text-2xl font-bold text-gray-900 mb-6",
                                            children: "Benzer Etkinlikler"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                            children: relatedEvents.map((relatedEvent)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                                                    className: "group cursor-pointer",
                                                    onClick: ()=>router.push("/kaynaklar/etkinlik/".concat(relatedEvent.id)),
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                            src: relatedEvent.imageUrl,
                                                            alt: relatedEvent.title,
                                                            className: "w-full h-48 object-cover rounded-lg mb-4 group-hover:shadow-lg transition-shadow"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "mb-2",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "inline-block bg-".concat(getEventTypeColor(relatedEvent.eventType), "-100 text-").concat(getEventTypeColor(relatedEvent.eventType), "-800 px-2 py-1 rounded text-xs font-medium uppercase"),
                                                                children: getEventTypeName(relatedEvent.eventType)
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                            className: "font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2",
                                                            children: relatedEvent.title
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            className: "text-gray-600 text-sm mb-3",
                                                            children: [
                                                                relatedEvent.description.slice(0, 100),
                                                                "..."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "text-xs text-gray-500 space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    children: formatDate(relatedEvent.startDate)
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    children: relatedEvent.location
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, relatedEvent.id))
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer["default"], {})
        ]
    });
}


/***/ }),

/***/ 3753:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ArrowLeftIcon({
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
    d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowLeftIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 3042:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ArrowTopRightOnSquareIcon({
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
    d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowTopRightOnSquareIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

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

/***/ 9367:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function EyeIcon({
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
    d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EyeIcon);
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

/***/ 1447:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ShareIcon({
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
    d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ShareIcon);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [1176,3466,9751,4166,5330,1422,2971,993,1744], function() { return __webpack_exec__(6010); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);