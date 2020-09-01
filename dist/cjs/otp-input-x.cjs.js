'use strict';

const index = require('./index-278e9327.js');
const patch = require('./patch-c058efb4.js');

patch.patchBrowser().then(options => {
  return index.bootstrapLazy([["otp-input-x.cjs",[[1,"otp-input-x",{"size":[2],"format":[1],"otp":[1025],"styleName":[1,"style-name"]}]]]], options);
});
