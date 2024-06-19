/* Ejercicio 1:
Instrucciones:
1. Crea una variable y almacena tu nombre
2. Crea una variable y almacena tu apellido paterno
3. Crea una variable y almacena tu apellido materno
4. Concatena las tres variables anteriores en una sola que se llame nombreCompleto*/

// Creación de variables
var nombre = "Jazmín";
var apellidoPaterno = "Fuentes";
var apellidoMaterno = "Becerril";

// Concatenación
var nombreCompleto = nombre + " " + apellidoPaterno + " " + apellidoMaterno;

// Print
console.log("Tu nombre completo es:", nombreCompleto);

/* Ejercicio 2
Instrucciones:
1. Crea una constante para almacenar un número
2. Usa condicionales para saber si el número es positivo, negativo o cero
3. Prueba con diferentes números*/

//Constante
const numero = 15;

// Condicionales
if (numero > 0) {
  console.log("El número", numero, "es un número positivo.");
} else if (numero < 0) {
  console.log("El número", numero, "es un número negativo.");
} else {
  console.log("El número", numero, "es cero.");
}

/*Ejercicio 3
Instrucciones:
Crea una variable llamada `year` para almacenar un año, luego escribe un programa que verifique si el año es bisiesto o no. Estas son las regla de decisión:

El número es divisible por 400 o El número es múltiplo de 4 y no es múltiplo de 100*/

//Variable
var year = parseInt("2024");

//Condicionales
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("Sí es año bisiesto.");
} else {
  console.log("No es año bisiesto.");
}

/*Ejercicio 4
Instrucciones:
Escribe un programa que imprima los números del 1 al 100. Pero:

1. Para los múltiplos de 3, imprime "Fizz" en lugar del número
2. Para los múltiplos de 5, imprime "Buzz" en lugar del número y
3. Para los múltiplos tanto de 3 y de 5, imprime "Fizz-Buzz"
*/

for (var i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
