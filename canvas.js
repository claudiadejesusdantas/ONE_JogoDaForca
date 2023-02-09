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

function writeLetterCorrect(index){
    gameBoard.font = "bold 52px Inter"
    gameBoard.lineCap = "round"
    gameBoard.fillStyle = "#0A3871"
    gameBoard.lineWidth = 6
    let breadth = 600/secretWord.length
    gameBoard.fillText(secretWord[index], 500 + (breadth*index), 600 )
}

function writeLetterIncorrect(letter, errors){
    gameBoard.font = "bold 40px Inter"
    gameBoard.lineCap = "round"
    gameBoard.fillStyle = "#0A3871"
    gameBoard.lineWidth = 6
    gameBoard.fillText(letter, 100 + (40*(10 - errors)), 720, 40)

}