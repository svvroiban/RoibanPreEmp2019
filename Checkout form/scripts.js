const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
// if (firstName.value === "") {
//   console.log("e gol");
// }
var validFirstName = false;
var validLastName = false;
var validEmail = false;
document.getElementById("firstName").addEventListener("blur", function(event) {
  const valueFirstName = document.getElementById("firstName").value;
  const valueLastName = document.getElementById("lastName").value;
  if (!isValidString(valueFirstName)) {
    document
      .getElementById("firstName")
      .setAttribute("style", "border: 2px solid red;");
    validFirstName = false;
    trueCheckout();
  } else {
    document
      .getElementById("firstName")
      .setAttribute("style", "border: 1px solid initial;");
    validFirstName = true;
    trueCheckout();
  }
});
document.getElementById("lastName").addEventListener("blur", function(event) {
  const valueLastName = document.getElementById("lastName").value;
  if (!isValidString(valueLastName)) {
    document
      .getElementById("lastName")
      .setAttribute("style", "border: 2px solid red;");
    validLastName = false;
    trueCheckout();
  } else {
    document
      .getElementById("lastName")
      .setAttribute("style", "border: 1px solid initial;");
    validLastName = true;
    trueCheckout();
  }
});
document.getElementById("email").addEventListener("blur", function(event) {
  const valueEmail = document.getElementById("email").value;
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      valueEmail
    )
  ) {
    document
      .getElementById("email")
      .setAttribute("style", "border: 2px solid red;");
    validEmail = false;
    trueCheckout();
  } else {
    document
      .getElementById("email")
      .setAttribute("style", "border: 1px solid initial;");
    validEmail = true;
    trueCheckout();
  }
});
const validCharacters = /^[a-zA-Z ]+$/;
function isValidString(passedString) {
  return validCharacters.test(passedString);
}

function trueCheckout() {
  if (validFirstName && validLastName && validEmail) {
    document.getElementById("checkout").disabled = false;
  } else {
    document.getElementById("checkout").disabled = true;
  }
}

// var addElements = document.getElementsByClassName("add");
// var removeElements = document.getElementsByClassName("remove");
// var quantityElements = document.getElementsByClassName("quantity");
// var totalElementPrice = document.getElementsByClassName("total_element_price");
// var elementPrice = document.getElementsByClassName("element_price");
// var totalPrice = document.querySelector(".total price");

// for (i = 0; i < addElements.length; i++) {
//   addElements[i].addEventListener("click", add.bind(null, i));
//   removeElements[i].addEventListener("click", remove.bind(null, i));
// }

// function add(index) {
//   quantityElements[index].innerHTML =
//     Number(quantityElements[index].innerHTML) + 1;
//   totalElementPrice[index].innerHTML =
//     Number(quantityElements[index].innerHTML) *
//     Number(elementPrice[index].innerHTML);
//   console.log(totalElementPrice);
//   totalPrice.innerHTML =
//     Number(totalPrice.innerHTML) + Number(totalElementPrice[index].innerHTML);
// }
// function remove(index) {
//   if (Number(quantityElements[index].innerHTML) > 1) {
//     quantityElements[index].innerHTML =
//       Number(quantityElements[index].innerHTML) - 1;
//     totalElementPrice[index].innerHTML =
//       Number(totalElementPrice[index].innerHTML) -
//       Number(elementPrice[index].innerHTML);
//   }
// }

// TABLE
let totalPrice = document.querySelector(".total_price");
let productRows = document.querySelectorAll(".product");
let decrement = function(passString) {
  let number = Number(passString) - 1;
  return number.toString();
};
let increment = function(passString) {
  let number = Number(passString) + 1;
  return number.toString();
};
let sum = function(passString1, passString2) {
  let sum = Number(passString1) + Number(passString2);
  return sum.toString();
};
let sub = function(passStringB, passStringS) {
  let sub = Number(passStringB) - passStringS;
  return sub.toString();
};
for (let product of productRows) {
  let elementPrice = product.querySelector(".element_price");
  let removeButton = product.querySelector(".remove");
  let quantityElement = product.querySelector(".quantity");
  let addButton = product.querySelector(".add");
  let totalElementPrice = product.querySelector(".total_element_price");
  let removeRowButton = product.querySelector(".remove-item");

  removeButton.addEventListener("click", function() {
    if (quantityElement.innerHTML > 1) {
      quantityElement.innerHTML = decrement(quantityElement.innerHTML);
      totalElementPrice.innerHTML = sub(
        totalElementPrice.innerHTML,
        elementPrice.innerHTML
      );
      totalPrice.innerHTML = sub(totalPrice.innerHTML, elementPrice.innerHTML);
    }
  });
  addButton.addEventListener("click", function() {
    quantityElement.innerHTML = increment(quantityElement.innerHTML);
    totalElementPrice.innerHTML = sum(
      elementPrice.innerHTML,
      totalElementPrice.innerHTML
    );
    totalPrice.innerHTML = sum(totalPrice.innerHTML, elementPrice.innerHTML);
  });
  removeRowButton.addEventListener("click", function() {
    totalPrice.innerHTML = sub(
      totalPrice.innerHTML,
      totalElementPrice.innerHTML
    );
    product.remove();
  });
}

// var getProducts = document.getElementsByClassName("product");
// for (let getProduct of getProducts) {
//   let element_price = getProduct.getElementsByClassName("element_price")[0];
//   let prod_info = getProduct.getElementsByClassName("prod_info")[0];
//   let total_element_price = getProduct.getElementsByClassName(
//     "total_element_price"
//   )[0];

//   let remove = prod_info.getElementsByClassName("remove")[0];
//   let quantity = prod_info.getElementsByClassName("quantity")[0];
//   let add = prod_info.getElementsByClassName("add")[0];
//   console.log(quantity);
// }

// console.log(addElements);
// document.getElementsByClassName("add").addEventListener("click", addProduct);
// function addProduct() {
//   parseInt(getElementsByClassName("quantity"));
//   document.getElementsByClassName("quantity").stepUp(1);
// }
// document.getElementById("form").addEventListener("submit", validateName);
