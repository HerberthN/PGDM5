//promise

// const f = (n) => {
//     return new Promise ((resove, reject) => {
//         resolve ((n*(n+1))/2)
//     })
// }

// const calculoRapidinho = (n) => {
//     return Promise.resolve((n*(n+1))/2)
// }
// calculoRapidinho(10).then((res) => console.log (res))

// const calculoDemorado = (n) => {
//     let p = new Promise ((resolve, reject) => {
//         if (n < 0)
//             reject ('não use numeros negativos')
//         let res = 0
//         for (let i = 1; i <= n; i++)
//             res += 1
//         resolve(res)
//     })
//     return p
// }
// calculoDemorado(10)
// .then((res) => {console.log (res)})
// .catch((erro) => {console.log ("Erro: " + erro)})

// function devolveUm (){
//     let p = new Promise((resolve, reject) =>{
//         resolve(1)
//     })
//     return p
// }
// const resultado = devolveUm()
// resultado.then((res) => console.log(res))
// function devolveUm (){
//     return 1
// }
// const resultado = devolveUm()
// console.log (resultado)

//callback hell
// const fs = require ('fs')
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if (erro){
//             console.log ('Erro: ' + erro)
//         }
//         else{
//             console.log ("OK: " + conteudo.toString())
//             const dobro = +conteudo.toString() * 2
//             console.log ("Valor calculado: " + dobro)
//             const finalizar = function (erro){
//                 if (erro)
//                 console.log ("Erro: " + erro)
//                 else
//                 console.log ("Ok, escreveu")
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     }
//     //segundo parametro funcao callback
//     fs.readFile('arquivo.txt', exibirConteudo);
// }
// abrirArquivo('arquivo.txt')
//IO-Bound
//CPU-Bound

//let p = {
//     nome: "Maria",
//     idade: 22,
//     endereco: {
//         logradouro
//     }
// }