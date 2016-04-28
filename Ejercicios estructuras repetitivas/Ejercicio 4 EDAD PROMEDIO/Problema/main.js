//Se requiere un algoritmo para obtener la edad promedio de un grupo de 'N' alumnos.
var ciclo = 1
var sumatoria = 0
//var num_alumnxs = parseInt(0)
var num_alumnxs = parseInt(prompt("Introduce el número de alumnxs que tiene el grupo"))

while (num_alumnxs>=ciclo){
	
	var edad = prompt("Introduce la " +ciclo+ " edad");
	sumatoria = (sumatoria + parseInt(edad));
	var promedio = (sumatoria / num_alumnxs); //NO ME RECONOCE LA DIVISIÓN :(
	ciclo++;// poner el incremento o decremento al final del ciclo while BUENA PRÁCTICA
}
alert(" El promedio va en " + promedio)
/*
do{
	edad = prompt("Introduce una edad");
	sumatoria = (parseInt(sumatoria) + parseInt(edad));
	ciclo = ciclo++;
	var promedio = (parseInt(sumatoria)/parseInt(num_alumnxs) )
	alert("Llevamos " + ciclo + " ciclo(s). El promedio va en " + sumatoria);
} 
while (ciclo<=parseInt(num_alumnxs);
*/	
/*
var num_alumnxs = prompt("Introduce el número de alumnxs que tiene el grupo")
for (ciclo = 1; ciclo <=parseInt(num_alumnxs); ciclo++) {
	
	edad = prompt("Introduce una edad");
	sumatoria = (parseInt(sumatoria) + parseInt(edad));
	ciclo = (ciclo + parseInt(1) );
	var promedio = (parseInt(sumatoria)/parseInt(num_alumnxs) )
	alert("Llevamos " + ciclo + " ciclo(s). El promedio  va en " + sumatoria);
};
*/