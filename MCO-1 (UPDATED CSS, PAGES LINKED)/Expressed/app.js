// app.js
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Other imports and configurations may go here

// Set up Handlebars as the view engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Specify the path to the partials directory
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
  res.render('index');
});
// Register Handlebars partials
const hbs = exphbs.create({ extname: '.hbs' });
hbs.handlebars.registerPartial('review', fs.readFileSync(__dirname + '/views/partials/review.hbs', 'utf8'));
hbs.handlebars.registerPartial('reply', fs.readFileSync(__dirname + '/views/partials/reply.hbs', 'utf8'));
