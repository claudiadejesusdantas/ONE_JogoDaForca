function drawCanvas(){
    gameBoard.lineWidth = 8;
    gameBoard.lineCap = "round";
    gameBoard.lineJoin = "round";
    gameBoard.fillStyle = "#F3F5FC";
    gameBoard.strokeStyle = "#0A3871";

    //maninupation
    gameBoard.fillRect(0,0,1200,800);
    gameBoard.beginPath();
    gameBoard.moveTo(475,200);
    gameBoard.lineTo(650,200);
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
        gameBoard.moveTo(250+(widthWord*i), 400)
        gameBoard.lineTo(300+(widthWord*i), 400)
    }
    gameBoard.stroke()
    gameBoard.closePath()
}

function drawGallows(){
    gameBoard.font = "bold 52px Inter"
    gameBoard.lineCap = "round"
    gameBoard.fillStyle = "#0A3871"
    gameBoard.lineWidth = 6
    gameBoard.beginPath();
    gameBoard.moveTo(500,200);
    gameBoard.lineTo(500,10);
    gameBoard.lineTo(600,10);
    gameBoard.lineTo(600,30);
    gameBoard.stroke();
    gameBoard.closePath();
}

function writeLetterCorrect(index){
    gameBoard.font = "bold 52px Inter"
    gameBoard.lineCap = "round"
    gameBoard.fillStyle = "#0A3871"
    gameBoard.lineWidth = 6
    let breadth = 600/secretWord.length
    gameBoard.fillText(secretWord[index], 260 + (breadth*index), 380 )
}

function writeLetterIncorrect(letter, errors){
    gameBoard.font = "bold 40px Inter"
    gameBoard.lineCap = "round"
    gameBoard.fillStyle = "#0A3871"
    gameBoard.lineWidth = 6
    gameBoard.fillText(letter, 10 + (40*(10 - errors)), 500, 40)
}

function drawError1(){
    gameBoard.font = "bold 52px Inter"
    gameBoard.lineCap = "round"
    gameBoard.fillStyle = "#0A3871"
    gameBoard.lineWidth = 6
    gameBoard.beginPath()
    gameBoard.arc(600, 50, 15, 15, Math.PI/2, true)
    gameBoard.stroke()
}

function drawError2(){
    gameBoard.beginPath();
    gameBoard.moveTo(600,65);
    gameBoard.lineTo(600,140);
    gameBoard.stroke();
    gameBoard.closePath();
}

function drawError3(){
    gameBoard.beginPath();
    gameBoard.moveTo(600,75);
    gameBoard.lineTo(580,100);
    gameBoard.stroke();
    gameBoard.closePath();
}

function drawError4(){
    gameBoard.beginPath();
    gameBoard.moveTo(600,75);
    gameBoard.lineTo(620,100);
    gameBoard.stroke();
    gameBoard.closePath();
}

function drawError5(){
    gameBoard.beginPath();
    gameBoard.moveTo(600,139);
    gameBoard.lineTo(580,180);
    gameBoard.stroke();
    gameBoard.closePath();
}

function drawError6(){
    gameBoard.beginPath();
    gameBoard.moveTo(600,139);
    gameBoard.lineTo(620,180);
    gameBoard.stroke();
    gameBoard.closePath();
}