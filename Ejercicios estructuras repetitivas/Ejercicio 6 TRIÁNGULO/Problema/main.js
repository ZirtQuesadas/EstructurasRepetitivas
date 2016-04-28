/*Un triangulo rectángulo puede tener lados que sean todos enteros. 
El conjunto de tres valores enteros para los lados de un triángulo rectángulo 
se conoce como una terna pitagórica (c^2= a^2+b^2 ). Estos tres lados deben satisfacer la relación 
de que la suma de los cuadrados de dos lados es igual al cuadrado de la hipotenusa. 

NO ENTIENDO ESTA INSTRUCCIÓN:

Encuentre todas las ternas de Pitágoras para el cateto opuesto, cateto adyacente e hipotenusa, 
todos ellos no mayores de 500.

¿Cómo que "todas" las termas pitagóricas? ¿cuál es el cateto opuesto y cuál el adyacente? 
¿es la suma de los valores de los catetos y la hipotenusa lo que no debe ser mayor a 500, 
es la suma de los valores al cuadrado de los catetos y la hipotenusa lo que no debe ser 
mayor a 500?

*/


var catetoA = prompt("Introduce un número entero")
var catetoB = prompt("Introduce un número entero")
var hipotenusaC = prompt("Introduce un número entero")

hipotenusaC = hipotenusa * hipotenusa
hipotenusa = ( (catetoA)*(catetoA) ) + ( (catetoB)*(catetoB) ) //se elevan al cuadrado los catetos