personagens = ["", "",""]
viloes = ["", "", ""]

forcaPersonagem = 0
forcaVilao = 0

for(let i = 0; i < 3; i++){
    escolhaPersonagem = prompt("Escolha seu personagem n" + (i+1));
    personagens[i] = escolhaPersonagem
    
    forcaPersonagem = Math.floor(Math.random() * 100);


    escolhaVilao = ["Octopus", "Coringa", "Thanos", "Darth Vader", "Doutor Destino", "Venom", "Flash Reverso", "Omniman",]
    viloes[i] = escolhaVilao[Math.floor(Math.random() * 8)]

    forcaVilao = Math.floor(Math.random() * 100);

}

if (forcaPersonagem > forcaVilao){
    alert(`Equipes: ${personagens} x ${viloes}`)
    alert(`Sua equipe venceu!! sua forca foi ${forcaPersonagem} e do seu oponente ${forcaVilao}`)
}
else if (forcaPersonagem < forcaVilao){
    alert(`Equipes: ${personagens} x ${viloes}`)
    alert(`Sua equipe perdeu!! sua forca foi ${forcaPersonagem} e do seu oponente ${forcaVilao}`)
}
else{
    alert(`Equipes: ${personagens} x ${viloes}`)
    alert(`Empate!! sua forca foi ${forcaPersonagem} e do seu oponente ${forcaVilao}`)
}
