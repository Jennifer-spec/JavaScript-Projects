document.write(typeof "Word");
document.write(typeof 3);

document.write("10"+5);
function my_Function_1() {
   // document.getElementById("Test").innerHTML= 0/0;
    //document.getElementById("Test").innerHTML = isNaN('This is a string');
    document.getElementById("Test").innerHTML = isNaN('007');    
}

document.write(2E400);
document.write("<br>");

document.write(-3E310);
document.write("<br>");

document.write(10>2);
document.write(10<2);

console.log(2+2);

document.write(10==10);
document.write("<br>");
document.write(3==10);
document.write("<br>");

document.write(10===10);
document.write("<br>");

document.write("10"===10);
document.write("<br>");

document.write(5>2 && 10>4);
document.write("<br>");

document.write(5>10 && 10>4);
document.write("<br>");

document.write(5>10 || 10>5);
document.write("<br>");

document.write(5>10 || 10>20);
document.write("<br>");

document.write(!(20>10));
document.write("<br>");

function Ride_Function() {
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
