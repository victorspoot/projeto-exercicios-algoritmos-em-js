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
  } else if (valorCasa < 0 || salario < 0 || anosPagando < 0) {
    res.innerHTML = `[ERRO] Digite um valor valido!`
  } else if (prestacaoMensal > salario * 0.3) {
    let porcentagemSalario = salario * 0.3
    res.innerHTML = `Empréstimo negado, baseado no valor da casa de R$${valorCasa.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} reais e na quantidade anos a ser pago que é de ${anosPagando} anos, o valor da prestação mensal ficará em R$${prestacaoMensal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} reais e portanto é maior que 30% do seu salário de R$${salario.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} reais. Lembrando que 30% do seu salário é R$${porcentagemSalario.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} reais.`
  } else {
    res.innerHTML = `Emprestimo Liberado a prestação mensal baseada no seu salário de R$${salario.toLocaleString("pt-BR", { minimumFractionDigits: 2 }
    )} reais será de R$${prestacaoMensal.toLocaleString("pt-BR", { minimumFractionDigits: 2, })} reais.`
  }
}

function ex034() {
  const pesoImc = document.getElementById("peso")
  const alturaImc = document.getElementById("altura")
  const peso = Number(pesoImc.value)
  const altura = Number(alturaImc.value)
  const imc = peso / (altura * 2)
  const res = document.getElementById("res_trinta_e_quatro")

  if (peso === 0 || peso < 0) {
    res.innerHTML = `[ERRO] Digite um peso válido!`
  } else if (altura === 0 || altura < 0) {
    res.innerHTML = `[ERRO] Digite uma altura válida!`
  } else if (imc < 18.5) {
    res.innerHTML = `IMC - ${imc.toFixed(1)} Abaixo do peso!`
  } else if (imc > 18.5 && imc <= 25) {
    res.innerHTML = `IMC - ${imc.toFixed(1)} Peso ideal!`
  } else if (imc > 25 && imc <= 30) {
    res.innerHTML = `IMC - ${imc.toFixed(1)} Sobrepeso!`
  } else if (imc > 30 && imc <= 40) {
    res.innerHTML = `IMC - ${imc.toFixed(1)} Obesidade!`
  } else {
    res.innerHTML = `IMC - ${imc.toFixed(1)} Obesidade mórbida!`
  }
}

function ex035() {
  const res = document.getElementById('res_trinta_e_cinco')
  const resCarroLuxo = document.getElementById('res-carro-luxo')
  const tipoCarro =  document.getElementsByName('tipoCarro')
  const diaAluguel = document.getElementById('diaAluguel')
  const km = document.getElementById('km')
  const diasLocacao = Number(diaAluguel.value)
  const kilometrosPercorrido =Number(km.value)
  const aluguelCarroPopular = 90
  const aluguelCarroLuxo = 150
  

  if (tipoCarro[0].checked === false && tipoCarro[1].checked === false) {
    res.innerHTML = `[ERRO] Escolha uma das opções de carro!`
  } else if (tipoCarro[0].checked  && kilometrosPercorrido <= 100) {
    const aluguelPorDia = aluguelCarroPopular * diasLocacao 
    const kmPercorrido = kilometrosPercorrido * 0.20
    const total = aluguelPorDia + kmPercorrido
    res.innerHTML = `Dias de locação carro popular: ${diasLocacao} dia Valor: R$${aluguelPorDia.toLocaleString("pt-BR", {  minimumFractionDigits: 2 })} reais.<br>`
    res.innerHTML += `Km percorrido ${kilometrosPercorrido.toFixed(2
    )}Km Valor: R$${kmPercorrido.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,})} reais.<br>`
    res.innerHTML += `Valor total R$${total.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })} reais.`
  } else if (tipoCarro[0].checked && kilometrosPercorrido > 100) {
    aluguelPorDia = aluguelCarroPopular * diasLocacao
    kmPercorrido = kilometrosPercorrido * 0.1
    total = aluguelPorDia + kmPercorrido
    res.innerHTML = `Dias de locação carro popular: ${diasLocacao} Valor: R$${aluguelPorDia.toLocaleString(
      "pt-BR",
      { minimumFractionDigits: 2 }
    )} reais.<br>`
    res.innerHTML += `Km percorrido ${kilometrosPercorrido.toFixed(
      2
    )}Km Valor: R$${kmPercorrido.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })} reais.<br>`
    res.innerHTML += `Valor total R$${total.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })} reais.`
  } else if (tipoCarro[1].checked && kilometrosPercorrido <= 200) {
      aluguelPorDia = aluguelCarroLuxo * diasLocacao
      kmPercorrido = kilometrosPercorrido * 0.3
      total = aluguelPorDia + kmPercorrido
      res.innerHTML = `Dias de locação carro de luxo: ${diasLocacao} Valor: R$${aluguelPorDia.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} reais.<br>`
      res.innerHTML += `Km percorrido ${kilometrosPercorrido.toFixed(2)}Km Valor: R$${kmPercorrido.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,})} reais.<br>`
      res.innerHTML += `Valor total R$${total.toLocaleString("pt-BR", { minimumFractionDigits: 2,})} reais.`
    } else {
      aluguelPorDia = aluguelCarroLuxo * diasLocacao
      kmPercorrido = kilometrosPercorrido * 0.25
      total = aluguelPorDia + kmPercorrido
      res.innerHTML = `Dias de locação carro de luxo: ${diasLocacao} dia Valor: R$${aluguelPorDia.toLocaleString(
        "pt-BR",
        { minimumFractionDigits: 2 }
      )} reais.<br>`
      res.innerHTML += `Km percorrido ${kilometrosPercorrido.toFixed(
        2
      )}Km Valor: R$${kmPercorrido.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })} reais.<br>`
      res.innerHTML += `Valor total R$${total.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })} reais.`
    }

}




