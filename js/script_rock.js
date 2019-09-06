document.getElementById("pscore").innerText = window.localStorage.getItem('player_score');
document.getElementById("cscore").innerText = window.localStorage.getItem('computer_score');

if (window.localStorage.getItem("player_score") == undefined || window.localStorage.getItem("player_score") == "{}"){
    document.getElementById("pscore").innerText = "0";
};
if (window.localStorage.getItem("computer_score") == undefined || window.localStorage.getItem("computer_score") == "{}"){
    document.getElementById("cscore").innerText = "0";
};

var weapons = document.getElementById("buttongroup").querySelectorAll("button");

weapons.forEach((weapon) => {
    weapon.addEventListener('click', () => {

        var choice = weapon.getAttribute("id");
        var comp = Math.random();
        var playerImg = document.getElementById("choice");
        var compImg = document.getElementById("computer");
        var result = document.getElementById("result");
        var pscore = parseInt(document.getElementById("pscore").innerHTML,10);
        var cscore = parseInt(document.getElementById("cscore").innerHTML,10)

        playerImg.setAttribute("src", "./img/rock/"+choice+".png");

        if (comp < 0.30){
            comp = "rock";
            compImg.setAttribute("class", "imgflip");
        }
        else if (comp < 0.60) {
            comp = "paper";
            compImg.setAttribute("class", "imgflip");
        }
        else if (comp < 0.90){
            comp = "scissors";
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
        else if (choice == "rock" && comp == "scissors"){
            result.innerText = "The computer chose Scissors!\nYou win!";
            pscore++;
            document.getElementById("pscore").innerText= pscore;
        }
        else if (choice == "rock" && comp == "paper"){
            result.innerText = "The computer chose Paper!\nYou lose!";
            cscore++;
            document.getElementById("cscore").innerText= cscore;
        }
        else if (choice == "paper" && comp == "rock"){
            result.innerText = "The computer chose Rock!\nYou win!";
            pscore++;
            document.getElementById("pscore").innerText= pscore;
        }
        else if (choice == "paper" && comp == "scissors"){
            result.innerText = "The computer chose Scissors!\nYou lose!";
            cscore++;
            document.getElementById("cscore").innerText= cscore;
        }
        else if (choice == "scissors" && comp == "paper"){
            result.innerText = "The computer chose Paper!\nYou win!";
            pscore++;
            document.getElementById("pscore").innerText= pscore;
        }
        else if (choice == "scissors" && comp == "rock"){
            result.innerText = "The computer chose Rock!\nYou lose!";
            cscore++;
            document.getElementById("cscore").innerText= cscore;
        }
        else{
            result.innerText = "Aww shit, the computer chose THE Rock!!!\nYou can't beat him.. and he demands 3 points!";
            pscore -= 3;
            cscore += 3;
            document.getElementById("pscore").innerText= pscore;
            document.getElementById("cscore").innerText= cscore;
        }

        if (pscore <= 0){
            pscore = 0;
            document.getElementById("pscore").innerText= pscore;
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
