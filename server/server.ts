import express = require('express');
import path = require('path');

// Create a new express app instance
const app: express.Application = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, 'src')))
app.get('/', function(req, res) {
  res.sendFile('/index.html');
});
/**
 * Static files serving
 */
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
  console.log(`App is listening at http://localhost:${port}!`);
});