import {fileURLToPath} from 'url'
import {join} from "path";
import * as fs from "fs"

const filename = "fileToRemove.txt";
const folder = "files";
const errorMessage = "FS operation failed";
const pathToFile = join(fileURLtoPath(import.meta.url), "...", folder. filename)
const data = new Uint8Array(Buffer.from(successText))

const remove = async () => {
    try{
        await fs.promises.unlink(pathToFile)

    }
    catch(error)
    {
        throw new error(errorMessage);
    }
};

// Warte auf die Ausführung der remove-Funktion
await remove();
