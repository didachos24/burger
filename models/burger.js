// Set dependencies
var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(colVal, condition, cb) {
        orm.updateOne("burgers", colVal, condition, function(res) {
            cb(res);
        });
    }
};

// Export database for controller
module.exports = burger;