"use strict";

const $nombre = document.getElementById("nombre")
const $telefono = document.getElementById("telefono")
const $correo = document.getElementById("correo")
const $destino = document.getElementById("destino")
const $partida = document.getElementById("partida")
const $llegada = document.getElementById("llegada")
const $mensaje = document.getElementById("mensaje")
const $botonEnviar = document.getElementById("botonEnviar")
console.log($botonEnviar);

let nombre = null;
let telefono = null;
let correo = null;
let destino = null;
let partida = null;
let llegada = null;
let mensaje = null;

$nombre.addEventListener("input", (evento) => {
    nombre = evento.target.value;
});

$telefono.addEventListener("input", (evento) => {
    telefono = evento.target.value;
});

$correo.addEventListener("input", (evento) => {
    correo = evento.target.value;
});

$destino.addEventListener("input", (evento) => {
    destino = evento.target.value;
});

$partida.addEventListener("input", (evento) => {
    partida = evento.target.value;
});

$llegada.addEventListener("input", (evento) => {
    llegada = evento.target.value;
});

$mensaje.addEventListener("input", (evento) => {
    mensaje = evento.target.value;
});

$botonEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);
    console.log("Correo:", correo);
    console.log("Destino:", destino);
    console.log("Fecha de partida:", partida);
    console.log("Fecha de llegada:", llegada);
    console.log("Mensaje:", mensaje);
    window.alert("¡Gracias por tu información! Nos pondremos en contacto contigo lo más pronto posible.");
});

