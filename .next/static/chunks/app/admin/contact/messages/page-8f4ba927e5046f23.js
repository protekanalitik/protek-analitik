(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9601],{

/***/ 6319:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1090))

/***/ }),

/***/ 1090:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ContactMessagesPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js
var ChatBubbleLeftRightIcon = __webpack_require__(3298);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var CheckCircleIcon = __webpack_require__(9186);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js
var EnvelopeIcon = __webpack_require__(4424);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EnvelopeOpenIcon.js
var EnvelopeOpenIcon = __webpack_require__(651);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js
var ExclamationTriangleIcon = __webpack_require__(887);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js
var EyeIcon = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/FunnelIcon.js
var FunnelIcon = __webpack_require__(8034);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js
var MagnifyingGlassIcon = __webpack_require__(4020);
;// CONCATENATED MODULE: __barrel_optimize__?names=ChatBubbleLeftRightIcon,CheckCircleIcon,EnvelopeIcon,EnvelopeOpenIcon,ExclamationTriangleIcon,EyeIcon,FunnelIcon,MagnifyingGlassIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js









;// CONCATENATED MODULE: ./src/app/admin/contact/messages/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ContactMessagesPage() {
    const [messages, setMessages] = (0,react.useState)([]);
    const [filteredMessages, setFilteredMessages] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)("");
    const [selectedMessage, setSelectedMessage] = (0,react.useState)(null);
    const [showFilters, setShowFilters] = (0,react.useState)(false);
    const [filters, setFilters] = (0,react.useState)({
        message_type: "",
        priority: "",
        is_read: "",
        is_responded: "",
        search: ""
    });
    // Fetch messages on component mount
    (0,react.useEffect)(()=>{
        fetchMessages();
    }, []);
    // Apply filters when messages or filters change
    (0,react.useEffect)(()=>{
        applyFilters();
    }, [
        messages,
        filters
    ]);
    const fetchMessages = async ()=>{
        try {
            setLoading(true);
            const response = await fetch("/api/contact", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            if (result.success) {
                setMessages(result.data || []);
            } else {
                setError(result.error || "Failed to fetch messages");
            }
        } catch (error) {
            console.error("Error fetching messages:", error);
            setError("Network error occurred");
        } finally{
            setLoading(false);
        }
    };
    const applyFilters = ()=>{
        let filtered = [
            ...messages
        ];
        // Text search
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            filtered = filtered.filter((msg)=>(msg.name || "".concat(msg.first_name, " ").concat(msg.last_name)).toLowerCase().includes(searchLower) || msg.email.toLowerCase().includes(searchLower) || msg.subject.toLowerCase().includes(searchLower) || msg.message.toLowerCase().includes(searchLower) || (msg.company || "").toLowerCase().includes(searchLower));
        }
        // Message type filter
        if (filters.message_type) {
            filtered = filtered.filter((msg)=>msg.message_type === filters.message_type);
        }
        // Priority filter
        if (filters.priority) {
            filtered = filtered.filter((msg)=>msg.priority === filters.priority);
        }
        // Read status filter
        if (filters.is_read) {
            const isRead = filters.is_read === "true";
            filtered = filtered.filter((msg)=>msg.is_read === isRead);
        }
        // Response status filter
        if (filters.is_responded) {
            const isResponded = filters.is_responded === "true";
            filtered = filtered.filter((msg)=>msg.is_responded === isResponded);
        }
        setFilteredMessages(filtered);
    };
    const markAsRead = async (messageId)=>{
        try {
            // Update local state immediately
            setMessages((prev)=>prev.map((msg)=>msg.id === messageId ? {
                        ...msg,
                        is_read: true
                    } : msg));
        // TODO: API call to update message status
        // await updateMessageStatus(messageId, { is_read: true })
        } catch (error) {
            console.error("Error marking message as read:", error);
        }
    };
    const getMessageTypeLabel = (type)=>{
        const types = {
            "genel": "Genel",
            "teknik-destek": "Teknik Destek",
            "satis": "Satış",
            "teklif-talebi": "Teklif Talebi",
            "is-birligi": "İş Birliği"
        };
        return types[type] || type;
    };
    const getMessageTypeColor = (type)=>{
        const colors = {
            "genel": "bg-gray-100 text-gray-800",
            "teknik-destek": "bg-blue-100 text-blue-800",
            "satis": "bg-green-100 text-green-800",
            "teklif-talebi": "bg-yellow-100 text-yellow-800",
            "is-birligi": "bg-purple-100 text-purple-800"
        };
        return colors[type] || "bg-gray-100 text-gray-800";
    };
    const getPriorityColor = (priority)=>{
        const colors = {
            "low": "bg-gray-100 text-gray-600",
            "normal": "bg-blue-100 text-blue-600",
            "high": "bg-orange-100 text-orange-600",
            "urgent": "bg-red-100 text-red-600"
        };
        return colors[priority] || "bg-gray-100 text-gray-600";
    };
    const getPriorityLabel = (priority)=>{
        const labels = {
            "low": "D\xfcş\xfck",
            "normal": "Normal",
            "high": "Y\xfcksek",
            "urgent": "Acil"
        };
        return labels[priority] || priority;
    };
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const getMessageName = (message)=>{
        if (message.name) return message.name;
        if (message.first_name || message.last_name) {
            return "".concat(message.first_name || "", " ").concat(message.last_name || "").trim();
        }
        return "Anonim";
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
            })
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "bg-red-50 border border-red-200 rounded-lg p-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ExclamationTriangleIcon/* default */.Z, {
                            className: "w-5 h-5 text-red-600"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "text-red-800 font-medium",
                            children: [
                                "Error: ",
                                error
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: fetchMessages,
                    className: "mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700",
                    children: "Retry"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "İletişim Mesajları"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-600",
                                children: "M\xfcşterilerden gelen mesajları g\xf6r\xfcnt\xfcleyin ve y\xf6netin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        onClick: ()=>setShowFilters(!showFilters),
                        className: "inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FunnelIcon/* default */.Z, {
                                className: "w-4 h-4"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "Filtrele"
                            })
                        ]
                    })
                ]
            }),
            showFilters && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-white rounded-lg border border-gray-200 p-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Arama"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MagnifyingGlassIcon/* default */.Z, {
                                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "text",
                                                value: filters.search,
                                                onChange: (e)=>setFilters((prev)=>({
                                                            ...prev,
                                                            search: e.target.value
                                                        })),
                                                className: "pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                placeholder: "İsim, email, konu..."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Mesaj T\xfcr\xfc"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                        value: filters.message_type,
                                        onChange: (e)=>setFilters((prev)=>({
                                                    ...prev,
                                                    message_type: e.target.value
                                                })),
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "",
                                                children: "T\xfcm\xfc"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "genel",
                                                children: "Genel"
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
                                                value: "teklif-talebi",
                                                children: "Teklif Talebi"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "is-birligi",
                                                children: "İş Birliği"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "\xd6ncelik"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                        value: filters.priority,
                                        onChange: (e)=>setFilters((prev)=>({
                                                    ...prev,
                                                    priority: e.target.value
                                                })),
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "",
                                                children: "T\xfcm\xfc"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "low",
                                                children: "D\xfcş\xfck"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "normal",
                                                children: "Normal"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "high",
                                                children: "Y\xfcksek"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "urgent",
                                                children: "Acil"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Okunma Durumu"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                        value: filters.is_read,
                                        onChange: (e)=>setFilters((prev)=>({
                                                    ...prev,
                                                    is_read: e.target.value
                                                })),
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "",
                                                children: "T\xfcm\xfc"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "false",
                                                children: "Okunmamış"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "true",
                                                children: "Okunmuş"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Yanıt Durumu"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                        value: filters.is_responded,
                                        onChange: (e)=>setFilters((prev)=>({
                                                    ...prev,
                                                    is_responded: e.target.value
                                                })),
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "",
                                                children: "T\xfcm\xfc"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "false",
                                                children: "Yanıtlanmamış"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: "true",
                                                children: "Yanıtlanmış"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "mt-4 flex justify-end",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: ()=>setFilters({
                                    message_type: "",
                                    priority: "",
                                    is_read: "",
                                    is_responded: "",
                                    search: ""
                                }),
                            className: "text-gray-600 hover:text-gray-800",
                            children: "Filtreleri Temizle"
                        })
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
                                children: messages.length
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "Toplam Mesaj"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-orange-600",
                                children: messages.filter((msg)=>!msg.is_read).length
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "Okunmamış"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-green-600",
                                children: messages.filter((msg)=>msg.is_responded).length
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "Yanıtlanmış"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-red-600",
                                children: messages.filter((msg)=>msg.priority === "urgent" || msg.priority === "high").length
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "Y\xfcksek \xd6ncelik"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "bg-white rounded-lg border border-gray-200",
                children: filteredMessages.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeIcon/* default */.Z, {
                            className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "Mesaj bulunamadı"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-gray-600",
                            children: messages.length === 0 ? "Hen\xfcz hi\xe7 mesaj gelmemiş." : "Filtreleme kriterlerinize uygun mesaj bulunamadı."
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "divide-y divide-gray-200",
                    children: filteredMessages.map((message)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "p-6 hover:bg-gray-50 cursor-pointer transition-colors ".concat(!message.is_read ? "bg-blue-50" : ""),
                            onClick: ()=>{
                                setSelectedMessage(message);
                                if (!message.is_read) {
                                    markAsRead(message.id);
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center space-x-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            message.is_read ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeOpenIcon/* default */.Z, {
                                                                className: "w-4 h-4 text-gray-400"
                                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EnvelopeIcon/* default */.Z, {
                                                                className: "w-4 h-4 text-blue-600"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "font-medium ".concat(!message.is_read ? "text-gray-900" : "text-gray-700"),
                                                                children: getMessageName(message)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "px-2 py-1 text-xs rounded-full ".concat(getMessageTypeColor(message.message_type)),
                                                        children: getMessageTypeLabel(message.message_type)
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "px-2 py-1 text-xs rounded-full ".concat(getPriorityColor(message.priority)),
                                                        children: getPriorityLabel(message.priority)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg ".concat(!message.is_read ? "font-semibold text-gray-900" : "font-medium text-gray-800", " mb-1"),
                                                children: message.subject
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-gray-600 text-sm mb-2 line-clamp-2",
                                                children: message.message
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center space-x-4 text-sm text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: message.email
                                                    }),
                                                    message.company && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        children: [
                                                            "• ",
                                                            message.company
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        children: [
                                                            "• ",
                                                            formatDate(message.created_at)
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center space-x-2 ml-4",
                                        children: [
                                            message.is_responded && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "p-1 bg-green-100 rounded",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleIcon/* default */.Z, {
                                                    className: "w-4 h-4 text-green-600"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeIcon/* default */.Z, {
                                                className: "w-4 h-4 text-gray-400"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, message.id))
                })
            }),
            selectedMessage && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "p-6 border-b border-gray-200",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-xl font-semibold text-gray-900",
                                        children: "Mesaj Detayı"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: ()=>setSelectedMessage(null),
                                        className: "text-gray-400 hover:text-gray-600",
                                        children: "✕"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "G\xf6nderen"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-900",
                                                    children: getMessageName(selectedMessage)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "E-posta"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-900",
                                                    children: selectedMessage.email
                                                })
                                            ]
                                        }),
                                        selectedMessage.phone && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Telefon"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-900",
                                                    children: selectedMessage.phone
                                                })
                                            ]
                                        }),
                                        selectedMessage.company && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Şirket"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-900",
                                                    children: selectedMessage.company
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Konu"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-gray-900 font-medium",
                                            children: selectedMessage.subject
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Mesaj"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "bg-gray-50 rounded-lg p-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-gray-900 whitespace-pre-wrap",
                                                children: selectedMessage.message
                                            })
                                        })
                                    ]
                                }),
                                (selectedMessage.interested_products || selectedMessage.budget_range || selectedMessage.timeline) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                    children: [
                                        selectedMessage.interested_products && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "İlgilenilen \xdcr\xfcnler"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-900",
                                                    children: selectedMessage.interested_products
                                                })
                                            ]
                                        }),
                                        selectedMessage.budget_range && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "B\xfct\xe7e Aralığı"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-900",
                                                    children: selectedMessage.budget_range
                                                })
                                            ]
                                        }),
                                        selectedMessage.timeline && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Zaman \xc7izelgesi"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-900",
                                                    children: selectedMessage.timeline
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "block font-medium mb-1",
                                                    children: "Tarih"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: formatDate(selectedMessage.created_at)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "block font-medium mb-1",
                                                    children: "Kaynak"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    children: selectedMessage.source || "Website"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center space-x-3 pt-4 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            className: "inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ChatBubbleLeftRightIcon/* default */.Z, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Yanıtla"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50",
                                            children: "Okundu İşaretle"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50",
                                            children: "\xd6ncelik Değiştir"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
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

/***/ 3298:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ChatBubbleLeftRightIcon({
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
    d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChatBubbleLeftRightIcon);
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

/***/ 651:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function EnvelopeOpenIcon({
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
    d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EnvelopeOpenIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 887:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function ExclamationTriangleIcon({
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
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ExclamationTriangleIcon);
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

/***/ 8034:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function FunnelIcon({
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
    d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FunnelIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 4020:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function MagnifyingGlassIcon({
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
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MagnifyingGlassIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2971,993,1744], function() { return __webpack_exec__(6319); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);