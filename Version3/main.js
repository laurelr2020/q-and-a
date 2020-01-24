'use strict'

let global, guess;

function init(){
    global = new Global();
}

function showQuestion() {
    global.getNewQuestion();
	let currentQuestion = global.currentQuestion;

	console.log(currentQuestion);
	
	let element = document.getElementById("question");
	element.innerHTML = "Question: What spell type is "+ currentQuestion.card +"?";
	
	element = document.getElementById("answer");
	element.innerHTML = "Answer: ??? ";
}

function showAnswer() {
	let currentAnswer = global.currentQuestion;
	let element = document.getElementById("answer");
	element.innerHTML = "Answer: "+ currentAnswer.spell;
}

function guessAnswer(){
    guess = document.getElementById("input-guess").value;
    guess = guess.toLowerCase();
    compare();
    document.getElementById("input-guess").value = "";
}

function compare(){
	let answer = (global.currentQuestion.spell).toLowerCase();
	if(guess == answer){
        Swal.fire({
            title: 'RIGHT ON!!',
            text: 'Your guess is right on!',
            icon: 'success',
            confirmButtonText: 'Nice Job!'
        })
        updateCorrectCount();
        showAnswer();
	}else{
        Swal.fire({
            title: 'Wrong',
            text: 'Incorrect',
            icon: 'error',
            confirmButtonText: 'Give it another go'
        })
    }
}

function updateCorrectCount(){
    global.correctCount++;
    let count = document.getElementById("count");
    count.innerHTML = "Total Correct: " + global.correctCount;
}

function showAllCards(){
    let headings = global.smkDeck.tableHeadings.headings;
    let cards = global.smkDeck.deck.smk_cards;


    //create table and table body. add table body to table.
    let table = document.createElement('TABLE');
    table.setAttribute("id", "card-table");
    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    //create table heading.
    let trHead = document.createElement('TR');
    let thCard = document.createElement('TH');
    let thSpell = document.createElement('TH');
    thCard.appendChild(document.createTextNode(headings[0].title));
    thSpell.appendChild(document.createTextNode(headings[1].title));

    trHead.appendChild(thCard);
    trHead.appendChild(thSpell);
    tableBody.appendChild(trHead);

    //populate table with data.
    for (let i = 0; i < cards.length; i++) {
        let tr = document.createElement('TR');

        let tdCard = document.createElement('TD');
        let tdSpell = document.createElement('TD');

        tdCard.appendChild(document.createTextNode(cards[i].card));
        tdSpell.appendChild(document.createTextNode(cards[i].spell));
        tr.appendChild(tdCard);
        tr.appendChild(tdSpell);

        tableBody.appendChild(tr);
    }
    //add table to div 
    let tableDiv = document.getElementById("dataArea");
    tableDiv.appendChild(table);

    //disable show button
	disableButton("show-data");
}

function hideAllCards(){
    let table = document.getElementById("card-table");
    table.remove();
    enableButton("show-data");
}
