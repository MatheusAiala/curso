
// exemplo1

let fim, começo


começo = Number(prompt("Digite o numero"))
fim = Number(prompt("Digite o menor numero"))

if (começo < fim) {
    while (começo <= fim) {
        console.log(começo)
        começo++;
    }   
    
} else {
        while (começo > fim) {
            console.log(começo)
            começo--;
        }
}

// exemplo2

let contador
let aluno, nota 
let maior = 0 
let alunoMaiorNota = ""; 

contador = 1

while (contador <= 5) {
    aluno = prompt("Digte seu nome")
    nota = Number(prompt("Digite a sua nota"))

   if (nota > maior) {
      maior = nota
      alunoMaiorNota = aluno;
   }
   contador = contador + 1
}

console.log(`A maior nota é ${maior}, e pertence ao aluno ${alunoMaiorNota}`);