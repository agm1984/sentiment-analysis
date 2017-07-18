var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

// Load Sentiment Analysis Library
const sentiment = require('sentiment');

// Load Word Frequency Counter Library
const freq = require('freq');

// Set public assets directory and templating engine
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Main Route
app.get('/', (req, res) => {
  res.render('search');
});

// Results Route
app.get('/results', (req, res) => {
  // Grab value from search.ejs form input with name='search'
  const search = req.query.search;

  // Run Sentiment Analysis
  const sentimentResults = sentiment(search);

  // Run Word Frequency Counter
  const freqResults = freq(sentimentResults.words);

  // Prepare object for Front-end
  const data = {
    sentiment: {
      score: sentimentResults.score,
      comparative: sentimentResults.comparative,
      tokens: sentimentResults.tokens,
      words: sentimentResults.words,
      positive: sentimentResults.positive,
      negative: sentimentResults.negative,
    },
    freq: {
      results: freqResults
    }
  };

 res.render('results', { data: data });
});

// Server Config
var config = {
  port: 1337,
};

// Start Server
app.listen(config.port, () => {
    console.log("Server started on port: " + config.port);
});
