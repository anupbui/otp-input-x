import { newSpecPage } from '@stencil/core/testing';
import { OtpInputX } from '../otp-input-x';

describe('otp-input-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OtpInputX],
      html: `<otp-input-x></otp-input-x>`,
    });
    expect(page.root).toEqualHtml(`
      <otp-input-x>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </otp-input-x>
    `);
  });
});
