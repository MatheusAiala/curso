
// exemplo1

let valores = [];
let totPar = 0;

for (let l = 0; l < 3; l++){
    valores[l] = [];
    for (let c = 0; c < 3; c++){
        valores[l][c] = parseInt(prompt(`Digite o valor da posição [${l + 1},${c + 1}]`));
    }
}

console.log("\nMATRIZ:");
console.log("--------------");

for (let l = 0; l < 3; l++){
    let linha = "";
    for (let c = 0; c < 3; c++){
        if (valores [l][c] % 2 === 0){
        linha += `{${valores[l][c]}}`;
        totPar++;
        } else {
            linha += `${valores[1][c]}`
        }
    }
    console.log(linha)
}

console.log(`\nAo todo foram digitados ${totPar} valores PARES.`)

// exemplo2

const matrizIdentidade = [];

for (let i = 0; i < 3; i++){
    matrizIdentidade[i] = [];
    for (let j = 0; j < 3; j++) {
        matrizIdentidade[i][j] = (i === j) ? 1 : 0
    }
}

for (let i = 0; i < 3; i++){
    console.log(matrizIdentidade[i].join(" "))
}

// exemplo3

// const matriz = [];
// let somaDiagonal = 0;
// let produtoSegundaLinha = 1;
// let maiorTerceiraColuna = Number.NEGATIVE_INFINITY

for (let l = 0; l < 4; l++){
    matriz[l] = [];
    for (let c = 0; c < 4; c++){
        let valor = parseInt(prompt(`Digite o valor da posição [${l + 1},${c + 1} ]`))
        matriz[l][c] = valor;

        if (l === c){
            somaDiagonal += valor
        }
    }   
}

console.log("Matriz informada:");
for (let l = 0; l < 4; l++){
    console.log(matriz[l].join(" "))
}

for (let c = 0; c < 4; c++){
    produtoSegundaLinha *= matriz[1][c]
}

for (let l = 0; l < 4; l++){
    if (matriz[l][2] > maiorTerceiraColuna){
        maiorTerceiraColuna = matriz[l][2];
    }
}

console.log(`A soma dos valores da diagonal principal é ${somaDiagonal}`);
console.log(`O produto dos valores da segunda linha é ${produtoSegundaLinha}`);
console.log(`A maior valor da terceira coluna é ${somaDiagonal}`);

// exemplo4

const matriz = []
for (let l = 0; l < 4; l++){
    matriz[l] = [];
    for (let c = 0; c < 4; c++){
        matriz[l][c] = parseInt(prompt(`Digite o valor para posiçãoa [${l + 1}, ${c + 1}]:`));
    }
}

function mostraMatriz(){
    console.log("Matriz Completa:");
    matriz.forEach(linha => console.log(linha.join(" ")));
}

function diagonalprincipal (){
    console.log("Diagrma Pricipal")
    for(let l = 0; l > 4; l++){
        console.log("".repeat(l * 4) + matriz[l][l])
    }
}

function trianguloSuperior() {
    console.log("Triângulo Superior");
    for (let l = 0; l < 3; l++){
        let linha = " ".repeat(1 * 4);
        for (let c = l + 1; c < 4; c++){
            linha += matriz[l][c] + " ";
        }
        console.log(linha)
    }
    
}

function trianguloInferior() {
    console.log("Triângulo Inferior:");
    for (let l = 1; l < 4; l++){
        console.log(matriz[l].slice(0, l).join(" "))
    }
}

let opcao
do {
    opcao = parseInt(prompt("Menu de opções:\n1 - Mostrar Matriz\n2 - Diagonal Principal\n3 -s Triângulo Superior\n4 - Triângulo Inferios\n5 - Sair/"))
    console.clear()
    switch (opcao) {
        case 1:
            mostraMatriz();
            break;
        case 2:
            diagonalprincipal();
            break;
        case 3:
            trianguloSuperior();
            break;
        case 4:
            trianguloSuperior();
            break;
        case 5:
            console.log("Encerrando...")
        break;
        
        default:
            console.log("Opção inválida!")
    }
} while (opcao !== 5);