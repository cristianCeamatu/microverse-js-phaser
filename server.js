const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);

const players = {};

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

io.on('connection', (socket) => {
  console.log('a user connected');

  players[socket.id] = {
    rotation: 0,
    x: Math.floor(Math.random() * 700) + 50,
    y: Math.floor(Math.random() * 500) + 50,
    playerId: socket.id,
    team: Math.floor(Math.random() * 2) == 0 ? 'red' : 'blue',
  };

  socket.emit('currentPlayers', players);

  socket.broadcast.emit('newPlayer', players[socket.id]);

  socket.on('disconnect', () => {
    console.log('user disconnected');

    // remove this player from our players object
    delete players[socket.id];
    // emit a message to all players to remove this player
    io.emit('disconnect', socket.id);
  });
});

server.listen(8081, () => {
  console.log(`Listening on ${server.address().port}`);
});
