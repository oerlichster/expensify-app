import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import { sortByDate, sortByAmount } from "../../actions/filters";

test("shoudld setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "new value" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "new value" },
  });
});

test("should setup add expesne action object with provided values", () => {
  const data = {
    description: "rent",
    amount: 10000,
    createdAt: 100000,
    note: "july",
  };

  const action = addExpense(data);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...data,
      id: expect.any(String),
    },
  });
});

test("should generate action object for sort by date", () => {
  expect(sortByDate()).toEqual({
    type:'SORT_BY_DATE'
  });
});

test("should generate action object for sort by amount", () => {
expect(sortByAmount()).toEqual({
  type:'SORT_BY_AMOUNT'
});
});
