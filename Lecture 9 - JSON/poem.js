//JSON (JavaScript Object Notation) - lets you store data in structured way & use it in variety of ways
	// • JSON objects are like JavaScript objects
	// • Written in key / value pairs
	// • Surrounded by { }
	// • Keys = strings
	// • Values = valid JSON data type(string, #, object, array, boolean, or null)
	// • Keys: values(always have colon)
	// • Key / value pairs separated by comma
	// • Arrays enclosed in [] & each element separated by comma



//PART 1 - Define the extra information section for the poem
//Target ID info and add paragraph content to html
$("#info").html("<p>The info will go here</p>"); 

// PART 2 - Display the first line of the poem and access info from the poem object if it exists
//in getJSON, grab the json file and store it as variable 
$.getJSON("poem.json", function(data){ //store JSON object in variable called data
    let poemText; //define new var to hold all the text from poem.json
    poemText = "<blockquote><p>"; //open the tags 
    //Iterate (map) over the data variable's .lines property
    //for every item in the array of lines is an array of objects that represents words
    data.lines.map(function(line){ //variable named line - could be any name
        //Define blank lineText
        let lineText = ""; //set to empty string
        //Iterate over each word.
        //Now w/in each array of objects, declare that there is a "word". For each word, we do something 
        line.map(function(word){ //word = every string in poem (the words)
            let wordString; //create variable wordString
            wordString = word.text; //set wordString = to the .text property for each word from the lines property in poem.json (data)
            if (word.info) {
                wordString = "<a href='#' data-info='" + word.info + "' data-wiki='" + word.wiki + "'>" + wordString + "</a>";
            } //added "'data-wiki='" + word.wiki so that wiki link shows 
            lineText = lineText + wordString + " "; //add the word to lineText var separated by space
        });
        // Add lineText w/ line break to poemText
        poemText = poemText + lineText + "<br />";
    });
    //Close poemText tags
    poemText = poemText + "</p></blockquote>";
    //Replace content of the poem
    $("#poem").html(poemText);
    //Add click event to the poem
    $("#poem a").click(function(){
        let infoText, clickedWord, clickedInfo; //create 3 var
        clickedWord = $( this ).text();
        //.data("info") looks for that data-info HTML attribute
        clickedInfo = $( this ).data("info");
        infoText = clickedInfo;
        clickedWiki = $( this ).data("wiki"); //create variable that stores the data from data-wiki as var - clickedWiki
        $("#info").html(infoText);
        $("#wiki").html(clickedWiki); //have clickedWiki display w/in the div w/ ID wiki

        //Added console logs but not necessary
        console.log('infoText', infoText); //infoText = clickedInfo so console 1
        console.log('clickedWord', clickedWord);
    });
}); //close getJSON method & callback function


//CHALLENGE 2 - returns an array of those integers, doubled. So if we give it [1, 2, 3], we receive, in turn, [2, 4, 6]. Display this info in the console.
let sampleData = [1, 2, 3];

const doubledData = sampleData.map(function (number) {
    return number * 2; //returns an array of transformed values
});

console.log(doubledData);








