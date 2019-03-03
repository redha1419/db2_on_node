const express  = require('express');
var bodyParser = require("body-parser");
const app      = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passing routes
const db2Routes  = require('./server/routes/db2_connect');
const userRoutes = require('./server/routes/users');

require('dotenv').config();

app.get('/', function(req, res) {
  res.send('Hello World!');
});


app.use('/db2', db2Routes);
app.use('/users', userRoutes);

app.listen(process.env.DEV_PORT, function() {
  console.info("==> 🌎 Peep port %s.", process.env.DEV_PORT);
})
