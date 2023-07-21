"use strict";
exports.id = 1494;
exports.ids = [1494];
exports.modules = {

/***/ 1494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);

/** STYLES */ 


/** SEMANTIC */ const Menu = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Menu: Menu1  })=>Menu1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/generics/Header/Mobile/Content.js -> " + "semantic-ui-react"
        ]
    }
});
const MenuItem = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Menu: Menu2  })=>Menu2.Item
    )
, {
    loadableGenerated: {
        modules: [
            "../components/generics/Header/Mobile/Content.js -> " + "semantic-ui-react"
        ]
    }
});
const Content = (props)=>{
    let { isBurgerClicked ,  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerMobileContent),
        "data-open": isBurgerClicked,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mobNavBar),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Menu, {
                vertical: true,
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mobMenu),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "home",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navItem)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/about-us",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "about",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navItem)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/#portfolioContainer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "portfolio",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navItem)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/#skillsContainer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "skills",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navItem)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/contact-us",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                            name: "contact",
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navItem)
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ })

};
;