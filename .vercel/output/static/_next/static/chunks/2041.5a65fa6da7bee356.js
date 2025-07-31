"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2041],{

/***/ 2041:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MultipleImageUpload; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowDownIcon.js

function ArrowDownIcon({
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
    d: "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
  }));
}
const ForwardRef = /*#__PURE__*/ react.forwardRef(ArrowDownIcon);
/* harmony default export */ var esm_ArrowDownIcon = (ForwardRef);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowUpIcon.js

function ArrowUpIcon({
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
    d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
  }));
}
const ArrowUpIcon_ForwardRef = /*#__PURE__*/ react.forwardRef(ArrowUpIcon);
/* harmony default export */ var esm_ArrowUpIcon = (ArrowUpIcon_ForwardRef);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowUpTrayIcon.js
var ArrowUpTrayIcon = __webpack_require__(7993);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js
var PhotoIcon = __webpack_require__(3524);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js
var PlusIcon = __webpack_require__(5255);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(6689);
;// CONCATENATED MODULE: __barrel_optimize__?names=ArrowDownIcon,ArrowUpIcon,ArrowUpTrayIcon,PhotoIcon,PlusIcon,XMarkIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js







;// CONCATENATED MODULE: ./src/components/MultipleImageUpload.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function MultipleImageUpload(param) {
    let { images = [], onChange, label = "\xdcr\xfcn G\xf6rselleri", maxImages = 10, className = "" } = param;
    const [uploading, setUploading] = (0,react.useState)(false);
    const [dragOver, setDragOver] = (0,react.useState)(false);
    const [urlInput, setUrlInput] = (0,react.useState)("");
    const fileInputRef = (0,react.useRef)(null);
    const handleFileSelect = async (files)=>{
        if (images.length + files.length > maxImages) {
            alert("En fazla ".concat(maxImages, " resim y\xfckleyebilirsiniz."));
            return;
        }
        setUploading(true);
        try {
            var _result_data;
            // Dosyaları sunucuya yükle
            const formData = new FormData();
            const validFiles = [];
            // Dosyaları filtrele ve FormData'ya ekle
            for(let i = 0; i < files.length; i++){
                const file = files[i];
                if (!file.type.startsWith("image/")) {
                    alert("".concat(file.name, " ge\xe7erli bir resim dosyası değil."));
                    continue;
                }
                if (file.size > 5 * 1024 * 1024) {
                    alert("".concat(file.name, " dosyası 5MB'dan b\xfcy\xfck."));
                    continue;
                }
                validFiles.push(file);
                formData.append("files", file);
            }
            if (validFiles.length === 0) {
                setUploading(false);
                return;
            }
            // Çoklu dosya yükleme API'sini çağır
            formData.append("type", "products") // Upload type belirt
            ;
            const response = await fetch("/api/upload", {
                method: "PUT",
                body: formData,
                credentials: "include" // Include cookies for authentication
            });
            const result = await response.json();
            if (result.success && ((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.uploadedFiles)) {
                const urls = result.data.uploadedFiles.map((file)=>file.url);
                onChange([
                    ...images,
                    ...urls
                ]);
                alert("".concat(urls.length, " resim başarıyla y\xfcklendi."));
            } else {
                alert(result.error || "Resimler y\xfcklenirken hata oluştu.");
            }
        } catch (error) {
            console.error("Multiple upload error:", error);
            alert("Resimler y\xfcklenirken hata oluştu.");
        } finally{
            setUploading(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileSelect(files);
        }
    };
    const handleFileInput = (e)=>{
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileSelect(files);
        }
    };
    const addUrlImage = ()=>{
        if (!urlInput.trim()) return;
        // Basic URL validation - sadece format kontrolü, URL'nin çalışıp çalışmadığı kontrol edilmiyor
        const urlPattern = /^(https?:\/\/|\/)/i;
        if (!urlPattern.test(urlInput.trim())) {
        // URL formatı geçersizse bile ekle - kullanıcı yerel path de girebilir
        }
        if (images.length >= maxImages) {
            alert("En fazla ".concat(maxImages, " resim ekleyebilirsiniz."));
            return;
        }
        if (!images.includes(urlInput.trim())) {
            onChange([
                ...images,
                urlInput.trim()
            ]);
            setUrlInput("");
        } else {
            alert("Bu resim zaten eklenmiş.");
        }
    };
    const removeImage = (index)=>{
        const newImages = images.filter((_, i)=>i !== index);
        onChange(newImages);
    };
    const moveImage = (index, direction)=>{
        const newImages = [
            ...images
        ];
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        if (targetIndex >= 0 && targetIndex < newImages.length) {
            [newImages[index], newImages[targetIndex]] = [
                newImages[targetIndex],
                newImages[index]
            ];
            onChange(newImages);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-4 ".concat(className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: [
                    label,
                    " (",
                    images.length,
                    "/",
                    maxImages,
                    ")"
                ]
            }),
            images.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4 mb-4",
                children: images.map((image, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: image,
                                alt: "Resim ".concat(index + 1),
                                className: "w-full h-32 object-cover rounded-lg border border-gray-200",
                                onError: (e)=>{
                                    const target = e.target;
                                    target.src = "/images/lab-1.jpg" // fallback resim
                                    ;
                                    target.style.backgroundColor = "#f3f4f6";
                                    target.style.color = "#6b7280";
                                    target.alt = "Resim y\xfcklenemiyor";
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2",
                                children: [
                                    index > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        onClick: ()=>moveImage(index, "up"),
                                        className: "p-1 bg-blue-600 text-white rounded hover:bg-blue-700",
                                        title: "Yukarı taşı",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowUpIcon, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    index < images.length - 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        onClick: ()=>moveImage(index, "down"),
                                        className: "p-1 bg-blue-600 text-white rounded hover:bg-blue-700",
                                        title: "Aşağı taşı",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_ArrowDownIcon, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        onClick: ()=>removeImage(index),
                                        className: "p-1 bg-red-600 text-white rounded hover:bg-red-700",
                                        title: "Sil",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(XMarkIcon/* default */.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded",
                                children: index + 1
                            })
                        ]
                    }, index))
            }),
            images.length < maxImages && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                        multiple: true,
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
                                                children: "Resimler Se\xe7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm text-gray-500 mt-2",
                                        children: "veya resimleri s\xfcr\xfckleyip bırakın"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-xs text-gray-400",
                                children: "PNG, JPG, JPEG, WebP (Max: 5MB her biri)"
                            })
                        ]
                    })
                ]
            }),
            images.length < maxImages && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
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
                                    children: "veya URL ile ekle"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "text",
                                value: urlInput,
                                onChange: (e)=>setUrlInput(e.target.value),
                                onKeyPress: (e)=>e.key === "Enter" && (e.preventDefault(), addUrlImage()),
                                placeholder: "https://example.com/image.jpg veya /images/product.jpg",
                                className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: addUrlImage,
                                disabled: !urlInput.trim(),
                                className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                    className: "w-4 h-4"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-xs text-gray-500 space-y-1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "• İlk resim ana \xfcr\xfcn resmi olarak kullanılır"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "• Resimleri sıralamak i\xe7in \xfczerine gelin ve ok butonlarını kullanın"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "• Yerel dosya yolları (/images/...) da kullanabilirsiniz"
                    })
                ]
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

/***/ })

}]);