//Selectores
let words = ["PROGRAMACAO","ORACLE", "ALURA","HTML", "JAVASCRIPT", "CSS", "LOGICA"];
// let words = ["programacao","logica", "alura","html", "javascript", "css", "logica"];
let gameBoard = document.getElementById("gallows").getContext('2d');
let secretWord = "";
let userLetters = [];
let errors = [];

function chooseSecretWord(){
    let word = words[Math.floor(Math.random()*words.length)]
    secretWord = word
    console.log(secretWord)
}

function verifyLetter(key){
    let state = false;
    console.log(key)
    if(key >= 65 && userLetters.indexOf(key) || key <= 90 && userLetters.indexOf(key)){
        userLetters.push(key)
        console.log(key)
        console.log(userLetters)
        return state
    }
    else{
        state = true
        userLetters.push(key)
        console.log(state)
        console.log(userLetters, "if true")
        return state
    }
}

function addLetterIncorrect(){
    errors -= 1
}


function startGame(){
    document.getElementById('container_main').style.display = "none";
    chooseSecretWord();

    drawCanvas();
    drawLines();

    document.onkeydown = (e) => {
        let letter = e.key.toUpperCase()
        if (verifyLetter(letter) && secretWord.includes(letter)){ 
            for(let i = 0; i < secretWord.length; i++){
                if( secretWord[i] === letter){
                    writeLetterCorrect(i) 
                }
            }
        } 
        else{
            addLetterIncorrect(letter)
            writeLetterIncorrect(letter, errors)
        }
    }
}

//captar a tecla digitada
//verificar se é uma letra
//saber se a palavra secreta inclui a letra digitada
//escrever letra correta
//escrever letra incorreta
//contar os erros

