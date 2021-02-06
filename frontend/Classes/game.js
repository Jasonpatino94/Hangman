class Game {
    constructor(){
        this.answer = ""
        this.wordToGuess = null
        this.guessedLetters = []
        this.totalSeconds = 0
        this.mistakes = 0
        this.vehicles = []
        
        this.createButtons();
        setInterval(this.setTime, 1000);
        
        reset.addEventListener("click" , this.reset);
        
        api.fetchVehicles().then(this.randomVehicle);
    }
    
    randomVehicle = data => {
        this.vehicles = data
        this.answer = this.vehicles[Math.floor(Math.random() * this.vehicles.length)].name
        this.guessWord()
    }
    
    
    setTime = () => {
        this.totalSeconds++
        seconds.innerHTML = this.totalSeconds % 60
        minutes.innerHTML = Math.floor(this.totalSeconds / 60)
    }

    createButtons(){
        const buttons = document.createElement('ul')
        this.buttons = buttons
   
        for (let i = 0; i < keys.length; i++) {
            const button = document.createElement('button')
            // button.dataset.letter = keys[i]
            button.className = `letter`
            button.innerHTML = keys[i]
            keyboard.appendChild(buttons)
            buttons.appendChild(button)
            button.addEventListener("click", () => this.makeGuess(button) )
        }
    }


    guessWord(){
        this.wordToGuess = this.answer.split("").map(letter => "_").join(" ")
        
        document.getElementsByClassName('mysteryWord')[0].innerHTML = this.wordToGuess
    }
    
    reset(){
        
        game.totalSeconds = 0
        game.guessedLetters = []
        game.mistakes = 0
        wrongGuesses.innerHTML = game.mistakes
        api.fetchVehicles().then(game.randomVehicle);
        game.updatePicture()
        
        game.buttons = document.querySelectorAll(".letter")
        Array.from(game.buttons).map( button => button.disabled = false)
        document.getElementById('winForm').style.display = "none"
        document.getElementsByClassName('keyboard')[0].style.display = "block"
    
    
    }

    updatePicture(){
        document.getElementById('hangmanimg').src = `hangman.imgs/${this.mistakes}.jpg`
    }

    makeGuess(button){
        const character = button.innerHTML
        this.guessedLetters.indexOf(character) === -1 ? this.guessedLetters.push(character) : null
        button.setAttribute('disabled', true)
        let charIndex = this.answer.indexOf(button.innerHTML)
        if (charIndex === -1) {
            this.mistakes++
            this.numberGuessedWrong()
            this.youLose()
            this.updatePicture()
        } 
        while (charIndex >= 0){
            const splitWord = this.wordToGuess.split(" ")
            splitWord[charIndex] = button.innerHTML
            this.wordToGuess = splitWord.join(" ")
            document.getElementsByClassName('mysteryWord')[0].innerHTML = this.wordToGuess
            charIndex = this.answer.indexOf(button.innerHTML, charIndex + 1)
            this.youWin()
        }
        console.log(this.wordToGuess)
        console.log (this.answer)
    }

    youWin(){
        if (this.wordToGuess === this.answer.split('').join(' ')){
            document.getElementById('winForm').style.display = "block"
            document.getElementById("yourScore").innerHTML = `${this.totalSeconds}`
            document.getElementsByClassName('keyboard')[0].style.display = "none"
            document.getElementById('timer').style.display = "none"
        }
    } 

    youLose(){
        if (wrongGuesses.innerHTML === maxWrongGuesses.innerHTML) {
        //    disable all buttons and put down that you lost.
        document.getElementsByClassName('mysteryWord')[0].innerHTML = `you lost, the correct answer is <span >${this.answer}</span>`
        document.getElementsByClassName('keyboard')[0].style.display = "none"
        document.getElementById('timer').style.display = "none"
        }
    }

    numberGuessedWrong(){
        wrongGuesses.innerHTML = this.mistakes
    }
        

}