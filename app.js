// Selectors

const screen = document.querySelector(".screeninfo");
const btns = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal");
const back = document.querySelector(".back");
const clear = document.querySelector(".c");
const negpos = document.querySelector(".negpos");
const decimal = document.querySelector(".decimal");

// Changable Values

let value1 = [];
let value2 = [];
let operator = [];
let flipper = false;

function updateScreen() {
  if (flipper == true) {
    if (value2.length == 0) {
      screen.innerText = 0;
    } else {
      screen.innerText = value2.join("");
    }
  } else if (flipper == false) {
    if (value1.length == 0) {
      screen.innerText = 0;
    } else {
      screen.innerText = value1.join("");
    }
  }
}

// Numbers and Buttons, !Operators

btns.forEach((item) => {
  item.addEventListener("click", (element) => {
    let value = item.id;
    if (flipper == false) {
      if (value1.length < 20) {
        value1.push(value);
      }
      updateScreen();
    } else if (value2.length < 20) {
      value2.push(value);
    }
    updateScreen();
  });
});

operators.forEach((item) => {
  item.addEventListener("click", (element) => {
    let op = item.id;
    if (operator.length > 0) {
      operator = [];
      operator.push(op);
    } else {
      operator.push(op);
    }
    flipper = true;
  });
});

clear.addEventListener("click", function () {
  value1 = [];
  value2 = [];
  operator = [];
  flipper = false;
  updateScreen();
});

negpos.addEventListener("click", function () {
  if (flipper == false) {
    if (!value1.includes("-")) {
      value1.unshift("-");
    } else if (value1.includes("-") && value1.length > 1) {
      value1.shift();
    }
  } else if (flipper == true) {
    if (!value2.includes("-")) {
      value2.unshift("-");
    } else if (value2.includes("-") && value2.length > 1) {
      value2.shift();
    }
  }
  updateScreen();
});

decimal.addEventListener("click", function () {
  if (flipper == false) {
    if (!value1.includes(".")) {
      value1.push(".");
    }
  } else if (flipper == true) {
    if (!value2.includes(".")) {
      value2.push(".");
    }
  }
  updateScreen();
});

equals.addEventListener("click", function () {
  console.log(value1, operator, value2);
  let first = parseFloat(value1.join(""));
  let second = parseFloat(value2.join(""));
  let tempanswer;
  if (operator[0] === "+") {
    tempanswer = parseFloat(first + second);
  } else if (operator[0] === "-") {
    tempanswer = parseFloat(first - second);
  } else if (operator[0] === "*") {
    tempanswer = parseFloat(first * second);
  } else {
    tempanswer = parseFloat(first / second);
  }
  let answer = tempanswer.toString();
  value1 = [...answer];
  value2 = [];
  operator = [];
  flipper = false;
  updateScreen();
});

back.addEventListener("click", function () {
  if (flipper == false) {
    if (value1.length === 1) {
      value1 = [];
    } else {
      value1.pop(value1.length - 1);
    }
    updateScreen();
  } else if (flipper == true) {
    if (value2.length === 1) {
      value2 = [];
    } else {
      value2.pop(value1.length - 1);
    }
    updateScreen();
  }
});
