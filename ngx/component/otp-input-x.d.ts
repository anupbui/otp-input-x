import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from 'otp-input-x';
import { OtpInputX as IOtpInputX } from 'otp-input-x/dist/types/component/otp-input-x';
export declare interface OtpInputX extends Components.OtpInputX {
}
export declare class OtpInputX {
    protected z: NgZone;
    /**  */
    otpComplete: IOtpInputX['otpComplete'];
    /**  */
    otpChange: IOtpInputX['otpChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
