// ELEVA UN NÚMERO A LA N POTENCIA
var numero = prompt("Introduce un número") // de -infinito a infinito
var enesimo = prompt("¿A qué potencia será elevado el número?")

// EXCEPCIONES DE POTENCIACIÓN
if ( (enesimo == 0)&&(numero==0) ){  // 
	alert("No se puede")
}
else if (enesimo == 0) {
	alert("El resultado es 1")
};
/*el número n-simo nos dice cuantas veces se multiplicará por uno o por sí mismo*/
/*enésimo se puede definir como un ciclo si: multiplicamos un número por el resultado
para obtener un nuevo resultado, hasta que el número de ciclo (que empieza en 1) 
alcance al número enesimo 
*/
var resultado = 1
 for (i= 1; i<=enesimo; i++) {
	resultado = resultado * numero
} 
alert("Resultado es " + resultado)
