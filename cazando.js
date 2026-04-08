let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");


//gato
let gatoX= canvas.width / 2;
let gatoY= canvas.height / 2;
const ANCHO_GATO= 50;
const ALTO_GATO= 50;


function graficar(ejeX,ejeY,ancho,altura,color){
    ctx.fillStyle = color;
    ctx.fillRect(ejeX,ejeY,ancho,altura)
}

function graficarGato(){
    graficar(gatoX,gatoY,ALTO_GATO,ANCHO_GATO,"#000000");
}

graficarGato()