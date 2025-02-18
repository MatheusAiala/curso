
// exemplo 1
 
function nascimento() {
    
  let ano_atual = Number(prompt("Digite o ano atual"))
  let ano_de_nascimento = Number(prompt("Digite o seu ano de nascimento"))

    idade = ano_atual - ano_de_nascimento
    return idade

}


let idade = nascimento();
console.log(`Sua idade é ${idade}`)

// exemplo 2

function dinheiro() {
    
   let reais = Number(prompt('Digite quantos reias você possui?'))

   let dolar = reais / 6
    return dolar

}

let dolar = dinheiro()

console.log(`Você tem isso aqui em dolar ${dolar.toFixed(2)}`)

// exemplo 3

let f
function calcularTemp(f) {

    let c = (f - 32) / 1.8
    return c

}

f = Number(prompt('Digite a temperatura em fahrenheit'))    

let c = calcularTemp(f)

console.log(`A temperatura em celsius é ${c.toFixed(2)}`)

// exemplo 4

let juros = 0.20

function calcularAsCompras(valor_compras, emprestimo, parcelas)  {

   let imposto = (valor_compras * 60) / 100

   let valor_total = valor_compras + imposto

    let valor_parcelas = emprestimo / parcelas 

    valor_parcelas = valor_parcelas + (valor_parcelas * juros)

   return {valor_total, valor_parcelas, imposto}

}

let valor_compras = Number(prompt('Digite o valor total das compras'))

let emprestimo = Number(prompt('Digite o valor do emprestimo'))

let parcelas = Number(prompt('Digite a quantidade de parcelas'))

let resultado = calcularAsCompras(valor_compras, emprestimo, parcelas)

console.log(`O imposto é ${resultado.imposto.toFixed(2)}`);

console.log(`O valor total das compras com imposto é ${resultado.valor_total.toFixed(2)}`);

console.log(`O valor de cada parcela é ${resultado.valor_parcelas.toFixed(2)}`);

// exemplo 5 

let anoAtual
let anoNascimento
let idades

function maioridade(idades) {
   
    if (18 < idade) {
    console.log(`Voçe já é de maior, a sua idade é: ${idade} já pode tirar a carteira de motorista.`)
    }

    else{
        console.log(`Voçe é de menor, a sua idade é ${idade} ainda não pode tirar a carteira `)
    }
  return idades
}

anoAtual = Number(prompt("Digite o ano atual?"))
anoNascimento = Number(prompt("Digite o ano em que nasceu?"))
idade = (anoAtual - anoNascimento)

idade = maioridade(idades)



// exemplo 6

let nota1, nota2, nota3, nota4, notaFinal, somaNota

function final(somaNota) {

   let notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

    if (notaFinal > 7) {
        console.log(`Sua nota é ${notaFinal} parabéns vc foi aprovado`)
    }

    else{
        console.log(`Voçe foi reprovado sua nota é ${notaFinal}`)
    }
    
    return somaNota

}

nota1 = Number(prompt("Digite a sua primeira nota?"))
nota2 = Number(prompt("Digite a sua segunda nota?"))
nota3 = Number(prompt("Digite a sua terceira nota?"))
nota4 = Number(prompt("Digite a sua quarta nota?"))


notaFinal = final(somaNota)
