/*
  Practica de java utilizando matrices
  (anbito local se define por fuera de las estructuras y solo hacen parte una parte del programa)
  (ambito global hac pate de todo el programa)
*/

//varialbles globales ++++++++

var matriz = [

    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],

];//Simpre se pone al final
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//object.adEventsListener("chage",myScrip;

window.onload = function () {
    document.getElementById("opciones").addEventListener("change", ejecutarOpcion);
};
function ejecutarOpcion() {
    let opcion = document.getElementById("opciones").value;
    borrarMatriz();


    switch (opcion) {

        case '1':
            mostrarMatriz();
            break;

        case '2':
            mostrarDiagonalPrincipal();
            break;

        case '3':
            mostrarDiagonalInversa();
            break;

        case '4':
            mostrarSuperiorDerecha();
            break;

        case '5':
            mostrarSuperiorIzquierda();
            break;

        case '6':
            mostrarInferiorIzquierda();
            break;

        case '7':
            mostrarInferiorDerecha();
            break;

        case '8':
            generarMatriz();
            mostrarMatriz();
            //console.log(matriz);
            break;
    }
}




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function generarMatriz() { //comieza en mayuscula y la palabra es un vervo

    for (let f = 0; f < matriz.length; f++) {//let se utiliza en solo dentro del ciclo for como variable local, f es la variable y matriz.lengt es la condicion
        for (let c = 0; c < matriz.length; c++) {
            matriz[f][c] = generarAleatorio(10, 100)//  una fucion,aleatoria es

        }

    }
}
/**
 * muestra los numeros de la matriz
 */
function mostrarMatriz() { //comieza en mayuscula y la palabra es un vervo

    for (let f = 0; f < matriz.length; f++) {//let se utiliza en solo dentro del ciclo for como variable local, f es la variable y matriz.lengt es la condicion
        for (let c = 0; c < matriz.length; c++) {
            let ident = "i-f" + f + "c" + c;
            //generarMatriz();
            console.log(ident);
            document.getElementById(ident).innerText = matriz[f][c];
        }

    }
}


/**
 * genero un numero entero aleatori
 * generar max, min
 * @param {*} params 
 * @param {*} params 
 */

function generarAleatorio(min, max) {
    let numero = Math.round(Math.random() * (max - min)) + min;
    return numero;//round es un metodo se identifica pot que tiene un parentecis, 

}

//generarMatriz();
//console.log(matriz);//nos manda a escribir por consola
function mostrarDiagonalPrincipal() {
    for (let f = 0; f < matriz.length; f++) {
        //ensamblar el ID 'd-f'+f+'c'+f
        let ident = 'd-f' + f + 'c' + f;
        //mostrar en la caja correspindiente
        document.getElementById(ident).innerText = matriz[f][f];
    }
}


function mostrarMatriz() { //comieza en mayuscula y la palabra es un vervo

    for (let f = 0; f < matriz.length; f++) {//let se utiliza en solo dentro del ciclo for como variable local, f es la variable y matriz.lengt es la condicion
        for (let c = 0; c < matriz.length; c++) {
            let ident = "i-f" + f + "c" + c;
            //generarMatriz();
            console.log(ident);
            document.getElementById(ident).innerText = matriz[f][c];
        }

    }
}


function mostrarDiagonalInversa() {
    for (let f = 0; f < matriz.length; f++) {
        let c = matriz.length - 1 - f;// 
        //ensamblar el ID 'd-f'+f+'c'+f

        let ident = 'd-f' + f + 'c' + c;//se toma la posicion de cada
        //mostrar en la caja correspindiente
        document.getElementById(ident).innerText = matriz[f][c];
    }
}
function borrarMatriz() { //comieza en mayuscula y la palabra es un vervo

    for (let f = 0; f < matriz.length; f++) {//let se utiliza en solo dentro del ciclo for como variable local, f es la variable y matriz.lengt es la condicion
        for (let c = 0; c < matriz.length; c++) {
            let ident = "d-f" + f + "c" + c;
            //generarMatriz();
            console.log(ident);
            document.getElementById(ident).innerText = "";
        }

    }
}
function mostrarSuperiorIzquierda() { //comieza en mayuscula y la palabra es un vervo

    for (let f = 0; f < matriz.length; f++) {//let se utiliza en solo dentro del ciclo for como variable local, f es la variable y matriz.lengt es la condicion
        for (let c = 0; c < matriz.length - f; c++) {

            let ident = 'd-f' + f + 'c' + c;

            document.getElementById(ident).innerText = matriz[f][c];
        }

    }
}

function mostrarSuperiorDerecha() { //comieza en mayuscula y la palabra es un vervo

    for (let f = 0; f < matriz.length; f++) {//let se utiliza en solo dentro del ciclo for como variable local, f es la variable y matriz.lengt es la condicion
        for (let c = f; c < matriz.length; c++) {

            let ident = 'd-f' + f + 'c' + c;

            document.getElementById(ident).innerText = matriz[f][c];
        }

    }
}


function mostrarInferiorIzquierda() { //comieza en mayuscula y la palabra es un vervo

    for (let f = 0; f < matriz.length; f++) {//let se utiliza en solo dentro del ciclo for como variable local, f es la variable y matriz.lengt es la condicion
        for (let c = 0; c <= f; c++) {

            let ident = 'd-f' + f + 'c' + c;

            document.getElementById(ident).innerText = matriz[f][c];
        }

    }
}

function mostrarInferiorDerecha() { //comieza en mayuscula y la palabra es un vervo

    for (let f = 0; f < matriz.length; f++) {//let se utiliza en solo dentro del ciclo for como variable local, f es la variable y matriz.lengt es la condicion
        for (let c = 4-f; c< matriz.length; c++) {

            let ident = 'd-f' + f + 'c' + c;

            document.getElementById(ident).innerText = matriz[f][c];
        }

    }
}