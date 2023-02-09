//Selectores
let words = ["HTML"];
// let words = ["programacao","logica", "alura","html", "javascript", "css", "logica"];
let gameBoard = document.getElementById("gallows").getContext('2d');
let secretWord = "";
let userLetters = [];
let errors = [];
let qtdMaxErrors = 6;
let userErrors = 0;
let userLostGame = false;

function chooseSecretWord(){
    let word = words[Math.floor(Math.random()*words.length)]
    secretWord = word
    console.log(secretWord)
}

function ascii (a) { return a.charCodeAt(0); }

function verifyLetter(key){
    let state = false;
    
    if(key >= 65 && userLetters.indexOf(key) || key <= 90 && userLetters.indexOf(key)){
    
        userLetters.push(key)
        return state
    }
    else{
        state = true
        userLetters.push(key)
        return state
    }
}

function addLetterIncorrect(){
    errors -= 1
}

function verifyMaxErrors(){
    userErrors++
    drawErrors(userErrors);
    if(userErrors === qtdMaxErrors){
        alert("Você perdeu!");
        userLostGame = true;
    }
}

function drawErrors(error){
    switch(error){
        case 1: drawError1(); break;
        case 2: drawError2(); break;
        case 3: drawError3(); break;
        case 4: drawError4(); break;
        case 5: drawError5(); break;
        case 6: drawError6(); break;
    }
}


function startGame(){
    document.getElementById('container_main').style.display = "none";
    document.getElementById('container_gallows').style.display = "block";
    chooseSecretWord();

    drawCanvas();
    drawLines();
    drawGallows();

    document.onkeydown = (e) => {
        let letter = e.key.toUpperCase()
        if(userLostGame) return; 

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
            verifyMaxErrors();

        }
    }
}


// ADICIONAR PALAVRA
function addWord(){
    let newWord = prompt("Adicionar palavra nova:")
    words.push(newWord.toUpperCase())  
    console.log(words)
}
