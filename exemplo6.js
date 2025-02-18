
// exemplo 1

let anoAtual
let anoNascimento
let idade

anoAtual = Number(prompt("Digite o ano atual?"))
anoNascimento = Number(prompt("Digite o ano em que nasceu?"))
idade = (anoAtual - anoNascimento)

if (18 < idade) {
    console.log(`Voçe já é de maior, a sua idade é: ${idade} já pode tirar a carteira de motorista.`)
}

else{
    console.log(`Voçe é de menor, a sua idade é ${idade} ainda não pode tirar a carteira `)
}

// exemplo 2

let nota1, nota2, nota3, nota4, notaFinal

nota1 = Number(prompt("Digite a sua primeira nota?"))
nota2 = Number(prompt("Digite a sua segunda nota?"))
nota3 = Number(prompt("Digite a sua terceira nota?"))
nota4 = Number(prompt("Digite a sua quarta nota?"))

notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

if (notaFinal > 7) {
    console.log(`Sua nota é ${notaFinal} parabéns vc foi aprovado`)
}

else{
    console.log(`Voçe foi reprovado sua nota é ${notaFinal}`)
}
