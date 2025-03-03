function updateText(){
    document.getElementById("heading") .innerHTML = "";
}
function Magic8Ball(){
    //the users question..I hope
    var question = document.getElementById("questionInput").value.trim();  

    //if input is empty, stop execution 
    if (question ==="") {
        document.getElementById("finalResult").innerHTML = "Ask a question first!";
        return;
    }
    //list of responses
    var responses = [
        "It is certain.", "Reply hazy, try again", "Don’t count on it",
"It is decidedly so", "Ask again later", "My reply is no",
" No doubt about it", "I really shouldn't answer that..",	"My sources say no",
"Yes, indubitably",	"My third eye is blind atm, sorry",	"Outlook here sucks", 
"Count on it",	"Focus!...ask again", "I'd be shocked",
"As I see it, yep",	"Most likely", "Outlook lookin' good", "Yes", "Signs point to yes"	
    ];

    //generate random response
    var randomIndex = Math.floor(Math.random() *responses.length);
    var answer = responses[randomIndex];
    
    // Display the response in the <p> element
    document.getElementById("finalResult").innerHTML =answer;
}
