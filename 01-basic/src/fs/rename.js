import { fileURLToPath } from "url";
import { join, dirname } from "path";
import * as fs from "fs";

const filename = "fileToRead.txt";
const folder = "files";
const errorMessage = "FS operation failed";

// Ermitteln des Pfads zum aktuellen Verzeichnis und Erstellen des Pfads zur Datei
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = join(__dirname, folder, filename);

const rename = async () => {
    let content = "";
    try {
        // Überprüfen, ob die Datei existiert
        await fs.promises.access(pathToFile, fs.constants.F_OK);
        
        // Datei lesen
        content = await fs.promises.readFile(pathToFile, "utf-8");
        console.log("Dateiinhalt:", content);
    } catch (error) {
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
};

// Warte auf die Ausführung der rename-Funktion
await rename();
