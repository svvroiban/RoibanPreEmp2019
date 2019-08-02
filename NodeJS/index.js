const program = require("commander");

const addProducts = require('./src/addProduct');
const products = [
    {
      name: "Missha All Around Safe Block Sebum Zero Sun",
      price: "4.00$",
      description: "Perfect for oily skin"
    },
    {
      name: "Innisfree Green Tea Balancing Cream",
      price: "18.00$",
      description: "Perfect for oily skin"
    },
    {
      name: "Cosrx Advanced Snail 92 All in One Cream",
      price: "24.00$",
      description: "Perfect for oily skin"
    },
    {
      name: "Innisfree Canola Honey Mask",
      price: "14.00$",
      description: "Perfect for oily skin"
    }
  ];
// PRINT MENU
addProduct();

program
  .description("Add a product")
  .option("-a, --add <name> <price> <description> <img>", "addProduct");
  .action(function(){
    inquirer.prompt(products)
    .then(answers =>{
        addProducts(answers)
    });
  });
var greeting = require("./src/addProduct.js");


