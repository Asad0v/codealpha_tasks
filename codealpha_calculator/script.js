const display = document.querySelector(".display");

function getValue(value) {
  if (value === "C") {
    display.innerHTML = "";
  } else if (value === "CE") {
    if (display.innerHTML == "Error ☹") {
      display.innerHTML = "";
    } else {
      display.innerHTML = display.innerHTML.slice(0, -1);
    }
  } else if (value === "=") {
    try {
      display.innerHTML = eval(display.innerHTML);
    } catch (err) {
      display.innerHTML = "Error ☹";
    }
  } else {
    display.textContent += value;
  }
}
