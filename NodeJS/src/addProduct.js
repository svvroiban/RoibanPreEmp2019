var fs = require("fs");
const inquirer = require("inquirer");

module.exports = function(answers) {
  fs.writeFile("products.json", JSON.stringify(answers), function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("Succssefully written");
    console.log("Let's read newly written data");
    fs.readFile("product.json", function(err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("Asynchronous read:" + data.toString());
    });
  });
};
