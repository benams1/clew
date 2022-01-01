import { render, screen } from '@testing-library/react';
import NumberInput from "./components/Form/FormComponents/InputTypes/NumberInput";
import React from "react";
import App from "./App";

test('should render field with the right id and the right value', () => {
  render(<NumberInput
    label={"testing the title"}
    id={"some-id"}
    onChange={() => console.log("on change")}
    value={1234}
    error={true}
  />);
  const numberInput = document.getElementById("some-id-field");
  expect(numberInput).toBeInTheDocument();
  expect(numberInput.value).toEqual("1234")
});

test("should render the app, with only 2 elements", () => {
  render(<App />)
  const firstId = "0-field"
  const secondId = "1-radio"
  const firstElement = document.getElementById(firstId)
  const secondElement = document.getElementById(secondId)
  expect(firstElement).toBeInTheDocument()
  expect(secondElement).toBeInTheDocument()
})