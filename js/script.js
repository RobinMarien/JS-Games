window.onkeydown = function (menu) {
    var keyPr = menu.keyCode;
    if (keyPr === 97) {
        document.getElementById("rock").click();
    } else if (keyPr === 98) {
        document.getElementById("blackjack").click();
    } else if (keyPr === 99) {
        document.getElementById("memory").click();
    } else if (keyPr === 100) {
        document.getElementById("block").click();
    }
};