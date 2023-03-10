require('dotenv/config');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5500;
const app = express();
const serve = require('./serve');

app.use(express.json());
app.use(serve);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});