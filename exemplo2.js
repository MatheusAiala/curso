let ano_atual, ano_de_nascimento, idade
 
ano_atual = Number(prompt("Digite o ano atual"))
ano_de_nascimento = Number(prompt("Digite o seu ano de nascimento"))

idade = ano_atual - ano_de_nascimento

console.log(`Sua idade é ${idade}`)