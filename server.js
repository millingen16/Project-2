'use strict';

// Pkg Dependencies
const express = require('express'),
	exphbs = require('express-handlebars'),
	bodyParser = require('body-parser'),
	path = require('path');

// App Init
const app = express();
const PORT = process.env.PORT || 8080;

// logging (middleware)
app.use(require('./app/middleware/logger'));

// DB Dependency
const db = require('./app/models');

app.set('views', path.join(__dirname, './app/views'));

// Handlebars
app.engine(
	'handlebars',
	exphbs({
		defaultLayout: 'main',
		helpers: require('./config/handlebars-helper').helpers,
	}),
);
app.set('view engine', 'handlebars');

// Body Parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, './app/public')));

// Routes
app.use('/', require('./app/routes'));

// Handle 404
app.use(function(req, res) {
	res.status(404);
	res.render('404');
});

// Handle 500
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});

// Listen...
db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.info(
			`===> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`,
		);
	});
});
