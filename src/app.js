require('dotenv/config');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5500;
const app = express();
const serve = require('./serve');

app.use(cors());
app.use(express.json());
app.use(serve);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});