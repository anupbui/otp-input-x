import { newE2EPage } from '@stencil/core/testing';

describe('otp-input-x', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<otp-input-x></otp-input-x>');

    const element = await page.find('otp-input-x');
    expect(element).toHaveClass('hydrated');
  });
});
