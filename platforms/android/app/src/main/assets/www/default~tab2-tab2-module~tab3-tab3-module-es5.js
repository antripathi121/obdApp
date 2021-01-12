(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab2-tab2-module~tab3-tab3-module"], {
    /***/
    "./node_modules/@ionic-native/battery-status/__ivy_ngcc__/ngx/index.js":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@ionic-native/battery-status/__ivy_ngcc__/ngx/index.js ***!
      \*****************************************************************************/

    /*! exports provided: BatteryStatus */

    /***/
    function node_modulesIonicNativeBatteryStatus__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatteryStatus", function () {
        return BatteryStatus;
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

      var BatteryStatus =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BatteryStatus, _super);

        function BatteryStatus() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        BatteryStatus.prototype.onChange = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "onChange", {
            "eventObservable": true,
            "event": "batterystatus"
          }, arguments);
        };

        BatteryStatus.prototype.onLow = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "onLow", {
            "eventObservable": true,
            "event": "batterylow"
          }, arguments);
        };

        BatteryStatus.prototype.onCritical = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "onCritical", {
            "eventObservable": true,
            "event": "batterycritical"
          }, arguments);
        };

        BatteryStatus.pluginName = "BatteryStatus";
        BatteryStatus.plugin = "cordova-plugin-battery-status";
        BatteryStatus.pluginRef = "navigator.battery";
        BatteryStatus.repo = "https://github.com/apache/cordova-plugin-battery-status";
        BatteryStatus.platforms = ["iOS", "Android", "Windows", "Browser"];

        BatteryStatus.ɵfac = function BatteryStatus_Factory(t) {
          return ɵBatteryStatus_BaseFactory(t || BatteryStatus);
        };

        BatteryStatus.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: BatteryStatus,
          factory: function factory(t) {
            return BatteryStatus.ɵfac(t);
          }
        });

        var ɵBatteryStatus_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BatteryStatus);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BatteryStatus, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return BatteryStatus;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYmF0dGVyeS1zdGF0dXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFDbEM7QUFHTyxJQTRDNEIsaUNBQWlCO0FBQUM7QUFFOUI7QUFDa0M7QUFBTSxJQU03RCxnQ0FBUTtBQU1JLElBTVosNkJBQUs7QUFNUCxJQU1FLGtDQUFVO0FBSXNEO0FBQWdEO0FBQTREO0FBQW1EO0FBQW9GO0lBckN4UyxhQUFhLHdCQUR6QixVQUFVLEVBQUUsUUFDQSxhQUFhOzs7OzswQkFBRTtBQUFDLHdCQWxEN0I7QUFBRSxFQWtEaUMsaUJBQWlCO0FBQ25ELFNBRFksYUFBYTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmF0dGVyeVN0YXR1c1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBiYXR0ZXJ5IGNoYXJnZSBwZXJjZW50YWdlXG4gICAqL1xuICBsZXZlbDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZGV2aWNlIGlzIHBsdWdnZWQgaW5cbiAgICovXG4gIGlzUGx1Z2dlZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBCYXR0ZXJ5IFN0YXR1c1xuICogQGRlc2NyaXB0aW9uXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYmF0dGVyeXN0YXR1cy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhdHRlcnlTdGF0dXMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmF0dGVyeVN0YXR1cyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmF0dGVyeS1zdGF0dXMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhdHRlcnlTdGF0dXM6IEJhdHRlcnlTdGF0dXMpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAvLyB3YXRjaCBjaGFuZ2UgaW4gYmF0dGVyeSBzdGF0dXNcbiAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuYmF0dGVyeVN0YXR1cy5vbkNoYW5nZSgpLnN1YnNjcmliZShzdGF0dXMgPT4ge1xuICogICAgY29uc29sZS5sb2coc3RhdHVzLmxldmVsLCBzdGF0dXMuaXNQbHVnZ2VkKTtcbiAqIH0pO1xuICpcbiAqIC8vIHN0b3Agd2F0Y2hcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEJhdHRlcnlTdGF0dXNSZXNwb25zZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhdHRlcnlTdGF0dXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cycsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5iYXR0ZXJ5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnLCAnV2luZG93cycsICdCcm93c2VyJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlTdGF0dXMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBXYXRjaCB0aGUgY2hhbmdlIGluIGJhdHRlcnkgbGV2ZWxcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgcHVzaGVzIGEgc3RhdHVzIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2JhdHRlcnlzdGF0dXMnLFxuICB9KVxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCB3aGVuIHRoZSBiYXR0ZXJ5IGxldmVsIGdvZXMgbG93XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5bG93JyxcbiAgfSlcbiAgb25Mb3coKTogT2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggd2hlbiB0aGUgYmF0dGVyeSBsZXZlbCBnb2VzIHRvIGNyaXRpY2FsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHB1c2hlcyBhIHN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5Y3JpdGljYWwnLFxuICB9KVxuICBvbkNyaXRpY2FsKCk6IE9ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

      /***/

    },

    /***/
    "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js ***!
      \*******************************************************************************/

    /*! exports provided: BluetoothSerial */

    /***/
    function node_modulesIonicNativeBluetoothSerial__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BluetoothSerial", function () {
        return BluetoothSerial;
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

      var BluetoothSerial =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BluetoothSerial, _super);

        function BluetoothSerial() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        BluetoothSerial.prototype.connect = function (macAddress_or_uuid) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "connect", {
            "platforms": ["Android", "iOS", "Windows Phone"],
            "observable": true,
            "clearFunction": "disconnect"
          }, arguments);
        };

        BluetoothSerial.prototype.connectInsecure = function (macAddress) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "connectInsecure", {
            "platforms": ["Android"],
            "observable": true,
            "clearFunction": "disconnect"
          }, arguments);
        };

        BluetoothSerial.prototype.disconnect = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disconnect", {}, arguments);
        };

        BluetoothSerial.prototype.write = function (data) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "write", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.available = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "available", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.read = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "read", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.readUntil = function (delimiter) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "readUntil", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.subscribe = function (delimiter) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "subscribe", {
            "platforms": ["Android", "iOS", "Windows Phone"],
            "observable": true,
            "clearFunction": "unsubscribe"
          }, arguments);
        };

        BluetoothSerial.prototype.subscribeRawData = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "subscribeRawData", {
            "platforms": ["Android", "iOS", "Windows Phone"],
            "observable": true,
            "clearFunction": "unsubscribeRawData"
          }, arguments);
        };

        BluetoothSerial.prototype.clear = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clear", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.list = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "list", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.isEnabled = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isEnabled", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.isConnected = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isConnected", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.readRSSI = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "readRSSI", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.showBluetoothSettings = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showBluetoothSettings", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.enable = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enable", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.discoverUnpaired = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "discoverUnpaired", {
            "platforms": ["Android", "iOS", "Windows Phone"]
          }, arguments);
        };

        BluetoothSerial.prototype.setDeviceDiscoveredListener = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDeviceDiscoveredListener", {
            "platforms": ["Android", "iOS", "Windows Phone"],
            "observable": true,
            "clearFunction": "clearDeviceDiscoveredListener"
          }, arguments);
        };

        BluetoothSerial.prototype.setName = function (newName) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setName", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BluetoothSerial.prototype.setDiscoverable = function (discoverableDuration) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDiscoverable", {
            "platforms": ["Android"],
            "sync": true
          }, arguments);
        };

        BluetoothSerial.pluginName = "BluetoothSerial";
        BluetoothSerial.repo = "https://github.com/don/BluetoothSerial";
        BluetoothSerial.plugin = "cordova-plugin-bluetooth-serial";
        BluetoothSerial.pluginRef = "bluetoothSerial";
        BluetoothSerial.platforms = ["Android", "iOS", "Windows Phone 8"];

        BluetoothSerial.ɵfac = function BluetoothSerial_Factory(t) {
          return ɵBluetoothSerial_BaseFactory(t || BluetoothSerial);
        };

        BluetoothSerial.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: BluetoothSerial,
          factory: function factory(t) {
            return BluetoothSerial.ɵfac(t);
          }
        });

        var ɵBluetoothSerial_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BluetoothSerial);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BluetoothSerial, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return BluetoothSerial;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYmx1ZXRvb3RoLXNlcmlhbC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUNsQztBQUcwQixJQWtDVyxtQ0FBaUI7QUFBQztBQUU5QjtBQUNzQztBQUFNLElBUW5FLGlDQUFPLGFBQUMsa0JBQTBCO0FBT2xDLElBT0EseUNBQWUsYUFBQyxVQUFrQjtBQVM5QixJQUFKLG9DQUFVO0FBS2lCLElBTzNCLCtCQUFLLGFBQUMsSUFBUztBQU1ILElBS1osbUNBQVM7QUFNbUMsSUFLNUMsOEJBQUk7QUFNTSxJQU1WLG1DQUFTLGFBQUMsU0FBaUI7QUFNZixJQVFaLG1DQUFTLGFBQUMsU0FBaUI7QUFRMUIsSUFLRCwwQ0FBZ0I7QUFTZSxJQUUvQiwrQkFBSztBQU9OLElBSUMsOEJBQUk7QUFNOEIsSUFLbEMsbUNBQVM7QUFNZ0MsSUFLekMscUNBQVc7QUFNaUIsSUFLNUIsa0NBQVE7QUFNb0IsSUFLNUIsK0NBQXFCO0FBUXRCLElBR0MsZ0NBQU07QUFNb0MsSUFLMUMsMENBQWdCO0FBS21FLElBUW5GLHFEQUEyQjtBQVNmLElBR1osaUNBQU8sYUFBQyxPQUFlO0FBSUEsSUFNdkIseUNBQWUsYUFBQyxvQkFBNEI7QUFFNEM7QUFBb0Q7QUFBcUU7QUFBZ0U7QUFBbUQ7SUF4T3pULGVBQWUsd0JBRDNCLFVBQVUsRUFBRSxRQUNBLGVBQWU7Ozs7OzBCQUFFO0FBQUMsMEJBeEMvQjtBQUFFLEVBd0NtQyxpQkFBaUI7QUFDckQsU0FEWSxlQUFlO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBCbHVldG9vdGggU2VyaWFsXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gZW5hYmxlcyBzZXJpYWwgY29tbXVuaWNhdGlvbiBvdmVyIEJsdWV0b290aC4gSXQgd2FzIHdyaXR0ZW4gZm9yIGNvbW11bmljYXRpbmcgYmV0d2VlbiBBbmRyb2lkIG9yIGlPUyBhbmQgYW4gQXJkdWlubyAobm90IEFuZHJvaWQgdG8gQW5kcm9pZCBvciBpT1MgdG8gaU9TKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmx1ZXRvb3RoU2VyaWFsIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ibHVldG9vdGgtc2VyaWFsL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBibHVldG9vdGhTZXJpYWw6IEJsdWV0b290aFNlcmlhbCkgeyB9XG4gKlxuICpcbiAqIC8vIFdyaXRlIGEgc3RyaW5nXG4gKiB0aGlzLmJsdWV0b290aFNlcmlhbC53cml0ZSgnaGVsbG8gd29ybGQnKS50aGVuKHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICpcbiAqIC8vIEFycmF5IG9mIGludCBvciBieXRlc1xuICogdGhpcy5ibHVldG9vdGhTZXJpYWwud3JpdGUoWzE4NiwgMjIwLCAyMjJdKS50aGVuKHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICpcbiAqIC8vIFR5cGVkIEFycmF5XG4gKiB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KDQpO1xuICogZGF0YVswXSA9IDB4NDE7XG4gKiBkYXRhWzFdID0gMHg0MjtcbiAqIGRhdGFbMl0gPSAweDQzO1xuICogZGF0YVszXSA9IDB4NDQ7XG4gKiB0aGlzLmJsdWV0b290aFNlcmlhbC53cml0ZShkYXRhKS50aGVuKHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICpcbiAqIC8vIEFycmF5IEJ1ZmZlclxuICogdGhpcy5ibHVldG9vdGhTZXJpYWwud3JpdGUoZGF0YS5idWZmZXIpLnRoZW4oc3VjY2VzcywgZmFpbHVyZSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCbHVldG9vdGhTZXJpYWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Rvbi9CbHVldG9vdGhTZXJpYWwnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1ibHVldG9vdGgtc2VyaWFsJyxcbiAgcGx1Z2luUmVmOiAnYmx1ZXRvb3RoU2VyaWFsJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCbHVldG9vdGhTZXJpYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25uZWN0IHRvIGEgQmx1ZXRvb3RoIGRldmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFjQWRkcmVzc19vcl91dWlkIElkZW50aWZpZXIgb2YgdGhlIHJlbW90ZSBkZXZpY2VcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gU3Vic2NyaWJlIHRvIGNvbm5lY3QsIHVuc3Vic2NyaWJlIHRvIGRpc2Nvbm5lY3QuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdkaXNjb25uZWN0JyxcbiAgfSlcbiAgY29ubmVjdChtYWNBZGRyZXNzX29yX3V1aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3QgaW5zZWN1cmVseSB0byBhIEJsdWV0b290aCBkZXZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hY0FkZHJlc3MgSWRlbnRpZmllciBvZiB0aGUgcmVtb3RlIGRldmljZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBTdWJzY3JpYmUgdG8gY29ubmVjdCwgdW5zdWJzY3JpYmUgdG8gZGlzY29ubmVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2Rpc2Nvbm5lY3QnLFxuICB9KVxuICBjb25uZWN0SW5zZWN1cmUobWFjQWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzY29ubmVjdCBmcm9tIHRoZSBjb25uZWN0ZWQgZGV2aWNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV3JpdGVzIGRhdGEgdG8gdGhlIHNlcmlhbCBwb3J0XG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIEFycmF5QnVmZmVyIG9mIGRhdGFcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2Ugd2hlbiBkYXRhIGhhcyBiZWVuIHdyaXR0ZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICB3cml0ZShkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgYnl0ZXMgb2YgZGF0YSBhdmFpbGFibGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjb250YWlucyB0aGUgYXZhaWxhYmxlIGJ5dGVzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgfSlcbiAgYXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGRhdGEgZnJvbSB0aGUgYnVmZmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHdpdGggZGF0YSBmcm9tIHRoZSBidWZmZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICByZWFkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGRhdGEgZnJvbSB0aGUgYnVmZmVyIHVudGlsIGl0IHJlYWNoZXMgYSBkZWxpbWl0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlbGltaXRlciBzdHJpbmcgdGhhdCB5b3Ugd2FudCB0byBzZWFyY2ggdW50aWxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICByZWFkVW50aWwoZGVsaW1pdGVyOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYmUgbm90aWZpZWQgd2hlbiBkYXRhIGlzIHJlY2VpdmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWxpbWl0ZXIgdGhlIHN0cmluZyB5b3Ugd2FudCB0byB3YXRjaCBmb3JcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gcmV0dXJucyBhbiBvYnNlcnZhYmxlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAndW5zdWJzY3JpYmUnLFxuICB9KVxuICBzdWJzY3JpYmUoZGVsaW1pdGVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYmUgbm90aWZpZWQgd2hlbiBkYXRhIGlzIHJlY2VpdmVkXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IHJldHVybnMgYW4gb2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAndW5zdWJzY3JpYmVSYXdEYXRhJyxcbiAgfSlcbiAgc3Vic2NyaWJlUmF3RGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgZGF0YSBpbiBidWZmZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2Ugd2hlbiBjb21wbGV0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0cyBib25kZWQgZGV2aWNlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gIH0pXG4gIGxpc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0cyBpZiBibHVldG9vdGggaXMgZW5hYmxlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gIH0pXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnRzIHRoZSBjb25uZWN0aW9uIHN0YXR1c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gIH0pXG4gIGlzQ29ubmVjdGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBSU1NJIGZyb20gdGhlIGNvbm5lY3RlZCBwZXJpcGhlcmFsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgfSlcbiAgcmVhZFJTU0koKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgQmx1ZXRvb3RoIHNldHRpbmdzIG9uIHRoZSBkZXZpY2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICBzaG93Qmx1ZXRvb3RoU2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgfSlcbiAgZW5hYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2NvdmVyIHVucGFpcmVkIGRldmljZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICB9KVxuICBkaXNjb3ZlclVucGFpcmVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBiZSBub3RpZmllZCBvbiBCbHVldG9vdGggZGV2aWNlIGRpc2NvdmVyeS4gRGlzY292ZXJ5IHByb2Nlc3MgbXVzdCBiZSBpbml0aWF0ZWQgd2l0aCB0aGUgYGRpc2NvdmVyVW5wYWlyZWRgIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2NsZWFyRGV2aWNlRGlzY292ZXJlZExpc3RlbmVyJyxcbiAgfSlcbiAgc2V0RGV2aWNlRGlzY292ZXJlZExpc3RlbmVyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGh1bWFuIHJlYWRhYmxlIGRldmljZSBuYW1lIHRoYXQgaXMgYnJvYWRjYXN0ZWQgdG8gb3RoZXIgZGV2aWNlc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3TmFtZSBEZXNpcmVkIG5hbWUgb2YgZGV2aWNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXROYW1lKG5ld05hbWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogTWFrZXMgdGhlIGRldmljZSBkaXNjb3ZlcmFibGUgYnkgb3RoZXIgZGV2aWNlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gZGlzY292ZXJhYmxlRHVyYXRpb24gRGVzaXJlZCBudW1iZXIgb2Ygc2Vjb25kcyBkZXZpY2Ugc2hvdWxkIGJlIGRpc2NvdmVyYWJsZSBmb3JcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldERpc2NvdmVyYWJsZShkaXNjb3ZlcmFibGVEdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7fVxufVxuIl19

      /***/

    },

    /***/
    "./node_modules/@ionic-native/brightness/__ivy_ngcc__/ngx/index.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/@ionic-native/brightness/__ivy_ngcc__/ngx/index.js ***!
      \*************************************************************************/

    /*! exports provided: Brightness */

    /***/
    function node_modulesIonicNativeBrightness__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Brightness", function () {
        return Brightness;
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

      var Brightness =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Brightness, _super);

        function Brightness() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Brightness.prototype.setBrightness = function (value) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setBrightness", {}, arguments);
        };

        Brightness.prototype.getBrightness = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getBrightness", {}, arguments);
        };

        Brightness.prototype.setKeepScreenOn = function (value) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setKeepScreenOn", {}, arguments);
        };

        Brightness.pluginName = "Brightness";
        Brightness.plugin = "cordova-plugin-brightness";
        Brightness.pluginRef = "cordova.plugins.brightness";
        Brightness.repo = "https://github.com/mgcrea/cordova-plugin-brightness";
        Brightness.platforms = ["Android", "iOS"];

        Brightness.ɵfac = function Brightness_Factory(t) {
          return ɵBrightness_BaseFactory(t || Brightness);
        };

        Brightness.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: Brightness,
          factory: function factory(t) {
            return Brightness.ɵfac(t);
          }
        });

        var ɵBrightness_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Brightness);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Brightness, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return Brightness;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYnJpZ2h0bmVzcy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFJVyxJQXlCcUIsOEJBQWlCO0FBQUM7QUFFOUI7QUFFMkI7QUFBTSxJQUluRCxrQ0FBYSxhQUFDLEtBQWE7QUFLVCxJQU1sQixrQ0FBYTtBQUtpQixJQUk5QixvQ0FBZSxhQUFDLEtBQWM7QUFFa0I7QUFBMEM7QUFBcUQ7QUFBeUQ7QUFBNkU7SUE5QjFRLFVBQVUsd0JBRHRCLFVBQVUsRUFBRSxRQUNBLFVBQVU7Ozs7OzBCQUFFO0FBQUMscUJBL0IxQjtBQUFFLEVBK0I4QixpQkFBaUI7QUFDaEQsU0FEWSxVQUFVO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBCcmlnaHRuZXNzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBCcmlnaHRuZXNzIHBsdWdpbiBsZXQgeW91IGNvbnRyb2wgdGhlIGRpc3BsYXkgYnJpZ2h0bmVzcyBvZiB5b3VyIGRldmljZS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWJyaWdodG5lc3NgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQnJpZ2h0bmVzcyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL21nY3JlYS9jb3Jkb3ZhLXBsdWdpbi1icmlnaHRuZXNzKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJyaWdodG5lc3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JyaWdodG5lc3Mvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyaWdodG5lc3M6IEJyaWdodG5lc3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBicmlnaHRuZXNzVmFsdWUgPSAwLjg7XG4gKiB0aGlzLmJyaWdodG5lc3Muc2V0QnJpZ2h0bmVzcyhicmlnaHRuZXNzVmFsdWUpO1xuICogYGBgXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JyaWdodG5lc3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1icmlnaHRuZXNzJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmJyaWdodG5lc3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21nY3JlYS9jb3Jkb3ZhLXBsdWdpbi1icmlnaHRuZXNzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyaWdodG5lc3MgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBicmlnaHRuZXNzIG9mIHRoZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgRmxvYXRpbmcgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbiB3aGljaCBjYXNlIDEgbWVhbnMgMTAwJSBicmlnaHRuZXNzIGFuZCAwIG1lYW5zIDAlIGJyaWdodG5lc3MuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgc2V0dGluZyBicmlnaHRuZXNzIHdhcyBzdWNjZXNzZnVsLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRCcmlnaHRuZXNzKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgY3VycmVudCBicmlnaHRuZXNzIG9mIHRoZSBkZXZpY2UgZGlzcGxheS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZVxuICAgKiBicmlnaHRuZXNzIHZhbHVlIG9mIHRoZSBkZXZpY2UgZGlzcGxheSAoZmxvYXRpbmcgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEJyaWdodG5lc3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogS2VlcHMgdGhlIHNjcmVlbiBvbi4gUHJldmVudHMgdGhlIGRldmljZSBmcm9tIHNldHRpbmcgdGhlIHNjcmVlbiB0byBzbGVlcC5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRLZWVwU2NyZWVuT24odmFsdWU6IGJvb2xlYW4pOiB2b2lkIHt9XG59XG4iXX0=

      /***/

    },

    /***/
    "./node_modules/@ionic-native/cloud-settings/__ivy_ngcc__/ngx/index.js":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@ionic-native/cloud-settings/__ivy_ngcc__/ngx/index.js ***!
      \*****************************************************************************/

    /*! exports provided: CloudSettings */

    /***/
    function node_modulesIonicNativeCloudSettings__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloudSettings", function () {
        return CloudSettings;
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

      var CloudSettings =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CloudSettings, _super);

        function CloudSettings() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        CloudSettings.prototype.exists = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "exists", {}, arguments);
        };

        CloudSettings.prototype.save = function (settings, overwrite) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "save", {
            "successIndex": 1,
            "errorIndex": 2
          }, arguments);
        };

        CloudSettings.prototype.load = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "load", {}, arguments);
        };

        CloudSettings.prototype.onRestore = function (handler) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "onRestore", {
            "sync": true
          }, arguments);
        };

        CloudSettings.prototype.enableDebug = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enableDebug", {}, arguments);
        };

        CloudSettings.pluginName = "CloudSettings";
        CloudSettings.plugin = "cordova-plugin-cloud-settings";
        CloudSettings.pluginRef = "cordova.plugin.cloudsettings";
        CloudSettings.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
        CloudSettings.install = "ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
        CloudSettings.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
        CloudSettings.platforms = ["Android", "iOS"];

        CloudSettings.ɵfac = function CloudSettings_Factory(t) {
          return ɵCloudSettings_BaseFactory(t || CloudSettings);
        };

        CloudSettings.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: CloudSettings,
          factory: function factory(t) {
            return CloudSettings.ɵfac(t);
          }
        });

        var ɵCloudSettings_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CloudSettings);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CloudSettings, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return CloudSettings;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2xvdWQtc2V0dGluZ3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSVUsSUFrQ3lCLGlDQUFpQjtBQUFDO0FBRTlCO0FBQ1Q7QUFBTSxJQUdsQiw4QkFBTTtBQUthLElBVW5CLDRCQUFJLGFBQUMsUUFBYSxFQUFFLFNBQW1CO0FBTTNCLElBR1osNEJBQUk7QUFLaUIsSUFJckIsaUNBQVMsYUFBQyxPQUFpQjtBQUd3QixJQUluRCxtQ0FBVztBQUlxQjtBQUFnRDtBQUE0RDtBQUE4RDtBQUFvRjtBQUFxSTtBQUFxRTtJQWxEN2QsYUFBYSx3QkFEekIsVUFBVSxFQUFFLFFBQ0EsYUFBYTs7Ozs7MEJBQUU7QUFBQyx3QkF4QzdCO0FBQUUsRUF3Q2lDLGlCQUFpQjtBQUNuRCxTQURZLGFBQWE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIENsb3VkIFNldHRpbmdzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN0b3JlcyBhcHAgc2V0dGluZ3MgaW4gY2xvdWQgc3RvcmFnZSBzbyBpZiB0aGUgdXNlciByZS1pbnN0YWxscyB0aGUgYXBwIG9yIGluc3RhbGxzIGl0IG9uIGEgZGlmZmVyZW50IGRldmljZSwgdGhlIHNldHRpbmdzIHdpbGwgYmUgcmVzdG9yZWQgYW5kIGF2YWlsYWJsZSBpbiB0aGUgbmV3IGluc3RhbGxhdGlvbi5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENsb3VkU2V0dGluZ3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Nsb3VkLXNldHRpbmdzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xvdWRTZXR0aW5nczogQ2xvdWRTZXR0aW5ncykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5jbG91ZFNldHRpbmdzLmV4aXN0cygpXG4gKiAgIC50aGVuKChleGlzdHM6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKFwiU2F2ZWQgc2V0dGluZ3MgZXhpc3Q6IFwiICsgZXhpc3RzKSApXG4gKlxuICogdGhpcy5jbG91ZFNldHRpbmdzLmxvYWQoKVxuICogICAudGhlbigoc2V0dGluZ3M6IGFueSkgPT4gdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLmNsb3VkU2V0dGluZ3Muc2F2ZSh0aGlzLnNldHRpbmdzKVxuICogICAudGhlbigoc2F2ZWRTZXR0aW5nczogYW55KSA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHNldHRpbmdzOiBcIiArIEpTT04uc3RyaW5naWZ5KHNhdmVkU2V0dGluZ3MpKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2xvdWRTZXR0aW5ncycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNsb3VkLXNldHRpbmdzJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW4uY2xvdWRzZXR0aW5ncycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtcGx1Z2luLWNsb3VkLXNldHRpbmdzJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncyAtLXZhcmlhYmxlIEFORFJPSURfQkFDS1VQX1NFUlZJQ0VfS0VZPW15YXBpa2V5JyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBTkRST0lEX0JBQ0tVUF9TRVJWSUNFX0tFWSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xvdWRTZXR0aW5ncyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiBhbnkgc3RvcmVkIGNsb3VkIHNldHRpbmdzIGN1cnJlbnRseSBleGlzdCBmb3IgdGhlIGN1cnJlbnQgdXNlci5cbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gV2lsbCBiZSBwYXNzZWQgYSBib29sZWFuIGZsYWcgd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYW4gc3RvcmUgc2V0dGluZ3MgZXhpc3QgZm9yIHRoZSB1c2VyLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBleGlzdHMoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBzZXR0aW5ncyB0byBjbG91ZCBiYWNrdXAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzZXR0aW5ncyAtIGEgSlNPTiBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIHRoZSB1c2VyIHNldHRpbmdzIHRvIHNhdmUgdG8gY2xvdWQgYmFja3VwLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvdmVyd3JpdGVdIC0gKG9wdGlvbmFsKSBpZiB0cnVlLCBleGlzdGluZyBzZXR0aW5ncyB3aWxsIGJlIHJlcGxhY2VkIHJhdGhlciB0aGFuIHVwZGF0ZWQuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKiBJZiBmYWxzZSwgZXhpc3Rpbmcgc2V0dGluZ3Mgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgbmV3IHNldHRpbmdzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIG9iamVjdCBhcmd1bWVudCB3aGljaCBjb250YWlucyB0aGUgc2F2ZWQgc2V0dGluZ3MgYXMgYSBKU09OIG9iamVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2F2ZShzZXR0aW5nczogYW55LCBvdmVyd3JpdGU/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIGN1cnJlbnQgc2V0dGluZ3MuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gV2lsbCBiZSBwYXNzZWQgYSBzaW5nbGUgb2JqZWN0IGFyZ3VtZW50IHdoaWNoIGNvbnRhaW5zIHRoZSBzYXZlZCBzZXR0aW5ncyBhcyBhIEpTT04gb2JqZWN0LlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2FkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGlmL3doZW4gc2V0dGluZ3Mgb24gdGhlIGRldmljZSBoYXZlIGJlZW4gdXBkYXRlZCBmcm9tIHRoZSBjbG91ZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSB3aGVuIGRldmljZSBzZXR0aW5ncyBoYXZlIGJlZW4gdXBkYXRlZCBmcm9tIHRoZSBjbG91ZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvblJlc3RvcmUoaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIE91dHB1dHMgdmVyYm9zZSBsb2cgbWVzc2FnZXMgZnJvbSB0aGUgbmF0aXZlIHBsdWdpbiBjb21wb25lbnRzIHRvIHRoZSBKUyBjb25zb2xlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmFibGVEZWJ1ZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js ***!
      \*******************************************************************/

    /*! exports provided: File */

    /***/
    function node_modulesIonicNativeFile__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "File", function () {
        return File;
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

      var File =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(File, _super);

        function File() {
          var _this = _super !== null && _super.apply(this, arguments) || this;

          _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR'
          };
          return _this;
        }

        File.prototype.getFreeDiskSpace = function () {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
              });
            }
          }();
        };

        File.prototype.checkDir = function (path, dir) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(dir)) {
                var err = new FileError(5);
                err.message = 'directory cannot start with /';
                return Promise.reject(err);
              }

              var fullPath = path + dir;
              return _this.resolveDirectoryUrl(fullPath).then(function () {
                return true;
              });
            }
          }();
        };

        File.prototype.createDir = function (path, dirName, replace) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(dirName)) {
                var err = new FileError(5);
                err.message = 'directory cannot start with /';
                return Promise.reject(err);
              }

              var options = {
                create: true
              };

              if (!replace) {
                options.exclusive = true;
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getDirectory(fse, dirName, options);
              });
            }
          }();
        };

        File.prototype.removeDir = function (path, dirName) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(dirName)) {
                var err = new FileError(5);
                err.message = 'directory cannot start with /';
                return Promise.reject(err);
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getDirectory(fse, dirName, {
                  create: false
                });
              }).then(function (de) {
                return _this.remove(de);
              });
            }
          }();
        };

        File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              newDirName = newDirName || dirName;

              if (/^\//.test(newDirName)) {
                var err = new FileError(5);
                err.message = 'directory cannot start with /';
                return Promise.reject(err);
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getDirectory(fse, dirName, {
                  create: false
                });
              }).then(function (srcde) {
                return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                  return _this.move(srcde, destenation, newDirName);
                });
              });
            }
          }();
        };

        File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(newDirName)) {
                var err = new FileError(5);
                err.message = 'directory cannot start with /';
                return Promise.reject(err);
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getDirectory(fse, dirName, {
                  create: false
                });
              }).then(function (srcde) {
                return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                  return _this.copy(srcde, deste, newDirName);
                });
              });
            }
          }();
        };

        File.prototype.listDir = function (path, dirName) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(dirName)) {
                var err = new FileError(5);
                err.message = 'directory cannot start with /';
                return Promise.reject(err);
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getDirectory(fse, dirName, {
                  create: false,
                  exclusive: false
                });
              }).then(function (de) {
                var reader = de.createReader();
                return _this.readEntries(reader);
              });
            }
          }();
        };

        File.prototype.removeRecursively = function (path, dirName) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(dirName)) {
                var err = new FileError(5);
                err.message = 'directory cannot start with /';
                return Promise.reject(err);
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getDirectory(fse, dirName, {
                  create: false
                });
              }).then(function (de) {
                return _this.rimraf(de);
              });
            }
          }();
        };

        File.prototype.checkFile = function (path, file) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(file)) {
                var err = new FileError(5);
                err.message = 'file cannot start with /';
                return Promise.reject(err);
              }

              return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                if (fse.isFile) {
                  return true;
                } else {
                  var err = new FileError(13);
                  err.message = 'input is not a file';
                  return Promise.reject(err);
                }
              });
            }
          }();
        };

        File.prototype.createFile = function (path, fileName, replace) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(fileName)) {
                var err = new FileError(5);
                err.message = 'file-name cannot start with /';
                return Promise.reject(err);
              }

              var options = {
                create: true
              };

              if (!replace) {
                options.exclusive = true;
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getFile(fse, fileName, options);
              });
            }
          }();
        };

        File.prototype.removeFile = function (path, fileName) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(fileName)) {
                var err = new FileError(5);
                err.message = 'file-name cannot start with /';
                return Promise.reject(err);
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getFile(fse, fileName, {
                  create: false
                });
              }).then(function (fe) {
                return _this.remove(fe);
              });
            }
          }();
        };

        File.prototype.writeFile = function (path, fileName, text, options) {
          var _this = this;

          if (options === void 0) {
            options = {};
          }

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              if (/^\//.test(fileName)) {
                var err = new FileError(5);
                err.message = 'file-name cannot start with /';
                return Promise.reject(err);
              }

              var getFileOpts = {
                create: !options.append,
                exclusive: !options.replace
              };
              return _this.resolveDirectoryUrl(path).then(function (directoryEntry) {
                return _this.getFile(directoryEntry, fileName, getFileOpts);
              }).then(function (fileEntry) {
                return _this.writeFileEntry(fileEntry, text, options);
              });
            }
          }();
        };
        /**
         * Write content to FileEntry.
         * @hidden
         * Write to an existing file.
         * @param {FileEntry} fe file entry object
         * @param {string | Blob | ArrayBuffer} text text content or blob to write
         * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
         * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
         */


        File.prototype.writeFileEntry = function (fe, text, options) {
          var _this = this;

          return this.createWriter(fe).then(function (writer) {
            if (options.append) {
              writer.seek(writer.length);
            }

            if (options.truncate) {
              writer.truncate(options.truncate);
            }

            return _this.write(writer, text);
          }).then(function () {
            return fe;
          });
        };

        File.prototype.writeExistingFile = function (path, fileName, text) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return _this.writeFile(path, fileName, text, {
                replace: true
              });
            }
          }();
        };

        File.prototype.readAsText = function (path, file) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return _this.readFile(path, file, 'Text');
            }
          }();
        };

        File.prototype.readAsDataURL = function (path, file) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return _this.readFile(path, file, 'DataURL');
            }
          }();
        };

        File.prototype.readAsBinaryString = function (path, file) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return _this.readFile(path, file, 'BinaryString');
            }
          }();
        };

        File.prototype.readAsArrayBuffer = function (path, file) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return _this.readFile(path, file, 'ArrayBuffer');
            }
          }();
        };

        File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              newFileName = newFileName || fileName;

              if (/^\//.test(newFileName)) {
                var err = new FileError(5);
                err.message = 'file name cannot start with /';
                return Promise.reject(err);
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getFile(fse, fileName, {
                  create: false
                });
              }).then(function (srcfe) {
                return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                  return _this.move(srcfe, deste, newFileName);
                });
              });
            }
          }();
        };

        File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              newFileName = newFileName || fileName;

              if (/^\//.test(newFileName)) {
                var err = new FileError(5);
                err.message = 'file name cannot start with /';
                return Promise.reject(err);
              }

              return _this.resolveDirectoryUrl(path).then(function (fse) {
                return _this.getFile(fse, fileName, {
                  create: false
                });
              }).then(function (srcfe) {
                return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                  return _this.copy(srcfe, deste, newFileName);
                });
              });
            }
          }();
        };
        /**
         * @hidden
         */


        File.prototype.fillErrorMessage = function (err) {
          try {
            err.message = this.cordovaFileError[err.code];
          } catch (e) {}
        };

        File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                try {
                  window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                    resolve(entry);
                  }, function (err) {
                    _this.fillErrorMessage(err);

                    reject(err);
                  });
                } catch (xc) {
                  _this.fillErrorMessage(xc);

                  reject(xc);
                }
              });
            }
          }();
        };

        File.prototype.resolveDirectoryUrl = function (directoryUrl) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                if (de.isDirectory) {
                  return de;
                } else {
                  var err = new FileError(13);
                  err.message = 'input is not a directory';
                  return Promise.reject(err);
                }
              });
            }
          }();
        };

        File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return new Promise(function (resolve, reject) {
                try {
                  directoryEntry.getDirectory(directoryName, flags, function (de) {
                    resolve(de);
                  }, function (err) {
                    _this.fillErrorMessage(err);

                    reject(err);
                  });
                } catch (xc) {
                  _this.fillErrorMessage(xc);

                  reject(xc);
                }
              });
            }
          }();
        };

        File.prototype.getFile = function (directoryEntry, fileName, flags) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return new Promise(function (resolve, reject) {
                try {
                  directoryEntry.getFile(fileName, flags, resolve, function (err) {
                    _this.fillErrorMessage(err);

                    reject(err);
                  });
                } catch (xc) {
                  _this.fillErrorMessage(xc);

                  reject(xc);
                }
              });
            }
          }();
        };

        File.prototype.readFile = function (path, file, readAs) {
          var _this = this;

          if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
          }

          return this.resolveDirectoryUrl(path).then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, {
              create: false
            });
          }).then(function (fileEntry) {
            var reader = new FileReader();
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
              reader.onloadend = function () {
                if (reader.result !== undefined || reader.result !== null) {
                  resolve(reader.result);
                } else if (reader.error !== undefined || reader.error !== null) {
                  reject(reader.error);
                } else {
                  reject({
                    code: null,
                    message: 'READER_ONLOADEND_ERR'
                  });
                }
              };

              fileEntry.file(function (file) {
                reader["readAs" + readAs].call(reader, file);
              }, function (error) {
                reject(error);
              });
            });
          });
        };
        /**
         * @hidden
         */


        File.prototype.remove = function (fe) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            fe.remove(function () {
              resolve({
                success: true,
                fileRemoved: fe
              });
            }, function (err) {
              _this.fillErrorMessage(err);

              reject(err);
            });
          });
        };
        /**
         * @hidden
         */


        File.prototype.move = function (srce, destdir, newName) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
              resolve(deste);
            }, function (err) {
              _this.fillErrorMessage(err);

              reject(err);
            });
          });
        };
        /**
         * @hidden
         */


        File.prototype.copy = function (srce, destdir, newName) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
              resolve(deste);
            }, function (err) {
              _this.fillErrorMessage(err);

              reject(err);
            });
          });
        };
        /**
         * @hidden
         */


        File.prototype.readEntries = function (dr) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
              resolve(entries);
            }, function (err) {
              _this.fillErrorMessage(err);

              reject(err);
            });
          });
        };
        /**
         * @hidden
         */


        File.prototype.rimraf = function (de) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
              resolve({
                success: true,
                fileRemoved: de
              });
            }, function (err) {
              _this.fillErrorMessage(err);

              reject(err);
            });
          });
        };
        /**
         * @hidden
         */


        File.prototype.createWriter = function (fe) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
              resolve(writer);
            }, function (err) {
              _this.fillErrorMessage(err);

              reject(err);
            });
          });
        };
        /**
         * @hidden
         */


        File.prototype.write = function (writer, gu) {
          if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
          }

          return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
              if (writer.error) {
                reject(writer.error);
              } else {
                resolve(evt);
              }
            };

            writer.write(gu);
          });
        };
        /**
         * @hidden
         */


        File.prototype.writeFileInChunks = function (writer, file) {
          var BLOCK_SIZE = 1024 * 1024;
          var writtenSize = 0;

          function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
          }

          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
            writer.onerror = reject;

            writer.onwrite = function () {
              if (writtenSize < file.size) {
                writeNextChunk();
              } else {
                resolve();
              }
            };

            writeNextChunk();
          });
        };

        Object.defineProperty(File.prototype, "applicationDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "applicationDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "applicationDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "applicationStorageDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "applicationStorageDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "applicationStorageDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "dataDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "dataDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "dataDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "cacheDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "cacheDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "cacheDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalApplicationStorageDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalApplicationStorageDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "externalDataDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalDataDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalDataDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "externalCacheDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalCacheDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalCacheDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "externalRootDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalRootDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalRootDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "tempDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "tempDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "tempDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "syncedDataDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "syncedDataDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "syncedDataDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "documentsDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "documentsDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "documentsDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(File.prototype, "sharedDirectory", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "sharedDirectory");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "sharedDirectory", value);
          },
          enumerable: true,
          configurable: true
        });
        File.pluginName = "File";
        File.plugin = "cordova-plugin-file";
        File.pluginRef = "cordova.file";
        File.repo = "https://github.com/apache/cordova-plugin-file";
        File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];

        File.ɵfac = function File_Factory(t) {
          return ɵFile_BaseFactory(t || File);
        };

        File.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: File,
          factory: function factory(t) {
            return File.ɵfac(t);
          }
        });

        var ɵFile_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](File);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](File, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return File;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmlsZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxnRkFBNEQsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBQzFHO0FBR0MsSUFncUJ5Qix3QkFBaUI7QUFBQztBQUU5QjtBQUVVLFFBMER0QixzQkFBZ0IsR0FBUTtBQUMxQixZQUFJLENBQUMsRUFBRSxlQUFlO0FBQ3RCLFlBQUksQ0FBQyxFQUFFLGNBQWM7QUFDckIsWUFBSSxDQUFDLEVBQUUsV0FBVztBQUNsQixZQUFJLENBQUMsRUFBRSxrQkFBa0I7QUFDekIsWUFBSSxDQUFDLEVBQUUsY0FBYztBQUNyQixZQUFJLENBQUMsRUFBRSw2QkFBNkI7QUFDcEMsWUFBSSxDQUFDLEVBQUUsbUJBQW1CO0FBQzFCLFlBQUksQ0FBQyxFQUFFLFlBQVk7QUFDbkIsWUFBSSxDQUFDLEVBQUUsMEJBQTBCO0FBQ2pDLFlBQUksRUFBRSxFQUFFLG9CQUFvQjtBQUM1QixZQUFJLEVBQUUsRUFBRSxtQkFBbUI7QUFDM0IsWUFBSSxFQUFFLEVBQUUsaUJBQWlCO0FBQ3pCLFlBQUksRUFBRSxFQUFFLGtCQUFrQjtBQUMxQixZQUFJLEVBQUUsRUFBRSxjQUFjO0FBQ3RCLFNBQUcsQ0FBQztBQUNKO0FBRWU7QUFBTSxJQUluQiwrQkFBZ0I7QUFBaUI7QUFDZDtBQUNwQixtREFGcUM7QUFDdEMsZ0JBQUksT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLG9CQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQTZCLEVBQUUsTUFBNEIsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEgsZ0JBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxhQUFHO0FB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RUYsSUFBSSx3QkFEaEIsVUFBVSxFQUFFLFFBQ0EsSUFBSTs7Ozs7MEJBQUU7QUFBQyxlQXJxQnBCO0FBQUUsRUFxcUJ3QixpQkFBaUI7QUFDMUMsU0FEWSxJQUFJO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhQ2hlY2ssIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGUgZXh0ZW5kcyBCbG9iIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGZpbGUsIHdpdGhvdXQgcGF0aCBpbmZvcm1hdGlvblxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTGFzdCBtb2RpZmllZCBkYXRlXG4gICAqL1xuICBsYXN0TW9kaWZpZWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIExhc3QgbW9kaWZpZWQgZGF0ZVxuICAgKi9cbiAgbGFzdE1vZGlmaWVkRGF0ZTogbnVtYmVyO1xuICAvKipcbiAgICogU2l6ZSBpbiBieXRlc1xuICAgKi9cbiAgc2l6ZTogbnVtYmVyO1xuICAvKipcbiAgICogRmlsZSBtaW1lIHR5cGVcbiAgICovXG4gIHR5cGU6IHN0cmluZztcbiAgbG9jYWxVUkw6IHN0cmluZztcbiAgc3RhcnQ6IG51bWJlcjtcbiAgZW5kOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBcInNsaWNlXCIgb2YgdGhlIGZpbGUuIFNpbmNlIENvcmRvdmEgRmlsZXMgZG9uJ3QgY29udGFpbiB0aGUgYWN0dWFsXG4gICAqIGNvbnRlbnQsIHRoaXMgcmVhbGx5IHJldHVybnMgYSBGaWxlIHdpdGggYWRqdXN0ZWQgc3RhcnQgYW5kIGVuZC5cbiAgICogU2xpY2VzIG9mIHNsaWNlcyBhcmUgc3VwcG9ydGVkLlxuICAgKiBAcGFyYW0gc3RhcnQge051bWJlcn0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIHN0YXJ0IHRoZSBzbGljZSAoaW5jbHVzaXZlKS5cbiAgICogQHBhcmFtIGVuZCB7TnVtYmVyfSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gZW5kIHRoZSBzbGljZSAoZXhjbHVzaXZlKS5cbiAgICovXG4gIHNsaWNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQmxvYjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbEZpbGVTeXN0ZW0ge1xuICAvKipcbiAgICogVXNlZCBmb3Igc3RvcmFnZSB3aXRoIG5vIGd1YXJhbnRlZSBvZiBwZXJzaXN0ZW5jZS5cbiAgICovXG4gIFRFTVBPUkFSWTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVc2VkIGZvciBzdG9yYWdlIHRoYXQgc2hvdWxkIG5vdCBiZSByZW1vdmVkIGJ5IHRoZSB1c2VyIGFnZW50IHdpdGhvdXQgYXBwbGljYXRpb24gb3IgdXNlciBwZXJtaXNzaW9uLlxuICAgKi9cbiAgUEVSU0lTVEVOVDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyBhIGZpbGVzeXN0ZW0gaW4gd2hpY2ggdG8gc3RvcmUgYXBwbGljYXRpb24gZGF0YS5cbiAgICogQHBhcmFtIHR5cGUgV2hldGhlciB0aGUgZmlsZXN5c3RlbSByZXF1ZXN0ZWQgc2hvdWxkIGJlIHBlcnNpc3RlbnQsIGFzIGRlZmluZWQgYWJvdmUuIFVzZSBvbmUgb2YgVEVNUE9SQVJZIG9yXG4gICAqICAgUEVSU0lTVEVOVC5cbiAgICogQHBhcmFtIHNpemUgVGhpcyBpcyBhbiBpbmRpY2F0b3Igb2YgaG93IG11Y2ggc3RvcmFnZSBzcGFjZSwgaW4gYnl0ZXMsIHRoZSBhcHBsaWNhdGlvbiBleHBlY3RzIHRvIG5lZWQuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgYWdlbnQgcHJvdmlkZXMgYSBmaWxlc3lzdGVtLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbiwgb3Igd2hlbiB0aGUgcmVxdWVzdCB0byBvYnRhaW4gdGhlIGZpbGVzeXN0ZW0gaXNcbiAgICogICBkZW5pZWQuXG4gICAqL1xuICByZXF1ZXN0RmlsZVN5c3RlbShcbiAgICB0eXBlOiBudW1iZXIsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZVN5c3RlbUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgdXNlciB0byBsb29rIHVwIHRoZSBFbnRyeSBmb3IgYSBmaWxlIG9yIGRpcmVjdG9yeSByZWZlcnJlZCB0byBieSBhIGxvY2FsIFVSTC5cbiAgICogQHBhcmFtIHVybCBBIFVSTCByZWZlcnJpbmcgdG8gYSBsb2NhbCBmaWxlIGluIGEgZmlsZXN5c3RlbSBhY2Nlc3NhYmxlIHZpYSB0aGlzIEFQSS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJlcG9ydCB0aGUgRmlsZUVudHJ5IHRvIHdoaWNoIHRoZSBzdXBwbGllZCBVUkwgcmVmZXJzLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbiwgb3Igd2hlbiB0aGUgcmVxdWVzdCB0byBvYnRhaW4gdGhlIEVudHJ5IGlzXG4gICAqICAgZGVuaWVkLlxuICAgKi9cbiAgcmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCh1cmw6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlRW50cnlDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBzZWUgcmVxdWVzdEZpbGVTeXN0ZW0uXG4gICAqL1xuICB3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbShcbiAgICB0eXBlOiBudW1iZXIsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZVN5c3RlbUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGEge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgdGltZSBhdCB3aGljaCB0aGUgZmlsZSBvciBkaXJlY3Rvcnkgd2FzIGxhc3QgbW9kaWZpZWQuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgbW9kaWZpY2F0aW9uVGltZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGZpbGUsIGluIGJ5dGVzLiBUaGlzIG11c3QgcmV0dXJuIDAgZm9yIGRpcmVjdG9yaWVzLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGbGFncyB7XG4gIC8qKlxuICAgKiBVc2VkIHRvIGluZGljYXRlIHRoYXQgdGhlIHVzZXIgd2FudHMgdG8gY3JlYXRlIGEgZmlsZSBvciBkaXJlY3RvcnkgaWYgaXQgd2FzIG5vdCBwcmV2aW91c2x5IHRoZXJlLlxuICAgKi9cbiAgY3JlYXRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQnkgaXRzZWxmLCBleGNsdXNpdmUgbXVzdCBoYXZlIG5vIGVmZmVjdC4gVXNlZCB3aXRoIGNyZWF0ZSwgaXQgbXVzdCBjYXVzZSBnZXRGaWxlIGFuZCBnZXREaXJlY3RvcnkgdG8gZmFpbCBpZiB0aGVcbiAgICogdGFyZ2V0IHBhdGggYWxyZWFkeSBleGlzdHMuXG4gICAqL1xuICBleGNsdXNpdmU/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVN5c3RlbSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBuYW1lIG9mIHRoZSBmaWxlIHN5c3RlbS4gVGhlIHNwZWNpZmljcyBvZiBuYW1pbmcgZmlsZXN5c3RlbXMgaXMgdW5zcGVjaWZpZWQsIGJ1dCBhIG5hbWUgbXVzdCBiZSB1bmlxdWVcbiAgICogYWNyb3NzIHRoZSBsaXN0IG9mIGV4cG9zZWQgZmlsZSBzeXN0ZW1zLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBmaWxlIHN5c3RlbS5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICByb290OiBEaXJlY3RvcnlFbnRyeTtcblxuICB0b0pTT04oKTogc3RyaW5nO1xuXG4gIGVuY29kZVVSSVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudHJ5IHtcbiAgLyoqXG4gICAqIEVudHJ5IGlzIGEgZmlsZS5cbiAgICovXG4gIGlzRmlsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW50cnkgaXMgYSBkaXJlY3RvcnkuXG4gICAqL1xuICBpc0RpcmVjdG9yeTogYm9vbGVhbjtcblxuICAvKipcbiAgICogTG9vayB1cCBtZXRhZGF0YSBhYm91dCB0aGlzIGVudHJ5LlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgdGltZSBvZiB0aGUgbGFzdCBtb2RpZmljYXRpb24uXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBnZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogU2V0IHRoZSBtZXRhZGF0YSBvZiB0aGUgZW50cnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIE1ldGFkYXRhIG9iamVjdFxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgRmlsZUVycm9yXG4gICAqIEBwYXJhbSBtZXRhZGF0YU9iamVjdCB7TWV0YWRhdGF9IGtleXMgYW5kIHZhbHVlcyB0byBzZXRcbiAgICovXG4gIHNldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjazogRXJyb3JDYWxsYmFjaywgbWV0YWRhdGFPYmplY3Q6IE1ldGFkYXRhKTogdm9pZDtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGVudHJ5LCBleGNsdWRpbmcgdGhlIHBhdGggbGVhZGluZyB0byBpdC5cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmdWxsIGFic29sdXRlIHBhdGggZnJvbSB0aGUgcm9vdCB0byB0aGUgZW50cnkuXG4gICAqL1xuICBmdWxsUGF0aDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZpbGUgc3lzdGVtIG9uIHdoaWNoIHRoZSBlbnRyeSByZXNpZGVzLlxuICAgKi9cbiAgZmlsZXN5c3RlbTogRmlsZVN5c3RlbTtcbiAgLyoqXG4gICAqIGFuIGFsdGVybmF0ZSBVUkwgd2hpY2ggY2FuIGJlIHVzZWQgYnkgbmF0aXZlIHdlYnZpZXcgY29udHJvbHMsIGZvciBleGFtcGxlIG1lZGlhIHBsYXllcnMuXG4gICAqL1xuICBuYXRpdmVVUkw6IHN0cmluZztcblxuICAvKipcbiAgICogTG9vayB1cCBtZXRhZGF0YSBhYm91dCB0aGlzIGVudHJ5LlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgdGltZSBvZiB0aGUgbGFzdCBtb2RpZmljYXRpb24uXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBnZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogU2V0IHRoZSBtZXRhZGF0YSBvZiB0aGUgZW50cnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIE1ldGFkYXRhIG9iamVjdFxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgRmlsZUVycm9yXG4gICAqIEBwYXJhbSBtZXRhZGF0YU9iamVjdCB7TWV0YWRhdGF9IGtleXMgYW5kIHZhbHVlcyB0byBzZXRcbiAgICovXG4gIHNldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjazogRXJyb3JDYWxsYmFjaywgbWV0YWRhdGFPYmplY3Q6IE1ldGFkYXRhKTogdm9pZDtcblxuICAvKipcbiAgICogTW92ZSBhbiBlbnRyeSB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBvbiB0aGUgZmlsZSBzeXN0ZW0uIEl0IGlzIGFuIGVycm9yIHRvIHRyeSB0bzpcbiAgICpcbiAgICogPHVpPlxuICAgKiA8bGk+bW92ZSBhIGRpcmVjdG9yeSBpbnNpZGUgaXRzZWxmIG9yIHRvIGFueSBjaGlsZCBhdCBhbnkgZGVwdGg7PC9saT5cbiAgICogPGxpPm1vdmUgYW4gZW50cnkgaW50byBpdHMgcGFyZW50IGlmIGEgbmFtZSBkaWZmZXJlbnQgZnJvbSBpdHMgY3VycmVudCBvbmUgaXNuJ3QgcHJvdmlkZWQ7PC9saT5cbiAgICogPGxpPm1vdmUgYSBmaWxlIHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeTs8L2xpPlxuICAgKiA8bGk+bW92ZSBhIGRpcmVjdG9yeSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBmaWxlOzwvbGk+XG4gICAqIDxsaT5tb3ZlIGFueSBlbGVtZW50IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeSB3aGljaCBpcyBub3QgZW1wdHkuPC9saT5cbiAgICogPHVsPlxuICAgKlxuICAgKiBBIG1vdmUgb2YgYSBmaWxlIG9uIHRvcCBvZiBhbiBleGlzdGluZyBmaWxlIG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBmaWxlLlxuICAgKiBBIG1vdmUgb2YgYSBkaXJlY3Rvcnkgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGVtcHR5IGRpcmVjdG9yeSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXQgZGlyZWN0b3J5LlxuICAgKi9cbiAgbW92ZVRvKFxuICAgIHBhcmVudDogRGlyZWN0b3J5RW50cnksXG4gICAgbmV3TmFtZT86IHN0cmluZyxcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBFbnRyeUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENvcHkgYW4gZW50cnkgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gb24gdGhlIGZpbGUgc3lzdGVtLiBJdCBpcyBhbiBlcnJvciB0byB0cnkgdG86XG4gICAqXG4gICAqIDx1bD5cbiAgICogPGxpPiBjb3B5IGEgZGlyZWN0b3J5IGluc2lkZSBpdHNlbGYgb3IgdG8gYW55IGNoaWxkIGF0IGFueSBkZXB0aDs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYW4gZW50cnkgaW50byBpdHMgcGFyZW50IGlmIGEgbmFtZSBkaWZmZXJlbnQgZnJvbSBpdHMgY3VycmVudCBvbmUgaXNuJ3QgcHJvdmlkZWQ7PC9saT5cbiAgICogPGxpPiBjb3B5IGEgZmlsZSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnk7PC9saT5cbiAgICogPGxpPiBjb3B5IGEgZGlyZWN0b3J5IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGZpbGU7PC9saT5cbiAgICogPGxpPiBjb3B5IGFueSBlbGVtZW50IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeSB3aGljaCBpcyBub3QgZW1wdHkuPC9saT5cbiAgICogPGxpPiBBIGNvcHkgb2YgYSBmaWxlIG9uIHRvcCBvZiBhbiBleGlzdGluZyBmaWxlIG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBmaWxlLjwvbGk+XG4gICAqIDxsaT4gQSBjb3B5IG9mIGEgZGlyZWN0b3J5IG9uIHRvcCBvZiBhbiBleGlzdGluZyBlbXB0eSBkaXJlY3RvcnkgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0XG4gICAqIGRpcmVjdG9yeS48L2xpPlxuICAgKiA8L3VsPlxuICAgKlxuICAgKiBEaXJlY3RvcnkgY29waWVzIGFyZSBhbHdheXMgcmVjdXJzaXZlLS10aGF0IGlzLCB0aGV5IGNvcHkgYWxsIGNvbnRlbnRzIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAqL1xuICBjb3B5VG8oXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcbiAgICBuZXdOYW1lPzogc3RyaW5nLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IEVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIFVSTCB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgZW50cnkuIFVubGlrZSB0aGUgVVJOIGRlZmluZWQgaW4gW0ZJTEUtQVBJLUVEXSwgaXQgaGFzIG5vIHNwZWNpZmljXG4gICAqIGV4cGlyYXRpb247IGFzIGl0IGRlc2NyaWJlcyBhIGxvY2F0aW9uIG9uIGRpc2ssIGl0IHNob3VsZCBiZSB2YWxpZCBhdCBsZWFzdCBhcyBsb25nIGFzIHRoYXQgbG9jYXRpb24gZXhpc3RzLlxuICAgKi9cbiAgdG9VUkwoKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBVUkwgdGhhdCBjYW4gYmUgcGFzc2VkIGFjcm9zcyB0aGUgYnJpZGdlIHRvIGlkZW50aWZ5IHRoaXMgZW50cnkuXG4gICAqIEByZXR1cm4gc3RyaW5nIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeVxuICAgKi9cbiAgdG9JbnRlcm5hbFVSTCgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBmaWxlIG9yIGRpcmVjdG9yeS4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBkZWxldGUgYSBkaXJlY3RvcnkgdGhhdCBpcyBub3QgZW1wdHkuIEl0IGlzIGFuIGVycm9yIHRvXG4gICAqIGF0dGVtcHQgdG8gZGVsZXRlIHRoZSByb290IGRpcmVjdG9yeSBvZiBhIGZpbGVzeXN0ZW0uXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIHJlbW92ZShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBMb29rIHVwIHRoZSBwYXJlbnQgRGlyZWN0b3J5RW50cnkgY29udGFpbmluZyB0aGlzIEVudHJ5LiBJZiB0aGlzIEVudHJ5IGlzIHRoZSByb290IG9mIGl0cyBmaWxlc3lzdGVtLCBpdHMgcGFyZW50XG4gICAqIGlzIGl0c2VsZi5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgcGFyZW50IEVudHJ5LlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldFBhcmVudChzdWNjZXNzQ2FsbGJhY2s6IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRpcmVjdG9yeSBvbiBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeUVudHJ5IGV4dGVuZHMgRW50cnkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBEaXJlY3RvcnlSZWFkZXIgdG8gcmVhZCBFbnRyaWVzIGZyb20gdGhpcyBEaXJlY3RvcnkuXG4gICAqL1xuICBjcmVhdGVSZWFkZXIoKTogRGlyZWN0b3J5UmVhZGVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG9yIGxvb2tzIHVwIGEgZmlsZS5cbiAgICogQHBhcmFtIHBhdGggRWl0aGVyIGFuIGFic29sdXRlIHBhdGggb3IgYSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBEaXJlY3RvcnlFbnRyeSB0byB0aGUgZmlsZSB0byBiZSBsb29rZWQgdXAgb3JcbiAgICogICBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGZpbGUgd2hvc2UgaW1tZWRpYXRlIHBhcmVudCBkb2VzIG5vdCB5ZXQgZXhpc3QuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqICAgICA8dWw+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGFuZCBleGNsdXNpdmUgYXJlIGJvdGggdHJ1ZSwgYW5kIHRoZSBwYXRoIGFscmVhZHkgZXhpc3RzLCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXRGaWxlIG11c3QgY3JlYXRlIGl0IGFzIGFcbiAgICogICB6ZXJvLWxlbmd0aCBmaWxlIGFuZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIEZpbGVFbnRyeS48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RmlsZSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGV4aXN0cywgYnV0IGlzIGEgZGlyZWN0b3J5LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPk90aGVyd2lzZSwgaWYgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXRGaWxlIG11c3QgcmV0dXJuIGEgRmlsZUVudHJ5IGNvcnJlc3BvbmRpbmcgdG8gcGF0aC48L2xpPlxuICAgKiAgICAgPC91bD5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgRmlsZSBzZWxlY3RlZCBvciBjcmVhdGVkLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldEZpbGUocGF0aDogc3RyaW5nLCBvcHRpb25zPzogRmxhZ3MsIHN1Y2Nlc3NDYWxsYmFjaz86IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBwYXRoIEVpdGhlciBhbiBhYnNvbHV0ZSBwYXRoIG9yIGEgcmVsYXRpdmUgcGF0aCBmcm9tIHRoaXMgRGlyZWN0b3J5RW50cnkgdG8gdGhlIGRpcmVjdG9yeSB0byBiZSBsb29rZWQgdXBcbiAgICogICBvciBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGRpcmVjdG9yeSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogICAgIDx1bD5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlIGFuZCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0cywgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXREaXJlY3RvcnkgbXVzdCBjcmVhdGUgYW5kIHJldHVyblxuICAgKiAgIGEgY29ycmVzcG9uZGluZyBEaXJlY3RvcnlFbnRyeS48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBmaWxlLCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldERpcmVjdG9yeSBtdXN0IHJldHVybiBhIERpcmVjdG9yeUVudHJ5IGNvcnJlc3BvbmRpbmcgdG8gcGF0aC48L2xpPlxuICAgKiAgICAgPC91bD5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayAgIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBEaXJlY3RvcnlFbnRyeSBzZWxlY3RlZCBvciBjcmVhdGVkLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICpcbiAgICovXG4gIGdldERpcmVjdG9yeShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEZsYWdzLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogRGVsZXRlcyBhIGRpcmVjdG9yeSBhbmQgYWxsIG9mIGl0cyBjb250ZW50cywgaWYgYW55LiBJbiB0aGUgZXZlbnQgb2YgYW4gZXJyb3IgW2UuZy4gdHJ5aW5nIHRvIGRlbGV0ZSBhIGRpcmVjdG9yeVxuICAgKiB0aGF0IGNvbnRhaW5zIGEgZmlsZSB0aGF0IGNhbm5vdCBiZSByZW1vdmVkXSwgc29tZSBvZiB0aGUgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeSBtYXkgYmUgZGVsZXRlZC4gSXQgaXMgYW4gZXJyb3JcbiAgICogdG8gYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgcmVtb3ZlUmVjdXJzaXZlbHkoc3VjY2Vzc0NhbGxiYWNrOiBWb2lkQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgbGV0cyBhIHVzZXIgbGlzdCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgaW4gYSBkaXJlY3RvcnkuIElmIHRoZXJlIGFyZSBubyBhZGRpdGlvbnMgdG8gb3JcbiAqIGRlbGV0aW9ucyBmcm9tIGEgZGlyZWN0b3J5IGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0IGNhbGwgdG8gcmVhZEVudHJpZXMsIGFuZCBubyBlcnJvcnMgb2NjdXIsIHRoZW46XG4gKiA8dWw+XG4gKiA8bGk+IEEgc2VyaWVzIG9mIGNhbGxzIHRvIHJlYWRFbnRyaWVzIG11c3QgcmV0dXJuIGVhY2ggZW50cnkgaW4gdGhlIGRpcmVjdG9yeSBleGFjdGx5IG9uY2UuPC9saT5cbiAqIDxsaT4gT25jZSBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBuZXh0IGNhbGwgdG8gcmVhZEVudHJpZXMgbXVzdCBwcm9kdWNlIGFuIGVtcHR5IGFycmF5LjwvbGk+XG4gKiA8bGk+IElmIG5vdCBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBhcnJheSBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBiZSBlbXB0eS48L2xpPlxuICogPGxpPiBUaGUgZW50cmllcyBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBpbmNsdWRlIHRoZSBkaXJlY3RvcnkgaXRzZWxmIFtcIi5cIl0gb3IgaXRzIHBhcmVudCBbXCIuLlwiXS48L2xpPlxuICogPC91bD5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvcnlSZWFkZXIge1xuICBsb2NhbFVSTDogc3RyaW5nO1xuICBoYXNSZWFkRW50cmllczogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVhZCB0aGUgbmV4dCBibG9jayBvZiBlbnRyaWVzIGZyb20gdGhpcyBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQ2FsbGVkIG9uY2UgcGVyIHN1Y2Nlc3NmdWwgY2FsbCB0byByZWFkRW50cmllcyB0byBkZWxpdmVyIHRoZSBuZXh0IHByZXZpb3VzbHktdW5yZXBvcnRlZFxuICAgKiAgIHNldCBvZiBFbnRyaWVzIGluIHRoZSBhc3NvY2lhdGVkIERpcmVjdG9yeS4gSWYgYWxsIEVudHJpZXMgaGF2ZSBhbHJlYWR5IGJlZW4gcmV0dXJuZWQgZnJvbSBwcmV2aW91cyBpbnZvY2F0aW9uc1xuICAgKiAgIG9mIHJlYWRFbnRyaWVzLCBzdWNjZXNzQ2FsbGJhY2sgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIHplcm8tbGVuZ3RoIGFycmF5IGFzIGFuIGFyZ3VtZW50LlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIGluZGljYXRpbmcgdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyBmcm9tIHRoZSBEaXJlY3RvcnkuXG4gICAqL1xuICByZWFkRW50cmllcyhzdWNjZXNzQ2FsbGJhY2s6IEVudHJpZXNDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZmlsZSBvbiBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbnRyeSBleHRlbmRzIEVudHJ5IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVdyaXRlciBhc3NvY2lhdGVkIHdpdGggdGhlIGZpbGUgdGhhdCB0aGlzIEZpbGVFbnRyeSByZXByZXNlbnRzLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgbmV3IEZpbGVXcml0ZXIuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgY3JlYXRlV3JpdGVyKHN1Y2Nlc3NDYWxsYmFjazogRmlsZVdyaXRlckNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBGaWxlIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBGaWxlLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGZpbGUoc3VjY2Vzc0NhbGxiYWNrOiBGaWxlQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBXaGVuIHJlcXVlc3RGaWxlU3lzdGVtKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZVN5c3RlbUNhbGxiYWNrID0gKGZpbGVzeXN0ZW06IEZpbGVTeXN0ZW0pID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRW50cnlDYWxsYmFjayA9IChlbnRyeTogRW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRmlsZUVudHJ5IG9iamVjdHMuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBGaWxlRW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRGlyZWN0b3J5RW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRGlyZWN0b3J5RW50cnlDYWxsYmFjayA9IChlbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogV2hlbiByZWFkRW50cmllcygpIHN1Y2NlZWRzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXG4gKi9cbmV4cG9ydCB0eXBlIEVudHJpZXNDYWxsYmFjayA9IChlbnRyaWVzOiBFbnRyeVtdKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIGZpbGUgYW5kIGRpcmVjdG9yeSBtZXRhZGF0YS5cbiAqL1xuZXhwb3J0IHR5cGUgTWV0YWRhdGFDYWxsYmFjayA9IChtZXRhZGF0YTogTWV0YWRhdGEpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGNyZWF0ZSBhIEZpbGVXcml0ZXIuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVXcml0ZXJDYWxsYmFjayA9IChmaWxlV3JpdGVyOiBGaWxlV3JpdGVyKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBvYnRhaW4gYSBGaWxlLlxuICovXG5leHBvcnQgdHlwZSBGaWxlQ2FsbGJhY2sgPSAoZmlsZTogSUZpbGUpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBnZW5lcmljIGNhbGxiYWNrIHVzZWQgdG8gaW5kaWNhdGUgc3VjY2VzcyBvZiBhbiBhc3luY2hyb25vdXMgbWV0aG9kLlxuICovXG5leHBvcnQgdHlwZSBWb2lkQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIFdoZW4gYW4gZXJyb3Igb2NjdXJzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXG4gKi9cbmV4cG9ydCB0eXBlIEVycm9yQ2FsbGJhY2sgPSAoZXJyOiBGaWxlRXJyb3IpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3ZlUmVzdWx0IHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgZmlsZVJlbW92ZWQ6IEVudHJ5O1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVNhdmVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICAvKipcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcbiAgICogaW1wbGVtZW50aW5nIHRoZSBXb3JrZXJVdGlscyBpbnRlcmZhY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxuICAgKiA8b2w+XG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xuICAgKiBlbHNlLiA8L2xpPlxuICAgKiA8bGk+IFNldCByZWFkeVN0YXRlIHRvIERPTkUuIDwvbGk+XG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcbiAgICogdGFza3MuIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoZSB3cml0ZSBhbGdvcml0aG0gYmVpbmcgcHJvY2Vzc2VkLiA8L2xpPlxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxuICAgKiA8bGk+IEZpcmUgYSBwcm9ncmVzcyBldmVudCBjYWxsZWQgd3JpdGUgZW5kIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoaXMgYWxnb3JpdGhtLiA8L2xpPlxuICAgKiA8L29sPlxuICAgKi9cbiAgYWJvcnQoKTogdm9pZDtcblxuICAvKipcbiAgICogVGhlIGJsb2IgaXMgYmVpbmcgd3JpdHRlbi5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBJTklUOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgb2JqZWN0IGhhcyBiZWVuIGNvbnN0cnVjdGVkLCBidXQgdGhlcmUgaXMgbm8gcGVuZGluZyB3cml0ZS5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBXUklUSU5HOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgZW50aXJlIEJsb2IgaGFzIGJlZW4gd3JpdHRlbiB0byB0aGUgZmlsZSwgYW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSB3cml0ZSwgb3IgdGhlIHdyaXRlIHdhcyBhYm9ydGVkIHVzaW5nXG4gICAqIGFib3J0KCkuIFRoZSBGaWxlU2F2ZXIgaXMgbm8gbG9uZ2VyIHdyaXRpbmcgdGhlIGJsb2IuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgRE9ORTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIEZpbGVTYXZlciBvYmplY3QgY2FuIGJlIGluIG9uZSBvZiAzIHN0YXRlcy4gVGhlIHJlYWR5U3RhdGUgYXR0cmlidXRlLCBvbiBnZXR0aW5nLCBtdXN0IHJldHVybiB0aGUgY3VycmVudFxuICAgKiBzdGF0ZSwgd2hpY2ggbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAqIDx1bD5cbiAgICogPGxpPklOSVQ8L2xpPlxuICAgKiA8bGk+V1JJVElORzwvbGk+XG4gICAqIDxsaT5ET05FPC9saT5cbiAgICogPHVsPlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHJlYWR5U3RhdGU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgb24gdGhlIEZpbGVTYXZlci5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBlcnJvcjogRXJyb3I7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBzdGFydCBldmVudHNcbiAgICovXG4gIG9ud3JpdGVzdGFydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgcHJvZ3Jlc3MgZXZlbnRzLlxuICAgKi9cbiAgb25wcm9ncmVzczogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZXZlbnRzLlxuICAgKi9cbiAgb253cml0ZTogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgYWJvcnQgZXZlbnRzLlxuICAgKi9cbiAgb25hYm9ydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgZXJyb3IgZXZlbnRzLlxuICAgKi9cbiAgb25lcnJvcjogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZW5kIGV2ZW50cy5cbiAgICovXG4gIG9ud3JpdGVlbmQ6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcbiAgICogaW1wbGVtZW50aW5nIHRoZSBXb3JrZXJVdGlscyBpbnRlcmZhY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxuICAgKiA8b2w+XG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xuICAgKiBlbHNlLiA8L2xpPlxuICAgKiA8bGk+IFNldCByZWFkeVN0YXRlIHRvIERPTkUuIDwvbGk+XG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcbiAgICogdGFza3MuIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoZSB3cml0ZSBhbGdvcml0aG0gYmVpbmcgcHJvY2Vzc2VkLiA8L2xpPlxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxuICAgKiA8bGk+IEZpcmUgYSBwcm9ncmVzcyBldmVudCBjYWxsZWQgd3JpdGVlbmQgPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhpcyBhbGdvcml0aG0uIDwvbGk+XG4gICAqIDwvb2w+XG4gICAqL1xuICBhYm9ydCgpOiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIFRoaXMgaW50ZXJmYWNlIGV4cGFuZHMgb24gdGhlIEZpbGVTYXZlciBpbnRlcmZhY2UgdG8gYWxsb3cgZm9yIG11bHRpcGxlIHdyaXRlIGFjdGlvbnMsIHJhdGhlciB0aGFuIGp1c3Qgc2F2aW5nIGFcbiAqICAgc2luZ2xlIEJsb2IuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVXcml0ZXIgZXh0ZW5kcyBGaWxlU2F2ZXIge1xuICAvKipcbiAgICogVGhlIGJ5dGUgb2Zmc2V0IGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHRvIHRoZSBmaWxlIHdpbGwgb2NjdXIuIFRoaXMgbXVzdCBiZSBubyBncmVhdGVyIHRoYW4gbGVuZ3RoLlxuICAgKiBBIG5ld2x5LWNyZWF0ZWQgRmlsZVdyaXRlciBtdXN0IGhhdmUgcG9zaXRpb24gc2V0IHRvIDAuXG4gICAqL1xuICBwb3NpdGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSBmaWxlLiBJZiB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIHJlYWQgYWNjZXNzIHRvIHRoZSBmaWxlLCB0aGlzIG11c3QgYmUgdGhlIGhpZ2hlc3QgYnl0ZSBvZmZzZXQgYXRcbiAgICogd2hpY2ggdGhlIHVzZXIgaGFzIHdyaXR0ZW4uXG4gICAqL1xuICBsZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogV3JpdGUgdGhlIHN1cHBsaWVkIGRhdGEgdG8gdGhlIGZpbGUgYXQgcG9zaXRpb24uXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBibG9iIHRvIHdyaXRlLlxuICAgKi9cbiAgd3JpdGUoZGF0YTogQXJyYXlCdWZmZXIgfCBCbG9iIHwgc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogU2VlayBzZXRzIHRoZSBmaWxlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHdpbGwgb2NjdXIuXG4gICAqIEBwYXJhbSBvZmZzZXQgSWYgbm9ubmVnYXRpdmUsIGFuIGFic29sdXRlIGJ5dGUgb2Zmc2V0IGludG8gdGhlIGZpbGUuIElmIG5lZ2F0aXZlLCBhbiBvZmZzZXQgYmFjayBmcm9tIHRoZSBlbmQgb2ZcbiAgICogICB0aGUgZmlsZS5cbiAgICovXG4gIHNlZWsob2Zmc2V0OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBsZW5ndGggb2YgdGhlIGZpbGUgdG8gdGhhdCBzcGVjaWZpZWQuIElmIHNob3J0ZW5pbmcgdGhlIGZpbGUsIGRhdGEgYmV5b25kIHRoZSBuZXcgbGVuZ3RoIG11c3QgYmVcbiAgICogZGlzY2FyZGVkLiBJZiBleHRlbmRpbmcgdGhlIGZpbGUsIHRoZSBleGlzdGluZyBkYXRhIG11c3QgYmUgemVyby1wYWRkZWQgdXAgdG8gdGhlIG5ldyBsZW5ndGguXG4gICAqIEBwYXJhbSBzaXplIFRoZSBzaXplIHRvIHdoaWNoIHRoZSBsZW5ndGggb2YgdGhlIGZpbGUgaXMgdG8gYmUgYWRqdXN0ZWQsIG1lYXN1cmVkIGluIGJ5dGVzLlxuICAgKi9cbiAgdHJ1bmNhdGUoc2l6ZTogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJV3JpdGVPcHRpb25zIHtcbiAgcmVwbGFjZT86IGJvb2xlYW47XG4gIGFwcGVuZD86IGJvb2xlYW47XG4gIHRydW5jYXRlPzogbnVtYmVyOyAvLyBpZiBwcmVzZW50LCBudW1iZXIgb2YgYnl0ZXMgdG8gdHJ1bmNhdGUgZmlsZSB0byBiZWZvcmUgd3JpdGluZ1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZUVycm9yIHtcbiAgc3RhdGljIE5PVF9GT1VORF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFNFQ1VSSVRZX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgQUJPUlRfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBOT1RfUkVBREFCTEVfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBFTkNPRElOR19FUlI6IG51bWJlcjtcbiAgc3RhdGljIE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgSU5WQUxJRF9TVEFURV9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFNZTlRBWF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIElOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgUVVPVEFfRVhDRUVERURfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBUWVBFX01JU01BVENIX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgUEFUSF9FWElTVFNfRVJSOiBudW1iZXI7XG4gIC8qKiBFcnJvciBjb2RlICovXG4gIGNvZGU6IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvZGU6IG51bWJlcik7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlUmVhZGVyIHtcbiAgc3RhdGljIEVNUFRZOiBudW1iZXI7XG4gIHN0YXRpYyBMT0FESU5HOiBudW1iZXI7XG4gIHN0YXRpYyBET05FOiBudW1iZXI7XG4gIHN0YXRpYyBSRUFEX0NIVU5LX1NJWkU6IG51bWJlcjtcblxuICByZWFkeVN0YXRlOiBudW1iZXI7IC8vIHNlZSBjb25zdGFudHMgaW4gdmFyIGRlY2xhcmF0aW9uIGJlbG93XG4gIGVycm9yOiBFcnJvcjtcbiAgcmVzdWx0OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcjsgLy8gdHlwZSBkZXBlbmRzIG9uIHJlYWRBc1hYWCgpIGNhbGwgdHlwZVxuXG4gIG9ubG9hZHN0YXJ0OiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbnByb2dyZXNzOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmxvYWQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9uZXJyb3I6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9ubG9hZGVuZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25hYm9ydDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcblxuICBhYm9ydCgpOiB2b2lkO1xuXG4gIHJlYWRBc1RleHQoZmU6IElGaWxlLCBlbmNvZGluZz86IHN0cmluZyk6IHZvaWQ7XG5cbiAgcmVhZEFzRGF0YVVSTChmZTogSUZpbGUpOiB2b2lkO1xuXG4gIHJlYWRBc0JpbmFyeVN0cmluZyhmZTogSUZpbGUpOiB2b2lkO1xuXG4gIHJlYWRBc0FycmF5QnVmZmVyKGZlOiBJRmlsZSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIFdpbmRvdyBleHRlbmRzIExvY2FsRmlsZVN5c3RlbSB7fVxuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogV2luZG93O1xuXG4vKipcbiAqIEBuYW1lIEZpbGVcbiAqIEBwcmVtaWVyIGZpbGVzeXN0ZW1cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaW1wbGVtZW50cyBhIEZpbGUgQVBJIGFsbG93aW5nIHJlYWQvd3JpdGUgYWNjZXNzIHRvIGZpbGVzIHJlc2lkaW5nIG9uIHRoZSBkZXZpY2UuXG4gKlxuICogVGhlIEZpbGUgY2xhc3MgaW1wbGVtZW50cyBzdGF0aWMgY29udmVuaWVuY2UgZnVuY3Rpb25zIHRvIGFjY2VzcyBmaWxlcyBhbmQgZGlyZWN0b3JpZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYFxuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlLmNoZWNrRGlyKHRoaXMuZmlsZS5kYXRhRGlyZWN0b3J5LCAnbXlkaXInKS50aGVuKF8gPT4gY29uc29sZS5sb2coJ0RpcmVjdG9yeSBleGlzdHMnKSkuY2F0Y2goZXJyID0+XG4gKiAgIGNvbnNvbGUubG9nKCdEaXJlY3RvcnkgZG9lc24ndCBleGlzdCcpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiAgVGhpcyBwbHVnaW4gaXMgYmFzZWQgb24gc2V2ZXJhbCBzcGVjcywgaW5jbHVkaW5nIDogVGhlIEhUTUw1IEZpbGUgQVBJIGh0dHA6IC8vd3d3LnczLm9yZy9UUi9GaWxlQVBJL1xuICogIFRoZSAobm93LWRlZnVuY3QpIERpcmVjdG9yaWVzIGFuZCBTeXN0ZW0gZXh0ZW5zaW9ucyBMYXRlc3Q6IGh0dHA6IC8vd3d3LnczLm9yZy9UUi8yMDEyL1dELWZpbGUtc3lzdGVtLWFwaS0yMDEyMDQxNy9cbiAqICBBbHRob3VnaCBtb3N0IG9mIHRoZSBwbHVnaW4gY29kZSB3YXMgd3JpdHRlbiB3aGVuIGFuIGVhcmxpZXIgc3BlYyB3YXMgY3VycmVudDogaHR0cDpcbiAqICAgLy93d3cudzMub3JnL1RSLzIwMTEvV0QtZmlsZS1zeXN0ZW0tYXBpLTIwMTEwNDE5LyBJdCBhbHNvIGltcGxlbWVudHMgdGhlIEZpbGVXcml0ZXIgc3BlYyA6IGh0dHA6XG4gKiAgIC8vZGV2LnczLm9yZy8yMDA5L2RhcC9maWxlLXN5c3RlbS9maWxlLXdyaXRlci5odG1sXG4gKiAgQGludGVyZmFjZXNcbiAqICBJRmlsZVxuICogIEVudHJ5XG4gKiAgRGlyZWN0b3J5RW50cnlcbiAqICBEaXJlY3RvcnlSZWFkZXJcbiAqICBGaWxlU3lzdGVtXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLmZpbGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIFJlYWQtb25seSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBhcHBsaWNhdGlvbkRpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgUmVhZC1vbmx5IGRpcmVjdG9yeSB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgaW5zdGFsbGVkLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uU3RvcmFnZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZGF0YURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWNoZWQgZmlsZXMgdGhhdCBzaG91bGQgc3Vydml2ZSBhcHAgcmVzdGFydHMuXG4gICAqIEFwcHMgc2hvdWxkIG5vdCByZWx5IG9uIHRoZSBPUyB0byBkZWxldGUgZmlsZXMgaW4gaGVyZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBjYWNoZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkOiB0aGUgYXBwbGljYXRpb24gc3BhY2Ugb24gZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbEFwcGxpY2F0aW9uU3RvcmFnZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgQW5kcm9pZDogV2hlcmUgdG8gcHV0IGFwcC1zcGVjaWZpYyBkYXRhIGZpbGVzIG9uIGV4dGVybmFsIHN0b3JhZ2UuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxEYXRhRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQ6IHRoZSBhcHBsaWNhdGlvbiBjYWNoZSBvbiBleHRlcm5hbCBzdG9yYWdlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQ2FjaGVEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQW5kcm9pZDogdGhlIGV4dGVybmFsIHN0b3JhZ2UgKFNEIGNhcmQpIHJvb3QuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxSb290RGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlPUzogVGVtcCBkaXJlY3RvcnkgdGhhdCB0aGUgT1MgY2FuIGNsZWFyIGF0IHdpbGwuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgdGVtcERpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpT1M6IEhvbGRzIGFwcC1zcGVjaWZpYyBmaWxlcyB0aGF0IHNob3VsZCBiZSBzeW5jZWQgKGUuZy4gdG8gaUNsb3VkKS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBzeW5jZWREYXRhRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlPUzogRmlsZXMgcHJpdmF0ZSB0byB0aGUgYXBwLCBidXQgdGhhdCBhcmUgbWVhbmluZ2Z1bCB0byBvdGhlciBhcHBsaWNhdGlvbnMgKGUuZy4gT2ZmaWNlIGZpbGVzKVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGRvY3VtZW50c0RpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCbGFja0JlcnJ5MTA6IEZpbGVzIGdsb2JhbGx5IGF2YWlsYWJsZSB0byBhbGwgYXBwc1xuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHNoYXJlZERpcmVjdG9yeTogc3RyaW5nO1xuXG4gIGNvcmRvdmFGaWxlRXJyb3I6IGFueSA9IHtcbiAgICAxOiAnTk9UX0ZPVU5EX0VSUicsXG4gICAgMjogJ1NFQ1VSSVRZX0VSUicsXG4gICAgMzogJ0FCT1JUX0VSUicsXG4gICAgNDogJ05PVF9SRUFEQUJMRV9FUlInLFxuICAgIDU6ICdFTkNPRElOR19FUlInLFxuICAgIDY6ICdOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlInLFxuICAgIDc6ICdJTlZBTElEX1NUQVRFX0VSUicsXG4gICAgODogJ1NZTlRBWF9FUlInLFxuICAgIDk6ICdJTlZBTElEX01PRElGSUNBVElPTl9FUlInLFxuICAgIDEwOiAnUVVPVEFfRVhDRUVERURfRVJSJyxcbiAgICAxMTogJ1RZUEVfTUlTTUFUQ0hfRVJSJyxcbiAgICAxMjogJ1BBVEhfRVhJU1RTX0VSUicsXG4gICAgMTM6ICdXUk9OR19FTlRSWV9UWVBFJyxcbiAgICAxNDogJ0RJUl9SRUFEX0VSUicsXG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBmcmVlIGRpc2sgc3BhY2UgaW4gQnl0ZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZW1haW5pbmcgZnJlZSBkaXNrIHNwYWNlIGluIEJ5dGVzXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgZ2V0RnJlZURpc2tTcGFjZSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29yZG92YS5leGVjKHJlc29sdmUgYXMgKGRhdGE6IGFueSkgPT4gYW55LCByZWplY3QgYXMgKGRhdGE6IGFueSkgPT4gYW55LCAnRmlsZScsICdnZXRGcmVlRGlza1NwYWNlJywgW10pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgZGlyZWN0b3J5IGV4aXN0cyBpbiBhIGNlcnRhaW4gcGF0aCwgZGlyZWN0b3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpciBOYW1lIG9mIGRpcmVjdG9yeSB0byBjaGVja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSBkaXJlY3RvcnkgZXhpc3RzIG9yIHJlamVjdHMgd2l0aCBhblxuICAgKiAgIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNoZWNrRGlyKHBhdGg6IHN0cmluZywgZGlyOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoICsgZGlyO1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwoZnVsbFBhdGgpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBkaXJlY3RvcnkgaW4gdGhlIHNwZWNpZmljIHBhdGguXG4gICAqIFRoZSByZXBsYWNlIGJvb2xlYW4gdmFsdWUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHJlcGxhY2UgYW4gZXhpc3RpbmcgZGlyZWN0b3J5IHdpdGggdGhlIHNhbWUgbmFtZS5cbiAgICogSWYgYW4gZXhpc3RpbmcgZGlyZWN0b3J5IGV4aXN0cyBhbmQgdGhlIHJlcGxhY2UgdmFsdWUgaXMgZmFsc2UsIHRoZSBwcm9taXNlIHdpbGwgZmFpbCBhbmQgcmV0dXJuIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSWYgdHJ1ZSwgcmVwbGFjZXMgZmlsZSB3aXRoIHNhbWUgbmFtZS4gSWYgZmFsc2UgcmV0dXJucyBlcnJvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIERpcmVjdG9yeUVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjcmVhdGVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4pOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBGbGFncyA9IHtcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICBvcHRpb25zLmV4Y2x1c2l2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKS50aGVuKGZzZSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBkaXJlY3RvcnkgYXQgYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBkaXJlY3RvcnkgbmFtZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGRlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYSBkaXJlY3RvcnkgdG8gYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgc291cmNlIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBUaGUgc291cmNlIGRpcmVjdG9yeSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIFRoZSBkZXN0aW5hdGlvbiBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0Rpck5hbWUgVGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5fEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IERpcmVjdG9yeUVudHJ5IG9iamVjdCBvclxuICAgKiAgIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBtb3ZlRGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0Rpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnkgfCBFbnRyeT4ge1xuICAgIG5ld0Rpck5hbWUgPSBuZXdEaXJOYW1lIHx8IGRpck5hbWU7XG5cbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzcmNkZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZW5hdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW92ZShzcmNkZSwgZGVzdGVuYXRpb24sIG5ld0Rpck5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgYSBkaXJlY3RvcnkgaW4gdmFyaW91cyBtZXRob2RzLiBJZiBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgZXhpc3RzLCB3aWxsIGZhaWwgdG8gY29weS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtcyBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeSB0byBjb3B5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0Rpck5hbWUgTmV3IG5hbWUgb2YgZGlyZWN0b3J5IHRvIGNvcHkgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRW50cnkgb2JqZWN0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjb3B5RGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0Rpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzcmNkZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29weShzcmNkZSwgZGVzdGUsIG5ld0Rpck5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3QgZmlsZXMgYW5kIGRpcmVjdG9yeSBmcm9tIGEgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtcyBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeVtdPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBhcnJheSBvZiBFbnRyeSBvYmplY3RzIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBsaXN0RGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeVtdPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PEVudHJ5W10+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwge1xuICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgZXhjbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGUgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBkZS5jcmVhdGVSZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZEVudHJpZXMocmVhZGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGZpbGVzIGFuZCB0aGUgZGlyZWN0b3J5IGZyb20gYSBkZXNpcmVkIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVSZWN1cnNpdmVseShwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PFJlbW92ZVJlc3VsdD4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yaW1yYWYoZGUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBmaWxlIGV4aXN0cyBpbiBhIGNlcnRhaW4gcGF0aCwgZGlyZWN0b3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjaGVja0ZpbGUocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKHBhdGggKyBmaWxlKS50aGVuKGZzZSA9PiB7XG4gICAgICBpZiAoZnNlLmlzRmlsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoMTMpO1xuICAgICAgICBlcnIubWVzc2FnZSA9ICdpbnB1dCBpcyBub3QgYSBmaWxlJztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGJvb2xlYW4+KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBmaWxlIGluIHRoZSBzcGVjaWZpYyBwYXRoLlxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgKiBJZiBhbiBleGlzdGluZyBmaWxlIGV4aXN0cyBhbmQgdGhlIHJlcGxhY2UgdmFsdWUgaXMgZmFsc2UsIHRoZSBwcm9taXNlIHdpbGwgZmFpbCBhbmQgcmV0dXJuIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKTogUHJvbWlzZTxGaWxlRW50cnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBGbGFncyA9IHtcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICBvcHRpb25zLmV4Y2x1c2l2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKS50aGVuKGZzZSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBmaWxlIGZyb20gYSBkZXNpcmVkIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gcmVtb3ZlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlbW92ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihmZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShmZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIG5ldyBmaWxlIHRvIHRoZSBkZXNpcmVkIGxvY2F0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyfSB0ZXh0IGNvbnRlbnQsIGJsb2Igb3IgQXJyYXlCdWZmZXIgdG8gd3JpdGVcbiAgICogQHBhcmFtIHtJV3JpdGVPcHRpb25zfSB3aGV0aGVyIHRvIHJlcGxhY2UvYXBwZW5kIHRvIGFuIGV4aXN0aW5nIGZpbGUuIFNlZSBJV3JpdGVPcHRpb25zIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHVwZGF0ZWQgZmlsZSBlbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgd3JpdGVGaWxlKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxuICAgIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcixcbiAgICBvcHRpb25zOiBJV3JpdGVPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RmlsZU9wdHM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiAhb3B0aW9ucy5hcHBlbmQsXG4gICAgICBleGNsdXNpdmU6ICFvcHRpb25zLnJlcGxhY2UsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUsIGdldEZpbGVPcHRzKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlRW50cnkoZmlsZUVudHJ5LCB0ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGNvbnRlbnQgdG8gRmlsZUVudHJ5LlxuICAgKiBAaGlkZGVuXG4gICAqIFdyaXRlIHRvIGFuIGV4aXN0aW5nIGZpbGUuXG4gICAqIEBwYXJhbSB7RmlsZUVudHJ5fSBmZSBmaWxlIGVudHJ5IG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcn0gdGV4dCB0ZXh0IGNvbnRlbnQgb3IgYmxvYiB0byB3cml0ZVxuICAgKiBAcGFyYW0ge0lXcml0ZU9wdGlvbnN9IG9wdGlvbnMgcmVwbGFjZSBmaWxlIGlmIHNldCB0byB0cnVlLiBTZWUgV3JpdGVPcHRpb25zIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fSAgUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZUZpbGVFbnRyeShmZTogRmlsZUVudHJ5LCB0ZXh0OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIsIG9wdGlvbnM6IElXcml0ZU9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVXcml0ZXIoZmUpXG4gICAgICAudGhlbih3cml0ZXIgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5hcHBlbmQpIHtcbiAgICAgICAgICB3cml0ZXIuc2Vlayh3cml0ZXIubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnRydW5jYXRlKSB7XG4gICAgICAgICAgd3JpdGVyLnRydW5jYXRlKG9wdGlvbnMudHJ1bmNhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUod3JpdGVyLCB0ZXh0KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiBmZSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgdG8gYW4gZXhpc3RpbmcgZmlsZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBwYXRoIHJlbGF0aXZlIHRvIGJhc2UgcGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2J9IHRleHQgY29udGVudCBvciBibG9iIHRvIHdyaXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICB3cml0ZUV4aXN0aW5nRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB8IEJsb2IpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy53cml0ZUZpbGUocGF0aCwgZmlsZU5hbWUsIHRleHQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSBjb250ZW50cyBvZiBhIGZpbGUgYXMgdGV4dC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBzdHJpbmcgb3IgcmVqZWN0cyB3aXRoXG4gICAqICAgYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzVGV4dChwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnVGV4dCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYSBiYXNlNjQgZW5jb2RlZCBkYXRhIHVybC5cbiAgICogQSBkYXRhIHVybCBpcyBvZiB0aGUgZm9ybTpcbiAgICogICAgICBkYXRhOiBbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIGRhdGEgVVJMIG9yIHJlamVjdHNcbiAgICogICB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlYWRBc0RhdGFVUkwocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ0RhdGFVUkwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGEgYmluYXJ5IGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgc3RyaW5nIHJlamVjdHMgd2l0aCBhblxuICAgKiAgIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlYWRBc0JpbmFyeVN0cmluZyhwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnQmluYXJ5U3RyaW5nJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhbiBBcnJheUJ1ZmZlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXlCdWZmZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIEFycmF5QnVmZmVyIG9yXG4gICAqICAgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlYWRBc0FycmF5QnVmZmVyKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPEFycmF5QnVmZmVyPihwYXRoLCBmaWxlLCAnQXJyYXlCdWZmZXInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGEgZmlsZSB0byBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIG1vdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RmlsZU5hbWUgTmV3IG5hbWUgb2YgZmlsZSB0byBtb3ZlIHRvIChsZWF2ZSBibGFuayB0byByZW1haW4gdGhlIHNhbWUpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IEVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBtb3ZlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICBuZXdGaWxlTmFtZSA9IG5ld0ZpbGVOYW1lIHx8IGZpbGVOYW1lO1xuXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0ZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc3JjZmUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oZGVzdGUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoc3JjZmUsIGRlc3RlLCBuZXdGaWxlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29weSBhIGZpbGUgaW4gdmFyaW91cyBtZXRob2RzLiBJZiBmaWxlIGV4aXN0cywgd2lsbCBmYWlsIHRvIGNvcHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIGNvcHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RmlsZU5hbWUgTmV3IG5hbWUgb2YgZmlsZSB0byBjb3B5IHRvIChsZWF2ZSBibGFuayB0byByZW1haW4gdGhlIHNhbWUpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY29weUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0ZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgbmV3RmlsZU5hbWUgPSBuZXdGaWxlTmFtZSB8fCBmaWxlTmFtZTtcblxuICAgIGlmICgvXlxcLy8udGVzdChuZXdGaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHNyY2ZlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb3B5KHNyY2ZlLCBkZXN0ZSwgbmV3RmlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgZmlsbEVycm9yTWVzc2FnZShlcnI6IEZpbGVFcnJvcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBlcnIubWVzc2FnZSA9IHRoaXMuY29yZG92YUZpbGVFcnJvcltlcnIuY29kZV07XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGZpbGUgc3lzdGVtIFVSTFxuICAgKiBAcGFyYW0gZmlsZVVybCB7c3RyaW5nfSBmaWxlIHN5c3RlbSB1cmxcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwoZmlsZVVybDogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTChcbiAgICAgICAgICBmaWxlVXJsLFxuICAgICAgICAgIChlbnRyeTogRW50cnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZW50cnkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoeGMpIHtcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcbiAgICAgICAgcmVqZWN0KHhjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGRpcmVjdG9yeSB1cmxcbiAgICogQHBhcmFtIGRpcmVjdG9yeVVybCB7c3RyaW5nfSBkaXJlY3Rvcnkgc3lzdGVtIHVybFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVzb2x2ZURpcmVjdG9yeVVybChkaXJlY3RvcnlVcmw6IHN0cmluZyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGRpcmVjdG9yeVVybCkudGhlbihkZSA9PiB7XG4gICAgICBpZiAoZGUuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIGRlIGFzIERpcmVjdG9yeUVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XG4gICAgICAgIGVyci5tZXNzYWdlID0gJ2lucHV0IGlzIG5vdCBhIGRpcmVjdG9yeSc7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxEaXJlY3RvcnlFbnRyeT4oZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIGRpcmVjdG9yeUVudHJ5IHtEaXJlY3RvcnlFbnRyeX0gRGlyZWN0b3J5IGVudHJ5LCBvYnRhaW5lZCBieSByZXNvbHZlRGlyZWN0b3J5VXJsIG1ldGhvZFxuICAgKiBAcGFyYW0gZGlyZWN0b3J5TmFtZSB7c3RyaW5nfSBEaXJlY3RvcnkgbmFtZVxuICAgKiBAcGFyYW0gZmxhZ3Mge0ZsYWdzfSBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXREaXJlY3RvcnkoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5LCBkaXJlY3RvcnlOYW1lOiBzdHJpbmcsIGZsYWdzOiBGbGFncyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RGlyZWN0b3J5RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRpcmVjdG9yeUVudHJ5LmdldERpcmVjdG9yeShcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lLFxuICAgICAgICAgIGZsYWdzLFxuICAgICAgICAgIGRlID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoeGMpIHtcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcbiAgICAgICAgcmVqZWN0KHhjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBmaWxlXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlFbnRyeSB7RGlyZWN0b3J5RW50cnl9IERpcmVjdG9yeSBlbnRyeSwgb2J0YWluZWQgYnkgcmVzb2x2ZURpcmVjdG9yeVVybCBtZXRob2RcbiAgICogQHBhcmFtIGZpbGVOYW1lIHtzdHJpbmd9IEZpbGUgbmFtZVxuICAgKiBAcGFyYW0gZmxhZ3Mge0ZsYWdzfSBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgZ2V0RmlsZShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGZpbGVOYW1lOiBzdHJpbmcsIGZsYWdzOiBGbGFncyk6IFByb21pc2U8RmlsZUVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RmlsZShmaWxlTmFtZSwgZmxhZ3MsIHJlc29sdmUsIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoeGMpIHtcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcbiAgICAgICAgcmVqZWN0KHhjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZEZpbGU8VD4oXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGZpbGU6IHN0cmluZyxcbiAgICByZWFkQXM6ICdBcnJheUJ1ZmZlcicgfCAnQmluYXJ5U3RyaW5nJyB8ICdEYXRhVVJMJyB8ICdUZXh0J1xuICApOiBQcm9taXNlPFQ+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChmaWxlRW50cnk6IEZpbGVFbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZXR1cm4gZ2V0UHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZWFkZXIucmVzdWx0ICE9PSB1bmRlZmluZWQgfHwgcmVhZGVyLnJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXNvbHZlKChyZWFkZXIucmVzdWx0IGFzIGFueSkgYXMgVCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlYWRlci5lcnJvciAhPT0gdW5kZWZpbmVkIHx8IHJlYWRlci5lcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCh7IGNvZGU6IG51bGwsIG1lc3NhZ2U6ICdSRUFERVJfT05MT0FERU5EX0VSUicgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZpbGVFbnRyeS5maWxlKFxuICAgICAgICAgICAgZmlsZSA9PiB7XG4gICAgICAgICAgICAgIHJlYWRlcltgcmVhZEFzJHtyZWFkQXN9YF0uY2FsbChyZWFkZXIsIGZpbGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlKGZlOiBFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmUucmVtb3ZlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUsIGZpbGVSZW1vdmVkOiBmZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIG1vdmUoc3JjZTogRW50cnksIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcmNlLm1vdmVUbyhcbiAgICAgICAgZGVzdGRpcixcbiAgICAgICAgbmV3TmFtZSxcbiAgICAgICAgZGVzdGUgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgY29weShzcmNlOiBFbnRyeSwgZGVzdGRpcjogRGlyZWN0b3J5RW50cnksIG5ld05hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNyY2UuY29weVRvKFxuICAgICAgICBkZXN0ZGlyLFxuICAgICAgICBuZXdOYW1lLFxuICAgICAgICBkZXN0ZSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkZXN0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSByZWFkRW50cmllcyhkcjogRGlyZWN0b3J5UmVhZGVyKTogUHJvbWlzZTxFbnRyeVtdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGRyLnJlYWRFbnRyaWVzKFxuICAgICAgICBlbnRyaWVzID0+IHtcbiAgICAgICAgICByZXNvbHZlKGVudHJpZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmltcmFmKGRlOiBEaXJlY3RvcnlFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZGUucmVtb3ZlUmVjdXJzaXZlbHkoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgZmlsZVJlbW92ZWQ6IGRlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlV3JpdGVyKGZlOiBGaWxlRW50cnkpOiBQcm9taXNlPEZpbGVXcml0ZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZVdyaXRlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmUuY3JlYXRlV3JpdGVyKFxuICAgICAgICB3cml0ZXIgPT4ge1xuICAgICAgICAgIHJlc29sdmUod3JpdGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlKHdyaXRlcjogRmlsZVdyaXRlciwgZ3U6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGd1IGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlSW5DaHVua3Mod3JpdGVyLCBndSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3JpdGVyLm9ud3JpdGVlbmQgPSBldnQgPT4ge1xuICAgICAgICBpZiAod3JpdGVyLmVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KHdyaXRlci5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShldnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd3JpdGVyLndyaXRlKGd1KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlRmlsZUluQ2h1bmtzKHdyaXRlcjogRmlsZVdyaXRlciwgZmlsZTogQmxvYikge1xuICAgIGNvbnN0IEJMT0NLX1NJWkUgPSAxMDI0ICogMTAyNDtcbiAgICBsZXQgd3JpdHRlblNpemUgPSAwO1xuXG4gICAgZnVuY3Rpb24gd3JpdGVOZXh0Q2h1bmsoKSB7XG4gICAgICBjb25zdCBzaXplID0gTWF0aC5taW4oQkxPQ0tfU0laRSwgZmlsZS5zaXplIC0gd3JpdHRlblNpemUpO1xuICAgICAgY29uc3QgY2h1bmsgPSBmaWxlLnNsaWNlKHdyaXR0ZW5TaXplLCB3cml0dGVuU2l6ZSArIHNpemUpO1xuXG4gICAgICB3cml0dGVuU2l6ZSArPSBzaXplO1xuICAgICAgd3JpdGVyLndyaXRlKGNodW5rKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdyaXRlci5vbmVycm9yID0gcmVqZWN0IGFzIChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgICAgIHdyaXRlci5vbndyaXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAod3JpdHRlblNpemUgPCBmaWxlLnNpemUpIHtcbiAgICAgICAgICB3cml0ZU5leHRDaHVuaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdyaXRlTmV4dENodW5rKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js ***!
      \*******************************************************************/

    /*! exports provided: HTTP */

    /***/
    function node_modulesIonicNativeHttp__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HTTP", function () {
        return HTTP;
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

      var HTTP =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTP, _super);

        function HTTP() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        HTTP.prototype.getBasicAuthHeader = function (username, password) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getBasicAuthHeader", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.useBasicAuth = function (username, password) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "useBasicAuth", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getHeaders = function (host) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getHeaders", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setHeader = function (host, header, value) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setHeader", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getDataSerializer = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getDataSerializer", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setDataSerializer = function (serializer) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDataSerializer", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setCookie = function (url, cookie) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setCookie", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.clearCookies = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clearCookies", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.removeCookies = function (url, cb) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeCookies", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getCookieString = function (url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCookieString", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getRequestTimeout = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getRequestTimeout", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setRequestTimeout = function (timeout) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setRequestTimeout", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getFollowRedirect = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getFollowRedirect", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setFollowRedirect = function (follow) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setFollowRedirect", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setServerTrustMode = function (mode) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setServerTrustMode", {}, arguments);
        };

        HTTP.prototype.post = function (url, body, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "post", {}, arguments);
        };

        HTTP.prototype.get = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "get", {}, arguments);
        };

        HTTP.prototype.put = function (url, body, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "put", {}, arguments);
        };

        HTTP.prototype.patch = function (url, body, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "patch", {}, arguments);
        };

        HTTP.prototype["delete"] = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "delete", {}, arguments);
        };

        HTTP.prototype.head = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "head", {}, arguments);
        };

        HTTP.prototype.options = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "options", {}, arguments);
        };

        HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "uploadFile", {}, arguments);
        };

        HTTP.prototype.downloadFile = function (url, body, headers, filePath) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "downloadFile", {}, arguments);
        };

        HTTP.prototype.sendRequest = function (url, options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendRequest", {}, arguments);
        };

        Object.defineProperty(HTTP.prototype, "ErrorCode", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "ErrorCode");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "ErrorCode", value);
          },
          enumerable: true,
          configurable: true
        });
        HTTP.pluginName = "HTTP";
        HTTP.plugin = "cordova-plugin-advanced-http";
        HTTP.pluginRef = "cordova.plugin.http";
        HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
        HTTP.platforms = ["Android", "iOS"];

        HTTP.ɵfac = function HTTP_Factory(t) {
          return ɵHTTP_BaseFactory(t || HTTP);
        };

        HTTP.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: HTTP,
          factory: function factory(t) {
            return HTTP.ɵfac(t);
          }
        });

        var ɵHTTP_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](HTTP);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HTTP, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return HTTP;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaHR0cC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDekY7QUFHTyxJQW1FbUIsd0JBQWlCO0FBQUM7QUFFOUI7QUFBeUU7QUFBTSxJQXFCM0YsaUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQjtBQUs3QixJQUt4QiwyQkFBWSxhQUFDLFFBQWdCLEVBQUUsUUFBZ0I7QUFJNUMsSUFJSCx5QkFBVSxhQUFDLElBQVk7QUFLWSxJQU1uQyx3QkFBUyxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBYTtBQUdGLElBSW5ELGdDQUFpQjtBQUtxQyxJQUt0RCxnQ0FBaUIsYUFBQyxVQUFnRTtBQUlqRCxJQUlqQyx3QkFBUyxhQUFDLEdBQVcsRUFBRSxNQUFjO0FBS2hCLElBQ3JCLDJCQUFZO0FBS04sSUFHTiw0QkFBYSxhQUFDLEdBQVcsRUFBRSxFQUFjO0FBSTVCLElBR2IsOEJBQWUsYUFBQyxHQUFXO0FBS2EsSUFJeEMsZ0NBQWlCO0FBTWIsSUFHSixnQ0FBaUIsYUFBQyxPQUFlO0FBSWhDLElBR0QsZ0NBQWlCO0FBS29DLElBSXJELGdDQUFpQixhQUFDLE1BQWU7QUFHMEIsSUFTM0QsaUNBQWtCLGFBQUMsSUFBaUQ7QUFLOUMsSUFPdEIsbUJBQUksYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFPQSxrQkFBRyxhQUFDLEdBQVcsRUFBRSxVQUFlLEVBQUUsT0FBWTtBQUsvQyxJQU9DLGtCQUFHLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0FBS3pDLElBT0Msb0JBQUssYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFPRCxxQkFBTSxhQUFDLEdBQVcsRUFBRSxVQUFlLEVBQUUsT0FBWTtBQUsvQyxJQU9GLG1CQUFJLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0FBSy9DLElBT0Esc0JBQU8sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFNcEQsSUFRRSx5QkFBVSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQTJCLEVBQUUsSUFBdUI7QUFNM0YsSUFPViwyQkFBWSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQWdCO0FBTXZELElBZVosMEJBQVcsYUFDVCxHQUFXLEVBQ1gsT0FVQztBQUtNLDBCQS9SQSwyQkFBUztBQUNwQjtBQUU0QjtBQUkxQjtBQUEwQjtBQUlyQjtBQUFRO0FBQThCO0FBQ3RDO0FBQ0s7QUFDcUM7SUFwQnBDLElBQUksd0JBRGhCLFVBQVUsRUFBRSxRQUNBLElBQUk7Ozs7OzBCQUFFO0FBQUMsZUF4RXBCO0FBQUUsRUF3RXdCLGlCQUFpQjtBQUMxQyxTQURZLElBQUk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSFRUUFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBIVFRQIHN0YXR1cyBudW1iZXIgb2YgdGhlIHJlc3BvbnNlIG9yIGEgbmVnYXRpdmUgaW50ZXJuYWwgZXJyb3IgY29kZS5cbiAgICovXG4gIHN0YXR1czogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlYWRlcnMgb2YgdGhlIHJlc3BvbnNlLlxuICAgKi9cbiAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIHJlc3BvbnNlLiBUaGlzIHByb3BlcnR5IHdpbGwgYmUgdGhlIGZpbmFsIFVSTCBvYnRhaW5lZCBhZnRlciBhbnkgcmVkaXJlY3RzLlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSB0aGF0IGlzIGluIHRoZSByZXNwb25zZS4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlc29sdmVzLlxuICAgKi9cbiAgZGF0YT86IGFueTtcbiAgLyoqXG4gICAqIEVycm9yIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlamVjdHMuXG4gICAqL1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBIVFRQXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgLyBQaG9uZWdhcCBwbHVnaW4gZm9yIGNvbW11bmljYXRpbmcgd2l0aCBIVFRQIHNlcnZlcnMuIFN1cHBvcnRzIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBBZHZhbnRhZ2VzIG92ZXIgSmF2YXNjcmlwdCByZXF1ZXN0czpcbiAqIC0gU1NMIC8gVExTIFBpbm5pbmdcbiAqIC0gQ09SUyByZXN0cmljdGlvbnMgZG8gbm90IGFwcGx5XG4gKiAtIEhhbmRsaW5nIG9mIEhUVFAgY29kZSA0MDEgLSByZWFkIG1vcmUgYXQgW0lzc3VlIENCLTI0MTVdKGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ0ItMjQxNSlcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEhUVFAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h0dHAvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEhUVFApIHt9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5odHRwLmdldCgnaHR0cDovL2lvbmljLmlvJywge30sIHt9KVxuICogICAudGhlbihkYXRhID0+IHtcbiAqXG4gKiAgICAgY29uc29sZS5sb2coZGF0YS5zdGF0dXMpO1xuICogICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7IC8vIGRhdGEgcmVjZWl2ZWQgYnkgc2VydmVyXG4gKiAgICAgY29uc29sZS5sb2coZGF0YS5oZWFkZXJzKTtcbiAqXG4gKiAgIH0pXG4gKiAgIC5jYXRjaChlcnJvciA9PiB7XG4gKlxuICogICAgIGNvbnNvbGUubG9nKGVycm9yLnN0YXR1cyk7XG4gKiAgICAgY29uc29sZS5sb2coZXJyb3IuZXJyb3IpOyAvLyBlcnJvciBtZXNzYWdlIGFzIHN0cmluZ1xuICogICAgIGNvbnNvbGUubG9nKGVycm9yLmhlYWRlcnMpO1xuICpcbiAqICAgfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSFRUUFJlc3BvbnNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSFRUUCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbi5odHRwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zaWxraW1lbi9jb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhUVFAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGVudW0gcmVwcmVzZW50cyB0aGUgaW50ZXJuYWwgZXJyb3IgY29kZXMgd2hpY2ggY2FuIGJlIHJldHVybmVkIGluIGEgSFRUUFJlc3BvbnNlIG9iamVjdC5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcmVhZG9ubHkgRXJyb3JDb2RlOiB7XG4gICAgR0VORVJJQzogbnVtYmVyO1xuICAgIFNTTF9FWENFUFRJT046IG51bWJlcjtcbiAgICBTRVJWRVJfTk9UX0ZPVU5EOiBudW1iZXI7XG4gICAgVElNRU9VVDogbnVtYmVyO1xuICAgIFVOU1VQUE9SVEVEX1VSTDogbnVtYmVyO1xuICAgIE5PVF9DT05ORUNURUQ6IG51bWJlcjtcbiAgICBQT1NUX1BST0NFU1NJTkdfRkFJTEVEOiBudW1iZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgcmV0dXJucyBhbiBvYmplY3QgcmVwcmVzZW50aW5nIGEgYmFzaWMgSFRUUCBBdXRob3JpemF0aW9uIGhlYWRlciBvZiB0aGUgZm9ybS5cbiAgICogQHBhcmFtIHVzZXJuYW1lIHtzdHJpbmd9IFVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCB7c3RyaW5nfSBQYXNzd29yZFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBvYmplY3QgcmVwcmVzZW50aW5nIGEgYmFzaWMgSFRUUCBBdXRob3JpemF0aW9uIGhlYWRlciBvZiB0aGUgZm9ybSB7J0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYmFzZTY0RW5jb2RlZFVzZXJuYW1lQW5kUGFzc3dvcmQnfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJhc2ljQXV0aEhlYWRlcih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogeyBBdXRob3JpemF0aW9uOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgc2V0cyB1cCBhbGwgZnV0dXJlIHJlcXVlc3RzIHRvIHVzZSBCYXNpYyBIVFRQIGF1dGhlbnRpY2F0aW9uIHdpdGggdGhlIGdpdmVuIHVzZXJuYW1lIGFuZCBwYXNzd29yZC5cbiAgICogQHBhcmFtIHVzZXJuYW1lIHtzdHJpbmd9IFVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCB7c3RyaW5nfSBQYXNzd29yZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVzZUJhc2ljQXV0aCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGhlYWRlcnMgZGVmaW5lZCBmb3IgYSBnaXZlbiBob3N0bmFtZS5cbiAgICogQHBhcmFtIGhvc3Qge3N0cmluZ30gVGhlIGhvc3RuYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybiBhbGwgaGVhZGVycyBkZWZpbmVkIGZvciB0aGUgaG9zdG5hbWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRIZWFkZXJzKGhvc3Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIGhlYWRlciBmb3IgYWxsIGZ1dHVyZSByZXF1ZXN0cy4gVGFrZXMgYSBob3N0bmFtZSwgYSBoZWFkZXIgYW5kIGEgdmFsdWUuXG4gICAqIEBwYXJhbSBob3N0IHtzdHJpbmd9IFRoZSBob3N0bmFtZSB0byBiZSB1c2VkIGZvciBzY29waW5nIHRoaXMgaGVhZGVyXG4gICAqIEBwYXJhbSBoZWFkZXIge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGhlYWRlclxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ30gVGhlIHZhbHVlIG9mIHRoZSBoZWFkZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRIZWFkZXIoaG9zdDogc3RyaW5nLCBoZWFkZXI6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNlcmlhbGl6ZXIgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBhbGwgZnV0dXJlIFBPU1QgYW5kIFBVVCByZXF1ZXN0cy5cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY29uZmlndXJlZCBkYXRhIHNlcmlhbGl6ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREYXRhU2VyaWFsaXplcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgc2VyaWFsaXplciB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGFsbCBmdXR1cmUgUE9TVCwgUFVUIGFuZCBQQVRDSCByZXF1ZXN0cy4gVGFrZXMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBzZXJpYWxpemVyLlxuICAgKiBAcGFyYW0gc2VyaWFsaXplciB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgc2VyaWFsaXplci5cbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCNzZXRkYXRhc2VyaWFsaXplclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldERhdGFTZXJpYWxpemVyKHNlcmlhbGl6ZXI6ICd1cmxlbmNvZGVkJyB8ICdqc29uJyB8ICd1dGY4JyB8ICdtdWx0aXBhcnQnIHwgJ3JhdycpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSBjb29raWUuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gU2NvcGUgb2YgdGhlIGNvb2tpZVxuICAgKiBAcGFyYW0gY29va2llIHtzdHJpbmd9IFJGQyBjb21wbGlhbnQgY29va2llIHN0cmluZ1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENvb2tpZSh1cmw6IHN0cmluZywgY29va2llOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBjb29raWVzLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNsZWFyQ29va2llcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb29raWVzIGZvciBnaXZlbiBVUkwuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHBhcmFtIGNiXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlQ29va2llcyh1cmw6IHN0cmluZywgY2I6ICgpID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgY29va2llIHN0cmluZyBmb3IgZ2l2ZW4gVVJMLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q29va2llU3RyaW5nKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGdsb2JhbCByZXF1ZXN0IHRpbWVvdXQgdmFsdWUgaW4gc2Vjb25kcy5cbiAgICogQHJldHVybnMge251bWJlcn0gcmV0dXJucyB0aGUgZ2xvYmFsIHJlcXVlc3QgdGltZW91dCB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFJlcXVlc3RUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBnbG9iYWwgcmVxdWVzdCB0aW1lb3V0IHZhbHVlIGluIHNlY29uZHMuXG4gICAqIEBwYXJhbSB0aW1lb3V0IHtudW1iZXJ9IFRoZSB0aW1lb3V0IGluIHNlY29uZHMuIERlZmF1bHQgNjBcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRSZXF1ZXN0VGltZW91dCh0aW1lb3V0OiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgaWYgaXQgc2hvdWxkIGZvbGxvdyByZWRpcmVjdHMgYXV0b21hdGljYWxseS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybnMgdHJ1ZSBpZiBpdCBpcyBjb25maWd1cmVkIHRvIGZvbGxvdyByZWRpcmVjdHMgYXV0b21hdGljYWxseVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEZvbGxvd1JlZGlyZWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmUgaWYgaXQgc2hvdWxkIGZvbGxvdyByZWRpcmVjdHMgYXV0b21hdGljYWxseS5cbiAgICogQHBhcmFtIGZvbGxvdyB7Ym9vbGVhbn0gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgZm9sbG93aW5nIHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Rm9sbG93UmVkaXJlY3QoZm9sbG93OiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXQgc2VydmVyIHRydXN0IG1vZGUsIGJlaW5nIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAgICogZGVmYXVsdDogZGVmYXVsdCBTU0wgdHJ1c3RzaGlwIGFuZCBob3N0bmFtZSB2ZXJpZmljYXRpb24gaGFuZGxpbmcgdXNpbmcgc3lzdGVtJ3MgQ0EgY2VydHM7XG4gICAqIGxlZ2FjeTogdXNlIGxlZ2FjeSBkZWZhdWx0IGJlaGF2aW9yICg8IDIuMC4zKSwgZXhjbHVkaW5nIHVzZXIgaW5zdGFsbGVkIENBIGNlcnRzIChvbmx5IGZvciBBbmRyb2lkKTtcbiAgICogbm9jaGVjazogZGlzYWJsZSBTU0wgY2VydGlmaWNhdGUgY2hlY2tpbmcgYW5kIGhvc3RuYW1lIHZlcmlmaWNhdGlvbiwgdHJ1c3RpbmcgYWxsIGNlcnRzIChtZWFudCB0byBiZSB1c2VkIG9ubHkgZm9yIHRlc3RpbmcgcHVycG9zZXMpO1xuICAgKiBwaW5uZWQ6IHRydXN0IG9ubHkgcHJvdmlkZWQgY2VydGlmaWNhdGVzO1xuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaWxraW1lbi9jb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwI3NldHNlcnZlcnRydXN0bW9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBzZXJ2ZXIgdHJ1c3QgbW9kZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRTZXJ2ZXJUcnVzdE1vZGUobW9kZTogJ2RlZmF1bHQnIHwgJ2xlZ2FjeScgfCAnbm9jaGVjaycgfCAncGlubmVkJyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUE9TVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBHRVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQVVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQQVRDSCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgREVMRVRFIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlbGV0ZSh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgSEVBRCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoZWFkKHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gT1BUSU9OUyByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcHRpb25zKHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgbG9jYWwgcGF0aChzKSBvZiB0aGUgZmlsZShzKSB0byB1cGxvYWRcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIG5hbWUocykgb2YgdGhlIHBhcmFtZXRlciB0byBwYXNzIHRoZSBmaWxlKHMpIGFsb25nIGFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBGaWxlRW50cnkgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdXBsb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSwgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIHBhdGggdG8gZG93bmxvYWQgdGhlIGZpbGUgdG8sIGluY2x1ZGluZyB0aGUgZmlsZSBuYW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgRmlsZUVudHJ5IHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBvcHRpb25zIGZvciBpbmRpdmlkdWFsIHJlcXVlc3RcbiAgICogQHBhcmFtIG9wdGlvbnMubWV0aG9kIHtzdHJpbmd9IHJlcXVlc3QgbWV0aG9kXG4gICAqIEBwYXJhbSBvcHRpb25zLmRhdGEge09iamVjdH0gcGF5bG9hZCB0byBiZSBzZW5kIHRvIHRoZSBzZXJ2ZXIgKG9ubHkgYXBwbGljYWJsZSBvbiBwb3N0LCBwdXQgb3IgcGF0Y2ggbWV0aG9kcylcbiAgICogQHBhcmFtIG9wdGlvbnMucGFyYW1zIHtPYmplY3R9IHF1ZXJ5IHBhcmFtcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgVVJMIChvbmx5IGFwcGxpY2FibGUgb24gZ2V0LCBoZWFkLCBkZWxldGUsIHVwbG9hZCBvciBkb3dubG9hZCBtZXRob2RzKVxuICAgKiBAcGFyYW0gb3B0aW9ucy5zZXJpYWxpemVyIHtzdHJpbmd9IGRhdGEgc2VyaWFsaXplciB0byBiZSB1c2VkIChvbmx5IGFwcGxpY2FibGUgb24gcG9zdCwgcHV0IG9yIHBhdGNoIG1ldGhvZHMpLCBkZWZhdWx0cyB0byBnbG9iYWwgc2VyaWFsaXplciB2YWx1ZSwgc2VlIHNldERhdGFTZXJpYWxpemVyIGZvciBzdXBwb3J0ZWQgdmFsdWVzXG4gICAqIEBwYXJhbSBvcHRpb25zLnRpbWVvdXQge251bWJlcn0gdGltZW91dCB2YWx1ZSBmb3IgdGhlIHJlcXVlc3QgaW4gc2Vjb25kcywgZGVmYXVsdHMgdG8gZ2xvYmFsIHRpbWVvdXQgdmFsdWVcbiAgICogQHBhcmFtIG9wdGlvbnMuaGVhZGVycyB7T2JqZWN0fSBoZWFkZXJzIG9iamVjdCAoa2V5IHZhbHVlIHBhaXIpLCB3aWxsIGJlIG1lcmdlZCB3aXRoIGdsb2JhbCB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMuZmlsZVBhdGgge3N0cmluZ30gZmlsZSBwYXRoKHMpIHRvIGJlIHVzZWQgZHVyaW5nIHVwbG9hZCBhbmQgZG93bmxvYWQgc2VlIHVwbG9hZEZpbGUgYW5kIGRvd25sb2FkRmlsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMubmFtZSB7c3RyaW5nfSBuYW1lKHMpIHRvIGJlIHVzZWQgZHVyaW5nIHVwbG9hZCBzZWUgdXBsb2FkRmlsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMucmVzcG9uc2VUeXBlIHtzdHJpbmd9IHJlc3BvbnNlIHR5cGUsIGRlZmF1bHRzIHRvIHRleHRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRSZXF1ZXN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1ldGhvZDogJ2dldCcgfCAncG9zdCcgfCAncHV0JyB8ICdwYXRjaCcgfCAnaGVhZCcgfCAnZGVsZXRlJyB8ICdvcHRpb25zJyB8ICd1cGxvYWQnIHwgJ2Rvd25sb2FkJztcbiAgICAgIGRhdGE/OiB7IFtpbmRleDogc3RyaW5nXTogYW55IH07XG4gICAgICBwYXJhbXM/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH07XG4gICAgICBzZXJpYWxpemVyPzogJ2pzb24nIHwgJ3VybGVuY29kZWQnIHwgJ3V0ZjgnIHwgJ211bHRpcGFydCcgfCAncmF3JztcbiAgICAgIHRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICBoZWFkZXJzPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgZmlsZVBhdGg/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIG5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICd0ZXh0JyB8ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbic7XG4gICAgfVxuICApOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

      /***/

    },

    /***/
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js ***!
      \**********************************************************************/

    /*! exports provided: Connection, Network */

    /***/
    function node_modulesIonicNativeNetwork__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Connection", function () {
        return Connection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return Network;
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

      var Connection;

      (function (Connection) {
        Connection[Connection["UNKNOWN"] = 0] = "UNKNOWN";
        Connection[Connection["ETHERNET"] = 1] = "ETHERNET";
        Connection[Connection["WIFI"] = 2] = "WIFI";
        Connection[Connection["CELL_2G"] = 3] = "CELL_2G";
        Connection[Connection["CELL_3G"] = 4] = "CELL_3G";
        Connection[Connection["CELL_4G"] = 5] = "CELL_4G";
        Connection[Connection["CELL"] = 6] = "CELL";
        Connection[Connection["NONE"] = 7] = "NONE";
      })(Connection || (Connection = {}));

      var Network =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Network, _super);

        function Network() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * Constants for possible connection types
           */


          _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none'
          };
          return _this;
        }

        Network.prototype.onChange = function () {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this.onConnect(), _this.onDisconnect());
            }
          }();
        };

        Network.prototype.onDisconnect = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "onDisconnect", {
            "eventObservable": true,
            "event": "offline",
            "element": "document"
          }, arguments);
        };

        Network.prototype.onConnect = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "onConnect", {
            "eventObservable": true,
            "event": "online",
            "element": "document"
          }, arguments);
        };

        Object.defineProperty(Network.prototype, "type", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "type");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "type", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Network.prototype, "downlinkMax", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "downlinkMax");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "downlinkMax", value);
          },
          enumerable: true,
          configurable: true
        });
        Network.pluginName = "Network";
        Network.plugin = "cordova-plugin-network-information";
        Network.pluginRef = "navigator.connection";
        Network.repo = "https://github.com/apache/cordova-plugin-network-information";
        Network.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];

        Network.ɵfac = function Network_Factory(t) {
          return ɵNetwork_BaseFactory(t || Network);
        };

        Network.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: Network,
          factory: function factory(t) {
            return Network.ɵfac(t);
          }
        });

        var ɵNetwork_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Network);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Network, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return Network;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvbmV0d29yay9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx5RkFBcUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJekMsTUFBTSxDQUFOLElBQVksVUFTWDtBQVRELFdBQVksVUFBVTtBQUNyQixJQUFDLGlEQUFXLENBQUE7QUFBQyxJQUNaLG1EQUFRLENBQUE7QUFBQyxJQUNULDJDQUFJLENBQUE7QUFBQyxJQUNMLGlEQUFPLENBQUE7QUFBQyxJQUNSLGlEQUFPLENBQUE7QUFBQyxJQUNSLGlEQUFPLENBQUE7QUFBQyxJQUNSLDJDQUFJLENBQUE7QUFBQyxJQUNMLDJDQUFJLENBQUE7QUFDTixDQUFDLEVBVFcsVUFBVSxLQUFWLFVBQVUsUUFTckI7QUFDRDtBQUcyQixJQWlERSwyQkFBaUI7QUFBQztBQUU5QjtBQUlkLFFBTEQ7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGdCQUFVLEdBQUc7QUFDZixZQUFJLE9BQU8sRUFBRSxTQUFTO0FBQ3RCLFlBQUksUUFBUSxFQUFFLFVBQVU7QUFDeEIsWUFBSSxJQUFJLEVBQUUsTUFBTTtBQUNoQixZQUFJLE9BQU8sRUFBRSxJQUFJO0FBQ2pCLFlBQUksT0FBTyxFQUFFLElBQUk7QUFDakIsWUFBSSxPQUFPLEVBQUUsSUFBSTtBQUNqQixZQUFJLElBQUksRUFBRSxVQUFVO0FBQ3BCLFlBQUksSUFBSSxFQUFFLE1BQU07QUFDaEIsU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUNmLElBZUUsMEJBQVE7QUFBaUI7QUFDTjtBQUE4QixtREFEckI7QUFDOUIsZ0JBQUksT0FBTyxLQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFRWiw4QkFBWTtBQU1vQyxJQU9oRCwyQkFBUztBQUlzRiwwQkEzQzVFLHlCQUFJO0FBQUk7QUFNdkI7QUFHMkI7QUFDN0I7QUFDSjtBQUNFLDBCQU5tQixnQ0FBVztBQUFJO0FBSTFCO0FBSUo7QUFBMEI7QUFDOUI7QUFFRztBQUM4QjtBQUNZO0FBRzFCO0FBSU07SUE3Q2QsT0FBTyx3QkFEbkIsVUFBVSxFQUFFLFFBQ0EsT0FBTzs7Ozs7MEJBQUU7QUFBQyxrQkFwRXZCO0FBQUUsRUFvRTJCLGlCQUFpQjtBQUM3QyxTQURZLE9BQU87QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFDaGVjaywgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XG5cbmV4cG9ydCBlbnVtIENvbm5lY3Rpb24ge1xuICBVTktOT1dOID0gMCxcbiAgRVRIRVJORVQsXG4gIFdJRkksXG4gIENFTExfMkcsXG4gIENFTExfM0csXG4gIENFTExfNEcsXG4gIENFTEwsXG4gIE5PTkUsXG59XG5cbi8qKlxuICogQG5hbWUgTmV0d29ya1xuICogQHByZW1pZXIgbmV0d29yay1pbmZvcm1hdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbi4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW05ldHdvcmsgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3Rpb25cbiAqIGxldCBkaXNjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCduZXR3b3JrIHdhcyBkaXNjb25uZWN0ZWQgOi0oJyk7XG4gKiB9KTtcbiAqXG4gKiAvLyBzdG9wIGRpc2Nvbm5lY3Qgd2F0Y2hcbiAqIGRpc2Nvbm5lY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAqXG4gKlxuICogLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gKiBsZXQgY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICogICBjb25zb2xlLmxvZygnbmV0d29yayBjb25uZWN0ZWQhJyk7XG4gKiAgIC8vIFdlIGp1c3QgZ290IGEgY29ubmVjdGlvbiBidXQgd2UgbmVlZCB0byB3YWl0IGJyaWVmbHlcbiAqICAgIC8vIGJlZm9yZSB3ZSBkZXRlcm1pbmUgdGhlIGNvbm5lY3Rpb24gdHlwZS4gTWlnaHQgbmVlZCB0byB3YWl0LlxuICogICAvLyBwcmlvciB0byBkb2luZyBhbnkgYXBpIHJlcXVlc3RzIGFzIHdlbGwuXG4gKiAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICogICAgIGlmICh0aGlzLm5ldHdvcmsudHlwZSA9PT0gJ3dpZmknKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnd2UgZ290IGEgd2lmaSBjb25uZWN0aW9uLCB3b29ob28hJyk7XG4gKiAgICAgfVxuICogICB9LCAzMDAwKTtcbiAqIH0pO1xuICpcbiAqIC8vIHN0b3AgY29ubmVjdCB3YXRjaFxuICogY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIGBgYFxuICogQGFkdmFuY2VkXG4gKiBUaGUgYHR5cGVgIHByb3BlcnR5IHdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGNvbm5lY3Rpb24gdHlwZXM6IGB1bmtub3duYCwgYGV0aGVybmV0YCwgYHdpZmlgLCBgMmdgLCBgM2dgLCBgNGdgLCBgY2VsbHVsYXJgLCBgbm9uZWBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOZXR3b3JrJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jb25uZWN0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0d29yayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnN0YW50cyBmb3IgcG9zc2libGUgY29ubmVjdGlvbiB0eXBlc1xuICAgKi9cbiAgQ29ubmVjdGlvbiA9IHtcbiAgICBVTktOT1dOOiAndW5rbm93bicsXG4gICAgRVRIRVJORVQ6ICdldGhlcm5ldCcsXG4gICAgV0lGSTogJ3dpZmknLFxuICAgIENFTExfMkc6ICcyZycsXG4gICAgQ0VMTF8zRzogJzNnJyxcbiAgICBDRUxMXzRHOiAnNGcnLFxuICAgIENFTEw6ICdjZWxsdWxhcicsXG4gICAgTk9ORTogJ25vbmUnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25uZWN0aW9uIHR5cGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogRG93bmxpbmsgTWF4IFNwZWVkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkb3dubGlua01heDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gd2F0Y2ggY29ubmVjdGlvbiBjaGFuZ2VzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBtZXJnZSh0aGlzLm9uQ29ubmVjdCgpLCB0aGlzLm9uRGlzY29ubmVjdCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb2ZmbGluZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnb2ZmbGluZScsXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXG4gIH0pXG4gIG9uRGlzY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb25saW5lXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdvbmxpbmUnLFxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxuICB9KVxuICBvbkNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js ***!
      \*********************************************************************/

    /*! exports provided: SQLiteObject, SQLite */

    /***/
    function node_modulesIonicNativeSqlite__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SQLiteObject", function () {
        return SQLiteObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SQLite", function () {
        return SQLite;
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

      var SQLiteObject =
      /** @class */
      function () {
        function SQLiteObject(_objectInstance) {
          this._objectInstance = _objectInstance;
        }

        SQLiteObject.prototype.addTransaction = function (transaction) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "addTransaction", {
            "sync": true
          }, arguments);
        };

        SQLiteObject.prototype.transaction = function (fn) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "transaction", {
            "successIndex": 2,
            "errorIndex": 1
          }, arguments);
        };

        SQLiteObject.prototype.readTransaction = function (fn) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "readTransaction", {}, arguments);
        };

        SQLiteObject.prototype.startNextTransaction = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "startNextTransaction", {
            "sync": true
          }, arguments);
        };

        SQLiteObject.prototype.open = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "open", {}, arguments);
        };

        SQLiteObject.prototype.close = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "close", {}, arguments);
        };

        SQLiteObject.prototype.executeSql = function (statement, params) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "executeSql", {}, arguments);
        };

        SQLiteObject.prototype.sqlBatch = function (sqlStatements) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "sqlBatch", {}, arguments);
        };

        SQLiteObject.prototype.abortallPendingTransactions = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "abortallPendingTransactions", {
            "sync": true
          }, arguments);
        };

        Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertyGet"])(this, "databaseFeatures");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertySet"])(this, "databaseFeatures", value);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(SQLiteObject.prototype, "openDBs", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertyGet"])(this, "openDBs");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertySet"])(this, "openDBs", value);
          },
          enumerable: true,
          configurable: true
        });
        return SQLiteObject;
      }();

      var SQLite =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SQLite, _super);

        function SQLite() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        SQLite.prototype.create = function (config) {
          var _this = this;

          return function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
              return new Promise(function (resolve, reject) {
                sqlitePlugin.openDatabase(config, function (db) {
                  return resolve(new SQLiteObject(db));
                }, reject);
              });
            }
          }();
        };

        SQLite.prototype.echoTest = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "echoTest", {}, arguments);
        };

        SQLite.prototype.selfTest = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "selfTest", {}, arguments);
        };

        SQLite.prototype.deleteDatabase = function (config) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "deleteDatabase", {}, arguments);
        };

        SQLite.pluginName = "SQLite";
        SQLite.pluginRef = "sqlitePlugin";
        SQLite.plugin = "cordova-sqlite-storage";
        SQLite.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
        SQLite.platforms = ["Android", "iOS", "macOS", "Windows"];

        SQLite.ɵfac = function SQLite_Factory(t) {
          return ɵSQLite_BaseFactory(t || SQLite);
        };

        SQLite.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: SQLite,
          factory: function factory(t) {
            return SQLite.ɵfac(t);
          }
        });

        var ɵSQLite_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SQLite);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SQLite, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return SQLite;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc3FsaXRlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDRHQU9OLE1BQU0sb0JBQW9CLENBQUM7O0FBQzVCO0FBR2EsSUFnRFgsc0JBQW1CLGVBQW9CO0FBQUksUUFBeEIsb0JBQWUsR0FBZixlQUFlLENBQUs7QUFBQyxJQUFFLENBQUM7QUFDN0MsSUFPRSxxQ0FBYyxhQUFDLFdBQTRDO0FBTXhELElBSUgsa0NBQVcsYUFBQyxFQUErQjtBQVE1QyxJQUNDLHNDQUFlLGFBQUMsRUFBbUM7QUFLdEMsSUFFYiwyQ0FBb0I7QUFPbkIsSUFERCwyQkFBSTtBQU1KLElBRUEsNEJBQUs7QUFLeUIsSUFJOUIsaUNBQVUsYUFBQyxTQUFpQixFQUFFLE1BQWM7QUFLckIsSUFJdkIsK0JBQVEsYUFBQyxhQUEwQztBQUs3QyxJQUVOLGtEQUEyQjtBQVU1QiwwQkFqRnFCLDBDQUFnQjtBQUFJO0FBRzlCO0FBRytDO0FBR3JEO0FBQ0M7QUFBUSwwQkFUTyxpQ0FBTztBQUFJO0FBS0o7QUFJekI7QUFDSDtBQUVBO0FBQVEsdUJBM0VUO0FBQUU7QUFBTTtBQUF5QjtBQUloQyxJQWtMMkIsMEJBQWlCO0FBQUM7QUFFOUI7QUFFd0I7QUFBTSxJQU01Qyx1QkFBTSxhQUFDLE1BQTRCO0FBQUk7QUFDdEM7QUFBOEIsbURBRDZCO0FBQzlELGdCQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLG9CQUNyQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFDLEVBQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE3QixDQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVGLGdCQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsYUFBRztBQUNIO0FBRU87QUFBTyxJQUlaLHlCQUFRO0FBS2lCLElBSXpCLHlCQUFRO0FBTVAsSUFJRCwrQkFBYyxhQUFDLE1BQTRCO0FBSW5CO0FBQWtDO0FBQXVDO0FBQThDO0FBQTJFO0lBNUMvTSxNQUFNLHdCQURsQixVQUFVLEVBQUUsUUFDQSxNQUFNOzs7OzswQkFBRTtBQUFDLGlCQXRMdEI7QUFBRSxFQXNMMEIsaUJBQWlCO0FBQzVDLFNBRFksTUFBTTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW4sXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgc3FsaXRlUGx1Z2luOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlRGF0YWJhc2VDb25maWcge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZGF0YWJhc2UuIEV4YW1wbGU6ICdteS5kYidcbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIExvY2F0aW9uIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ2RlZmF1bHQnXG4gICAqL1xuICBsb2NhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGlPUyBEYXRhYmFzZSBMb2NhdGlvbi4gRXhhbXBsZTogJ0xpYnJhcnknXG4gICAqL1xuICBpb3NEYXRhYmFzZUxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogc3VwcG9ydCBvcGVuaW5nIHByZS1maWxsZWQgZGF0YWJhc2VzIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL2NvcmRvdmEtc3FsaXRlLWV4dFxuICAgKi9cbiAgY3JlYXRlRnJvbUxvY2F0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogc3VwcG9ydCBlbmNyeXB0ZWQgZGF0YWJhc2VzIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsY2lwaGVyLWFkYXB0ZXJcbiAgICovXG4gIGtleT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGJUcmFuc2FjdGlvbiB7XG4gIGV4ZWN1dGVTcWw6IChzcWw6IGFueSwgdmFsdWVzPzogYW55W10sIHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyb3I/OiBGdW5jdGlvbikgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlVHJhbnNhY3Rpb24gZXh0ZW5kcyBEYlRyYW5zYWN0aW9uIHtcbiAgc3RhcnQ6ICgpID0+IHZvaWQ7XG4gIGFkZFN0YXRlbWVudDogRGJUcmFuc2FjdGlvblsnZXhlY3V0ZVNxbCddO1xuICBoYW5kbGVTdGF0ZW1lbnRTdWNjZXNzOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XG4gIGhhbmRsZVN0YXRlbWVudEZhaWx1cmU6IChoYW5kbGVyOiBGdW5jdGlvbiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZDtcbiAgcnVuOiAoKSA9PiB2b2lkO1xuICBhYm9ydDogKHR4RmFpbHVyZTogYW55KSA9PiB2b2lkO1xuICBmaW5pc2g6ICgpID0+IHZvaWQ7XG4gIGFib3J0RnJvbVE6IChzcWxlcnJvcjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNRTGl0ZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfb2JqZWN0SW5zdGFuY2U6IGFueSkge31cblxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGRhdGFiYXNlRmVhdHVyZXM6IHsgaXNTUUxpdGVQbHVnaW5EYXRhYmFzZTogYm9vbGVhbiB9O1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG9wZW5EQnM6IGFueTtcblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogKHR4OiBTUUxpdGVUcmFuc2FjdGlvbikgPT4gdm9pZCk6IHZvaWQge31cblxuICAvKipcbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAxLFxuICB9KVxuICB0cmFuc2FjdGlvbihmbjogKHR4OiBEYlRyYW5zYWN0aW9uKSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZWFkVHJhbnNhY3Rpb24oZm46ICh0eDogU1FMaXRlVHJhbnNhY3Rpb24pID0+IHZvaWQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0YXJ0TmV4dFRyYW5zYWN0aW9uKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBvcGVuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBTUUwgb24gdGhlIG9wZW5lZCBkYXRhYmFzZS4gTm90ZSwgeW91IG11c3QgY2FsbCBgY3JlYXRlYCBmaXJzdCwgYW5kXG4gICAqIGVuc3VyZSBpdCByZXNvbHZlZCBhbmQgc3VjY2Vzc2Z1bGx5IG9wZW5lZCB0aGUgZGF0YWJhc2UuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNxbChzdGF0ZW1lbnQ6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc3FsU3RhdGVtZW50cyB7c3RyaW5nW10gfCBzdHJpbmdbXVtdIHwgYW55W119XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc3FsQmF0Y2goc3FsU3RhdGVtZW50czogKHN0cmluZyB8IHN0cmluZ1tdIHwgYW55KVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBhYm9ydGFsbFBlbmRpbmdUcmFuc2FjdGlvbnMoKTogdm9pZCB7fVxufVxuXG4vKipcbiAqIEBuYW1lIFNRTGl0ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIFNRTGl0ZSBkYXRhYmFzZXMgb24gdGhlIGRldmljZS5cbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTUUxpdGUsIFNRTGl0ZU9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3FsaXRlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcWxpdGU6IFNRTGl0ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zcWxpdGUuY3JlYXRlKHtcbiAqICAgbmFtZTogJ2RhdGEuZGInLFxuICogICBsb2NhdGlvbjogJ2RlZmF1bHQnXG4gKiB9KVxuICogICAudGhlbigoZGI6IFNRTGl0ZU9iamVjdCkgPT4ge1xuICpcbiAqXG4gKiAgICAgZGIuZXhlY3V0ZVNxbCgnY3JlYXRlIHRhYmxlIGRhbmNlTW92ZXMobmFtZSBWQVJDSEFSKDMyKSknLCBbXSlcbiAqICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdFeGVjdXRlZCBTUUwnKSlcbiAqICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKlxuICogICB9KVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICogYGBgXG4gKlxuICogQGNsYXNzZXNcbiAqIFNRTGl0ZU9iamVjdFxuICogQGludGVyZmFjZXNcbiAqIFNRTGl0ZURhdGFiYXNlQ29uZmlnXG4gKiBTUUxpdGVUcmFuc2FjdGlvblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NRTGl0ZScsXG4gIHBsdWdpblJlZjogJ3NxbGl0ZVBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtc3FsaXRlLXN0b3JhZ2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsaXRlLXN0b3JhZ2UnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTUUxpdGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVuIG9yIGNyZWF0ZSBhIFNRTGl0ZSBkYXRhYmFzZSBmaWxlLlxuICAgKlxuICAgKiBTZWUgdGhlIHBsdWdpbiBkb2NzIGZvciBhbiBleHBsYW5hdGlvbiBvZiBhbGwgb3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsaXRlLXN0b3JhZ2Ujb3BlbmluZy1hLWRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcge1NRTGl0ZURhdGFiYXNlQ29uZmlnfSBkYXRhYmFzZSBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4gUHJvbWlzZTxTUUxpdGVPYmplY3Q+XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlKGNvbmZpZzogU1FMaXRlRGF0YWJhc2VDb25maWcpOiBQcm9taXNlPFNRTGl0ZU9iamVjdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcWxpdGVQbHVnaW4ub3BlbkRhdGFiYXNlKGNvbmZpZywgKGRiOiBhbnkpID0+IHJlc29sdmUobmV3IFNRTGl0ZU9iamVjdChkYikpLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSB0aGF0IGJvdGggdGhlIEphdmFzY3JpcHQgYW5kIG5hdGl2ZSBwYXJ0IG9mIHRoaXMgcGx1Z2luIGFyZSBpbnN0YWxsZWQgaW4geW91ciBhcHBsaWNhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlY2hvVGVzdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IHZlcmlmeSBiYXNpYyBkYXRhYmFzZSBhY2Nlc3Mgb3BlcmF0aW9ucyBpbmNsdWRpbmcgb3BlbmluZyBhIGRhdGFiYXNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbGZUZXN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBkYXRhYmFzZVxuICAgKiBAcGFyYW0gY29uZmlnIHtTUUxpdGVEYXRhYmFzZUNvbmZpZ30gZGF0YWJhc2UgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVEYXRhYmFzZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "./src/app/tab2/obdInfo.js.ts":
    /*!************************************!*\
      !*** ./src/app/tab2/obdInfo.js.ts ***!
      \************************************/

    /*! exports provided: obdinfo */

    /***/
    function srcAppTab2ObdInfoJsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "obdinfo", function () {
        return obdinfo;
      });
      /*
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       *
       * (C) Copyright 2013, TNO
       * Author: Eric Smekens
       */

      /*global console */
      //module.exports = {obdinfo};


      var obdinfo = /*#__PURE__*/function () {
        function obdinfo() {
          _classCallCheck(this, obdinfo);
        }

        _createClass(obdinfo, [{
          key: "checkHex",
          value: function checkHex(n) {
            return /^[0-9A-Fa-f]{1,64}$/.test(n);
          }
        }, {
          key: "Hex2Bin",
          value: function Hex2Bin(n) {
            if (!this.checkHex(n)) {
              return 0;
            }

            return this.zeroFill(parseInt(n, 16).toString(2), 4);
          }
        }, {
          key: "zeroFill",
          value: function zeroFill(number, width) {
            width -= number.toString().length;

            if (width > 0) {
              return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
            }

            return number + ""; // always return a string
          }
        }], [{
          key: "bitDecoder",
          value: function bitDecoder(_byte) {
            return parseInt(_byte, 2);
          }
        }, {
          key: "convertPIDSupported",
          value: function convertPIDSupported(byteA, byteB, byteC, byteD) {
            var hexstring = byteA + byteB + byteC + byteD;
            var pidHex = hexstring.split('');
            var pidStatus = [];
            pidHex.forEach(function (hex) {
              var hexPerm = this.Hex2Bin(hex).split('');
              hexPerm.forEach(function (perm) {
                pidStatus.push(perm === "1" ? true : false);
              });
            });
            return pidStatus;
          }
        }, {
          key: "convertFuelSystem",
          value: function convertFuelSystem(byteA, byteB) {
            var reply = {
              system1: 0,
              system2: 0
            };
            reply.system1 = obdinfo.bitDecoder(byteA);

            if (byteB) {
              reply.system2 = obdinfo.bitDecoder(byteB);
            }

            return reply.system1;
          }
        }, {
          key: "convertDTCCheck",
          value: function convertDTCCheck(byteA, byteB, byteC, byteD) {
            //ByteB, ByteC and ByteD are not read. These bytes are for testing purposes, which is not supported in this module.
            var byteValue, mil, numberOfDTCs, reply;
            byteValue = parseInt(byteA, 16);

            if (byteValue >> 7 === 1) {
              mil = 1;
            } else {
              mil = 0;
            }

            numberOfDTCs = byteValue % 128;
            reply = {};
            reply.numberOfErrors = numberOfDTCs;
            reply.mil = mil;
            return reply;
          }
        }, {
          key: "convertDTCRequest",
          value: function convertDTCRequest(byteA, byteB, byteC, byteD, byteE, byteF) {
            var reply = {
              errors: []
            };
            reply.errors = [];

            var decodeDTCCode = function decodeDTCCode(byte1, byte2) {
              var codeString = "",
                  firstChar; //If 00 00 --> No code.

              if (byte1 === '00' && byte2 === '00') {
                return '-';
              }

              var firstByte = parseInt(byte1, 16);
              var firstCharBytes = firstByte >> 6;

              switch (firstCharBytes) {
                case 0:
                  firstChar = 'P';
                  break;

                case 1:
                  firstChar = 'C';
                  break;

                case 2:
                  firstChar = 'B';
                  break;

                case 3:
                  firstChar = 'U';
                  break;

                default:
                  console.log('Error with DTC');
                  break;
              }

              var secondChar = (firstByte >> 4) % 4;
              var thirdChar = firstByte % 16;
              codeString = firstChar + secondChar + thirdChar + byte2;
              return codeString;
            };

            reply.errors[0] = decodeDTCCode(byteA, byteB);
            reply.errors[1] = decodeDTCCode(byteC, byteD);
            reply.errors[2] = decodeDTCCode(byteE, byteF);
            return reply;
          }
        }, {
          key: "convertLoad",
          value: function convertLoad(_byte2) {
            return parseInt(_byte2, 16) * (100 / 256);
          }
        }, {
          key: "convertTemp",
          value: function convertTemp(_byte3) {
            return parseInt(_byte3, 16) - 40;
          }
        }, {
          key: "convertFuelTrim",
          value: function convertFuelTrim(_byte4) {
            return (parseInt(_byte4, 16) - 128) * (100 / 128);
          }
        }, {
          key: "convertFuelRailPressure",
          value: function convertFuelRailPressure(_byte5) {
            return parseInt(_byte5, 16) * 3;
          }
        }, {
          key: "convertIntakePressure",
          value: function convertIntakePressure(_byte6) {
            return parseInt(_byte6, 16);
          }
        }, {
          key: "convertRPM",
          value: function convertRPM(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) / 4;
          }
        }, {
          key: "convertSpeed",
          value: function convertSpeed(_byte7) {
            return parseInt(_byte7, 16);
          }
        }, {
          key: "convertSparkAdvance",
          value: function convertSparkAdvance(_byte8) {
            return parseInt(_byte8, 16) / 2 - 64;
          }
        }, {
          key: "convertAirFlowRate",
          value: function convertAirFlowRate(byteA, byteB) {
            return (parseInt(byteA, 16) * 256.0 + parseInt(byteB, 16)) / 100;
          }
        }, {
          key: "convertThrottlePos",
          value: function convertThrottlePos(_byte9) {
            return parseInt(_byte9, 16) * 100 / 255;
          }
        }, {
          key: "convertOxygenSensorOutput",
          value: function convertOxygenSensorOutput(_byte10) {
            return parseInt(_byte10, 16) * 0.005;
          }
        }, {
          key: "convertRuntime",
          value: function convertRuntime(byteA, byteB) {
            return parseInt(byteA, 16) * 256.0 + parseInt(byteB, 16);
          }
        }, {
          key: "convertfrpm",
          value: function convertfrpm(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) * 0.079;
          }
        }, {
          key: "convertfrpd",
          value: function convertfrpd(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) * 10;
          }
        }, {
          key: "convertLambda",
          value: function convertLambda(byteA, byteB, byteC, byteD) {
            var reply = {
              ratio: 0,
              voltage: 0
            };
            reply.ratio = (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) * 2 / 65535;
            reply.voltage = (parseInt(byteC, 16) * 256 + parseInt(byteD, 16)) * 8 / 65535;
            return reply;
          }
        }, {
          key: "convertPercentA",
          value: function convertPercentA(_byte11) {
            return parseInt(_byte11, 16) * 100 / 255;
          }
        }, {
          key: "convertPercentB",
          value: function convertPercentB(_byte12) {
            return (parseInt(_byte12, 16) - 128) * 100 / 128;
          }
        }, {
          key: "convertDistanceSinceCodesCleared",
          value: function convertDistanceSinceCodesCleared(byteA, byteB) {
            return parseInt(byteA, 16) * 256 + parseInt(byteB, 16);
          }
        }, {
          key: "convertLambda2",
          value: function convertLambda2(byteA, byteB, byteC, byteD) {
            var reply = {
              ratio: 0,
              voltage: 0
            };
            reply.ratio = (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) / 32768;
            reply.voltage = (parseInt(byteC, 16) * 256 + parseInt(byteD, 16)) / 256 - 128;
            return reply;
          }
        }, {
          key: "convertCatalystTemperature",
          value: function convertCatalystTemperature(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) / 10 - 40;
          }
        }, {
          key: "convertControlModuleVoltage",
          value: function convertControlModuleVoltage(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) / 1000;
          }
        }, {
          key: "convertAbsoluteLoad",
          value: function convertAbsoluteLoad(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) * 100 / 255;
          }
        }, {
          key: "convertLambda3",
          value: function convertLambda3(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) / 32768;
          }
        }, {
          key: "convertAmbientAirTemp",
          value: function convertAmbientAirTemp(_byte13) {
            return parseInt(_byte13, 16) - 40;
          }
        }, {
          key: "convertMinutes",
          value: function convertMinutes(byteA, byteB) {
            return parseInt(byteA, 16) * 256 + parseInt(byteB, 16);
          }
        }, {
          key: "convertExternalTestEquipment",
          value: function convertExternalTestEquipment(byteA, byteB, byteC, byteD) {
            var reply = {
              te1: 0,
              te2: 0,
              te3: 0,
              te4: 0
            };
            reply.te1 = obdinfo.bitDecoder(byteA);
            reply.te2 = obdinfo.bitDecoder(byteB);
            reply.te3 = obdinfo.bitDecoder(byteC);
            reply.te4 = obdinfo.bitDecoder(byteD) * 10;
            return reply;
          }
        }, {
          key: "convertExternalTestEquipment2",
          value: function convertExternalTestEquipment2(byteA, byteB, byteC, byteD) {
            var reply = {
              te1: 0,
              te2: 0,
              te3: 0,
              te4: 0
            };
            reply.te1 = this.bitDecoder(byteA) * 10;
            reply.te2 = this.bitDecoder(byteB);
            reply.te3 = this.bitDecoder(byteC);
            reply.te4 = this.bitDecoder(byteD);
            return reply;
          }
        }, {
          key: "convertAbsoluteVaporPressure",
          value: function convertAbsoluteVaporPressure(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) / 200;
          }
        }, {
          key: "convertSystemVaporPressure",
          value: function convertSystemVaporPressure(byteA, byteB) {
            return parseInt(byteA, 16) * 256 + parseInt(byteB, 16) - 32767;
          }
        }, {
          key: "convertShortOxygenSensorOutput",
          value: function convertShortOxygenSensorOutput(byteA, byteB) {
            var reply = {
              bank1: 0,
              bank2: 0
            };
            reply.bank1 = (parseInt(byteA, 16) - 128) * 100 / 128;
            reply.bank2 = (parseInt(byteB, 16) - 128) * 100 / 128;
            return reply;
          }
        }, {
          key: "convertFuelRailPressureAbs",
          value: function convertFuelRailPressureAbs(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) * 10;
          }
        }, {
          key: "convertFuelInjectionTiming",
          value: function convertFuelInjectionTiming(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16) - 26880) / 128;
          }
        }, {
          key: "convertEngineFuelRate",
          value: function convertEngineFuelRate(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) * 0.05;
          }
        }, {
          key: "convertEngineTorque",
          value: function convertEngineTorque(_byte14) {
            return parseInt(_byte14, 16) - 125;
          }
        }, {
          key: "convertExhastGasTemperature",
          value: function convertExhastGasTemperature(byteA, byteB) {
            return (parseInt(byteA, 16) * 256 + parseInt(byteB, 16)) / 10 - 40;
          } //DTC

        }, {
          key: "notSupported",
          value: function notSupported() {
            console.log("There is no answer. This should not be happening.");
            return;
          } //VIN

        }, {
          key: "convertVIN_count",
          value: function convertVIN_count(_byte15) {
            return _byte15;
          }
        }, {
          key: "convertVIN",
          value: function convertVIN(_byte16) {
            _byte16 = _byte16.split("");
            var tmp = [],
                vin = "";

            for (var i in _byte16) {
              tmp[i] = parseInt(_byte16[i]);
              tmp[i] = parseInt(tmp[i], 16);
              vin += String.fromCharCode(tmp[i]);
            }

            return vin;
          }
        }]);

        return obdinfo;
      }();

      obdinfo.modeRealTime = '01';
      obdinfo.modeRequestDTC = "03";
      obdinfo.modeClearDTC = "04";
      obdinfo.modeVin = "09";
      obdinfo.PIDS = [//Realtime data
      {
        mode: obdinfo.modeRealTime,
        pid: "00",
        bytes: 4,
        name: "pidsupp0",
        description: "PIDs supported 00-20",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful4: obdinfo.convertPIDSupported,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "01",
        bytes: 4,
        name: "dtc_cnt",
        description: "Monitor status since DTCs cleared",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful4: obdinfo.convertDTCCheck,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "02",
        bytes: 2,
        name: "dtcfrzf",
        description: "DTC that caused required freeze frame data storage",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful2: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "03",
        bytes: 2,
        name: "fuelsys",
        description: "Fuel system 1 and 2 status",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful2: obdinfo.convertFuelSystem,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "04",
        bytes: 1,
        name: "load_pct",
        description: "Calculated LOAD Value",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertLoad,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "05",
        bytes: 1,
        name: "temp",
        description: "Engine Coolant Temperature",
        min: -40,
        max: 215,
        unit: "°C",
        convertToUseful: obdinfo.convertTemp,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "06",
        bytes: 1,
        name: "shrtft13",
        description: "Short Term Fuel Trim - Bank 1,3",
        min: -100,
        max: 99.22,
        unit: "%",
        convertToUseful: obdinfo.convertFuelTrim,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "07",
        bytes: 1,
        name: "longft13",
        description: "Long Term Fuel Trim - Bank 1,3",
        min: -100,
        max: 99.22,
        unit: "%",
        convertToUseful: obdinfo.convertFuelTrim,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "08",
        bytes: 1,
        name: "shrtft24",
        description: "Short Term Fuel Trim - Bank 2,4",
        min: -100,
        max: 99.22,
        unit: "%",
        convertToUseful: obdinfo.convertFuelTrim,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "09",
        bytes: 1,
        name: "longft24",
        description: "Long Term Fuel Trim - Bank 2,4",
        min: -100,
        max: 99.22,
        unit: "%",
        convertToUseful: obdinfo.convertFuelTrim,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "0A",
        bytes: 1,
        name: "frp",
        description: "Fuel Pressure",
        min: 0,
        max: 765,
        unit: "kPa",
        convertToUseful: obdinfo.convertFuelRailPressure,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "0B",
        bytes: 1,
        name: "map",
        description: "Intake Manifold Absolute Pressure",
        min: 0,
        max: 255,
        unit: "kPa",
        convertToUseful: obdinfo.convertIntakePressure,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "0C",
        bytes: 2,
        name: "rpm",
        description: "Engine RPM",
        min: 0,
        max: 16383.75,
        unit: "RPM",
        convertToUseful2: obdinfo.convertRPM,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "0D",
        bytes: 1,
        name: "vss",
        description: "Vehicle Speed Sensor",
        min: 0,
        max: 255,
        unit: "km/h",
        convertToUseful: obdinfo.convertSpeed,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "0E",
        bytes: 1,
        name: "sparkadv",
        description: "Ignition Timing Advance for #1 Cylinder",
        min: -64,
        max: 63.5,
        unit: "degrees relative to #1 cylinder",
        convertToUseful: obdinfo.convertSparkAdvance,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "0F",
        bytes: 1,
        name: "iat",
        description: "Intake Air Temperature",
        min: -40,
        max: 215,
        unit: "°C",
        convertToUseful: obdinfo.convertTemp,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "10",
        bytes: 2,
        name: "maf",
        description: "Air Flow Rate from Mass Air Flow Sensor",
        min: 0,
        max: 655.35,
        unit: "g/s",
        convertToUseful2: obdinfo.convertAirFlowRate,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "11",
        bytes: 1,
        name: "throttlepos",
        description: "Absolute Throttle Position",
        min: 1,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertThrottlePos,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "12",
        bytes: 1,
        name: "air_stat",
        description: "Commanded Secondary Air Status",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "13",
        bytes: 1,
        name: "o2sloc",
        description: "Location of Oxygen Sensors",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "14",
        bytes: 2,
        name: "o2s11",
        description: "Bank 1 - Sensor 1/Bank 1 - Sensor 1 Oxygen Sensor Output Voltage / Short Term Fuel Trim",
        min: 0,
        max: 1.275,
        unit: "V",
        convertToUseful2: obdinfo.convertOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "15",
        bytes: 2,
        name: "o2s12",
        description: "Bank 1 - Sensor 2/Bank 1 - Sensor 2 Oxygen Sensor Output Voltage / Short Term Fuel Trim",
        min: 0,
        max: 1.275,
        unit: "V",
        convertToUseful2: obdinfo.convertOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "16",
        bytes: 2,
        name: "o2s13",
        description: "Bank 1 - Sensor 3/Bank 2 - Sensor 1 Oxygen Sensor Output Voltage / Short Term Fuel Trim",
        min: 0,
        max: 1.275,
        unit: "V",
        convertToUseful2: obdinfo.convertOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "17",
        bytes: 2,
        name: "o2s14",
        description: "Bank 1 - Sensor 4/Bank 2 - Sensor 2 Oxygen Sensor Output Voltage / Short Term Fuel Trim",
        min: 0,
        max: 1.275,
        unit: "V",
        convertToUseful2: obdinfo.convertOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "18",
        bytes: 2,
        name: "o2s21",
        description: "Bank 2 - Sensor 1/Bank 3 - Sensor 1 Oxygen Sensor Output Voltage / Short Term Fuel Trim",
        min: 0,
        max: 1.275,
        unit: "V",
        convertToUseful2: obdinfo.convertOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "19",
        bytes: 2,
        name: "o2s22",
        description: "Bank 2 - Sensor 2/Bank 3 - Sensor 2 Oxygen Sensor Output Voltage / Short Term Fuel Trim",
        min: 0,
        max: 1.275,
        unit: "V",
        convertToUseful2: obdinfo.convertOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "1A",
        bytes: 2,
        name: "o2s23",
        description: "Bank 2 - Sensor 3/Bank 4 - Sensor 1 Oxygen Sensor Output Voltage / Short Term Fuel Trim",
        min: 0,
        max: 1.275,
        unit: "V",
        convertToUseful2: obdinfo.convertOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "1B",
        bytes: 2,
        name: "o2s24",
        description: "Bank 2 - Sensor 4/Bank 4 - Sensor 2 Oxygen Sensor Output Voltage / Short Term Fuel Trim",
        min: 0,
        max: 1.275,
        unit: "V",
        convertToUseful2: obdinfo.convertOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "1C",
        bytes: 1,
        name: "obdsup",
        description: "OBD requirements to which vehicle is designed",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "1D",
        bytes: 1,
        name: "o2sloc2",
        description: "Location of oxygen sensors",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "1E",
        bytes: 1,
        name: "pto_stat",
        description: "Auxiliary Input Status",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "1F",
        bytes: 2,
        name: "runtm",
        description: "Time Since Engine Start",
        min: 0,
        max: 65535,
        unit: "sec.",
        convertToUseful2: obdinfo.convertRuntime,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "20",
        bytes: 4,
        name: "piddsupp2",
        description: "PIDs supported 21-40",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful4: obdinfo.convertPIDSupported,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "21",
        bytes: 2,
        name: "mil_dist",
        description: "Distance Travelled While MIL is Activated",
        min: 0,
        max: 65535,
        unit: "km",
        convertToUseful2: obdinfo.convertRuntime,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "22",
        bytes: 2,
        name: "frpm",
        description: "Fuel Rail Pressure relative to manifold vacuum",
        min: 0,
        max: 5177.265,
        unit: "kPa",
        convertToUseful2: obdinfo.convertfrpm,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "23",
        bytes: 2,
        name: "frpd",
        description: "Fuel Rail Pressure (diesel)",
        min: 0,
        max: 655350,
        unit: "kPa",
        convertToUseful2: obdinfo.convertfrpd,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "24",
        bytes: 4,
        name: "lambda11",
        description: "Bank 1 - Sensor 1/Bank 1 - Sensor 1 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Voltage",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "25",
        bytes: 4,
        name: "lambda12",
        description: "Bank 1 - Sensor 2/Bank 1 - Sensor 2 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Voltage",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "26",
        bytes: 4,
        name: "lambda13",
        description: "Bank 1 - Sensor 3 /Bank 2 - Sensor 1(wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Voltage",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "27",
        bytes: 4,
        name: "lambda14",
        description: "Bank 1 - Sensor 4 /Bank 2 - Sensor 2(wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Voltage",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "28",
        bytes: 4,
        name: "lambda21",
        description: "Bank 2 - Sensor 1 /Bank 3 - Sensor 1(wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Voltage",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "29",
        bytes: 4,
        name: "lambda22",
        description: "Bank 2 - Sensor 2 /Bank 3 - Sensor 2(wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Voltage",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "2A",
        bytes: 4,
        name: "lambda23",
        description: "Bank 2 - Sensor 3 /Bank 4 - Sensor 1(wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Voltage",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "2B",
        bytes: 4,
        name: "lambda24",
        description: "Bank 2 - Sensor 4 /Bank 4 - Sensor 2(wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Voltage",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "2C",
        bytes: 1,
        name: "egr_pct",
        description: "Commanded EGR",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "2D",
        bytes: 1,
        name: "egr_err",
        description: "EGR Error",
        min: -100,
        max: 99.22,
        unit: "%",
        convertToUseful: obdinfo.convertPercentB,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "2E",
        bytes: 1,
        name: "evap_pct",
        description: "Commanded Evaporative Purge",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "2F",
        bytes: 1,
        name: "fli",
        description: "Fuel Level Input",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "30",
        bytes: 1,
        name: "warm_ups",
        description: "Number of warm-ups since diagnostic trouble codes cleared",
        min: 0,
        max: 255,
        unit: "",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "31",
        bytes: 2,
        name: "clr_dist",
        description: "Distance since diagnostic trouble codes cleared",
        min: 0,
        max: 65535,
        unit: "km",
        convertToUseful2: obdinfo.convertDistanceSinceCodesCleared,
        isDefault: false
      }, // <-- pending
      {
        mode: obdinfo.modeRealTime,
        pid: "32",
        bytes: 2,
        name: "evap_vp",
        description: "Evap System Vapour Pressure",
        min: -8192,
        max: 8192,
        unit: "Pa",
        convertToUseful2: obdinfo.bitDecoder,
        isDefault: false
      }, // pending -->
      {
        mode: obdinfo.modeRealTime,
        pid: "33",
        bytes: 1,
        name: "baro",
        description: "Barometric Pressure",
        min: 0,
        max: 255,
        unit: "kPa",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "34",
        bytes: 4,
        name: "lambdac11",
        description: "Bank 1 - Sensor 1/Bank 1 - Sensor 1 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Current",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda2,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "35",
        bytes: 4,
        name: "lambdac12",
        description: "Bank 1 - Sensor 2/Bank 1 - Sensor 2 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Current",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda2,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "36",
        bytes: 4,
        name: "lambdac13",
        description: "Bank 1 - Sensor 3/Bank 2 - Sensor 1 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Current",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda2,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "37",
        bytes: 4,
        name: "lambdac14",
        description: "Bank 1 - Sensor 4/Bank 2 - Sensor 2 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Current",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda2,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "38",
        bytes: 4,
        name: "lambdac21",
        description: "Bank 2 - Sensor 1/Bank 3 - Sensor 1 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Current",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda2,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "39",
        bytes: 4,
        name: "lambdac22",
        description: "Bank 2 - Sensor 2/Bank 3 - Sensor 2 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Current",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda2,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "3A",
        bytes: 4,
        name: "lambdac23",
        description: "Bank 2 - Sensor 3/Bank 4 - Sensor 1 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Current",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda2,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "3B",
        bytes: 4,
        name: "lambdac24",
        description: "Bank 2 - Sensor 4/Bank 4 - Sensor 2 (wide range O2S) Oxygen Sensors Equivalence Ratio (lambda) / Current",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful4: obdinfo.convertLambda2,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "3C",
        bytes: 2,
        name: "catemp11",
        description: "Catalyst Temperature Bank 1 /  Sensor 1",
        min: -40,
        max: 6513.5,
        unit: "°C",
        convertToUseful2: obdinfo.convertCatalystTemperature,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "3D",
        bytes: 2,
        name: "catemp21",
        description: "Catalyst Temperature Bank 2 /  Sensor 1",
        min: -40,
        max: 6513.5,
        unit: "°C",
        convertToUseful2: obdinfo.convertCatalystTemperature,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "3E",
        bytes: 2,
        name: "catemp12",
        description: "Catalyst Temperature Bank 1 /  Sensor 2",
        min: -40,
        max: 6513.5,
        unit: "°C",
        convertToUseful2: obdinfo.convertCatalystTemperature,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "3F",
        bytes: 2,
        name: "catemp22",
        description: "Catalyst Temperature Bank 2 /  Sensor 2",
        min: -40,
        max: 6513.5,
        unit: "°C",
        convertToUseful2: obdinfo.convertCatalystTemperature,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "40",
        bytes: 4,
        name: "piddsupp4",
        description: "PIDs supported 41-60",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful4: obdinfo.convertPIDSupported,
        isDefault: false
      }, // <-- pending
      {
        mode: obdinfo.modeRealTime,
        pid: "41",
        bytes: 4,
        name: "monitorstat",
        description: "Monitor status this driving cycle",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, // pending -->
      {
        mode: obdinfo.modeRealTime,
        pid: "42",
        bytes: 2,
        name: "vpwr",
        description: "Control module voltage",
        min: 0,
        max: 65535,
        unit: "V",
        convertToUseful2: obdinfo.convertControlModuleVoltage,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "43",
        bytes: 2,
        name: "load_abs",
        description: "Absolute Load Value",
        min: 0,
        max: 25700,
        unit: "%",
        convertToUseful2: obdinfo.convertAbsoluteLoad,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "44",
        bytes: 2,
        name: "lambda",
        description: "Fuel/air Commanded Equivalence Ratio",
        min: 0,
        max: 2,
        unit: "(ratio)",
        convertToUseful2: obdinfo.convertLambda3,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "45",
        bytes: 1,
        name: "tp_r",
        description: "Relative Throttle Position",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "46",
        bytes: 1,
        name: "aat",
        description: "Ambient air temperature",
        min: -40,
        max: 215,
        unit: "°C",
        convertToUseful: obdinfo.convertAmbientAirTemp,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "47",
        bytes: 1,
        name: "tp_b",
        description: "Absolute Throttle Position B",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "48",
        bytes: 1,
        name: "tp_c",
        description: "Absolute Throttle Position C",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "49",
        bytes: 1,
        name: "app_d",
        description: "Accelerator Pedal Position D",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "4A",
        bytes: 1,
        name: "app_e",
        description: "Accelerator Pedal Position E",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "4B",
        bytes: 1,
        name: "app_f",
        description: "Accelerator Pedal Position F",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "4C",
        bytes: 1,
        name: "tac_pct",
        description: "Commanded Throttle Actuator Control",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "4D",
        bytes: 2,
        name: "mil_time",
        description: "Time run by the engine while MIL activated",
        min: 0,
        max: 65535,
        unit: "minutes",
        convertToUseful2: obdinfo.convertMinutes,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "4E",
        bytes: 2,
        name: "clr_time",
        description: "Time since diagnostic trouble codes cleared",
        min: 0,
        max: 65535,
        unit: "minutes",
        convertToUseful2: obdinfo.convertMinutes,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "4F",
        bytes: 4,
        name: "exttest1",
        description: "External Test Equipment Configuration #1",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful4: obdinfo.convertExternalTestEquipment,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "50",
        bytes: 4,
        name: "exttest2",
        description: "External Test Equipment Configuration #2",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful4: obdinfo.convertExternalTestEquipment2,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "51",
        bytes: 1,
        name: "fuel_type",
        description: "Fuel Type",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "52",
        bytes: 1,
        name: "alch_pct",
        description: "Ethanol fuel %",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "53",
        bytes: 2,
        name: "abs_vp",
        description: "Absolute Evap system Vapor Pressure",
        min: 0,
        max: 327675,
        unit: "kPa",
        convertToUseful2: obdinfo.convertAbsoluteVaporPressure,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "54",
        bytes: 2,
        name: "system_vp",
        description: "Evap system vapor pressure",
        min: -32767,
        max: 32767,
        unit: "Pa",
        convertToUseful2: obdinfo.convertSystemVaporPressure,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "55",
        bytes: 2,
        name: "s02b13",
        description: "Short term secondary oxygen sensor trim bank 1 and bank 3",
        min: -100,
        max: 99.22,
        unit: "%",
        convertToUseful2: obdinfo.convertShortOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "56",
        bytes: 2,
        name: "l02b13",
        description: "Long term secondary oxygen sensor trim bank 1 and bank 3",
        min: -100,
        max: 99.22,
        unit: "%",
        convertToUseful2: obdinfo.convertShortOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "57",
        bytes: 2,
        name: "s02b24",
        description: "Short term secondary oxygen sensor trim bank 2 and bank 4",
        min: -100,
        max: 99.22,
        unit: "%",
        convertToUseful2: obdinfo.convertShortOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "58",
        bytes: 2,
        name: "l02b24",
        description: "Long term secondary oxygen sensor trim bank 2 and bank 4",
        min: -100,
        max: 99.22,
        unit: "%",
        convertToUseful2: obdinfo.convertShortOxygenSensorOutput,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "59",
        bytes: 2,
        name: "frp_abs",
        description: "Fuel rail pressure (absolute)",
        min: 0,
        max: 655350,
        unit: "kPa",
        convertToUseful2: obdinfo.convertFuelRailPressureAbs,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "5A",
        bytes: 1,
        name: "pedalpos",
        description: "Relative accelerator pedal position",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "5B",
        bytes: 1,
        name: "hybridlife",
        description: "Hybrid battery pack remaining life",
        min: 0,
        max: 100,
        unit: "%",
        convertToUseful: obdinfo.convertPercentA,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "5C",
        bytes: 1,
        name: "engineoilt",
        description: "Engine oil temperature",
        min: -40,
        max: 210,
        unit: "°C",
        convertToUseful: obdinfo.convertTemp,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "5D",
        bytes: 2,
        name: "finjtiming",
        description: "Fuel injection timing",
        min: -210.00,
        max: 301.992,
        unit: "°",
        convertToUseful2: obdinfo.convertFuelInjectionTiming,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "5E",
        bytes: 2,
        name: "enginefrate",
        description: "Engine fuel rate",
        min: 0,
        max: 3212.75,
        unit: "L/h",
        convertToUseful2: obdinfo.convertEngineFuelRate,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "5F",
        bytes: 1,
        name: "emmissionreq",
        description: "Emission requirements to which vehicle is designed",
        min: 0,
        max: 0,
        unit: "Bit Encoded",
        convertToUseful: obdinfo.bitDecoder,
        isDefault: false
      }, //added some new pid entries
      {
        mode: obdinfo.modeRealTime,
        pid: "62",
        bytes: 1,
        name: "aet",
        description: "Actual engine - percent torque",
        min: -125,
        max: 125,
        unit: "%",
        convertToUseful: obdinfo.convertEngineTorque,
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "67",
        bytes: 3,
        name: "ect",
        description: "Engine coolant temperature",
        min: -40,
        max: 215,
        unit: "°C",
        isDefault: true
      }, {
        mode: obdinfo.modeRealTime,
        pid: "6B",
        bytes: 5,
        name: "egrt",
        description: "Exhaust gas recirculation temperature",
        min: -40,
        max: 215,
        unit: "°C",
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "6D",
        bytes: 6,
        name: "fpc",
        description: "Fuel pressure control system",
        min: -40,
        max: 215,
        unit: "°C",
        convertToUseful6: obdinfo.notSupported,
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "6E",
        bytes: 5,
        name: "ipct",
        description: "Injection pressure control system",
        min: -40,
        max: 215,
        unit: "°C",
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "73",
        bytes: 5,
        name: "ep",
        description: "Exhaust pressure",
        min: -40,
        max: 215,
        unit: "°C",
        isDefault: false
      }, {
        mode: obdinfo.modeRealTime,
        pid: "78",
        bytes: 2,
        name: "egt",
        description: "Exhaust Gas temperature Bank 1",
        min: -40,
        max: 215,
        unit: "°C",
        convertToUseful2: obdinfo.convertExhastGasTemperature,
        isDefault: false
      }, //DTC's
      {
        mode: obdinfo.modeRequestDTC,
        pid: undefined,
        bytes: 6,
        name: "requestdtc",
        description: "Requested DTC",
        convertToUseful6: obdinfo.convertDTCRequest,
        isDefault: false
      }, {
        mode: obdinfo.modeClearDTC,
        pid: undefined,
        bytes: 0,
        name: "cleardtc",
        description: "Clear Trouble Codes (Clear engine light)",
        convertToUseful: obdinfo.notSupported,
        isDefault: false
      }, //VIN
      {
        mode: obdinfo.modeVin,
        pid: "00",
        bytes: 4,
        name: "vinsupp0",
        description: "Vehicle Identification Number",
        convertToUseful4: obdinfo.bitDecoder,
        isDefault: false
      }, {
        mode: obdinfo.modeVin,
        pid: "01",
        bytes: 1,
        name: "vin_mscout",
        description: "VIN message count",
        convertToUseful: obdinfo.convertVIN_count,
        isDefault: false
      }, {
        mode: obdinfo.modeVin,
        pid: "02",
        bytes: 1,
        name: "vin",
        description: "Vehicle Identification Number",
        convertToUseful: obdinfo.convertVIN,
        isDefault: false
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~tab2-tab2-module~tab3-tab3-module-es5.js.map