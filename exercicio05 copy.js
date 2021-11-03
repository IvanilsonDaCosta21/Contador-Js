function contar(){
  let inicio = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')
  if(inicio.value == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('Erro insira dados !')
  }else{
    
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p <= 0){
      p = 1
    }
    if(i < f){
      for(let c = i ; c <= f; c += p){
        res.innerHTML += `<br> ${c} <br>`
        res.style.backgroundColor = '#0005'
        res.style.margin = '5'
      }
    }else{
      for(let c = i; c >= f ; c -= p){
        res.innerHTML += `<br> ${c} <br>`
      }
    }
  res.innerHTML += `Fim !`
  }
}