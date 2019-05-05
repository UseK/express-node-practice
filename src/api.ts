import express = require("express");
import {ExpensesEachMonth} from "./expenses";
import {expensesPath} from "./config";

function main() {
  const app = express();
  const port = 4649;
  app.listen(port, () =>
      console.log(`See localhost:${port}`)
  );
  app.get("/expenses", (req, res, next) => {
        res.json(ExpensesEachMonth.fromCSVPath(expensesPath));
      }
  );
}

if (require.main === module) {
  main();
}