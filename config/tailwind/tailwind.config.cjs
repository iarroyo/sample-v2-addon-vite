'use strict';

const path = require('path');

const addonRoot = path.join(__dirname, '../../');
const addonEntry = path.join(addonRoot, 'src');
const relevantFilesGlob = '**/*.{html,js,ts,hbs,gjs,gts}';

module.exports = {
  content: [path.join(addonEntry, relevantFilesGlob)],
  important: '#sample-v2-addon-vite', //this is used to increase the specificity of tailwind classes, on tailwind v4 we will use the layouts feature
  theme: {
    extend: {},
  },
  plugins: [],
};
