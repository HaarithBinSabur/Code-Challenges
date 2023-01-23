// function calculateTotal(team1, team2) {

  let t1 = team1.reduce((a, c) => a + (c || 0), 0);
  let t2 = team2.reduce((a, c) => a + (c || 0), 0);
  return t1 > t2;
}