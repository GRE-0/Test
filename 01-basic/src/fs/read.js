import {fileURLToPath} from "url"
import {join} from "path";
import * as fs from "fs"


const filename = "fileToRead.txt";
const folder = "files";
const errorMessage = "FS operation failed";
const pathToFile = join(fileURLtoPath(import.meta.url), "...", folder. filename)
const data = new Uint8Array(Buffer.from(successText))

const rename = async () => {
    let conten = "";
    try{
        await fs.promises.access(filepath, fs.promises.constants.F_OK);
        content = await fs.promises.readFile(filepath, options = "utf-8");
    }
    catch(error)
    {
        throw new error(errorMessage)
    }
};

// Warte auf die Ausführung der rename-Funktion
await rename();
