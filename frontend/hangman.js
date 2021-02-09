let scores = []
const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const keyboard = document.getElementsByClassName('keyboard')[0]
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
let reset = document.getElementById('reset')
let wrongGuesses = document.getElementsByClassName('wrongGuesses')[0]
let maxWrongGuesses = document.getElementById("maxWrongGuesses")
maxWrongGuesses.innerHTML = 10
let newInt = []


let vehiclesList = document.getElementById('vehicles')
let vehicleModal= document.getElementById("vehiclesList")
let vehicleBtn = document.getElementById("vehiclebtn")
let closebuttons = document.getElementsByClassName('closebutton')
let scoresBtn = document.getElementById("scorelistbtn")
let scoreModal = document.getElementById('scorelist')
let scoreList = document.getElementById("scores")
let addVehicleform = document.getElementById('addVehicleForm')
let addScoreForm = document.getElementById('winForm')
let reorder = document.getElementById('reorder')


// EVENT LISTENERS
addVehicleform.addEventListener("submit", addVehicle)
closebuttons[0].addEventListener('click', closeModal)
scoresBtn.addEventListener("click", openScoreList)
vehicleBtn.addEventListener('click', openVehicleList)
closebuttons[1].addEventListener('click', closeModal)
addScoreForm.addEventListener('submit', submitScore)
reorder.addEventListener('click', getOrderedList)


const api = new API
const game = new Game

function submitScore(e){
    e.preventDefault();
    let newScore = {
        player: {
            name: addScoreForm.elements[0].value
        },
        score: {
            points: parseInt(document.getElementById('yourScore').innerText)
        }
    }
    api.postUsersScoresURL(newScore)
    e.target.remove()

}

function addVehicle(e){
    e.preventDefault();
    let newVehicle = {
        kind: e.target.children[2].value,
        name: e.target.children[5].value
    }

    api.createVehicle(newVehicle)
    e.target.remove()
}

function getAllVehicles() {
    api.fetchVehicles().then(displayVehicles)
}

function displayVehicles(data){
    vehicles = data
    vehicles.forEach(vehicle => {
       let newVeh = document.createElement('li')
       newVeh.innerHTML = `type: ${vehicle.kind}&nbsp;/&nbsp; name: ${vehicle.name}`
       vehiclesList.appendChild(newVeh)
    })
}

function getAllPlayersScores(){
    api.fetchScores().then(displayScores)
}

function displayScores(data){
    scores = data
    scores.forEach(score => {
        let newScore = document.createElement('li')
        newScore.innerHTML = `<span class"scoreboardname">${score.player.name}</span> with <span class="scoreboardscore">${score.points}</span> points!`
        scoreList.appendChild(newScore) 
    })
}





function openVehicleList(){
    vehicleModal.style.display = "block"
}

function openScoreList(){
    scoreModal.style.display = "block"
}



function closeModal(){
    vehicleModal.style.display = "none"
    scoreModal.style.display = "none"
}


function getOrderedList(){
    api.fetchScores().then(orderList)
}

function orderList(data){
    let newList = data
    newList.sort(function (a,b) {
        return b.points - a.points
        })
        scoreList.innerHTML = ""
        newList.forEach(score => {
            let newScore = document.createElement('li')
            newScore.innerHTML = `<span class"scoreboardname">${score.player.name}</span> with <span class="scoreboardscore">${score.points}</span> points!`
            scoreList.appendChild(newScore)
        })
}



// function reverseOrderList(){
//     let scores = Array.from(document.querySelectorAll('.scoreboardscore'))
//     for (let i = 0; i < scores.length; i++) {
//         newNum = parseInt(scores[i].innerText)
//         newInt.push(newNum)
//     }
//     debugger
// }









getAllVehicles()
getAllPlayersScores()


