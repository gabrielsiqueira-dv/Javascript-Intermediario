const calcularAnoDNascimento = function(idade, mesDeNascimento, imprimir){

    const  mesAtual =2 
    
    let anoDeNascimento = 2021 - idade
    
    if(mesDeNascimento > mesAtual) anoDeNascimento-- 
    
    imprimir(anoDeNascimento)
    
    }
    
    let imprimiAnoDeNascimento = anoDeNascimento =>{
    
    console.log('Seu ano de nascimento e :  ' + anoDeNascimento)
    
    }
 calcularAnoDNascimento(33, 3, imprimiAnoDeNascimento)
function multiplicar (multiplicar){
    return function(numero){
        return numero * multiplicar
    }
}

let dobra = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)
console.log(dobra(3))
console.log(triplicar(3))
console.log(quadruplicar(4))