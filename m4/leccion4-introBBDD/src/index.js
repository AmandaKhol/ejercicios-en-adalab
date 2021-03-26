const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

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

// init and config data base
const db = new Database('./src/database.db', {
  // this line log in console all data base queries
  verbose: console.log,
});

// api endpoints

app.get('/all-books', (req, res) => {
  const query = db.prepare(`SELECT name FROM books ORDER BY price DESC`);
  const books = query.all();
  res.json(books);
});

app.get('/all-books-expensive/', (req, res) => {
  const query = db.prepare(`SELECT name FROM books WHERE price >?`);
  const books = query.all(req.query.id);
  res.json(books);
});

app.patch('/modify-book/:id', (req, res) => {
  const query = db.prepare('UPDATE books SET name=? WHERE id=?');
  const book = query.run(req.body.name, req.params.id);
  res.json(book);
});

app.patch('/modify-stock/', (req, res) => {
  const query = db.prepare('UPDATE books SET stock=?');
  const book = query.run(req.body.stock);
  res.json(book);
});

app.post('/new-book/', (req, res) => {
  const query = db.prepare(
    `INSERT INTO books(name, author, price, stock, printable) VALUES (?, ?, ?, ?, ?)`
  );
  const book = query.run(
    req.body.name,
    req.body.author,
    req.body.price,
    req.body.stock,
    req.body.printable
  );
  res.json({
    result: 'Book created',
    bookID: book.lastInsertRowid,
  });
});

/* app.get('/all-users-with-id-great-than-5/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id > ?`);
  const users = query.all(5);
  res.json(users);
});

app.get('/user-2/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id = ?`);
  const user = query.get(2);
  res.json(user);
});

app.get('/users-with-id-in-query-params/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id = ?`);
  const users = query.get(req.query.userId);
  res.json(users);
});

app.get('/all-users-with-email-and-password/all-fields', (req, res) => {
  const query = db.prepare(
    `SELECT * FROM users WHERE email = ? AND password = ?`
  );
  const users = query.get('tania@gmail.com', 'adfs089df');
  res.json(users);
});

app.get(
  '/all-users-with-email-and-password-in-query-params/all-fields',
  (req, res) => {
    const query = db.prepare(
      `SELECT * FROM users WHERE email = ? AND password = ?`
    );
    const users = query.get(req.query.email, req.query.password);
    res.json(users);
  }
);
 */
