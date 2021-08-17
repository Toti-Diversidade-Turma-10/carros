function temCarroDaMarca(carros, marca) {
  for (let carro of carros){
    if (carro.marca === marca) {
      return true;
    }
  }
  return false;
}
  // coloque aqui o algoritmo para retornar um boolean (true ou false)
  // se existir um carro com a marca informada ou não



function carrosNaCor(carros, cor) {
 
    let quantidade = 0;

    for (let carro of carros) {
      if (carro.cor === cor) {
        quantidade++
      }
    }
    return quantidade;
}

  // coloque aqui o algoritmo para retornar a quantidade
  // de carros na cor recebida como parâmetro



function anosDisponiveis(carros) {
let array = [];

  for (let carro of carros) {
  if (!array.includes(carro.ano)){
    array.push(carro.ano)
  }   
    }
      return array;
}

  // coloque aqui o algoritmo para retornar um array de number
  // com os anos disponíveis nos carros informados
 


function tiposDisponiveis(carros) {

 let array = [];

 for (let carro of carros) {
   if (!array.includes(carro.tipo)){
    array.push(carro.tipo)
   }
 }
 return array;
}

  // coloque aqui o algoritmo para retornar um array de strings
  // com os tipos disponíveis nos carros informados



function selecionarCarrosDaMarca(carros, marca) {

let array = [];

for (let carro of carros) {
  if (carro.marca === marca) {
    array.push(carro)
  }
}
return array;
}

  // coloque aqui o algoritmo para retornar um array de object
  // com os carros da marca informado como parâmetro


module.exports = {
  anosDisponiveis,
  carrosNaCor,
  selecionarCarrosDaMarca,
  temCarroDaMarca,
  tiposDisponiveis,
};
