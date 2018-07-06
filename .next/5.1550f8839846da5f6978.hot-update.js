webpackHotUpdate(5,{

/***/ "./pages/src/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/edmharfabros/WEB PROJECTS/zynappse-website-react/pages/src/contact.js";

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["i" /* Row */], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* Col */], {
        md: 12,
        className: "animatedParent animateOnce",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* ButtonToolbar */], {
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
      }, "4F RFM Corporate Center, Pioneer cor Sheridan Sts., Mandaluyong City")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["g" /* Overlay */], {
        show: this.state.show,
        target: this.state.target,
        placement: "top",
        container: this,
        containerPadding: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["h" /* Popover */], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* Col */], {
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/src/contact")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.1550f8839846da5f6978.hot-update.js.map