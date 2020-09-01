import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-18c8be34.js';
var getOTPArr = function (otpVal) {
    if (otpVal && (otpVal + '').length > 0 && (otpVal + '').length <= 6) {
        return (otpVal + '').split('');
    }
    return [];
};
var otpHandleKeys = function (evt, shd, format, setVal) {
    var txt = shd.querySelector('#' + evt.target['id']);
    if (!evt.ctrlKey) {
        if ([8, 37, 38].indexOf(evt.keyCode) > -1) {
            setTimeout(function () {
                otpFocusPrev(txt);
            }, 10);
        }
        else if ([39, 40, 46].indexOf(evt.keyCode) > -1) {
            setTimeout(function () {
                otpFocusNext(txt);
            }, 10);
        }
        else if ((evt.keyCode > 47 && evt.keyCode < 58) || (evt.keyCode > 64 && evt.keyCode < 91)) {
            if (txt.value && txt.value.length === 1) {
                if (format === 'number' && evt.key.match(/^[0-9]{1}/)) {
                    txt.value = evt.key;
                }
                else if (format === 'text' && evt.key.match(/^[A-Za-z0-9]{1}/)) {
                    txt.value = evt.key;
                }
                evt.preventDefault();
                otpFocusNext(txt);
                return false;
            }
            else {
                if ((format === 'number' && evt.key.match(/^[0-9]{1}/)) || (format === 'text' && evt.key.match(/^[A-Za-z0-9]{1}/))) {
                    setTimeout(function () {
                        otpFocusNext(txt);
                    }, 10);
                }
                else {
                    evt.preventDefault();
                }
            }
        }
        setTimeout(function () {
            setVal();
        }, 50);
    }
    else {
        evt.preventDefault();
    }
};
var otpFocusNext = function (txt) {
    if (txt.nextElementSibling) {
        var ntxt = txt.nextElementSibling;
        ntxt.focus();
    }
};
var otpFocusPrev = function (txt) {
    if (txt.previousElementSibling) {
        var ntxt = txt.previousElementSibling;
        ntxt.focus();
    }
};
var otpInputXCss = ":host{display:block}div.otp-box{display:inline}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input:focus{background:#F6F6F6;outline:2px solid #82a8fa;outline-offset:-3px;border-radius:0.3rem}input.sm{display:inline-block;margin:0 0.3rem;width:1.2rem;height:1.8rem;border:#c3c3c3 1px solid;border-radius:0.2rem;text-align:center;font-size:125%;color:#5a5a5a}input.md{display:inline-block;margin:0 0.3rem;width:1.6rem;height:2.4rem;border:#c3c3c3 1px solid;border-radius:0.2rem;text-align:center;font-size:125%;color:#5a5a5a}input.lg{display:inline-block;margin:0 0.3rem;width:2rem;height:3rem;border:#c3c3c3 1px solid;border-radius:0.2rem;text-align:center;font-size:125%;color:#5a5a5a}";
var OtpInputX = /** @class */ (function () {
    function OtpInputX(hostRef) {
        registerInstance(this, hostRef);
        this.otpComplete = createEvent(this, "otpComplete", 7);
        this.otpChange = createEvent(this, "otpChange", 7);
        this.size = 6;
        this.format = 'number';
        this.otp = '';
        this.styleName = 'md';
        this.txtArr = [];
    }
    OtpInputX.prototype.valueChanged = function () {
        this.otpChange.emit(this.otp);
        if (this.otp.length === this.size) {
            this.otpComplete.emit(this.otp);
        }
    };
    OtpInputX.prototype.componentDidLoad = function () {
        var _this = this;
        var shadowEle = this.el.shadowRoot;
        this.txtArr = Array.from(shadowEle.querySelectorAll('input'));
        this.txtArr.forEach(function (ele) {
            ele.addEventListener('keydown', function (evt) {
                evt.stopPropagation();
                otpHandleKeys(evt, shadowEle, _this.format, function () { return _this.setVal(); });
            });
        });
    };
    OtpInputX.prototype.disconnectedCallback = function () {
        this.txtArr.forEach(function (ele) {
            ele.removeEventListener('keydown', function () { });
        });
    };
    OtpInputX.prototype.getOTP = function () {
        var arrTxt = new Array(this.size);
        arrTxt.fill('');
        var arrOtp = getOTPArr(this.otp);
        arrOtp.forEach(function (v, i) {
            arrTxt[i] = v;
        });
        return arrTxt;
    };
    OtpInputX.prototype.getVal = function () {
        var valArr = [];
        this.txtArr.forEach(function (ele) {
            valArr.push(ele.value);
        });
        return valArr.join('');
    };
    OtpInputX.prototype.setVal = function () {
        this.otp = this.getVal();
    };
    OtpInputX.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: "otp-box" }, this.getOTP().map(function (val, index) { return h("input", { id: 'otp20x' + index, size: 1, type: _this.format, value: val, class: _this.styleName }); }))));
    };
    Object.defineProperty(OtpInputX.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OtpInputX, "watchers", {
        get: function () {
            return {
                "otp": ["valueChanged"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return OtpInputX;
}());
OtpInputX.style = otpInputXCss;
export { OtpInputX as otp_input_x };
