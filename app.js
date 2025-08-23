// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [" "];
//Función para agregar texto a un elemento HTML
function agregarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    //elementoHTML.innerHTML = texto;
    return;
}

//Función para agregar amigo a la lista
function agregarAmigo() {
    let nombreAmigo = (document.getElementById('amigo').value).trim();
    for (let i = 0; i < amigos.length; i++) {    
        if (nombreAmigo === '') {
        //Envio alerta si el campo esta vacio
            alert ('El nombre del amigo no puede estar vacío.');
        }else{
            //Agregar amigo a la lista
            amigos.push(nombreAmigo);
            document.getElementById('agregar').removeAttribute('disabled');
            limpiarCaja();
            //mostrarAmigos();
            console.log(amigos);
        }
        return;
    } 
}
agregarAmigo();

//Función para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

agregarTextoElemento('h1', 'Lista de amigos');
