// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];
let amigoSorteado = 0;
let numeroAmigoSorteado = [];
let sorteoRealizado = false;
//Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Función para agregar amigo a la lista
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value.trim();
    if (nombreAmigo === '') {
        //Envío alerta si el campo está vacío
        alert('Por favor, ingrese un nombre valido.');
        return;
    }
    if (sorteoRealizado){
        amigos = [];
        numeroAmigoSorteado = [];
        sorteoRealizado = false;
        asignarTextoElemento('resultado', '');
    }
    //Agregar amigo al array
    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = '';
    limpiarCaja();
    //console.log(amigos);
    mostrarAmigos();   
    return; 
}

//Función para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}
//Función para mostrar amigos en la lista
function mostrarAmigos(){
    let listaAmigos = '';
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos += `<li>${amigos[i]}</li>`;
        }
    asignarTextoElemento('listaAmigos', listaAmigos);
    return;
}
//Función para sortear amigo secreto 
function sortearAmigo(){
    let numeroGenerado = Math.floor(Math.random()*amigos.length);
    //console.log(numeroGenerado); //console.log(numeroAmigoSorteado);
    if (amigos.length === 0){
        //Texto si no hay amigos en la lista
        asignarTextoElemento('resultado', '<li>No hay amigos en la lista</li>');
    }else {
        if (amigos.length == numeroAmigoSorteado.length){
            //Texto si ya fueron sorteados todos los amigos
            asignarTextoElemento('resultado', '<li>Todos los amigos ya fueron sorteados</li>');
        }else{
            //Vuelve a sortear si el número ya fue sorteado
            if (numeroAmigoSorteado.includes(numeroGenerado)){
                return sortearAmigo();
            }else{
                //Retorna el número generado y lo agrega al array de números sorteados
                document.getElementById("listaAmigos").innerHTML = '';
                asignarTextoElemento('resultado', `<li>El amigo secreto es: ${amigos[numeroGenerado]}</li>`);
                numeroAmigoSorteado.push(numeroGenerado);
                sorteoRealizado = true;
                return numeroGenerado;
            }
        }
    }    
    return;
}