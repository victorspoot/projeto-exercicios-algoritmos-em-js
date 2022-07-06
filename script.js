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
