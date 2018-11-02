(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handlebars/runtime"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["handlebars.runtime", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["Gridoo"] = factory(require("handlebars/runtime"), require("jQuery"));
	else
		root["Gridoo"] = factory(root["Handlebars"], root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************************************************************************************************************!*\
  !*** external {"root":"Handlebars","amd":"handlebars.runtime","commonjs2":"handlebars/runtime","commonjs":"handlebars/runtime"} ***!
  \**********************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/*!*************************************!*\
  !*** ./src/hbs/helpers/Disabled.ts ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var disabled = function (bool) {
    return bool ? "disabled" : "";
};
exports.default = disabled;


/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./src/hbs/helpers/Add.ts ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Add = function (left, right) {
    return (left + right).toString();
};
exports.default = Add;


/***/ }),
/* 3 */
/*!************************************!*\
  !*** ./src/js/pagination/Pager.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pager = /** @class */ (function () {
    function Pager() {
    }
    Object.defineProperty(Pager, "PaginationData", {
        get: function () {
            return Pager.paginationData;
        },
        enumerable: true,
        configurable: true
    });
    Pager.CalculatePaginationData = function (paginationInput) {
        var paginationData = {};
        paginationData.pageIndex = paginationInput.pageIndex;
        paginationData.pageSize = paginationInput.pageSize;
        paginationData.pageSizes = paginationInput.pageSizes;
        paginationData.totalCount = paginationInput.totalCount;
        paginationData.noOfPages = Math.ceil(paginationInput.totalCount / paginationInput.pageSize);
        var minNum = ((paginationInput.pageIndex - 1) * paginationInput.pageSize);
        var lowerLimitOffset = paginationInput.pageSize > paginationInput.totalCount ?
            paginationInput.totalCount :
            paginationInput.pageSize;
        paginationData.range = {
            min: minNum + 1,
            max: minNum + lowerLimitOffset,
        };
        paginationData.firstPageLinkDisabled = paginationData.noOfPages === 1 || paginationData.pageIndex === 1;
        paginationData.lastPageLinkDisabled = paginationData.noOfPages === 1
            || (paginationData.pageIndex === paginationData.noOfPages);
        paginationData.prevPageLinkDisabled = paginationData.pageIndex === 1
            || (paginationData.pageIndex - 1) <= 0;
        paginationData.nextPageLinkDisabled = paginationData.noOfPages === paginationData.pageIndex
            || (paginationData.pageIndex + 1) >= paginationData.noOfPages;
        Pager.paginationData = paginationData;
    };
    return Pager;
}());
exports.Pager = Pager;


/***/ }),
/* 4 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/*!***********************************!*\
  !*** ./src/js/util/ColumnUtil.ts ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommonUtil = /** @class */ (function () {
    function CommonUtil() {
    }
    CommonUtil.GetColumnObject = function (columnId, columns) {
        if (columnId == null || columns == null) {
            return null;
        }
        var retCol;
        columns.forEach(function (col) {
            if (col.id === columnId) {
                retCol = col;
                return;
            }
        });
        return retCol;
    };
    CommonUtil.SetOrder = function (columnId, orderBy, columns) {
        if (columnId == null || columns == null) {
            return null;
        }
        var retCol;
        columns.forEach(function (col) {
            if (col.id === columnId) {
                col.orderBy = orderBy;
                retCol = col;
                return;
            }
        });
        return retCol;
    };
    return CommonUtil;
}());
exports.CommonUtil = CommonUtil;


/***/ }),
/* 6 */
/*!*********************************************!*\
  !*** ./src/js/models/GridOrderDirection.ts ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridOrderDirection;
(function (GridOrderDirection) {
    GridOrderDirection["None"] = "None";
    GridOrderDirection["Asc"] = "Asc";
    GridOrderDirection["Desc"] = "Desc";
})(GridOrderDirection = exports.GridOrderDirection || (exports.GridOrderDirection = {}));


/***/ }),
/* 7 */
/*!**************************************!*\
  !*** ./src/hbs/grid-details-row.hbs ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <tr>\r\n                    <td class=\"gui rv-parent\" \r\n                        valign=\"top\" \r\n                        data-filter-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" \r\n                        data-filter-key=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" \r\n                        data-filter-value=\""
    + alias4(((helper = (helper = helpers.actualValue || (depth0 != null ? depth0.actualValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actualValue","hash":{},"data":data}) : helper)))
    + "\">\r\n                        <span>"
    + alias4(((helper = (helper = helpers.columnName || (depth0 != null ? depth0.columnName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnName","hash":{},"data":data}) : helper)))
    + "</span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.filterable : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </td>\r\n                    <td>"
    + ((stack1 = ((helper = (helper = helpers.columnValue || (depth0 != null ? depth0.columnValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnValue","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\r\n                </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                        <span class=\"gui m-l-5 rv-child gui-caption\" >\r\n                            <i class=\"gui gui-icon gui-icon-add hover m-l-5 cursor-pointer addFilter\"></i>\r\n                            <i class=\"gui gui-icon gui-icon-minus hover m-l-5 cursor-pointer removeFilter\"></i>\r\n                        </span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr id=\"details-row-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"gui gui-hidden detailsRow\" aria-live=\"polite\">\r\n    <td colspan=\""
    + alias4(((helper = (helper = helpers.length || (depth0 != null ? depth0.length : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"length","hash":{},"data":data}) : helper)))
    + "\">\r\n        <table class=\"gui very compact selectable celled table detailsTable m-l-37 p-5\" \r\n               style=\"width: auto;\" >\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.mainRowColArray : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </td>\r\n</tr>";
},"useData":true});

/***/ }),
/* 8 */
/*!*********************************!*\
  !*** ./src/hbs/grid-footer.hbs ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.escapeExpression;

  return "            <option "
    + alias1(__default(__webpack_require__(/*! ./src/hbs/helpers/Selected.ts */ 23)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? depths[1].paginationData : depths[1])) != null ? stack1.pageSize : stack1),depth0,{"name":"Selected","hash":{},"data":data}))
    + ">"
    + alias1(container.lambda(depth0, depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div role=\"navigation\" class=\"gui flex jc-sb gui-subheading-1 text-left m-0\">\r\n    <div class=\"gui m-r-10\">\r\n        <button class=\"gui firstLink\" \r\n                aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.firstPageLinkDisabled : stack1), depth0))
    + "\" \r\n                "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.firstPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                aria-label=\"Go to the first page\" \r\n                title=\"Go to the first page\" \r\n                data-page=\"1\">\r\n            <i class=\"gui-icon gui-icon-previous\"></i>\r\n        </button>\r\n        <button class=\"gui prevLink\" \r\n                aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.prevPageLinkDisabled : stack1), depth0))
    + "\" \r\n                "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.prevPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                aria-label=\"Go to the previous page\" \r\n                title=\"Go to the previous page\" \r\n                data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 9)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"-",1,{"name":"math","hash":{},"data":data}))
    + "\">\r\n            <i class=\"gui-icon gui-icon-chevron-left\"></i>\r\n            Prev\r\n        </button>\r\n    </div>\r\n    <div class=\"gui pager-input-container medium h-30 input flex jc-sb m-r-10\">\r\n        <div class=\"gui m-r-5\"> Page </div>\r\n        <input  class=\"gui pager-input h-30 w-50 m-r-5\" \r\n                aria-label=\"Go to Page "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" \r\n                title=\"Go to Page "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" \r\n                value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" \r\n                type=\"text\" \r\n                placeholder=\"Page Number ...\">\r\n        <div class=\"no-of-pages-scan\" \r\n             data-number-of-pages=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "\">\r\n             of "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"gui m-r-10\">\r\n        <button class=\"gui nextLink\" \r\n                aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.nextPageLinkDisabled : stack1), depth0))
    + "\" \r\n                "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.nextPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                aria-label=\"Go to the next page\" \r\n                title=\"Go to the next page\" \r\n                data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 9)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"+",1,{"name":"math","hash":{},"data":data}))
    + "\" >\r\n            Next\r\n            <i class=\"gui-icon gui-icon-chevron-right\"></i>\r\n        </button>\r\n        <button class=\"gui lastLink\" \r\n                aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.lastPageLinkDisabled : stack1), depth0))
    + "\" \r\n                "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.lastPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                aria-label=\"Go to the last page\" \r\n                title=\"Go to the last page\" \r\n                data-page=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOFpages : stack1), depth0))
    + "\">\r\n            <i class=\"gui-icon gui-icon-next\"></i>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"gui gui-subheading-1 flex jc-sb text-right m-0\">\r\n    <label  for=\"page-size-selector\" \r\n            class=\"gui m-r-10\">\r\n            Rows Per Page\r\n    </label>\r\n    <select id=\"page-size-selector\" \r\n            class=\"gui pageSizeSelector m-r-10 h-30\">\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageSizes : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n    <div class=\"gui m-r-10\">\r\n        "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.min : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.max : stack1), depth0))
    + " of "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.totalCount : stack1), depth0))
    + " items\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

/***/ }),
/* 9 */
/*!*********************************!*\
  !*** ./src/hbs/helpers/math.ts ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math = function (lvalue, operator, rvalue, options) {
    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue,
    }[operator];
};
exports.default = math;


/***/ }),
/* 10 */
/*!***********************************!*\
  !*** ./src/hbs/grid-main-row.hbs ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<tr aria-rowindex=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(alias1,(depth0 != null ? depth0.rowIndex : depth0),1,{"name":"Add","hash":{},"data":data}))
    + "\" class=\"mainRow "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/BoolAttribute.ts */ 11)).call(alias1,(depth0 != null ? depth0.isAllSelected : depth0),"active",{"name":"BoolAttribute","hash":{},"data":data}))
    + "\" data-pk-attr=\""
    + alias2(alias3((depth0 != null ? depth0.keyColumn : depth0), depth0))
    + "\" role=\"row\" >\r\n    <td class=\"expansionArrows\" \r\n        class=\"gui flex jc-sb\"\r\n        aria-colindex=\"1\"\r\n        role=\"gridcell\">\r\n        <i aria-label=\"Press enter to expand the details Row\" \r\n           title=\"Expand the details Row\" \r\n           aria-controls=\"details-row-"
    + alias2(alias3((data && data.index), depth0))
    + "\" \r\n           class=\"gui gui-icon gui-icon-chevron-down expandDetailsRowIcon cursor-pointer\" \r\n           tabindex=\"0\" \r\n           aria-hidden=\"false\"></i>\r\n        <i aria-label=\"Press enter to collapse the details Row\" \r\n           title=\"Collapse the details Row\" \r\n           aria-controls=\"details-row-"
    + alias2(alias3((data && data.index), depth0))
    + "\" \r\n           class=\"gui gui-icon gui-icon-chevron-up CollapseDetailsRowIcon cursor-pointer gui-hidden\" \r\n           tabindex=\"0\" \r\n           aria-hidden=\"true\"></i>\r\n    </td>\r\n    <td role=\"gridcell\"\r\n        aria-colindex=\"2\" >\r\n        <input aria-label=\"Checkbox to select the row with Id "
    + alias2(alias3((depth0 != null ? depth0.keyColumn : depth0), depth0))
    + "\" \r\n            type=\"checkbox\"\r\n            "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/BoolAttribute.ts */ 11)).call(alias1,(depth0 != null ? depth0.isAllSelected : depth0),"checked",{"name":"BoolAttribute","hash":{},"data":data}))
    + "\r\n            value=\""
    + alias2(alias3((depth0 != null ? depth0.keyColumn : depth0), depth0))
    + "\" \r\n            class=\"select-key-checkbox cursor-pointer\">\r\n    </td>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.mainRowColArray : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-details-row.hbs */ 7),depth0,{"name":"grid-details-row","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <td title=\""
    + alias2(alias1((depth0 != null ? depth0.actualValue : depth0), depth0))
    + "\"\r\n            aria-colindex=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),3,{"name":"Add","hash":{},"data":data}))
    + "\"\r\n            class=\"body-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + ((stack1 = alias1((depth0 != null ? depth0.columnValue : depth0), depth0)) != null ? stack1 : "")
    + "</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mainRowArray : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

/***/ }),
/* 11 */
/*!******************************************!*\
  !*** ./src/hbs/helpers/BoolAttribute.ts ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var boolAttribute = function (bool, str) {
    return bool ? str : "";
};
exports.default = boolAttribute;


/***/ }),
/* 12 */
/*!*****************************!*\
  !*** ./src/js/main/Grid.ts ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(/*! jquery */ 4);
var ConfigStore_1 = __webpack_require__(/*! ../config/ConfigStore */ 13);
var SelectEventHandler_1 = __webpack_require__(/*! ../eventHandlers/SelectEventHandler */ 14);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 3);
var DetailsRowHandler_1 = __webpack_require__(/*! ./../eventHandlers/DetailsRowHandler */ 15);
var FilterClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/FilterClickHandler */ 16);
var HandlerNames_1 = __webpack_require__(/*! ./../eventHandlers/HandlerNames */ 18);
var HeaderClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/HeaderClickHandler */ 19);
var PageSearchClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/PageSearchClickHandler */ 20);
var ScrollHandler_1 = __webpack_require__(/*! ./../eventHandlers/ScrollHandler */ 21);
var GridTemplateService_1 = __webpack_require__(/*! ./../services/GridTemplateService */ 22);
var Grid = /** @class */ (function () {
    function Grid(options) {
        var _this = this;
        this.bindData = function (data, paginationInput) {
            setTimeout(function () {
                Pager_1.Pager.CalculatePaginationData(paginationInput);
                var pageData = Pager_1.Pager.paginationData;
                _this.internalRender(data, pageData);
            }, 1);
        };
        this.reRender = function () {
            setTimeout(function () {
                var pageData = Pager_1.Pager.paginationData;
                _this.internalRender(_this.gridTemplateService.Data, pageData);
            }, 1);
        };
        this.setColConfig = function (colConfig) {
            _this.configStore.Options.columns = colConfig;
        };
        // TODO: Update Row Index
        this.updateRows = function (rows) {
            if (rows === undefined || !rows.length) {
                return;
            }
            _this.gridTemplateService.updateRows(rows);
            var container = $(_this.configStore.Options.containerElement);
            var key = _this.configStore.Options.keyColumn;
            var _loop_1 = function (row) {
                var rowHtml = _this.gridTemplateService.getTemplateForOneRow(row);
                var rowJq = $(rowHtml);
                container.find(".mainRow").each(function (i, mR) {
                    var mrJq = $(mR);
                    var pkId = mrJq.attr("data-pk-attr");
                    if (pkId === row[key]) {
                        mrJq.html(rowJq[0].innerHTML);
                        mrJq.next().html(rowJq[2].innerHTML);
                        return;
                    }
                });
            };
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                _loop_1(row);
            }
        };
        // public bindManageColums = (manageColContainer?: HTMLElement, force?: boolean): void => {
        //     if (this.manageColHandler !== undefined && !force ) {
        //         return;
        //     }
        //     const html = this.gridTemplateService.GetManageColumnsHtml();
        //     const element = jQuery(manageColContainer
        //                     || this.configStore.Options.manageColSettingsContainer
        //                     || this.configStore.Options.containerElement);
        //     this.toggleHandler = new ToggleColumnHandler(this.configStore,
        //                                                  jQuery(this.configStore.Options.containerElement));
        //     this.configStore.options.manageColSettingsContainer = element[0];
        //     this.manageColHandler = new ColSettingsHandler<T>(jQuery(element), this.configStore, this.toggleHandler);
        //     element.find(".col-settings-container").html(html);
        //     this.manageColHandler.RegisterDomHandler();
        //     jQuery(window).resize(this.documentResizeHandlerForCs);
        //     jQuery(document).click(this.documentClickHandlerForCs);
        // }
        // public applyColumnConfig = (columns: IColumn[]) => {
        //     this.toggleHandler.applyColumnConfig(columns);
        //     const html = this.gridTemplateService.GetManageColumnsHtml();
        //     const element = jQuery(this.configStore.Options.manageColSettingsContainer
        //                           || this.configStore.Options.containerElement);
        //     element.find(".col-settings-container").html(html);
        // }
        this.setOrder = function (orderByList) {
            for (var _i = 0, _a = _this.configStore.Options.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                col.orderBy = undefined;
            }
            if (orderByList === undefined || orderByList === null || orderByList.length === 0) {
                return;
            }
            for (var _b = 0, orderByList_1 = orderByList; _b < orderByList_1.length; _b++) {
                var orderCol = orderByList_1[_b];
                for (var _c = 0, _d = _this.configStore.Options.columns; _c < _d.length; _c++) {
                    var col = _d[_c];
                    if (orderCol.colId === col.id) {
                        col.orderBy = orderCol.orderBy;
                        break;
                    }
                }
            }
        };
        this.destroy = function () {
            var parentElement = jQuery(_this.configStore.Options.containerElement);
            if (parentElement !== undefined) {
                parentElement.off();
            }
            // const manageContainerElement = jQuery(this.configStore.Options.manageColSettingsContainer);
            // if ( manageContainerElement !== undefined ) {
            //     manageContainerElement.off();
            // }
            $(window).off("resize", _this.documentResizeHandler);
            $(document).off("click", _this.documentClickHandler);
            $(window).off("resize", _this.documentResizeHandlerForCs);
            $(document).off("click", _this.documentClickHandlerForCs);
            if (_this.scrollHandler !== undefined) {
                // this.scrollHandler.unWatchWidth();
            }
        };
        this.internalRender = function (data, paginationInput) {
            var firstIndex = 0;
            var lastIndex = _this.configStore.Options.chunkSize + _this.getInitialRowCount();
            lastIndex = lastIndex >= data.length ? data.length - 1 : lastIndex;
            var gridContent = _this.gridTemplateService.GetFirstTemplate(data, firstIndex, lastIndex);
            _this.configStore.Options.containerElement.innerHTML = gridContent;
            if (_this.scrollHandler !== undefined && _this.scrollHandler !== null) {
                _this.scrollHandler.removeHandler();
                _this.scrollHandler.resetParentOffset();
                _this.scrollHandler.setCurrentIndex(lastIndex + 1);
            }
            else {
                _this.scrollHandler = new ScrollHandler_1.ScrollHandler(_this.configStore, _this.gridTemplateService, lastIndex + 1);
                // this.scrollHandler.watchWidth();
            }
            _this.scrollHandler.RegisterDomHandler();
            _this.setFocusToLastElement();
        };
        this.getInitialRowCount = function () {
            return Math.floor((jQuery(window).innerHeight() * 0.65) / 32);
        };
        this.InitHandlers = function () {
            var parentElement = jQuery(_this.configStore.Options.containerElement);
            _this.handleChain = [];
            _this.handleChain.push({
                handler: new DetailsRowHandler_1.DetailsRowHandler(_this.configStore, parentElement),
                name: HandlerNames_1.HandlerNames.DetailsRow,
            });
            _this.handleChain.push({
                handler: new FilterClickHandler_1.FilterClickHandler(_this.configStore, parentElement),
                name: HandlerNames_1.HandlerNames.FilterAction,
            });
            _this.handleChain.push({
                handler: new HeaderClickHandler_1.HeaderClickHandler(_this.configStore, parentElement),
                name: HandlerNames_1.HandlerNames.HeaderClick,
            });
            _this.handleChain.push({
                handler: new PageSearchClickHandler_1.PageSearchHandler(_this.configStore, parentElement),
                name: HandlerNames_1.HandlerNames.PageSearch,
            });
            var container = parentElement;
            _this.handleChain.push({
                handler: new SelectEventHandler_1.SelectEventHandler(_this.configStore, parentElement, _this.gridTemplateService),
                name: HandlerNames_1.HandlerNames.ColSettings,
            });
            _this.handleChain.forEach(function (value) {
                value.handler.RegisterDomHandler();
            });
            jQuery(window).resize(_this.documentResizeHandler);
            jQuery(document).click(_this.documentClickHandler);
        };
        this.documentResizeHandlerForCs = function (event) {
            _this.manageColHandler.onResize();
            event.stopPropagation();
        };
        this.documentClickHandlerForCs = function (event) {
            _this.manageColHandler.onDocumentClick(event);
            event.stopPropagation();
        };
        this.documentResizeHandlerForScroll = function (event) {
            _this.manageColHandler.onResize();
            event.stopPropagation();
        };
        this.documentClickHandler = function (event) {
            _this.handleChain.forEach(function (value) {
                value.handler.onDocumentClick(event);
            });
            event.stopPropagation();
        };
        this.documentResizeHandler = function (event) {
            _this.handleChain.forEach(function (value) {
                value.handler.onDocumentClick(event);
            });
            event.stopPropagation();
        };
        this.setFocusToLastElement = function () {
            var element = _this.configStore.getFocusableElement();
            if (element) {
                if (element.classList.contains("firstLink")) {
                    $(".table-footer .firstLink").focus();
                }
                if (element.classList.contains("nextLink")) {
                    $(".table-footer .nextLink").focus();
                }
                if (element.classList.contains("prevLink")) {
                    $(".table-footer .prevLink").focus();
                }
                if (element.classList.contains("lastLink")) {
                    $(".table-footer .lastLink").focus();
                }
                if (element.classList.contains("pageSizeSelector")) {
                    $(".table-footer .pageSizeSelector").focus();
                }
                if (element.classList.contains("pager-input")) {
                    $(".table-footer .pager-input").focus();
                }
                if (element.tagName.toLowerCase() === "th") {
                    var dataHeaderId_1 = element.getAttribute("data-header-id");
                    var newFocusable_1;
                    $(".table-header th").each(function (index, elem) {
                        var eachHeader = $(elem);
                        var eachHeaderId = eachHeader.attr("data-header-id");
                        if (eachHeaderId === dataHeaderId_1) {
                            newFocusable_1 = eachHeader;
                            return false;
                        }
                    });
                    if (newFocusable_1) {
                        newFocusable_1.focus();
                    }
                }
            }
            _this.configStore.setFocusableElement(undefined);
        };
        this.configStore = new ConfigStore_1.ConfigStore(options);
        this.gridTemplateService = new GridTemplateService_1.GridTemplateService(this.configStore);
        this.InitHandlers();
    }
    return Grid;
}());
exports.Grid = Grid;


/***/ }),
/* 13 */
/*!**************************************!*\
  !*** ./src/js/config/ConfigStore.ts ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigStore = /** @class */ (function () {
    function ConfigStore(options) {
        var _this = this;
        this.defaultGridOptions = {
            animationTime: 200,
            chunkSize: 5,
            columns: [],
            containerElement: null,
            // manageColSettingsContainer: null,
            hybridFunction: function (column, row) {
                return "true";
            },
            keyColumn: "",
            // onColSettingsChange: (colConfig: IColumn[]): void => {
            //     // No Code
            // },
            onClickFilter: function (column, value, actionType) {
                // No code
            },
            onClickHeader: function (column, direction) {
                // No code
            },
            onPageSearch: function (pageSize, pageIndex) {
                // No code
            },
            onSelect: function (rows) {
                // No Code
            },
            showCaption: false,
            caption: "",
            summary: "",
        };
        this.setFocusableElement = function (element) {
            _this.focusableElement = element;
        };
        this.getFocusableElement = function () {
            return _this.focusableElement;
        };
        this.SetHiddenOnConfig = function (bool, columnId) {
            for (var _i = 0, _a = _this.Options.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                if (columnId === undefined) {
                    col.hidden = bool;
                }
                else {
                    if (col.id === columnId) {
                        col.hidden = bool;
                        break;
                    }
                }
            }
        };
        this.extendOptions = function (inputOptions) {
            return _this.options = jQuery.extend({}, _this.defaultGridOptions, inputOptions);
        };
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object");
        }
        this.options.columns.sort(function (prev, next) { return prev.order - next.order; });
    }
    Object.defineProperty(ConfigStore.prototype, "Options", {
        get: function () {
            return this.options;
        },
        set: function (options) {
            this.options = options;
        },
        enumerable: true,
        configurable: true
    });
    return ConfigStore;
}());
exports.ConfigStore = ConfigStore;


/***/ }),
/* 14 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/SelectEventHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectEventHandler = /** @class */ (function () {
    function SelectEventHandler(configStore, element, gridTemplateService) {
        this.configStore = configStore;
        this.parentElement = element;
        this.gridTemplateService = gridTemplateService;
    }
    SelectEventHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.parentElement.on("change", ".select-key-checkbox", function (event) {
            var element = jQuery(event.target);
            var checked = element.is(":checked");
            var value = element.val().toString();
            if (checked) {
                _this.gridTemplateService.selectRows(value);
                element.parents(".mainRow").addClass("active");
            }
            else {
                _this.gridTemplateService.deSelectRows(value);
                element.parents(".mainRow").removeClass("active");
            }
            if (event.originalEvent === undefined) {
                return;
            }
            _this.configStore.Options.onSelect(_this.gridTemplateService.Selected, checked);
            event.stopPropagation();
        });
        this.parentElement.on("change", ".select-all-checkbox", function (event) {
            var element = jQuery(event.target);
            var checked = element.is(":checked");
            _this.parentElement.find(".select-key-checkbox").prop("checked", checked);
            if (checked) {
                _this.gridTemplateService.selectAll();
                _this.parentElement.find(".mainTable .mainRow").addClass("active");
            }
            else {
                _this.gridTemplateService.deSelectAll();
                _this.parentElement.find(".mainTable .mainRow").removeClass("active");
            }
            _this.configStore.Options.onSelect(_this.gridTemplateService.Selected, checked);
            event.stopPropagation();
        });
    };
    SelectEventHandler.prototype.onResize = function () {
        // Ignore
    };
    SelectEventHandler.prototype.onDocumentClick = function (event) {
        // Ignore
    };
    return SelectEventHandler;
}());
exports.SelectEventHandler = SelectEventHandler;


/***/ }),
/* 15 */
/*!***************************************************!*\
  !*** ./src/js/eventHandlers/DetailsRowHandler.ts ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DetailsRowHandler = /** @class */ (function () {
    function DetailsRowHandler(configStore, element) {
        var _this = this;
        this.configStore = configStore;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-body .expansionArrows i", _this.expandRow);
            _this.parentElement.on("keyup", ".table-body .expansionArrows i", _this.expandRow);
        };
        this.expandRow = function (event) {
            var code = event.keyCode || event.which;
            if (event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32)) {
                return;
            }
            var arrow = jQuery(event.target);
            var detailsRow = arrow.closest("tr").next();
            var currentIcon = arrow.hide().attr("aria-hidden", "true");
            var otherIcon = arrow.siblings("i").show().attr("aria-hidden", "false");
            if (arrow.hasClass("expandDetailsRowIcon")) {
                otherIcon.attr("aria-expanded", "true");
                detailsRow.slideDown(_this.configStore.Options.animationTime);
            }
            else {
                currentIcon.attr("aria-expanded", "true");
                detailsRow.slideUp(_this.configStore.Options.animationTime);
            }
            otherIcon.focus();
            event.stopPropagation();
        };
        this.parentElement = element;
    }
    DetailsRowHandler.prototype.onResize = function () {
        // Nothing to Do.
    };
    DetailsRowHandler.prototype.onDocumentClick = function (event) {
        // Nothing to Do.
    };
    return DetailsRowHandler;
}());
exports.DetailsRowHandler = DetailsRowHandler;


/***/ }),
/* 16 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/FilterClickHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(/*! ../util/ColumnUtil */ 5);
var FilterActionType_1 = __webpack_require__(/*! ./../models/FilterActionType */ 17);
var FilterClickHandler = /** @class */ (function () {
    function FilterClickHandler(configStore, element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-body .detailsRow .detailsTable td i", function (event) {
                var element = jQuery(event.target);
                var parentTd = element.parents("td");
                var key = parentTd.attr("data-filter-key");
                var value = parentTd.attr("data-filter-value");
                var type = parentTd.attr("data-filter-type");
                var col = ColumnUtil_1.CommonUtil.GetColumnObject(key, _this.configStore.Options.columns);
                if (col === undefined || col === null || !col.filterable) {
                    return;
                }
                var filterAction = FilterActionType_1.FilterActionType.Add;
                if (element.hasClass("removeFilter")) {
                    filterAction = FilterActionType_1.FilterActionType.Minus;
                }
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.Options.onClickFilter(key, value, filterAction, type);
                event.stopPropagation();
            });
        };
        this.configStore = configStore;
        this.parentElement = element;
    }
    FilterClickHandler.prototype.onResize = function () {
        // Nothing to Do.
    };
    FilterClickHandler.prototype.onDocumentClick = function (event) {
        // Nothing to Do.
    };
    return FilterClickHandler;
}());
exports.FilterClickHandler = FilterClickHandler;


/***/ }),
/* 17 */
/*!*******************************************!*\
  !*** ./src/js/models/FilterActionType.ts ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType;
(function (FilterActionType) {
    FilterActionType["Add"] = "Add";
    FilterActionType["Minus"] = "Minus";
})(FilterActionType = exports.FilterActionType || (exports.FilterActionType = {}));


/***/ }),
/* 18 */
/*!**********************************************!*\
  !*** ./src/js/eventHandlers/HandlerNames.ts ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HandlerNames;
(function (HandlerNames) {
    HandlerNames[HandlerNames["FilterAction"] = 0] = "FilterAction";
    HandlerNames[HandlerNames["HeaderClick"] = 1] = "HeaderClick";
    HandlerNames[HandlerNames["Scroll"] = 2] = "Scroll";
    HandlerNames[HandlerNames["PageSearch"] = 3] = "PageSearch";
    HandlerNames[HandlerNames["DetailsRow"] = 4] = "DetailsRow";
    HandlerNames[HandlerNames["ToggleColumn"] = 5] = "ToggleColumn";
    HandlerNames[HandlerNames["ColSettings"] = 6] = "ColSettings";
})(HandlerNames = exports.HandlerNames || (exports.HandlerNames = {}));


/***/ }),
/* 19 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/HeaderClickHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(/*! ../util/ColumnUtil */ 5);
var GridOrderDirection_1 = __webpack_require__(/*! ./../models/GridOrderDirection */ 6);
var HeaderClickHandler = /** @class */ (function () {
    function HeaderClickHandler(configStore, element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            // Registering JQuery Event Handler if Header is Clicked.
            _this.parentElement.on("click", ".table-header th", _this.handleHeaderSort);
            _this.parentElement.on("keyup", ".table-header th", _this.handleHeaderSort);
            _this.parentElement.on("mousedown", ".table-header th", _this.handleMouseDown);
            _this.parentElement.on("focusin", ".table-header th", _this.handleHeaderFocus);
        };
        this.handleMouseDown = function (event) {
            _this.wasHeaderClicked = true;
        };
        this.handleHeaderFocus = function (event) {
            // Handle focus
            if (_this.lastFocusedElement !== event.target) {
                if (_this.wasHeaderClicked) {
                    return;
                }
                _this.lastFocusedElement = event.target;
                _this.wasHeaderClicked = false;
            }
            // event.data.clicked = undefined;
            var header = jQuery(event.target);
            var leftPostition = header.position().left;
            var headerWidth = header.width();
            var tableBody = _this.parentElement.find(".table-body");
            var mainTableBody = _this.parentElement.find(".mainTable");
            var visibleTbodyWidth = tableBody.width();
            var maxScroll = mainTableBody.width() - visibleTbodyWidth;
            var currentPosition = leftPostition + headerWidth * 2;
            var scrollLeftBy;
            if (currentPosition > visibleTbodyWidth) {
                scrollLeftBy = leftPostition > maxScroll ? maxScroll : leftPostition;
            }
            else {
                scrollLeftBy = 0;
            }
            tableBody.scrollLeft(scrollLeftBy);
            event.stopPropagation();
        };
        this.handleHeaderSort = function (event) {
            var code = event.keyCode || event.which;
            if (event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32)) {
                return;
            }
            var element = jQuery(event.target).closest("th");
            var headerId = element.attr("data-header-id");
            var col = ColumnUtil_1.CommonUtil.GetColumnObject(headerId, _this.configStore.Options.columns);
            if (col === undefined || col === null || !col.sortable) {
                return;
            }
            var arrowIcons = element.find("i");
            var upArrowIcon = arrowIcons.first();
            var downArrowIcon = arrowIcons.last();
            var direction;
            if (arrowIcons.is(":visible")) {
                if (upArrowIcon.is(":visible")) {
                    direction = GridOrderDirection_1.GridOrderDirection.Desc;
                    upArrowIcon.hide();
                    downArrowIcon.show();
                }
                else {
                    direction = GridOrderDirection_1.GridOrderDirection.Asc;
                    downArrowIcon.hide();
                    upArrowIcon.show();
                }
            }
            else {
                direction = GridOrderDirection_1.GridOrderDirection.Asc;
                upArrowIcon.show();
            }
            element.attr("aria-sort", direction === GridOrderDirection_1.GridOrderDirection.Desc ? "descending" : "ascending");
            ColumnUtil_1.CommonUtil.SetOrder(headerId, direction, _this.configStore.Options.columns);
            _this.configStore.setFocusableElement(event.target);
            _this.configStore.Options.onClickHeader(col.orderByCol || headerId, direction);
            event.stopPropagation();
        };
        this.configStore = configStore;
        this.parentElement = element;
    }
    HeaderClickHandler.prototype.onResize = function () {
        // Nothing to Do.
    };
    HeaderClickHandler.prototype.onDocumentClick = function (event) {
        // Nothing to Do.
    };
    return HeaderClickHandler;
}());
exports.HeaderClickHandler = HeaderClickHandler;


/***/ }),
/* 20 */
/*!********************************************************!*\
  !*** ./src/js/eventHandlers/PageSearchClickHandler.ts ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(/*! jquery */ 4);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 3);
var PageSearchHandler = /** @class */ (function () {
    function PageSearchHandler(configStore, element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-footer .firstLink", function (event) {
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, 1);
                event.stopPropagation();
            });
            _this.parentElement.on("click", ".table-footer .nextLink", function (event) {
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, Pager_1.Pager.PaginationData.pageIndex + 1);
                event.stopPropagation();
            });
            _this.parentElement.on("click", ".table-footer .prevLink", function (event) {
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, Pager_1.Pager.PaginationData.pageIndex - 1);
                event.stopPropagation();
            });
            _this.parentElement.on("click", ".table-footer .lastLink", function (event) {
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, Pager_1.Pager.PaginationData.noOfPages);
                event.stopPropagation();
            });
            _this.parentElement.on("change", ".table-footer .pageSizeSelector", function (event) {
                _this.configStore.setFocusableElement(event.target);
                var val = +jQuery(event.target).val().toString();
                _this.configStore.options.onPageSearch(val, Pager_1.Pager.PaginationData.pageIndex);
                event.stopPropagation();
            });
            _this.parentElement.on("keypress", ".table-footer .pager-input", function (event) {
                _this.configStore.setFocusableElement(event.target);
                var ip = jQuery(event.target);
                var pageData = Pager_1.Pager.PaginationData;
                if (event.keyCode === 13) {
                    var val = +ip.val().toString();
                    if (isNaN(val) || val > pageData.noOfPages || val < 1) {
                        ip.val(pageData.pageIndex);
                    }
                    else {
                        _this.configStore.options.onPageSearch(pageData.pageSize, val);
                    }
                }
                event.stopPropagation();
            });
        };
        this.configStore = configStore;
        this.parentElement = element;
    }
    PageSearchHandler.prototype.onResize = function () {
        // throw new Error("Method not implemented.");
    };
    PageSearchHandler.prototype.onDocumentClick = function () {
        // throw new Error("Method not implemented.");
    };
    return PageSearchHandler;
}());
exports.PageSearchHandler = PageSearchHandler;


/***/ }),
/* 21 */
/*!***********************************************!*\
  !*** ./src/js/eventHandlers/ScrollHandler.ts ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScrollHandler = /** @class */ (function () {
    function ScrollHandler(configStore, gridTemplateService, currentIndex) {
        var _this = this;
        this.rendering = false;
        this.watches = [];
        this.setCurrentIndex = function (index) {
            _this.currentIndex = index;
            _this.gridTemplateService.CurrentIndex = index;
        };
        this.getCurrentIndex = function () {
            return _this.currentIndex;
        };
        this.RegisterDomHandler = function () {
            // Registering JQuery Event Handler if Header is Clicked.
            _this.parentElement.find(".table-body").on("scroll", _this.handleResize);
        };
        this.removeHandler = function () {
            _this.parentElement.find(".table-body").off("scroll", _this.handleResize);
        };
        this.resetParentOffset = function () {
            _this.parentOffSetLeft = _this.parentElement.offset().left;
            _this.leftOffset = _this.parentElement.find(".table-header").offset().left;
        };
        this.watchWidth = function () {
            _this.parentOffSetLeft = _this.parentElement.offset().left;
            _this.watches.push(setInterval(_this.setHeaderOffset, 300));
        };
        this.unWatchWidth = function () {
            if (_this.watches === undefined || _this.watches === null) {
                return;
            }
            for (var _i = 0, _a = _this.watches; _i < _a.length; _i++) {
                var watch = _a[_i];
                clearInterval(watch);
            }
        };
        this.handleResize = function (event) {
            var tBodyObj = _this.parentElement.find(".table-body");
            if (_this.leftOffset === undefined || _this.leftOffset === null) {
                _this.leftOffset = _this.parentElement.find(".table-header").offset().left;
            }
            _this.parentElement.find(".table-header").css({
                "margin-left": -1 * tBodyObj.scrollLeft(),
            });
            var actualTableHeight = tBodyObj.find(".mainTable").height();
            var scrollContainerHeight = tBodyObj.height();
            event.preventDefault();
            if (_this.rendering) {
                event.stopPropagation();
                return;
            }
            var scrollTop = tBodyObj.scrollTop();
            if ((scrollContainerHeight + scrollTop) - (actualTableHeight * 0.8) > 0) {
                if (_this.currentIndex >= _this.gridTemplateService.DataLength) {
                    return;
                }
                _this.rendering = true;
                var lastIndex = _this.currentIndex + _this.configStore.Options.chunkSize;
                if (lastIndex >= _this.gridTemplateService.DataLength) {
                    lastIndex = _this.gridTemplateService.DataLength - 1;
                }
                var html = jQuery(_this.gridTemplateService.getTemplate(_this.currentIndex, lastIndex));
                tBodyObj.find(".mainTableBody").append(html);
                _this.setCurrentIndex(lastIndex + 1);
                _this.rendering = false;
            }
            event.stopPropagation();
        };
        this.setHeaderOffset = function () {
            var left = _this.parentElement.offset().left;
            if (_this.parentOffSetLeft !== left) {
                var tBodyObj = _this.parentElement.find(".table-body");
                if (_this.leftOffset === undefined || _this.leftOffset === null) {
                    _this.leftOffset = _this.parentElement.find(".table-header").offset().left;
                }
                _this.leftOffset = _this.leftOffset - (_this.parentOffSetLeft - left);
                _this.parentElement
                    .find(".table-header")
                    .offset({ left: _this.leftOffset, top: 0 });
                _this.parentOffSetLeft = left;
                tBodyObj.scrollLeft(tBodyObj.scrollLeft() - 1);
            }
        };
        this.configStore = configStore;
        this.parentElement = jQuery(this.configStore.Options.containerElement);
        this.gridTemplateService = gridTemplateService;
        this.setCurrentIndex(currentIndex);
    }
    ScrollHandler.prototype.onResize = function () {
        //
    };
    ScrollHandler.prototype.onDocumentClick = function (event) {
        // No Op
    };
    return ScrollHandler;
}());
exports.ScrollHandler = ScrollHandler;


/***/ }),
/* 22 */
/*!************************************************!*\
  !*** ./src/js/services/GridTemplateService.ts ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridDetailsRowTemplate = __webpack_require__(/*! ../../hbs/grid-details-row.hbs */ 7);
var GridFooter = __webpack_require__(/*! ../../hbs/grid-footer.hbs */ 8);
var GridMainRowTemplate = __webpack_require__(/*! ../../hbs/grid-main-row.hbs */ 10);
var ManageColumnTemplate = __webpack_require__(/*! ../../hbs/grid-manage-columns.hbs */ 24);
var GridTemplate = __webpack_require__(/*! ../../hbs/grid.hbs */ 26);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 3);
var GridTemplateService = /** @class */ (function () {
    function GridTemplateService(configStore) {
        var _this = this;
        this.selected = [];
        this.isAllSelected = function () {
            return _this.selected.length !== 0 && _this.selected.length === _this.data.length;
        };
        // For First  Render - Update Header , Body, Pagination
        this.GetFirstTemplate = function (data, firstIndex, lastIndex) {
            _this.data = data;
            _this.selected = [];
            var mainRowArray = _this.GetRowsHtml(firstIndex, lastIndex);
            return _this.templateFunctionForGrid({
                showCaption: _this.configStore.Options.showCaption,
                summary: _this.configStore.Options.summary,
                rowLength: _this.data.length,
                columns: _this.configStore.Options.columns,
                mainRowArray: mainRowArray,
                paginationData: Pager_1.Pager.PaginationData,
                caption: _this.configStore.Options.caption,
            });
        };
        // For Virtualizaton Render - Body
        this.getTemplate = function (firstIndex, lastIndex) {
            var mainRowArray = _this.GetRowsHtml(firstIndex, lastIndex);
            return _this.templateFunctionForMainRow({
                columns: _this.configStore.Options.columns,
                mainRowArray: mainRowArray,
                caption: _this.configStore.Options.caption,
            });
        };
        // Update only one Row
        this.getTemplateForOneRow = function (row) {
            var emptyStr = _this.configStore.Options.emptyValue;
            var mainRowColArray = _this.getMainRow(row, emptyStr);
            var mainRowArray = [{
                    isAllSelected: _this.isAllSelected(),
                    keyColumn: row[_this.configStore.Options.keyColumn],
                    mainRowColArray: mainRowColArray,
                    length: _this.configStore.Options.columns.length,
                }];
            return _this.templateFunctionForMainRow({ mainRowArray: mainRowArray });
        };
        this.GetManageColumnsHtml = function () {
            return _this.templateFunctionForManageCol({ columns: _this.configStore.Options.columns });
        };
        this.GetRowsHtml = function (firstIndex, lastIndex) {
            var mainRowArray = [];
            var emptyStr = _this.configStore.Options.emptyValue;
            for (var i = firstIndex; i <= lastIndex; i++) {
                var row = _this.data[i];
                var mainRowColArray = _this.getMainRow(row, emptyStr);
                mainRowArray.push({
                    rowIndex: i,
                    isAllSelected: _this.isAllSelected(),
                    keyColumn: row[_this.configStore.Options.keyColumn],
                    mainRowColArray: mainRowColArray,
                    length: _this.configStore.Options.columns.length,
                });
            }
            return mainRowArray;
        };
        this.selectRows = function (rowId) {
            var key = _this.configStore.Options.keyColumn;
            var newSelected = [];
            var exists = false;
            for (var _i = 0, _a = _this.selected; _i < _a.length; _i++) {
                var selected = _a[_i];
                if (rowId === selected[key]) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                newSelected.push(rowId);
            }
            for (var _b = 0, newSelected_1 = newSelected; _b < newSelected_1.length; _b++) {
                var toBeAdded = newSelected_1[_b];
                for (var _c = 0, _d = _this.data; _c < _d.length; _c++) {
                    var oneRow = _d[_c];
                    if (toBeAdded === oneRow[key]) {
                        _this.selected.push(oneRow);
                        break;
                    }
                }
            }
        };
        this.deSelectRows = function (rowId) {
            var newSelected = [];
            var key = _this.configStore.Options.keyColumn;
            for (var _i = 0, _a = _this.selected; _i < _a.length; _i++) {
                var selected = _a[_i];
                if (rowId !== selected[key]) {
                    newSelected.push(selected);
                }
            }
            _this.selected = newSelected;
        };
        this.selectAll = function () {
            _this.selected = _this.data;
        };
        this.deSelectAll = function () {
            _this.selected = [];
        };
        this.updateRows = function (rows) {
            var key = _this.configStore.Options.keyColumn;
            if (rows === undefined || !rows.length) {
                return;
            }
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                for (var _a = 0, _b = _this.data; _a < _b.length; _a++) {
                    var dataRow = _b[_a];
                    if (row[key] === dataRow[key]) {
                        dataRow = row;
                        break;
                    }
                }
            }
            for (var _c = 0, rows_2 = rows; _c < rows_2.length; _c++) {
                var row = rows_2[_c];
                for (var _d = 0, _e = _this.selected; _d < _e.length; _d++) {
                    var dataRow = _e[_d];
                    if (row[key] === dataRow[key]) {
                        dataRow = row;
                        break;
                    }
                }
            }
        };
        this.getMainRow = function (row, emptyStr) {
            var mainRowColArray = [];
            for (var _i = 0, _a = _this.configStore.Options.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                var columnValue = row[col.id];
                if (col.renderHybrid) {
                    columnValue = _this.configStore.Options.hybridFunction(col, row);
                }
                if (emptyStr !== undefined && columnValue === emptyStr) {
                    columnValue = "";
                }
                mainRowColArray.push({
                    columnValue: columnValue,
                    type: col.type,
                    hidden: col.hidden,
                    actualValue: row[col.id],
                    columnName: col.name,
                    id: col.id,
                    filterable: col.filterable,
                });
            }
            return mainRowColArray;
        };
        this.configStore = configStore;
        this.templateFunctionForGrid = GridTemplate;
        this.templateFunctionForMainRow = GridMainRowTemplate;
        this.templateFunctionForDetailsRow = GridDetailsRowTemplate;
        this.templateFunctionForFooter = GridFooter;
        this.templateFunctionForManageCol = ManageColumnTemplate;
    }
    Object.defineProperty(GridTemplateService.prototype, "Data", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridTemplateService.prototype, "Selected", {
        get: function () {
            return this.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridTemplateService.prototype, "CurrentIndex", {
        set: function (index) {
            this.currentIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridTemplateService.prototype, "DataLength", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return GridTemplateService;
}());
exports.GridTemplateService = GridTemplateService;


/***/ }),
/* 23 */
/*!*************************************!*\
  !*** ./src/hbs/helpers/Selected.ts ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var selected = function (input, value) {
    return input === value ? "selected" : "";
};
exports.default = selected;


/***/ }),
/* 24 */
/*!*****************************************!*\
  !*** ./src/hbs/grid-manage-columns.hbs ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <tr data-header-id=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n                    <td>\r\n                        <label>\r\n                            <input type=\"checkbox\" class=\"col-settings-hidden-checkbox gui m-r-10\" value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 25)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hidden : depth0),{"name":"Checked","hash":{},"data":data}))
    + ">\r\n                            "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\r\n                        </label>\r\n                    </td>\r\n                </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gui of-hidden p-10 min-w-50 w-auto fluid-h flex column container\" >\r\n    <div class=\"col-settings-header\" style=\"width: 100%\">\r\n        <div class=\"gui mini fluid icon input\">\r\n            <input class=\"col-settings-filter\" type=\"text\" placeholder=\"Search filter...\">\r\n            <i class=\"search icon\"></i>\r\n        </div>\r\n        <div class=\"gui m-t-10\">\r\n            <a class=\"gui left show-all-column\">Show All</a>\r\n            <a class=\"gui right hide-all-column\">Hide All</a>\r\n        </div>\r\n        <div class=\"gui clear\"></div>\r\n    </div>\r\n    <div class=\"gui clear\"></div>\r\n    <div class=\"col-settings-table gui fluid h-90 of-auto p-5 m-t-10\" >\r\n        <table class=\"gui small very border-less basic compact table\">\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n</div>";
},"useData":true});

/***/ }),
/* 25 */
/*!************************************!*\
  !*** ./src/hbs/helpers/Checked.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checked = function (bool) {
    return !bool ? "checked" : "";
};
exports.default = checked;


/***/ }),
/* 26 */
/*!**************************!*\
  !*** ./src/hbs/grid.hbs ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "                <caption class=\"gui gui-subheading-2 m-0 p-0 text-left\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.caption : depth0), depth0))
    + "</caption>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Column.ts */ 27)).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"Column","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sortable : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Ordered.ts */ 28)).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,(data && data.index),{"name":"Ordered","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "                        <th role=\"columnheader\"\r\n                            aria-colindex=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(alias1,(data && data.index),3,{"name":"Add","hash":{},"data":data}))
    + "\"\r\n                            aria-sort=\"none\" \r\n                            title=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                            tabindex=\"-1\"\r\n                            class=\"gui cursor-default disabled\" \r\n                            "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/AriaHidden.ts */ 29)).call(alias1,(depth0 != null ? depth0.hidden : depth0),{"name":"AriaHidden","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                            id=\"header-"
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n                            data-header-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\r\n                            <span class=\"gui sub header\">"
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\r\n                        </th>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"inner-container gui fluid container\" \r\n    aria-readonly=\"true\" \r\n    aria-rowcount=\""
    + alias2(alias1((depth0 != null ? depth0.rowLength : depth0), depth0))
    + "\" \r\n    aria-colcount=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(alias3,((stack1 = (depth0 != null ? depth0.columns : depth0)) != null ? stack1.length : stack1),2,{"name":"Add","hash":{},"data":data}))
    + "\"\r\n    aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\"\r\n    summary=\""
    + alias2(alias1((depth0 != null ? depth0.summary : depth0), depth0))
    + "\"\r\n    aria-live=\"polite\"\r\n    role=\"grid\" \r\n    style=\"padding:0%;\">\r\n    <div class=\"table-header\">\r\n        <table id=\"headertable\" role=\"presentation\" class=\"gui basic large compact sortable fixed single line table\">\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.showCaption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <colgroup class=\"headerColGroup\">\r\n                <col style=\"width:40px;\" />\r\n                <col style=\"width:40px;\" />\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\r\n            <thead role=\"rowgroup\">\r\n                <tr role=\"row\">\r\n                    <th role=\"columnheader\" aria-colindex=\"1\"></th>\r\n                    <th role=\"columnheader\" \r\n                        aria-label=\"Select all rows of "
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + " Checkbox\" \r\n                        aria-colindex=\"2\"\r\n                        id=\"select-all-checkbox\">\r\n                        <input  type=\"checkbox\" \r\n                                aria-labelledby=\"select-all-checkbox\"\r\n                                class=\"select-all-checkbox cursor-pointer\">\r\n                    </th>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\r\n            </thead>\r\n        </table>\r\n    </div>\r\n    <div class=\"table-body\">\r\n        <table role=\"presentation\" class=\"gui basic large compact fixed selectable single line table mainTable\">\r\n            <colgroup class=\"bodyColGroup\">\r\n                <col style=\"width:40px;\" /> \r\n                <col style=\"width:40px;\" />\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\r\n            <tbody class=\"mainTableBody\" role=\"rowgroup\">\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-main-row.hbs */ 10),depth0,{"name":"grid-main-row","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"table-footer gui h-auto fluid-w flex jc-sb p-5 m-0\">\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-footer.hbs */ 8),depth0,{"name":"grid-footer","data":data,"indent":"           ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 27 */
/*!***********************************!*\
  !*** ./src/hbs/helpers/Column.ts ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Column = function (col) {
    var calcWidth = col.hidden ? 0 : col.width;
    var dataAttrId = 'data-header-id="' + col.id + '"';
    return '<col style="width : ' + calcWidth + 'px;"' + dataAttrId + " />";
};
exports.default = Column;


/***/ }),
/* 28 */
/*!************************************!*\
  !*** ./src/hbs/helpers/Ordered.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridOrderDirection_1 = __webpack_require__(/*! ../../js/models/GridOrderDirection */ 6);
var ordered = function (column, index) {
    var parsedInt = parseInt(index, 10) + 3;
    var ariaSortStr;
    var ariaLabelStr;
    var headerIconMk;
    var ariaHiddenStr = column.hidden ? " aria-hidden=\"true\"" : " aria-hidden=\"false\"";
    var tabIndex = column.sortable && !column.hidden ? 0 : -1;
    if (column.orderBy === GridOrderDirection_1.GridOrderDirection.Asc) {
        headerIconMk = " <i class=\"gui gui-icon gui-icon-arrow-up\" aria-hidden=\"false\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
        ariaSortStr = "aria-sort=\"ascending\"";
        // ariaLabelStr = column.name + " sorted ascending";
    }
    else if (column.orderBy === GridOrderDirection_1.GridOrderDirection.Desc) {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down\" aria-hidden=\"false\" ></i>";
        ariaSortStr = "aria-sort=\"descending\"";
        // ariaLabelStr = column.name + " sorted descending";
    }
    else {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
        ariaSortStr = "aria-sort=\"none\"";
        ariaLabelStr = " Press space or enter to sort column " + column.name + " button";
    }
    return "<th role=\"columnheader\" aria-colindex=\"" + parsedInt
        + "\" class=\"gui cursor-pointer\" id=\"header-"
        + column.id + "\""
        + " tabindex=\"" + tabIndex + "\" "
        + " data-header-id=\"" + column.id + "\" +  "
        + ariaSortStr
        + ariaHiddenStr
        + " aria-labelledBy=\"columnLabel-" + column.id + "\""
        // + " title=\"" + column.name + "\" "
        + "  >"
        + " <span "
        + " id=\"columnLabel-" + column.id + "\" "
        + " aria-label=\"" + ariaLabelStr + "\" "
        + " role=\"button\" class=\"gui no-css sub header m-r-5\">" + column.name + "</span>"
        + headerIconMk
        + " </th>";
};
exports.default = ordered;


/***/ }),
/* 29 */
/*!***************************************!*\
  !*** ./src/hbs/helpers/AriaHidden.ts ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ariaHidden = function (bool) {
    return bool ? "aria-hidden=\"true\"" : "aria-hidden=\"false\"";
};
exports.default = ariaHidden;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjYWYyMDVkZTkxZjk3ZWU1OTMyNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQWRkLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdpbmF0aW9uL1BhZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLWRldGFpbHMtcm93LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtZm9vdGVyLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtbWFpbi1yb3cuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Cb29sQXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluL0dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy9Db25maWdTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TZWxlY3RFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGVhZGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Db2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL09yZGVyZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0FyaWFIaWRkZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBLCtDOzs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU0sUUFBUSxHQUFHLFVBQUMsSUFBYTtJQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFFRixrQkFBZSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0p4QixJQUFNLEdBQUcsR0FBRyxVQUFDLElBQVksRUFBRSxLQUFhO0lBQ3BDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRixrQkFBZSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0RuQjtJQUFBO0lBZ0NBLENBQUM7SUFIRyxzQkFBa0IsdUJBQWM7YUFBaEM7WUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQTNCYSw2QkFBdUIsR0FBRyxVQUFDLGVBQWlDO1FBQ2xFLElBQU0sY0FBYyxHQUFRLEVBQUUsQ0FBQztRQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDckQsY0FBYyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ25ELGNBQWMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUNyRCxjQUFjLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDdkQsY0FBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVGLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxJQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QixlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ2xELGNBQWMsQ0FBQyxLQUFLLEdBQUc7WUFDbkIsR0FBRyxFQUFHLE1BQU0sR0FBRyxDQUFDO1lBQ2hCLEdBQUcsRUFBRyxNQUFNLEdBQUcsZ0JBQWdCO1NBQ2xDLENBQUM7UUFDRixjQUFjLENBQUMscUJBQXFCLEdBQUcsY0FBYyxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUM7UUFDeEcsY0FBYyxDQUFDLG9CQUFvQixHQUFJLGNBQWMsQ0FBQyxTQUFTLEtBQUssQ0FBQztlQUMxQixDQUFDLGNBQWMsQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25HLGNBQWMsQ0FBQyxvQkFBb0IsR0FBSSxjQUFjLENBQUMsU0FBUyxLQUFLLENBQUM7ZUFDMUIsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRSxjQUFjLENBQUMsb0JBQW9CLEdBQUksY0FBYyxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsU0FBUztlQUNqRCxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN0RyxLQUFLLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUM5QyxDQUFDO0lBS0wsWUFBQztDQUFBO0FBaENZLHNCQUFLOzs7Ozs7Ozs7Ozs7QUNIbEIsK0M7Ozs7Ozs7Ozs7Ozs7O0FDR0E7SUFBQTtJQTZCQSxDQUFDO0lBM0JpQiwwQkFBZSxHQUFHLFVBQUMsUUFBZ0IsRUFBRSxPQUFrQjtRQUNqRSxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksTUFBZSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFZO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUM7WUFDWCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDYSxtQkFBUSxHQUFHLFVBQUMsUUFBZ0IsRUFBRSxPQUEyQixFQUFFLE9BQWtCO1FBQ3ZGLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxNQUFlLENBQUM7UUFDcEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVk7WUFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUM7WUFDWCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxpQkFBQztDQUFBO0FBN0JZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNIdkIsSUFBWSxrQkFJWDtBQUpELFdBQVksa0JBQWtCO0lBQzFCLG1DQUFhO0lBQ2IsaUNBQVc7SUFDWCxtQ0FBYTtBQUNqQixDQUFDLEVBSlcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFJN0I7Ozs7Ozs7Ozs7OztBQ0pEO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakUscUZBQXFGOztBQUVyRjtBQUNBLHNLQUFzSyx1QkFBdUIsYUFBYTtBQUMxTTtBQUNBLGtLQUFrSyxxQkFBcUIsYUFBYTtBQUNwTTtBQUNBLG9MQUFvTCw4QkFBOEIsYUFBYTtBQUMvTjtBQUNBLGtMQUFrTCw2QkFBNkIsYUFBYTtBQUM1TjtBQUNBLDBGQUEwRixxQkFBcUIseUVBQXlFO0FBQ3hMO0FBQ0Esd0xBQXdMLDhCQUE4QixhQUFhO0FBQ25PO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNELHFGQUFxRjs7QUFFckY7QUFDQSxvSkFBb0osd0JBQXdCLGFBQWE7QUFDekw7QUFDQSwwS0FBMEsseUJBQXlCLGFBQWE7QUFDaE4sK0lBQStJO0FBQy9JLDhGQUE4Rix1QkFBdUIseUVBQXlFO0FBQzlMO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7QUM5QmpCO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakU7O0FBRUE7QUFDQSxnSkFBMEoscUhBQXFILDJCQUEyQixhQUFhO0FBQ3ZUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx5SUFBeUk7O0FBRXpJO0FBQ0E7QUFDQTtBQUNBLGdOQUEyTiwyQkFBMkIsYUFBYTtBQUNuUTtBQUNBO0FBQ0E7QUFDQSwrTUFBME4sMkJBQTJCLGFBQWE7QUFDbFE7QUFDQSxzTUFBaU4sdUJBQXVCLGFBQWE7QUFDclA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrTUFBME4sMkJBQTJCLGFBQWE7QUFDbFE7QUFDQSxzTUFBaU4sdUJBQXVCLGFBQWE7QUFDclA7QUFDQTtBQUNBO0FBQ0EsK01BQTBOLDJCQUEyQixhQUFhO0FBQ2xRO0FBQ0E7QUFDQTtBQUNBLDhJQUE4SSx1QkFBdUIsOEZBQThGO0FBQ25RO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxpQ0FBaUMsRTs7Ozs7Ozs7Ozs7Ozs7QUN0RGxDLElBQU0sSUFBSSxHQUFHLFVBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLE9BQU87SUFDbkUsTUFBTSxDQUFDO1FBQ0gsR0FBRyxFQUFFLE1BQU0sR0FBRyxNQUFNO1FBQ3BCLEdBQUcsRUFBRSxNQUFNLEdBQUcsTUFBTTtRQUNwQixHQUFHLEVBQUUsTUFBTSxHQUFHLE1BQU07UUFDcEIsR0FBRyxFQUFFLE1BQU0sR0FBRyxNQUFNO1FBQ3BCLEdBQUcsRUFBRSxNQUFNLEdBQUcsTUFBTTtLQUN2QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLGtCQUFlLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O0FDVnBCO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakUsNkVBQTZFOztBQUU3RTtBQUNBLDBJQUFxSixzQkFBc0IsYUFBYTtBQUN4TDtBQUNBLGlLQUEySyxnQ0FBZ0MsYUFBYTtBQUN4TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrS0FBNEssZ0NBQWdDLGFBQWE7QUFDek47QUFDQTtBQUNBO0FBQ0EsOEZBQThGLHVCQUF1Qix5RUFBeUU7QUFDOUw7QUFDQSw4R0FBd0gsOEdBQThHO0FBQ3RPLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwSUFBcUosMEJBQTBCLHNCQUFzQixhQUFhO0FBQ2xOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsNEZBQTRGLG1EQUFtRCx1QkFBdUIseUVBQXlFO0FBQy9PLENBQUMsa0NBQWtDLEU7Ozs7Ozs7Ozs7Ozs7O0FDekNuQyxJQUFNLGFBQWEsR0FBRyxVQUFDLElBQWEsRUFBRSxHQUFXO0lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUVGLGtCQUFlLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSjdCLGtEQUFpQztBQUNqQyx5RUFBb0Q7QUFFcEQsOEZBQXlFO0FBSXpFLGdFQUE0QztBQUM1Qyw4RkFBeUU7QUFDekUsZ0dBQTJFO0FBQzNFLG9GQUErRDtBQUMvRCxnR0FBMkU7QUFHM0Usd0dBQThFO0FBQzlFLHNGQUFpRTtBQUtqRSw2RkFBd0U7QUFJeEU7SUFTSSxjQUFZLE9BQXdCO1FBQXBDLGlCQUlDO1FBRU0sYUFBUSxHQUFHLFVBQUMsSUFBUyxFQUFFLGVBQWtDO1lBQzVELFVBQVUsQ0FBQztnQkFDUCxhQUFLLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQy9DLElBQU0sUUFBUSxHQUFHLGFBQUssQ0FBQyxjQUFjLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUNYLENBQUM7UUFDTSxhQUFRLEdBQUc7WUFDZCxVQUFVLENBQUM7Z0JBQ1AsSUFBTSxRQUFRLEdBQUcsYUFBSyxDQUFDLGNBQWMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUNYLENBQUM7UUFDTSxpQkFBWSxHQUFHLFVBQUMsU0FBb0I7WUFDdkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QseUJBQXlCO1FBQ2xCLGVBQVUsR0FBRyxVQUFDLElBQVM7WUFDMUIsRUFBRSxDQUFDLENBQUUsSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMvRCxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0NBQ3BDLEdBQUc7Z0JBQ1YsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRSxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUyxFQUFFLEVBQVc7b0JBQ25ELElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDdkMsRUFBRSxDQUFDLENBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDckMsTUFBTSxDQUFDO29CQUNYLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBWkQsR0FBRyxDQUFDLENBQWMsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUk7Z0JBQWpCLElBQU0sR0FBRzt3QkFBSCxHQUFHO2FBWWI7UUFDTCxDQUFDO1FBQ0QsMkZBQTJGO1FBQzNGLDREQUE0RDtRQUM1RCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLG9FQUFvRTtRQUNwRSxnREFBZ0Q7UUFDaEQsNkVBQTZFO1FBQzdFLHFFQUFxRTtRQUNyRSxxRUFBcUU7UUFDckUsdUdBQXVHO1FBQ3ZHLHdFQUF3RTtRQUN4RSxnSEFBZ0g7UUFDaEgsMERBQTBEO1FBQzFELGtEQUFrRDtRQUNsRCw4REFBOEQ7UUFDOUQsOERBQThEO1FBQzlELElBQUk7UUFDSix1REFBdUQ7UUFDdkQscURBQXFEO1FBQ3JELG9FQUFvRTtRQUNwRSxpRkFBaUY7UUFDakYsMkVBQTJFO1FBQzNFLDBEQUEwRDtRQUMxRCxJQUFJO1FBRUcsYUFBUSxHQUFHLFVBQUMsV0FBeUI7WUFDeEMsR0FBRyxDQUFDLENBQWMsVUFBZ0MsRUFBaEMsVUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFoQyxjQUFnQyxFQUFoQyxJQUFnQztnQkFBN0MsSUFBTSxHQUFHO2dCQUNWLEdBQUcsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO2FBQzNCO1lBQ0QsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxXQUFXLEtBQUssSUFBSSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDakYsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEdBQUcsQ0FBQyxDQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVc7Z0JBQTdCLElBQU0sUUFBUTtnQkFDZixHQUFHLENBQUMsQ0FBYyxVQUFnQyxFQUFoQyxVQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQWhDLGNBQWdDLEVBQWhDLElBQWdDO29CQUE3QyxJQUFNLEdBQUc7b0JBQ1YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsR0FBRyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO3dCQUMvQixLQUFLLENBQUM7b0JBQ1YsQ0FBQztpQkFDSjthQUNKO1FBQ0wsQ0FBQztRQUVNLFlBQU8sR0FBRztZQUNiLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3hFLEVBQUUsQ0FBQyxDQUFFLGFBQWEsS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDeEIsQ0FBQztZQUNELDhGQUE4RjtZQUM5RixnREFBZ0Q7WUFDaEQsb0NBQW9DO1lBQ3BDLElBQUk7WUFDSixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN6RCxFQUFFLENBQUMsQ0FBRSxLQUFJLENBQUMsYUFBYSxLQUFLLFNBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLHFDQUFxQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQztRQUNPLG1CQUFjLEdBQUcsVUFBQyxJQUFTLEVBQUUsZUFBa0M7WUFDbkUsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMvRSxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbkUsSUFBTSxXQUFXLEdBQVcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFDSixVQUFVLEVBQ1YsU0FBUyxDQUNSLENBQUM7WUFDeEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUNsRSxFQUFFLENBQUMsQ0FBRSxLQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsYUFBYSxLQUFLLElBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBRSxDQUFDO1lBQ3ZELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBSSxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JHLG1DQUFtQztZQUN2QyxDQUFDO1lBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFDTyx1QkFBa0IsR0FBRztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBRU8saUJBQVksR0FBRztZQUNuQixJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN4RSxLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDbEIsT0FBTyxFQUFFLElBQUkscUNBQWlCLENBQUksS0FBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7Z0JBQ2xFLElBQUksRUFBRSwyQkFBWSxDQUFDLFVBQVU7YUFDaEMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sRUFBRyxJQUFJLHVDQUFrQixDQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO2dCQUNwRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxZQUFZO2FBQ2xDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNsQixPQUFPLEVBQUUsSUFBSSx1Q0FBa0IsQ0FBSSxLQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztnQkFDbkUsSUFBSSxFQUFFLDJCQUFZLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDbEIsT0FBTyxFQUFFLElBQUksMENBQWlCLENBQUksS0FBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7Z0JBQ2xFLElBQUksRUFBRSwyQkFBWSxDQUFDLFVBQVU7YUFDaEMsQ0FBQyxDQUFDO1lBQ0gsSUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNsQixPQUFPLEVBQUUsSUFBSSx1Q0FBa0IsQ0FBSSxLQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxLQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQzdGLElBQUksRUFBRSwyQkFBWSxDQUFDLFdBQVc7YUFDakMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUF1QjtnQkFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFTywrQkFBMEIsR0FBRyxVQUFDLEtBQUs7WUFDdkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBQ08sOEJBQXlCLEdBQUcsVUFBQyxLQUFLO1lBQ3RDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFDTyxtQ0FBOEIsR0FBRyxVQUFDLEtBQUs7WUFDM0MsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBQ08seUJBQW9CLEdBQUcsVUFBQyxLQUFLO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBdUI7Z0JBQzdDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFDTywwQkFBcUIsR0FBRyxVQUFDLEtBQUs7WUFDbEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUF1QjtnQkFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUNPLDBCQUFxQixHQUFHO1lBQzVCLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN2RCxFQUFFLENBQUMsQ0FBRSxPQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNaLEVBQUUsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6QyxDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqRCxDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFNLGNBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzVELElBQUksY0FBWSxDQUFDO29CQUNqQixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhLEVBQUUsSUFBaUI7d0JBQ3hELElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDM0IsSUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUN2RCxFQUFFLENBQUMsQ0FBRSxZQUFZLEtBQUssY0FBYSxDQUFDLENBQUMsQ0FBQzs0QkFDbEMsY0FBWSxHQUFHLFVBQVUsQ0FBQzs0QkFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCxFQUFFLENBQUMsQ0FBRSxjQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixjQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBELENBQUM7UUE1TkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUksT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBMk5MLFdBQUM7QUFBRCxDQUFDO0FBeE9ZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNuQmpCO0lBZ0NJLHFCQUFZLE9BQXdCO1FBQXBDLGlCQU1DO1FBbkNPLHVCQUFrQixHQUFvQjtZQUMxQyxhQUFhLEVBQUUsR0FBRztZQUNsQixTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixvQ0FBb0M7WUFDcEMsY0FBYyxFQUFFLFVBQUMsTUFBZSxFQUFFLEdBQU07Z0JBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbEIsQ0FBQztZQUNELFNBQVMsRUFBRSxFQUFFO1lBQ2IseURBQXlEO1lBQ3pELGlCQUFpQjtZQUNqQixLQUFLO1lBQ0wsYUFBYSxFQUFFLFVBQUMsTUFBYyxFQUFFLEtBQVUsRUFBRSxVQUE0QjtnQkFDcEUsVUFBVTtZQUNkLENBQUM7WUFDRCxhQUFhLEVBQUUsVUFBQyxNQUFjLEVBQUUsU0FBNkI7Z0JBQ3pELFVBQVU7WUFDZCxDQUFDO1lBQ0QsWUFBWSxFQUFFLFVBQUMsUUFBZ0IsRUFBRSxTQUFpQjtnQkFDOUMsVUFBVTtZQUNkLENBQUM7WUFDRCxRQUFRLEVBQUUsVUFBQyxJQUFTO2dCQUNoQixVQUFVO1lBQ2QsQ0FBQztZQUNELFdBQVcsRUFBRSxLQUFLO1lBQ2xCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBY0ssd0JBQW1CLEdBQUcsVUFBQyxPQUFvQjtZQUM5QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLENBQUM7UUFDTSx3QkFBbUIsR0FBRztZQUN6QixNQUFNLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7UUFDTSxzQkFBaUIsR0FBRyxVQUFDLElBQWEsRUFBRSxRQUFpQjtZQUN4RCxHQUFHLENBQUMsQ0FBYyxVQUFvQixFQUFwQixVQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBcEIsY0FBb0IsRUFBcEIsSUFBb0I7Z0JBQWpDLElBQU0sR0FBRztnQkFDVixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDekIsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDbEIsS0FBSyxDQUFDO29CQUNWLENBQUM7Z0JBQ0wsQ0FBQzthQUNKO1FBQ0wsQ0FBQztRQUNPLGtCQUFhLEdBQUcsVUFBQyxZQUE2QjtZQUNsRCxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDbkYsQ0FBQztRQWhDRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxFQUFFLElBQUksSUFBSyxXQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0Qsc0JBQVcsZ0NBQU87YUFHbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBTEQsVUFBbUIsT0FBd0I7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUF5Qkwsa0JBQUM7QUFBRCxDQUFDO0FBbEVZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNEeEI7SUFLSSw0QkFBWSxXQUEyQixFQUFFLE9BQWUsRUFBRSxtQkFBMkM7UUFDakcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO0lBQ25ELENBQUM7SUFDTSwrQ0FBa0IsR0FBekI7UUFBQSxpQkFnQ0M7UUEvQkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFHLFVBQUMsS0FBSztZQUMzRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM5RSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUcsVUFBQyxLQUFLO1lBQzNELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDekUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDVixLQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pFLENBQUM7WUFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM5RSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00scUNBQVEsR0FBZjtRQUNJLFNBQVM7SUFDYixDQUFDO0lBQ00sNENBQWUsR0FBdEIsVUFBdUIsS0FBVTtRQUM3QixTQUFTO0lBQ2IsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQztBQWpEWSxnREFBa0I7Ozs7Ozs7Ozs7Ozs7OztBQ0YvQjtJQUdJLDJCQUFvQixXQUEyQixFQUFFLE9BQWU7UUFBaEUsaUJBRUM7UUFGbUIsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBVXhDLHVCQUFrQixHQUFHO1lBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRixDQUFDO1FBQ08sY0FBUyxHQUFHLFVBQUMsS0FBSztZQUN0QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDMUMsRUFBRSxDQUFDLENBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0QsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDMUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRCxDQUFDO1lBQ0QsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBL0JHLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxvQ0FBUSxHQUFmO1FBQ0ksaUJBQWlCO0lBQ3JCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixLQUFLO1FBQ3hCLGlCQUFpQjtJQUNyQixDQUFDO0lBd0JMLHdCQUFDO0FBQUQsQ0FBQztBQXBDWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7OztBQ0E5QixvRUFBZ0Q7QUFDaEQscUZBQWdFO0FBSWhFO0lBSUksNEJBQVksV0FBMkIsRUFBRSxPQUFlO1FBQXhELGlCQUdDO1FBUU0sdUJBQWtCLEdBQUc7WUFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLFVBQUMsS0FBSztnQkFDL0UsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2pELElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDL0MsSUFBTSxHQUFHLEdBQUcsdUJBQVUsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5RSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVyxDQUFDLENBQUMsQ0FBQztvQkFDeEQsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBQ0QsSUFBSSxZQUFZLEdBQXFCLG1DQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDMUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLFlBQVksR0FBRyxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdkUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQTdCRyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBQ00scUNBQVEsR0FBZjtRQUNJLGlCQUFpQjtJQUNyQixDQUFDO0lBRU0sNENBQWUsR0FBdEIsVUFBdUIsS0FBSztRQUN4QixpQkFBaUI7SUFDckIsQ0FBQztJQXFCTCx5QkFBQztBQUFELENBQUM7QUFuQ1ksZ0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNQL0IsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQ3hCLCtCQUFXO0lBQ1gsbUNBQWU7QUFDbkIsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCOzs7Ozs7Ozs7Ozs7Ozs7QUNIRCxJQUFZLFlBUVg7QUFSRCxXQUFZLFlBQVk7SUFDcEIsK0RBQVk7SUFDWiw2REFBVztJQUNYLG1EQUFNO0lBQ04sMkRBQVU7SUFDViwyREFBVTtJQUNWLCtEQUFZO0lBQ1osNkRBQVc7QUFDZixDQUFDLEVBUlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFRdkI7Ozs7Ozs7Ozs7Ozs7OztBQ05ELG9FQUFnRDtBQUNoRCx3RkFBb0U7QUFJcEU7SUFLSSw0QkFBWSxXQUEyQixFQUFFLE9BQWU7UUFBeEQsaUJBR0M7UUFVTSx1QkFBa0IsR0FBRztZQUN4Qix5REFBeUQ7WUFDekQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUcsa0JBQWtCLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzlFLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqRixDQUFDO1FBQ08sb0JBQWUsR0FBRyxVQUFDLEtBQVU7WUFDakMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDO1FBQ08sc0JBQWlCLEdBQUcsVUFBQyxLQUFLO1lBQzlCLGVBQWU7WUFDZixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQztnQkFDWCxDQUFDO2dCQUNELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUN2QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxrQ0FBa0M7WUFDbEMsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzdDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6RCxJQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1RCxJQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QyxJQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUcsaUJBQWlCLENBQUM7WUFDNUQsSUFBTSxlQUFlLEdBQUcsYUFBYSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxZQUFZLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUUsZUFBZSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDdkMsWUFBWSxHQUFHLGFBQWEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3pFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFDRCxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBQ08scUJBQWdCLEdBQUcsVUFBQyxLQUFLO1lBQzdCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQyxFQUFFLENBQUMsQ0FBRSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDckYsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoRCxJQUFNLEdBQUcsR0FBRyx1QkFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkYsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLElBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxJQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEMsSUFBSSxTQUE2QixDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsU0FBUyxHQUFHLHVDQUFrQixDQUFDLElBQUksQ0FBQztvQkFDcEMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNuQixhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osU0FBUyxHQUFHLHVDQUFrQixDQUFDLEdBQUcsQ0FBQztvQkFDbkMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQixXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osU0FBUyxHQUFHLHVDQUFrQixDQUFDLEdBQUcsQ0FBQztnQkFDbkMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLEtBQUssdUNBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlGLHVCQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0UsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzlFLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBbkZHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxxQ0FBUSxHQUFmO1FBQ0ksaUJBQWlCO0lBQ3JCLENBQUM7SUFFTSw0Q0FBZSxHQUF0QixVQUF1QixLQUFLO1FBQ3hCLGlCQUFpQjtJQUNyQixDQUFDO0lBMEVMLHlCQUFDO0FBQUQsQ0FBQztBQTFGWSxnREFBa0I7Ozs7Ozs7Ozs7Ozs7OztBQ1AvQixrREFBaUM7QUFFakMsZ0VBQTRDO0FBSzVDO0lBSUksMkJBQVksV0FBMkIsRUFBRSxPQUFlO1FBQXhELGlCQUdDO1FBUU0sdUJBQWtCLEdBQUc7WUFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQUMsS0FBSztnQkFDN0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQUMsS0FBSztnQkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxhQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQUMsS0FBSztnQkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxhQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQUMsS0FBSztnQkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxhQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsaUNBQWlDLEVBQUUsVUFBQyxLQUFLO2dCQUNyRSxLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkQsSUFBTSxHQUFHLEdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMzRCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLGFBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSw0QkFBNEIsRUFBRSxVQUFDLEtBQUs7Z0JBQ2xFLEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuRCxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxJQUFNLFFBQVEsR0FBRyxhQUFLLENBQUMsY0FBYyxDQUFDO2dCQUN0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLElBQU0sR0FBRyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BELEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNsRSxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQW5ERyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBQ00sb0NBQVEsR0FBZjtRQUNJLDhDQUE4QztJQUNsRCxDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDSSw4Q0FBOEM7SUFDbEQsQ0FBQztJQTJDTCx3QkFBQztBQUFELENBQUM7QUF6RFksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNBOUI7SUFXSSx1QkFBWSxXQUEyQixFQUFFLG1CQUEyQyxFQUFFLFlBQW9CO1FBQTFHLGlCQUtDO1FBWk8sY0FBUyxHQUFhLEtBQUssQ0FBQztRQUs1QixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBV3JCLG9CQUFlLEdBQUcsVUFBQyxLQUFhO1lBQ25DLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2xELENBQUM7UUFDTSxvQkFBZSxHQUFHO1lBQ3JCLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7UUFJTSx1QkFBa0IsR0FBRztZQUN4Qix5REFBeUQ7WUFDekQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUNNLGtCQUFhLEdBQUc7WUFDbkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUNNLHNCQUFpQixHQUFHO1lBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztZQUN6RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUM3RSxDQUFDO1FBQ00sZUFBVSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztZQUN6RCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDTSxpQkFBWSxHQUFHO1lBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEtBQUksQ0FBQyxPQUFPLEtBQUssSUFBSyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEdBQUcsQ0FBQyxDQUFnQixVQUFZLEVBQVosVUFBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWTtnQkFBM0IsSUFBTSxLQUFLO2dCQUNaLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtRQUNMLENBQUM7UUFDTyxpQkFBWSxHQUFHLFVBQUMsS0FBSztZQUN6QixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVELEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzdFLENBQUM7WUFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQ3hDO2dCQUNJLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFO2FBQzVDLENBQ0osQ0FBQztZQUNGLElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvRCxJQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBRSxHQUFHLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDekUsRUFBRSxDQUFDLENBQUUsS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVyxDQUFDLENBQUMsQ0FBQztvQkFDN0QsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUN2RSxFQUFFLENBQUMsQ0FBRSxTQUFTLElBQUksS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3JELFNBQVMsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkFDRCxJQUFNLElBQUksR0FBSSxNQUFNLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pGLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxlQUFlLENBQUUsU0FBUyxHQUFHLENBQUMsQ0FBRSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDO1lBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFTyxvQkFBZSxHQUFHO1lBQ3RCLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxDQUFFLEtBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDeEQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUM1RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDN0UsQ0FBQztnQkFDRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ25FLEtBQUksQ0FBQyxhQUFhO3FCQUNiLElBQUksQ0FBQyxlQUFlLENBQUM7cUJBQ3JCLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUM3QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDO1FBQ0wsQ0FBQztRQTFGRyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxnQ0FBUSxHQUFmO1FBQ0ksRUFBRTtJQUNOLENBQUM7SUFRTSx1Q0FBZSxHQUF0QixVQUF1QixLQUFLO1FBQ3hCLFFBQVE7SUFDWixDQUFDO0lBMEVMLG9CQUFDO0FBQUQsQ0FBQztBQXZHWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7O0FDTjFCLDBGQUF5RTtBQUN6RSx5RUFBd0Q7QUFDeEQscUZBQW1FO0FBQ25FLDRGQUEwRTtBQUMxRSxxRUFBbUQ7QUFHbkQsZ0VBQTRDO0FBVzVDO0lBV0ksNkJBQVksV0FBMkI7UUFBdkMsaUJBT0M7UUFoQk8sYUFBUSxHQUFRLEVBQUUsQ0FBQztRQWlCcEIsa0JBQWEsR0FBRztZQUNuQixNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25GLENBQUM7UUFhRCx1REFBdUQ7UUFDaEQscUJBQWdCLEdBQUcsVUFBQyxJQUFTLEVBQ1QsVUFBa0IsRUFDbEIsU0FBaUI7WUFDeEMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQztnQkFDaEMsV0FBVyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVc7Z0JBQ2pELE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPO2dCQUN6QyxTQUFTLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUMzQixPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDekMsWUFBWTtnQkFDWixjQUFjLEVBQUUsYUFBSyxDQUFDLGNBQWM7Z0JBQ3BDLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPO2FBQzVDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxrQ0FBa0M7UUFDM0IsZ0JBQVcsR0FBRyxVQUFDLFVBQWtCLEVBQUUsU0FBaUI7WUFDdkQsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLEtBQUksQ0FBQywwQkFBMEIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3pDLFlBQVk7Z0JBQ1osT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU87YUFDNUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELHNCQUFzQjtRQUNmLHlCQUFvQixHQUFHLFVBQUMsR0FBTTtZQUNqQyxJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckQsSUFBTSxlQUFlLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdkQsSUFBTSxZQUFZLEdBQUcsQ0FBQztvQkFDbEIsYUFBYSxFQUFFLEtBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ25DLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO29CQUNsRCxlQUFlO29CQUNmLE1BQU0sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTTtpQkFDbEQsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxFQUFDLFlBQVksZ0JBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFDTSx5QkFBb0IsR0FBRztZQUMxQixNQUFNLENBQUMsS0FBSSxDQUFDLDRCQUE0QixDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDMUYsQ0FBQztRQUVNLGdCQUFXLEdBQUcsVUFBQyxVQUFrQixFQUFFLFNBQWlCO1lBQ3ZELElBQU0sWUFBWSxHQUFVLEVBQUUsQ0FBQztZQUMvQixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDM0MsSUFBTSxHQUFHLEdBQU0sS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBTSxlQUFlLEdBQXVCLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMzRSxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNkLFFBQVEsRUFBRSxDQUFDO29CQUNYLGFBQWEsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFO29CQUNuQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDbEQsZUFBZTtvQkFDZixNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU07aUJBQ2xELENBQUMsQ0FBQztZQUNQLENBQUM7WUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFDTSxlQUFVLEdBQUcsVUFBQyxLQUFhO1lBQzlCLElBQU0sR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxDQUFtQixVQUFhLEVBQWIsVUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYTtnQkFBL0IsSUFBTSxRQUFRO2dCQUNmLEVBQUUsQ0FBQyxDQUFFLEtBQUssS0FBSyxRQUFRLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM1QixNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNkLEtBQUssQ0FBQztnQkFDVixDQUFDO2FBQ0o7WUFDRCxFQUFFLENBQUMsQ0FBRSxDQUFDLE1BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1osV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQ0QsR0FBRyxDQUFDLENBQW9CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVztnQkFBOUIsSUFBTSxTQUFTO2dCQUNoQixHQUFHLENBQUMsQ0FBaUIsVUFBUyxFQUFULFVBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVM7b0JBQXpCLElBQU0sTUFBTTtvQkFDYixFQUFFLENBQUMsQ0FBRSxTQUFTLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzNCLEtBQUssQ0FBQztvQkFDVixDQUFDO2lCQUNKO2FBQ0o7UUFDTCxDQUFDO1FBQ00saUJBQVksR0FBRyxVQUFDLEtBQWE7WUFDaEMsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQU0sR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUMvQyxHQUFHLENBQUMsQ0FBbUIsVUFBYSxFQUFiLFVBQUksQ0FBQyxRQUFRLEVBQWIsY0FBYSxFQUFiLElBQWE7Z0JBQS9CLElBQU0sUUFBUTtnQkFDZixFQUFFLENBQUMsQ0FBRSxLQUFLLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0IsQ0FBQzthQUNKO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDaEMsQ0FBQztRQUNNLGNBQVMsR0FBRztZQUNmLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztRQUM5QixDQUFDO1FBQ00sZ0JBQVcsR0FBRztZQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBQ00sZUFBVSxHQUFHLFVBQUMsSUFBUztZQUMxQixJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDL0MsRUFBRSxDQUFDLENBQUUsSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsR0FBRyxDQUFDLENBQWMsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUk7Z0JBQWpCLElBQU0sR0FBRztnQkFDVixHQUFHLENBQUMsQ0FBZ0IsVUFBUyxFQUFULFVBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVM7b0JBQXhCLElBQUksT0FBTztvQkFDWixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsT0FBTyxHQUFHLEdBQUcsQ0FBQzt3QkFDZCxLQUFLLENBQUM7b0JBQ1YsQ0FBQztpQkFDSjthQUNKO1lBQ0QsR0FBRyxDQUFDLENBQWMsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUk7Z0JBQWpCLElBQU0sR0FBRztnQkFDVixHQUFHLENBQUMsQ0FBZ0IsVUFBYSxFQUFiLFVBQUksQ0FBQyxRQUFRLEVBQWIsY0FBYSxFQUFiLElBQWE7b0JBQTVCLElBQUksT0FBTztvQkFDWixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsT0FBTyxHQUFHLEdBQUcsQ0FBQzt3QkFDZCxLQUFLLENBQUM7b0JBQ1YsQ0FBQztpQkFDSjthQUNKO1FBQ0wsQ0FBQztRQUNPLGVBQVUsR0FBRyxVQUFDLEdBQU0sRUFBRSxRQUFnQjtZQUMxQyxJQUFNLGVBQWUsR0FBVSxFQUFFLENBQUM7WUFDbEMsR0FBRyxDQUFDLENBQWMsVUFBZ0MsRUFBaEMsVUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFoQyxjQUFnQyxFQUFoQyxJQUFnQztnQkFBN0MsSUFBTSxHQUFHO2dCQUNWLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUNuQixXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUNELGVBQWUsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLFdBQVc7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtvQkFDbEIsV0FBVyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUN4QixVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUk7b0JBQ3BCLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDVixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7aUJBQzdCLENBQUMsQ0FBQzthQUNOO1lBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMzQixDQUFDO1FBaktHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxZQUFZLENBQUM7UUFDNUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLG1CQUFtQixDQUFDO1FBQ3RELElBQUksQ0FBQyw2QkFBNkIsR0FBRyxzQkFBc0IsQ0FBQztRQUM1RCxJQUFJLENBQUMseUJBQXlCLEdBQUcsVUFBVSxDQUFDO1FBQzVDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxvQkFBb0IsQ0FBQztJQUM3RCxDQUFDO0lBSUQsc0JBQVcscUNBQUk7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcseUNBQVE7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDZDQUFZO2FBQXZCLFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywyQ0FBVTthQUFyQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQTZJTCwwQkFBQztBQUFELENBQUM7QUE5S1ksa0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7QUNuQmhDLElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBYSxFQUFFLEtBQWE7SUFDMUMsTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzdDLENBQUMsQ0FBQztBQUVGLGtCQUFlLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7O0FDSnhCO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtJQUF5Siw2Q0FBNkMsMEJBQTBCLGFBQWE7QUFDN087QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0EseUZBQXlGLDhDQUE4Qyx1QkFBdUIseUVBQXlFO0FBQ3ZPO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7Ozs7QUNwQmpCLElBQU0sT0FBTyxHQUFHLFVBQUMsSUFBYTtJQUMxQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7O0FDSnZCO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0Esa0pBQTRKLFVBQVUseUJBQXlCLGFBQWE7QUFDNU07QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsNkZBQTZGLCtDQUErQyxxQkFBcUIsd0ZBQXdGO0FBQ3pQLENBQUM7QUFDRDs7QUFFQTtBQUNBLG1KQUE2SiwrQkFBK0IsMEJBQTBCLGFBQWE7QUFDbk87QUFDQSxDQUFDO0FBQ0QsNkVBQTZFOztBQUU3RTtBQUNBLG1IQUE4SCxzQkFBc0IsYUFBYTtBQUNqSztBQUNBO0FBQ0E7QUFDQSxrSkFBNEosNkJBQTZCLGFBQWE7QUFDdE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QseUlBQXlJOztBQUV6STtBQUNBO0FBQ0E7QUFDQSx1TEFBa00sc0JBQXNCLGFBQWE7QUFDck87QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEYsMkZBQTJGLHFCQUFxQix5RUFBeUU7QUFDekwsa0dBQWtHLGlEQUFpRDtBQUNuSixzRkFBc0YsdUJBQXVCLHlFQUF5RTtBQUN0TDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsdUJBQXVCLHlFQUF5RTtBQUN0TCw2VUFBNlUsa0RBQWtEO0FBQy9YLHNGQUFzRix1QkFBdUIseUVBQXlFO0FBQ3RMO0FBQ0EsNEdBQXFILHVJQUF1STtBQUM1UDtBQUNBLHlHQUFtSCxnSUFBZ0k7QUFDblA7QUFDQSxDQUFDLGtDQUFrQyxFOzs7Ozs7Ozs7Ozs7OztBQ2hFbkMsSUFBTSxNQUFNLEdBQUcsVUFBQyxHQUFHO0lBQ2YsSUFBTSxTQUFTLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ3JELElBQU0sVUFBVSxHQUFHLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLEdBQUcsTUFBTSxHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDNUUsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNOdEIsNEZBQXdFO0FBR3hFLElBQU0sT0FBTyxHQUFHLFVBQUMsTUFBZSxFQUFFLEtBQWE7SUFDM0MsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsSUFBSSxXQUFXLENBQUM7SUFDaEIsSUFBSSxZQUFZLENBQUM7SUFDakIsSUFBSSxZQUFZLENBQUM7SUFDakIsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ3pGLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssdUNBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxZQUFZLEdBQUcsMkVBQTJFO1lBQzFFLHFGQUFxRixDQUFDO1FBQ3RHLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQztRQUN4QyxvREFBb0Q7SUFDeEQsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLHVDQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEQsWUFBWSxHQUFHLG9GQUFvRjtZQUNuRiwyRUFBMkUsQ0FBQztRQUM1RixXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDekMscURBQXFEO0lBQ3pELENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLFlBQVksR0FBRyxvRkFBb0Y7WUFDbkYscUZBQXFGLENBQUM7UUFDdEcsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLFlBQVksR0FBRyx1Q0FBdUMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUNyRixDQUFDO0lBQ0QsTUFBTSxDQUFDLDRDQUE0QyxHQUFHLFNBQVM7VUFDdkQsOENBQThDO1VBQzlDLE1BQU0sQ0FBQyxFQUFFLEdBQUksSUFBSTtVQUNqQixjQUFjLEdBQUcsUUFBUSxHQUFHLEtBQUs7VUFDakMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxRQUFRO1VBQzNDLFdBQVc7VUFDWCxhQUFhO1VBQ2IsaUNBQWlDLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJO1FBQ3RELHNDQUFzQztVQUNwQyxLQUFLO1VBQ0wsU0FBUztVQUNULG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSztVQUN4QyxnQkFBZ0IsR0FBRyxZQUFZLEdBQUcsS0FBSztVQUN2Qyx5REFBeUQsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVM7VUFDbkYsWUFBWTtVQUNaLFFBQVEsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVDdkIsSUFBTSxVQUFVLEdBQUcsVUFBQyxJQUFhO0lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFFRixrQkFBZSxVQUFVLENBQUMiLCJmaWxlIjoiZ3JpZG9vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiaGFuZGxlYmFycy9ydW50aW1lXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImhhbmRsZWJhcnMucnVudGltZVwiLCBcImpRdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHcmlkb29cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkdyaWRvb1wiXSA9IGZhY3Rvcnkocm9vdFtcIkhhbmRsZWJhcnNcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2FmMjA1ZGU5MWY5N2VlNTkzMjciLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIkhhbmRsZWJhcnNcIixcImFtZFwiOlwiaGFuZGxlYmFycy5ydW50aW1lXCIsXCJjb21tb25qczJcIjpcImhhbmRsZWJhcnMvcnVudGltZVwiLFwiY29tbW9uanNcIjpcImhhbmRsZWJhcnMvcnVudGltZVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IGRpc2FibGVkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImRpc2FibGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzYWJsZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvRGlzYWJsZWQudHMiLCJjb25zdCBBZGQgPSAobGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiAobGVmdCArIHJpZ2h0KS50b1N0cmluZygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0FkZC50cyIsImltcG9ydCB7IElQYWdpbmF0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBJUGFnaW5hdGlvbklucHV0IH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvbklucHV0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFnaW5hdGlvbkRhdGE6IElQYWdpbmF0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ2FsY3VsYXRlUGFnaW5hdGlvbkRhdGEgPSAocGFnaW5hdGlvbklucHV0OiBJUGFnaW5hdGlvbklucHV0KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb25EYXRhOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID0gcGFnaW5hdGlvbklucHV0LnBhZ2VJbmRleDtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucGFnZVNpemUgPSBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemU7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnBhZ2VTaXplcyA9IHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZXM7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnRvdGFsQ291bnQgPSBwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudDtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID0gTWF0aC5jZWlsKHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50IC8gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplKTtcclxuICAgICAgICAgICAgY29uc3QgbWluTnVtID0gKChwYWdpbmF0aW9uSW5wdXQucGFnZUluZGV4IC0gMSkgKiBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemUpO1xyXG4gICAgICAgICAgICBjb25zdCBsb3dlckxpbWl0T2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplID4gcGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5yYW5nZSA9IHtcclxuICAgICAgICAgICAgICAgIG1pbiA6IG1pbk51bSArIDEsXHJcbiAgICAgICAgICAgICAgICBtYXggOiBtaW5OdW0gKyBsb3dlckxpbWl0T2Zmc2V0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5maXJzdFBhZ2VMaW5rRGlzYWJsZWQgPSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPT09IDEgfHwgcGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID09PSAxO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5sYXN0UGFnZUxpbmtEaXNhYmxlZCAgPSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPT09IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPT09IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyk7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnByZXZQYWdlTGlua0Rpc2FibGVkICA9IHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCAtIDEpIDw9IDA7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLm5leHRQYWdlTGlua0Rpc2FibGVkICA9IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9PT0gcGFnaW5hdGlvbkRhdGEucGFnZUluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ICsgMSkgPj0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzO1xyXG4gICAgICAgICAgICBQYWdlci5wYWdpbmF0aW9uRGF0YSA9IHBhZ2luYXRpb25EYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFBhZ2luYXRpb25EYXRhKCk6IElQYWdpbmF0aW9uIHtcclxuICAgICAgICByZXR1cm4gUGFnZXIucGFnaW5hdGlvbkRhdGE7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9wYWdpbmF0aW9uL1BhZ2VyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLy4uL21vZGVscy9JQ29sdW1uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbW9uVXRpbCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRDb2x1bW5PYmplY3QgPSAoY29sdW1uSWQ6IHN0cmluZywgY29sdW1uczogSUNvbHVtbltdKTogSUNvbHVtbiA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbklkID09IG51bGwgfHwgY29sdW1ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmV0Q29sOiBJQ29sdW1uO1xyXG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sOiBJQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2wuaWQgPT09IGNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICByZXRDb2wgPSBjb2w7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0Q29sO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBTZXRPcmRlciA9IChjb2x1bW5JZDogc3RyaW5nLCBvcmRlckJ5OiBHcmlkT3JkZXJEaXJlY3Rpb24sIGNvbHVtbnM6IElDb2x1bW5bXSk6IElDb2x1bW4gPT4ge1xyXG4gICAgICAgIGlmIChjb2x1bW5JZCA9PSBudWxsIHx8IGNvbHVtbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJldENvbDogSUNvbHVtbjtcclxuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbDogSUNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sLmlkID09PSBjb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgY29sLm9yZGVyQnkgPSBvcmRlckJ5O1xyXG4gICAgICAgICAgICAgICAgcmV0Q29sID0gY29sO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldENvbDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL3V0aWwvQ29sdW1uVXRpbC50cyIsImV4cG9ydCBlbnVtIEdyaWRPcmRlckRpcmVjdGlvbiB7XHJcbiAgICBOb25lID0gXCJOb25lXCIsXHJcbiAgICBBc2MgPSBcIkFzY1wiLFxyXG4gICAgRGVzYyA9IFwiRGVzY1wiLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvbW9kZWxzL0dyaWRPcmRlckRpcmVjdGlvbi50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJndWkgcnYtcGFyZW50XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZ249XFxcInRvcFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWx0ZXItdHlwZT1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnR5cGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnR5cGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInR5cGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbHRlci1rZXk9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWx0ZXItdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5hY3R1YWxWYWx1ZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYWN0dWFsVmFsdWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImFjdHVhbFZhbHVlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbHVtbk5hbWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtbk5hbWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNvbHVtbk5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmlsdGVyYWJsZSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlwiXG4gICAgKyAoKHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29sdW1uVmFsdWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtblZhbHVlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb2x1bW5WYWx1ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tbC01IHJ2LWNoaWxkIGd1aS1jYXB0aW9uXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYWRkIGhvdmVyIG0tbC01IGN1cnNvci1wb2ludGVyIGFkZEZpbHRlclxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLW1pbnVzIGhvdmVyIG0tbC01IGN1cnNvci1wb2ludGVyIHJlbW92ZUZpbHRlclxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiPHRyIGlkPVxcXCJkZXRhaWxzLXJvdy1cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaW5kZXggfHwgKGRhdGEgJiYgZGF0YS5pbmRleCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaW5kZXhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiZ3VpIGd1aS1oaWRkZW4gZGV0YWlsc1Jvd1xcXCIgYXJpYS1saXZlPVxcXCJwb2xpdGVcXFwiPlxcclxcbiAgICA8dGQgY29sc3Bhbj1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmxlbmd0aCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGVuZ3RoIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsZW5ndGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiZ3VpIHZlcnkgY29tcGFjdCBzZWxlY3RhYmxlIGNlbGxlZCB0YWJsZSBkZXRhaWxzVGFibGUgbS1sLTM3IHAtNVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgc3R5bGU9XFxcIndpZHRoOiBhdXRvO1xcXCIgPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1haW5Sb3dDb2xBcnJheSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC90ZD5cXHJcXG48L3RyPlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2dyaWQtZGV0YWlscy1yb3cuaGJzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICA8b3B0aW9uIFwiXG4gICAgKyBhbGlhczEoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNlbGVjdGVkLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0ucGFnaW5hdGlvbkRhdGEgOiBkZXB0aHNbMV0pKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VTaXplIDogc3RhY2sxKSxkZXB0aDAse1wibmFtZVwiOlwiU2VsZWN0ZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIj5cIlxuICAgICsgYWxpYXMxKGNvbnRhaW5lci5sYW1iZGEoZGVwdGgwLCBkZXB0aDApKVxuICAgICsgXCI8L29wdGlvbj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiPGRpdiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIiBjbGFzcz1cXFwiZ3VpIGZsZXggamMtc2IgZ3VpLXN1YmhlYWRpbmctMSB0ZXh0LWxlZnQgbS0wXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tci0xMFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgZmlyc3RMaW5rXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZmlyc3RQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBmaXJzdCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIHRoZSBmaXJzdCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1wYWdlPVxcXCIxXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tcHJldmlvdXNcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIHByZXZMaW5rXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnByZXZQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wcmV2UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJHbyB0byB0aGUgcHJldmlvdXMgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJHbyB0byB0aGUgcHJldmlvdXMgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtcGFnZT1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcbWF0aC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksXCItXCIsMSx7XCJuYW1lXCI6XCJtYXRoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLWxlZnRcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICBQcmV2XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBwYWdlci1pbnB1dC1jb250YWluZXIgbWVkaXVtIGgtMzAgaW5wdXQgZmxleCBqYy1zYiBtLXItMTBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tci01XFxcIj4gUGFnZSA8L2Rpdj5cXHJcXG4gICAgICAgIDxpbnB1dCAgY2xhc3M9XFxcImd1aSBwYWdlci1pbnB1dCBoLTMwIHctNTAgbS1yLTVcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJHbyB0byBQYWdlIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlSW5kZXggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gUGFnZSBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlSW5kZXggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlBhZ2UgTnVtYmVyIC4uLlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1vZi1wYWdlcy1zY2FuXFxcIiBcXHJcXG4gICAgICAgICAgICAgZGF0YS1udW1iZXItb2YtcGFnZXM9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub09mUGFnZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICBvZiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm9PZlBhZ2VzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLXItMTBcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG5leHRMaW5rXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5leHRQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5uZXh0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJHbyB0byB0aGUgbmV4dCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIHRoZSBuZXh0IHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBkYXRhLXBhZ2U9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXG1hdGgudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlSW5kZXggOiBzdGFjazEpLFwiK1wiLDEse1wibmFtZVwiOlwibWF0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIiA+XFxyXFxuICAgICAgICAgICAgTmV4dFxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLXJpZ2h0XFxcIj48L2k+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBsYXN0TGlua1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sYXN0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGFzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gdGhlIGxhc3QgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJHbyB0byB0aGUgbGFzdCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1wYWdlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm9PRnBhZ2VzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tbmV4dFxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIGZsZXggamMtc2IgdGV4dC1yaWdodCBtLTBcXFwiPlxcclxcbiAgICA8bGFiZWwgIGZvcj1cXFwicGFnZS1zaXplLXNlbGVjdG9yXFxcIiBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIG0tci0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgUm93cyBQZXIgUGFnZVxcclxcbiAgICA8L2xhYmVsPlxcclxcbiAgICA8c2VsZWN0IGlkPVxcXCJwYWdlLXNpemUtc2VsZWN0b3JcXFwiIFxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgcGFnZVNpemVTZWxlY3RvciBtLXItMTAgaC0zMFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlU2l6ZXMgOiBzdGFjazEpLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvc2VsZWN0PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS1yLTEwXFxcIj5cXHJcXG4gICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnJhbmdlIDogc3RhY2sxKSkgIT0gbnVsbCA/IHN0YWNrMS5taW4gOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgLSBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5yYW5nZSA6IHN0YWNrMSkpICE9IG51bGwgPyBzdGFjazEubWF4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIG9mIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS50b3RhbENvdW50IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIGl0ZW1zXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLWZvb3Rlci5oYnNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBtYXRoID0gKGx2YWx1ZTogbnVtYmVyLCBvcGVyYXRvcjogc3RyaW5nLCBydmFsdWU6IG51bWJlciwgb3B0aW9ucyk6IG51bWJlciA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFwiK1wiOiBsdmFsdWUgKyBydmFsdWUsXHJcbiAgICAgICAgXCItXCI6IGx2YWx1ZSAtIHJ2YWx1ZSxcclxuICAgICAgICBcIipcIjogbHZhbHVlICogcnZhbHVlLFxyXG4gICAgICAgIFwiL1wiOiBsdmFsdWUgLyBydmFsdWUsXHJcbiAgICAgICAgXCIlXCI6IGx2YWx1ZSAlIHJ2YWx1ZSxcclxuICAgIH1bb3BlcmF0b3JdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWF0aDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9tYXRoLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWNvbnRhaW5lci5sYW1iZGE7XG5cbiAgcmV0dXJuIFwiPHRyIGFyaWEtcm93aW5kZXg9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFkZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnJvd0luZGV4IDogZGVwdGgwKSwxLHtcIm5hbWVcIjpcIkFkZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwibWFpblJvdyBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxCb29sQXR0cmlidXRlLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaXNBbGxTZWxlY3RlZCA6IGRlcHRoMCksXCJhY3RpdmVcIix7XCJuYW1lXCI6XCJCb29sQXR0cmlidXRlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiIGRhdGEtcGstYXR0cj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmtleUNvbHVtbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgcm9sZT1cXFwicm93XFxcIiA+XFxyXFxuICAgIDx0ZCBjbGFzcz1cXFwiZXhwYW5zaW9uQXJyb3dzXFxcIiBcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJndWkgZmxleCBqYy1zYlxcXCJcXHJcXG4gICAgICAgIGFyaWEtY29saW5kZXg9XFxcIjFcXFwiXFxyXFxuICAgICAgICByb2xlPVxcXCJncmlkY2VsbFxcXCI+XFxyXFxuICAgICAgICA8aSBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciB0byBleHBhbmQgdGhlIGRldGFpbHMgUm93XFxcIiBcXHJcXG4gICAgICAgICAgIHRpdGxlPVxcXCJFeHBhbmQgdGhlIGRldGFpbHMgUm93XFxcIiBcXHJcXG4gICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRldGFpbHMtcm93LVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLWRvd24gZXhwYW5kRGV0YWlsc1Jvd0ljb24gY3Vyc29yLXBvaW50ZXJcXFwiIFxcclxcbiAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiIFxcclxcbiAgICAgICAgICAgYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIj48L2k+XFxyXFxuICAgICAgICA8aSBhcmlhLWxhYmVsPVxcXCJQcmVzcyBlbnRlciB0byBjb2xsYXBzZSB0aGUgZGV0YWlscyBSb3dcXFwiIFxcclxcbiAgICAgICAgICAgdGl0bGU9XFxcIkNvbGxhcHNlIHRoZSBkZXRhaWxzIFJvd1xcXCIgXFxyXFxuICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVxcXCJkZXRhaWxzLXJvdy1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi11cCBDb2xsYXBzZURldGFpbHNSb3dJY29uIGN1cnNvci1wb2ludGVyIGd1aS1oaWRkZW5cXFwiIFxcclxcbiAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiIFxcclxcbiAgICAgICAgICAgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgPC90ZD5cXHJcXG4gICAgPHRkIHJvbGU9XFxcImdyaWRjZWxsXFxcIlxcclxcbiAgICAgICAgYXJpYS1jb2xpbmRleD1cXFwiMlxcXCIgPlxcclxcbiAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XFxcIkNoZWNrYm94IHRvIHNlbGVjdCB0aGUgcm93IHdpdGggSWQgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmtleUNvbHVtbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQm9vbEF0dHJpYnV0ZS50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlzQWxsU2VsZWN0ZWQgOiBkZXB0aDApLFwiY2hlY2tlZFwiLHtcIm5hbWVcIjpcIkJvb2xBdHRyaWJ1dGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAua2V5Q29sdW1uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwic2VsZWN0LWtleS1jaGVja2JveCBjdXJzb3ItcG9pbnRlclxcXCI+XFxyXFxuICAgIDwvdGQ+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYWluUm93Q29sQXJyYXkgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC90cj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcZ3JpZC1kZXRhaWxzLXJvdy5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImdyaWQtZGV0YWlscy1yb3dcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgPHRkIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYWN0dWFsVmFsdWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgYXJpYS1jb2xpbmRleD1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQWRkLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRhdGEgJiYgZGF0YS5pbmRleCksMyx7XCJuYW1lXCI6XCJBZGRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYm9keS1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1uVmFsdWUgOiBkZXB0aDApLCBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC90ZD5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1haW5Sb3dBcnJheSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2dyaWQtbWFpbi1yb3cuaGJzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IGJvb2xBdHRyaWJ1dGUgPSAoYm9vbDogYm9vbGVhbiwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBzdHIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYm9vbEF0dHJpYnV0ZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9Cb29sQXR0cmlidXRlLnRzIiwiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IENvbFNldHRpbmdzSGFuZGxlciB9IGZyb20gXCIuLi9ldmVudEhhbmRsZXJzL0NvbFNldHRpbmdzSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBTZWxlY3RFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9TZWxlY3RFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgSUdyaWRPcmRlciB9IGZyb20gXCIuLi9tb2RlbHMvSUdyaWRPcmRlclwiO1xyXG5pbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb25JbnB1dCB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25JbnB1dFwiO1xyXG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XHJcbmltcG9ydCB7IERldGFpbHNSb3dIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0ZpbHRlckNsaWNrSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBIYW5kbGVyTmFtZXMgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lc1wiO1xyXG5pbXBvcnQgeyBIZWFkZXJDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0hlYWRlckNsaWNrSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9JRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IElIYW5kbGVyQ2hhaW4gfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0lIYW5kbGVyQ2hhaW5cIjtcclxuaW1wb3J0IHsgUGFnZVNlYXJjaEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsSGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBUb2dnbGVDb2x1bW5IYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9Ub2dnbGVDb2x1bW5IYW5kbGVyXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi8uLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5pbXBvcnQgeyBHcmlkVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSBcIi4vLi4vdXRpbC9Db2x1bW5VdGlsXCI7XHJcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuL0lHcmlkT3B0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQ8VD4ge1xyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQ2hhaW46IEFycmF5PElIYW5kbGVyQ2hhaW48VD4+O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHRvZ2dsZUhhbmRsZXI6IFRvZ2dsZUNvbHVtbkhhbmRsZXI8VD47XHJcbiAgICBwcml2YXRlIHNjcm9sbEhhbmRsZXI6IFNjcm9sbEhhbmRsZXI8VD47XHJcbiAgICBwcml2YXRlIG1hbmFnZUNvbEhhbmRsZXI6IENvbFNldHRpbmdzSGFuZGxlcjxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gbmV3IENvbmZpZ1N0b3JlPFQ+KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IG5ldyBHcmlkVGVtcGxhdGVTZXJ2aWNlKHRoaXMuY29uZmlnU3RvcmUpO1xyXG4gICAgICAgIHRoaXMuSW5pdEhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJpbmREYXRhID0gKGRhdGE6IFRbXSwgcGFnaW5hdGlvbklucHV0PzogSVBhZ2luYXRpb25JbnB1dCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBQYWdlci5DYWxjdWxhdGVQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uSW5wdXQpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlRGF0YSA9IFBhZ2VyLnBhZ2luYXRpb25EYXRhO1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsUmVuZGVyKGRhdGEsIHBhZ2VEYXRhKTtcclxuICAgICAgICB9LCAxICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVSZW5kZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VEYXRhID0gUGFnZXIucGFnaW5hdGlvbkRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxSZW5kZXIodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGEsIHBhZ2VEYXRhKTtcclxuICAgICAgICB9LCAxICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0Q29sQ29uZmlnID0gKGNvbENvbmZpZzogSUNvbHVtbltdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMgPSBjb2xDb25maWc7XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPOiBVcGRhdGUgUm93IEluZGV4XHJcbiAgICBwdWJsaWMgdXBkYXRlUm93cyA9IChyb3dzOiBUW10pID0+IHtcclxuICAgICAgICBpZiAoIHJvd3MgPT09IHVuZGVmaW5lZCB8fCAhcm93cy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLnVwZGF0ZVJvd3Mocm93cyk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gJCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmtleUNvbHVtbjtcclxuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0h0bWwgPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuZ2V0VGVtcGxhdGVGb3JPbmVSb3cocm93KTtcclxuICAgICAgICAgICAgY29uc3Qgcm93SnEgPSAkKHJvd0h0bWwpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuZmluZChcIi5tYWluUm93XCIpLmVhY2goKGk6IG51bWJlciwgbVI6IEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ySnEgPSAkKG1SKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBrSWQgPSBtckpxLmF0dHIoXCJkYXRhLXBrLWF0dHJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHBrSWQgPT09IHJvd1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXJKcS5odG1sKHJvd0pxWzBdLmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbXJKcS5uZXh0KCkuaHRtbChyb3dKcVsyXS5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcHVibGljIGJpbmRNYW5hZ2VDb2x1bXMgPSAobWFuYWdlQ29sQ29udGFpbmVyPzogSFRNTEVsZW1lbnQsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQgPT4ge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLm1hbmFnZUNvbEhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiAhZm9yY2UgKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY29uc3QgaHRtbCA9IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRNYW5hZ2VDb2x1bW5zSHRtbCgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkobWFuYWdlQ29sQ29udGFpbmVyXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5tYW5hZ2VDb2xTZXR0aW5nc0NvbnRhaW5lclxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAvLyAgICAgdGhpcy50b2dnbGVIYW5kbGVyID0gbmV3IFRvZ2dsZUNvbHVtbkhhbmRsZXIodGhpcy5jb25maWdTdG9yZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpKTtcclxuICAgIC8vICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXIgPSBlbGVtZW50WzBdO1xyXG4gICAgLy8gICAgIHRoaXMubWFuYWdlQ29sSGFuZGxlciA9IG5ldyBDb2xTZXR0aW5nc0hhbmRsZXI8VD4oalF1ZXJ5KGVsZW1lbnQpLCB0aGlzLmNvbmZpZ1N0b3JlLCB0aGlzLnRvZ2dsZUhhbmRsZXIpO1xyXG4gICAgLy8gICAgIGVsZW1lbnQuZmluZChcIi5jb2wtc2V0dGluZ3MtY29udGFpbmVyXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAvLyAgICAgdGhpcy5tYW5hZ2VDb2xIYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xyXG4gICAgLy8gICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZSh0aGlzLmRvY3VtZW50UmVzaXplSGFuZGxlckZvckNzKTtcclxuICAgIC8vICAgICBqUXVlcnkoZG9jdW1lbnQpLmNsaWNrKHRoaXMuZG9jdW1lbnRDbGlja0hhbmRsZXJGb3JDcyk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBwdWJsaWMgYXBwbHlDb2x1bW5Db25maWcgPSAoY29sdW1uczogSUNvbHVtbltdKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy50b2dnbGVIYW5kbGVyLmFwcGx5Q29sdW1uQ29uZmlnKGNvbHVtbnMpO1xyXG4gICAgLy8gICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuR2V0TWFuYWdlQ29sdW1uc0h0bWwoKTtcclxuICAgIC8vICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5tYW5hZ2VDb2xTZXR0aW5nc0NvbnRhaW5lclxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAvLyAgICAgZWxlbWVudC5maW5kKFwiLmNvbC1zZXR0aW5ncy1jb250YWluZXJcIikuaHRtbChodG1sKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0T3JkZXIgPSAob3JkZXJCeUxpc3Q6IElHcmlkT3JkZXJbXSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgY29sIG9mIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgIGNvbC5vcmRlckJ5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3JkZXJCeUxpc3QgPT09IHVuZGVmaW5lZCB8fCBvcmRlckJ5TGlzdCA9PT0gbnVsbCB8fCBvcmRlckJ5TGlzdC5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvcmRlckNvbCBvZiBvcmRlckJ5TGlzdCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9yZGVyQ29sLmNvbElkID09PSBjb2wuaWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLm9yZGVyQnkgPSBvcmRlckNvbC5vcmRlckJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIGlmICggcGFyZW50RWxlbWVudCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50Lm9mZigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zdCBtYW5hZ2VDb250YWluZXJFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5tYW5hZ2VDb2xTZXR0aW5nc0NvbnRhaW5lcik7XHJcbiAgICAgICAgLy8gaWYgKCBtYW5hZ2VDb250YWluZXJFbGVtZW50ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgLy8gICAgIG1hbmFnZUNvbnRhaW5lckVsZW1lbnQub2ZmKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgICQod2luZG93KS5vZmYoXCJyZXNpemVcIiwgdGhpcy5kb2N1bWVudFJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihcImNsaWNrXCIsIHRoaXMuZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xyXG4gICAgICAgICQod2luZG93KS5vZmYoXCJyZXNpemVcIiwgdGhpcy5kb2N1bWVudFJlc2l6ZUhhbmRsZXJGb3JDcyk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKFwiY2xpY2tcIiwgdGhpcy5kb2N1bWVudENsaWNrSGFuZGxlckZvckNzKTtcclxuICAgICAgICBpZiAoIHRoaXMuc2Nyb2xsSGFuZGxlciAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjcm9sbEhhbmRsZXIudW5XYXRjaFdpZHRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbnRlcm5hbFJlbmRlciA9IChkYXRhOiBUW10sIHBhZ2luYXRpb25JbnB1dD86IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gMDtcclxuICAgICAgICBsZXQgbGFzdEluZGV4ID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNodW5rU2l6ZSArIHRoaXMuZ2V0SW5pdGlhbFJvd0NvdW50KCk7XHJcbiAgICAgICAgbGFzdEluZGV4ID0gbGFzdEluZGV4ID49IGRhdGEubGVuZ3RoID8gZGF0YS5sZW5ndGggLSAxIDogbGFzdEluZGV4O1xyXG4gICAgICAgIGNvbnN0IGdyaWRDb250ZW50OiBzdHJpbmcgPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuR2V0Rmlyc3RUZW1wbGF0ZShkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gZ3JpZENvbnRlbnQ7XHJcbiAgICAgICAgaWYgKCB0aGlzLnNjcm9sbEhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNjcm9sbEhhbmRsZXIgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5yZW1vdmVIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5yZXNldFBhcmVudE9mZnNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuc2V0Q3VycmVudEluZGV4KGxhc3RJbmRleCArIDEgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBuZXcgU2Nyb2xsSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UsIGxhc3RJbmRleCArIDEpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNjcm9sbEhhbmRsZXIud2F0Y2hXaWR0aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRGb2N1c1RvTGFzdEVsZW1lbnQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SW5pdGlhbFJvd0NvdW50ID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKGpRdWVyeSh3aW5kb3cpLmlubmVySGVpZ2h0KCkgKiAwLjY1ICkgLyAzMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0SGFuZGxlcnMgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IG5ldyBEZXRhaWxzUm93SGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcclxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLkRldGFpbHNSb3csXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcclxuICAgICAgICAgICAgaGFuZGxlcjogIG5ldyBGaWx0ZXJDbGlja0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXHJcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5GaWx0ZXJBY3Rpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcclxuICAgICAgICAgICAgaGFuZGxlcjogbmV3IEhlYWRlckNsaWNrSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcclxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLkhlYWRlckNsaWNrLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IG5ldyBQYWdlU2VhcmNoSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcclxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLlBhZ2VTZWFyY2gsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcGFyZW50RWxlbWVudDtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xyXG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgU2VsZWN0RXZlbnRIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQsIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSksXHJcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5Db2xTZXR0aW5ncyxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyKTtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLmNsaWNrKHRoaXMuZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG9jdW1lbnRSZXNpemVIYW5kbGVyRm9yQ3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm1hbmFnZUNvbEhhbmRsZXIub25SZXNpemUoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9jdW1lbnRDbGlja0hhbmRsZXJGb3JDcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFuYWdlQ29sSGFuZGxlci5vbkRvY3VtZW50Q2xpY2soZXZlbnQpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkb2N1bWVudFJlc2l6ZUhhbmRsZXJGb3JTY3JvbGwgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm1hbmFnZUNvbEhhbmRsZXIub25SZXNpemUoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9jdW1lbnRDbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmhhbmRsZXIub25Eb2N1bWVudENsaWNrKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9jdW1lbnRSZXNpemVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5mb3JFYWNoKCh2YWx1ZTogSUhhbmRsZXJDaGFpbjxUPik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLm9uRG9jdW1lbnRDbGljayhldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldEZvY3VzVG9MYXN0RWxlbWVudCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb25maWdTdG9yZS5nZXRGb2N1c2FibGVFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmlyc3RMaW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAuZmlyc3RMaW5rXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5leHRMaW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAubmV4dExpbmtcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJldkxpbmtcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5wcmV2TGlua1wiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJsYXN0TGlua1wiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1mb290ZXIgLmxhc3RMaW5rXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInBhZ2VTaXplU2VsZWN0b3JcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5wYWdlU2l6ZVNlbGVjdG9yXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInBhZ2VyLWlucHV0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAucGFnZXItaW5wdXRcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRoXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFIZWFkZXJJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Rm9jdXNhYmxlO1xyXG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1oZWFkZXIgdGhcIikuZWFjaCgoaW5kZXg6IG51bWJlciwgZWxlbTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlYWNoSGVhZGVyID0gJChlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlYWNoSGVhZGVySWQgPSBlYWNoSGVhZGVyLmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGVhY2hIZWFkZXJJZCA9PT0gZGF0YUhlYWRlcklkICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGb2N1c2FibGUgPSBlYWNoSGVhZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG5ld0ZvY3VzYWJsZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGb2N1c2FibGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQodW5kZWZpbmVkKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvbWFpbi9HcmlkLnRzIiwiaW1wb3J0IHsgSUdyaWRPcHRpb25zIH0gZnJvbSBcIi4uL21haW4vSUdyaWRPcHRpb25zXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0b3JlPFQ+IHtcclxuICAgIHB1YmxpYyBvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD47XHJcbiAgICBwcml2YXRlIGZvY3VzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0R3JpZE9wdGlvbnM6IElHcmlkT3B0aW9uczxUPiA9IHtcclxuICAgICAgICBhbmltYXRpb25UaW1lOiAyMDAsXHJcbiAgICAgICAgY2h1bmtTaXplOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgLy8gbWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgaHlicmlkRnVuY3Rpb246IChjb2x1bW46IElDb2x1bW4sIHJvdzogVCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInRydWVcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleUNvbHVtbjogXCJcIixcclxuICAgICAgICAvLyBvbkNvbFNldHRpbmdzQ2hhbmdlOiAoY29sQ29uZmlnOiBJQ29sdW1uW10pOiB2b2lkID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gTm8gQ29kZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgb25DbGlja0ZpbHRlcjogKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBhY3Rpb25UeXBlOiBGaWx0ZXJBY3Rpb25UeXBlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2tIZWFkZXI6IChjb2x1bW46IHN0cmluZywgZGlyZWN0aW9uOiBHcmlkT3JkZXJEaXJlY3Rpb24pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgLy8gTm8gY29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25QYWdlU2VhcmNoOiAocGFnZVNpemU6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgLy8gTm8gY29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TZWxlY3Q6IChyb3dzOiBUW10pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgLy8gTm8gQ29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0NhcHRpb246IGZhbHNlLFxyXG4gICAgICAgIGNhcHRpb246IFwiXCIsXHJcbiAgICAgICAgc3VtbWFyeTogXCJcIixcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLmV4dGVuZE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSBhIHZhbGlkIGNvbnRhaW5lciBFbGVtZW50IG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNvbHVtbnMuc29ydCgocHJldiwgbmV4dCkgPT4gcHJldi5vcmRlciAtIG5leHQub3JkZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBPcHRpb25zKG9wdGlvbnM6IElHcmlkT3B0aW9uczxUPikge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IE9wdGlvbnMoKTogSUdyaWRPcHRpb25zPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEZvY3VzYWJsZUVsZW1lbnQgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEZvY3VzYWJsZUVsZW1lbnQgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0SGlkZGVuT25Db25maWcgPSAoYm9vbDogYm9vbGVhbiwgY29sdW1uSWQ/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29sLmhpZGRlbiA9IGJvb2w7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sLmlkID09PSBjb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5oaWRkZW4gPSBib29sO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBleHRlbmRPcHRpb25zID0gKGlucHV0T3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KTogSUdyaWRPcHRpb25zPFQ+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zID0galF1ZXJ5LmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0R3JpZE9wdGlvbnMsIGlucHV0T3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9jb25maWcvQ29uZmlnU3RvcmUudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RXZlbnRIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5LCBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlID0gZ3JpZFRlbXBsYXRlU2VydmljZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLnNlbGVjdC1rZXktY2hlY2tib3hcIiAsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC52YWwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLnNlbGVjdFJvd3ModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRzKFwiLm1haW5Sb3dcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuZGVTZWxlY3RSb3dzKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50cyhcIi5tYWluUm93XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25TZWxlY3QodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLlNlbGVjdGVkLCBjaGVja2VkKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLnNlbGVjdC1hbGwtY2hlY2tib3hcIiAsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnNlbGVjdC1rZXktY2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2Uuc2VsZWN0QWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5tYWluVGFibGUgLm1haW5Sb3dcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuZGVTZWxlY3RBbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLm1haW5UYWJsZSAubWFpblJvd1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25TZWxlY3QodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLlNlbGVjdGVkLCBjaGVja2VkKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2VsZWN0RXZlbnRIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzUm93SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtYm9keSAuZXhwYW5zaW9uQXJyb3dzIGlcIiwgdGhpcy5leHBhbmRSb3cpO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImtleXVwXCIsIFwiLnRhYmxlLWJvZHkgLmV4cGFuc2lvbkFycm93cyBpXCIsIHRoaXMuZXhwYW5kUm93KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZXhwYW5kUm93ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgaWYgKCBldmVudC50eXBlICE9PSBcImNsaWNrXCIgJiYgKGV2ZW50LnR5cGUgPT09IFwia2V5dXBcIiAmJiBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMikgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXJyb3cgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBkZXRhaWxzUm93ID0gYXJyb3cuY2xvc2VzdChcInRyXCIpLm5leHQoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50SWNvbiA9IGFycm93LmhpZGUoKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGNvbnN0IG90aGVySWNvbiA9IGFycm93LnNpYmxpbmdzKFwiaVwiKS5zaG93KCkuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgaWYgKGFycm93Lmhhc0NsYXNzKFwiZXhwYW5kRGV0YWlsc1Jvd0ljb25cIikpIHtcclxuICAgICAgICAgICAgb3RoZXJJY29uLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgZGV0YWlsc1Jvdy5zbGlkZURvd24odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJY29uLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgZGV0YWlsc1Jvdy5zbGlkZVVwKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3RoZXJJY29uLmZvY3VzKCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0RldGFpbHNSb3dIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuLi9tYWluL0lHcmlkT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSBcIi4uL3V0aWwvQ29sdW1uVXRpbFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgSUZpbHRlckNsaWNrRGVsZWdhdGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUZpbHRlckNsaWNrRGVsZWdhdGVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDbGlja0hhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1ib2R5IC5kZXRhaWxzUm93IC5kZXRhaWxzVGFibGUgdGQgaVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRUZCA9IGVsZW1lbnQucGFyZW50cyhcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXIta2V5XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmVudFRkLmF0dHIoXCJkYXRhLWZpbHRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHBhcmVudFRkLmF0dHIoXCJkYXRhLWZpbHRlci10eXBlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBDb21tb25VdGlsLkdldENvbHVtbk9iamVjdChrZXksIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gdW5kZWZpbmVkIHx8IGNvbCA9PT0gbnVsbCB8fCAhY29sLmZpbHRlcmFibGUgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZpbHRlckFjdGlvbjogRmlsdGVyQWN0aW9uVHlwZSA9IEZpbHRlckFjdGlvblR5cGUuQWRkO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhcInJlbW92ZUZpbHRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyQWN0aW9uID0gRmlsdGVyQWN0aW9uVHlwZS5NaW51cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ2xpY2tGaWx0ZXIoa2V5LCB2YWx1ZSwgZmlsdGVyQWN0aW9uLCB0eXBlKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0ZpbHRlckNsaWNrSGFuZGxlci50cyIsImV4cG9ydCBlbnVtIEZpbHRlckFjdGlvblR5cGUge1xyXG4gICAgQWRkID0gXCJBZGRcIixcclxuICAgIE1pbnVzID0gXCJNaW51c1wiLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvbW9kZWxzL0ZpbHRlckFjdGlvblR5cGUudHMiLCJleHBvcnQgZW51bSBIYW5kbGVyTmFtZXMge1xyXG4gICAgRmlsdGVyQWN0aW9uLFxyXG4gICAgSGVhZGVyQ2xpY2ssXHJcbiAgICBTY3JvbGwsXHJcbiAgICBQYWdlU2VhcmNoLFxyXG4gICAgRGV0YWlsc1JvdyxcclxuICAgIFRvZ2dsZUNvbHVtbixcclxuICAgIENvbFNldHRpbmdzLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXMudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUdyaWRPcHRpb25zIH0gZnJvbSBcIi4uL21haW4vSUdyaWRPcHRpb25zXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi4vdXRpbC9Db2x1bW5VdGlsXCI7XHJcbmltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHtJSGVhZGVyQ2xpY2tEZWxlZ2F0ZX0gZnJvbSBcIi4vLi4vbW9kZWxzL0lIZWFkZXJDbGlja0RlbGVnYXRlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ2xpY2tIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSB3YXNIZWFkZXJDbGlja2VkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBsYXN0Rm9jdXNlZEVsZW1lbnQ6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgdGhpcy5oYW5kbGVIZWFkZXJTb3J0KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgdGhpcy5oYW5kbGVIZWFkZXJTb3J0KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJtb3VzZWRvd25cIiAsIFwiLnRhYmxlLWhlYWRlciB0aFwiLCB0aGlzLmhhbmRsZU1vdXNlRG93bik7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiZm9jdXNpblwiLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgdGhpcy5oYW5kbGVIZWFkZXJGb2N1cyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlRG93biA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy53YXNIZWFkZXJDbGlja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlSGVhZGVyRm9jdXMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgZm9jdXNcclxuICAgICAgICBpZiAodGhpcy5sYXN0Rm9jdXNlZEVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy53YXNIZWFkZXJDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0Rm9jdXNlZEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHRoaXMud2FzSGVhZGVyQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBldmVudC5kYXRhLmNsaWNrZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgbGVmdFBvc3RpdGlvbiA9IGhlYWRlci5wb3NpdGlvbigpLmxlZnQ7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyV2lkdGggPSBoZWFkZXIud2lkdGgoKTtcclxuICAgICAgICBjb25zdCB0YWJsZUJvZHkgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpO1xyXG4gICAgICAgIGNvbnN0IG1haW5UYWJsZUJvZHkgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5tYWluVGFibGVcIik7XHJcbiAgICAgICAgY29uc3QgdmlzaWJsZVRib2R5V2lkdGggPSB0YWJsZUJvZHkud2lkdGgoKTtcclxuICAgICAgICBjb25zdCBtYXhTY3JvbGwgPSBtYWluVGFibGVCb2R5LndpZHRoKCkgLSB2aXNpYmxlVGJvZHlXaWR0aDtcclxuICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBsZWZ0UG9zdGl0aW9uICsgaGVhZGVyV2lkdGggKiAyO1xyXG4gICAgICAgIGxldCBzY3JvbGxMZWZ0Qnk7XHJcbiAgICAgICAgaWYgKCBjdXJyZW50UG9zaXRpb24gPiB2aXNpYmxlVGJvZHlXaWR0aCkge1xyXG4gICAgICAgICAgICBzY3JvbGxMZWZ0QnkgPSBsZWZ0UG9zdGl0aW9uID4gbWF4U2Nyb2xsID8gbWF4U2Nyb2xsIDogbGVmdFBvc3RpdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzY3JvbGxMZWZ0QnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZUJvZHkuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0QnkpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVIZWFkZXJTb3J0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgaWYgKCBldmVudC50eXBlICE9PSBcImNsaWNrXCIgJiYgKGV2ZW50LnR5cGUgPT09IFwia2V5dXBcIiAmJiBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMikgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpLmNsb3Nlc3QoXCJ0aFwiKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJJZCA9IGVsZW1lbnQuYXR0cihcImRhdGEtaGVhZGVyLWlkXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGhlYWRlcklkLCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKGNvbCA9PT0gdW5kZWZpbmVkIHx8IGNvbCA9PT0gbnVsbCB8fCAhY29sLnNvcnRhYmxlICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycm93SWNvbnMgPSBlbGVtZW50LmZpbmQoXCJpXCIpO1xyXG4gICAgICAgIGNvbnN0IHVwQXJyb3dJY29uID0gYXJyb3dJY29ucy5maXJzdCgpO1xyXG4gICAgICAgIGNvbnN0IGRvd25BcnJvd0ljb24gPSBhcnJvd0ljb25zLmxhc3QoKTtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uOiBHcmlkT3JkZXJEaXJlY3Rpb247XHJcbiAgICAgICAgaWYgKGFycm93SWNvbnMuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICBpZiAodXBBcnJvd0ljb24uaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gR3JpZE9yZGVyRGlyZWN0aW9uLkRlc2M7XHJcbiAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBkb3duQXJyb3dJY29uLnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IEdyaWRPcmRlckRpcmVjdGlvbi5Bc2M7XHJcbiAgICAgICAgICAgICAgICBkb3duQXJyb3dJY29uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHVwQXJyb3dJY29uLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IEdyaWRPcmRlckRpcmVjdGlvbi5Bc2M7XHJcbiAgICAgICAgICAgIHVwQXJyb3dJY29uLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5hdHRyKFwiYXJpYS1zb3J0XCIsIGRpcmVjdGlvbiA9PT0gR3JpZE9yZGVyRGlyZWN0aW9uLkRlc2MgPyBcImRlc2NlbmRpbmdcIiA6IFwiYXNjZW5kaW5nXCIpO1xyXG4gICAgICAgIENvbW1vblV0aWwuU2V0T3JkZXIoaGVhZGVySWQsIGRpcmVjdGlvbiwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNsaWNrSGVhZGVyKGNvbC5vcmRlckJ5Q29sIHx8IGhlYWRlcklkLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXIudHMiLCJpbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgUGFnZXIgfSBmcm9tIFwiLi4vcGFnaW5hdGlvbi9QYWdlclwiO1xyXG5pbXBvcnQgeyBJUGFnZVNlYXJjaENsaWNrRGVsZWdhdGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvSVBhZ2VTZWFyY2hDbGlja0RlbGVnYXRlXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZVNlYXJjaEhhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLmZpcnN0TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIDEpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLm5leHRMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAucHJldkxpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggLSAxKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5sYXN0TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi50YWJsZS1mb290ZXIgLnBhZ2VTaXplU2VsZWN0b3JcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWw6IG51bWJlciA9ICtqUXVlcnkoZXZlbnQudGFyZ2V0KS52YWwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKHZhbCwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwia2V5cHJlc3NcIiwgXCIudGFibGUtZm9vdGVyIC5wYWdlci1pbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlwID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VEYXRhID0gUGFnZXIuUGFnaW5hdGlvbkRhdGE7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsOiBudW1iZXIgPSAraXAudmFsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc05hTih2YWwpIHx8IHZhbCA+IHBhZ2VEYXRhLm5vT2ZQYWdlcyB8fCB2YWwgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXAudmFsKHBhZ2VEYXRhLnBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2gocGFnZURhdGEucGFnZVNpemUsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUluZGV4Q291bnRlciB9IGZyb20gXCIuLy4uL3ZpcnR1YWxpemF0aW9uL0luZGV4Q291bnRlclwiO1xyXG5pbXBvcnQgeyBTY3JvbGxEaXJlY3Rpb24gfSBmcm9tIFwiLi8uLi92aXJ0dWFsaXphdGlvbi9TY3JvbGxEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgVmlydHVhbGl6ZXIgfSBmcm9tIFwiLi8uLi92aXJ0dWFsaXphdGlvbi9WaXJ0dWFsaXplclwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcm9sbEhhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgdmlydHVhbGl6ZXI6IFZpcnR1YWxpemVyO1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD47XHJcbiAgICBwcml2YXRlIHJlbmRlcmluZzogYm9vbGVhbiA9ICBmYWxzZTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBsZWZ0T2Zmc2V0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHBhcmVudE9mZlNldExlZnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdhdGNoZXM6IGFueVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+LCBjdXJyZW50SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IGdyaWRUZW1wbGF0ZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEN1cnJlbnRJbmRleCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuQ3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudEluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRJbmRleDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBObyBPcFxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLm9uKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIikub2ZmKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZXNldFBhcmVudE9mZnNldCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudE9mZlNldExlZnQgPSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikub2Zmc2V0KCkubGVmdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3YXRjaFdpZHRoID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50T2ZmU2V0TGVmdCA9IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIHRoaXMud2F0Y2hlcy5wdXNoKHNldEludGVydmFsKHRoaXMuc2V0SGVhZGVyT2Zmc2V0LCAzMDApKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1bldhdGNoV2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMud2F0Y2hlcyA9PT0gbnVsbCApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHdhdGNoIG9mIHRoaXMud2F0Y2hlcykge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHdhdGNoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZVJlc2l6ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRCb2R5T2JqID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKTtcclxuICAgICAgICBpZiAodGhpcy5sZWZ0T2Zmc2V0ID09PSB1bmRlZmluZWQgfHwgdGhpcy5sZWZ0T2Zmc2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikuY3NzKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IC0xICogdEJvZHlPYmouc2Nyb2xsTGVmdCgpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsVGFibGVIZWlnaHQgPSB0Qm9keU9iai5maW5kKFwiLm1haW5UYWJsZVwiKS5oZWlnaHQoKTtcclxuICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXJIZWlnaHQgPSB0Qm9keU9iai5oZWlnaHQoKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmluZykge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0Qm9keU9iai5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZiAoKHNjcm9sbENvbnRhaW5lckhlaWdodCArIHNjcm9sbFRvcCApIC0gKGFjdHVhbFRhYmxlSGVpZ2h0ICogMC44ICkgPiAwICkge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhTGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGxhc3RJbmRleCA9IHRoaXMuY3VycmVudEluZGV4ICsgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNodW5rU2l6ZTtcclxuICAgICAgICAgICAgaWYgKCBsYXN0SW5kZXggPj0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGFMZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuRGF0YUxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaHRtbCAgPSBqUXVlcnkodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLmdldFRlbXBsYXRlKHRoaXMuY3VycmVudEluZGV4LCBsYXN0SW5kZXgpKTtcclxuICAgICAgICAgICAgdEJvZHlPYmouZmluZChcIi5tYWluVGFibGVCb2R5XCIpLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50SW5kZXgoIGxhc3RJbmRleCArIDEgKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIZWFkZXJPZmZzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIGlmICggdGhpcy5wYXJlbnRPZmZTZXRMZWZ0ICE9PSBsZWZ0ICkge1xyXG4gICAgICAgICAgICBjb25zdCB0Qm9keU9iaiA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnRPZmZzZXQgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmxlZnRPZmZzZXQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMubGVmdE9mZnNldCAtICh0aGlzLnBhcmVudE9mZlNldExlZnQgLSBsZWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi50YWJsZS1oZWFkZXJcIilcclxuICAgICAgICAgICAgICAgIC5vZmZzZXQoe2xlZnQ6IHRoaXMubGVmdE9mZnNldCwgdG9wOiAwfSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2ZmU2V0TGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgICAgIHRCb2R5T2JqLnNjcm9sbExlZnQodEJvZHlPYmouc2Nyb2xsTGVmdCgpIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TY3JvbGxIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xyXG5pbXBvcnQgKiBhcyBHcmlkRGV0YWlsc1Jvd1RlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1kZXRhaWxzLXJvdy5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZEZvb3RlciBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtZm9vdGVyLmhic1wiO1xyXG5pbXBvcnQgKiBhcyBHcmlkTWFpblJvd1RlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1tYWluLXJvdy5oYnNcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlQ29sdW1uVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhic1wiO1xyXG5pbXBvcnQgKiBhcyBHcmlkVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2hicy9ncmlkLmhic1wiO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLy4uL21vZGVscy9JQ29sdW1uXCI7XHJcbmludGVyZmFjZSBJTWFpbkNvbFJvd0FycmF5IHtcclxuICAgIGNvbHVtblZhbHVlOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBoaWRkZW46IGJvb2xlYW47XHJcbiAgICBhY3R1YWxWYWx1ZTogc3RyaW5nO1xyXG4gICAgY29sdW1uTmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZpbHRlcmFibGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdyaWRUZW1wbGF0ZVNlcnZpY2UgPFQ+IHtcclxuICAgIHByaXZhdGUgZGF0YTogVFtdO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZDogVFtdID0gW107XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvckdyaWQ6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3c6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvckRldGFpbHNSb3c6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvckZvb3RlcjogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sOiBhbnk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkID0gR3JpZFRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3cgPSBHcmlkTWFpblJvd1RlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckRldGFpbHNSb3cgPSBHcmlkRGV0YWlsc1Jvd1RlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckZvb3RlciA9IEdyaWRGb290ZXI7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sID0gTWFuYWdlQ29sdW1uVGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNBbGxTZWxlY3RlZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZC5sZW5ndGggIT09IDAgJiYgdGhpcy5zZWxlY3RlZC5sZW5ndGggPT09IHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IERhdGEoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBTZWxlY3RlZCgpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBDdXJyZW50SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IERhdGFMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8vIEZvciBGaXJzdCAgUmVuZGVyIC0gVXBkYXRlIEhlYWRlciAsIEJvZHksIFBhZ2luYXRpb25cclxuICAgIHB1YmxpYyBHZXRGaXJzdFRlbXBsYXRlID0gKGRhdGE6IFRbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICBjb25zdCBtYWluUm93QXJyYXkgPSB0aGlzLkdldFJvd3NIdG1sKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckdyaWQoe1xyXG4gICAgICAgICAgICBzaG93Q2FwdGlvbjogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLnNob3dDYXB0aW9uLFxyXG4gICAgICAgICAgICBzdW1tYXJ5OiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuc3VtbWFyeSxcclxuICAgICAgICAgICAgcm93TGVuZ3RoOiB0aGlzLmRhdGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyxcclxuICAgICAgICAgICAgbWFpblJvd0FycmF5LFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YTogUGFnZXIuUGFnaW5hdGlvbkRhdGEsXHJcbiAgICAgICAgICAgIGNhcHRpb246IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jYXB0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gRm9yIFZpcnR1YWxpemF0b24gUmVuZGVyIC0gQm9keVxyXG4gICAgcHVibGljIGdldFRlbXBsYXRlID0gKGZpcnN0SW5kZXg6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheSA9IHRoaXMuR2V0Um93c0h0bWwoZmlyc3RJbmRleCwgbGFzdEluZGV4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFpblJvdyh7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zLFxyXG4gICAgICAgICAgICBtYWluUm93QXJyYXksXHJcbiAgICAgICAgICAgIGNhcHRpb246IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jYXB0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gVXBkYXRlIG9ubHkgb25lIFJvd1xyXG4gICAgcHVibGljIGdldFRlbXBsYXRlRm9yT25lUm93ID0gKHJvdzogVCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlTdHIgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZW1wdHlWYWx1ZTtcclxuICAgICAgICBjb25zdCBtYWluUm93Q29sQXJyYXkgPSB0aGlzLmdldE1haW5Sb3cocm93LCBlbXB0eVN0cik7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5ID0gW3tcclxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZDogdGhpcy5pc0FsbFNlbGVjdGVkKCksXHJcbiAgICAgICAgICAgIGtleUNvbHVtbjogcm93W3RoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW5dLFxyXG4gICAgICAgICAgICBtYWluUm93Q29sQXJyYXksXHJcbiAgICAgICAgICAgIGxlbmd0aDogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMubGVuZ3RoLFxyXG4gICAgICAgIH1dO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93KHttYWluUm93QXJyYXl9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRNYW5hZ2VDb2x1bW5zSHRtbCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYW5hZ2VDb2woe2NvbHVtbnM6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFJvd3NIdG1sID0gKGZpcnN0SW5kZXg6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBhbnlbXSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5U3RyID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmVtcHR5VmFsdWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93OiBUID0gdGhpcy5kYXRhW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluUm93Q29sQXJyYXk6IElNYWluQ29sUm93QXJyYXlbXSA9IHRoaXMuZ2V0TWFpblJvdyhyb3csIGVtcHR5U3RyKTtcclxuICAgICAgICAgICAgbWFpblJvd0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcm93SW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICBpc0FsbFNlbGVjdGVkOiB0aGlzLmlzQWxsU2VsZWN0ZWQoKSxcclxuICAgICAgICAgICAgICAgIGtleUNvbHVtbjogcm93W3RoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW5dLFxyXG4gICAgICAgICAgICAgICAgbWFpblJvd0NvbEFycmF5LFxyXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucy5sZW5ndGgsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFpblJvd0FycmF5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNlbGVjdFJvd3MgPSAocm93SWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XHJcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RlZCBvZiB0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmICggcm93SWQgPT09IHNlbGVjdGVkW2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCAhZXhpc3RzICkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5wdXNoKHJvd0lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCB0b0JlQWRkZWQgb2YgbmV3U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBvbmVSb3cgb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRvQmVBZGRlZCA9PT0gb25lUm93W2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKG9uZVJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVTZWxlY3RSb3dzID0gKHJvd0lkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XHJcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RlZCBvZiB0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmICggcm93SWQgIT09IHNlbGVjdGVkW2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5wdXNoKHNlbGVjdGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gbmV3U2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2VsZWN0QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVTZWxlY3RBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZVJvd3MgPSAocm93czogVFtdKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmtleUNvbHVtbjtcclxuICAgICAgICBpZiAoIHJvd3MgPT09IHVuZGVmaW5lZCB8fCAhcm93cy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkYXRhUm93IG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd1trZXldID09PSBkYXRhUm93W2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVJvdyA9IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGRhdGFSb3cgb2YgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd1trZXldID09PSBkYXRhUm93W2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVJvdyA9IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0TWFpblJvdyA9IChyb3c6IFQsIGVtcHR5U3RyOiBzdHJpbmcpOiBJTWFpbkNvbFJvd0FycmF5W10gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dDb2xBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSByb3dbY29sLmlkXTtcclxuICAgICAgICAgICAgaWYgKGNvbC5yZW5kZXJIeWJyaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmh5YnJpZEZ1bmN0aW9uKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW1wdHlTdHIgIT09IHVuZGVmaW5lZCAmJiBjb2x1bW5WYWx1ZSA9PT0gZW1wdHlTdHIpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluUm93Q29sQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNvbC50eXBlLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBjb2wuaGlkZGVuLFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsVmFsdWU6IHJvd1tjb2wuaWRdLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZTogY29sLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZDogY29sLmlkLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogY29sLmZpbHRlcmFibGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFpblJvd0NvbEFycmF5O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZS50cyIsImNvbnN0IHNlbGVjdGVkID0gKGlucHV0OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGlucHV0ID09PSB2YWx1ZSA/IFwic2VsZWN0ZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9TZWxlY3RlZC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8dHIgZGF0YS1oZWFkZXItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1oaWRkZW4tY2hlY2tib3ggZ3VpIG0tci0xMFxcXCIgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ2hlY2tlZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oaWRkZW4gOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBvZi1oaWRkZW4gcC0xMCBtaW4tdy01MCB3LWF1dG8gZmx1aWQtaCBmbGV4IGNvbHVtbiBjb250YWluZXJcXFwiID5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWhlYWRlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtaW5pIGZsdWlkIGljb24gaW5wdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWZpbHRlclxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBmaWx0ZXIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJzZWFyY2ggaWNvblxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS10LTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGxlZnQgc2hvdy1hbGwtY29sdW1uXFxcIj5TaG93IEFsbDwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIHJpZ2h0IGhpZGUtYWxsLWNvbHVtblxcXCI+SGlkZSBBbGw8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBjbGVhclxcXCI+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtdGFibGUgZ3VpIGZsdWlkIGgtOTAgb2YtYXV0byBwLTUgbS10LTEwXFxcIiA+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImd1aSBzbWFsbCB2ZXJ5IGJvcmRlci1sZXNzIGJhc2ljIGNvbXBhY3QgdGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhic1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBjaGVja2VkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuICFib29sID8gXCJjaGVja2VkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMiBtLTAgcC0wIHRleHQtbGVmdFxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNhcHRpb24gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L2NhcHRpb24+XFxyXFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDb2x1bW4udHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSxkZXB0aDAse1wibmFtZVwiOlwiQ29sdW1uXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zb3J0YWJsZSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oOCwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwiNlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXE9yZGVyZWQudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSxkZXB0aDAsKGRhdGEgJiYgZGF0YS5pbmRleCkse1wibmFtZVwiOlwiT3JkZXJlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiO1xufSxcIjhcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29saW5kZXg9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFkZC50c1wiKSkuY2FsbChhbGlhczEsKGRhdGEgJiYgZGF0YS5pbmRleCksMyx7XCJuYW1lXCI6XCJBZGRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1zb3J0PVxcXCJub25lXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiLTFcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgY3Vyc29yLWRlZmF1bHQgZGlzYWJsZWRcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQXJpYUhpZGRlbi50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhpZGRlbiA6IGRlcHRoMCkse1wibmFtZVwiOlwiQXJpYUhpZGRlblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cXFwiaGVhZGVyLVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGVhZGVyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIHN1YiBoZWFkZXJcXFwiPlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiaW5uZXItY29udGFpbmVyIGd1aSBmbHVpZCBjb250YWluZXJcXFwiIFxcclxcbiAgICBhcmlhLXJlYWRvbmx5PVxcXCJ0cnVlXFxcIiBcXHJcXG4gICAgYXJpYS1yb3djb3VudD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnJvd0xlbmd0aCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgIGFyaWEtY29sY291bnQ9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFkZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSwyLHtcIm5hbWVcIjpcIkFkZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICBhcmlhLWxhYmVsPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2FwdGlvbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgc3VtbWFyeT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnN1bW1hcnkgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgIGFyaWEtbGl2ZT1cXFwicG9saXRlXFxcIlxcclxcbiAgICByb2xlPVxcXCJncmlkXFxcIiBcXHJcXG4gICAgc3R5bGU9XFxcInBhZGRpbmc6MCU7XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBpZD1cXFwiaGVhZGVydGFibGVcXFwiIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgY2xhc3M9XFxcImd1aSBiYXNpYyBsYXJnZSBjb21wYWN0IHNvcnRhYmxlIGZpeGVkIHNpbmdsZSBsaW5lIHRhYmxlXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNob3dDYXB0aW9uIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8Y29sZ3JvdXAgY2xhc3M9XFxcImhlYWRlckNvbEdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L2NvbGdyb3VwPlxcclxcbiAgICAgICAgICAgIDx0aGVhZCByb2xlPVxcXCJyb3dncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciByb2xlPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvbGU9XFxcImNvbHVtbmhlYWRlclxcXCIgYXJpYS1jb2xpbmRleD1cXFwiMVxcXCI+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aCByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlNlbGVjdCBhbGwgcm93cyBvZiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2FwdGlvbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBDaGVja2JveFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb2xpbmRleD1cXFwiMlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cXFwic2VsZWN0LWFsbC1jaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICB0eXBlPVxcXCJjaGVja2JveFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XFxcInNlbGVjdC1hbGwtY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2VsZWN0LWFsbC1jaGVja2JveCBjdXJzb3ItcG9pbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgY2xhc3M9XFxcImd1aSBiYXNpYyBsYXJnZSBjb21wYWN0IGZpeGVkIHNlbGVjdGFibGUgc2luZ2xlIGxpbmUgdGFibGUgbWFpblRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8Y29sZ3JvdXAgY2xhc3M9XFxcImJvZHlDb2xHcm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPiBcXHJcXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvY29sZ3JvdXA+XFxyXFxuICAgICAgICAgICAgPHRib2R5IGNsYXNzPVxcXCJtYWluVGFibGVCb2R5XFxcIiByb2xlPVxcXCJyb3dncm91cFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtbWFpbi1yb3cuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJncmlkLW1haW4tcm93XCIsXCJkYXRhXCI6ZGF0YSxcImluZGVudFwiOlwiICAgICAgICAgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWZvb3RlciBndWkgaC1hdXRvIGZsdWlkLXcgZmxleCBqYy1zYiBwLTUgbS0wXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcZ3JpZC1mb290ZXIuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJncmlkLWZvb3RlclwiLFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2dyaWQuaGJzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IENvbHVtbiA9IChjb2wpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgY2FsY1dpZHRoOiBudW1iZXIgPSBjb2wuaGlkZGVuID8gMCA6IGNvbC53aWR0aDtcclxuICAgIGNvbnN0IGRhdGFBdHRySWQgPSAnZGF0YS1oZWFkZXItaWQ9XCInICsgY29sLmlkICsgJ1wiJztcclxuICAgIHJldHVybiAnPGNvbCBzdHlsZT1cIndpZHRoIDogJyArIGNhbGNXaWR0aCArICdweDtcIicgKyBkYXRhQXR0cklkICsgXCIgLz5cIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9Db2x1bW4udHMiLCJpbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vanMvbW9kZWxzL0dyaWRPcmRlckRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4uLy4uL2pzL21vZGVscy9JQ29sdW1uXCI7XHJcblxyXG5jb25zdCBvcmRlcmVkID0gKGNvbHVtbjogSUNvbHVtbiwgaW5kZXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBwYXJzZWRJbnQgPSBwYXJzZUludChpbmRleCwgMTApICsgMztcclxuICAgIGxldCBhcmlhU29ydFN0cjtcclxuICAgIGxldCBhcmlhTGFiZWxTdHI7XHJcbiAgICBsZXQgaGVhZGVySWNvbk1rO1xyXG4gICAgY29uc3QgYXJpYUhpZGRlblN0ciA9IGNvbHVtbi5oaWRkZW4gPyBcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJcIiA6IFwiIGFyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCJcIjtcclxuICAgIGNvbnN0IHRhYkluZGV4ID0gY29sdW1uLnNvcnRhYmxlICYmICFjb2x1bW4uaGlkZGVuID8gMCA6IC0xO1xyXG4gICAgaWYgKGNvbHVtbi5vcmRlckJ5ID09PSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjKSB7XHJcbiAgICAgICAgaGVhZGVySWNvbk1rID0gXCIgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy11cFxcXCIgYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiA+PC9pPiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPlwiO1xyXG4gICAgICAgIGFyaWFTb3J0U3RyID0gXCJhcmlhLXNvcnQ9XFxcImFzY2VuZGluZ1xcXCJcIjtcclxuICAgICAgICAvLyBhcmlhTGFiZWxTdHIgPSBjb2x1bW4ubmFtZSArIFwiIHNvcnRlZCBhc2NlbmRpbmdcIjtcclxuICAgIH0gZWxzZSBpZiAoY29sdW1uLm9yZGVyQnkgPT09IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjKSB7XHJcbiAgICAgICAgaGVhZGVySWNvbk1rID0gXCI8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFycm93LXVwIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duXFxcIiBhcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiID48L2k+XCI7XHJcbiAgICAgICAgYXJpYVNvcnRTdHIgPSBcImFyaWEtc29ydD1cXFwiZGVzY2VuZGluZ1xcXCJcIjtcclxuICAgICAgICAvLyBhcmlhTGFiZWxTdHIgPSBjb2x1bW4ubmFtZSArIFwiIHNvcnRlZCBkZXNjZW5kaW5nXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlckljb25NayA9IFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy11cCBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT4gXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctZG93biBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT5cIjtcclxuICAgICAgICBhcmlhU29ydFN0ciA9IFwiYXJpYS1zb3J0PVxcXCJub25lXFxcIlwiO1xyXG4gICAgICAgIGFyaWFMYWJlbFN0ciA9IFwiIFByZXNzIHNwYWNlIG9yIGVudGVyIHRvIHNvcnQgY29sdW1uIFwiICsgY29sdW1uLm5hbWUgKyBcIiBidXR0b25cIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcIjx0aCByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiIGFyaWEtY29saW5kZXg9XFxcIlwiICsgcGFyc2VkSW50XHJcbiAgICAgICAgICArIFwiXFxcIiBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyXFxcIiBpZD1cXFwiaGVhZGVyLVwiXHJcbiAgICAgICAgICArIGNvbHVtbi5pZCAgKyBcIlxcXCJcIlxyXG4gICAgICAgICAgKyBcIiB0YWJpbmRleD1cXFwiXCIgKyB0YWJJbmRleCArIFwiXFxcIiBcIlxyXG4gICAgICAgICAgKyBcIiBkYXRhLWhlYWRlci1pZD1cXFwiXCIgKyBjb2x1bW4uaWQgKyBcIlxcXCIgKyAgXCJcclxuICAgICAgICAgICsgYXJpYVNvcnRTdHJcclxuICAgICAgICAgICsgYXJpYUhpZGRlblN0clxyXG4gICAgICAgICAgKyBcIiBhcmlhLWxhYmVsbGVkQnk9XFxcImNvbHVtbkxhYmVsLVwiICsgY29sdW1uLmlkICsgXCJcXFwiXCJcclxuICAgICAgICAgIC8vICsgXCIgdGl0bGU9XFxcIlwiICsgY29sdW1uLm5hbWUgKyBcIlxcXCIgXCJcclxuICAgICAgICAgICsgXCIgID5cIlxyXG4gICAgICAgICAgKyBcIiA8c3BhbiBcIlxyXG4gICAgICAgICAgKyBcIiBpZD1cXFwiY29sdW1uTGFiZWwtXCIgKyBjb2x1bW4uaWQgKyBcIlxcXCIgXCJcclxuICAgICAgICAgICsgXCIgYXJpYS1sYWJlbD1cXFwiXCIgKyBhcmlhTGFiZWxTdHIgKyBcIlxcXCIgXCJcclxuICAgICAgICAgICsgXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ3VpIG5vLWNzcyBzdWIgaGVhZGVyIG0tci01XFxcIj5cIiArIGNvbHVtbi5uYW1lICsgXCI8L3NwYW4+XCJcclxuICAgICAgICAgICsgaGVhZGVySWNvbk1rXHJcbiAgICAgICAgICArIFwiIDwvdGg+XCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcmRlcmVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL09yZGVyZWQudHMiLCJjb25zdCBhcmlhSGlkZGVuID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIlwiIDogXCJhcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcmlhSGlkZGVuO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0FyaWFIaWRkZW4udHMiXSwic291cmNlUm9vdCI6IiJ9