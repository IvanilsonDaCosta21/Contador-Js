function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    // var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2 
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}


 function mudarConteudo(){
    var link = window.document.querySelector('p.a_link')
    // link.style.backgroundColor = '#f'
    link.style.color = '#fff'
    link.style.padding = '10px 17px'
    link.style.borderRadius = '5px'
    link.style.borderColor = 'blue'
 }


 function retirarConteudo(){
    var link = window.document.querySelector('p.a_link')
    link.style.borderColor = '#fff'
    ink.style.borderRadius = '5px'

 }





 var operadores = window.document.getElementById('operadores')
 var soma = window.document.getElementById('soma');
 var multiplicacao = window.document.getElementById('multiplicacao')
 var subtracao = window.document.querySelector('#subtracao')
 var divisao = window.document.querySelector('#divisao')

 function operando(){
  
    switch (operadores) {
        case soma:
            res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
            res.value = n1 + n2
            break;
        case multiplicacao:
            res.innerHTML = `A Multiplicacao entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
            res.value = n1 * n2
            break;
        case subtracao:
            res.innerHTML = `A Subtracao entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
            res.value = n1 - n2
            
            break;
        case divisao:
            res.innerHTML = `A Subtracao entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
            res.value = n1 / n2
            
            break;
    
        default: 'Escolha um dos operadores'
            break;
    }



 }



