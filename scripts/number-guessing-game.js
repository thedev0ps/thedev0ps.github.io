const secretNumber = Math.floor(Math.random() * (11 - 1) + 1)
const lives = document.getElementById("lives");
const guess = document.getElementById("guess");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
let livesLeft = 3;


guess.focus();
lives.textContent=`Lives: ${" ❤️ ".repeat(livesLeft)}`;
submitBtn.onclick = function() {
    if (livesLeft > 0) {
        if (0 < guess.value && guess.value <= 10) {
            if (guess.value == secretNumber) {
                document.getElementById("mystery").textContent = secretNumber;
                result.innerHTML = `You won! Wanna <a href=".">play again?</a>`;
                guess.disabled = true;
                submitBtn.disabled = true;
            } else {
                livesLeft--;
                if (livesLeft == 0) {
                    document.getElementById("mystery").textContent = secretNumber;
                    lives.textContent = "Lives: 💀 💀 💀";
                    result.innerHTML = `You lost...the secret number was ${secretNumber}<br>Wanna <a href=".">try again?</a>`;
                } else {
                    lives.textContent = `Lives: ${" ❤️ ".repeat(livesLeft) + " 💀 ".repeat(3-livesLeft)}`;
                };
            };
        } else {
            result.textContent = "Your guess should be from 1 to 10";
        }
        guess.value = null;
        guess.focus();
    };
};