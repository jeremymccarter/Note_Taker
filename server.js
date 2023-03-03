// calling necessary packages
const express = require("express");
const path = require("path");
// establishing port
const port = process.env.PORT || 3001;
const app = express();
const api = require('./routes/apiRoute')
const html = require('./routes/htmlRoute')

 // uses express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));
// sets up express to use data parser, middlware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api)
app.use('/', html)

// listens for port to start server
app.listen(port, () => {
  console.log(`Server available at localhost${port}`);
});