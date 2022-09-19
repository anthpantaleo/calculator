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

let screenValue = [];

function updateScreen() {
  if (screenValue.length == 0) {
    screen.innerText = 0;
  } else {
    screen.innerText = screenValue.join("");
  }
}

// Numbers and Buttons, !Operators

btns.forEach((item) => {
  item.addEventListener("click", (element) => {
    let value = item.id;
    if (screenValue.length < 16) {
      screenValue.push(value);
    } else {
    }
    updateScreen();
  });
});

clear.addEventListener("click", function () {
  screenValue = [];
  updateScreen();
});

back.addEventListener("click", function () {
  if (screenValue.length == 1) {
    screenValue = [];
  } else {
    screenValue.pop(screenValue.length - 1);
  }
  updateScreen();
});

negpos.addEventListener("click", function () {
  if (!screenValue.includes("-")) {
    screenValue.unshift("-");
  } else if (screenValue.includes("-") && screenValue.length > 1) {
    screenValue.shift();
  }
  updateScreen();
});

decimal.addEventListener("click", function () {
  if (!screenValue.includes(".")) {
    screenValue.push(".");
    updateScreen();
  }
});
