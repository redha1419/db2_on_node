const express = require('express');
const router = new express.Router();
const db2 = require('ibm_db');
require('dotenv').config();
const ibmStr = "DATABASE=" + process.env.DB_NAME + ";HOSTNAME=" + process.env.HOSTNAME + ";PORT=" + process.env.PORT+ ";PROTOCOL=" + process.env.PROTOCOL + ";UID=" + process.env.UID + ";PWD=" + process.env.PASSWD;
console.log(ibmStr);


// for now we have our dummy post, just a connect to db and a quick select statement
router.post('/connect', function(req, res) {	
  db2.open(ibmStr, function (err, connection) {
    if (err){
      console.log(err);
      return;
    }
    connection.query("select 1 from sysibm.sysdummy1", function (err1, rows) {
      if (err1){
        console.log(err1);
      }
      else{
        //console.log(rows); for debugging
        res.json({result: rows});
        res.status(200);
      }
      connection.close(function(err2) {
        if(err2){
	        console.log(err2);
      	}
      });
    });
  });
});

module.exports = router;
