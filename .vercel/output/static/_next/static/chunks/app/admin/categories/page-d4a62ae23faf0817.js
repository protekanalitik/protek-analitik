(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4331],{

/***/ 9780:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8282))

/***/ }),

/***/ 8282:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CategoriesPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(3217);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CogIcon.js
var CogIcon = __webpack_require__(9010);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js
var EyeIcon = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js
var MagnifyingGlassIcon = __webpack_require__(4020);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PencilIcon.js
var PencilIcon = __webpack_require__(2125);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js
var PlusIcon = __webpack_require__(5255);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js
var TrashIcon = __webpack_require__(7227);
;// CONCATENATED MODULE: __barrel_optimize__?names=ChevronRightIcon,CogIcon,EyeIcon,MagnifyingGlassIcon,PencilIcon,PlusIcon,TrashIcon!=!./node_modules/@heroicons/react/24/outline/esm/index.js








// EXTERNAL MODULE: ./src/data/products.ts
var products = __webpack_require__(2958);
;// CONCATENATED MODULE: ./src/app/admin/categories/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function CategoriesPage() {
    const [categories, setCategories] = (0,react.useState)(products/* productCategories */.ZH);
    const [searchTerm, setSearchTerm] = (0,react.useState)("");
    const [expandedCategory, setExpandedCategory] = (0,react.useState)(null);
    const [showCategoryModal, setShowCategoryModal] = (0,react.useState)(false);
    const [showSubcategoryModal, setShowSubcategoryModal] = (0,react.useState)(false);
    const [editingCategory, setEditingCategory] = (0,react.useState)(null);
    const [editingSubcategory, setEditingSubcategory] = (0,react.useState)(null);
    const [categoryForm, setCategoryForm] = (0,react.useState)({
        name: "",
        description: "",
        key: ""
    });
    const [subcategoryForm, setSubcategoryForm] = (0,react.useState)({
        name: "",
        description: "",
        key: "",
        categoryKey: ""
    });
    const filteredCategories = categories.filter((category)=>category.name.toLowerCase().includes(searchTerm.toLowerCase()) || category.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleDeleteCategory = (categoryKey)=>{
        if (confirm("Bu kategoriyi silmek istediğinizden emin misiniz? Alt kategoriler ve \xfcr\xfcnler de silinecektir.")) {
            setCategories(categories.filter((cat)=>cat.key !== categoryKey));
            alert("Kategori başarıyla silindi!");
        }
    };
    const handleDeleteSubcategory = (categoryKey, subcategoryKey)=>{
        if (confirm("Bu alt kategoriyi silmek istediğinizden emin misiniz? İ\xe7indeki \xfcr\xfcnler de silinecektir.")) {
            setCategories(categories.map((cat)=>cat.key === categoryKey ? {
                    ...cat,
                    subcategories: cat.subcategories.filter((sub)=>sub.key !== subcategoryKey)
                } : cat));
            alert("Alt kategori başarıyla silindi!");
        }
    };
    const getTotalProducts = (category)=>{
        return category.subcategories.reduce((total, sub)=>total + sub.products.length, 0);
    };
    const handleNewCategory = ()=>{
        setCategoryForm({
            name: "",
            description: "",
            key: ""
        });
        setEditingCategory(null);
        setShowCategoryModal(true);
    };
    const handleEditCategory = (category)=>{
        setCategoryForm({
            name: category.name,
            description: category.description,
            key: category.key
        });
        setEditingCategory(category);
        setShowCategoryModal(true);
    };
    const handleNewSubcategory = (categoryKey)=>{
        setSubcategoryForm({
            name: "",
            description: "",
            key: "",
            categoryKey
        });
        setEditingSubcategory(null);
        setShowSubcategoryModal(true);
    };
    const handleEditSubcategory = (categoryKey, subcategory)=>{
        setSubcategoryForm({
            name: subcategory.name,
            description: subcategory.description,
            key: subcategory.key,
            categoryKey
        });
        setEditingSubcategory({
            category: categoryKey,
            subcategory
        });
        setShowSubcategoryModal(true);
    };
    const saveCategoryForm = ()=>{
        if (!categoryForm.name.trim() || !categoryForm.description.trim()) {
            alert("L\xfctfen t\xfcm alanları doldurun.");
            return;
        }
        const key = categoryForm.key || categoryForm.name.toLowerCase().replace(/[^a-z0-9]/gi, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
        if (editingCategory) {
            // Edit existing category
            setCategories(categories.map((cat)=>cat.key === editingCategory.key ? {
                    ...cat,
                    name: categoryForm.name,
                    description: categoryForm.description
                } : cat));
            alert("Kategori başarıyla g\xfcncellendi!");
        } else {
            // Add new category
            if (categories.some((cat)=>cat.key === key)) {
                alert("Bu anahtar zaten kullanılıyor. L\xfctfen farklı bir isim se\xe7in.");
                return;
            }
            setCategories([
                ...categories,
                {
                    key,
                    name: categoryForm.name,
                    description: categoryForm.description,
                    icon: "⚙️",
                    subcategories: []
                }
            ]);
            alert("Kategori başarıyla eklendi!");
        }
        setShowCategoryModal(false);
    };
    const saveSubcategoryForm = ()=>{
        if (!subcategoryForm.name.trim() || !subcategoryForm.description.trim()) {
            alert("L\xfctfen t\xfcm alanları doldurun.");
            return;
        }
        const key = subcategoryForm.key || subcategoryForm.name.toLowerCase().replace(/[^a-z0-9]/gi, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
        if (editingSubcategory) {
            // Edit existing subcategory
            setCategories(categories.map((cat)=>cat.key === subcategoryForm.categoryKey ? {
                    ...cat,
                    subcategories: cat.subcategories.map((sub)=>sub.key === editingSubcategory.subcategory.key ? {
                            ...sub,
                            name: subcategoryForm.name,
                            description: subcategoryForm.description
                        } : sub)
                } : cat));
            alert("Alt kategori başarıyla g\xfcncellendi!");
        } else {
            // Add new subcategory
            const category = categories.find((cat)=>cat.key === subcategoryForm.categoryKey);
            if (category === null || category === void 0 ? void 0 : category.subcategories.some((sub)=>sub.key === key)) {
                alert("Bu anahtar zaten kullanılıyor. L\xfctfen farklı bir isim se\xe7in.");
                return;
            }
            setCategories(categories.map((cat)=>cat.key === subcategoryForm.categoryKey ? {
                    ...cat,
                    subcategories: [
                        ...cat.subcategories,
                        {
                            key,
                            name: subcategoryForm.name,
                            description: subcategoryForm.description,
                            products: []
                        }
                    ]
                } : cat));
            alert("Alt kategori başarıyla eklendi!");
        }
        setShowSubcategoryModal(false);
    };
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
                                children: "Kategori Y\xf6netimi"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-600",
                                children: "\xdcr\xfcn kategorilerini ve alt kategorilerini y\xf6netin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex space-x-3",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            onClick: handleNewCategory,
                            className: "inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                    className: "w-5 h-5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Yeni Kategori"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "bg-white rounded-lg border border-gray-200 p-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative max-w-md",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MagnifyingGlassIcon/* default */.Z, {
                            className: "w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "Kategori ara...",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "space-y-4",
                children: filteredCategories.map((category)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "p-6 border-b border-gray-200 bg-gray-50",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                    onClick: ()=>setExpandedCategory(expandedCategory === category.key ? null : category.key),
                                                    className: "p-2 hover:bg-gray-200 rounded-lg transition-colors",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, {
                                                        className: "w-5 h-5 text-gray-500 transition-transform ".concat(expandedCategory === category.key ? "rotate-90" : "")
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "p-2 bg-blue-100 rounded-lg",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CogIcon/* default */.Z, {
                                                        className: "w-6 h-6 text-blue-600"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "text-lg font-semibold text-gray-900",
                                                            children: category.name
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: category.description
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "text-sm font-medium text-gray-900",
                                                            children: [
                                                                category.subcategories.length,
                                                                " alt kategori"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "text-sm text-gray-500",
                                                            children: [
                                                                getTotalProducts(category),
                                                                " \xfcr\xfcn"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                            className: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg",
                                                            title: "G\xf6r\xfcnt\xfcle",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeIcon/* default */.Z, {
                                                                className: "w-4 h-4"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                            onClick: ()=>handleEditCategory(category),
                                                            className: "p-2 text-green-600 hover:bg-green-50 rounded-lg",
                                                            title: "D\xfczenle",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PencilIcon/* default */.Z, {
                                                                className: "w-4 h-4"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                            onClick: ()=>handleDeleteCategory(category.key),
                                                            className: "p-2 text-red-600 hover:bg-red-50 rounded-lg",
                                                            title: "Sil",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrashIcon/* default */.Z, {
                                                                className: "w-4 h-4"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            expandedCategory === category.key && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                className: "font-medium text-gray-900",
                                                children: "Alt Kategoriler"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                onClick: ()=>handleNewSubcategory(category.key),
                                                className: "inline-flex items-center space-x-1 text-sm bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PlusIcon/* default */.Z, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Alt Kategori Ekle"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [
                                            category.subcategories.map((subcategory)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "w-2 h-2 bg-blue-400 rounded-full"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: subcategory.name
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-sm text-gray-600",
                                                                            children: subcategory.description
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center space-x-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                    className: "text-sm font-medium text-gray-600",
                                                                    children: [
                                                                        subcategory.products.length,
                                                                        " \xfcr\xfcn"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center space-x-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                            className: "p-1 text-blue-600 hover:bg-blue-100 rounded",
                                                                            title: "G\xf6r\xfcnt\xfcle",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeIcon/* default */.Z, {
                                                                                className: "w-4 h-4"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                            onClick: ()=>handleEditSubcategory(category.key, subcategory),
                                                                            className: "p-1 text-green-600 hover:bg-green-100 rounded",
                                                                            title: "D\xfczenle",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PencilIcon/* default */.Z, {
                                                                                className: "w-4 h-4"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                                            onClick: ()=>handleDeleteSubcategory(category.key, subcategory.key),
                                                                            className: "p-1 text-red-600 hover:bg-red-100 rounded",
                                                                            title: "Sil",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrashIcon/* default */.Z, {
                                                                                className: "w-4 h-4"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, subcategory.key)),
                                            category.subcategories.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "text-center py-8 text-gray-500",
                                                children: "Bu kategoride hen\xfcz alt kategori bulunmuyor"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, category.key))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-blue-600",
                                children: categories.length
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "Ana Kategori"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-green-600",
                                children: categories.reduce((total, cat)=>total + cat.subcategories.length, 0)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "Alt Kategori"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-2xl font-bold text-purple-600",
                                children: categories.reduce((total, cat)=>total + getTotalProducts(cat), 0)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm text-gray-600",
                                children: "Toplam \xdcr\xfcn"
                            })
                        ]
                    })
                ]
            }),
            showCategoryModal && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white rounded-lg p-6 w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: "text-lg font-semibold text-gray-900 mb-4",
                            children: editingCategory ? "Kategori D\xfczenle" : "Yeni Kategori"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Kategori Adı *"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            value: categoryForm.name,
                                            onChange: (e)=>setCategoryForm((prev)=>({
                                                        ...prev,
                                                        name: e.target.value
                                                    })),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                            placeholder: "Kategori adını girin"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "A\xe7ıklama *"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                            value: categoryForm.description,
                                            onChange: (e)=>setCategoryForm((prev)=>({
                                                        ...prev,
                                                        description: e.target.value
                                                    })),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                            rows: 3,
                                            placeholder: "Kategori a\xe7ıklamasını girin"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-end space-x-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    onClick: ()=>setShowCategoryModal(false),
                                    className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                                    children: "İptal"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    onClick: saveCategoryForm,
                                    className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                                    children: editingCategory ? "G\xfcncelle" : "Ekle"
                                })
                            ]
                        })
                    ]
                })
            }),
            showSubcategoryModal && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white rounded-lg p-6 w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: "text-lg font-semibold text-gray-900 mb-4",
                            children: editingSubcategory ? "Alt Kategori D\xfczenle" : "Yeni Alt Kategori"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Alt Kategori Adı *"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            value: subcategoryForm.name,
                                            onChange: (e)=>setSubcategoryForm((prev)=>({
                                                        ...prev,
                                                        name: e.target.value
                                                    })),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                            placeholder: "Alt kategori adını girin"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "A\xe7ıklama *"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                            value: subcategoryForm.description,
                                            onChange: (e)=>setSubcategoryForm((prev)=>({
                                                        ...prev,
                                                        description: e.target.value
                                                    })),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                            rows: 3,
                                            placeholder: "Alt kategori a\xe7ıklamasını girin"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-end space-x-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    onClick: ()=>setShowSubcategoryModal(false),
                                    className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",
                                    children: "İptal"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    onClick: saveSubcategoryForm,
                                    className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                                    children: editingSubcategory ? "G\xfcncelle" : "Ekle"
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

/***/ 9010:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function CogIcon({
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
    d: "M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CogIcon);
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

/***/ 5255:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function PlusIcon({
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
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlusIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 7227:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function TrashIcon({
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
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TrashIcon);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2958,2971,993,1744], function() { return __webpack_exec__(9780); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);