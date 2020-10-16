const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(8081, () => {
  console.log(`Listening on ${server.address().port}`);
});
