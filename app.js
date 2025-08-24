// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];
//Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Función para agregar amigo a la lista
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value.trim();
    if (nombreAmigo === '') {
        //Envío alerta si el campo está vacío
        alert('El nombre del amigo no puede estar vacío.');
    }else {
        //Agregar amigo al array
        amigos.push(nombreAmigo);
        document.getElementById("amigo").value = '';
        limpiarCaja();
        //console.log(amigos);
        mostrarAmigos();    
    }
    return;
}

//Función para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    
}
//Función para mostrar amigos en la lista
function mostrarAmigos(){
    let listaAmigos = '';
    amigos.forEach(amigo => {
        listaAmigos += `<li>${amigo}</li>`;
    });
    asignarTextoElemento('ul', listaAmigos);
}