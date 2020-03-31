import fs from 'fs';
import path from 'path';

import { initContractEvents } from "./contracts"

// interface to initialize contracts on startup
export const initContracts = async (dir, provider) => {

    if (!fs.existsSync(dir)) {
        console.err("Directory does not exist: ", dir);
        return;
    }

    let files = fs.readdirSync(dir)
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (/.*.json/.test(file)) {
            var filename = path.join(dir, file);
            const fileContents = fs.readFileSync(filename, 'utf8')
            const data = JSON.parse(fileContents)
            await initContractEvents(provider, data)
        }
    }
}


// exports of necessary external utils
// export { initContractEvents } from "./contracts"
