import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-18c8be34.js';

const getOTPArr = (otpVal) => {
    if (otpVal && (otpVal + '').length > 0 && (otpVal + '').length <= 6) {
        return (otpVal + '').split('');
    }
    return [];
};
const otpHandleKeys = (evt, shd, format, setVal) => {
    const txt = shd.querySelector('#' + evt.target['id']);
    if (!evt.ctrlKey) {
        if ([8, 37, 38].indexOf(evt.keyCode) > -1) {
            setTimeout(() => {
                otpFocusPrev(txt);
            }, 10);
        }
        else if ([39, 40, 46].indexOf(evt.keyCode) > -1) {
            setTimeout(() => {
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
                    setTimeout(() => {
                        otpFocusNext(txt);
                    }, 10);
                }
                else {
                    evt.preventDefault();
                }
            }
        }
        setTimeout(() => {
            setVal();
        }, 50);
    }
    else {
        evt.preventDefault();
    }
};
const otpFocusNext = (txt) => {
    if (txt.nextElementSibling) {
        const ntxt = txt.nextElementSibling;
        ntxt.focus();
    }
};
const otpFocusPrev = (txt) => {
    if (txt.previousElementSibling) {
        const ntxt = txt.previousElementSibling;
        ntxt.focus();
    }
};

const otpInputXCss = ":host{display:block}div.otp-box{display:inline}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input:focus{background:#F6F6F6;outline:2px solid #82a8fa;outline-offset:-3px;border-radius:0.3rem}input.sm{display:inline-block;margin:0 0.3rem;width:1.2rem;height:1.8rem;border:#c3c3c3 1px solid;border-radius:0.2rem;text-align:center;font-size:125%;color:#5a5a5a}input.md{display:inline-block;margin:0 0.3rem;width:1.6rem;height:2.4rem;border:#c3c3c3 1px solid;border-radius:0.2rem;text-align:center;font-size:125%;color:#5a5a5a}input.lg{display:inline-block;margin:0 0.3rem;width:2rem;height:3rem;border:#c3c3c3 1px solid;border-radius:0.2rem;text-align:center;font-size:125%;color:#5a5a5a}";

const OtpInputX = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpComplete = createEvent(this, "otpComplete", 7);
        this.otpChange = createEvent(this, "otpChange", 7);
        this.size = 6;
        this.format = 'number';
        this.otp = '';
        this.styleName = 'md';
        this.txtArr = [];
    }
    valueChanged() {
        this.otpChange.emit(this.otp);
        if (this.otp.length === this.size) {
            this.otpComplete.emit(this.otp);
        }
    }
    componentDidLoad() {
        const shadowEle = this.el.shadowRoot;
        this.txtArr = Array.from(shadowEle.querySelectorAll('input'));
        this.txtArr.forEach((ele) => {
            ele.addEventListener('keydown', (evt) => {
                evt.stopPropagation();
                otpHandleKeys(evt, shadowEle, this.format, () => this.setVal());
            });
        });
    }
    disconnectedCallback() {
        this.txtArr.forEach((ele) => {
            ele.removeEventListener('keydown', () => { });
        });
    }
    getOTP() {
        const arrTxt = new Array(this.size);
        arrTxt.fill('');
        const arrOtp = getOTPArr(this.otp);
        arrOtp.forEach((v, i) => {
            arrTxt[i] = v;
        });
        return arrTxt;
    }
    getVal() {
        const valArr = [];
        this.txtArr.forEach((ele) => {
            valArr.push(ele.value);
        });
        return valArr.join('');
    }
    setVal() {
        this.otp = this.getVal();
    }
    render() {
        return (h(Host, null, h("div", { class: "otp-box" }, this.getOTP().map((val, index) => h("input", { id: 'otp20x' + index, size: 1, type: this.format, value: val, class: this.styleName })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "otp": ["valueChanged"]
    }; }
};
OtpInputX.style = otpInputXCss;

export { OtpInputX as otp_input_x };
