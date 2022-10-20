function calcularJuros(){
  let n = document.querySelector('input#carro');
  let nome = n.value;
  let v = document.getElementById('valor');
  let valor = v.value;
  let p = document.getElementById('percentual');
  let percentual = p.value;
  let qntP = document.getElementById('parcelas');
  let qntParcelas = qntP.value;

  //validaçoes e regras de negocios
    if(valor.length == 0 || percentual.length == 0 || qntParcelas == 0){
      //todos os campos devem ser preenchidos
      alert(`Nenhum campo pode ficar vazio ou igual a zero`);
    } else if (Number(valor) <= 20.000 ){
      //supondo que o carro mais barato é maior que 20.000 reais
      alert('O valor do carro precisa ser maior do que 20mil');
    } else if (Number(qntParcelas) < 3 || Number(qntParcelas) > 24){
      //validacao da quantidade de parcelas aceitavel no sistema
      alert('A quantidade deve ser entre 3 e 24');
    } else if (Number(percentual) < 30 || Number(percentual) > 90){
      alert('O percentual de entrada deve ser entre 30 e 90%');
    } else{
      resultado.innerHTML = `<p>_______ Dados do cliente _______</p>`;
      resultado.innerHTML += `<p>Veículo: ${nome}</p>`;
      let valorEntrada = valor * percentual/100;
      let valorParcela = (valor - valorEntrada)/qntParcelas;
      resultado.innerHTML += `<p>Valor a ser pago: R$${valor - valorEntrada}</p>`;
      resultado.innerHTML += `<p>Quantidade de parcelas: ${qntParcelas}</p>`;
      resultado.innerHTML += `<p>Conta: ${qntParcelas}x de ${valorParcela}</p>`;
    }

}