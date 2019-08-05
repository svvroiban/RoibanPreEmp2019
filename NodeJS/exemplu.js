// const fs = require("fs");
// const { EventEmitter } = require("events");
// const emitter = new EventEmitter();

// emitter.on("phase", () => console.log("Poll phase")).emit("phase");

// fs.readFile(__filename, () => {
//   setTimeout(() => console.log("Timers phase"));
//   setImmediate(() => console.log("Check phase"));
// });

// const http = require("http");
// const server = http.createServer();
// server
//   .on("close", () => {
//     console.log("called from Close callbacks phase");
//   })
//   .listen(8000);
// process.on("SIGINT", () => {
//   server.close();
// });

// setTimeout(() => console.log("setTimeout"));
// setImmediate(() => console.log("setImmediate"));

// setTimeout(() => console.log("setTimeout"));
// setImmediate(() => console.log("setImmediate"));

// const http = require("http");

// const doWork = duration => {
//   const start = Date.now();
//   while (Date.now() - start < duration) {}
// };

// http
//   .createServer((req, res) => {
//     doWork(5000);
//     res.writeHead(200);
//     res.end("Hello World");
//   })
//   .listen(5000, "127.0.0.1");

// const crypto = require("crypto");
// const iterations = 4;

// for (let i = 0; i < iterations; i++) {
//   crypto.pdkdf2("secret", "salt", 100000, 64, "sha512", (err) => {
//     if (err) throw err;
//     console.log(derived.toString("hex"));
//   });
// }

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const htmlStream = fs.createReadStream(__dirname + "/index.html", {
      encoding: "utf-8"
    });
    htmlStream.on("data", chunk => console.log(chunk)).pipe(res);
  })
  .listen(5000, "127.0.0.1");
