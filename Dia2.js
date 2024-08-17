let Nombre=prompt("¿Cuál es tu nombre?");
let Años=prompt("¿Cuántos años tienes?");
let Lenguaje=prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${Nombre}, tienes ${Años} años y ya estás aprendiendo ${Lenguaje}!`);

let opc=prompt(`¿Te gusta estudiar ${Lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
if(opc==1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}
if(opc==2){
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}