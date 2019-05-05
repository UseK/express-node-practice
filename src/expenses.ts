import * as fs from "fs";
import {expensesPath} from "./config";

const csvFile = fs.readFileSync(expensesPath, "utf-8");
console.log(csvFile);