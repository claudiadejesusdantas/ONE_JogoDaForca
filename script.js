//Selectores
let words = ["programacao","oracle", "alura","html", "javascript", "css", "logica"];
let gameBoard = document.getElementById("gallows").getContext('2d');
let secretWord = "";
let userLetters = [];

function chooseSecretWord(){
    let word = words[Math.floor(Math.random()*words.length)]
    secretWord = word
    console.log(secretWord)
}

function verifyWord(key){
    let state = false;
    if(key >= 65 && userLetters.indexOf(key) || key <= 90){
        userLetters.push(key)
        console.log(key)
        console.log(userLetters)
        return state
    }
    else{
        state = true
        userLetters.push(key)
        console.log(key)
        console.log(userLetters)
        return state
    }
}


function startGame(){
    document.getElementById('container_main').style.display = "none";
    chooseSecretWord();

    drawCanvas();
    drawLines();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()
        if (verifyWord(letra)){

        }
    }
}

//captar a tecla digitada
//verificar se é uma letra
//saber se a palavra secreta inclui a letra digitada
//escrever letra correta
//escrever letra incorreta
//contar os erros

