function ex011() {
    let res = document.getElementById('res_onze')
    let a1 = document.getElementById('a')
    let b1 = document.getElementById('b')
    let c1 = document.getElementById('c')
    let a = a1.value 
    let b = b1.value 
    let c = c1.value
    let delta = (b ** 2) - (4 * a * c)
    res.innerHTML = `O valor de DELTA é <strong>${delta}</strong>`
}

function ex012() {
    let valor = document.getElementById('valor')
    let desc = document.getElementById('desc')
    let v1 = Number(valor.value)
    let d = Number(desc.value)
    let desconto = (-v1 * d) / 100 
    let tot = (desconto + v1)
    let res = document.getElementById('res_doze')
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
    let km = document.getElementById('kmp')
    let kmp = km.value 
    let dia = document.getElementById('dias')
    let dias = dia.value 
    let totalkm = kmp * 0.20
    let totaldias = dias * 90
    let total = totalkm + totaldias
    let res = document.getElementById('res_quatorze')
    res.innerHTML = `O valor total de dias de locação é de <strong>R$${totaldias.toFixed(2).replace('.', ',')} reais</strong>.<br><br>`
    res.innerHTML += `O valor total de km percorridos é de <strong>R$${totalkm.toFixed(2).replace('.', ',')} reais</strong>.<br/><br>`
    res.innerHTML += `O valor total a ser pago é de <strong>R$${total.toFixed(2).replace('.', ',')} reais</strong>.`
}

 function ex015() {
    let diastrabalhados = document.getElementById('diast')
    let dt = diastrabalhados.value 
    let dias = 200
    let salario = dt * dias
    let res = document.getElementById('res_quinze')
    res.innerHTML = `O funcionario trabalhou <strong>${dt} dias</strong>, portanto seu salario é de <strong>R$${salario.toFixed(2).replace('.', ',')} reais</strong>.`
}

function ex016() {
    let cig = document.getElementById('cig')
    let ano1 = document.getElementById('ano')
    let cigarros = cig.value 
    let anos = ano1.value
    let dia = 1440
    let ano = 365
    let minutodevida = 10
    let diasdevida = cigarros * minutodevida
    let totano = anos * ano
    let totvida = totano * diasdevida
    let totvidadia = totvida / dia
    let res = document.getElementById('res_dezesseis')
    res.innerHTML = `Fumando <strong>${cigarros} cigarros</strong> por dia durante <strong>${anos} anos</strong> você perdeu <strong>${totvidadia.toFixed(0)} dias do total da sua vida</strong> (<em>Supondo que sua expectativa de vida seja de 100 anos</em>).`
}

function ex017() {
    let vel = document.getElementById('vel')
    let velocidade = vel.value 
    let res = document.getElementById('res_dezessete')
    let multa = (velocidade - 80) * 5
    if (velocidade > 80) {
        res.innerHTML = `Você esta acima do limite de velocidade, você foi multado no valor de <strong>R$${multa.toFixed(2).replace('.',',')} reais.</strong>`
    } else {
        res.innerHTML = `Você esta dentro da velocidade permitida, siga com segurança!`
    }
}

function ex018() {
    let res = document.getElementById('res_dezoito')
    const nasc = document.getElementById('nasc')
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const nascimento = nasc.value
    let idade = anoAtual - nascimento
    if (nascimento <= 0 || nascimento < 1905 || nascimento == anoAtual) {
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
    let n1 = document.getElementById('nota1')
    let n2 = document.getElementById('nota2')
    let res = document.getElementById('res_dezenove')
    let nota1 = Number(n1.value)
    let nota2 = Number(n2.value)
    let media = (nota1 + nota2)/2
    if (media < 7) {
    res.innerHTML = `A média do aluno é ${media.toFixed(1)}, o aluno não teve um bom aproveitamento (ABAIXO DA MÉDIA)`
    }  else if (media === 7) {
    res.innerHTML = `A média do aluno é ${media.toFixed(1)}, o aluno teve um bom aproveitamento (ESTÀ NA MÉDIA).`
    } else {
        res.innerHTML = `A média do aluno é ${media.toFixed(1)}, o aluno teve um bom aproveitamento (ESTÀ ACIMA DA MÉDIA).`
    }
}

function ex020() {
    let numero = document.getElementById('numero')
    let n = Number(numero.value)
    let res = document.getElementById('res_vinte')
    if (n % 2 == 1) {
        res.innerHTML = `O numero ${n} é ÍMPAR!`
    } else {
        res.innerHTML = `O numero ${n} é PAR!`
    }
}
