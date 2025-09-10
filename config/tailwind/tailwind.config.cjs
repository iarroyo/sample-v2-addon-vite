'use strict';

const path = require('path');

const addonRoot = path.join(__dirname, '../../');
const addonEntry = path.join(addonRoot, 'src');
const relevantFilesGlob = '**/*.{html,js,ts,hbs,gjs,gts}';

const demoEntry = path.join(addonRoot, 'demo-app');
const demoContent = path.join(demoEntry, '**/*.{html,js,ts,hbs,gjs,gts}');

module.exports = {
  content: [path.join(addonEntry, relevantFilesGlob), demoContent],
  theme: {
    extend: {},
  },
  plugins: [],
};
