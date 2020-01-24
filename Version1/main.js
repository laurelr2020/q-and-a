'use strict'

let global;

function init(){
    global = new Global();
}

function showQuestion() {
    global.getNewQuestion();
	let currentQuestion = global.currentQuestion;

	console.log(currentQuestion);	
	let element = document.getElementById("question");
	element.innerHTML = "Question: When was the inauguration of "+ currentQuestion.president+"?";
	
	element = document.getElementById("answer");
	element.innerHTML = "Answer: ??? ";
}

function showAnswer() {
	let currentAnswer = global.currentQuestion;

	let element = document.getElementById("answer");
	element.innerHTML = "Answer: "+ currentAnswer.inauguration;
}

function showAllData() {
    let headings = global.presidents.tableHeadings.headings;
    let data = global.presidents.data.presidents;

    //create table and table body. add table body to table.
    let table = document.createElement('TABLE');
    table.setAttribute("id", "data-table");
    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    //create table heading.
    let trHead = document.createElement('TR');
    let thData = document.createElement('TH');
    let thYear = document.createElement('TH');
    thData.appendChild(document.createTextNode(headings[0].title));
    thYear.appendChild(document.createTextNode(headings[1].title));

    trHead.appendChild(thData);
    trHead.appendChild(thYear);
    tableBody.appendChild(trHead);

    //populate table with data.
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('TR');

        let tdData = document.createElement('TD');
        let tdYear = document.createElement('TD');

        tdData.appendChild(document.createTextNode(data[i].president));
        tdYear.appendChild(document.createTextNode(data[i].inauguration));
        tr.appendChild(tdData);
        tr.appendChild(tdYear);

        tableBody.appendChild(tr);
    }
    //add table to div 
    let tableDiv = document.getElementById("dataArea");
	tableDiv.appendChild(table);

	//disable show button
	disableButton("show-data");
}

function hideAllData() {
	let element = document.getElementById("dataArea");
	element.innerHTML = "";
	enableButton("show-data");
}
