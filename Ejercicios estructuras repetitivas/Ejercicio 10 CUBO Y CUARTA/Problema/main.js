//Leer 10 números y obtener su cubo y su cuarta

// PARA LEER 10 NÚMEROS, CAMBIAR CONDICIÓN WHILE A: CICLO<PARSEINT(10)

var ciclo = 1 // Se pone el ciclo en uno, pues iterará (del 1 al 10)
var veces = 3// Probando hasta 3 veces. Cambiar valor a 10.
while (ciclo > parseInt(10)){
	var numero = prompt("Introduce un número")
	cubo = (numero * numero * numero);
	cuarta = (numero * numero * numero * numero);
	ciclo= ciclo++;
	alert("El cubo de " + numero + " es " + cubo);
	alert("La cuarta potencia de " + numero + " es " + cuarta);
	alert("Llevamos " + ciclo + " número(s)");	
}

for (var i = 1; veces >= i; i++) {
	var numero = prompt("Introduce un número")
	cubo = (numero * numero * numero);
	cuarta = (numero * numero * numero * numero);
	alert("El cubo de " + numero + " es " + cubo);
	alert("La cuarta potencia de " + numero + " es " + cuarta);
	alert("Llevamos " + ciclo + " número(s)");	
};