const temCarroDaMarca = require('./carros').temCarroDaMarca;
const carrosNaCor = require('./carros').carrosNaCor;

describe('Função temCarroDaMarca', () => {
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
})

describe('Função carrosNaCor', () => {
    test('deve retornar 0 quando não tem carro no array', ()=> {
        const resultado = carrosNaCor([], "verde")
        expect(resultado).toBe(0)
    })

    test('deve retorna 0 quando não encontrar carro na cor informada', () => {
        const carros = [
            {
                marca: "toyota",
                modelo: "corolla",
                tipo: "sedan",
                cor: "vermelho",
                ano: 2014,
              },
              {
                marca: "toyota",
                modelo: "hilux",
                tipo: "picape",
                cor: "vermelho",
                ano: 2015,
              }
        ]
        const resultado = carrosNaCor(carros, "azul")
        expect(resultado).toBe(0)
    })

    test('deve retorna quantidade correta quando encontrar carro na cor informada', () => {
        const carros = [
            {
                marca: "toyota",
                modelo: "corolla",
                tipo: "sedan",
                cor: "vermelho",
                ano: 2014,
              },
              {
                marca: "toyota",
                modelo: "hilux",
                tipo: "picape",
                cor: "vermelho",
                ano: 2015,
              }
        ]
        const resultado = carrosNaCor(carros, "vermelho")
        expect(resultado).toBe(2)
    })
})