function jogar(){
    let opcoes = ["Pedra", "Papel", "Tesoura"]
    let escolhaJogador = document.querySelector('input[name="escolha"]:checked');
    escolhaJogador = escolhaJogador.value;

    let escolhaPC = opcoes[Math.floor(Math.random() * opcoes.length)];

    let resultado = document.getElementById("resultado");


    if (escolhaJogador === escolhaPC){
        resultado.innerHTML = `Empate! a escolha da máquina também foi ${escolhaPC}.`
        resultado.style.backgroundColor = "orange"
        resultado.style.borderRadius = "16px"
        resultado.style.padding = "20px"
    }
   
    else if ((escolhaJogador === "Pedra" && escolhaPC === "Tesoura")|| (escolhaJogador === "Papel" && escolhaPC === "Pedra") ||
    (escolhaJogador === "Tesoura" && escolhaPC === "Papel")){

        resultado.innerHTML = `Voce venceu!! a escolha da máquina foi ${escolhaPC}.`
        resultado.style.backgroundColor = "green"
        resultado.style.borderRadius = "16px"
        resultado.style.padding = "20px"
    }

    else{
        resultado.innerHTML = `Voce perdeu! a escolha da máquina foi ${escolhaPC}.`
        resultado.style.backgroundColor = "red"
        resultado.style.borderRadius = "16px"
        resultado.style.padding = "20px"
    }


        
    


}