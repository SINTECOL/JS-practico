

//  Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + " cm");

const perimetroCuadro = ladoCuadrado*4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadro + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es: "+ areaCuadrado+ " cm^2");

console.groupEnd(); //para agrupar mensajes en la consola



//  Código del triángulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("los lados del triángulo son: "+ ladoTriangulo1+ " cm, "+ ladoTriangulo2+ " cm y "+baseTriangulo+ " cm");

const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2+baseTriangulo);

console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const semiperimetro = perimetroTriangulo/2;
const alturaTriangulo = 2*Math.sqrt(semiperimetro*(semiperimetro-ladoTriangulo1)*(semiperimetro-ladoTriangulo2)*(semiperimetro-baseTriangulo))/baseTriangulo;
console.log(alturaTriangulo);

const areaTriangulo = baseTriangulo*alturaTriangulo/2;
console.log("El área del triangulo es: "+areaTriangulo+" cm^2");

console.groupEnd();

// Código de cálculo de un circulo

console.log("Circulo");
const radio = 6;

console.log("El radio del circulo es: "+radio +" cm");

const diametro = radio*2;
const perimetroCirculo = Math.PI*diametro + " cm";
console.log("El perímetro de un circulo es: "+perimetroCirculo +" cm");

const areaCirculo = Math.PI*Math.pow(radio,2);

console.log("El área del circulo es: "+areaCirculo + " cm^2");

console.groupEnd();