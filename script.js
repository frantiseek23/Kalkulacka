const inputDisplay = document.getElementById("calculator-input");
const outputDisplay = document.getElementById("calculator-output");
const buttons = document.querySelectorAll(".calculator-buttons button");

let currentInput = "";

function updateDisplay() {
  inputDisplay.textContent = currentInput || "0";
}

function appendToInput(value) {
  currentInput += value;
  updateDisplay();
}

function clearLastEntry() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function clearAll() {
  currentInput = "";
  outputDisplay.textContent = "0";
  updateDisplay();
}

function calculate() {
  if (!currentInput) return;

  try {

    const expression = currentInput.replace(/\^/g, "**");
    const result = eval(expression);
    outputDisplay.textContent = result;
    currentInput = ""; 
    updateDisplay();
  } catch (error) {
    outputDisplay.textContent = "Error";
  }
}

buttons.forEach(button => {
  const value = button.value;

  button.addEventListener("click", () => {
    if (value === "=") {
      calculate();
    } else if (button.id === "clear-btn") {
      clearLastEntry();
    } else if (button.id === "clear-all-btn") {
      clearAll();
    } else {
      appendToInput(value);
    }
  });
});

updateDisplay();
outputDisplay.textContent = "0";
