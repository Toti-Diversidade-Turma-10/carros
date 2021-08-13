module.exports.temCarroDaMarca = function temCarroDaMarca(carros, marca) {
  // coloque aqui o algoritmo para retornar um boolean (true ou false)
  // se existir um carro com a marca informada ou não

  if (carros.lenght == 0) {
    return false;
  }

  if (carros.marca == "fiat") {
    return false;
  }
  return null;
  // terceiro caso 
  if (carros.marca == "volkswagen") {
    return true;
  }
  return null;
}