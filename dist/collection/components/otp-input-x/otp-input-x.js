import { Component, Host, h, Prop, Event, Element, Watch } from '@stencil/core';
import { getOTPArr, otpHandleKeys } from './utils/utils';
export class OtpInputX {
    constructor() {
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
        return (h(Host, null,
            h("div", { class: "otp-box" }, this.getOTP().map((val, index) => h("input", { id: 'otp20x' + index, size: 1, type: this.format, value: val, class: this.styleName })))));
    }
    static get is() { return "otp-input-x"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["otp-input-x.css"]
    }; }
    static get styleUrls() { return {
        "$": ["otp-input-x.css"]
    }; }
    static get properties() { return {
        "size": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "6"
        },
        "format": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'number' | 'text'",
                "resolved": "\"number\" | \"text\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "format",
            "reflect": false,
            "defaultValue": "'number'"
        },
        "otp": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "otp",
            "reflect": false,
            "defaultValue": "''"
        },
        "styleName": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'sm' | 'md' | 'lg'",
                "resolved": "\"lg\" | \"md\" | \"sm\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "style-name",
            "reflect": false,
            "defaultValue": "'md'"
        }
    }; }
    static get events() { return [{
            "method": "otpComplete",
            "name": "otpComplete",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }, {
            "method": "otpChange",
            "name": "otpChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "otp",
            "methodName": "valueChanged"
        }]; }
}
