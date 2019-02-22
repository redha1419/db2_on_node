const express = require('express');
const app = express();

//passing routes
const db2Routes = require('./server/routes/db2_connect');

require('dotenv').config();

app.get('/', function(req, res) {
  res.send('Hello World!');
});


app.use('/db2', db2Routes);

app.listen(process.env.DEV_PORT, function() {
  console.info("==> 🌎 Peep port %s.", process.env.DEV_PORT);
})
