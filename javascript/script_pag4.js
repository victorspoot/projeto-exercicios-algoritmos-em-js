function ex031() {
  let jj = document.getElementById("jogadaJogador")
  let jogadaJogador = String(jj.value)
  let resJogador = document.getElementById("res_jogada_jogador")
  let resIa = document.getElementById("res_ia")
  let res = document.getElementById("res")

  const jogadasIa = ["pedra", "papel", "tesoura"]
  const jogadaAleatoria =
    jogadasIa[Math.floor(Math.random() * jogadasIa.length)]

  if (
    jogadaJogador !== "pedra" &&
    jogadaJogador !== "papel" &&
    jogadaJogador !== "tesoura"
  ) {
    res.innerHTML = `Jogada invalida! Digite (pedra, papel ou tesoura)`
  } else if (jogadaJogador === jogadaAleatoria) {
    resJogador.innerHTML = `Sua jogada [<strong> ${jogadaJogador} </strong>] `
    resIa.innerHTML = `Jogada IA [<strong> ${jogadaAleatoria} </strong>] `
    res.innerHTML = `<strong>EMPATE!</strong> `
  } else if (
    (jogadaJogador === "pedra" && jogadaAleatoria === "tesoura") ||
    (jogadaJogador === "papel" && jogadaAleatoria === "pedra") ||
    (jogadaJogador === "tesoura" && jogadaAleatoria === "papel")
  ) {
    resJogador.innerHTML = `Sua jogada [<strong>${jogadaJogador}</strong>] `
    resIa.innerHTML = `Jogada IA [ <strong>${jogadaAleatoria}</strong> ] `
    res.innerHTML = `<strong>Você Ganhou!</strong> `
  } else {
    resJogador.innerHTML = `Sua jogada [ <strong>${jogadaJogador}</strong> ] `
    resIa.innerHTML = `Jogada IA [ <strong>${jogadaAleatoria}</strong> ] `
    res.innerHTML = `<strong>IA Ganhou!</strong> `
  }
}

function ex032() {
  const res = document.getElementById('res_sorteio');
  const sortearNum = document.getElementById('sortear');
  if (sortearNum) {
    res.innerHTML = `Número sorteado [*]`;
  } else {
    res.innerHTML = `[ERRO] Sorteie um número!`;
  }

  const adivinhar = document.getElementById('adivinhar');
  adivinhar.addEventListener("click", function sorteio() {
    let resAdivinhar = document.getElementById("res_trinta_e_dois")
    const numeroDigitado = document.getElementById("numDigitado")
    let numDigitado = Number(numeroDigitado.value)

    const numSorteio = Math.floor(Math.random() * 5) + 1

    if (numDigitado === 0 || numDigitado < 0) {
        resAdivinhar.innerHTML = `[ERRO] Digite um número de 1 à 5!`
    } else if (numDigitado !== numSorteio) {
        resAdivinhar.innerHTML = `Número sorteado [<strong>${numSorteio}</strong>] Número digitado [<strong>${numDigitado}</strong>] Você errou!` 
    } else {
        resAdivinhar.innerHTML = `Número sorteado [<strong>${numSorteio}</strong>] Número digitado [<strong>${numDigitado}</strong>] Você acertou!`
    }
  })
}

function ex033() {
  const res = document.getElementById("res_trinta_e_tres")
  const valorCasaElement = document.getElementById("valorCasa")
  const salarioElement = document.getElementById("salario")
  const anosPagandoElement = document.getElementById("anosPagando")
  const valorCasa = Number(valorCasaElement.value)
  let salario = Number(salarioElement.value)
  let anosPagando = Number(anosPagandoElement.value)
  let prestacaoMensal = valorCasa / (anosPagando * 12)

  if (!valorCasa || !salario || !anosPagando) {
    res.innerHTML = `[ERRO] Digite um número válido!`
  } else if (-valorCasa || -salario || -anosPagando) {
    res.innerHTML = `[ERRO] Digite um valor valido!`
  } else if (prestacaoMensal > salario * 0.3) {
    let porcentagemSalario = salario * 0.3
    res.innerHTML = `Empréstimo negado, baseado no valor da casa de R$${valorCasa.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} reais e na quantidade anos a ser pago que é de ${anosPagando} anos, o valor da prestação mensal ficará em R$${prestacaoMensal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} reais e portanto é maior que 30% do seu salário de R$${salario.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} reais. Lembrando que 30% do seu salário é R$${porcentagemSalario.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} reais.`
  } else {
    res.innerHTML = `Emprestimo Liberado a prestação mensal baseada no seu salário de R$${salario.toLocaleString("pt-BR", { minimumFractionDigits: 2 }
    )} reais será de R$${prestacaoMensal.toLocaleString("pt-BR", { minimumFractionDigits: 2, })} reais.`
  }
}
