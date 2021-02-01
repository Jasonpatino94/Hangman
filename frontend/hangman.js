let vehicles = ["accord", "corolla", "civic", "versa", "maxima", "titan", "highlander", "bronco", "mustang"]
let answer = ""
const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wordToGuess = null
let guessedLetters = []
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
let totalSeconds = 0
let reset = document.getElementById('reset')
let mistakes = 0
let wrongGuesses = document.getElementsByClassName('wrongGuesses')[0]
let maxWrongGuesses = document.getElementById("maxWrongGuesses")
const keyboard = document.getElementsByClassName('keyboard')[0]


// gives you the max number of wrong guesses
maxWrongGuesses.innerHTML = 10


// resets the timer and gives you a new word
reset.addEventListener("click" , e => {
    totalSeconds = 0
    guessedLetters = []
    mistakes = 0
    wrongGuesses.innerHTML = mistakes
    
    randomVehicle()
    guessWord()
    updatePicture()
    
    buttons = document.querySelectorAll(".letter")
    Array.from(buttons).map( button => button.disabled = false)
    document.getElementById('winForm').style.display = "none"
    document.getElementsByClassName('keyboard')[0].style.display = "block"
})

// picks a random word to guess and replaces each character with underscores
function randomVehicle(){
    answer = vehicles[Math.floor(Math.random() * vehicles.length)]      
}

// create keyboard
    function createButtons(){
        const buttons = document.createElement('ul')
   
        for (let i = 0; i < keys.length; i++) {
            const button = document.createElement('button')
            // button.dataset.letter = keys[i]
            button.className = `letter`
            button.innerHTML = keys[i]
            keyboard.appendChild(buttons)
            buttons.appendChild(button)
            button.addEventListener("click", () => makeGuess(button) )
        }
    }
    
    
    // inputs the word being guessed
    function guessWord(){
        wordToGuess = answer.split("").map(letter => "_").join(" ")
        
        document.getElementsByClassName('mysteryWord')[0].innerHTML = wordToGuess
    } 
    
    // Choosing a guessed character
    function makeGuess(button){
        const character = button.innerHTML
        guessedLetters.indexOf(character) === -1 ? guessedLetters.push(character) : null
        button.setAttribute('disabled', true)
        let charIndex = answer.indexOf(button.innerHTML)
        if (charIndex === -1) {
            mistakes++
            numberGuessedWrong()
            youLose()
            updatePicture()
        } 
        while (charIndex >= 0){
            const splitWord = wordToGuess.split(" ")
            splitWord[charIndex] = button.innerHTML
            wordToGuess = splitWord.join(" ")
            document.getElementsByClassName('mysteryWord')[0].innerHTML = wordToGuess
            charIndex = answer.indexOf(button.innerHTML, charIndex + 1)
            youWin()
        }
        console.log(wordToGuess)
        console.log(answer)
    }
    
    // updates how many wrong guesses you had
    function numberGuessedWrong(){
        wrongGuesses.innerHTML = mistakes
    }
    
    
    // Increases timer by 1 per second.
    function setTime(){
        totalSeconds++
        seconds.innerHTML = totalSeconds % 60
        minutes.innerHTML = Math.floor(totalSeconds / 60)
    }

    // if you guess all the letters correctly, you will win
    function youWin(){
        if (wordToGuess === answer.split('').join(' ')){
            document.getElementById('winForm').style.display = "block"
            document.getElementById("yourScore").innerHTML = `${totalSeconds}`
            document.getElementsByClassName('keyboard')[0].style.display = "none"
        }
    }                    


    // function that will tell you that you lost.
    function youLose(){
        if (wrongGuesses.innerHTML === maxWrongGuesses.innerHTML) {
        //    disable all buttons and put down that you lost.
        document.getElementsByClassName('mysteryWord')[0].innerHTML = `you lost, the correct answer is <span >${answer}</span>`
        document.getElementsByClassName('keyboard')[0].style.display = "none"
        }
    }

    function updatePicture(){
        document.getElementById('hangmanimg').src = `hangman.imgs/${mistakes}.jpg`
    }
     
randomVehicle();
createButtons();
guessWord();
setInterval(setTime, 1000);







// modal all vehicles in the list
// modal the scoreboard
// 


