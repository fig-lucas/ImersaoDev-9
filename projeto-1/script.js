let cotacaoDollar = 0;
let cotacaoEuro = 0;
let valor_final = 0;

async function obterCotacoes() { //API
    try {
        const resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL");
        const dados = await resposta.json();
        
        if (dados["USDBRL"] && dados["EURBRL"]) { 
            cotacaoDollar = parseFloat(dados["USDBRL"].bid);
            cotacaoEuro = parseFloat(dados["EURBRL"].bid);

            console.log(`Cotação do Dólar: R$ ${cotacaoDollar}`);
            console.log(`Cotação do Euro: R$ ${cotacaoEuro}`);
        } else {
            console.log("Erro ao obter as cotações.");
        }
    } catch (erro) {
        console.error("Erro na requisição:", erro);
    }
}


obterCotacoes();

function conversor() {
    let valor_digitado = document.getElementById("valor_digitado").value;
    let escolha = document.getElementById("opcoes").value;
    let resultado = document.getElementById("resultado");

    if (valor_digitado === "" || valor_digitado <= 0) {
        resultado.innerHTML = "Digite um valor válido!";
        resultado.style.backgroundColor = "red"
        resultado.style.padding = "20px"
        return;
    }

    valor_digitado = parseFloat(valor_digitado);

    if (escolha === "dollar") {
        valor_final = valor_digitado / cotacaoDollar;
        resultado.innerHTML = `Valor em reais: R$ ${valor_final.toFixed(2)}`;
        resultado.style.backgroundColor = "green"
        resultado.style.padding = "20px"
    } else if (escolha === "euro") {
        valor_final = valor_digitado / cotacaoEuro;
        resultado.innerHTML = `Valor em reais: R$ ${valor_final.toFixed(2)}`;
        resultado.style.backgroundColor = "green"
        resultado.style.padding = "20px"
    }
}
