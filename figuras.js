

//  Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + " cm");

function perimetroCuadro(ladoCuadrado){
    return ladoCuadrado*4;
}

//const perimetroCuadro = ladoCuadrado*4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadro(ladoCuadrado) + " cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado *ladoCuadrado;
}

console.log("El area del cuadrado es: "+ areaCuadrado(ladoCuadrado)+ " cm^2");

console.groupEnd(); //para agrupar mensajes en la consola



//  Código del triángulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("los lados del triángulo son: "+ ladoTriangulo1+ " cm, "+ ladoTriangulo2+ " cm y "+baseTriangulo+ " cm");

//const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2+baseTriangulo);

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return (ladoTriangulo1 + ladoTriangulo2+baseTriangulo);
}


console.log("El perímetro del triángulo es: " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) + " cm");

function areaTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
            const semiperimetro = perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)/2;
            const alturaTriangulo = 2*Math.sqrt(semiperimetro*(semiperimetro-ladoTriangulo1)*(semiperimetro-ladoTriangulo2)*(semiperimetro-baseTriangulo))/baseTriangulo;
            return baseTriangulo*alturaTriangulo/2;
}

console.log("El área del triangulo es: "+areaTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)+" cm^2");

console.groupEnd();

// Código de cálculo de un circulo

console.group("Circulo");
const radio = 6;

console.log("El radio del circulo es: "+radio +" cm");

function perimetroCirculo(radio){
    return Math.PI*radio*2;
}

//onst perimetroCirculo = Math.PI*diametro + " cm";
console.log("El perímetro de un circulo es: "+perimetroCirculo(radio) +" cm");

function areaCirculo(radio){
return Math.PI*Math.pow(radio,2);
}
console.log("El área del circulo es: "+areaCirculo(radio) + " cm^2");

console.groupEnd();

function calcularPerimetroCuadrado(){
    const lado = document.getElementById("InputCuadrado").value;
    const perimetro = perimetroCuadro(lado);
    document.getElementById("resultadoPerimetro").innerHTML=" " + perimetro+" cm";
    document.getElementById("resultadoArea").innerHTML=" 0 cm^2";
}

function calcularAreaCuadrado(){
    const lado = document.getElementById("InputCuadrado").value;
    document.getElementById("resultadoArea").innerHTML=" " + lado*lado+" cm^2";
    document.getElementById("resultadoPerimetro").innerHTML="0 cm";
}