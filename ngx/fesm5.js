import { __decorate } from 'tslib';
import { ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵɵdirectiveInject, ChangeDetectorRef, ElementRef, NgZone, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from 'otp-input-x/loader';

var _c0 = ["*"];
/** @type {?} */
var proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function (Cmp, inputs) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.defineProperty(Prototype, item, {
            get: /**
             * @return {?}
             */
            function () {
                return this.el[item];
            },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return (_this.el[item] = val); }));
            }
        });
    }));
});
/** @type {?} */
var proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function (Cmp, methods) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.el[methodName].apply(_this.el, args); }));
        });
    }));
});
/** @type {?} */
var proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function (instance, el, events) {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return instance[eventName] = fromEvent(el, eventName); }));
});
/**
 * @param {?} opts
 * @return {?}
 */
function ProxyCmp(opts) {
    /** @type {?} */
    var decorator = (/**
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    });
    return decorator;
}
var OtpInputX = /** @class */ (function () {
    function OtpInputX(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["otpComplete", "otpChange"]);
    }
    /** @nocollapse */ OtpInputX.ɵfac = function OtpInputX_Factory(t) { return new (t || OtpInputX)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
    /** @nocollapse */ OtpInputX.ɵcmp = ɵɵdefineComponent({ type: OtpInputX, selectors: [["otp-input-x"]], inputs: { format: "format", otp: "otp", size: "size", styleName: "styleName" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function OtpInputX_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    OtpInputX = __decorate([
        ProxyCmp({ inputs: ["format", "otp", "size", "styleName"] })
    ], OtpInputX);
    return OtpInputX;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: otp-input-x-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
var OtpInputXModule = /** @class */ (function () {
    function OtpInputXModule() {
    }
    /** @nocollapse */ OtpInputXModule.ɵmod = ɵɵdefineNgModule({ type: OtpInputXModule });
    /** @nocollapse */ OtpInputXModule.ɵinj = ɵɵdefineInjector({ factory: function OtpInputXModule_Factory(t) { return new (t || OtpInputXModule)(); }, providers: [], imports: [[]] });
    return OtpInputXModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OtpInputXModule, { declarations: [OtpInputX], exports: [OtpInputX] }); })();

export { OtpInputX, OtpInputXModule, proxyInputs, proxyMethods, proxyOutputs };
