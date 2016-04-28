/*Suponga que se tiene las calificaciones de un grupo de 40 alumnos.
Realizar un algoritmo para calcular la calificación media y la calificación 
más baja de todo el grupo.
*/
var ciclo = 1
var sumatoria = 0
//var num_alumnxs = parseInt(0)
var num_alumnxs = parseInt(4)// Algoritmo programado para un grupo de 4 alumnxs. CAMBIAR A 40

while (num_alumnxs>=ciclo){
	
	var calificaciones = prompt("Introduce la " +ciclo+ " calificación");
	sumatoria = (sumatoria + parseInt(calificaciones));
	var promedio = (sumatoria / 4);
	ciclo++;// poner el incremento o decremento al final del ciclo while BUENA PRÁCTICA
}
alert(" El promedio va en " + promedio)