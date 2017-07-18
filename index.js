const sentiment = require('sentiment');

const test = require('./test');

const r1 = sentiment(test);

console.log(r1);
