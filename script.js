

var weapons = document.querySelectorAll("button");

weapons.forEach((weapon) => {
    weapon.addEventListener('click', () => {

        var choice = weapon.getAttribute("id");
        var comp = Math.random();

        if (comp < 0.34){
            comp = "rock";
        }
        else if (comp < 0.67) {
            comp = "paper";
        }
        else{
            comp = "scissors";
        }
        console.log(comp)

        if(choice == comp){
            
        }
    });
});
