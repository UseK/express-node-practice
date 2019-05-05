import * as fs from "fs";
import {expensesPath} from "./config";


export class ExpensesEachMonth {
    expenses: Expense[];

    constructor(expenses: Expense[]) {
        this.expenses = expenses;
    }

    static fromCSVPath(pathname: string): ExpensesEachMonth {
        const csvFile = fs.readFileSync(pathname, "utf-8");
        const valids = csvFile.split("\n").filter((line) =>
            Expense.isValidLine(line)
        );
        return new ExpensesEachMonth(valids.map(v => Expense.fromLine(v)))
    }
}

export class Expense {
    date: String;
    name: String;
    value: Number;

    constructor(date: String, name: String, value: Number) {
        this.date = date;
        this.name = name;
        this.value = value;
    }

    static fromLine(line: String): Expense {
        const items = line.split(",");
        return new Expense(items[0], items[1], Number(items[2]));
    }

    static isValidLine(line: String): boolean {
        const items = line.split(",");
        const datePattern = /(\d\d\d\d)\/(\d\d)\/(\d\d)/;
        return datePattern.test(items[0]);
    }
}

if (require.main === module) {
    const csvFile = fs.readFileSync(expensesPath, "utf-8");
    console.log(csvFile);
}
