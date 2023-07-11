# NicolePehr_Quizduell

Das Quiz wurde anfangs mit ChatGPT gecoded, um den Service mal auszuprobieren. Wie weit kann man gehen? Was muss beachtet werden? Was fällt auf?....

Das Spiel "QuizDuell"

Beschreibung

Mein Spiel dient der Nachahmung des berühmtes QuizDuells, welches man als Multiplayer auf dem Smartphone spielen kann. Es ist ebenfalls als Unterhaltungs-Show im Fernsehen zu sehen.
Zwei Personen können gegenseitig sich mit bisher insgesamt drei Fragen duellieren. Beide User beantworten gleichzeitig die Fragen und bekommen beide am Ende ihr eigenes sowie das Ergebnis des Gegners anhand von Punktzahl dargestellt.

Das Spiel fängt erst dann an, wenn sich zwei Spieler eingeloggt haben. Spieler können sich nur mit einem korrekten Passwort einloggen und das Spiel spielen.

Eine normale HTML-Datei mit einer CSS-Datei stellt hier das Frontend dar.
Das Spiel funktioniert mit Express und Socket.io und wird auf adaptable gehostet.
Mit einer Server-Client-Verbindung kann das Spiel auf unterschiedlichen Geräten gespielt werden. Dies funktioniert bisher jedoch ohne korrekte Anzeige der Punktanzahl, jedoch zeigen die console.log(), dass das Fundament dafür funktioniert. Die Unit Tests sind in einer seperaten Textdatei zu finden, dass sie den Code leider kaputt machen.

Öffentlicher Link: https://nicole-quizduell.adaptable.app
