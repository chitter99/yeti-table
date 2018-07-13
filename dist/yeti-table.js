(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/column.tsx":
/*!***********************************!*\
  !*** ./src/components/column.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = function (props) {
    return null;
};

/***/ }),

/***/ "./src/components/table.tsx":
/*!**********************************!*\
  !*** ./src/components/table.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var thead_1 = __webpack_require__(/*! ./thead */ "./src/components/thead.tsx");
var tbody_1 = __webpack_require__(/*! ./tbody */ "./src/components/tbody.tsx");
var Table = /** @class */function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.generateColumnDefinitions = function () {
        var def = [];
        this.props.children.forEach(function (child) {
            if (React.isValidElement(child)) {
                def.push(child.props);
            }
        });
        return def;
    };
    Table.prototype.generateConfig = function () {
        return {
            definition: this.generateColumnDefinitions(),
            styling: {
                row: this.props.rowClassName,
                trow: this.props.trowClassName,
                header: this.props.headerClassName,
                body: this.props.bodyClassName
            }
        };
    };
    Table.prototype.render = function () {
        var cof = this.generateConfig();
        return React.createElement("table", { className: this.props.className }, React.createElement(thead_1.THead, { config: cof }), React.createElement(tbody_1.TBody, { config: cof, data: this.props.data }));
    };
    return Table;
}(React.Component);
exports.Table = Table;

/***/ }),

/***/ "./src/components/tbody.tsx":
/*!**********************************!*\
  !*** ./src/components/tbody.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var trow_1 = __webpack_require__(/*! ./trow */ "./src/components/trow.tsx");
exports.TBody = function (props) {
    return React.createElement("tbody", { className: props.config.styling.body }, props.data.map(function (row, i) {
        return React.createElement(trow_1.TRow, { key: i, config: props.config, row: row });
    }));
};

/***/ }),

/***/ "./src/components/tcell.tsx":
/*!**********************************!*\
  !*** ./src/components/tcell.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
function fetch(obj, prop) {
    var i = prop.indexOf('.');
    if (i > -1) {
        return fetch(obj[prop.substring(0, i)], prop.substring(i + 1));
    }
    return obj[prop];
}
exports.TCell = function (props) {
    var value = props.row;
    if (props.definition.accessor) {
        value = fetch(value, props.definition.accessor);
    }
    if (props.definition.getValue) {
        value = props.definition.getValue(value);
    }
    return React.createElement("td", { className: props.definition.className }, props.definition.cell ? React.createElement(props.definition.cell, { value: value }) : value);
};

/***/ }),

/***/ "./src/components/thead.tsx":
/*!**********************************!*\
  !*** ./src/components/thead.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
exports.THead = function (props) {
    return React.createElement("thead", { className: props.config.styling.header }, React.createElement("tr", null, props.config.definition.map(function (def) {
        return React.createElement("th", { className: props.config.styling.trow }, def.header);
    })));
};

/***/ }),

/***/ "./src/components/trow.tsx":
/*!*********************************!*\
  !*** ./src/components/trow.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var tcell_1 = __webpack_require__(/*! ./tcell */ "./src/components/tcell.tsx");
exports.TRow = function (props) {
    return React.createElement("tr", { className: props.config.styling.row }, props.config.definition.map(function (cell, i) {
        return React.createElement(tcell_1.TCell, { key: i, definition: cell, row: props.row });
    }));
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var table_1 = __webpack_require__(/*! ./components/table */ "./src/components/table.tsx");
exports.Table = table_1.Table;
var column_1 = __webpack_require__(/*! ./components/column */ "./src/components/column.tsx");
exports.Column = column_1.Column;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=yeti-table.js.map