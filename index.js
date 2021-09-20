// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code
 const players = data.getPlayers()

 const playerList = (players) => {
    players.forEach((player, index) => {
        console.log("PLAYER " + (index + 1))
        console.log("NAME: " + player.name)
        console.log("LASTNAME: " + player.lastname)
        console.log("POSITION: " + player.position)
    })
 }

// Test
playerList(players)
 



/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
const nameList = (players) => {
    const playerNames = []
    players.forEach((player) => playerNames.push(player.name))
    const namesSorted = playerNames.sort((a,b) => b.length - a.length)
    console.log(namesSorted)
}

// Test
nameList(players)



/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals 
 * Output example -> Goals per match: 2.19
 */

// Your code
const goalsPerMatch = (players) => {
    const goals = []
    players.forEach(player => goals.push(parseInt(player.scoringChance)))
    const reducer = (a, b) => a + b;
    console.log("Goals per match: " + goals.reduce(reducer)/100)
}

// Test
goalsPerMatch(players)


/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code
const positionChecker = (name) => {
    const selectedPlayer = players.filter(player => player.name == name )
    if (selectedPlayer.length == 0) console.log('Player does not exist') 
    else selectedPlayer.forEach(player => console.log(player.position))
}

// Test
positionChecker('Kane')
positionChecker('Tammy')


/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code
const randomMatch = (players) => {
    let shuffledPlayers = players
        .map((value) => ({value, sort:Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)

    const team1 = shuffledPlayers.splice(0, players.length / 2 )
    const team2 = shuffledPlayers
    const teams = [team1, team2]
    const result = []

    teams.forEach(team => {
        goals = []
        team.forEach(player => goals.push(parseInt(player.scoringChance)))
        const reducer = (a, b) => a + b;
        result.push(Math.round(goals.reduce(reducer)/100))
    })
    console.log("The predicted score is for Team 1 vs Team 2 is: " + result[0] + " - " + result[1])
}

// Test
randomMatch(players)