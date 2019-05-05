"use strict";
exports.__esModule = true;
var fs = require("fs");
var config_1 = require("./config");
var csvFile = fs.readFileSync(config_1.expensesPath, "utf-8");
console.log(csvFile);
