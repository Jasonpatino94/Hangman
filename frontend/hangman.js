let vehicles = ["accord", "corolla", "civic", "versa", "maxima", "titan", "highlander", "bronco", "mustang"]
let answer = ""
const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 let guessedWord = null





// picks a random word to guess and replaces each character with underscores
function randomVehicle(){
    answer = vehicles[Math.floor(Math.random() * vehicles.length)]      
}

// create keyboard
function createButtons(){
    const keyboard = document.getElementsByClassName('keyboard')[0]
    const buttons = document.createElement('ul')
   
    for (let i = 0; i < keys.length; i++) {
        buttons.id = 'key'
        const list = document.createElement('button')
        list.className = 'letter'
        list.innerHTML = keys[i]
        // // this is to make a line brake after 3 and m (just to make it neater)
        // if (keys[i] === "3" || "m"){
        //     const lineBreak = document.createElement('br')
        //     keyboard.appendChild(lineBreak)
        // } 
        keyboard.appendChild(buttons)
        buttons.appendChild(list)
    }
}


// inputs the word being guessed
function guessWord(){
    guessedWord = answer.split(' ')

    document.getElementsByClassName('mysteryWord')[0].innerHTML = guessedWord
} 

// updates how many wrong guesses you had


// creates timer









randomVehicle();
createButtons();
guessWord();

