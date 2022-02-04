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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _taskCountTracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskCountTracking */ "./src/modules/taskCountTracking.js");






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
		removeAllTasks(storageKey);
		(0,_projectLists__WEBPACK_IMPORTED_MODULE_2__.projects)().deleteProject(storageKey);
		mainProjectsDiv.removeChild(deletedProject);
	});

	dropDownDiv.appendChild(updateButton);
	dropDownDiv.appendChild(deleteButton);

	return dropDownDiv;
}

function removeAllTasks(storageKey) {
	const mainTaskDiv = document.getElementById("main-task-div");

	let projectName = _storage__WEBPACK_IMPORTED_MODULE_3__.pageState.getStorage(storageKey)["projectName"];
	for (let i = 0; i < localStorage.length; i++) {
		let taskKey = localStorage.key(i);
		let taskObject = _storage__WEBPACK_IMPORTED_MODULE_3__.pageState.getStorage(taskKey);
		if (taskObject["type"] == "task" && taskObject["projectName"] == projectName) {
			let deletedTask = document.body.querySelector(`.task-list[data-value=${taskKey}`)
			mainTaskDiv.removeChild(deletedTask)
			;(0,_taskCountTracking__WEBPACK_IMPORTED_MODULE_4__.deletingTaskCount)(projectName)
		}
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSixnRUFBdUIsQ0FBQyw2REFBSTtBQUM1Qiw4REFBcUI7QUFDckIsK0RBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZWxlbWVudEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybVdpbmRvd3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdExpc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza0NvdW50VHJhY2tpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcblxcdGdhcDogMS4yNWVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5udW1iZXItb2YtdGFza3MsXFxuLmVkaXQge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG5cXHRib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRyb3AtZG93bi1vcHRpb24sXFxuLm1vcmUtaW5mby1pY29uLFxcbiNhZGQtdGFzay1pY29uLFxcbiNhZGQtcHJvamVjdC1kaXY6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy10YXNrLWZvcm0tY29udGFpbmVyLFxcbiNuZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MSwgMTEyLCAxMzEsIDAuNCk7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0ei1pbmRleDogOTk5O1xcblxcdC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgKi9cXG5cXHQvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG59XFxuXFxuI25ldy10YXNrLWZvcm0tZGl2LFxcbiNuZXctcHJvamVjdC1mb3JtLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJvcmRlcjogc29saWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMnB4O1xcblxcdHBhZGRpbmc6IDAuNzVlbTtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9yZS1pbmZvLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZHJvcC1kb3duLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wLWRvd24tb3B0aW9ue1xcbiAgICBwYWRkaW5nOiAwLjI1ZW07XFxufVxcblxcbi5kcm9wLWRvd24tb3B0aW9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkIDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTs7OztDQUlDLGVBQWU7QUFDaEI7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHlDQUF5QztDQUN6QyxZQUFZO0NBQ1osWUFBWTtDQUNaLGVBQWU7Q0FDZixNQUFNO0NBQ04sT0FBTztDQUNQLFlBQVk7Q0FDWiwwQ0FBMEM7Q0FDMUMsZ0NBQWdDO0FBQ2pDOztBQUVBOztDQUVDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuXFx0Z2FwOiAxLjI1ZW07XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm51bWJlci1vZi10YXNrcyxcXG4uZWRpdCB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcblxcdGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZHJvcC1kb3duLW9wdGlvbixcXG4ubW9yZS1pbmZvLWljb24sXFxuI2FkZC10YXNrLWljb24sXFxuI2FkZC1wcm9qZWN0LWRpdjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stZm9ybS1jb250YWluZXIsXFxuI25ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLCAxMTIsIDEzMSwgMC40KTtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAqL1xcblxcdC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyAqL1xcbn1cXG5cXG4jbmV3LXRhc2stZm9ybS1kaXYsXFxuI25ldy1wcm9qZWN0LWZvcm0tZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Ym9yZGVyOiBzb2xpZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFx0cGFkZGluZzogMC43NWVtO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3JlLWluZm8taWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5kcm9wLWRvd24tY29udGVudHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLXdpZHRoOiAxNjBweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3AtZG93bi1vcHRpb257XFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXG59XFxuXFxuLmRyb3AtZG93bi1vcHRpb246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQgO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBuZXdFbGVtZW50KGVsZW1lbnQgPSBcIlwiLCBjbGFzc05hbWUgPSBcIlwiLCBlbGVtZW50SUQgPSBcIlwiLCB0ZXh0ID0gXCJcIiwgaHJlZiA9IFwiXCIpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG5cdGNsYXNzTmFtZSA/IChuZXdFbGVtZW50LmNsYXNzTGlzdCA9IGNsYXNzTmFtZSkgOiBudWxsO1xuXHRlbGVtZW50SUQgPyAobmV3RWxlbWVudC5pZCA9IGVsZW1lbnRJRCkgOiBudWxsO1xuXHR0ZXh0ID8gKG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0KSA6IG51bGw7XG5cdGlmIChlbGVtZW50ID09IFwiYVwiKSB7XG5cdFx0aHJlZiA/IChuZXdFbGVtZW50LmhyZWYgPSBocmVmKSA6IG51bGw7XG5cdH1cblxuXHRyZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2VuZFRvQm9keShIVE1MKSB7XG5cdHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEhUTUwpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuXHR3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1vZHVsZVJlbmRlcihvYmosIHBhcmVudE5vZGUpIHtcblx0cmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnROb2RlKTtcblx0Zm9yIChsZXQgeCBpbiBvYmopIHtcblx0XHRwYXJlbnROb2RlLmFwcGVuZENoaWxkKG9ialt4XSk7XG5cdH1cbn1cblxuY29uc3QgY2xvc2VXaW5kb3cgPSAoZWxlbWVudCkgPT4ge1xuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHsgbmV3RWxlbWVudCwgc2VuZFRvQm9keSwgcmVtb3ZlQWxsQ2hpbGROb2RlcywgbW9kdWxlUmVuZGVyLCBjbG9zZVdpbmRvdyB9O1xuIiwiaW1wb3J0IHsgbmV3RWxlbWVudCwgc2VuZFRvQm9keSB9IGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlOZXdQcm9qZWN0V2luZG93LCBkaXNwbGF5TmV3VGFza1dpbmRvdyB9IGZyb20gXCIuL2Zvcm1XaW5kb3dzXCI7XG5pbXBvcnQgeyBuZXdUYXNrIH0gZnJvbSBcIi4vdGFza0hhbmRsZXJcIjtcbmltcG9ydCB7IG5ld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0SGFuZGxlclwiO1xuaW1wb3J0IHsgcGFnZVN0YXRlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgc3RhdGljVGFza0NvdW50IH0gZnJvbSBcIi4vdGFza0NvdW50VHJhY2tpbmdcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdExpc3RzXCI7XG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByb2plY3RzLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgcHJvamVjdHNEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcInByb2plY3RzLWRpdlwiKTtcblx0Y29uc3QgcHJvamVjdEhlYWRlciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIik7XG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IG5ld0VsZW1lbnQoXCJoMVwiLCBcInRpdGxlXCIsIC4uLkFycmF5KDEpLCBcIk15IFByb2plY3RzXCIpO1xuXHRjb25zdCBtYWluTGlzdCA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWxpc3RcIiwgXCJhbGwtbGlzdFwiKTtcblx0bWFpbkxpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcIlAwXCIpO1xuXHRwYWdlU3RhdGUucG9wdWxhdGVQcm9qZWN0U3RvcmFnZShcIlAwXCIsIFwiQWxsXCIsIDAsIFwicHJvamVjdFwiKTtcblx0Y29uc3QgbGlzdFRpdGxlID0gbmV3RWxlbWVudChcImgzXCIsIFwicHJvamVjdC10aXRsZVwiLCAuLi5BcnJheSgxKSwgXCJBbGxcIik7XG5cdGNvbnN0IG51bWJlck9mVGFza3MgPSBuZXdFbGVtZW50KFwic3BhblwiLCBcIm51bWJlci1vZi10YXNrc1wiLCAuLi5BcnJheSgxKSwgXCIwXCIpO1xuXG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwidGFzay1jb250YWluZXJcIik7XG5cdGNvbnN0IHRhc2tEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcInRhc2stZGl2XCIpO1xuXHRjb25zdCB0YXNrSGVhZGVyID0gbmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlclwiKTtcblx0Y29uc3QgdGFza1RpdGxlID0gbmV3RWxlbWVudChcImgyXCIsIFwidGl0bGVcIiwgLi4uQXJyYXkoMSksIFwiQWxsXCIpO1xuXHRjb25zdCB0YXNrTGlzdERpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWxpc3QtZGl2XCIsIFwibWFpbi10YXNrLWRpdlwiKTtcblxuXHRjb25zdCBhZGRQcm9qZWN0RGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJhZGQtcHJvamVjdC1kaXZcIik7XG5cdGNvbnN0IGFkZFByb2plY3RJY29uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLCBcImFkZC1wcm9qZWN0LWljb25cIiwgXCJhZGRfY2lyY2xlX291dGxpbmVcIik7XG5cdGNvbnN0IGFkZFByb2plY3QgPSBuZXdFbGVtZW50KFwic3BhblwiLCAuLi5BcnJheSgxKSwgXCJhZGQtcHJvamVjdFwiLCBcIkFkZCBQcm9qZWN0XCIpO1xuXG5cdGNvbnN0IGFkZFRhc2tEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcImFkZC10YXNrLWRpdlwiKTtcblx0Y29uc3QgYWRkVGFza0ljb24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsIFwiYWRkLXRhc2staWNvblwiLCBcImFkZF9jaXJjbGVcIik7XG5cblx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcblx0cHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXHRwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChtYWluTGlzdCk7XG5cdG1haW5MaXN0LmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG5cdG1haW5MaXN0LmFwcGVuZENoaWxkKG51bWJlck9mVGFza3MpO1xuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0RGl2KTtcblx0YWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SWNvbik7XG5cdGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cblx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblx0dGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyKTtcblx0dGFza0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXHR0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcblx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcblx0YWRkVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrSWNvbik7XG5cblx0YWRkUHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHNlbmRUb0JvZHkoZGlzcGxheU5ld1Byb2plY3RXaW5kb3coKSk7XG5cdH0pO1xuXG5cdGFkZFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0c2VuZFRvQm9keShkaXNwbGF5TmV3VGFza1dpbmRvdygpKTtcblx0fSk7XG5cblx0cmV0dXJuIHsgcHJvamVjdHNDb250YWluZXIsIHRhc2tDb250YWluZXIgfTtcbn1cblxuZnVuY3Rpb24gcmVjYWxsKCkge1xuXHRjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtZGl2XCIpO1xuXHRjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXRhc2stZGl2XCIpO1xuXHRsZXQgdG90YWxOdW1iZXJPZlRhc2tzID0gMDtcblx0Y29uc3QgYWxsUHJvamVjdENvdW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1saXN0W2RhdGEtdmFsdWU9UDBdYCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgc3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cdFx0bGV0IHN0b3JhZ2VPYmplY3QgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShzdG9yYWdlS2V5KTtcblx0XHRpZiAoc3RvcmFnZU9iamVjdFtcInR5cGVcIl0gPT0gXCJwcm9qZWN0XCIgJiYgc3RvcmFnZUtleSAhPSBcIlAwXCIpIHtcblx0XHRcdGxldCByZXN0b3JlZFByb2plY3QgPSBuZXdQcm9qZWN0KHN0b3JhZ2VPYmplY3RbXCJwcm9qZWN0TmFtZVwiXSwgc3RvcmFnZUtleSwgc3RvcmFnZU9iamVjdFtcIm51bWJlck9mVGFza3NcIl0pO1xuXHRcdFx0cHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocmVzdG9yZWRQcm9qZWN0KTtcblx0XHR9IGVsc2UgaWYgKHN0b3JhZ2VPYmplY3RbXCJ0eXBlXCJdID09IFwidGFza1wiKSB7XG5cdFx0XHR0b3RhbE51bWJlck9mVGFza3MgKz0gMTtcblxuXHRcdFx0bGV0IHJlc3RvcmVkVGFzayA9IG5ld1Rhc2soXG5cdFx0XHRcdHN0b3JhZ2VLZXksXG5cdFx0XHRcdHN0b3JhZ2VPYmplY3RbXCJwcm9qZWN0TmFtZVwiXSxcblx0XHRcdFx0c3RvcmFnZU9iamVjdFtcInRhc2tOYW1lXCJdLFxuXHRcdFx0XHRzdG9yYWdlT2JqZWN0W1wibm90ZXNcIl0sXG5cdFx0XHRcdHN0b3JhZ2VPYmplY3RbXCJkYXlcIl0sXG5cdFx0XHRcdHN0b3JhZ2VPYmplY3RbXCJ0aW1lXCJdLFxuXHRcdFx0XHRzdG9yYWdlT2JqZWN0W1wiY29tcGxldGVcIl1cblx0XHRcdCk7XG5cdFx0XHR0YXNrRGl2LmFwcGVuZENoaWxkKHJlc3RvcmVkVGFzayk7XG5cdFx0fVxuXHR9XG5cdGFsbFByb2plY3RDb3VudC5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gdG90YWxOdW1iZXJPZlRhc2tzO1xuXHRzdGF0aWNUYXNrQ291bnQoKTtcbn1cblxuZXhwb3J0IHsgaG9tZSwgcmVjYWxsIH07XG4iLCJpbXBvcnQgeyBuZXdFbGVtZW50LCBjbG9zZVdpbmRvdyB9IGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHByb2plY3RzLCB0YXNrcyB9IGZyb20gXCIuL3Byb2plY3RMaXN0c1wiO1xuaW1wb3J0IHsgcGFnZVN0YXRlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgZHluYW1pY1Rhc2tDb3VudCB9IGZyb20gXCIuL3Rhc2tDb3VudFRyYWNraW5nXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0V2luZG93KHN0b3JhZ2VLZXkgPSBudWxsKSB7XG5cdGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcIm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xuXHRjb25zdCBuZXdQcm9qZWN0RGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCAuLi5BcnJheSgxKSwgXCJuZXctcHJvamVjdC1mb3JtLWRpdlwiKTtcblx0Y29uc3QgdGl0bGUgPSBuZXdFbGVtZW50KFwiaDJcIiwgXCJwb3AtdXAtd2luZG93LXRpdGxlXCIsIC4uLkFycmF5KDEpLCBcIk5ldyBQcm9qZWN0XCIpO1xuXHRjb25zdCBwcm9qZWN0TmFtZUlucHV0TGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJOYW1lOlwiKTtcblx0Y29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImZvcm0taW5wdXRcIiwgXCJwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG5cdHByb2plY3ROYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHRwcm9qZWN0TmFtZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC1uYW1lLWlucHV0XCIpO1xuXHRjb25zdCBidXR0b25TZWxlY3RvckRpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwiYnV0dG9uLXNlbGVjdG9yLWRpdlwiKTtcblx0Y29uc3QgY2FuY2VsQnV0dG9uID0gbmV3RWxlbWVudChcImJ1dHRvblwiLCBcImJ1dHRvblwiLCBcInByb2plY3QtY2FuY2VsLWJ1dHRvblwiLCBcIkNhbmNlbFwiKTtcblx0Y29uc3Qgc3VibWl0QnV0dG9uID0gbmV3RWxlbWVudChcImlucHV0XCIsIFwiYnV0dG9uXCIsIFwicHJvamVjdC1zdWJtaXQtYnV0dG9uXCIpO1xuXHRzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG5cdHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiT0tcIjtcblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbmFtZS1pbnB1dFwiKTtcblxuXHRpZiAoc3RvcmFnZUtleSkge1xuXHRcdHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShgJHtzdG9yYWdlS2V5fWApW1wicHJvamVjdE5hbWVcIl07XG5cdH1cblxuXHRuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuXHRuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblx0bmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0TGFiZWwpO1xuXHRuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuXHRuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGJ1dHRvblNlbGVjdG9yRGl2KTtcblx0YnV0dG9uU2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblx0YnV0dG9uU2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuXHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjbG9zZVdpbmRvdyhuZXdQcm9qZWN0Q29udGFpbmVyKTtcblx0fSk7XG5cblx0c3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpdlwiKTtcblx0XHRsZXQgcHJvamVjdE5hbWVWYWx1ZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XG5cdFx0bGV0IGluc3RhbnRpYXRlUHJvamVjdE9iamVjdCA9IHByb2plY3RzKHByb2plY3ROYW1lVmFsdWUpO1xuXHRcdGlmIChzdG9yYWdlS2V5KSB7XG5cdFx0XHRjb25zdCB1cGRhdGVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fV1gKTtcblx0XHRcdHVwZGF0ZVByb2plY3REaXYuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lVmFsdWU7XG5cdFx0XHRpbnN0YW50aWF0ZVByb2plY3RPYmplY3QudXBkYXRlKHN0b3JhZ2VLZXksIHByb2plY3ROYW1lVmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbmV3UHJvamVjdCA9IGluc3RhbnRpYXRlUHJvamVjdE9iamVjdC5jcmVhdGUoKTtcblx0XHRcdHByb2plY3RzRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXHRcdH1cblxuXHRcdGNsb3NlV2luZG93KG5ld1Byb2plY3RDb250YWluZXIpO1xuXHR9KTtcblxuXHRyZXR1cm4gbmV3UHJvamVjdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5ld1Rhc2tXaW5kb3coc3RvcmFnZUtleSA9IG51bGwpIHtcblx0Y29uc3QgbmV3VGFza0NvbnRhaW5lciA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgLi4uQXJyYXkoMSksIFwibmV3LXRhc2stZm9ybS1jb250YWluZXJcIik7XG5cdGNvbnN0IG5ld1Rhc2tEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcIm5ldy10YXNrLWZvcm0tZGl2XCIpO1xuXHRjb25zdCB0aXRsZSA9IG5ld0VsZW1lbnQoXCJoMlwiLCBcInBvcC11cC13aW5kb3ctdGl0bGVcIiwgLi4uQXJyYXkoMSksIFwiTmV3IFRhc2tcIik7XG5cblx0Y29uc3QgZm9ybSA9IG5ld0VsZW1lbnQoXCJmb3JtXCIsIC4uLkFycmF5KDEpLCBcInRhc2stZm9ybVwiKTtcblxuXHRjb25zdCB0YXNrTmFtZUlucHV0ID0gbmV3RWxlbWVudChcImlucHV0XCIsIFwiZm9ybS1pbnB1dFwiLCBcInRhc2stbmFtZS1pbnB1dFwiKTtcblx0dGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdGNvbnN0IHRhc2tOYW1lSW5wdXRMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIlRhc2s6XCIpO1xuXHR0YXNrTmFtZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1uYW1lLWlucHV0XCIpO1xuXG5cdGNvbnN0IHRhc2tOb3Rlc0lucHV0ID0gbmV3RWxlbWVudChcImlucHV0XCIsIFwiZm9ybS1pbnB1dFwiLCBcInRhc2stbm90ZXMtaW5wdXRcIik7XG5cdHRhc2tOb3Rlc0lucHV0LnR5cGUgPSBcInRleHRcIjtcblx0Y29uc3QgdGFza05vdGVzSW5wdXRMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIk5vdGVzOlwiKTtcblx0dGFza05vdGVzSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLW5vdGVzLWlucHV0XCIpO1xuXG5cdGNvbnN0IHByb2plY3ROYW1lU2VsZWN0ID0gbmV3RWxlbWVudChcInNlbGVjdFwiLCBcImZvcm0tc2VsZWN0aW9uXCIsIFwicHJvamVjdC1uYW1lLXNlbGVjdGlvblwiKTtcblx0Y29uc3QgZGF0YUF0dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1saXN0XCIpO1xuXHRBcnJheS5mcm9tKGRhdGFBdHRzKS5mb3JFYWNoKChkKSA9PiB7XG5cdFx0Y29uc3QgcHJvamVjdE5hbWVTZWxlY3RPcHRpb24gPSBuZXdFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdGNvbnN0IG5hbWVGcm9tU3RvcmFnZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGQuZGF0YXNldC52YWx1ZSk7XG5cdFx0cHJvamVjdE5hbWVTZWxlY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgbmFtZUZyb21TdG9yYWdlLnByb2plY3ROYW1lKTtcblx0XHRwcm9qZWN0TmFtZVNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IG5hbWVGcm9tU3RvcmFnZS5wcm9qZWN0TmFtZTtcblx0XHRwcm9qZWN0TmFtZVNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVNlbGVjdE9wdGlvbik7XG5cdH0pO1xuXG5cdGNvbnN0IHByb2plY3ROYW1lU2VsZWN0TGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJTZWxlY3QgYSBwcm9qZWN0XCIpO1xuXHRwcm9qZWN0TmFtZVNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbmFtZS1zZWxlY3Rpb25cIik7XG5cblx0Y29uc3QgZGF0ZURpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkYXRlLXRpbWVcIiwgXCJkYXRlXCIpO1xuXG5cdGNvbnN0IGRhdGVSYWRpb1llcyA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCAuLi5BcnJheSgxKSwgXCJpbmNsdWRlLWRhdGVcIik7XG5cdGRhdGVSYWRpb1llcy50eXBlID0gXCJSYWRpb1wiO1xuXHRjb25zdCBkYXRlUmFkaW9ZZXNMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIlllc1wiKTtcblx0ZGF0ZVJhZGlvWWVzTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5jbHVkZS1kYXRlXCIpO1xuXG5cdGNvbnN0IGRhdGVSYWRpb05vID0gbmV3RWxlbWVudChcImlucHV0XCIsIC4uLkFycmF5KDEpLCBcImRvbnQtaW5jbHVkZS1kYXRlXCIpO1xuXHRkYXRlUmFkaW9Oby50eXBlID0gXCJSYWRpb1wiO1xuXHRkYXRlUmFkaW9Oby5jaGVja2VkID0gdHJ1ZTtcblx0Y29uc3QgZGF0ZVJhZGlvTm9MYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIk5vXCIpO1xuXHRkYXRlUmFkaW9Ob0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRvbnQtaW5jbHVkZS1kYXRlXCIpO1xuXG5cdGNvbnN0IGRhdGVJbnB1dCA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImZvcm0taW5wdXRcIiwgXCJ0YXNrLWRhdGUtaW5wdXRcIik7XG5cdGRhdGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdGRhdGVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cdGNvbnN0IGRhdGVJbnB1dExhYmVsID0gbmV3RWxlbWVudChcImxhYmVsXCIsIFwiZm9ybS1sYWJlbHNcIiwgLi4uQXJyYXkoMSksIFwiRGF0ZTpcIik7XG5cdGRhdGVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stZGF0ZS1pbnB1dFwiKTtcblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cdGNvbnN0IHRpbWVEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwiZGF0ZS10aW1lXCIsIFwidGltZVwiKTtcblxuXHRjb25zdCB0aW1lUmFkaW9ZZXMgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgLi4uQXJyYXkoMSksIFwiaW5jbHVkZS10aW1lXCIpO1xuXHR0aW1lUmFkaW9ZZXMudHlwZSA9IFwiUmFkaW9cIjtcblx0Y29uc3QgdGltZVJhZGlvWWVzTGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJZZXNcIik7XG5cdHRpbWVSYWRpb1llc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImluY2x1ZGUtdGltZVwiKTtcblxuXHRjb25zdCB0aW1lUmFkaW9ObyA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCAuLi5BcnJheSgxKSwgXCJkb250LWluY2x1ZGUtdGltZVwiKTtcblx0dGltZVJhZGlvTm8udHlwZSA9IFwiUmFkaW9cIjtcblx0dGltZVJhZGlvTm8uY2hlY2tlZCA9IHRydWU7XG5cdGNvbnN0IHRpbWVSYWRpb05vTGFiZWwgPSBuZXdFbGVtZW50KFwibGFiZWxcIiwgXCJmb3JtLWxhYmVsc1wiLCAuLi5BcnJheSgxKSwgXCJOb1wiKTtcblx0dGltZVJhZGlvTm9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkb250LWluY2x1ZGUtdGltZVwiKTtcblxuXHRjb25zdCB0aW1lSW5wdXQgPSBuZXdFbGVtZW50KFwiaW5wdXRcIiwgXCJmb3JtLWlucHV0XCIsIFwidGFzay10aW1lLWlucHV0XCIpO1xuXHR0aW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHR0aW1lSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRjb25zdCB0aW1lSW5wdXRMYWJlbCA9IG5ld0VsZW1lbnQoXCJsYWJlbFwiLCBcImZvcm0tbGFiZWxzXCIsIC4uLkFycmF5KDEpLCBcIlRpbWU6XCIpO1xuXHR0aW1lSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLXRpbWUtaW5wdXRcIik7XG5cblx0Y29uc3QgYnV0dG9uU2VsZWN0b3JEaXYgPSBuZXdFbGVtZW50KFwiZGl2XCIsIC4uLkFycmF5KDEpLCBcImJ1dHRvbi1zZWxlY3Rvci1kaXZcIik7XG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJidXR0b25cIiwgXCJ0YXNrLWNhbmNlbC1idXR0b25cIiwgXCJDYW5jZWxcIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcImJ1dHRvblwiLCBcInRhc2stc3VibWl0LWJ1dHRvblwiKTtcblx0c3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuXHRzdWJtaXRCdXR0b24udmFsdWUgPSBcIk9LXCI7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWZvcm1cIik7XG5cblx0aWYgKHN0b3JhZ2VLZXkpIHtcblx0XHR0YXNrTmFtZUlucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcInRhc2tOYW1lXCJdO1xuXHRcdHRhc2tOb3Rlc0lucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcIm5vdGVzXCJdO1xuXHRcdHByb2plY3ROYW1lU2VsZWN0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcInByb2plY3ROYW1lXCJdO1xuXG5cdFx0aWYgKHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJkYXlcIl0pIHtcblx0XHRcdGRhdGVSYWRpb1llcy5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdGRhdGVSYWRpb05vLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdGRhdGVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0ZGF0ZUlucHV0LnZhbHVlID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UoYCR7c3RvcmFnZUtleX1gKVtcImRheVwiXTtcblx0XHR9XG5cdFx0aWYgKHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJ0aW1lXCJdKSB7XG5cdFx0XHR0aW1lUmFkaW9ZZXMuY2hlY2tlZCA9IHRydWU7XG5cdFx0XHR0aW1lUmFkaW9Oby5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR0aW1lSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHRpbWVJbnB1dC52YWx1ZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGAke3N0b3JhZ2VLZXl9YClbXCJ0aW1lXCJdO1xuXHRcdH1cblx0fVxuXG5cdG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XG5cdG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHRuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXHRmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXRMYWJlbCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTZWxlY3RMYWJlbCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTZWxlY3QpO1xuXHRmb3JtLmFwcGVuZENoaWxkKHRhc2tOb3Rlc0lucHV0TGFiZWwpO1xuXHRmb3JtLmFwcGVuZENoaWxkKHRhc2tOb3Rlc0lucHV0KTtcblx0Zm9ybS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXRMYWJlbCk7XG5cdGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlUmFkaW9ZZXNMYWJlbCk7XG5cdGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZVJhZGlvWWVzKTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlUmFkaW9Ob0xhYmVsKTtcblx0ZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlUmFkaW9Obyk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQodGltZURpdik7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZUlucHV0TGFiZWwpO1xuXHR0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZVJhZGlvWWVzTGFiZWwpO1xuXHR0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVSYWRpb1llcyk7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZVJhZGlvTm9MYWJlbCk7XG5cdHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZVJhZGlvTm8pO1xuXHRuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvblNlbGVjdG9yRGl2KTtcblx0YnV0dG9uU2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblx0YnV0dG9uU2VsZWN0b3JEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuXHRkYXRlUmFkaW9ZZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoZGF0ZVJhZGlvWWVzLmNoZWNrZWQpIHtcblx0XHRcdGRhdGVSYWRpb05vLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdGRhdGVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cblx0ZGF0ZVJhZGlvTm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoZGF0ZVJhZGlvTm8uY2hlY2tlZCkge1xuXHRcdFx0ZGF0ZVJhZGlvWWVzLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdGRhdGVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblxuXHR0aW1lUmFkaW9ZZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAodGltZVJhZGlvWWVzLmNoZWNrZWQpIHtcblx0XHRcdHRpbWVSYWRpb05vLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdHRpbWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cblx0dGltZVJhZGlvTm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAodGltZVJhZGlvTm8uY2hlY2tlZCkge1xuXHRcdFx0dGltZVJhZGlvWWVzLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdHRpbWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblxuXHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjbG9zZVdpbmRvdyhuZXdUYXNrQ29udGFpbmVyKTtcblx0fSk7XG5cblx0c3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10YXNrLWRpdlwiKTtcblx0XHRsZXQgdGFza05hbWVWYWx1ZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XG5cdFx0bGV0IHRhc2tQcm9qZWN0TmFtZVZhbHVlID0gcHJvamVjdE5hbWVTZWxlY3QudmFsdWU7XG5cdFx0bGV0IHRhc2tOb3Rlc1ZhbHVlID0gdGFza05vdGVzSW5wdXQudmFsdWU7XG5cdFx0bGV0IHRhc2tEYXRlVmFsdWUgPSBcIlwiO1xuXHRcdGxldCB0YXNrVGltZVZhbHVlID0gXCJcIjtcblx0XHRpZiAoZGF0ZUlucHV0KSB7XG5cdFx0XHR0YXNrRGF0ZVZhbHVlID0gZGF0ZUlucHV0LnZhbHVlO1xuXHRcdH1cblx0XHRpZiAodGltZUlucHV0KSB7XG5cdFx0XHR0YXNrVGltZVZhbHVlID0gdGltZUlucHV0LnZhbHVlO1xuXHRcdH1cblx0XHRsZXQgaW5zdGFudGlhdGVUYXNrT2JqZWN0ID0gdGFza3ModGFza05hbWVWYWx1ZSwgdGFza1Byb2plY3ROYW1lVmFsdWUsIHRhc2tOb3Rlc1ZhbHVlLCB0YXNrRGF0ZVZhbHVlLCB0YXNrVGltZVZhbHVlKTtcblx0XHRpZiAoc3RvcmFnZUtleSkge1xuXHRcdFx0Y29uc3QgdXBkYXRlVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWxpc3RbZGF0YS12YWx1ZT0ke3N0b3JhZ2VLZXl9XWApLmNoaWxkTm9kZXNbMV07XG5cdFx0XHR1cGRhdGVUYXNrRGl2LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB0YXNrTmFtZVZhbHVlO1xuXHRcdFx0dXBkYXRlVGFza0Rpdi5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB0YXNrTm90ZXNWYWx1ZTtcblx0XHRcdHVwZGF0ZVRhc2tEaXYuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdGFza0RhdGVWYWx1ZTtcblx0XHRcdHVwZGF0ZVRhc2tEaXYuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gdGFza1RpbWVWYWx1ZTtcblx0XHRcdGxldCBvbGRQcm9qZWN0TmFtZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKHN0b3JhZ2VLZXkpWydwcm9qZWN0TmFtZSddXG5cdFx0XHRkeW5hbWljVGFza0NvdW50KHRhc2tQcm9qZWN0TmFtZVZhbHVlLCBzdG9yYWdlS2V5LCBvbGRQcm9qZWN0TmFtZSk7XG5cdFx0XHRpbnN0YW50aWF0ZVRhc2tPYmplY3QudXBkYXRlKHN0b3JhZ2VLZXksIHRhc2tQcm9qZWN0TmFtZVZhbHVlLCB0YXNrTmFtZVZhbHVlLCB0YXNrTm90ZXNWYWx1ZSwgdGFza0RhdGVWYWx1ZSwgdGFza1RpbWVWYWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBuZXdUYXNrID0gaW5zdGFudGlhdGVUYXNrT2JqZWN0LmNyZWF0ZSgpO1xuXHRcdFx0dGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblx0XHR9XG5cblx0XHRjbG9zZVdpbmRvdyhuZXdUYXNrQ29udGFpbmVyKTtcblx0fSk7XG5cblx0cmV0dXJuIG5ld1Rhc2tDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlOZXdQcm9qZWN0V2luZG93LCBkaXNwbGF5TmV3VGFza1dpbmRvdyB9O1xuIiwiaW1wb3J0IHsgbmV3RWxlbWVudCwgc2VuZFRvQm9keSB9IGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlOZXdQcm9qZWN0V2luZG93IH0gZnJvbSBcIi4vZm9ybVdpbmRvd3NcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdExpc3RzXCI7XG5pbXBvcnQgeyBwYWdlU3RhdGUgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkZWxldGluZ1Rhc2tDb3VudCB9IGZyb20gXCIuL3Rhc2tDb3VudFRyYWNraW5nXCI7XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QobmFtZSwgc3RvcmFnZUtleSwgbnVtYmVyT2ZUYXNrcykge1xuXHRjb25zdCBtb2RpZmllZE5hbWVGb3JJRCA9IG5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xuXHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInByb2plY3QtbGlzdFwiLCBgJHttb2RpZmllZE5hbWVGb3JJRH0tbGlzdGApO1xuXHRuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cdGNvbnN0IG5ld0xpc3RUaXRsZSA9IG5ld0VsZW1lbnQoXCJoM1wiLCBcInByb2plY3QtdGl0bGVcIiwgLi4uQXJyYXkoMSksIGAke25hbWV9YCk7XG5cdGNvbnN0IG51bWJlck9mVGFza3NFbGVtZW50ID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJudW1iZXItb2YtdGFza3NcIiwgLi4uQXJyYXkoMSksIGAke251bWJlck9mVGFza3N9YCk7XG5cblx0Y29uc3QgbW9yZUluZm9JY29uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLCBgaW5mby1pY29uLSR7c3RvcmFnZUtleX1gLCBcImluZm9cIik7XG5cdG1vcmVJbmZvSWNvbi5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLWljb25cIik7XG5cdG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0bW9yZUluZm9JY29uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHR9KTtcblxuXHRuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0bW9yZUluZm9JY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fSk7XG5cblx0bW9yZUluZm9JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZHJvcERvd25EaXYgPSBkcm9wRG93bk9wdGlvbihzdG9yYWdlS2V5KTtcblx0XHRuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRyb3BEb3duRGl2KTtcblx0fSk7XG5cblx0bmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdMaXN0VGl0bGUpO1xuXHRuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG51bWJlck9mVGFza3NFbGVtZW50KTtcblx0bmV3UHJvamVjdC5hcHBlbmRDaGlsZChtb3JlSW5mb0ljb24pO1xuXG5cdHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBkcm9wRG93bk9wdGlvbihzdG9yYWdlS2V5KSB7XG5cdGNvbnN0IGRyb3BEb3duRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcImRyb3AtZG93bi1jb250ZW50XCIsIFwiZHJvcC1kb3duXCIpO1xuXHRjb25zdCB1cGRhdGVCdXR0b24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcImRyb3AtZG93bi1vcHRpb25cIiwgYHRhc2ske3N0b3JhZ2VLZXl9LXVwZGF0ZS1idXR0b25gLCBcIlJlbmFtZVwiKTtcblx0Y29uc3QgZGVsZXRlQnV0dG9uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJkcm9wLWRvd24tb3B0aW9uXCIsIGB0YXNrJHtzdG9yYWdlS2V5fS1kZWxldGUtYnV0dG9uYCwgXCJEZWxldGVcIik7XG5cdHVwZGF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHN0b3JhZ2VLZXkpO1xuXHRkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzdG9yYWdlS2V5KTtcblxuXHRsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnByb2plY3QtbGlzdFtkYXRhLXZhbHVlPSR7c3RvcmFnZUtleX1dYCk7XG5cdGxldCBtb3JlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAjaW5mby1pY29uLSR7c3RvcmFnZUtleX1gKTtcblxuXHQvKiBUaGlzIGJlaGF2aW9yIGlzIHVuZXhwZWN0ZWQuIGxvb3BpbmcgdGhyb3VnaCBhbGwgc3RvcmFnZWtleXMgaW5zdGVhZCBvZiBqdXN0IHRoZSBvbmUgc3RvcmFnZVxuICAgICAgICBrZXkgYXNzb2NpYXRlZCB3aXRoIHRoZSBjbGlja2VkIGVsZW1lbnQuIGVycm9yIG9jY3VycyBpbiB0aGUgY29uc29sZSBhdCBldmVyeSBleGVjdXRpb24gKi9cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3AtZG93blwiKS5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT0gbW9yZSkge1xuXHRcdFx0bmV3UHJvamVjdC5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3AtZG93blwiKSk7XG5cdFx0fVxuXHR9KTtcblxuXHR1cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRzZW5kVG9Cb2R5KGRpc3BsYXlOZXdQcm9qZWN0V2luZG93KHN0b3JhZ2VLZXkpKTtcblx0XHRuZXdQcm9qZWN0LnJlbW92ZUNoaWxkKGRyb3BEb3duRGl2KTtcblx0fSk7XG5cblx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgbWFpblByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIik7XG5cdFx0Y29uc3QgZGVsZXRlZFByb2plY3QgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWxpc3RbZGF0YS12YWx1ZT0ke3N0b3JhZ2VLZXl9YCk7XG5cdFx0cmVtb3ZlQWxsVGFza3Moc3RvcmFnZUtleSk7XG5cdFx0cHJvamVjdHMoKS5kZWxldGVQcm9qZWN0KHN0b3JhZ2VLZXkpO1xuXHRcdG1haW5Qcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChkZWxldGVkUHJvamVjdCk7XG5cdH0pO1xuXG5cdGRyb3BEb3duRGl2LmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG5cdGRyb3BEb3duRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cblx0cmV0dXJuIGRyb3BEb3duRGl2O1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxUYXNrcyhzdG9yYWdlS2V5KSB7XG5cdGNvbnN0IG1haW5UYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXRhc2stZGl2XCIpO1xuXG5cdGxldCBwcm9qZWN0TmFtZSA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKHN0b3JhZ2VLZXkpW1wicHJvamVjdE5hbWVcIl07XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRhc2tLZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXHRcdGxldCB0YXNrT2JqZWN0ID0gcGFnZVN0YXRlLmdldFN0b3JhZ2UodGFza0tleSk7XG5cdFx0aWYgKHRhc2tPYmplY3RbXCJ0eXBlXCJdID09IFwidGFza1wiICYmIHRhc2tPYmplY3RbXCJwcm9qZWN0TmFtZVwiXSA9PSBwcm9qZWN0TmFtZSkge1xuXHRcdFx0bGV0IGRlbGV0ZWRUYXNrID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAudGFzay1saXN0W2RhdGEtdmFsdWU9JHt0YXNrS2V5fWApXG5cdFx0XHRtYWluVGFza0Rpdi5yZW1vdmVDaGlsZChkZWxldGVkVGFzaylcblx0XHRcdGRlbGV0aW5nVGFza0NvdW50KHByb2plY3ROYW1lKVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgeyBuZXdQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBwYWdlU3RhdGUgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBuZXdUYXNrIH0gZnJvbSBcIi4vdGFza0hhbmRsZXJcIjtcbmltcG9ydCB7IG5ld1Byb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0SGFuZGxlclwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IChuYW1lKSA9PiB7XG5cdGNvbnN0IHR5cGUgPSBcInByb2plY3RcIjtcblx0Y29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cdGxldCB0b3RhbE51bWJlck9mVGFza3MgPSAwO1xuXHRsZXQgbnVtYmVyT2ZUYXNrcyA9IDA7XG5cblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGxldCBzdG9yYWdlS2V5ID0ga2V5R2VuZXJhdG9yKCk7XG5cdFx0c3RvcmUoc3RvcmFnZUtleSwgbmFtZSwgbnVtYmVyT2ZUYXNrcywgdHlwZSk7XG5cdFx0cmV0dXJuIG5ld1Byb2plY3QobmFtZSwgc3RvcmFnZUtleSwgbnVtYmVyT2ZUYXNrcyk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlID0gZnVuY3Rpb24gKGtleSwgcHJvamVjdE5hbWUpIHtcblx0XHRsZXQgZGF0YmFzZU9iaiA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGtleSk7XG5cblx0XHRkYXRiYXNlT2JqICYmIHBhZ2VTdGF0ZS5wb3B1bGF0ZVByb2plY3RTdG9yYWdlKGtleSwgcHJvamVjdE5hbWUsIGRhdGJhc2VPYmpbXCJudW1iZXJPZlRhc2tzXCJdLCBkYXRiYXNlT2JqW1widHlwZVwiXSk7XG5cblx0XHRyZXR1cm47XG5cdH07XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgcGFnZVN0YXRlLmRlbGV0ZVN0b3JhZ2Uoa2V5KTtcbiAgICB9XG5cblx0Y29uc3QgdXBkYXRlTnVtYmVyT2ZUYXNrcyA9IGZ1bmN0aW9uIChjb3VudCkge1xuXHRcdHRvdGFsTnVtYmVyT2ZUYXNrcyArPSBjb3VudDtcblx0fTtcblxuXHRjb25zdCBrZXlHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGkgPSAxO1xuXHRcdGxldCBrZXlUZXN0ID0gMTtcblx0XHRsZXQga2V5O1xuXHRcdHdoaWxlIChrZXlUZXN0KSB7XG5cdFx0XHRrZXkgPSBgUCR7aX1gO1xuXHRcdFx0a2V5VGVzdCA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGtleSk7XG5cdFx0XHRpICs9IDE7XG5cdFx0fVxuXHRcdHJldHVybiBrZXk7XG5cdH07XG5cblx0Y29uc3Qgc3RvcmUgPSBmdW5jdGlvbiAoa2V5LCBwcm9qZWN0TmFtZSwgbnVtYmVyT2ZUYXNrcywgdHlwZSkge1xuXHRcdHBhZ2VTdGF0ZS5wb3B1bGF0ZVByb2plY3RTdG9yYWdlKGtleSwgcHJvamVjdE5hbWUsIG51bWJlck9mVGFza3MsIHR5cGUpO1xuXHR9O1xuXG5cdHJldHVybiB7IGdldE5hbWUsIGNyZWF0ZSwgdXBkYXRlLCBkZWxldGVQcm9qZWN0LCB1cGRhdGVOdW1iZXJPZlRhc2tzIH07XG59O1xuXG5jb25zdCB0YXNrcyA9ICh0YXNrLCBwcm9qZWN0ID0gXCJBbGxcIiwgbm90ZXMgPSBcIlwiLCBkYXkgPSBcIlwiLCB0aW1lID0gXCJcIikgPT4ge1xuXHRjb25zdCB0eXBlID0gXCJ0YXNrXCI7XG5cdGxldCBjb21wbGV0ZSA9IGZhbHNlO1xuICAgIFxuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IHN0b3JhZ2VLZXkgPSBrZXlHZW5lcmF0b3IoKTtcblx0XHRzdG9yZShzdG9yYWdlS2V5LCB0eXBlLCBjb21wbGV0ZSk7XG5cdFx0cmV0dXJuIG5ld1Rhc2soc3RvcmFnZUtleSwgcHJvamVjdCwgdGFzaywgbm90ZXMsIGRheSwgdGltZSwgY29tcGxldGUpO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZSA9IGZ1bmN0aW9uIChrZXksIHByb2plY3ROYW1lLCB0YXNrVGl0bGUsIG5vdGVzLCBkYXksIHRpbWUpIHtcblx0XHRsZXQgZGF0YmFzZU9iaiA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKGtleSk7XG5cblx0XHRkYXRiYXNlT2JqICYmIHBhZ2VTdGF0ZS5wb3B1bGF0ZVRhc2tTdG9yYWdlKGtleSwgcHJvamVjdE5hbWUsIHRhc2tUaXRsZSwgbm90ZXMsIGRheSwgdGltZSwgZGF0YmFzZU9ialtcInR5cGVcIl0sIGRhdGJhc2VPYmpbXCJjb21wbGV0ZVwiXSk7XG5cblx0XHRyZXR1cm47XG5cdH07XG5cblx0Y29uc3QgZGVsZXRlVGFzayA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRwYWdlU3RhdGUuZGVsZXRlU3RvcmFnZShrZXkpO1xuXHR9O1xuXG5cdGNvbnN0IGtleUdlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgaSA9IDE7XG5cdFx0bGV0IGtleVRlc3QgPSAxO1xuXHRcdGxldCBrZXk7XG5cdFx0d2hpbGUgKGtleVRlc3QpIHtcblx0XHRcdGtleSA9IGBUJHtpfWA7XG5cdFx0XHRrZXlUZXN0ID0gcGFnZVN0YXRlLmdldFN0b3JhZ2Uoa2V5KTtcblx0XHRcdGkgKz0gMTtcblx0XHR9XG5cdFx0cmV0dXJuIGtleTtcblx0fTtcblxuXHRjb25zdCBzdG9yZSA9IGZ1bmN0aW9uIChrZXksIHR5cGUsIGNvbXBsZXRlKSB7XG5cdFx0cGFnZVN0YXRlLnBvcHVsYXRlVGFza1N0b3JhZ2Uoa2V5LCBwcm9qZWN0LCB0YXNrLCBub3RlcywgZGF5LCB0aW1lLCB0eXBlLCBjb21wbGV0ZSk7XG5cdH07XG5cblx0cmV0dXJuIHsgY3JlYXRlLCB1cGRhdGUsIGRlbGV0ZVRhc2ssIHN0b3JlIH07XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0cywgdGFza3MgfTtcbiIsImNvbnN0IHBhZ2VTdGF0ZSA9ICgoKSA9PiB7XG5cdGNvbnN0IHBvcHVsYXRlUHJvamVjdFN0b3JhZ2UgPSAob2JqZWN0S2V5ID0gXCJwcm9qZWN0c1wiLCBuYW1lLCBjb3VudCwgdHlwZSkgPT4ge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuXHRcdFx0b2JqZWN0S2V5LFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG5cdFx0XHRcdHByb2plY3ROYW1lOiBuYW1lLFxuXHRcdFx0XHRudW1iZXJPZlRhc2tzOiBjb3VudCxcblx0XHRcdH0pXG5cdFx0KTtcblx0fTtcblxuICAgIGNvbnN0IHBvcHVsYXRlVGFza1N0b3JhZ2UgPSAob2JqZWN0S2V5ID0gXCJ0YXNrc1wiLCBuYW1lLCB0YXNrVGl0bGUsIG5vdGVzLCBkYXksIHRpbWUsIHR5cGUsIGNvbXBsZXRlKSA9PiB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXG5cdFx0XHRvYmplY3RLZXksXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcblx0XHRcdFx0cHJvamVjdE5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgdGFza05hbWU6IHRhc2tUaXRsZSxcbiAgICAgICAgICAgICAgICBub3Rlczogbm90ZXMsXG4gICAgICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogY29tcGxldGUsXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH07XG5cblx0Y29uc3QgZ2V0U3RvcmFnZSA9IChvYmplY3RLZXkpID0+IHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvYmplY3RLZXkpKTtcblx0fTtcblxuXHRjb25zdCBkZWxldGVTdG9yYWdlID0gKG9iamVjdEtleSkgPT4ge1xuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShvYmplY3RLZXkpO1xuXHR9O1xuXG5cdHJldHVybiB7IHBvcHVsYXRlUHJvamVjdFN0b3JhZ2UsIHBvcHVsYXRlVGFza1N0b3JhZ2UsIGdldFN0b3JhZ2UsIGRlbGV0ZVN0b3JhZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHBhZ2VTdGF0ZSB9O1xuIiwiaW1wb3J0IHsgcGFnZVN0YXRlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG4vLyBjb25zdCBhbGxQcm9qZWN0Q291bnQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWxpc3RbZGF0YS12YWx1ZT1QMF1gKTtcblxuZnVuY3Rpb24gc3RhdGljVGFza0NvdW50KCkge1xuXHRjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtZGl2XCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBzdG9yYWdlS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblx0XHRsZXQgc3RvcmFnZU9iamVjdCA9IHBhZ2VTdGF0ZS5nZXRTdG9yYWdlKHN0b3JhZ2VLZXkpO1xuXHRcdGlmIChzdG9yYWdlT2JqZWN0W1widHlwZVwiXSA9PSBcInRhc2tcIikge1xuXHRcdFx0Zm9yIChsZXQgcCA9IDA7IHAgPCBwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzLmxlbmd0aDsgcCsrKSB7XG5cdFx0XHRcdGlmIChwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgIT0gXCJBbGxcIikge1xuXHRcdFx0XHRcdGlmIChwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPT0gc3RvcmFnZU9iamVjdFtcInByb2plY3ROYW1lXCJdKSB7XG5cdFx0XHRcdFx0XHQrK3Byb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZHluYW1pY1Rhc2tDb3VudChwcm9qZWN0TmFtZSwgc3RvcmFnZUtleSA9IG51bGwsIG9sZFByb2plY3QgPSBudWxsKSB7XG5cdGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIik7XG5cblx0Zm9yIChsZXQgcCA9IDA7IHAgPCBwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzLmxlbmd0aDsgcCsrKSB7XG5cdFx0Ly9UbyBwcmV2ZW50IGRlY3JlbWVudGluZyB0aGUgdG90YWwgbnVtYmVyIG9mIHRhc2tzIGZvciBlZGl0aW5nIGV4aXN0aW5nIHRhc2sgZ3JvdXBcblx0XHRpZiAocHJvamVjdE5hbWUgPT0gXCJBbGxcIiAmJiAhb2xkUHJvamVjdCkge1xuXHRcdFx0Kytwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHByb2plY3ROYW1lID09IFwiQWxsXCIgJiYgb2xkUHJvamVjdCkge1xuXHRcdFx0aWYgKHByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9PSBvbGRQcm9qZWN0KSB7XG5cdFx0XHRcdC0tcHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9PSBwcm9qZWN0TmFtZSkge1xuXHRcdFx0Kytwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0XHRpZiAoIXN0b3JhZ2VLZXkpIHtcblx0XHRcdFx0Kytwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7IC8vZm9yIFwiQWxsXCIgcHJvamVjdHNcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAob2xkUHJvamVjdCAmJiBvbGRQcm9qZWN0ICE9IFwiQWxsXCIgJiYgcHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID09IG9sZFByb2plY3QpIHtcblx0XHRcdC0tcHJvamVjdHNEaXYuY2hpbGROb2Rlc1twXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkZWxldGluZ1Rhc2tDb3VudChwcm9qZWN0TmFtZSkge1xuXHRjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtZGl2XCIpO1xuXG5cdGlmIChwcm9qZWN0TmFtZSA9PSBcIkFsbFwiKSB7XG5cdFx0LS1wcm9qZWN0c0Rpdi5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChsZXQgcCA9IDA7IHAgPCBwcm9qZWN0c0Rpdi5jaGlsZE5vZGVzLmxlbmd0aDsgcCsrKSB7XG5cdFx0aWYgKHByb2plY3RzRGl2LmNoaWxkTm9kZXNbcF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9PSBwcm9qZWN0TmFtZSkge1xuXHRcdFx0LS1wcm9qZWN0c0Rpdi5jaGlsZE5vZGVzW3BdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cdFx0XHQtLXByb2plY3RzRGl2LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHsgc3RhdGljVGFza0NvdW50LCBkeW5hbWljVGFza0NvdW50LCBkZWxldGluZ1Rhc2tDb3VudCB9O1xuIiwiaW1wb3J0IHsgbmV3RWxlbWVudCwgc2VuZFRvQm9keSB9IGZyb20gXCIuL0RPTUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlOZXdUYXNrV2luZG93IH0gZnJvbSBcIi4vZm9ybVdpbmRvd3NcIjtcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4vcHJvamVjdExpc3RzXCI7XG5pbXBvcnQgeyBwYWdlU3RhdGUgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkeW5hbWljVGFza0NvdW50LCBkZWxldGluZ1Rhc2tDb3VudCB9IGZyb20gXCIuL3Rhc2tDb3VudFRyYWNraW5nXCI7XG5cbmZ1bmN0aW9uIG5ld1Rhc2soc3RvcmFnZUtleSwgcHJvamVjdCwgdGFzaywgbm90ZXMgPSBcIlwiLCBkYXkgPSBcIlwiLCB0aW1lID0gXCJcIiwgY29tcGxldGUpIHtcblx0Y29uc3QgbmV3VGFzayA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWxpc3RcIik7XG5cdG5ld1Rhc2suc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzdG9yYWdlS2V5KTtcblx0Y29uc3QgbmV3VGFza0NoZWNrTWFyayA9IG5ld0VsZW1lbnQoXCJpbnB1dFwiLCBcInRhc2stY2hlY2ttYXJrXCIpO1xuXHRuZXdUYXNrQ2hlY2tNYXJrLnR5cGUgPSBcInJhZGlvXCI7XG5cdGlmIChjb21wbGV0ZSkge1xuXHRcdG5ld1Rhc2tDaGVja01hcmsuY2hlY2tlZCA9IHRydWU7XG5cdH1cblx0Y29uc3QgbmV3VGFza0RldGFpbHMgPSBuZXdFbGVtZW50KFwiZGl2XCIsIFwidGFzay1pbmZvLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgbmV3VGFza1RpdGxlID0gbmV3RWxlbWVudChcImgzXCIsIFwidGFzay10aXRsZVwiLCAuLi5BcnJheSgxKSwgdGFzayk7XG5cdGNvbnN0IG5ld1Rhc2tOb3Rlc0RpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLW5vdGVzLWRpdlwiKTtcblx0Y29uc3QgbmV3VGFza05vdGVzID0gbmV3RWxlbWVudChcInBcIiwgXCJ0YXNrLW5vdGVzXCIsIC4uLkFycmF5KDEpLCBub3Rlcyk7XG5cdGNvbnN0IG5ld0RhdGVUaW1lRGl2ID0gbmV3RWxlbWVudChcImRpdlwiLCBcInRhc2stZGF0ZS10aW1lLWRpdlwiKTtcblx0Y29uc3QgbmV3VGFza0RheSA9IG5ld0VsZW1lbnQoXCJwXCIsIFwidGFzay1kYXRlXCIsIC4uLkFycmF5KDEpLCBkYXkpO1xuXHRjb25zdCBuZXdUYXNrdGltZSA9IG5ld0VsZW1lbnQoXCJwXCIsIFwidGFzay10aW1lXCIsIC4uLkFycmF5KDEpLCB0aW1lKTtcblxuXHRuZXdUYXNrQ2hlY2tNYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29tcGxldGUgPSAhY29tcGxldGU7XG5cdFx0dGFza3ModGFzaywgcHJvamVjdCwgbm90ZXMsIGRheSwgdGltZSkuc3RvcmUoc3RvcmFnZUtleSwgXCJ0YXNrXCIsIGNvbXBsZXRlKTtcblxuXHRcdGlmIChjb21wbGV0ZSkge1xuXHRcdFx0bmV3VGFza0NoZWNrTWFyay5jaGVja2VkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdUYXNrQ2hlY2tNYXJrLmNoZWNrZWQgPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXG5cdGR5bmFtaWNUYXNrQ291bnQocHJvamVjdCk7XG5cblx0Y29uc3QgbW9yZUluZm9JY29uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLCBgaW5mby1pY29uLSR7c3RvcmFnZUtleX1gLCBcImluZm9cIik7XG5cdG1vcmVJbmZvSWNvbi5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLWljb25cIik7XG5cdG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0bW9yZUluZm9JY29uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHR9KTtcblxuXHRuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0bW9yZUluZm9JY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fSk7XG5cblx0bW9yZUluZm9JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZHJvcERvd25EaXYgPSBkcm9wRG93bk9wdGlvbihzdG9yYWdlS2V5KTtcblx0XHRuZXdUYXNrLmFwcGVuZENoaWxkKGRyb3BEb3duRGl2KTtcblx0fSk7XG5cblx0bmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrQ2hlY2tNYXJrKTtcblx0bmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRGV0YWlscyk7XG5cdG5ld1Rhc2tEZXRhaWxzLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG5cdG5ld1Rhc2tEZXRhaWxzLmFwcGVuZENoaWxkKG5ld1Rhc2tOb3Rlc0Rpdik7XG5cdG5ld1Rhc2tOb3Rlc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrTm90ZXMpO1xuXHRuZXdUYXNrRGV0YWlscy5hcHBlbmRDaGlsZChuZXdEYXRlVGltZURpdik7XG5cdG5ld0RhdGVUaW1lRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEYXkpO1xuXHRuZXdEYXRlVGltZURpdi5hcHBlbmRDaGlsZChuZXdUYXNrdGltZSk7XG5cdG5ld1Rhc2suYXBwZW5kQ2hpbGQobW9yZUluZm9JY29uKTtcblxuXHRyZXR1cm4gbmV3VGFzaztcbn1cblxuZnVuY3Rpb24gZHJvcERvd25PcHRpb24oc3RvcmFnZUtleSkge1xuXHRjb25zdCBkcm9wRG93bkRpdiA9IG5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkcm9wLWRvd24tY29udGVudFwiLCBcImRyb3AtZG93blwiKTtcblx0Y29uc3QgdXBkYXRlQnV0dG9uID0gbmV3RWxlbWVudChcInNwYW5cIiwgXCJkcm9wLWRvd24tb3B0aW9uXCIsIGB0YXNrJHtzdG9yYWdlS2V5fS11cGRhdGUtYnV0dG9uYCwgXCJFZGl0XCIpO1xuXHRjb25zdCBkZWxldGVCdXR0b24gPSBuZXdFbGVtZW50KFwic3BhblwiLCBcImRyb3AtZG93bi1vcHRpb25cIiwgYHRhc2ske3N0b3JhZ2VLZXl9LWRlbGV0ZS1idXR0b25gLCBcIkRlbGV0ZVwiKTtcblx0dXBkYXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc3RvcmFnZUtleSk7XG5cdGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHN0b3JhZ2VLZXkpO1xuXG5cdGxldCBuZXdUYXNrID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAudGFzay1saXN0W2RhdGEtdmFsdWU9JHtzdG9yYWdlS2V5fV1gKTtcblx0bGV0IG1vcmUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYCNpbmZvLWljb24tJHtzdG9yYWdlS2V5fWApO1xuXG5cdC8qIFRoaXMgYmVoYXZpb3IgaXMgdW5leHBlY3RlZC4gbG9vcGluZyB0aHJvdWdoIGFsbCBzdG9yYWdla2V5cyBpbnN0ZWFkIG9mIGp1c3QgdGhlIG9uZSBzdG9yYWdlXG4gICAgICAgIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIGNsaWNrZWQgZWxlbWVudC4gZXJyb3Igb2NjdXJzIGluIHRoZSBjb25zb2xlIGF0IGV2ZXJ5IGV4ZWN1dGlvbiAqL1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWRvd25cIikgJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPSBtb3JlKSB7XG5cdFx0XHRuZXdUYXNrLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1kb3duXCIpKTtcblx0XHR9XG5cdH0pO1xuXG5cdHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHNlbmRUb0JvZHkoZGlzcGxheU5ld1Rhc2tXaW5kb3coc3RvcmFnZUtleSkpO1xuXHRcdG5ld1Rhc2sucmVtb3ZlQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtYWluVGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10YXNrLWRpdlwiKTtcblx0XHRjb25zdCBkZWxldGVkVGFzayA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLnRhc2stbGlzdFtkYXRhLXZhbHVlPSR7c3RvcmFnZUtleX1gKTtcblx0XHRsZXQgcHJvamVjdE5hbWUgPSBwYWdlU3RhdGUuZ2V0U3RvcmFnZShzdG9yYWdlS2V5KVtcInByb2plY3ROYW1lXCJdO1xuXHRcdGRlbGV0aW5nVGFza0NvdW50KHByb2plY3ROYW1lKTtcblx0XHR0YXNrcygpLmRlbGV0ZVRhc2soc3RvcmFnZUtleSk7XG5cdFx0bWFpblRhc2tEaXYucmVtb3ZlQ2hpbGQoZGVsZXRlZFRhc2spO1xuXHRcdC8vIG5ld1Rhc2sucmVtb3ZlQ2hpbGQoZHJvcERvd25EaXYpO1xuXHR9KTtcblxuXHRkcm9wRG93bkRpdi5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXHRkcm9wRG93bkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG5cdHJldHVybiBkcm9wRG93bkRpdjtcbn1cblxuZXhwb3J0IHsgbmV3VGFzaywgZHJvcERvd25PcHRpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL21haW4uY3NzXCI7XG5pbXBvcnQgeyBob21lLCByZWNhbGwgfSBmcm9tIFwiLi9tb2R1bGVzL2VsZW1lbnRCdWlsZGVyXCI7XG5pbXBvcnQgKiBhcyBwYWdlUmVuZGVyIGZyb20gXCIuL21vZHVsZXMvRE9NQ29udHJvbGxlclwiO1xuXG5jb25zdCBtYWluID0gcGFnZVJlbmRlci5uZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGFpbmVyXCIsIFwiY29udGVudFwiKTtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiaGV5XCIpXG4vLyB9KTtcblxucGFnZVJlbmRlci5tb2R1bGVSZW5kZXIoaG9tZSgpLCBtYWluKTtcbnBhZ2VSZW5kZXIuc2VuZFRvQm9keShtYWluKTtcbnJlY2FsbCgpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9