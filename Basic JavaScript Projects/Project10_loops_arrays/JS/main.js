

function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpt", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y=0; Y <Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "Sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML= "The cost of the "+ Musical_Instrument.type + " was "
    + Musical_Instrument.color;
}

//const X=10;  
//X=2;
//document.write(X+"<br>");

var A = 82;
document.write(A+"<br>");
//document.write("dafda");
/*{
   let A = 33;
    document.write=("<br>"+ A);
}*/
document.write(A);



let car = {
    make: "Dodge",
    model: "viper",
    year: "2021",
    color: "red",
    description: function() {
        return "This car is a "+this.year + this.color +this.make + this.model;
    }
}; 

document.getElementById("Car_Object").innerHTML = car.description();