const casas = document.querySelectorAll(".casa");

for(let casa of casas){
    casa.onclick = clicar;
}

function clicar(){
    this.innerHTML = "X";
    this.style.color = "blue";
}