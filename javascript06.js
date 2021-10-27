var div = document.getElementById('area');

function mudarFundo(){
    div.style.backgroundColor = 'red'
    div.innerHTML = 'Clicou'
   }
function entrar(){
    div.innerHTML = 'Entrou'
}
function sair(){
    div.innerHTML = 'Saiu'
}
div.addEventListener('click',mudarFundo)
div.addEventListener('onmouseover',entrar)






