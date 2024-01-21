// Genera un número secreto al cargar la página
let numeroSecreto = 0 ;
let intentos = 0;
// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para verificar el intento del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    // Quita el siguiente return, ya que no es necesario
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
//let valoreCaja = document.querySelector('#valorUsuario');
//valoreCaja.value = '';
}

// Función para generar un número secreto aleatorio entre 1 y 10
function generaNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}
function condicionesIniciales() {
    // Asigna texto a elementos HTML al cargar la página
    asignarTextoElemento('h1', 'Juego del número secreto!!');
    asignarTextoElemento('p', 'Ingresa un número del 1 al 10');   
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar menssaje de intervalo de numeros 
    //general numero aleatorio
    //inicialisar numero de intentos
    condicionesIniciales ();
    //desabilitar el boton juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
    


condicionesIniciales ();
