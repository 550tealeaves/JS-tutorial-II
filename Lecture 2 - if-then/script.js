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
//Use {} to enclose both the IF & ELSE code blocks 
// if (condition) {
//     //code runs if condition is TRUE
// } else {
//     //code runs if condition is FALSE
// }


var userAge= prompt("How old are you?")
userAge = parseInt(userAge);
if (userAge >= 18) {
    alert("You are legally old enough to vote in the US");
} else {
    alert("You are not legally old enough to vote in the US")
}

//ELSE IF statements - use as many as needed to check different conditions (goes before the else{} code block)
//1st IF statement checks to see if condition is met (age >= 18) - if TRUE, then stops running and alerts the IF message
//2nd ELSE IF runs when the IF is FALSE - now checks to see if this condition met (age >= 16) - if TRUE, stops running and alerts the ELSE IF message
//If both IF/ELSE IF are FALSE, then runs the ELSE block b/c ELSE is opposite condition of IF & ELSE IF

var userAge = prompt("How old are you?")
userAge = parseInt(userAge);
if (userAge >= 18) {
    alert("You are legally old enough to vote in the US");
} else if (userAge >= 16) {
    alert("You are not old enough to vote, but you are old enough to drive in the US")
} else {
    alert("You are not legally old enough to vote or drive in the US")
}