/* Ejercicio 1
Declare una función addNumbers y toma dos parámetros y devuelve suma.

function addNumbers(a, b) {
    return a + b;
  }
  const num1 = 5;
  const num2 = 10;
  const result = addNumbers(num1, num2);
  console.log("La suma de ${num1} y ${num2} es: ${result}"");

*/

/* Ejercicio 2
El área de un rectángulo se calcula de la siguiente manera: área = largo x ancho. Escribe una
función que calcule areaOfRectangle.


function areaOfRectangle (largo, ancho){
    const area = largo * ancho
    return area 
  }
  
  const largo = 5
  const ancho = 3
  const area = areaOfRectangle (largo, ancho);
  console.log(`el area del rectangulo es: ${area}`);
  */

  /*Ejercicio 3
  El perímetro de un rectángulo se calcula de la siguiente manera: perímetro = 2x (largo +
ancho). Escribe una función que calcule el perímetro del rectángulo.

function perimeterOfRectangle (largo, ancho){
 const  perimetro = 2 * (largo + ancho)
   return perimetro 
 }
 const largo = 5 
 const ancho = 3 
 const perimetro = perimeterOfRectangle (largo, ancho);
console.log(`el area del rectangulo es: ${perimetro}`)
*/

/*Ejercicio 4
El volumen de un prisma rectangular se calcula de la siguiente manera: volumen = largo x
ancho x alto. Escribe una función que calcule el volumenDeRectPrism.

function volumenDeRectPrism (largo, ancho, alto){
    const volumen = largo * ancho * alto
    return volumen
    
}  
const largo = 8 
const ancho = 2
const alto  = 3
const volumen = volumenDeRectPrism (largo, ancho, alto)
console.log(`el volumen de tu prima es igual a: ${volumen}`)
*/

/*Ejercicio 5
El área de un círculo se calcula de la siguiente manera: área = π x r x r. Escribe una función
que calcule areaOfCircle

function areaOfCircle (pi,r){
    const area = pi * r**2
    return area
}
let pi = 3.14
const r = 5
const area = areaOfCircle(pi,r)
console.log(`el area del circulo es igual a: ${area}`)
*/

/*Ejercicio 6
La circunferencia de un círculo se calcula de la siguiente manera: circunferencia = 2πr.
Escribe una función que calcule circumOfCircle

function circumOfCircle (pi, r){
    const circunferencia = 2 * pi * r
   return circunferencia
}
let pi = 3.14
const r = 5
const circunferencia = circumOfCircle (pi, r)
console.log(`la circunferencia del circulo es igual a: ${circunferencia}`)
*/

/* Ejercicio 7
La densidad de una sustancia se calcula de la siguiente manera: densidad = masa/volumen.
Escribe una función que calcule la densidad.

function densityofsubstance(masa, volumen){
    const densidad = masa / volumen
    return densidad
    
}
const masa = 40
const volumen = 15
const densidad = densityofsubstance(masa, volumen)
console.log (`la densidad de una sustancia es igual a:${densidad}`)
*/

/*Ejercicio 8
La velocidad se calcula dividiendo la distancia total recorrida por un objeto en movimiento
entre el tiempo total empleado. Escribe una función que calcule la velocidad de un objeto
en movimiento.

function velocityOfVehicle (recorrido, tiempo){
  const velocidad = recorrido / tiempo
  return velocidad
}
const recorrido = 348
const tiempo = 5
const velocidad = velocityOfVehicle (recorrido, tiempo)
console.log (`la velocidad alcanzada fue de: ${velocidad}km/hs`)
*/

/* Ejercicio 9
El peso de una sustancia se calcula de la siguiente manera: peso = masa x gravedad. Escribe
una función que calcule el peso.

function weightOfsubstance (masa, gravedad){
    const peso = masa * gravedad
    return peso
  }
  const masa = 50 
  let gravedad = 9.8
  const peso = weightOfsubstance(masa, gravedad)
  console.log (`el peso de la sustancia es de: ${peso}kg`)
*/

/*Ejercicio 10
La temperatura en oC se puede convertir a oF usando esta fórmula: oF = (oC x 9/5) + 32.
Escriba una función que convierta oC a oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit (oC){
  let oF = (oC * 9/5) + 32
    return oF
}
const oC = 28
const oF = convertCelsiusToFahrenheit (oC)
console.log (`en grados fahrenheit son: ${oF}`)
*/


/*Ejercicio 11
El índice de masa corporal (IMC) se calcula de la siguiente manera: bmi = peso en Kg /
(altura x altura) en m2. Escribe una función que calcule bmi. El IMC se utiliza para definir de
forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una
persona tiene un peso inferior al normal, con sobrepeso u obeso según la
información que se proporciona a continuación.
Los mismos grupos se aplican tanto a hombres como a mujeres.
Bajo peso: el IMC es inferior a 18,5
Peso normal: el IMC es de 18,5 a 24,9
Sobrepeso: el IMC es de 25 a 29,9
Obeso: IMC es 30 o más

function calcularIMC(pesoKg, alturaM) {
  var bmi = pesoKg / (alturaM * alturaM);
  return bmi;
}

function clasificarPeso(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
}
var peso = prompt("escriba su peso en kg"); 
var altura = prompt("escriba su altura en metros");

var imc = calcularIMC(peso, altura);
var categoriaPeso = clasificarPeso(imc);

console.log("Tu IMC es:", imc.toFixed(2));
console.log("Categoría de peso:", categoriaPeso);
*/

/*
Ejercicio 12
Escribe una función llamada checkSeason, toma un parámetro de mes y devuelve la
estación: Otoño, Invierno, Primavera o Verano.
*/
/*
function checkSeason(mes) {
  var mesMinusculas = mes.toLowerCase();
  var mesesInvierno = ['diciembre', 'enero', 'febrero'];
  var mesesPrimavera = ['marzo', 'abril', 'mayo'];
  var mesesVerano = ['junio', 'julio', 'agosto'];
  var mesesOtono = ['septiembre', 'octubre', 'noviembre'];

  if (mesesInvierno.includes(mesMinusculas)) {
    return 'Invierno';
  } else if (mesesPrimavera.includes(mesMinusculas)) {
    return 'Primavera';
  } else if (mesesVerano.includes(mesMinusculas)) {
    return 'Verano';
  } else if (mesesOtono.includes(mesMinusculas)) {
    return 'Otoño';
  } else {
    return 'Mes no válido'; 
  }
}
var mesEjemplo = prompt("escriba el mes correspondiente"); 
var estacion = checkSeason(mesEjemplo);

console.log("El mes de", mesEjemplo, "corresponde a la estación:", estacion);
*/


/* Juego 1

let num1
let num2
let contador = 1
num1 = Number(prompt("escriba un numero entre el 1 y 100"))
num2 = Math.round(Math.random()*100)

while(num1 != num2){
  if (num1 < num2){
    alert("el numero pensado es mas alto")
  } else{
    alert("el numero pensado es mas bajo")
  }
  num1 = Number(prompt("escriba otro numero"))
  contador++
}
alert ("FELICITACIONES!! El numero pensado era " +num2+ "\n lo resolviste en "+contador+ " intentos")
*/ 

//   Juego 2
let jugador 
let pc

function aleatoria(){
  return Math.ceil(Math.random()*3)
}

jugador = prompt("Elije 1: Piedra, 2: Papel, 3: Tijera")
pc = aleatoria()
alert("Tu elección fue:" +eleccion(jugada))
alert("Pc eligió: "+ eleccion(pc))

if (jugador==pc){
    alert("EMPATE")
}else if (jugador==1 && pc==3){
    alert("GANASTE")
}else if (jugador==2 && pc==1){
    alert("GANASTE")
}else if (jugador==3 && pc==2){
    alert("GANASTE")
}else{
    alert("PERDISTE")
}

function eleccion(jugada){
  let resultado = ""
  if (jugada == 1){
    resultado = "PIEDRA"
  }else if (jugada == 2){
    resultado = "PAPEL" 
  }else if (jugada == 3){
    resultado = "TIJERA"
  }else{
    resultado = "INGRESASTE UN VALOR/PALABRA INCORRECTA"
  } 
  return resultado

 
  
}
