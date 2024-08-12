import {fileURLtoPath} from 'url'
import path, {join} from "path";
import * as fs from "fs"

const filename = "fresh.txt";
const folder = "files";
const errorMessage = "FS operation failed";
const pathToFile = join(fileURLtoPath(import.meta.url), "...", folder. filename)
const data = new Uint8Array(Buffer.from(successText))


const read = async () => {
    try{
   await fs.promises.readFile(pathToFile)
    }
    catch(error)
    {
        throw new error(errorMessage);
    }

};

// Warte auf die Ausführung der read-Funktion
await read();
