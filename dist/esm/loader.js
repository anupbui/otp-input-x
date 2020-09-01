import { p as promiseResolve, b as bootstrapLazy } from './index-8194f660.js';

/*
 Stencil Client Patch Esm v2.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["otp-input-x",[[1,"otp-input-x",{"size":[2],"format":[1],"otp":[1025],"styleName":[1,"style-name"]}]]]], options);
  });
};

export { defineCustomElements };
