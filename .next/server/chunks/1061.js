"use strict";
exports.id = 1061;
exports.ids = [1061];
exports.modules = {

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(971);

/** LIBRARIES */ 



/** SEMANTIC */ const Menu = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Menu: Menu1  })=>Menu1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/generics/Header/Desktop.js -> " + "semantic-ui-react"
        ]
    }
});
const MenuItem = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Menu: Menu2  })=>Menu2.Item
    )
, {
    loadableGenerated: {
        modules: [
            "../components/generics/Header/Desktop.js -> " + "semantic-ui-react"
        ]
    }
});
/** STYLES */ 
/** COMPONENTS*/ 
const Desktop = ()=>{
    const { 0: scrolled , 1: setScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Menu, {
        secondary: true,
        className: [
            (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navBar),
            scrolled ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navBarScrolled) : ""
        ].join(" "),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().leftNavBar),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MenuItem, {
                        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().menu_item),
                        position: "left",
                        name: "home",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().zyNavLogo),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    src: components_assets__WEBPACK_IMPORTED_MODULE_5__/* .images.genericLogoIcon */ .W.genericLogoIcon,
                                    layout: "fill"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().zyNavText),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    src: components_assets__WEBPACK_IMPORTED_MODULE_5__/* .images.genericLogoText */ .W.genericLogoText,
                                    layout: "fill"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().rightNavBar),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "home",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: "/about-us",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "about",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: "/#portfolioContainer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "portfolio",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: "/#skillsContainer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "skills",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: "/contact-us",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "contact",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem)
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desktop);


/***/ })

};
;