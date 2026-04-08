let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");


//gato
let gatoX= 0;
let gatoY= 0;
const ANCHO_GATO= 50;
const ALTO_GATO= 50;

//comida
let comidaX= 400;
let comidaY= 400;
const ANCHO_COMIDA= 30;
const ALTO_COMIDA= 30;

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
    
    graficarGato()
    graficarComida()
}

 iniciarJuego();

function mover(direccion){
    if (direccion === "arriba") gatoY -= VELOCIDAD;     
    if (direccion === "abajo") gatoY += VELOCIDAD;     
    if (direccion === "izquierda") gatoX -= VELOCIDAD;     
    if (direccion === "derecha") gatoX += VELOCIDAD;
    graficarGato()
}

document.getElementById("btnArriba").onclick = () => mover("arriba");
document.getElementById("btnAbajo").onclick = () => mover("abajo");
document.getElementById("btnIzquierda").onclick = () => mover("izquierda");
document.getElementById("btnDerecha").onclick = () => mover("derecha");
