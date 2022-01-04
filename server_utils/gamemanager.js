const { STATES } = require('mongoose');
const {anotherFunction} = require('./blankmanager');

var markX = "";
var markO = "";
var turn = "";
var gameover = false;

var roomGrid = [
  "","","",
  "","","",
  "","",""
];

function reset() {
  markX = "";
  markO = "";
  turn = "";
  gameover = false;

  roomGrid = [
    "","","",
    "","","",
    "","",""
  ];

}

function getRoomGrid() {
  return roomGrid
}

function setMark(id) {
  if(markX=="") {
    markX = id;
    turn = markX;
  } else if(markO=="") {
    markO = id;
    turn = markO;
  }
}

function getMark(id) {
  var mark = "";
  if(id==markX) {
    mark = "X";
  } else if(id==markO) {
    mark = "O";
  }
  return mark;
}

function checkForWin(roomGrid) {
  var status = false;
  if(
    (roomGrid[0]=="X" && roomGrid[1]=="X" && roomGrid[2]=="X") ||
    (roomGrid[3]=="X" && roomGrid[4]=="X" && roomGrid[5]=="X") ||
    (roomGrid[6]=="X" && roomGrid[7]=="X" && roomGrid[8]=="X") ||
    (roomGrid[0]=="X" && roomGrid[4]=="X" && roomGrid[8]=="X") ||
    (roomGrid[2]=="X" && roomGrid[4]=="X" && roomGrid[6]=="X") ||
    (roomGrid[0]=="X" && roomGrid[3]=="X" && roomGrid[6]=="X") ||
    (roomGrid[1]=="X" && roomGrid[4]=="X" && roomGrid[7]=="X") ||
    (roomGrid[2]=="X" && roomGrid[5]=="X" && roomGrid[8]=="X") ||

    (roomGrid[0]=="O" && roomGrid[1]=="O" && roomGrid[2]=="O") ||
    (roomGrid[3]=="O" && roomGrid[4]=="O" && roomGrid[5]=="O") ||
    (roomGrid[6]=="O" && roomGrid[7]=="O" && roomGrid[8]=="O") ||
    (roomGrid[0]=="O" && roomGrid[4]=="O" && roomGrid[8]=="O") ||
    (roomGrid[2]=="O" && roomGrid[4]=="O" && roomGrid[6]=="O") ||
    (roomGrid[0]=="O" && roomGrid[3]=="O" && roomGrid[6]=="O") ||
    (roomGrid[1]=="O" && roomGrid[4]=="O" && roomGrid[7]=="O") ||
    (roomGrid[2]=="O" && roomGrid[5]=="O" && roomGrid[8]=="O")
  
  ) {
    status = true;
  }

  return status;

}

function setRoomGrid(id, gridPos) {
  setMark(id);
  var mark = getMark(id);
  var pos=0;
  if (gridPos=="grid1") {pos=0;}
  if (gridPos=="grid2") {pos=1;}
  if (gridPos=="grid3") {pos=2;}
  if (gridPos=="grid4") {pos=3;}
  if (gridPos=="grid5") {pos=4;}
  if (gridPos=="grid6") {pos=5;}
  if (gridPos=="grid7") {pos=6;}
  if (gridPos=="grid8") {pos=7;}
  if (gridPos=="grid9") {pos=8;}

  console.log("id    "+id);
  console.log("markX "+markX);
  console.log("markO "+markO);
  console.log("turn  "+turn);
  if(roomGrid[pos]=="" && id==turn && gameover==false) {
    roomGrid[pos]=mark;
    if(turn==markX) {
      turn = markO;
    } else if(turn=markO) {
      turn = markX;
    }
  }
  gameover = checkForWin(roomGrid);
  console.log(gameover);

  

}

module.exports = {
  getRoomGrid,
  setRoomGrid,
  reset
};