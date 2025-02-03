const game = document.querySelector(".container")
const restartBtn = document.createElement("button")
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const option = ["rock", "paper", "scissors"];
const outcomes = {
    rock: { scissors: "win", paper: "lose" },
    paper: { rock: "win", scissors: "lose" },
    scissors: { paper: "win", rock: "lose" }
};
restartBtn.id = "restartBtn";
restartBtn.textContent = "Play again"
let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener("click", function(event) {
        const computerChoice = option.at(Math.floor(Math.random() * 3));
        let userChoice = event.target.id;
        choices.forEach(button => button.disabled = true);
        document.getElementById("pick").textContent = `You chose ${userChoice}!`;
        if (userChoice === computerChoice) {
            result.innerHTML = `The computer chose ${computerChoice}.<br>You drew.`;
        } else {
            const outcome = outcomes[userChoice][computerChoice];
            result.innerHTML = `The computer chose ${computerChoice}.<br>You ${outcome}!`;
            if (outcome == "win") {
                userScore++;
            } else {
                computerScore++;
            }
        };
        document.getElementById("header").textContent = `Player ${userScore} - ${computerScore} Computer`
        game.appendChild(restartBtn);
        restartBtn.onclick = function() {
            choices.forEach(btn => btn.disabled = false);
            game.removeChild(restartBtn);
            document.getElementById("pick").textContent = "Take your pick!"
            result.innerHTML = "";
        }
    });
});

