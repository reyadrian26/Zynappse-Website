webpackHotUpdate(5,{

/***/ "./node_modules/next-ga/dist/analytics.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=init,exports.pageview=pageview,exports.event=event,exports.exception=exception;var _reactGa=__webpack_require__("./node_modules/react-ga/dist/react-ga.js"),_reactGa2=_interopRequireDefault(_reactGa);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var IS_BROWSER="undefined"!=typeof window;function init(a){IS_BROWSER&&!window.GA_INITIALIZED&&a&&_reactGa2.default.initialize(a)}function pageview(){_reactGa2.default.set({page:window.location.pathname}),_reactGa2.default.pageview(window.location.pathname)}function event(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"";a&&b&&_reactGa2.default.event({category:a,action:b})}function exception(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];a&&_reactGa2.default.exception({description:a,fatal:b})}

/***/ }),

/***/ "./node_modules/next-ga/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=__webpack_require__("./node_modules/react/index.js"),_analytics=__webpack_require__("./node_modules/next-ga/dist/analytics.js"),analytics=_interopRequireWildcard(_analytics);function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function isLocal(){return"localhost"===location.hostname}function isDev(){return"production"!=="development"}exports.default=function(a,b){var c=b.router;return function(b){var d=function(d){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _inherits(e,d),_createClass(e,[{key:"componentDidMount",value:function d(){var b=isLocal()||isDev();b&&(analytics.init(a),analytics.pageview(),c&&c.events&&"function"==typeof c.events.on&&c.events.on("routeChangeComplete",function(){analytics.pageview()}))}},{key:"render",value:function a(){return(0,_react.createElement)(b,_extends({},this.props,{analytics:analytics}))}}]),e}(_react.Component);return b.getInitialProps&&(d.getInitialProps=b.getInitialProps),d}};

/***/ }),

/***/ "./node_modules/next-ga/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next-ga/dist/index.js");


/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/react-ga/dist/react-ga.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("./node_modules/react/index.js"), __webpack_require__("./node_modules/prop-types/index.js"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types")) : factory(root["react"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warn;
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().

function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testModeAPI = exports.OutboundLink = exports.plugin = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.initialize = initialize;
exports.ga = ga;
exports.set = set;
exports.send = send;
exports.pageview = pageview;
exports.modalview = modalview;
exports.timing = timing;
exports.event = event;
exports.exception = exception;
exports.outboundLink = outboundLink;

var _format2 = __webpack_require__(3);

var _format3 = _interopRequireDefault(_format2);

var _removeLeadingSlash = __webpack_require__(6);

var _removeLeadingSlash2 = _interopRequireDefault(_removeLeadingSlash);

var _trim = __webpack_require__(1);

var _trim2 = _interopRequireDefault(_trim);

var _loadGA = __webpack_require__(7);

var _loadGA2 = _interopRequireDefault(_loadGA);

var _warn = __webpack_require__(0);

var _warn2 = _interopRequireDefault(_warn);

var _log = __webpack_require__(8);

var _log2 = _interopRequireDefault(_log);

var _testModeAPI = __webpack_require__(9);

var _testModeAPI2 = _interopRequireDefault(_testModeAPI);

var _OutboundLink = __webpack_require__(10);

var _OutboundLink2 = _interopRequireDefault(_OutboundLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * React Google Analytics Module
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * @package react-ga
                                                                                                                                                                                                     * @author  Adam Lofting <adam@mozillafoundation.org>
                                                                                                                                                                                                     *          Atul Varma <atul@mozillafoundation.org>
                                                                                                                                                                                                     */

/**
 * Utilities
 */


var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _testModeAPI2.default.ga.apply(_testModeAPI2.default, arguments);
  if (!window.ga) return (0, _warn2.default)('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return (0, _format3.default)(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];
  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      (0, _warn2.default)('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(undefined, args);
    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(undefined, _toConsumableArray([name + '.' + command].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    (0, _warn2.default)('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (typeof window === 'undefined') {
      return false;
    }

    (0, _loadGA2.default)(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
        (0, _warn2.default)('All configs must be an object');
        return;
      }
      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }
  return true;
}

/**
 * ga:
 * Returns the original GA object.
 */
function ga() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(undefined, args);
    if (_debug) {
      (0, _log2.default)('called ga(\'arguments\');');
      (0, _log2.default)('with arguments: ' + JSON.stringify(args));
    }
  }

  return window.ga;
}

/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    (0, _warn2.default)('`fieldsObject` is required in .set()');
    return;
  }

  if ((typeof fieldsObject === 'undefined' ? 'undefined' : _typeof(fieldsObject)) !== 'object') {
    (0, _warn2.default)('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    (0, _warn2.default)('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    (0, _log2.default)('called ga(\'set\', fieldsObject);');
    (0, _log2.default)('with fieldsObject: ' + JSON.stringify(fieldsObject));
  }
}

/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);
  if (_debug) {
    (0, _log2.default)('called ga(\'send\', fieldObject);');
    (0, _log2.default)('with fieldObject: ' + JSON.stringify(fieldObject));
    (0, _log2.default)('with trackers: ' + JSON.stringify(trackerNames));
  }
}

/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */
function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    (0, _warn2.default)('path is required in .pageview()');
    return;
  }

  var path = (0, _trim2.default)(rawPath);
  if (path === '') {
    (0, _warn2.default)('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};
  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _extends({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      (0, _log2.default)('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';
      if (title) {
        extraLog = ' and title: ' + title;
      }
      (0, _log2.default)('with path: ' + path + extraLog);
    }
  }
}

/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    (0, _warn2.default)('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = (0, _removeLeadingSlash2.default)((0, _trim2.default)(rawModalName));

  if (modalName === '') {
    (0, _warn2.default)('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = '/modal/' + modalName;
    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      (0, _log2.default)('called ga(\'send\', \'pageview\', path);');
      (0, _log2.default)('with path: ' + path);
    }
  }
}

/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments[1];

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      (0, _warn2.default)('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    }

    // Required Fields
    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}

/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var trackerNames = arguments[1];

  var category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ['category', 'action', 'label', 'value', 'nonInteraction', 'transport']);

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      (0, _warn2.default)('args.category AND args.action are required in event()');
      return;
    }

    // Required Fields
    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    };

    // Optional Fields
    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        (0, _warn2.default)('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        (0, _warn2.default)('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        (0, _warn2.default)('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          (0, _warn2.default)('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });

    // Send to GA
    send(fieldObject, trackerNames);
  }
}

/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    };

    // Optional Fields
    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        (0, _warn2.default)('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    }

    // Send to GA
    send(fieldObject, trackerNames);
  }
}

var plugin = exports.plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   */
  require: function require(rawName, options) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        (0, _warn2.default)('`name` is required in .require()');
        return;
      }

      var name = (0, _trim2.default)(rawName);
      if (name === '') {
        (0, _warn2.default)('`name` cannot be an empty string in .require()');
        return;
      }

      // Optional Fields
      if (options) {
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
          (0, _warn2.default)('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          (0, _warn2.default)('Empty `options` given to .require()');
        }

        ga('require', name, options);

        if (_debug) {
          (0, _log2.default)('called ga(\'require\', \'' + name + '\', ' + JSON.stringify(options));
        }
      } else {
        ga('require', name);

        if (_debug) {
          (0, _log2.default)('called ga(\'require\', \'' + name + '\');');
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload = void 0;
    var actionType = void 0;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        (0, _warn2.default)('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        (0, _warn2.default)('Expected `action` arg to be a String.');
      } else {
        var command = pluginName + ':' + action;
        payload = payload || null;
        if (actionType && payload) {
          ga(command, actionType, payload);
          if (_debug) {
            (0, _log2.default)('called ga(\'' + command + '\');');
            (0, _log2.default)('actionType: "' + actionType + '" with payload: ' + JSON.stringify(payload));
          }
        } else if (payload) {
          ga(command, payload);
          if (_debug) {
            (0, _log2.default)('called ga(\'' + command + '\');');
            (0, _log2.default)('with payload: ' + JSON.stringify(payload));
          }
        } else {
          ga(command);
          if (_debug) {
            (0, _log2.default)('called ga(\'' + command + '\');');
          }
        }
      }
    }
  }
};

/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */
function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    (0, _warn2.default)('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      (0, _warn2.default)('args.label is required in outboundLink()');
      return;
    }

    // Required Fields
    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };

    var safetyCallbackCalled = false;
    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;

      hitCallback();
    };

    // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data

    // register safety net timeout:
    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);
      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA;

    // Send to GA
    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}

_OutboundLink2.default.origTrackLink = _OutboundLink2.default.trackLink;
_OutboundLink2.default.trackLink = outboundLink;
var OutboundLink = exports.OutboundLink = _OutboundLink2.default;
var testModeAPI = exports.testModeAPI = _testModeAPI2.default;

exports.default = {
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  OutboundLink: OutboundLink,
  testModeAPI: _testModeAPI2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

var _mightBeEmail = __webpack_require__(4);

var _mightBeEmail2 = _interopRequireDefault(_mightBeEmail);

var _toTitleCase = __webpack_require__(5);

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _warn = __webpack_require__(0);

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redacted = 'REDACTED (Potential Email Address)';

function format(s, titleCase) {
  if ((0, _mightBeEmail2.default)(s)) {
    (0, _warn2.default)('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return (0, _toTitleCase2.default)(s);
  }

  return s;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mightBeEmail;
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return (/[^@]+@[^@]+/.test(s)
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toTitleCase;

var _trim = __webpack_require__(1);

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i; /**
                                                                                                * To Title Case 2.1 - http://individed.com/code/to-title-case/
                                                                                                * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
                                                                                                * https://github.com/gouch/to-title-case
                                                                                                */

function toTitleCase(string) {
  return (0, _trim2.default)(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeLeadingSlash;
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/
  /* eslint-disable */
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', options && options.gaAddress ? options.gaAddress : 'https://www.google-analytics.com/analytics.js', 'ga');
  /* eslint-enable */
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var gaCalls = exports.gaCalls = [];

exports.default = {
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push([].concat(args));
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warn = __webpack_require__(0);

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink = function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OutboundLink.__proto__ || Object.getPrototypeOf(OutboundLink)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick;

      var eventMeta = { label: eventLabel };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        });
      } else {
        OutboundLink.trackLink(eventMeta, function () {});
      }

      if (onClick) {
        onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OutboundLink, [{
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props, {
        href: this.props.to,
        onClick: this.handleClick
      });
      delete props.eventLabel;
      return _react2.default.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(_react.Component);

OutboundLink.propTypes = {
  eventLabel: _propTypes2.default.string.isRequired,
  target: _propTypes2.default.string,
  to: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
OutboundLink.defaultProps = {
  target: null,
  to: null,
  onClick: null
};

OutboundLink.trackLink = function () {
  (0, _warn2.default)('ga tracking not enabled');
};

exports.default = OutboundLink;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_animations_css__ = __webpack_require__("./pages/src/animations.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_animations_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_animations_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App_css__ = __webpack_require__("./pages/src/App.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_index_css__ = __webpack_require__("./pages/src/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cards_css__ = __webpack_require__("./pages/src/cards.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cards_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_cards_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_ga__ = __webpack_require__("./node_modules/next-ga/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_ga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_header_js__ = __webpack_require__("./pages/src/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_infographics_js__ = __webpack_require__("./pages/src/infographics.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_introbanner_js__ = __webpack_require__("./pages/src/introbanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_skills_js__ = __webpack_require__("./pages/src/skills.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_about_js__ = __webpack_require__("./pages/src/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_contact_js__ = __webpack_require__("./pages/src/contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_router_ga__ = __webpack_require__("./node_modules/react-router-ga/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_router_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_router_ga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_ga__ = __webpack_require__("./node_modules/react-ga/dist/react-ga.js");
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["i" /* Row */], {
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


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_6_next_ga___default()("UA-000000-01", __WEBPACK_IMPORTED_MODULE_5_next_router___default.a)(App)); // <div className="cd-3d-right-side"></div>
// <div className="cd-3d-left-side"></div>
// <div className="cd-3d-bottom-side"></div>
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.7ae1dc0ba3bd13ec1cd4.hot-update.js.map