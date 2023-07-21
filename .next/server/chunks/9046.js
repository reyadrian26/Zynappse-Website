"use strict";
exports.id = 9046;
exports.ids = [9046];
exports.modules = {

/***/ 9912:
/***/ ((module) => {


function SetValue(key, value, actionType) {
    if (arguments.length === 3) {
        return {
            type: actionType.toUpperCase(),
            payload: {
                [key]: value
            }
        };
    } else if (arguments.length === 2 && typeof key === "object") {
        return {
            type: arguments[1].toUpperCase(),
            payload: key
        };
    } else {
        throw new Error("SetValue() only accept arguments as follow SetValue(key, value, actionType) or SetValue({key: value}, actionType)");
    }
}
;
module.exports = SetValue;


/***/ }),

/***/ 1794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport default from dynamic */ _SetValue__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _SetValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9912);
/* harmony import */ var _SetValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SetValue__WEBPACK_IMPORTED_MODULE_0__);




/***/ }),

/***/ 9046:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1794);

/** LIBRARIES */ 



/** COMPONENTS */ const Head = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 8147).then(__webpack_require__.bind(__webpack_require__, 8147))
, {
    loadableGenerated: {
        modules: [
            "../layout/main.js -> " + "components/generics/Head.js"
        ]
    }
});
const LoaderComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(2847), __webpack_require__.e(9848)]).then(__webpack_require__.bind(__webpack_require__, 9848))
, {
    loadableGenerated: {
        modules: [
            "../layout/main.js -> " + "components/generics/Loader.js"
        ]
    }
});
const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 9953).then(__webpack_require__.bind(__webpack_require__, 9953))
, {
    loadableGenerated: {
        modules: [
            "../layout/main.js -> " + "components/generics/Header"
        ]
    }
});
/** STYLES */ 

const MainLayout = (props)=>{
    let { children , authenticated , hasMetaTags , mainContainerStyle , hasHeader  } = props;
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const useComponentDidMount = (callback)=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(callback, [])
    ;
    useComponentDidMount(()=>{
        setIsLoading(false);
    });
    const childrenWithProps = react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, (child)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child, {})
    );
    let headerProps = {
        ...props
    };
    let onRenderContentComponent = "";
    if (!isLoading || !isLoading && !authenticated) {
        onRenderContentComponent = childrenWithProps;
    } else {
        onRenderContentComponent = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoaderComponent, {});
    }
    let onRenderNavigationComponents = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            hasHeader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                ...headerProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: [
                    (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
                    isLoading ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().displayNone) : ""
                ].join(" "),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mainGridContainer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: onRenderContentComponent
                    })
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: [
            mainContainerStyle ? mainContainerStyle : "",
            (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().posRelative)
        ].join(" "),
        children: [
            hasMetaTags && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Head, {
                ...props
            }),
            onRenderNavigationComponents
        ]
    });
};
function mapStateToProps(state) {
    var { Default  } = state;
    const props = {
        Default
    };
    return props;
}
function mapDispatchToProps(dispatch) {
    const actions = {
        setValue: actions__WEBPACK_IMPORTED_MODULE_5__/* .SetValue */ .P
    };
    return {
        actions: (0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)(actions, dispatch)
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(MainLayout));


/***/ })

};
;