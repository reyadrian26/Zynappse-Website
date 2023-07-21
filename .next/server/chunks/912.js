"use strict";
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 3912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__);

/** LIBRARIES */ 

/** COMPONENTS */ 
/* STYLES */ 
/** SEMANTIC UI COMPONENTS */ const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Header: Header1  })=>Header1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/TechStack/index.js -> " + "semantic-ui-react"
        ]
    }
});
const List = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ List: List1  })=>List1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/TechStack/index.js -> " + "semantic-ui-react"
        ]
    }
});
const ListItem = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ List: List2  })=>List2.Item
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/TechStack/index.js -> " + "semantic-ui-react"
        ]
    }
});
const TechStack = ()=>{
    const techStackArr = [
        "Linux",
        "Visual C++",
        "JavaScript",
        "Objective-C",
        "Node.js",
        "NET",
        "AJAX",
        "Swift",
        "React",
        "PHP",
        "HTML5",
        "Kotlin",
        "MongoDB",
        "Java",
        "CSS"
    ];
    const techStackMap = techStackArr.map((tech, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listItem),
            children: tech
        }, index)
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().techStackContPage),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rightImg),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    src: "/static/images/cropped1.png",
                    height: 652,
                    width: 350
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: [
                    (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bottomImg),
                    (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageContainer)
                ].join(" "),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
                    src: "/static/images/cropped3.png",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                as: "h1",
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
                children: (0,strings__WEBPACK_IMPORTED_MODULE_3__.getLocalizedString)("TECHSTACK_TITLE")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().techBackground),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(List, {
                    className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().list),
                    children: techStackMap
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TechStack);


/***/ })

};
;