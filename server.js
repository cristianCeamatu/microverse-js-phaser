const express = require('express');

const app = express();
const server = require('http').Server(app);

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

server.listen(8081, () => {
  console.log(`Listening on ${server.address().port}`);
});
