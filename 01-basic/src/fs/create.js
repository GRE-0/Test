import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { promises as fs } from "fs";

const successText = "I am Fresh and Young";
const filename = "fresh.txt";
const folder = "files";
const errorMessage = "FS operation failed";

// Ermitteln des Pfads zum aktuellen Verzeichnis und Erstellen des Pfads zur Datei
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = join(__dirname, folder, filename);

// Daten, die in die Datei geschrieben werden sollen
const data = new Uint8Array(Buffer.from(successText));

const create = async () => {
    try {
        // Schreiben der Datei mit der Option 'wx', um sicherzustellen, dass die Datei nicht existiert
        await fs.writeFile(pathToFile, data, { flag: "wx" });
        console.log("Datei erfolgreich erstellt.");
    } catch (error) {
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
};

// Warte auf die Ausführung der create-Funktion
await create();
