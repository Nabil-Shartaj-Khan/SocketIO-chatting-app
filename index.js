const express = require('express');
const { Server } = require('socket.io');
const app = express();
const http = require('http');
const serverExpress = http.createServer(app);
const io = new Server(serverExpress);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  const randomUsername = 'User' + Math.floor(Math.random() * 1000);
  io.to(socket.id).emit('random_username', randomUsername);

  socket.on('chat', function (message) {
    const username = message.username;
    const user_message = message.message;
    io.emit('show_chat', { username, message: user_message });
  });

  console.log("New user connected!");
});

serverExpress.listen(4000, function () {
  console.log("Server is running on port: 4000");
});