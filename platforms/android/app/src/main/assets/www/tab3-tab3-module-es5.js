(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "./node_modules/@ionic-native/background-mode/__ivy_ngcc__/ngx/index.js":
    /*!******************************************************************************!*\
      !*** ./node_modules/@ionic-native/background-mode/__ivy_ngcc__/ngx/index.js ***!
      \******************************************************************************/

    /*! exports provided: BackgroundMode */

    /***/
    function node_modulesIonicNativeBackgroundMode__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackgroundMode", function () {
        return BackgroundMode;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var BackgroundMode =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BackgroundMode, _super);

        function BackgroundMode() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        BackgroundMode.prototype.enable = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enable", {
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.disable = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disable", {
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.setEnabled = function (enable) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setEnabled", {
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.fireEvent = function (event) {
          var args = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }

          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "fireEvent", {
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.isEnabled = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isEnabled", {
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.isActive = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isActive", {
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.setDefaults = function (overrides) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDefaults", {
            "platforms": ["Android"]
          }, arguments);
        };

        BackgroundMode.prototype.configure = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "configure", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.on = function (event) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "on", {
            "observable": true,
            "clearFunction": "un",
            "clearWithArgs": true
          }, arguments);
        };

        BackgroundMode.prototype.un = function (event, callback) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "un", {}, arguments);
        };

        BackgroundMode.prototype.moveToBackground = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "moveToBackground", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.disableWebViewOptimizations = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disableWebViewOptimizations", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.moveToForeground = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "moveToForeground", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.overrideBackButton = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "overrideBackButton", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.excludeFromTaskList = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "excludeFromTaskList", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.isScreenOff = function (fn) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isScreenOff", {
            "platforms": ["Android"]
          }, arguments);
        };

        BackgroundMode.prototype.wakeUp = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "wakeUp", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.unlock = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "unlock", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BackgroundMode.prototype.disableBatteryOptimizations = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disableBatteryOptimizations", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BackgroundMode.pluginName = "BackgroundMode";
        BackgroundMode.plugin = "cordova-plugin-background-mode";
        BackgroundMode.pluginRef = "cordova.plugins.backgroundMode";
        BackgroundMode.repo = "https://github.com/katzer/cordova-plugin-background-mode";
        BackgroundMode.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "Windows"];

        BackgroundMode.ɵfac = function BackgroundMode_Factory(t) {
          return ɵBackgroundMode_BaseFactory(t || BackgroundMode);
        };

        BackgroundMode.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: BackgroundMode,
          factory: function factory(t) {
            return BackgroundMode.ɵfac(t);
          }
        });

        var ɵBackgroundMode_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BackgroundMode);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BackgroundMode, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return BackgroundMode;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYmFja2dyb3VuZC1tb2RlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBQ2xDO0FBSUUsSUF3RWtDLGtDQUFpQjtBQUFDO0FBRTlCO0FBQ3dDO0FBQU0sSUFLcEUsK0JBQU07QUFJb0IsSUFLMUIsZ0NBQU87QUFNTCxJQVFGLG1DQUFVLGFBQUMsTUFBZTtBQUtqQixJQVFULGtDQUFTLGFBQUMsS0FBYTtBQUFJLFFBQUYsY0FBYztBQUFDLGFBQWYsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztBQUFJLFlBQWxCLDZCQUFjO0FBQUM7QUFBVTtBQUtKO0FBQzNDLElBS0gsa0NBQVM7QUFLb0MsSUFNN0MsaUNBQVE7QUFNRCxJQU9QLG9DQUFXLGFBQUMsU0FBdUM7QUFJekIsSUFPMUIsa0NBQVMsYUFBQyxPQUFxQztBQUlWLElBU3JDLDJCQUFFLGFBQUMsS0FBYTtBQUtzRCxJQU10RSwyQkFBRSxhQUFDLEtBQWEsRUFBRSxRQUFrQztBQUtyQyxJQU1mLHlDQUFnQjtBQU9qQixJQUVDLG9EQUEyQjtBQU1mLElBR1oseUNBQWdCO0FBS2YsSUFJRCwyQ0FBa0I7QUFNVixJQUdSLDRDQUFtQjtBQUtuQixJQUtBLG9DQUFXLGFBQUMsRUFBMkI7QUFPekMsSUFFRSwrQkFBTTtBQU1nQixJQUd0QiwrQkFBTTtBQU1OLElBR0Esb0RBQTJCO0FBRXFGO0FBQWtEO0FBQThEO0FBQWlFO0FBQXNGO0lBeE01VyxjQUFjLHdCQUQxQixVQUFVLEVBQUUsUUFDQSxjQUFjOzs7OzswQkFBRTtBQUFDLHlCQS9FOUI7QUFBRSxFQStFa0MsaUJBQWlCO0FBQ3BELFNBRFksY0FBYztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbnMgaXRlbXMgdGhhdCBjYW4gYmUgdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIGJhY2tncm91bmQgdGFza1xuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIG9mIGJhY2tncm91bmQgdGFza1xuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhpcyB3aWxsIGxvb2sgZm9yIGA8aWNvbiBuYW1lPi5wbmdgIGluIHBsYXRmb3Jtcy9hbmRyb2lkL3Jlcy9kcmF3YWJsZXxtaXBtYXBcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgbm90aWZpY2F0aW9uIGNpcmNsZVxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGFwcCB3aWxsIGNvbWUgdG8gZm9yZWdyb3VuZCB3aGVuIHRhcHBpbmcgb24gdGhlIG5vdGlmaWNhdGlvbi4gSWYgZmFsc2UsIHBsdWdpbiB3b24ndCBjb21lIHRvIGZvcmVncm91bmQgd2hlbiB0YXBwZWQuXG4gICAqL1xuICByZXN1bWU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGVuIHNldCB0byBmYWxzZSBtYWtlcyB0aGUgbm90aWZpY2F0aW9ucyB2aXNpYmxlIG9uIGxvY2sgc2NyZWVuIChBbmRyb2lkIDUuMCspXG4gICAqL1xuICBoaWRkZW4/OiBib29sZWFuO1xuXG4gIC8qKiBCaWcgdGV4dCAqL1xuICBiaWdUZXh0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIHRleHQgdGhhdCBzY3JvbGxzIGl0c2VsZiBvbiBzdGF0dXNiYXJcbiAgICovXG4gIHRpY2tlcj86IHN0cmluZztcblxuICAvKipcbiAgICogaWYgdHJ1ZSBwbHVnaW4gd2lsbCBub3QgZGlzcGxheSBhIG5vdGlmaWNhdGlvbi4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICovXG4gIHNpbGVudD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgQmFja2dyb3VuZCBNb2RlXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIHByZXZlbnQgdGhlIGFwcCBmcm9tIGdvaW5nIHRvIHNsZWVwIHdoaWxlIGluIGJhY2tncm91bmQuXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlLiBGb3IgbW9yZSBpbmZvIGFib3V0IHBsdWdpbiwgdmlzaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhY2tncm91bmRNb2RlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYWNrZ3JvdW5kLW1vZGUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tncm91bmRNb2RlOiBCYWNrZ3JvdW5kTW9kZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5iYWNrZ3JvdW5kTW9kZS5lbmFibGUoKTtcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb25cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWNrZ3JvdW5kTW9kZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5iYWNrZ3JvdW5kTW9kZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZScsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kTW9kZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxuICAgKiBPbmNlIGNhbGxlZCwgcHJldmVudHMgdGhlIGFwcCBmcm9tIGJlaW5nIHBhdXNlZCB3aGlsZSBpbiBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGVuYWJsZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGJhY2tncm91bmQgbW9kZS5cbiAgICogT25jZSB0aGUgYmFja2dyb3VuZCBtb2RlIGhhcyBiZWVuIGRpc2FibGVkLCB0aGUgYXBwIHdpbGwgYmUgcGF1c2VkIHdoZW4gaW4gYmFja2dyb3VuZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkaXNhYmxlKCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxuICAgKlxuICAgKiBAcGFyYW0gZW5hYmxlIHtib29sZWFufSBUaGUgc3RhdHVzIHRvIHNldCBmb3IuXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0RW5hYmxlZChlbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZpcmUgZXZlbnQgd2l0aCBnaXZlbiBhcmd1bWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQncyBuYW1lLlxuICAgKiBAcGFyYW0gYXJncyB7YXJyYXl9IFRoZSBjYWxsYmFjaydzIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGZpcmVFdmVudChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBiYWNrZ3JvdW5kIG1vZGUgaXMgZW5hYmxlZCBvciBub3QuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm5zIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgYmFja2dyb3VuZCBtb2RlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byBnZXQgdGhlIGluZm9ybWF0aW9uIGlmIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaXMgYWN0aXZlLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJhY2tncm91bmQgbW9kZSBpcyBhY3RpdmUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZSB0aGUgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIEFuZHJvaWQgcGxhdGZvcm0uXG4gICAqIEBwYXJhbSBvdmVycmlkZXMge0JhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbn0gRGljdCBvZiBvcHRpb25zIHRvIGJlIG92ZXJyaWRkZW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2V0RGVmYXVsdHMob3ZlcnJpZGVzPzogQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBNb2RpZnkgdGhlIGRpc3BsYXllZCBpbmZvcm1hdGlvbi5cbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIEFuZHJvaWQgcGxhdGZvcm0uXG4gICAqIEBwYXJhbSB7QmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9ufSBbb3B0aW9uc10gQW55IG9wdGlvbnMgeW91IHdhbnQgdG8gdXBkYXRlLiBTZWUgdGFibGUgYmVsb3cuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBjb25maWd1cmUob3B0aW9ucz86IEJhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmVnaXN0ZXIgY2FsbGJhY2sgZm9yIGdpdmVuIGV2ZW50LlxuICAgKiA+IEF2YWlsYWJsZSBldmVudHMgYXJlIGBlbmFibGVgLCBgZGlzYWJsZWAsIGBhY3RpdmF0ZWAsIGBkZWFjdGl2YXRlYCBhbmQgYGZhaWx1cmVgLlxuICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ30gRXZlbnQgbmFtZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3VuJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuIGZvciBldmVudHMgdGhhdCB0aGUgcGx1Z2luIGZpcmVzLiBBdmFpbGFibGUgZXZlbnRzIGFyZSBgZW5hYmxlYCwgYGRpc2FibGVgLCBgYWN0aXZhdGVgLCBgZGVhY3RpdmF0ZWAgYW5kIGBmYWlsdXJlYC5cbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gVGhlIGZ1bmN0aW9uIHRvIGJlIGV4ZWMgYXMgY2FsbGJhY2suXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQW5kcm9pZCBhbGxvd3MgdG8gcHJvZ3JhbW1hdGljYWxseSBtb3ZlIGZyb20gZm9yZWdyb3VuZCB0byBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbW92ZVRvQmFja2dyb3VuZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBHUFMtdHJhY2tpbmcgaW4gYmFja2dyb3VuZCAoQW5kcm9pZCkuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkaXNhYmxlV2ViVmlld09wdGltaXphdGlvbnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbmRyb2lkIGFsbG93cyB0byBwcm9ncmFtbWF0aWNhbGx5IG1vdmUgZnJvbSBiYWNrZ3JvdW5kIHRvIGZvcmVncm91bmQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBtb3ZlVG9Gb3JlZ3JvdW5kKCk6IHZvaWQge31cblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgdG8gZ28gdG8gYmFja2dyb3VuZCBpbnN0ZWFkIG9mIGNsb3NpbmcgdGhlIGFwcC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG92ZXJyaWRlQmFja0J1dHRvbigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEV4Y2x1ZGUgdGhlIGFwcCBmcm9tIHRoZSByZWNlbnQgdGFzayBsaXN0LiBXb3JrcyBvbiBBbmRyb2lkIDUuMCsuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBleGNsdWRlRnJvbVRhc2tMaXN0KCk6IHZvaWQge31cblxuICAvKipcbiAgICogSWYgdGhlIHNjcmVlbiBpcyBvZmYuXG4gICAqIEBwYXJhbSBmbiB7ZnVuY3Rpb259IENhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSB3aXRoIGJvb2xlYW4gYXJnLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICBpc1NjcmVlbk9mZihmbjogKGFyZzA6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFR1cm4gc2NyZWVuIG9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICB3YWtlVXAoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUdXJuIHNjcmVlbiBvbiBhbmQgc2hvdyBhcHAgZXZlbiBsb2NrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHVubG9jaygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGJhdHRlcnkgb3B0aW1hemF0aW9uIG1vZGUgZm9yIHRoZSBhcHAgKGFuZHJvaWQgb25seSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGRpc2FibGVCYXR0ZXJ5T3B0aW1pemF0aW9ucygpOiB2b2lkIHt9XG59XG4iXX0=

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button default-href=\"/tab2\" [routerLink]=\"['/tab2']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Configuration\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n  <ion-content fullscreen class=\"ion-padding\">\n \n    <ion-grid>\n      <ion-row>\n        <ion-col>\n           <ion-icon   name=\"bluetooth\"   style=\"color:blue\" class=\"ion-iconXL\"  ></ion-icon>               <br>\n            <ion-label> {{connstatus}} </ion-label> \n            <ion-label> </ion-label> \n            <ion-select [(ngModel)]=\"pairedDeviceID\"(ionChange)=\"selectBtDevice($event)\" (ionFocus)=\"checkBluetoothEnabled()\" [selectedText]=\"globalconfig.bluetoothDeviceToUse.devicename.substring(0,16) \"  placeholder=\"Select device\">  \n              <ion-select-option *ngFor=\"let i of pairedList;let j=index\" value=\"{{j}}\" selected=\"{{i.isSelected}}\"  >\n                <span>{{i.name}}</span>\n               </ion-select-option>\n             </ion-select>\n          </ion-col>\n  \n        \n      </ion-row> \n      <p></p>\n  \n    </ion-grid>\n    \n    <ion-list>\n      <ion-list-header>\n        Send / Save engine data to:\n      </ion-list-header>\n    \n      <p  >\n        <ion-chip   (click)=\"selectDataUpload('localserver')\">\n          <ion-icon  name=\"checkmark-circle\"  *ngIf=\"globalconfig.dataUpload.mode=='localserver'\" ></ion-icon>\n          <ion-label>InfluxDB (HTTP)</ion-label>\n        </ion-chip>\n        <ion-chip  (click)=\"selectDataUpload('backend')\" >\n          <ion-icon   name=\"checkmark-circle\"   *ngIf=\"globalconfig.dataUpload.mode=='backend'\" ></ion-icon>\n          <ion-label>Cloud </ion-label>\n        </ion-chip>\n        <ion-chip  (click)=\"selectDataUpload('CSV')\">\n          <ion-icon   name=\"checkmark-circle\"    *ngIf=\"globalconfig.dataUpload.mode=='CSV'\" ></ion-icon>\n          <ion-label>CSV</ion-label>\n        </ion-chip>\n      </p>\n    \n      <ion-item *ngIf=\"globalconfig.dataUpload.mode=='backend'\">\n        <ion-label floating>Service API Key:</ion-label>\n        <ion-input type=\"text\" name=\"apikey\"  [(ngModel)]=\"globalconfig.dataUpload.apikey\"  (ionChange)=\"configDataUpload()\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"globalconfig.dataUpload.mode=='backend'\">\n        <ion-label floating>Service API Secret:</ion-label>\n        <ion-input type=\"text\" name=\"apisecret\"  [(ngModel)]=\"globalconfig.dataUpload.apisecret\"  (ionChange)=\"configDataUpload()\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"globalconfig.dataUpload.mode=='localserver'\">\n        <ion-label floating>InfluxDB host:port</ion-label>\n        <ion-input type=\"url\" inputmode=\"url\" name=\"localserver\"  [(ngModel)]=\"globalconfig.dataUpload.localserver\"  (ionChange)=\"configDataUpload()\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"globalconfig.dataUpload.mode=='localserver'\">\n          <ion-label>Skip TLS verify</ion-label>\n          <ion-toggle slot=\"end\"   color=\"success\" [(ngModel)]=\"globalconfig.dataUpload.localserverdisablecert\" (ionChange)=\"saveMetricsCfg()\" ></ion-toggle>\n      </ion-item>        \n    </ion-list>\n    <p></p>\n    <ion-list   >\n      <ion-list-header>Auto dim screen brightness when connected</ion-list-header> \n    <ion-item>\n       <ion-range    [(ngModel)]=\"globalconfig.dimscreenbrightness\" (ionChange)=\"setBrightness()\" >\n        <ion-icon slot=\"start\" size=\"small\" name=\"sunny\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"sunny\"></ion-icon>\n      </ion-range>\n    </ion-item> \n    </ion-list>\n      <!-- <ion-list  ngDefaultControl >\n        <ion-list-header>Metrics</ion-list-header> \n        <ion-item *ngFor=\"let i of obdmetrics;let j=index\"  > \n          <ion-label>{{i.description}}</ion-label>\n          <ion-toggle slot=\"end\"   color=\"success\" [(ngModel)]=\"i.metricSelectedToPoll\" (ionChange)=\"saveMetricsCfg()\"></ion-toggle> -->\n          <!-- <ion-toggle slot=\"end\"   color=\"success\" [(ngModel)]=\"i.metricSelectedToPoll\" (ionChange)=\"saveMetricsCfg()\" [disabled]=\"i.name==='rpm'\"></ion-toggle> -->\n        <!-- </ion-item>\n      </ion-list> -->\n      \n      <section>\n        <header> </header>\n        <ion-button (click)=\"resetMetrics()\" expand=\"block\"><ion-icon name=\"refresh\"></ion-icon>Reset to Most Used Metrics</ion-button>\n        <ion-button (click)=\"dropDBTables()\" expand=\"block\"><ion-icon name=\"refresh\"></ion-icon>Reset metrics DB</ion-button>\n \n    \n      </section>\n  </ion-content>\n\n   ";
      /***/
    },

    /***/
    "./src/app/tab3/tab3-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "./src/app/tab3/tab3-routing.module.ts");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      "./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_cloud_settings_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/cloud-settings/ngx */
      "./node_modules/@ionic-native/cloud-settings/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/background-mode/ngx */
      "./node_modules/@ionic-native/background-mode/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_battery_status_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/battery-status/ngx */
      "./node_modules/@ionic-native/battery-status/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_brightness_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/brightness/ngx */
      "./node_modules/@ionic-native/brightness/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]],
        providers: [// Tab2Page,
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__["SQLite"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"], _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_15__["BluetoothSerial"], _ionic_native_cloud_settings_ngx__WEBPACK_IMPORTED_MODULE_10__["CloudSettings"], _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_11__["BackgroundMode"], _ionic_native_battery_status_ngx__WEBPACK_IMPORTED_MODULE_12__["BatteryStatus"], _ionic_native_brightness_ngx__WEBPACK_IMPORTED_MODULE_14__["Brightness"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-iconXL {\n  font-size: 64px;\n}\n\nion-col {\n  text-align: center;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pb24taWNvblhMIHsgXG4gICAgZm9udC1zaXplOiA2NHB4O1xuICB9XG4gIGlvbi1jb2wgeyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _tab2_obdInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../tab2/obdInfo.js */
      "./src/app/tab2/obdInfo.js.ts");
      /* harmony import */


      var _ionic_native_cloud_settings_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/cloud-settings/ngx */
      "./node_modules/@ionic-native/cloud-settings/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_brightness_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/brightness/ngx */
      "./node_modules/@ionic-native/brightness/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      "./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(brightness, sqlite, cloudSettings, navCtrl, alertCtrl, bluetoothSerial, toastCtrl) {
          _classCallCheck(this, Tab3Page);

          this.brightness = brightness;
          this.sqlite = sqlite;
          this.cloudSettings = cloudSettings;
          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.bluetoothSerial = bluetoothSerial;
          this.toastCtrl = toastCtrl;

          this.compareWithFn = function (o1, o2) {
            return o1 && o2 ? o1.name === o2.name : o1 === o2;
          };

          this.compareWith = this.compareWithFn;
          this.targetList = [];
          this.listToggle = false;
          this.pairedDeviceID = 0;
          this.dataSend = "";
          this.connstatus = "";
          this.writeDelay = 50;
          this.btReceivedData = '';
          this.btLastCheckedReceivedData = '';
          this.receivedData = '';
          this.btConnected = false;
          this.activePollers = [];
          this.queue = [];
          this.btLastReceivedData = '';
          this.inmemoryqty = 0;
          this.globalLog = [];
          this.globalLogEnabled = true; // disable when generating a build

          this.defaultbluetoothdev = '';
          this.showbluetoothconfig = false;
          this.btIsConnecting = false;
          this.state = "";
          this.isNetworkConnectivity = false;
          this.uploadingData = false;
          this.liveStatsNumRecordsToSend = 0;
          this.liveStatsBattery = {
            level: -1,
            isPlugged: false,
            lastUnplugged: 0
          };
          this.globalconfig = {
            obdmetrics: [],
            dataUpload: {
              apikey: '',
              apisecret: '',
              localserver: '',
              mode: ''
            },
            bluetoothDeviceToUse: {
              address: '',
              devicename: ''
            },
            sendstatusinfo: false,
            dimscreenbrightness: 50
          };

          this.selectDataUpload = function (data) {
            if (data == undefined) {
              return;
            }

            ;
            this.globalconfig.dataUpload.mode = data;
            this.saveGlobalConfig();
            console.log('Changed default upload mode to ' + data);
          };

          this.configDataUpload = function () {
            if (this.globalconfig.dataUpload.localserver.includes('http:')) {
              this.showError('Non-secure communication to http:// is not allowed, please use https://');
            }

            this.saveGlobalConfig();
          };

          this.obdmetrics = [];
          this.targetList = ['InfluxDB', 'CSV'];
          this.loadGlobalConfig();
          this.checkBluetoothEnabled();
        }

        _createClass(Tab3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectBtDevice",
          value: function selectBtDevice(ev) {
            if (ev.detail.value === null || ev.detail.value < 0) return;
            console.log('Changed BT device to use:' + this.pairedList[ev.detail.value].name);
            this.globalconfig.bluetoothDeviceToUse = {
              address: this.pairedList[ev.detail.value].address,
              devicename: this.pairedList[ev.detail.value].name
            };
            this.saveGlobalConfig();
          }
        }, {
          key: "loadGlobalConfig",
          value: function loadGlobalConfig() {
            var _this = this;

            this.cloudSettings.enableDebug();
            this.cloudSettings.exists().then(function (exists) {
              //console.log("Saved settings exist: " + exists) ;
              if (!exists) {
                _this.saveGlobalConfig();
              } else {
                _this.cloudSettings.load().then(function (settings) {
                  // OBD Metrics configuration
                  _this.globalconfig = JSON.parse(settings.data); //console.log('Saved settings to use: ' + JSON.stringify(settings));

                  if (_this.globalconfig.obdmetrics !== undefined) {
                    _this.configureMetricsList();
                  }
                })["catch"](function (error) {
                  _this.configureMetricsList();

                  console.error('Error retrieving global configuration ' + error);
                });
              }
            });
          }
        }, {
          key: "setBrightness",
          value: function setBrightness() {
            this.brightness.setBrightness(this.globalconfig.dimscreenbrightness / 100);
            this.saveGlobalConfig();
          }
        }, {
          key: "configureMetricsList",
          value: function configureMetricsList() {
            for (var k = 0; k < _tab2_obdInfo_js__WEBPACK_IMPORTED_MODULE_4__["obdinfo"].PIDS.length; k++) {
              var itm = _tab2_obdInfo_js__WEBPACK_IMPORTED_MODULE_4__["obdinfo"].PIDS[k];

              if (itm.mode == _tab2_obdInfo_js__WEBPACK_IMPORTED_MODULE_4__["obdinfo"].modeRealTime && itm.name !== '') {
                this.obdmetrics.push({
                  "metricSelectedToPoll": this.globalconfig.obdmetrics.indexOf(itm.name) > -1,
                  "name": itm.name,
                  "description": itm.description,
                  "value": "",
                  "unit": itm.unit
                });
              }
            }
          }
        }, {
          key: "saveGlobalConfig",
          value: function saveGlobalConfig() {
            this.cloudSettings.save({
              data: JSON.stringify(this.globalconfig)
            }, true).then(function (savedSettings) {
              return console.log("Saved Gobal settings ");
            })["catch"](function (error) {
              return console.error('Error saving global configuration ' + error);
            });
          }
        }, {
          key: "resetMetrics",
          value: function resetMetrics() {
            var i = 0;

            for (var k = 0; k < _tab2_obdInfo_js__WEBPACK_IMPORTED_MODULE_4__["obdinfo"].PIDS.length; k++) {
              var itm = _tab2_obdInfo_js__WEBPACK_IMPORTED_MODULE_4__["obdinfo"].PIDS[k];

              if (itm.mode == _tab2_obdInfo_js__WEBPACK_IMPORTED_MODULE_4__["obdinfo"].modeRealTime && itm.name !== '') {
                if (this.obdmetrics[k].metricSelectedToPoll !== itm.isDefault) {
                  // To avoid setting the same value as it already exists, which would fire an angular update
                  this.obdmetrics[k].metricSelectedToPoll = itm.isDefault;
                }

                i = i + 1;
              }
            }

            this.saveMetricsCfg();
          }
        }, {
          key: "saveMetricsCfg",
          value: function saveMetricsCfg() {
            var enabledmetrics;
            enabledmetrics = [];
            this.obdmetrics.forEach(function (elem) {
              if (elem.metricSelectedToPoll) {
                enabledmetrics.push(elem.name);
              }
            });
            this.globalconfig.obdmetrics = enabledmetrics;
            this.saveGlobalConfig();
          }
        }, {
          key: "checkBluetoothEnabled",
          value: function checkBluetoothEnabled() {
            var _this2 = this;

            this.bluetoothSerial.isEnabled().then(function (success) {
              _this2.listPairedDevices();
            }, function (error) {
              _this2.showError("Please Enable Bluetooth");
            });
          }
        }, {
          key: "listPairedDevices",
          value: function listPairedDevices() {
            var _this3 = this;

            this.bluetoothSerial.list().then(function (success) {
              _this3.pairedList = success;

              _this3.pairedList.forEach(function (item) {
                return item.isSelected = false;
              });

              _this3.listToggle = true;
              console.log('Reading default device data: ' + _this3.globalconfig.bluetoothDeviceToUse.devicename);

              if (_this3.globalconfig.bluetoothDeviceToUse == null || _this3.globalconfig.bluetoothDeviceToUse.devicename == "") {
                return;
              }

              ;

              var i = _this3.pairedList.findIndex(function (item) {
                return item.address === _this3.globalconfig.bluetoothDeviceToUse.address;
              });

              if (i > -1) {
                _this3.pairedList[i].isSelected = true;
              }
            }, function (error) {
              _this3.showError("Please Enable Bluetooth");

              _this3.listToggle = false;
            });
          }
        }, {
          key: "showError",
          value: function showError(error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        message: error,
                        subHeader: 'Error',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dropDBTables",
          value: function dropDBTables() {
            this.sqlite.create({
              name: 'data.db',
              location: 'default'
            }).then(function (db) {
              db.executeSql('DELETE FROM livemetricstable  ').then(function () {
                console.log('[INFO] DELETED Content of table livemetrics');
              })["catch"](function (e) {
                return console.log("[ERROR]  " + JSON.stringify(e));
              });
            })["catch"](function (e) {
              return console.log("[ERROR]  " + JSON.stringify(e));
            });
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _ionic_native_brightness_ngx__WEBPACK_IMPORTED_MODULE_6__["Brightness"]
        }, {
          type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__["SQLite"]
        }, {
          type: _ionic_native_cloud_settings_ngx__WEBPACK_IMPORTED_MODULE_5__["CloudSettings"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_3__["BluetoothSerial"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab3.page.scss */
        "./src/app/tab3/tab3.page.scss"))["default"]]
      })], Tab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map