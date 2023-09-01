//Prompt() - returns inputs as strings
var userName = prompt("What is your name ? ");
userName //will display the response entered into prompt

var whatAmI = prompt("What am I", "I am human"); //I am human shows as response


//parseInt() - this converts # from string to number - but cannot convert #s written as text (ex: five) - will return NaN (not a #)
var userAge = prompt("How old are you?")
userAge = parseInt(userAge) //take the response entered into the prompt & convert it to #
alert("You are " + userAge + " years old") //Will show an alert w/ user input converted into #, w/in statement
typeof userAge; //return integer


// IF/ELSE statement - lets you react to user input
if (condition) {
    //code runs if condition is TRUE
} else {
    //code runs if condition is FALSE
}