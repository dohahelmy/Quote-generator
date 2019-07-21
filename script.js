//Funny Quotes arrays
let arr_start1 = ['Life is short,','Always remember that','The answer you are looking for is', 'An apple a day keeps anyone', 'I am sorry,'];
let arr_middle1 = ['smile while you','you are unique,','inside of you,', 'away if you throw it', 'if you were right,'];
let arr_end1 = ['still have teeth.','just like everyone else.','but it is wrong.', 'hard enough.', 'I would agree with you.'];

//Insult Quotes arrays
let arr_start2 = ['If I wanted to kill myself','Roses are red violets are blue,','Why don\'t you slip into', 'Keep talking,', 'It is better to let someone think'];
let arr_middle2 = ['I would climb your ego and','god made me pretty,','something more comfortable', 'someday you will say', 'you are an Idiot than to'];
let arr_end2 = ['jump to your IQ.','what happened to you?','like a coma.', 'something intelligent!', 'open your mouth and prove it.'];

//buttons of quote types definitions
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let quoteType = 1;
// display definition
let display = document.getElementById('quote-display');

// style changing over button
function buttonStyleChange(first_button, second_button) {
    first_button.classList.add("button-style");
    second_button.classList.remove("button-style");
}

//functions of choosing quote type
function btn1_click() {
    quoteType = 1;
    buttonStyleChange(btn1, btn2);
}
function btn2_click() {
    quoteType = 2;
    buttonStyleChange(btn2, btn1);
}

// number of quotes function
function quoteValue(){
    let quotes = document.getElementsByName('quotes');
    for(let i = 0; i < quotes.length; i++){
        if(quotes[i].checked){
            return quotes[i].value;
        }
    }
}

// displaying quotes function
function quoteSelect(arr_start, arr_middle, arr_end){
    let start_num = Math.floor(Math.random() * (arr_start.length));
    let middle_num = Math.floor(Math.random() * (arr_middle.length));
    let end_num = Math.floor(Math.random() * (arr_end.length));
    let empty_space = " ";

    let output = arr_start[start_num] + empty_space + arr_middle[middle_num] + empty_space + arr_end[end_num] +"<br>";

    display.innerHTML += output;
}

// output function
function generate(){
    let quote_value = quoteValue();
    display.innerHTML ="";

    if (quoteType==1) {
        for (let i = 0; i < quote_value; i++) {
            quoteSelect(arr_start1, arr_middle1, arr_end1);
        }
    } else if (quoteType==2) {
        for (let i = 0; i < quote_value; i++) {
            quoteSelect(arr_start2, arr_middle2, arr_end2);
        }
    }
}
