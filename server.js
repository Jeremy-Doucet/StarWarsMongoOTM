"use strict";
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 3000;
let mongoose = require('mongoose');
require('./models/faction');
require('./models/character');
mongoose.connect('mongodb://localhost/star-wars');

app.set('views', './views');
app.engine('.html', require('ejs').renderFile);
app.use(express.static('./public'));
app.use(express.static('./bower_components'));
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let factionRoutes = require('./routes/factionRoutes');
let characterRoutes = require('./routes/characterRoutes');

app.get('/', function(req, res) {
	res.render('index');
});

app.use('/api/v1/factions', factionRoutes);
app.use('/api/v1/characters', characterRoutes);

module.exports = app.listen(port, () => {
	console.log('Example app listening at http://localhost:' + port);
});
