import { __decorate } from "tslib";
/**
 * @fileoverview added by tsickle
 * Generated from: component/otp-input-x.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* eslint-disable */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { fromEvent } from "rxjs";
import * as i0 from "@angular/core";
const _c0 = ["*"];
/** @type {?} */
export const proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
(Cmp, inputs) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() {
                return this.el[item];
            },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) {
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                () => (this.el[item] = val)));
            }
        });
    }));
});
/** @type {?} */
export const proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
(Cmp, methods) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    methodName => {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => this.el[methodName].apply(this.el, args)));
        });
    }));
});
/** @type {?} */
export const proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
(instance, el, events) => {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => instance[eventName] = fromEvent(el, eventName)));
});
/**
 * @param {?} opts
 * @return {?}
 */
function ProxyCmp(opts) {
    /** @type {?} */
    const decorator = (/**
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
let OtpInputX = /** @class */ (() => {
    let OtpInputX = class OtpInputX {
        /**
         * @param {?} c
         * @param {?} r
         * @param {?} z
         */
        constructor(c, r, z) {
            this.z = z;
            c.detach();
            this.el = r.nativeElement;
            proxyOutputs(this, this.el, ["otpComplete", "otpChange"]);
        }
    };
    /** @nocollapse */ OtpInputX.ɵfac = function OtpInputX_Factory(t) { return new (t || OtpInputX)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    /** @nocollapse */ OtpInputX.ɵcmp = i0.ɵɵdefineComponent({ type: OtpInputX, selectors: [["otp-input-x"]], inputs: { format: "format", otp: "otp", size: "size", styleName: "styleName" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function OtpInputX_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    OtpInputX = __decorate([
        ProxyCmp({ inputs: ["format", "otp", "size", "styleName"] })
    ], OtpInputX);
    return OtpInputX;
})();
export { OtpInputX };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OtpInputX, [{
        type: Component,
        args: [{ selector: "otp-input-x", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["format", "otp", "size", "styleName"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /** @type {?} */
    OtpInputX.prototype.otpComplete;
    /** @type {?} */
    OtpInputX.prototype.otpChange;
    /**
     * @type {?}
     * @protected
     */
    OtpInputX.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    OtpInputX.prototype.z;
}
