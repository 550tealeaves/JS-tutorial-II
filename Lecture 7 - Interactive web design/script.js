//Use jQuery methods to add functionality $("argument")
//Can find more jQuery methods at http://api.jquery.com/

//HIDE AN ELEMENT - use .hide() method 
//$('h1').hide(); //hides all h1 elements


//SELECTING AN ID - lets us target a single element
$("#noShow").hide(); //will hide the element w/ ID "noshow"


//CHANGE TEXT in hTML - use .html() method
$("h1").html("The Best Jokes Ever!"); //will change ALL h1 elements to the new text


//Use .html() method to make corrections to html 
$(".editJoke").html("<p>Q.What's the difference between a genie and an academic? <br /> A: One grants wishes, the other wishes for grants.")


//APPENDING ELEMENTS - can automatically update list as users add more jokes
//Use .append() method to add a new paragraph element w/in id joke of section element
$("#joke").append("<p>Q. What did one plate say to another? <br /> A: Tonight, dinner's on me!");


//APPEND FOOTER to the jokes section - can style it in CSS
$("#joke").append("<footer>For a list of awesome dad jokes, please visit <a  href='https://www.today.com/life/dad-jokes-rcna27325'>Today.com</a></footer>")



//CAN DO CSS STYLING IN JS .css() method - style button
$("#toggleJokes").css("background-color", "cornflowerblue");
$("#toggleJokes").css("color", "white");
$("#toggleJokes").css("font-size", "20px");
$("#toggleJokes").css("padding", "10px");
$("#toggleJokes").css("border-radius", "20px"); //rounds the border
$("#toggleJokes").css("border", "4px solid darkred");
$("#toggleJokes").css("margin", "10px");


//Style the footer
$("footer").css("color", "red");
$("footer").css("padding-bottom", "12px");


//Style the image
$("img").css("border-radius", "43px");
$("img").css("box-shadow", "12px 12px 2px 1px rgba(0, 0, 255, .2)");

//CLEANER & MORE READABLE CODE - use 1 .css() method and wrap all the properties w/in {} and separate w/ commas - similar to style.css 
//Like writing an object
$("#toggleJokes").css({
    "background-color": "cornflowerblue",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "20px",
    "border": "4px solid darkred",
    "margin": "10px"
});


//CLEANER - Style the footer
$("footer").css({
    "color": "red",
    "padding-bottom": "12px"
});


//CLEANER - Style the img
$("img").css({
    "border-radius": "43px",
    "box-shadow": "12px 12px 2px 1px rgba(0, 0, 255, .2)"
})

//CLEANER - Style the other button
$("#changeStyle").css({
    "background-color": "lightseagreen",
    "color": "yellow",
    "font-size": "15px",
    "padding": "10px",
    "border": "3px dashed chocolate",
    "border-radius": "25px",
    "margin": "30px auto",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center"
});


//ADD INTERACTIVITY TO BUTTON to show/hide jokes section when clicked
//Use .click() method to add click event
//Use .toggle() method to toggle the display
//1. Select button w/ id toggleJokes, add click event. Then add function that runs on the click.
//2. unction selects joke section and adds .toggle() method that shows/hides section
$("#toggleJokes").click(function(){ 
    $("#joke").toggle();
});

//(1) Create prompt asking if the jokes are good or bad
//(2) If response === "bad", then change the header to "The Worst Jokes Ever"
//(3) If response === "good", keep the header as is The best jokes ever 
//(4) if neither response, let h1 say "bad jokes galore"
let response = prompt("Are these jokes good or bad?");
if (response === "bad") {
    $("h1").html("The Worst Jokes Ever :-(");
} else if (response === "good") {
    $("h1").html("The Best Jokes Ever :-)");
} else {
    $("h1").html("Bad Jokes Galore");
}

//Create a button that changes the overall color scheme (background-color, text color etc) of page
//(1) Created button in HTML
//(2) Styled it in JS
$("#changeStyle").click(function(){
    $("body").toggle().css({
        "background-color": "forestgreen",
        "color": "olive",
        "font-style": "italic",
        "font-size": "25px",
        "font-family": "Times New Roman', Times, serif",
        "border": "16px solid pink",
        "border-radius": "80px", 
        "text-decoration": "underline dashed 4px purple",
        "text-transform": "capitalize",
        "box-shadow": "27px 52px 4px 2px rgba(221, 132, 55, .4)",
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "left",
        "align-items": "self-start"
    }); 
});
