function verificar() {
    var a = document.querySelector('input#txt');
    var anoNasc = Number(a.value);

    var data = new Date(); //recebe a data atual do sistema
    var anoAtual = data.getFullYear(); //guarda o ano atual completo ex.: 2012
    var idade = anoAtual - anoNasc;

    var sexo = document.getElementsByName('genero'); //recebe o input:radio
    var genero = '';

    
    if (a.value.length == 0 || anoNasc >= anoAtual) {
        alert('[ERRO]: verifique o ano');
    } else {
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (sexo[0].checked) { 
            genero = 'homem';
            if (idade > 0 && idade <= 12) {
                //criança
                img.setAttribute('src','img/crianca-m.jpg');
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src','img/adulto-m.jpg');
            } else {
                //idoso
                img.setAttribute('src','img/idoso-m.jpg');
            }
        } else if(sexo[1].checked){
            genero = 'mulher';
            if (idade > 0 && idade <= 12) {
                //criança
                img.setAttribute('src','img/crianca-f.jpg');
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src','img/adulto-f.jpg');
            } else {
                //idoso
                img.setAttribute('src','img/idoso-f.jpg');
            }
        }
        resultado.innerHTML = `Detectamos um ${genero} com ${idade}`;
        resultado.appendChild(img);
        resultado.style.textAlign = 'center';
    }
}