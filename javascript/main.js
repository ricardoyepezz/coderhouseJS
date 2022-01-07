//--------------- DESAFÍO COMPLEMENTARIO -----------------//

alert("Cálculo de Área:");
let option = Number(prompt(" 1. Triángulo - 2. Cuadrado - 3. Círculo"));

// ---------------triangle calculation---------------//
if (option === 1) {
	let firstValue = Number(prompt("Ingrese la base en metros"));
	let secondValue = Number(prompt("Ingrese la altura en metros"));
	const triangle = (a, b) => ((a * b) / 2).toFixed(2);
	alert(`${triangle(firstValue, secondValue)} metros cuadrados.`);

	// ---------------square calculation---------------//
} else if (option === 2) {
	let firstValue = Number(prompt("Ingrese la longitud de los lados en metros"));
	const square = (a) => (a * a).toFixed(2);
	alert(`${square(firstValue)} metros cuadrados.`);

	// ---------------circle calculation---------------//
} else if (option === 3) {
	let firstValue = Number(prompt("Ingrese el radio en metros"));
	const circle = (a) => (Math.PI * a ** 2).toFixed(2);
	alert(`${circle(firstValue)} metros cuadrados.`);
	// --------------- incorrect value ---------------//
} else {
	alert("Opción Incorrecta");
}
