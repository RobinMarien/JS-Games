window.onkeydown = function (menu) {
    var keyPr = menu.keyCode;
    if (keyPr === 97) {
        document.getElementById("rock").click();
    } else if (keyPr === 98) {
        document.getElementById("blackjack").click();
    } else if (keyPr === 99) {
        document.getElementById("bricks").click();
    } else if (keyPr === 100) {
        document.getElementById("brick2").click();
    }else if (keyPr === 101) {
        document.getElementById("memory").click();
    }else if (keyPr === 102) {
        document.getElementById("blocks").click();
    }
};
