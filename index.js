let Value = "";

let screen = document.getElementById("screen");

buttons = document.querySelectorAll("button");

for (tap of buttons) {

  tap.addEventListener("click", (e) => {

    ButtonPressed = e.target.innerText;

    if (ButtonPressed == "x") {

      ButtonPressed = "*";

      Value += ButtonPressed;

      screen.value = Value;

    }

    else if (ButtonPressed == "C") {

      Value = "";

      screen.value = Value;

    }

    else if (ButtonPressed == "%") {

      screen.value = eval(Value) / 100;

    }

    else if (ButtonPressed == "^") {

      Value += "**";
      screen.value = Value;

    }

    else if

      (ButtonPressed == "=") {

      screen.value = eval(Value);

    }

    else {

      Value += ButtonPressed;

      screen.value = Value;

    }

  });

}



