function carregar(){
    var h = document.getElementsByTagName('span')[0];
    var i = document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();

    // var hora = ? variavel criada para teste, afim de testar as condiçoes
    var hora = 19;

    h.innerText = hora;
    
    if(hora > 0 && hora < 12){
        i.src = 'img/manha.jpg';
        document.body.style.background = 'darkblue';
    } else if (hora >= 12 && hora < 18){
        i.src = 'img/tarde.jpg'
        document.body.style.background = 'darkorange';
    } else{
        i.src = 'img/noite.jpg'
        document.body.style.background = 'grey';
    }

}