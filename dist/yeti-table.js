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
var sort_1 = __webpack_require__(/*! ../model/sort */ "./src/model/sort.ts");
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
var Table = /** @class */function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sortColumn: null,
            sortDirection: null
        };
        _this.sortColumn = _this.sortColumn.bind(_this);
        return _this;
    }
    Table.prototype.generateColumnDefinitions = function () {
        var defs = [];
        this.props.children.forEach(function (child) {
            if (React.isValidElement(child)) {
                var p_1 = child.props;
                var def_1 = {
                    header: p_1.header,
                    accessor: p_1.accessor,
                    getValue: function getValue(row) {
                        var v = row;
                        if (def_1.accessor) {
                            v = util_1.fetchAccessor(row, def_1.accessor);
                        }
                        if (p_1.getValue) {
                            v = p_1.getValue(v);
                        }
                        return v;
                    },
                    className: p_1.className,
                    cell: p_1.cell,
                    sort: p_1.sort,
                    sortable: p_1.sortable
                };
                defs.push(def_1);
            }
        });
        return defs;
    };
    Table.prototype.generateConfig = function () {
        return {
            definition: this.generateColumnDefinitions(),
            styling: {
                row: this.props.rowClassName,
                trow: this.props.trowClassName,
                header: this.props.headerClassName,
                body: this.props.bodyClassName
            },
            sortable: this.props.sortable ? this.props.sortable : false
        };
    };
    Table.prototype.sortColumn = function (column) {
        var direction = sort_1.SortDirection.ASC;
        if (this.state.sortColumn && this.state.sortColumn.header == column.header) {
            direction = this.state.sortDirection * -1;
        }
        this.setState({
            sortColumn: column,
            sortDirection: direction
        });
    };
    Table.prototype.render = function () {
        var cof = this.generateConfig();
        return React.createElement("table", { className: this.props.className }, React.createElement(thead_1.THead, { config: cof, sortColumn: this.sortColumn }), React.createElement(tbody_1.TBody, { config: cof, data: this.props.data, sortColumn: this.state.sortColumn, sortDirection: this.state.sortDirection }));
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
var sort_1 = __webpack_require__(/*! ../model/sort */ "./src/model/sort.ts");
exports.TBody = function (props) {
    var data = props.data;
    if (props.sortColumn) {
        var fn_1 = sort_1.SortAlgorithmEqual;
        if (props.sortColumn.sort) {
            fn_1 = props.sortColumn.sort;
        }
        data = data.sort(function (a, b) {
            return props.sortDirection * fn_1(props.sortColumn.getValue(a), props.sortColumn.getValue(b));
        });
    }
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
exports.TCell = function (props) {
    var value = props.definition.getValue(props.row);
    return React.createElement("td", { className: props.definition.className }, props.definition.cell ? React.createElement(props.definition.cell, { value: value, row: props.row }) : value);
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
    function _onClick(def) {
        if (def.sortable === null || def.sortable != false) {
            props.sortColumn(def);
        }
    }
    return React.createElement("thead", { className: props.config.styling.header }, React.createElement("tr", null, props.config.definition.map(function (def, i) {
        return React.createElement("th", { key: i, className: props.config.styling.trow, onClick: function onClick() {
                return _onClick(def);
            } }, def.header);
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

/***/ "./src/model/sort.ts":
/*!***************************!*\
  !*** ./src/model/sort.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["ASC"] = 1] = "ASC";
    SortDirection[SortDirection["DESC"] = -1] = "DESC";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
exports.SortAlgorithmEqual = function (r1, r2) {
    return r1 == r2 ? 0 : r1 < r2 ? 1 : -1;
};

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function fetchAccessor(obj, accessor) {
    var i = accessor.indexOf('.');
    if (!obj) {
        return null;
    }
    if (i > -1) {
        return fetchAccessor(obj[accessor.substring(0, i)], accessor.substring(i + 1));
    }
    return obj[accessor];
}
exports.fetchAccessor = fetchAccessor;

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