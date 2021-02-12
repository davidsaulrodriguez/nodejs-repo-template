require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(helmet());

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  return res.send(`<h1>Welcome to
    <a href="https://github.com/davidsaulrodriguez/nodejs-repo-template" target="_blank">NodeJS-Repo-Template</a<</h1>`);
});

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';
app.listen(PORT, IP, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is listening at: http://${IP}:${PORT}`);
  }
});