//ARRAYS - can store a wide variety of data types and mixed types
var myArray1 = [1, 2, 3, 4, 5];
var myArray2 = ['a', 'b', 'c', 'd', 'e'];
var myArray3 = [true, false, true, false]; 
var myArray4 = [1, 2, 'dog', true, [1, 2, 3]]; 

//ACCESSING VALUES IN ARRAY - use the variable name + index position
alert(myArray4[0]); // returns 1
alert(myArray4[4]); //returns 1,2,3

//CHANGING VALUES IN ARRAY - use var name, index & assign to new value
var mixedArray = [1, 2, 'dog', true, [1, 2, 3]]; 
mixedArray[0] = 'cat'; //reassign the first item from 1 to 'cat'
alert(mixedArray[0]); //returns cat

//ADDING VALUES TO ARRAY - use .push() method - adds item at end of array
var mixedArray2 = [1, 2, 'dog', true, [1, 2, 3]]; 
mixedArray2.push('cat'); //will add 'cat' at the end of the array = will now have 5 positions
alert(mixedArray2[5]); //returns 'cat'

//REMOVE VALUES FROM ARRAY - use.pop() method to remove LAST item in array
var mixedArray3 = [1, 2, 'dog', true, [1, 2, 3]]; 
mixedArray3.pop(); //will remove the last item in the list [1,2,3]
alert(mixedArray3[4]); //returns "undefined" b/c no item w/ index 4

//SPLICING AN ARRAY - use .splice() method to remove range of values OR start at a specific index. splice() takes 2 parameters (1) index # of starting value & (2) # of total values to remove
var myArray = [1, 2, 'dog', true, [1, 2, 3]]; 
myArray.splice(0, 2); //starts at index 0, and removes 2 items total (indexes 0, 1)
alert(myArray[0]); //returns 'dog' - dog is now 1st item in array

//DETERMINING ARRAY LENGTH - use .length property - doesn't use () b/c not a method
//Length always starts w/ 1, not 0 like index #
//[length -1] returns last item in array
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
alert(myArray[myArray.length - 1]); //returns [1, 2, 3];

//SORT() METHOD - sorts values alphabetically or numerically
var myArray = ['c', 'b', 'g', 'a', 'f'];
myArray.sort(); //will sort the items alphabetically
alert(myArray); // 'a', 'b', 'c', 'f', 'g'

var myArray = [2, 4, 3, 1, 5];
myArray.sort(); //sorts items numerically
alert(myArray); //1,2,3,4,5

//LOOPS - use them to perform an action over each item in the array
//FOR LOOPS - 3 parts, each separated with ";"
// (1) i = initialization variable of loop - can be named anything but is called "i" conventionally
// (2) Condition loop continues to execute until - i < myArray.length
// (3) Incrementor - i++ means value increases by 1 each time
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
for (var i = 0; i < myArray.length; i++) {
    alert(myArray[i]); //will alert each item in array 1 by 1
}

var num = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (var i = 1; i <= num; i++) {
    console.log(i);     // printing the value of i - 1,2,3,4,5
}


//WHILE LOOP - infinitely executes code until specific condition is met 
var i = 0; //i starts at 0
while (i < 5) { //as long as i is less than 5
    alert(i); //display all the #s from 0-4
    i++; //iterate by 1 each time loop runs
}

//LIBRARY APP - app will sort, display and search for book titles

//Start by creating an array of book titles
var bookTitles = [
    'Too Loud a Solitude',
    'Things Fall Apart',
    'The Master and Margarita',
    'The Three Body Problem',
    'The Woman Destroyed',
    'Beloved',
    'The Tenant'
]

bookTitles.sort(); //sort the titles alphabetically
var requestedTitles = ""; //set requestedTitles equal to empty string to request books from user
var libRequests = [] //set libRequests equal to an empty array so all requests are stored

//Add welcome message with instructions - use \n to create new lines after each statement
alert("Welcome to the library!\n\nPlease search for a book title when prompted. \n\nType `request` at the prompt to make a request for a book.\n\nYou can also type `display` at the prompt to display all available book titles.\n\nType `quit` at the prompt to quit the program.");

//Plan for coding
//(1) - While loop - lets user search for books until they quit
//(2) - If/else statement - checks if user input = "request" or "display" - which then performs an action
//(3) - For loop - iterate through array of book titles and display each one