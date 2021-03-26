const express = require('express');
const cors = require('cors');

const data = require('./data/data.json');
const characters = data.results;

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
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

server.get('/users/:userId/orders/:orderId', (req, res) => {
  console.log('Query params:', req.params);
  console.log('Query param userId:', req.params.userId);
  console.log('Query param orderId:', req.params.orderId);

  // add new user to daba base
  users.push({
    userId: req.params.userId,
    orderId: req.params.orderId,
  });

  res.json({
    result: users,
  });
});

server.get('/characters/:characterId/', (req, res) => {
  console.log('Query params:', req.params);
  console.log('Query param characterId:', req.params.characterId);

  const characterId = parseInt(req.params.characterId);

  // add new user to daba base
  /*   users.push({
    userId: req.params.userId,
    orderId: req.params.orderId,
  }); */

  res.json({
    result: characters.find((character) => character.id === characterId),
  });
});

server.get('/characters/:characterId/episodes', (req, res) => {
  console.log('Query params:', req.params);
  console.log('Query param characterId:', req.params.characterId);

  const characterId = parseInt(req.params.characterId);

  // add new user to daba base
  /*   users.push({
    userId: req.params.userId,
    orderId: req.params.orderId,
  }); */

  res.json({
    result: characters.find((character) => character.id === characterId)
      .episode,
  });
});
