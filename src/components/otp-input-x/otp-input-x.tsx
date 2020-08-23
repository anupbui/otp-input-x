import { Component, Host, h, Prop, EventEmitter, Event, Element, Watch } from '@stencil/core';
import { getOTPArr, otpHandleKeys } from '../../utils/utils';

@Component({
  tag: 'otp-input-x',
  styleUrl: 'otp-input-x.css',
  shadow: true,
})
export class OtpInputX {

  @Prop() size: number = 6;
  @Prop() format: 'number' | 'text' = 'number';
  @Prop({
    mutable: true
  }) otp: string = '';
  @Prop() styleName: 'sm' | 'md' | 'lg' = 'md';

  @Event() otpComplete: EventEmitter<string>;

  @Event() otpChange: EventEmitter<string>;

  @Element() el: HTMLElement;

  private txtArr: HTMLInputElement[] = [];

  @Watch('otp')
  protected valueChanged() {
    this.otpChange.emit(this.otp);
    if (this.otp.length === this.size) {
      this.otpComplete.emit(this.otp);
    }
  }

  componentDidLoad() {
    const shadowEle = this.el.shadowRoot;
    this.txtArr = Array.from(shadowEle.querySelectorAll('input'));
    this.txtArr.forEach((ele) => {
      ele.addEventListener('keydown', (evt: KeyboardEvent) => {
        evt.stopPropagation();
        otpHandleKeys(evt, shadowEle, this.format, () => this.setVal());
      })
    });
  }

  disconnectedCallback() {
    this.txtArr.forEach((ele) => {
      ele.removeEventListener('keydown', () => { });
    })
  }

  private getOTP(): string[] {
    const arrTxt = new Array(this.size);
    arrTxt.fill('');
    const arrOtp = getOTPArr(this.otp);
    arrOtp.forEach((v: string, i: number) => {
      arrTxt[i] = v;
    });
    return arrTxt;
  }

  private getVal() {
    const valArr: string[] = [];
    this.txtArr.forEach((ele) => {
      valArr.push(ele.value);
    });
    return valArr.join('');
  }

  private setVal() {
    this.otp = this.getVal();
  }

  render() {
    return (
      <Host>
        <div class="otp-box">
          {this.getOTP().map((val, index) =>
            <input id={'otp20x' + index} size={1} type={this.format} value={val} class={this.styleName} />
          )}
        </div>
      </Host>
    );
  }

}
