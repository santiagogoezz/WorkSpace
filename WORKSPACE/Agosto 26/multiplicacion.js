function suma(){
    const suma1 = document.getElementById("suma1");
    const suma2 = document.getElementById("suma2");
    const resultado = document.getElementById("resultadosuma");
    resultado.innerHTML = parseInt(suma1.value) + parseInt(suma2.value);
}

function multiplicacion(){
    const multiplicacion1 = document.getElementById("multiplicacion1");
    const multiplicacion2 = document.getElementById("multiplicacion2");
    const resultado = document.getElementById("resultadomultiplicacion");
    resultado.innerHTML = parseInt(multiplicacion1.value) * parseInt(multiplicacion2.value);
}

function resta (){
    const resta1 = document.getElementById("resta1");
    const resta2 = document.getElementById("resta2");
    const resultado = document.getElementById("resultadoresta");
    resultado.innerHTML = parseInt(resta1.value) - parseInt(resta2.value);
}

function division(){
    const division1 = document.getElementById("division1");
    const division2 = document.getElementById("division2");
    const resultado = document.getElementById("resultadodivision");
    resultado.innerHTML = parseInt(division1.value) / parseInt(division2.value);
}