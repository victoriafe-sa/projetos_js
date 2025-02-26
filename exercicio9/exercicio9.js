function calcularTaxa() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var resultado = document.getElementById("resultado");
    var cart = document.getElementById('cart').checked;
    if (nome === "" || isNaN(idade)) {
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        resultado.style.color = "red";
        return;
    }
    var taxa;
    if (idade >= 60) {
        taxa = 10;
    } else if (idade > 50) {
        taxa = 15;
    } else if (idade >= 10){
        taxa = 20;
    } else {
        taxa = 50;
    }
    let nTaxa = 0
    if (cart){
        nTaxa = taxa/2;
        resultado.innerHTML = nome + ", você pagará R$ " + nTaxa + " para entrar no clube.";
    }else{
        resultado.innerHTML = nome + ", você pagará R$ " + taxa + " para entrar no clube.";
    }
    resultado.style.color = "black";
}