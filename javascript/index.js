let resOla = document.getElementById("ola-mundo")
let ola = "Olá Mundo!"
resOla.textContent = ola

function ex002() {
  const nome = document.getElementById("txtnome").value
  const res = document.querySelector("div#res_dois")
  res.textContent = `Prazer em te conhecer ${nome}!`
}

function ex003() {
  const res = document.getElementById("res_tres")
  const nome = document.getElementById("nome").value
  const salario = Number(document.getElementById("salario").value)
  const salarioFormatado = `R$${salario.toFixed(2).replace(".", ",")} reais`

  res.innerHTML = `Nome do funcionário: <strong>${nome}</strong>.<br>Salário do funcionário: <strong>${salarioFormatado}</strong>.`
}

function ex004() {
  const vn1 = Number(document.getElementById("txtn1").value)
  const vn2 = Number(document.getElementById("txtn2").value)
  const res = document.querySelector("div#res_quatro")
  const s = vn1 + vn2

  res.innerHTML = `A soma entre <strong>${vn1}</strong> e <strong>${vn2}</strong> é igual a <strong>${s}</strong>`
}

function ex005() {
  let res = document.querySelector("div#res_cinco")
  let nv1 = document.getElementById("v1")
  let nv2 = document.getElementById("v2")
  let n1 = Number(nv1.value)
  let n2 = Number(nv2.value)
  let cal = (n1 + n2) / 2
  res.innerHTML = `Primeira Nota: <strong>${n1}</strong></br>`
  res.innerHTML += `Segunda Nota: <strong>${n2}</strong></br>`
  res.innerHTML += `A média das notas é igual a <strong>${cal.toFixed(
    1
  )}</strong>`
}

function ex006() {
  let n1 = document.getElementById("nume")
  let n = Number(n1.value)
  let antecessor = n - 1
  let sucessor = n + 1
  let res = document.getElementById("res_seis")
  res.innerHTML = `O Antecessor de <strong>${n}</strong> é <strong>${antecessor}</strong> e o Sucessor de <strong>${n}</strong> é <strong>${sucessor}</strong>`
}

function ex007() {
  let valor = document.getElementById("valor")
  let res = document.getElementById("res_sete")
  let v = valor.value
  let dobro = v * 2
  let terca = v / 3
  res.innerHTML = `O <strong>DOBRO</strong> de <strong>${v}</strong> é <strong>${dobro}</strong></br>`
  res.innerHTML += `A TERÇA PARTE de (${v}) é (${terca.toFixed(1)})`
}

function ex008() {
  let m = document.getElementById("dist")
  let res = document.getElementById("res_oito")
  let metros = m.value
  let km = metros / 1000
  let hm = metros / 100
  let dam = metros / 10
  let dm = metros * 10
  let cm = metros * 100
  let mm = metros * 1000
  res.innerHTML = `A distância de ${metros}m corresponde a:<br>`
  res.innerHTML += `${km}<strong>km</strong><br>`
  res.innerHTML += `${dm.toFixed(1)}<strong>dm</strong><br>`
  res.innerHTML += `${hm}<strong>Hm</strong><br><br>`
  res.innerHTML += `${cm.toFixed(1)}<strong>cm</strong><br>`
  res.innerHTML += `${dam}<strong>Dam</strong><br>`
  res.innerHTML += `${mm.toFixed(1)}<strong>mm</strong>`
}

function ex009() {
  let dinheiro = document.getElementById("din")
  let real = dinheiro.value
  let dolares = 3.45
  let compra = real / dolares
  let res = document.getElementById("res_nove")
  res.innerHTML = `Com <strong>R$${real} reais</strong> você poderá comprar <strong>US$${compra
    .toFixed(2)
    .replace(".", ",")} dolares</strong>`
}

function ex010() {
  let largura = document.getElementById("largura")
  let altura = document.getElementById("altura")
  let l = largura.value
  let a = altura.value
  let area = a * l
  let tinta = area / 4
  let res = document.getElementById("res_dez")
  res.innerHTML = `A quantidade de tinta necessária para o serviço é de <strong>${tinta} litros</strong>`
}
