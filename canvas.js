function drawCanvas(){
    gameBoard.lineWidth = 8;
    gameBoard.lineCap = "round";
    gameBoard.lineJoin = "round";
    gameBoard.fillStyle = "#F3F5FC";
    gameBoard.strokeStyle = "#0A3871";

    //maninupation
    gameBoard.fillRect(0,0,1200,800);
    gameBoard.beginPath();
    gameBoard.moveTo(900,500);
    gameBoard.lineTo(650,500);
    gameBoard.stroke();
    gameBoard.closePath();
}

function drawLines(){
    gameBoard.lineWidth = 6;
    gameBoard.lineCap = "round";
    gameBoard.lineJoin = "round";
    gameBoard.fillStyle = "#F3F5FC";
    gameBoard.strokeStyle = "#0A3871";

    let widthWord = 600/secretWord.length
    for(let i = 0; i < secretWord.length; i++){
        gameBoard.moveTo(500+(widthWord*i), 640)
        gameBoard.lineTo(550+(widthWord*i), 640)
    }
    gameBoard.stroke()
    gameBoard.closePath()
}