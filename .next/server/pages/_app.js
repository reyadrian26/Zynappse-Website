"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
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

/***/ 4635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./actions/index.js
var actions = __webpack_require__(1794);
;// CONCATENATED MODULE: ./actions/ActionTypes.js
const DEFAULT = "DEFAULT";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./reducers/Default.js

const initialState = {
    isInitialize: false
};
/* harmony default export */ const Default = ((state = initialState, action)=>{
    switch(action.type){
        case DEFAULT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./reducers/index.js


/* harmony default export */ const reducers = ((0,external_redux_.combineReducers)({
    Default: Default
}));

;// CONCATENATED MODULE: ./store/index.js
/** LIBRARIES */ 

/** COMPONENTS */ 
/* harmony default export */ const store = ((0,external_redux_.createStore)(reducers, (0,external_redux_.applyMiddleware)((external_redux_thunk_default()))));

;// CONCATENATED MODULE: ./pages/_app.js

/** LIBRARIES */ 




const ToastContainer = (0,dynamic["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1187, 23)).then(({ ToastContainer: ToastContainer1  })=>ToastContainer1
    )
, {
    loadableGenerated: {
        modules: [
            "_app.js -> " + "react-toastify"
        ]
    }
});
/** COMPONENTS */ 


/** STYLES */ 
const MyApp = (props)=>{
    let { Component , pageProps  } = props;
    /** Initialize default values */ (0,external_react_.useEffect)(()=>{
        let isIgnore = false;
        let { isInitialize  } = store.getState().Default;
        if (!isInitialize && !isIgnore) {
            store.dispatch((0,actions/* SetValue */.P)({
                isInitialize: true
            }, DEFAULT));
        }
        return ()=>{
            isIgnore = true;
        };
    }, []);
    /** Dynamic import CSS */ (0,external_react_.useEffect)(()=>{
        let isIgnore = false;
        const loadCss = async ()=>{
            await __webpack_require__.e(/* import() */ 8819).then(__webpack_require__.t.bind(__webpack_require__, 8819, 23));
        };
        if (!isIgnore) {
            loadCss();
        }
        if (!isIgnore) {
            loadCss();
        }
        return ()=>{
            isIgnore = true;
        };
    }, []);
    let componentProps = {
        ...pageProps
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: store,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...componentProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ToastContainer, {})
        ]
    });
};
MyApp.getInitialProps = async ({ Component , ctx  })=>{
    let props = {
        pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
    if (ctx.res) {
        props.API_SERVER_URL = ctx.res.locals.API_SERVER_URL;
        props.WEB_PATH = ctx.res.locals.WEB_PATH;
        props.UNDER_CONSTRUCTION = ctx.res.locals.UNDER_CONSTRUCTION;
    }
    return props;
};
const makeStore = ()=>store
;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152], () => (__webpack_exec__(4635)));
module.exports = __webpack_exports__;

})();