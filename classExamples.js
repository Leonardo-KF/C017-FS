function ValidateEstojo(estojo) {
  if (!estojo.tamanho) {
    throw new Error("Não foi informado um tamanho para o estojo");
  }
  if (!estojo.marca) {
    throw new Error("Não foi informado uma marca para o estojo");
  }
  if (!estojo.estampa) {
    throw new Error("Não foi informado uma estampa para o estojo");
  }
  if (!estojo.material) {
    throw new Error("Não foi informado um material para o estojo");
  }
}

function alteraEstojo(estojo) {
  if (estojo.estaAberto) {
    estojo.estaAberto = false;
  } else {
    estojo.estaAberto = true;
  }
  return estojo;
}

function preencherEstojo(estojo) {
  if (estojo.estaAberto) {
    estojo.objetosAdicionados = true;
    return estojo;
  } else {
    let newEstojo = alteraEstojo(estojo);
    newEstojo.objetosAdicionados = true;
  }
  return estojo;
}

const EstojoDoSeninha = {
  tamanho: "Grande",
  marca: "Tilibra",
  estampa: "Seninha",
  material: "Tectel",
  estaAberto: false,
};

const EstojoDoBen10 = {
  tamanho: "Medio",
  marca: "Bic",
  estampa: "Ben 10",
  material: "Plastico",
  estaAberto: true,
};

const EstojoDaMoranguinho = {
  tamanho: "Pequeno",
  marca: "Faber Castell",
  estampa: "Moranguinho",
  material: "Tecido",
};

ValidateEstojo(EstojoDoSeninha);
ValidateEstojo(EstojoDoBen10);
ValidateEstojo(EstojoDaMoranguinho);

const estojoSeninha = alteraEstojo(EstojoDoSeninha);
const estojoBen10 = alteraEstojo(EstojoDoBen10);
const estojoMoranguinho = alteraEstojo(EstojoDaMoranguinho);

const estojoSen = preencherEstojo(EstojoDoSeninha);
const estojoBen = preencherEstojo(estojoBen10);
const estojoMoran = preencherEstojo(EstojoDaMoranguinho);

console.log(estojoSen);
console.log(estojoBen);
console.log(estojoMoran);

////////////////////////////////////////////////////////////////////////////////////

class Estojo {
  constructor(parametros) {
    this.tamanho = parametros.tamanho;
    this.marca = parametros.marca;
    this.estampa = parametros.estampa;
    this.material = parametros.material;
    this.estaAberto = false;
    this.objetosAdicionados = false;
  }

  ValidateEstojo() {
    if (!this.tamanho) {
      throw new Error("Não foi informado um tamanho para o estojo");
    }
    if (!this.marca) {
      throw new Error("Não foi informado uma marca para o estojo");
    }
    if (!this.estampa) {
      throw new Error("Não foi informado uma estampa para o estojo");
    }
    if (!this.material) {
      throw new Error("Não foi informado um material para o estojo");
    }
  }

  alteraEstojo() {
    if (this.estaAberto) {
      this.estaAberto = false;
    } else {
      this.estaAberto = true;
    }
  }

  preencherEstojo() {
    if (!this.estaAberto) {
      this.alteraEstojo();
      this.objetosAdicionados = true;
      this.alteraEstojo();
    } else {
      this.objetosAdicionados = true;
      this.alteraEstojo();
    }
  }

  getEstojo() {
    return {
      tamanho: this.tamanho,
      marca: this.marca,
      estampa: this.estampa,
      material: this.material,
      estaAberto: this.estaAberto,
      objetosAdicionados: this.objetosAdicionados,
    };
  }
}

const estojoDoNaruto = new Estojo({
  tamanho: "Grande",
  marca: "castel",
  estampa: "Naruto",
  material: "pano",
});

const estojoDoSuperMan = new Estojo({
  tamanho: "Medio",
  marca: "leo&leo",
  estampa: "Super Man",
  material: "Plastico",
});

const estojoDoHomemAranha = new Estojo({
  tamanho: "Grande",
  marca: "bambu",
  estampa: "Homem aranha",
  material: "Couro",
});

console.log(" \n Class Métodos \n");

estojoDoNaruto.ValidateEstojo();
estojoDoSuperMan.ValidateEstojo();
estojoDoHomemAranha.ValidateEstojo();

estojoDoNaruto.alteraEstojo();
estojoDoHomemAranha.alteraEstojo();

estojoDoNaruto.preencherEstojo();
estojoDoSuperMan.preencherEstojo();
estojoDoHomemAranha.preencherEstojo();

console.log(estojoDoNaruto.getEstojo());
console.log(estojoDoSuperMan.getEstojo());
console.log(estojoDoHomemAranha.getEstojo());
