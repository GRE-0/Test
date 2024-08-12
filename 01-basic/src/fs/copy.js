import {fileURLtoPath} from "url"
import {join} from "path";
import * as fs from "fs"

const filename = "fresh.txt";
const folder = "files";
const errorMessage = "FS operation failed";
const pathToFile = join(fileURLtoPath(import.meta.url), "...", folder. filename)
const data = new Uint8Array(Buffer.from(successText))



const copy = async () => {
    try{
        await fs.promises.copyFile(pathToFile)
    }
    catch(error)
    {
        throw new error(errorMessage)
    }
};

// Warte auf die Ausführung der copy-Funktion
await copy();
