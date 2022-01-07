/* //--------------- DESAFÍO 3 Ciclos/iteraciones -----------------// */

alert("Escoge una opción:");
let option = Number(
	prompt(
		" 1. Últimos pilotos de F1 campeones del mundo - 2. Últimos equipos de F1 campeones del mundo"
	)
);

if (option === 1) {
	const cars = [
		"Max Verstappen",
		"Lewis Hamilton",
		"Nico Rosberg",
		"Sebastian Vettel",
	];
	let text = "";
	for (let i = 0; i < cars.length; i++) {
		text = cars[i] + " ";
		console.log(text);
	}
} else if (option === 2) {
	const cars = ["Mercedes ", "Red Bull", "Brawn", "Ferrari"];
	let text = "";
	for (let i = 0; i < cars.length; i++) {
		text = cars[i] + " ";
		console.log(text);
	}
} else {
	alert("Opción Incorrecta");
}
