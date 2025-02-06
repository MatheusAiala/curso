let valor_compras, imposto, valor_total

valor_compras = Number(prompt('Digite o valor total das compras'))

imposto = (valor_compras * 60) / 100

valor_total = valor_compras + imposto

console.log(`O imposto é ${imposto.toFixed(2)}`);

console.log(`O valor total das compras com imposto é ${valor_total.toFixed(2)}`);

let emprestimo, parcelas, valor_parcelas
let juros = 0.20

emprestimo = Number(prompt('Digite o valor do emprestimo'))

parcelas = Number(prompt('Digite a quantidade de parcelas'))

valor_parcelas = emprestimo / parcelas 

valor_parcelas = valor_parcelas + (valor_parcelas * juros)

console.log(`O valor de cada parcela é ${valor_parcelas.toFixed(2)}`);