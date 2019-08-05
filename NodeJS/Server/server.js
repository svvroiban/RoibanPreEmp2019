const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("Acces-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-type": "application/json" });
    let url = req.url;
    if (/^\/categories($|\/$)/gi.test(url)) {
      fs.readFile("./categories.json", (err, myData) => {
        res.end(myData.toString());
      });
    } else if (/^\/products\/[0-9]+$/gi.test(url)) {
      fs.readFile("./products.json", (err, myData) => {
        res.end(myData.toString());
      });
    }
  })
  .listen(5000, "127.0.0.1");

// function doSomething(first, second, callBack) {
//   const myData = first + second;
//   setTimeout(function() {
//     callBack(null, myData);
//   }, 5000);
// }

// doSomething(12, 2, function(error, myData) {
//   if (error) {
//     console.log("MyFkngError", error);
//   }

//   console.log("My number is", myData);
// });
