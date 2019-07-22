var quantity = document.querySelectorAll(".quantity");
var quantityPrice = document.getElementsByClassName("quantity-price");
var removeButtons = document.getElementsByClassName("remove");
var addButtons = document.getElementsByClassName("add");
var productPrices = document.getElementsByClassName("price");

var regex = function(value) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );
};
var firstNameValid = false;
var lastNameValid = false;
var emailValid = false;

document.getElementById("firstName").addEventListener("blur", function(event) {
  var value = document.getElementById("firstName").value;
  if (/^[a-zA-Z ]+$/.test(value)) {
    document
      .getElementById("firstName")
      .setAttribute("style", "border: 1px solid #777777;");
    firstNameValid = true;
    tryEnable();
  } else {
    document
      .getElementById("firstName")
      .setAttribute("style", "border: 1px solid red;");
    firstNameValid = false;
    tryEnable();
  }
});

document.getElementById("lastName").addEventListener("blur", function(event) {
  var value = document.getElementById("lastName").value;
  if (/^[a-zA-Z ]+$/.test(value)) {
    document
      .getElementById("lastName")
      .setAttribute("style", "border: 1px solid #777777;");
    lastNameValid = true;
    tryEnable();
  } else {
    document
      .getElementById("lastName")
      .setAttribute("style", "border: 1px solid red;");
    lastNameValid = false;
    tryEnable();
  }
});

document.getElementById("email").addEventListener("blur", function(event) {
  var value = document.getElementById("email").value;
  if (regex(value)) {
    document
      .getElementById("email")
      .setAttribute("style", "border: 1px solid #777777;");
    emailValid = true;
    tryEnable();
  } else {
    document
      .getElementById("email")
      .setAttribute("style", "border: 1px solid red;");
    emailValid = false;
    tryEnable();
  }
});

function tryEnable() {
  if (firstNameValid && lastNameValid && emailValid) {
    document.getElementById("checkout").disabled = false;
  } else {
    document.getElementById("checkout").disabled = true;
  }
}

function decrement() {
  for (let i = 0; i < removeButtons.length; i++) {
    var button = removeButtons[i];
    button.addEventListener("click", function(event) {
      var decrement = parseInt(quantity[i].innerText) - 1;
      quantity[i].innerText = decrement;
    });
  }
}
decrement();

function increment() {
  for (let i = 0; i < addButtons.length; i++) {
    var button = addButtons[i];
    button.addEventListener("click", function(event) {
      var increment = parseInt(quantity[i].innerText) + 1;
      quantity[i].innerText = increment;
      totalProductPrices(i);
    });
  }
}
increment();

function totalProductPrices(i) {
  // quantityPrice[i].innerText =
  // parseInt(productPrices[i]) * parseInt(quantity[i]);
}
