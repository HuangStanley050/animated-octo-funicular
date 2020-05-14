const express = require("express");
const socket = require("socket.io");
// App setup
const app = express();
const server = app.listen(4000, function () {
  console.log("listening for requests on port 4000,");
});

// Static files
app.use(express.static("public"));

const io = socket(server);
io.on("connection", (socket) => {
  console.log("made socket connection", socket.id);
  socket.on("chat", function (data) {
    // console.log(data);
    io.sockets.emit("chat", data);
  });
});
