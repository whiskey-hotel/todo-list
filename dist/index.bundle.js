/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr;\n\tgap: 1.25em;\n}\n\n.header {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.number-of-tasks,\n.edit {\n\tmargin-left: auto;\n}\n\n.project-list {\n\tborder: black 2px solid;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#add-project-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.drop-down-option,\n.more-info-icon,\n#add-task-icon,\n#add-project-div:hover {\n\tcursor: pointer;\n}\n\n#new-task-form-container,\n#new-project-form-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: rgba(91, 112, 131, 0.4);\n\twidth: 100vw;\n\theight: 100%;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 999;\n\t/* background-color: rgba(0, 0, 0, 0.5); */\n\t/* backdrop-filter: blur(4px); */\n}\n\n#new-task-form-div,\n#new-project-form-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder: solid;\n\tbackground-color: #fff;\n\tborder-radius: 12px;\n\tpadding: 0.75em;\n}\n\n.task-list {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.more-info-icon {\n    display: none;\n\tmargin-left: auto;\n}\n\n.drop-down-content{\n    display:flex;\n    flex-direction: column;\n    position: absolute;\n    right: 0;\n    background-color: white;\n    min-width: 160px;\n    z-index: 1;\n}\n\n.drop-down-option{\n    padding: 0.25em;\n}\n\n.drop-down-option:hover{\n    background-color: #ddd ;\n}\n\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,8BAA8B;CAC9B,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;;CAEC,iBAAiB;AAClB;;AAEA;CACC,uBAAuB;CACvB,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;;;;CAIC,eAAe;AAChB;;AAEA;;CAEC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,yCAAyC;CACzC,YAAY;CACZ,YAAY;CACZ,eAAe;CACf,MAAM;CACN,OAAO;CACP,YAAY;CACZ,0CAA0C;CAC1C,gCAAgC;AACjC;;AAEA;;CAEC,aAAa;CACb,sBAAsB;CACtB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;IACI,aAAa;CAChB,iBAAiB;AAClB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;IACR,uBAAuB;IACvB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":[".container {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr;\n\tgap: 1.25em;\n}\n\n.header {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.number-of-tasks,\n.edit {\n\tmargin-left: auto;\n}\n\n.project-list {\n\tborder: black 2px solid;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#add-project-div {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.drop-down-option,\n.more-info-icon,\n#add-task-icon,\n#add-project-div:hover {\n\tcursor: pointer;\n}\n\n#new-task-form-container,\n#new-project-form-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: rgba(91, 112, 131, 0.4);\n\twidth: 100vw;\n\theight: 100%;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 999;\n\t/* background-color: rgba(0, 0, 0, 0.5); */\n\t/* backdrop-filter: blur(4px); */\n}\n\n#new-task-form-div,\n#new-project-form-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder: solid;\n\tbackground-color: #fff;\n\tborder-radius: 12px;\n\tpadding: 0.75em;\n}\n\n.task-list {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.more-info-icon {\n    display: none;\n\tmargin-left: auto;\n}\n\n.drop-down-content{\n    display:flex;\n    flex-direction: column;\n    position: absolute;\n    right: 0;\n    background-color: white;\n    min-width: 160px;\n    z-index: 1;\n}\n\n.drop-down-option{\n    padding: 0.25em;\n}\n\n.drop-down-option:hover{\n    background-color: #ddd ;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/DOMController.js":
/*!**************************************!*\
  !*** ./src/modules/DOMController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newElement": () => (/* binding */ newElement),
/* harmony export */   "sendToBody": () => (/* binding */ sendToBody),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes),
/* harmony export */   "moduleRender": () => (/* binding */ moduleRender),
/* harmony export */   "closeWindow": () => (/* binding */ closeWindow)
/* harmony export */ });
function newElement(element = "", className = "", elementID = "", text = "", href = "") {
	const newElement = document.createElement(element);
	className ? (newElement.classList = className) : null;
	elementID ? (newElement.id = elementID) : null;
	text ? (newElement.textContent = text) : null;
	if (element == "a") {
		href ? (newElement.href = href) : null;
	}

	return newElement;
}

function sendToBody(HTML) {
	return document.body.appendChild(HTML);
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function moduleRender(obj, parentNode) {
	removeAllChildNodes(parentNode);
	for (let x in obj) {
		parentNode.appendChild(obj[x]);
	}
}

const closeWindow = (element) => {
	document.body.removeChild(element);
};




/***/ }),

/***/ "./src/modules/elementBuilder.js":
/*!***************************************!*\
  !*** ./src/modules/elementBuilder.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "recall": () => (/* binding */ recall)
/* harmony export */ });
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMController */ "./src/modules/DOMController.js");
/* harmony import */ var _taskHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskHandler */ "./src/modules/taskHandler.js");
/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectHandler */ "./src/modules/projectHandler.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _taskCountTracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskCountTracking */ "./src/modules/taskCountTracking.js");
/* harmony import */ var _objectFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objectFactory */ "./src/modules/objectFactory.js");







function home() {
	const projectsContainer = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "projects-container");
	const projectsDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "projects-div");
	const projectHeader = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "header");
	const projectTitle = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h1", "title", ...Array(1), "My Projects");
	const mainList = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "project-list", "all-list");
	mainList.setAttribute("data-value", "P0");
	const instantiateMainProject = (0,_objectFactory__WEBPACK_IMPORTED_MODULE_5__.projects)("All");
	let mainListObj = instantiateMainProject.create();
	const listTitle = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h3", "project-title", ...Array(1), "All");
	const numberOfTasks = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "number-of-tasks", `P0-task-count`, mainListObj.numberOfTasks);

	const taskContainer = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "task-container");
	const taskDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "task-div");
	const taskHeader = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "header");
	const taskTitle = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h2", "title", ...Array(1), mainListObj.projectName);
	const taskListDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "task-list-div", "main-task-div");

	const addProjectDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "add-project-div");
	const addProjectIcon = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "material-icons-outlined", "add-project-icon", "add_circle_outline");
	const addProject = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", ...Array(1), "add-project", "Add Project");

	const addTaskDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "add-task-div");
	const addTaskIcon = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "material-icons-outlined", "add-task-icon", "add_circle");

	projectsContainer.appendChild(projectHeader);
	projectsContainer.appendChild(projectsDiv);
	projectHeader.appendChild(projectTitle);
	projectsDiv.appendChild(mainList);
	mainList.appendChild(listTitle);
	mainList.appendChild(numberOfTasks);
	projectsContainer.appendChild(addProjectDiv);
	addProjectDiv.appendChild(addProjectIcon);
	addProjectDiv.appendChild(addProject);

	taskContainer.appendChild(taskDiv);
	taskDiv.appendChild(taskHeader);
	taskHeader.appendChild(taskTitle);
	taskDiv.appendChild(taskListDiv);
	taskContainer.appendChild(addTaskDiv);
	addTaskDiv.appendChild(addTaskIcon);

	addProjectDiv.addEventListener("click", function () {
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.sendToBody)((0,_projectHandler__WEBPACK_IMPORTED_MODULE_2__.displayNewProjectWindow)());
	});

	addTaskIcon.addEventListener("click", function () {
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.sendToBody)((0,_taskHandler__WEBPACK_IMPORTED_MODULE_1__.displayNewTaskWindow)());
	});

	return { projectsContainer, taskContainer };
}

function recall() {
	const projectsDiv = document.getElementById("projects-div");
	const taskDiv = document.getElementById("main-task-div");
	let totalNumberOfTasks = 0;
	const allProjectCount = document.body.querySelector(`.project-list[data-value=P0]`);

	for (let i = 0; i < localStorage.length; i++) {
		let storageKey = localStorage.key(i);
		let storageObject = _storage__WEBPACK_IMPORTED_MODULE_3__.pageState.getStorage(storageKey);
		if (storageObject["type"] == "project" && storageKey != "P0") {
			let restoredProject = (0,_projectHandler__WEBPACK_IMPORTED_MODULE_2__.newProject)(storageObject);
			projectsDiv.appendChild(restoredProject);
		} else if (storageObject["type"] == "task") {
			totalNumberOfTasks += 1;
			let restoredTask = (0,_taskHandler__WEBPACK_IMPORTED_MODULE_1__.newTask)(storageObject);
			taskDiv.appendChild(restoredTask);
		}
	}

	allProjectCount.childNodes[1].textContent = totalNumberOfTasks;
}




/***/ }),

/***/ "./src/modules/objectFactory.js":
/*!**************************************!*\
  !*** ./src/modules/objectFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


const projects = (name) => {
	const type = "project";
	const getName = () => name;
	let totalNumberOfTasks = 0;
	let numberOfTasks = 0;

	const create = function () {
		let projectObject;
		let storageKey;
		if (name == "All") {
			storageKey = "P0";
			projectObject = Object.assign(
				{},
				{
					key: "P0",
					type: type,
					projectName: name,
					numberOfTasks: 0,
				}
			);
		} else {
			storageKey = keyGenerator("P");
			projectObject = Object.assign(
				{},
				{
					key: storageKey,
					type: type,
					projectName: name,
					numberOfTasks: 0,
				}
			);
		}

		store(storageKey, projectObject);

		return projectObject;
	};

	const update = function (key, projectName) {
		let databaseObj = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(key);
		let oldProjectName = databaseObj.projectName;
		let newProject = Object.assign({}, databaseObj);
		newProject.projectName = projectName;

		for (let i = 0; i < localStorage.length; i++) {
			let storageKey = localStorage.key(i);
			let storageObject = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(storageKey);
			if (storageObject.type == "task" && storageObject.projectName == oldProjectName) {
				let renamedProjectForTask = Object.assign({}, storageObject);
				renamedProjectForTask.projectName = projectName;
				_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateStorage(storageKey, renamedProjectForTask);
			}
		}

		databaseObj && _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateStorage(key, newProject);

		return;
	};

	const deleteProject = function (key) {
		_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.deleteStorage(key);
	};

	const updateNumberOfTasks = function (key, dec = null) {
		let storageObject = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(key);
		if (dec) {
			--storageObject.numberOfTasks;
		} else {
			++storageObject.numberOfTasks;
		}
		store(key, storageObject);
		// totalNumberOfTasks += 1;
	};

	const keyGenerator = function (letter) {
		let i = 1;
		let keyTest = 1;
		let key;
		while (keyTest) {
			key = `${letter}${i}`;
			keyTest = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(key);
			i += 1;
		}
		return key;
	};

	const store = function (key, obj) {
		_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateStorage(key, obj);
	};

	return { getName, create, update, deleteProject, updateNumberOfTasks, store, keyGenerator };
};

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

const tasks = (task, project, projectKey = "P0", notes, day, time) => {
	const { store, keyGenerator } = projects(project);
	const type = "task";
	let complete = false;

	const create = function () {
		let storageKey = keyGenerator("T");
		let taskObject = Object.assign(
			{},
			{
				key: storageKey,
				projectKey: projectKey,
				type: type,
				projectName: project,
				taskName: task,
				notes: notes,
				day: day,
				time: time,
				complete: complete,
			}
		);

		store(storageKey, taskObject);
		return taskObject;
	};

	const update = function (key, projectName, projectKey, taskName, notes, day, time) {
		let datbaseObj = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(key);
		let newTask = Object.assign({}, datbaseObj);
		newTask.projectName = projectName;
		newTask.projectKey = projectKey;
		newTask.taskName = taskName;
		newTask.notes = notes;
		newTask.day = day;
		newTask.time = time;

		datbaseObj && _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateStorage(key, newTask);

		return;
	};

	const deleteTask = function (key) {
		_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.deleteStorage(key);
	};

	return { create, update, deleteTask, store };
};




/***/ }),

/***/ "./src/modules/projectHandler.js":
/*!***************************************!*\
  !*** ./src/modules/projectHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "displayNewProjectWindow": () => (/* binding */ displayNewProjectWindow)
/* harmony export */ });
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMController */ "./src/modules/DOMController.js");
/* harmony import */ var _objectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectFactory */ "./src/modules/objectFactory.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _taskCountTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskCountTracking */ "./src/modules/taskCountTracking.js");





function newProject(obj) {
	const name = obj.projectName;
	const storageKey = obj.key;
	const numberOfTasks = obj.numberOfTasks;

	const modifiedNameForID = name.replace(/\s/g, "");
	const newProject = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "project-list", `${modifiedNameForID}-list`);
	newProject.setAttribute("data-value", storageKey);
	const newListTitle = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h3", "project-title", ...Array(1), `${name}`);
	const numberOfTasksElement = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "number-of-tasks", `${storageKey}-task-count`, `${numberOfTasks}`);

	const moreInfoIcon = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "material-icons-outlined", `info-icon-${storageKey}`, "info");
	moreInfoIcon.classList.add("more-info-icon");
	newProject.addEventListener("mouseover", function () {
		moreInfoIcon.style.display = "inline-block";
	});

	newProject.addEventListener("mouseout", function () {
		moreInfoIcon.style.display = "none";
	});

	moreInfoIcon.addEventListener("click", function () {
		const dropDownDiv = dropDownOption(storageKey);
		newProject.appendChild(dropDownDiv);
	});

	newProject.appendChild(newListTitle);
	newProject.appendChild(numberOfTasksElement);
	newProject.appendChild(moreInfoIcon);

	return newProject;
}

function dropDownOption(storageKey) {
	const dropDownDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "drop-down-content", "drop-down");
	const updateButton = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "drop-down-option", `task${storageKey}-update-button`, "Rename");
	const deleteButton = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "drop-down-option", `task${storageKey}-delete-button`, "Delete");
	updateButton.setAttribute("data-value", storageKey);
	deleteButton.setAttribute("data-value", storageKey);

	let newProject = document.body.querySelector(`.project-list[data-value=${storageKey}]`);
	let more = document.body.querySelector(`#info-icon-${storageKey}`);

	/* This behavior is unexpected. looping through all storagekeys instead of just the one storage
        key associated with the clicked element. error occurs in the console at every execution */
	document.addEventListener("click", function (e) {
		if (document.getElementById("drop-down") && !document.getElementById("drop-down").contains(e.target) && e.target != more) {
			newProject.removeChild(document.getElementById("drop-down"));
		}
	});

	updateButton.addEventListener("click", function () {
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.sendToBody)(displayNewProjectWindow(storageKey));
		newProject.removeChild(dropDownDiv);
	});

	deleteButton.addEventListener("click", function () {
		const mainProjectsDiv = document.getElementById("projects-div");
		const deletedProject = document.body.querySelector(`.project-list[data-value=${storageKey}`);
		removeAllTasks(storageKey);
		(0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.projects)().deleteProject(storageKey);
		mainProjectsDiv.removeChild(deletedProject);
	});

	dropDownDiv.appendChild(updateButton);
	dropDownDiv.appendChild(deleteButton);

	return dropDownDiv;
}

function removeAllTasks(storageKey) {
	const mainTaskDiv = document.getElementById("main-task-div");

	let projectName = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(storageKey)["projectName"];
	for (let i = 0; i < localStorage.length; i++) {
		let taskKey = localStorage.key(i);
		let taskObject = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(taskKey);
		if (taskObject["type"] == "task" && taskObject["projectName"] == projectName) {
			let deletedTask = document.body.querySelector(`.task-list[data-value=${taskKey}`);
			mainTaskDiv.removeChild(deletedTask);
			(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_3__.updateDOMForDeletingTask)(taskObject.projectKey)
			;(0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.tasks)().deleteTask(taskKey);
		}
	}
}

function displayNewProjectWindow(storageKey = null) {
	const newProjectContainer = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "new-project-form-container");
	const newProjectDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "new-project-form-div");
	const title = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h2", "pop-up-window-title", ...Array(1), "New Project");
	const error = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "project-name-error");
	const projectForm = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("form", ...Array(1), "project-form");
	const projectNameInputLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "Name:");
	const projectNameInput = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", "form-input", "project-name-input");
	projectNameInput.type = "text";
	projectNameInputLabel.setAttribute("for", "project-name-input");
	const buttonSelectorDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "button-selector-div");
	const cancelButton = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("button", "button", "project-cancel-button", "Cancel");
	const submitButton = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", "button", "project-submit-button");
	submitButton.type = "submit";
	submitButton.value = "OK";
	submitButton.setAttribute("for", "project-name-input");

	if (storageKey) {
		projectNameInput.value = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(`${storageKey}`)["projectName"];
	}

	newProjectContainer.appendChild(newProjectDiv);
	newProjectDiv.appendChild(title);
	newProjectDiv.appendChild(error);
	newProjectDiv.appendChild(projectForm);
	projectForm.appendChild(projectNameInputLabel);
	projectForm.appendChild(projectNameInput);
	projectForm.appendChild(buttonSelectorDiv);
	projectForm.appendChild(cancelButton);
	projectForm.appendChild(submitButton);

	projectForm.addEventListener("submit", (e) => {
		const errorField = document.getElementById("project-name-error");
		const projectsDiv = document.getElementById("projects-div");
		
		let messages = [];
		let projectNameValue = projectNameInput.value;
		if (projectNameValue.toLowerCase() == "all") {
			messages.push("Cannot use 'All' as a project name");
		}
		if (projectNameValue === "" || projectNameValue == null) {
			messages.push("Name is required");
		}
		if (messages.length > 0) {
			e.preventDefault();
			errorField.textContent = messages.join(", ");
		} else {
			let instantiateProjectObject = (0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.projects)(projectNameValue);
			if (storageKey) {
				const updateProjectDiv = document.body.querySelector(`.project-list[data-value=${storageKey}]`);
				updateProjectDiv.childNodes[0].textContent = projectNameValue;
				instantiateProjectObject.update(storageKey, projectNameValue);
			} else {
				let newProjectObject = instantiateProjectObject.create();
				let newElement = newProject(newProjectObject);
				projectsDiv.appendChild(newElement);
			}

			(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.closeWindow)(newProjectContainer);
		}
	});

	cancelButton.addEventListener("click", function () {
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.closeWindow)(newProjectContainer);
	});

	return newProjectContainer;
}



/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageState": () => (/* binding */ pageState)
/* harmony export */ });
const pageState = (() => {
	const populateStorage = (objectKey, objectValues) => {
		localStorage.setItem(objectKey, JSON.stringify(objectValues));
	};

	const getStorage = (objectKey) => {
		return JSON.parse(localStorage.getItem(objectKey));
	};

	const deleteStorage = (objectKey) => {
		return localStorage.removeItem(objectKey);
	};

	return { populateStorage, getStorage, deleteStorage };
})();




/***/ }),

/***/ "./src/modules/taskCountTracking.js":
/*!******************************************!*\
  !*** ./src/modules/taskCountTracking.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateDOMForExistingTask": () => (/* binding */ updateDOMForExistingTask),
/* harmony export */   "updateDOMForNewTask": () => (/* binding */ updateDOMForNewTask),
/* harmony export */   "updateDOMForDeletingTask": () => (/* binding */ updateDOMForDeletingTask)
/* harmony export */ });
function updateDOMForNewTask(key) {
	let allTaskCounter = document.getElementById(`P0-task-count`);
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	++projectTaskCounter.textContent;
	if (key != "P0") {
		++allTaskCounter.textContent;
	}
}

function updateDOMForExistingTask(key, oldKey) {
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	let oldProjectTaskCounter = document.getElementById(`${oldKey}-task-count`);
	if (key != "P0") {
		++projectTaskCounter.textContent;
	}
	if (oldKey != "P0") {
		--oldProjectTaskCounter.textContent;
	}
}

function updateDOMForDeletingTask(key) {
	let allTaskCounter = document.getElementById(`P0-task-count`);
	let projectTaskCounter = document.getElementById(`${key}-task-count`);
	--projectTaskCounter.textContent;
	if (key != "P0") {
		--allTaskCounter.textContent;
	}
}





/***/ }),

/***/ "./src/modules/taskHandler.js":
/*!************************************!*\
  !*** ./src/modules/taskHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "dropDownOption": () => (/* binding */ dropDownOption),
/* harmony export */   "displayNewTaskWindow": () => (/* binding */ displayNewTaskWindow)
/* harmony export */ });
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMController */ "./src/modules/DOMController.js");
/* harmony import */ var _objectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectFactory */ "./src/modules/objectFactory.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _taskCountTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskCountTracking */ "./src/modules/taskCountTracking.js");





function newTask(obj) {
	let storageKey = obj.key;
	let project = obj.projectName;
	let task = obj.taskName;
	let notes = obj.notes;
	let day = obj.day;
	let time = obj.time;
	let complete = obj.complete;

	const newTask = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "task-list");
	newTask.setAttribute("data-value", storageKey);
	const newTaskCheckMark = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", "task-checkmark");
	newTaskCheckMark.type = "radio";
	if (complete) {
		newTaskCheckMark.checked = true;
	}
	const newTaskDetails = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "task-info-container");
	const newTaskTitle = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h3", "task-title", ...Array(1), task);
	const newTaskNotesDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "task-notes-div");
	const newTaskNotes = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("p", "task-notes", ...Array(1), notes);
	const newDateTimeDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "task-date-time-div");
	const newTaskDay = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("p", "task-date", ...Array(1), day);
	const newTasktime = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("p", "task-time", ...Array(1), time);

	newTaskCheckMark.addEventListener("click", function () {
		complete = !complete;
		obj.complete = complete;
		(0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.tasks)().store(storageKey, obj);

		if (complete) {
			newTaskCheckMark.checked;
		} else {
			newTaskCheckMark.checked = false;
		}
	});

	const moreInfoIcon = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "material-icons-outlined", `info-icon-${storageKey}`, "info");
	moreInfoIcon.classList.add("more-info-icon");
	newTask.addEventListener("mouseover", function () {
		moreInfoIcon.style.display = "inline-block";
	});

	newTask.addEventListener("mouseout", function () {
		moreInfoIcon.style.display = "none";
	});

	moreInfoIcon.addEventListener("click", function () {
		const dropDownDiv = dropDownOption(storageKey);
		newTask.appendChild(dropDownDiv);
	});

	newTask.appendChild(newTaskCheckMark);
	newTask.appendChild(newTaskDetails);
	newTaskDetails.appendChild(newTaskTitle);
	newTaskDetails.appendChild(newTaskNotesDiv);
	newTaskNotesDiv.appendChild(newTaskNotes);
	newTaskDetails.appendChild(newDateTimeDiv);
	newDateTimeDiv.appendChild(newTaskDay);
	newDateTimeDiv.appendChild(newTasktime);
	newTask.appendChild(moreInfoIcon);

	return newTask;
}

function dropDownOption(storageKey) {
	const dropDownDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "drop-down-content", "drop-down");
	const updateButton = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "drop-down-option", `task${storageKey}-update-button`, "Edit");
	const deleteButton = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "drop-down-option", `task${storageKey}-delete-button`, "Delete");
	updateButton.setAttribute("data-value", storageKey);
	deleteButton.setAttribute("data-value", storageKey);

	let newTask = document.body.querySelector(`.task-list[data-value=${storageKey}]`);
	let more = document.body.querySelector(`#info-icon-${storageKey}`);

	/* This behavior is unexpected. looping through all storagekeys instead of just the one storage
        key associated with the clicked element. error occurs in the console at every execution */
	document.addEventListener("click", function (e) {
		if (document.getElementById("drop-down") && !document.getElementById("drop-down").contains(e.target) && e.target != more) {
			newTask.removeChild(document.getElementById("drop-down"));
		}
	});

	updateButton.addEventListener("click", function () {
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.sendToBody)(displayNewTaskWindow(storageKey));
		newTask.removeChild(dropDownDiv);
	});

	deleteButton.addEventListener("click", function () {
		const mainTaskDiv = document.getElementById("main-task-div");
		const deletedTask = document.body.querySelector(`.task-list[data-value=${storageKey}`);
		let projectKey = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(storageKey).projectKey;
		(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_3__.updateDOMForDeletingTask)(projectKey)
		;(0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.tasks)().deleteTask(storageKey);
		mainTaskDiv.removeChild(deletedTask);
	});

	dropDownDiv.appendChild(updateButton);
	dropDownDiv.appendChild(deleteButton);

	return dropDownDiv;
}

function displayNewTaskWindow(storageKey = null) {
	const newTaskContainer = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "new-task-form-container");
	const newTaskDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "new-task-form-div");
	const title = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h2", "pop-up-window-title", ...Array(1), "New Task");

	const form = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("form", ...Array(1), "task-form");

	const taskNameInput = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", "form-input", "task-name-input");
	taskNameInput.type = "text";
	const taskNameInputLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "Task:");
	taskNameInputLabel.setAttribute("for", "task-name-input");

	const taskNotesInput = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", "form-input", "task-notes-input");
	taskNotesInput.type = "text";
	const taskNotesInputLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "Notes:");
	taskNotesInputLabel.setAttribute("for", "task-notes-input");

	const projectNameSelect = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("select", "form-selection", "project-name-selection");
	for (let i = 0; localStorage.key(i); i++) {
		let storageKey = localStorage.key(i);
		let storageObject = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(storageKey);
		if (storageObject["type"] == "project") {
			const projectNameSelectOption = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("option");
			projectNameSelectOption.setAttribute("value", storageObject.projectName);
			projectNameSelectOption.setAttribute("data", storageObject.key);
			projectNameSelectOption.textContent = storageObject.projectName;
			projectNameSelect.appendChild(projectNameSelectOption);
		}
	}

	const projectNameSelectLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "Select a project");
	projectNameSelectLabel.setAttribute("for", "project-name-selection");

	const dateDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "date-time", "date");

	const dateRadioYes = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", ...Array(1), "include-date");
	dateRadioYes.type = "Radio";
	const dateRadioYesLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "Yes");
	dateRadioYesLabel.setAttribute("for", "include-date");

	const dateRadioNo = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", ...Array(1), "dont-include-date");
	dateRadioNo.type = "Radio";
	dateRadioNo.checked = true;
	const dateRadioNoLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "No");
	dateRadioNoLabel.setAttribute("for", "dont-include-date");

	const dateInput = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", "form-input", "task-date-input");
	dateInput.type = "text";
	dateInput.disabled = true;
	const dateInputLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "Date:");
	dateInputLabel.setAttribute("for", "task-date-input");

	////////////////////

	const timeDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "date-time", "time");

	const timeRadioYes = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", ...Array(1), "include-time");
	timeRadioYes.type = "Radio";
	const timeRadioYesLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "Yes");
	timeRadioYesLabel.setAttribute("for", "include-time");

	const timeRadioNo = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", ...Array(1), "dont-include-time");
	timeRadioNo.type = "Radio";
	timeRadioNo.checked = true;
	const timeRadioNoLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "No");
	timeRadioNoLabel.setAttribute("for", "dont-include-time");

	const timeInput = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", "form-input", "task-time-input");
	timeInput.type = "text";
	timeInput.disabled = true;
	const timeInputLabel = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("label", "form-labels", ...Array(1), "Time:");
	timeInputLabel.setAttribute("for", "task-time-input");

	const buttonSelectorDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "button-selector-div");
	const cancelButton = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("button", "button", "task-cancel-button", "Cancel");
	const submitButton = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("input", "button", "task-submit-button");
	submitButton.type = "submit";
	submitButton.value = "OK";
	submitButton.setAttribute("for", "task-form");

	if (storageKey) {
		taskNameInput.value = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(`${storageKey}`)["taskName"];
		taskNotesInput.value = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(`${storageKey}`)["notes"];
		projectNameSelect.value = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(`${storageKey}`)["projectName"];

		if (_storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(`${storageKey}`)["day"]) {
			dateRadioYes.checked = true;
			dateRadioNo.checked = false;
			dateInput.disabled = false;
			dateInput.value = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(`${storageKey}`)["day"];
		}
		if (_storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(`${storageKey}`)["time"]) {
			timeRadioYes.checked = true;
			timeRadioNo.checked = false;
			timeInput.disabled = false;
			timeInput.value = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(`${storageKey}`)["time"];
		}
	}

	newTaskContainer.appendChild(newTaskDiv);
	newTaskDiv.appendChild(title);
	newTaskDiv.appendChild(form);
	form.appendChild(taskNameInputLabel);
	form.appendChild(taskNameInput);
	form.appendChild(projectNameSelectLabel);
	form.appendChild(projectNameSelect);
	form.appendChild(taskNotesInputLabel);
	form.appendChild(taskNotesInput);
	form.appendChild(dateDiv);
	dateDiv.appendChild(dateInputLabel);
	dateDiv.appendChild(dateInput);
	dateDiv.appendChild(dateRadioYesLabel);
	dateDiv.appendChild(dateRadioYes);
	dateDiv.appendChild(dateRadioNoLabel);
	dateDiv.appendChild(dateRadioNo);
	form.appendChild(timeDiv);
	timeDiv.appendChild(timeInputLabel);
	timeDiv.appendChild(timeInput);
	timeDiv.appendChild(timeRadioYesLabel);
	timeDiv.appendChild(timeRadioYes);
	timeDiv.appendChild(timeRadioNoLabel);
	timeDiv.appendChild(timeRadioNo);
	newTaskDiv.appendChild(buttonSelectorDiv);
	buttonSelectorDiv.appendChild(cancelButton);
	buttonSelectorDiv.appendChild(submitButton);

	dateRadioYes.addEventListener("click", () => {
		if (dateRadioYes.checked) {
			dateRadioNo.checked = false;
			dateInput.disabled = false;
		}
	});

	dateRadioNo.addEventListener("click", () => {
		if (dateRadioNo.checked) {
			dateRadioYes.checked = false;
			dateInput.disabled = true;
		}
	});

	timeRadioYes.addEventListener("click", () => {
		if (timeRadioYes.checked) {
			timeRadioNo.checked = false;
			timeInput.disabled = false;
		}
	});

	timeRadioNo.addEventListener("click", () => {
		if (timeRadioNo.checked) {
			timeRadioYes.checked = false;
			timeInput.disabled = true;
		}
	});

	cancelButton.addEventListener("click", function () {
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.closeWindow)(newTaskContainer);
	});

	submitButton.addEventListener("click", function () {
		const taskDiv = document.getElementById("main-task-div");
		let taskNameValue = taskNameInput.value;
		let taskProjectNameValue = projectNameSelect.value;

		let option = projectNameSelect.options[projectNameSelect.selectedIndex];
		let taskProjectKey = option.attributes.data.value;

		let taskNotesValue = taskNotesInput.value;
		let taskDateValue = "";
		let taskTimeValue = "";
		if (dateInput) {
			taskDateValue = dateInput.value;
		}
		if (timeInput) {
			taskTimeValue = timeInput.value;
		}
		let instantiateTaskObject = (0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.tasks)(taskNameValue, taskProjectNameValue, taskProjectKey, taskNotesValue, taskDateValue, taskTimeValue);
		if (storageKey) {
			const updateTaskDiv = document.querySelector(`.task-list[data-value=${storageKey}]`).childNodes[1];
			updateTaskDiv.childNodes[0].textContent = taskNameValue;
			updateTaskDiv.childNodes[1].childNodes[0].textContent = taskNotesValue;
			updateTaskDiv.childNodes[2].childNodes[0].textContent = taskDateValue;
			updateTaskDiv.childNodes[2].childNodes[1].textContent = taskTimeValue;
			let oldKey = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(storageKey).projectKey;
			let newKey = taskProjectKey;
			(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_3__.updateDOMForExistingTask)(newKey, oldKey);
			(0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.projects)().updateNumberOfTasks(newKey);
			(0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.projects)().updateNumberOfTasks(oldKey, "decrement");
			instantiateTaskObject.update(storageKey, taskProjectNameValue, taskProjectKey, taskNameValue, taskNotesValue, taskDateValue, taskTimeValue);
		} else {
			let newTaskObject = instantiateTaskObject.create();
			let newElement = newTask(newTaskObject);
			(0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.projects)().updateNumberOfTasks(newTaskObject.projectKey);
			(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_3__.updateDOMForNewTask)(newTaskObject.projectKey);
			taskDiv.appendChild(newElement);
		}

		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.closeWindow)(newTaskContainer);
	});

	return newTaskContainer;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _modules_elementBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elementBuilder */ "./src/modules/elementBuilder.js");
/* harmony import */ var _modules_DOMController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOMController */ "./src/modules/DOMController.js");




const main = _modules_DOMController__WEBPACK_IMPORTED_MODULE_2__.newElement("div", "container", "content");
// document.addEventListener("click", function (e) {
//     console.log(e.target)
//     // console.log("hey")
// });

_modules_DOMController__WEBPACK_IMPORTED_MODULE_2__.moduleRender((0,_modules_elementBuilder__WEBPACK_IMPORTED_MODULE_1__.home)(), main);
_modules_DOMController__WEBPACK_IMPORTED_MODULE_2__.sendToBody(main);
(0,_modules_elementBuilder__WEBPACK_IMPORTED_MODULE_1__.recall)()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxzREFBc0Qsa0JBQWtCLG1DQUFtQyxnQkFBZ0IsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsbUJBQW1CLDRCQUE0QixrQkFBa0Isd0JBQXdCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsR0FBRyxtRkFBbUYsb0JBQW9CLEdBQUcsNERBQTRELGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3Qiw4Q0FBOEMsaUJBQWlCLGlCQUFpQixvQkFBb0IsV0FBVyxZQUFZLGlCQUFpQiw2Q0FBNkMscUNBQXFDLEtBQUssZ0RBQWdELGtCQUFrQiwyQkFBMkIsa0JBQWtCLDJCQUEyQix3QkFBd0Isb0JBQW9CLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0IsR0FBRyxxQkFBcUIsb0JBQW9CLHNCQUFzQixHQUFHLHVCQUF1QixtQkFBbUIsNkJBQTZCLHlCQUF5QixlQUFlLDhCQUE4Qix1QkFBdUIsaUJBQWlCLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLDRCQUE0Qiw4QkFBOEIsR0FBRyxXQUFXLCtFQUErRSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksc0NBQXNDLGtCQUFrQixtQ0FBbUMsZ0JBQWdCLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLEdBQUcsOEJBQThCLHNCQUFzQixHQUFHLG1CQUFtQiw0QkFBNEIsa0JBQWtCLHdCQUF3QixHQUFHLHNCQUFzQixrQkFBa0Isd0JBQXdCLEdBQUcsbUZBQW1GLG9CQUFvQixHQUFHLDREQUE0RCxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsOENBQThDLGlCQUFpQixpQkFBaUIsb0JBQW9CLFdBQVcsWUFBWSxpQkFBaUIsNkNBQTZDLHFDQUFxQyxLQUFLLGdEQUFnRCxrQkFBa0IsMkJBQTJCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLG9CQUFvQixHQUFHLGdCQUFnQixrQkFBa0Isd0JBQXdCLEdBQUcscUJBQXFCLG9CQUFvQixzQkFBc0IsR0FBRyx1QkFBdUIsbUJBQW1CLDZCQUE2Qix5QkFBeUIsZUFBZSw4QkFBOEIsdUJBQXVCLGlCQUFpQixHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyw0QkFBNEIsOEJBQThCLEdBQUcsdUJBQXVCO0FBQ2hwSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQWtHO0FBQ2xHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJNEM7QUFDcEUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLDRGQUFjLEdBQUcsNEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3pCO0FBQ0s7QUFDUztBQUNqQztBQUNnQjtBQUNYOztBQUUzQztBQUNBLDJCQUEyQiwwREFBVTtBQUNyQyxxQkFBcUIsMERBQVU7QUFDL0IsdUJBQXVCLDBEQUFVO0FBQ2pDLHNCQUFzQiwwREFBVTtBQUNoQyxrQkFBa0IsMERBQVU7QUFDNUI7QUFDQSxnQ0FBZ0Msd0RBQVE7QUFDeEM7QUFDQSxtQkFBbUIsMERBQVU7QUFDN0IsdUJBQXVCLDBEQUFVOztBQUVqQyx1QkFBdUIsMERBQVU7QUFDakMsaUJBQWlCLDBEQUFVO0FBQzNCLG9CQUFvQiwwREFBVTtBQUM5QixtQkFBbUIsMERBQVU7QUFDN0IscUJBQXFCLDBEQUFVOztBQUUvQix1QkFBdUIsMERBQVU7QUFDakMsd0JBQXdCLDBEQUFVO0FBQ2xDLG9CQUFvQiwwREFBVTs7QUFFOUIsb0JBQW9CLDBEQUFVO0FBQzlCLHFCQUFxQiwwREFBVTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQVUsQ0FBQyx3RUFBdUI7QUFDcEMsRUFBRTs7QUFFRjtBQUNBLEVBQUUsMERBQVUsQ0FBQyxrRUFBb0I7QUFDakMsRUFBRTs7QUFFRixVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0Esc0JBQXNCLDBEQUFvQjtBQUMxQztBQUNBLHlCQUF5QiwyREFBVTtBQUNuQztBQUNBLElBQUk7QUFDSjtBQUNBLHNCQUFzQixxREFBTztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZjOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwREFBb0I7QUFDeEM7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUEsa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBLHVCQUF1QiwwREFBb0I7QUFDM0M7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxJQUFJLCtEQUF5QjtBQUM3QjtBQUNBOztBQUVBLGlCQUFpQiwrREFBeUI7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDZEQUF1QjtBQUN6Qjs7QUFFQTtBQUNBLHNCQUFzQiwwREFBb0I7QUFDMUM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU8sRUFBRSxFQUFFO0FBQ3ZCLGFBQWEsMERBQW9CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrREFBeUI7QUFDM0I7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiwwREFBb0I7QUFDdkMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsK0RBQXlCOztBQUV6QztBQUNBOztBQUVBO0FBQ0EsRUFBRSw2REFBdUI7QUFDekI7O0FBRUEsVUFBVTtBQUNWOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SjJDO0FBQ3BCO0FBQ1o7QUFDeUI7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDBEQUFVLDJCQUEyQixrQkFBa0I7QUFDM0U7QUFDQSxzQkFBc0IsMERBQVUsd0NBQXdDLEtBQUs7QUFDN0UsOEJBQThCLDBEQUFVLCtCQUErQixXQUFXLGlCQUFpQixjQUFjOztBQUVqSCxzQkFBc0IsMERBQVUsaURBQWlELFdBQVc7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDBEQUFVO0FBQy9CLHNCQUFzQiwwREFBVSxvQ0FBb0MsV0FBVztBQUMvRSxzQkFBc0IsMERBQVUsb0NBQW9DLFdBQVc7QUFDL0U7QUFDQTs7QUFFQSwwRUFBMEUsV0FBVztBQUNyRixzREFBc0QsV0FBVzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLEVBQUUsMERBQVU7QUFDWjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLGlGQUFpRixXQUFXO0FBQzVGO0FBQ0EsRUFBRSx3REFBUTtBQUNWO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsMERBQW9CO0FBQ3ZDLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQSxtQkFBbUIsMERBQW9CO0FBQ3ZDO0FBQ0EsMEVBQTBFLFFBQVE7QUFDbEY7QUFDQSxHQUFHLDRFQUF3QjtBQUMzQixHQUFHLHNEQUFLO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDBEQUFVO0FBQ3ZDLHVCQUF1QiwwREFBVTtBQUNqQyxlQUFlLDBEQUFVO0FBQ3pCLGVBQWUsMERBQVU7QUFDekIscUJBQXFCLDBEQUFVO0FBQy9CLCtCQUErQiwwREFBVTtBQUN6QywwQkFBMEIsMERBQVU7QUFDcEM7QUFDQTtBQUNBLDJCQUEyQiwwREFBVTtBQUNyQyxzQkFBc0IsMERBQVU7QUFDaEMsc0JBQXNCLDBEQUFVO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiwwREFBb0IsSUFBSSxXQUFXO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osa0NBQWtDLHdEQUFRO0FBQzFDO0FBQ0EscUZBQXFGLFdBQVc7QUFDaEc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLDJEQUFXO0FBQ2Q7QUFDQSxFQUFFOztBQUVGO0FBQ0EsRUFBRSwyREFBVztBQUNiLEVBQUU7O0FBRUY7QUFDQTtBQUMrQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0ovQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnJCO0FBQ0E7QUFDQSxxREFBcUQsSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELElBQUk7QUFDekQsd0RBQXdELE9BQU87QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRCxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdtRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJiO0FBQ3BCO0FBQ1o7QUFDdUU7O0FBRTdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDBEQUFVO0FBQzNCO0FBQ0EsMEJBQTBCLDBEQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFVO0FBQ2xDLHNCQUFzQiwwREFBVTtBQUNoQyx5QkFBeUIsMERBQVU7QUFDbkMsc0JBQXNCLDBEQUFVO0FBQ2hDLHdCQUF3QiwwREFBVTtBQUNsQyxvQkFBb0IsMERBQVU7QUFDOUIscUJBQXFCLDBEQUFVOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFLOztBQUVQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7O0FBRUYsc0JBQXNCLDBEQUFVLGlEQUFpRCxXQUFXO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwwREFBVTtBQUMvQixzQkFBc0IsMERBQVUsb0NBQW9DLFdBQVc7QUFDL0Usc0JBQXNCLDBEQUFVLG9DQUFvQyxXQUFXO0FBQy9FO0FBQ0E7O0FBRUEsb0VBQW9FLFdBQVc7QUFDL0Usc0RBQXNELFdBQVc7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxFQUFFLDBEQUFVO0FBQ1o7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSwyRUFBMkUsV0FBVztBQUN0RixtQkFBbUIsMERBQW9CO0FBQ3ZDLEVBQUUsNEVBQXdCO0FBQzFCLEVBQUUsc0RBQUs7QUFDUDtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDBEQUFVO0FBQ3BDLG9CQUFvQiwwREFBVTtBQUM5QixlQUFlLDBEQUFVOztBQUV6QixjQUFjLDBEQUFVOztBQUV4Qix1QkFBdUIsMERBQVU7QUFDakM7QUFDQSw0QkFBNEIsMERBQVU7QUFDdEM7O0FBRUEsd0JBQXdCLDBEQUFVO0FBQ2xDO0FBQ0EsNkJBQTZCLDBEQUFVO0FBQ3ZDOztBQUVBLDJCQUEyQiwwREFBVTtBQUNyQyxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0Esc0JBQXNCLDBEQUFvQjtBQUMxQztBQUNBLG1DQUFtQywwREFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLDBEQUFVO0FBQzFDOztBQUVBLGlCQUFpQiwwREFBVTs7QUFFM0Isc0JBQXNCLDBEQUFVO0FBQ2hDO0FBQ0EsMkJBQTJCLDBEQUFVO0FBQ3JDOztBQUVBLHFCQUFxQiwwREFBVTtBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFVO0FBQ3BDOztBQUVBLG1CQUFtQiwwREFBVTtBQUM3QjtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFVO0FBQ2xDOztBQUVBOztBQUVBLGlCQUFpQiwwREFBVTs7QUFFM0Isc0JBQXNCLDBEQUFVO0FBQ2hDO0FBQ0EsMkJBQTJCLDBEQUFVO0FBQ3JDOztBQUVBLHFCQUFxQiwwREFBVTtBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFVO0FBQ3BDOztBQUVBLG1CQUFtQiwwREFBVTtBQUM3QjtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFVO0FBQ2xDOztBQUVBLDJCQUEyQiwwREFBVTtBQUNyQyxzQkFBc0IsMERBQVU7QUFDaEMsc0JBQXNCLDBEQUFVO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwREFBb0IsSUFBSSxXQUFXO0FBQzNELHlCQUF5QiwwREFBb0IsSUFBSSxXQUFXO0FBQzVELDRCQUE0QiwwREFBb0IsSUFBSSxXQUFXOztBQUUvRCxNQUFNLDBEQUFvQixJQUFJLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFvQixJQUFJLFdBQVc7QUFDeEQ7QUFDQSxNQUFNLDBEQUFvQixJQUFJLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFvQixJQUFJLFdBQVc7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsRUFBRSwyREFBVztBQUNiLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscURBQUs7QUFDbkM7QUFDQSx5RUFBeUUsV0FBVztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBb0I7QUFDcEM7QUFDQSxHQUFHLDRFQUF3QjtBQUMzQixHQUFHLHdEQUFRO0FBQ1gsR0FBRyx3REFBUTtBQUNYO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHLHdEQUFRO0FBQ1gsR0FBRyx1RUFBbUI7QUFDdEI7QUFDQTs7QUFFQSxFQUFFLDJEQUFXO0FBQ2IsRUFBRTs7QUFFRjtBQUNBOztBQUV5RDs7Ozs7OztVQ3JUekQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ29DO0FBQ0Y7O0FBRXRELGFBQWEsOERBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosZ0VBQXVCLENBQUMsNkRBQUk7QUFDNUIsOERBQXFCO0FBQ3JCLCtEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2VsZW1lbnRCdWlsZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrQ291bnRUcmFja2luZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuXFx0Z2FwOiAxLjI1ZW07XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm51bWJlci1vZi10YXNrcyxcXG4uZWRpdCB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcblxcdGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZHJvcC1kb3duLW9wdGlvbixcXG4ubW9yZS1pbmZvLWljb24sXFxuI2FkZC10YXNrLWljb24sXFxuI2FkZC1wcm9qZWN0LWRpdjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stZm9ybS1jb250YWluZXIsXFxuI25ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLCAxMTIsIDEzMSwgMC40KTtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAqL1xcblxcdC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyAqL1xcbn1cXG5cXG4jbmV3LXRhc2stZm9ybS1kaXYsXFxuI25ldy1wcm9qZWN0LWZvcm0tZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Ym9yZGVyOiBzb2xpZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFx0cGFkZGluZzogMC43NWVtO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3JlLWluZm8taWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5kcm9wLWRvd24tY29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLXdpZHRoOiAxNjBweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3AtZG93bi1vcHRpb257XFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXG59XFxuXFxuLmRyb3AtZG93bi1vcHRpb246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQgO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBOzs7O0NBSUMsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIseUNBQXlDO0NBQ3pDLFlBQVk7Q0FDWixZQUFZO0NBQ1osZUFBZTtDQUNmLE1BQU07Q0FDTixPQUFPO0NBQ1AsWUFBWTtDQUNaLDBDQUEwQztDQUMxQyxnQ0FBZ0M7QUFDakM7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG5cXHRnYXA6IDEuMjVlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubnVtYmVyLW9mLXRhc2tzLFxcbi5lZGl0IHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuXFx0Ym9yZGVyOiBibGFjayAycHggc29saWQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kcm9wLWRvd24tb3B0aW9uLFxcbi5tb3JlLWluZm8taWNvbixcXG4jYWRkLXRhc2staWNvbixcXG4jYWRkLXByb2plY3QtZGl2OmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctdGFzay1mb3JtLWNvbnRhaW5lcixcXG4jbmV3LXByb2plY3QtZm9ybS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTEsIDExMiwgMTMxLCAwLjQpO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHotaW5kZXg6IDk5OTtcXG5cXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXFxuXFx0LyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7ICovXFxufVxcblxcbiNuZXctdGFzay1mb3JtLWRpdixcXG4jbmV3LXByb2plY3QtZm9ybS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRib3JkZXI6IHNvbGlkO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXG5cXHRwYWRkaW5nOiAwLjc1ZW07XFxufVxcblxcbi50YXNrLWxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vcmUtaW5mby1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmRyb3AtZG93bi1jb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcC1kb3duLW9wdGlvbntcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbn1cXG5cXG4uZHJvcC1kb3duLW9wdGlvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCA7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIG5ld0VsZW1lbnQoZWxlbWVudCA9IFwiXCIsIGNsYXNzTmFtZSA9IFwiXCIsIGVsZW1lbnRJRCA9IFwiXCIsIHRleHQgPSBcIlwiLCBocmVmID0gXCJcIikge1xuXHRjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcblx0Y2xhc3NOYW1lID8gKG5ld0VsZW1lbnQuY2xhc3NMaXN0ID0gY2xhc3NOYW1lKSA6IG51bGw7XG5cdGVsZW1lbnRJRCA/IChuZXdFbGVtZW50LmlkID0gZWxlbWVudElEKSA6IG51bGw7XG5cdHRleHQgPyAobmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQpIDogbnVsbDtcblx0aWYgKGVsZW1lbnQgPT0gXCJhXCIpIHtcblx0XHRocmVmID8gKG5ld0VsZW1lbnQuaHJlZiA9IGhyZWYpIDogbnVsbDtcblx0fVxuXG5cdHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZW5kVG9Cb2R5KEhUTUwpIHtcblx0cmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoSFRNTCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuXHRcdHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbW9kdWxlUmVuZGVyKG9iaiwgcGFyZW50Tm9kZSkge1xuXHRyZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xuXHRmb3IgKGxldCB4IGluIG9iaikge1xuXHRcdHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQob2JqW3hdKTtcblx0fVxufVxuXG5jb25zdCBjbG9zZVdpbmRvdyA9IChlbGVtZW50KSA9PiB7XG5cdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG59O1xuXG5leHBvcnQgeyBuZXdFbGVtZW50LCBzZW5kVG9Cb2R5LCByZW1vdmVBbGxDaGlsZE5vZGVzLCBtb2R1bGVSZW5kZXIsIGNsb3NlV2luZG93IH07XG4iLCJpbXBvcnQgeyBuZXdFbGVtZW50LCBzZW5kVG9Cb2R5IH0gZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgbmV3VGFzaywgZGlzcGxheU5ld1Rhc2tXaW5kb3cgfSBmcm9tIFwiLi90YXNrSGFuZGxlclwiO1xuaW1wb3J0IHsgbmV3UHJvamVjdCwgZGlzcGxheU5ld1Byb2plY3RXaW5kb3cgfSBmcm9tIFwiLi9wcm9qZWN0SGFuZGxlclwiO1xuaW1wb3J0IHsgcGFnZVN0YXRlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgc3RhdGljVGFza0NvdW50IH0gZnJvbSBcIi4vdGFza0NvdW50VHJhY2tpbmdcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vb2JqZWN0RmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBob21lKCkge1xuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG5cdGNvbnN0IHByb2plY3RzRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJwcm9qZWN0cy1kaXZcIik7XG5cdGNvbnN0IHByb2plY3RIZWFkZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyXCIpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBuZXdFbGVtZW50KFwiaDFcIiwgXCJ0aXRsZVwiLCAuLi5BcnJheSgxKSwgXCJNeSBQcm9qZWN0c1wiKTtcblx0Y29uc3QgbWFpbkxpc3QgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1saXN0XCIsIFwiYWxsLWxpc3RcIik7XG5cdG1haW5MaXN0LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJQMFwiKTtcblx0Y29uc3QgaW5zdGFudGlhdGVNYWluUHJvamVjdCA9IHByb2plY3RzKFwiQWxsXCIpO1xuXHRsZXQgbWFpbkxpc3RPYmogPSBpbnN0YW50aWF0ZU1haW5Qcm9qZWN0LmNyZWF0ZSgpO1xuXHRjb25zdCBsaXN0VGl0bGUgPSBuZXdFbGVtZW50KFwiaDNcIiwgXCJwcm9qZWN0LXRpdGxlXCIsIC4uLkFycmF5KDEpLCBcIkFsbFwiKTtcblx0Y29uc3QgbnVtYmVyT2ZUYXNrcyA9IG5ld0VsZW1lbnQoXCJzcGFuXCIsIFwibnVtYmVyLW9mLXRhc2tzXCIsIGBQMC10YXNrLWNvdW50YCwgbWFpbkxpc3RPYmoubnVtYmVyT2ZUYXNrcyk7XG5cblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgdGFza0RpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwidGFzay1kaXZcIik7XG5cdGNvbnN0IHRhc2tIZWFkZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyXCIpO1xuXHRjb25zdCB0YXNrVGl0bGUgPSBuZXdFbGVtZW50KFwiaDJcIiwgXCJ0aXRsZVwiLCAuLi5BcnJheSgxKSwgbWFpbkxpc3RPYmoucHJvamVjdE5hbWUpO1xuXHRjb25zdCB0YXNrTGlzdERpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWxpc3QtZGl2XCIsIFwibWFpbi10YXNrLWRpdlwiKTtcblxuXHRjb25zdCBhZGRQcm9qZWN0RGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJhZGQtcHJvamVjdC1kaXZcIik7XG5cdGNvbnN0IGFkZFByb2plY3RJY29uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLCBcImFkZC1wcm9qZWN0LWljb25cIiwgXCJhZGRfY2lyY2xlX291dGxpbmVcIik7XG5cdGNvbnN0IGFkZFByb2plY3QgPSBuZXdFbGVtZW50KFwic3BhblwiLCAuLi5BcnJheSgxKSwgXCJhZGQtcHJvamVjdFwiLCBcIkFkZCBQcm9qZWN0XCIpO1xuXG5cdGNvbnN0IGFkZFRhc2tEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcImFkZC10YXNrLWRpdlwiKTtcblx0Y29uc3QgYWRkVGFza0ljb24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsIFwiYWRkLXRhc2staWNvblwiLCBcImFkZF9jaXJjbGVcIik7XG5cblx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcblx0cHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXHRwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChtYWluTGlzdCk7XG5cdG1haW5MaXN0LmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG5cdG1haW5MaXN0LmFwcGVuZENoaWxkKG51bWJlck9mVGFza3MpO1xuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0RGl2KTtcblx0YWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SWNvbik7XG5cdGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cblx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyKTtcblx0dGFza0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcblx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcblx0YWRkVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrSWNvbik7XG5cblx0YWRkUHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHNlbmRUb0JvZHkoZGlzcGxheU5ld1Byb2plY3RXaW5kb3coKSk7XG5cdH0pO1xuXG5cdGFkZFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0c2VuZFRvQm9keShkaXNwbGF5TmV3VGFza1dpbmRvdygpKTtcblx0fSk7XG5cblx0cmV0dXJuIHsgcHJvamVjdHNDb250YWluZXIsIHRhc2tDb250YWluZXIgfTtcbn1cblxuZnVuY3Rpb24gcmVjYWxsKCkge1xuXHRjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtZGl2XCIpO1xuXHRjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXRhc2stZGl2XCIpO1xuXHRsZXQgdG90YWxOdW1iZXJPZlRhc2tzID0gMDtcblx0Y29uc3QgYWxsUHJvamVjdENvdW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1saXN0W2RhdGEtdmFsdWU9UDBdYCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgc3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cdFx0bGV0IHN0b3JhZ2VPYmplY3QgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShzdG9yYWdlS2V5KTtcblx0XHRpZiAoc3RvcmFnZU9iamVjdFtcInR5cGVcIl0gPT0gXCJwcm9qZWN0XCIgJiYgc3RvcmFnZUtleSAhPSBcIlAwXCIpIHtcblx0XHRcdGxldCByZXN0b3JlZFByb2plY3QgPSBuZXdQcm9qZWN0KHN0b3JhZ2VPYmplY3QpO1xuXHRcdFx0cHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocmVzdG9yZWRQcm9qZWN0KTtcblx0XHR9IGVsc2UgaWYgKHN0b3JhZ2VPYmplY3RbXCJ0eXBlXCJdID09IFwidGFza1wiKSB7XG5cdFx0XHR0b3RhbE51bWJlck9mVGFza3MgKz0gMTtcblx0XHRcdGxldCByZXN0b3JlZFRhc2sgPSBuZXdUYXNrKHN0b3JhZ2VPYmplY3QpO1xuXHRcdFx0dGFza0Rpdi5hcHBlbmRDaGlsZChyZXN0b3JlZFRhc2spO1xuXHRcdH1cblx0fVxuXG5cdGFsbFByb2plY3RDb3VudC5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gdG90YWxOdW1iZXJPZlRhc2tzO1xufVxuXG5leHBvcnQgeyBob21lLCByZWNhbGwgfTtcbiIsImltcG9ydCB7IHBhZ2VTdGF0ZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgcHJvamVjdHMgPSAobmFtZSkgPT4ge1xuXHRjb25zdCB0eXBlID0gXCJwcm9qZWN0XCI7XG5cdGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXHRsZXQgdG90YWxOdW1iZXJPZlRhc2tzID0gMDtcblx0bGV0IG51bWJlck9mVGFza3MgPSAwO1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgcHJvamVjdE9iamVjdDtcblx0XHRsZXQgc3RvcmFnZUtleTtcblx0XHRpZiAobmFtZSA9PSBcIkFsbFwiKSB7XG5cdFx0XHRzdG9yYWdlS2V5ID0gXCJQMFwiO1xuXHRcdFx0cHJvamVjdE9iamVjdCA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdHt9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0a2V5OiBcIlAwXCIsXG5cdFx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0XHRwcm9qZWN0TmFtZTogbmFtZSxcblx0XHRcdFx0XHRudW1iZXJPZlRhc2tzOiAwLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdG9yYWdlS2V5ID0ga2V5R2VuZXJhdG9yKFwiUFwiKTtcblx0XHRcdHByb2plY3RPYmplY3QgPSBPYmplY3QuYXNzaWduKFxuXHRcdFx0XHR7fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGtleTogc3RvcmFnZUtleSxcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRcdHByb2plY3ROYW1lOiBuYW1lLFxuXHRcdFx0XHRcdG51bWJlck9mVGFza3M6IDAsXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0c3RvcmUoc3RvcmFnZUtleSwgcHJvamVjdE9iamVjdCk7XG5cblx0XHRyZXR1cm4gcHJvamVjdE9iamVjdDtcblx0fTtcblxuXHRjb25zdCB1cGRhdGUgPSBmdW5jdGlvbiAoa2V5LCBwcm9qZWN0TmFtZSkge1xuXHRcdGxldCBkYXRhYmFzZU9iaiA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGtleSk7XG5cdFx0bGV0IG9sZFByb2plY3ROYW1lID0gZGF0YWJhc2VPYmoucHJvamVjdE5hbWU7XG5cdFx0bGV0IG5ld1Byb2plY3QgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhYmFzZU9iaik7XG5cdFx0bmV3UHJvamVjdC5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBzdG9yYWdlS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblx0XHRcdGxldCBzdG9yYWdlT2JqZWN0ID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoc3RvcmFnZUtleSk7XG5cdFx0XHRpZiAoc3RvcmFnZU9iamVjdC50eXBlID09IFwidGFza1wiICYmIHN0b3JhZ2VPYmplY3QucHJvamVjdE5hbWUgPT0gb2xkUHJvamVjdE5hbWUpIHtcblx0XHRcdFx0bGV0IHJlbmFtZWRQcm9qZWN0Rm9yVGFzayA9IE9iamVjdC5hc3NpZ24oe30sIHN0b3JhZ2VPYmplY3QpO1xuXHRcdFx0XHRyZW5hbWVkUHJvamVjdEZvclRhc2sucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcblx0XHRcdFx0cGFnZVN0YXRlLnBvcHVsYXRlU3RvcmFnZShzdG9yYWdlS2V5LCByZW5hbWVkUHJvamVjdEZvclRhc2spO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRhdGFiYXNlT2JqICYmIHBhZ2VTdGF0ZS5wb3B1bGF0ZVN0b3JhZ2Uoa2V5LCBuZXdQcm9qZWN0KTtcblxuXHRcdHJldHVybjtcblx0fTtcblxuXHRjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdHBhZ2VTdGF0ZS5kZWxldGVTdG9yYWdlKGtleSk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlTnVtYmVyT2ZUYXNrcyA9IGZ1bmN0aW9uIChrZXksIGRlYyA9IG51bGwpIHtcblx0XHRsZXQgc3RvcmFnZU9iamVjdCA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGtleSk7XG5cdFx0aWYgKGRlYykge1xuXHRcdFx0LS1zdG9yYWdlT2JqZWN0Lm51bWJlck9mVGFza3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCsrc3RvcmFnZU9iamVjdC5udW1iZXJPZlRhc2tzO1xuXHRcdH1cblx0XHRzdG9yZShrZXksIHN0b3JhZ2VPYmplY3QpO1xuXHRcdC8vIHRvdGFsTnVtYmVyT2ZUYXNrcyArPSAxO1xuXHR9O1xuXG5cdGNvbnN0IGtleUdlbmVyYXRvciA9IGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRsZXQgaSA9IDE7XG5cdFx0bGV0IGtleVRlc3QgPSAxO1xuXHRcdGxldCBrZXk7XG5cdFx0d2hpbGUgKGtleVRlc3QpIHtcblx0XHRcdGtleSA9IGAke2xldHRlcn0ke2l9YDtcblx0XHRcdGtleVRlc3QgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShrZXkpO1xuXHRcdFx0aSArPSAxO1xuXHRcdH1cblx0XHRyZXR1cm4ga2V5O1xuXHR9O1xuXG5cdGNvbnN0IHN0b3JlID0gZnVuY3Rpb24gKGtleSwgb2JqKSB7XG5cdFx0cGFnZVN0YXRlLnBvcHVsYXRlU3RvcmFnZShrZXksIG9iaik7XG5cdH07XG5cblx0cmV0dXJuIHsgZ2V0TmFtZSwgY3JlYXRlLCB1cGRhdGUsIGRlbGV0ZVByb2plY3QsIHVwZGF0ZU51bWJlck9mVGFza3MsIHN0b3JlLCBrZXlHZW5lcmF0b3IgfTtcbn07XG5cbi8qXG4gKlxuICpcbiAqXG4gKlxuICpcbiAqXG4gKlxuICpcbiAqXG4gKlxuICpcbiAqL1xuXG5jb25zdCB0YXNrcyA9ICh0YXNrLCBwcm9qZWN0LCBwcm9qZWN0S2V5ID0gXCJQMFwiLCBub3RlcywgZGF5LCB0aW1lKSA9PiB7XG5cdGNvbnN0IHsgc3RvcmUsIGtleUdlbmVyYXRvciB9ID0gcHJvamVjdHMocHJvamVjdCk7XG5cdGNvbnN0IHR5cGUgPSBcInRhc2tcIjtcblx0bGV0IGNvbXBsZXRlID0gZmFsc2U7XG5cblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGxldCBzdG9yYWdlS2V5ID0ga2V5R2VuZXJhdG9yKFwiVFwiKTtcblx0XHRsZXQgdGFza09iamVjdCA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHR7fSxcblx0XHRcdHtcblx0XHRcdFx0a2V5OiBzdG9yYWdlS2V5LFxuXHRcdFx0XHRwcm9qZWN0S2V5OiBwcm9qZWN0S2V5LFxuXHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRwcm9qZWN0TmFtZTogcHJvamVjdCxcblx0XHRcdFx0dGFza05hbWU6IHRhc2ssXG5cdFx0XHRcdG5vdGVzOiBub3Rlcyxcblx0XHRcdFx0ZGF5OiBkYXksXG5cdFx0XHRcdHRpbWU6IHRpbWUsXG5cdFx0XHRcdGNvbXBsZXRlOiBjb21wbGV0ZSxcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0c3RvcmUoc3RvcmFnZUtleSwgdGFza09iamVjdCk7XG5cdFx0cmV0dXJuIHRhc2tPYmplY3Q7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlID0gZnVuY3Rpb24gKGtleSwgcHJvamVjdE5hbWUsIHByb2plY3RLZXksIHRhc2tOYW1lLCBub3RlcywgZGF5LCB0aW1lKSB7XG5cdFx0bGV0IGRhdGJhc2VPYmogPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShrZXkpO1xuXHRcdGxldCBuZXdUYXNrID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YmFzZU9iaik7XG5cdFx0bmV3VGFzay5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuXHRcdG5ld1Rhc2sucHJvamVjdEtleSA9IHByb2plY3RLZXk7XG5cdFx0bmV3VGFzay50YXNrTmFtZSA9IHRhc2tOYW1lO1xuXHRcdG5ld1Rhc2subm90ZXMgPSBub3Rlcztcblx0XHRuZXdUYXNrLmRheSA9IGRheTtcblx0XHRuZXdUYXNrLnRpbWUgPSB0aW1lO1xuXG5cdFx0ZGF0YmFzZU9iaiAmJiBwYWdlU3RhdGUucG9wdWxhdGVTdG9yYWdlKGtleSwgbmV3VGFzayk7XG5cblx0XHRyZXR1cm47XG5cdH07XG5cblx0Y29uc3QgZGVsZXRlVGFzayA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRwYWdlU3RhdGUuZGVsZXRlU3RvcmFnZShrZXkpO1xuXHR9O1xuXG5cdHJldHVybiB7IGNyZWF0ZSwgdXBkYXRlLCBkZWxldGVUYXNrLCBzdG9yZSB9O1xufTtcblxuZXhwb3J0IHsgcHJvamVjdHMsIHRhc2tzIH07XG4iLCJpbXBvcnQgeyBuZXdFbGVtZW50LCBzZW5kVG9Cb2R5LCBjbG9zZVdpbmRvdyB9IGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHByb2plY3RzLCB0YXNrcyB9IGZyb20gXCIuL29iamVjdEZhY3RvcnlcIjtcbmltcG9ydCB7IHBhZ2VTdGF0ZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHVwZGF0ZURPTUZvckRlbGV0aW5nVGFzayB9IGZyb20gXCIuL3Rhc2tDb3VudFRyYWNraW5nXCI7XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3Qob2JqKSB7XG5cdGNvbnN0IG5hbWUgPSBvYmoucHJvamVjdE5hbWU7XG5cdGNvbnN0IHN0b3JhZ2VLZXkgPSBvYmoua2V5O1xuXHRjb25zdCBudW1iZXJPZlRhc2tzID0gb2JqLm51bWJlck9mVGFza3M7XG5cblx0Y29uc3QgbW9kaWZpZWROYW1lRm9ySUQgPSBuYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcblx0Y29uc3QgbmV3UHJvamVjdCA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWxpc3RcIiwgYCR7bW9kaWZpZWROYW1lRm9ySUR9LWxpc3RgKTtcblx0bmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHN0b3JhZ2VLZXkpO1xuXHRjb25zdCBuZXdMaXN0VGl0bGUgPSBuZXdFbGVtZW50KFwiaDNcIiwgXCJwcm9qZWN0LXRpdGxlXCIsIC4uLkFycmF5KDEpLCBgJHtuYW1lfWApO1xuXHRjb25zdCBudW1iZXJPZlRhc2tzRWxlbWVudCA9IG5ld0VsZW1lbnQoXCJzcGFuXCIsIFwibnVtYmVyLW9mLXRhc2tzXCIsIGAke3N0b3JhZ2VLZXl9LXRhc2stY291bnRgLCBgJHtudW1iZXJPZlRhc2tzfWApO1xuXG5cdGNvbnN0IG1vcmVJbmZvSWNvbiA9IG5ld0VsZW1lbnQoXCJzcGFuXCIsIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIiwgYGluZm8taWNvbi0ke3N0b3JhZ2VLZXl9YCwgXCJpbmZvXCIpO1xuXHRtb3JlSW5mb0ljb24uY2xhc3NMaXN0LmFkZChcIm1vcmUtaW5mby1pY29uXCIpO1xuXHRuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuXHRcdG1vcmVJbmZvSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0fSk7XG5cblx0bmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdG1vcmVJbmZvSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH0pO1xuXG5cdG1vcmVJbmZvSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGRyb3BEb3duRGl2ID0gZHJvcERvd25PcHRpb24oc3RvcmFnZUtleSk7XG5cdFx0bmV3UHJvamVjdC5hcHBlbmRDaGlsZChkcm9wRG93bkRpdik7XG5cdH0pO1xuXG5cdG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3TGlzdFRpdGxlKTtcblx0bmV3UHJvamVjdC5hcHBlbmRDaGlsZChudW1iZXJPZlRhc2tzRWxlbWVudCk7XG5cdG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobW9yZUluZm9JY29uKTtcblxuXHRyZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZHJvcERvd25PcHRpb24oc3RvcmFnZUtleSkge1xuXHRjb25zdCBkcm9wRG93bkRpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkcm9wLWRvd24tY29udGVudFwiLCBcImRyb3AtZG93blwiKTtcblx0Y29uc3QgdXBkYXRlQnV0dG9uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJkcm9wLWRvd24tb3B0aW9uXCIsIGB0YXNrJHtzdG9yYWdlS2V5fS11cGRhdGUtYnV0dG9uYCwgXCJSZW5hbWVcIik7XG5cdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiZHJvcC1kb3duLW9wdGlvblwiLCBgdGFzayR7c3RvcmFnZUtleX0tZGVsZXRlLWJ1dHRvbmAsIFwiRGVsZXRlXCIpO1xuXHR1cGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzdG9yYWdlS2V5KTtcblx0ZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cblx0bGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWxpc3RbZGF0YS12YWx1ZT0ke3N0b3JhZ2VLZXl9XWApO1xuXHRsZXQgbW9yZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgI2luZm8taWNvbi0ke3N0b3JhZ2VLZXl9YCk7XG5cblx0LyogVGhpcyBiZWhhdmlvciBpcyB1bmV4cGVjdGVkLiBsb29waW5nIHRocm91Z2ggYWxsIHN0b3JhZ2VrZXlzIGluc3RlYWQgb2YganVzdCB0aGUgb25lIHN0b3JhZ2VcbiAgICAgICAga2V5IGFzc29jaWF0ZWQgd2l0aCB0aGUgY2xpY2tlZCBlbGVtZW50LiBlcnJvciBvY2N1cnMgaW4gdGhlIGNvbnNvbGUgYXQgZXZlcnkgZXhlY3V0aW9uICovXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3AtZG93blwiKSAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWRvd25cIikuY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9IG1vcmUpIHtcblx0XHRcdG5ld1Byb2plY3QucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWRvd25cIikpO1xuXHRcdH1cblx0fSk7XG5cblx0dXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0c2VuZFRvQm9keShkaXNwbGF5TmV3UHJvamVjdFdpbmRvdyhzdG9yYWdlS2V5KSk7XG5cdFx0bmV3UHJvamVjdC5yZW1vdmVDaGlsZChkcm9wRG93bkRpdik7XG5cdH0pO1xuXG5cdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IG1haW5Qcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtZGl2XCIpO1xuXHRcdGNvbnN0IGRlbGV0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fWApO1xuXHRcdHJlbW92ZUFsbFRhc2tzKHN0b3JhZ2VLZXkpO1xuXHRcdHByb2plY3RzKCkuZGVsZXRlUHJvamVjdChzdG9yYWdlS2V5KTtcblx0XHRtYWluUHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoZGVsZXRlZFByb2plY3QpO1xuXHR9KTtcblxuXHRkcm9wRG93bkRpdi5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXHRkcm9wRG93bkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG5cdHJldHVybiBkcm9wRG93bkRpdjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsVGFza3Moc3RvcmFnZUtleSkge1xuXHRjb25zdCBtYWluVGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10YXNrLWRpdlwiKTtcblxuXHRsZXQgcHJvamVjdE5hbWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShzdG9yYWdlS2V5KVtcInByb2plY3ROYW1lXCJdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB0YXNrS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblx0XHRsZXQgdGFza09iamVjdCA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKHRhc2tLZXkpO1xuXHRcdGlmICh0YXNrT2JqZWN0W1widHlwZVwiXSA9PSBcInRhc2tcIiAmJiB0YXNrT2JqZWN0W1wicHJvamVjdE5hbWVcIl0gPT0gcHJvamVjdE5hbWUpIHtcblx0XHRcdGxldCBkZWxldGVkVGFzayA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnRhc2stbGlzdFtkYXRhLXZhbHVlPSR7dGFza0tleX1gKTtcblx0XHRcdG1haW5UYXNrRGl2LnJlbW92ZUNoaWxkKGRlbGV0ZWRUYXNrKTtcblx0XHRcdHVwZGF0ZURPTUZvckRlbGV0aW5nVGFzayh0YXNrT2JqZWN0LnByb2plY3RLZXkpXG5cdFx0XHR0YXNrcygpLmRlbGV0ZVRhc2sodGFza0tleSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0V2luZG93KHN0b3JhZ2VLZXkgPSBudWxsKSB7XG5cdGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcIm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xuXHRjb25zdCBuZXdQcm9qZWN0RGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJuZXctcHJvamVjdC1mb3JtLWRpdlwiKTtcblx0Y29uc3QgdGl0bGUgPSBuZXdFbGVtZW50KFwiaDJcIiwgXCJwb3AtdXAtd2luZG93LXRpdGxlXCIsIC4uLkFycmF5KDEpLCBcIk5ldyBQcm9qZWN0XCIpO1xuXHRjb25zdCBlcnJvciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwicHJvamVjdC1uYW1lLWVycm9yXCIpO1xuXHRjb25zdCBwcm9qZWN0Rm9ybSA9IG5ld0VsZW1lbnQoXCJmb3JtXCIsIC4uLkFycmF5KDEpLCBcInByb2plY3QtZm9ybVwiKTtcblx0Y29uc3QgcHJvamVjdE5hbWVJbnB1dExhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiTmFtZTpcIik7XG5cdGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgXCJmb3JtLWlucHV0XCIsIFwicHJvamVjdC1uYW1lLWlucHV0XCIpO1xuXHRwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0cHJvamVjdE5hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbmFtZS1pbnB1dFwiKTtcblx0Y29uc3QgYnV0dG9uU2VsZWN0b3JEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcImJ1dHRvbi1zZWxlY3Rvci1kaXZcIik7XG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJidXR0b25cIiwgXCJwcm9qZWN0LWNhbmNlbC1idXR0b25cIiwgXCJDYW5jZWxcIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImJ1dHRvblwiLCBcInByb2plY3Qtc3VibWl0LWJ1dHRvblwiKTtcblx0c3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuXHRzdWJtaXRCdXR0b24udmFsdWUgPSBcIk9LXCI7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG5cblx0aWYgKHN0b3JhZ2VLZXkpIHtcblx0XHRwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcInByb2plY3ROYW1lXCJdO1xuXHR9XG5cblx0bmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcblx0bmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQoZXJyb3IpO1xuXHRuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblx0cHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dExhYmVsKTtcblx0cHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cdHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGJ1dHRvblNlbGVjdG9yRGl2KTtcblx0cHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblx0cHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuXHRwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG5cdFx0Y29uc3QgZXJyb3JGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWVycm9yXCIpO1xuXHRcdGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIik7XG5cdFx0XG5cdFx0bGV0IG1lc3NhZ2VzID0gW107XG5cdFx0bGV0IHByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuXHRcdGlmIChwcm9qZWN0TmFtZVZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gXCJhbGxcIikge1xuXHRcdFx0bWVzc2FnZXMucHVzaChcIkNhbm5vdCB1c2UgJ0FsbCcgYXMgYSBwcm9qZWN0IG5hbWVcIik7XG5cdFx0fVxuXHRcdGlmIChwcm9qZWN0TmFtZVZhbHVlID09PSBcIlwiIHx8IHByb2plY3ROYW1lVmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0bWVzc2FnZXMucHVzaChcIk5hbWUgaXMgcmVxdWlyZWRcIik7XG5cdFx0fVxuXHRcdGlmIChtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlcnJvckZpZWxkLnRleHRDb250ZW50ID0gbWVzc2FnZXMuam9pbihcIiwgXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgaW5zdGFudGlhdGVQcm9qZWN0T2JqZWN0ID0gcHJvamVjdHMocHJvamVjdE5hbWVWYWx1ZSk7XG5cdFx0XHRpZiAoc3RvcmFnZUtleSkge1xuXHRcdFx0XHRjb25zdCB1cGRhdGVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fV1gKTtcblx0XHRcdFx0dXBkYXRlUHJvamVjdERpdi5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVWYWx1ZTtcblx0XHRcdFx0aW5zdGFudGlhdGVQcm9qZWN0T2JqZWN0LnVwZGF0ZShzdG9yYWdlS2V5LCBwcm9qZWN0TmFtZVZhbHVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBuZXdQcm9qZWN0T2JqZWN0ID0gaW5zdGFudGlhdGVQcm9qZWN0T2JqZWN0LmNyZWF0ZSgpO1xuXHRcdFx0XHRsZXQgbmV3RWxlbWVudCA9IG5ld1Byb2plY3QobmV3UHJvamVjdE9iamVjdCk7XG5cdFx0XHRcdHByb2plY3RzRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjbG9zZVdpbmRvdyhuZXdQcm9qZWN0Q29udGFpbmVyKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNsb3NlV2luZG93KG5ld1Byb2plY3RDb250YWluZXIpO1xuXHR9KTtcblxuXHRyZXR1cm4gbmV3UHJvamVjdENvbnRhaW5lcjtcbn1cbmV4cG9ydCB7IG5ld1Byb2plY3QsIGRpc3BsYXlOZXdQcm9qZWN0V2luZG93IH07XG4iLCJjb25zdCBwYWdlU3RhdGUgPSAoKCkgPT4ge1xuXHRjb25zdCBwb3B1bGF0ZVN0b3JhZ2UgPSAob2JqZWN0S2V5LCBvYmplY3RWYWx1ZXMpID0+IHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvYmplY3RLZXksIEpTT04uc3RyaW5naWZ5KG9iamVjdFZhbHVlcykpO1xuXHR9O1xuXG5cdGNvbnN0IGdldFN0b3JhZ2UgPSAob2JqZWN0S2V5KSA9PiB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ob2JqZWN0S2V5KSk7XG5cdH07XG5cblx0Y29uc3QgZGVsZXRlU3RvcmFnZSA9IChvYmplY3RLZXkpID0+IHtcblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ob2JqZWN0S2V5KTtcblx0fTtcblxuXHRyZXR1cm4geyBwb3B1bGF0ZVN0b3JhZ2UsIGdldFN0b3JhZ2UsIGRlbGV0ZVN0b3JhZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHBhZ2VTdGF0ZSB9O1xuIiwiZnVuY3Rpb24gdXBkYXRlRE9NRm9yTmV3VGFzayhrZXkpIHtcblx0bGV0IGFsbFRhc2tDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFAwLXRhc2stY291bnRgKTtcblx0bGV0IHByb2plY3RUYXNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2tleX0tdGFzay1jb3VudGApO1xuXHQrK3Byb2plY3RUYXNrQ291bnRlci50ZXh0Q29udGVudDtcblx0aWYgKGtleSAhPSBcIlAwXCIpIHtcblx0XHQrK2FsbFRhc2tDb3VudGVyLnRleHRDb250ZW50O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTUZvckV4aXN0aW5nVGFzayhrZXksIG9sZEtleSkge1xuXHRsZXQgcHJvamVjdFRhc2tDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7a2V5fS10YXNrLWNvdW50YCk7XG5cdGxldCBvbGRQcm9qZWN0VGFza0NvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvbGRLZXl9LXRhc2stY291bnRgKTtcblx0aWYgKGtleSAhPSBcIlAwXCIpIHtcblx0XHQrK3Byb2plY3RUYXNrQ291bnRlci50ZXh0Q29udGVudDtcblx0fVxuXHRpZiAob2xkS2V5ICE9IFwiUDBcIikge1xuXHRcdC0tb2xkUHJvamVjdFRhc2tDb3VudGVyLnRleHRDb250ZW50O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTUZvckRlbGV0aW5nVGFzayhrZXkpIHtcblx0bGV0IGFsbFRhc2tDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFAwLXRhc2stY291bnRgKTtcblx0bGV0IHByb2plY3RUYXNrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2tleX0tdGFzay1jb3VudGApO1xuXHQtLXByb2plY3RUYXNrQ291bnRlci50ZXh0Q29udGVudDtcblx0aWYgKGtleSAhPSBcIlAwXCIpIHtcblx0XHQtLWFsbFRhc2tDb3VudGVyLnRleHRDb250ZW50O1xuXHR9XG59XG5cblxuZXhwb3J0IHsgdXBkYXRlRE9NRm9yRXhpc3RpbmdUYXNrLCB1cGRhdGVET01Gb3JOZXdUYXNrLCB1cGRhdGVET01Gb3JEZWxldGluZ1Rhc2sgfTtcbiIsImltcG9ydCB7IG5ld0VsZW1lbnQsIHNlbmRUb0JvZHksIGNsb3NlV2luZG93IH0gZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgcHJvamVjdHMsIHRhc2tzIH0gZnJvbSBcIi4vb2JqZWN0RmFjdG9yeVwiO1xuaW1wb3J0IHsgcGFnZVN0YXRlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgdXBkYXRlRE9NRm9yRXhpc3RpbmdUYXNrLCB1cGRhdGVET01Gb3JOZXdUYXNrLCB1cGRhdGVET01Gb3JEZWxldGluZ1Rhc2t9IGZyb20gXCIuL3Rhc2tDb3VudFRyYWNraW5nXCI7XG5cbmZ1bmN0aW9uIG5ld1Rhc2sob2JqKSB7XG5cdGxldCBzdG9yYWdlS2V5ID0gb2JqLmtleTtcblx0bGV0IHByb2plY3QgPSBvYmoucHJvamVjdE5hbWU7XG5cdGxldCB0YXNrID0gb2JqLnRhc2tOYW1lO1xuXHRsZXQgbm90ZXMgPSBvYmoubm90ZXM7XG5cdGxldCBkYXkgPSBvYmouZGF5O1xuXHRsZXQgdGltZSA9IG9iai50aW1lO1xuXHRsZXQgY29tcGxldGUgPSBvYmouY29tcGxldGU7XG5cblx0Y29uc3QgbmV3VGFzayA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWxpc3RcIik7XG5cdG5ld1Rhc2suc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzdG9yYWdlS2V5KTtcblx0Y29uc3QgbmV3VGFza0NoZWNrTWFyayA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcInRhc2stY2hlY2ttYXJrXCIpO1xuXHRuZXdUYXNrQ2hlY2tNYXJrLnR5cGUgPSBcInJhZGlvXCI7XG5cdGlmIChjb21wbGV0ZSkge1xuXHRcdG5ld1Rhc2tDaGVja01hcmsuY2hlY2tlZCA9IHRydWU7XG5cdH1cblx0Y29uc3QgbmV3VGFza0RldGFpbHMgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwidGFzay1pbmZvLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgbmV3VGFza1RpdGxlID0gbmV3RWxlbWVudChcImgzXCIsIFwidGFzay10aXRsZVwiLCAuLi5BcnJheSgxKSwgdGFzayk7XG5cdGNvbnN0IG5ld1Rhc2tOb3Rlc0RpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLW5vdGVzLWRpdlwiKTtcblx0Y29uc3QgbmV3VGFza05vdGVzID0gbmV3RWxlbWVudChcInBcIiwgXCJ0YXNrLW5vdGVzXCIsIC4uLkFycmF5KDEpLCBub3Rlcyk7XG5cdGNvbnN0IG5ld0RhdGVUaW1lRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInRhc2stZGF0ZS10aW1lLWRpdlwiKTtcblx0Y29uc3QgbmV3VGFza0RheSA9IG5ld0VsZW1lbnQoXCJwXCIsIFwidGFzay1kYXRlXCIsIC4uLkFycmF5KDEpLCBkYXkpO1xuXHRjb25zdCBuZXdUYXNrdGltZSA9IG5ld0VsZW1lbnQoXCJwXCIsIFwidGFzay10aW1lXCIsIC4uLkFycmF5KDEpLCB0aW1lKTtcblxuXHRuZXdUYXNrQ2hlY2tNYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29tcGxldGUgPSAhY29tcGxldGU7XG5cdFx0b2JqLmNvbXBsZXRlID0gY29tcGxldGU7XG5cdFx0dGFza3MoKS5zdG9yZShzdG9yYWdlS2V5LCBvYmopO1xuXG5cdFx0aWYgKGNvbXBsZXRlKSB7XG5cdFx0XHRuZXdUYXNrQ2hlY2tNYXJrLmNoZWNrZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5ld1Rhc2tDaGVja01hcmsuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3QgbW9yZUluZm9JY29uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLCBgaW5mby1pY29uLSR7c3RvcmFnZUtleX1gLCBcImluZm9cIik7XG5cdG1vcmVJbmZvSWNvbi5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLWljb25cIik7XG5cdG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0bW9yZUluZm9JY29uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHR9KTtcblxuXHRuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0bW9yZUluZm9JY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fSk7XG5cblx0bW9yZUluZm9JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZHJvcERvd25EaXYgPSBkcm9wRG93bk9wdGlvbihzdG9yYWdlS2V5KTtcblx0XHRuZXdUYXNrLmFwcGVuZENoaWxkKGRyb3BEb3duRGl2KTtcblx0fSk7XG5cblx0bmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrQ2hlY2tNYXJrKTtcblx0bmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRGV0YWlscyk7XG5cdG5ld1Rhc2tEZXRhaWxzLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG5cdG5ld1Rhc2tEZXRhaWxzLmFwcGVuZENoaWxkKG5ld1Rhc2tOb3Rlc0Rpdik7XG5cdG5ld1Rhc2tOb3Rlc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrTm90ZXMpO1xuXHRuZXdUYXNrRGV0YWlscy5hcHBlbmRDaGlsZChuZXdEYXRlVGltZURpdik7XG5cdG5ld0RhdGVUaW1lRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEYXkpO1xuXHRuZXdEYXRlVGltZURpdi5hcHBlbmRDaGlsZChuZXdUYXNrdGltZSk7XG5cdG5ld1Rhc2suYXBwZW5kQ2hpbGQobW9yZUluZm9JY29uKTtcblxuXHRyZXR1cm4gbmV3VGFzaztcbn1cblxuZnVuY3Rpb24gZHJvcERvd25PcHRpb24oc3RvcmFnZUtleSkge1xuXHRjb25zdCBkcm9wRG93bkRpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkcm9wLWRvd24tY29udGVudFwiLCBcImRyb3AtZG93blwiKTtcblx0Y29uc3QgdXBkYXRlQnV0dG9uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJkcm9wLWRvd24tb3B0aW9uXCIsIGB0YXNrJHtzdG9yYWdlS2V5fS11cGRhdGUtYnV0dG9uYCwgXCJFZGl0XCIpO1xuXHRjb25zdCBkZWxldGVCdXR0b24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcImRyb3AtZG93bi1vcHRpb25cIiwgYHRhc2ske3N0b3JhZ2VLZXl9LWRlbGV0ZS1idXR0b25gLCBcIkRlbGV0ZVwiKTtcblx0dXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cdGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHN0b3JhZ2VLZXkpO1xuXG5cdGxldCBuZXdUYXNrID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAudGFzay1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fV1gKTtcblx0bGV0IG1vcmUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLWljb24tJHtzdG9yYWdlS2V5fWApO1xuXG5cdC8qIFRoaXMgYmVoYXZpb3IgaXMgdW5leHBlY3RlZC4gbG9vcGluZyB0aHJvdWdoIGFsbCBzdG9yYWdla2V5cyBpbnN0ZWFkIG9mIGp1c3QgdGhlIG9uZSBzdG9yYWdlXG4gICAgICAgIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIGNsaWNrZWQgZWxlbWVudC4gZXJyb3Igb2NjdXJzIGluIHRoZSBjb25zb2xlIGF0IGV2ZXJ5IGV4ZWN1dGlvbiAqL1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWRvd25cIikgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPSBtb3JlKSB7XG5cdFx0XHRuZXdUYXNrLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHNlbmRUb0JvZHkoZGlzcGxheU5ld1Rhc2tXaW5kb3coc3RvcmFnZUtleSkpO1xuXHRcdG5ld1Rhc2sucmVtb3ZlQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtYWluVGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10YXNrLWRpdlwiKTtcblx0XHRjb25zdCBkZWxldGVkVGFzayA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnRhc2stbGlzdFtkYXRhLXZhbHVlPSR7c3RvcmFnZUtleX1gKTtcblx0XHRsZXQgcHJvamVjdEtleSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKHN0b3JhZ2VLZXkpLnByb2plY3RLZXk7XG5cdFx0dXBkYXRlRE9NRm9yRGVsZXRpbmdUYXNrKHByb2plY3RLZXkpXG5cdFx0dGFza3MoKS5kZWxldGVUYXNrKHN0b3JhZ2VLZXkpO1xuXHRcdG1haW5UYXNrRGl2LnJlbW92ZUNoaWxkKGRlbGV0ZWRUYXNrKTtcblx0fSk7XG5cblx0ZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblx0ZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuXHRyZXR1cm4gZHJvcERvd25EaXY7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdUYXNrV2luZG93KHN0b3JhZ2VLZXkgPSBudWxsKSB7XG5cdGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcIm5ldy10YXNrLWZvcm0tY29udGFpbmVyXCIpO1xuXHRjb25zdCBuZXdUYXNrRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJuZXctdGFzay1mb3JtLWRpdlwiKTtcblx0Y29uc3QgdGl0bGUgPSBuZXdFbGVtZW50KFwiaDJcIiwgXCJwb3AtdXAtd2luZG93LXRpdGxlXCIsIC4uLkFycmF5KDEpLCBcIk5ldyBUYXNrXCIpO1xuXG5cdGNvbnN0IGZvcm0gPSBuZXdFbGVtZW50KFwiZm9ybVwiLCAuLi5BcnJheSgxKSwgXCJ0YXNrLWZvcm1cIik7XG5cblx0Y29uc3QgdGFza05hbWVJbnB1dCA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImZvcm0taW5wdXRcIiwgXCJ0YXNrLW5hbWUtaW5wdXRcIik7XG5cdHRhc2tOYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHRjb25zdCB0YXNrTmFtZUlucHV0TGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJUYXNrOlwiKTtcblx0dGFza05hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbmFtZS1pbnB1dFwiKTtcblxuXHRjb25zdCB0YXNrTm90ZXNJbnB1dCA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImZvcm0taW5wdXRcIiwgXCJ0YXNrLW5vdGVzLWlucHV0XCIpO1xuXHR0YXNrTm90ZXNJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdGNvbnN0IHRhc2tOb3Rlc0lucHV0TGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJOb3RlczpcIik7XG5cdHRhc2tOb3Rlc0lucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1ub3Rlcy1pbnB1dFwiKTtcblxuXHRjb25zdCBwcm9qZWN0TmFtZVNlbGVjdCA9IG5ld0VsZW1lbnQoXCJzZWxlY3RcIiwgXCJmb3JtLXNlbGVjdGlvblwiLCBcInByb2plY3QtbmFtZS1zZWxlY3Rpb25cIik7XG5cdGZvciAobGV0IGkgPSAwOyBsb2NhbFN0b3JhZ2Uua2V5KGkpOyBpKyspIHtcblx0XHRsZXQgc3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cdFx0bGV0IHN0b3JhZ2VPYmplY3QgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShzdG9yYWdlS2V5KTtcblx0XHRpZiAoc3RvcmFnZU9iamVjdFtcInR5cGVcIl0gPT0gXCJwcm9qZWN0XCIpIHtcblx0XHRcdGNvbnN0IHByb2plY3ROYW1lU2VsZWN0T3B0aW9uID0gbmV3RWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdHByb2plY3ROYW1lU2VsZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHN0b3JhZ2VPYmplY3QucHJvamVjdE5hbWUpO1xuXHRcdFx0cHJvamVjdE5hbWVTZWxlY3RPcHRpb24uc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBzdG9yYWdlT2JqZWN0LmtleSk7XG5cdFx0XHRwcm9qZWN0TmFtZVNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHN0b3JhZ2VPYmplY3QucHJvamVjdE5hbWU7XG5cdFx0XHRwcm9qZWN0TmFtZVNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVNlbGVjdE9wdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgcHJvamVjdE5hbWVTZWxlY3RMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIlNlbGVjdCBhIHByb2plY3RcIik7XG5cdHByb2plY3ROYW1lU2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC1uYW1lLXNlbGVjdGlvblwiKTtcblxuXHRjb25zdCBkYXRlRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcImRhdGUtdGltZVwiLCBcImRhdGVcIik7XG5cblx0Y29uc3QgZGF0ZVJhZGlvWWVzID0gbmV3RWxlbWVudChcImlucHV0XCIsIC4uLkFycmF5KDEpLCBcImluY2x1ZGUtZGF0ZVwiKTtcblx0ZGF0ZVJhZGlvWWVzLnR5cGUgPSBcIlJhZGlvXCI7XG5cdGNvbnN0IGRhdGVSYWRpb1llc0xhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiWWVzXCIpO1xuXHRkYXRlUmFkaW9ZZXNMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbmNsdWRlLWRhdGVcIik7XG5cblx0Y29uc3QgZGF0ZVJhZGlvTm8gPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgLi4uQXJyYXkoMSksIFwiZG9udC1pbmNsdWRlLWRhdGVcIik7XG5cdGRhdGVSYWRpb05vLnR5cGUgPSBcIlJhZGlvXCI7XG5cdGRhdGVSYWRpb05vLmNoZWNrZWQgPSB0cnVlO1xuXHRjb25zdCBkYXRlUmFkaW9Ob0xhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiTm9cIik7XG5cdGRhdGVSYWRpb05vTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZG9udC1pbmNsdWRlLWRhdGVcIik7XG5cblx0Y29uc3QgZGF0ZUlucHV0ID0gbmV3RWxlbWVudChcImlucHV0XCIsIFwiZm9ybS1pbnB1dFwiLCBcInRhc2stZGF0ZS1pbnB1dFwiKTtcblx0ZGF0ZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0ZGF0ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblx0Y29uc3QgZGF0ZUlucHV0TGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJEYXRlOlwiKTtcblx0ZGF0ZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kYXRlLWlucHV0XCIpO1xuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblx0Y29uc3QgdGltZURpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkYXRlLXRpbWVcIiwgXCJ0aW1lXCIpO1xuXG5cdGNvbnN0IHRpbWVSYWRpb1llcyA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCAuLi5BcnJheSgxKSwgXCJpbmNsdWRlLXRpbWVcIik7XG5cdHRpbWVSYWRpb1llcy50eXBlID0gXCJSYWRpb1wiO1xuXHRjb25zdCB0aW1lUmFkaW9ZZXNMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIlllc1wiKTtcblx0dGltZVJhZGlvWWVzTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5jbHVkZS10aW1lXCIpO1xuXG5cdGNvbnN0IHRpbWVSYWRpb05vID0gbmV3RWxlbWVudChcImlucHV0XCIsIC4uLkFycmF5KDEpLCBcImRvbnQtaW5jbHVkZS10aW1lXCIpO1xuXHR0aW1lUmFkaW9Oby50eXBlID0gXCJSYWRpb1wiO1xuXHR0aW1lUmFkaW9Oby5jaGVja2VkID0gdHJ1ZTtcblx0Y29uc3QgdGltZVJhZGlvTm9MYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIk5vXCIpO1xuXHR0aW1lUmFkaW9Ob0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRvbnQtaW5jbHVkZS10aW1lXCIpO1xuXG5cdGNvbnN0IHRpbWVJbnB1dCA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImZvcm0taW5wdXRcIiwgXCJ0YXNrLXRpbWUtaW5wdXRcIik7XG5cdHRpbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdHRpbWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cdGNvbnN0IHRpbWVJbnB1dExhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiVGltZTpcIik7XG5cdHRpbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stdGltZS1pbnB1dFwiKTtcblxuXHRjb25zdCBidXR0b25TZWxlY3RvckRpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwiYnV0dG9uLXNlbGVjdG9yLWRpdlwiKTtcblx0Y29uc3QgY2FuY2VsQnV0dG9uID0gbmV3RWxlbWVudChcImJ1dHRvblwiLCBcImJ1dHRvblwiLCBcInRhc2stY2FuY2VsLWJ1dHRvblwiLCBcIkNhbmNlbFwiKTtcblx0Y29uc3Qgc3VibWl0QnV0dG9uID0gbmV3RWxlbWVudChcImlucHV0XCIsIFwiYnV0dG9uXCIsIFwidGFzay1zdWJtaXQtYnV0dG9uXCIpO1xuXHRzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG5cdHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiT0tcIjtcblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stZm9ybVwiKTtcblxuXHRpZiAoc3RvcmFnZUtleSkge1xuXHRcdHRhc2tOYW1lSW5wdXQudmFsdWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShgJHtzdG9yYWdlS2V5fWApW1widGFza05hbWVcIl07XG5cdFx0dGFza05vdGVzSW5wdXQudmFsdWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShgJHtzdG9yYWdlS2V5fWApW1wibm90ZXNcIl07XG5cdFx0cHJvamVjdE5hbWVTZWxlY3QudmFsdWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShgJHtzdG9yYWdlS2V5fWApW1wicHJvamVjdE5hbWVcIl07XG5cblx0XHRpZiAocGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcImRheVwiXSkge1xuXHRcdFx0ZGF0ZVJhZGlvWWVzLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0ZGF0ZVJhZGlvTm8uY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0ZGF0ZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRkYXRlSW5wdXQudmFsdWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShgJHtzdG9yYWdlS2V5fWApW1wiZGF5XCJdO1xuXHRcdH1cblx0XHRpZiAocGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcInRpbWVcIl0pIHtcblx0XHRcdHRpbWVSYWRpb1llcy5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdHRpbWVSYWRpb05vLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdHRpbWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0dGltZUlucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcInRpbWVcIl07XG5cdFx0fVxuXHR9XG5cblx0bmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcblx0bmV3VGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dExhYmVsKTtcblx0Zm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcblx0Zm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVNlbGVjdExhYmVsKTtcblx0Zm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVNlbGVjdCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQodGFza05vdGVzSW5wdXRMYWJlbCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQodGFza05vdGVzSW5wdXQpO1xuXHRmb3JtLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXHRkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dExhYmVsKTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXHRkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVSYWRpb1llc0xhYmVsKTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlUmFkaW9ZZXMpO1xuXHRkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVSYWRpb05vTGFiZWwpO1xuXHRkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVSYWRpb05vKTtcblx0Zm9ybS5hcHBlbmRDaGlsZCh0aW1lRGl2KTtcblx0dGltZURpdi5hcHBlbmRDaGlsZCh0aW1lSW5wdXRMYWJlbCk7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcblx0dGltZURpdi5hcHBlbmRDaGlsZCh0aW1lUmFkaW9ZZXNMYWJlbCk7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZVJhZGlvWWVzKTtcblx0dGltZURpdi5hcHBlbmRDaGlsZCh0aW1lUmFkaW9Ob0xhYmVsKTtcblx0dGltZURpdi5hcHBlbmRDaGlsZCh0aW1lUmFkaW9Obyk7XG5cdG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uU2VsZWN0b3JEaXYpO1xuXHRidXR0b25TZWxlY3RvckRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXHRidXR0b25TZWxlY3RvckRpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG5cdGRhdGVSYWRpb1llcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChkYXRlUmFkaW9ZZXMuY2hlY2tlZCkge1xuXHRcdFx0ZGF0ZVJhZGlvTm8uY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0ZGF0ZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblxuXHRkYXRlUmFkaW9Oby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChkYXRlUmFkaW9Oby5jaGVja2VkKSB7XG5cdFx0XHRkYXRlUmFkaW9ZZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0ZGF0ZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdH0pO1xuXG5cdHRpbWVSYWRpb1llcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmICh0aW1lUmFkaW9ZZXMuY2hlY2tlZCkge1xuXHRcdFx0dGltZVJhZGlvTm8uY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0dGltZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblxuXHR0aW1lUmFkaW9Oby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmICh0aW1lUmFkaW9Oby5jaGVja2VkKSB7XG5cdFx0XHR0aW1lUmFkaW9ZZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0dGltZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdH0pO1xuXG5cdGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNsb3NlV2luZG93KG5ld1Rhc2tDb250YWluZXIpO1xuXHR9KTtcblxuXHRzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXRhc2stZGl2XCIpO1xuXHRcdGxldCB0YXNrTmFtZVZhbHVlID0gdGFza05hbWVJbnB1dC52YWx1ZTtcblx0XHRsZXQgdGFza1Byb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0TmFtZVNlbGVjdC52YWx1ZTtcblxuXHRcdGxldCBvcHRpb24gPSBwcm9qZWN0TmFtZVNlbGVjdC5vcHRpb25zW3Byb2plY3ROYW1lU2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuXHRcdGxldCB0YXNrUHJvamVjdEtleSA9IG9wdGlvbi5hdHRyaWJ1dGVzLmRhdGEudmFsdWU7XG5cblx0XHRsZXQgdGFza05vdGVzVmFsdWUgPSB0YXNrTm90ZXNJbnB1dC52YWx1ZTtcblx0XHRsZXQgdGFza0RhdGVWYWx1ZSA9IFwiXCI7XG5cdFx0bGV0IHRhc2tUaW1lVmFsdWUgPSBcIlwiO1xuXHRcdGlmIChkYXRlSW5wdXQpIHtcblx0XHRcdHRhc2tEYXRlVmFsdWUgPSBkYXRlSW5wdXQudmFsdWU7XG5cdFx0fVxuXHRcdGlmICh0aW1lSW5wdXQpIHtcblx0XHRcdHRhc2tUaW1lVmFsdWUgPSB0aW1lSW5wdXQudmFsdWU7XG5cdFx0fVxuXHRcdGxldCBpbnN0YW50aWF0ZVRhc2tPYmplY3QgPSB0YXNrcyh0YXNrTmFtZVZhbHVlLCB0YXNrUHJvamVjdE5hbWVWYWx1ZSwgdGFza1Byb2plY3RLZXksIHRhc2tOb3Rlc1ZhbHVlLCB0YXNrRGF0ZVZhbHVlLCB0YXNrVGltZVZhbHVlKTtcblx0XHRpZiAoc3RvcmFnZUtleSkge1xuXHRcdFx0Y29uc3QgdXBkYXRlVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWxpc3RbZGF0YS12YWx1ZT0ke3N0b3JhZ2VLZXl9XWApLmNoaWxkTm9kZXNbMV07XG5cdFx0XHR1cGRhdGVUYXNrRGl2LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB0YXNrTmFtZVZhbHVlO1xuXHRcdFx0dXBkYXRlVGFza0Rpdi5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB0YXNrTm90ZXNWYWx1ZTtcblx0XHRcdHVwZGF0ZVRhc2tEaXYuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdGFza0RhdGVWYWx1ZTtcblx0XHRcdHVwZGF0ZVRhc2tEaXYuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gdGFza1RpbWVWYWx1ZTtcblx0XHRcdGxldCBvbGRLZXkgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShzdG9yYWdlS2V5KS5wcm9qZWN0S2V5O1xuXHRcdFx0bGV0IG5ld0tleSA9IHRhc2tQcm9qZWN0S2V5O1xuXHRcdFx0dXBkYXRlRE9NRm9yRXhpc3RpbmdUYXNrKG5ld0tleSwgb2xkS2V5KTtcblx0XHRcdHByb2plY3RzKCkudXBkYXRlTnVtYmVyT2ZUYXNrcyhuZXdLZXkpO1xuXHRcdFx0cHJvamVjdHMoKS51cGRhdGVOdW1iZXJPZlRhc2tzKG9sZEtleSwgXCJkZWNyZW1lbnRcIik7XG5cdFx0XHRpbnN0YW50aWF0ZVRhc2tPYmplY3QudXBkYXRlKHN0b3JhZ2VLZXksIHRhc2tQcm9qZWN0TmFtZVZhbHVlLCB0YXNrUHJvamVjdEtleSwgdGFza05hbWVWYWx1ZSwgdGFza05vdGVzVmFsdWUsIHRhc2tEYXRlVmFsdWUsIHRhc2tUaW1lVmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbmV3VGFza09iamVjdCA9IGluc3RhbnRpYXRlVGFza09iamVjdC5jcmVhdGUoKTtcblx0XHRcdGxldCBuZXdFbGVtZW50ID0gbmV3VGFzayhuZXdUYXNrT2JqZWN0KTtcblx0XHRcdHByb2plY3RzKCkudXBkYXRlTnVtYmVyT2ZUYXNrcyhuZXdUYXNrT2JqZWN0LnByb2plY3RLZXkpO1xuXHRcdFx0dXBkYXRlRE9NRm9yTmV3VGFzayhuZXdUYXNrT2JqZWN0LnByb2plY3RLZXkpO1xuXHRcdFx0dGFza0Rpdi5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcblx0XHR9XG5cblx0XHRjbG9zZVdpbmRvdyhuZXdUYXNrQ29udGFpbmVyKTtcblx0fSk7XG5cblx0cmV0dXJuIG5ld1Rhc2tDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IG5ld1Rhc2ssIGRyb3BEb3duT3B0aW9uLCBkaXNwbGF5TmV3VGFza1dpbmRvdyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vbWFpbi5jc3NcIjtcbmltcG9ydCB7IGhvbWUsIHJlY2FsbCB9IGZyb20gXCIuL21vZHVsZXMvZWxlbWVudEJ1aWxkZXJcIjtcbmltcG9ydCAqIGFzIHBhZ2VSZW5kZXIgZnJvbSBcIi4vbW9kdWxlcy9ET01Db250cm9sbGVyXCI7XG5cbmNvbnN0IG1haW4gPSBwYWdlUmVuZGVyLm5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIiwgXCJjb250ZW50XCIpO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJoZXlcIilcbi8vIH0pO1xuXG5wYWdlUmVuZGVyLm1vZHVsZVJlbmRlcihob21lKCksIG1haW4pO1xucGFnZVJlbmRlci5zZW5kVG9Cb2R5KG1haW4pO1xucmVjYWxsKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=