"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3166],{

/***/ 3166:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Contact; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/index.mjs + 290 modules
var es = __webpack_require__(477);
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/dist/index.mjs
var dist = __webpack_require__(4702);
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


/***/ }),

/***/ 6263:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ }),

/***/ 4702:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

}]);