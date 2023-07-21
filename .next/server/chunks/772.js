"use strict";
exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1998);

/** LIBRARIES */ 

/** SEMANTIC */ const Grid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Grid: Grid1  })=>Grid1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Accomplishments/Appfutura.js -> " + "semantic-ui-react"
        ]
    }
});
const GridRow = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Grid: Grid2  })=>Grid2.Row
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Accomplishments/Appfutura.js -> " + "semantic-ui-react"
        ]
    }
});
const GridColumn = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Grid: Grid3  })=>Grid3.Column
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Accomplishments/Appfutura.js -> " + "semantic-ui-react"
        ]
    }
});
/** STYLES */ 
/** CONSTANTS */ 
const Appfutura = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Grid, {
        doubling: true,
        columns: 4,
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().accomplishmentGrid),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridRow, {
            children: components_constants__WEBPACK_IMPORTED_MODULE_3__/* .ACCOMPLISHMENTS_APPFUTURA_ACHIEVEMENTS.map */ .Kp.map((item, index)=>{
                let { image , height , width  } = item;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridColumn, {
                    textAlign: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        src: image,
                        width: height,
                        height: width
                    })
                }, index);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Appfutura);


/***/ })

};
;