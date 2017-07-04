var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('scratch'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

let port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
