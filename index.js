function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");

  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "./fotos/FotoManha.jpg";
    document.body.style.background = "#f4a261";
  } else if (hora >= 12 && hora < 18) {
    img.src = "./fotos/FotoTarde.jpg";
    document.body.style.background = "#cb997e";
  } else {
    img.src = "./fotos/FotoNoite.jpg";
    document.body.style.background = "#001219";
  }
}
