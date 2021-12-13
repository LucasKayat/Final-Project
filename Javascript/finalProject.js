var gameRound = 0
var totalPlayerPoints = 0
var totalComputerPoints = 0
var playerDice1 = document.getElementById("p1d1")
var playerDice2 = document.getElementById("p1d2")
var computerDice1 = document.getElementById("p2d1")
var computerDice1 = document.getElementById("p2d2")
var rollDiceButton = document.getElementById("rollDice")
var newGameButton = document.getElementById("newDice")
var playerRollMsg = document.getElementById("playerRollMsg")
var computerRollMsg = document.getElementById("computerRollMsg")
var playerScore = document.getElementById("playerScore")
var computerScore = document.getElementById("computerScore")
var hoverButton = document.getElementById("hoverButton")
var rulesPage = document.getElementById("rulesPage")
var p1Score = document.getElementById("p1Score")
var p2Score = document.getElementById("p2Score")
var dice1Num = (Math.floor(Math.random() * 6) + 1);
var dice2Num = (Math.floor(Math.random() * 6) + 1);
var dice3Num = (Math.floor(Math.random() * 6) + 1);
var dice4Num = (Math.floor(Math.random() * 6) + 1);
const startPath = "Images/"
const endPath = ".png"
var playerTracker = 0
var computerTracker = 0
var Enabled = "yes"


rollDiceButton.addEventListener("click", function(event){
    if (Enabled == "yes"){
        console.log("click")
        $(p1d1).attr("src", startPath + dice1Num + endPath);
        $(p1d2).attr("src", startPath + dice2Num + endPath);
        $(p2d1).attr("src", startPath + dice3Num + endPath);
        $(p2d2).attr("src", startPath + dice4Num + endPath);
    

        if (dice1Num == 1){
            playerRollMsg.innerHTML = "You Scored 0 Points... D:";
        }
        if (dice2Num == 1){
            playerRollMsg.innerHTML = "You Scored 0 Points... D:"
        }
        if (dice3Num == 1){
            computerRollMsg.innerHTML = "The Computer Got 0 Points... :D";
        }
        if (dice4Num == 1){
            computerRollMsg.innerHTML = "The Computer Got 0 Ponts... :D";
        }
        if (dice1Num == dice2Num){
            playerRollMsg.innerHTML = "You Scored " + ((dice1Num + dice2Num) * 2) + " Points!!!";
            playerTracker = playerTracker + ((dice1Num + dice2Num) * 2)
        } else if (dice1Num < 10){
            if (dice1Num > 1){
                if (dice2Num > 1){
                    playerRollMsg.innerHTML = "You Scored " + (dice1Num + dice2Num) + " Points!!!";
                    playerTracker = playerTracker + (dice1Num + dice2Num)
                }
            }
        }
        if (dice3Num == dice4Num){
            computerRollMsg.innerHTML = "The Computer Got " + ((dice3Num + dice4Num) * 2) + " Points... D:";
            computerTracker = computerTracker + ((dice3Num + dice4Num) * 2)
        } else if (dice3Num < 10){
            if (dice3Num > 1){
                if(dice4Num > 1){
                    computerRollMsg.innerHTML = "You Scored " + (dice3Num + dice4Num) + " Points!!!";
                    computerTracker = computerTracker + (dice3Num + dice4Num)
                }
            }
        }

        playerScore.innerHTML = playerTracker
        computerScore.innerHTML = computerTracker
    
        dice1Num = (Math.floor(Math.random() * 6) + 1);
        dice2Num = (Math.floor(Math.random() * 6) + 1);
        dice3Num = (Math.floor(Math.random() * 6) + 1);
        dice4Num = (Math.floor(Math.random() * 6) + 1);

        gameRound = gameRound + 1;

        if (gameRound == 3){
            Enabled = "no"
            $(newGameButton).css("border-color", "red")
            if (playerTracker > computerTracker){
                p1Score.innerHTML = "Player 1 Wins!!!";
            } else if (playerTracker < computerTracker){
            p2Score.innerHTML = "Computer Wins!!!";
            }
        }
    }    
})

newGameButton.addEventListener("click", function(){
    console.log("click")
    gameRound = 0
    playerTracker = 0
    computerTracker = 0
    playerScore.innerHTML = playerTracker
    computerScore.innerHTML = computerTracker
    $(p1d1).attr("src", "Images/normalDicePic.png");
    $(p1d2).attr("src", "Images/normalDicePic.png");
    $(p2d1).attr("src", "Images/normalDicePic.png");
    $(p2d2).attr("src", "Images/normalDicePic.png");
    playerRollMsg.innerHTML = "";
    computerRollMsg.innerHTML = "";
    playerScore.innerHTML = "";
    computerScore.innerHTML = "";
    p1Score.innerHTML = "Player 1";
    p2Score.innerHTML = "Computer";
    Enabled = "yes"
    $(newGameButton).css("border-color", "black")
})

hoverButton.addEventListener("click", function(){
    $(rulesPage).fadeIn("slow");
})

exitButton.addEventListener("click", function(){
    $(rulesPage).fadeOut("slow");
})