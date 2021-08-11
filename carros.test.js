const temCarroDaMarca = require('./carros').temCarroDaMarca;

test('deve retornar false quando não tem carro no array', ()=> {
    const resultado = temCarroDaMarca([], "fiat");
    expect(resultado).toBe(false);
})

test('deve retornar false quando não tem carro da marca informada', ()=> {
    const carros = [
        {
            marca: "chevrolet",
            modelo: "onix",
            tipo: "hatch",
            cor: "verde",
            ano: 2014,
        },
        {
            marca: "volkswagen",
            modelo: "virtus",
            tipo: "sedan",
            cor: "branco",
            ano: 2019,
        }
    ]
    const resultado = temCarroDaMarca(carros, "fiat");
    expect(resultado).toBe(false);
})

test('deve retornar true quando tem carro da marca informada', ()=> {
    const carros = [
        {
            marca: "chevrolet",
            modelo: "onix",
            tipo: "hatch",
            cor: "verde",
            ano: 2014,
        },
        {
            marca: "volkswagen",
            modelo: "virtus",
            tipo: "sedan",
            cor: "branco",
            ano: 2019,
        }
    ]
    const resultado = temCarroDaMarca(carros, "volkswagen");
    expect(resultado).toBe(true);
})