#! /usr/bin/env node
/* eslint-disable no-console */

const { transform } = require('./helper');
const { State } = require('../src/');
const markdown = require('../src/markdown');

transform(document => {
    const state = State.create(markdown);
    const output = state.serializeDocument(document);

    console.log(output);
});
