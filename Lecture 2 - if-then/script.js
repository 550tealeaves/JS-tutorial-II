//Prompt() - returns inputs as strings
var userName = prompt("What is your name ? ");
userName //will display the response entered into prompt

var whatAmI = prompt("What am I", "I am human"); //I am human shows as response


//parseInt() - this converts # from string to number - but cannot convert #s written as text (ex: five) - will return NaN (not a #)
var userAge = prompt("How old are you?")
userAge = parseInt(userAge) //take the response entered into the prompt & convert it to #
alert("You are " + userAge + " years old") //Will show an alert w/ user input converted into #, w/in statement
typeof userAge; //return integer


// IF/ELSE STATEMENT - lets you react to user input
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

//ELSE IF STATEMENTS
//use as many as needed to check different conditions (goes before the else{} code block)
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


//SWITCH STATEMENTS
//Comprised of series of case statements
//Switch statement checks each case statement as a condition - will run code block for case statement that is TRUE
//Break statement breaks out of switch statement - if omitted, switch statement continues to execute code in next case statement even if they don't match case

var difficulty = prompt('What difficulty would you like to play? 1-Easy, 2-Medium, 3-Hard');
switch (difficulty) {
    case "1":
        alert("You have selected the Easy difficulty.");
        break;
    case "2":
        alert("You have selected the Medium difficulty.");
        break;
    case "3":
        alert("You have selected the Hard difficulty.");
        break;
    default:
        alert("Invalid entry.");
        break;
}


//CHOOSE OWN ADVENTURE
//uSE prompt() for input & alert() for output
//Use variable to track player choices and player name

var playerName, playerChoice; //declare both variables in same "var" statement

var playerName = prompt("What is your name?");
alert("Welcome " + playerName + "!"); //will include player name in alert

alert(playerName + ", you are the last person on Earth, sitting alone in a room. There is a knock on the door...What shall you do?");
playerChoice = prompt("Enter 1 to cautiously approach the door, creeping slowly to the knob. Enter 2 to hide under the table, hoping any would-be intruder goes away. Enter 3 to climb out of the back window, scaling over the neighbor's fence to safety as you then run to call the police.");
if (playerChoice == "1") {
    alert("Your hands tremble as you tentatively approach the door. You pause a moment before it.");
} else if (playerChoice == "2") {
    alert("As you hide under the table, breathing rapidly, panic racing through your veins, you hear the doorknob rattling.");
} else if (playerChoice == "3") {
    alert("Your labored breathing is causing you to slow down. You forgot your inhaler. The footsteps approaching you are alarming.")
} else {
    alert("Invalid entry.")
}


//Nested choose your own adventure
if (playerChoice == "1") { // here's their first choice #1
    alert("Your hands are trembling as you approach the door. You pause a moment before it.");
    playerChoice = prompt("Enter 1 to bravely open the door. Enter 2 to look through the door's peephole.");
    if (playerChoice == "1") { //here's their second choice #1
        alert("You swing the door open with courageous gusto.")
    }
    else if (playerChoice == "2") { //here's their second choice #2
        alert("You cautiously look through the peephole. You make out a vague shape looming before the door.")
    }
    else {
        alert("Invalid entry."); // invalid entry for second choices
    }
} else if (playerChoice == "2") { // here's their first choice #2
    alert("As you hide under the table you hear the doorknob rattling.");
    playerChoice = prompt("Enter 1 to stay hidden under the table. Enter 2 to get up and find a weapon to defend yourself with.");
    if (playerChoice == "1") { //here's their second choice #1
        alert("Whatever is at the door has now begun banging on it loudly.");
    }
    else if (playerChoice == "2") { //here's their second choice #2
        alert("You quickly but quietly get up and look around. You see a broom in the corner of the room and wield it mightily.");
    }
    else {
        alert("Invalid entry."); // invalid entry for second choices
    }
}
else {
    alert("Invalid entry."); // invalid entry for first choices
}