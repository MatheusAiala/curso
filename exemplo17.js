function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verificar os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancaMenino.png')
            }else if (idade >= 11 && idade <= 17){
                img.setAttribute('src', 'meninoAdolecente.png')
            }else if (idade >= 18 && idade < 40) {
                img.setAttribute('src', 'jovem.png')
            } else if (idade >= 40 && idade <= 60) {
                img.setAttribute('src', 'meioVelho.png')
            } else {
                img.setAttribute('src', 'velho.png')
            }
            
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <= 10){
                img.setAttribAute('src', 'criancaMenina.png')
            } else if (idade >= 11 && idade <= 17){
                img.setAttribute('src', 'meninaAdolecente.png')
            }else if (idade >= 18 && idade < 40){
                img.setAttribute('src', 'jovemMulher.png')
            } else if (idade >= 40 && idade <= 60){
                img.setAttribute('src', 'meiaVelhaMulher.png')
            } else {
                img.setAttribute('src', 'velhaMulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}