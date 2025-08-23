// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = ["Luis"];

function agregarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreAmigo = (document.getElementById('amigo').value).trim();
    if (nombreAmigo === '') {
        alert ('El nombre del amigo no puede estar vacío.');
    }else{
        amigos.push(nombreAmigo);
        agregarTextoElemento('p',`Amigo agregado: ${nombreAmigo}`);
        document.getElementById('agregar').removeAttribute('disabled','true');
        limpiarCaja();
        mostrarAmigos();
    }
    //document.getElementById('agregar').removeAttribute('disabled');
    return;
}
agregarAmigo();
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
console.log(amigos);