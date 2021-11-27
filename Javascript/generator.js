let input = document.querySelector(".number");
let output = document.querySelector(".output");
let generate = document.querySelector(".button_1");
let clear = document.querySelector(".button_2");

generate.addEventListener("click", (sum) => {
  var result = "";
  number = parseInt(input.value);
  if (input.value == "") {
    result =
      "<br><br><br><br><br><br><br>" + "<h1> Please enter a number </h1>";
  } else if (input.value != number) {
    result =
      "<br><br><br><br><br><br><br>" + "<h1> Input was not a number </h1>";
  } else {
    for (var i = 1; i <= 10; i++) {
      result =
        result + "<p>" + number + " x " + +i + " = " + number * i + "</p>";
    }
  }
  output.innerHTML = result;
});

clear.addEventListener("click", (empty) => {
  output.innerHTML = "";
  input.value = "";
});
