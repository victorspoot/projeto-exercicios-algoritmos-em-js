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

function ex023() {
    var sex = document.getElementsByName('radsex')
    var n = document.getElementById('nome')
    var res = document.getElementById('res_vinte_tres')
    var v = document.getElementById('valor')
    var nome = n.value
    var valor = Number(v.value)
    var desconto5 = 5 / 100
    var desconto15 = 15 / 100
    var descontof = (- valor * desconto15) + valor
    var descontom = (- valor * desconto5) + valor
    if (sex[0].checked) {
        res.innerHTML = `Olá ${nome}, o valor do seu produto com 5% de desconto é de R$${descontom.toFixed(2).replace('.',',')} reais.`
    } else if (sex[1].checked) {
        res.innerHTML = `Olá ${nome}, o valor do seu produto com 15% de desconto é de R$${descontof.toFixed(2).replace('.',',')} reais`
    }  
}

function ex024() {
    var res = document.getElementById('res_vinte_quatro')
    var d = document.getElementById('dist')
    var dist = Number(d.value) 
    var pkm200 = 0.50 * dist
    var pkm200mais = 0.45 * dist
    if (dist <= 200) {
        res.innerHTML = `O valor da viajem sera de <strong>R$${pkm200.toFixed(2).replace('.',',')} reais</strong>.`
    } else {
        res.innerHTML = `O valor da viajem sera de <strong>R$${pkm200mais.toFixed(2).replace('.',',')} reais</strong>.`
    }
}

function ex025() {
    var r1 = document.getElementById('reta1')
    var r2 = document.getElementById('reta2')
    var r3 = document.getElementById('reta3')
    var res = document.getElementById('res_vinte_cinco')
    var reta1 = Number(r1.value)
    var reta2 = Number(r2.value)
    var reta3 = Number(r3.value)
    if (reta1 >= reta2 + reta3) {
        res.innerHTML = `[ERRO] As medidas não podem formar um triângulo!`
    } else if (reta2 >= reta1 + reta3) {
        res.innerHTML = `[ERRO] As medidas não podem formar um triângulo!`
    } else if (reta3 >= reta1 + reta2) {
        res.innerHTML = `[ERRO] As medidas não podem formar um triângulo!`
    } else {
        res.innerHTML = `<strong>As medidas formam um triângulo!</strong>`
    }
}

function ex026() {
    var p1 = document.getElementById("p1")
    var p2 = document.getElementById('p2')
    var res = document.getElementById('res_vinte_seis')
    var valor1 = Number(p1.value)
    var valor2 = Number(p2.value)
    if (valor1 == valor2) {
        res.innerHTML = `Não exite valor maior, os valores [<strong>${valor1}</strong>] e [<strong>${valor2}</strong> ] são iguais!`
    } else if (valor1 > valor2) {
        res.innerHTML = `O primeiro valor [<strong>${valor1}</strong>] é maior que o segundo valor [<strong>${valor2}</strong>].`
    } else {
        res.innerHTML = `O segundo valor [<strong>${valor2}</strong>] é maior que o primeiro valor [<strong>${valor1}</strong>].`
    }
}

function ex027() {
    let v1 = document.getElementById('v1')
    let v2 = document.getElementById('v2')
    let res = document.getElementById('res_vinte_sete')
    let n1 = Number(v1.value)
    let n2 = Number(v2.value)
    let media = (n1 + n2) / 2
    if (media <= 4.9) {
        res.innerHTML = `O aluno obteve a média ${media.toFixed(1)} REPROVADO.`
    } else if (media >= 5 && media <= 6.9) {
        res.innerHTML = `O aluno obteve a média ${media.toFixed(1)} RECUPERAÇÃO.`
    } else {
        res.innerHTML = `O aluno obteve a média ${media.toFixed(1)} APROVADO.`
    }      
}

function ex028() {
    let res = document.getElementById('res_vinte_oito')
    let l = document.getElementById('largura')
    let c = document.getElementById('comprimento')
    let largura = Number(l.value)
    let comprimento = Number(c.value)
    let area = largura * comprimento
    if (area < 100) {
        res.innerHTML = `A área do terreno é de <strong>${area}m<sup>2</sup></strong> portanto é um <strong>TERRENO POPULAR</strong>.`
    } else if (area >= 100 && area <= 500) {
        res.innerHTML = `A área do terreno é de <strong>${area}m<sup>2</sup></strong> portanto é um <strong>TERRENO MASTER</strong>.`
    } else {
        res.innerHTML = `A área do terreno é de <strong>${area}m<sup>2</sup></strong> portanto é um <strong>TERRENO VIP</strong>.`
    }    
}

function ex029() {
    let res = document.getElementById('res_vinte_nove')
    let n = document.getElementById('name')
    let s = document.getElementById('salarioex29')
    let tt = document.getElementById('tt')
    let nome = n.value
    let salario = Number(s.value)
    let tempotrabalho = Number(tt.value)
    if (tempotrabalho <= 3) {
        salario = salario * 0.03 + salario
        res.innerHTML = `Olá <strong>${nome}</strong>, seu salário com reajuste de <strong>3%</strong> é de <strong>R$${salario.toFixed(2).replace('.', ',')} reais</strong>`
    } else if (tempotrabalho > 3 && tempotrabalho <= 10) {
        salario = salario * 0.125 + salario
        res.innerHTML = `Olá <strong>${nome}</strong>, seu salário com reajuste de <strong>12.5%</strong> é de <strong>R$${salario.toFixed(2).replace('.', ',')}</strong> reais.`
    } else {
        salario = salario * 0.200 + salario
        res.innerHTML = `Olá <strong>${nome}</strong>, seu salário com reajuste de <strong>20%</strong> é de <strong>R$${salario.toFixed(2).replace('.', ',')}</strong> reais.`
    }
}

function ex030() {
    let res = document.getElementById('res_trinta')
    var l1 = document.getElementById('lado1')
    var l2 = document.getElementById('lado2')
    var l3 = document.getElementById('lado3')
    var lado1 = Number(l1.value)
    var lado2 = Number(l2.value)
    var lado3 = Number(l3.value)
    if (lado1 >= lado2 + lado3) {
        res.innerHTML = `[ERRO] As medidas não podem formar um triângulo!`
    } else if (lado2 >= lado1 + lado3) {
        res.innerHTML = `[ERRO] As medidas não podem formar um triângulo!`
    } else if (lado3 >= lado1 + lado2) {
        res.innerHTML = `[ERRO] As medidas não podem formar um triângulo!`
    } else {
        res.innerHTML = `<strong>As medidas formam um triângulo!</strong>`
    }
}
