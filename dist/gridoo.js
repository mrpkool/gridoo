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
    + "\" role=\"row\" >\r\n    <td class=\"expansionArrows\" \r\n        class=\"gui flex jc-sb\"\r\n        aria-colindex=\"1\"\r\n        role=\"gridcell\">\r\n        <i aria-label=\"Press enter to expand the details Row\" \r\n           title=\"Press enter to expand the details Row\" \r\n           aria-controls=\"details-row-"
    + alias2(alias3((data && data.index), depth0))
    + "\" \r\n           class=\"gui gui-icon gui-icon-chevron-down expandDetailsRowIcon cursor-pointer\" \r\n           tabindex=\"0\" \r\n           aria-hidden=\"false\"></i>\r\n        <i aria-label=\"Press enter to collapse the details Row\" \r\n           title=\"Press enter to collapse the details Row\" \r\n           aria-controls=\"details-row-"
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
            _this.configStore.Options.onClickHeader(headerId, direction);
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
    + "</caption>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Column.ts */ 27)).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"Column","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sortable : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Ordered.ts */ 28)).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,(data && data.index),{"name":"Ordered","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "                        <th aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\" \n                            role=\"columnheader\"\n                            aria-colindex=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(alias3,(data && data.index),3,{"name":"Add","hash":{},"data":data}))
    + "\"\n                            aria-sort=\"none\" \n                            title=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\n                            tabindex=\"-1\"\n                            class=\"gui cursor-default disabled\" \n                            "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/AriaHidden.ts */ 29)).call(alias3,(depth0 != null ? depth0.hidden : depth0),{"name":"AriaHidden","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                            id=\"header-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \n                            data-header-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n                            <span class=\"gui sub header\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\n                        </th>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"inner-container gui fluid container\" \n    aria-readonly=\"true\" \n    aria-rowcount=\""
    + alias2(alias1((depth0 != null ? depth0.rowLength : depth0), depth0))
    + "\" \n    aria-colcount=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(alias3,((stack1 = (depth0 != null ? depth0.columns : depth0)) != null ? stack1.length : stack1),2,{"name":"Add","hash":{},"data":data}))
    + "\"\n    aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\"\n    summary=\""
    + alias2(alias1((depth0 != null ? depth0.summary : depth0), depth0))
    + "\"\n    aria-live=\"polite\"\n    role=\"grid\" \n    style=\"padding:0%;\">\n    <div class=\"table-header\">\n        <table id=\"headertable\" role=\"presentation\" class=\"gui basic large compact sortable fixed single line table\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.showCaption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <colgroup class=\"headerColGroup\">\n                <col style=\"width:40px;\" />\n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <thead role=\"rowgroup\">\n                <tr role=\"row\">\n                    <th role=\"columnheader\" aria-colindex=\"1\"></th>\n                    <th role=\"columnheader\" \n                        aria-label=\"Select all rows of "
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + " Checkbox\" \n                        aria-colindex=\"2\"\n                        id=\"select-all-checkbox\">\n                        <input  type=\"checkbox\" \n                                aria-labelledby=\"select-all-checkbox\"\n                                class=\"select-all-checkbox cursor-pointer\">\n                    </th>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n            </thead>\n        </table>\n    </div>\n    <div class=\"table-body\">\n        <table role=\"presentation\" class=\"gui basic large compact fixed selectable single line table mainTable\">\n            <colgroup class=\"bodyColGroup\">\n                <col style=\"width:40px;\" /> \n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <tbody class=\"mainTableBody\" role=\"rowgroup\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-main-row.hbs */ 10),depth0,{"name":"grid-main-row","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n    </div>\n    <div class=\"table-footer gui h-auto fluid-w flex jc-sb p-5 m-0\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-footer.hbs */ 8),depth0,{"name":"grid-footer","data":data,"indent":"           ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n</div>";
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
    var headerIconMk;
    var ariaHiddenStr = column.hidden ? " aria-hidden=\"true\"" : " aria-hidden=\"false\"";
    var tabIndex = column.sortable && !column.hidden ? 0 : -1;
    if (column.orderBy === GridOrderDirection_1.GridOrderDirection.Asc) {
        headerIconMk = " <i class=\"gui gui-icon gui-icon-arrow-up\" aria-hidden=\"false\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
        ariaSortStr = "aria-sort=\"ascending\"";
    }
    else if (column.orderBy === GridOrderDirection_1.GridOrderDirection.Desc) {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down\" aria-hidden=\"false\" ></i>";
        ariaSortStr = "aria-sort=\"descending\"";
    }
    else {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
        ariaSortStr = "aria-sort=\"none\"";
    }
    return "<th role=\"columnheader\" aria-colindex=\"" + parsedInt
        + "\" tabindex=\"" + tabIndex + "\" class=\"gui cursor-pointer\" id=\"header-"
        + column.id + "\""
        + " data-header-id=\"" + column.id + "\" "
        + ariaSortStr
        + ariaHiddenStr
        + " aria-label=\"" + column.name + "\" "
        + " title=\"" + column.name + "\" "
        + "  >"
        + " <span class=\"gui sub header m-r-5\">" + column.name + "</span>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0Nzk5ODU4MDAzMWRhNmE1OGViYiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQWRkLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdpbmF0aW9uL1BhZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLWRldGFpbHMtcm93LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtZm9vdGVyLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtbWFpbi1yb3cuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Cb29sQXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluL0dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy9Db25maWdTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TZWxlY3RFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGVhZGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Db2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL09yZGVyZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0FyaWFIaWRkZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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anMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiaGFuZGxlYmFycy5ydW50aW1lXCIsIFwialF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkdyaWRvb1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiR3JpZG9vXCJdID0gZmFjdG9yeShyb290W1wiSGFuZGxlYmFyc1wiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0Nzk5ODU4MDAzMWRhNmE1OGViYiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgZGlzYWJsZWQgPSAoYm9vbDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IFwiZGlzYWJsZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNhYmxlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsImNvbnN0IEFkZCA9IChsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIChsZWZ0ICsgcmlnaHQpLnRvU3RyaW5nKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQWRkLnRzIiwiaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYWdpbmF0aW9uRGF0YTogSVBhZ2luYXRpb247XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDYWxjdWxhdGVQYWdpbmF0aW9uRGF0YSA9IChwYWdpbmF0aW9uSW5wdXQ6IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbkRhdGE6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPSBwYWdpbmF0aW9uSW5wdXQucGFnZUluZGV4O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSA9IHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucGFnZVNpemVzID0gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplcztcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEudG90YWxDb3VudCA9IHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPSBNYXRoLmNlaWwocGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQgLyBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemUpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5OdW0gPSAoKHBhZ2luYXRpb25JbnB1dC5wYWdlSW5kZXggLSAxKSAqIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyTGltaXRPZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemUgPiBwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemU7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgbWluIDogbWluTnVtICsgMSxcclxuICAgICAgICAgICAgICAgIG1heCA6IG1pbk51bSArIGxvd2VyTGltaXRPZmZzZXQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA9IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9PT0gMSB8fCBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPT09IDE7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLmxhc3RQYWdlTGlua0Rpc2FibGVkICA9IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9PT0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzKTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucHJldlBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSkgPD0gMDtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEubmV4dFBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggKyAxKSA+PSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXM7XHJcbiAgICAgICAgICAgIFBhZ2VyLnBhZ2luYXRpb25EYXRhID0gcGFnaW5hdGlvbkRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgUGFnaW5hdGlvbkRhdGEoKTogSVBhZ2luYXRpb24ge1xyXG4gICAgICAgIHJldHVybiBQYWdlci5wYWdpbmF0aW9uRGF0YTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL3BhZ2luYXRpb24vUGFnZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0dyaWRPcmRlckRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25VdGlsIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldENvbHVtbk9iamVjdCA9IChjb2x1bW5JZDogc3RyaW5nLCBjb2x1bW5zOiBJQ29sdW1uW10pOiBJQ29sdW1uID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uSWQgPT0gbnVsbCB8fCBjb2x1bW5zID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXRDb2w6IElDb2x1bW47XHJcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2w6IElDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbC5pZCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldENvbCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRDb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIFNldE9yZGVyID0gKGNvbHVtbklkOiBzdHJpbmcsIG9yZGVyQnk6IEdyaWRPcmRlckRpcmVjdGlvbiwgY29sdW1uczogSUNvbHVtbltdKTogSUNvbHVtbiA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbklkID09IG51bGwgfHwgY29sdW1ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmV0Q29sOiBJQ29sdW1uO1xyXG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sOiBJQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2wuaWQgPT09IGNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2wub3JkZXJCeSA9IG9yZGVyQnk7XHJcbiAgICAgICAgICAgICAgICByZXRDb2wgPSBjb2w7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0Q29sO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvdXRpbC9Db2x1bW5VdGlsLnRzIiwiZXhwb3J0IGVudW0gR3JpZE9yZGVyRGlyZWN0aW9uIHtcclxuICAgIE5vbmUgPSBcIk5vbmVcIixcclxuICAgIEFzYyA9IFwiQXNjXCIsXHJcbiAgICBEZXNjID0gXCJEZXNjXCIsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImd1aSBydi1wYXJlbnRcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlnbj1cXFwidG9wXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbHRlci10eXBlPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudHlwZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudHlwZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyLWtleT1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbHRlci12YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmFjdHVhbFZhbHVlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hY3R1YWxWYWx1ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiYWN0dWFsVmFsdWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29sdW1uTmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1uTmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29sdW1uTmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5maWx0ZXJhYmxlIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb2x1bW5WYWx1ZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1uVmFsdWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNvbHVtblZhbHVlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbS1sLTUgcnYtY2hpbGQgZ3VpLWNhcHRpb25cXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hZGQgaG92ZXIgbS1sLTUgY3Vyc29yLXBvaW50ZXIgYWRkRmlsdGVyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tbWludXMgaG92ZXIgbS1sLTUgY3Vyc29yLXBvaW50ZXIgcmVtb3ZlRmlsdGVyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8dHIgaWQ9XFxcImRldGFpbHMtcm93LVwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbmRleCB8fCAoZGF0YSAmJiBkYXRhLmluZGV4KSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpbmRleFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJndWkgZ3VpLWhpZGRlbiBkZXRhaWxzUm93XFxcIiBhcmlhLWxpdmU9XFxcInBvbGl0ZVxcXCI+XFxyXFxuICAgIDx0ZCBjb2xzcGFuPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubGVuZ3RoIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sZW5ndGggOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxlbmd0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgdmVyeSBjb21wYWN0IHNlbGVjdGFibGUgY2VsbGVkIHRhYmxlIGRldGFpbHNUYWJsZSBtLWwtMzcgcC01XFxcIiBcXHJcXG4gICAgICAgICAgICAgICBzdHlsZT1cXFwid2lkdGg6IGF1dG87XFxcIiA+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0NvbEFycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L3RkPlxcclxcbjwvdHI+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1kZXRhaWxzLXJvdy5oYnNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxvcHRpb24gXCJcbiAgICArIGFsaWFzMShfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTZWxlY3RlZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnBhZ2luYXRpb25EYXRhIDogZGVwdGhzWzFdKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlU2l6ZSA6IHN0YWNrMSksZGVwdGgwLHtcIm5hbWVcIjpcIlNlbGVjdGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCI+XCJcbiAgICArIGFsaWFzMShjb250YWluZXIubGFtYmRhKGRlcHRoMCwgZGVwdGgwKSlcbiAgICArIFwiPC9vcHRpb24+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIjxkaXYgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgY2xhc3M9XFxcImd1aSBmbGV4IGpjLXNiIGd1aS1zdWJoZWFkaW5nLTEgdGV4dC1sZWZ0IG0tMFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLXItMTBcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIGZpcnN0TGlua1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5maXJzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZmlyc3RQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBmaXJzdCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIHRoZSBmaXJzdCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1wYWdlPVxcXCIxXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tcHJldmlvdXNcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIHByZXZMaW5rXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnByZXZQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnByZXZQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1wYWdlPVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXG1hdGgudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlSW5kZXggOiBzdGFjazEpLFwiLVwiLDEse1wibmFtZVwiOlwibWF0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1sZWZ0XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgUHJldlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgcGFnZXItaW5wdXQtY29udGFpbmVyIG1lZGl1bSBoLTMwIGlucHV0IGZsZXggamMtc2IgbS1yLTEwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLXItNVxcXCI+IFBhZ2UgPC9kaXY+XFxyXFxuICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJndWkgcGFnZXItaW5wdXQgaC0zMCB3LTUwIG0tci01XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gUGFnZSBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIFBhZ2UgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJQYWdlIE51bWJlciAuLi5cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibm8tb2YtcGFnZXMtc2NhblxcXCIgXFxyXFxuICAgICAgICAgICAgIGRhdGEtbnVtYmVyLW9mLXBhZ2VzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm9PZlBhZ2VzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgb2YgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vT2ZQYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS1yLTEwXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBuZXh0TGlua1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5uZXh0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5uZXh0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJHbyB0byB0aGUgbmV4dCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIHRoZSBuZXh0IHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBkYXRhLXBhZ2U9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcbWF0aC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksXCIrXCIsMSx7XCJuYW1lXCI6XCJtYXRoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiID5cXHJcXG4gICAgICAgICAgICBOZXh0XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIGxhc3RMaW5rXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxhc3RQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxhc3RQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBsYXN0IHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gdGhlIGxhc3QgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtcGFnZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vT0ZwYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLW5leHRcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMSBmbGV4IGpjLXNiIHRleHQtcmlnaHQgbS0wXFxcIj5cXHJcXG4gICAgPGxhYmVsICBmb3I9XFxcInBhZ2Utc2l6ZS1zZWxlY3RvclxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBtLXItMTBcXFwiPlxcclxcbiAgICAgICAgICAgIFJvd3MgUGVyIFBhZ2VcXHJcXG4gICAgPC9sYWJlbD5cXHJcXG4gICAgPHNlbGVjdCBpZD1cXFwicGFnZS1zaXplLXNlbGVjdG9yXFxcIiBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIHBhZ2VTaXplU2VsZWN0b3IgbS1yLTEwIGgtMzBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZVNpemVzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3NlbGVjdD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tci0xMFxcXCI+XFxyXFxuICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5yYW5nZSA6IHN0YWNrMSkpICE9IG51bGwgPyBzdGFjazEubWluIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIC0gXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucmFuZ2UgOiBzdGFjazEpKSAhPSBudWxsID8gc3RhY2sxLm1heCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiBvZiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEudG90YWxDb3VudCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiBpdGVtc1xcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1mb290ZXIuaGJzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgbWF0aCA9IChsdmFsdWU6IG51bWJlciwgb3BlcmF0b3I6IHN0cmluZywgcnZhbHVlOiBudW1iZXIsIG9wdGlvbnMpOiBudW1iZXIgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBcIitcIjogbHZhbHVlICsgcnZhbHVlLFxyXG4gICAgICAgIFwiLVwiOiBsdmFsdWUgLSBydmFsdWUsXHJcbiAgICAgICAgXCIqXCI6IGx2YWx1ZSAqIHJ2YWx1ZSxcclxuICAgICAgICBcIi9cIjogbHZhbHVlIC8gcnZhbHVlLFxyXG4gICAgICAgIFwiJVwiOiBsdmFsdWUgJSBydmFsdWUsXHJcbiAgICB9W29wZXJhdG9yXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hdGg7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvbWF0aC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIjx0ciBhcmlhLXJvd2luZGV4PVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFkZC50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnJvd0luZGV4IDogZGVwdGgwKSwxLHtcIm5hbWVcIjpcIkFkZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwibWFpblJvdyBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEJvb2xBdHRyaWJ1dGUudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pc0FsbFNlbGVjdGVkIDogZGVwdGgwKSxcImFjdGl2ZVwiLHtcIm5hbWVcIjpcIkJvb2xBdHRyaWJ1dGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCIgZGF0YS1way1hdHRyPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAua2V5Q29sdW1uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiByb2xlPVxcXCJyb3dcXFwiID5cXHJcXG4gICAgPHRkIGNsYXNzPVxcXCJleHBhbnNpb25BcnJvd3NcXFwiIFxcclxcbiAgICAgICAgY2xhc3M9XFxcImd1aSBmbGV4IGpjLXNiXFxcIlxcclxcbiAgICAgICAgYXJpYS1jb2xpbmRleD1cXFwiMVxcXCJcXHJcXG4gICAgICAgIHJvbGU9XFxcImdyaWRjZWxsXFxcIj5cXHJcXG4gICAgICAgIDxpIGFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIHRvIGV4cGFuZCB0aGUgZGV0YWlscyBSb3dcXFwiIFxcclxcbiAgICAgICAgICAgdGl0bGU9XFxcIlByZXNzIGVudGVyIHRvIGV4cGFuZCB0aGUgZGV0YWlscyBSb3dcXFwiIFxcclxcbiAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZGV0YWlscy1yb3ctXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tZG93biBleHBhbmREZXRhaWxzUm93SWNvbiBjdXJzb3ItcG9pbnRlclxcXCIgXFxyXFxuICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxyXFxuICAgICAgICAgICBhcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxpIGFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIHRvIGNvbGxhcHNlIHRoZSBkZXRhaWxzIFJvd1xcXCIgXFxyXFxuICAgICAgICAgICB0aXRsZT1cXFwiUHJlc3MgZW50ZXIgdG8gY29sbGFwc2UgdGhlIGRldGFpbHMgUm93XFxcIiBcXHJcXG4gICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRldGFpbHMtcm93LVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLXVwIENvbGxhcHNlRGV0YWlsc1Jvd0ljb24gY3Vyc29yLXBvaW50ZXIgZ3VpLWhpZGRlblxcXCIgXFxyXFxuICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxyXFxuICAgICAgICAgICBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICA8L3RkPlxcclxcbiAgICA8dGQgcm9sZT1cXFwiZ3JpZGNlbGxcXFwiXFxyXFxuICAgICAgICBhcmlhLWNvbGluZGV4PVxcXCIyXFxcIiA+XFxyXFxuICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cXFwiQ2hlY2tib3ggdG8gc2VsZWN0IHRoZSByb3cgd2l0aCBJZCBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAua2V5Q29sdW1uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHJcXG4gICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEJvb2xBdHRyaWJ1dGUudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pc0FsbFNlbGVjdGVkIDogZGVwdGgwKSxcImNoZWNrZWRcIix7XCJuYW1lXCI6XCJCb29sQXR0cmlidXRlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmtleUNvbHVtbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInNlbGVjdC1rZXktY2hlY2tib3ggY3Vyc29yLXBvaW50ZXJcXFwiPlxcclxcbiAgICA8L3RkPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0NvbEFycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdHI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcZ3JpZC1kZXRhaWxzLXJvdy5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImdyaWQtZGV0YWlscy1yb3dcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgPHRkIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYWN0dWFsVmFsdWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgYXJpYS1jb2xpbmRleD1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxBZGQudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGF0YSAmJiBkYXRhLmluZGV4KSwzLHtcIm5hbWVcIjpcIkFkZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJib2R5LVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5WYWx1ZSA6IGRlcHRoMCksIGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3RkPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0FycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1tYWluLXJvdy5oYnNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgYm9vbEF0dHJpYnV0ZSA9IChib29sOiBib29sZWFuLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IHN0ciA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib29sQXR0cmlidXRlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0Jvb2xBdHRyaWJ1dGUudHMiLCJpbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBDb2xTZXR0aW5nc0hhbmRsZXIgfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9Db2xTZXR0aW5nc0hhbmRsZXJcIjtcbmltcG9ydCB7IFNlbGVjdEV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldmVudEhhbmRsZXJzL1NlbGVjdEV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgSUdyaWRPcmRlciB9IGZyb20gXCIuLi9tb2RlbHMvSUdyaWRPcmRlclwiO1xuaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XG5pbXBvcnQgeyBJUGFnaW5hdGlvbklucHV0IH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvbklucHV0XCI7XG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XG5pbXBvcnQgeyBEZXRhaWxzUm93SGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXJcIjtcbmltcG9ydCB7IEZpbHRlckNsaWNrSGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyXCI7XG5pbXBvcnQgeyBIYW5kbGVyTmFtZXMgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lc1wiO1xuaW1wb3J0IHsgSGVhZGVyQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXJcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0lFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IElIYW5kbGVyQ2hhaW4gfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0lIYW5kbGVyQ2hhaW5cIjtcbmltcG9ydCB7IFBhZ2VTZWFyY2hIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyXCI7XG5pbXBvcnQgeyBTY3JvbGxIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9TY3JvbGxIYW5kbGVyXCI7XG5pbXBvcnQgeyBUb2dnbGVDb2x1bW5IYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9Ub2dnbGVDb2x1bW5IYW5kbGVyXCI7XG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi8uLi91dGlsL0NvbHVtblV0aWxcIjtcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuL0lHcmlkT3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JpZDxUPiB7XG5cbiAgICBwcml2YXRlIGhhbmRsZUNoYWluOiBBcnJheTxJSGFuZGxlckNoYWluPFQ+PjtcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD47XG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XG4gICAgcHJpdmF0ZSB0b2dnbGVIYW5kbGVyOiBUb2dnbGVDb2x1bW5IYW5kbGVyPFQ+O1xuICAgIHByaXZhdGUgc2Nyb2xsSGFuZGxlcjogU2Nyb2xsSGFuZGxlcjxUPjtcbiAgICBwcml2YXRlIG1hbmFnZUNvbEhhbmRsZXI6IENvbFNldHRpbmdzSGFuZGxlcjxUPjtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElHcmlkT3B0aW9uczxUPikge1xuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gbmV3IENvbmZpZ1N0b3JlPFQ+KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UgPSBuZXcgR3JpZFRlbXBsYXRlU2VydmljZSh0aGlzLmNvbmZpZ1N0b3JlKTtcbiAgICAgICAgdGhpcy5Jbml0SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmluZERhdGEgPSAoZGF0YTogVFtdLCBwYWdpbmF0aW9uSW5wdXQ/OiBJUGFnaW5hdGlvbklucHV0KTogdm9pZCA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgUGFnZXIuQ2FsY3VsYXRlUGFnaW5hdGlvbkRhdGEocGFnaW5hdGlvbklucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VEYXRhID0gUGFnZXIucGFnaW5hdGlvbkRhdGE7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsUmVuZGVyKGRhdGEsIHBhZ2VEYXRhKTtcbiAgICAgICAgfSwgMSApO1xuICAgIH1cbiAgICBwdWJsaWMgcmVSZW5kZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFnZURhdGEgPSBQYWdlci5wYWdpbmF0aW9uRGF0YTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxSZW5kZXIodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGEsIHBhZ2VEYXRhKTtcbiAgICAgICAgfSwgMSApO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29sQ29uZmlnID0gKGNvbENvbmZpZzogSUNvbHVtbltdKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zID0gY29sQ29uZmlnO1xuICAgIH1cbiAgICAvLyBUT0RPOiBVcGRhdGUgUm93IEluZGV4XG4gICAgcHVibGljIHVwZGF0ZVJvd3MgPSAocm93czogVFtdKSA9PiB7XG4gICAgICAgIGlmICggcm93cyA9PT0gdW5kZWZpbmVkIHx8ICFyb3dzLmxlbmd0aCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UudXBkYXRlUm93cyhyb3dzKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gJCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0h0bWwgPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuZ2V0VGVtcGxhdGVGb3JPbmVSb3cocm93KTtcbiAgICAgICAgICAgIGNvbnN0IHJvd0pxID0gJChyb3dIdG1sKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKFwiLm1haW5Sb3dcIikuZWFjaCgoaTogbnVtYmVyLCBtUjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ySnEgPSAkKG1SKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwa0lkID0gbXJKcS5hdHRyKFwiZGF0YS1way1hdHRyXCIpO1xuICAgICAgICAgICAgICAgIGlmICggcGtJZCA9PT0gcm93W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbXJKcS5odG1sKHJvd0pxWzBdLmlubmVySFRNTCk7XG4gICAgICAgICAgICAgICAgICAgIG1ySnEubmV4dCgpLmh0bWwocm93SnFbMl0uaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHB1YmxpYyBiaW5kTWFuYWdlQ29sdW1zID0gKG1hbmFnZUNvbENvbnRhaW5lcj86IEhUTUxFbGVtZW50LCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAvLyAgICAgaWYgKHRoaXMubWFuYWdlQ29sSGFuZGxlciAhPT0gdW5kZWZpbmVkICYmICFmb3JjZSApIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjb25zdCBodG1sID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkdldE1hbmFnZUNvbHVtbnNIdG1sKCk7XG4gICAgLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkobWFuYWdlQ29sQ29udGFpbmVyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAvLyAgICAgdGhpcy50b2dnbGVIYW5kbGVyID0gbmV3IFRvZ2dsZUNvbHVtbkhhbmRsZXIodGhpcy5jb25maWdTdG9yZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KSk7XG4gICAgLy8gICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5tYW5hZ2VDb2xTZXR0aW5nc0NvbnRhaW5lciA9IGVsZW1lbnRbMF07XG4gICAgLy8gICAgIHRoaXMubWFuYWdlQ29sSGFuZGxlciA9IG5ldyBDb2xTZXR0aW5nc0hhbmRsZXI8VD4oalF1ZXJ5KGVsZW1lbnQpLCB0aGlzLmNvbmZpZ1N0b3JlLCB0aGlzLnRvZ2dsZUhhbmRsZXIpO1xuICAgIC8vICAgICBlbGVtZW50LmZpbmQoXCIuY29sLXNldHRpbmdzLWNvbnRhaW5lclwiKS5odG1sKGh0bWwpO1xuICAgIC8vICAgICB0aGlzLm1hbmFnZUNvbEhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XG4gICAgLy8gICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZSh0aGlzLmRvY3VtZW50UmVzaXplSGFuZGxlckZvckNzKTtcbiAgICAvLyAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayh0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyRm9yQ3MpO1xuICAgIC8vIH1cbiAgICAvLyBwdWJsaWMgYXBwbHlDb2x1bW5Db25maWcgPSAoY29sdW1uczogSUNvbHVtbltdKSA9PiB7XG4gICAgLy8gICAgIHRoaXMudG9nZ2xlSGFuZGxlci5hcHBseUNvbHVtbkNvbmZpZyhjb2x1bW5zKTtcbiAgICAvLyAgICAgY29uc3QgaHRtbCA9IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRNYW5hZ2VDb2x1bW5zSHRtbCgpO1xuICAgIC8vICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5tYW5hZ2VDb2xTZXR0aW5nc0NvbnRhaW5lclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xuICAgIC8vICAgICBlbGVtZW50LmZpbmQoXCIuY29sLXNldHRpbmdzLWNvbnRhaW5lclwiKS5odG1sKGh0bWwpO1xuICAgIC8vIH1cblxuICAgIHB1YmxpYyBzZXRPcmRlciA9IChvcmRlckJ5TGlzdDogSUdyaWRPcmRlcltdKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY29sIG9mIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKSB7XG4gICAgICAgICAgICBjb2wub3JkZXJCeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3JkZXJCeUxpc3QgPT09IHVuZGVmaW5lZCB8fCBvcmRlckJ5TGlzdCA9PT0gbnVsbCB8fCBvcmRlckJ5TGlzdC5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvcmRlckNvbCBvZiBvcmRlckJ5TGlzdCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJDb2wuY29sSWQgPT09IGNvbC5pZCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29sLm9yZGVyQnkgPSBvcmRlckNvbC5vcmRlckJ5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XG4gICAgICAgIGlmICggcGFyZW50RWxlbWVudCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5vZmYoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCBtYW5hZ2VDb250YWluZXJFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5tYW5hZ2VDb2xTZXR0aW5nc0NvbnRhaW5lcik7XG4gICAgICAgIC8vIGlmICggbWFuYWdlQ29udGFpbmVyRWxlbWVudCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAvLyAgICAgbWFuYWdlQ29udGFpbmVyRWxlbWVudC5vZmYoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAkKHdpbmRvdykub2ZmKFwicmVzaXplXCIsIHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKFwiY2xpY2tcIiwgdGhpcy5kb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgICQod2luZG93KS5vZmYoXCJyZXNpemVcIiwgdGhpcy5kb2N1bWVudFJlc2l6ZUhhbmRsZXJGb3JDcyk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihcImNsaWNrXCIsIHRoaXMuZG9jdW1lbnRDbGlja0hhbmRsZXJGb3JDcyk7XG4gICAgICAgIGlmICggdGhpcy5zY3JvbGxIYW5kbGVyICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnNjcm9sbEhhbmRsZXIudW5XYXRjaFdpZHRoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpbnRlcm5hbFJlbmRlciA9IChkYXRhOiBUW10sIHBhZ2luYXRpb25JbnB1dD86IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2h1bmtTaXplICsgdGhpcy5nZXRJbml0aWFsUm93Q291bnQoKTtcbiAgICAgICAgbGFzdEluZGV4ID0gbGFzdEluZGV4ID49IGRhdGEubGVuZ3RoID8gZGF0YS5sZW5ndGggLSAxIDogbGFzdEluZGV4O1xuICAgICAgICBjb25zdCBncmlkQ29udGVudDogc3RyaW5nID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkdldEZpcnN0VGVtcGxhdGUoZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBncmlkQ29udGVudDtcbiAgICAgICAgaWYgKCB0aGlzLnNjcm9sbEhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNjcm9sbEhhbmRsZXIgIT09IG51bGwgKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIucmVtb3ZlSGFuZGxlcigpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLnJlc2V0UGFyZW50T2Zmc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuc2V0Q3VycmVudEluZGV4KGxhc3RJbmRleCArIDEgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG5ldyBTY3JvbGxIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSwgbGFzdEluZGV4ICsgMSk7XG4gICAgICAgICAgICAvLyB0aGlzLnNjcm9sbEhhbmRsZXIud2F0Y2hXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5zZXRGb2N1c1RvTGFzdEVsZW1lbnQoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJbml0aWFsUm93Q291bnQgPSAoKTogbnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKGpRdWVyeSh3aW5kb3cpLmlubmVySGVpZ2h0KCkgKiAwLjY1ICkgLyAzMik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBJbml0SGFuZGxlcnMgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluID0gW107XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgRGV0YWlsc1Jvd0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuRGV0YWlsc1JvdyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiAgbmV3IEZpbHRlckNsaWNrSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5GaWx0ZXJBY3Rpb24sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogbmV3IEhlYWRlckNsaWNrSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5IZWFkZXJDbGljayxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgUGFnZVNlYXJjaEhhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuUGFnZVNlYXJjaCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgU2VsZWN0RXZlbnRIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQsIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuQ29sU2V0dGluZ3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyKTtcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayh0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvY3VtZW50UmVzaXplSGFuZGxlckZvckNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubWFuYWdlQ29sSGFuZGxlci5vblJlc2l6ZSgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb2N1bWVudENsaWNrSGFuZGxlckZvckNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubWFuYWdlQ29sSGFuZGxlci5vbkRvY3VtZW50Q2xpY2soZXZlbnQpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb2N1bWVudFJlc2l6ZUhhbmRsZXJGb3JTY3JvbGwgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5tYW5hZ2VDb2xIYW5kbGVyLm9uUmVzaXplKCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvY3VtZW50Q2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4uZm9yRWFjaCgodmFsdWU6IElIYW5kbGVyQ2hhaW48VD4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHZhbHVlLmhhbmRsZXIub25Eb2N1bWVudENsaWNrKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvY3VtZW50UmVzaXplSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLm9uRG9jdW1lbnRDbGljayhldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRGb2N1c1RvTGFzdEVsZW1lbnQgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbmZpZ1N0b3JlLmdldEZvY3VzYWJsZUVsZW1lbnQoKTtcbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZpcnN0TGlua1wiKSkge1xuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5maXJzdExpbmtcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXh0TGlua1wiKSkge1xuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5uZXh0TGlua1wiKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInByZXZMaW5rXCIpKSB7XG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1mb290ZXIgLnByZXZMaW5rXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGFzdExpbmtcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAubGFzdExpbmtcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlU2l6ZVNlbGVjdG9yXCIpKSB7XG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1mb290ZXIgLnBhZ2VTaXplU2VsZWN0b3JcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlci1pbnB1dFwiKSkge1xuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5wYWdlci1pbnB1dFwiKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0aFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUhlYWRlcklkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhlYWRlci1pZFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Rm9jdXNhYmxlO1xuICAgICAgICAgICAgICAgICQoXCIudGFibGUtaGVhZGVyIHRoXCIpLmVhY2goKGluZGV4OiBudW1iZXIsIGVsZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVhY2hIZWFkZXIgPSAkKGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlYWNoSGVhZGVySWQgPSBlYWNoSGVhZGVyLmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBlYWNoSGVhZGVySWQgPT09IGRhdGFIZWFkZXJJZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZvY3VzYWJsZSA9IGVhY2hIZWFkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIG5ld0ZvY3VzYWJsZSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL21haW4vR3JpZC50cyIsImltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuLi9tYWluL0lHcmlkT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi4vbW9kZWxzL0lDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTdG9yZTxUPiB7XHJcbiAgICBwdWJsaWMgb3B0aW9uczogSUdyaWRPcHRpb25zPFQ+O1xyXG4gICAgcHJpdmF0ZSBmb2N1c2FibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgZGVmYXVsdEdyaWRPcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4gPSB7XHJcbiAgICAgICAgYW5pbWF0aW9uVGltZTogMjAwLFxyXG4gICAgICAgIGNodW5rU2l6ZTogNSxcclxuICAgICAgICBjb2x1bW5zOiBbXSxcclxuICAgICAgICBjb250YWluZXJFbGVtZW50OiBudWxsLFxyXG4gICAgICAgIC8vIG1hbmFnZUNvbFNldHRpbmdzQ29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIGh5YnJpZEZ1bmN0aW9uOiAoY29sdW1uOiBJQ29sdW1uLCByb3c6IFQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ0cnVlXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXlDb2x1bW46IFwiXCIsXHJcbiAgICAgICAgLy8gb25Db2xTZXR0aW5nc0NoYW5nZTogKGNvbENvbmZpZzogSUNvbHVtbltdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIE5vIENvZGVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIG9uQ2xpY2tGaWx0ZXI6IChjb2x1bW46IHN0cmluZywgdmFsdWU6IGFueSwgYWN0aW9uVHlwZTogRmlsdGVyQWN0aW9uVHlwZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBjb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrSGVhZGVyOiAoY29sdW1uOiBzdHJpbmcsIGRpcmVjdGlvbjogR3JpZE9yZGVyRGlyZWN0aW9uKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUGFnZVNlYXJjaDogKHBhZ2VTaXplOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2VsZWN0OiAocm93czogVFtdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIENvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dDYXB0aW9uOiBmYWxzZSxcclxuICAgICAgICBjYXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIHN1bW1hcnk6IFwiXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5leHRlbmRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIFByb3ZpZGUgYSB2YWxpZCBjb250YWluZXIgRWxlbWVudCBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5jb2x1bW5zLnNvcnQoKHByZXYsIG5leHQpID0+IHByZXYub3JkZXIgLSBuZXh0Lm9yZGVyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgT3B0aW9ucyhvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBPcHRpb25zKCk6IElHcmlkT3B0aW9uczxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRGb2N1c2FibGVFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5mb2N1c2FibGVFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRGb2N1c2FibGVFbGVtZW50ID0gKCk6IEhUTUxFbGVtZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIFNldEhpZGRlbk9uQ29uZmlnID0gKGJvb2w6IGJvb2xlYW4sIGNvbHVtbklkPzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5PcHRpb25zLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbC5oaWRkZW4gPSBib29sO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbC5pZCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuaGlkZGVuID0gYm9vbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZXh0ZW5kT3B0aW9ucyA9IChpbnB1dE9wdGlvbnM6IElHcmlkT3B0aW9uczxUPik6IElHcmlkT3B0aW9uczxUPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoe30sIHRoaXMuZGVmYXVsdEdyaWRPcHRpb25zLCBpbnB1dE9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvY29uZmlnL0NvbmZpZ1N0b3JlLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEV2ZW50SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSwgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IGdyaWRUZW1wbGF0ZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi5zZWxlY3Qta2V5LWNoZWNrYm94XCIgLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQudmFsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5zZWxlY3RSb3dzKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50cyhcIi5tYWluUm93XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLmRlU2VsZWN0Um93cyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudHMoXCIubWFpblJvd1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uU2VsZWN0KHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5TZWxlY3RlZCwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi5zZWxlY3QtYWxsLWNoZWNrYm94XCIgLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5zZWxlY3Qta2V5LWNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGNoZWNrZWQpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLnNlbGVjdEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIubWFpblRhYmxlIC5tYWluUm93XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLmRlU2VsZWN0QWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5tYWluVGFibGUgLm1haW5Sb3dcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uU2VsZWN0KHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5TZWxlY3RlZCwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL1NlbGVjdEV2ZW50SGFuZGxlci50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5leHBvcnQgY2xhc3MgRGV0YWlsc1Jvd0hhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWJvZHkgLmV4cGFuc2lvbkFycm93cyBpXCIsIHRoaXMuZXhwYW5kUm93KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi50YWJsZS1ib2R5IC5leHBhbnNpb25BcnJvd3MgaVwiLCB0aGlzLmV4cGFuZFJvdyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGV4cGFuZFJvdyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmICggZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiICYmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycm93ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsc1JvdyA9IGFycm93LmNsb3Nlc3QoXCJ0clwiKS5uZXh0KCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEljb24gPSBhcnJvdy5oaWRlKCkuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBjb25zdCBvdGhlckljb24gPSBhcnJvdy5zaWJsaW5ncyhcImlcIikuc2hvdygpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIGlmIChhcnJvdy5oYXNDbGFzcyhcImV4cGFuZERldGFpbHNSb3dJY29uXCIpKSB7XHJcbiAgICAgICAgICAgIG90aGVySWNvbi5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGRldGFpbHNSb3cuc2xpZGVEb3duKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50SWNvbi5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGRldGFpbHNSb3cuc2xpZGVVcCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG90aGVySWNvbi5mb2N1cygpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlci50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLi91dGlsL0NvbHVtblV0aWxcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLy4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJDbGlja0RlbGVnYXRlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lGaWx0ZXJDbGlja0RlbGVnYXRlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ2xpY2tIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtYm9keSAuZGV0YWlsc1JvdyAuZGV0YWlsc1RhYmxlIHRkIGlcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50VGQgPSBlbGVtZW50LnBhcmVudHMoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFyZW50VGQuYXR0cihcImRhdGEtZmlsdGVyLWtleVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXItdHlwZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gQ29tbW9uVXRpbC5HZXRDb2x1bW5PYmplY3Qoa2V5LCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5maWx0ZXJhYmxlICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJBY3Rpb246IEZpbHRlckFjdGlvblR5cGUgPSBGaWx0ZXJBY3Rpb25UeXBlLkFkZDtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoXCJyZW1vdmVGaWx0ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlckFjdGlvbiA9IEZpbHRlckFjdGlvblR5cGUuTWludXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNsaWNrRmlsdGVyKGtleSwgdmFsdWUsIGZpbHRlckFjdGlvbiwgdHlwZSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXIudHMiLCJleHBvcnQgZW51bSBGaWx0ZXJBY3Rpb25UeXBlIHtcclxuICAgIEFkZCA9IFwiQWRkXCIsXHJcbiAgICBNaW51cyA9IFwiTWludXNcIixcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwiZXhwb3J0IGVudW0gSGFuZGxlck5hbWVzIHtcclxuICAgIEZpbHRlckFjdGlvbixcclxuICAgIEhlYWRlckNsaWNrLFxyXG4gICAgU2Nyb2xsLFxyXG4gICAgUGFnZVNlYXJjaCxcclxuICAgIERldGFpbHNSb3csXHJcbiAgICBUb2dnbGVDb2x1bW4sXHJcbiAgICBDb2xTZXR0aW5ncyxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGFuZGxlck5hbWVzLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuLi9tYWluL0lHcmlkT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSBcIi4uL3V0aWwvQ29sdW1uVXRpbFwiO1xyXG5pbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi8uLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7SUhlYWRlckNsaWNrRGVsZWdhdGV9IGZyb20gXCIuLy4uL21vZGVscy9JSGVhZGVyQ2xpY2tEZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNsaWNrSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgd2FzSGVhZGVyQ2xpY2tlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbGFzdEZvY3VzZWRFbGVtZW50OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gUmVnaXN0ZXJpbmcgSlF1ZXJ5IEV2ZW50IEhhbmRsZXIgaWYgSGVhZGVyIGlzIENsaWNrZWQuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtaGVhZGVyIHRoXCIsIHRoaXMuaGFuZGxlSGVhZGVyU29ydCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIudGFibGUtaGVhZGVyIHRoXCIsIHRoaXMuaGFuZGxlSGVhZGVyU29ydCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwibW91c2Vkb3duXCIgLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImZvY3VzaW5cIiwgXCIudGFibGUtaGVhZGVyIHRoXCIsIHRoaXMuaGFuZGxlSGVhZGVyRm9jdXMpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZURvd24gPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMud2FzSGVhZGVyQ2xpY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZUhlYWRlckZvY3VzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGZvY3VzXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEZvY3VzZWRFbGVtZW50ICE9PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMud2FzSGVhZGVyQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZvY3VzZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLndhc0hlYWRlckNsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXZlbnQuZGF0YS5jbGlja2VkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRQb3N0aXRpb24gPSBoZWFkZXIucG9zaXRpb24oKS5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcldpZHRoID0gaGVhZGVyLndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgdGFibGVCb2R5ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKTtcclxuICAgICAgICBjb25zdCBtYWluVGFibGVCb2R5ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIubWFpblRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVUYm9keVdpZHRoID0gdGFibGVCb2R5LndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgbWF4U2Nyb2xsID0gbWFpblRhYmxlQm9keS53aWR0aCgpIC0gdmlzaWJsZVRib2R5V2lkdGg7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbGVmdFBvc3RpdGlvbiArIGhlYWRlcldpZHRoICogMjtcclxuICAgICAgICBsZXQgc2Nyb2xsTGVmdEJ5O1xyXG4gICAgICAgIGlmICggY3VycmVudFBvc2l0aW9uID4gdmlzaWJsZVRib2R5V2lkdGgpIHtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdEJ5ID0gbGVmdFBvc3RpdGlvbiA+IG1heFNjcm9sbCA/IG1heFNjcm9sbCA6IGxlZnRQb3N0aXRpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdEJ5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVCb2R5LnNjcm9sbExlZnQoc2Nyb2xsTGVmdEJ5KTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlSGVhZGVyU29ydCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmICggZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiICYmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwidGhcIik7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySWQgPSBlbGVtZW50LmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKTtcclxuICAgICAgICBjb25zdCBjb2wgPSBDb21tb25VdGlsLkdldENvbHVtbk9iamVjdChoZWFkZXJJZCwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5zb3J0YWJsZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJvd0ljb25zID0gZWxlbWVudC5maW5kKFwiaVwiKTtcclxuICAgICAgICBjb25zdCB1cEFycm93SWNvbiA9IGFycm93SWNvbnMuZmlyc3QoKTtcclxuICAgICAgICBjb25zdCBkb3duQXJyb3dJY29uID0gYXJyb3dJY29ucy5sYXN0KCk7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogR3JpZE9yZGVyRGlyZWN0aW9uO1xyXG4gICAgICAgIGlmIChhcnJvd0ljb25zLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgaWYgKHVwQXJyb3dJY29uLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjO1xyXG4gICAgICAgICAgICAgICAgdXBBcnJvd0ljb24uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgZG93bkFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjO1xyXG4gICAgICAgICAgICAgICAgZG93bkFycm93SWNvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjO1xyXG4gICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuYXR0cihcImFyaWEtc29ydFwiLCBkaXJlY3Rpb24gPT09IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjID8gXCJkZXNjZW5kaW5nXCIgOiBcImFzY2VuZGluZ1wiKTtcclxuICAgICAgICBDb21tb25VdGlsLlNldE9yZGVyKGhlYWRlcklkLCBkaXJlY3Rpb24sIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25DbGlja0hlYWRlcihoZWFkZXJJZCwgZGlyZWN0aW9uKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGVhZGVyQ2xpY2tIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcclxuaW1wb3J0IHsgSVBhZ2VTZWFyY2hDbGlja0RlbGVnYXRlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lQYWdlU2VhcmNoQ2xpY2tEZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VTZWFyY2hIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5maXJzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCAxKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5uZXh0TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCArIDEpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLnByZXZMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAubGFzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjaGFuZ2VcIiwgXCIudGFibGUtZm9vdGVyIC5wYWdlU2l6ZVNlbGVjdG9yXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgdmFsOiBudW1iZXIgPSAralF1ZXJ5KGV2ZW50LnRhcmdldCkudmFsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaCh2YWwsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImtleXByZXNzXCIsIFwiLnRhYmxlLWZvb3RlciAucGFnZXItaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpcCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlRGF0YSA9IFBhZ2VyLlBhZ2luYXRpb25EYXRhO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gK2lwLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCB2YWwgPiBwYWdlRGF0YS5ub09mUGFnZXMgfHwgdmFsIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlwLnZhbChwYWdlRGF0YS5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKHBhZ2VEYXRhLnBhZ2VTaXplLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElJbmRleENvdW50ZXIgfSBmcm9tIFwiLi8uLi92aXJ0dWFsaXphdGlvbi9JbmRleENvdW50ZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vU2Nyb2xsRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IFZpcnR1YWxpemVyIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vVmlydHVhbGl6ZXJcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHZpcnR1YWxpemVyOiBWaXJ0dWFsaXplcjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG4gICAgcHJpdmF0ZSByZW5kZXJpbmc6IGJvb2xlYW4gPSAgZmFsc2U7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgbGVmdE9mZnNldDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRPZmZTZXRMZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3YXRjaGVzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPiwgY3VycmVudEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UgPSBncmlkVGVtcGxhdGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50SW5kZXggPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEN1cnJlbnRJbmRleCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50SW5kZXg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm8gT3BcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gUmVnaXN0ZXJpbmcgSlF1ZXJ5IEV2ZW50IEhhbmRsZXIgaWYgSGVhZGVyIGlzIENsaWNrZWQuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKS5vbihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLm9mZihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzZXRQYXJlbnRPZmZzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRPZmZTZXRMZWZ0ID0gdGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5sZWZ0T2Zmc2V0ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtaGVhZGVyXCIpLm9mZnNldCgpLmxlZnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2F0Y2hXaWR0aCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudE9mZlNldExlZnQgPSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB0aGlzLndhdGNoZXMucHVzaChzZXRJbnRlcnZhbCh0aGlzLnNldEhlYWRlck9mZnNldCwgMzAwKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdW5XYXRjaFdpZHRoID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoZXMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLndhdGNoZXMgPT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCB3YXRjaCBvZiB0aGlzLndhdGNoZXMpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3YXRjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXNpemUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0Qm9keU9iaiA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIik7XHJcbiAgICAgICAgaWYgKHRoaXMubGVmdE9mZnNldCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMubGVmdE9mZnNldCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtaGVhZGVyXCIpLmNzcyhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiAtMSAqIHRCb2R5T2JqLnNjcm9sbExlZnQoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFRhYmxlSGVpZ2h0ID0gdEJvZHlPYmouZmluZChcIi5tYWluVGFibGVcIikuaGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gdEJvZHlPYmouaGVpZ2h0KCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJpbmcpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdEJvZHlPYmouc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKChzY3JvbGxDb250YWluZXJIZWlnaHQgKyBzY3JvbGxUb3AgKSAtIChhY3R1YWxUYWJsZUhlaWdodCAqIDAuOCApID4gMCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuRGF0YUxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleCArIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jaHVua1NpemU7XHJcbiAgICAgICAgICAgIGlmICggbGFzdEluZGV4ID49IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhTGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGFMZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgID0galF1ZXJ5KHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5nZXRUZW1wbGF0ZSh0aGlzLmN1cnJlbnRJbmRleCwgbGFzdEluZGV4KSk7XHJcbiAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlQm9keVwiKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KCBsYXN0SW5kZXggKyAxICk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SGVhZGVyT2Zmc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICBpZiAoIHRoaXMucGFyZW50T2ZmU2V0TGVmdCAhPT0gbGVmdCApIHtcclxuICAgICAgICAgICAgY29uc3QgdEJvZHlPYmogPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZWZ0T2Zmc2V0ID09PSB1bmRlZmluZWQgfHwgdGhpcy5sZWZ0T2Zmc2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLmxlZnRPZmZzZXQgLSAodGhpcy5wYXJlbnRPZmZTZXRMZWZ0IC0gbGVmdCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIudGFibGUtaGVhZGVyXCIpXHJcbiAgICAgICAgICAgICAgICAub2Zmc2V0KHtsZWZ0OiB0aGlzLmxlZnRPZmZzZXQsIHRvcDogMH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE9mZlNldExlZnQgPSBsZWZ0O1xyXG4gICAgICAgICAgICB0Qm9keU9iai5zY3JvbGxMZWZ0KHRCb2R5T2JqLnNjcm9sbExlZnQoKSAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZERldGFpbHNSb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtZGV0YWlscy1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIEdyaWRGb290ZXIgZnJvbSBcIi4uLy4uL2hicy9ncmlkLWZvb3Rlci5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZE1haW5Sb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtbWFpbi1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZUNvbHVtblRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZFRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC5oYnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5pbnRlcmZhY2UgSU1haW5Db2xSb3dBcnJheSB7XHJcbiAgICBjb2x1bW5WYWx1ZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgYWN0dWFsVmFsdWU6IHN0cmluZztcclxuICAgIGNvbHVtbk5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBmaWx0ZXJhYmxlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHcmlkVGVtcGxhdGVTZXJ2aWNlIDxUPiB7XHJcbiAgICBwcml2YXRlIGRhdGE6IFRbXTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWQ6IFRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkOiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JEZXRhaWxzUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JGb290ZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvck1hbmFnZUNvbDogYW55O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4pIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yR3JpZCA9IEdyaWRUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93ID0gR3JpZE1haW5Sb3dUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JEZXRhaWxzUm93ID0gR3JpZERldGFpbHNSb3dUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JGb290ZXIgPSBHcmlkRm9vdGVyO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1hbmFnZUNvbCA9IE1hbmFnZUNvbHVtblRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzQWxsU2VsZWN0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQubGVuZ3RoICE9PSAwICYmIHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLmRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBEYXRhKCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgU2VsZWN0ZWQoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgQ3VycmVudEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBEYXRhTGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvLyBGb3IgRmlyc3QgIFJlbmRlciAtIFVwZGF0ZSBIZWFkZXIgLCBCb2R5LCBQYWdpbmF0aW9uXHJcbiAgICBwdWJsaWMgR2V0Rmlyc3RUZW1wbGF0ZSA9IChkYXRhOiBUW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5ID0gdGhpcy5HZXRSb3dzSHRtbChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkKHtcclxuICAgICAgICAgICAgc2hvd0NhcHRpb246IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5zaG93Q2FwdGlvbixcclxuICAgICAgICAgICAgc3VtbWFyeTogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLnN1bW1hcnksXHJcbiAgICAgICAgICAgIHJvd0xlbmd0aDogdGhpcy5kYXRhLmxlbmd0aCxcclxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMsXHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGE6IFBhZ2VyLlBhZ2luYXRpb25EYXRhLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2FwdGlvbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIEZvciBWaXJ0dWFsaXphdG9uIFJlbmRlciAtIEJvZHlcclxuICAgIHB1YmxpYyBnZXRUZW1wbGF0ZSA9IChmaXJzdEluZGV4OiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBtYWluUm93QXJyYXkgPSB0aGlzLkdldFJvd3NIdG1sKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3coe1xyXG4gICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyxcclxuICAgICAgICAgICAgbWFpblJvd0FycmF5LFxyXG4gICAgICAgICAgICBjYXB0aW9uOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2FwdGlvbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIFVwZGF0ZSBvbmx5IG9uZSBSb3dcclxuICAgIHB1YmxpYyBnZXRUZW1wbGF0ZUZvck9uZVJvdyA9IChyb3c6IFQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5U3RyID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmVtcHR5VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0NvbEFycmF5ID0gdGhpcy5nZXRNYWluUm93KHJvdywgZW1wdHlTdHIpO1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheSA9IFt7XHJcbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ6IHRoaXMuaXNBbGxTZWxlY3RlZCgpLFxyXG4gICAgICAgICAgICBrZXlDb2x1bW46IHJvd1t0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uXSxcclxuICAgICAgICAgICAgbWFpblJvd0NvbEFycmF5LFxyXG4gICAgICAgICAgICBsZW5ndGg6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zLmxlbmd0aCxcclxuICAgICAgICB9XTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFpblJvdyh7bWFpblJvd0FycmF5fSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0TWFuYWdlQ29sdW1uc0h0bWwgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sKHtjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1uc30pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRSb3dzSHRtbCA9IChmaXJzdEluZGV4OiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogYW55W10gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICBjb25zdCBlbXB0eVN0ciA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5lbXB0eVZhbHVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogVCA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblJvd0NvbEFycmF5OiBJTWFpbkNvbFJvd0FycmF5W10gPSB0aGlzLmdldE1haW5Sb3cocm93LCBlbXB0eVN0cik7XHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHJvd0luZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgaXNBbGxTZWxlY3RlZDogdGhpcy5pc0FsbFNlbGVjdGVkKCksXHJcbiAgICAgICAgICAgICAgICBrZXlDb2x1bW46IHJvd1t0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uXSxcclxuICAgICAgICAgICAgICAgIG1haW5Sb3dDb2xBcnJheSxcclxuICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1haW5Sb3dBcnJheTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWxlY3RSb3dzID0gKHJvd0lkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uO1xyXG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gW107XHJcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWQgb2YgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoIHJvd0lkID09PSBzZWxlY3RlZFtrZXldICkge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggIWV4aXN0cyApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucHVzaChyb3dJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgdG9CZUFkZGVkIG9mIG5ld1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb25lUm93IG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0b0JlQWRkZWQgPT09IG9uZVJvd1trZXldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChvbmVSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlU2VsZWN0Um93cyA9IChyb3dJZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWQgb2YgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoIHJvd0lkICE9PSBzZWxlY3RlZFtrZXldICkge1xyXG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWQucHVzaChzZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG5ld1NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNlbGVjdEFsbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlU2VsZWN0QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1cGRhdGVSb3dzID0gKHJvd3M6IFRbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XHJcbiAgICAgICAgaWYgKCByb3dzID09PSB1bmRlZmluZWQgfHwgIXJvd3MubGVuZ3RoICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZGF0YVJvdyBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dba2V5XSA9PT0gZGF0YVJvd1trZXldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFSb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkYXRhUm93IG9mIHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dba2V5XSA9PT0gZGF0YVJvd1trZXldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFSb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE1haW5Sb3cgPSAocm93OiBULCBlbXB0eVN0cjogc3RyaW5nKTogSU1haW5Db2xSb3dBcnJheVtdID0+IHtcclxuICAgICAgICBjb25zdCBtYWluUm93Q29sQXJyYXk6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gcm93W2NvbC5pZF07XHJcbiAgICAgICAgICAgIGlmIChjb2wucmVuZGVySHlicmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5oeWJyaWRGdW5jdGlvbihjb2wsIHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVtcHR5U3RyICE9PSB1bmRlZmluZWQgJiYgY29sdW1uVmFsdWUgPT09IGVtcHR5U3RyKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFpblJvd0NvbEFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY29sdW1uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjb2wudHlwZSxcclxuICAgICAgICAgICAgICAgIGhpZGRlbjogY29sLmhpZGRlbixcclxuICAgICAgICAgICAgICAgIGFjdHVhbFZhbHVlOiByb3dbY29sLmlkXSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGNvbC5pZCxcclxuICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGNvbC5maWx0ZXJhYmxlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1haW5Sb3dDb2xBcnJheTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2UudHMiLCJjb25zdCBzZWxlY3RlZCA9IChpbnB1dDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gdmFsdWUgPyBcInNlbGVjdGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPHRyIGRhdGEtaGVhZGVyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94IGd1aSBtLXItMTBcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ2hlY2tlZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oaWRkZW4gOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBvZi1oaWRkZW4gcC0xMCBtaW4tdy01MCB3LWF1dG8gZmx1aWQtaCBmbGV4IGNvbHVtbiBjb250YWluZXJcXFwiID5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWhlYWRlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtaW5pIGZsdWlkIGljb24gaW5wdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWZpbHRlclxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBmaWx0ZXIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJzZWFyY2ggaWNvblxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS10LTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGxlZnQgc2hvdy1hbGwtY29sdW1uXFxcIj5TaG93IEFsbDwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIHJpZ2h0IGhpZGUtYWxsLWNvbHVtblxcXCI+SGlkZSBBbGw8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBjbGVhclxcXCI+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtdGFibGUgZ3VpIGZsdWlkIGgtOTAgb2YtYXV0byBwLTUgbS10LTEwXFxcIiA+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImd1aSBzbWFsbCB2ZXJ5IGJvcmRlci1sZXNzIGJhc2ljIGNvbXBhY3QgdGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhic1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBjaGVja2VkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuICFib29sID8gXCJjaGVja2VkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMiBtLTAgcC0wIHRleHQtbGVmdFxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNhcHRpb24gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L2NhcHRpb24+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENvbHVtbi50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLGRlcHRoMCx7XCJuYW1lXCI6XCJDb2x1bW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cIjtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNvcnRhYmxlIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg2LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSg4LCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCI2XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxPcmRlcmVkLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksZGVwdGgwLChkYXRhICYmIGRhdGEuaW5kZXgpLHtcIm5hbWVcIjpcIk9yZGVyZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cIjtcbn0sXCI4XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8dGggYXJpYS1sYWJlbD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29saW5kZXg9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQWRkLnRzXCIpKS5jYWxsKGFsaWFzMywoZGF0YSAmJiBkYXRhLmluZGV4KSwzLHtcIm5hbWVcIjpcIkFkZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXNvcnQ9XFxcIm5vbmVcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVxcXCItMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBjdXJzb3ItZGVmYXVsdCBkaXNhYmxlZFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFyaWFIaWRkZW4udHNcIikpLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oaWRkZW4gOiBkZXB0aDApLHtcIm5hbWVcIjpcIkFyaWFIaWRkZW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XFxcImhlYWRlci1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhlYWRlci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBzdWIgaGVhZGVyXFxcIj5cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImlubmVyLWNvbnRhaW5lciBndWkgZmx1aWQgY29udGFpbmVyXFxcIiBcXG4gICAgYXJpYS1yZWFkb25seT1cXFwidHJ1ZVxcXCIgXFxuICAgIGFyaWEtcm93Y291bnQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5yb3dMZW5ndGggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcbiAgICBhcmlhLWNvbGNvdW50PVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFkZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSwyLHtcIm5hbWVcIjpcIkFkZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcbiAgICBhcmlhLWxhYmVsPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2FwdGlvbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXG4gICAgc3VtbWFyeT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnN1bW1hcnkgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxuICAgIGFyaWEtbGl2ZT1cXFwicG9saXRlXFxcIlxcbiAgICByb2xlPVxcXCJncmlkXFxcIiBcXG4gICAgc3R5bGU9XFxcInBhZGRpbmc6MCU7XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtaGVhZGVyXFxcIj5cXG4gICAgICAgIDx0YWJsZSBpZD1cXFwiaGVhZGVydGFibGVcXFwiIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgY2xhc3M9XFxcImd1aSBiYXNpYyBsYXJnZSBjb21wYWN0IHNvcnRhYmxlIGZpeGVkIHNpbmdsZSBsaW5lIHRhYmxlXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNob3dDYXB0aW9uIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8Y29sZ3JvdXAgY2xhc3M9XFxcImhlYWRlckNvbEdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L2NvbGdyb3VwPlxcbiAgICAgICAgICAgIDx0aGVhZCByb2xlPVxcXCJyb3dncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgIDx0ciByb2xlPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvbGU9XFxcImNvbHVtbmhlYWRlclxcXCIgYXJpYS1jb2xpbmRleD1cXFwiMVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlNlbGVjdCBhbGwgcm93cyBvZiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2FwdGlvbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBDaGVja2JveFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb2xpbmRleD1cXFwiMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cXFwic2VsZWN0LWFsbC1jaGVja2JveFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICB0eXBlPVxcXCJjaGVja2JveFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XFxcInNlbGVjdC1hbGwtY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2VsZWN0LWFsbC1jaGVja2JveCBjdXJzb3ItcG9pbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWJvZHlcXFwiPlxcbiAgICAgICAgPHRhYmxlIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgY2xhc3M9XFxcImd1aSBiYXNpYyBsYXJnZSBjb21wYWN0IGZpeGVkIHNlbGVjdGFibGUgc2luZ2xlIGxpbmUgdGFibGUgbWFpblRhYmxlXFxcIj5cXG4gICAgICAgICAgICA8Y29sZ3JvdXAgY2xhc3M9XFxcImJvZHlDb2xHcm91cFxcXCI+XFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPiBcXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvY29sZ3JvdXA+XFxuICAgICAgICAgICAgPHRib2R5IGNsYXNzPVxcXCJtYWluVGFibGVCb2R5XFxcIiByb2xlPVxcXCJyb3dncm91cFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcZ3JpZC1tYWluLXJvdy5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImdyaWQtbWFpbi1yb3dcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtZm9vdGVyIGd1aSBoLWF1dG8gZmx1aWQtdyBmbGV4IGpjLXNiIHAtNSBtLTBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtZm9vdGVyLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1mb290ZXJcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9kaXY+XFxuPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLmhic1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBDb2x1bW4gPSAoY29sKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGNhbGNXaWR0aDogbnVtYmVyID0gY29sLmhpZGRlbiA/IDAgOiBjb2wud2lkdGg7XHJcbiAgICBjb25zdCBkYXRhQXR0cklkID0gJ2RhdGEtaGVhZGVyLWlkPVwiJyArIGNvbC5pZCArICdcIic7XHJcbiAgICByZXR1cm4gJzxjb2wgc3R5bGU9XCJ3aWR0aCA6ICcgKyBjYWxjV2lkdGggKyAncHg7XCInICsgZGF0YUF0dHJJZCArIFwiIC8+XCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ29sdW1uLnRzIiwiaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLi8uLi9qcy9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuY29uc3Qgb3JkZXJlZCA9IChjb2x1bW46IElDb2x1bW4sIGluZGV4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgcGFyc2VkSW50ID0gcGFyc2VJbnQoaW5kZXgsIDEwKSArIDM7XHJcbiAgICBsZXQgYXJpYVNvcnRTdHI7XHJcbiAgICBsZXQgaGVhZGVySWNvbk1rO1xyXG4gICAgY29uc3QgYXJpYUhpZGRlblN0ciA9IGNvbHVtbi5oaWRkZW4gPyBcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJcIiA6IFwiIGFyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCJcIjtcclxuICAgIGNvbnN0IHRhYkluZGV4ID0gY29sdW1uLnNvcnRhYmxlICYmICFjb2x1bW4uaGlkZGVuID8gMCA6IC0xO1xyXG4gICAgaWYgKGNvbHVtbi5vcmRlckJ5ID09PSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjKSB7XHJcbiAgICAgICAgaGVhZGVySWNvbk1rID0gXCIgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy11cFxcXCIgYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiA+PC9pPiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPlwiO1xyXG4gICAgICAgIGFyaWFTb3J0U3RyID0gXCJhcmlhLXNvcnQ9XFxcImFzY2VuZGluZ1xcXCJcIjtcclxuICAgIH0gZWxzZSBpZiAoY29sdW1uLm9yZGVyQnkgPT09IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjKSB7XHJcbiAgICAgICAgaGVhZGVySWNvbk1rID0gXCI8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFycm93LXVwIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duXFxcIiBhcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiID48L2k+XCI7XHJcbiAgICAgICAgYXJpYVNvcnRTdHIgPSBcImFyaWEtc29ydD1cXFwiZGVzY2VuZGluZ1xcXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVySWNvbk1rID0gXCI8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFycm93LXVwIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPlwiO1xyXG4gICAgICAgIGFyaWFTb3J0U3RyID0gXCJhcmlhLXNvcnQ9XFxcIm5vbmVcXFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCI8dGggcm9sZT1cXFwiY29sdW1uaGVhZGVyXFxcIiBhcmlhLWNvbGluZGV4PVxcXCJcIiArIHBhcnNlZEludFxyXG4gICAgICAgICAgKyBcIlxcXCIgdGFiaW5kZXg9XFxcIlwiICsgdGFiSW5kZXggKyBcIlxcXCIgY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlclxcXCIgaWQ9XFxcImhlYWRlci1cIlxyXG4gICAgICAgICAgKyBjb2x1bW4uaWQgICsgXCJcXFwiXCJcclxuICAgICAgICAgICsgXCIgZGF0YS1oZWFkZXItaWQ9XFxcIlwiICsgY29sdW1uLmlkICsgXCJcXFwiIFwiXHJcbiAgICAgICAgICArIGFyaWFTb3J0U3RyXHJcbiAgICAgICAgICArIGFyaWFIaWRkZW5TdHJcclxuICAgICAgICAgICsgXCIgYXJpYS1sYWJlbD1cXFwiXCIgKyBjb2x1bW4ubmFtZSArIFwiXFxcIiBcIlxyXG4gICAgICAgICAgKyBcIiB0aXRsZT1cXFwiXCIgKyBjb2x1bW4ubmFtZSArIFwiXFxcIiBcIlxyXG4gICAgICAgICAgKyBcIiAgPlwiXHJcbiAgICAgICAgICArIFwiIDxzcGFuIGNsYXNzPVxcXCJndWkgc3ViIGhlYWRlciBtLXItNVxcXCI+XCIgKyBjb2x1bW4ubmFtZSArIFwiPC9zcGFuPlwiXHJcbiAgICAgICAgICArIGhlYWRlckljb25Na1xyXG4gICAgICAgICAgKyBcIiA8L3RoPlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JkZXJlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9PcmRlcmVkLnRzIiwiY29uc3QgYXJpYUhpZGRlbiA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJcIiA6IFwiYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJpYUhpZGRlbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9BcmlhSGlkZGVuLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==