
function tabuada() {

    let num = Number(document.getElementById('multiplicar').value)
    let res = document.getElementById("res")

    let multi = [
    num * 1,
    num * 2,
    num * 3,
    num * 4,
    num * 5,
    num * 6,
    num * 7,
    num * 8,
    num * 9,
    num * 10

    ]

    res.innerHTML = multi
}

