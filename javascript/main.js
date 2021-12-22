//Título
alert("Cálculo de tu edad futura");

//Variables de entrada tipo string
let name = prompt("Por favor coloca tu Nombre");
let lastname = prompt("Por favor coloca tu Apellido");

//Variables de entrada tipo string con su respectivas conversiones a datos númericos
let ageIn = prompt("Por favor coloca tu edad");
let ageOut = parseInt(ageIn);
let yearIn = prompt("Por favor un año para calcular tu edad en el futuro");
let yearOut = parseInt(yearIn);

//Calculo de edad futura
let cal = yearOut - 2021 + ageOut;

//función if para mostrar cálculo solo si el año de entrada en mayor a 2021, sino mostrará que el dato es incorrecto
if (yearOut > 2021) {
	alert(`${name} ${lastname} tendrá ${cal} años para el año ${yearOut}.`);
} else {
	alert("Año incorrecto");
}
