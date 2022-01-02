const player1Info = document.getElementById('player1Info');
const player2Info = document.getElementById('player2Info');

const grid1 = document.getElementById('grid1');
grid1.addEventListener("click", function() {
	//socket.emit('markSquare', {socket, grid1});
	markSquare(grid1);
	console.log("grid1 clicked");
});
const grid2 = document.getElementById('grid2');
grid2.addEventListener("click", function() {
	markSquare(grid2);
	console.log("grid2 clicked");
});
const grid3 = document.getElementById('grid3');
grid3.addEventListener("click", function() {
	markSquare(grid3);
	console.log("grid3 clicked");
});
const grid4 = document.getElementById('grid4');
grid4.addEventListener("click", function() {
	markSquare(grid4);
	console.log("grid4 clicked");
});
const grid5 = document.getElementById('grid5');
grid5.addEventListener("click", function() {
	markSquare(grid5);
	console.log("grid5 clicked");
});
const grid6 = document.getElementById('grid6');
grid6.addEventListener("click", function() {
	markSquare(grid6);
	console.log("grid6 clicked");
});
const grid7 = document.getElementById('grid7');
grid7.addEventListener("click", function() {
	markSquare(grid7);
	console.log("grid7 clicked");
});
const grid8 = document.getElementById('grid8');
grid8.addEventListener("click", function() {
	markSquare(grid8);
	console.log("grid8 clicked");
});
const grid9 = document.getElementById('grid9');
grid9.addEventListener("click", function() {
	markSquare(grid9);
	console.log("grid9 clicked");
});

const restartBtn = document.getElementById('restartBtn');
restartBtn.addEventListener("click", function() {
	console.log("restartBtn clicked");
});


const socket = io('http://teamhaircut.org:5001', {
	'reconnection': true,
	'reconnectionDelay': 50,
	'maxReconnectionAttempts': Infinity
});

socket.emit('joinRoom',{room:"MYROOM"});

socket.on('reconnecting', () => {
		socket.emit('rejoinRoom');
});

socket.on('setPlayer1', (info) => {
	player1Info.innerHTML = info.message + " has joined";
});

socket.on('setPlayer2', (info) => {
	player2Info.innerHTML = info.message + " has joined";
});