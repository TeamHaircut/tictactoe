const {anotherFunction} = require('./blankmanager');

var roomGrid = [
  "","","",
  "","","",
  "","",""
];

function getRoomGrid() {
  return roomGrid
}

function setRoomGrid(id, gridPos) {
  console.log("IN SET GRID");
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
  roomGrid[pos]="X";

}

module.exports = {
  getRoomGrid,
  setRoomGrid
};