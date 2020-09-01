import { getOTPArr, otpHandleKeys } from './utils';

describe('getOTPArr', () => {
  it('returns empty array for no names defined', () => {
    expect(getOTPArr('')).toEqual([]);
  });

  it('returns int array for no names defined', () => {
    expect(getOTPArr('123')).toEqual([,2,3]);
  });

  it('otpHandleKeys number', () => {
    expect(otpHandleKeys(new KeyboardEvent('keypress'), new ShadowRoot(), 'text', () => {})).toEqual('Joseph Quincy Publique');
  });

  it('otpHandleKeys ctrl V', () => {
    expect(otpHandleKeys(new KeyboardEvent('keypress'), new ShadowRoot(), 'text', () => {})).toEqual('Joseph Quincy Publique');
  });
});
