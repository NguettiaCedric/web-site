"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/MobileMenu.js":
/*!*****************************************!*\
  !*** ./components/layout/MobileMenu.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction MobileMenu() {\n    _s();\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        status: false,\n        key: \"\"\n    });\n    const handleClick = (key)=>{\n        if (isActive.key === key) {\n            setIsActive({\n                status: false\n            });\n        } else {\n            setIsActive({\n                status: true,\n                key\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"navigation clearfix\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"current dropdown\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"Accueil\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                        lineNumber: 27,\n                        columnNumber: 50\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/page-about\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"dropdown\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/page-team\",\n                            children: \"Team\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 36,\n                            columnNumber: 42\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            style: {\n                                display: \"\".concat(isActive.key == 2 ? \"block\" : \"none\")\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/page-team\",\n                                        children: \"Team Grid\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/page-team-details\",\n                                        children: \"Team Details\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown-btn\",\n                            onClick: ()=>handleClick(2),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa fa-angle-down\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                lineNumber: 41,\n                                columnNumber: 82\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"dropdown\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/page-services\",\n                            children: \"Services\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 42,\n                            columnNumber: 42\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            style: {\n                                display: \"\".concat(isActive.key == 3 ? \"block\" : \"none\")\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/page-services\",\n                                        children: \"Services Grid\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/page-service-details\",\n                                        children: \"Service Details\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown-btn\",\n                            onClick: ()=>handleClick(3),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa fa-angle-down\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                lineNumber: 47,\n                                columnNumber: 82\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"dropdown\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/page-projects\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 48,\n                            columnNumber: 42\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            style: {\n                                display: \"\".concat(isActive.key == 4 ? \"block\" : \"none\")\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/page-projects\",\n                                        children: \"Projects Grid\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/page-project-details\",\n                                        children: \"Project Details\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown-btn\",\n                            onClick: ()=>handleClick(4),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa fa-angle-down\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                lineNumber: 53,\n                                columnNumber: 82\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"dropdown\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/news-grid\",\n                            children: \"News\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 54,\n                            columnNumber: 42\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            style: {\n                                display: \"\".concat(isActive.key == 5 ? \"block\" : \"none\")\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/news-grid\",\n                                        children: \"News Grid\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/news-details\",\n                                        children: \"News Details\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown-btn\",\n                            onClick: ()=>handleClick(5),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa fa-angle-down\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                                lineNumber: 59,\n                                columnNumber: 82\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/page-contact\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ikodr\\\\Desktop\\\\Crois Numerique\\\\croissance-numerique\\\\web-site\\\\components\\\\layout\\\\MobileMenu.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(MobileMenu, \"YDoDoa8VX/Agh9VQ2UqlKkOO9Gc=\");\n_c = MobileMenu;\nvar _c;\n$RefreshReg$(_c, \"MobileMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQUlBO3dDQUFDVyxNQUFLO2tEQUFhOzs7Ozs7Ozs7Ozs4Q0FDNUIsOERBQUNEOzhDQUFHLDRFQUFDVixrREFBSUE7d0NBQUNXLE1BQUs7a0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FFbkMsOERBQUNHOzRCQUFJTCxXQUFVOzRCQUFlTSxTQUFTLElBQU1SLFlBQVk7c0NBQUksNEVBQUNTO2dDQUFFUCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFDOUUsOERBQUNDOzhCQUFHLDRFQUFDVixrREFBSUE7d0JBQUNXLE1BQUs7a0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0M7R0E1RHdCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9Nb2JpbGVNZW51LmpzPzk4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlTWVudSgpIHtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAga2V5OiBcIlwiLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChrZXkpID0+IHtcclxuICAgICAgICBpZiAoaXNBY3RpdmUua2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgey8qS2VlcCBUaGlzIEVtcHR5IC8gTWVudSB3aWxsIGNvbWUgdGhyb3VnaCBKYXZhc2NyaXB0Ki99XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3VycmVudCBkcm9wZG93blwiPjxMaW5rIGhyZWY9XCIvXCI+QWNjdWVpbDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHVsIHN0eWxlPXt7IGRpc3BsYXk6IGAke2lzQWN0aXZlLmtleSA9PSAxID8gXCJibG9ja1wiIDogXCJub25lXCJ9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+SG9tZSBwYWdlIDAxPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2luZGV4LTJcIj5Ib21lIHBhZ2UgMDI8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnRuXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcGFnZS1hYm91dFwiPkFib3V0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj48TGluayBocmVmPVwiL3BhZ2UtdGVhbVwiPlRlYW08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6IGAke2lzQWN0aXZlLmtleSA9PSAyID8gXCJibG9ja1wiIDogXCJub25lXCJ9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcGFnZS10ZWFtXCI+VGVhbSBHcmlkPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3BhZ2UtdGVhbS1kZXRhaWxzXCI+VGVhbSBEZXRhaWxzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ0blwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDIpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgLz48L2Rpdj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+PExpbmsgaHJlZj1cIi9wYWdlLXNlcnZpY2VzXCI+U2VydmljZXM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6IGAke2lzQWN0aXZlLmtleSA9PSAzID8gXCJibG9ja1wiIDogXCJub25lXCJ9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcGFnZS1zZXJ2aWNlc1wiPlNlcnZpY2VzIEdyaWQ8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcGFnZS1zZXJ2aWNlLWRldGFpbHNcIj5TZXJ2aWNlIERldGFpbHM8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnRuXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMyl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPjwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj48TGluayBocmVmPVwiL3BhZ2UtcHJvamVjdHNcIj5Qcm9qZWN0czwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogYCR7aXNBY3RpdmUua2V5ID09IDQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wYWdlLXByb2plY3RzXCI+UHJvamVjdHMgR3JpZDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wYWdlLXByb2plY3QtZGV0YWlsc1wiPlByb2plY3QgRGV0YWlsczwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1idG5cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg0KX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiIC8+PC9kaXY+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPjxMaW5rIGhyZWY9XCIvbmV3cy1ncmlkXCI+TmV3czwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogYCR7aXNBY3RpdmUua2V5ID09IDUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9uZXdzLWdyaWRcIj5OZXdzIEdyaWQ8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvbmV3cy1kZXRhaWxzXCI+TmV3cyBEZXRhaWxzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ0blwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDUpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgLz48L2Rpdj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcGFnZS1jb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiTW9iaWxlTWVudSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJzdGF0dXMiLCJrZXkiLCJoYW5kbGVDbGljayIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJocmVmIiwic3R5bGUiLCJkaXNwbGF5IiwiZGl2Iiwib25DbGljayIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/MobileMenu.js\n"));

/***/ })

});