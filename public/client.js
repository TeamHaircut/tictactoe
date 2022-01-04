const player1Info = document.getElementById('player1Info');
const player2Info = document.getElementById('player2Info');

const grid1 = document.getElementById('grid1');
grid1.addEventListener("click", function() {
	const gridID = grid1.id;
	socket.emit('markSquare', {gridID});
});

const grid2 = document.getElementById('grid2');
grid2.addEventListener("click", function() {
	const gridID = grid2.id;
	socket.emit('markSquare', {gridID});
});

const grid3 = document.getElementById('grid3');
grid3.addEventListener("click", function() {
	const gridID = grid3.id;
	socket.emit('markSquare', {gridID});
});

const grid4 = document.getElementById('grid4');
grid4.addEventListener("click", function() {
	const gridID = grid4.id;
	socket.emit('markSquare', {gridID});
});

const grid5 = document.getElementById('grid5');
grid5.addEventListener("click", function() {
	const gridID = grid5.id;
	socket.emit('markSquare', {gridID});
});

const grid6 = document.getElementById('grid6');
grid6.addEventListener("click", function() {
	const gridID = grid6.id;
	socket.emit('markSquare', {gridID});
});

const grid7 = document.getElementById('grid7');
grid7.addEventListener("click", function() {
	const gridID = grid7.id;
	socket.emit('markSquare', {gridID});
});

const grid8 = document.getElementById('grid8');
grid8.addEventListener("click", function() {
	const gridID = grid8.id;
	socket.emit('markSquare', {gridID});
});

const grid9 = document.getElementById('grid9');
grid9.addEventListener("click", function() {
	const gridID = grid9.id;
	socket.emit('markSquare', {gridID});
});

const restartBtn = document.getElementById('restartBtn');
restartBtn.addEventListener("click", function() {
	console.log("restartBtn clicked");
	socket.emit('reset');
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

socket.on('updateGrid', (roomGrid) => {
	updateRoomGrid(roomGrid);
});