/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'otp-input-x';

import { OtpInputX as IOtpInputX } from 'otp-input-x/dist/custom-elements/components/otp-input-x';
export declare interface OtpInputX extends Components.OtpInputX {}
@ProxyCmp({
  inputs: ['format', 'otp', 'size', 'styleName']
})
@Component({
  selector: 'otp-input-x',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['format', 'otp', 'size', 'styleName'],
  outputs: ['otpComplete', 'otpChange']
})
export class OtpInputX {
  /**  */
  otpComplete!: IOtpInputX['otpComplete'];
  /**  */
  otpChange!: IOtpInputX['otpChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['otpComplete', 'otpChange']);
  }
}
