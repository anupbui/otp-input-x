import { __decorate } from 'tslib';
import { ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵɵdirectiveInject, ChangeDetectorRef, ElementRef, NgZone, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElements } from 'otp-input-x/loader';

const _c0 = ["*"];
/** @type {?} */
const proxyInputs = (/**
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
const proxyMethods = (/**
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
const proxyOutputs = (/**
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
    /** @nocollapse */ OtpInputX.ɵfac = function OtpInputX_Factory(t) { return new (t || OtpInputX)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
    /** @nocollapse */ OtpInputX.ɵcmp = ɵɵdefineComponent({ type: OtpInputX, selectors: [["otp-input-x"]], inputs: { format: "format", otp: "otp", size: "size", styleName: "styleName" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function OtpInputX_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    OtpInputX = __decorate([
        ProxyCmp({ inputs: ["format", "otp", "size", "styleName"] })
    ], OtpInputX);
    return OtpInputX;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: otp-input-x-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
let OtpInputXModule = /** @class */ (() => {
    class OtpInputXModule {
    }
    /** @nocollapse */ OtpInputXModule.ɵmod = ɵɵdefineNgModule({ type: OtpInputXModule });
    /** @nocollapse */ OtpInputXModule.ɵinj = ɵɵdefineInjector({ factory: function OtpInputXModule_Factory(t) { return new (t || OtpInputXModule)(); }, providers: [], imports: [[]] });
    return OtpInputXModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OtpInputXModule, { declarations: [OtpInputX], exports: [OtpInputX] }); })();

export { OtpInputX, OtpInputXModule, proxyInputs, proxyMethods, proxyOutputs };
