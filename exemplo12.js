
// exemplo1

times = []

for (let i = 0; i < 3; i++) {
    times.push(prompt("Digite seus times"))
}

        'Placar de partidas'

console.log(`${times[0]}[] X []${times[1]}\n`+
            `${times[0]}[] X []${times[2]}\n`+
            `${times[1]}[] X []${times[0]}\n`+
            `${times[1]}[] X []${times[2]}\n`+
            `${times[2]}[] X []${times[0]}\n`+
            `${times[2]}[] X []${times[1]}`  
)

// exemplo2

const prompt = require("prompt-sync")();

let alunos = [];
let media = [];
let totalNotas = 0;

let ques1 = prompt("Digite a resposta correta da questão 1: ").toUpperCase();
let ques2 = prompt("Digite a resposta correta da questão 2: ").toUpperCase();
let ques3 = prompt("Digite a resposta correta da questão 3: ").toUpperCase();
let ques4 = prompt("Digite a resposta correta da questão 4: ").toUpperCase();
let gab = [ques1, ques2, ques3, ques4];

for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite seu nome: ");
    let resp = prompt("Deseja responder as questões? (S/N): ").toUpperCase();
    let nota = 0;
    
    if (resp === "S") {
        console.log("Respostas do aluno");
        for (let j = 0; j < 4; j++) {
            let resposta = prompt(`Questão ${j + 1}: `).toUpperCase();
            if (resposta === gab[j]) {
                nota += 2;
            }
        }
    }
    
    alunos.push({ nome, nota });
    totalNotas += nota;
}

console.clear();
console.log("Notas Finais");
alunos.forEach(aluno => console.log(`${aluno.nome.padEnd(10)} ${aluno.nota.toFixed(1)}`));
console.log("Média da Turma:", (totalNotas / alunos.length).toFixed(1));

// exemplo3

let b = {};
for (let i = 1; i <= 10; i++) {
    b[i] = "";
}

function mostraFileira() {
    console.log("Lugares disponíveis:");
    let linha = "";
    for (let i = 1; i <= 10; i++) {
        linha += b[i] === "" ? `[ B${i.toString().padStart(2, ' ')} ]` : "[ XX ]";
    }
    console.log(linha);
}

let continuar;
do {
    console.clear();
    mostraFileira();
    let cad = parseInt(prompt("Reservar a cadeira: B"));

    if (b[cad] === "") {
        b[cad] = "X";
        console.log(`Cadeira B${cad} reservada.`);
    } else {
        console.log("ERRO: Lugar Ocupado!");
    }

    continuar = prompt("Quer reservar outro? [S/N]").toUpperCase();

} while (continuar === "S");
