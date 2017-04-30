var calcTxt = "0";
var screenTxt = "0";
var newNum = true;
var newCalc = true;
var operator = false;
var decP = false;
var oldCalc = [];
var eq = false;

document.getElementById("screen-text").innerHTML = screenTxt;
document.getElementById("calc-text").innerHTML = calcTxt;
oldCalc.push("0");

function oper(op) {
  decP = false;
  if (eq){
    eq = false;
    newNum = false;
    calcTxt=screenTxt;
  }
  if (!newNum) {
    oldCalc.push(calcTxt);
    newNum = true;
    screenTxt = op;
    calcTxt += op;
    oldCalc.push(calcTxt);
  }
  updateScreen(calcTxt, screenTxt);
}

function number(num) {
  if (eq){
    newCalc = true;
    eq = false;
  }
  decP = false;
  if (newNum) {
    newNum = false;
    screenTxt = num;
    if (newCalc) {
      newCalc = false;
      calcTxt = num;
    } else {
      calcTxt += num;
    }
  } else {
    screenTxt += num;
    calcTxt += num;
  }
  updateScreen(calcTxt, screenTxt);
}

function add() {
  oper("+");
}

function dec() {
  oper("-");
}

function mult() {
  oper("x");
}

function dev() {
  oper(":");
}

function EQ() {
  eq = true;
  newNum = true;
  operators = calcTxt.split(/[0123456789.]/).filter(function(val) {
    return val !== "";
  });
  numbers = calcTxt.split(/[\+x:-]/);
  ans = calculate(operators, numbers);
  screenTxt = ans;
  calcTxt += "=" + ans;
  updateScreen(calcTxt, screenTxt);
}

function calculate(ops, nums) {
  ans = Number(nums.shift());
  while (ops.length !== 0) {
    num = nums.shift();
    switch (ops.shift()) {
      case "+":
        ans += Number(num);
        break;
      case ":":
        ans /= Number(num);
        break;
      case "x":
        ans *= Number(num);
        break;
      case "-":
        ans -= Number(num);
        break;
    }
  }
  return parseFloat(ans.toFixed(2));
}

function AC() {
  newNum = true;
  newCalc = true;
  oldCalc = ["0"];
  screenTxt = "0";
  calcTxt = "0";
  document.getElementById("screen-text").innerHTML = screenTxt;
  document.getElementById("calc-text").innerHTML = calcTxt;
}

function CE() {
  newNum = true;
  if (eq){
    eq = false;
    oldCalc.pop();
  }
   if (calcTxt!=="0"){
    calcTxt = oldCalc.pop();
    screenTxt = "0";
    document.getElementById("screen-text").innerHTML = screenTxt;
    document.getElementById("calc-text").innerHTML = calcTxt;
  }
  if (calcTxt==="0"){
    newCalc = true;
    oldCalc = ["0"];
  }
}

function decPoint() {
  if (screenTxt.indexOf(".") === -1) {
    decP = true;
    if (newNum) {
      newNum = false;
      newCalc = false;
      screenTxt = "0.";
      if (newCalc) {
        calcTxt = "0.";
      } else {
        calcTxt += "0.";
      }
    } else {
      screenTxt += ".";
      calcTxt += ".";
    }
    updateScreen(calcTxt, screenTxt);
  }
}

function zero() {
  if (!newNum) {
    number("0");
  }
}

function one() {
  number("1");
}

function two() {
  number("2");
}

function three() {
  number("3");
}

function four() {
  number("4");
}

function five() {
  number("5");
}

function six() {
  number("6");
}

function seven() {
  number("7");
}

function eight() {
  number("8");
}

function nine() {
  number("9");
}


function updateScreen(calc, screen){
	if (calc.length >= 22 | screen.length >= 12) {
    newCalc = true;
    newNum = true;
    oldCalc=["0"];
    document.getElementById("screen-text").innerHTML = 0;
    document.getElementById("calc-text").innerHTML = "Digit Limit Met";
  } else {
    document.getElementById("screen-text").innerHTML = screenTxt;
    document.getElementById("calc-text").innerHTML = calcTxt;
  }
}
