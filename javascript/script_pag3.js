function ex021() {
    var bi = document.getElementById('bi')
    var ano = Number(bi.value)
    var bissexto = ano % 4
    var res = document.getElementById('res_vinte_um')
    if (bissexto == 0) {
        res.innerHTML = `O ano de ${ano}  é BISSEXTO!`
    } else {
        res.innerHTML = `O ano de ${ano} não é BISSEXTO!`
    }
}

function ex022() {
    var a = document.getElementById('ano')
    var ano = Number(a.value)
    let idade = 2022 - ano
    var anosfaltam = (18 - idade)
    var anospassou = idade - 18
    var res = document.getElementById('res_vinte_dois')
    if (ano === 0 || ano < 1910 || ano === 2023) {
        res.innerHTML = `[ERRO] Digite um ano de nascimento válido.`
    } else if (idade < 18) {
        res.innerHTML = `Você tem <strong>${idade} anos</strong> de idade, ainda faltam <strong>${anosfaltam} anos</strong> para o seu alistamento .`
    } else {
        res.innerHTML = `Você tem <strong>${idade} anos</strong> de idade, ja se passaram <strong>${anospassou} anos</strong> do seu alistamento.`
    }
}

function carregar() {
    var n = document.getElementById('nome')
    var nome = n.value
    var res = document.getElementById('res')
    var v = document.getElementById('valor')
    var valor = Number(v.value)
    var desconto5 = 5 / 100
    var desconto15 = 15 / 100
    var descontof = (- valor * desconto15) + valor
    var descontom = (- valor * desconto5) + valor
    var sex = document.getElementsByName('radsex')
    if (sex[0].checked) {
        res.innerHTML = `Olá ${nome}, o valor do seu produto com 5% de desconto é de R$${descontom.toFixed(2).replace('.',',')} reais.`
    } else if (sex[1].checked) {
        res.innerHTML = `Olá ${nome}, o valor do seu produto com 15% de desconto é de R$${descontof.toFixed(2).replace('.',',')} reais`
    }  
}