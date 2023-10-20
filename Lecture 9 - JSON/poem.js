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
$.getJSON("poem.json", function(data){ //store JSON object in variable called data
    let poemText; //define new var to hold all the text from poem.json
    poemText = "<blockquote><p>"; //open the tags 
    //Iterate (map) over the data variable's .lines property
    data.lines.map(function(line){ //variable named line
        //Define blank lineText
        let lineText = ""; //set to empty string
        //Iterate over each word. 
        line.map(function(word){ //word = every string in poem (the words)
            let wordString; //create variable wordString
            wordString = word.text; //set wordString = to the .text property for each word from the lines property in poem.json (data)
            if (word.info){
                wordString = "<a href='#' data-info='" + word.info + "'>" + wordString + "</a>"; 
            }
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
        $("#info").html(infoText);

        //Added console logs but not necessary
        console.log('infoText', infoText); //infoText = clickedInfo so console 1
        console.log('clickedWord', clickedWord);
    });
}); //close getJSON method & callback function









