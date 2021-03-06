document.getElementById("pscore").innerText = window.localStorage.getItem('player_score');
document.getElementById("cscore").innerText = window.localStorage.getItem('computer_score');

if (window.localStorage.getItem("player_score") == undefined || window.localStorage.getItem("player_score") == "{}"){
    document.getElementById("pscore").innerText = "0";
};
if (window.localStorage.getItem("computer_score") == undefined || window.localStorage.getItem("computer_score") == "{}"){
    document.getElementById("cscore").innerText = "0";
};

//var weapons = document.getElementById("buttongroup").querySelectorAll("button");
const RADIX = 10;
const SCISSORS = "scissors";

document.querySelectorAll("#buttongroup button").forEach((weapon) => {
    weapon.addEventListener('click', () => {

        var choice = weapon.getAttribute("id");
        var comp = Math.random();
        var playerImg = document.getElementById("choice");
        var compImg = document.getElementById("computer");
        var result = document.getElementById("result");
        var pscore = parseInt(document.getElementById("pscore").innerHTML,RADIX);
        var cscore = parseInt(document.getElementById("cscore").innerHTML,RADIX)

        playerImg.setAttribute("src", "./img/rock/"+choice+".png");

        if (comp < 0.32){
            comp = "rock";
            compImg.setAttribute("class", "imgflip");
        }
        else if (comp < 0.64) {
            comp = "paper";
            compImg.setAttribute("class", "imgflip");
        }
        else if (comp < 0.96){
            comp = SCISSORS;
            compImg.setAttribute("class", "imgflip");
        }
        else{
            comp = "therock";
            compImg.removeAttribute("class");
        }

        compImg.setAttribute("src", "./img/rock/"+comp+".png");

        console.log(comp);

        if(choice == comp){
            result.innerText = "It's a Draw!"
        }
        else if ((choice == "rock" && comp == SCISSORS)
            || (choice == "paper" && comp == "rock")
            || (choice == "scissors" && comp == "paper")){
            result.innerText = "The computer chose "+ comp +"!\nYou win!";
            pscore++;
            document.getElementById("pscore").innerText= pscore;
        }
        else if (choice == "rock" && comp == "paper"){
            result.innerText = "The computer chose Paper!\nYou lose!";
            cscore++;
            document.getElementById("cscore").innerText= cscore;
        }
        else if (choice == "paper" && comp == SCISSORS){
            result.innerText = "The computer chose Scissors!\nYou lose!";
            cscore++;
            document.getElementById("cscore").innerText= cscore;
        }
        else if (choice == "scissors" && comp == "rock"){
            result.innerText = "The computer chose Rock!\nYou lose!";
            cscore++;
            document.getElementById("cscore").innerText= cscore;
        }
        else{
            result.innerText = "Aww shit, the computer chose THE Rock!!!\nYou can't beat him.. and he demands 3 points!";
            pscore = Math.max(pscore - 3, 0);
            cscore += 3;
            document.getElementById("pscore").innerText= pscore;
            document.getElementById("cscore").innerText= cscore;
        }

        window.localStorage.setItem('computer_score', JSON.stringify(cscore));
        window.localStorage.setItem('player_score', JSON.stringify(pscore));
    });
});

document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("pscore").innerHTML = "0";
    document.getElementById("cscore").innerHTML = "0";
    window.localStorage.setItem('computer_score', JSON.stringify(cscore));
    window.localStorage.setItem('player_score', JSON.stringify(pscore));

});
