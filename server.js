const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const socket = require('socket.io');
const {addUser, getPlayer1, getPlayer2} = require('./server_utils/usermanager');
const {setRoomGrid, getRoomGrid} = require('./server_utils/gamemanager');
const { Console } = require('console');
const app = express();

// Socket setup & pass server
const PORT = 5001 || process.env.PORT;
const server = app.listen(PORT, function(err) {
 
    if (!err)
	{
		console.log(`Server is Listening on port ${PORT}`);
		console.log(`Visit http://teamhaircut.org:${PORT} to test the application`);
	}
    else console.log(err)
 
});
const io = socket(server);

// Set static folder
app.use(express.static(path.join(__dirname, '/public')));

//Run when client connects
io.on('connection', socket => {

	socket.on('joinRoom', ({room}) => {
    console.log(room);
    socket.join(room);
    addUser(socket.id);
    
    if(getPlayer1()!="") {
      io.to(room).emit('setPlayer1', {
        message: getPlayer1()
      });	
    }

    if(getPlayer2()!="") {
      io.to(room).emit('setPlayer2', {
        message: getPlayer2()
      });	
    }

	});

  socket.on('markSquare', ({gridID}) => {
    console.log("Here");
    setRoomGrid(socket.id, gridID);
    io.to("MYROOM").emit('updateGrid', getRoomGrid());
	});

	socket.on('rejoinRoom', () => {

	});

	socket.on('disconnect', () => {

	});

});

// Passport Config
require('./config/passport')(passport);

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1/test', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));