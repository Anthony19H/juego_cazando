let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");


//gato
let gatoX= 0;
let gatoY= 0;
const ANCHO_GATO= 50;
const ALTO_GATO= 50;

//comida
const ANCHO_COMIDA= 30;
const ALTO_COMIDA= 30;
let comidaX= 0;
let comidaY= 0;


//velocidad
const VELOCIDAD = 15;



function graficarRectangulo(ejeX,ejeY,ancho,altura,color){
    ctx.fillStyle = color;
    ctx.fillRect(ejeX,ejeY,ancho,altura)
}

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ALTO_GATO,ANCHO_GATO,"#000000");
    
}

function graficarComida() {
    graficarRectangulo(comidaX,comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#ff0000");
};

function iniciarJuego(){
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);     
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
    comidaX= canvas.width-ANCHO_COMIDA;
    comidaY= canvas.height-ALTO_COMIDA;
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
    }  
}
   

function moverDerecha(){
    if (gatoX<500-ANCHO_GATO){ 
        gatoX+=10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
    }
}
function moverArriba(){
    if (gatoY>0){
        gatoY-=10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
    }
}

function moverAbajo(){
    if(gatoY<500-ALTO_GATO){
    gatoY+=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    }
}

document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();
