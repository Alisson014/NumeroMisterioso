function Tentativa(){
    return parseInt(prompt("Digite um número: "));
}
function GeraNumero(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}
var num = GeraNumero(0, 100);
var pai = document.getElementById("ListTents");
const acertou = document.querySelector(".Fim");
var score = 0;

function Verificar(){
    
    var tent = Tentativa();
    var situacao = document.createElement("li");

    if(tent){
        score ++;
        if (tent > num){
            situacao.innerHTML = `Muito Alto: ${tent}`;
        } else if (tent < num){
            situacao.innerHTML = `Muito Baixo: ${tent}`;
        } else{
            acertou.classList.add("show");
            document.getElementById("Numero").innerHTML = num;
            document.getElementById("score").innerHTML = `Acertou! ${score} tentativas.`;
        }
        pai.appendChild(situacao);
    }
}


function Reiniciar(){
    num = GeraNumero(0,100);
    score = 0;
    while (pai.childElementCount > 0){
        pai.removeChild(pai.children[0]);
    }

    acertou.classList.remove("show");
}