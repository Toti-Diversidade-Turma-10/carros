module.exports.temCarroDaMarca = function temCarroDaMarca(carros, marca) {
  // coloque aqui o algoritmo para retornar um boolean (true ou false)
  // se existir um carro com a marca informada ou não

  if (carros.length === 0) {
    return false;
  }

  for (let carro of carros) {
    if (carro.marca === marca) {
      return true;
    }
  }

  return false;
}
  

module.exports.carrosNaCor = function carrosNaCor(carros, cor) {
  // coloque aqui o algoritmo para retornar a quantidade
  // de carros na cor recebida como parâmetro

  const retorno = 0;

    for (let carro of carros) {
      if (carros.cor === cor) {
        quantidadeDeCarroNaCorRecebido ++
      
      }
    }
  return retorno
}

module.exports.anosDisponiveis = function anosDisponiveis(carros) {
  // coloque aqui o algoritmo para retornar um array de number
  // com os anos disponíveis nos carros informados

  const retorno = [];

  for (let carro of carros) {
    if (!retorno.includes(carro.ano)) {
    retorno.push(carro.ano);
    }
  }
  return retorno;
}

module.exports.tiposDisponiveis = function tiposDisponiveis(carros) {
  // coloque aqui o algoritmo para retornar um array de strings
  // com os tipos disponíveis nos carros informados

  const retorno = [""];
    
      if (carro.length === 0) {
        return resultado;
      }
      for (carro of carros) {
        if(retorno.length(carro.tipo)){
        return.push(carro.tipo);
        }

      }
  
  return retorno;
}

module.exports.selecionarCarrosDaMarca = function selecionarCarrosDaMarca(carros, marca) {
  // coloque aqui o algoritmo para retornar um array de object
  // com os carros da marca informado como parâmetro

  const retorno = {};

   for (let carro of carros)
    if (carro.marca === marca) {
      return retorno;
    }

    else if (carro.marca === marca)) {
      return retorno
      
    }
    
    return retorno;
}