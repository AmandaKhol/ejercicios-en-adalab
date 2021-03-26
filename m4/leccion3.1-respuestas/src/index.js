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
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// api endpoints

server.get('/response-a', (req, res) => {
  res.json({
    result: 'ok',
  });
});

server.get('/response-b', (req, res) => {
  const htmlCode = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Express</title>
      <link rel="stylesheet" href="http://beta.adalab.es/resources/stylesheets/all.css" >
    </head>
    <body class="page">
      <header>
        <h1>Esta es una página de prueba</h1>
        
      </header>
    </body>
  </html>`;
  res.send(htmlCode);
});

server.get('/response-c', (req, res) => {
  const number = Math.floor(Math.random() * 11);

  if (number % 2 === 0) {
    res.redirect('https://www.youtube.com/');
  } else {
    res.redirect('https://www.instagram.com/?hl=es');
  }
});

server.get('/response-d', (req, res) => {
  if (req.query.user === '1' || req.query.user === '2') {
    res.status(200).json({ result: 'ok' });
  } else {
    res.status(404).json({
      result: 'error: invalid query param',
    });
  }
});
