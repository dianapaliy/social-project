const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport')
const session = require('express-session')
const exphbs = require('express-handlebars')

const app = express();
const port = process.env.PORT || 8080;

//For BodyParser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './server/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => res.json({message: 'Its working'}));

//Models
const models = require('./server/models');

//Routes
const authRoute = require('./server/routes/auth')(app, passport);

//load passport strategies
require('./server/config/passport/passport')(passport, models.User);

//Sync Database
models.sequelize.sync().then(() => {
    console.log('Nice! Database looks fine')
}).catch((err) => {
    console.log(err, "Something went wrong with the Database Update!")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

module.exports = app;