# JS-tutorial-II
JavaScript operators 
https://gc-cuny-edu.zoom.us/j/84823482172?pwd=SWExVDdGRy9Hd2h3VGFTd0ZuQ1o0UT09

http://zweibel.net/javascripting-masters-student/workshop/Javascript/?page=4 
•	Gives the full curriculum on JS 
Comparison Operators
Operator	Meaning	Example	Evaluation
<	less than?	5 < 5	false
	less than?	5 < 6	true
>	greater than?	5 > 5	false
	greater than?	5 > 4	true
<=	less than or equal to?	5 <= 5	true
	less than or equal to?	5 <= 4	false
>=	greater than or equal to?	5 >= 5	true
	greater than or equal to?	5 >= 6	false
==	equal to?	5 == 5	true
	equal to?	5 == 4	false
	equal to?	5 == "5"	true
!=	not equal to?	5 != 5	false
	not equal to?	5 != 4	true
	not equal to?	5 != "5"	false
===
JS specific	"strict" equal to (includes type)?	5 === "5"	false
	"strict equal" to (includes type)?	5 === 5	true
!==
JS specific	"strict" not equal to (includes type)?	5 !== "5"	true
	"strict" not equal to (includes type)?	5 !== 5	false


Developer tools – lets you run JS in console

Control flow – typically computer reads code top to bottom
But there are some branching portions, so JS may jump around 
Array 
•	1 variable that contains a series of values 
•	Synonymous to lists 
•	To access values in an array, use index 
•	You can add values to array using myArray.push(‘cat’); 
o	Will add cat to the array
•	Can splice or remove an item from array
•	Can sort
•	For Loops are the most common programming structure in JS
o	Allows you to iterate and do something to values in an array

# Functions
•	Used to repeat and reuse code and automate tasks
•	Code that performs 1 task

 
Function, then name of the function, then the parameter(s), then input code for a task, then returns the output
1.	Define the function
2.	Call the function
Console.clear() – will clear the console 

Functions help you capture the result
 

•	Can create function w/ no parameters
•	Can create functions that do nothing

 

# Scope
•	Context in which you can access a variable
•	When you create a function, you create a new scope
•	You can’t use variables just willy nilly in the code
•	Always know where your variables live b/c you can’t access variables outside of their proper scopes 

# 3 ways to declare variables
•	Var
o	Legacy, not really used
o	Globally and locally scoped
	Can use var anywhere
	But if created in function, it is scoped to that function
•	Problematic 
o	Can re-declare variable with the same name = override your past data 
 

•	Can’t access the var hello b/c it is nestled w/in the {} b/c it is in w/in the scope of the function
•	Can access greet b/c it is not within the scope – it is globally 


•	Let
o	Locally scoped – only accessible w/in the scope
o	Prevents you from overriding data
 

 



•	Const
o	Variable that will never change (immutable) 
o	Helps you keep track of variables that should not change

 

All objects are created Key value pairs

 

•	Can access each individual property of the objective by referring to the name of the property
o	Student.grade
o	Student.name
o	Student.GPA


Can create an array (list)  of objects
 

•	Create an array of objects (students)
•	Each object has a name and an array of grades
•	Console.log(students) – will show all the objects and you can open them up

 
•	Show all the students and grades in order

 

•	When adding a new object, must pass through the properties (name & grades) as parameters)


 
•	.push – lets you add a value to the array 

 
•	Call convertGrades(students;) at the end to display the grades 


# Interactive web design
•	Div lets you format multiple elements within a container
Goal is to create a basic interactive website
Live Server
•	Go live server doesn’t exist on the Internet
•	Lets you work on website developmentally 
To add script source file to index.html, use <script src=”filename.js”></script>

 

# jQuery
•	JS library
•	Collection of previously created functions that you use for web development
o	Don’t have to create new functions for a webpg
How to import jQuery to VS code?
•	Place the import line ABOVE the script source js file

 

## Feature of JQuery
•	jQuery Selector
o	Use $(“”)
o	Don’t have to hardcode many changes

 



 
•	Will hide the h1 header
•	If you target h1, this selector hides all elements w/ h1
•	Use id to target and change specific elements 


 



 

 

 



 
 

 

Adding elements
 

 

 


# Button
 

 

 
Add another button that will change header depending on user response

1. First create and style button
2. Then select for the id and create function that will run when it is clicked
3. Add prompt
4. Based on the user input, the html should change accordingly. 
 


 

 


 



 

