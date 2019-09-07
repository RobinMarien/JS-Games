// ARRAYS
var A = 11;
var J = Q = K = 10;

var card = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K,
            A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K,
            A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K,
            A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];

var cardImg = [
            "img/blackjack/clubs1.png",
            "img/blackjack/clubs2.png",
            "img/blackjack/clubs3.png",
            "img/blackjack/clubs4.png",
            "img/blackjack/clubs5.png",
            "img/blackjack/clubs6.png",
            "img/blackjack/clubs7.png",
            "img/blackjack/clubs8.png",
            "img/blackjack/clubs9.png",
            "img/blackjack/clubs10.png",
            "img/blackjack/clubsjack.png",
            "img/blackjack/clubsqueen.png",
            "img/blackjack/clubsking.png",
            "img/blackjack/diamond1.png",
            "img/blackjack/diamond2.png",
            "img/blackjack/diamond3.png",
            "img/blackjack/diamond4.png",
            "img/blackjack/diamond5.png",
            "img/blackjack/diamond6.png",
            "img/blackjack/diamond7.png",
            "img/blackjack/diamond8.png",
            "img/blackjack/diamond9.png",
            "img/blackjack/diamond10.png",
            "img/blackjack/diamondjack.png",
            "img/blackjack/diamondqueen.png",
            "img/blackjack/diamondking.png",
            "img/blackjack/hearts1.png",
            "img/blackjack/hearts2.png",
            "img/blackjack/hearts3.png",
            "img/blackjack/hearts4.png",
            "img/blackjack/hearts5.png",
            "img/blackjack/hearts6.png",
            "img/blackjack/hearts7.png",
            "img/blackjack/hearts8.png",
            "img/blackjack/hearts9.png",
            "img/blackjack/hearts10.png",
            "img/blackjack/heartsjack.png",
            "img/blackjack/heartsqueen.png",
            "img/blackjack/heartsking.png",
            "img/blackjack/spades1.png",
            "img/blackjack/spades2.png",
            "img/blackjack/spades3.png",
            "img/blackjack/spades4.png",
            "img/blackjack/spades5.png",
            "img/blackjack/spades6.png",
            "img/blackjack/spades7.png",
            "img/blackjack/spades8.png",
            "img/blackjack/spades9.png",
            "img/blackjack/spades10.png",
            "img/blackjack/spadesjack.png",
            "img/blackjack/spadesqueen.png",
            "img/blackjack/spadesking.png"];

//  SET STARTING CARDS

var random1 = Math.floor(Math.random()* (card.length));
var random2 = Math.floor(Math.random()* (card.length));
var random3 = Math.floor(Math.random()* (card.length));

document.getElementById("card-one").src = cardImg[random1];
document.getElementById("card-two").src = cardImg[random2];
document.getElementById("dcard-one").src = cardImg[random3];

var pscore = Number(document.getElementById("pscore").innerText);
pscore = card[random1]+card[random2];
document.getElementById("pscore").innerText = pscore;

if (pscore == 21){
    document.getElementById("result").innerText = "Blackjack!!! You won!";
    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("reset").style.display = "inline";
}

var dscore = Number(document.getElementById("dscore").innerText);
dscore = card[random3];
document.getElementById("dscore").innerText = dscore;

//  HIT BUTTON

document.getElementById("hit").addEventListener("click", function(){
    var random = Math.floor(Math.random()* (card.length));

    console.log(random);
    console.log(card[random]);
    console.log (cardImg[random]);

    var img = document.createElement("img");
    img.src = cardImg[random];
    var pcards = document.getElementById("pcards");
    pcards.appendChild(img);


    var pscore = Number(document.getElementById("pscore").innerText);
    pscore = pscore+card[random];

    document.getElementById("pscore").innerText = pscore;

    if (pscore == 21){
        document.getElementById("result").innerText = "Blackjack!!! You won!";
        document.getElementById("hit").style.display = "none";
        document.getElementById("stand").style.display = "none";
        document.getElementById("reset").style.display = "inline";
    }

    else if (pscore > 21){
        document.getElementById("result").innerText = "You lost!";
        document.getElementById("hit").style.display = "none";
        document.getElementById("stand").style.display = "none";
        document.getElementById("reset").style.display = "inline";
    }
});

// STAND BUTTON

document.getElementById("stand").addEventListener("click", function(){
    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("reset").style.display = "inline";

    var random = Math.floor(Math.random()* (card.length));

    document.getElementById("dcard-two").src = cardImg[random];
    var dscore = Number(document.getElementById("dscore").innerText);
    var pscore = Number(document.getElementById("pscore").innerText);

    dscore = dscore + card[random];
    document.getElementById("dscore").innerText = dscore;

    if (dscore < 17){
        do{
            var random = Math.floor(Math.random()* (card.length));
            var img = document.createElement("img");
            img.src = cardImg[random];
            var pcards = document.getElementById("dcards");
            pcards.appendChild(img);

            dscore = dscore + card[random];
            document.getElementById("dscore").innerText = dscore;
        }
        while(dscore <= 17);
    }

    if (pscore > dscore && dscore < 21){
        document.getElementById("result").innerText = "You won!";
    }
    else if (pscore == dscore && dscore <= 21){
        document.getElementById("result").innerText = "It's a draw";
    }
    else {
        document.getElementById("result").innerText = "You lost!";
    }
});

document.getElementById("reset").addEventListener("click", function(){
    location.reload();
});