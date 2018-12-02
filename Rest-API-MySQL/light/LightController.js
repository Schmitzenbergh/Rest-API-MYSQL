var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Light = require('./Light');

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "Hue"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('You are now connected with mysql database...');
});

// CREATES A NEW Light
/*
router.post('/', function (req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});
*/

// RETURNS ALL THE LIGHTS IN THE DATABASE
router.get('/', function (req, res) {
    console.log("Grabbing all lights from database");
    con.query("SELECT * FROM Lights", function (err, result, fields) {
        if (err) throw err;
        res.status(200).send(JSON.stringify(result));
    });
    console.log("Result sent");
});

// GETS A SINGLE LIGHT FROM THE DATABASE BY ID
router.get('/:id', function (req, res) {
    console.log("Grabbing single light with ID: %d from database", req.params.id);
    con.query("SELECT * FROM Lights WHERE id = ?", req.params.id, function(err, result, fields) {
        if (err) throw err;
        res.status(200).send(JSON.stringify(result));
    });
    console.log("Result sent");
});

// DELETES A LIGHT FROM THE DATABASE
router.delete('/:id', function (req, res) {
    console.log("Deleting single light with ID: %d from database", req.params.id);
    con.query("DELETE * FROM Lights WHERE id = ?", req.params.id, function (err, result, fields) {
        if (err) throw err;
        res.status(200).send(JSON.stringify(result));
    });
    console.log("Result sent");
});

/*
// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});*/


module.exports = router;