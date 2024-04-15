"use Strict";

const $nombre = document.getElementById("nombre")
const $telefono = document.getElementById("telefono")
const $correo = document.getElementById("correo")
const $mensaje = document.getElementById("mensaje")
const $botonEnviar = document.getElementById("botonEnviar")
console.log($botonEnviar); 

let nombre = null;
let telefono = null;
let correo = null;
let mensaje = null;

$nombre.addEventListener("input" , (evento)=> {
    nombre = evento.target.value;
});

$telefono.addEventListener("input" , (evento)=> {
    telefono = evento.target.value;
});

$correo.addEventListener("input" , (evento)=> {
    correo = evento.target.value;
});

$mensaje.addEventListener("input" , (evento)=> {
    mensaje = evento.target.value;
});

$botonEnviar.addEventListener("click", (evento)=> {
    evento.preventDefault()
    console.log(nombre);
    console.log(telefono);
    console.log(correo);
    console.log(mensaje);
    window.alert("Muchas gracias por tu información. Te llamaremos en maximo 2 días habiles.")
    evento.Default()
}); 
