import { b as bootstrapLazy } from './index-18c8be34.js';
import { a as patchEsm } from './patch-53acd1a0.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["otp-input-x", [[1, "otp-input-x", { "size": [2], "format": [1], "otp": [1025], "styleName": [1, "style-name"] }]]]], options);
    });
};
export { defineCustomElements };
