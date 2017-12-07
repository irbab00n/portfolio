const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*

  ROUTES GO HERE

*/

app.get('/', (req, res) => {
  console.log('root of app reached');
});

module.exports = app;