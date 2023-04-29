function addition_Function() {
    var addition=2+2;
    document.getElementById("Math").innerHTML="2+2 = "+ addition;
}

function subtraction_Function() {
    var subtraction= 5-3;
    document.getElementById("Math_2").innerHTML= "5-3 = " + subtraction;

}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math_3").innerHTML = "6*8 = " + simple_Math;
}

function division() {
    var simple_Math = 35 / 5;
    document.getElementById("Math_4").innerHTML = "35 / 5= " +simple_Math;

}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("Math_5").innerHTML= "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math_6").innerHTML= "When you divide 25 by 6 you have a reminder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math_7").innerHTML= -x;
}

var x=5;
x++;
document.write(x);
var y=5.44;
y--;
document.write(y);

window.alert(Math.random());

window.alert(Math.random() * 100);