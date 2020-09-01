'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6eda5ad6.js');

/*
 Stencil Client Patch Esm v2.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["otp-input-x.cjs",[[1,"otp-input-x",{"size":[2],"format":[1],"otp":[1025],"styleName":[1,"style-name"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
