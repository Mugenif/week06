// Create a variable for suits with suits objects
//Create a variable for ranks with cards rank objects

//Define a Card class that has properties like rank and suit.

//Define a Deck class that contains an array of Card objects. 

// We can initialize this array with all 52 cards, 

//then shuffle them using a shuffling algorithm in JavaScript.

//Define a Player class that has a name and an array to hold the Card objects that the player possesses.

//Define a Game class that has two Player objects, a Deck object, and an array to hold the cards played in each round.

//Implement a method to deal the cards to the players, which will divide the deck equally between the two players.

//Implement a method to play a round of the game. In each round, the top card from each player's deck is drawn and added to the array of cards played. The player with the highest card wins the round and takes all the cards played. In the case of a tie, nothing happens.

//Implement a method to check if a player has won the game. This can be done by checking if a player has all the cards.

//Finally, implement the main logic that creates the players, the deck, and starts the game. The game continues until one of the players has all the cards.

const suits =["♥","♦","♠","♣"]
const ranks = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"]


class cards {
    constructor (rank,suit){
        this.rank = rank;
        this.suit = suit;
    }
}
class deck {
    constructor(cards){
        this.cards = cards;

        }
    }


function freshDeck(){
    return suits.flatMap(suit =>{
        return ranks.map(value =>{
            return new cards(suit, value);
        
        }
    }
}