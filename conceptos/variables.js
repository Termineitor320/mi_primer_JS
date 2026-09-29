const nombreEstudiante = "Daniel ";
const anoNacimiento = 2007;

//año actual de forma dinamica
const anoActual = new Date().getFullYear();

//calculo de la edad
let edadActual = anoActual - anoNacimiento;

//resultado en el navegador 
console.log("Hola "+ nombreEstudiante + ", tu edad actual es: " + edadActual + " anos.");












