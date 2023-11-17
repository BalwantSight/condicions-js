// Tarea 1
const image = document.querySelector(".challenge-img");

image.addEventListener("click", function () {
  image.classList.toggle("red-border");
});

// Tarea 2
const inputs = document.querySelectorAll("input");
const message = document.querySelector(".message");
const verifyButton = document.querySelector(".verify");

verifyButton.addEventListener("click", function () {
  let totalStickers = 0;

  inputs.forEach((input) => {
    const value = parseInt(input.value) || 0;
    totalStickers += value >= 0 ? value : 0;
  });

  if (totalStickers > 10) {
    message.textContent = "No puedes leer tanto. Llevas demasiados stickers";
  } else if (totalStickers === 0) {
    message.textContent =
      "No llevas ningún sticker de escritor. Elige el escritor que te guste";
  } else {
    message.textContent =
      " Te llevas " + totalStickers + " Stickers, ¡Disfruta de tu lectura!";
  }
});

// Tarea 3
const select1 = document.querySelector("[name='select1']");
const select2 = document.querySelector("[name='select2']");
const select3 = document.querySelector("[name='select3']");
const loginButton = document.querySelector(".login");
const passMessage = document.querySelector(".passMessage");

function verificarPassword() {
  const pass1 = select1.value;
  const pass2 = select2.value;
  const pass3 = select3.value;
  let mensaje = "";

  switch (true) {
    case pass1 === "9" && pass2 === "1" && pass3 === "1":
      mensaje = "Password 1 correcto";
      break;
    case pass1 === "7" && pass2 === "1" && pass3 === "4":
      mensaje = "Password 2 es correcto";
      break;
    default:
      mensaje = "Password incorrecto. Intentalo de nuevo.";
  }

  passMessage.textContent = mensaje;
}

loginButton.addEventListener("click", verificarPassword);
