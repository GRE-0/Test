const fs = require('fs');
const crypto = require('crypto');

const calculateHash = async () => {
    try {
        // Erstellen eines SHA256-Hash-Objekts
        const hash = crypto.createHash('sha256');

        // Erstellen eines Lese-Streams für die Datei
        const fileStream = fs.createReadStream('fileToCalculateHashFor.txt');

        // Promisify-Ansatz zur Verarbeitung von Streams in einem asynchronen Kontext
        for await (const chunk of fileStream) {
            hash.update(chunk);
        }

        // Wenn der Stream abgeschlossen ist, wird der Hash berechnet und als hex zurückgegeben
        const result = hash.digest('hex');
        console.log(`SHA256 Hash: ${result}`);
        
    } catch (err) {
        console.error('Fehler beim Berechnen des Hashs:', err);
    }
};

// Warte auf die Ausführung der calculateHash-Funktion
await calculateHash();
