'use strict';
//this file is not included in the build.
//use it for messing around.
const nlp = require('./src/index');
const corpus = require('nlp-corpus');
// const nlp = require('./builds/nlp_compromise');

// require('./src/logger').enable();
const context = {
  lexicon: {
    'donkey kong': 'Person'
  }
};
// let r = nlp(corpus.parsed.sotu().obama_2012);
// r.phrases();

// let r = nlp('Air France is cool');
let r = nlp('soccer games').match('game');
// let r = nlp('guinea-bissau');
// let r = nlp('  ');
// let r = nlp('google inc');
console.log(r.list[0]);
r.check();
