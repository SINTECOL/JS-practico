//  Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + " cm");

const perimetroCuadro = ladoCuadrado*4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadro + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es: "+ areaCuadrado+ " cm^2");

console.groupEnd(); //para agrupar mensajes en la consola

console.group("Triangulo");
//  Código del triángulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("los lados del triángulo son: "+ ladoTriangulo1+ " cm, "+ ladoTriangulo2+ " cm y "+baseTriangulo+ " cm");

const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2+baseTriangulo);

console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const semiperimetro = perimetroTriangulo/2;
const alturaTriangulo = 2*math.sqrt(semiperimetro*(semiperimetro-ladoTriangulo1)*(semiperimetro-ladoTriangulo2)*(semiperimetro-baseTriangulo))/baseTriangulo;

const areaTriangulo = baseTriangulo*alturaTriangulo/2;
console.log("El área del triangulo es: "+areaTriangulo+" cm^2");

console.groupEnd();
