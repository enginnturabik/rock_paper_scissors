const player_text=document.querySelector("#player");
const computer_text=document.querySelector("#computer");
const result_text=document.querySelector("#result");
const choice =document.querySelectorAll("button");

let player;
let computer;



choice.forEach(button => button.addEventListener("click",() =>{
    player=button.textContent;
    computer_turn();
    result_text.textContent = check_winner();
    player_text.textContent=`Player: ${player}`;
    computer_text.textContent=`Computer: ${computer}`;



}))



function computer_turn()
{
    const random_number=Math.floor(Math.random() * 3) + 1;

    switch (random_number)
    {
        case 1:
            computer ="ROCK";
            break;

        case 2:
            computer="PAPER";
            break;

        case 3:
            computer ="SCISSORS";
            break;
    }
}

function check_winner()
{
    if (player === computer)
    {
        return "Draw!";
    } else if (computer === "ROCK") {
        return (player === "PAPER") ? "You win!" : "You Lose!";
    } else if (computer === "PAPER") {
        return (player === "SCISSORS") ? "You win!" : "You Lose!";
    } else if (computer === "SCISSORS") {
        return (player === "ROCK") ? "You win!" : "You lose!";
    }
}