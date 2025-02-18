
// exemplo1

let nota1, nota2, nota3, nota4, notaFinal

nota1 = Number(prompt("Digite a sua primeira nota?"))
nota2 = Number(prompt("Digite a sua segunda nota?"))
nota3 = Number(prompt("Digite a sua terceira nota?"))
nota4 = Number(prompt("Digite a sua quarta nota?"))

notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

if (notaFinal >= 9) {
    console.log(`Sua nota é ${notaFinal} parabéns vc foi aprovado`)
}

else if (notaFinal >= 7 && notaFinal <= 8 ) {
    console.log(`Sua nota é ${notaFinal} parabéns vc foi aprovado por pouco`)   
} 
else if (notaFinal >=4 && notaFinal<=6) {
    console.log(`Sua nota é ${notaFinal} vc ficou em recuperação`)   
} 

else{
    console.log(`Sua nota é ${notaFinal} vc foi reprovado`)
}

// exemplo2

let avai, figueira
let diferenca 

avai = Number(prompt("Digte quantos gols foram feitos"))
figueira = Number(prompt("Digte quantos gols foram feitos"))

diferenca = avai - figueira

switch (diferenca) {
    case 3:
        console.log(`Status: partida normal, diferença de gols é ${diferenca} `)
        break;

    case 0:
        console.log(`Status: empate, diferença de gols é ${diferenca} `)
        break;

    case 5:
        console.log(`Status: goleado, diferença de gols é ${diferenca} `)
    default:
        break;
}