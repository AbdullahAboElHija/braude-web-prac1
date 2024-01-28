let display = document.getElementById("display");
let equalsButton = document.getElementById("equals");
let currentInput = "";

document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  if (event.target.tagName === "BUTTON") {
    const buttonValue = event.target.innerText;

    if (buttonValue === "=") {
      try {
        display.innerText = eval(currentInput);
      } catch (error) {
        display.innerText = "Error";
      }
    } else if (buttonValue === "C") {
      // Clear the current input and set display to "0"
      currentInput = "";
      display.innerText = "0";
    } else if (buttonValue === "1/x") {
      // Clear the current input and set display to "0"
      currentInput += "1/";
    } else if (buttonValue === "delete") {
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput;
    } else if (buttonValue === "|x|") {
      // Calculate the absolute value
      try {
        const result = Math.abs(eval(currentInput));
        display.innerText = result;
        currentInput = result.toString();
      } catch (error) {
        display.innerText = "Error";
      }
    } else if (buttonValue === "sqrt²(x)") {
      // Calculate the square root
      try {
        const result = Math.sqrt(eval(currentInput));
        display.innerText = result;
        currentInput = result.toString();
        display.innerText = currentInput;
      } catch (error) {
        display.innerText = "Error";
      }
    } else if (buttonValue === "log") {
      // Calculate the logarithm (base 10)
      try {
        const result = Math.log10(eval(currentInput));
        display.innerText = result;
        currentInput = result.toString();
      } catch (error) {
        display.innerText = "Error";
      }
    } else if (buttonValue === "x²") {
      // Square the current value
      try {
        const result = eval(currentInput) ** 2;
        display.innerText = result;
        currentInput = result.toString();
      } catch (error) {
        display.innerText = "Error";
      }
    } else if (buttonValue === "π") {
      currentInput += "3.14";
      display.innerText = currentInput;
    } else if (buttonValue === "e") {
      currentInput += "2.71828";
      display.innerText = currentInput;
    } else if (buttonValue === "10^x") {
      // Clear the current input and set display to "0"
      currentInput += "10**";
      display.innerText = currentInput;
    } else if (buttonValue === "x^y") {
      // Clear the current input and set display to "0"
      currentInput += "**";
      display.innerText = currentInput;
    } else if (buttonValue === "n!") {
      // Clear the current input and set display to "0"
      currentInput += "!";

      display.innerText = factorialFromStringRecursive(currentInput);
    } else {
      currentInput += buttonValue;
      display.innerText = currentInput;
    }
  }
}

function factorialFromStringRecursive(factorialString) {
  const num = parseInt(factorialString, 10);

  if (isNaN(num)) {
    console.log(
      "Invalid input. Please provide a valid number in string format."
    );
    return;
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorialFromStringRecursive((num - 1).toString());
}
