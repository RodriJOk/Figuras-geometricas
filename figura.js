//Codigo del cuadrado
function perimetroCuadrado(lado){
    return lado * 4 ;  
} 

function areaCuadrado (lado){
    return lado * lado
}

perimetroCuadrado(4);
areaCuadrado(4);

//Codigo del Triangulo
function perimetroTriangulo(ladoUno, ladoDos, baseTriangulo){
    return ladoUno + ladoDos + baseTriangulo
}

function areaTriangulo (baseTriangulo, alturaTriangulo){
    const area = baseTriangulo * alturaTriangulo; 
    const message = console.log(`Esta es el area de un triangulo: ${area}`); 
    return message
}

//Codigo del Circulo
function diamentroCirculo(radio){
    return radio * 2
}

const pi = Math.PI;

function areaCirculo(radio){
    const diametro = diamentroCirculo(radio);
    return diametro * pi
}

function areaCirculo(radio){
    return (radio * radio) * pi
}
