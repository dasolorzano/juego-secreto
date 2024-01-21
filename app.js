// declaraciones
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaxico = 10;

console.log(numeroSecreto);

// Función para verificar el intento del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        document.querySelector('p').innerHTML = `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            document.querySelector('p').innerHTML = 'El número secreto es menor';
        } else {
            document.querySelector('p').innerHTML = 'El número secreto es mayor';
        }
        intentos++;
        limpiarCaja();
    }
    // Remove return, as it is unnecessary
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// Función para generar un número secreto aleatorio entre 1 y numeroMaxico
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaxico) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteo todos los numeros
    if (listaNumerosSorteados.length === numeroMaxico) {
        document.querySelector('p').innerHTML = 'Ya se sortearon todos los números posibles';
    } else {
        //si el numero generada esta en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    // Asigna texto a elementos HTML al cargar la página
    document.querySelector('h1').innerHTML = 'Juego del número secreto!!';
    document.querySelector('p').innerHTML = `Ingresa un número del 1 al ${numeroMaxico}`;
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //deshabilitar el boton juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
