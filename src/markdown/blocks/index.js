const hr = require('./hr');
const heading = require('./heading');
const paragraph = require('./paragraph');
const codeBlock = require('./code');
const blockquote = require('./blockquote');
const unstyled = require('./unstyled');
const footnote = require('./footnote');
const table = require('./table');
const list = require('./list');
const definition = require('./definition');
const math = require('./math');

module.exports = [
    definition,
    table,
    list,
    footnote,
    blockquote,
    codeBlock,
    heading,
    hr,
    math,
    paragraph,
    unstyled
];
