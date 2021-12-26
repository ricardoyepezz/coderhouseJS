//--------------- DESAFÍO 2 -----------------//

//Título
alert("Eres mayor de edad??");

//Variables de entrada tipo string
let name = prompt("Por favor coloca tu Nombre");
let lastname = prompt("Por favor coloca tu Apellido");

//Variables de entrada tipo string con su respectivas conversiones a datos númericos
let ageIn = Number(prompt("Por favor coloca el año en el que naciste:"));

//Calculo de edad
let cal = 2021 - ageIn;

//función if para mostrar cálculo solo si el año de entrada en mayor a 2021, sino mostrará que el dato es incorrecto
if (ageIn > 2021) {
	alert("Año incorrecto");

	//condiciones para validar si la persona es mayor o menor de edad
} else if (cal >= 18) {
	alert(`${name} ${lastname} tiene ${cal} años, es mayor de edad.`);
} else if (cal < 18) {
	alert(`${name} ${lastname} tiene ${cal} años, es menor de edad.`);
} else {
	alert("Datos incorrectos");
}
