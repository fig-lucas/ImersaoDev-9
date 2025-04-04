let rodada = 1;
let venceu = false

while (rodada<=3){
    console.log ("Rodada:" + rodada);

    escolha_jogador = parseFloat(prompt(`Nível ${rodada}, escolha um vidro (1,2 ou 3)?:  `));
    piso_quebrado = Math.floor(Math.random() * 3) + 1;

    if(escolha_jogador <= 0 || escolha_jogador > 3){
        alert("Digite um valor válido!")
        continue
    }


    if (escolha_jogador == piso_quebrado){
        alert("Piso quebrou!! Você perdeu!!")
        rodada = 1000;
        break
    } else {
        alert("Você passou!")
    }

    rodada = rodada + 1;

    if(rodada>=4){
        venceu = true
    }
}

// Depois da rodada 3, vem apra cá

if (venceu == true){
    alert("PARABÉNS VOCE GANHOU!!")
}