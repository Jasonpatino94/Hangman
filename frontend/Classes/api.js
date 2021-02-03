class API {

    constructor(port = 3000){
        this.url =  `http://localhost:${port}` 
    }


    // helpers
    parseJSON = response => response.parseJSON()

    headers = {"Accepts": "application/json", "Content-Type": "application/json"}

    //Getters
    get  playersURL = () => this.url + '/players'
    

    get vehiclesURL = () => this.url + '/vehicles'

    get scoresURL = () => this.url + '/scores'
    


    //Fetch Requests!!
    fetchPlayers = () => fetch(this.playersURL).then(this.parseJSON)

    fetchPlayer = () => fetch(this.playersURL).then(this.parseJSON)

    fetchVehicle = (id) => fetch(this.vehiclesURL = `/${id}`).then(this.parseJSON)

    createVehicle = () => fetch(this.vehiclesURL, {
        method: "POST",
        headers: this.headers
    }).then(this.parseJSON)

    fetchScores = () => fetch(this.scoresURL).then(this.parseJSON) 

    // i want to get just the trainer and all his scores
    // i want to get every single vehicle in the game
    // i want to get top 10 highest scores from everyone who has played the game and place it on the leaderboard
}