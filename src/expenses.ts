import * as fs from "fs";
import {expensesPath} from "./config";



export class Expense {
    date: String;
    private name: String;
    private value: Number;

    constructor(date: String, name: String, value: Number) {
        this.date = date;
        this.name = name;
        this.value = value;
    }

}

if (require.main === module) {
    const csvFile = fs.readFileSync(expensesPath, "utf-8");
    console.log(csvFile);
}
