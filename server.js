import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express();

// SETTING UP VIEWENGINE
server.set('view engine', 'ejs');

// THIS SETS UP THE THE HOMEPAGE
server.get('/', (req, res) => {
  res.render('index', {
    content: 'I am from EJS'
  });
});

// THIS CREATES A HOMEPAGE
server.use('/api', apiRouter);
server.use(express.static('public'));
// THIS CREATES A SERVER TO LISTEN
server.listen(config.port, () =>
  console.info(`listening on port ${config.port}`)
);
// const apiRouter = require('./api');
// const config = require('./config');
// const express = require('express');
// server.get('/about', (req, res) => {
//   fs.readFile('./public/about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

// // THIS CREATES FS FOR ALL THE FILE IN PUBLIC FOLDER
// server.use(express.static('public'));
