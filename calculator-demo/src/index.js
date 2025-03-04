import { add, subtract, multiply, divide } from "./calculator.js";

document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("num1");
  const number2Input = document.getElementById("num2");
  const operatorSelect = document.getElementById("operator");
  const calculateButton = document.getElementById("calculate");
  const resultSelection = document.getElementById("result");

  calculateButton.addEventListener("click", function () {
    const number1 = Number(numberInput.value);
    const number2 = Number(number2Input.value);
    const operation = operatorSelect.value;
    let result;
    //nan stands for not a number
    //is NaN('a') --> true
    //is NaN(1) --> false

    if (isNaN(number1) || isNaN(number2)) {
      resultSelection.innerText = "Please enter a valid number";
      return;
    }

    switch (operation) {
      case "add":
        result = add(number1, number2);
        break;
      case "subtract":
        result = subtract(number1, number2);
        break;
      case "multiply":
        result = multiply(number1, number2);
        break;
      case "divide":
        result = divide(number1, number2);
        break;
      default:
        result = "invalid operation. Please Try Again";
        break;
    }

    resultSelection.innerText = `result ${result}`;
  });
});
/*
 for operstion i have 4 different ones
 add, subtract, multiply, divide
if (operstion === 'add') {
else if (operation === 'subtract') {
else if (operation === 'multiply') {
else if (operation === 'divide') {
} else {

*/
