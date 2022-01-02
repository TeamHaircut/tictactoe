var player1 = "";
var player2 = "";
const users = [];

function addUser(id) {
  users.push(id);
  console.log(users.length);
  if(users.length==1) {
    player1=id;
    //console.log(player1);
  } else if (users.length==2) {
    player2=id;
    //console.log(player2);
  }
}

function getPlayer1() {
  return player1;
}

function getPlayer2() {
  return player2;
}

module.exports = {
  addUser,
  getPlayer1,
  getPlayer2
};