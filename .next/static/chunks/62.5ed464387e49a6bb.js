"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[62],{

/***/ 62:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ImageUpload; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowUpTrayIcon.js
var ArrowUpTrayIcon = __webpack_require__(7993);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js
var PhotoIcon = __webpack_require__(3524);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(6689);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowUpTrayIcon,PhotoIcon,XMarkIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js




;// CONCATENATED MODULE: ./src/components/ImageUpload.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ImageUpload(param) {
    let { value, onChange, label = "Resim", className = "" } = param;
    const [uploading, setUploading] = (0,react.useState)(false);
    const [dragOver, setDragOver] = (0,react.useState)(false);
    const fileInputRef = (0,react.useRef)(null);
    const handleFileSelect = async (file)=>{
        if (!file.type.startsWith("image/")) {
            alert("L\xfctfen sadece resim dosyası se\xe7in.");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            alert("Dosya boyutu 5MB'dan k\xfc\xe7\xfck olmalıdır.");
            return;
        }
        setUploading(true);
        try {
            // Dosyayı sunucuya yükle
            const formData = new FormData();
            formData.append("file", file);
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
                credentials: "include"
            });
            const result = await response.json();
            console.log("Upload response:", result);
            if (result.success) {
                var _result_data;
                const imageUrl = ((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.url) || result.url;
                console.log("Setting image URL:", imageUrl);
                onChange(imageUrl);
            } else {
                alert(result.error || "Resim y\xfcklenirken hata oluştu.");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("Resim y\xfcklenirken hata oluştu.");
        } finally{
            setUploading(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            handleFileSelect(files[0]);
        }
    };
    const handleFileInput = (e)=>{
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileSelect(files[0]);
        }
    };
    const removeImage = ()=>{
        onChange("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-4 ".concat(className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: label
            }),
            value && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: value,
                        alt: "\xd6nizleme",
                        className: "w-full h-48 object-cover rounded-lg border border-gray-200"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "button",
                        onClick: removeImage,
                        className: "absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(XMarkIcon/* default */.Z, {
                            className: "w-4 h-4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                onDrop: handleDrop,
                onDragOver: (e)=>{
                    e.preventDefault();
                    setDragOver(true);
                },
                onDragLeave: ()=>setDragOver(false),
                className: "border-2 border-dashed rounded-lg p-6 text-center transition-colors ".concat(dragOver ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: "image/*",
                        onChange: handleFileInput,
                        className: "hidden"
                    }),
                    uploading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm text-gray-600",
                                children: "Y\xfckleniyor..."
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PhotoIcon/* default */.Z, {
                                className: "w-12 h-12 text-gray-400 mx-auto"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            var _fileInputRef_current;
                                            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                        },
                                        className: "inline-flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowUpTrayIcon/* default */.Z, {
                                                className: "w-4 h-4"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: "Dosya Se\xe7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm text-gray-500 mt-2",
                                        children: "veya dosyayı s\xfcr\xfckleyip bırakın"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-xs text-gray-400",
                                children: "PNG, JPG, JPEG, WebP (Max: 5MB)"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 flex items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "w-full border-t border-gray-300"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "relative flex justify-center text-sm",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "px-2 bg-gray-50 text-gray-500",
                            children: "veya URL girin"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                type: "text",
                value: value && value.startsWith("data:") ? "" : value || "",
                onChange: (e)=>onChange(e.target.value),
                placeholder: "https://example.com/image.jpg veya /images/product.jpg",
                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            })
        ]
    });
}


/***/ }),

/***/ 7993:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ArrowUpTrayIcon({
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
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowUpTrayIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 3524:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function PhotoIcon({
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
    d: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PhotoIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 6689:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function XMarkIcon({
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
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XMarkIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

}]);