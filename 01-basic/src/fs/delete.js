import { fileURLToPath } from "url";
import { join, dirname } from "path";
import * as fs from "fs";

const filename = "fileToRemove.txt";
const folder = "files";
const errorMessage = "FS operation failed";

// Ermitteln des Pfads zum aktuellen Verzeichnis und Erstellen des Pfads zur Datei
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = join(__dirname, folder, filename);

const remove = async () => {
    try {
        // Löschen der Datei
        await fs.promises.unlink(pathToFile);
        console.log("Datei erfolgreich entfernt.");
    } catch (error) {
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
};

// Warte auf die Ausführung der remove-Funktion
await remove();
