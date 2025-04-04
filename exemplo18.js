
function contar() {

let i = Number(document.getElementById("start").value)
let j = Number(document.getElementById("end").value)
let x = Number(document.getElementById("step").value)
let res = document.getElementById("res")


if (i === '' || j === '' || x === '') {
    alert('Preencher todos os campos com números validos')
return

} if(x <= 0){
    alert("Passo inválido! Considerando passo = 1")
    x + 1
}

if (i < j) {
    
    for (let k = i; k <= j; k += x) {
        res.innerHTML += ` ${k} ➡️`
    }
} else {
    
    for (let k = i; k >= j; k -= x) {
        res.innerHTML += ` ${k} ➡️`
    }
}

res.innerHTML += " 🏁"
}

