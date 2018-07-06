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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
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
        id: "contact"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container  animatedParent animateOnce slant-contact"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center animated fadeInLeft"
      }, "Contact Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ButtonToolbar"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        onClick: this.handleClick,
        className: "text-center animated fadeInRight"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/pointer.svg",
        alt: "location",
        width: 30
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        }
      }, "4F RFM Corporate Center, Pioneer cor Sheridan Sts., Mandaluyong City")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Overlay"], {
        show: this.state.show,
        target: this.state.target,
        placement: "top",
        container: this,
        containerPadding: 20
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Popover"], {
        id: "popover-contained",
        title: "Popover bottom",
        style: {
          transform: " skewY(4deg)"
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-center animated fadeInRight delay-250"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:576-3727"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/phone.svg",
        alt: "contact-no",
        width: 27
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:576-3727",
        style: {
          color: "white"
        }
      }, "+63. 2. 576-3727"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-center animated fadeInRight delay-500"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "mailto:hi@zynappse.com?Subject=Hello%20",
        target: "_top"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/mail.svg",
        alt: "email",
        width: 27
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "mailto:hi@zynappse.com?Subject=Hello%20",
        target: "_top"
      }, "hi@zynappse.com"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        className: "animated fadeInRight delay-750"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "animated fadeInRight delay-1000",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "https://www.facebook.com/zynappse/",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/facebook.svg",
        alt: "facebook",
        width: 50,
        style: {
          padding: "0 10px"
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "https://www.youtube.com/channel/UCMB0M5r5vvQ1mowPyKJW8bQ",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/youtube.svg",
        alt: "youtube",
        width: 50,
        style: {
          padding: "0 10px"
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "https://ph.linkedin.com/in/zynappse-corporation-535885a2",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/linkedin.svg",
        alt: "linkedin",
        width: 50,
        style: {
          padding: "0 10px"
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      }));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

/******/ });