// exemplo 1

let nome 

nome = prompt("Digite o seu nome")

console.log("Bem vindo " + nome)
console.log(nome + " Entrou no servidor")

// exemplo 2 

const notificacao = "Pokemon Go diz: "

console.log(notificacao + "tem um novo pokemon na região")
console.log(notificacao + "você perdeu")

// exemplo 3

let poteCafe  = "café pilão"
let podeAcucar = "Açucar cistal"
let podeBiscoito = "Biscooito Maizena"
const mensagemNova = "Na cozinha da vovó hoje tem: "

console.log(mensagemNova + poteCafe + " _ " + podeAcucar + " _ " + podeBiscoito)

poteCafe = "Café 3 corações"

// exemplo 4

let nomePokemon = "Pikachu"
let nivelPokemon = 20
let pontosDeVidaPokemon = 45
let pokemonSexo = "M"
let selecionavel = true

// exemplo 5

let nomePessoa = "Josy"
let idade = 115
let telefone = "(48) 984467890"
let cpf = "141.701.009-64"
let endereco = "Rua Azul, numero 55, Bairro judas"
let recebePensao = true

// exemplo 6

let pokemon = ["pikachu", "Clarmander", "Bulbassaur"]
pokemon.shift()

pokemon.pop()

console.log(pokemon[1])

console.log(pokemon)

//exemplo 7

pokemon = ["pikachu", "Clarmander", "Bulbassaur"]
let timePokemon =
[["Pikachu", "M", 1]
["Charmander", "F", 3]
]

console.log(" O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + 
"e está no nível " + timePokemon[1][2])

//exemplo 8

pokemon = ["pikachu", "Clarmander", "Bulbassaur"]
 timePokemon =
[["Pikachu", "M", 1]
["Charmander", "F", 3]
]

console.log(timePokemon.length)