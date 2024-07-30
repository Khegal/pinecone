import { fifaData } from "./fifa.js";

console.log("its working");
// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data

// (a) Home Team name for 2014 world cup final
function returnHomeTeamName(array) {
  let homeTeamNames = [];
  array.forEach((element) => {
    homeTeamNames.push(element["Home Team Name"]);
  });
  return homeTeamNames;
}
console.log(returnHomeTeamName(fifaData));
// (b) Away Team name for 2014 world cup final
function returAwayTeamName(array) {
  let awayTeamName = [];
  array.forEach((element) => {
    awayTeamName.push(element["Away Team Name"]);
  });
  return awayTeamName;
}
console.log(returAwayTeamName(fifaData));
// (c) Home Team goals for 2014 world cup final
function returnHomeTeamGoals(array) {
  let homeTeamGoals = [];
  array.forEach((element) => {
    homeTeamGoals.push(element["Home Team Goals"]);
  });
  return homeTeamGoals;
}
console.log(returnHomeTeamGoals(fifaData));
// (d) Away Team goals for 2014 world cup final
function returAwayTeamGoals(array) {
  let awayTeamGoals = [];
  array.forEach((element) => {
    awayTeamGoals.push(element["Away Team Goals"]);
  });
  return awayTeamGoals;
}
console.log(returAwayTeamGoals(fifaData));
// (e) Winner of 2014 world cup final
function winner(array) {
  let winners = [];
  array.forEach((element) => {
    if (element["Home Team Goals"] > element["Away Team Goals"]) {
      winners.push(element["Home Team Name"]);
    } else {
      winners.push(element["Away Team Name"]);
    }
  });
  return winners;
}
console.log(winner(fifaData));
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(arr) {
  let inFinal = [];
  arr.forEach((element) => {
    if (element.Stage == "Final") {
      inFinal.push(element);
    }
  });
  return inFinal;
}
console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
function getYear(arr) {
  let year = [];
  arr.forEach((element) => {
    year.push(element.Year);
  });
  return year;
}
console.log(getYear(getFinals(fifaData)));
/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */
function getWinners(arr) {
  let winners = [];
  arr.forEach((element) => {
    if (element["Home Team Goals"] > element["Away Team Goals"]) {
      winners.push(element["Home Team Name"]);
    } else {
      winners.push(element["Away Team Name"]);
    }
  });
  return winners;
}
console.log(getWinners(getFinals(fifaData)));
/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
function getWinnersByYear(arr) {
  let winners = [];
  arr.forEach((element) => {
    if (element["Home Team Goals"] > element["Away Team Goals"]) {
      winners.push(element["Home Team Name"], element.Year);
    } else {
      winners.push(element["Away Team Name"], element.Year);
    }
  });
  return winners;
}
console.log(getWinnersByYear(getFinals(fifaData)));
/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
function getAvarageGoals(arr) {
  let homeTeamAvarageGoal = 0;
  let awayTeamAvarageGoal = 0;
  let matchCount = arr.length;
  arr.forEach((element) => {
    homeTeamAvarageGoal += element["Home Team Goals"];
    awayTeamAvarageGoal += element["Away Team Goals"];
  });
  homeTeamAvarageGoal = homeTeamAvarageGoal / matchCount;
  awayTeamAvarageGoal = awayTeamAvarageGoal / matchCount;
  return { homeTeamAvarageGoal, awayTeamAvarageGoal };
}
console.log(getAvarageGoals(fifaData));
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(arr, teamInitials) {
  return arr.reduce((winCount, match) => {
    if (
      match["Home Team Initials"] === teamInitials &&
      match["Home Team Goals"] > match["Away Team Goals"]
    ) {
      return winCount + 1;
    }
    if (
      match["Away Team Initials"] === teamInitials &&
      match["Away Team Goals"] > match["Home Team Goals"]
    ) {
      return winCount + 1;
    }
    return winCount;
  }, 0);
}
console.log(getCountryWins(fifaData, "ENG"));

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
  let teamStats = {};

  data.forEach((match) => {
    let homeTeam = match["Home Team Name"];
    let awayTeam = match["Away Team Name"];
    let homeGoals = match["Home Team Goals"];
    let awayGoals = match["Away Team Goals"];

    if (!teamStats[homeTeam]) {
      teamStats[homeTeam] = { totalGoals: 0, appearances: 0 };
    }
    teamStats[homeTeam].totalGoals += homeGoals;
    teamStats[homeTeam].appearances += 1;

    if (!teamStats[awayTeam]) {
      teamStats[awayTeam] = { totalGoals: 0, appearances: 0 };
    }
    teamStats[awayTeam].totalGoals += awayGoals;
    teamStats[awayTeam].appearances += 1;
  });

  let maxAverageGoals = 0;
  let teamWithMaxAverage = "";

  const teams = [];
  for (let team in teamStats) {
    teams.push(team);
  }

  teams.forEach((team) => {
    let averageGoals = teamStats[team].totalGoals / teamStats[team].appearances;

    if (averageGoals > maxAverageGoals) {
      maxAverageGoals = averageGoals;
      teamWithMaxAverage = team;
    }
  });

  return { team: teamWithMaxAverage, averageGoals: maxAverageGoals };
}

// Example usage
console.log(getGoals(getFinals(fifaData)));

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(data) {
  let teamDefenseStats = {};

  data.forEach((match) => {
    let homeTeam = match["Home Team Name"];
    let awayTeam = match["Away Team Name"];
    let homeGoals = match["Home Team Goals"];
    let awayGoals = match["Away Team Goals"];

    if (!teamDefenseStats[homeTeam]) {
      teamDefenseStats[homeTeam] = { goalsAgainst: 0, appearances: 0 };
    }
    teamDefenseStats[homeTeam].goalsAgainst += awayGoals;
    teamDefenseStats[homeTeam].appearances += 1;

    if (!teamDefenseStats[awayTeam]) {
      teamDefenseStats[awayTeam] = { goalsAgainst: 0, appearances: 0 };
    }
    teamDefenseStats[awayTeam].goalsAgainst += homeGoals;
    teamDefenseStats[awayTeam].appearances += 1;
  });

  let maxAverageGoalsAgainst = 0;
  let teamWithMaxAverageDefense = "";

  const statsArray = Object.values(teamDefenseStats);

  statsArray.forEach((stats, index) => {
    let averageGoalsAgainst = stats.goalsAgainst / stats.appearances;

    const teamName = Object.keys(teamDefenseStats)[index];

    if (averageGoalsAgainst > maxAverageGoalsAgainst) {
      maxAverageGoalsAgainst = averageGoalsAgainst;
      teamWithMaxAverageDefense = teamName;
    }
  });

  return {
    team: teamWithMaxAverageDefense,
    averageGoalsAgainst: maxAverageGoalsAgainst,
  };
}

// Example usage
console.log(badDefense(getFinals(fifaData)));

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

let array = [
  { name: "Uruguay", goal: 4 },
  { name: "Italy", goal: 2 },
  { name: "Italy", goal: 4 },
  { name: "Germany FR", goal: 3 },
  { name: "Brazil", goal: 5 },
  { name: "Brazil", goal: 3 },
  { name: "England", goal: 4 },
  { name: "Brazil", goal: 4 },
  { name: "Netherlands", goal: 1 },
  { name: "Argentina", goal: 3 },
  { name: "Italy", goal: 3 },
  { name: "Argentina", goal: 3 },
  { name: "Germany FR", goal: 1 },
  { name: "Brazil", goal: 0 },
  { name: "Brazil", goal: 0 },
  { name: "Germany", goal: 0 },
  { name: "Italy", goal: 1 },
  { name: "Netherlands", goal: 0 },
  { name: "Germany", goal: 1 },
  { name: "Argentina", goal: 2 },
  { name: "Czechoslovakia", goal: 1 },
  { name: "Hungary", goal: 2 },
  { name: "Hungary", goal: 2 },
  { name: "Sweden", goal: 2 },
  { name: "Czechoslovakia", goal: 1 },
  { name: "Germany FR", goal: 2 },
  { name: "Italy", goal: 1 },
  { name: "Germany FR", goal: 2 },
  { name: "Netherlands", goal: 1 },
  { name: "Germany FR", goal: 1 },
  { name: "Germany FR", goal: 2 },
  { name: "Argentina", goal: 0 },
  { name: "Italy", goal: 0 },
  { name: "France", goal: 3 },
  { name: "Brazil", goal: 2 },
  { name: "France", goal: 1 },
  { name: "Spain", goal: 1 },
  { name: "Argentina", goal: 0 },
];

let names = array.map((data) => {
  return Object.values(data.name);
});
