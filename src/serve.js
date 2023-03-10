const express = require('express');
const app = express();
const routers = require('./routers');
const httpStatus = require('http-status');
app.use(routers.openaiRouter);
app.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).send("404 NOT FOUND");
});


module.exports = app;