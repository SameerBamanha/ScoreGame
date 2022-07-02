var homeScore = 0;
var oppScore = 0;
function getLeader() {
  console.log("Hello");
  if (homeScore > oppScore) {
    ShowWinner.innerText = "Winner is Home";
  } else if (homeScore < oppScore) {
    ShowWinner.innerText = "Winner is Opponent";
  } else {
    ShowWinner.innerText = "It's Tie";
  }
}
function HincreaseBy1() {
  homeScore += 1;
  homeBoard.innerText = homeScore;
  getLeader();
}
function HincreaseBy2() {
  homeScore += 2;
  homeBoard.innerText = homeScore;
  getLeader();
}
function HincreaseBy3() {
  homeScore += 3;
  homeBoard.innerText = homeScore;
  getLeader();
}
function OincreaseBy1() {
  oppScore += 1;
  OpponentBoard.innerText = oppScore;
  getLeader();
}
function OincreaseBy2() {
  oppScore += 2;
  OpponentBoard.innerText = oppScore;
  getLeader();
}
function OincreaseBy3() {
  oppScore += 3;
  OpponentBoard.innerText = oppScore;
  getLeader();
}

function reset() {
  oppScore = 0;
  homeScore = 0;
  OpponentBoard.innerText = 0;
  homeBoard.innerText = 0;
  ShowWinner.innerText = "Score is null";
}
