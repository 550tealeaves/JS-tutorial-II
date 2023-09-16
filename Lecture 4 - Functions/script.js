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
