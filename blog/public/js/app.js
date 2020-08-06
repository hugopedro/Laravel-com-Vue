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
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\vue-loader\\lib\\component-normalizer.js'");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\vue-style-loader\\lib\\addStylesClient.js'");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
module.exports = __webpack_require__(67);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(14);

window.Vue = __webpack_require__(38);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('painel', __webpack_require__(42));
Vue.component('topo', __webpack_require__(48));
Vue.component('caixa', __webpack_require__(53));
Vue.component('pagina', __webpack_require__(58));
Vue.component('tabela-lista', __webpack_require__(61));
Vue.component('migalhas', __webpack_require__(64));

var app = new Vue({
  el: '#app'
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(15);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__(17);

  __webpack_require__(18);
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(19);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key',
//     cluster: 'mt1',
//     encrypted: true
// });

/***/ }),
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\lodash\\lodash.js'");

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\jquery\\dist\\jquery.js'");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\bootstrap-sass\\assets\\javascripts\\bootstrap.js'");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\axios\\index.js'");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(46)
/* template */
var __vue_template__ = __webpack_require__(47)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Painel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84013f18", Component.options)
  } else {
    hotAPI.reload("data-v-84013f18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2591dd9e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84013f18\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Painel.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84013f18\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Painel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['titulo', 'cor'],
    computed: {
        defineCor: function defineCor() {
            return "panel " + (this.cor || "panel-default"); //se nao existir entao panel-default;
        }
    }
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.defineCor }, [
    _c("div", { staticClass: "panel-heading" }, [
      _vm._v(_vm._s(_vm.titulo) + "!")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-84013f18", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(51)
/* template */
var __vue_template__ = __webpack_require__(52)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Topo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e94c51e", Component.options)
  } else {
    hotAPI.reload("data-v-9e94c51e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2dfd2bce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9e94c51e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Topo.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9e94c51e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Topo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['titulo', 'url']
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "navbar navbar-default navbar-static-top" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "navbar-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("a", { staticClass: "navbar-brand", attrs: { href: _vm.url } }, [
          _vm._v("\n                " + _vm._s(_vm.titulo) + "\n            ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse navbar-collapse",
          attrs: { id: "app-navbar-collapse" }
        },
        [
          _c("ul", { staticClass: "nav navbar-nav" }, [
            _vm._v("\n                 \n            ")
          ]),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "nav navbar-nav navbar-right" },
            [_vm._t("default")],
            2
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggle collapsed",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#app-navbar-collapse",
          "aria-expanded": "false"
        }
      },
      [
        _c("span", { staticClass: "sr-only" }, [_vm._v("Toggle Navigation")]),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" })
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9e94c51e", module.exports)
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(56)
/* template */
var __vue_template__ = __webpack_require__(57)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Caixa.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ee0364d", Component.options)
  } else {
    hotAPI.reload("data-v-7ee0364d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("9bb4ab7a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ee0364d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Caixa.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ee0364d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Caixa.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.bg-aqua{\n    background-color: #00c0ef !important;\n}\n.small-box {\n  border-radius: 2px;\n  position: relative;\n  display: block;\n  margin-bottom: 20px;\n  -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n          box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n  color: #FFF;\n}\n.small-box:hover {\n  text-decoration: none;\n  color: #f9f9f9;\n}\n.small-box>.inner {\n  padding: 10px;\n}\n.small-box h3, .small-box p {\n  z-index: 5;\n}\n.small-box h3 {\n  font-size: 38px;\n  font-weight: bold;\n  margin: 0 0 10px 0;\n  white-space: nowrap;\n  padding: 0;\n}\n.small-box p {\n  font-size: 15px;\n}\np {\n  margin: 0 0 10px;\n}\n.small-box .icon {\n  -webkit-transition: all .3s linear;\n  transition: all .3s linear;\n  position: absolute;\n  top: -10px;\n  right: 10px;\n  z-index: 0;\n  font-size: 90px;\n  color: rgba(0,0,0,0.15);\n}\n.small-box:hover .icon {\n  font-size: 95px;\n}\n.small-box>.small-box-footer {\n  position: relative;\n  text-align: center;\n  padding: 3px 0;\n  color: #fff;\n  color: rgba(255,255,255,0.8);\n  display: block;\n  z-index: 10;\n  background: rgba(0,0,0,0.1);\n  text-decoration: none;\n}\na {\n  color: #3c8dbc;\n}\n.small-box>.small-box-footer:hover {\n  color: #fff;\n  background: rgba(0,0,0,0.15);\n}\na:hover, a:active, a:focus {\n  outline: none;\n  text-decoration: none;\n  color: #72afd2;\n}\n\n\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['qtd', 'titulo', 'url', 'cor', 'icone'],
  computed: {
    defineCor: function defineCor() {
      return "background-color: " + this.cor + " !important;";
    }
  }

});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "small-box", style: _vm.defineCor }, [
    _c("div", { staticClass: "inner" }, [
      _c("h3", [_vm._v(_vm._s(_vm.qtd))]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.titulo))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "icon" }, [_c("i", { class: _vm.icone })]),
    _vm._v(" "),
    _c("a", { staticClass: "small-box-footer", attrs: { href: _vm.url } }, [
      _vm._v("\n    Ver mais "),
      _c("i", { staticClass: "fa fa-arrow-circle-right" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ee0364d", module.exports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(59)
/* template */
var __vue_template__ = __webpack_require__(60)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Pagina.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17030d06", Component.options)
  } else {
    hotAPI.reload("data-v-17030d06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['tamanho'],
  computed: {
    defineTamanho: function defineTamanho() {
      if (this.tamanho >= 12) {
        return "col-md-12";
      }
      if (this.tamanho <= 2) {
        return "col-md-2 col-md-offset-5";
      }
      if (this.tamanho % 2 == 0) {
        return "col-md-" + this.tamanho + " col-md-offset-" + (12 - this.tamanho) / 2;
      } else {
        return "col-md-" + (parseInt(this.tamanho) + 1) + " col-md-offset-" + (12 - (parseInt(this.tamanho) + 1)) / 2;
      }
    }
  }
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { class: _vm.defineTamanho }, [_vm._t("default")], 2)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-17030d06", module.exports)
  }
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(62)
/* template */
var __vue_template__ = __webpack_require__(63)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/TabelaLista.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81ddeb92", Component.options)
  } else {
    hotAPI.reload("data-v-81ddeb92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["titulos", "itens", "ordem", "ordemcol", "criar", "detalhe", "editar", "deletar", "token"],
  data: function data() {
    return {
      buscar: "",
      ordemAux: this.ordem || "asc",
      ordemAuxCol: this.ordemcol || 0
    };
  },
  methods: {
    executaForm: function executaForm(index) {
      document.getElementById(index).submit();
    },
    ordenaColuna: function ordenaColuna(coluna) {
      this.ordemAuxCol = coluna;
      if (this.ordemAux.toLowerCase() == "asc") {
        this.ordemAux = "desc";
      } else {
        this.ordemAux = "asc";
      }
    }
  },
  computed: {
    lista: function lista() {
      var _this = this;

      var ordem = this.ordemAux;
      var ordemCol = this.ordemAuxCol;
      ordem = ordem.toLowerCase();
      ordemCol = parseInt(ordemCol);

      if (ordem == "asc") {
        this.itens.sort(function (a, b) {
          if (a[ordemCol] > b[ordemCol]) {
            return 1;
          }
          if (a[ordemCol] < b[ordemCol]) {
            return -1;
          }
          return 0;
        });
      } else {
        this.itens.sort(function (a, b) {
          if (a[ordemCol] < b[ordemCol]) {
            return 1;
          }
          if (a[v] > b[ordemCol]) {
            return -1;
          }
          return 0;
        });
      }

      return this.itens.filter(function (res) {
        for (var k = 0; k < res.length; k++) {
          if ((res[k] + "").toLowerCase().indexOf(_this.buscar.toLowerCase()) >= 0) {
            return true;
          }
        }
        return false;
      });

      return this.itens;
    }
  }
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-inline" }, [
      _vm.criar
        ? _c("a", { attrs: { href: _vm.criar } }, [_vm._v("Criar")])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "form-group pull-right" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.buscar,
              expression: "buscar"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "search", placeholder: "Buscar" },
          domProps: { value: _vm.buscar },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.buscar = $event.target.value
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-striped table-hover" }, [
      _c("thead", [
        _c(
          "tr",
          [
            _vm._l(_vm.titulos, function(titulo, index) {
              return _c(
                "th",
                {
                  staticStyle: { cursor: "pointer" },
                  on: {
                    click: function($event) {
                      return _vm.ordenaColuna(index)
                    }
                  }
                },
                [_vm._v(_vm._s(titulo))]
              )
            }),
            _vm._v(" "),
            _vm.detalhe || _vm.editar || _vm.deletar
              ? _c("th", [_vm._v("Ação")])
              : _vm._e()
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.lista, function(item, index) {
          return _c(
            "tr",
            [
              _vm._l(item, function(i) {
                return _c("td", [_vm._v(_vm._s(i))])
              }),
              _vm._v(" "),
              _vm.detalhe || _vm.editar || _vm.deletar
                ? _c("td", [
                    _vm.deletar && _vm.token
                      ? _c(
                          "form",
                          {
                            attrs: {
                              id: index,
                              action: _vm.deletar,
                              method: "post"
                            }
                          },
                          [
                            _c("input", {
                              attrs: {
                                type: "hidden",
                                name: "_method",
                                value: "DELETE"
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              attrs: { type: "hidden", name: "_token" },
                              domProps: { value: _vm.token }
                            }),
                            _vm._v(" "),
                            _vm.detalhe
                              ? _c("a", { attrs: { href: _vm.detalhe } }, [
                                  _vm._v("Detalhe |")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.editar
                              ? _c("a", { attrs: { href: _vm.editar } }, [
                                  _vm._v("Editar |")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.executaForm(index)
                                  }
                                }
                              },
                              [_vm._v("Deletar")]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.token
                      ? _c("span", [
                          _vm.detalhe
                            ? _c("a", { attrs: { href: _vm.detalhe } }, [
                                _vm._v("Detalhe |")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.editar
                            ? _c("a", { attrs: { href: _vm.editar } }, [
                                _vm._v("Editar |")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.deletar
                            ? _c("a", { attrs: { href: _vm.deletar } }, [
                                _vm._v("Deletar")
                              ])
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.token && !_vm.deletar
                      ? _c("span", [
                          _vm.detalhe
                            ? _c("a", { attrs: { href: _vm.detalhe } }, [
                                _vm._v("Detalhe |")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.editar
                            ? _c("a", { attrs: { href: _vm.editar } }, [
                                _vm._v("Editar")
                              ])
                            : _vm._e()
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ],
            2
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-81ddeb92", module.exports)
  }
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(65)
/* template */
var __vue_template__ = __webpack_require__(66)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Migalhas.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-940d2b4a", Component.options)
  } else {
    hotAPI.reload("data-v-940d2b4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['lista'],
  computed: {
    defineClass: function defineClass() {
      if (this.url) {
        return "active";
      } else {
        return "";
      }
    }
  }
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ol",
    { staticClass: "breadcrumb" },
    _vm._l(_vm.lista, function(item) {
      return _c("li", [
        item.url
          ? _c("a", { class: _vm.defineClass, attrs: { href: item.url } }, [
              _vm._v(_vm._s(item.titulo))
            ])
          : _vm._e(),
        _vm._v(" "),
        !item.url ? _c("span", [_vm._v(_vm._s(item.titulo))]) : _vm._e()
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-940d2b4a", module.exports)
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\n@import \"~bootstrap-sass/assets/stylesheets/bootstrap\";\r\n^\r\n      File to import not found or unreadable: C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\bootstrap-sass\\assets\\stylesheets\\_bootstrap.scss.\r\n      in C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\resources\\assets\\sass\\app.scss (line 11, column 1)\n    at C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\webpack\\lib\\NormalModule.js:195:19\n    at C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.callback (C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.done [as callback] (C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\neo-async\\async.js:8069:18)\n    at options.error (C:\\Users\\Hugo\\Documents\\Trampo\\Laravel-com-Vue\\blog\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ })
/******/ ]);