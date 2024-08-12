import { fileURLToPath } from "url";
import { join, dirname } from "path";
import * as fs from "fs";

const filename = "fresh.txt";
const folder = "files";
const errorMessage = "FS operation failed";

// Ermitteln des Pfads zum aktuellen Verzeichnis und Erstellen des Pfads zur Quelldatei
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = join(__dirname, folder, filename);

// Pfad zur Zieldatei (z. B. im gleichen Ordner mit einem neuen Namen)
const copyFilename = "fresh_copy.txt";
const pathToCopyFile = join(__dirname, folder, copyFilename);

const copy = async () => {
    try {
        // Kopieren der Datei
        await fs.promises.copyFile(pathToFile, pathToCopyFile);
        console.log("Datei erfolgreich kopiert.");
    } catch (error) {
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
};

// Warte auf die Ausführung der copy-Funktion
await copy();
