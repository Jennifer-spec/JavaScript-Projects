

function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "by myself.";
    var Whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy";
    var section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
}

function string_Method() { // change a number to string
    var X=162;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X=12345.123456789;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}