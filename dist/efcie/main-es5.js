function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routing */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _form_module_efcie_static_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./form-module/efcie-static/home/home.component */
    "./src/app/form-module/efcie-static/home/home.component.ts");

    var routerOptions = {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    };
    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home/:lang',
      component: _form_module_efcie_static_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, routerOptions);
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_module_z_mat_menu_z_mat_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav-module/z-mat-menu/z-mat-menu.component */
    "./src/app/nav-module/z-mat-menu/z-mat-menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'efcie';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-z-mat-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_module_z_mat_menu_z_mat_menu_component__WEBPACK_IMPORTED_MODULE_1__["ZMatMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lang-def/lang-def.module */
    "./src/app/lang-def/lang-def.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_module_nav_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav-module/nav-module.module */
    "./src/app/nav-module/nav-module.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_0__["LangDefModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["routing"], _nav_module_nav_module_module__WEBPACK_IMPORTED_MODULE_4__["NavModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_0__["LangDefModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _nav_module_nav_module_module__WEBPACK_IMPORTED_MODULE_4__["NavModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_0__["LangDefModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["routing"], _nav_module_nav_module_module__WEBPACK_IMPORTED_MODULE_4__["NavModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/doc-display/doc-display-popup.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/form-module/doc-display/doc-display-popup.component.ts ***!
    \************************************************************************/

  /*! exports provided: DocDisplayPopupComponent */

  /***/
  function srcAppFormModuleDocDisplayDocDisplayPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocDisplayPopupComponent", function () {
      return DocDisplayPopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../safe.pipe */
    "./src/app/safe.pipe.ts");
    /* harmony import */


    var _lang_def_translate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../lang-def/translate.pipe */
    "./src/app/lang-def/translate.pipe.ts");

    var DocDisplayPopupComponent =
    /*#__PURE__*/
    function () {
      function DocDisplayPopupComponent(dialogRef, data) {
        _classCallCheck(this, DocDisplayPopupComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DocDisplayPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCloseClick",
        value: function onCloseClick() {
          this.dialogRef.close();
        }
      }]);

      return DocDisplayPopupComponent;
    }();

    DocDisplayPopupComponent.ɵfac = function DocDisplayPopupComponent_Factory(t) {
      return new (t || DocDisplayPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DocDisplayPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocDisplayPopupComponent,
      selectors: [["app-doc-display-popup"]],
      decls: 14,
      vars: 8,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["type", "application/pdf", "width", "100%", "height", "600px;"], [3, "href"], ["mat-dialog-actions", "", "align", "center"], ["mat-flat-button", "", "color", "accent", 3, "click"]],
      template: function DocDisplayPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "object", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "safe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your browser does not support PDFs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Download the PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocDisplayPopupComponent_Template_button_click_11_listener() {
            return ctx.onCloseClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.data.filename), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.data.filename, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, "close"), " ");
        }
      },
      pipes: [_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"], _lang_def_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZG9jLWRpc3BsYXkvZG9jLWRpc3BsYXktcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9kdWxlL2RvYy1kaXNwbGF5L2RvYy1kaXNwbGF5LXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocDisplayPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doc-display-popup',
          templateUrl: './doc-display-popup.component.html',
          styleUrls: ['./doc-display-popup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/doc-display/doc-display.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/form-module/doc-display/doc-display.component.ts ***!
    \******************************************************************/

  /*! exports provided: DocDisplayComponent */

  /***/
  function srcAppFormModuleDocDisplayDocDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocDisplayComponent", function () {
      return DocDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _doc_display_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./doc-display-popup.component */
    "./src/app/form-module/doc-display/doc-display-popup.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_file_services_get_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/file-services/get-file.service */
    "./src/app/services/file-services/get-file.service.ts");

    var DocDisplayComponent =
    /*#__PURE__*/
    function () {
      function DocDisplayComponent(dialog, location, fileService) {
        _classCallCheck(this, DocDisplayComponent);

        this.dialog = dialog;
        this.location = location;
        this.fileService = fileService;
        this.title = 'Article Title';
      }

      _createClass(DocDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _state = this.location.getState();

          var state = '';

          try {
            var k;

            for (k in _state) {
              if (k !== 'navigationId') state += _state[k];
            }

            ;
            this.filename = state;
            this.openDialog();
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          this.dialogRef = this.dialog.open(_doc_display_popup_component__WEBPACK_IMPORTED_MODULE_1__["DocDisplayPopupComponent"], {
            width: '100%',
            data: {
              title: this.title,
              filename: this.filename
            }
          });
          this.dialogRef.afterClosed().subscribe(function (res) {});
        }
      }]);

      return DocDisplayComponent;
    }();

    DocDisplayComponent.ɵfac = function DocDisplayComponent_Factory(t) {
      return new (t || DocDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_services_get_file_service__WEBPACK_IMPORTED_MODULE_4__["GetFileService"]));
    };

    DocDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocDisplayComponent,
      selectors: [["app-doc-display"]],
      decls: 1,
      vars: 0,
      template: function DocDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9kdWxlL2RvYy1kaXNwbGF5L2RvYy1kaXNwbGF5LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doc-display',
          template: '<div></div>',
          styleUrls: ['./doc-display.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _services_file_services_get_file_service__WEBPACK_IMPORTED_MODULE_4__["GetFileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/contact/contact.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/form-module/efcie-static/contact/contact.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppFormModuleEfcieStaticContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function ContactComponent_mat_card_content_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u7763\u5C0E\u7267\u5E2B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u5289\u6E2F\u6728");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 626-965-6816 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " livingstone.liu@gmail.com ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u99D0\u5802\u50B3\u9053/\u7267\u5E2B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u5289\u98DB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 626-841-1022 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " iamflow1@gamil.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u9577\u57F7\u6703\u4E3B\u5E2D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u7F85\u6642\u666D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 909-734-3046 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " chrismails@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u884C\u653F\u6587\u66F8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u8449\u9E97\u5A1F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 909-312-9626 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " ruthtu@sbcglobal.net");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "store");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u96FB\u8A71\uFF1A951-788-7822 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u6559\u6703\u5730\u5740: 1363 W. Linden Street, Riverside, CA 92507 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Website\uFF1Awww.efcie.org ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " E-Mail: efcieweb@gmail.com ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_mat_card_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Supervising Pastor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Livingstone Liu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 626-965-6816 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " livingstone.liu@gmail.com ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Resident Pastor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Isaiah Liu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 626-841-1022 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " iamflow1@gamil.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Chairperson");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Jack Lo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 909-734-3046 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " chrismails@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Administration Staff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ruth Yeh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 909-312-9626 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " ruthtu@sbcglobal.net");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "store");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " TEL\uFF1A951-788-7822 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Address: 1363 W. Linden Street, Riverside, CA 92507 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Website\uFF1Awww.efcie.org ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " E-Mail: efcieweb@gmail.com ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(translate, route) {
        _classCallCheck(this, ContactComponent);

        this.translate = translate;
        this.route = route;
        this._lang = 'zh';
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged();
          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 9,
      vars: 2,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"], ["matSubheader", ""], ["matListIcon", ""], ["matLine", ""]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u806F\u7D61\u4FE1\u606F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Infomation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContactComponent_mat_card_content_7_Template, 63, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContactComponent_mat_card_content_8_Template, 63, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showch);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLine"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkRBQTJEO0lBQzNELHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9kdWxlL2VmY2llLXN0YXRpYy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NsaWRlc2hvdy9lZmMtMjd0aC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [{
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/efcie-static.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/form-module/efcie-static/efcie-static.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EfcieStaticModule */

  /***/
  function srcAppFormModuleEfcieStaticEfcieStaticModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EfcieStaticModule", function () {
      return EfcieStaticModule;
    });
    /* harmony import */


    var _nav_module_nav_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../nav-module/nav-module-routing.module */
    "./src/app/nav-module/nav-module-routing.module.ts");
    /* harmony import */


    var _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../lang-def/lang-def.module */
    "./src/app/lang-def/lang-def.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/form-module/efcie-static/home/home.component.ts");
    /* harmony import */


    var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngmodule/material-carousel */
    "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/form-module/efcie-static/intro/intro.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/form-module/efcie-static/contact/contact.component.ts");
    /* harmony import */


    var _organization_organization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./organization/organization.component */
    "./src/app/form-module/efcie-static/organization/organization.component.ts");
    /* harmony import */


    var _events_events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./events/events.component */
    "./src/app/form-module/efcie-static/events/events.component.ts");
    /* harmony import */


    var _moments_moments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./moments/moments.component */
    "./src/app/form-module/efcie-static/moments/moments.component.ts");
    /* harmony import */


    var _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./weekly/weekly.component */
    "./src/app/form-module/efcie-static/weekly/weekly.component.ts");
    /* harmony import */


    var _sunday_sunday_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sunday/sunday.component */
    "./src/app/form-module/efcie-static/sunday/sunday.component.ts");
    /* harmony import */


    var _letters_letters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./letters/letters.component */
    "./src/app/form-module/efcie-static/letters/letters.component.ts");
    /* harmony import */


    var _other_other_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./other/other.component */
    "./src/app/form-module/efcie-static/other/other.component.ts");

    var EfcieStaticModule = function EfcieStaticModule() {
      _classCallCheck(this, EfcieStaticModule);
    };

    EfcieStaticModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: EfcieStaticModule
    });
    EfcieStaticModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function EfcieStaticModule_Factory(t) {
        return new (t || EfcieStaticModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselModule"].forRoot(), _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_1__["LangDefModule"], _nav_module_nav_module_routing_module__WEBPACK_IMPORTED_MODULE_0__["NavRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EfcieStaticModule, {
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _organization_organization_component__WEBPACK_IMPORTED_MODULE_9__["OrganizationComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_10__["EventsComponent"], _moments_moments_component__WEBPACK_IMPORTED_MODULE_11__["MomentsComponent"], _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_12__["WeeklyComponent"], _sunday_sunday_component__WEBPACK_IMPORTED_MODULE_13__["SundayComponent"], _letters_letters_component__WEBPACK_IMPORTED_MODULE_14__["LettersComponent"], _other_other_component__WEBPACK_IMPORTED_MODULE_15__["OtherComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_1__["LangDefModule"], _nav_module_nav_module_routing_module__WEBPACK_IMPORTED_MODULE_0__["NavRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](EfcieStaticModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _organization_organization_component__WEBPACK_IMPORTED_MODULE_9__["OrganizationComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_10__["EventsComponent"], _moments_moments_component__WEBPACK_IMPORTED_MODULE_11__["MomentsComponent"], _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_12__["WeeklyComponent"], _sunday_sunday_component__WEBPACK_IMPORTED_MODULE_13__["SundayComponent"], _letters_letters_component__WEBPACK_IMPORTED_MODULE_14__["LettersComponent"], _other_other_component__WEBPACK_IMPORTED_MODULE_15__["OtherComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselModule"].forRoot(), _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_1__["LangDefModule"], _nav_module_nav_module_routing_module__WEBPACK_IMPORTED_MODULE_0__["NavRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/events/events.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/form-module/efcie-static/events/events.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EventsComponent */

  /***/
  function srcAppFormModuleEfcieStaticEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
      return EventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EventsComponent_mat_card_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u957F\u6267\u4E8B\u5C31\u804C\u5178\u793C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jan 05, 2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2020.1.5\u4E3E\u884C\u957F\u6267\u4E8B\u5C31\u804C\u5178\u793C\uFF0C\u6B22\u8FCE\u53C2\u52A0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u540C\u5DE5\u64F4\u5927\u57F9\u8A13 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Jan 11, 2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "1 \u6708 11 \u65E5(\u9031\u516D)\u4E0A\u5348 9:00 \u6559\u6703\u5C07\u8209\u8FA6\u540C\u5DE5\u64F4\u5927\u57F9\u8A13\uFF0C\u4E0A\u5348\u540C\u5DE5\u57F9\u8A13\uFF0C \u4E0B\u5348\u9577\u57F7\u6703\uFF0C\u656C\u8ACB\u540C\u5DE5\u5011\u9810\u7559\u6642\u9593\u53C3\u52A0\u57F9\u8A13\u3002");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u6069\u806F\u4E8C\u5341\u516B\u9031\u5E74\u6176");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Feb 02, 2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u6559\u6703\u8A02\u65BC 2 \u6708 2 \u65E5(\u4E3B\u65E5)\u8209\u8FA6\u6069\u806F\u4E8C\u5341\u516B\u9031\u5E74\u6176\uFF0C\u7576\u5929\u6709\u52A0\u83DC\u4E26\u8ACB Iru \u5F1F \u5144\u53CA\u718A\u5049\u57F7\u4E8B\u64D4\u4EFB\u62CD\u651D\u5168\u6559\u6703\u5718\u9AD4\u7167\uFF0C\u8ACB\u5F1F\u5144\u59CA\u59B9\u9810\u5099\u5FC3\u53C3\u52A0\uFF0C\u540C\u5FC3\u5411 \u795E\u737B\u4E0A\u6700\u5927\u7684\u611F\u6069\uFF01");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u76DB\u66C9\u73AB\u97F3\u6A02\u6703");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mar 14, 2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u56E0\u4E3A\u53D7\u80BA\u708E\u75AB\u60C5\u5F71\u54CD\u6D3B\u52A8\u5DF2\u7ECF\u63A8\u8FDF.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u76DB\u66C9\u73AB - \u6CE5\u571F\u97F3\u6A02\u6A02\u5718\u5E36\u7D66\u4F60 - \u4E0D\u8B8A\u7684\u611B: \u5E78\u798F + \u597D\u5FC3\u60C5 \u97F3\u6A02\u6703");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u5167\u9678\u5E1D\u570B\u4E0D\u53EF\u932F\u904E\u7684\u76DB\u6703!!! \u8ACBFacebook/Line/Wechat\u9080\u8ACB\u4F60\u7684\u597D\u53CB!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "5:30 PM \u958B\u59CB\u7531\u6069\u806F\u6559\u6703\u63D0\u4F9B\u7C21\u9910");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "6:15 PM \u9032\u5834");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "6:30 PM \u97F3\u6A02\u6703\u6E96\u6642\u958B\u59CB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "9:00 PM \u97F3\u6A02\u6703\u7D50\u675F, \u76DB\u66C9\u73AB\u6478\u5F69CD\u734E\u54C1\u7C3D\u5B57");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u656C\u544A: \u7C21\u9910\u6709\u9650, \u8ACB\u76E1\u65E9\u5149\u81E8. \u6B61\u8FCE\u95D4\u5BB6\u5149\u81E8. \u5B69\u7AE5\u5BB6\u5EAD\u5B89\u6392\u65BC\u81E8\u9032\u53E3\u5340. \u8ACB\u6309\u62DB\u5F85\u5B89\u6392\u5165\u5EA7 \u73FE\u5834\u8ACB\u52FF\u9304\u5F71");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Facebook event ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u6CE5\u571F\u97F3\u6A02 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EventsComponent_mat_card_content_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " english version ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EventsComponent =
    /*#__PURE__*/
    function () {
      function EventsComponent(translate, route) {
        _classCallCheck(this, EventsComponent);

        this.translate = translate;
        this.route = route;
        this._lang = 'zh';
      }

      _createClass(EventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged();
          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this2 = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this2.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return EventsComponent;
    }();

    EventsComponent.ɵfac = function EventsComponent_Factory(t) {
      return new (t || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventsComponent,
      selectors: [["app-events"]],
      decls: 10,
      vars: 2,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"], ["id", "\u6D3B\u52A8\u5DF2\u7ECF\u63A8\u8FDF\u56E0\u4E3A\u53D7\u80BA\u708E\u75AB\u60C5\u5F71\u54CD"], ["mat-card-image", "", "src", "/assets/img/events/shengxiaomei-concert.jpeg", "alt", "concerts"], ["href", "https://www.facebook.com/events/2209629162673590/"], ["href", "https://www.claymusic.org/"]],
      template: function EventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u6700\u65B0\u52A8\u6001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Church Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EventsComponent_mat_card_content_8_Template, 54, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EventsComponent_mat_card_content_9_Template, 2, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showch);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJEQUEyRDtJQUMzRCxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtLW1vZHVsZS9lZmNpZS1zdGF0aWMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvc2xpZGVzaG93L2VmYy0yN3RoLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-events',
          templateUrl: './events.component.html',
          styleUrls: ['./events.component.css']
        }]
      }], function () {
        return [{
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/home/home.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/form-module/efcie-static/home/home.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppFormModuleEfcieStaticHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngmodule/material-carousel */
    "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");

    function HomeComponent_mat_card_content_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u6069\u806F 2019 \u5E74\u5EA6\u4E3B\u984C\u300E\u50B3\u5831\u559C\u8A0A \u8173\u8E64\u4F73\u7F8E\u300F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sharing the Good News, Treading on Lovely Footprints");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " (\u7F85\u99AC\u66F8 Romans 10\uFF1A15) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u4E3B\u65E5\u5D07\u62DC\uFF1A11\uFF1A00 am-12:30 pm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 1363 W. Linden Street, Riverside, CA 92507");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 951-788-7822 efcieweb@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " www.efcie.org");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_mat_card_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sharing the Good News, Treading on Lovely Footprints");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_mat_carousel_slide_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-carousel-slide", 6, 7);
      }

      if (rf & 2) {
        var slide_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", slide_r3.image)("hideOverlay", false);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(translate, route) {
        _classCallCheck(this, HomeComponent);

        this.translate = translate;
        this.route = route;
        this._lang = 'zh';
        this.images = [{
          image: 'assets/img/slideshow/efc-27th.jpg'
        }, {
          image: 'assets/img/slideshow/choir.jpg'
        }, {
          image: 'assets/img/slideshow/dinner.jpg'
        }, {
          image: 'assets/img/slideshow/easter2019.jpg'
        }, {
          image: 'assets/img/slideshow/party.jpg'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged(); //this._lang = this.route.snapshot.params.lang||'zh';

          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this3 = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this3.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 11,
      vars: 9,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"], ["timings", "250ms ease-in", "interval", "5000", "color", "accent", "maxWidth", "auto", "proportion", "75", "slides", "5", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["overlayColor", "#00000040", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], [1, "mb-5", 2, "text-align", "center"], ["href", "http://www.efcie.org/"], ["overlayColor", "#00000040", 3, "image", "hideOverlay"], ["matCarouselSlide", ""]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u9996 \u9801");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EFCIE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_mat_card_content_7_Template, 17, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_mat_card_content_8_Template, 4, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-carousel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_mat_carousel_slide_10_Template, 2, 2, "mat-carousel-slide", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", false)("hideIndicators", false)("useKeyboard", true)("useMouseWheel", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_5__["MatCarouselSlideComponent"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkRBQTJEO0lBQzNELHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9kdWxlL2VmY2llLXN0YXRpYy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NsaWRlc2hvdy9lZmMtMjd0aC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/intro/intro.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/form-module/efcie-static/intro/intro.component.ts ***!
    \*******************************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppFormModuleEfcieStaticIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function IntroComponent_mat_card_content_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u5EA7\u843D\u5728\u6CB3\u6FF1\u5E02(City of Riverside) \u7684\u6069\u806F\u6559\u6703\uFF0C\u7DE3\u8D77\u65BC\u9577\u5E74\u53C3\u52A0\u6771\u5B89\u53F0\u798F\u57FA\u7763\u6559\u6703\u805A\u6703\u7684\u4E00\u5C0F\u7FA4\u5144\u59CA\uFF0C\u56E0\u53D7\u8056\u9748\u611F\u52D5\uFF0C \u5728\u5148\u9A45\u7267\u8005\u5E36\u9818\u4E0B\uFF0C\u65BC1988\u5E744\u6708\u958B\u59CB\u4E86\u6BCF\u6708\u4E00\u6B21\u7684\u5BB6\u5EAD\u805A\u6703\u3002\u5176\u5F8C\u65BC1990\u5E74\u8F49\u800C\u79DF\u7528Ruth Lewis Community Center\uFF0C \u6BCF\u5468\u516D\u8209\u884C\u67E5\u7D93\u805A\u6703\u3002\u4E8C\u5E74\u4E4B\u5F8C\uFF0C\u670917\u4F4D\u5144\u59CA\u59D4\u8EAB\uFF0C\u7531\u6771\u5B89\u6BCD\u6703\u5DEE\u6D3E\u5206\u8A2D\u6559\u6703\uFF0C1992\u5E742\u67089\u65E5\u8209\u884C\u4E86\u8A2D\u6559\u79AE\u62DC\uFF0C\u6069\u806F\u53F0\u798F\u57FA\u7763\u6559\u6703\u6B63\u5F0F\u6210\u7ACB\u3002 Riverside\u5730\u8655\u5927\u6D1B\u6749\u78EF\u7684\u6771\u7DE3\uFF0C\u83EF\u4EBA\u5206\u5C45\u6563\u843D\uFF0C\u4EBA\u53E3\u65E5\u6F38\u589E\u591A\uFF0C\u6559\u6703\u6210\u54E1\u5206\u4F4F\u65BCRiverside\u3001Moreno Valley\u3001Loma Linda\u3001Redlands\u3001 Highland \u3001Corona \u7B49\u9130\u8FD1\u57CE\u5E02\uFF0C\u5404\u5340\u5206\u8A2D\u5C0F\u7D44\uFF0C\u805A\u6703\u65BC\u6BCF\u5468\u4E8C\u3001\u5468\u4E94\u3001\u5468\u516D\u3001\u4EE5\u53CA\u5468\u65E5\u3002\u76EE\u524D\u4EBA\u6578\u7D0460~70\u4EBA\uFF0C\u5C6C\u5C0F\u578B\u6559\u6703\uFF0C \u5F7C\u6B64\u4E4B\u9593\u5BB9\u6613\u8A8D\u8B58\u719F\u6089\uFF0C\u5927\u5925\u5152\u95DC\u4FC2\u89AA\u5BC6\u3001\u4E92\u52D5\u6027\u9AD8\uFF0C\u662F\u6069\u806F\u7684\u4E00\u5927\u7279\u8272\u3002 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u6069\u806F\u6559\u6703\u6210\u7ACB\u8FC4\u4ECA\u5DF2\u670927\u5E74\u9918\uFF0C\u611F\u8B1D\u4E0A\u5E1D\u7279\u5225\u7684\u6069\u5178\uFF0C1994\u5E74\u5728\u5168\u9AD4\u6703\u53CB\u7684\u79B1\u544A\uFF0C\u4E26\u4E14\u5728\u7E3D\u6703\u53CA\u6BCD\u6703\u4E0D\u907A\u9918\u529B\u7684\u9F0E\u529B\u76F8\u52A9\u4E0B\uFF0C \u8B93\u6069\u806F\u6559\u6703\u7279\u5225\u8499\u6069\uFF0C\u8A2D\u6559\u4E0D\u4E45\u5C31\u64C1\u6709\u4E86\u73FE\u5728\u7684\u6703\u5802\u3002\u6559\u6703\u8FD1\u5E74\u4F86\u96D6\u6210\u9577\u7DE9\u6162\uFF0C\u4F46\u6703\u52D9\u4ECD\u76F8\u7576\u7A69\u5B9A\uFF0C\u9019\u671F\u9593\u6709\u6578\u6B21\u7267\u5E2B\u4EFB\u671F\u5C46\u6EFF\u96E2\u8077\uFF0C \u540C\u5DE5\u5747\u80FD\u627F\u64D4\u91CD\u4EFB\uFF0C\u4E26\u4E14\u5E78\u6709\u7E3D\u6703\u7267\u8005\u3001\u795E\u5B78\u9662\u6559\u6388\u3001\u53CA\u5404\u65B9\u7684\u63A8\u85A6\u5354\u52A9\uFF0C\u4F7F\u6559\u6703\u80FD\u5920\u9762\u5C0D\u8655\u7406\u5404\u7A2E\u56F0\u96E3\uFF0C\u6BCF\u9031\u7684\u4E3B\u65E5\u8B1B\u53F0\u4F9B\u61C9\u4FE1\u606F\u4E0D\u66FE\u77ED\u7F3A\uFF0C \u5BE6\u5728\u611F\u8B1D\u4E3B\u6069\uFF01 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "UCR\u8FD1\u5728\u54AB\u5C3A\uFF0C\u5411\u5B78\u751F\u50B3\u798F\u97F3\u4E00\u76F4\u662F\u6559\u6703\u7684\u7570\u8C61\u8207\u8CA0\u64D4\uFF0C\u76F4\u52302004\u5E74\u8A31\u660E\u9060\u7267\u5E2B\u767C\u8D77\u5230UCR\u6821\u5712\u767C\u55AE\u5F35\uFF0C\u6BCF\u9031\u4E94\u8FA6\u7406\u5B78\u751F\u5718\u5951\uFF0C\u5B89\u6392\u514D\u8CBB\u82F1\u8A9E\u6559\u5B78\uFF0C \u4F9B\u61C9\u665A\u9910\uFF0C\u5B78\u751F\u4E8B\u5DE5\u56E0\u4E4B\u843D\u5BE6\uFF0C\u9019\u4E9B\u512A\u79C0\u7684\u5B78\u751F\uFF0C\u4E0D\u8AD6\u5728\u5927\u5B78\u6216\u662F\u5728\u78A9\u3001\u535A\u58EB\u7814\u7A76\u6240\uFF0C\u90FD\u80FD\u85C9\u7531\u67E5\u8003\u8056\u7D93\u660E\u767D\u4FE1\u4EF0\u771F\u610F\uFF0C\u5F7C\u6B64\u66F4\u56E0\u5718\u5951\u751F\u6D3B\uFF0C \u76F8\u8655\u5982\u5BB6\u4EBA\uFF0C\u514D\u9664\u5B64\u55AE\u96E2\u9109\u4E4B\u82E6\u3002\u6559\u6703\u9664\u4F9D\u5730\u5340\u3001\u5E74\u9F61\u5B89\u6392\u5404\u67E5\u7D93\u5C0F\u7D44\u5916\uFF0C\u9031\u4E8C\u65E9\u4E0A\u6EAB\u67D4\u5C0F\u7D44\u662F\u7279\u5225\u70BA\u5E74\u8F15\u5ABD\u5ABD\u6240\u8A2D\u8A08\u7684\u6D3B\u52D5\u3002 \u80E1\u6167\u73B2\u7267\u5E2B\u6BCF\u6708\u4E8C\u6B21\u8209\u884C\u8B1B\u5EA7\uFF0C\u89AA\u5B50\u95DC\u4FC2\u3001\u5A5A\u59FB\u95DC\u4FC2\u3001\u60C5\u7DD2\u7BA1\u7406\u7B49\u7686\u70BA\u4E3B\u984C\u3002\u76EE\u524D\u4EA6\u898F\u5283\u8B80\u66F8\u6703\uFF0C\u5C0D\u793E\u5340\u7684\u5ABD\u5ABD\u5011\u63D0\u4F9B\u5B78\u7FD2\u53CA\u4E92\u76F8\u5207\u78CB\u7684\u6A5F\u6703\u3002 \u9019\u4E8C\u9805\u662F\u6559\u6703\u7684\u798F\u97F3\u5916\u5C55\u4E8B\u5DE5\uFF0C\u611F\u8B1D\u4E3B\u539A\u5F85\u5F15\u9818\uFF0C\u73FE\u4ECA\u6642\u6709\u5B78\u751F\u9752\u5E74\uFF0C\u5E74\u8F15\u7684\u5BB6\u5EAD\u9678\u7E8C\u4F86\u5230\u6559\u6703\uFF0C\u4E26\u4E14\u53C3\u8207\u670D\u4E8B\uFF0C\u5BE6\u70BA\u8FD1\u5E74\u4F86\u6559\u6703\u8499\u4E3B\u6069\u6700\u5927\u7684\u795D\u798F\uFF01 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u6559\u6703\u56E0\u8CA1\u52D9\u9700\u8981\uFF0C\u81EA\u8CFC\u5802\u8D77\u5C31\u79DF\u65BCCornerstone Fellowship Bible Church \uFF0C\u76F4\u81F32014\u5E746\u6708\u65B9\u624D\u505C\u79DF\u3002 \u4F46\u65BC\u540C\u5E747\u6708\u5373\u6709Bridges Bible Church \u79DF\u7528\u81F3\u4ECA\u3002\u4E3B\u65E5\u4E0B\u5348\u6709\u58A8\u897F\u54E5\u6559\u6703\u79DF\u7528\uFF0C\u6BCF\u9031\u4E09\u6709Verita\u4F5CHome School \u7684\u5834\u6240\uFF0C 2019\u5E742\u6708\u8D77Toast masters Bilingual Club \u4E5F\u5728\u4E3B\u65E5\u4E0B\u5348\u79DF\u501F\u4E00\u9593\u6559\u5BA4\u4F7F\u7528\uFF0C\u4E0D\u540C\u7684\u55AE\u4F4D\u5171\u540C\u4F7F\u7528\u6559\u6703\u7684\u786C\u9AD4\u8A2D\u65BD\uFF0C\u5F7C\u6B64\u5B78\u7FD2\uFF0C\u4E92\u76F8\u5E6B\u88DC\uFF0C 2018\u5E74\u5DF2\u511F\u6E05\u8CFC\u5802\u6240\u6709\u8CB8\u6B3E\uFF0C\u662F\u4E3B\u83AB\u5927\u7684\u6069\u5178\uFF01 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u53E6\u5916\uFF0C\u5341\u591A\u5E74\u4F86UCR\u65E5\u6F38\u64F4\u5927\uFF0C\u5B78\u751F\u8CFC\u7269\u6D3B\u52D5\u4E2D\u5FC3\u8207\u5B78\u751F\u516C\u5BD3\u90FD\u5728\u6559\u6703\u9130\u8FD1\u5EFA\u7ACB\uFF0C\u4F7F\u539F\u672C\u8352\u856A\u7684\u5730\u5340\u84CB\u6EFF\u5EFA\u7BC9\u7269\u3002 \u52A0\u4E0A60\u53CA215\u9AD8\u901F\u516C\u8DEF\u7684\u62D3\u5BEC\u5DE5\u7A0B\u5B8C\u6210\uFF0C\u6559\u6703\u5916\u570D\u7684\u5927\u74B0\u5883\u5B8C\u5168\u6539\u89C0\uFF0C\u7F8E\u5316\u4FBF\u6377\uFF0C\u662F\u7576\u521D\u8CFC\u5802\u6642\u59CB\u6599\u672A\u53CA\u7684\uFF0C \u4E0A\u5E1D\u90A3\u4E0D\u80FD\u6E2C\u5EA6\u7684\u8C50\u5BCC\u8207\u5927\u80FD\u662F\u6211\u5011\u980C\u8B9A\u4E0D\u76E1\u7684\u3002\u9858\u4E3B\u6069\u60E0\u62AB\u6FA4\uFF0C\u4E3B\u5149\u6C38\u7167\u6069\u806F\u3002 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IntroComponent_mat_card_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EFCIE History ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var IntroComponent =
    /*#__PURE__*/
    function () {
      function IntroComponent(translate, route) {
        _classCallCheck(this, IntroComponent);

        this.translate = translate;
        this.route = route;
        this._lang = 'zh';
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged();
          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this4 = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this4.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return IntroComponent;
    }();

    IntroComponent.ɵfac = function IntroComponent_Factory(t) {
      return new (t || IntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroComponent,
      selectors: [["app-intro"]],
      decls: 9,
      vars: 2,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"]],
      template: function IntroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u8A8D\u8B58\u6211\u5011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IntroComponent_mat_card_content_7_Template, 11, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IntroComponent_mat_card_content_8_Template, 2, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showch);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyREFBMkQ7SUFDM0Qsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9zbGlkZXNob3cvZWZjLTI3dGguanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intro',
          templateUrl: './intro.component.html',
          styleUrls: ['./intro.component.css']
        }]
      }], function () {
        return [{
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/letters/letters.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/form-module/efcie-static/letters/letters.component.ts ***!
    \***********************************************************************/

  /*! exports provided: LettersComponent */

  /***/
  function srcAppFormModuleEfcieStaticLettersLettersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LettersComponent", function () {
      return LettersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _doc_display_doc_display_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../doc-display/doc-display-popup.component */
    "./src/app/form-module/doc-display/doc-display-popup.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_file_services_get_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/file-services/get-file.service */
    "./src/app/services/file-services/get-file.service.ts");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function LettersComponent_mat_card_content_8_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u6A19\u984C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LettersComponent_mat_card_content_8_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.title, " ");
      }
    }

    function LettersComponent_mat_card_content_8_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u767C\u5E03\u65E5\u671F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LettersComponent_mat_card_content_8_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.date, " ");
      }
    }

    function LettersComponent_mat_card_content_8_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u9605\u8BFB\u94FE\u63A5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/letters"];
    };

    function LettersComponent_mat_card_content_8_td_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LettersComponent_mat_card_content_8_td_12_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var element_r20 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.openDoc(element_r20.link, element_r20.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fragment", element_r20.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("state", element_r20.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.link, " ");
      }
    }

    function LettersComponent_mat_card_content_8_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
      }
    }

    function LettersComponent_mat_card_content_8_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
      }
    }

    function LettersComponent_mat_card_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u300C\u7267\u8005\u5BB6\u66F8\u300D\u662F\u5289\u98DB/\u6E67\u6D41\u50B3\u9053\u6BCF\u5468\u6839\u64DA\u6069\u806F\u6559\u6703\u91CF\u8EAB\u800C\u5BEB\u7684 \u9748\u6027\u6587\uFF0C\u8207\u8B1B\u58C7\u4FE1\u606F\u76F8\u8F14\u76F8\u4F9D\u3001\u4E92\u7232\u4E00\u9AD4\u3002\u8ACB\u5927\u5BB6\u4E00\u5B9A\u8981\u8B80\u800C\u601D\u8003\uFF0C \u7FFB\u95B1 \u8056\u7D93\uFF0C\u4F5C\u7232\u500B\u4EBA\u9748\u4FEE\u3001\u67E5\u8003\u4E4B\u7528\u3002\u4EE5\u65E5\u7A4D\u6708\u7D2F\u7684\u597D\u7FD2\u6163\uFF0C\u5728\u771F\u5BE6\u7684\u9053\u7406\u4E0A \u64CD\u7DF4\u656C\u8654\uFF0C\u69CB\u5EFA\u601D\u60F3\u53CA\u884C\u7232\u6A21\u5F0F\u3002 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LettersComponent_mat_card_content_8_th_5_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LettersComponent_mat_card_content_8_td_6_Template, 2, 1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LettersComponent_mat_card_content_8_th_8_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LettersComponent_mat_card_content_8_td_9_Template, 2, 1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LettersComponent_mat_card_content_8_th_11_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LettersComponent_mat_card_content_8_td_12_Template, 3, 5, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LettersComponent_mat_card_content_8_tr_13_Template, 1, 0, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LettersComponent_mat_card_content_8_tr_14_Template, 1, 0, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r8.letters);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns);
      }
    }

    function LettersComponent_mat_card_content_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " english version ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LettersComponent =
    /*#__PURE__*/
    function () {
      function LettersComponent(route, dialog, getFile, translate) {
        _classCallCheck(this, LettersComponent);

        this.route = route;
        this.dialog = dialog;
        this.getFile = getFile;
        this.translate = translate;
        this.displayedColumns = ['title', 'date', 'link'];
        this._lang = 'zh';
        this.letters = getFile.getLetters();
      }

      _createClass(LettersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged();
          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this5 = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this5.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "openDoc",
        value: function openDoc(data, title) {
          console.log('lang=' + this.translate.currentLang);
          this.dialogRef = this.dialog.open(_doc_display_doc_display_popup_component__WEBPACK_IMPORTED_MODULE_1__["DocDisplayPopupComponent"], {
            width: '100%',
            data: {
              title: title,
              filename: data
            }
          });
          this.dialogRef.afterClosed().subscribe(function (res) {});
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return LettersComponent;
    }();

    LettersComponent.ɵfac = function LettersComponent_Factory(t) {
      return new (t || LettersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_services_get_file_service__WEBPACK_IMPORTED_MODULE_4__["GetFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
    };

    LettersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LettersComponent,
      selectors: [["app-letters"]],
      decls: 10,
      vars: 2,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "link"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["routerLinkActive", "router-link-active", 3, "routerLink", "fragment", "state", "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function LettersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u7267\u8005\u5BB6\u4E66");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Letters of Pastor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LettersComponent_mat_card_content_8_Template, 15, 3, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LettersComponent_mat_card_content_9_Template, 2, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showch);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL2xldHRlcnMvbGV0dGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkRBQTJEO0lBQzNELHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9kdWxlL2VmY2llLXN0YXRpYy9sZXR0ZXJzL2xldHRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NsaWRlc2hvdy9lZmMtMjd0aC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LettersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-letters',
          templateUrl: './letters.component.html',
          styleUrls: ['./letters.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _services_file_services_get_file_service__WEBPACK_IMPORTED_MODULE_4__["GetFileService"]
        }, {
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/moments/moments.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/form-module/efcie-static/moments/moments.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MomentsComponent */

  /***/
  function srcAppFormModuleEfcieStaticMomentsMomentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentsComponent", function () {
      return MomentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngmodule/material-carousel */
    "./node_modules/@ngmodule/material-carousel/__ivy_ngcc__/fesm2015/ngmodule-material-carousel.js");

    function MomentsComponent_mat_card_content_8_mat_carousel_slide_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-carousel-slide", 6, 7);
      }

      if (rf & 2) {
        var slide_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", slide_r59.image)("hideOverlay", false);
      }
    }

    function MomentsComponent_mat_card_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u65B0\u5E74\u805A\u4F1A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jan 17, 2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2020 \u5E74 1 \u6708 17 \u65E5 \uFF08\u661F\u671F\u4E94\uFF09\u665A\u4E0A 6:00PM \u8209\u884C\u6625\u7BC0\u806F\u6B61\u9910\u6703\uFF0C\u9019\u6B21\u6D3B\u52D5\u53EA \u5C0D\u5167\u958B\u653E\u6703\u53CB\u53CA\u89AA\u5C6C\uFF0C\u4EE5\u5305\u6C34\u9903\u3001\u5403\u706B\u934B\u53CA\u8868\u6F14\u7B49\u65B9\u5F0F\u6176\u795D\uFF0C\u8ACB\u5411\u5404\u5C0F \u7D44\u9577\u5831\u540D\u767B\u8A18\u5F8C\uFF0C\u518D\u544A\u77E5 Amy \u59CA\uFF0C\u4EE5\u4FBF\u7D71\u8A08\u4EBA\u6578\u53CA\u6E96\u5099\u98DF\u6750\u3002\u5BB6\u88CF\u6709\u5C0F \u706B\u7210\u53CA\u5927\u934B\u5B50\u4E5F\u8B93 Amy \u59CA \u77E5\u9053\u3002");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gallery on Faccebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-carousel", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MomentsComponent_mat_card_content_8_mat_carousel_slide_13_Template, 2, 2, "mat-carousel-slide", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5723\u8BDE\u665A\u4F1A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dec 07, 2019");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "iframe", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", false)("hideIndicators", false)("useKeyboard", true)("useMouseWheel", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r56.images);
      }
    }

    function MomentsComponent_mat_card_content_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " english version ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MomentsComponent =
    /*#__PURE__*/
    function () {
      function MomentsComponent(translate, route) {
        _classCallCheck(this, MomentsComponent);

        this.translate = translate;
        this.route = route;
        this._lang = 'zh';
        this.images = [{
          image: 'assets/img/slideshow/sf1.png'
        }, {
          image: 'assets/img/slideshow/sf2.png'
        }, {
          image: 'assets/img/slideshow/sf3.png'
        }, {
          image: 'assets/img/slideshow/sf4.png'
        }, {
          image: 'assets/img/slideshow/sf5.png'
        }, {
          image: 'assets/img/slideshow/sf6.png'
        }];
      }

      _createClass(MomentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged();
          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this6 = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this6.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return MomentsComponent;
    }();

    MomentsComponent.ɵfac = function MomentsComponent_Factory(t) {
      return new (t || MomentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    MomentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MomentsComponent,
      selectors: [["app-moments"]],
      decls: 10,
      vars: 2,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"], ["href", "https://www.facebook.com/media/set/?set=ms.c.eJxllcttBEAIQzuKMJ8B~_m9slUg57OOKwIDxeGSqrunUhq82fvQfcctgpOc7oo3N75wQclyV3zlqPURWD8gvF5GxQK~%3BUAOdNoaqNyDvcoivYK4Ds5gfZOY~%3Becvc8rEpEPvy84V5rZGOz2GtZNXUmXLLRSxwb5kwlq5ps7GPOS3IoX~_61YncHP6pgjl5RUdnI8Xe2IKseh7GO5sxF5Ewge8hYZckqg~_bdk73iRKQmq~_Oc2YuK6nP3yIN8eHZqrIZbOPfSLPlRHG00ezXVq92ze58rG1~%3BKUBvqsRs5iuJeUUeZzXns8eXGkmenb2iMVRnHkY6PTdBJwjiPJ~%3BmZpWN70Y2Dt3Cfc~%3Belxoo5ruHd7ZH5ffwdnC~%3BXnY7tUYexo~%3BAIdo93HIBs~%3BNrGcUh6S8bfTT8EAHDf.bps.a.10157587414284193&type=1"], ["timings", "250ms ease-in", "interval", "5000", "color", "accent", "maxWidth", "auto", "proportion", "75", "slides", "5", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["overlayColor", "#00000040", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], ["width", "700", "height", "500", "allowfullscreen", "true", "src", "https://www.youtube.com/embed/fvtx9JxVKhc"], ["overlayColor", "#00000040", 3, "image", "hideOverlay"], ["matCarouselSlide", ""]],
      template: function MomentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u6B64\u6642\u6B64\u523B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The Moments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MomentsComponent_mat_card_content_8_Template, 21, 7, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MomentsComponent_mat_card_content_9_Template, 2, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showch);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselSlideComponent"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL21vbWVudHMvbW9tZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkRBQTJEO0lBQzNELHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9kdWxlL2VmY2llLXN0YXRpYy9tb21lbnRzL21vbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NsaWRlc2hvdy9lZmMtMjd0aC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MomentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-moments',
          templateUrl: './moments.component.html',
          styleUrls: ['./moments.component.css']
        }]
      }], function () {
        return [{
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/organization/organization.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/form-module/efcie-static/organization/organization.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: OrganizationComponent */

  /***/
  function srcAppFormModuleEfcieStaticOrganizationOrganizationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function () {
      return OrganizationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    function OrganizationComponent_mat_card_content_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u9577\u9752\u5C0F\u7D44 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u805A\u6703\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " -- \u6BCF\u9031\u65E5 8:30~9:30 AM ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u6069\u5178\u5C0F\u7D44");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u805A\u6703\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " -- \u6BCF\u6708\u4E00\u3001\u4E09\u3001\u4E94\u9031\u65E5 1:30~3:00 PM ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u6EAB\u67D4\u5C0F\u7D44 (\u67E5\u7D93)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u805A\u6703\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " -- \u6BCF\u9031\u4E8C 9:00~9:45 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u6EAB\u67D4\u5C0F\u7D44\uFF08\u89AA\u5B50\uFF09");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u805A\u6703\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " -- \u6BCF\u9031\u4E8C 10:00~11:30 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Redlands\u548C\u5E73\u5C0F\u7D44");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u805A\u6703\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " -- \u9694\u9031\u56DB 8:30~10:30 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Riverside\u4FE1\u5BE6\u5C0F\u7D44");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \u805A\u6703\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " -- \u6BCF\u9031\u4E94 7:00~8:45 PM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u6821\u5712\u5718\u5951");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \u805A\u6703\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " -- \u6BCF\u9031\u4E94 7:00~8:45PM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Riverside\u5357\u5340\u7BC0\u5236\u5C0F\u7D44");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " \u805A\u6703\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " -- \u6BCF\u6708\u4E00\u3001\u4E09\u9031\u516D 1:30~3:00 PM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u82F1\u8A9E\u6703\u8A71\u73ED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " \u805A\u6703\u6642\u9593 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " -- \u6BCF\u9031\u4E94 5:00~6:00 PM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-tab", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u6BCF\u9031\u4E947:00~8:45PM ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "There are dozens of Chinese Christian students that attend UCR. They all have a similar background and a need to communicate and study in Chinese for religious purposes. We want to initiate this student organization to provide more opportunities for further understanding of the Christian faith, meet on and off-campus, and better connect this group overall. This group has been less represented in the past and our goal is to collect their voices in hopes to create a safe space of unity in Christ. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Links: Campus organization ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " ICCF ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " FaceBook Group ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-tab", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u6BCF\u9031\u4E945:00~6:00 PM ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u82F1\u6587\u4F1A\u8BDD\u73ED\u7531Maggie\u8001\u5E08\u5E26\u9886\u3002 Maggie\u662Fnative speaker\uFF0C\u53E3\u97F3\u5F88\u6E05\u6670\u3002\u5C0F\u73ED\u4E0A\u8BFE\uFF0C\u8BFE\u7A0B\u5185\u5BB9\u5C31\u662F\u65E5\u5E38\u5BF9\u8BDD\u3001\u65F6\u4E8B\u804A\u5929\u3001 \u9A7E\u7167\u8003\u8BD5\u7B49\uFF0C\u4F1A\u6839\u636E\u5B66\u751F\u5174\u8DA3\u8C03\u6574\u3002 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrganizationComponent_mat_card_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-card-content");
      }
    }

    var OrganizationComponent =
    /*#__PURE__*/
    function () {
      function OrganizationComponent(translate, route) {
        _classCallCheck(this, OrganizationComponent);

        this.translate = translate;
        this.route = route;
        this._lang = 'zh';
      }

      _createClass(OrganizationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged();
          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this7 = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this7.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return OrganizationComponent;
    }();

    OrganizationComponent.ɵfac = function OrganizationComponent_Factory(t) {
      return new (t || OrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    OrganizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrganizationComponent,
      selectors: [["app-organization"]],
      decls: 9,
      vars: 2,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"], ["label", "\u5404\u5C0F\u7D44\u53CA\u805A\u6703\u6642\u9593"], ["matListIcon", ""], ["matLine", ""], ["label", "\u6821\u5712\u5718\u5951"], ["href", "https://highlanderlink.ucr.edu/organization/iccf"], ["href", "https://www.facebook.com/groups/iccf.riv/"], ["mat-card-image", "", "src", "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/s960x960/74448237_10220533741277916_1615363266182119424_o.jpg?_nc_cat=106&_nc_oc=AQm9QRH5rei-dQx7W01uz8YrpjR_NJxumgTKxczYHOO8K16Fd1dBaNCBDAC3C4nb-XY&_nc_ht=scontent-sjc3-1.xx&oh=96db98f4eeccf42e18d4fd231f0075e8&oe=5ED216E1", "alt", "Photo of student bible study group"], ["label", "\u82F1\u8A9E\u6703\u8A71\u73ED"]],
      template: function OrganizationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u4E8B\u5DE5\u90E8\u9580");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ministries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrganizationComponent_mat_card_content_7_Template, 123, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrganizationComponent_mat_card_content_8_Template, 1, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showch);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJEQUEyRDtJQUMzRCxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtLW1vZHVsZS9lZmNpZS1zdGF0aWMvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvc2xpZGVzaG93L2VmYy0yN3RoLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-organization',
          templateUrl: './organization.component.html',
          styleUrls: ['./organization.component.css']
        }]
      }], function () {
        return [{
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/other/other.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/form-module/efcie-static/other/other.component.ts ***!
    \*******************************************************************/

  /*! exports provided: OtherComponent */

  /***/
  function srcAppFormModuleEfcieStaticOtherOtherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherComponent", function () {
      return OtherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

    function OtherComponent_mat_card_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u5728\u7EBF\u5723\u7ECF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u516C\u4F17\u53F7-\u6EAA\u8FB9\u6811");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OtherComponent_mat_card_content_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " english version ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var OtherComponent =
    /*#__PURE__*/
    function () {
      function OtherComponent(translate, route) {
        _classCallCheck(this, OtherComponent);

        this.translate = translate;
        this.route = route;
        this._lang = 'zh';
      }

      _createClass(OtherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged();
          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this8 = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this8.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return OtherComponent;
    }();

    OtherComponent.ɵfac = function OtherComponent_Factory(t) {
      return new (t || OtherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    OtherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OtherComponent,
      selectors: [["app-other"]],
      decls: 10,
      vars: 2,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"], ["cols", "2", "rowHeight", "2:1"], ["href", "http://www.bbintl.org/bible/read/?lang=gb&ref=DT&ch=1&bkref=gb&t=N&sname=Luk&b=%E8%B7%AF%E5%8A%A0%E7%A6%8F%E9%9F%B3", "target", "_blank", 1, "github-component", "position-relative", "hover-grow", "height-full", "no-underline", "d-flex", "flex-column", "flex-justify-center", "text-center", "border", "border-gray-light", "rounded-1", "bg-white", "p-5"], ["src", "http://www.bbintl.org/bible/img/bible7.gif", "height", "128", "alt", "\u5728\u7EBF\u5723\u7ECF", 1, "mx-auto", "rounded-1", "mb-3"], [1, "f3", "lh-condensed", "text-center", "link-gray-dark", "mb-0", "mt-1"], ["href", "https://open.weixin.qq.com/qr/code?username=Faith-Hope-Love-365", "target", "_blank", 1, "github-component", "position-relative", "hover-grow", "height-full", "no-underline", "d-flex", "flex-column", "flex-justify-center", "text-center", "border", "border-gray-light", "rounded-1", "bg-white", "p-5"], ["src", "https://open.weixin.qq.com/qr/code?username=Faith-Hope-Love-365", "height", "128", "alt", "\u516C\u4F17\u53F7-\u6EAA\u8FB9\u6811", 1, "mx-auto", "rounded-1", "mb-3"]],
      template: function OtherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u67E5\u7ECF\u8D44\u6599");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Online Resource");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OtherComponent_mat_card_content_8_Template, 14, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OtherComponent_mat_card_content_9_Template, 3, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showch);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL290aGVyL290aGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyREFBMkQ7SUFDM0Qsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL290aGVyL290aGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9zbGlkZXNob3cvZWZjLTI3dGguanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-other',
          templateUrl: './other.component.html',
          styleUrls: ['./other.component.css']
        }]
      }], function () {
        return [{
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/sunday/sunday.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/form-module/efcie-static/sunday/sunday.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SundayComponent */

  /***/
  function srcAppFormModuleEfcieStaticSundaySundayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SundayComponent", function () {
      return SundayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _lang_def_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../lang-def/translate.pipe */
    "./src/app/lang-def/translate.pipe.ts");

    function SundayComponent_mat_card_content_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5168\u5FC3\u53BB\u7231");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5F6D\u6021\u73CD\u50B3\u9053");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2019.12.22 \u5F6D\u6021\u73CD\u50B3\u9053\u300A\u5168\u5FC3\u53BB\u611B\u300B\u99AC\u53EF\u798F\u97F312\uFF1A28-34");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Facebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u91AB\u6CBB. \u66F4\u65B0\u7CFB\u5217(\u4E03)-\u300C\u7121\u6BD2\u3001\u50B7\u7121\u975E\u75DB-\u50B7\u5BB3\u7684\u69CB\u6210\u8207\u5C64\u6B21");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u5289\u98DB\u50B3\u9053");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Facebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "iframe", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u6562\u4F5C\u5922");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u80E1\u6167\u73B2\u7267\u5E2B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Facebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "iframe", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SundayComponent_mat_card_content_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " english version ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SundayComponent =
    /*#__PURE__*/
    function () {
      function SundayComponent(translate, route) {
        _classCallCheck(this, SundayComponent);

        this.translate = translate;
        this.route = route;
        this._lang = 'zh';
        this.images = [{
          image: 'assets/img/slideshow/sf1.png'
        }, {
          image: 'assets/img/slideshow/sf2.png'
        }, {
          image: 'assets/img/slideshow/sf3.png'
        }, {
          image: 'assets/img/slideshow/sf4.png'
        }, {
          image: 'assets/img/slideshow/sf5.png'
        }, {
          image: 'assets/img/slideshow/sf6.png'
        }];
      }

      _createClass(SundayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged();
          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this9 = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this9.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return SundayComponent;
    }();

    SundayComponent.ɵfac = function SundayComponent_Factory(t) {
      return new (t || SundayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    SundayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SundayComponent,
      selectors: [["app-sunday"]],
      decls: 11,
      vars: 5,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"], ["href", "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A4000%2F2019%2F12%2F22%2Fsunday-worship%2F", "title", "Share on Facebook", 1, "d-flex", "flex-items-center"], [2, "width", "32px"], ["height", "20", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 15.3 15.4"], ["d", "M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z", "fill", "#959da5"], [1, "d-none", "d-sm-inline-block", "text-gray-light"], ["width", "700", "height", "500", "allowfullscreen", "true", "src", "https://www.youtube.com/embed/1FzjgjaZsc4"], ["href", "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A4000%2F2019%2F12%2F08%2Fsunday-worship%2F", "title", "Share on Facebook", 1, "d-flex", "flex-items-center"], ["width", "700", "height", "500", "allowfullscreen", "true", "src", "https://www.youtube.com/embed/2v2YY3GNL30"], ["href", "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A4000%2F2019%2F09%2F29%2Fsunday-worship%2F", "title", "Share on Facebook", 1, "d-flex", "flex-items-center"], ["width", "700", "height", "500", "allowfullscreen", "true", "src", "https://www.youtube.com/embed/nIIPEYAqCvc"]],
      template: function SundayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Worship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SundayComponent_mat_card_content_9_Template, 48, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SundayComponent_mat_card_content_10_Template, 2, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "worship"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showch);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"]],
      pipes: [_lang_def_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL3N1bmRheS9zdW5kYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJEQUEyRDtJQUMzRCxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtLW1vZHVsZS9lZmNpZS1zdGF0aWMvc3VuZGF5L3N1bmRheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvc2xpZGVzaG93L2VmYy0yN3RoLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SundayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sunday',
          templateUrl: './sunday.component.html',
          styleUrls: ['./sunday.component.css']
        }]
      }], function () {
        return [{
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/efcie-static/weekly/weekly.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/form-module/efcie-static/weekly/weekly.component.ts ***!
    \*********************************************************************/

  /*! exports provided: WeeklyComponent */

  /***/
  function srcAppFormModuleEfcieStaticWeeklyWeeklyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeeklyComponent", function () {
      return WeeklyComponent;
    });
    /* harmony import */


    var _doc_display_doc_display_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../doc-display/doc-display-popup.component */
    "./src/app/form-module/doc-display/doc-display-popup.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_file_services_get_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/file-services/get-file.service */
    "./src/app/services/file-services/get-file.service.ts");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function WeeklyComponent_mat_card_content_8_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u6A19\u984C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function WeeklyComponent_mat_card_content_8_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r44.title, " ");
      }
    }

    function WeeklyComponent_mat_card_content_8_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u767C\u5E03\u65E5\u671F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function WeeklyComponent_mat_card_content_8_td_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r45.date, " ");
      }
    }

    function WeeklyComponent_mat_card_content_8_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u9605\u8BFB\u94FE\u63A5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/weekly"];
    };

    function WeeklyComponent_mat_card_content_8_td_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeeklyComponent_mat_card_content_8_td_16_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);

          var element_r46 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r47.openDoc(element_r46.link, element_r46.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("fragment", element_r46.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0))("state", element_r46.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r46.link, " ");
      }
    }

    function WeeklyComponent_mat_card_content_8_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
      }
    }

    function WeeklyComponent_mat_card_content_8_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 14);
      }
    }

    function WeeklyComponent_mat_card_content_8_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u6A19\u984C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function WeeklyComponent_mat_card_content_8_td_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r50.title, " ");
      }
    }

    function WeeklyComponent_mat_card_content_8_th_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u767C\u5E03\u65E5\u671F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function WeeklyComponent_mat_card_content_8_td_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r51.date, " ");
      }
    }

    function WeeklyComponent_mat_card_content_8_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u9605\u8BFB\u94FE\u63A5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function WeeklyComponent_mat_card_content_8_td_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeeklyComponent_mat_card_content_8_td_34_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);

          var element_r52 = ctx.$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r53.openDoc(element_r52.link, element_r52.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("fragment", element_r52.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0))("state", element_r52.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r52.link, " ");
      }
    }

    function WeeklyComponent_mat_card_content_8_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
      }
    }

    function WeeklyComponent_mat_card_content_8_tr_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 14);
      }
    }

    function WeeklyComponent_mat_card_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u603B\u8BA1 4 \u7BC7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WeeklyComponent_mat_card_content_8_th_9_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, WeeklyComponent_mat_card_content_8_td_10_Template, 2, 1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WeeklyComponent_mat_card_content_8_th_12_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, WeeklyComponent_mat_card_content_8_td_13_Template, 2, 1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, WeeklyComponent_mat_card_content_8_th_15_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, WeeklyComponent_mat_card_content_8_td_16_Template, 3, 5, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WeeklyComponent_mat_card_content_8_tr_17_Template, 1, 0, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, WeeklyComponent_mat_card_content_8_tr_18_Template, 1, 0, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "2019");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u603B\u8BA1 13 \u7BC7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](26, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, WeeklyComponent_mat_card_content_8_th_27_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, WeeklyComponent_mat_card_content_8_td_28_Template, 2, 1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](29, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, WeeklyComponent_mat_card_content_8_th_30_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, WeeklyComponent_mat_card_content_8_td_31_Template, 2, 1, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, WeeklyComponent_mat_card_content_8_th_33_Template, 2, 0, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, WeeklyComponent_mat_card_content_8_td_34_Template, 3, 5, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, WeeklyComponent_mat_card_content_8_tr_35_Template, 1, 0, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, WeeklyComponent_mat_card_content_8_tr_36_Template, 1, 0, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r26.reports2020);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r26.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r26.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r26.reports2019);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r26.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r26.displayedColumns);
      }
    }

    function WeeklyComponent_mat_card_content_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Total 4 Reports");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "2019");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Total 13 Reports");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var WeeklyComponent =
    /*#__PURE__*/
    function () {
      function WeeklyComponent(dialog, getFile, translate, route) {
        _classCallCheck(this, WeeklyComponent);

        this.dialog = dialog;
        this.getFile = getFile;
        this.translate = translate;
        this.route = route;
        this.displayedColumns = ['title', 'date', 'link'];
        this._lang = 'zh';
        this.reports2019 = getFile.rptData2019;
        this.reports2019En = getFile.rptData2019En;
        this.reports2020 = getFile.rptData2020;
        this.reports2020En = getFile.rptData2020En;
      }

      _createClass(WeeklyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChanged();
          this._lang = this.translate.currentLang;
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this10 = this;

          return this.translate.onLangChanged.subscribe(function (x) {
            return _this10.refreshText(x);
          });
        }
      }, {
        key: "refreshText",
        value: function refreshText(langx) {
          this._lang = langx;
        }
      }, {
        key: "openDoc",
        value: function openDoc(data, title) {
          console.log('lang=' + this.translate.currentLang);
          this.dialogRef = this.dialog.open(_doc_display_doc_display_popup_component__WEBPACK_IMPORTED_MODULE_0__["DocDisplayPopupComponent"], {
            width: '100%',
            data: {
              title: title,
              filename: data
            }
          });
          this.dialogRef.afterClosed().subscribe(function (res) {});
        }
      }, {
        key: "showch",
        get: function get() {
          return this._lang === 'zh';
        }
      }]);

      return WeeklyComponent;
    }();

    WeeklyComponent.ɵfac = function WeeklyComponent_Factory(t) {
      return new (t || WeeklyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_file_services_get_file_service__WEBPACK_IMPORTED_MODULE_3__["GetFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    WeeklyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: WeeklyComponent,
      selectors: [["app-weekly"]],
      decls: 10,
      vars: 2,
      consts: [["mat-card-avatar", "", 1, "page-header-image"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "link"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["routerLinkActive", "router-link-active", 3, "routerLink", "fragment", "state", "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function WeeklyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u7535\u5B50\u5468\u62A5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Weekly Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WeeklyComponent_mat_card_content_8_Template, 37, 6, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WeeklyComponent_mat_card_content_9_Template, 15, 0, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showch);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showch);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelDescription"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]],
      styles: [".page-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/slideshow/efc-27th.jpg');\r\n    background-size: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1tb2R1bGUvZWZjaWUtc3RhdGljL3dlZWtseS93ZWVrbHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJEQUEyRDtJQUMzRCxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtLW1vZHVsZS9lZmNpZS1zdGF0aWMvd2Vla2x5L3dlZWtseS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvc2xpZGVzaG93L2VmYy0yN3RoLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WeeklyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-weekly',
          templateUrl: './weekly.component.html',
          styleUrls: ['./weekly.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _services_file_services_get_file_service__WEBPACK_IMPORTED_MODULE_3__["GetFileService"]
        }, {
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/form-module.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/form-module/form-module.component.ts ***!
    \******************************************************/

  /*! exports provided: FormModuleComponent */

  /***/
  function srcAppFormModuleFormModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormModuleComponent", function () {
      return FormModuleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormModuleComponent =
    /*#__PURE__*/
    function () {
      function FormModuleComponent() {
        _classCallCheck(this, FormModuleComponent);
      }

      _createClass(FormModuleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormModuleComponent;
    }();

    FormModuleComponent.ɵfac = function FormModuleComponent_Factory(t) {
      return new (t || FormModuleComponent)();
    };

    FormModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormModuleComponent,
      selectors: [["app-form-module"]],
      decls: 2,
      vars: 0,
      template: function FormModuleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " form-module works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9kdWxlL2Zvcm0tbW9kdWxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-form-module',
          templateUrl: './form-module.component.html',
          styleUrls: ['./form-module.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/form-module/form-module.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/form-module/form-module.module.ts ***!
    \***************************************************/

  /*! exports provided: FormModule */

  /***/
  function srcAppFormModuleFormModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormModule", function () {
      return FormModule;
    });
    /* harmony import */


    var _efcie_static_efcie_static_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./efcie-static/efcie-static.module */
    "./src/app/form-module/efcie-static/efcie-static.module.ts");
    /* harmony import */


    var _safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../safe.pipe */
    "./src/app/safe.pipe.ts");
    /* harmony import */


    var _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../lang-def/lang-def.module */
    "./src/app/lang-def/lang-def.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _form_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./form-module.component */
    "./src/app/form-module/form-module.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _nav_module_nav_module_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../nav-module/nav-module-routing.module */
    "./src/app/nav-module/nav-module-routing.module.ts");
    /* harmony import */


    var _doc_display_doc_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./doc-display/doc-display.component */
    "./src/app/form-module/doc-display/doc-display.component.ts");
    /* harmony import */


    var _doc_display_doc_display_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./doc-display/doc-display-popup.component */
    "./src/app/form-module/doc-display/doc-display-popup.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var FormModule = function FormModule() {
      _classCallCheck(this, FormModule);
    };

    FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: FormModule
    });
    FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function FormModule_Factory(t) {
        return new (t || FormModule)();
      },
      imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_2__["LangDefModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _nav_module_nav_module_routing_module__WEBPACK_IMPORTED_MODULE_8__["NavRoutingModule"], _efcie_static_efcie_static_module__WEBPACK_IMPORTED_MODULE_0__["EfcieStaticModule"]], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FormModule, {
        declarations: [_form_module_component__WEBPACK_IMPORTED_MODULE_6__["FormModuleComponent"], _doc_display_doc_display_component__WEBPACK_IMPORTED_MODULE_9__["DocDisplayComponent"], _safe_pipe__WEBPACK_IMPORTED_MODULE_1__["SafePipe"], _doc_display_doc_display_popup_component__WEBPACK_IMPORTED_MODULE_10__["DocDisplayPopupComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_2__["LangDefModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _nav_module_nav_module_routing_module__WEBPACK_IMPORTED_MODULE_8__["NavRoutingModule"], _efcie_static_efcie_static_module__WEBPACK_IMPORTED_MODULE_0__["EfcieStaticModule"]],
        exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _doc_display_doc_display_component__WEBPACK_IMPORTED_MODULE_9__["DocDisplayComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_2__["LangDefModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _nav_module_nav_module_routing_module__WEBPACK_IMPORTED_MODULE_8__["NavRoutingModule"], _efcie_static_efcie_static_module__WEBPACK_IMPORTED_MODULE_0__["EfcieStaticModule"]],
          declarations: [_form_module_component__WEBPACK_IMPORTED_MODULE_6__["FormModuleComponent"], _doc_display_doc_display_component__WEBPACK_IMPORTED_MODULE_9__["DocDisplayComponent"], _safe_pipe__WEBPACK_IMPORTED_MODULE_1__["SafePipe"], _doc_display_doc_display_popup_component__WEBPACK_IMPORTED_MODULE_10__["DocDisplayPopupComponent"]],
          exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _doc_display_doc_display_component__WEBPACK_IMPORTED_MODULE_9__["DocDisplayComponent"]],
          entryComponents: [_doc_display_doc_display_popup_component__WEBPACK_IMPORTED_MODULE_10__["DocDisplayPopupComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/lang-def/lang-def.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/lang-def/lang-def.module.ts ***!
    \*********************************************/

  /*! exports provided: LangDefModule */

  /***/
  function srcAppLangDefLangDefModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangDefModule", function () {
      return LangDefModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./translations */
    "./src/app/lang-def/translations.ts");
    /* harmony import */


    var _translate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./translate.pipe */
    "./src/app/lang-def/translate.pipe.ts");
    /* harmony import */


    var _translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./translate.service */
    "./src/app/lang-def/translate.service.ts");

    var LangDefModule = function LangDefModule() {
      _classCallCheck(this, LangDefModule);
    };

    LangDefModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LangDefModule
    });
    LangDefModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LangDefModule_Factory(t) {
        return new (t || LangDefModule)();
      },
      providers: [_translations__WEBPACK_IMPORTED_MODULE_2__["TRANSLATION_PROVIDERS"], _translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LangDefModule, {
        declarations: [_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangDefModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [_translations__WEBPACK_IMPORTED_MODULE_2__["TRANSLATION_PROVIDERS"], _translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"]],
          exports: [_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
          declarations: [_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/lang-def/lang-en.ts":
  /*!*************************************!*\
    !*** ./src/app/lang-def/lang-en.ts ***!
    \*************************************/

  /*! exports provided: LANG_EN_NAME, LANG_EN_TRANS */

  /***/
  function srcAppLangDefLangEnTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LANG_EN_NAME", function () {
      return LANG_EN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LANG_EN_TRANS", function () {
      return LANG_EN_TRANS;
    });

    var LANG_EN_NAME = 'en';
    var LANG_EN_TRANS = {
      'church': 'EFCIE',
      'home': 'Home',
      'aboutus': 'About Us',
      'events': 'Church Events',
      'resources': 'Resources',
      //about us - subtitle
      'introduction': 'Church History',
      'organization': 'Ministries',
      'contact': 'Contracts',
      //events-subtitle
      'news': 'Latest News',
      'moments': 'The Moments',
      'weekly': 'Weekly Reports',
      //resources-subtitle
      'worship': 'Worship',
      'letters': 'Letter of Pastoer',
      'bibleonline': 'Online Bible',
      'close': 'Close'
    };
    /***/
  },

  /***/
  "./src/app/lang-def/lang-es.ts":
  /*!*************************************!*\
    !*** ./src/app/lang-def/lang-es.ts ***!
    \*************************************/

  /*! exports provided: LANG_ES_NAME, LANG_ES_TRANS */

  /***/
  function srcAppLangDefLangEsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LANG_ES_NAME", function () {
      return LANG_ES_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LANG_ES_TRANS", function () {
      return LANG_ES_TRANS;
    });

    var LANG_ES_NAME = 'es';
    var LANG_ES_TRANS = {
      'hello world': 'hola mundo',
      'hello greet': 'Hola, ${a} ${b}!',
      'well done': '${a} bien hecho'
    };
    /***/
  },

  /***/
  "./src/app/lang-def/lang-zh.ts":
  /*!*************************************!*\
    !*** ./src/app/lang-def/lang-zh.ts ***!
    \*************************************/

  /*! exports provided: LANG_ZH_NAME, LANG_ZH_TRANS */

  /***/
  function srcAppLangDefLangZhTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LANG_ZH_NAME", function () {
      return LANG_ZH_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LANG_ZH_TRANS", function () {
      return LANG_ZH_TRANS;
    });

    var LANG_ZH_NAME = 'zh';
    var LANG_ZH_TRANS = {
      'church': '恩聯台福基督教會',
      'home': '首 頁',
      'aboutus': '認識我們',
      'events': '教會動態',
      'resources': '資源分享',
      //about us - subtitle
      'introduction': '教會簡介',
      'organization': '事工部門',
      'contact': '聯絡信息',
      //events-subtitle
      'news': '最新动态',
      'moments': '图文集锦',
      'weekly': '电子周报',
      //resources-subtitle
      'worship': '主日讲道',
      'letters': '牧者家书',
      'bibleonline': '查经资料',
      'close': '關  閉'
    };
    /***/
  },

  /***/
  "./src/app/lang-def/translate.exception.ts":
  /*!*************************************************!*\
    !*** ./src/app/lang-def/translate.exception.ts ***!
    \*************************************************/

  /*! exports provided: BaseException, TranslateInvalidArgumentException */

  /***/
  function srcAppLangDefTranslateExceptionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseException", function () {
      return BaseException;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateInvalidArgumentException", function () {
      return TranslateInvalidArgumentException;
    }); // From https://github.com/angular/angular/blob/2.1.1/modules/%40angular/facade/src/errors.ts


    var BaseException =
    /*#__PURE__*/
    function (_Error) {
      _inherits(BaseException, _Error);

      function BaseException(message) {
        var _this11;

        _classCallCheck(this, BaseException);

        var nativeError = _this11 = _possibleConstructorReturn(this, _getPrototypeOf(BaseException).call(this, message));

        _this11._nativeError = nativeError;
        return _this11;
      }

      _createClass(BaseException, [{
        key: "toString",
        value: function toString() {
          return this._nativeError.toString();
        }
      }, {
        key: "message",
        get: function get() {
          return this._nativeError.message;
        },
        set: function set(message) {
          this._nativeError.message = message;
        }
      }, {
        key: "name",
        get: function get() {
          return this._nativeError.name;
        }
      }, {
        key: "stack",
        get: function get() {
          return this._nativeError.stack;
        },
        set: function set(value) {
          this._nativeError.stack = value;
        }
      }]);

      return BaseException;
    }(
    /*#__PURE__*/
    _wrapNativeSuper(Error));

    var TranslateInvalidArgumentException =
    /*#__PURE__*/
    function (_BaseException) {
      _inherits(TranslateInvalidArgumentException, _BaseException);

      function TranslateInvalidArgumentException(value, complement) {
        var _this12;

        _classCallCheck(this, TranslateInvalidArgumentException);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(TranslateInvalidArgumentException).call(this, "Invalid argument '".concat(value, "' for service Translate")));

        if (!complement) {
          _this12.message = "Invalid argument '".concat(value, "' for service Translate. Complement : ").concat(complement, ".");
        }

        return _this12;
      }

      return TranslateInvalidArgumentException;
    }(BaseException);
    /***/

  },

  /***/
  "./src/app/lang-def/translate.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/lang-def/translate.pipe.ts ***!
    \********************************************/

  /*! exports provided: TranslatePipe */

  /***/
  function srcAppLangDefTranslatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
      return TranslatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./translate.service */
    "./src/app/lang-def/translate.service.ts");

    var TranslatePipe =
    /*#__PURE__*/
    function () {
      function TranslatePipe(_translate) {
        _classCallCheck(this, TranslatePipe);

        this._translate = _translate;
      }

      _createClass(TranslatePipe, [{
        key: "transform",
        value: function transform(key, words, gender, count) {
          if (!key) return;
          return this._translate.instant(key, words, gender, count);
        }
      }]);

      return TranslatePipe;
    }();

    TranslatePipe.ɵfac = function TranslatePipe_Factory(t) {
      return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    TranslatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "translate",
      type: TranslatePipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'translate',
          pure: false
        }]
      }], function () {
        return [{
          type: _translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lang-def/translate.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/lang-def/translate.service.ts ***!
    \***********************************************/

  /*! exports provided: TranslateService */

  /***/
  function srcAppLangDefTranslateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateService", function () {
      return TranslateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./translations */
    "./src/app/lang-def/translations.ts");
    /* harmony import */


    var _translate_exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./translate.exception */
    "./src/app/lang-def/translate.exception.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TranslateService =
    /*#__PURE__*/
    function () {
      function TranslateService(_translations, _locale_id, _pluralPipe) {
        _classCallCheck(this, TranslateService);

        this._translations = _translations;
        this._locale_id = _locale_id;
        this._pluralPipe = _pluralPipe;
        this.PLACEHOLDER = '%';
        this.onLangChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log("LOCALE_ID=" + _locale_id);
        _locale_id = "zh-cn";

        if (typeof this._translations !== 'object' || this._translations === null) {
          throw new _translate_exception__WEBPACK_IMPORTED_MODULE_2__["TranslateInvalidArgumentException"](_translations);
        } // make deep copy of translations


        this._translations = JSON.parse(JSON.stringify(this._translations)); // transform if not

        if (!this._translations.alreadyCompiledByTranslateService) {
          var error = false; // Validate / normalize structure

          for (var langage in this._translations) {
            var langDic = this._translations[langage];

            for (var token in langDic) {
              var translation = langDic[token]; // is string ?

              if (typeof translation === 'string') {
                translation = {
                  'other': {
                    'other': translation
                  }
                };
              } else if (typeof translation === 'object') {
                var level = 'sex'; // by default use sex

                for (var key in translation) {
                  if (/^=[0-9+]$/.test(key)) {
                    level = 'count';
                  }
                }

                if (level === 'sex') {
                  if (typeof translation.male === 'string') {
                    translation.male = {
                      'other': translation.male
                    };
                  }

                  if (typeof translation.female === 'string') {
                    translation.female = {
                      'other': translation.female
                    };
                  }

                  if (typeof translation.other === 'string') {
                    translation.other = {
                      'other': translation.other
                    };
                  }
                } else {
                  // count
                  translation = {
                    'other': translation
                  };
                }
              } else {
                error = true;
              }

              if (error) {
                throw new _translate_exception__WEBPACK_IMPORTED_MODULE_2__["TranslateInvalidArgumentException"](langDic[token], "in ".concat(langage, " key ").concat(token));
              }

              langDic[token] = translation;
            }
          }

          if (!error) {
            this._translations.alreadyCompiledByTranslateService = true;
          }
        }
      }

      _createClass(TranslateService, [{
        key: "setDefaultLang",
        value: function setDefaultLang(lang) {
          this._defaultLang = lang;
        }
      }, {
        key: "enableFallback",
        value: function enableFallback(enable) {
          this._fallback = enable;
        }
      }, {
        key: "use",
        value: function use(lang) {
          // set current language
          this._currentLang = lang;
          this.onLangChanged.emit(lang);
        }
      }, {
        key: "replace",
        value: function replace() {
          var _this13 = this;

          var word = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var words = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var translation = word;
          var values = [].concat(words);
          values.forEach(function (e, i) {
            translation = translation.replace(_this13.PLACEHOLDER.concat(i), e);
          });
          return translation;
        }
      }, {
        key: "instant",
        value: function instant(key, words, gender, count) {
          // public perform translation
          return this.translate(key, words, gender, count);
        }
      }, {
        key: "translate",
        value: function translate(key, replaceValues, gender, count) {
          var translation = this._translations[this.currentLang] && this._translations[this.currentLang][key] || this._fallback && this._translations[this._defaultLang] && this._translations[this._defaultLang][key];
          var value = '';

          if (translation) {
            var genderTranslation = translation[gender] || translation['other'] || {};
            value = this._pluralPipe.transform(count, genderTranslation) || genderTranslation['other'] || ''; // replace var if any

            var matches = value.match(/\$\{.*?}/g); // search for ${exp}

            if (matches) {
              // contains var
              for (var i = 0; i < matches.length; ++i) {
                var replacedValue = '(undefined)';
                var exp = matches[i].replace(' ', '').match(/[^${}]+/); // remove spaces

                if (exp) {
                  var memberName = exp[0];

                  if (replaceValues) {
                    replacedValue = replaceValues[memberName];
                  }
                }

                if (replacedValue === undefined) {
                  replacedValue = '(undefined)';
                }

                if (replacedValue === null) {
                  replacedValue = '(null)';
                }

                value = value.replace(matches[i], replacedValue);
              }
            }
          } else {
            console.log("No translation for ".concat(key, " for local ").concat(this.currentLang, " and ").concat(this._defaultLang, " (or fallback not configured)"));
          } // not found


          return value;
        }
      }, {
        key: "currentLang",
        get: function get() {
          return this._currentLang || this._defaultLang;
        }
      }]);

      return TranslateService;
    }();

    TranslateService.ɵfac = function TranslateService_Factory(t) {
      return new (t || TranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_translations__WEBPACK_IMPORTED_MODULE_1__["TRANSLATIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["I18nPluralPipe"]));
    };

    TranslateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TranslateService,
      factory: TranslateService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_translations__WEBPACK_IMPORTED_MODULE_1__["TRANSLATIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["I18nPluralPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lang-def/translations.ts":
  /*!******************************************!*\
    !*** ./src/app/lang-def/translations.ts ***!
    \******************************************/

  /*! exports provided: TRANSLATIONS, dictionary, TRANSLATION_PROVIDERS */

  /***/
  function srcAppLangDefTranslationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TRANSLATIONS", function () {
      return TRANSLATIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dictionary", function () {
      return dictionary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TRANSLATION_PROVIDERS", function () {
      return TRANSLATION_PROVIDERS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lang-en */
    "./src/app/lang-def/lang-en.ts");
    /* harmony import */


    var _lang_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lang-es */
    "./src/app/lang-def/lang-es.ts");
    /* harmony import */


    var _lang_zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lang-zh */
    "./src/app/lang-def/lang-zh.ts"); //import { OpaqueToken } from '@angular/core';
    // import translations
    // translation token
    //export const TRANSLATIONS = new OpaqueToken('translations');


    var TRANSLATIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('translations'); // all traslations

    var dictionary = {
      "en": _lang_en__WEBPACK_IMPORTED_MODULE_1__["LANG_EN_TRANS"],
      "es": _lang_es__WEBPACK_IMPORTED_MODULE_2__["LANG_ES_TRANS"],
      "zh": _lang_zh__WEBPACK_IMPORTED_MODULE_3__["LANG_ZH_TRANS"]
    }; // providers

    var TRANSLATION_PROVIDERS = [{
      provide: TRANSLATIONS,
      useValue: dictionary
    }];
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var mat_video__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! mat-video */
    "./node_modules/mat-video/__ivy_ngcc__/fesm2015/mat-video.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], mat_video__WEBPACK_IMPORTED_MODULE_16__["MatVideoModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], mat_video__WEBPACK_IMPORTED_MODULE_16__["MatVideoModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], mat_video__WEBPACK_IMPORTED_MODULE_16__["MatVideoModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-module/nav-module-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/nav-module/nav-module-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: NavRoutingModule */

  /***/
  function srcAppNavModuleNavModuleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavRoutingModule", function () {
      return NavRoutingModule;
    });
    /* harmony import */


    var _form_module_efcie_static_other_other_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../form-module/efcie-static/other/other.component */
    "./src/app/form-module/efcie-static/other/other.component.ts");
    /* harmony import */


    var _form_module_efcie_static_letters_letters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../form-module/efcie-static/letters/letters.component */
    "./src/app/form-module/efcie-static/letters/letters.component.ts");
    /* harmony import */


    var _form_module_efcie_static_sunday_sunday_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../form-module/efcie-static/sunday/sunday.component */
    "./src/app/form-module/efcie-static/sunday/sunday.component.ts");
    /* harmony import */


    var _form_module_efcie_static_weekly_weekly_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../form-module/efcie-static/weekly/weekly.component */
    "./src/app/form-module/efcie-static/weekly/weekly.component.ts");
    /* harmony import */


    var _form_module_efcie_static_moments_moments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../form-module/efcie-static/moments/moments.component */
    "./src/app/form-module/efcie-static/moments/moments.component.ts");
    /* harmony import */


    var _form_module_efcie_static_events_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../form-module/efcie-static/events/events.component */
    "./src/app/form-module/efcie-static/events/events.component.ts");
    /* harmony import */


    var _form_module_efcie_static_organization_organization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../form-module/efcie-static/organization/organization.component */
    "./src/app/form-module/efcie-static/organization/organization.component.ts");
    /* harmony import */


    var _form_module_efcie_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../form-module/efcie-static/contact/contact.component */
    "./src/app/form-module/efcie-static/contact/contact.component.ts");
    /* harmony import */


    var _form_module_efcie_static_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../form-module/efcie-static/home/home.component */
    "./src/app/form-module/efcie-static/home/home.component.ts");
    /* harmony import */


    var _form_module_doc_display_doc_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../form-module/doc-display/doc-display.component */
    "./src/app/form-module/doc-display/doc-display.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _form_module_efcie_static_intro_intro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../form-module/efcie-static/intro/intro.component */
    "./src/app/form-module/efcie-static/intro/intro.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home/:lang',
      component: _form_module_efcie_static_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    }, {
      path: 'intro',
      component: _form_module_efcie_static_intro_intro_component__WEBPACK_IMPORTED_MODULE_12__["IntroComponent"]
    }, {
      path: 'contacts',
      component: _form_module_efcie_static_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }, {
      path: 'news',
      component: _form_module_efcie_static_events_events_component__WEBPACK_IMPORTED_MODULE_5__["EventsComponent"]
    }, {
      path: 'moments',
      component: _form_module_efcie_static_moments_moments_component__WEBPACK_IMPORTED_MODULE_4__["MomentsComponent"]
    }, {
      path: 'organization',
      component: _form_module_efcie_static_organization_organization_component__WEBPACK_IMPORTED_MODULE_6__["OrganizationComponent"]
    }, {
      path: 'weekly',
      component: _form_module_efcie_static_weekly_weekly_component__WEBPACK_IMPORTED_MODULE_3__["WeeklyComponent"]
    }, {
      path: 'worship',
      component: _form_module_efcie_static_sunday_sunday_component__WEBPACK_IMPORTED_MODULE_2__["SundayComponent"]
    }, {
      path: 'letters',
      component: _form_module_efcie_static_letters_letters_component__WEBPACK_IMPORTED_MODULE_1__["LettersComponent"]
    }, {
      path: 'other',
      component: _form_module_efcie_static_other_other_component__WEBPACK_IMPORTED_MODULE_0__["OtherComponent"]
    }, {
      path: 'doc/letter',
      component: _form_module_doc_display_doc_display_component__WEBPACK_IMPORTED_MODULE_9__["DocDisplayComponent"]
    }];

    var NavRoutingModule = function NavRoutingModule() {
      _classCallCheck(this, NavRoutingModule);
    };

    NavRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: NavRoutingModule
    });
    NavRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      factory: function NavRoutingModule_Factory(t) {
        return new (t || NavRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](NavRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](NavRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-module/nav-module.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/nav-module/nav-module.module.ts ***!
    \*************************************************/

  /*! exports provided: NavModule */

  /***/
  function srcAppNavModuleNavModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavModule", function () {
      return NavModule;
    });
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../lang-def/lang-def.module */
    "./src/app/lang-def/lang-def.module.ts");
    /* harmony import */


    var _nav_module_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav-module-routing.module */
    "./src/app/nav-module/nav-module-routing.module.ts");
    /* harmony import */


    var _form_module_form_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../form-module/form-module.module */
    "./src/app/form-module/form-module.module.ts");
    /* harmony import */


    var _z_mat_menu_z_mat_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./z-mat-menu/z-mat-menu.component */
    "./src/app/nav-module/z-mat-menu/z-mat-menu.component.ts");

    var NavModule = function NavModule() {
      _classCallCheck(this, NavModule);
    };

    NavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NavModule
    });
    NavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NavModule_Factory(t) {
        return new (t || NavModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_5__["LangDefModule"], _nav_module_routing_module__WEBPACK_IMPORTED_MODULE_6__["NavRoutingModule"], _form_module_form_module_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"]], _form_module_form_module_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavModule, {
        declarations: [_z_mat_menu_z_mat_menu_component__WEBPACK_IMPORTED_MODULE_8__["ZMatMenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_5__["LangDefModule"], _nav_module_routing_module__WEBPACK_IMPORTED_MODULE_6__["NavRoutingModule"], _form_module_form_module_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"]],
        exports: [_z_mat_menu_z_mat_menu_component__WEBPACK_IMPORTED_MODULE_8__["ZMatMenuComponent"], _form_module_form_module_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_z_mat_menu_z_mat_menu_component__WEBPACK_IMPORTED_MODULE_8__["ZMatMenuComponent"]],
          exports: [_z_mat_menu_z_mat_menu_component__WEBPACK_IMPORTED_MODULE_8__["ZMatMenuComponent"], _form_module_form_module_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"], _lang_def_lang_def_module__WEBPACK_IMPORTED_MODULE_5__["LangDefModule"], _nav_module_routing_module__WEBPACK_IMPORTED_MODULE_6__["NavRoutingModule"], _form_module_form_module_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"]],
          providers: [],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-module/z-mat-menu/z-mat-menu.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/nav-module/z-mat-menu/z-mat-menu.component.ts ***!
    \***************************************************************/

  /*! exports provided: ZMatMenuComponent */

  /***/
  function srcAppNavModuleZMatMenuZMatMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZMatMenuComponent", function () {
      return ZMatMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../lang-def/translate.service */
    "./src/app/lang-def/translate.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _lang_def_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../lang-def/translate.pipe */
    "./src/app/lang-def/translate.pipe.ts");

    function ZMatMenuComponent_mat_button_toggle_59_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZMatMenuComponent_mat_button_toggle_59_Template_mat_button_toggle_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var lang_r74 = ctx.$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.selectLang(lang_r74.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r74 = ctx.$implicit;

        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-primary", ctx_r73.isCurrentLang(lang_r74.value));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r74.display, " ");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/home", a1];
    };

    var ZMatMenuComponent =
    /*#__PURE__*/
    function () {
      function ZMatMenuComponent(_translate) {
        _classCallCheck(this, ZMatMenuComponent);

        this._translate = _translate;
        this.lang = 'zh';
      }

      _createClass(ZMatMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.supportedLangs = [{
            display: '华',
            value: 'zh'
          }, {
            display: 'En',
            value: 'en'
          }];

          this._translate.setDefaultLang('zh');

          this._translate.enableFallback(true);

          this.selectLang('zh'); //es,en 
        }
      }, {
        key: "isCurrentLang",
        value: function isCurrentLang(lang) {
          return lang === this._translate.currentLang;
        }
      }, {
        key: "selectLang",
        value: function selectLang(lang) {
          console.log('selected lang=' + lang);

          this._translate.use(lang);

          this.subscribeToLangChanged();
        }
      }, {
        key: "subscribeToLangChanged",
        value: function subscribeToLangChanged() {
          var _this14 = this;

          return this._translate.onLangChanged.subscribe(function (x) {
            _this14.lang = x;
            console.log(x);
          });
        }
      }, {
        key: "toggle",
        value: function toggle() {
          console.log("toggled ");
        }
      }]);

      return ZMatMenuComponent;
    }();

    ZMatMenuComponent.ɵfac = function ZMatMenuComponent_Factory(t) {
      return new (t || ZMatMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    ZMatMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ZMatMenuComponent,
      selectors: [["app-z-mat-menu"]],
      decls: 60,
      vars: 58,
      consts: [["color", "primary"], ["mat-icon-button", ""], [3, "click"], [1, "menu-spacer"], ["mat-button", "", "routerLinkActive", "active", 3, "routerLink"], ["mat-button", "", 3, "matMenuTriggerFor"], ["knowus", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-button", "", 3, "routerLink"], ["events", "matMenu"], ["resources", "matMenu"], [1, "right"], ["name", "language", "appearance", "legacy"], ["class", "btn btn-primary btn-sm", 3, "btn-primary", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]],
      template: function ZMatMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZMatMenuComponent_Template_mat_icon_click_3_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-menu", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-menu", null, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-menu", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-button-toggle-group", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ZMatMenuComponent_mat_button_toggle_59_Template, 2, 3, "mat-button-toggle", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 28, "church"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c0, ctx.lang));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 30, "home"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 32, "aboutus"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 34, "events"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 36, "resources"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/intro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 38, "introduction"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 40, "contact"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/organization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 42, "organization"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/news");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 44, "news"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/moments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 46, "moments"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/weekly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 48, "weekly"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/worship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 50, "worship"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/letters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 52, "letters"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/other");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 54, "bibleonline"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supportedLangs);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      pipes: [_lang_def_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
      styles: [".right[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    text-align: right;\r\n    padding: 0px;\r\n}\r\n.z-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .z-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-right: 4px;\r\n}\r\n.z-mat-button-toggle.mat-lang[_ngcontent-%COMP%] {\r\n    color: #155724;\r\n    height: 8px !important;\r\n    width: 26px !important;\r\n}\r\n.z-mat-button-toggle.mat-lang[_ngcontent-%COMP%]:hover {\r\n  background-color: #f0fff3;\r\n  height: 8px !important;\r\n  width: 26px !important;\r\n}\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n    background-image: linear-gradient(#003563, #184d7d, #5eaff7);\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1vZHVsZS96LW1hdC1tZW51L3otbWF0LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7SUFDSSw0REFBNEQ7SUFDNUQsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1vZHVsZS96LW1hdC1tZW51L3otbWF0LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodCB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi56LWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uei1idXR0b24tcm93IGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuLnotbWF0LWJ1dHRvbi10b2dnbGUubWF0LWxhbmcge1xyXG4gICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICBoZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI2cHggIWltcG9ydGFudDtcclxufVxyXG4uei1tYXQtYnV0dG9uLXRvZ2dsZS5tYXQtbGFuZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcclxuICBoZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAzNTYzLCAjMTg0ZDdkLCAjNWVhZmY3KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZMatMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-z-mat-menu',
          templateUrl: './z-mat-menu.component.html',
          styleUrls: ['./z-mat-menu.component.css']
        }]
      }], function () {
        return [{
          type: _lang_def_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/safe.pipe.ts":
  /*!******************************!*\
    !*** ./src/app/safe.pipe.ts ***!
    \******************************/

  /*! exports provided: SafePipe */

  /***/
  function srcAppSafePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
      return SafePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafePipe =
    /*#__PURE__*/
    function () {
      function SafePipe(sanitizer) {
        _classCallCheck(this, SafePipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafePipe, [{
        key: "transform",
        value: function transform(value) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
      }]);

      return SafePipe;
    }();

    SafePipe.ɵfac = function SafePipe_Factory(t) {
      return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safe",
      type: SafePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safe'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/file-services/get-file.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/file-services/get-file.service.ts ***!
    \************************************************************/

  /*! exports provided: GetFileService */

  /***/
  function srcAppServicesFileServicesGetFileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetFileService", function () {
      return GetFileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_json_letterFiles_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../assets/json/letterFiles.json */
    "./src/assets/json/letterFiles.json");

    var _assets_json_letterFiles_json__WEBPACK_IMPORTED_MODULE_1___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/json/letterFiles.json */
    "./src/assets/json/letterFiles.json", 1);
    /* harmony import */


    var _assets_json_letterFiles_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/json/letterFiles_en.json */
    "./src/assets/json/letterFiles_en.json");

    var _assets_json_letterFiles_en_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/json/letterFiles_en.json */
    "./src/assets/json/letterFiles_en.json", 1);
    /* harmony import */


    var _assets_json_reports2019_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/json/reports2019.json */
    "./src/assets/json/reports2019.json");

    var _assets_json_reports2019_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/json/reports2019.json */
    "./src/assets/json/reports2019.json", 1);
    /* harmony import */


    var _assets_json_reports2019_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../assets/json/reports2019_en.json */
    "./src/assets/json/reports2019_en.json");

    var _assets_json_reports2019_en_json__WEBPACK_IMPORTED_MODULE_4___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/json/reports2019_en.json */
    "./src/assets/json/reports2019_en.json", 1);
    /* harmony import */


    var _assets_json_reports2020_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../assets/json/reports2020.json */
    "./src/assets/json/reports2020.json");

    var _assets_json_reports2020_json__WEBPACK_IMPORTED_MODULE_5___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/json/reports2020.json */
    "./src/assets/json/reports2020.json", 1);
    /* harmony import */


    var _assets_json_reports2020_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../assets/json/reports2020_en.json */
    "./src/assets/json/reports2020_en.json");

    var _assets_json_reports2020_en_json__WEBPACK_IMPORTED_MODULE_6___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/json/reports2020_en.json */
    "./src/assets/json/reports2020_en.json", 1);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GetFileService =
    /*#__PURE__*/
    function () {
      function GetFileService(http) {
        _classCallCheck(this, GetFileService);

        //console.log(data);
        this.http = http;
        this._fileUrl = 'assets/letterFiles.json';
        this.letters = _assets_json_letterFiles_json__WEBPACK_IMPORTED_MODULE_1__;
        this.lettersEn = _assets_json_letterFiles_en_json__WEBPACK_IMPORTED_MODULE_2__;
        this.rptData2019 = _assets_json_reports2019_json__WEBPACK_IMPORTED_MODULE_3__;
        this.rptData2019En = _assets_json_reports2019_en_json__WEBPACK_IMPORTED_MODULE_4__;
        this.rptData2020 = _assets_json_reports2020_json__WEBPACK_IMPORTED_MODULE_5__;
        this.rptData2020En = _assets_json_reports2020_en_json__WEBPACK_IMPORTED_MODULE_6__; // this.getJson().subscribe(data => {
        //   console.log(data);
        // })
      } // read a file from server


      _createClass(GetFileService, [{
        key: "getJson",
        value: function getJson(url) {
          return this.http.get(url || this._fileUrl);
        }
      }, {
        key: "getLetters",
        value: function getLetters() {
          return this.letters;
        }
      }]);

      return GetFileService;
    }();

    GetFileService.ɵfac = function GetFileService_Factory(t) {
      return new (t || GetFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]));
    };

    GetFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetFileService,
      factory: GetFileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/json/letterFiles.json":
  /*!******************************************!*\
    !*** ./src/assets/json/letterFiles.json ***!
    \******************************************/

  /*! exports provided: 0, 1, 2, default */

  /***/
  function srcAssetsJsonLetterFilesJson(module) {
    module.exports = JSON.parse("[{\"title\":\"乃是基督\",\"date\":\"1/5/2020\",\"link\":\"assets/letters/ch/1_5_2020.pdf\"},{\"title\":\"墜入心坎的和聲\",\"date\":\"1/12/2020\",\"link\":\"assets/letters/ch/1_12_2020.pdf\"},{\"title\":\"神榮耀的光輝\",\"date\":\"1/19/2020\",\"link\":\"assets/letters/ch/1_19_2020.pdf\"}]");
    /***/
  },

  /***/
  "./src/assets/json/letterFiles_en.json":
  /*!*********************************************!*\
    !*** ./src/assets/json/letterFiles_en.json ***!
    \*********************************************/

  /*! exports provided: 0, 1, default */

  /***/
  function srcAssetsJsonLetterFiles_enJson(module) {
    module.exports = JSON.parse("[{\"title\":\"Home Letter 1\",\"date\":\"1/17/2020\",\"link\":\"assets/letters/ch/1_5_2020.「乃是基督」.pdf\"},{\"title\":\"Home Letter 2\",\"date\":\"1/23/2020\",\"link\":\"/org1/public/letter/letter2.html\"}]");
    /***/
  },

  /***/
  "./src/assets/json/reports2019.json":
  /*!******************************************!*\
    !*** ./src/assets/json/reports2019.json ***!
    \******************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, default */

  /***/
  function srcAssetsJsonReports2019Json(module) {
    module.exports = JSON.parse("[{\"title\":\"第一期周报\",\"date\":\"10/6/2019\",\"link\":\"assets/weekly/2019/ch/2019.10.6.pdf\"},{\"title\":\"第二期周报\",\"date\":\"10/13/2019\",\"link\":\"assets/weekly/2019/ch/2019.10.13.pdf\"},{\"title\":\"第三期周报\",\"date\":\"10/20/2019\",\"link\":\"assets/weekly/2019/ch/2019.10.20.pdf\"},{\"title\":\"第四期周报\",\"date\":\"10/27/2019\",\"link\":\"assets/weekly/2019/ch/2019.10.27.pdf\"},{\"title\":\"第五期周报\",\"date\":\"11/3/2019\",\"link\":\"assets/weekly/2019/ch/2019.11.3.pdf\"},{\"title\":\"第六期周报\",\"date\":\"11/10/2019\",\"link\":\"assets/weekly/2019/ch/2019.11.10.pdf\"},{\"title\":\"第七期周报\",\"date\":\"11/17/2019\",\"link\":\"assets/weekly/2019/ch/2019.11.17.pdf\"},{\"title\":\"第八期周报\",\"date\":\"11/24/2019\",\"link\":\"assets/weekly/2019/ch/2019.11.24.pdf\"},{\"title\":\"第九期周报\",\"date\":\"12/1/2019\",\"link\":\"assets/weekly/2019/ch/2019.12.1.pdf\"},{\"title\":\"第十期周报\",\"date\":\"12/8/2019\",\"link\":\"assets/weekly/2019/ch/2019.12.8.pdf\"},{\"title\":\"第十一期周报\",\"date\":\"12/15/2019\",\"link\":\"assets/weekly/2019/ch/2019.12.15.pdf\"},{\"title\":\"第十二期周报\",\"date\":\"12/22/2019\",\"link\":\"assets/weekly/2019/ch/2019.12.22.pdf\"},{\"title\":\"第十三期周报\",\"date\":\"12/29/2019\",\"link\":\"assets/weekly/2019/ch/2019.12.29.pdf\"}]");
    /***/
  },

  /***/
  "./src/assets/json/reports2019_en.json":
  /*!*********************************************!*\
    !*** ./src/assets/json/reports2019_en.json ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsJsonReports2019_enJson(module) {
    module.exports = JSON.parse("[]");
    /***/
  },

  /***/
  "./src/assets/json/reports2020.json":
  /*!******************************************!*\
    !*** ./src/assets/json/reports2020.json ***!
    \******************************************/

  /*! exports provided: 0, 1, 2, 3, default */

  /***/
  function srcAssetsJsonReports2020Json(module) {
    module.exports = JSON.parse("[{\"title\":\"第一期周报\",\"date\":\"1/5/2020\",\"link\":\"assets/weekly/2020/ch/2020.1.5.pdf\"},{\"title\":\"第二期周报\",\"date\":\"1/12/2020\",\"link\":\"assets/weekly/2020/ch/2020.1.12.pdf\"},{\"title\":\"第三期周报\",\"date\":\"1/19/2020\",\"link\":\"assets/weekly/2020/ch/2020.1.19.pdf\"},{\"title\":\"第四期周报\",\"date\":\"1/26/2020\",\"link\":\"assets/weekly/2020/ch/2020.1.26.pdf\"}]");
    /***/
  },

  /***/
  "./src/assets/json/reports2020_en.json":
  /*!*********************************************!*\
    !*** ./src/assets/json/reports2020_en.json ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsJsonReports2020_enJson(module) {
    module.exports = JSON.parse("[]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\zhang\ws\git\others\efcie\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map