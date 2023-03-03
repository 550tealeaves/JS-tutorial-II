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