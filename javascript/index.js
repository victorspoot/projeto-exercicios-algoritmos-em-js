var res = document.getElementById('ola-mundo')
var ola = String('Olá Mundo!')
res.innerHTML = `${ola}`

function ex002() {
    var n = document.getElementById('txtnome')
    var nome = n.value
    var res = document.querySelector('div#res_dois')
    res.innerHTML = `Prazer em te conhecer ${nome}!`
}

function ex003() {
    let res = document.getElementById('res_tres')
    let nome = document.getElementById('nome')
    let salario = document.getElementById('salario')
    let n = nome.value 
    let sal = Number(salario.value)
    res.innerHTML = `Nome do funcionário: <strong>${n}</strong>.<br>`
    res.innerHTML += `Salário do funcionario: <strong>R$${sal.toFixed(2).replace('.', ',')} reais</strong>.`
}

function ex004() {
    var vn1 = document.getElementById('txtn1')
    var vn2 = document.getElementById('txtn2')
    var res = document.querySelector('div#res_quatro')
    var n1 = Number(vn1.value)
    var n2 = Number(vn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <strong>${s}</strong>`
}

function ex005() {
    var res = document.querySelector('div#res_cinco')
    var nv1 = document.getElementById('v1')
    var nv2 = document.getElementById('v2')
    var n1 = Number(nv1.value)
    var n2 = Number(nv2.value)
    var cal = (n1 + n2) / 2
    res.innerHTML = `Primeira Nota: <strong>${n1}</strong></br>`
    res.innerHTML += `Segunda Nota: <strong>${n2}</strong></br>`
    res.innerHTML += `A média das notas é igual a <strong>${cal.toFixed(1)}</strong>`

}

function ex006() {
    var n1 = document.getElementById('nume')
    var n = Number(n1.value) 
    var antecessor = n - 1
    var sucessor = n + 1
    var res = document.getElementById('res_seis')
    res.innerHTML = `O Antecessor de <strong>${n}</strong> é <strong>${antecessor}</strong> e o Sucessor de <strong>${n}</strong> é <strong>${sucessor}</strong>`
}

function ex007() {
    var valor = document.getElementById('valor')
    var res = document.getElementById('res_sete')
    var v = valor.value 
    var dobro = v * 2
    var terca = v / 3
    res.innerHTML = `O <strong>DOBRO</strong> de <strong>${v}</strong> é <strong>${dobro}</strong></br>` 
    res.innerHTML += `A TERÇA PARTE de (${v}) é (${terca.toFixed(1)})`
}

function ex008() {
    var m = document.getElementById('dist')
    var res = document.getElementById('res_oito')
    var metros = m.value 
    var km = metros / 1000
    var hm = metros / 100
    var dam = metros / 10
    var dm = metros * 10
    var cm = metros * 100
    var mm = metros * 1000
    res.innerHTML = `A distância de ${metros}m corresponde a:<br>`
    res.innerHTML += `${km}<strong>km</strong><br>`
    res.innerHTML += `${dm.toFixed(1)}<strong>dm</strong><br>`
    res.innerHTML += `${hm}<strong>Hm</strong><br><br>`
    res.innerHTML += `${cm.toFixed(1)}<strong>cm</strong><br>`
    res.innerHTML += `${dam}<strong>Dam</strong><br>` 
    res.innerHTML += `${mm.toFixed(1)}<strong>mm</strong>`
}

function ex009() {
    var dinheiro = document.getElementById('din')
    var real = dinheiro.value 
    var dolares = 3.45
    var compra = real / dolares
    var res = document.getElementById('res_nove')
    res.innerHTML = `Com <strong>R$${real} reais</strong> você poderá comprar <strong>US$${compra.toFixed(2).replace('.', ',')} dolares</strong>`
}

function ex010() {
    var largura = document.getElementById('largura')
    var altura = document.getElementById('altura')
    var l = largura.value 
    var a = altura.value 
    var area = a * l
    var tinta = area / 4
    var res = document.getElementById('res_dez')
    res.innerHTML = `A quantidade de tinta necessária para o serviço é de <strong>${tinta} litros</strong>` 
}


