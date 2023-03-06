$("#noShow").hide(); //target the id noShow

$("h1").html("These are awesome jokes.") // this will change the h1 w/o the id noShow to These are awesome jokes

$("#joke").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta</p>"); //targeting the joke id and will add this new value in HTML format using <p></p>

$("#toggleJokes").click(function(){ //select toggleJokes id, on the click event, perform the below function
    $("#joke").toggle(); //will toggle the jokes section
});

$("#changeHeader").click(function(){
    let response = prompt("Are these jokes the best ever? (yes/no)"); //click button and it asks prompt for user input
    if (response === "yes") { //if the response is yes (user inputs yes)
        $("h1").html("The Best Jokes Ever!"); // if reponse is yes, then change header to The Best Jokes Ever
    }
    else if (response === "no") { //if user enters no
        $("h1").html("The Worst Jokes Ever :-( "); //w/ a response of no, then the html will change to Worst jokes every
    }
});




//console.log functions lecture

let greet = "hi there";

if (true) {
    let greet = "hello there"; 
    console.log(greet); //this will show "hello there" b/c local scope the let statement is in the same function
}

console.log(greet); //will log "hi there" b/c global scope - can't access the greet variable in the if statement

const intro = "hi there"; 

intro

intro = "hola"; //error b/c const used for values that won't change


let student = {  //student is an object and it has paired property key-values (key=name & value="Bob")
    name: "Bob",
    grade: "A", 
    GPA: 4.0
};  

console.log(student); // will show the object student 

//how to access different properties w/in the object by referring directly to the property

console.log(student.name); //will equal "Bob"

console.log(student.grade); //will equal "A"

console.log(student.GPA); //will equal 4.0

//create an array (which is a list or collection of objects - must use [] to enclose the objects)
let students [
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



function printGrades(students) { //creates new function printGrades and uses array, students, as parameter 
    for (let i=0; i < students.length; i++) { //for loop - start at 1st object (element) in array (index=0) - if that is less than students.length (length of array students, which = 3 items), then log each student and their grades
        console.log(students[i].name + ": " + students[i].grades); //will display all students names and grades on 1 line, separated by semi-colon
    }
}

//how to add a new object in the array
function addStudent(name, grades){ //properties that will be included in the function are name and grades and are included as parameters
    let student = {
        name: name, //these are the properties
        grades: grades //these are the properties
    };
    students.push(student); //.push lets you add a variable to the array of students, called student
}

addStudent("Biff", [71, 80, 56, 65, 60]); //we assign the specific values for the function addStudent

printGrades(students); //now will print all the students including "Biff" and his grades


//how to assign a letter to all the numerical grades
function convertGrades(students){
    for (let i = 0; i < students.length; i++) {
        let grades = students[i].grades;
        let letterGrade = "";
        for (let j = 0; j < grades.length; j++) {
            if (grades[j] >= 90) {
                letterGrade += "A ";
            } else if (grades[j] >= 80) {
                letterGrade += "B ";
            } else if (grades[j] >= 70) {
                letterGrade += "C ";
            } else if (grades[j] >= 60) {
                letterGrade += "D ";
            } else {
                letterGrade += "F ";
            }
        }
        console.log(students[i].name + ": " + letterGrade); //will display the "students name": (space) individual letter grades
    }
}

convertGrades(students); //will show the students, in matrix form, and all their grades converted into letters

