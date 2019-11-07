const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const logger = require('morgan');
const Port = process.env.Port || 8004;
const server = express();

server.use(logger('dev'))
server.engine('html', mustacheExpress());
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
server.use(express.static(path.join(__dirname, '/public')));
server.get('/', (req, res) => {
  res.render('index');
})


server.listen(Port, () => {
  console.log(`Server listening on port ${Port}!`);
});