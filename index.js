var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")



function RolarPraDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top: 55px"
    setaDireita.style = "display:none"

}

function RolarPraEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaEsquerda.style = "display:none; margin-top: 55px"
    setaDireita.style = "display:flex"
}