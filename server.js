// server.js
// where your node app starts

/*
 * Init and watch the build for our example app
 */
const Bundler = require('parcel-bundler');
const Path = require('path');

const entries = Path.join(__dirname, '/src/index.html');
(async function() {
  const bundler = new Bundler(entries, {});
  const bundle = await bundler.bundle();
})();

/*
 * Run the local server
 */

// init project
const express = require('express');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('dist'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

// listen for requests :)
const listener = app.listen(9001, function() {
  console.log(`⚙  SUCCESS! Go to http://localhost:${listener.address().port} to view the example site.`);
});
