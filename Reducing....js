// Oh no! Timmy's reduce is causing problems, Timmy's goal is to calculate the two teams scores and return the winner but timmy has gotten confused and sometimes teams don't enter their scores, total the scores out of 3! Help timmy fix his program!

// Return true if team 1 wins or false if team 2 wins!

function calculateTotal(team1, team2) {

    let t1 = team1.reduce((a, c) => a + (c || 0), 0);
    let t2 = team2.reduce((a, c) => a + (c || 0), 0);
    return t1 > t2;
  }