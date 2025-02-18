// exemplo1

// let num 

do {

    console.log("\n=================");
    console.log("|    M E N U    |");
    console.log("=================");
    console.log("| [1] De 1 a 10 |");
    console.log("| [2] De 10 a 1 |");
    console.log("| [3] Sair      |");

    num = Number(prompt('Digite um numéro'))
    
switch (num) {
    case 1:
        for (let contador = 0; contador < 11; contador++) {  
             console.log(contador)
        }
        break;
    case 2:
        for (let contador = 11; contador > 0; contador--) {  
            console.log(contador)
        }
        break;
    case 3:
        console.log("Sair")
        break;
    default:
        break;
}

} while (num !== 3);

// exemplo2

 let num, sexo, idade, corDeCabelo, opcao 
 let men = 0
 let fame = 0
 let cabelo = 0
 let cabeloF = 0 

do {

   sexo = prompt("Qual é o seu sexo [M/F]?")
   idade = Number(prompt("Qual é a sua idade?"))
   corDeCabelo = Number(prompt("Qual a cor do seu cabelo?"))

   console.log
                (`[1] Preto
                [2] Castanho
                [3]Loiro
                [4] Ruivo`)

    switch (num) {
        case 1:
            console.log("Preto")    
            break;
        case 2:
            console.log("Castanho")
            break;
        case 3:
            console.log("Loiro")
            break;
        case 4:
            console.log("Ruivo")
            break;        
        default:
            break;
    }

    if (sexo === "M" && corDeCabelo == 2) {
        men = men + 1
        cabelo = cabelo + 1
    }
    if (sexo === "F" && corDeCabelo == 2) {
        fame = fame + 1
        cabeloF = cabeloF + 1
    }


    opcao = prompt("Deseja continuar [S/N]?")
    
} while (opcao == "S");

console.log(`Tem de mulheres ${fame}, mulheres com cabelos castanhos são ${cabeloF}`)
console.log(`Tem de homens ${men}, homens com cabelos castanhos são ${cabelo}`)
