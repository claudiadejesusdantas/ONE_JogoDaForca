//Selectores
let words = ["html", "javascript", "css", "logica"];
let tabuleiro = document.getElementById("gallows").getContext('2d');
let secretWord = "";

function chooseSecretWord(){
    let word = words[Math.floor(Math.random()*words.length)]
    secretWord = word
    console.log(secretWord)
}

function startGame(){
    document.getElementById('container_main').style.display = "none";
    chooseSecretWord();
}

