!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var n="object"==typeof exports?t(require("react")):t(e.react);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ASC=1]="ASC",e[e.DESC=-1]="DESC"}(t.SortDirection||(t.SortDirection={})),t.SortAlgorithmEqual=function(e,t){return e==t?0:e<t?1:-1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(3);t.TableBodyColumn=function(e){return o.createElement("td",{className:e.context.config.styling.tableBodyColumn},o.createElement(r.TableBodyCell,{context:e.context,column:e.column,row:e.row}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.TableBodyCell=function(e){var t=e.column.getValue(e.row);return e.column.cell?o.createElement(e.column.cell,{value:t,row:e.row}):o.createElement("span",{className:e.context.config.styling.tableBodyCell},t)}},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.TableHeaderCell=function(e){return o.createElement("a",{className:e.context.config.styling.tableHeaderCell},e.column.header)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(11);t.TableHeaderColumn=function(e){return o.createElement("th",{className:e.context.config.styling.tableHeaderColumn,onClick:function(){return e.context.sortCtx.sortColumnFn(e.column)}},o.createElement(r.TableHeaderCell,{context:e.context,column:e.column}))}},function(e,t,n){"use strict";var o=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(2),l=n(12),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.bodyColumn=c.TableBodyColumn,t.headerColumn=l.TableHeaderColumn,t}(r.Component);t.Column=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.TableBodyRow=function(e){return o.createElement("tr",{className:e.context.config.styling.tableBodyRow},e.context.definitions.map(function(t,n){return o.createElement(t.type,{context:e.context,column:t,row:e.row,key:n})}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(14),c=n(1);t.TableBody=function(e){var t=e.data;if(e.context.filterCtx.filterFn){var n=[];t.forEach(function(t){e.context.filterCtx.filterFn(t)&&n.push(t)}),t=n}if(e.context.sortCtx.sortColumn){var l=c.SortAlgorithmEqual;e.context.sortCtx.sortColumn.sort&&(l=e.context.sortCtx.sortColumn.sort),t=t.sort(function(t,n){return e.context.sortCtx.sortDirection*l(e.context.sortCtx.sortColumn.getValue(t),e.context.sortCtx.sortColumn.getValue(n))})}return o.createElement("tbody",{className:e.context.config.styling.tableBody},t.map(function(t,n){return o.createElement(r.TableBodyRow,{context:e.context,row:t,key:n})}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.TableHeaderRow=function(e){return o.createElement("tr",{className:e.context.config.styling.tableHeaderRow},e.context.definitions.map(function(t,n){return o.createElement(t.typeHeader,{context:e.context,column:t,key:n})}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(16);t.TableHeader=function(e){return o.createElement("thead",{className:e.context.config.styling.tableHeader},o.createElement(r.TableHeaderRow,{context:e.context}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(17),c=n(15);t.TableRoot=function(e){return o.createElement("table",{className:e.context.config.styling.tableRoot},o.createElement(r.TableHeader,{context:e.context}),o.createElement(c.TableBody,{context:e.context,data:e.data}))}},function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAccessor=function e(t,n){var o=n.indexOf(".");return t?o>-1?e(t[n.substring(0,o)],n.substring(o+1)):t[n]:null},t.merge=function(e,t){return o({},e,t)}},function(e,t,n){"use strict";var o=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(1),l=n(19),u=n(18),a=function(e){function t(t){var n=e.call(this,t)||this;return n.state={sortColumn:null,sortDirection:null},n.sortColumn=n.sortColumn.bind(n),n}return o(t,e),t.prototype.generateColumnDefinitions=function(){var e=[];return this.props.children.forEach(function(t){if(r.isValidElement(t)){var n=t.props,o=l.merge(n,{type:t.type.bodyColumn,typeHeader:t.type.headerColumn,getValue:function(e){var t=e;return o.accessor&&(t=l.fetchAccessor(e,o.accessor)),n.getValue&&(t=n.getValue(t)),t}});e.push(o)}}),e},t.prototype.generateConfig=function(){return{styling:this.props.styling||{},sortable:!!this.props.sortable&&this.props.sortable}},t.prototype.generateContext=function(){return{config:this.generateConfig(),definitions:this.generateColumnDefinitions(),sortCtx:{sortColumnFn:this.sortColumn,sortColumn:this.state.sortColumn,sortDirection:this.state.sortDirection},filterCtx:{filterFn:this.props.filterFn}}},t.prototype.sortColumn=function(e){var t=c.SortDirection.ASC;this.state.sortColumn&&this.state.sortColumn.header==e.header&&(t=-1*this.state.sortDirection),this.setState({sortColumn:e,sortDirection:t})},t.prototype.render=function(){var e=this.generateContext();return r.createElement(u.TableRoot,{context:e,data:this.props.data})},t}(r.Component);t.Table=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3);t.TableBodyCell=o.TableBodyCell;var r=n(2);t.TableBodyColumn=r.TableBodyColumn;var c=n(20);t.Table=c.Table;var l=n(13);t.Column=l.Column}])});