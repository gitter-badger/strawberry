'use strict';

const path = require('path');
const sassTrue = require('sass-true');

let sassFile = path.join(__dirname, 'index.scss');

sassTrue.runSass({ file: sassFile }, describe, it);