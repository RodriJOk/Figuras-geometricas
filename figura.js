//Codigo del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm.")

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2.")

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");

const ladoTrianguloUno = 6;
const ladoTrianguloDos = 6;
const baseTraingulo = 6;

console.log("El lado Uno del triangulo mide : " + ladoTrianguloUno + "cm. ");
console.log( "El lado Dos del triangulo mide : " + ladoTrianguloDos + "cm. ");
console.log("La base del triangulo mide : " + baseTraingulo + "cm. ");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo);

const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + baseTraingulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm.")

const areaTriangulo = (baseTraingulo * alturaTriangulo) / 2;
console.log("El area del triangulo es " + areaTriangulo + " cm. ")

console.groupEnd();

//Codigo del Circulo
console.group();
console.log("Circulo");

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm. ");
const diamentroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diamentroCirculo + " cm. ");
const pi = Math.PI;
console.log(pi, "Valor de Pi");

const perimetroCirculo = diamentroCirculo * pi;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm. ");
const areaCirculo = (radioCirculo * radioCirculo)* pi;
console.log("El area del circulo es: " + areaCirculo + " cm2. ");

console.groupEnd();