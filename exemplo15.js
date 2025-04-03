let pais = prompt("Digite o país que vc nasceu?");

if (pais != "brasil") {
    console.log("Você é estrangeiro")
}

else{
    console.log("Você é brasileiro")
}

// ------------------------------------------------------------------------------

let horaAtual = new Date()
let hora = horaAtual.getHours()
let minutos = horaAtual.getMinutes()

console.log(`Agora são ${hora}:${minutos < 10 ? '0' + minutos : minutos}`)

if (hora <= 12) {
    console.log("Bom dia")
} else if(hora <= 18){
    console.log("Boa tarde")
} else{
    console.log("Boa noite")
}

// ------------------------------------------------------------------------------

let agora = new Date()
let diaSe = agora.getDay()

console.log(diaSe)

switch (diaSe) {
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 0:
        console.log("Domingo")
        break;

    default:
        break;
}