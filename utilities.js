'use strict'

function getRandomFromTo(low, high){
	let error = true;
	if ( ! Number.isInteger(low) )
	{
		alert("getRandomFromTo called when 'low' is not an integer --- "+low);
	}else if ( ! Number.isInteger(high) )
	{
		alert("getRandomFromTo called when 'high' is not an integer --- "+high);
	}else if ( low >= high )
	{
		alert("getRandomFromTo called when 'low' is greater than or equal to 'high' --- "
			+"low: "+low+"    high: "+high);
	}else
	{
		error = false;
	}
	
	if (error)
	{
		return -1;
	}else
	{
		let range = high - low + 1;
		let answer = (Math.floor(Math.random() * range)) + low;
		return answer;
	}
}

function getRandomPair(data) {
	let randomIndex = getRandomFromTo(0,data.length - 1);
	let thePair = data[randomIndex];       
	return thePair;
}

function disableButton(buttonId){
	document.getElementById(buttonId).disabled = true;
}

function enableButton(buttonId){
	document.getElementById(buttonId).disabled = false;
}