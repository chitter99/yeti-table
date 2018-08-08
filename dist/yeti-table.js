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
var tableBodyColumn_1 = __webpack_require__(/*! ./tableBodyColumn */ "./src/components/tableBodyColumn.tsx");
var Column = /** @class */function (_super) {
    __extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.bodyColumn = tableBodyColumn_1.TableBodyColumn;
    return Column;
}(React.Component);
exports.Column = Column;

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
var sort_1 = __webpack_require__(/*! ../model/sort */ "./src/model/sort.ts");
var util_1 = __webpack_require__(/*! ../util */ "./src/util.ts");
var tableRoot_1 = __webpack_require__(/*! ./tableRoot */ "./src/components/tableRoot.tsx");
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
                var def_1 = util_1.merge(p_1, {
                    type: child.type['bodyColumn'],
                    getValue: function getValue(row) {
                        var v = row;
                        if (def_1.accessor) {
                            v = util_1.fetchAccessor(row, def_1.accessor);
                        }
                        if (p_1.getValue) {
                            v = p_1.getValue(v);
                        }
                        return v;
                    }
                });
                defs.push(def_1);
            }
        });
        return defs;
    };
    Table.prototype.generateConfig = function () {
        return {
            styling: {
                row: this.props.rowClassName,
                trow: this.props.trowClassName,
                header: this.props.headerClassName,
                body: this.props.bodyClassName
            },
            sortable: this.props.sortable ? this.props.sortable : false
        };
    };
    Table.prototype.generateContext = function () {
        return {
            config: this.generateConfig(),
            definitions: this.generateColumnDefinitions(),
            sortCtx: {
                sortColumnFn: this.sortColumn,
                sortColumn: this.state.sortColumn,
                sortDirection: this.state.sortDirection
            },
            filterCtx: {
                filterFn: this.props.filterFn
            }
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
        var ctx = this.generateContext();
        return React.createElement(tableRoot_1.TableRoot, { context: ctx, data: this.props.data });
    };
    return Table;
}(React.Component);
exports.Table = Table;

/***/ }),

/***/ "./src/components/tableBody.tsx":
/*!**************************************!*\
  !*** ./src/components/tableBody.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var tableBodyRow_1 = __webpack_require__(/*! ./tableBodyRow */ "./src/components/tableBodyRow.tsx");
var sort_1 = __webpack_require__(/*! ../model/sort */ "./src/model/sort.ts");
exports.TableBody = function (props) {
    var data = props.data;
    if (props.context.filterCtx.filterFn) {
        var filteredData_1 = [];
        data.forEach(function (row) {
            if (props.context.filterCtx.filterFn(row)) {
                filteredData_1.push(row);
            }
        });
        data = filteredData_1;
    }
    if (props.context.sortCtx.sortColumn) {
        var fn_1 = sort_1.SortAlgorithmEqual;
        if (props.context.sortCtx.sortColumn.sort) {
            fn_1 = props.context.sortCtx.sortColumn.sort;
        }
        data = data.sort(function (a, b) {
            return props.context.sortCtx.sortDirection * fn_1(props.context.sortCtx.sortColumn.getValue(a), props.context.sortCtx.sortColumn.getValue(b));
        });
    }
    return React.createElement("tbody", { className: props.context.config.styling.body }, data.map(function (row, i) {
        return React.createElement(tableBodyRow_1.TableBodyRow, { context: props.context, row: row, key: i });
    }));
};

/***/ }),

/***/ "./src/components/tableBodyCell.tsx":
/*!******************************************!*\
  !*** ./src/components/tableBodyCell.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
exports.TableBodyCell = function (props) {
    var value = props.column.getValue(props.row);
    return props.column.cell ? React.createElement(props.column.cell, { value: value, row: props.row }) : React.createElement("span", null, value);
};

/***/ }),

/***/ "./src/components/tableBodyColumn.tsx":
/*!********************************************!*\
  !*** ./src/components/tableBodyColumn.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var tableBodyCell_1 = __webpack_require__(/*! ./tableBodyCell */ "./src/components/tableBodyCell.tsx");
exports.TableBodyColumn = function (props) {
    return React.createElement("td", { className: props.column.className }, React.createElement(tableBodyCell_1.TableBodyCell, { context: props.context, column: props.column, row: props.row }));
};

/***/ }),

/***/ "./src/components/tableBodyRow.tsx":
/*!*****************************************!*\
  !*** ./src/components/tableBodyRow.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
exports.TableBodyRow = function (props) {
    return React.createElement("tr", { className: props.context.config.styling.row }, props.context.definitions.map(function (col, i) {
        return React.createElement(col.type, { context: props.context, column: col, row: props.row, key: i });
    }));
};

/***/ }),

/***/ "./src/components/tableHeader.tsx":
/*!****************************************!*\
  !*** ./src/components/tableHeader.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
exports.TableHeader = function (props) {
    function _onClick(def) {
        if (def.sortable === null || def.sortable != false) {
            props.context.sortCtx.sortColumnFn(def);
        }
    }
    return React.createElement("thead", { className: props.context.config.styling.header }, React.createElement("tr", null, props.context.definitions.map(function (def, i) {
        return React.createElement("th", { key: i, className: props.context.config.styling.trow, onClick: function onClick() {
                return _onClick(def);
            } }, def.header);
    })));
};

/***/ }),

/***/ "./src/components/tableRoot.tsx":
/*!**************************************!*\
  !*** ./src/components/tableRoot.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var tableHeader_1 = __webpack_require__(/*! ./tableHeader */ "./src/components/tableHeader.tsx");
var tableBody_1 = __webpack_require__(/*! ./tableBody */ "./src/components/tableBody.tsx");
exports.TableRoot = function (props) {
    return React.createElement("table", null, React.createElement(tableHeader_1.TableHeader, { context: props.context }), React.createElement(tableBody_1.TableBody, { context: props.context, data: props.data }));
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


var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
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
function merge(a, b) {
    return __assign({}, a, b);
}
exports.merge = merge;

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