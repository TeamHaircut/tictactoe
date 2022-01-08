var player1 = "";
var player2 = "";
const users = [];

var room = "";

function addUser(id, userroom) {
  room = userroom;
  users.push(id);
  if(users.length==1) {
    player1=id;
  } else if (users.length==2) {
    player2=id;
  }
}

function getPlayer1() {
  return player1;
}

function getPlayer2() {
  return player2;
}

function getRoom(){
  return room;
}

module.exports = {
  addUser,
  getPlayer1,
  getPlayer2,
  getRoom
};