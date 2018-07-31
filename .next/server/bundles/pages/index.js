module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_animations_css__ = __webpack_require__("./pages/src/animations.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_animations_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_animations_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App_css__ = __webpack_require__("./pages/src/App.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_index_css__ = __webpack_require__("./pages/src/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cards_css__ = __webpack_require__("./pages/src/cards.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cards_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_cards_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_ga__ = __webpack_require__("next-ga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_ga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_header_js__ = __webpack_require__("./pages/src/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_infographics_js__ = __webpack_require__("./pages/src/infographics.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_introbanner_js__ = __webpack_require__("./pages/src/introbanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_skills_js__ = __webpack_require__("./pages/src/skills.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_about_js__ = __webpack_require__("./pages/src/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_contact_js__ = __webpack_require__("./pages/src/contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_router_ga__ = __webpack_require__("react-router-ga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_router_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_router_ga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_ga__ = __webpack_require__("react-ga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_ga__);
var _jsxFileName = "/Users/marvieellainecalar/zynappse-website-react/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import '../static/css/index.css';
// import '../static/css/bootstrap.css';






 // import '/src/logo.svg';







 // import {SectionsContainer, Section} from 'react-fullpage';




var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Row"], {
        id: "fullpage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_header_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_introbanner_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_infographics_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "about",
        style: {
          color: "white"
        },
        id: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__src_about_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__src_skills_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__src_contact_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); // export default App;


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_6_next_ga___default()("UA-51162965-1", __WEBPACK_IMPORTED_MODULE_5_next_router___default.a)(App)); // <div className="cd-3d-right-side"></div>
// <div className="cd-3d-left-side"></div>
// <div className="cd-3d-bottom-side"></div>

/***/ }),

/***/ "./pages/src/App.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/src/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_js__ = __webpack_require__("./pages/src/carousel.js");
var _jsxFileName = "/Users/marvieellainecalar/zynappse-website-react/pages/src/about.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "margin-section animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.appfutura.com/web-developers",
        target: "_blank",
        className: "animated growIn ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: "200",
        src: "https://www.appfutura.com/img/badges/badge-top-web-company.png",
        alt: "apptura badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.appfutura.com/ios-developers",
        target: "_blank",
        className: "animated growIn delay-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: "200",
        src: "https://www.appfutura.com/img/badges/badge-top-ios-company.png",
        alt: "apptura badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.appfutura.com/android-developers",
        target: "_blank",
        className: "animated growIn delay-1000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: "200",
        src: "https://www.appfutura.com/img/badges/badge-top-android-company.png",
        alt: "apptura badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.appfutura.com/app-developers",
        target: "_blank",
        className: "animated growIn delay-1500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: "200",
        src: "https://www.appfutura.com/img/badges/badge-top-company.png",
        alt: "apptura badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "margin-section animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center animated fadeInLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "About Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "animated fadeInRight delay-250",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Zynappse Corporation is a company that provides Information Technology (IT) solutions. Our IT development team is backed up by experienced management and industry consultants who are experts in aligning and merging technology and day-to-day operational requirements to achieve an efficient and effective system. We are a mobile apps developers and creators of custom friendly applications in mobile, desktop, enterprise, and cloud computing technologies. Our core expertise is in mobile applications or apps, made easy in two of the most in demand mobile platforms: android and iOS to help you reach ten folds of your market and customers particularly in the growing smart phone community.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "margin-section",
        id: "portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Portfolio"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__carousel_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })));
    }
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),

/***/ "./pages/src/animations.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/src/cards.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/src/carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselBanner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
var _jsxFileName = "/Users/marvieellainecalar/zynappse-website-react/pages/src/carousel.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // import {images} from '../assets';
// import '../css/linkgrid.css';
// import {images} from './../../public/assets';
// eslint-disable-next-line

var CarouselBanner =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselBanner, _Component);

  function CarouselBanner() {
    _classCallCheck(this, CarouselBanner);

    return _possibleConstructorReturn(this, (CarouselBanner.__proto__ || Object.getPrototypeOf(CarouselBanner)).apply(this, arguments));
  }

  _createClass(CarouselBanner, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"], {
        indicators: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/rwm2.png",
        alt: "rwm",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/rwm.png",
        alt: "rwm",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
        className: "text-left   ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left animated fadeInUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Resorts World Manila"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left  animated fadeInUp delay-250",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "This Resorts World Manila Mobile Companion is your best friend in and around the Philippines\u2019 First Integrated Entertainment Hub. Get updated on the latest promotions and events that are happening at the resort. Look up movie schedules from the Newport Cinemas. Browse through the Resorts World Manila Exclusives packages."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.zynappse.rwmanila&hl=en",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/rwm-mobile-app/id909015173?mt=8",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska2.png",
        alt: "alaska",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska.png",
        alt: "alaska",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left animated fadeInUp ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Alaska Aces"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-250 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "The Official Alaska Aces PBA Basketball Team iPhone App. Stay connected to the Alaska Aces everywhere you go. Get Alaska Aces news, player profiles, schedules and more."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=ph.com.alaskaaces&hl=en",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/alaska-aces/id743641908?mt=8",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/myblood2.png",
        alt: "myblood",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/myblood.png",
        alt: "myblood",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "My Blood"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "My Blood is a healthy lifestyle app that graphically presents and tracks your lab results. It gives health recommendations based on your calculated risk of developing lifestyle diseases. This app is only available for use on select tests from partner laboratories."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.mybloodprofile.myblood&hl=en",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/myblood-profile/id1208015547?mt=8",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/unfold2.png",
        alt: "unfold",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/unfold.png",
        alt: "unfold",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Unfold App"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "Unfold is an app that makes Master Choa Kok Sui\u2019s teachings more modern and accessible than ever before. The app allows users to receive daily nuggets of inspiration from his teachings and also allows them to personalize the quotes through various fonts, backgrounds, and stickers."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.unfold.unfold&hl=en",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/unfold-app/id830612465?mt=8",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/flashunt2.png",
        alt: "flashunt",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/flashunt.png",
        alt: "flashunt",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "Flashunt"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "FLASHUNT is a mobile scavenger hunt app that engages its users in physical tasks and the excitement of Augmented Reality! Made even more interactive with its in-app sharing of user\u2019s experience to their Social Media accounts. This app makes use of the latest digital solutions to deliver a relevant and truly rewarding experience!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.zynappse.flashnt&hl=en",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/locali2.png",
        alt: "locali",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/locali.png",
        alt: "locali",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "Locali"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "An integrated tourism app that will turn any tourist into a local citizen of Manila, LOCALi revolutionizes the way tourists immerse themselves in the beautiful Capital of the Philippines. With an interface that allows users to scan through the city for virtually anything they want \u2013 from restaurants, to cultural spots, to holes-in-the-wall, etc."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3,
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.zynappse.locali&hl=en",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/oap2.png",
        alt: "oap",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/oap.png",
        alt: "oap",
        width: 230,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "Our Awesome Planet"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "The Our Awesome Planet App is your personal travel guide to the most awesome food and travel experiences in the Philippines. Know the best restaurants, best places, and best travel experiences in the Philippines as curated by Anton Diaz, founder of the top food & travel blog in the Philippines and ASEAN since 2005."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.zynappse.ourawesomeplanet&hl=en",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/our-awesome-planet/id926617833?mt=8",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "  animatedParent animateOnce",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated tada",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska-website.png",
        alt: "alaska-website",
        width: 400,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "cd-close-product-tour cd-img-replace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, "img2"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "  animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, "Alaska Website"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "One of the famous PBA Sports Team in the Philippines."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.alaskaaces.com.ph/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/web.svg",
        target: "_blank",
        width: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "  animatedParent animateOnce",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated tada",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/zygurtech.png",
        alt: "zygurtech",
        width: 400,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "  animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, "Zygurtech Website"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, "An IT company solutions based in US."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "http://www.zygurtech.com/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/web.svg",
        target: "_blank",
        width: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.zynappse.com/static/js/Zynappse_ProfilePortfolio.pdf",
        download: "Zynappse_ProfilePortfolio",
        target: "_blank",
        className: "btn-custom",
        style: {
          color: "#fff"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, "Download our Portfolio")));
    }
  }]);

  return CarouselBanner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


{
  /*  */
}

/***/ }),

/***/ "./pages/src/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
var _jsxFileName = "/Users/marvieellainecalar/zynappse-website-react/pages/src/contact.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // import {images} from './../../public/assets';
// import MapsDiv from './map.js';

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props, context) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props, context));

    _this.handleClick = function (e) {
      _this.setState({
        target: e.target,
        show: !_this.state.show
      });
    };

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Row"], {
        className: "contact margin-section slantedDivContact",
        style: {
          color: "white",
          marginBottom: "-333px"
        },
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container  animatedParent animateOnce slant-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center animated fadeInLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Contact Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ButtonToolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        onClick: this.handleClick,
        className: "text-center animated fadeInRight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/pointer.svg",
        alt: "location",
        width: 30,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "4F RFM Corporate Center, Pioneer cor Sheridan Sts., Mandaluyong City")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Overlay"], {
        show: this.state.show,
        target: this.state.target,
        placement: "top",
        container: this,
        containerPadding: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Popover"], {
        id: "popover-contained",
        title: "Popover bottom",
        style: {
          transform: " skewY(4deg)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-center animated fadeInRight delay-250",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:576-3727",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/phone.svg",
        alt: "contact-no",
        width: 27,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:576-3727",
        style: {
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "+63. 2. 576-3727"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-center animated fadeInRight delay-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "mailto:hi@zynappse.com?Subject=Hello%20",
        target: "_top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/mail.svg",
        alt: "email",
        width: 27,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "mailto:hi@zynappse.com?Subject=Hello%20",
        target: "_top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "hi@zynappse.com"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        className: "animated fadeInRight delay-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "animated fadeInRight delay-1000",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "https://www.facebook.com/zynappse/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/facebook.svg",
        alt: "facebook",
        width: 50,
        style: {
          padding: "0 10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "https://www.youtube.com/channel/UCMB0M5r5vvQ1mowPyKJW8bQ",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/youtube.svg",
        alt: "youtube",
        width: 50,
        style: {
          padding: "0 10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "https://ph.linkedin.com/in/zynappse-corporation-535885a2",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/linkedin.svg",
        alt: "linkedin",
        width: 50,
        style: {
          padding: "0 10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ "./pages/src/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
var _jsxFileName = "/Users/marvieellainecalar/zynappse-website-react/pages/src/header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import {images} from './../../public/assets';



var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "logo-pos animateOnce animatedParent",
        style: {
          position: "fixed",
          zIndex: "1031"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-logo exact-logo animated growIn delay-5000",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/logo.png",
        alt: "",
        style: {
          width: "250px",
          paddingTop: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"], {
        inverse: true,
        collapseOnSelect: true,
        className: "navbar-fixed-top",
        style: {
          padding: "10px 0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Toggle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Collapse, {
        id: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"], {
        pullRight: true,
        className: "text-white animateOnce animatedParent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "HOME",
        className: "animated growIn delay-5000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "HOME"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "ABOUT",
        className: "animated growIn delay-5000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "ABOUT"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "PORTFOLIO",
        className: "animated growIn delay-5000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "PORTFOLIO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "SKILLS",
        className: "animated growIn delay-5000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "SKILLS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "CONTACT",
        className: "animated growIn delay-5000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "CONTACT")))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); // <img className="img-logo exact-logo animated growIn" src="http://www.zynappse.com/wp-content/uploads/2015/04/zynappse-op.png" alt="" style={{ width: "200px", paddingTop: "6px" }}/>




/***/ }),

/***/ "./pages/src/index.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/src/infographics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
var _jsxFileName = "/Users/marvieellainecalar/zynappse-website-react/pages/src/infographics.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Infographics =
/*#__PURE__*/
function (_Component) {
  _inherits(Infographics, _Component);

  function Infographics() {
    _classCallCheck(this, Infographics);

    return _possibleConstructorReturn(this, (Infographics.__proto__ || Object.getPrototypeOf(Infographics)).apply(this, arguments));
  }

  _createClass(Infographics, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container margin-section ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "text-center animated fadeInUpShort",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "What We Do")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/app-solution.svg",
        alt: "appsolution",
        height: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Mobile App"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft delay-250",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/web-solution.svg",
        alt: "websolution",
        height: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight delay-250",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Web and Ecommerce")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft ",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cloud2.svg",
        alt: "cloud",
        height: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Cloud and Database Management")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/ai.svg",
        alt: "artificial-intelligence",
        height: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Artificial Intelligence"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft ",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/ar.svg",
        alt: "augmented-reality",
        height: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Augmented Reality")));
    }
  }]);

  return Infographics;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Infographics);

/***/ }),

/***/ "./pages/src/introbanner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/marvieellainecalar/zynappse-website-react/pages/src/introbanner.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var IntroBanner =
/*#__PURE__*/
function (_Component) {
  _inherits(IntroBanner, _Component);

  function IntroBanner() {
    _classCallCheck(this, IntroBanner);

    return _possibleConstructorReturn(this, (IntroBanner.__proto__ || Object.getPrototypeOf(IntroBanner)).apply(this, arguments));
  }

  _createClass(IntroBanner, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slantedDiv",
        id: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "parallax",
        className: "slant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "parallax2",
        "data-parallaxify-range-x": "10",
        "data-parallaxify-range-y": "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "stars1",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white"
        },
        "data-parallaxify-range-x": "80",
        "data-parallaxify-range-y": "80",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "animated growIn delay-1000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "We."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "animated growIn delay-2000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "Build."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "animated growIn delay-3000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Beautiful."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "animated growIn delay-4000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Apps")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated growIn delay-5000",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/zynappse.svg",
        width: 350,
        style: {
          zIndex: "3"
        },
        alt: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }))))));
    }
  }]);

  return IntroBanner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (IntroBanner);

/***/ }),

/***/ "./pages/src/skills.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
var _jsxFileName = "/Users/marvieellainecalar/zynappse-website-react/pages/src/skills.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import {images} from './../../public/assets';



var Skills =
/*#__PURE__*/
function (_Component) {
  _inherits(Skills, _Component);

  function Skills() {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).apply(this, arguments));
  }

  _createClass(Skills, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container margin-section  animatedParent animateOnce",
        id: "skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center animated fadeInLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Technology Stack")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 4,
        className: "text-center   animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: 200,
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_animation.gif",
        alt: "android",
        className: "animated growIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "gradient animated growIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "99%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "animated growIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Android")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 4,
        className: "text-center  animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        height: 200,
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530848464/zynappse_website/apple_animation.gif",
        alt: "apple",
        className: "animated growIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "gradient animated growIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "99%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "animated growIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "IOS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 4,
        className: "text-center  animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: 200,
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847140/zynappse_website/web_animation.gif",
        alt: "web",
        className: "animated growIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "gradient animated growIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "99%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "animated growIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Web")));
    }
  }]);

  return Skills;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Skills);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next-ga":
/***/ (function(module, exports) {

module.exports = require("next-ga");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-ga":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-router-ga":
/***/ (function(module, exports) {

module.exports = require("react-router-ga");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map