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

//Use .map() to build a new array out of another array
//.join() returns array as string
// line1Text = line1.map(function (word) {
//     return word.text;
// }).join(" "); 


line1Text = "<blockquote><p>"; // opening tags for blockquote and p, we close them in the loop below
line1.map(function(word){
    line1Text = line1Text + word.text + " "; //add word object's .text property & space
})
//Break line & close 2 tags
line1Text = line1Text + "<br />(line 2 would go here)</p></blockquote>";
$("#poem").html(line1Text); //target ID poem 





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







