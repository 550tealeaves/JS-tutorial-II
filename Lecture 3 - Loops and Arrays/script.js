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
// (2) Condition loop continues to execute until
// (3) Incrementor
var myArray = [1, 2, 'dog', true, [1, 2, 3]];
for (var i = 0; i < myArray.length; i++) {
    alert(myArray[i]); //will alert each item in array 1 by 1
}
