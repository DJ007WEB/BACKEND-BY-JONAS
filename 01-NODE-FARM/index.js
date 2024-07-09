const fs = require("fs");
const http = require("http");

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// FILES

// BLOCKING, SYNCHRONOUS WAY

/*const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn} \n Created on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);

console.log("File has been written"); */

// NON BLOCKING ASYNCHRONOUS WAY

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written");
//       });
//     });
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// SERVER

const server = http.createServer((req, res) => {
  const pathname = req.url;

  if (pathname === "/" || pathname === "/overview") {
    res.end("This is Overview");
  } else if (pathname === "/product") {
    res.end("This is Product");
  } else {
    res.writeHead(404, {
        'Content-type': 'text/html'
    })
    res.end("<h1>404 Page not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
