import moment from "moment";
import { setStartDate, setEndDate, setTextFilter } from "../../actions/filters";

test("should generate set start date action", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0),
  });
});

test("should generate set end date action", () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0),
  });
});

test("should generate set text filter object with text value", () => {
  const action = setTextFilter("text");

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "text",
  });
});

test("should generate set text filter object with default value", () => {
    const action = setTextFilter();
  
    expect(action).toEqual({
      type: "SET_TEXT_FILTER",
      text: "",
    });
  });

  test("should generate set text filter object with default value", () => {
    const action = setTextFilter();
  
    expect(action).toEqual({
      type: "SET_TEXT_FILTER",
      text: "",
    });
  })