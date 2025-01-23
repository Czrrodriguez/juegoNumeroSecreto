
let numeroSecreto;
let numeroIntentos = 1 ; 
let numerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;    
}   

function verificarIntento () {
    let numeroIngresado = parseInt(document.getElementById('entradaUsuario').value); //valor ingresado por el usuario
        
    if (numeroIngresado === numeroSecreto){ // el triple igual hace la comparacion entre bloques cadenas iguales
        asignarTextoElemento ('p',`Acertaste el número en ${numeroIntentos} ${numeroIntentos===1 ? 'intento' : 'intentos'}`); // operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }   else { 
            //el usuario no ha acertado
            if (numeroIngresado > numeroSecreto) {
                asignarTextoElemento ('p','El numero es menor'); //usando la funcion para llamar el mismo texto que usamos para indicar los numeros
            } else {
                asignarTextoElemento ('p','El numero es mayor');
            } 
        }
        numeroIntentos++;
        limpiarCaja();
    return;    
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#entradaUsuario').value = ''; // para limpiar la caja de numeros reiniciar el juego
    }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    //como incluir el numero en la lista y verificar la lista para que no sorte el mismo numero 
   
    if (numerosSorteados.length == numeroMaximo){ 
        asignarTextoElemento('p','Ya se asignaron todos los numeros posibles');
    } else {
        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); // recursividad al llamar a la funcion dentro de la funcion
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;  
        }
    }
    
}

function reiniciarJuego (){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true'); // para volver a habilitar el boton de nuevo juego
    
}

function condicionesIniciales () {
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1 ;


}

condicionesIniciales();
