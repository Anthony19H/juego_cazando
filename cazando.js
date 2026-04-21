let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");


//gato
let gatoX= 0;
let gatoY= 0;
const ANCHO_GATO= 50;
const ALTO_GATO= 50;
const imagenGato = new Image();
imagenGato.src = "gato.png";

//comida
const ANCHO_COMIDA= 30;
const ALTO_COMIDA= 30;
let comidaX= 0;
let comidaY= 0;
const imagenComida = new Image();
imagenComida.src = "raton.png";

//velocidad
const VELOCIDAD = 15;

let puntaje=0;
let tiempo=15;
let intervalo;

function graficarRectangulo(ejeX,ejeY,ancho,altura,color){
    ctx.fillStyle = color;
    ctx.fillRect(ejeX,ejeY,ancho,altura)
}

function graficarGato() {
    // drawImage recibe: (imagen, x, y, ancho, alto)
    ctx.drawImage(imagenGato, gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

function graficarComida() {
    // Reemplazamos graficarRectangulo por drawImage
    ctx.drawImage(imagenComida, comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function iniciarJuego(){
    
    intervalo=setInterval(restarTiempo,1000);
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);     
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
    comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY=generarAleatorio(0,canvas.width-ALTO_COMIDA);
    graficarGato()
    graficarComida()
}


function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function moverIzquierda(){
    if (gatoX>0){
       gatoX-=10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }  
}
   

function moverDerecha(){
    if (gatoX<500-ANCHO_GATO){ 
        gatoX+=10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }
}
function moverArriba(){
    if (gatoY>0){
        gatoY-=10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }
}

function moverAbajo(){
    if(gatoY<500-ALTO_GATO){
    gatoY+=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
    }
}

function detectarColision(){
    if(gatoX < comidaX+ANCHO_COMIDA && gatoX + ANCHO_GATO > comidaX &&
    gatoY < comidaY + ALTO_COMIDA && gatoY + ALTO_GATO > comidaY){

        tiempo = 15;
        mostrarEnSpan("tiempo",tiempo);
        moverComida();
        puntaje=puntaje+1;
        if(puntaje == 6){
            alert("ganador");
            clearInterval(intervalo);
        }
        mostrarEnSpan("puntos",puntaje)
        limpiarCanvas();
        graficarGato();
        graficarComida();
    }

}

function moverComida(){
    comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY=generarAleatorio(0,canvas.width-ALTO_COMIDA);
}

function restarTiempo(){
    tiempo=tiempo-1
    mostrarEnSpan("tiempo",tiempo);
    if (tiempo == 0){
        clearInterval(intervalo);
        alert("Juego finalizado")
    }
}

function reiniciar(){
    puntaje=0;
    tiempo=15;
    clearInterval(intervalo);
    limpiarCanvas()
    mostrarEnSpan("puntos",puntaje);
    mostrarEnSpan("tiempo",tiempo);
    iniciarJuego();
}
document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();
