var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} 	else {
	alert("Sorry, try again.");
	}
}

var flipcard = function(cardID) {
	cardsInPlay.push(cards[cardID]);
	console.log ("User flippped " + cards[cardID]);

	if  (cardsInPlay.length === 2);
	checkForMatch();
}

flipcard(0);
flipcard(2);
