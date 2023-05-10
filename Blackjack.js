let timer = 60;
let timeDivAddress = document.getElementById("timer");

let timerFunctionVariable = setInterval(function () {
    if (timer == 0) {
        window.open("blackjack-page-two.html", "_self");
        clearInterval(timerFunctionVariable);
    } else {
        timeDivAddress.innerHTML = timer;
        if (timer <= 10)
            timeDivAddress.style.color = "red";
    }
    timer--;
}, 1000);
