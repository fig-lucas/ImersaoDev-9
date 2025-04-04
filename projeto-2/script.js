function jogar(){
    let opcoes = ["Pedra", "Papel", "Tesoura"]
    let escolhaJogador = document.querySelector('input[name="escolha"]:checked');
    escolhaJogador = escolhaJogador.value;

    let escolhaPC = opcoes[Math.floor(Math.random() * opcoes.length)];

    let resultado = "";


    if (escolhaJogador === escolhaPC){
        resultado = `Empate! a escolha da máquina foi ${escolhaPC}`
    }
   
    else if ((escolhaJogador === "Pedra" && escolhaPC === "Tesoura")|| (escolhaJogador === "Papel" && escolhaPC === "Pedra") ||
    (escolhaJogador === "Tesoura" && escolhaPC === "Papel")){

        resultado = `Voce venceu!! a escolha da máquina foi ${escolhaPC}`
    }

    else{
        resultado = `Voce perdeu! a escolha da máquina foi ${escolhaPC}`
    }


        
    document.getElementById("resultado").textContent = resultado


}