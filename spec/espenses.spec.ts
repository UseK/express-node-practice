import {Expense, ExpensesEachMonth} from "../src/expenses"

describe("Expense", () => {
    const expenseSample = new Expense("2015/04/01", "exp1", 999);
    const validLine = "2015/04/01,exp1,999,,,,";
    const invalidLine = ",※,,,,999,";

    it("should be made", () => {
        expect(expenseSample.date).toBe("2015/04/01")
    });
    it('should be made from line',  () => {
        const madeFromLine = Expense.fromLine(validLine);
        expect(madeFromLine.name).toBe("exp1");
    });
    it('should match valid line', () => {
        expect(Expense.isValidLine(validLine)).toBeTruthy();
    });
    it('should not match invalid line', () => {
        expect(Expense.isValidLine(invalidLine)).toBeFalsy();
    });
});

describe('Expenses', function () {
    it('should be made from csv path', () => {
        const expenses = ExpensesEachMonth.fromCSVPath('./spec/testdata/201905.csv');
        expect(expenses.expenses[0].value).toBe(99);
        expect(expenses.expenses[1].value).toBe(999);
        expect(expenses.expenses[2].value).toBe(9999);
        expect(expenses.expenses.length).toBe(3);
    });
});