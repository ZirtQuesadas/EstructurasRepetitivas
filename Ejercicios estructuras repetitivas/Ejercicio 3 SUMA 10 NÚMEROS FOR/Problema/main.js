var sumatoria = 0
var numciclo = 1
var sumatoria = 0

for (numciclo = 1; numciclo <=10; numciclo++) {
	cantidad = prompt("Introduce una cantidad");
	sumatoria = (parseInt(sumatoria) + parseInt(cantidad));
	numciclo = (numciclo + parseInt(1) );
	alert("Llevamos " + numciclo + " ciclo(s). La sumatoria va en " + sumatoria);

};