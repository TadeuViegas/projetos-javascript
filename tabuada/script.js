function gerarTabuada() {
  let i = document.getElementById("txt");
  let numero = Number(i.value);

  if (numero === 0) {
    alert("Favor, digite um número inteiro");
  } else {
    let resposta = document.getElementById("res");
    resposta.innerHTML = '';
    for(let c = 1; c <= 10; c++){
      let item = document.createElement("option");
      item.text = `${numero} x ${c} = ${numero*c}`;
      resposta.appendChild(item);
    }
  }
}