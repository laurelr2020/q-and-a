'use strict'

class Global{
    constructor(){
        this.presidents = new Presidents();

        this.currentQuestion = getRandomPair(this.presidents.data.presidents);

        this.getNewQuestion = function getNewQuestion(){
            this.currentQuestion = getRandomPair(this.presidents.data.presidents);  
        }

        this.correctCount = 0;
    }
}