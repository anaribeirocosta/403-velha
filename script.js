const casas = document.querySelectorAll(".casa");
let contador = 0;

for(let casa of casas){
    casa.onclick = clicar;
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
}