/**
 * practica de POO usando canvas 
 * MLM
 * 20200/08/05
 */
/**CARGAR RECURSOS */
var canvas = document.getElementById("canvas");/**&canvas SE TRAE LA MEMORIA DE JAVA*/
var ctx = canvas.getContext("2d");
/**VALORES INICIALES */
var centro = {x:100,y:100};//**cuanfo se manejan llaves esta indicando que es un objeto */
var radio=50;
var vel={x:5,y:2};
animar();

/**DIBUJAR EL MUNDO */
function dibujar() {
    ctx.lineWidth= 3;
    ctx.strokeStyle = "blue"
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centro.x,centro.y,radio, 0, 2 * Math.PI);//**CERNTRO, RADIO, ANGULO  */
    ctx.stroke();
    
}
/**CALCULAR VALORES */
function calcular() {


    /**control revotes */
    
    if (centro.x >= canvas.width-radio || centro.x+vel.x<radio){/**el centro debe ser menor al radio para que el circulo revote en el ancho de canvas */

        vel.x*=-1;
    }
    if (centro.y>=canvas.height-radio || centro.y+vel.y<radio){

        vel.y*=-1;
    }
    centro.x+= vel.x;
    centro.y+= vel.y;
    

}

/**CICLO DEA ANIMACIÓN  */
function animar() {
    dibujar();
    calcular();//sincrnonizacion con la tarjeta 
    requestAnimationFrame(animar)//**vuelva a hacer el ciclo (ciclo ifinito) */
    
}
