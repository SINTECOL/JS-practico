const salariosCol = colombia.map(
    function(personita) {
        return personita.salary;
    }
);

const salariosColSorted =salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function esPar(numerito){
    return (numerito %2 === 0);
}

function medianaSalarios(lista){
    if (lista.length === 2){
        const mediana =calcularMediaAritmetica(lista);
        return mediana;
    } else{
        mitad = parseInt(lista.length /2);
        console.log(mitad);
        if(esPar(mitad)){
            const personitaMitad1 = lista[mitad];
            const personitaMitad2 =lista[mitad-1];
    
            const mediana =calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
            return mediana;
        } else{
            const personitaMitad =lista[mitad];
            return personitaMitad;
        }
    }    
}


const medianaGeneralCol =  medianaSalarios(salariosColSorted);

//mediana del top 10%

const spliceStrt = (salariosColSorted.length *0.9);
const spliceCount = salariosColSorted.length-spliceStrt;
console.log(spliceStrt, spliceCount);
const salariosColTop10= salariosColSorted.splice(spliceStrt,spliceCount);

const mediana10top=medianaSalarios(salariosColTop10);

console.log(
 medianaGeneralCol,
 mediana10top
);