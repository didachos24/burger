// Dependencies
var express = require("express");
var burger = require("../models/burger");

var router = experess.Router();

// Routes

// Select all of them
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Create a new one
router.post("/api/burgers", function(req, res) {
    burguer.insertOne(["burger_name", "devoured"], [req.body.burgerName, req.body.devoured], function(result) {
        res.json({id: result.insertId});
    });
});

// Update an existing
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = "+req.params.id;

    // There is just one condition to change in existing burgers
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(400).end();
            }
            res.status(200).end();
        }
    );
});

// Export module
module.exports = router;