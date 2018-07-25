const casas = document.querySelectorAll(".casa");
let contador = 0;

for(let casa of casas){
    casa.onclick = clicar;
}

function verificar(){
    if(comparar(casas[0], casas[1], casas[2]) ||
    comparar(casas[3], casas[4], casas[5]) ||
    comparar(casas[6], casas[7], casas[8]) ||
    comparar(casas[0], casas[3], casas[6]) ||
    comparar(casas[1], casas[4], casas[7]) ||
    comparar(casas[2], casas[5], casas[8]) ||
    comparar(casas[0], casas[4], casas[8]) ||
    comparar(casas[2], casas[4], casas[6])){
        if(contador % 2){
            document.querySelector("body").style.backgroundColor = "blue";
        }
        else{
            document.querySelector("body").style.backgroundColor = "green";
        }
        
    }
    else if(contador === 9){
        document.querySelector("body").style.backgroundColor = "purple";
    }
}

function comparar(casa1, casa2, casa3){
    if(casa1.innerHTML === casa2.innerHTML &&
       casa2.innerHTML === casa3.innerHTML &&
       casa1.innerHTML !== ""){
        return true;
    }
    return false;
}

function clicar(){
    contador++;

    if(contador % 2){
        this.innerHTML = "X";
        this.style.color = "blue";
    }
    else{
        this.innerHTML = "O";
        this.style.color = "green";
    }

    this.onclick = null;

    if(contador >= 5){
        verificar();
    }
}