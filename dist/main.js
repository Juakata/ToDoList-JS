/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(1);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(3)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = module.exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbutton > * {\n    pointer-events: none;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: 'Lato', sans-serif;\n}\n\nheader {\n  width: 100%;\n  box-shadow: 1px 1px 3px grey;\n  text-align: center;\n  padding: 20px;\n  position: relative;\n  z-index: 2;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 20% 80%;\n}\n\nnav {\n  margin-top: 56px;\n}\n\n#project__form {\n  display: none;\n  width: 25%;\n  position: fixed;\n  background: white;\n  z-index: 3;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 20%;\n  padding: 30px;\n  box-shadow: 1px 1px 10px black;\n  border-radius: 20px;\n  text-align: center;\n}\n\n#task__form {\n  display: none;\n  width: 20%;\n  background: white;\n  position: fixed;\n  z-index: 20;\n  box-shadow: 1px 1px 5px black;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 30%;\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n}\n\n#newProject {\n  padding: 10px;\n  font-size: 20px;\n  border-radius: 10px;\n  background: none;\n  color: #54a5e8;\n  font-weight: bold;\n  border: none;\n  box-shadow: 2px 2px 1px #54a5e8;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid #54a5e8;\n}\n\n#newProject:active {\n  box-shadow: -2px -2px 1px #54a5e8;\n}\n\n#btn-close, .btn-close-form {\n  border: 1px solid red;\n  background: red;\n  color: white;\n  border-radius: 5px;\n  font-size: 15px;\n  padding: 5px;\n  cursor: pointer;\n}\n\n#btn-close:hover {\n  color: red;\n  background: none;\n}\n\n#project__form-btn, .btn-form {\n  border: 1px solid green;\n  background: green;\n  color: white;\n  border-radius: 5px;\n  font-size: 15px;\n  padding: 5px;\n  cursor: pointer;\n}\n\n#projects-menu {\n  margin: 0;\n  padding: 0;\n}\n\n#project__form-btn:hover {\n  color: green;\n  background: none;\n}\n\n#projects-menu li span{\n  display: inline-block;\n  width: 75%;\n  padding: 15px;\n  cursor: pointer;\n}\n\n#project__list {\n  position: relative;\n  z-index: 1;\n  padding: 20px;\n}\n\n#p-title {\n  text-align: center;\n  background: #fc7703;\n  color: white;\n  padding: 10px;\n}\n\n#priority-btn {\n\n  padding: 10px 20px;\n}\n\n#priority-btn:focus {\n  outline: none;\n}\n\n.highlight {\n background-color: #54a5e8;\n color: white;\n}\n\n.task-container {\n  margin: 20px 0;\n  border-radius: 20px;\n  padding: 15px;\n  box-shadow: 1px 1px 6px grey;\n}\n\n.normal {\n  border: 1px solid lightskyblue;\n  background-color: lightskyblue;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.block-label {\n  display: block;\n  font-weight: bold;\n  padding: 5px;\n}\n\n.high {\n  border: 1px solid red;\n  background-color: red;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.btn-close-form:hover {\n  color: red;\n  background: none;\n}\n\n.btn-form {\n  margin-right: 5px;\n}\n\n.add-task {\n  font-size: 20px;\n  padding: 10px;\n}\n\n.btn-form:hover {\n  color: green;\n  background: none;\n}\n\n.sidemenu {\n  box-shadow: 1px 1px 2px grey;\n  position: relative;\n  z-index: 1;\n}\n\n.sidemenu h1 {\n  width: 100%;\n  text-align: center;\n  background: #59a4ff;\n  color: white;\n  margin: 0;\n  padding: 10px;\n  box-shadow: 1px 1px 3px grey;\n  position: absolute;\n  z-index: 0;\n}\n\n.sidemenu li {\n  list-style: none;\n  font-size: 20px;\n}\n\n.sidemenu li:hover {\n  background: #54a5e8;\n  color: white;\n}\n\n.sidemenu li i{\n  color: black;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n.sidemenu li i:hover{\n  color: red;\n}\n\n.form-container {\n  display: inline-block;\n  text-align: left;\n}\n\n.form-element {\n  padding: 7px;\n}\n\n.form-element label{\n  font-weight: bold;\n  color: #2067a1;\n}\n\n.form-element input {\n  width: 100%;\n  border-radius: 8px;\n  border: none;\n  border: 1px solid #69a2d1;\n  box-shadow: 1px 1px 3px #2067a1;\n  outline: none;\n  padding: 5px;\n}\n\n.form-element input[type=radio] {\n  width: auto;\n  border: none;\n  box-shadow: none;\n}\n\n.center {\n  text-align: center;\n}\n\n.list-tasks{\n  margin-left: 20px;\n}\n\n@media(max-width: 1410px) {\n  #project__form{\n    width: 35%;\n  }\n}\n\n@media(max-width: 935px) {\n  #project__form{\n    width: 45%;\n  }\n\n  #task__form {\n    width: 40%;\n  }\n}\n\n@media(max-width: 720px) {\n  #project__form{\n    width: 55%;\n  }\n}\n\n@media(max-width: 590px) {\n  #project__form{\n    width: 65%;\n  }\n\n  #task__form {\n    width: 50%;\n  }\n}\n", ""]);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/app/models/toDo.js
const ToDo = (title, description, dueDate, priority, completed) => {
  return {
    title,
    description,
    dueDate,
    priority,
    completed
  }
}
// CONCATENATED MODULE: ./src/app/models/project.js
const Project = (title, checklist) => {
  return {
    title,
    checklist
  }
}
// CONCATENATED MODULE: ./src/app/views/taskView.js


let saveProjects = JSON.parse(localStorage.getItem('saveProjects'));

const renderInfo = (event) => {
  const id = event.target.id.split("-").splice(-1);
  const list = document.getElementById("project__list");
  highlightElement(id);
  list.innerHTML = '';
  const btnAdd = document.createElement('button');
  btnAdd.classList.add('btn-form');
  btnAdd.classList.add('add-task');
  btnAdd.id = `addTask-${id}`;
  const iPlus = document.createElement("i");
  iPlus.classList.add('fa');
  iPlus.classList.add('fa-plus');
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  btnAdd.appendChild(document.createTextNode(`${saveProjects[id].title} Add Task `));
  btnAdd.appendChild(iPlus);
  list.appendChild(btnAdd);
  saveProjects[id].checklist.forEach((element, i) => {
    const unit = document.createElement('div');
    unit.classList.add("task-container");
    let priority = checkPriority(id, i);
    createToDo(id, i, element, priority, list);
    document.getElementById(`btnP-${i}-${id}`).addEventListener("click", () => {
      changePriority(id, i);
    }, false);
  });
  const addNew = document.getElementById(`addTask-${id}`);
  addNew.addEventListener("click", showTaskForm, false);
  closeTaskForm();
}

const changePriority = (id, i) => {
  if (saveProjects[id].checklist[i].priority) {
    saveProjects[id].checklist[i].priority = false;
  } else {
    saveProjects[id].checklist[i].priority = true;
  }
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
  renderInfo(event);
}

const showTaskForm = (event) => {
  const id = event.target.id.split("-").slice(-1);
  const taskForm = document.getElementById("task__form");
  taskForm.style.display = "block";

  if (!document.getElementById(`btn-${id}`)) {
    const formBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    const div = document.createElement("div");
    div.id = "btn-container";
    formBtn.id = `btn-${id}`;
    closeBtn.id = `btnClose-${id}`;
    formBtn.classList.add('btn-form');
    closeBtn.classList.add('btn-close-form');
    formBtn.setAttribute("type", "button");
    closeBtn.setAttribute("type", "button");
    formBtn.innerText = "Add";
    closeBtn.innerText = "Cancel";
    div.appendChild(formBtn);
    div.appendChild(closeBtn);
    taskForm.appendChild(div);
    formBtn.addEventListener("click", addTask, false);
    closeBtn.addEventListener('click', closeTaskForm.bind(), false);
  }
}

const createToDo = (id, i, element, priority, list) => {
  const unit = document.createElement('div');
  unit.classList.add("task-container");
  const h21 = document.createElement("h2");
  const h22 = document.createElement("h2");
  const h23 = document.createElement("h2");
  const label = document.createElement("label");
  const labelBtn = document.createElement("label");
  const checkBox = document.createElement('input');
  label.classList.add('block-label');
  labelBtn.classList.add('block-label');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = saveProjects[id].checklist[i].completed;
  checkBox.id = "checkBox";
  h21.id = 'p-title';
  h21.appendChild(document.createTextNode(element.title));
  h22.appendChild(document.createTextNode(`Description: ${element.description}`));
  h23.appendChild(document.createTextNode(`Deadline: ${element.dueDate}`));
  const btnP = document.createElement('button');
  btnP.classList.add(priority.toLowerCase());
  btnP.appendChild(document.createTextNode(checkPriority(id, i)));
  btnP.id = `btnP-${i}-${id}`;
  unit.appendChild(h21);
  unit.appendChild(h22);
  unit.appendChild(h23);
  labelBtn.appendChild(document.createTextNode("Priority: "));
  labelBtn.appendChild(btnP);
  unit.appendChild(labelBtn);
  unit.appendChild(label);
  label.appendChild(document.createTextNode("Completed: "));
  label.appendChild(checkBox);
  list.appendChild(unit);
  checkBox.addEventListener("click", () => {
    markComplete(id, i, checkBox);
  }, false);
}

const markComplete = (id, i, checkBox) => {
  if (checkBox.checked) {
    saveProjects[id].checklist[i].completed = true;
  } else {
    saveProjects[id].checklist[i].completed = false;
  }
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
}

const closeTaskForm = () => {
  const taskForm = document.getElementById("task__form");
  taskForm.style.display = "none";
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('dueDate').value = '';
}

const addTask = (event) => {
  const id = event.target.id.split("-").slice(-1);
  const taskFormData = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    dueDate: document.getElementById('dueDate').value,
    priority: document.getElementById('top-priority').checked
  };
  const task = ToDo(taskFormData.title, taskFormData.description, taskFormData.dueDate, taskFormData.priority, false);
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  saveProjects[id].checklist.push(task);
  localStorage.setItem('saveProjects', JSON.stringify(saveProjects));
  closeTaskForm(event);
  renderInfo(event);
}

const checkPriority = (id, i) => {
  saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  let priority = "";
  if (saveProjects[id].checklist[i].priority) {
    priority = "High";
  } else {
    priority = "Normal";
  }
  return priority;
}

const highlightElement = (id) => {
  const highlighted = document.querySelectorAll("[id ^= 'projectContainer']");
  highlighted.forEach(element => element.classList.remove('highlight'));
  document.getElementById(`projectContainer-${id}`).classList.add('highlight');
}

// CONCATENATED MODULE: ./src/app/views/projectView.js



let projectView_saveProjects = JSON.parse(localStorage.getItem('saveProjects'));

const renderForm = () => {
  const form = document.getElementById("project__form");
  const btn = document.getElementById("project__form-btn");
  form.style.display = "block";
  btn.addEventListener("click", addProject, false);
}

const addProject = () => {
  const formData = {
    title: document.getElementById('projectTitle')
  };
  const project = Project(formData.title.value, []);
  projectView_saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  projectView_saveProjects.push(project);
  localStorage.setItem('saveProjects', JSON.stringify(projectView_saveProjects));
  renderProjects();
  hideForm();
}

const hideForm = () => {
  const form = document.getElementById("project__form");
  form.style.display = "none";
  document.getElementById('projectTitle').value = '';
}

const renderProjects = () => {
  const container = document.getElementById("project");
  container.innerHTML = "";
  container.innerHTML = `<h1>Projects</h1>`;
  container.innerHTML += `<nav>
    <ul id="projects-menu">
    </ul>
  </nav>`;
  projectView_saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  projectView_saveProjects.forEach((project, i) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.id = `projectContainer-${i}`
    span.id = `project-${i}`;
    const text = document.createTextNode(project.title);
    span.appendChild(text);
    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-trash');
    icon.id = `i-delete-${i}`;
    icon.addEventListener("click", deleteProject.bind(), false);
    span.addEventListener("click", renderInfo.bind(), false);
    document.getElementById('projects-menu').appendChild(li);
    li.appendChild(span);
    li.appendChild(icon);
  });
}

const deleteProject = (event) => {
  const id = event.target.id.split("-").slice(-1);
  projectView_saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  projectView_saveProjects.splice(id, 1);
  localStorage.setItem('saveProjects', JSON.stringify(projectView_saveProjects));

  renderProjects();
  document.getElementById("project__list").innerHTML = '';
}


// EXTERNAL MODULE: ./src/main.css
var main = __webpack_require__(0);

// CONCATENATED MODULE: ./src/index.js






const p = Project("Project 1", []);
const p2 = Project("Project 2", []);

const src_task = ToDo("Task 1", "Desc of task 1", "2019-12-12", false, false);
const task2 = ToDo("Task 2", "Desc of task 2", "2019-12-12", true, false);
const task3 = ToDo("Task 3", "Desc of task 3", "2019-12-12", true, false);
const task4 = ToDo("Task 4", "Desc of task 4", "2019-12-12", false, false);

p.checklist.push(src_task);
p.checklist.push(task2);
p2.checklist.push(task3);
p2.checklist.push(task4);

let src_saveProjects = JSON.parse(localStorage.getItem('saveProjects'));

if (src_saveProjects == null) {
  localStorage.setItem('saveProjects', JSON.stringify([]));
  src_saveProjects = JSON.parse(localStorage.getItem('saveProjects'));
  src_saveProjects.push(p);
  src_saveProjects.push(p2);
  localStorage.setItem('saveProjects', JSON.stringify(src_saveProjects));
}

const newProject = document.getElementById("newProject");
newProject.addEventListener("click", renderForm, false);

renderProjects();

document.getElementById('btn-close').addEventListener('click', hideForm, false);


/***/ })
/******/ ]);