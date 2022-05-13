let you = 0;
let comp = 0;

const buttons = document.querySelectorAll('.choice-box');

buttons.forEach(button => {
    button.addEventListener('click', () => game(button.id));
});


function check(){
    if(you==5){
        reset(true)
    }
    if(comp==5){
        reset(false)
    }
}

function reset(winner){
    setScore("");
    you=0;
    comp=0;
    document.getElementById("game-over").classList.add("game-over");
    
    if(winner){
        document.getElementById("game-over").innerHTML = "VICTORY";
    } else{
        document.getElementById("game-over").innerHTML = "DEFEAT";
    }
    setTimeout(()=>{
        document.getElementById("game-over").innerHTML = "";
        document.getElementById("game-over").classList.remove("game-over");
        setScore("");
    }, 2000);
}

function getComputerSelection(){
    var options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function result(verdict, win, lose){
    if(verdict=="WIN") you++;
    else comp++;
    setScore(verdict);
}

function startBattle(){
    document.getElementById("start-battle").classList.add("start-battle");
    document.getElementById("start-battle").innerHTML = "BATO";
    setTimeout(()=>{
        document.getElementById("start-battle").innerHTML += "BATO";
        setScore("");
    }, 500);
}

function playRound(playerSelection, computerSelection){
    // startBattle();
    switch(playerSelection){
        case "rock":
            if(computerSelection=="rock") setScore("DRAW");
            if(computerSelection=="paper") result("WIN", computerSelection, playerSelection);
            if(computerSelection=="scissors") result("LOSE", playerSelection, computerSelection);
            break;
        case "paper":
            if(computerSelection=="rock") result("WIN", playerSelection, computerSelection);
            if(computerSelection=="paper") setScore("DRAW");
            if(computerSelection=="scissors") result("LOSE", computerSelection, playerSelection);
            break;
        case "scissors":
            if(computerSelection=="rock") result("LOSE", computerSelection, playerSelection);
            if(computerSelection=="paper") result("WIN", playerSelection, computerSelection);
            if(computerSelection=="scissors") setScore("DRAW");
            break;
    }
}

function setScore(verdict){
    document.getElementById("verdict").innerHTML = verdict;
    document.getElementById("manScore").innerHTML = you;
    document.getElementById("computerScore").innerHTML = comp;
}

function game(userInput){
    let playerSelection = userInput;
    const computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    check();
}


