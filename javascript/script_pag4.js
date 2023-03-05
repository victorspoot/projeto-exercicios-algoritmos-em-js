function ex031() {
    let jj = document.getElementById("jogadaJogador");
    let jogadaJogador = String(jj.value);
    let resJogador = document.getElementById("res_jogada_jogador");
    let resIa = document.getElementById("res_ia");
    let res = document.getElementById("res");

    const jogadasIa = ["pedra", "papel", "tesoura"];
    const jogadaAleatoria = jogadasIa[Math.floor(Math.random() * jogadasIa.length)];

    if (jogadaJogador !== "pedra" && jogadaJogador !== "papel" && jogadaJogador !== "tesoura") {
        res.innerHTML = `Jogada invalida! Digite (pedra, papel ou tesoura)`;
    } else if (jogadaJogador === jogadaAleatoria) {
        resJogador.innerHTML = `Sua jogada [<strong> ${jogadaJogador} </strong>] `;
        resIa.innerHTML = `Jogada IA [<strong> ${jogadaAleatoria} </strong>] `;
        res.innerHTML = `<strong>EMPATE!</strong> `;
    } else if (
      (jogadaJogador === "pedra" && jogadaAleatoria === "tesoura") ||
      (jogadaJogador === "papel" && jogadaAleatoria === "pedra") ||
      (jogadaJogador === "tesoura" && jogadaAleatoria === "papel")) {
        resJogador.innerHTML = `Sua jogada [<strong>${jogadaJogador}</strong>] `;
        resIa.innerHTML = `Jogada IA [ <strong>${jogadaAleatoria}</strong> ] `;
        res.innerHTML = `<strong>Você Ganhou!</strong> `;
    } else {
        resJogador.innerHTML = `Sua jogada [ <strong>${jogadaJogador}</strong> ] `;
        resIa.innerHTML = `Jogada IA [ <strong>${jogadaAleatoria}</strong> ] `;
        res.innerHTML = `<strong>IA Ganhou!</strong> `;
    }
}

function ex032() {
    const res = document.getElementById("res_sorteio")
    const res2 = document.getElementById("res_trinta_e_dois")
    const numeroDigitado = document.getElementById("numero").value
    const sortear = (document.getElementById("sortear").onclick = function () {
      res.innerHTML = `Numero Gerado [*${sortear}]`;
    })

    function sortearNumero() {
        const numeroSorteado = Math.floor(Math.random() * 5) + 1;
        return numeroSorteado;
    }

    if (numeroDigitado != sortearNumero()) {
        res2.innerHTML = `O numero sorteado foi ${sortearNumero()} e você digitou o número ${numeroDigitado} Errou!`
    } else {
        res2.innerHTML = `O numero sorteado foi ${sortearNumero()} e você digitou o número ${numeroDigitado} Acertou!`
    }

}







    






