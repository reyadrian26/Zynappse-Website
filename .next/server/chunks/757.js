"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 7757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);

/** LIBRARIES */ 



/** SEMANTIC */ const Menu = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Menu: Menu1  })=>Menu1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/NavBar/index.js -> " + "semantic-ui-react"
        ]
    }
});
const MenuItem = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Menu: Menu2  })=>Menu2.Item
    )
, {
    loadableGenerated: {
        modules: [
            "../components/NavBar/index.js -> " + "semantic-ui-react"
        ]
    }
});
/** STYLES */ 
class MenuExampleSecondary extends (/* unused pure expression or super */ null && (Component)) {
    handleItemClick = ()=>{
        setTimeout(()=>{
            history.replaceState("", document.title, window.location.origin + window.location.pathname + window.location.search);
        }, 1);
    };
    render() {
        return /*#__PURE__*/ _jsxs(Menu, {
            secondary: true,
            className: style.navBar,
            children: [
                /*#__PURE__*/ _jsx(Link, {
                    href: "/",
                    children: /*#__PURE__*/ _jsxs(MenuItem, {
                        className: style.menu_item,
                        position: "left",
                        name: "home",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: style.logoBackground
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: style.zyNavLogo,
                                children: /*#__PURE__*/ _jsx(Image, {
                                    src: "/static/images/zynappse-logo.svg",
                                    height: 62,
                                    width: 64
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: style.zyNavText,
                                children: /*#__PURE__*/ _jsx(Image, {
                                    src: "/static/images/zynappse corporation.svg",
                                    height: 40,
                                    width: 330
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: "/",
                    children: /*#__PURE__*/ _jsx(MenuItem, {
                        name: "home",
                        onClick: this.handleItemClick,
                        className: `${style["navItem"]} ${style["homeNav"]}`
                    })
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: "/about-us",
                    children: /*#__PURE__*/ _jsx(MenuItem, {
                        name: "about",
                        onClick: this.handleItemClick,
                        className: `${style["navItem"]} ${style["aboutNav"]}`
                    })
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: "/#portfolioContainer",
                    children: /*#__PURE__*/ _jsx(MenuItem, {
                        name: "portfolio",
                        onClick: this.handleItemClick,
                        className: `${style["navItem"]} ${style["portfolioNav"]}`
                    })
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: "/#skillsContainer",
                    children: /*#__PURE__*/ _jsx(MenuItem, {
                        name: "skills",
                        onClick: this.handleItemClick,
                        className: `${style["navItem"]} ${style["skillsNav"]}`
                    })
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: "/contact-us",
                    children: /*#__PURE__*/ _jsx(MenuItem, {
                        name: "contact",
                        className: `${style["navItem"]} ${style["contactNav"]}`
                    })
                })
            ]
        });
    }
};


/***/ })

};
;