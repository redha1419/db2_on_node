const express = require('express');
const router = new express.Router();
const db2 = require('ibm_db');
require('dotenv').config();
const ibmStr = "DATABASE=" + process.env.DB_NAME + ";HOSTNAME=" + process.env.HOSTNAME + ";PORT=" + process.env.PORT+ ";PROTOCOL=" + process.env.PROTOCOL + ";UID=" + process.env.UID + ";PWD=" + process.env.PASSWD;


router.post('/add', function(req, res) {	
  db2.open(ibmStr, function (err, connection) {
    if (err){
      console.log(err);
      return;
    }

    const insert_stmt = "INSERT INTO users (first_name, last_name, email)";

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;

    const insert_vals = " VALUES ('" + first_name + "','" + last_name + "','" + email + "');"

    connection.query(insert_stmt + insert_vals, function (err1, rows) {
      if (err1){
        res.json({result: err1});
        res.status(400);
      }
      else{
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

router.post('/remove', function(req, res) {	
    db2.open(ibmStr, function (err, connection) {
      if (err){
        console.log(err);
        return;
      }

      const delete_stmt = "DELETE FROM users";
  
      const email = req.body.email;
  
      const delete_vals = " WHERE EMAIL = '" + email + "';";
  
      connection.query(delete_stmt + delete_vals, function (err1, rows) {
        if (err1){
          res.json({result: err1});
          res.status(400);
        }
        else{
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

router.post('/edit', function(req, res) {	
    db2.open(ibmStr, function (err, connection) {
      if (err){
        console.log(err);
        return;
      }
      connection.query("", function (err1, rows) {
        if (err1){
          console.log(err1);
        }
        else{
          console.log(rows); // for debugging
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
