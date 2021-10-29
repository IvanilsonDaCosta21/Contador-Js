//Exercicios - Mudar a hora e o cor de fundo quando carrega a pagina

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
   
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //Bom Dia
        img.src="img/manha.png"
        window.document.body.style.backgroundColor = '#EBDBCF'
    }else if(hora >= 12 && hora < 18){
        //Boa Tarde
        img.src="img/tarde.png"
        window.document.body.style.backgroundColor = '#924e27'
    }else{
        //Boa Noite
        img.src="img/noite.png"
        window.document.body.style.backgroundColor = '#042643'
    }
    
}


