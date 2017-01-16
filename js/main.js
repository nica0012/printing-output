/*Global confirm, console, prompt*/


// prompt()
//
//var name  = prompt("Please enter your name.")
//
//console.log("Hello " + name);


// confirm()

//var deleted = confirm("Do you really want to delete this file?");
//console.log("deleted = " + deleted);


//CONDITIONALS

//example:
//
//var today = prompt("Enter a day.");
//var temperature = -10;
//
//if ((today === "Saturday") && (temperature > -15)) {
//    console.log("I will go skiing.");
//} else if ((today === "Saturday") && (temperature < -15)) {
//    console.log("I'll go hiking.");
//} else {
//    console.log("I will watch a movie.")
//
//}


// typical programming example

//var a;
//
//console.log ("!a = " + !a); //true
//
//if (!a) {
//    a = prompt("Assign value to variable a!");
//}
//
//console.log("!a = 1")





//TASK 1


//Declare three variables, a and b and c.

/*If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):*/


// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/


var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n---------\n\n" +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "a += b = " + (a += b) + "\n" +
    "a -= b = " + (a -= b) + "\n" +
    "a *= b = " + (a *= b) + "\n" +
    "a /= b = " + (a /= b) + "\n" +
    "a %= b = " + (a %= b) + "\n" +
    "a == b = " + (a == b) + "\n" +
    "a != b = " + (a != b) + "\n" +
    "a > b = " + (a > b) + "\n" +
    "a < b = " + (a < b) + "\n" +
    "!a && !c = " + (!a && !c) + "\n" +
    "!a || !c  = " + (!a || !c) + "\n"
);



//TASK 2

//Declare the variable first_name and assign it with the value of your first name;
//Declare the variable last_name and assign it with the value of your last name;
//Declare the variable email and assign it with the value of your email;
//Declare the variable output;
//Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
//Assign output with gotten expression;
//Alert output.


var first_name = "Hugo";
var last_name = "Nicastro";
var email = "hugonicastro@gmail.com"

var output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";

alert(output);


//TASK 3

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100)
];

console.log(numbers[0]); //first array element
console.log(numbers[4]); //last array element

//console.log(numbers[0] + " + " + numbers[4] + " = " +  (numbers[0] + numbers[4]));

var number1 = numbers[0];
var number4 = numbers[4];

var sum = numbers[0] + numbers[4]

console.log(number1 + " + " + number4 + " = " + (sum));

if (sum % 2 == 1) {
    alert(number1 + " + " + number4 + " = " + (sum) + "\nThis number is odd.");

} else if (sum % 2 == 0) {
    alert(number1 + " + " + number4 + " = " + (sum) + "\nThis number is even.");

}


// check if number is even or odd?

//5 % 2 = 1; //means a number is odd
//
//6 % 2 = 0; //means a number is even