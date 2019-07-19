var regex = function(value) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );
};
document.getElementById("firstName").addEventListener("blur", function(event) {
  var value = document.getElementById("firstName").value;
  if (/^[a-zA-Z ]+$/.test(value)) {
    document
      .getElementById("firstName")
      .setAttribute("style", "border: 1px solid #777777;");
  } else {
    document
      .getElementById("firstName")
      .setAttribute("style", "border: 1px solid red;");
  }
});
document.getElementById("lastName").addEventListener("blur", function(event) {
  var value = document.getElementById("lastName").value;
  if (/^[a-zA-Z ]+$/.test(value)) {
    document
      .getElementById("lastName")
      .setAttribute("style", "border: 1px solid #777777;");
  } else {
    document
      .getElementById("lastName")
      .setAttribute("style", "border: 1px solid red;");
  }
});
document.getElementById("email").addEventListener("blur", function(event) {
  var value = document.getElementById("email").value;
  if (regex(value)) {
    document
      .getElementById("email")
      .setAttribute("style", "border: 1px solid #777777;");
  } else {
    document
      .getElementById("email")
      .setAttribute("style", "border: 1px solid red;");
  }
});
