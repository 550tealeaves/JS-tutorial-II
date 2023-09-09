//arrays can store a wide variety of data types and mixed types
var myArray1 = [1, 2, 3, 4, 5];
var myArray2 = ['a', 'b', 'c', 'd', 'e'];
var myArray3 = [true, false, true, false]; 
var myArray4 = [1, 2, 'dog', true, [1, 2, 3]]; 

//Accessing value in an array - use the variable name + index position
alert(myArray4[0]); // returns 1
alert(myArray4[4]); //returns 1,2,3

//Changing values in an array - use var name, index & assign to new value
var mixedArray = [1, 2, 'dog', true, [1, 2, 3]]; 
mixedArray[0] = 'cat'; //reassign the first item from 1 to 'cat'
alert(mixedArray[0]); //returns cat

//Adding values to array
var mixedArray2 = [1, 2, 'dog', true, [1, 2, 3]]; 
mixedArray2.push('cat'); //will add 'cat' at the end of the array = will now have 5 positions
alert(mixedArray2[5]); //returns 'cat'

//Remove values from array - use.pop() method to remove LAST item in array
