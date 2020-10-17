const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);

const players = {};
const star = {
  x: Math.floor(Math.random() * 700) + 50,
  y: Math.floor(Math.random() * 500) + 50,
};

const scores = {
  blue: 0,
  red: 0,
};

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

io.on('connection', (socket) => {
  console.log(`User with id: ${socket.id} connected`);

  players[socket.id] = {
    rotation: 0,
    x: Math.floor(Math.random() * 700) + 50,
    y: Math.floor(Math.random() * 500) + 50,
    playerId: socket.id,
    team: Math.floor(Math.random() * 2) === 0 ? 'red' : 'blue',
  };

  socket.emit('currentPlayers', players);
  // send the star object to the new player
  socket.emit('starLocation', star);
  // send the current scores
  socket.emit('scoreUpdate', scores);

  socket.broadcast.emit('newPlayer', players[socket.id]);

  socket.on('disconnect', () => {
    console.log(`User with id: ${socket.id} disconnected`);

    // remove this player from our players object
    delete players[socket.id];
    // emit a message to all players to remove this player
    io.emit('disconnect', socket.id);
  });

  // when a player moves, update the player data
  socket.on('playerMovement', (movementData) => {
    players[socket.id].x = movementData.x;
    players[socket.id].y = movementData.y;
    players[socket.id].rotation = movementData.rotation;
    // emit a message to all players about the player that moved
    socket.broadcast.emit('playerMoved', players[socket.id]);
  });

  socket.on('starCollected', () => {
    if (players[socket.id].team === 'red') {
      scores.red += 10;
    } else {
      scores.blue += 10;
    }
    star.x = Math.floor(Math.random() * 700) + 50;
    star.y = Math.floor(Math.random() * 500) + 50;
    io.emit('starLocation', star);
    io.emit('scoreUpdate', scores);
  });
});

// Get the PORT
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on ${server.address().port}`);
});
