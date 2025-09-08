let num1 = 10;
let num2 = 5;
let name = "Tafa"; // change this to your name

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

document.getElementById("results").innerHTML = `
  Addition: ${addition} <br>
  Subtraction: ${subtraction} <br>
  Multiplication: ${multiplication} <br>
  Division: ${division} <br>
  Hello ${name}, the result of num1 + num2 is ${addition}
`;
