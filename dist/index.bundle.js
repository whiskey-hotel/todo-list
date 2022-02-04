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
/* harmony import */ var _formWindows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formWindows */ "./src/modules/formWindows.js");
/* harmony import */ var _taskHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskHandler */ "./src/modules/taskHandler.js");
/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectHandler */ "./src/modules/projectHandler.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _taskCountTracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskCountTracking */ "./src/modules/taskCountTracking.js");
/* harmony import */ var _projectLists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectLists */ "./src/modules/projectLists.js");








function home() {
	const projectsContainer = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "projects-container");
	const projectsDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "projects-div");
	const projectHeader = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "header");
	const projectTitle = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h1", "title", ...Array(1), "My Projects");
	const mainList = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "project-list", "all-list");
	mainList.setAttribute("data-value", "P0");
	_storage__WEBPACK_IMPORTED_MODULE_4__.pageState.populateProjectStorage("P0", "All", 0, "project");
	const listTitle = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h3", "project-title", ...Array(1), "All");
	const numberOfTasks = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("span", "number-of-tasks", ...Array(1), "0");

	const taskContainer = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "task-container");
	const taskDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "task-div");
	const taskHeader = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", "header");
	const taskTitle = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h2", "title", ...Array(1), "All");
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
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.sendToBody)((0,_formWindows__WEBPACK_IMPORTED_MODULE_1__.displayNewProjectWindow)());
	});

	addTaskIcon.addEventListener("click", function () {
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.sendToBody)((0,_formWindows__WEBPACK_IMPORTED_MODULE_1__.displayNewTaskWindow)());
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
		let storageObject = _storage__WEBPACK_IMPORTED_MODULE_4__.pageState.getStorage(storageKey);
		if (storageObject["type"] == "project" && storageKey != "P0") {
			let restoredProject = (0,_projectHandler__WEBPACK_IMPORTED_MODULE_3__.newProject)(storageObject["projectName"], storageKey, storageObject["numberOfTasks"]);
			projectsDiv.appendChild(restoredProject);
		} else if (storageObject["type"] == "task") {
			totalNumberOfTasks += 1;

			let restoredTask = (0,_taskHandler__WEBPACK_IMPORTED_MODULE_2__.newTask)(
				storageKey,
				storageObject["projectName"],
				storageObject["taskName"],
				storageObject["notes"],
				storageObject["day"],
				storageObject["time"],
				storageObject["complete"]
			);
			taskDiv.appendChild(restoredTask);
		}
	}
	allProjectCount.childNodes[1].textContent = totalNumberOfTasks;
	(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_5__.staticTaskCount)();
}




/***/ }),

/***/ "./src/modules/formWindows.js":
/*!************************************!*\
  !*** ./src/modules/formWindows.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayNewProjectWindow": () => (/* binding */ displayNewProjectWindow),
/* harmony export */   "displayNewTaskWindow": () => (/* binding */ displayNewTaskWindow)
/* harmony export */ });
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMController */ "./src/modules/DOMController.js");
/* harmony import */ var _projectLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectLists */ "./src/modules/projectLists.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _taskCountTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskCountTracking */ "./src/modules/taskCountTracking.js");





function displayNewProjectWindow(storageKey = null) {
	const newProjectContainer = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "new-project-form-container");
	const newProjectDiv = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("div", ...Array(1), "new-project-form-div");
	const title = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("h2", "pop-up-window-title", ...Array(1), "New Project");
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
	newProjectDiv.appendChild(projectNameInputLabel);
	newProjectDiv.appendChild(projectNameInput);
	newProjectDiv.appendChild(buttonSelectorDiv);
	buttonSelectorDiv.appendChild(cancelButton);
	buttonSelectorDiv.appendChild(submitButton);

	cancelButton.addEventListener("click", function () {
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.closeWindow)(newProjectContainer);
	});

	submitButton.addEventListener("click", function () {
		const projectsDiv = document.getElementById("projects-div");
		let projectNameValue = projectNameInput.value;
		let instantiateProjectObject = (0,_projectLists__WEBPACK_IMPORTED_MODULE_1__.projects)(projectNameValue);
		if (storageKey) {
			const updateProjectDiv = document.body.querySelector(`.project-list[data-value=${storageKey}]`);
			updateProjectDiv.childNodes[0].textContent = projectNameValue;
			instantiateProjectObject.update(storageKey, projectNameValue);
		} else {
			let newProject = instantiateProjectObject.create();
			projectsDiv.appendChild(newProject);
		}

		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.closeWindow)(newProjectContainer);
	});

	return newProjectContainer;
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
	const dataAtts = document.getElementsByClassName("project-list");
	Array.from(dataAtts).forEach((d) => {
		const projectNameSelectOption = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.newElement)("option");
		const nameFromStorage = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(d.dataset.value);
		projectNameSelectOption.setAttribute("value", nameFromStorage.projectName);
		projectNameSelectOption.textContent = nameFromStorage.projectName;
		projectNameSelect.appendChild(projectNameSelectOption);
	});

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
		let instantiateTaskObject = (0,_projectLists__WEBPACK_IMPORTED_MODULE_1__.tasks)(taskNameValue, taskProjectNameValue, taskNotesValue, taskDateValue, taskTimeValue);
		if (storageKey) {
			const updateTaskDiv = document.querySelector(`.task-list[data-value=${storageKey}]`).childNodes[1];
			updateTaskDiv.childNodes[0].textContent = taskNameValue;
			updateTaskDiv.childNodes[1].childNodes[0].textContent = taskNotesValue;
			updateTaskDiv.childNodes[2].childNodes[0].textContent = taskDateValue;
			updateTaskDiv.childNodes[2].childNodes[1].textContent = taskTimeValue;
			let oldProjectName = _storage__WEBPACK_IMPORTED_MODULE_2__.pageState.getStorage(storageKey)['projectName']
			;(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_3__.dynamicTaskCount)(taskProjectNameValue, storageKey, oldProjectName);
			instantiateTaskObject.update(storageKey, taskProjectNameValue, taskNameValue, taskNotesValue, taskDateValue, taskTimeValue);
		} else {
			let newTask = instantiateTaskObject.create();
			taskDiv.appendChild(newTask);
		}

		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.closeWindow)(newTaskContainer);
	});

	return newTaskContainer;
}




/***/ }),

/***/ "./src/modules/projectHandler.js":
/*!***************************************!*\
  !*** ./src/modules/projectHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMController */ "./src/modules/DOMController.js");
/* harmony import */ var _formWindows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formWindows */ "./src/modules/formWindows.js");
/* harmony import */ var _projectLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectLists */ "./src/modules/projectLists.js");





function newProject(name, storageKey, numberOfTasks) {
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
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.sendToBody)((0,_formWindows__WEBPACK_IMPORTED_MODULE_1__.displayNewProjectWindow)(storageKey));
		newProject.removeChild(dropDownDiv);
	});

	deleteButton.addEventListener("click", function () {
		const mainProjectsDiv = document.getElementById("projects-div");
		const deletedProject = document.body.querySelector(`.project-list[data-value=${storageKey}`);
		(0,_projectLists__WEBPACK_IMPORTED_MODULE_2__.projects)().deleteProject(storageKey);
		mainProjectsDiv.removeChild(deletedProject);
	});

	dropDownDiv.appendChild(updateButton);
	dropDownDiv.appendChild(deleteButton);

	return dropDownDiv;
}




/***/ }),

/***/ "./src/modules/projectLists.js":
/*!*************************************!*\
  !*** ./src/modules/projectLists.js ***!
  \*************************************/
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
		let storageKey = keyGenerator();
		store(storageKey, name, numberOfTasks, type);
		return (0,_projectHandler__WEBPACK_IMPORTED_MODULE_2__.newProject)(name, storageKey, numberOfTasks);
	};

	const update = function (key, projectName) {
		let datbaseObj = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(key);

		datbaseObj && _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateProjectStorage(key, projectName, datbaseObj["numberOfTasks"], datbaseObj["type"]);

		return;
	};

    const deleteProject = function(key){
        _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.deleteStorage(key);
    }

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

	const store = function (key, projectName, numberOfTasks, type) {
		_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateProjectStorage(key, projectName, numberOfTasks, type);
	};

	return { getName, create, update, deleteProject, updateNumberOfTasks };
};

const tasks = (task, project = "All", notes = "", day = "", time = "") => {
	const type = "task";
	let complete = false;
    
	const create = function () {
		let storageKey = keyGenerator();
		store(storageKey, type, complete);
		return (0,_taskHandler__WEBPACK_IMPORTED_MODULE_1__.newTask)(storageKey, project, task, notes, day, time, complete);
	};

	const update = function (key, projectName, taskTitle, notes, day, time) {
		let datbaseObj = _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.getStorage(key);

		datbaseObj && _storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateTaskStorage(key, projectName, taskTitle, notes, day, time, datbaseObj["type"], datbaseObj["complete"]);

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

	const store = function (key, type, complete) {
		_storage__WEBPACK_IMPORTED_MODULE_0__.pageState.populateTaskStorage(key, project, task, notes, day, time, type, complete);
	};

	return { create, update, deleteTask, store };
};




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
	const populateProjectStorage = (objectKey = "projects", name, count, type) => {
		localStorage.setItem(
			objectKey,
			JSON.stringify({
                type: type,
				projectName: name,
				numberOfTasks: count,
			})
		);
	};

    const populateTaskStorage = (objectKey = "tasks", name, taskTitle, notes, day, time, type, complete) => {
		localStorage.setItem(
			objectKey,
			JSON.stringify({
                type: type,
				projectName: name,
                taskName: taskTitle,
                notes: notes,
                day: day,
                time: time,
                complete: complete,
			})
		);
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
/* harmony export */   "dropDownOption": () => (/* binding */ dropDownOption)
/* harmony export */ });
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMController */ "./src/modules/DOMController.js");
/* harmony import */ var _formWindows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formWindows */ "./src/modules/formWindows.js");
/* harmony import */ var _projectLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectLists */ "./src/modules/projectLists.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _taskCountTracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskCountTracking */ "./src/modules/taskCountTracking.js");






function newTask(storageKey, project, task, notes = "", day = "", time = "", complete) {
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
		(0,_projectLists__WEBPACK_IMPORTED_MODULE_2__.tasks)(task, project, notes, day, time).store(storageKey, "task", complete);

		if (complete) {
			newTaskCheckMark.checked;
		} else {
			newTaskCheckMark.checked = false;
		}
	});

	(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_4__.dynamicTaskCount)(project);

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
		(0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.sendToBody)((0,_formWindows__WEBPACK_IMPORTED_MODULE_1__.displayNewTaskWindow)(storageKey));
		newTask.removeChild(dropDownDiv);
	});

	deleteButton.addEventListener("click", function () {
		const mainTaskDiv = document.getElementById("main-task-div");
		const deletedTask = document.body.querySelector(`.task-list[data-value=${storageKey}`);
		let projectName = _storage__WEBPACK_IMPORTED_MODULE_3__.pageState.getStorage(storageKey)["projectName"];
		(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_4__.deletingTaskCount)(projectName);
		(0,_projectLists__WEBPACK_IMPORTED_MODULE_2__.tasks)().deleteTask(storageKey);
		mainTaskDiv.removeChild(deletedTask);
		// newTask.removeChild(dropDownDiv);
	});

	dropDownDiv.appendChild(updateButton);
	dropDownDiv.appendChild(deleteButton);

	return dropDownDiv;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwwREFBVTtBQUMvQixzQkFBc0IsMERBQVUsb0NBQW9DLFdBQVc7QUFDL0Usc0JBQXNCLDBEQUFVLG9DQUFvQyxXQUFXO0FBQy9FO0FBQ0E7O0FBRUEsb0VBQW9FLFdBQVc7QUFDL0Usc0RBQXNELFdBQVc7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxFQUFFLDBEQUFVLENBQUMsa0VBQW9CO0FBQ2pDO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsMkVBQTJFLFdBQVc7QUFDdEYsb0JBQW9CLDBEQUFvQjtBQUN4QyxFQUFFLHFFQUFpQjtBQUNuQixFQUFFLG9EQUFLO0FBQ1A7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVtQzs7Ozs7OztVQ3RHbkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ29DO0FBQ0Y7O0FBRXRELGFBQWEsOERBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosZ0VBQXVCLENBQUMsNkRBQUk7QUFDNUIsOERBQXFCO0FBQ3JCLCtEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2VsZW1lbnRCdWlsZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm1XaW5kb3dzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tDb3VudFRyYWNraW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG5cXHRnYXA6IDEuMjVlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubnVtYmVyLW9mLXRhc2tzLFxcbi5lZGl0IHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuXFx0Ym9yZGVyOiBibGFjayAycHggc29saWQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kcm9wLWRvd24tb3B0aW9uLFxcbi5tb3JlLWluZm8taWNvbixcXG4jYWRkLXRhc2staWNvbixcXG4jYWRkLXByb2plY3QtZGl2OmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctdGFzay1mb3JtLWNvbnRhaW5lcixcXG4jbmV3LXByb2plY3QtZm9ybS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTEsIDExMiwgMTMxLCAwLjQpO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHotaW5kZXg6IDk5OTtcXG5cXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7ICovXFxuXFx0LyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7ICovXFxufVxcblxcbiNuZXctdGFzay1mb3JtLWRpdixcXG4jbmV3LXByb2plY3QtZm9ybS1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRib3JkZXI6IHNvbGlkO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXG5cXHRwYWRkaW5nOiAwLjc1ZW07XFxufVxcblxcbi50YXNrLWxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vcmUtaW5mby1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmRyb3AtZG93bi1jb250ZW50e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcC1kb3duLW9wdGlvbntcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbn1cXG5cXG4uZHJvcC1kb3duLW9wdGlvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCA7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Ozs7Q0FJQyxlQUFlO0FBQ2hCOztBQUVBOztDQUVDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix5Q0FBeUM7Q0FDekMsWUFBWTtDQUNaLFlBQVk7Q0FDWixlQUFlO0NBQ2YsTUFBTTtDQUNOLE9BQU87Q0FDUCxZQUFZO0NBQ1osMENBQTBDO0NBQzFDLGdDQUFnQztBQUNqQzs7QUFFQTs7Q0FFQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcblxcdGdhcDogMS4yNWVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5udW1iZXItb2YtdGFza3MsXFxuLmVkaXQge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG5cXHRib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRyb3AtZG93bi1vcHRpb24sXFxuLm1vcmUtaW5mby1pY29uLFxcbiNhZGQtdGFzay1pY29uLFxcbiNhZGQtcHJvamVjdC1kaXY6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy10YXNrLWZvcm0tY29udGFpbmVyLFxcbiNuZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MSwgMTEyLCAxMzEsIDAuNCk7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0ei1pbmRleDogOTk5O1xcblxcdC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cXG5cXHQvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG59XFxuXFxuI25ldy10YXNrLWZvcm0tZGl2LFxcbiNuZXctcHJvamVjdC1mb3JtLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJvcmRlcjogc29saWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMnB4O1xcblxcdHBhZGRpbmc6IDAuNzVlbTtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9yZS1pbmZvLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZHJvcC1kb3duLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wLWRvd24tb3B0aW9ue1xcbiAgICBwYWRkaW5nOiAwLjI1ZW07XFxufVxcblxcbi5kcm9wLWRvd24tb3B0aW9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkIDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbmV3RWxlbWVudChlbGVtZW50ID0gXCJcIiwgY2xhc3NOYW1lID0gXCJcIiwgZWxlbWVudElEID0gXCJcIiwgdGV4dCA9IFwiXCIsIGhyZWYgPSBcIlwiKSB7XG5cdGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuXHRjbGFzc05hbWUgPyAobmV3RWxlbWVudC5jbGFzc0xpc3QgPSBjbGFzc05hbWUpIDogbnVsbDtcblx0ZWxlbWVudElEID8gKG5ld0VsZW1lbnQuaWQgPSBlbGVtZW50SUQpIDogbnVsbDtcblx0dGV4dCA/IChuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dCkgOiBudWxsO1xuXHRpZiAoZWxlbWVudCA9PSBcImFcIikge1xuXHRcdGhyZWYgPyAobmV3RWxlbWVudC5ocmVmID0gaHJlZikgOiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNlbmRUb0JvZHkoSFRNTCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChIVE1MKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcblx0d2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG5cdFx0cGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBtb2R1bGVSZW5kZXIob2JqLCBwYXJlbnROb2RlKSB7XG5cdHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50Tm9kZSk7XG5cdGZvciAobGV0IHggaW4gb2JqKSB7XG5cdFx0cGFyZW50Tm9kZS5hcHBlbmRDaGlsZChvYmpbeF0pO1xuXHR9XG59XG5cbmNvbnN0IGNsb3NlV2luZG93ID0gKGVsZW1lbnQpID0+IHtcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7IG5ld0VsZW1lbnQsIHNlbmRUb0JvZHksIHJlbW92ZUFsbENoaWxkTm9kZXMsIG1vZHVsZVJlbmRlciwgY2xvc2VXaW5kb3cgfTtcbiIsImltcG9ydCB7IG5ld0VsZW1lbnQsIHNlbmRUb0JvZHkgfSBmcm9tIFwiLi9ET01Db250cm9sbGVyXCI7XG5pbXBvcnQgeyBkaXNwbGF5TmV3UHJvamVjdFdpbmRvdywgZGlzcGxheU5ld1Rhc2tXaW5kb3cgfSBmcm9tIFwiLi9mb3JtV2luZG93c1wiO1xuaW1wb3J0IHsgbmV3VGFzayB9IGZyb20gXCIuL3Rhc2tIYW5kbGVyXCI7XG5pbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdEhhbmRsZXJcIjtcbmltcG9ydCB7IHBhZ2VTdGF0ZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHN0YXRpY1Rhc2tDb3VudCB9IGZyb20gXCIuL3Rhc2tDb3VudFRyYWNraW5nXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RMaXN0c1wiO1xuXG5mdW5jdGlvbiBob21lKCkge1xuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG5cdGNvbnN0IHByb2plY3RzRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJwcm9qZWN0cy1kaXZcIik7XG5cdGNvbnN0IHByb2plY3RIZWFkZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyXCIpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBuZXdFbGVtZW50KFwiaDFcIiwgXCJ0aXRsZVwiLCAuLi5BcnJheSgxKSwgXCJNeSBQcm9qZWN0c1wiKTtcblx0Y29uc3QgbWFpbkxpc3QgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1saXN0XCIsIFwiYWxsLWxpc3RcIik7XG5cdG1haW5MaXN0LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJQMFwiKTtcblx0cGFnZVN0YXRlLnBvcHVsYXRlUHJvamVjdFN0b3JhZ2UoXCJQMFwiLCBcIkFsbFwiLCAwLCBcInByb2plY3RcIik7XG5cdGNvbnN0IGxpc3RUaXRsZSA9IG5ld0VsZW1lbnQoXCJoM1wiLCBcInByb2plY3QtdGl0bGVcIiwgLi4uQXJyYXkoMSksIFwiQWxsXCIpO1xuXHRjb25zdCBudW1iZXJPZlRhc2tzID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJudW1iZXItb2YtdGFza3NcIiwgLi4uQXJyYXkoMSksIFwiMFwiKTtcblxuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcInRhc2stY29udGFpbmVyXCIpO1xuXHRjb25zdCB0YXNrRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJ0YXNrLWRpdlwiKTtcblx0Y29uc3QgdGFza0hlYWRlciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIik7XG5cdGNvbnN0IHRhc2tUaXRsZSA9IG5ld0VsZW1lbnQoXCJoMlwiLCBcInRpdGxlXCIsIC4uLkFycmF5KDEpLCBcIkFsbFwiKTtcblx0Y29uc3QgdGFza0xpc3REaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwidGFzay1saXN0LWRpdlwiLCBcIm1haW4tdGFzay1kaXZcIik7XG5cblx0Y29uc3QgYWRkUHJvamVjdERpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwiYWRkLXByb2plY3QtZGl2XCIpO1xuXHRjb25zdCBhZGRQcm9qZWN0SWNvbiA9IG5ld0VsZW1lbnQoXCJzcGFuXCIsIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIiwgXCJhZGQtcHJvamVjdC1pY29uXCIsIFwiYWRkX2NpcmNsZV9vdXRsaW5lXCIpO1xuXHRjb25zdCBhZGRQcm9qZWN0ID0gbmV3RWxlbWVudChcInNwYW5cIiwgLi4uQXJyYXkoMSksIFwiYWRkLXByb2plY3RcIiwgXCJBZGQgUHJvamVjdFwiKTtcblxuXHRjb25zdCBhZGRUYXNrRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJhZGQtdGFzay1kaXZcIik7XG5cdGNvbnN0IGFkZFRhc2tJY29uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLCBcImFkZC10YXNrLWljb25cIiwgXCJhZGRfY2lyY2xlXCIpO1xuXG5cdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cdHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblx0cHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQobWFpbkxpc3QpO1xuXHRtYWluTGlzdC5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuXHRtYWluTGlzdC5hcHBlbmRDaGlsZChudW1iZXJPZlRhc2tzKTtcblx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpdik7XG5cdGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEljb24pO1xuXHRhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG5cdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cdHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG5cdHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG5cdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XG5cdGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0ljb24pO1xuXG5cdGFkZFByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRzZW5kVG9Cb2R5KGRpc3BsYXlOZXdQcm9qZWN0V2luZG93KCkpO1xuXHR9KTtcblxuXHRhZGRUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHNlbmRUb0JvZHkoZGlzcGxheU5ld1Rhc2tXaW5kb3coKSk7XG5cdH0pO1xuXG5cdHJldHVybiB7IHByb2plY3RzQ29udGFpbmVyLCB0YXNrQ29udGFpbmVyIH07XG59XG5cbmZ1bmN0aW9uIHJlY2FsbCgpIHtcblx0Y29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpdlwiKTtcblx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10YXNrLWRpdlwiKTtcblx0bGV0IHRvdGFsTnVtYmVyT2ZUYXNrcyA9IDA7XG5cdGNvbnN0IGFsbFByb2plY3RDb3VudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnByb2plY3QtbGlzdFtkYXRhLXZhbHVlPVAwXWApO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHN0b3JhZ2VLZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXHRcdGxldCBzdG9yYWdlT2JqZWN0ID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoc3RvcmFnZUtleSk7XG5cdFx0aWYgKHN0b3JhZ2VPYmplY3RbXCJ0eXBlXCJdID09IFwicHJvamVjdFwiICYmIHN0b3JhZ2VLZXkgIT0gXCJQMFwiKSB7XG5cdFx0XHRsZXQgcmVzdG9yZWRQcm9qZWN0ID0gbmV3UHJvamVjdChzdG9yYWdlT2JqZWN0W1wicHJvamVjdE5hbWVcIl0sIHN0b3JhZ2VLZXksIHN0b3JhZ2VPYmplY3RbXCJudW1iZXJPZlRhc2tzXCJdKTtcblx0XHRcdHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHJlc3RvcmVkUHJvamVjdCk7XG5cdFx0fSBlbHNlIGlmIChzdG9yYWdlT2JqZWN0W1widHlwZVwiXSA9PSBcInRhc2tcIikge1xuXHRcdFx0dG90YWxOdW1iZXJPZlRhc2tzICs9IDE7XG5cblx0XHRcdGxldCByZXN0b3JlZFRhc2sgPSBuZXdUYXNrKFxuXHRcdFx0XHRzdG9yYWdlS2V5LFxuXHRcdFx0XHRzdG9yYWdlT2JqZWN0W1wicHJvamVjdE5hbWVcIl0sXG5cdFx0XHRcdHN0b3JhZ2VPYmplY3RbXCJ0YXNrTmFtZVwiXSxcblx0XHRcdFx0c3RvcmFnZU9iamVjdFtcIm5vdGVzXCJdLFxuXHRcdFx0XHRzdG9yYWdlT2JqZWN0W1wiZGF5XCJdLFxuXHRcdFx0XHRzdG9yYWdlT2JqZWN0W1widGltZVwiXSxcblx0XHRcdFx0c3RvcmFnZU9iamVjdFtcImNvbXBsZXRlXCJdXG5cdFx0XHQpO1xuXHRcdFx0dGFza0Rpdi5hcHBlbmRDaGlsZChyZXN0b3JlZFRhc2spO1xuXHRcdH1cblx0fVxuXHRhbGxQcm9qZWN0Q291bnQuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IHRvdGFsTnVtYmVyT2ZUYXNrcztcblx0c3RhdGljVGFza0NvdW50KCk7XG59XG5cbmV4cG9ydCB7IGhvbWUsIHJlY2FsbCB9O1xuIiwiaW1wb3J0IHsgbmV3RWxlbWVudCwgY2xvc2VXaW5kb3cgfSBmcm9tIFwiLi9ET01Db250cm9sbGVyXCI7XG5pbXBvcnQgeyBwcm9qZWN0cywgdGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdHNcIjtcbmltcG9ydCB7IHBhZ2VTdGF0ZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGR5bmFtaWNUYXNrQ291bnQgfSBmcm9tIFwiLi90YXNrQ291bnRUcmFja2luZ1wiO1xuXG5mdW5jdGlvbiBkaXNwbGF5TmV3UHJvamVjdFdpbmRvdyhzdG9yYWdlS2V5ID0gbnVsbCkge1xuXHRjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJuZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgbmV3UHJvamVjdERpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwibmV3LXByb2plY3QtZm9ybS1kaXZcIik7XG5cdGNvbnN0IHRpdGxlID0gbmV3RWxlbWVudChcImgyXCIsIFwicG9wLXVwLXdpbmRvdy10aXRsZVwiLCAuLi5BcnJheSgxKSwgXCJOZXcgUHJvamVjdFwiKTtcblx0Y29uc3QgcHJvamVjdE5hbWVJbnB1dExhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiTmFtZTpcIik7XG5cdGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgXCJmb3JtLWlucHV0XCIsIFwicHJvamVjdC1uYW1lLWlucHV0XCIpO1xuXHRwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0cHJvamVjdE5hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbmFtZS1pbnB1dFwiKTtcblx0Y29uc3QgYnV0dG9uU2VsZWN0b3JEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcImJ1dHRvbi1zZWxlY3Rvci1kaXZcIik7XG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJidXR0b25cIiwgXCJwcm9qZWN0LWNhbmNlbC1idXR0b25cIiwgXCJDYW5jZWxcIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImJ1dHRvblwiLCBcInByb2plY3Qtc3VibWl0LWJ1dHRvblwiKTtcblx0c3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuXHRzdWJtaXRCdXR0b24udmFsdWUgPSBcIk9LXCI7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG5cblx0aWYgKHN0b3JhZ2VLZXkpIHtcblx0XHRwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcInByb2plY3ROYW1lXCJdO1xuXHR9XG5cblx0bmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcblx0bmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dExhYmVsKTtcblx0bmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcblx0bmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChidXR0b25TZWxlY3RvckRpdik7XG5cdGJ1dHRvblNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cdGJ1dHRvblNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cblx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y2xvc2VXaW5kb3cobmV3UHJvamVjdENvbnRhaW5lcik7XG5cdH0pO1xuXG5cdHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIik7XG5cdFx0bGV0IHByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuXHRcdGxldCBpbnN0YW50aWF0ZVByb2plY3RPYmplY3QgPSBwcm9qZWN0cyhwcm9qZWN0TmFtZVZhbHVlKTtcblx0XHRpZiAoc3RvcmFnZUtleSkge1xuXHRcdFx0Y29uc3QgdXBkYXRlUHJvamVjdERpdiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnByb2plY3QtbGlzdFtkYXRhLXZhbHVlPSR7c3RvcmFnZUtleX1dYCk7XG5cdFx0XHR1cGRhdGVQcm9qZWN0RGl2LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZVZhbHVlO1xuXHRcdFx0aW5zdGFudGlhdGVQcm9qZWN0T2JqZWN0LnVwZGF0ZShzdG9yYWdlS2V5LCBwcm9qZWN0TmFtZVZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IG5ld1Byb2plY3QgPSBpbnN0YW50aWF0ZVByb2plY3RPYmplY3QuY3JlYXRlKCk7XG5cdFx0XHRwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblx0XHR9XG5cblx0XHRjbG9zZVdpbmRvdyhuZXdQcm9qZWN0Q29udGFpbmVyKTtcblx0fSk7XG5cblx0cmV0dXJuIG5ld1Byb2plY3RDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdUYXNrV2luZG93KHN0b3JhZ2VLZXkgPSBudWxsKSB7XG5cdGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcIm5ldy10YXNrLWZvcm0tY29udGFpbmVyXCIpO1xuXHRjb25zdCBuZXdUYXNrRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJuZXctdGFzay1mb3JtLWRpdlwiKTtcblx0Y29uc3QgdGl0bGUgPSBuZXdFbGVtZW50KFwiaDJcIiwgXCJwb3AtdXAtd2luZG93LXRpdGxlXCIsIC4uLkFycmF5KDEpLCBcIk5ldyBUYXNrXCIpO1xuXG5cdGNvbnN0IGZvcm0gPSBuZXdFbGVtZW50KFwiZm9ybVwiLCAuLi5BcnJheSgxKSwgXCJ0YXNrLWZvcm1cIik7XG5cblx0Y29uc3QgdGFza05hbWVJbnB1dCA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImZvcm0taW5wdXRcIiwgXCJ0YXNrLW5hbWUtaW5wdXRcIik7XG5cdHRhc2tOYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHRjb25zdCB0YXNrTmFtZUlucHV0TGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJUYXNrOlwiKTtcblx0dGFza05hbWVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbmFtZS1pbnB1dFwiKTtcblxuXHRjb25zdCB0YXNrTm90ZXNJbnB1dCA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImZvcm0taW5wdXRcIiwgXCJ0YXNrLW5vdGVzLWlucHV0XCIpO1xuXHR0YXNrTm90ZXNJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdGNvbnN0IHRhc2tOb3Rlc0lucHV0TGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJOb3RlczpcIik7XG5cdHRhc2tOb3Rlc0lucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1ub3Rlcy1pbnB1dFwiKTtcblxuXHRjb25zdCBwcm9qZWN0TmFtZVNlbGVjdCA9IG5ld0VsZW1lbnQoXCJzZWxlY3RcIiwgXCJmb3JtLXNlbGVjdGlvblwiLCBcInByb2plY3QtbmFtZS1zZWxlY3Rpb25cIik7XG5cdGNvbnN0IGRhdGFBdHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtbGlzdFwiKTtcblx0QXJyYXkuZnJvbShkYXRhQXR0cykuZm9yRWFjaCgoZCkgPT4ge1xuXHRcdGNvbnN0IHByb2plY3ROYW1lU2VsZWN0T3B0aW9uID0gbmV3RWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRjb25zdCBuYW1lRnJvbVN0b3JhZ2UgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShkLmRhdGFzZXQudmFsdWUpO1xuXHRcdHByb2plY3ROYW1lU2VsZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG5hbWVGcm9tU3RvcmFnZS5wcm9qZWN0TmFtZSk7XG5cdFx0cHJvamVjdE5hbWVTZWxlY3RPcHRpb24udGV4dENvbnRlbnQgPSBuYW1lRnJvbVN0b3JhZ2UucHJvamVjdE5hbWU7XG5cdFx0cHJvamVjdE5hbWVTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTZWxlY3RPcHRpb24pO1xuXHR9KTtcblxuXHRjb25zdCBwcm9qZWN0TmFtZVNlbGVjdExhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiU2VsZWN0IGEgcHJvamVjdFwiKTtcblx0cHJvamVjdE5hbWVTZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0LW5hbWUtc2VsZWN0aW9uXCIpO1xuXG5cdGNvbnN0IGRhdGVEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwiZGF0ZS10aW1lXCIsIFwiZGF0ZVwiKTtcblxuXHRjb25zdCBkYXRlUmFkaW9ZZXMgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgLi4uQXJyYXkoMSksIFwiaW5jbHVkZS1kYXRlXCIpO1xuXHRkYXRlUmFkaW9ZZXMudHlwZSA9IFwiUmFkaW9cIjtcblx0Y29uc3QgZGF0ZVJhZGlvWWVzTGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJZZXNcIik7XG5cdGRhdGVSYWRpb1llc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImluY2x1ZGUtZGF0ZVwiKTtcblxuXHRjb25zdCBkYXRlUmFkaW9ObyA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCAuLi5BcnJheSgxKSwgXCJkb250LWluY2x1ZGUtZGF0ZVwiKTtcblx0ZGF0ZVJhZGlvTm8udHlwZSA9IFwiUmFkaW9cIjtcblx0ZGF0ZVJhZGlvTm8uY2hlY2tlZCA9IHRydWU7XG5cdGNvbnN0IGRhdGVSYWRpb05vTGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJOb1wiKTtcblx0ZGF0ZVJhZGlvTm9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkb250LWluY2x1ZGUtZGF0ZVwiKTtcblxuXHRjb25zdCBkYXRlSW5wdXQgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgXCJmb3JtLWlucHV0XCIsIFwidGFzay1kYXRlLWlucHV0XCIpO1xuXHRkYXRlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHRkYXRlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRjb25zdCBkYXRlSW5wdXRMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIkRhdGU6XCIpO1xuXHRkYXRlSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRhdGUtaW5wdXRcIik7XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXHRjb25zdCB0aW1lRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcImRhdGUtdGltZVwiLCBcInRpbWVcIik7XG5cblx0Y29uc3QgdGltZVJhZGlvWWVzID0gbmV3RWxlbWVudChcImlucHV0XCIsIC4uLkFycmF5KDEpLCBcImluY2x1ZGUtdGltZVwiKTtcblx0dGltZVJhZGlvWWVzLnR5cGUgPSBcIlJhZGlvXCI7XG5cdGNvbnN0IHRpbWVSYWRpb1llc0xhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiWWVzXCIpO1xuXHR0aW1lUmFkaW9ZZXNMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbmNsdWRlLXRpbWVcIik7XG5cblx0Y29uc3QgdGltZVJhZGlvTm8gPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgLi4uQXJyYXkoMSksIFwiZG9udC1pbmNsdWRlLXRpbWVcIik7XG5cdHRpbWVSYWRpb05vLnR5cGUgPSBcIlJhZGlvXCI7XG5cdHRpbWVSYWRpb05vLmNoZWNrZWQgPSB0cnVlO1xuXHRjb25zdCB0aW1lUmFkaW9Ob0xhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiTm9cIik7XG5cdHRpbWVSYWRpb05vTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZG9udC1pbmNsdWRlLXRpbWVcIik7XG5cblx0Y29uc3QgdGltZUlucHV0ID0gbmV3RWxlbWVudChcImlucHV0XCIsIFwiZm9ybS1pbnB1dFwiLCBcInRhc2stdGltZS1pbnB1dFwiKTtcblx0dGltZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0dGltZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblx0Y29uc3QgdGltZUlucHV0TGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJUaW1lOlwiKTtcblx0dGltZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay10aW1lLWlucHV0XCIpO1xuXG5cdGNvbnN0IGJ1dHRvblNlbGVjdG9yRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJidXR0b24tc2VsZWN0b3ItZGl2XCIpO1xuXHRjb25zdCBjYW5jZWxCdXR0b24gPSBuZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiYnV0dG9uXCIsIFwidGFzay1jYW5jZWwtYnV0dG9uXCIsIFwiQ2FuY2VsXCIpO1xuXHRjb25zdCBzdWJtaXRCdXR0b24gPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgXCJidXR0b25cIiwgXCJ0YXNrLXN1Ym1pdC1idXR0b25cIik7XG5cdHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcblx0c3VibWl0QnV0dG9uLnZhbHVlID0gXCJPS1wiO1xuXHRzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1mb3JtXCIpO1xuXG5cdGlmIChzdG9yYWdlS2V5KSB7XG5cdFx0dGFza05hbWVJbnB1dC52YWx1ZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJ0YXNrTmFtZVwiXTtcblx0XHR0YXNrTm90ZXNJbnB1dC52YWx1ZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJub3Rlc1wiXTtcblx0XHRwcm9qZWN0TmFtZVNlbGVjdC52YWx1ZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJwcm9qZWN0TmFtZVwiXTtcblxuXHRcdGlmIChwYWdlU3RhdGUuZ2V0U3RvcmFnZShgJHtzdG9yYWdlS2V5fWApW1wiZGF5XCJdKSB7XG5cdFx0XHRkYXRlUmFkaW9ZZXMuY2hlY2tlZCA9IHRydWU7XG5cdFx0XHRkYXRlUmFkaW9Oby5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHRkYXRlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdGRhdGVJbnB1dC52YWx1ZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJkYXlcIl07XG5cdFx0fVxuXHRcdGlmIChwYWdlU3RhdGUuZ2V0U3RvcmFnZShgJHtzdG9yYWdlS2V5fWApW1widGltZVwiXSkge1xuXHRcdFx0dGltZVJhZGlvWWVzLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0dGltZVJhZGlvTm8uY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0dGltZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR0aW1lSW5wdXQudmFsdWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShgJHtzdG9yYWdlS2V5fWApW1widGltZVwiXTtcblx0XHR9XG5cdH1cblxuXHRuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xuXHRuZXdUYXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblx0bmV3VGFza0Rpdi5hcHBlbmRDaGlsZChmb3JtKTtcblx0Zm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0TGFiZWwpO1xuXHRmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuXHRmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lU2VsZWN0TGFiZWwpO1xuXHRmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lU2VsZWN0KTtcblx0Zm9ybS5hcHBlbmRDaGlsZCh0YXNrTm90ZXNJbnB1dExhYmVsKTtcblx0Zm9ybS5hcHBlbmRDaGlsZCh0YXNrTm90ZXNJbnB1dCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG5cdGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0TGFiZWwpO1xuXHRkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cdGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZVJhZGlvWWVzTGFiZWwpO1xuXHRkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVSYWRpb1llcyk7XG5cdGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZVJhZGlvTm9MYWJlbCk7XG5cdGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZVJhZGlvTm8pO1xuXHRmb3JtLmFwcGVuZENoaWxkKHRpbWVEaXYpO1xuXHR0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVJbnB1dExhYmVsKTtcblx0dGltZURpdi5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuXHR0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVSYWRpb1llc0xhYmVsKTtcblx0dGltZURpdi5hcHBlbmRDaGlsZCh0aW1lUmFkaW9ZZXMpO1xuXHR0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVSYWRpb05vTGFiZWwpO1xuXHR0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVSYWRpb05vKTtcblx0bmV3VGFza0Rpdi5hcHBlbmRDaGlsZChidXR0b25TZWxlY3RvckRpdik7XG5cdGJ1dHRvblNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cdGJ1dHRvblNlbGVjdG9yRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cblx0ZGF0ZVJhZGlvWWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKGRhdGVSYWRpb1llcy5jaGVja2VkKSB7XG5cdFx0XHRkYXRlUmFkaW9Oby5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHRkYXRlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXG5cdGRhdGVSYWRpb05vLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKGRhdGVSYWRpb05vLmNoZWNrZWQpIHtcblx0XHRcdGRhdGVSYWRpb1llcy5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHRkYXRlSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0fSk7XG5cblx0dGltZVJhZGlvWWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKHRpbWVSYWRpb1llcy5jaGVja2VkKSB7XG5cdFx0XHR0aW1lUmFkaW9Oby5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR0aW1lSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXG5cdHRpbWVSYWRpb05vLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKHRpbWVSYWRpb05vLmNoZWNrZWQpIHtcblx0XHRcdHRpbWVSYWRpb1llcy5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR0aW1lSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0fSk7XG5cblx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y2xvc2VXaW5kb3cobmV3VGFza0NvbnRhaW5lcik7XG5cdH0pO1xuXG5cdHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tdGFzay1kaXZcIik7XG5cdFx0bGV0IHRhc2tOYW1lVmFsdWUgPSB0YXNrTmFtZUlucHV0LnZhbHVlO1xuXHRcdGxldCB0YXNrUHJvamVjdE5hbWVWYWx1ZSA9IHByb2plY3ROYW1lU2VsZWN0LnZhbHVlO1xuXHRcdGxldCB0YXNrTm90ZXNWYWx1ZSA9IHRhc2tOb3Rlc0lucHV0LnZhbHVlO1xuXHRcdGxldCB0YXNrRGF0ZVZhbHVlID0gXCJcIjtcblx0XHRsZXQgdGFza1RpbWVWYWx1ZSA9IFwiXCI7XG5cdFx0aWYgKGRhdGVJbnB1dCkge1xuXHRcdFx0dGFza0RhdGVWYWx1ZSA9IGRhdGVJbnB1dC52YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHRpbWVJbnB1dCkge1xuXHRcdFx0dGFza1RpbWVWYWx1ZSA9IHRpbWVJbnB1dC52YWx1ZTtcblx0XHR9XG5cdFx0bGV0IGluc3RhbnRpYXRlVGFza09iamVjdCA9IHRhc2tzKHRhc2tOYW1lVmFsdWUsIHRhc2tQcm9qZWN0TmFtZVZhbHVlLCB0YXNrTm90ZXNWYWx1ZSwgdGFza0RhdGVWYWx1ZSwgdGFza1RpbWVWYWx1ZSk7XG5cdFx0aWYgKHN0b3JhZ2VLZXkpIHtcblx0XHRcdGNvbnN0IHVwZGF0ZVRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFzay1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fV1gKS5jaGlsZE5vZGVzWzFdO1xuXHRcdFx0dXBkYXRlVGFza0Rpdi5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdGFza05hbWVWYWx1ZTtcblx0XHRcdHVwZGF0ZVRhc2tEaXYuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdGFza05vdGVzVmFsdWU7XG5cdFx0XHR1cGRhdGVUYXNrRGl2LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IHRhc2tEYXRlVmFsdWU7XG5cdFx0XHR1cGRhdGVUYXNrRGl2LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IHRhc2tUaW1lVmFsdWU7XG5cdFx0XHRsZXQgb2xkUHJvamVjdE5hbWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShzdG9yYWdlS2V5KVsncHJvamVjdE5hbWUnXVxuXHRcdFx0ZHluYW1pY1Rhc2tDb3VudCh0YXNrUHJvamVjdE5hbWVWYWx1ZSwgc3RvcmFnZUtleSwgb2xkUHJvamVjdE5hbWUpO1xuXHRcdFx0aW5zdGFudGlhdGVUYXNrT2JqZWN0LnVwZGF0ZShzdG9yYWdlS2V5LCB0YXNrUHJvamVjdE5hbWVWYWx1ZSwgdGFza05hbWVWYWx1ZSwgdGFza05vdGVzVmFsdWUsIHRhc2tEYXRlVmFsdWUsIHRhc2tUaW1lVmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbmV3VGFzayA9IGluc3RhbnRpYXRlVGFza09iamVjdC5jcmVhdGUoKTtcblx0XHRcdHRhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5cdFx0fVxuXG5cdFx0Y2xvc2VXaW5kb3cobmV3VGFza0NvbnRhaW5lcik7XG5cdH0pO1xuXG5cdHJldHVybiBuZXdUYXNrQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5TmV3UHJvamVjdFdpbmRvdywgZGlzcGxheU5ld1Rhc2tXaW5kb3cgfTtcbiIsImltcG9ydCB7IG5ld0VsZW1lbnQsIHNlbmRUb0JvZHkgfSBmcm9tIFwiLi9ET01Db250cm9sbGVyXCI7XG5pbXBvcnQgeyBkaXNwbGF5TmV3UHJvamVjdFdpbmRvdyB9IGZyb20gXCIuL2Zvcm1XaW5kb3dzXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RMaXN0c1wiO1xuXG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QobmFtZSwgc3RvcmFnZUtleSwgbnVtYmVyT2ZUYXNrcykge1xuXHRjb25zdCBtb2RpZmllZE5hbWVGb3JJRCA9IG5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xuXHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByb2plY3QtbGlzdFwiLCBgJHttb2RpZmllZE5hbWVGb3JJRH0tbGlzdGApO1xuXHRuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cdGNvbnN0IG5ld0xpc3RUaXRsZSA9IG5ld0VsZW1lbnQoXCJoM1wiLCBcInByb2plY3QtdGl0bGVcIiwgLi4uQXJyYXkoMSksIGAke25hbWV9YCk7XG5cdGNvbnN0IG51bWJlck9mVGFza3NFbGVtZW50ID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJudW1iZXItb2YtdGFza3NcIiwgLi4uQXJyYXkoMSksIGAke251bWJlck9mVGFza3N9YCk7XG5cbiAgICBjb25zdCBtb3JlSW5mb0ljb24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsIGBpbmZvLWljb24tJHtzdG9yYWdlS2V5fWAsIFwiaW5mb1wiKTtcblx0bW9yZUluZm9JY29uLmNsYXNzTGlzdC5hZGQoXCJtb3JlLWluZm8taWNvblwiKTtcblx0bmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRtb3JlSW5mb0ljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdH0pO1xuXG5cdG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uICgpIHtcblx0XHRtb3JlSW5mb0ljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9KTtcblxuXHRtb3JlSW5mb0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBkcm9wRG93bkRpdiA9IGRyb3BEb3duT3B0aW9uKHN0b3JhZ2VLZXkpO1xuXHRcdG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0xpc3RUaXRsZSk7XG5cdG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobnVtYmVyT2ZUYXNrc0VsZW1lbnQpO1xuXHRuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG1vcmVJbmZvSWNvbik7XG5cblx0cmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGRyb3BEb3duT3B0aW9uKHN0b3JhZ2VLZXkpIHtcblx0Y29uc3QgZHJvcERvd25EaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwiZHJvcC1kb3duLWNvbnRlbnRcIiwgXCJkcm9wLWRvd25cIik7XG5cdGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiZHJvcC1kb3duLW9wdGlvblwiLCBgdGFzayR7c3RvcmFnZUtleX0tdXBkYXRlLWJ1dHRvbmAsIFwiUmVuYW1lXCIpO1xuXHRjb25zdCBkZWxldGVCdXR0b24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcImRyb3AtZG93bi1vcHRpb25cIiwgYHRhc2ske3N0b3JhZ2VLZXl9LWRlbGV0ZS1idXR0b25gLCBcIkRlbGV0ZVwiKTtcblx0dXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cdGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHN0b3JhZ2VLZXkpO1xuXG5cdGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fV1gKTtcblx0bGV0IG1vcmUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLWljb24tJHtzdG9yYWdlS2V5fWApO1xuXG5cdC8qIFRoaXMgYmVoYXZpb3IgaXMgdW5leHBlY3RlZC4gbG9vcGluZyB0aHJvdWdoIGFsbCBzdG9yYWdla2V5cyBpbnN0ZWFkIG9mIGp1c3QgdGhlIG9uZSBzdG9yYWdlXG4gICAgICAgIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIGNsaWNrZWQgZWxlbWVudC4gZXJyb3Igb2NjdXJzIGluIHRoZSBjb25zb2xlIGF0IGV2ZXJ5IGV4ZWN1dGlvbiAqL1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWRvd25cIikgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPSBtb3JlKSB7XG5cdFx0XHRuZXdQcm9qZWN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHNlbmRUb0JvZHkoZGlzcGxheU5ld1Byb2plY3RXaW5kb3coc3RvcmFnZUtleSkpO1xuXHRcdG5ld1Byb2plY3QucmVtb3ZlQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtYWluUHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpdlwiKTtcblx0XHRjb25zdCBkZWxldGVkUHJvamVjdCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnByb2plY3QtbGlzdFtkYXRhLXZhbHVlPSR7c3RvcmFnZUtleX1gKTtcblx0XHRwcm9qZWN0cygpLmRlbGV0ZVByb2plY3Qoc3RvcmFnZUtleSk7XG5cdFx0bWFpblByb2plY3RzRGl2LnJlbW92ZUNoaWxkKGRlbGV0ZWRQcm9qZWN0KTtcblx0fSk7XG5cblx0ZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblx0ZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuXHRyZXR1cm4gZHJvcERvd25EaXY7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3QgfTtcbiIsImltcG9ydCB7IHBhZ2VTdGF0ZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tIFwiLi90YXNrSGFuZGxlclwiO1xuaW1wb3J0IHsgbmV3UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RIYW5kbGVyXCI7XG5cbmNvbnN0IHByb2plY3RzID0gKG5hbWUpID0+IHtcblx0Y29uc3QgdHlwZSA9IFwicHJvamVjdFwiO1xuXHRjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblx0bGV0IHRvdGFsTnVtYmVyT2ZUYXNrcyA9IDA7XG5cdGxldCBudW1iZXJPZlRhc2tzID0gMDtcblxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IHN0b3JhZ2VLZXkgPSBrZXlHZW5lcmF0b3IoKTtcblx0XHRzdG9yZShzdG9yYWdlS2V5LCBuYW1lLCBudW1iZXJPZlRhc2tzLCB0eXBlKTtcblx0XHRyZXR1cm4gbmV3UHJvamVjdChuYW1lLCBzdG9yYWdlS2V5LCBudW1iZXJPZlRhc2tzKTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGUgPSBmdW5jdGlvbiAoa2V5LCBwcm9qZWN0TmFtZSkge1xuXHRcdGxldCBkYXRiYXNlT2JqID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoa2V5KTtcblxuXHRcdGRhdGJhc2VPYmogJiYgcGFnZVN0YXRlLnBvcHVsYXRlUHJvamVjdFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TmFtZSwgZGF0YmFzZU9ialtcIm51bWJlck9mVGFza3NcIl0sIGRhdGJhc2VPYmpbXCJ0eXBlXCJdKTtcblxuXHRcdHJldHVybjtcblx0fTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbihrZXkpe1xuICAgICAgICBwYWdlU3RhdGUuZGVsZXRlU3RvcmFnZShrZXkpO1xuICAgIH1cblxuXHRjb25zdCB1cGRhdGVOdW1iZXJPZlRhc2tzID0gZnVuY3Rpb24gKGNvdW50KSB7XG5cdFx0dG90YWxOdW1iZXJPZlRhc2tzICs9IGNvdW50O1xuXHR9O1xuXG5cdGNvbnN0IGtleUdlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgaSA9IDE7XG5cdFx0bGV0IGtleVRlc3QgPSAxO1xuXHRcdGxldCBrZXk7XG5cdFx0d2hpbGUgKGtleVRlc3QpIHtcblx0XHRcdGtleSA9IGBQJHtpfWA7XG5cdFx0XHRrZXlUZXN0ID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoa2V5KTtcblx0XHRcdGkgKz0gMTtcblx0XHR9XG5cdFx0cmV0dXJuIGtleTtcblx0fTtcblxuXHRjb25zdCBzdG9yZSA9IGZ1bmN0aW9uIChrZXksIHByb2plY3ROYW1lLCBudW1iZXJPZlRhc2tzLCB0eXBlKSB7XG5cdFx0cGFnZVN0YXRlLnBvcHVsYXRlUHJvamVjdFN0b3JhZ2Uoa2V5LCBwcm9qZWN0TmFtZSwgbnVtYmVyT2ZUYXNrcywgdHlwZSk7XG5cdH07XG5cblx0cmV0dXJuIHsgZ2V0TmFtZSwgY3JlYXRlLCB1cGRhdGUsIGRlbGV0ZVByb2plY3QsIHVwZGF0ZU51bWJlck9mVGFza3MgfTtcbn07XG5cbmNvbnN0IHRhc2tzID0gKHRhc2ssIHByb2plY3QgPSBcIkFsbFwiLCBub3RlcyA9IFwiXCIsIGRheSA9IFwiXCIsIHRpbWUgPSBcIlwiKSA9PiB7XG5cdGNvbnN0IHR5cGUgPSBcInRhc2tcIjtcblx0bGV0IGNvbXBsZXRlID0gZmFsc2U7XG4gICAgXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgc3RvcmFnZUtleSA9IGtleUdlbmVyYXRvcigpO1xuXHRcdHN0b3JlKHN0b3JhZ2VLZXksIHR5cGUsIGNvbXBsZXRlKTtcblx0XHRyZXR1cm4gbmV3VGFzayhzdG9yYWdlS2V5LCBwcm9qZWN0LCB0YXNrLCBub3RlcywgZGF5LCB0aW1lLCBjb21wbGV0ZSk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlID0gZnVuY3Rpb24gKGtleSwgcHJvamVjdE5hbWUsIHRhc2tUaXRsZSwgbm90ZXMsIGRheSwgdGltZSkge1xuXHRcdGxldCBkYXRiYXNlT2JqID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoa2V5KTtcblxuXHRcdGRhdGJhc2VPYmogJiYgcGFnZVN0YXRlLnBvcHVsYXRlVGFza1N0b3JhZ2Uoa2V5LCBwcm9qZWN0TmFtZSwgdGFza1RpdGxlLCBub3RlcywgZGF5LCB0aW1lLCBkYXRiYXNlT2JqW1widHlwZVwiXSwgZGF0YmFzZU9ialtcImNvbXBsZXRlXCJdKTtcblxuXHRcdHJldHVybjtcblx0fTtcblxuXHRjb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdHBhZ2VTdGF0ZS5kZWxldGVTdG9yYWdlKGtleSk7XG5cdH07XG5cblx0Y29uc3Qga2V5R2VuZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuXHRcdGxldCBpID0gMTtcblx0XHRsZXQga2V5VGVzdCA9IDE7XG5cdFx0bGV0IGtleTtcblx0XHR3aGlsZSAoa2V5VGVzdCkge1xuXHRcdFx0a2V5ID0gYFQke2l9YDtcblx0XHRcdGtleVRlc3QgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShrZXkpO1xuXHRcdFx0aSArPSAxO1xuXHRcdH1cblx0XHRyZXR1cm4ga2V5O1xuXHR9O1xuXG5cdGNvbnN0IHN0b3JlID0gZnVuY3Rpb24gKGtleSwgdHlwZSwgY29tcGxldGUpIHtcblx0XHRwYWdlU3RhdGUucG9wdWxhdGVUYXNrU3RvcmFnZShrZXksIHByb2plY3QsIHRhc2ssIG5vdGVzLCBkYXksIHRpbWUsIHR5cGUsIGNvbXBsZXRlKTtcblx0fTtcblxuXHRyZXR1cm4geyBjcmVhdGUsIHVwZGF0ZSwgZGVsZXRlVGFzaywgc3RvcmUgfTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RzLCB0YXNrcyB9O1xuIiwiY29uc3QgcGFnZVN0YXRlID0gKCgpID0+IHtcblx0Y29uc3QgcG9wdWxhdGVQcm9qZWN0U3RvcmFnZSA9IChvYmplY3RLZXkgPSBcInByb2plY3RzXCIsIG5hbWUsIGNvdW50LCB0eXBlKSA9PiB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXG5cdFx0XHRvYmplY3RLZXksXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcblx0XHRcdFx0cHJvamVjdE5hbWU6IG5hbWUsXG5cdFx0XHRcdG51bWJlck9mVGFza3M6IGNvdW50LFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9O1xuXG4gICAgY29uc3QgcG9wdWxhdGVUYXNrU3RvcmFnZSA9IChvYmplY3RLZXkgPSBcInRhc2tzXCIsIG5hbWUsIHRhc2tUaXRsZSwgbm90ZXMsIGRheSwgdGltZSwgdHlwZSwgY29tcGxldGUpID0+IHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcblx0XHRcdG9iamVjdEtleSxcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuXHRcdFx0XHRwcm9qZWN0TmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICB0YXNrTmFtZTogdGFza1RpdGxlLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBub3RlcyxcbiAgICAgICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSxcblx0XHRcdH0pXG5cdFx0KTtcblx0fTtcblxuXHRjb25zdCBnZXRTdG9yYWdlID0gKG9iamVjdEtleSkgPT4ge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9iamVjdEtleSkpO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZVN0b3JhZ2UgPSAob2JqZWN0S2V5KSA9PiB7XG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9iamVjdEtleSk7XG5cdH07XG5cblx0cmV0dXJuIHsgcG9wdWxhdGVQcm9qZWN0U3RvcmFnZSwgcG9wdWxhdGVUYXNrU3RvcmFnZSwgZ2V0U3RvcmFnZSwgZGVsZXRlU3RvcmFnZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgcGFnZVN0YXRlIH07XG4iLCJpbXBvcnQgeyBwYWdlU3RhdGUgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbi8vIGNvbnN0IGFsbFByb2plY3RDb3VudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnByb2plY3QtbGlzdFtkYXRhLXZhbHVlPVAwXWApO1xuXG5mdW5jdGlvbiBzdGF0aWNUYXNrQ291bnQoKSB7XG5cdGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHN0b3JhZ2VLZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXHRcdGxldCBzdG9yYWdlT2JqZWN0ID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoc3RvcmFnZUtleSk7XG5cdFx0aWYgKHN0b3JhZ2VPYmplY3RbXCJ0eXBlXCJdID09IFwidGFza1wiKSB7XG5cdFx0XHRmb3IgKGxldCBwID0gMDsgcCA8IHByb2plY3RzRGl2LmNoaWxkTm9kZXMubGVuZ3RoOyBwKyspIHtcblx0XHRcdFx0aWYgKHByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCAhPSBcIkFsbFwiKSB7XG5cdFx0XHRcdFx0aWYgKHByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9PSBzdG9yYWdlT2JqZWN0W1wicHJvamVjdE5hbWVcIl0pIHtcblx0XHRcdFx0XHRcdCsrcHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkeW5hbWljVGFza0NvdW50KHByb2plY3ROYW1lLCBzdG9yYWdlS2V5ID0gbnVsbCwgb2xkUHJvamVjdCA9IG51bGwpIHtcblx0Y29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpdlwiKTtcblxuXHRmb3IgKGxldCBwID0gMDsgcCA8IHByb2plY3RzRGl2LmNoaWxkTm9kZXMubGVuZ3RoOyBwKyspIHtcblx0XHQvL1RvIHByZXZlbnQgZGVjcmVtZW50aW5nIHRoZSB0b3RhbCBudW1iZXIgb2YgdGFza3MgZm9yIGVkaXRpbmcgZXhpc3RpbmcgdGFzayBncm91cFxuXHRcdGlmIChwcm9qZWN0TmFtZSA9PSBcIkFsbFwiICYmICFvbGRQcm9qZWN0KSB7XG5cdFx0XHQrK3Byb2plY3RzRGl2LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAocHJvamVjdE5hbWUgPT0gXCJBbGxcIiAmJiBvbGRQcm9qZWN0KSB7XG5cdFx0XHRpZiAocHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID09IG9sZFByb2plY3QpIHtcblx0XHRcdFx0LS1wcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID09IHByb2plY3ROYW1lKSB7XG5cdFx0XHQrK3Byb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdGlmICghc3RvcmFnZUtleSkge1xuXHRcdFx0XHQrK3Byb2plY3RzRGl2LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDsgLy9mb3IgXCJBbGxcIiBwcm9qZWN0c1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChvbGRQcm9qZWN0ICYmIG9sZFByb2plY3QgIT0gXCJBbGxcIiAmJiBwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPT0gb2xkUHJvamVjdCkge1xuXHRcdFx0LS1wcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlbGV0aW5nVGFza0NvdW50KHByb2plY3ROYW1lKSB7XG5cdGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIik7XG5cblx0aWYgKHByb2plY3ROYW1lID09IFwiQWxsXCIpIHtcblx0XHQtLXByb2plY3RzRGl2LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGxldCBwID0gMDsgcCA8IHByb2plY3RzRGl2LmNoaWxkTm9kZXMubGVuZ3RoOyBwKyspIHtcblx0XHRpZiAocHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID09IHByb2plY3ROYW1lKSB7XG5cdFx0XHQtLXByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdC0tcHJvamVjdHNEaXYuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgeyBzdGF0aWNUYXNrQ291bnQsIGR5bmFtaWNUYXNrQ291bnQsIGRlbGV0aW5nVGFza0NvdW50IH07XG4iLCJpbXBvcnQgeyBuZXdFbGVtZW50LCBzZW5kVG9Cb2R5IH0gZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgZGlzcGxheU5ld1Rhc2tXaW5kb3cgfSBmcm9tIFwiLi9mb3JtV2luZG93c1wiO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdHNcIjtcbmltcG9ydCB7IHBhZ2VTdGF0ZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGR5bmFtaWNUYXNrQ291bnQsIGRlbGV0aW5nVGFza0NvdW50IH0gZnJvbSBcIi4vdGFza0NvdW50VHJhY2tpbmdcIjtcblxuZnVuY3Rpb24gbmV3VGFzayhzdG9yYWdlS2V5LCBwcm9qZWN0LCB0YXNrLCBub3RlcyA9IFwiXCIsIGRheSA9IFwiXCIsIHRpbWUgPSBcIlwiLCBjb21wbGV0ZSkge1xuXHRjb25zdCBuZXdUYXNrID0gbmV3RWxlbWVudChcImRpdlwiLCBcInRhc2stbGlzdFwiKTtcblx0bmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHN0b3JhZ2VLZXkpO1xuXHRjb25zdCBuZXdUYXNrQ2hlY2tNYXJrID0gbmV3RWxlbWVudChcImlucHV0XCIsIFwidGFzay1jaGVja21hcmtcIik7XG5cdG5ld1Rhc2tDaGVja01hcmsudHlwZSA9IFwicmFkaW9cIjtcblx0aWYgKGNvbXBsZXRlKSB7XG5cdFx0bmV3VGFza0NoZWNrTWFyay5jaGVja2VkID0gdHJ1ZTtcblx0fVxuXHRjb25zdCBuZXdUYXNrRGV0YWlscyA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWluZm8tY29udGFpbmVyXCIpO1xuXHRjb25zdCBuZXdUYXNrVGl0bGUgPSBuZXdFbGVtZW50KFwiaDNcIiwgXCJ0YXNrLXRpdGxlXCIsIC4uLkFycmF5KDEpLCB0YXNrKTtcblx0Y29uc3QgbmV3VGFza05vdGVzRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInRhc2stbm90ZXMtZGl2XCIpO1xuXHRjb25zdCBuZXdUYXNrTm90ZXMgPSBuZXdFbGVtZW50KFwicFwiLCBcInRhc2stbm90ZXNcIiwgLi4uQXJyYXkoMSksIG5vdGVzKTtcblx0Y29uc3QgbmV3RGF0ZVRpbWVEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwidGFzay1kYXRlLXRpbWUtZGl2XCIpO1xuXHRjb25zdCBuZXdUYXNrRGF5ID0gbmV3RWxlbWVudChcInBcIiwgXCJ0YXNrLWRhdGVcIiwgLi4uQXJyYXkoMSksIGRheSk7XG5cdGNvbnN0IG5ld1Rhc2t0aW1lID0gbmV3RWxlbWVudChcInBcIiwgXCJ0YXNrLXRpbWVcIiwgLi4uQXJyYXkoMSksIHRpbWUpO1xuXG5cdG5ld1Rhc2tDaGVja01hcmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb21wbGV0ZSA9ICFjb21wbGV0ZTtcblx0XHR0YXNrcyh0YXNrLCBwcm9qZWN0LCBub3RlcywgZGF5LCB0aW1lKS5zdG9yZShzdG9yYWdlS2V5LCBcInRhc2tcIiwgY29tcGxldGUpO1xuXG5cdFx0aWYgKGNvbXBsZXRlKSB7XG5cdFx0XHRuZXdUYXNrQ2hlY2tNYXJrLmNoZWNrZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5ld1Rhc2tDaGVja01hcmsuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cblx0ZHluYW1pY1Rhc2tDb3VudChwcm9qZWN0KTtcblxuXHRjb25zdCBtb3JlSW5mb0ljb24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsIGBpbmZvLWljb24tJHtzdG9yYWdlS2V5fWAsIFwiaW5mb1wiKTtcblx0bW9yZUluZm9JY29uLmNsYXNzTGlzdC5hZGQoXCJtb3JlLWluZm8taWNvblwiKTtcblx0bmV3VGFzay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRtb3JlSW5mb0ljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdH0pO1xuXG5cdG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uICgpIHtcblx0XHRtb3JlSW5mb0ljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9KTtcblxuXHRtb3JlSW5mb0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBkcm9wRG93bkRpdiA9IGRyb3BEb3duT3B0aW9uKHN0b3JhZ2VLZXkpO1xuXHRcdG5ld1Rhc2suYXBwZW5kQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tDaGVja01hcmspO1xuXHRuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXRhaWxzKTtcblx0bmV3VGFza0RldGFpbHMuYXBwZW5kQ2hpbGQobmV3VGFza1RpdGxlKTtcblx0bmV3VGFza0RldGFpbHMuYXBwZW5kQ2hpbGQobmV3VGFza05vdGVzRGl2KTtcblx0bmV3VGFza05vdGVzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tOb3Rlcyk7XG5cdG5ld1Rhc2tEZXRhaWxzLmFwcGVuZENoaWxkKG5ld0RhdGVUaW1lRGl2KTtcblx0bmV3RGF0ZVRpbWVEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0RheSk7XG5cdG5ld0RhdGVUaW1lRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2t0aW1lKTtcblx0bmV3VGFzay5hcHBlbmRDaGlsZChtb3JlSW5mb0ljb24pO1xuXG5cdHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiBkcm9wRG93bk9wdGlvbihzdG9yYWdlS2V5KSB7XG5cdGNvbnN0IGRyb3BEb3duRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcImRyb3AtZG93bi1jb250ZW50XCIsIFwiZHJvcC1kb3duXCIpO1xuXHRjb25zdCB1cGRhdGVCdXR0b24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcImRyb3AtZG93bi1vcHRpb25cIiwgYHRhc2ske3N0b3JhZ2VLZXl9LXVwZGF0ZS1idXR0b25gLCBcIkVkaXRcIik7XG5cdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJzcGFuXCIsIFwiZHJvcC1kb3duLW9wdGlvblwiLCBgdGFzayR7c3RvcmFnZUtleX0tZGVsZXRlLWJ1dHRvbmAsIFwiRGVsZXRlXCIpO1xuXHR1cGRhdGVCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzdG9yYWdlS2V5KTtcblx0ZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cblx0bGV0IG5ld1Rhc2sgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWxpc3RbZGF0YS12YWx1ZT0ke3N0b3JhZ2VLZXl9XWApO1xuXHRsZXQgbW9yZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgI2luZm8taWNvbi0ke3N0b3JhZ2VLZXl9YCk7XG5cblx0LyogVGhpcyBiZWhhdmlvciBpcyB1bmV4cGVjdGVkLiBsb29waW5nIHRocm91Z2ggYWxsIHN0b3JhZ2VrZXlzIGluc3RlYWQgb2YganVzdCB0aGUgb25lIHN0b3JhZ2VcbiAgICAgICAga2V5IGFzc29jaWF0ZWQgd2l0aCB0aGUgY2xpY2tlZCBlbGVtZW50LiBlcnJvciBvY2N1cnMgaW4gdGhlIGNvbnNvbGUgYXQgZXZlcnkgZXhlY3V0aW9uICovXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3AtZG93blwiKSAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWRvd25cIikuY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9IG1vcmUpIHtcblx0XHRcdG5ld1Rhc2sucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWRvd25cIikpO1xuXHRcdH1cblx0fSk7XG5cblx0dXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0c2VuZFRvQm9keShkaXNwbGF5TmV3VGFza1dpbmRvdyhzdG9yYWdlS2V5KSk7XG5cdFx0bmV3VGFzay5yZW1vdmVDaGlsZChkcm9wRG93bkRpdik7XG5cdH0pO1xuXG5cdGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IG1haW5UYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXRhc2stZGl2XCIpO1xuXHRcdGNvbnN0IGRlbGV0ZWRUYXNrID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAudGFzay1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fWApO1xuXHRcdGxldCBwcm9qZWN0TmFtZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKHN0b3JhZ2VLZXkpW1wicHJvamVjdE5hbWVcIl07XG5cdFx0ZGVsZXRpbmdUYXNrQ291bnQocHJvamVjdE5hbWUpO1xuXHRcdHRhc2tzKCkuZGVsZXRlVGFzayhzdG9yYWdlS2V5KTtcblx0XHRtYWluVGFza0Rpdi5yZW1vdmVDaGlsZChkZWxldGVkVGFzayk7XG5cdFx0Ly8gbmV3VGFzay5yZW1vdmVDaGlsZChkcm9wRG93bkRpdik7XG5cdH0pO1xuXG5cdGRyb3BEb3duRGl2LmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG5cdGRyb3BEb3duRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cblx0cmV0dXJuIGRyb3BEb3duRGl2O1xufVxuXG5leHBvcnQgeyBuZXdUYXNrLCBkcm9wRG93bk9wdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vbWFpbi5jc3NcIjtcbmltcG9ydCB7IGhvbWUsIHJlY2FsbCB9IGZyb20gXCIuL21vZHVsZXMvZWxlbWVudEJ1aWxkZXJcIjtcbmltcG9ydCAqIGFzIHBhZ2VSZW5kZXIgZnJvbSBcIi4vbW9kdWxlcy9ET01Db250cm9sbGVyXCI7XG5cbmNvbnN0IG1haW4gPSBwYWdlUmVuZGVyLm5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250YWluZXJcIiwgXCJjb250ZW50XCIpO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJoZXlcIilcbi8vIH0pO1xuXG5wYWdlUmVuZGVyLm1vZHVsZVJlbmRlcihob21lKCksIG1haW4pO1xucGFnZVJlbmRlci5zZW5kVG9Cb2R5KG1haW4pO1xucmVjYWxsKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=