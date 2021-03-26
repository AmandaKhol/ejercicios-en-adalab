const express = require('express');
const cors = require('cors');

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public/build';
server.use(express.static(staticServerPath));

// api endpoints

server.get('/response-a', (req, res) => {
  res.json({
    result: 'ok',
  });
});
