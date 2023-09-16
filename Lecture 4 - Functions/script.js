//WHAT IS A FUNCTION?
//Code that performs specific task and is reusable that can automate tasks
//HOW TO CREATE A FUNCTION
// 1. Define function name
// 2. Use lower camelCase for name
// 3. Define parameters or arguments - parameters = values passed into function when called = can reuse same function for diff tasks & you can pass diff values
// 4. Must return a value - takes input, transforms it, returns output


//Create function add that takes 2 #s as parameters & returns sum
function add(num1, num2) {
    return num1 + num2
}

//Alternative way to write function add - define sum as variable 
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

//CALLING A FUNCTION - must do functionName(); - can include values to pass into as parameters

function add(num1, num2) {
    return num1 + num2;
}

add(1, 2); //pass 1 & 2 as num1, & num2 respectively - will return 3


//Can create variable for the result of the function & work w/ variable
function add(num1, num2) {
    var sum = num1 + num2;
    return sum; 
}

var result = add(1, 2); //assign the calling of a function to a new var
alert(result); //alerts 3


//Don't need to explicitly list parameters or return statement for functions
function alertHello() {
    alert("Hello!");
}

alertHello(); //alert Hello!


// Scope
// 	• Creating function/variable designates new scope
// 	• Context a function/variable is accessible 
// 	• Global scope
// 		○ Variable can be used anywhere in code
// 	• Local scope
// Variable only accessible w /in function

// var, let, const
// var = outdated - functionally/global scoped
var greet = "hey hi"

function newFunction() {
    var hello = "hello";
}

console.log(greet); //returns "hey hi" b/c globally scoped
//console.log(hello); //hello is not defined b/c it's locally scoped - console.log has to be written inside newFunction()

//Var can be redeclared & reassigned
//Redeclaration
var greet = "hi there"; 
var greet = "hello there";

//Reassignment
var greet = "hi there";
greet = "hello there again";

alert(greet); //returns "hello there again"

// • Let
// 	○ Block - scoped 
// 		§ Var only accessible w /in block of code in which it's declared 
// 		§ Block = section of code surrounded by { }

let someValue = 1;
if (someValue > 0) {
    let greet = "hi there";
    console.log(greet); //logs "hi there" since condition is true
}

console.log(someValue); //returns 1
console.log(greet); //greet is undefined b/c it's block scoped - only available w/in the curly braces it's defined in {let greet = "hi there"}

//let can be reassigned but NOT re-declared
// //Re-assignment
// let greet = "hi there";
// greet = "hello there, friends";

// alert(greet); //returns "hello there, friends"

// //Re-declaration DOES NOT work
// let greet = "hi there";
// let greet = "hello everybody";

// alert(greet); //greet has already been declared

//Can re-declare a let variable OUTSIDE of the block {} in which it's declared
let greeting = "hi there";
if (true) {
    let greeting = "hello there, folks";
    alert(greeting); //logs "hello there, folks" - functionally scoped
}

alert(greeting); //returns hi there b/c it's global scope

// • Const
// 	○ Block - scoped
// 	○ Variables are immutable - cannot be re - declared / reassigned
// 	○ Used to declare variables that you are not going to modify
// reassignment
// const greet = "hi there";
// greet = "wait, say hello there instead"; // throws a TypeError

// // re-declaration
// const greet = "hi there";
// const greet = "I really wish I could say hello there"; // throws a TypeError

//STUDENT GRADES PROGRAM
// • Create program that evaluates grades
// • Goals
// 	1. Display grades
// 	2. Add new student to student list
// 	3. Convert numbered grades into a latter grade
// • Can create 3 functions and call them at correct time

//Create object - has key-value pairs, called properties & uses {}
let student = {
    name: "Bob",
    grade: "A",
    GPA: 4.0
};

//Use objectName.key to access the value in the property
console.log(student.name); //Bob
console.log(student.grade); //A
console.log(student.GPA); //4.0

//create an array of student objects

let students = [
    {
        name: "Bob",
        grades: [88, 90, 80, 77, 89],

    },
    {
        name: "Alicia",
        grades: [100, 95, 92, 89, 97]
    },
    {
        name: "Juan",
        grades: [91, 90, 94, 86, 90]
    }
];

console.log(students); //should show the entire array (3 objects indexed 0,1,2)

console.log(students[2]);

//PRINTING THE GRADES - use function to print names/grades and for loop to iterate over array of student objects 

// print all student names and their grades
function printGrades(students) {
    for (let i = 0; i < students.length; i++) { //i = index - start at 0 (1st item in array Bob, if i < length of array - 3, increment by 1 - show students[0], students[1], students[2])
        console.log(students[i].name + ": " + students[i].grades); //index student name: index student grade
    }
}

printGrades(students); // prints Bob: 88, 90, 80, 77, 89, Alicia: grades, Juan: grades