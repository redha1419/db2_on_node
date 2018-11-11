const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', function(req, res) {
  res.send('Hello World!');
})

app.listen(process.env.DEV_PORT, function() {
  console.info("==> 🌎 Peep port %s.", process.env.DEV_PORT);
})
