const express = require("express");
const app = express(); //eigenes Backend/Server
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000; //unter port 3000
app.use(express.static(__dirname + "/public")); //express gibt an wo Frontend liegt (Ordner public)
let players = [];

io.on("connection", (socket) => {
    //socket.io merkt, wenn sich jemand verbindet und übermittelt es uns
    console.log("user connected");
    players.push({id: socket.id, points: 0}); //sobald neuer user sich verbindet, bekommt er einzigartige ID (ID wird immmer mitgeschickt)
    console.log(players);
    socket.on("disconnect", () => {
        players = players.filter((player) => {
            //wenn jemand aussteigt, entfernt socket genau die ID + neues players array
            return player.id === socket.id;
        });
        console.log("user disconnected");
        console.log(players);
    });
    if (players.length === 2) {
        socket.emit("Quizstarted"); //falls 2 Leute da sind, Event rausschicken
        console.log("2 person"); //Info, dass Spiel startet, Gegenteil socket.on, Event raussenden
    }
});

server.listen(port, function () {
    console.log("App started");
});
