const team = {
    _players: [
        {firstName: 'Jim', lastName: 'Smith', age: 22},
        {firstName: 'Sally', lastName: 'Johnson', age: 25}, 
        {firstName: 'Pam', lastName: 'Beasley', age: 23}
    ],
    _games: [
        {opponent: 'Gators', teamPoints: 12, opponentPoints: 14},
        {opponent: 'Cougars', teamPoints: 8, opponentPoints: 11},
        {opponent: 'Gators', teamPoints: 15, opponentPoints: 10}
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {firstName: newFirstName, lastName: newLastName, age: newAge};
        this._players.push(player)
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints}
        this._games.push(game)
    }
}

team.addPlayer('Bugs', 'Bunney', 76)

console.log(team.players)

team.addGame('Titans', 100, 98)

console.log(team.games)