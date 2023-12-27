let ataqueJugador;

function iniciarJuego() {
  let botonGuerreroJugador = document.getElementById("boton-guerrero");
  botonGuerreroJugador.addEventListener("click", seleccionarGuerreroJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarGuerreroJugador() {
  let inputGoku = document.getElementById("goku");
  let inputVegeta = document.getElementById("vegeta");
  let inputGohan = document.getElementById("gohan");
  let SpanGuerreroJugador = document.getElementById("guerrero-jugador");

  if (inputGoku.checked) {
    SpanGuerreroJugador.innerHTML = "Goku";
  } else if (inputVegeta.checked) {
    SpanGuerreroJugador.innerHTML = "Vegeta";
  } else if (inputGohan.checked) {
    SpanGuerreroJugador.innerHTML = "Gohan";
  } else {
    alert("seleciona un guerrero");
  }

  seleccionarGuerreroEnemigo();
}

function seleccionarGuerreroEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  let SpanGuerreroEnemigo = document.getElementById("guerrero-enemigo");

  if (ataqueAleatorio == 1) {
    SpanGuerreroEnemigo.innerHTML = "goku";
  } else if (ataqueAleatorio == 2) {
    SpanGuerreroEnemigo.innerHTML = "vegeta";
  } else {
    SpanGuerreroEnemigo.innerHTML = "Gohan";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  alert(ataqueJugador);
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  alert(ataqueJugador);
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  alert(ataqueJugador);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
