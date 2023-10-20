//JSON (JavaScript Object Notation) - lets you store data in structured way & use it in variety of ways
//JSON has key-value pairs


//Target ID info and add paragraph content to html
$("#info").html("<p>The info will go here</p>"); 

let line1, line1Text; //declaring variables 

//1st line of poem broken up into words 
//Each word = object w/ text property that designates each word in poem
line1 = [{
    text: "What",
    info: "Anaphora: The repetition of a word or phrase at the beginning of (usually successive) lines. Ex: the use of What in the first 4 lines."
}, {
    text: "hurrying"
}, {
    text: "human"
}, {
    text: 'tides'
}, {
    text: 'or'
}, {
    text: 'day'
}, {
    text: 'or'
}, {
    text: 'night!'
}
];
console.log('line1', line1); //will show each word as an array of objects

line1Text = "<blockquote><p>"; // opening tags for blockquote and p, we close them in the loop below

//map method iterates over each element & applies function - creates new array w/o changing original
//"word" defines the variable for each loop
//word = "what", "hurrying", "day" (from the above array)
//this is a loop
line1.map(function(word){
// Define var that will be entirety of a single word-sized chunk of info
    let wordString; 
    wordString = word.text
    //Test to see if .info property exists
    if (word.info){
        //if it does, wrap wordString in <a> tag
        //Add data-info attribute to the word - stores info property of clicked word
        wordString = "<a href='#' data-info='" + word.info + "'>" + wordString + "</a>";
    }
    //Add wordString + space to the line1Text
    //Like <blockquote><p>What hurrying human etc - space b/w each word
    line1Text = line1Text + wordString + " "; 
});

//Close the tags
line1Text = line1Text + "</p></blockquote>";

$("#poem").html(line1Text); //target div element w/ ID poem and change HTML to contain a blockquote & p 
$("#poem a").click(function () {
    let infoText, clickedWord, clickedInfo; //variables to capture the info text and the clicked text/info
    //"this" is self-referential to an object 
    clickedWord = $(this).text(); // get the clicked word
    // .data("info") looks for the data-info HTML attribute.
    clickedInfo = $(this).data("info"); // get the info from the clicked word using .data
    infoText = clickedInfo; // set the info text var to the clicked info
    $("#info").html(infoText); // change the info div to the info text

console.log('infoText', infoText); //infoText = clickedInfo so console 1
console.log('clickedWord', clickedWord);
});






// $("#poem a").click(function(){
//     //Define text & word that was clicked
//     let infoText, clickedWord;
//     clickedWord = $( this).text();
//     infoText = "<h2> You clicked on the word: " + clickedWord + "</h2>"
//     $('#info').html(infoText);
// });


// line1Text = line1Text + "<br />(line 2 would go here)</p></blockquote>";


//Use .map() to build a new array out of another array
//.join() returns array as string
// line1Text = line1.map(function (word) {
//     return word.text;
// }).join(" "); 



//TEST CODE

//.MAP() METHOD
//Use .MAP() to iterate over each element and apply a function - creates new array w/o changing original
//Use .map() to build a new array out of another array

// let testTextArray = [] //set it to empty array
// testTextArray = line1.map(function(word){ //test code
//     return word.text;
// })
// //console.log(testTextArray);


// //.map() creates new array out of array of word objects. New array has only .text property (the words) of each object

// //.JOIN() METHOD - returns array as string
// //This example will return the array of words as string, separated by space
// let testText = testTextArray.join(" "); //this is test code









