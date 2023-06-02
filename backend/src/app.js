const express = require('express');
const httpStatus = require('http-status');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Treating Not Found Error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = httpStatus.NOT_FOUND;
    next(error);
});


module.exports = app;
