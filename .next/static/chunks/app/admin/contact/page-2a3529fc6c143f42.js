(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9109],{

/***/ 8690:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8201))

/***/ }),

/***/ 8201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ContactManagementPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BuildingOffice2Icon.js
var BuildingOffice2Icon = __webpack_require__(1039);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(9186);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js
var ClockIcon = __webpack_require__(2929);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js
var EnvelopeIcon = __webpack_require__(4424);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PencilIcon.js
var PencilIcon = __webpack_require__(2125);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js
var PhoneIcon = __webpack_require__(5587);
;// CONCATENATED MODULE: __barrel_optimize__?names=BuildingOffice2Icon,CheckCircleIcon,ClockIcon,EnvelopeIcon,PencilIcon,PhoneIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js







;// CONCATENATED MODULE: ./src/app/admin/contact/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ContactManagementPage() {
    const [contactInfos, setContactInfos] = (0,react.useState)([
        {
            id: "main-office",
            title: "Merkez Ofis",
            type: "address",
            content: "Atakent Mah. Dicle Cad. No:29\n34760 \xdcmraniye / İstanbul / T\xdcRKİYE",
            icon: BuildingOffice2Icon/* default */.Z
        },
        {
            id: "middle-east-office",
            title: "Ortadoğu Ofis",
            type: "address",
            content: "Ras Al Khaimah, United Arab Emirates\nT: +971 7 203 1257\nT: +971 50 653 62 75",
            icon: BuildingOffice2Icon/* default */.Z
        },
        {
            id: "main-phone",
            title: "Ana Hat",
            type: "phone",
            content: "+90 (216) 329 39 60",
            icon: PhoneIcon/* default */.Z
        },
        {
            id: "pbx-phone",
            title: "Pbx",
            type: "phone",
            content: "+90 (216) 329 37 70",
            icon: PhoneIcon/* default */.Z
        },
        {
            id: "fax",
            title: "Fax",
            type: "phone",
            content: "+90 (216) 329 41 47",
            icon: PhoneIcon/* default */.Z
        },
        {
            id: "general-email",
            title: "Genel Bilgi",
            type: "email",
            content: "info@protekanalitik.com",
            icon: EnvelopeIcon/* default */.Z
        },
        {
            id: "technical-email",
            title: "Teknik Destek",
            type: "email",
            content: "info@protekanalitik.com",
            icon: EnvelopeIcon/* default */.Z
        },
        {
            id: "working-hours",
            title: "\xc7alışma Saatleri",
            type: "hours",
            content: "Pazartesi - Cuma: 08:30 - 18:30\nCumartesi: 09:00 - 13:00\nPazar: Kapalı",
            icon: ClockIcon/* default */.Z
        }
    ]);
    const [editingId, setEditingId] = (0,react.useState)(null);
    const [editContent, setEditContent] = (0,react.useState)("");
    const handleEdit = (id, content)=>{
        setEditingId(id);
        setEditContent(content);
    };
    const handleSave = (id)=>{
        setContactInfos((prev)=>prev.map((info)=>info.id === id ? {
                    ...info,
                    content: editContent
                } : info));
        setEditingId(null);
        setEditContent("");
        alert("İletişim bilgisi başarıyla g\xfcncellendi!");
    };
    const handleCancel = ()=>{
        setEditingId(null);
        setEditContent("");
    };
    const getTypeColor = (type)=>{
        switch(type){
            case "address":
                return "bg-blue-100 text-blue-800";
            case "phone":
                return "bg-green-100 text-green-800";
            case "email":
                return "bg-purple-100 text-purple-800";
            case "hours":
                return "bg-orange-100 text-orange-800";
            case "social":
                return "bg-pink-100 text-pink-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    const getTypeLabel = (type)=>{
        switch(type){
            case "address":
                return "Adres";
            case "phone":
                return "Telefon";
            case "email":
                return "E-posta";
            case "hours":
                return "\xc7alışma Saatleri";
            case "social":
                return "Sosyal Medya";
            default:
                return "Diğer";
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "İletişim Bilgileri Y\xf6netimi"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-gray-600",
                        children: "İletişim sayfasındaki bilgileri d\xfczenleyin ve g\xfcncelleyin"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: contactInfos.map((info)=>{
                    const IconComponent = info.icon;
                    const isEditing = editingId === info.id;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "p-2 bg-blue-100 rounded-lg",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                                    className: "w-5 h-5 text-blue-600"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "font-semibold text-gray-900",
                                                        children: info.title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "inline-block px-2 py-1 text-xs rounded-full ".concat(getTypeColor(info.type)),
                                                        children: getTypeLabel(info.type)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    !isEditing && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: ()=>handleEdit(info.id, info.content),
                                        className: "p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                        title: "D\xfczenle",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PencilIcon/* default */.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }),
                            isEditing ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                        value: editContent,
                                        onChange: (e)=>setEditContent(e.target.value),
                                        rows: 4,
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "İ\xe7eriği d\xfczenleyin..."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                onClick: ()=>handleSave(info.id),
                                                className: "inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Kaydet"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                onClick: handleCancel,
                                                className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                                                children: "İptal"
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-gray-700 whitespace-pre-line",
                                children: info.content
                            })
                        ]
                    }, info.id);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-blue-50 border border-blue-200 rounded-lg p-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "font-semibold text-blue-900 mb-2",
                        children: "Kullanım Talimatları"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "text-blue-800 text-sm space-y-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                children: "• Her bilgi kartının sağ \xfcst k\xf6şesindeki d\xfczenle butonuna tıklayarak i\xe7eriği değiştirebilirsiniz"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                children: "• \xc7ok satırlı bilgiler i\xe7in Enter tuşunu kullanabilirsiniz"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                children: "• Değişiklikler anında uygulanır ve websitede g\xf6r\xfcn\xfcr olur"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                children: "• Telefon numaraları uluslararası format (+90...) kullanılmalıdır"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-blue-600",
                                children: contactInfos.filter((info)=>info.type === "address").length
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "Ofis Adresi"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-green-600",
                                children: contactInfos.filter((info)=>info.type === "phone").length
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "Telefon Numarası"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-purple-600",
                                children: contactInfos.filter((info)=>info.type === "email").length
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "E-posta Adresi"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-orange-600",
                                children: contactInfos.filter((info)=>info.type === "hours").length
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "\xc7alışma Saati"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 622:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/*
 React
 react-jsx-runtime.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var f=__webpack_require__(2265),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;

//# sourceMappingURL=react-jsx-runtime.production.min.js.map


/***/ }),

/***/ 7437:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(622);
} else {}


/***/ }),

/***/ 1039:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function BuildingOffice2Icon({
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
    d: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(BuildingOffice2Icon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 9186:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function CheckCircleIcon({
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
    d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckCircleIcon);
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

/***/ 4424:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function EnvelopeIcon({
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
    d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EnvelopeIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 2125:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function PencilIcon({
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
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 5587:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function PhoneIcon({
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
    d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PhoneIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2971,993,1744], function() { return __webpack_exec__(8690); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);