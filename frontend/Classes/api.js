class API {

    constructor(port = 3000){
        this.url =  `http://localhost:${port}` 
    }


    // helpers
    parse = res => res.json()

    headers = {"Accepts": "application/json", "Content-Type": "application/json"}

    //Getters
    get  playersURL() {
        return this.url + '/players'
    }
    

    get vehiclesURL() {
       return this.url + '/vehicles'
    }

    get scoresURL () { 
       return this.url + '/scores'
    }



    //Fetch Requests!!
    
    fetchVehicles = () => fetch(this.vehiclesURL).then(this.parse)
    
    createVehicle = (newVehicle) => fetch(this.vehiclesURL,{
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(newVehicle)
    }).then(this.parse)
    
    fetchPlayers = () => fetch(this.playersURL).then(this.parse)
    
    fetchScores = () => fetch(this.scoresURL).then(this.parse) 

    postUsersScoresURL = (newScore) => fetch(this.scoresURL,{
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(newScore)
    }).then(this.parse)
    
}