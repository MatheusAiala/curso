function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();

    // Para testar, você pode definir manualmente:
    // hora = 14;

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png';
        document.body.style.background = "#00BFFF";
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'; // Corrigido de 'scr' para 'src'
        document.body.style.background = "#FFD700";
    } else {
        img.src = 'noite.png'; // Corrigido de 'scr' para 'src'
        document.body.style.background = "#00008B";
    }
}

window.onload = carregar;
