// Benutzerdaten
const benutzername = "admin";
const passwort = "geheim123";

// Funktion zur Autorisierung
function autorisieren(e) {
    e.preventDefault(); // Formular-Standardaktion verhindern

    const eingegebenerBenutzername = document.getElementById("username").value;
    const eingegebenesPasswort = document.getElementById("password").value;

    if (
        eingegebenerBenutzername === benutzername &&
        eingegebenesPasswort === passwort
    ) {
        console.log("Autorisierung erfolgreich");
        // Hier kannst du den Code ausführen, der nach erfolgreicher Autorisierung ausgeführt werden soll
    } else {
        console.log("Autorisierung fehlgeschlagen");
        // Hier kannst du den Code ausführen, der bei fehlgeschlagener Autorisierung ausgeführt werden soll
    }
}

// Eventlistener für das Formular
document.getElementById("loginForm").addEventListener("submit", autorisieren);

// Fragen und Antworten
var fragen = [
    {
        frage: "Wie viele Planeten hat unser Sonnensystem?",
        antworten: ["A) 7", "B) 8", "C) 9"],
        korrekteAntwort: 1,
    },
    {
        frage: "Was ist die Hauptstadt von Frankreich?",
        antworten: ["A) Paris", "B) London", "C) Rom"],
        korrekteAntwort: 0,
    },
    {
        frage: "Wer hat die Relativitätstheorie entwickelt?",
        antworten: [
            "A) Isaac Newton",
            "B) Albert Einstein",
            "C) Galileo Galilei",
        ],
        korrekteAntwort: 1,
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

// Start des Quiz
startQuiz();
