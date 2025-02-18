// exemplo1

let tot10 = 0, imp = 0
let c, v

for ( c = 1; c < 6; c++) {;
    v = Number(prompt('Digite um valor:'))
    console.log(v)
    if ((v >=0) && (v<=10)) {
        tot10 = tot10 + 1
    }
    if ((v%2==1) || (v > 10)) {
        imp = imp + v
    }
}

console.log(`Ao todo foram ${tot10} valores entre 0 e 10`)
console.log(`Nesse intervalo, a soma de impares foi ${imp}`)

// exemplo2

let num = 0
let t1, t2, t3

t1 = 0
t2 = 1

for ( num = 3; num < 15; num++) {
    t3 = (t1 + t2)
    console.log(t3)
    t1 = t2
    t2 = t3
}

// exemplo3

let media = 0, divisi = 0 , pares = 0, n
let nulo = 0, soma = 0

for (let num = 0; num < 5; num++) {
    n = Number(prompt("Digite os numeros:"))

    soma += n;
    media = (soma / 5); 

    if (n%5===0) {
        divisi++;
    }
    if(n === 0){
        nulo++;
    }
    if (n % 2 === 0) {
        pares++
    }

}

console.log(`A soma entre os valores é ${soma}`);
console.log(`A média entre os valores é ${media.toFixed(1)}`);
console.log(`Valores divisíveis por cinco: ${divisi}`);
console.log(`Valores nulos: ${nulo}`);
console.log(`A soma dos valores pares é ${pares}`);