function ex002() {
    var n = document.getElementById('txtnome')
    var nome = n.value
    var res = document.querySelector('div#res_dois')
    res.innerHTML = `Prazer em te conhecer ${nome}!`
}

function ex003() {
    var n = document.getElementById('txtnome')
    var salario = document.getElementById('sal')
    var res = document.getElementById('res_tres')
    var nome = n.value
    var sal = salario.value
    res.innerHTML = `Nome do funcionario: ${nome}</br>`
    res.innerHTML += `Salário: R$${sal} reais</br>`
    res.innerHTML += `O funcionário ${nome} tem um salário de R$${sal} reais.`
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

function ex011() {
    var res = document.getElementById('res_onze')
    var a1 = document.getElementById('a')
    var b1 = document.getElementById('b')
    var c1 = document.getElementById('c')
    var a = a1.value 
    var b = b1.value 
    var c = c1.value
    var delta = (b ** 2) - (4 * a * c)
    res.innerHTML = `O valor de DELTA é <strong>${delta}</strong>`
}

function ex012() {
    var valor = document.getElementById('valor')
    var desc = document.getElementById('desc')
    var v1 = Number(valor.value)
    var d = Number(desc.value)
    var desconto = (-v1 * d) / 100 
    var tot = (desconto + v1)
    var res = document.getElementById('res_doze')
    res.innerHTML = `O valor do produto com desconto de <strong>${d}%</strong> é de <strong>R$${tot.toFixed(2).replace('.',',')} reais</strong>.`
}

function ex013() {
    let s = document.getElementById('salario')
    let p = document.getElementById('porcentagem')
    let salario = Number(s.value)
    let porc = Number(p.value)
    let porcentagem = porc / 100
    let aumento = salario * porcentagem + salario
    let res = document.getElementById('res_treze')
    res.innerHTML = `Seu salário de <strong>R$${salario.toFixed(2).replace('.', ',')} reais</strong>, com um aumento de <strong>${porc.toFixed(2)}%</strong> será de <strong>R$${aumento.toFixed(2).replace('.',',')} reais</strong>.`

}

function ex014() { 
    var km = document.getElementById('kmp')
    var kmp = km.value 
    var dia = document.getElementById('dias')
    var dias = dia.value 
    var totalkm = kmp * 0.20
    var totaldias = dias * 90
    var total = totalkm + totaldias
    var res = document.getElementById('res_quatorze')
    res.innerHTML = `O valor total de dias de locação é de <strong>R$${totaldias.toFixed(2).replace('.', ',')} reais</strong>.<br><br>`
    res.innerHTML += `O valor total de km percorridos é de <strong>R$${totalkm.toFixed(2).replace('.', ',')} reais</strong>.<br/><br>`
    res.innerHTML += `O valor total a ser pago é de <strong>R$${total.toFixed(2).replace('.', ',')} reais</strong>.`
}

 function ex015() {
    var diastrabalhados = document.getElementById('diast')
    var dt = diastrabalhados.value 
    var dias = 200
    var salario = dt * dias
    var res = document.getElementById('res_quinze')
    res.innerHTML = `O funcionario trabalhou <strong>${dt} dias</strong>, portanto seu salario é de <strong>R$${salario.toFixed(2).replace('.', ',')} reais</strong>.`
}

function ex016() {
    var cig = document.getElementById('cig')
    var ano1 = document.getElementById('ano')
    var cigarros = cig.value 
    var anos = ano1.value
    var dia = 1440
    var ano = 365
    var minutodevida = 10
    var diasdevida = cigarros * minutodevida
    var totano = anos * ano
    var totvida = totano * diasdevida
    var totvidadia = totvida / dia
    var res = document.getElementById('res_dezesseis')
    res.innerHTML = `Fumando <strong>${cigarros} cigarros</strong> por dia durante <strong>${anos} anos</strong> você perdeu <strong>${totvidadia.toFixed(0)} dias do total da sua vida</strong> (<em>Supondo que sua expectativa de vida seja de 100 anos</em>).`
}
