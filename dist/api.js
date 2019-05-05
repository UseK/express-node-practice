"use strict";
exports.__esModule = true;
var express = require("express");
var expenses_1 = require("./expenses");
var config_1 = require("./config");
function main() {
    var app = express();
    var port = 4649;
    app.listen(port, function () {
        return console.log("See localhost:" + port);
    });
    app.get("/expenses", function (req, res, next) {
        res.json(expenses_1.ExpensesEachMonth.fromCSVPath(config_1.expensesPath));
    });
}
if (require.main === module) {
    main();
}
