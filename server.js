const express = require("express");
const path = require("path");
const port = process.env.port || 3001;
const app = express();
const api = require('./routes/apiRoute')
const html = require('./routes/htmlRoute')

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api)
app.use('/', html)


app.listen(port, () => {
  console.log(`Server available at localhost${port}`);
});