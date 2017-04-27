var express = require('express');
var path = require('path');
var Superhero = require('./models/superhero');
var Villain = require('./models/villain');
var app = express();
var bodyParser = require('body-parser');
var heroRoutes = require('./routes/superheroes');
var villainRoutes = require('./routes/villains');

var mongoose = require('mongoose');

//required to connect to our local database.
//it will look for"/" or create a db called superheroes.
mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/superheroes', heroRoutes)

app.use('/api/villains', villainRoutes)

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
});

var server = app.listen(3001, function () {
  console.log('server is running on 3001');
});

module.exports = app;
