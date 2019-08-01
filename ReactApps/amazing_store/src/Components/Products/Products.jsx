import React from "react";
import "./Products.css";
import Product from "../Product/Product";
import product1 from "../../Img/product1.jpg";
import product2 from "../../Img/product2.png";
import product3 from "../../Img/product3.jpg";
import product4 from "../../Img/product4.jpg";
import product5 from "../../Img/product5.jpg";
import product6 from "../../Img/product6.jpg";
import product7 from "../../Img/product7.jpg";
import product8 from "../../Img/product8.jpg";

const prod1 = product1;
const prod2 = product2;
const prod3 = product3;
const prod4 = product4;
const prod5 = product5;
const prod6 = product6;
const prod7 = product7;
const prod8 = product8;
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: [
        {
          name: "Missha All Around Safe Block Sebum Zero Sun",
          skinType: "For Oily Skin",
          brand: "Channel",
          popularity: "3",
          price: "$4.00",
          imgSrc: prod1,
          description: "Ideal after sunburning  ",
          rate: "4"
        },
        {
          name: "Innisfree Green Tea Balancing Cream",
          skinType: "For Oily Skin",
          brand: "Channel",
          popularity: "3",
          price: "$18.00",
          imgSrc: prod2,
          description: "Ideal after sunburning  ",
          rate: "4"
        },
        {
          name: "Claire’s Cloud 9 Blanc De Whitening Cream",
          skinType: "For Oily Skin",
          brand: "Channel",
          popularity: "3",
          price: "$20.00",
          imgSrc: prod3,
          description: "Ideal after sunburning  ",
          rate: "4",
          id: "special"
        },
        {
          name: "Tonymoly Pure Eco Snail Moisture Gel",
          skinType: "For Oily Skin",
          brand: "Channel",
          popularity: "3",
          price: "$8.00",
          imgSrc: prod4,
          description: "Ideal after sunburning  ",
          rate: "4"
        },
        {
          name: "Skin79 Fresh Garden Mask - Snail",
          skinType: "For Oily Skin",
          brand: "Channel",
          popularity: "3",
          price: "$2.00",
          imgSrc: prod5,
          description: "Ideal after sunburning  ",
          rate: "4"
        },
        {
          name: "Cosrx Advanced Snail 92 All in One Cream",
          skinType: "For Oily Skin",
          brand: "Channel",
          popularity: "3",
          price: "$24.00",
          imgSrc: prod6,
          description: "Ideal after sunburning  ",
          rate: "4"
        },
        {
          name: "Innisfree Canola Honey Mask",
          skinType: "For Oily Skin",
          brand: "Channel",
          popularity: "3",
          price: "$14.00",
          imgSrc: prod7,
          description: "Ideal after sunburning  ",
          rate: "4"
        },
        {
          name: "Scinic Honey Banana Cleansing Foam",
          skinType: "For Oily Skin",
          brand: "Channel",
          popularity: "3",
          price: "$4.00",
          imgSrc: prod8,
          description: "Ideal after sunburning  ",
          rate: "4"
        }
      ]
    };
  }
  render() {
    return this.state.productArray.map((product, index) => {
      return (
        <Product
          name={product.name}
          imgSrc={product.imgSrc}
          price={product.price}
        />
      );
    });
  }
}
export default Products;
