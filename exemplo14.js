// 1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.

let a, b, c, soma

a = Number(prompt("Digite qualquer número:"));
b = Number(prompt("Digite qualquer número:"));
c = Number(prompt("Digite qualquer número:"));

soma = a + b

if (soma < c) {
    console.log(`A soma ${soma} é menor que o número do c ${c}`)
}else{
    console.log(`A ${soma} é maior que o número c ${c}`)
}

// 2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

let n = Number(prompt("Digite qualquer número:"));

if ((n % 2 == 0) && (n > 0)) {
    console.log(`O número ${n} é par e é positivo.`);
} else if (n === 0) {
    console.log(`O número é ${n}.`);
} else {
    console.log(`O número ${n} é negativo e/ou ímpar.`);
}

// =---------------------------------------------------------------------------------------------

let numero = Number(prompt("Digite um número:"));

if (numero === 0) {
    console.log("O número é 0 e ele não é positivo nem negativo, mas é considerado par.");
} else {
    // Verifica se o número é positivo ou negativo
    let positivoOuNegativo = numero > 0 ? "positivo" : "negativo";

    // Verifica se o número é par ou ímpar
    let parOuImpar = numero % 2 === 0 ? "par" : "ímpar";

    console.log(`O número ${numero} é ${parOuImpar} e ${positivoOuNegativo}.`);
}

// 3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, 
// caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e
// imprimir seu valor na tela. 

a = Number(prompt("Digite número A: "))
b = Number(prompt("Digite número B: "))

if (a === b) {
    soma = a + b
    c = soma 
    console.log(`A soma dos dois números iguais são: ${c}`)
}else{
    soma = a * b 
    c = soma
    console.log(`A multiplicação dos dois números diferentes sâo: ${c}`)
}

// ---------------------------------------------------------------------------------------------

// Solicitar ao usuário dois valores inteiros
 a = Number(prompt("Digite o valor inteiro de A:"));
 b = Number(prompt("Digite o valor inteiro de B:"));

 // Variável para armazenar o resultado

// Verificar se os valores de A e B são iguais
if (a === b) {
    c = a + b; // Soma os valores se forem iguais
    console.log(`Os valores são iguais. Soma: ${c}`);
} else {
    c = a * b; // Multiplica os valores se forem diferentes
    console.log(`Os valores são diferentes. Multiplicação: ${c}`);
}


// 4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

a = Number(prompt('Digite o número desejado: '));

b = a - 1;
c = a + 1;

console.log(`Antecessor é ${b}`)
console.log(`Número ${a}`)
console.log(`O Sucessor do número ${a} e o sucessor é ${c}`)

// 5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse 