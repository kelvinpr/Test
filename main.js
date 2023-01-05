function suma(a,b){
    let resultado = parseFloat(a) + parseFloat(b);
    return resultado;
}

function resta(a,b){
    let resultado = parseFloat(a) - parseFloat(b);
    return resultado;
}

function mp(a,b){
    let resultado = parseFloat(a) * parseFloat(b);
    return resultado;
}

function div(a,b){
    let resultado = parseFloat(a) / parseFloat(b);
    return resultado;
}


alert("CALCULADORA DE DOS NUMEROS BASICA");
var usuario = prompt("HOLA, ESCRIBE TU NOMBRE!");
alert("HOLA " + usuario + " BIENVENIDO A MI CALCULADORA BASICA EN JS");
var a = prompt("ESCRIBA EL PRIMER NUMERO");
var b = prompt("ESCRIBA EL SEGUNDO NUMERO");
var opc = prompt("QUE OPERACION QUIERES REALIZAR: 1.SUMA - 2.RESTA - 3.MULTIPLICACION - 4.DIVISION")

switch(opc){
    case "SUMA":
        alert("EL RESULTADO DE LA SUMA ES: " + suma(a,b));
        break;
    case "RESTA":
        alert("EL RESULTADO DE LA RESTA ES: " + resta(a,b));
        break;
    case "MULTIPLICACION":
        alert("EL RESULTADO DE LA MULTIPLICACION ES: " + mp(a,b));
        break;
    case "DIVISION":
        alert("EL RESULTADO DE LA DIVISION ES: " + div(a,b));
        break;   
}


