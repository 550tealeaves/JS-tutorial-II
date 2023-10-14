//Target ID info and add paragraph content to html
$("#info").html("<p>The info will go here</p>"); 

let line1, line1Text; //declaring variables 

//1st line of poem broken up into words 
//Each word = object w/ text property that designates each word in poem
line1 = [{
    text: "What"
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

//Use .map() to build a new array out of another array
//.join() returns array as string
line1Text = line1.map(function (word) {
    return word.text;
}).join(" "); 
$("#poem").html("<p>" + line1Text + "<br /></p>"); //target ID poem and add paragraph containing the returned word array spaced out





//.MAP() METHOD
//Use .MAP() to iterate over each element and apply a function - creates new array w/o changing original
//Use .map() to build a new array out of another array

let testTextArray = [] //set it to empty array
testTextArray = line1.map(function(word){ //test code
    return word.text;
})


//.map() creates new array out of array of word objects. New array has only .text property (the words) of each object

//.JOIN() METHOD - returns array as string
//This example will return the array of words as string, separated by space
let testText = testTextArray.join(" "); //this is test code







