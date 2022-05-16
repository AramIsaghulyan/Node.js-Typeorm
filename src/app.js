const express = require('express');
const bookRouter = require('./controller/bookController');

const app = express();

app.use(express.json());
app.use('/book',bookRouter);

module.exports = app;