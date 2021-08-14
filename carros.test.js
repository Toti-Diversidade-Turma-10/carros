const {
  anosDisponiveis,
  carrosNaCor,
  selecionarCarrosDaMarca,
  temCarroDaMarca,
  tiposDisponiveis,
} = require("./carros");
const carros = require("./dados.json");

describe("Função temCarroDaMarca", () => {
  test("deve retornar false quando não tem carro no array", () => {
    const resultado = temCarroDaMarca([], "fiat");
    expect(resultado).toBe(false);
  });

  test("deve retornar false quando não tem carro da marca informada", () => {
    const resultado = temCarroDaMarca(carros, "ferrari");
    expect(resultado).toBe(false);
  });

  test("deve retornar true quando tem carro da marca informada", () => {
    const resultado = temCarroDaMarca(carros, "volkswagen");
    expect(resultado).toBe(true);
  });
});

describe("Função carrosNaCor", () => {
  test("deve retornar 0 quando não tem carro no array", () => {
    const resultado = carrosNaCor([], "verde");
    expect(resultado).toBe(0);
  });

  test("deve retorna 0 quando não encontrar carro na cor informada", () => {
    const resultado = carrosNaCor(carros, "roxo");
    expect(resultado).toBe(0);
  });

  test("deve retorna quantidade correta quando encontrar carro na cor informada", () => {
    const resultado = carrosNaCor(carros, "vermelho");
    expect(resultado).toBe(4);
  });
});

describe("Função anosDisponiveis", () => {
  test("deve retornar array vazio quando não tem carro no array", () => {
    const resultado = anosDisponiveis([]);
    expect(resultado).toHaveLength(0);
  });

  test("deve retorna array com todos os anos de carros", () => {
    const resultado = anosDisponiveis(carros);
    expect(resultado).toHaveLength(13);
    expect(resultado).toEqual([
      2014, 2020, 1998, 1995, 2019, 2002, 2008, 2017, 2018, 1997, 2016, 2015,
      2012,
    ]);
  });
});

describe("Função tiposDisponiveis", () => {
  test("deve retornar array vazio quando não tem carro no array", () => {
    const resultado = tiposDisponiveis([]);
    expect(resultado).toHaveLength(0);
  });

  test("deve retorna array com todos os tipos de carros existentes", () => {
    const resultado = tiposDisponiveis(carros);
    expect(resultado).toHaveLength(4);
    expect(resultado).toEqual(["hatch", "sedan", "picape", "suv"]);
  });
});

describe("Função selecionarCarrosDaMarca", () => {
  test("deve retornar array vazio quando não tem carro no array", () => {
    const resultado = selecionarCarrosDaMarca([]);
    expect(resultado).toHaveLength(0);
  });

  test("deve retorna array com todos os carros da volkswagen", () => {
    const resultado = selecionarCarrosDaMarca(carros, "volkswagen");
    expect(resultado).toHaveLength(4);
    expect(resultado).toEqual([
      {
        ano: 1995,
        cor: "rosa",
        marca: "volkswagen",
        modelo: "gol",
        tipo: "hatch",
      },
      {
        ano: 2019,
        cor: "branco",
        marca: "volkswagen",
        modelo: "virtus",
        tipo: "sedan",
      },
      {
        ano: 2020,
        cor: "verde",
        marca: "volkswagen",
        modelo: "t-cross",
        tipo: "suv",
      },
      {
        ano: 2002,
        cor: "laranja",
        marca: "volkswagen",
        modelo: "saveiro",
        tipo: "picape",
      },
    ]);
  });

  test("deve retorna array com todos os carros da honda", () => {
    const resultado = selecionarCarrosDaMarca(carros, "honda");
    expect(resultado).toHaveLength(1);
    expect(resultado).toEqual([
      {
        ano: 2012,
        cor: "amarelo",
        marca: "honda",
        modelo: "civic",
        tipo: "sedan",
      },
    ]);
  });
});
