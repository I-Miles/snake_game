let canvas;
let ctx;
window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", KeybownEvent);
    let x = 8;
    setInterval(desenharJogo, 1000 / x);
};
//funções do teclado e suas direções
function KeybownEvent (event){
switch(event.Keycode){
    case 37:
        nextX = -1;
        nextY = 0;
        break;
        case 38:
            nextX = 0;
            nextY = -1;
            break;
            case 39:
                nextX = 1;
                nextY = 0;
                break;
                case 40:
                    nextX = 0;
                    nextY = 1;
                    break;
}
}
//variaveis da serpente
let deFaultTamanhoCauda = 3;
let tamanhoCauda = deFaultTamanhoCauda;
let caminhoCobra = [];
let cobraEixoX = cobraEixoY = 10;
//tela do jogo
let tamanhoTela = tamanhoCaminho= 20;
let nextX = nextY = 0;
//comida 
let appleX = (appleY = 15);

function desenharJogo(){
    cobraeixoX += nextX;
    cobraEixoY += nextY;
    if (cobrEeixoX < 0) {
        cobraEixoX = tamanhoTela -1;
    }
    if (cobraEixoX > tamanhoCauda - 1){
        cobraEixoX = 0;
    }
    if (cobraEixoY < 0){
        cobraEixoY = tamanhoTela -1;
    }
    if (cobraEixoX > tamanhoTela - 1){
        cobraEixoY = 0;
    }
}
//caso a cobra coma a comida
if (cobraEixoX == appleX && cobraEixoY == appleY){
    tamanhoCauda++;
    appleX = Math.floor(Math.random() * tamanhoTela);
    appleY = Math,floor(Math.random() * tamanhoTela);
}

ctx.fillStyle = "black";
ctx.fillReact(0, 0, canvas.width, canvas.height);

ctx.fillStyle ="green";
for (let i = 0; i< caminhoCobra.length; i++){
    ctx.fillReact(
        caminhoCobra[i] .x * tamanhoCaminho,
        caminhoCobra[i] .y * tamanhoCaminho,
        tamanhoCaminho,
        tamanhoCaminho
    );
    if (caminhoCobra[i] .x == cobraEixoX && caminhp
        [i] .y == cobraEixoY){
            tamanhoCauda = deFaultTamanhoCauda;
        }
}

ctx.fillStyle = "red";
ctx.fillReact(appleX * tamanhoCaminho, appleY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho);

caminhoCobra.push({
    x:cobraEixoX,
    y:cobraEixoY
});
while (caminhoCobra,length > tamanhoCauda){
    caminhoCobra.shift();}

