'use strict';

const path = require('path');
const sassTrue = require('sass-true');

let sassFile = path.join(__dirname, '_index.scss');

sassTrue.runSass(
    {
        file: sassFile,
        includePaths: [path.join(__dirname, '../src')]
    },
    describe,
    it
);