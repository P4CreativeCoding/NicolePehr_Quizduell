// Fragen und Antworten
var fragen = [
    {
        frage: "Wie viele Planeten hat unser Sonnensystem?",
        antworten: ["A) 7", "B) 8", "C) 9"],
        korrekteAntwort: "B",
    },
    {
        frage: "Was ist die Hauptstadt von Frankreich?",
        antworten: ["A) Paris", "B) London", "C) Rom"],
        korrekteAntwort: "A",
    },
    {
        frage: "Wer hat die Relativitätstheorie entwickelt?",
        antworten: [
            "A) Isaac Newton",
            "B) Albert Einstein",
            "C) Galileo Galilei",
        ],
        korrekteAntwort: "B",
    },
];

// Spielerobjekte
var spieler1 = {
    name: "",
    punktzahl: 0,
};

var spieler2 = {
    name: "",
    punktzahl: 0,
};

// Funktion zum Starten des Quiz
function startQuiz() {
    spieler1.name = prompt("Name Spieler 1:");
    spieler2.name = prompt("Name Spieler 2:");

    for (var i = 0; i < fragen.length; i++) {
        stellenFrage(fragen[i]);
    }

    zeigeErgebnisse();
}

// Funktion zum Stellen einer Frage
function stellenFrage(frageObj) {
    var antwort = prompt(frageObj.frage + "\n" + frageObj.antworten.join("\n"));

    if (parseInt(antwort) === frageObj.korrekteAntwort) {
        spieler1.punktzahl += 1;
    } else {
        spieler2.punktzahl += 1;
    }
}

// Funktion zum Anzeigen der Ergebnisse
function zeigeErgebnisse() {
    alert(
        spieler1.name +
            ": " +
            spieler1.punktzahl +
            " Punkte\n" +
            spieler2.name +
            ": " +
            spieler2.punktzahl +
            " Punkte"
    );
}
socket.on("Quizstarted", () => {
    //wartet auf Event (2 Leute da), bekommts vom Server geschickt
    startQuiz();
    console.log("Quiz started");
});
