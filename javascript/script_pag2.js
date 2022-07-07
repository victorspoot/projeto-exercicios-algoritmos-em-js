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

function ex017() {
    var vel = document.getElementById('vel')
    var velocidade = vel.value 
    var res = document.getElementById('res_dezessete')
    var multa = (velocidade - 80) * 5
    if (velocidade > 80) {
        res.innerHTML = `Você esta acima do limite de velocidade, você foi multado no valor de <strong>R$${multa.toFixed(2).replace('.',',')} reais.</strong>`
    } else {
        res.innerHTML = `Você esta dentro da velocidade permitida, siga com segurança!`
    }
}

function ex018() {
    var res = document.getElementById('res_dezoito')
    var nasc = document.getElementById('nasc')
    var nascimento = nasc.value
    var idade = 2022 - nascimento
    if (nascimento <= 0 || nascimento < 1900 || nascimento == 2023) {
        res.innerHTML = `[ERRO] Digite a data novamente`
    } else if (idade < 16) {
        res.innerHTML = `Você tem ${idade} anos, portanto você não pode votar`
    } else if (idade >= 16 && idade < 18) {
        res.innerHTML = `Você tem ${idade} anos, portanto você pode votar mas o voto não é obrigatório`
    } else if (idade >= 18 && idade < 65) {
        res.innerHTML = `Você tem ${idade} anos, portanto o voto é obrigatório.`
    } else {
        res.innerHTML = `Você tem ${idade} anos, portanto o voto não é mais obrigatório`
    }
}

function ex019() {
    var n1 = document.getElementById('nota1')
    var n2 = document.getElementById('nota2')
    var res = document.getElementById('res_dezenove')
    var nota1 = Number(n1.value)
    var nota2 = Number(n2.value)
    var media = (nota1 + nota2)/2
    if (media < 7) {
    res.innerHTML = `A média do aluno é ${media.toFixed(1)}, o aluno não teve um bom aproveitamento (ABAIXO DA MÉDIA)`
    }  else if (media === 7) {
    res.innerHTML = `A média do aluno é ${media.toFixed(1)}, o aluno teve um bom aproveitamento (ESTÀ NA MÉDIA).`
    } else {
        res.innerHTML = `A média do aluno é ${media.toFixed(1)}, o aluno teve um bom aproveitamento (ESTÀ ACIMA DA MÉDIA).`
    }
}

function ex020() {
    var numero = document.getElementById('numero')
    var n = Number(numero.value)
    var res = document.getElementById('res_vinte')
    if (n % 2 == 1) {
        res.innerHTML = `O numero ${n} é ÍMPAR!`
    } else {
        res.innerHTML = `O numero ${n} é PAR!`
    }
}
