var operandoa;
var operandob;
var operacion;
function init(){
    //variables
  var outcome = document.getElementById("outcome");
  var reset = document.getElementById("reset");
  var add = document.getElementById("add");
  var subtract = document.getElementById("subtract");
  var multiplication = document.getElementById("multiplication");
  var division = document.getElementById("division");
  var same = document.getElementById("same");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");
  var seven = document.getElementById("seven");
  var eight = document.getElementById("eight");
  var nine = document.getElementById("nine");
  var zero = document.getElementById("zero");

 
  //events

  one.onclick = function(e){
    outcome.textContent = outcome.textContent + "1";
  }
  two.onclick = function(e){
    outcome.textContent = outcome.textContent + "2";
  }
  three.onclick = function(e){
    outcome.textContent = outcome.textContent + "3";
  }
  four.onclick = function(e){
    outcome.textContent = outcome.textContent + "4";
  }
  five.onclick = function(e){
    outcome.textContent = outcome.textContent + "5";
  }
  six.onclick = function(e){
    outcome.textContent = outcome.textContent + "6";
  }
  seven.onclick = function(e){
    outcome.textContent = outcome.textContent + "7";
  }
  eight.onclick = function(e){
    outcome.textContent = outcome.textContent + "8";
  }
  nine.onclick = function(e){
    outcome.textContent = outcome.textContent + "9";
  }
  zero.onclick = function(e){
    outcome.textContent = outcome.textContent + "0";
  }
  reset.onclick = function(e){
    resetear();
  }
  add.onclick = function(e){
    operandoa = outcome.textContent;
    operacion = "+";
    limpiar();
  }
  subtract.onclick = function(e){
    operandoa = outcome.textContent;
    operacion = "-";
    limpiar();
  }
  division.onclick = function(e){
    operandoa = outcome.textContent;
    operacion = "/"
    limpiar();
  }
  multiplication.onclick = function(e){
    operandoa = outcome.textContent;
    operacion = "*"
    limpiar();
  }
  same.onclick = function(e){
    operandob = outcome.textContent;
    resolver();
  }
}

function limpiar(){
    outcome.textContent = "";
}
function resetear(){
    outcome.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;

    }
    resetear();
    outcome.textContent = res;
}

