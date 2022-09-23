function contar() {
  let i = document.getElementById('inicio');
  let valorInicial = Number(i.value);
  let anwser = document.getElementById('response');

  let f = document.getElementById('fim');
  let valorFinal = Number(f.value);
  
  let p = document.getElementById('passo');
  let valorPasso = Number(p.value);

  if(valorInicial == 0 || valorFinal == 0){
    anwser.innerText = `Impossível contar!`;
  } else {
      if(valorPasso <= 0){
        alert('Passo inválido! Considera-se Passo 1!');
        valorPasso = 1;
      }
      if(valorInicial < valorFinal){
        anwser.innerHTML = 'Contagem:<br>'; // contagem crescente
        for(let c = valorInicial; c <= valorFinal; c+= valorPasso){
          anwser.innerHTML += `${c} \u{27A1}`
        }
      } else if (valorInicial > valorFinal){ // contagem decrescente
          anwser.innerHTML = 'Contagem:<br>';
          for(let c = valorInicial; c >= valorFinal; c-= valorPasso){
            anwser.innerHTML += `${c} \u{27A1}`
          }
        } else {
          alert('Impossível contar valores iguais!');
        }
      anwser.innerHTML += '\u{2714}'
  }
}