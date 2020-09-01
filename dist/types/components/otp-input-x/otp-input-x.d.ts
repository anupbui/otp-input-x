import { EventEmitter } from '../../stencil-public-runtime';
export declare class OtpInputX {
    size: number;
    format: 'number' | 'text';
    otp: string;
    styleName: 'sm' | 'md' | 'lg';
    otpComplete: EventEmitter<string>;
    otpChange: EventEmitter<string>;
    el: HTMLElement;
    private txtArr;
    protected valueChanged(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private getOTP;
    private getVal;
    private setVal;
    render(): any;
}
