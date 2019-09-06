var A = 11;
var J = Q = K = 10;

var card = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K,
            A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K,
            A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K,
            A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];

var cardImg = [
            "img/blackjack/clubs1",
            "img/blackjack/clubs2",
            "img/blackjack/clubs3",
            "img/blackjack/clubs4",
            "img/blackjack/clubs5",
            "img/blackjack/clubs6",
            "img/blackjack/clubs7",
            "img/blackjack/clubs8",
            "img/blackjack/clubs9",
            "img/blackjack/clubs10",
            "img/blackjack/clubsjack",
            "img/blackjack/clubsqueen",
            "img/blackjack/clubsking",
            "img/blackjack/diamond1",
            "img/blackjack/diamond2",
            "img/blackjack/diamond3",
            "img/blackjack/diamond4",
            "img/blackjack/diamond5",
            "img/blackjack/diamond6",
            "img/blackjack/diamond7",
            "img/blackjack/diamond8",
            "img/blackjack/diamond9",
            "img/blackjack/diamond10",
            "img/blackjack/diamondjack",
            "img/blackjack/diamondqueen",
            "img/blackjack/diamondking",
            "img/blackjack/hearts1",
            "img/blackjack/hearts2",
            "img/blackjack/hearts3",
            "img/blackjack/hearts4",
            "img/blackjack/hearts5",
            "img/blackjack/hearts6",
            "img/blackjack/hearts7",
            "img/blackjack/hearts8",
            "img/blackjack/hearts9",
            "img/blackjack/hearts10",
            "img/blackjack/heartsjack",
            "img/blackjack/heartsqueen",
            "img/blackjack/heartsking",
            "img/blackjack/spades1",
            "img/blackjack/spades2",
            "img/blackjack/spades3",
            "img/blackjack/spades4",
            "img/blackjack/spades5",
            "img/blackjack/spades6",
            "img/blackjack/spades7",
            "img/blackjack/spades8",
            "img/blackjack/spades9",
            "img/blackjack/spades10",
            "img/blackjack/spadesjack",
            "img/blackjack/spadesqueen",
            "img/blackjack/spadesking"];

document.getElementById("hit").addEventListener("click", function(){
    var random = Math.floor(Math.random()* (card.length+1));
    console.log(random);
    console.log(card[random]);
    console.log (cardImg[random]);

    
})