idade = prompt("Qual é a sua idade?")

if (idade < 18){
    alert("Você não pode jogar!");
    location.reload();
}

if (idade >= 18){
    escolha = prompt("Escolha: PEDRA [ 1 ]  PAPEL [ 2 ]  TESOURA [ 3 ]")
    escolhaPC = Math.floor( Math.random() * 3 ) + 1;

    //jogador pedra, PC pedra -> empate!
    //jogador tesoura, PC tesoura -> empate!
    //jogador papel, PC papel -> empate!

    if (escolha == escolhaPC){
        alert(`Empate!!  A escolha do PC foi ${escolhaPC}`)
    }

    // jogador pedra, PC papel -> PC ganha!
    // jogador pedra, PC tesoura -> Jogador ganha!

    if(escolha == 1){
        if(escolhaPC == 2){
            alert(`O computador venceu!!  a escolha dele foi ${escolhaPC}`)
        }

        if(escolhaPC == 3){
            alert(`Você venceu!!  a escolha dele foi ${escolhaPC}`)
        }
    }

    // jogador papel, PC pedra -> jogador vence!
    // jogador papel, PC tesoura -> pc vence!

    if (escolha == 2){
        if(escolhaPC == 1){
            alert(`Você venceu!!  a escolha dele foi ${escolhaPC}`)
        }

        if (escolhaPC == 3){
            alert(`O computador venceu!!  a escolha dele foi ${escolhaPC}`)
        }
    }

    //jogador tesoura, PC pedra -> pc vence!
    //jogador tesoura, PC papel -> jogador vence!

    if (escolha == 3){
        if (escolhaPC == 1){
            alert(`O computador venceu!!  a escolha dele foi ${escolhaPC}`)
        }

        if (escolhaPC == 2){
            alert(`Você venceu!!  a escolha dele foi ${escolhaPC}`)
        }
    }

    if(escolha <= 0 || escolha > 3){
        alert("Digite um valor válido!")
        location.reload();
    }
}