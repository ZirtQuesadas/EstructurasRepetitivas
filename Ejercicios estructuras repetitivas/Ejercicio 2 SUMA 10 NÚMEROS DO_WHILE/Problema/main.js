var numciclo = parseInt(0)
var sumatoria = parseInt(0)

do{
	cantidad = prompt("Introduce una cantidad");
	sumatoria = (parseInt(sumatoria) + parseInt(cantidad));
	numciclo = (numciclo + parseInt(1) );
	alert("Llevamos " + numciclo + " ciclo(s). La sumatoria va en " + sumatoria);

} 
while (numciclo<10)
	