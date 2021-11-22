const express = require('express')
const main = require('./main')

const app = express();

app.use("/", main);

app.listen(3001, () => console.log('listening on port 3001'));