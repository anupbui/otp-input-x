import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['otp-input-x'],
    event: 'otpChange',
    targetAttr: 'otp',
    type: 'text',
  },
  {
    elementSelectors: ['otp-input-x'],
    event: 'otpComplete',
    targetAttr: 'otp',
    type: 'text',
  }];


export const config: Config = {
  namespace: 'otp-input-x',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    angularOutputTarget({
      componentCorePackage: 'otp-input-x',
      directivesProxyFile: './angular-lib/component/otp-input-x.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: 'otp-input-x',
      proxiesFile: './react-lib/component/otp-input-x.tsx',
      includePolyfills: true,
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
