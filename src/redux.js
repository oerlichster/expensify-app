











store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(0));
//store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: "adasdasdsdad",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "",
    startDate: undefined,
    endDate: undefined,
  },
};
