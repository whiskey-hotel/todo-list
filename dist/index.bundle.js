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
	// pageState.populateProjectStorage("P0", "All", 0, "project");
	const listTitle = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h3", "project-title", ...Array(1), "All");
	const numberOfTasks = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "number-of-tasks", ...Array(1), mainListObj.numberOfTasks);

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
	(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_4__.staticTaskCount)();
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
/* harmony import */ var _taskHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskHandler */ "./src/modules/taskHandler.js");
/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectHandler */ "./src/modules/projectHandler.js");




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
			storageKey = keyGenerator();
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
				_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateTaskStorage(storageKey, renamedProjectForTask);
			}
		}

		databaseObj && _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateProjectStorage(key, newProject);

		return;
	};

	const deleteProject = function (key) {
		_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.deleteStorage(key);
	};

	const updateNumberOfTasks = function (count) {
		totalNumberOfTasks += count;
	};

	const keyGenerator = function () {
		let i = 1;
		let keyTest = 1;
		let key;
		while (keyTest) {
			key = `P${i}`;
			keyTest = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(key);
			i += 1;
		}
		return key;
	};

	const store = function (key, obj) {
		_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateProjectStorage(key, obj);
	};

	return { getName, create, update, deleteProject, updateNumberOfTasks };
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

const tasks = (task, project, notes, day, time) => {
	const type = "task";
	let complete = false;

	const create = function () {
		let storageKey = keyGenerator();
		let taskObject = Object.assign(
			{},
			{
				key: storageKey,
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
		// return newTask(storageKey, project, task, notes, day, time, complete);
		return taskObject;
	};

	const update = function (key, projectName, taskName, notes, day, time) {
		let datbaseObj = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(key);
		let newTask = Object.assign({}, datbaseObj);
		newTask.projectName = projectName;
		newTask.taskName = taskName;
		newTask.notes = notes;
		newTask.day = day;
		newTask.time = time;

		datbaseObj && _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateTaskStorage(key, newTask);

		return;
	};

	const deleteTask = function (key) {
		_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.deleteStorage(key);
	};

	const keyGenerator = function () {
		let i = 1;
		let keyTest = 1;
		let key;
		while (keyTest) {
			key = `T${i}`;
			keyTest = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(key);
			i += 1;
		}
		return key;
	};

	const store = function (key, obj) {
		_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateTaskStorage(key, obj);
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
	const numberOfTasksElement = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "number-of-tasks", ...Array(1), `${numberOfTasks}`);

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
			(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_3__.deletingTaskCount)(projectName);
			(0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.tasks)().deleteTask(taskKey);
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
			e.preventDefault();
		}
		if (projectNameValue === "" || projectNameValue == null) {
			messages.push("Name is required");
			e.preventDefault();
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
	const populateProjectStorage = (objectKey, objectValues) => {
		localStorage.setItem(objectKey, JSON.stringify(objectValues));
	};

	const populateTaskStorage = (objectKey, objectValues) => {
		localStorage.setItem(objectKey,JSON.stringify(objectValues));
	};

	const getStorage = (objectKey) => {
		return JSON.parse(localStorage.getItem(objectKey));
	};

	const deleteStorage = (objectKey) => {
		return localStorage.removeItem(objectKey);
	};

	return { populateProjectStorage, populateTaskStorage, getStorage, deleteStorage };
})();




/***/ }),

/***/ "./src/modules/taskCountTracking.js":
/*!******************************************!*\
  !*** ./src/modules/taskCountTracking.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "staticTaskCount": () => (/* binding */ staticTaskCount),
/* harmony export */   "dynamicTaskCount": () => (/* binding */ dynamicTaskCount),
/* harmony export */   "deletingTaskCount": () => (/* binding */ deletingTaskCount)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


// const allProjectCount = document.body.querySelector(`.project-list[data-value=P0]`);

function staticTaskCount() {
	const projectsDiv = document.getElementById("projects-div");

	//First, reset all task counts to zero, then calculate from storage
	for (let p = 1; p < projectsDiv.childNodes.length; p++) {
		projectsDiv.childNodes[p].childNodes[1].textContent = 0;
	}
	
	for (let i = 0; i < localStorage.length; i++) {
		let storageKey = localStorage.key(i);
		let storageObject = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(storageKey);
		if (storageObject["type"] == "task") {
			for (let p = 0; p < projectsDiv.childNodes.length; p++) {
				if (projectsDiv.childNodes[p].childNodes[0].textContent != "All") {
					if (projectsDiv.childNodes[p].childNodes[0].textContent == storageObject["projectName"]) {
						++projectsDiv.childNodes[p].childNodes[1].textContent;
					}
				}
			}
		}
	}
}

function dynamicTaskCount(projectName, storageKey = null, oldProject = null) {
	const projectsDiv = document.getElementById("projects-div");

	for (let p = 0; p < projectsDiv.childNodes.length; p++) {
		//To prevent decrementing the total number of tasks for editing existing task group
		if (projectName == "All" && !oldProject) {
			++projectsDiv.childNodes[0].childNodes[1].textContent;
			return;
		}

		if (projectName == "All" && oldProject) {
			if (projectsDiv.childNodes[p].childNodes[0].textContent == oldProject) {
				--projectsDiv.childNodes[p].childNodes[1].textContent;
				return;
			}
		}

		if (projectsDiv.childNodes[p].childNodes[0].textContent == projectName) {
			++projectsDiv.childNodes[p].childNodes[1].textContent;
			if (!storageKey) {
				++projectsDiv.childNodes[0].childNodes[1].textContent; //for "All" projects
			}
		}

		if (oldProject && oldProject != "All" && projectsDiv.childNodes[p].childNodes[0].textContent == oldProject) {
			--projectsDiv.childNodes[p].childNodes[1].textContent;
		}
	}
}

function deletingTaskCount(projectName) {
	const projectsDiv = document.getElementById("projects-div");

	if (projectName == "All") {
		--projectsDiv.childNodes[0].childNodes[1].textContent;
		return;
	}

	for (let p = 0; p < projectsDiv.childNodes.length; p++) {
		if (projectsDiv.childNodes[p].childNodes[0].textContent == projectName) {
			--projectsDiv.childNodes[p].childNodes[1].textContent;
			--projectsDiv.childNodes[0].childNodes[1].textContent;
		}
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
	let notes = obj.notes 
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

	(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_3__.dynamicTaskCount)(project);

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
		let projectName = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(storageKey)["projectName"];
		(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_3__.deletingTaskCount)(projectName);
		(0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.tasks)().deleteTask(storageKey);
		mainTaskDiv.removeChild(deletedTask);
		// newTask.removeChild(dropDownDiv);
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
			projectNameSelectOption.setAttribute("value", storageObject["projectName"]);
			projectNameSelectOption.textContent = storageObject["projectName"];
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
		let taskNotesValue = taskNotesInput.value;
		let taskDateValue = "";
		let taskTimeValue = "";
		if (dateInput) {
			taskDateValue = dateInput.value;
		}
		if (timeInput) {
			taskTimeValue = timeInput.value;
		}
		let instantiateTaskObject = (0,_objectFactory__WEBPACK_IMPORTED_MODULE_1__.tasks)(taskNameValue, taskProjectNameValue, taskNotesValue, taskDateValue, taskTimeValue);
		if (storageKey) {
			const updateTaskDiv = document.querySelector(`.task-list[data-value=${storageKey}]`).childNodes[1];
			updateTaskDiv.childNodes[0].textContent = taskNameValue;
			updateTaskDiv.childNodes[1].childNodes[0].textContent = taskNotesValue;
			updateTaskDiv.childNodes[2].childNodes[0].textContent = taskDateValue;
			updateTaskDiv.childNodes[2].childNodes[1].textContent = taskTimeValue;
			let oldProjectName = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(storageKey)["projectName"];
			(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_3__.dynamicTaskCount)(taskProjectNameValue, storageKey, oldProjectName);
			instantiateTaskObject.update(storageKey, taskProjectNameValue, taskNameValue, taskNotesValue, taskDateValue, taskTimeValue);
		} else {
			let newTaskObject = instantiateTaskObject.create();
			let newElement = newTask(newTaskObject)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDNUMsR0FBRyxvRUFBZ0I7QUFDbkI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwyREFBVztBQUNiLEVBQUU7O0FBRUY7QUFDQTs7QUFFeUQ7Ozs7Ozs7VUM5U3pEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQjtBQUNvQztBQUNGOztBQUV0RCxhQUFhLDhEQUFxQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLGdFQUF1QixDQUFDLDZEQUFJO0FBQzVCLDhEQUFxQjtBQUNyQiwrREFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9lbGVtZW50QnVpbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9vYmplY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza0NvdW50VHJhY2tpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcblxcdGdhcDogMS4yNWVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5udW1iZXItb2YtdGFza3MsXFxuLmVkaXQge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG5cXHRib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRyb3AtZG93bi1vcHRpb24sXFxuLm1vcmUtaW5mby1pY29uLFxcbiNhZGQtdGFzay1pY29uLFxcbiNhZGQtcHJvamVjdC1kaXY6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy10YXNrLWZvcm0tY29udGFpbmVyLFxcbiNuZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MSwgMTEyLCAxMzEsIDAuNCk7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0ei1pbmRleDogOTk5O1xcblxcdC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cXG5cXHQvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG59XFxuXFxuI25ldy10YXNrLWZvcm0tZGl2LFxcbiNuZXctcHJvamVjdC1mb3JtLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJvcmRlcjogc29saWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMnB4O1xcblxcdHBhZGRpbmc6IDAuNzVlbTtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9yZS1pbmZvLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZHJvcC1kb3duLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wLWRvd24tb3B0aW9ue1xcbiAgICBwYWRkaW5nOiAwLjI1ZW07XFxufVxcblxcbi5kcm9wLWRvd24tb3B0aW9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkIDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTs7OztDQUlDLGVBQWU7QUFDaEI7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHlDQUF5QztDQUN6QyxZQUFZO0NBQ1osWUFBWTtDQUNaLGVBQWU7Q0FDZixNQUFNO0NBQ04sT0FBTztDQUNQLFlBQVk7Q0FDWiwwQ0FBMEM7Q0FDMUMsZ0NBQWdDO0FBQ2pDOztBQUVBOztDQUVDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuXFx0Z2FwOiAxLjI1ZW07XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm51bWJlci1vZi10YXNrcyxcXG4uZWRpdCB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcblxcdGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZHJvcC1kb3duLW9wdGlvbixcXG4ubW9yZS1pbmZvLWljb24sXFxuI2FkZC10YXNrLWljb24sXFxuI2FkZC1wcm9qZWN0LWRpdjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stZm9ybS1jb250YWluZXIsXFxuI25ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLCAxMTIsIDEzMSwgMC40KTtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAqL1xcblxcdC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyAqL1xcbn1cXG5cXG4jbmV3LXRhc2stZm9ybS1kaXYsXFxuI25ldy1wcm9qZWN0LWZvcm0tZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Ym9yZGVyOiBzb2xpZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFx0cGFkZGluZzogMC43NWVtO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3JlLWluZm8taWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5kcm9wLWRvd24tY29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLXdpZHRoOiAxNjBweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3AtZG93bi1vcHRpb257XFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXG59XFxuXFxuLmRyb3AtZG93bi1vcHRpb246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQgO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBuZXdFbGVtZW50KGVsZW1lbnQgPSBcIlwiLCBjbGFzc05hbWUgPSBcIlwiLCBlbGVtZW50SUQgPSBcIlwiLCB0ZXh0ID0gXCJcIiwgaHJlZiA9IFwiXCIpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG5cdGNsYXNzTmFtZSA/IChuZXdFbGVtZW50LmNsYXNzTGlzdCA9IGNsYXNzTmFtZSkgOiBudWxsO1xuXHRlbGVtZW50SUQgPyAobmV3RWxlbWVudC5pZCA9IGVsZW1lbnRJRCkgOiBudWxsO1xuXHR0ZXh0ID8gKG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0KSA6IG51bGw7XG5cdGlmIChlbGVtZW50ID09IFwiYVwiKSB7XG5cdFx0aHJlZiA/IChuZXdFbGVtZW50LmhyZWYgPSBocmVmKSA6IG51bGw7XG5cdH1cblxuXHRyZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2VuZFRvQm9keShIVE1MKSB7XG5cdHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEhUTUwpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuXHR3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1vZHVsZVJlbmRlcihvYmosIHBhcmVudE5vZGUpIHtcblx0cmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlKTtcblx0Zm9yIChsZXQgeCBpbiBvYmopIHtcblx0XHRwYXJlbnROb2RlLmFwcGVuZENoaWxkKG9ialt4XSk7XG5cdH1cbn1cblxuY29uc3QgY2xvc2VXaW5kb3cgPSAoZWxlbWVudCkgPT4ge1xuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHsgbmV3RWxlbWVudCwgc2VuZFRvQm9keSwgcmVtb3ZlQWxsQ2hpbGROb2RlcywgbW9kdWxlUmVuZGVyLCBjbG9zZVdpbmRvdyB9O1xuIiwiaW1wb3J0IHsgbmV3RWxlbWVudCwgc2VuZFRvQm9keSB9IGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IG5ld1Rhc2ssIGRpc3BsYXlOZXdUYXNrV2luZG93IH0gZnJvbSBcIi4vdGFza0hhbmRsZXJcIjtcbmltcG9ydCB7IG5ld1Byb2plY3QsIGRpc3BsYXlOZXdQcm9qZWN0V2luZG93IH0gZnJvbSBcIi4vcHJvamVjdEhhbmRsZXJcIjtcbmltcG9ydCB7IHBhZ2VTdGF0ZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHN0YXRpY1Rhc2tDb3VudCB9IGZyb20gXCIuL3Rhc2tDb3VudFRyYWNraW5nXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL29iamVjdEZhY3RvcnlcIjtcblxuZnVuY3Rpb24gaG9tZSgpIHtcblx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuXHRjb25zdCBwcm9qZWN0c0RpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwicHJvamVjdHMtZGl2XCIpO1xuXHRjb25zdCBwcm9qZWN0SGVhZGVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlclwiKTtcblx0Y29uc3QgcHJvamVjdFRpdGxlID0gbmV3RWxlbWVudChcImgxXCIsIFwidGl0bGVcIiwgLi4uQXJyYXkoMSksIFwiTXkgUHJvamVjdHNcIik7XG5cdGNvbnN0IG1haW5MaXN0ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByb2plY3QtbGlzdFwiLCBcImFsbC1saXN0XCIpO1xuXHRtYWluTGlzdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFwiUDBcIik7XG5cdGNvbnN0IGluc3RhbnRpYXRlTWFpblByb2plY3QgPSBwcm9qZWN0cyhcIkFsbFwiKTtcblx0bGV0IG1haW5MaXN0T2JqID0gaW5zdGFudGlhdGVNYWluUHJvamVjdC5jcmVhdGUoKTtcblx0Ly8gcGFnZVN0YXRlLnBvcHVsYXRlUHJvamVjdFN0b3JhZ2UoXCJQMFwiLCBcIkFsbFwiLCAwLCBcInByb2plY3RcIik7XG5cdGNvbnN0IGxpc3RUaXRsZSA9IG5ld0VsZW1lbnQoXCJoM1wiLCBcInByb2plY3QtdGl0bGVcIiwgLi4uQXJyYXkoMSksIFwiQWxsXCIpO1xuXHRjb25zdCBudW1iZXJPZlRhc2tzID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJudW1iZXItb2YtdGFza3NcIiwgLi4uQXJyYXkoMSksIG1haW5MaXN0T2JqLm51bWJlck9mVGFza3MpO1xuXG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwidGFzay1jb250YWluZXJcIik7XG5cdGNvbnN0IHRhc2tEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcInRhc2stZGl2XCIpO1xuXHRjb25zdCB0YXNrSGVhZGVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlclwiKTtcblx0Y29uc3QgdGFza1RpdGxlID0gbmV3RWxlbWVudChcImgyXCIsIFwidGl0bGVcIiwgLi4uQXJyYXkoMSksIG1haW5MaXN0T2JqLnByb2plY3ROYW1lKTtcblx0Y29uc3QgdGFza0xpc3REaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwidGFzay1saXN0LWRpdlwiLCBcIm1haW4tdGFzay1kaXZcIik7XG5cblx0Y29uc3QgYWRkUHJvamVjdERpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwiYWRkLXByb2plY3QtZGl2XCIpO1xuXHRjb25zdCBhZGRQcm9qZWN0SWNvbiA9IG5ld0VsZW1lbnQoXCJzcGFuXCIsIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIiwgXCJhZGQtcHJvamVjdC1pY29uXCIsIFwiYWRkX2NpcmNsZV9vdXRsaW5lXCIpO1xuXHRjb25zdCBhZGRQcm9qZWN0ID0gbmV3RWxlbWVudChcInNwYW5cIiwgLi4uQXJyYXkoMSksIFwiYWRkLXByb2plY3RcIiwgXCJBZGQgUHJvamVjdFwiKTtcblxuXHRjb25zdCBhZGRUYXNrRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJhZGQtdGFzay1kaXZcIik7XG5cdGNvbnN0IGFkZFRhc2tJY29uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLCBcImFkZC10YXNrLWljb25cIiwgXCJhZGRfY2lyY2xlXCIpO1xuXG5cdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cdHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblx0cHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQobWFpbkxpc3QpO1xuXHRtYWluTGlzdC5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuXHRtYWluTGlzdC5hcHBlbmRDaGlsZChudW1iZXJPZlRhc2tzKTtcblx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpdik7XG5cdGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEljb24pO1xuXHRhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG5cdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG5cdHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG5cdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XG5cdGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0ljb24pO1xuXG5cdGFkZFByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRzZW5kVG9Cb2R5KGRpc3BsYXlOZXdQcm9qZWN0V2luZG93KCkpO1xuXHR9KTtcblxuXHRhZGRUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHNlbmRUb0JvZHkoZGlzcGxheU5ld1Rhc2tXaW5kb3coKSk7XG5cdH0pO1xuXG5cdHJldHVybiB7IHByb2plY3RzQ29udGFpbmVyLCB0YXNrQ29udGFpbmVyIH07XG59XG5cbmZ1bmN0aW9uIHJlY2FsbCgpIHtcblx0Y29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpdlwiKTtcblx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10YXNrLWRpdlwiKTtcblx0bGV0IHRvdGFsTnVtYmVyT2ZUYXNrcyA9IDA7XG5cdGNvbnN0IGFsbFByb2plY3RDb3VudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnByb2plY3QtbGlzdFtkYXRhLXZhbHVlPVAwXWApO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHN0b3JhZ2VLZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXHRcdGxldCBzdG9yYWdlT2JqZWN0ID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoc3RvcmFnZUtleSk7XG5cdFx0aWYgKHN0b3JhZ2VPYmplY3RbXCJ0eXBlXCJdID09IFwicHJvamVjdFwiICYmIHN0b3JhZ2VLZXkgIT0gXCJQMFwiKSB7XG5cdFx0XHRsZXQgcmVzdG9yZWRQcm9qZWN0ID0gbmV3UHJvamVjdChzdG9yYWdlT2JqZWN0KTtcblx0XHRcdHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHJlc3RvcmVkUHJvamVjdCk7XG5cdFx0fSBlbHNlIGlmIChzdG9yYWdlT2JqZWN0W1widHlwZVwiXSA9PSBcInRhc2tcIikge1xuXHRcdFx0dG90YWxOdW1iZXJPZlRhc2tzICs9IDE7XG5cdFx0XHRsZXQgcmVzdG9yZWRUYXNrID0gbmV3VGFzayhzdG9yYWdlT2JqZWN0KTtcblx0XHRcdHRhc2tEaXYuYXBwZW5kQ2hpbGQocmVzdG9yZWRUYXNrKTtcblx0XHR9XG5cdH1cblxuXHRhbGxQcm9qZWN0Q291bnQuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IHRvdGFsTnVtYmVyT2ZUYXNrcztcblx0c3RhdGljVGFza0NvdW50KCk7XG59XG5cbmV4cG9ydCB7IGhvbWUsIHJlY2FsbCB9O1xuIiwiaW1wb3J0IHsgcGFnZVN0YXRlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgbmV3VGFzayB9IGZyb20gXCIuL3Rhc2tIYW5kbGVyXCI7XG5pbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdEhhbmRsZXJcIjtcblxuY29uc3QgcHJvamVjdHMgPSAobmFtZSkgPT4ge1xuXHRjb25zdCB0eXBlID0gXCJwcm9qZWN0XCI7XG5cdGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXHRsZXQgdG90YWxOdW1iZXJPZlRhc2tzID0gMDtcblx0bGV0IG51bWJlck9mVGFza3MgPSAwO1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgcHJvamVjdE9iamVjdDtcblx0XHRsZXQgc3RvcmFnZUtleTtcblx0XHRpZiAobmFtZSA9PSBcIkFsbFwiKSB7XG5cdFx0XHRzdG9yYWdlS2V5ID0gXCJQMFwiO1xuXHRcdFx0cHJvamVjdE9iamVjdCA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdHt9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0a2V5OiBcIlAwXCIsXG5cdFx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0XHRwcm9qZWN0TmFtZTogbmFtZSxcblx0XHRcdFx0XHRudW1iZXJPZlRhc2tzOiAwLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdG9yYWdlS2V5ID0ga2V5R2VuZXJhdG9yKCk7XG5cdFx0XHRwcm9qZWN0T2JqZWN0ID0gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0e30sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRrZXk6IHN0b3JhZ2VLZXksXG5cdFx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0XHRwcm9qZWN0TmFtZTogbmFtZSxcblx0XHRcdFx0XHRudW1iZXJPZlRhc2tzOiAwLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHN0b3JlKHN0b3JhZ2VLZXksIHByb2plY3RPYmplY3QpO1xuXG5cdFx0cmV0dXJuIHByb2plY3RPYmplY3Q7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlID0gZnVuY3Rpb24gKGtleSwgcHJvamVjdE5hbWUpIHtcblx0XHRsZXQgZGF0YWJhc2VPYmogPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShrZXkpO1xuXHRcdGxldCBvbGRQcm9qZWN0TmFtZSA9IGRhdGFiYXNlT2JqLnByb2plY3ROYW1lO1xuXHRcdGxldCBuZXdQcm9qZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YWJhc2VPYmopO1xuXHRcdG5ld1Byb2plY3QucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgc3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cdFx0XHRsZXQgc3RvcmFnZU9iamVjdCA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKHN0b3JhZ2VLZXkpO1xuXHRcdFx0aWYgKHN0b3JhZ2VPYmplY3QudHlwZSA9PSBcInRhc2tcIiAmJiBzdG9yYWdlT2JqZWN0LnByb2plY3ROYW1lID09IG9sZFByb2plY3ROYW1lKSB7XG5cdFx0XHRcdGxldCByZW5hbWVkUHJvamVjdEZvclRhc2sgPSBPYmplY3QuYXNzaWduKHt9LCBzdG9yYWdlT2JqZWN0KTtcblx0XHRcdFx0cmVuYW1lZFByb2plY3RGb3JUYXNrLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG5cdFx0XHRcdHBhZ2VTdGF0ZS5wb3B1bGF0ZVRhc2tTdG9yYWdlKHN0b3JhZ2VLZXksIHJlbmFtZWRQcm9qZWN0Rm9yVGFzayk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGF0YWJhc2VPYmogJiYgcGFnZVN0YXRlLnBvcHVsYXRlUHJvamVjdFN0b3JhZ2Uoa2V5LCBuZXdQcm9qZWN0KTtcblxuXHRcdHJldHVybjtcblx0fTtcblxuXHRjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdHBhZ2VTdGF0ZS5kZWxldGVTdG9yYWdlKGtleSk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlTnVtYmVyT2ZUYXNrcyA9IGZ1bmN0aW9uIChjb3VudCkge1xuXHRcdHRvdGFsTnVtYmVyT2ZUYXNrcyArPSBjb3VudDtcblx0fTtcblxuXHRjb25zdCBrZXlHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGkgPSAxO1xuXHRcdGxldCBrZXlUZXN0ID0gMTtcblx0XHRsZXQga2V5O1xuXHRcdHdoaWxlIChrZXlUZXN0KSB7XG5cdFx0XHRrZXkgPSBgUCR7aX1gO1xuXHRcdFx0a2V5VGVzdCA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGtleSk7XG5cdFx0XHRpICs9IDE7XG5cdFx0fVxuXHRcdHJldHVybiBrZXk7XG5cdH07XG5cblx0Y29uc3Qgc3RvcmUgPSBmdW5jdGlvbiAoa2V5LCBvYmopIHtcblx0XHRwYWdlU3RhdGUucG9wdWxhdGVQcm9qZWN0U3RvcmFnZShrZXksIG9iaik7XG5cdH07XG5cblx0cmV0dXJuIHsgZ2V0TmFtZSwgY3JlYXRlLCB1cGRhdGUsIGRlbGV0ZVByb2plY3QsIHVwZGF0ZU51bWJlck9mVGFza3MgfTtcbn07XG5cbi8qXG4qXG4qXG4qXG4qXG4qXG4qXG4qXG4qXG4qXG4qXG4qXG4qL1xuXG5jb25zdCB0YXNrcyA9ICh0YXNrLCBwcm9qZWN0LCBub3RlcywgZGF5LCB0aW1lKSA9PiB7XG5cdGNvbnN0IHR5cGUgPSBcInRhc2tcIjtcblx0bGV0IGNvbXBsZXRlID0gZmFsc2U7XG5cblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGxldCBzdG9yYWdlS2V5ID0ga2V5R2VuZXJhdG9yKCk7XG5cdFx0bGV0IHRhc2tPYmplY3QgPSBPYmplY3QuYXNzaWduKFxuXHRcdFx0e30sXG5cdFx0XHR7XG5cdFx0XHRcdGtleTogc3RvcmFnZUtleSxcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0cHJvamVjdE5hbWU6IHByb2plY3QsXG5cdFx0XHRcdHRhc2tOYW1lOiB0YXNrLFxuXHRcdFx0XHRub3Rlczogbm90ZXMsXG5cdFx0XHRcdGRheTogZGF5LFxuXHRcdFx0XHR0aW1lOiB0aW1lLFxuXHRcdFx0XHRjb21wbGV0ZTogY29tcGxldGUsXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHN0b3JlKHN0b3JhZ2VLZXksIHRhc2tPYmplY3QpO1xuXHRcdC8vIHJldHVybiBuZXdUYXNrKHN0b3JhZ2VLZXksIHByb2plY3QsIHRhc2ssIG5vdGVzLCBkYXksIHRpbWUsIGNvbXBsZXRlKTtcblx0XHRyZXR1cm4gdGFza09iamVjdDtcblx0fTtcblxuXHRjb25zdCB1cGRhdGUgPSBmdW5jdGlvbiAoa2V5LCBwcm9qZWN0TmFtZSwgdGFza05hbWUsIG5vdGVzLCBkYXksIHRpbWUpIHtcblx0XHRsZXQgZGF0YmFzZU9iaiA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGtleSk7XG5cdFx0bGV0IG5ld1Rhc2sgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRiYXNlT2JqKTtcblx0XHRuZXdUYXNrLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG5cdFx0bmV3VGFzay50YXNrTmFtZSA9IHRhc2tOYW1lO1xuXHRcdG5ld1Rhc2subm90ZXMgPSBub3Rlcztcblx0XHRuZXdUYXNrLmRheSA9IGRheTtcblx0XHRuZXdUYXNrLnRpbWUgPSB0aW1lO1xuXG5cdFx0ZGF0YmFzZU9iaiAmJiBwYWdlU3RhdGUucG9wdWxhdGVUYXNrU3RvcmFnZShrZXksIG5ld1Rhc2spO1xuXG5cdFx0cmV0dXJuO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0cGFnZVN0YXRlLmRlbGV0ZVN0b3JhZ2Uoa2V5KTtcblx0fTtcblxuXHRjb25zdCBrZXlHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGkgPSAxO1xuXHRcdGxldCBrZXlUZXN0ID0gMTtcblx0XHRsZXQga2V5O1xuXHRcdHdoaWxlIChrZXlUZXN0KSB7XG5cdFx0XHRrZXkgPSBgVCR7aX1gO1xuXHRcdFx0a2V5VGVzdCA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGtleSk7XG5cdFx0XHRpICs9IDE7XG5cdFx0fVxuXHRcdHJldHVybiBrZXk7XG5cdH07XG5cblx0Y29uc3Qgc3RvcmUgPSBmdW5jdGlvbiAoa2V5LCBvYmopIHtcblx0XHRwYWdlU3RhdGUucG9wdWxhdGVUYXNrU3RvcmFnZShrZXksIG9iaik7XG5cdH07XG5cblx0cmV0dXJuIHsgY3JlYXRlLCB1cGRhdGUsIGRlbGV0ZVRhc2ssIHN0b3JlIH07XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0cywgdGFza3MgfTtcbiIsImltcG9ydCB7IG5ld0VsZW1lbnQsIHNlbmRUb0JvZHksIGNsb3NlV2luZG93IH0gZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgcHJvamVjdHMsIHRhc2tzIH0gZnJvbSBcIi4vb2JqZWN0RmFjdG9yeVwiO1xuaW1wb3J0IHsgcGFnZVN0YXRlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgZGVsZXRpbmdUYXNrQ291bnQgfSBmcm9tIFwiLi90YXNrQ291bnRUcmFja2luZ1wiO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0KG9iaikge1xuXHRjb25zdCBuYW1lID0gb2JqLnByb2plY3ROYW1lO1xuXHRjb25zdCBzdG9yYWdlS2V5ID0gb2JqLmtleTtcblx0Y29uc3QgbnVtYmVyT2ZUYXNrcyA9IG9iai5udW1iZXJPZlRhc2tzO1xuXG5cdGNvbnN0IG1vZGlmaWVkTmFtZUZvcklEID0gbmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIik7XG5cdGNvbnN0IG5ld1Byb2plY3QgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1saXN0XCIsIGAke21vZGlmaWVkTmFtZUZvcklEfS1saXN0YCk7XG5cdG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzdG9yYWdlS2V5KTtcblx0Y29uc3QgbmV3TGlzdFRpdGxlID0gbmV3RWxlbWVudChcImgzXCIsIFwicHJvamVjdC10aXRsZVwiLCAuLi5BcnJheSgxKSwgYCR7bmFtZX1gKTtcblx0Y29uc3QgbnVtYmVyT2ZUYXNrc0VsZW1lbnQgPSBuZXdFbGVtZW50KFwic3BhblwiLCBcIm51bWJlci1vZi10YXNrc1wiLCAuLi5BcnJheSgxKSwgYCR7bnVtYmVyT2ZUYXNrc31gKTtcblxuXHRjb25zdCBtb3JlSW5mb0ljb24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsIGBpbmZvLWljb24tJHtzdG9yYWdlS2V5fWAsIFwiaW5mb1wiKTtcblx0bW9yZUluZm9JY29uLmNsYXNzTGlzdC5hZGQoXCJtb3JlLWluZm8taWNvblwiKTtcblx0bmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRtb3JlSW5mb0ljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdH0pO1xuXG5cdG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uICgpIHtcblx0XHRtb3JlSW5mb0ljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9KTtcblxuXHRtb3JlSW5mb0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBkcm9wRG93bkRpdiA9IGRyb3BEb3duT3B0aW9uKHN0b3JhZ2VLZXkpO1xuXHRcdG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0xpc3RUaXRsZSk7XG5cdG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobnVtYmVyT2ZUYXNrc0VsZW1lbnQpO1xuXHRuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG1vcmVJbmZvSWNvbik7XG5cblx0cmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGRyb3BEb3duT3B0aW9uKHN0b3JhZ2VLZXkpIHtcblx0Y29uc3QgZHJvcERvd25EaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwiZHJvcC1kb3duLWNvbnRlbnRcIiwgXCJkcm9wLWRvd25cIik7XG5cdGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiZHJvcC1kb3duLW9wdGlvblwiLCBgdGFzayR7c3RvcmFnZUtleX0tdXBkYXRlLWJ1dHRvbmAsIFwiUmVuYW1lXCIpO1xuXHRjb25zdCBkZWxldGVCdXR0b24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcImRyb3AtZG93bi1vcHRpb25cIiwgYHRhc2ske3N0b3JhZ2VLZXl9LWRlbGV0ZS1idXR0b25gLCBcIkRlbGV0ZVwiKTtcblx0dXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cdGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHN0b3JhZ2VLZXkpO1xuXG5cdGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fV1gKTtcblx0bGV0IG1vcmUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLWljb24tJHtzdG9yYWdlS2V5fWApO1xuXG5cdC8qIFRoaXMgYmVoYXZpb3IgaXMgdW5leHBlY3RlZC4gbG9vcGluZyB0aHJvdWdoIGFsbCBzdG9yYWdla2V5cyBpbnN0ZWFkIG9mIGp1c3QgdGhlIG9uZSBzdG9yYWdlXG4gICAgICAgIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIGNsaWNrZWQgZWxlbWVudC4gZXJyb3Igb2NjdXJzIGluIHRoZSBjb25zb2xlIGF0IGV2ZXJ5IGV4ZWN1dGlvbiAqL1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWRvd25cIikgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPSBtb3JlKSB7XG5cdFx0XHRuZXdQcm9qZWN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHNlbmRUb0JvZHkoZGlzcGxheU5ld1Byb2plY3RXaW5kb3coc3RvcmFnZUtleSkpO1xuXHRcdG5ld1Byb2plY3QucmVtb3ZlQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtYWluUHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpdlwiKTtcblx0XHRjb25zdCBkZWxldGVkUHJvamVjdCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnByb2plY3QtbGlzdFtkYXRhLXZhbHVlPSR7c3RvcmFnZUtleX1gKTtcblx0XHRyZW1vdmVBbGxUYXNrcyhzdG9yYWdlS2V5KTtcblx0XHRwcm9qZWN0cygpLmRlbGV0ZVByb2plY3Qoc3RvcmFnZUtleSk7XG5cdFx0bWFpblByb2plY3RzRGl2LnJlbW92ZUNoaWxkKGRlbGV0ZWRQcm9qZWN0KTtcblx0fSk7XG5cblx0ZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblx0ZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuXHRyZXR1cm4gZHJvcERvd25EaXY7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbFRhc2tzKHN0b3JhZ2VLZXkpIHtcblx0Y29uc3QgbWFpblRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tdGFzay1kaXZcIik7XG5cblx0bGV0IHByb2plY3ROYW1lID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoc3RvcmFnZUtleSlbXCJwcm9qZWN0TmFtZVwiXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdGFza0tleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cdFx0bGV0IHRhc2tPYmplY3QgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZSh0YXNrS2V5KTtcblx0XHRpZiAodGFza09iamVjdFtcInR5cGVcIl0gPT0gXCJ0YXNrXCIgJiYgdGFza09iamVjdFtcInByb2plY3ROYW1lXCJdID09IHByb2plY3ROYW1lKSB7XG5cdFx0XHRsZXQgZGVsZXRlZFRhc2sgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWxpc3RbZGF0YS12YWx1ZT0ke3Rhc2tLZXl9YCk7XG5cdFx0XHRtYWluVGFza0Rpdi5yZW1vdmVDaGlsZChkZWxldGVkVGFzayk7XG5cdFx0XHRkZWxldGluZ1Rhc2tDb3VudChwcm9qZWN0TmFtZSk7XG5cdFx0XHR0YXNrcygpLmRlbGV0ZVRhc2sodGFza0tleSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0V2luZG93KHN0b3JhZ2VLZXkgPSBudWxsKSB7XG5cdGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcIm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xuXHRjb25zdCBuZXdQcm9qZWN0RGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJuZXctcHJvamVjdC1mb3JtLWRpdlwiKTtcblx0Y29uc3QgdGl0bGUgPSBuZXdFbGVtZW50KFwiaDJcIiwgXCJwb3AtdXAtd2luZG93LXRpdGxlXCIsIC4uLkFycmF5KDEpLCBcIk5ldyBQcm9qZWN0XCIpO1xuXHRjb25zdCBlcnJvciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwicHJvamVjdC1uYW1lLWVycm9yXCIpO1xuXHRjb25zdCBwcm9qZWN0Rm9ybSA9IG5ld0VsZW1lbnQoXCJmb3JtXCIsIC4uLkFycmF5KDEpLCBcInByb2plY3QtZm9ybVwiKTtcblx0Y29uc3QgcHJvamVjdE5hbWVJbnB1dExhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiTmFtZTpcIik7XG5cdGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgXCJmb3JtLWlucHV0XCIsIFwicHJvamVjdC1uYW1lLWlucHV0XCIpO1xuXHRwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0cHJvamVjdE5hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbmFtZS1pbnB1dFwiKTtcblx0Y29uc3QgYnV0dG9uU2VsZWN0b3JEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcImJ1dHRvbi1zZWxlY3Rvci1kaXZcIik7XG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJidXR0b25cIiwgXCJwcm9qZWN0LWNhbmNlbC1idXR0b25cIiwgXCJDYW5jZWxcIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImJ1dHRvblwiLCBcInByb2plY3Qtc3VibWl0LWJ1dHRvblwiKTtcblx0c3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuXHRzdWJtaXRCdXR0b24udmFsdWUgPSBcIk9LXCI7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG5cblx0aWYgKHN0b3JhZ2VLZXkpIHtcblx0XHRwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcInByb2plY3ROYW1lXCJdO1xuXHR9XG5cblx0bmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcblx0bmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQoZXJyb3IpO1xuXHRuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblx0cHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dExhYmVsKTtcblx0cHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cdHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGJ1dHRvblNlbGVjdG9yRGl2KTtcblx0cHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblx0cHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuXHRwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG5cdFx0Y29uc3QgZXJyb3JGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWVycm9yXCIpO1xuXHRcdGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIik7XG5cdFx0bGV0IG1lc3NhZ2VzID0gW107XG5cdFx0bGV0IHByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuXHRcdGlmIChwcm9qZWN0TmFtZVZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gXCJhbGxcIikge1xuXHRcdFx0bWVzc2FnZXMucHVzaChcIkNhbm5vdCB1c2UgJ0FsbCcgYXMgYSBwcm9qZWN0IG5hbWVcIik7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHRcdGlmIChwcm9qZWN0TmFtZVZhbHVlID09PSBcIlwiIHx8IHByb2plY3ROYW1lVmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0bWVzc2FnZXMucHVzaChcIk5hbWUgaXMgcmVxdWlyZWRcIik7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHRcdGlmIChtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlcnJvckZpZWxkLnRleHRDb250ZW50ID0gbWVzc2FnZXMuam9pbihcIiwgXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgaW5zdGFudGlhdGVQcm9qZWN0T2JqZWN0ID0gcHJvamVjdHMocHJvamVjdE5hbWVWYWx1ZSk7XG5cdFx0XHRpZiAoc3RvcmFnZUtleSkge1xuXHRcdFx0XHRjb25zdCB1cGRhdGVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fV1gKTtcblx0XHRcdFx0dXBkYXRlUHJvamVjdERpdi5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVWYWx1ZTtcblx0XHRcdFx0aW5zdGFudGlhdGVQcm9qZWN0T2JqZWN0LnVwZGF0ZShzdG9yYWdlS2V5LCBwcm9qZWN0TmFtZVZhbHVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBuZXdQcm9qZWN0T2JqZWN0ID0gaW5zdGFudGlhdGVQcm9qZWN0T2JqZWN0LmNyZWF0ZSgpO1xuXHRcdFx0XHRsZXQgbmV3RWxlbWVudCA9IG5ld1Byb2plY3QobmV3UHJvamVjdE9iamVjdCk7XG5cdFx0XHRcdHByb2plY3RzRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjbG9zZVdpbmRvdyhuZXdQcm9qZWN0Q29udGFpbmVyKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNsb3NlV2luZG93KG5ld1Byb2plY3RDb250YWluZXIpO1xuXHR9KTtcblxuXHRyZXR1cm4gbmV3UHJvamVjdENvbnRhaW5lcjtcbn1cbmV4cG9ydCB7IG5ld1Byb2plY3QsIGRpc3BsYXlOZXdQcm9qZWN0V2luZG93IH07XG4iLCJjb25zdCBwYWdlU3RhdGUgPSAoKCkgPT4ge1xuXHRjb25zdCBwb3B1bGF0ZVByb2plY3RTdG9yYWdlID0gKG9iamVjdEtleSwgb2JqZWN0VmFsdWVzKSA9PiB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0ob2JqZWN0S2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3RWYWx1ZXMpKTtcblx0fTtcblxuXHRjb25zdCBwb3B1bGF0ZVRhc2tTdG9yYWdlID0gKG9iamVjdEtleSwgb2JqZWN0VmFsdWVzKSA9PiB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0ob2JqZWN0S2V5LEpTT04uc3RyaW5naWZ5KG9iamVjdFZhbHVlcykpO1xuXHR9O1xuXG5cdGNvbnN0IGdldFN0b3JhZ2UgPSAob2JqZWN0S2V5KSA9PiB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ob2JqZWN0S2V5KSk7XG5cdH07XG5cblx0Y29uc3QgZGVsZXRlU3RvcmFnZSA9IChvYmplY3RLZXkpID0+IHtcblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ob2JqZWN0S2V5KTtcblx0fTtcblxuXHRyZXR1cm4geyBwb3B1bGF0ZVByb2plY3RTdG9yYWdlLCBwb3B1bGF0ZVRhc2tTdG9yYWdlLCBnZXRTdG9yYWdlLCBkZWxldGVTdG9yYWdlIH07XG59KSgpO1xuXG5leHBvcnQgeyBwYWdlU3RhdGUgfTtcbiIsImltcG9ydCB7IHBhZ2VTdGF0ZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy8gY29uc3QgYWxsUHJvamVjdENvdW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1saXN0W2RhdGEtdmFsdWU9UDBdYCk7XG5cbmZ1bmN0aW9uIHN0YXRpY1Rhc2tDb3VudCgpIHtcblx0Y29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpdlwiKTtcblxuXHQvL0ZpcnN0LCByZXNldCBhbGwgdGFzayBjb3VudHMgdG8gemVybywgdGhlbiBjYWxjdWxhdGUgZnJvbSBzdG9yYWdlXG5cdGZvciAobGV0IHAgPSAxOyBwIDwgcHJvamVjdHNEaXYuY2hpbGROb2Rlcy5sZW5ndGg7IHArKykge1xuXHRcdHByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IDA7XG5cdH1cblx0XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHN0b3JhZ2VLZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXHRcdGxldCBzdG9yYWdlT2JqZWN0ID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoc3RvcmFnZUtleSk7XG5cdFx0aWYgKHN0b3JhZ2VPYmplY3RbXCJ0eXBlXCJdID09IFwidGFza1wiKSB7XG5cdFx0XHRmb3IgKGxldCBwID0gMDsgcCA8IHByb2plY3RzRGl2LmNoaWxkTm9kZXMubGVuZ3RoOyBwKyspIHtcblx0XHRcdFx0aWYgKHByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCAhPSBcIkFsbFwiKSB7XG5cdFx0XHRcdFx0aWYgKHByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9PSBzdG9yYWdlT2JqZWN0W1wicHJvamVjdE5hbWVcIl0pIHtcblx0XHRcdFx0XHRcdCsrcHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkeW5hbWljVGFza0NvdW50KHByb2plY3ROYW1lLCBzdG9yYWdlS2V5ID0gbnVsbCwgb2xkUHJvamVjdCA9IG51bGwpIHtcblx0Y29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpdlwiKTtcblxuXHRmb3IgKGxldCBwID0gMDsgcCA8IHByb2plY3RzRGl2LmNoaWxkTm9kZXMubGVuZ3RoOyBwKyspIHtcblx0XHQvL1RvIHByZXZlbnQgZGVjcmVtZW50aW5nIHRoZSB0b3RhbCBudW1iZXIgb2YgdGFza3MgZm9yIGVkaXRpbmcgZXhpc3RpbmcgdGFzayBncm91cFxuXHRcdGlmIChwcm9qZWN0TmFtZSA9PSBcIkFsbFwiICYmICFvbGRQcm9qZWN0KSB7XG5cdFx0XHQrK3Byb2plY3RzRGl2LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAocHJvamVjdE5hbWUgPT0gXCJBbGxcIiAmJiBvbGRQcm9qZWN0KSB7XG5cdFx0XHRpZiAocHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID09IG9sZFByb2plY3QpIHtcblx0XHRcdFx0LS1wcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID09IHByb2plY3ROYW1lKSB7XG5cdFx0XHQrK3Byb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdGlmICghc3RvcmFnZUtleSkge1xuXHRcdFx0XHQrK3Byb2plY3RzRGl2LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDsgLy9mb3IgXCJBbGxcIiBwcm9qZWN0c1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChvbGRQcm9qZWN0ICYmIG9sZFByb2plY3QgIT0gXCJBbGxcIiAmJiBwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPT0gb2xkUHJvamVjdCkge1xuXHRcdFx0LS1wcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlbGV0aW5nVGFza0NvdW50KHByb2plY3ROYW1lKSB7XG5cdGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIik7XG5cblx0aWYgKHByb2plY3ROYW1lID09IFwiQWxsXCIpIHtcblx0XHQtLXByb2plY3RzRGl2LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGxldCBwID0gMDsgcCA8IHByb2plY3RzRGl2LmNoaWxkTm9kZXMubGVuZ3RoOyBwKyspIHtcblx0XHRpZiAocHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID09IHByb2plY3ROYW1lKSB7XG5cdFx0XHQtLXByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdC0tcHJvamVjdHNEaXYuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgeyBzdGF0aWNUYXNrQ291bnQsIGR5bmFtaWNUYXNrQ291bnQsIGRlbGV0aW5nVGFza0NvdW50IH07XG4iLCJpbXBvcnQgeyBuZXdFbGVtZW50LCBzZW5kVG9Cb2R5LCBjbG9zZVdpbmRvdyB9IGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4vb2JqZWN0RmFjdG9yeVwiO1xuaW1wb3J0IHsgcGFnZVN0YXRlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgZHluYW1pY1Rhc2tDb3VudCwgZGVsZXRpbmdUYXNrQ291bnQgfSBmcm9tIFwiLi90YXNrQ291bnRUcmFja2luZ1wiO1xuXG5mdW5jdGlvbiBuZXdUYXNrKG9iaikge1xuXHRsZXQgc3RvcmFnZUtleSA9IG9iai5rZXk7XG5cdGxldCBwcm9qZWN0ID0gb2JqLnByb2plY3ROYW1lO1xuXHRsZXQgdGFzayA9IG9iai50YXNrTmFtZTsgXG5cdGxldCBub3RlcyA9IG9iai5ub3RlcyBcblx0bGV0IGRheSA9IG9iai5kYXk7IFxuXHRsZXQgdGltZSA9IG9iai50aW1lOyBcblx0bGV0IGNvbXBsZXRlID0gb2JqLmNvbXBsZXRlO1xuXG5cdGNvbnN0IG5ld1Rhc2sgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwidGFzay1saXN0XCIpO1xuXHRuZXdUYXNrLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cdGNvbnN0IG5ld1Rhc2tDaGVja01hcmsgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgXCJ0YXNrLWNoZWNrbWFya1wiKTtcblx0bmV3VGFza0NoZWNrTWFyay50eXBlID0gXCJyYWRpb1wiO1xuXHRpZiAoY29tcGxldGUpIHtcblx0XHRuZXdUYXNrQ2hlY2tNYXJrLmNoZWNrZWQgPSB0cnVlO1xuXHR9XG5cdGNvbnN0IG5ld1Rhc2tEZXRhaWxzID0gbmV3RWxlbWVudChcImRpdlwiLCBcInRhc2staW5mby1jb250YWluZXJcIik7XG5cdGNvbnN0IG5ld1Rhc2tUaXRsZSA9IG5ld0VsZW1lbnQoXCJoM1wiLCBcInRhc2stdGl0bGVcIiwgLi4uQXJyYXkoMSksIHRhc2spO1xuXHRjb25zdCBuZXdUYXNrTm90ZXNEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwidGFzay1ub3Rlcy1kaXZcIik7XG5cdGNvbnN0IG5ld1Rhc2tOb3RlcyA9IG5ld0VsZW1lbnQoXCJwXCIsIFwidGFzay1ub3Rlc1wiLCAuLi5BcnJheSgxKSwgbm90ZXMpO1xuXHRjb25zdCBuZXdEYXRlVGltZURpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWRhdGUtdGltZS1kaXZcIik7XG5cdGNvbnN0IG5ld1Rhc2tEYXkgPSBuZXdFbGVtZW50KFwicFwiLCBcInRhc2stZGF0ZVwiLCAuLi5BcnJheSgxKSwgZGF5KTtcblx0Y29uc3QgbmV3VGFza3RpbWUgPSBuZXdFbGVtZW50KFwicFwiLCBcInRhc2stdGltZVwiLCAuLi5BcnJheSgxKSwgdGltZSk7XG5cblx0bmV3VGFza0NoZWNrTWFyay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNvbXBsZXRlID0gIWNvbXBsZXRlO1xuXHRcdG9iai5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuXHRcdHRhc2tzKCkuc3RvcmUoc3RvcmFnZUtleSwgb2JqKTtcblxuXHRcdGlmIChjb21wbGV0ZSkge1xuXHRcdFx0bmV3VGFza0NoZWNrTWFyay5jaGVja2VkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdUYXNrQ2hlY2tNYXJrLmNoZWNrZWQgPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXG5cdGR5bmFtaWNUYXNrQ291bnQocHJvamVjdCk7XG5cblx0Y29uc3QgbW9yZUluZm9JY29uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLCBgaW5mby1pY29uLSR7c3RvcmFnZUtleX1gLCBcImluZm9cIik7XG5cdG1vcmVJbmZvSWNvbi5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLWljb25cIik7XG5cdG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0bW9yZUluZm9JY29uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHR9KTtcblxuXHRuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0bW9yZUluZm9JY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fSk7XG5cblx0bW9yZUluZm9JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZHJvcERvd25EaXYgPSBkcm9wRG93bk9wdGlvbihzdG9yYWdlS2V5KTtcblx0XHRuZXdUYXNrLmFwcGVuZENoaWxkKGRyb3BEb3duRGl2KTtcblx0fSk7XG5cblx0bmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrQ2hlY2tNYXJrKTtcblx0bmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRGV0YWlscyk7XG5cdG5ld1Rhc2tEZXRhaWxzLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG5cdG5ld1Rhc2tEZXRhaWxzLmFwcGVuZENoaWxkKG5ld1Rhc2tOb3Rlc0Rpdik7XG5cdG5ld1Rhc2tOb3Rlc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrTm90ZXMpO1xuXHRuZXdUYXNrRGV0YWlscy5hcHBlbmRDaGlsZChuZXdEYXRlVGltZURpdik7XG5cdG5ld0RhdGVUaW1lRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEYXkpO1xuXHRuZXdEYXRlVGltZURpdi5hcHBlbmRDaGlsZChuZXdUYXNrdGltZSk7XG5cdG5ld1Rhc2suYXBwZW5kQ2hpbGQobW9yZUluZm9JY29uKTtcblxuXHRyZXR1cm4gbmV3VGFzaztcbn1cblxuZnVuY3Rpb24gZHJvcERvd25PcHRpb24oc3RvcmFnZUtleSkge1xuXHRjb25zdCBkcm9wRG93bkRpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkcm9wLWRvd24tY29udGVudFwiLCBcImRyb3AtZG93blwiKTtcblx0Y29uc3QgdXBkYXRlQnV0dG9uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJkcm9wLWRvd24tb3B0aW9uXCIsIGB0YXNrJHtzdG9yYWdlS2V5fS11cGRhdGUtYnV0dG9uYCwgXCJFZGl0XCIpO1xuXHRjb25zdCBkZWxldGVCdXR0b24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcImRyb3AtZG93bi1vcHRpb25cIiwgYHRhc2ske3N0b3JhZ2VLZXl9LWRlbGV0ZS1idXR0b25gLCBcIkRlbGV0ZVwiKTtcblx0dXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cdGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHN0b3JhZ2VLZXkpO1xuXG5cdGxldCBuZXdUYXNrID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAudGFzay1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fV1gKTtcblx0bGV0IG1vcmUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLWljb24tJHtzdG9yYWdlS2V5fWApO1xuXG5cdC8qIFRoaXMgYmVoYXZpb3IgaXMgdW5leHBlY3RlZC4gbG9vcGluZyB0aHJvdWdoIGFsbCBzdG9yYWdla2V5cyBpbnN0ZWFkIG9mIGp1c3QgdGhlIG9uZSBzdG9yYWdlXG4gICAgICAgIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIGNsaWNrZWQgZWxlbWVudC4gZXJyb3Igb2NjdXJzIGluIHRoZSBjb25zb2xlIGF0IGV2ZXJ5IGV4ZWN1dGlvbiAqL1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWRvd25cIikgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPSBtb3JlKSB7XG5cdFx0XHRuZXdUYXNrLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHNlbmRUb0JvZHkoZGlzcGxheU5ld1Rhc2tXaW5kb3coc3RvcmFnZUtleSkpO1xuXHRcdG5ld1Rhc2sucmVtb3ZlQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtYWluVGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10YXNrLWRpdlwiKTtcblx0XHRjb25zdCBkZWxldGVkVGFzayA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnRhc2stbGlzdFtkYXRhLXZhbHVlPSR7c3RvcmFnZUtleX1gKTtcblx0XHRsZXQgcHJvamVjdE5hbWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShzdG9yYWdlS2V5KVtcInByb2plY3ROYW1lXCJdO1xuXHRcdGRlbGV0aW5nVGFza0NvdW50KHByb2plY3ROYW1lKTtcblx0XHR0YXNrcygpLmRlbGV0ZVRhc2soc3RvcmFnZUtleSk7XG5cdFx0bWFpblRhc2tEaXYucmVtb3ZlQ2hpbGQoZGVsZXRlZFRhc2spO1xuXHRcdC8vIG5ld1Rhc2sucmVtb3ZlQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRkcm9wRG93bkRpdi5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXHRkcm9wRG93bkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG5cdHJldHVybiBkcm9wRG93bkRpdjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5ld1Rhc2tXaW5kb3coc3RvcmFnZUtleSA9IG51bGwpIHtcblx0Y29uc3QgbmV3VGFza0NvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwibmV3LXRhc2stZm9ybS1jb250YWluZXJcIik7XG5cdGNvbnN0IG5ld1Rhc2tEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcIm5ldy10YXNrLWZvcm0tZGl2XCIpO1xuXHRjb25zdCB0aXRsZSA9IG5ld0VsZW1lbnQoXCJoMlwiLCBcInBvcC11cC13aW5kb3ctdGl0bGVcIiwgLi4uQXJyYXkoMSksIFwiTmV3IFRhc2tcIik7XG5cblx0Y29uc3QgZm9ybSA9IG5ld0VsZW1lbnQoXCJmb3JtXCIsIC4uLkFycmF5KDEpLCBcInRhc2stZm9ybVwiKTtcblxuXHRjb25zdCB0YXNrTmFtZUlucHV0ID0gbmV3RWxlbWVudChcImlucHV0XCIsIFwiZm9ybS1pbnB1dFwiLCBcInRhc2stbmFtZS1pbnB1dFwiKTtcblx0dGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdGNvbnN0IHRhc2tOYW1lSW5wdXRMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIlRhc2s6XCIpO1xuXHR0YXNrTmFtZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1uYW1lLWlucHV0XCIpO1xuXG5cdGNvbnN0IHRhc2tOb3Rlc0lucHV0ID0gbmV3RWxlbWVudChcImlucHV0XCIsIFwiZm9ybS1pbnB1dFwiLCBcInRhc2stbm90ZXMtaW5wdXRcIik7XG5cdHRhc2tOb3Rlc0lucHV0LnR5cGUgPSBcInRleHRcIjtcblx0Y29uc3QgdGFza05vdGVzSW5wdXRMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIk5vdGVzOlwiKTtcblx0dGFza05vdGVzSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLW5vdGVzLWlucHV0XCIpO1xuXG5cdGNvbnN0IHByb2plY3ROYW1lU2VsZWN0ID0gbmV3RWxlbWVudChcInNlbGVjdFwiLCBcImZvcm0tc2VsZWN0aW9uXCIsIFwicHJvamVjdC1uYW1lLXNlbGVjdGlvblwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGxvY2FsU3RvcmFnZS5rZXkoaSk7IGkrKykge1xuXHRcdGxldCBzdG9yYWdlS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblx0XHRsZXQgc3RvcmFnZU9iamVjdCA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKHN0b3JhZ2VLZXkpO1xuXHRcdGlmIChzdG9yYWdlT2JqZWN0W1widHlwZVwiXSA9PSBcInByb2plY3RcIikge1xuXHRcdFx0Y29uc3QgcHJvamVjdE5hbWVTZWxlY3RPcHRpb24gPSBuZXdFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0cHJvamVjdE5hbWVTZWxlY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgc3RvcmFnZU9iamVjdFtcInByb2plY3ROYW1lXCJdKTtcblx0XHRcdHByb2plY3ROYW1lU2VsZWN0T3B0aW9uLnRleHRDb250ZW50ID0gc3RvcmFnZU9iamVjdFtcInByb2plY3ROYW1lXCJdO1xuXHRcdFx0cHJvamVjdE5hbWVTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTZWxlY3RPcHRpb24pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHByb2plY3ROYW1lU2VsZWN0TGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJTZWxlY3QgYSBwcm9qZWN0XCIpO1xuXHRwcm9qZWN0TmFtZVNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbmFtZS1zZWxlY3Rpb25cIik7XG5cblx0Y29uc3QgZGF0ZURpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkYXRlLXRpbWVcIiwgXCJkYXRlXCIpO1xuXG5cdGNvbnN0IGRhdGVSYWRpb1llcyA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCAuLi5BcnJheSgxKSwgXCJpbmNsdWRlLWRhdGVcIik7XG5cdGRhdGVSYWRpb1llcy50eXBlID0gXCJSYWRpb1wiO1xuXHRjb25zdCBkYXRlUmFkaW9ZZXNMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIlllc1wiKTtcblx0ZGF0ZVJhZGlvWWVzTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5jbHVkZS1kYXRlXCIpO1xuXG5cdGNvbnN0IGRhdGVSYWRpb05vID0gbmV3RWxlbWVudChcImlucHV0XCIsIC4uLkFycmF5KDEpLCBcImRvbnQtaW5jbHVkZS1kYXRlXCIpO1xuXHRkYXRlUmFkaW9Oby50eXBlID0gXCJSYWRpb1wiO1xuXHRkYXRlUmFkaW9Oby5jaGVja2VkID0gdHJ1ZTtcblx0Y29uc3QgZGF0ZVJhZGlvTm9MYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIk5vXCIpO1xuXHRkYXRlUmFkaW9Ob0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRvbnQtaW5jbHVkZS1kYXRlXCIpO1xuXG5cdGNvbnN0IGRhdGVJbnB1dCA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImZvcm0taW5wdXRcIiwgXCJ0YXNrLWRhdGUtaW5wdXRcIik7XG5cdGRhdGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdGRhdGVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cdGNvbnN0IGRhdGVJbnB1dExhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiRGF0ZTpcIik7XG5cdGRhdGVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stZGF0ZS1pbnB1dFwiKTtcblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cdGNvbnN0IHRpbWVEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwiZGF0ZS10aW1lXCIsIFwidGltZVwiKTtcblxuXHRjb25zdCB0aW1lUmFkaW9ZZXMgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgLi4uQXJyYXkoMSksIFwiaW5jbHVkZS10aW1lXCIpO1xuXHR0aW1lUmFkaW9ZZXMudHlwZSA9IFwiUmFkaW9cIjtcblx0Y29uc3QgdGltZVJhZGlvWWVzTGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJZZXNcIik7XG5cdHRpbWVSYWRpb1llc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImluY2x1ZGUtdGltZVwiKTtcblxuXHRjb25zdCB0aW1lUmFkaW9ObyA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCAuLi5BcnJheSgxKSwgXCJkb250LWluY2x1ZGUtdGltZVwiKTtcblx0dGltZVJhZGlvTm8udHlwZSA9IFwiUmFkaW9cIjtcblx0dGltZVJhZGlvTm8uY2hlY2tlZCA9IHRydWU7XG5cdGNvbnN0IHRpbWVSYWRpb05vTGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJOb1wiKTtcblx0dGltZVJhZGlvTm9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkb250LWluY2x1ZGUtdGltZVwiKTtcblxuXHRjb25zdCB0aW1lSW5wdXQgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgXCJmb3JtLWlucHV0XCIsIFwidGFzay10aW1lLWlucHV0XCIpO1xuXHR0aW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHR0aW1lSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRjb25zdCB0aW1lSW5wdXRMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIlRpbWU6XCIpO1xuXHR0aW1lSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLXRpbWUtaW5wdXRcIik7XG5cblx0Y29uc3QgYnV0dG9uU2VsZWN0b3JEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcImJ1dHRvbi1zZWxlY3Rvci1kaXZcIik7XG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJidXR0b25cIiwgXCJ0YXNrLWNhbmNlbC1idXR0b25cIiwgXCJDYW5jZWxcIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImJ1dHRvblwiLCBcInRhc2stc3VibWl0LWJ1dHRvblwiKTtcblx0c3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuXHRzdWJtaXRCdXR0b24udmFsdWUgPSBcIk9LXCI7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWZvcm1cIik7XG5cblx0aWYgKHN0b3JhZ2VLZXkpIHtcblx0XHR0YXNrTmFtZUlucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcInRhc2tOYW1lXCJdO1xuXHRcdHRhc2tOb3Rlc0lucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcIm5vdGVzXCJdO1xuXHRcdHByb2plY3ROYW1lU2VsZWN0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcInByb2plY3ROYW1lXCJdO1xuXG5cdFx0aWYgKHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJkYXlcIl0pIHtcblx0XHRcdGRhdGVSYWRpb1llcy5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdGRhdGVSYWRpb05vLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdGRhdGVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0ZGF0ZUlucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcImRheVwiXTtcblx0XHR9XG5cdFx0aWYgKHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJ0aW1lXCJdKSB7XG5cdFx0XHR0aW1lUmFkaW9ZZXMuY2hlY2tlZCA9IHRydWU7XG5cdFx0XHR0aW1lUmFkaW9Oby5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR0aW1lSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHRpbWVJbnB1dC52YWx1ZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJ0aW1lXCJdO1xuXHRcdH1cblx0fVxuXG5cdG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG5cdG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHRuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXHRmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXRMYWJlbCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTZWxlY3RMYWJlbCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTZWxlY3QpO1xuXHRmb3JtLmFwcGVuZENoaWxkKHRhc2tOb3Rlc0lucHV0TGFiZWwpO1xuXHRmb3JtLmFwcGVuZENoaWxkKHRhc2tOb3Rlc0lucHV0KTtcblx0Zm9ybS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXRMYWJlbCk7XG5cdGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlUmFkaW9ZZXNMYWJlbCk7XG5cdGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZVJhZGlvWWVzKTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlUmFkaW9Ob0xhYmVsKTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlUmFkaW9Obyk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQodGltZURpdik7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZUlucHV0TGFiZWwpO1xuXHR0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZVJhZGlvWWVzTGFiZWwpO1xuXHR0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVSYWRpb1llcyk7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZVJhZGlvTm9MYWJlbCk7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZVJhZGlvTm8pO1xuXHRuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvblNlbGVjdG9yRGl2KTtcblx0YnV0dG9uU2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblx0YnV0dG9uU2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuXHRkYXRlUmFkaW9ZZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoZGF0ZVJhZGlvWWVzLmNoZWNrZWQpIHtcblx0XHRcdGRhdGVSYWRpb05vLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdGRhdGVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cblx0ZGF0ZVJhZGlvTm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoZGF0ZVJhZGlvTm8uY2hlY2tlZCkge1xuXHRcdFx0ZGF0ZVJhZGlvWWVzLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdGRhdGVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblxuXHR0aW1lUmFkaW9ZZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAodGltZVJhZGlvWWVzLmNoZWNrZWQpIHtcblx0XHRcdHRpbWVSYWRpb05vLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdHRpbWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cblx0dGltZVJhZGlvTm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAodGltZVJhZGlvTm8uY2hlY2tlZCkge1xuXHRcdFx0dGltZVJhZGlvWWVzLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdHRpbWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblxuXHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjbG9zZVdpbmRvdyhuZXdUYXNrQ29udGFpbmVyKTtcblx0fSk7XG5cblx0c3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10YXNrLWRpdlwiKTtcblx0XHRsZXQgdGFza05hbWVWYWx1ZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG5cdFx0bGV0IHRhc2tQcm9qZWN0TmFtZVZhbHVlID0gcHJvamVjdE5hbWVTZWxlY3QudmFsdWU7XG5cdFx0bGV0IHRhc2tOb3Rlc1ZhbHVlID0gdGFza05vdGVzSW5wdXQudmFsdWU7XG5cdFx0bGV0IHRhc2tEYXRlVmFsdWUgPSBcIlwiO1xuXHRcdGxldCB0YXNrVGltZVZhbHVlID0gXCJcIjtcblx0XHRpZiAoZGF0ZUlucHV0KSB7XG5cdFx0XHR0YXNrRGF0ZVZhbHVlID0gZGF0ZUlucHV0LnZhbHVlO1xuXHRcdH1cblx0XHRpZiAodGltZUlucHV0KSB7XG5cdFx0XHR0YXNrVGltZVZhbHVlID0gdGltZUlucHV0LnZhbHVlO1xuXHRcdH1cblx0XHRsZXQgaW5zdGFudGlhdGVUYXNrT2JqZWN0ID0gdGFza3ModGFza05hbWVWYWx1ZSwgdGFza1Byb2plY3ROYW1lVmFsdWUsIHRhc2tOb3Rlc1ZhbHVlLCB0YXNrRGF0ZVZhbHVlLCB0YXNrVGltZVZhbHVlKTtcblx0XHRpZiAoc3RvcmFnZUtleSkge1xuXHRcdFx0Y29uc3QgdXBkYXRlVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWxpc3RbZGF0YS12YWx1ZT0ke3N0b3JhZ2VLZXl9XWApLmNoaWxkTm9kZXNbMV07XG5cdFx0XHR1cGRhdGVUYXNrRGl2LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB0YXNrTmFtZVZhbHVlO1xuXHRcdFx0dXBkYXRlVGFza0Rpdi5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB0YXNrTm90ZXNWYWx1ZTtcblx0XHRcdHVwZGF0ZVRhc2tEaXYuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdGFza0RhdGVWYWx1ZTtcblx0XHRcdHVwZGF0ZVRhc2tEaXYuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gdGFza1RpbWVWYWx1ZTtcblx0XHRcdGxldCBvbGRQcm9qZWN0TmFtZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKHN0b3JhZ2VLZXkpW1wicHJvamVjdE5hbWVcIl07XG5cdFx0XHRkeW5hbWljVGFza0NvdW50KHRhc2tQcm9qZWN0TmFtZVZhbHVlLCBzdG9yYWdlS2V5LCBvbGRQcm9qZWN0TmFtZSk7XG5cdFx0XHRpbnN0YW50aWF0ZVRhc2tPYmplY3QudXBkYXRlKHN0b3JhZ2VLZXksIHRhc2tQcm9qZWN0TmFtZVZhbHVlLCB0YXNrTmFtZVZhbHVlLCB0YXNrTm90ZXNWYWx1ZSwgdGFza0RhdGVWYWx1ZSwgdGFza1RpbWVWYWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBuZXdUYXNrT2JqZWN0ID0gaW5zdGFudGlhdGVUYXNrT2JqZWN0LmNyZWF0ZSgpO1xuXHRcdFx0bGV0IG5ld0VsZW1lbnQgPSBuZXdUYXNrKG5ld1Rhc2tPYmplY3QpXG5cdFx0XHR0YXNrRGl2LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXHRcdH1cblxuXHRcdGNsb3NlV2luZG93KG5ld1Rhc2tDb250YWluZXIpO1xuXHR9KTtcblxuXHRyZXR1cm4gbmV3VGFza0NvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgbmV3VGFzaywgZHJvcERvd25PcHRpb24sIGRpc3BsYXlOZXdUYXNrV2luZG93IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xuaW1wb3J0IHsgaG9tZSwgcmVjYWxsIH0gZnJvbSBcIi4vbW9kdWxlcy9lbGVtZW50QnVpbGRlclwiO1xuaW1wb3J0ICogYXMgcGFnZVJlbmRlciBmcm9tIFwiLi9tb2R1bGVzL0RPTUNvbnRyb2xsZXJcIjtcblxuY29uc3QgbWFpbiA9IHBhZ2VSZW5kZXIubmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRhaW5lclwiLCBcImNvbnRlbnRcIik7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbi8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcImhleVwiKVxuLy8gfSk7XG5cbnBhZ2VSZW5kZXIubW9kdWxlUmVuZGVyKGhvbWUoKSwgbWFpbik7XG5wYWdlUmVuZGVyLnNlbmRUb0JvZHkobWFpbik7XG5yZWNhbGwoKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==