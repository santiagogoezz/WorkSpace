let almacenamiento = [];
function mostrar(){
    const elementos = document.getElementById("mostrar");
    elementos.innerHTML = "";
    almacenamiento.forEach((elemento)=>{
        const ele = document.createElement("h1")
        ele.innerHTML=elemento;
        elementos.appendChild(ele);
    })
}
function almacenar(){
    const dato = document.getElementById("texto");
    almacenamiento.push(dato.value);
    mostrar();
}