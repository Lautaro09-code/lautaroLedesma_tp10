//Sueldo
let nombre = "Lautaro";
let apellido = "Ledesma";
let sueldoActual = 200000;
let porcentajeAumento = 15;

let calculoAumento = sueldoActual * porcentajeAumento / 100;

let sueldoNuevo = sueldoActual + calculoAumento;;

console.log("Hola, estimad@ ", nombre ,apellido)
console.log("En base a su sueldo actual: ", sueldoActual)
console.log("Ha recibido un aumento del %", porcentajeAumento , ": $", calculoAumento)
console.log("y su nuevo sueldo es de: $" ,sueldoNuevo)