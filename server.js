var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// Routing

app.get('/', (req, res) => {
  res.render('index');
});
app.get('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
  console.log('listening on 3000');
});

/* Socket IO

var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on 3000');
});
*/
