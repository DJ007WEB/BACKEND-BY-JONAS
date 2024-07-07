const fs = require("fs");

// BLOCKING, SYNCHRONOUS WAY

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn} \n Created on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);

console.log("File has been written");

// NON BLOCKING ASYNCHRONOUS WAY
