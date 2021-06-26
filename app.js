const DISPLAY = document.getElementById("display");
const EQUAL = document.getElementById("equal");
const ON = document.getElementById("on");

let state = true;
let eligible = true;

function eligibility(num) {
    if (DISPLAY.innerHTML == "0" && (num == "*" || num == "/" || num == "+")) {
        eligible = false;
    } else {
        eligible = true;
    }
}
function clean() {
  if (DISPLAY.innerHTML == 0) {
    DISPLAY.innerHTML = "";
  }
}
function display(num) {
    eligibility(num);
  if (state && eligible) {
    clean();
    DISPLAY.innerHTML += num;
  }
}
function wipe() {
  if (state) {
    // A function to reset the state of the cal to initial
    DISPLAY.innerHTML = "0";
  }
}
function answer() {
  if (state && DISPLAY.innerHTML != "") {
    let expression = DISPLAY.innerHTML;
    ans = eval(expression);
    return (DISPLAY.innerHTML = ans);
  }
}
function power(params) {
  if (state) {
    DISPLAY.innerHTML = "";
    state = false;
    ON.innerHTML = "ON";
  } else {
    state = true;
    DISPLAY.innerHTML = "0";
    ON.innerHTML = "OFF";
  }
}
