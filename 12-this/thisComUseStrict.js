
// 'use strict'
// console.log(this)

// this.name = 'ricardo'
// function saudar(){
//     console.log("this no contexto da funcao", this)
//     console.log('Olá, ' + this.name)
// }
// saudar()

// let usuario = {
//     nome: 'Ricardo',
//     saudar: function(){
//         console.log('this no contexto do metodo', this)
        
//         console.log('this.nome no contexto do metodo ', this.nome)
//     }
// }
// usuario.saudar()

let comida ={
    nome:'brócolis',
    temperatura:0
    
}
comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexto do objeto comida', this)
this.temperatura = temperaturaDeCozimento;
}
console.log(comida)
comida.cozinhar(100)
console.log(comida)