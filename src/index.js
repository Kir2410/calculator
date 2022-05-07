const display = document.querySelector(".display");
const keyboardButton = document.querySelectorAll(".keyboard-button");
const result = document.querySelector("#result");
const plusMinus = document.querySelector("#plus-minus");
const ac = document.querySelector("#all-clear");
const c = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const mc = document.querySelector("#memory-clear");
const ms = document.querySelector("#memory-save");
const mr = document.querySelector("#memory-read");
const mPlus = document.querySelector("#memory-plus");
const mMinus = document.querySelector("#memory-minus");
const revert = document.querySelector("#revert");

let memory = "";
let forRevert = "";

// выводит набираемое кликами выражение на экран
const showOnDisplay = (button) => {
  display.innerHTML += button.value;
};

// выводит набираемое кликами выражение на экран
const showOnDisplayFromKeyboard = (event) => {
  display.innerHTML += event.key;
};

// считает и выводит результат на экран
const resultOnDisplay = () => {
  forRevert = display.innerHTML;
  display.innerHTML = eval(display.innerHTML);
  revert.removeAttribute("disabled");
  // .toFixed(8)
};

// очищает дисплей и память
const clearDisplayAndMemory = () => {
  memory = "";
  display.innerHTML = "";
};

// очищает дисплей
const clearDisplay = () => {
  display.innerHTML = "";
};

// убирает последний набранный символ
const deleteLastChar = () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
};

//возвращает выражение до вычисления результата и блокирует кнопку revert
const revertLastExpression = () => {
  display.innerHTML = forRevert;
  revert.setAttribute("disabled", true);
};

// очищает память
const memoryClear = () => {
  memory = "";
};

// сохраняет число в память
const memorySave = () => {
  memory = eval(display.innerHTML);
};

// выводит число из памяти на дисплей
const memoryRead = () => {
  display.innerHTML = memory;
};

// прибавляет число из памяти к выражению на дисплее
const memoryPlus = () => {
  display.innerHTML = display.innerHTML + "+" + memory;
};

// вычитает число из памяти из выражения на дисплее
const memoryMinus = () => {
  display.innerHTML = display.innerHTML + "-" + memory;
};

// сменить знак числа (+/-)
const changeNumberSign = () => {
  display.innerHTML = 0 - display.innerHTML;
};

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("button")) {
    showOnDisplay(event.target);
  }
  if (event.target.id == "result") {
    resultOnDisplay();
  }
  if (event.target.id == "all-clear") {
    clearDisplayAndMemory();
  }
  if (event.target.id == "clear") {
    clearDisplay();
  }
  if (event.target.id == "backspace") {
    deleteLastChar();
  }
  if (event.target.id == "revert") {
    revertLastExpression();
  }
  if (event.target.id == "memory-clear") {
    memoryClear();
  }
  if (event.target.id == "memory-save") {
    memorySave();
  }
  if (event.target.id == "memory-read") {
    memoryRead();
  }
  if (event.target.id == "memory-plus") {
    memoryPlus();
  }
  if (event.target.id == "memory-minus") {
    memoryMinus();
  }
  if (event.target.id == "plus-minus") {
    changeNumberSign();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key == "Backspace") {
    deleteLastChar();
  }
  if (event.key == "Enter") {
    event.preventDefault();
    resultOnDisplay();
  }
  if (
    event.key == "+" ||
    event.key == "-" ||
    event.key == "/" ||
    event.key == "*" ||
    event.key == "." ||
    event.key == "(" ||
    event.key == ")" ||
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "0"
  ) {
    showOnDisplayFromKeyboard(event);
  }
});
