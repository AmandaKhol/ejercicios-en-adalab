const express = require('express');
const cors = require('cors');

const productsData = require('./data/products.json');
const usersData = require('./data/users.json');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public';
app.use(express.static(staticServerPath));

// API

app.get('/api/products', (req, res) => {
  res.json(productsData);
});

app.post('/api/user/login', (req, res) => {
  const userFound = usersData.find((user) => {
    return user.email == req.body.email && user.password === req.body.password;
  });

  if (userFound != undefined) {
    res.json({
      error: false,
      userId: userFound.id,
    });
  } else {
    res.status(404).json({
      error: 'user-not-found',
      message: 'User Not Found',
    });
  }
});
