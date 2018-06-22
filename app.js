const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => res.json({message: 'Its working'}));

app.use('/api', router);

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

module.exports = app;