import fs from "fs/promises";

async function writeFile() {
    try {
        await fs.writeFile("promise.txt", "Hello student!");
        console.log("File created and data written successfully");
    }
    catch (error) {
        console.log("Error writing file:", error);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile("promise.txt", "utf8");
        console.log("File content is:", data);
    }
    catch (error) {
        console.log("Error reading file:", error);
    }
}


async function renameFile() {
    try {
        const data = await fs.renameFile("promise.txt", "shreyansh.txt");
        console.log("File renamed sussefully:", data);
    }
    catch (error) {
        console.log("Error reading file:", error);
    }
}

async function appendFile() {
    try {
        const data = await fs.appendFile("promise.txt", "utf8");
        console.log("data append successfully:", data);
    }
    catch (error) {
        console.log("Error reading file:", error);
    }
}



async function main() {
    await writeFile();
    await readFile();
    await renameFile();
    await appendFile();
}

main();