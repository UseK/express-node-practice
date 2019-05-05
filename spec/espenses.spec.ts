import {Expense} from "../src/expenses"

describe("Expense", () => {
  const expenseSample = new Expense("2015/04/01", "exp1", 999);
  it("should be made", () => {
      expect(expenseSample.date).toBe("2015/04/01")
  })
});