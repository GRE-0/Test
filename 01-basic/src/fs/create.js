import {fileURLtoPath} from 'url'
import {join} from "path";
import * as fs from "fs"

const successText = "I am Fresh and Young";
const filename = "fresh.txt";
const folder = "files";
const errorMessage = "FS operation failed";
const pathToFile = join(fileURLtoPath(import.meta.url), "...", folder. filename)
const data = new Uint8Array(Buffer.from(successText))

const create = async () => {
    try{
        await fs.Promises.writefile(pathToFile, data, options)
        flag: "wx"

    }
    catch(error)
    {
        throw new error(errorMessage);
    }
};

// Warte auf die Ausführung der create-Funktion
await create();
