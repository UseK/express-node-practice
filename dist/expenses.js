"use strict";
exports.__esModule = true;
var fs = require("fs");
var config_1 = require("./config");
var ExpensesEachMonth = /** @class */ (function () {
    function ExpensesEachMonth(expenses) {
        this.expenses = expenses;
    }
    ExpensesEachMonth.fromCSVPath = function (pathname) {
        var csvFile = fs.readFileSync(pathname, "utf-8");
        var valids = csvFile.split("\n").filter(function (line) {
            return Expense.isValidLine(line);
        });
        return new ExpensesEachMonth(valids.map(function (v) { return Expense.fromLine(v); }));
    };
    return ExpensesEachMonth;
}());
exports.ExpensesEachMonth = ExpensesEachMonth;
var Expense = /** @class */ (function () {
    function Expense(date, name, value) {
        this.date = date;
        this.name = name;
        this.value = value;
    }
    Expense.fromLine = function (line) {
        var items = line.split(",");
        return new Expense(items[0], items[1], Number(items[2]));
    };
    Expense.isValidLine = function (line) {
        var items = line.split(",");
        var datePattern = /(\d\d\d\d)\/(\d\d)\/(\d\d)/;
        return datePattern.test(items[0]);
    };
    return Expense;
}());
exports.Expense = Expense;
if (require.main === module) {
    var csvFile = fs.readFileSync(config_1.expensesPath, "utf-8");
    console.log(csvFile);
}
