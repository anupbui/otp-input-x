import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from "@angular/core";
export declare const proxyInputs: (Cmp: any, inputs: string[]) => void;
export declare const proxyMethods: (Cmp: any, methods: string[]) => void;
export declare const proxyOutputs: (instance: any, el: any, events: string[]) => void;
import { Components } from "otp-input-x";
export declare interface OtpInputX extends Components.OtpInputX {
}
export declare class OtpInputX {
    protected z: NgZone;
    otpComplete: EventEmitter<CustomEvent>;
    otpChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
