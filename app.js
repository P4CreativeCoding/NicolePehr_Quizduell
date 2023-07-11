//SERVER - SEITE;

require("dotenv").config();

const express = require("express");
const app = express(); //eigenes Backend/Server
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000; //unter port 3000
app.use(express.static(__dirname + "/public")); //express gibt an wo Frontend liegt (Ordner public)
let players = [];
const quizelement =
    '<div class="quiz-container"> <h1>Mega krasses Quizduell für Hochbegabte</h1><div class="results-container" style="display: none"></div></div> ';
//<button class="start-button" onclick="startQuiz()">Lets goooo</button>

io.on("connection", (socket) => {
    socket.on("authentication", (password) => {
        //wenn Event von Client-Seite ausgelöst, kommt es hier an
        if (password !== process.env.PASSWORD) {
            console.log("authentication failed");
        } else {
            //Signal an Client, dass erfolgreich (Quiz startet)
            socket.emit("logged in", [socket.id, quizelement]); //Name, Daten die mitgegeben werden (darf nur eine Sache sein), nur der User, der es richtig eingegeben hat
            console.log("authentication successful");
        }
    });
    //socket.io merkt, wenn sich jemand verbindet und übermittelt es uns
    console.log("user connected");
    players.push({id: socket.id, points: 0}); //sobald neuer user sich verbindet, bekommt er einzigartige ID (ID wird immmer mitgeschickt)
    console.log(players);

    socket.on("disconnect", () => {
        players = players.filter((player) => {
            //wenn jemand aussteigt, entfernt socket genau die ID + neues players array
            return player.id !== socket.id;
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
