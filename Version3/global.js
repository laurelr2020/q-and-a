'use strict'

class Global{
    constructor(){       
        this.smkDeck = new SmkCardDeck();

        this.currentQuestion = getRandomPair(this.smkDeck.deck.smk_cards);  
        this.getNewQuestion = function getNewQuestion(){
            this.currentQuestion = getRandomPair(this.smkDeck.deck.smk_cards);  
        }

        this.correctCount = 0;
    }
}