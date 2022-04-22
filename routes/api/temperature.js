var express = require('express');

var router = express.Router();

var dbConn = require('../../config/db');

//INSERT
// @routes POST api/temperature/add
// @desc Insert Data to Database
// @access Pubic
router.post('/add', (req, res) => {
  // get the input from the user trough request (req)

  console.log(req.body);

  var temperature = req.body.temperature;

  var deviceId = req.body.deviceId;

  var date = req.body.date;

  // connect to mysql database and perform INSERT Query

  sqlQuery = `INSERT INTO temp_tb (temperature,deviceId,date) VALUES ('${temperature}','${deviceId}','${date}')`;

  dbConn.query(sqlQuery, function (error, results, fields) {
    if (error) throw error;

    res.status(200).json(results);
  });
});

// SELECT or (VIEW)
// @routes GET api/temperature/view

// @desc View Data from the Database

// @access Pubic

router.get('/view', (req, res) => {
  dbConn.query(
    'SELECT * FROM temp_tb',
    function (
      error,

      results,

      fields
    ) {
      if (error) throw error;

      res.status(200).json(results);
    }
  );
});
// UPDATE

// DELETE

module.exports = router;
