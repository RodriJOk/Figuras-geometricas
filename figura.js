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
function perimetroTriangulo(ladoAValue, ladoBValue, baseValue){
    return( ladoAValue + ladoBValue + baseValue)  
}

function areaTriangulo (baseValue, alturaValue){
    const area = baseValue * alturaValue; 
    return area
}

//Codigo del Circulo
function diamentroCirculo(radio){
    return radio * 2
}

const pi = Math.PI;

function perimetroCirculo(radio){
    const diametro = diamentroCirculo(radio);
    return diametro * pi
}

function areaCirculo(radio){
    return (radio * radio) * pi
}

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("LadoATriangulo");
    const ladoAValue = Number(ladoA.value);
    console.log(ladoAValue);
    const ladoB = document.getElementById("LadoBTriangulo");
    const ladoBValue = Number(ladoB.value);
    console.log(ladoBValue);
    const base = document.getElementById("BaseTriangulo");
    const baseValue = Number(base.value);
    console.log(baseValue);
    const perimetro = perimetroTriangulo(ladoAValue, ladoBValue, baseValue);
    console.log(perimetro);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("AlturaTriangulo");
    const alturaValue = Number(input.value);
    const base = document.getElementById("BaseTriangulo");
    const baseValue = Number(base.value);
    console.log(baseValue);
    const area = areaTriangulo(baseValue, alturaValue);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}