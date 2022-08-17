function pulaLinha() {
  console.log(
    "_______________________________________________________________________________ \n"
  );
}

let text = "apenas uma frase para testar";
let text2 = "Apenas uma segunda frase para testarmos";
let text3 = "testar";
function validateText(frase, tamanhoMinimo) {
  if (frase.length > tamanhoMinimo) {
    console.log("Essa frase é valida");
  } else {
    console.log("Essa frase não é valida");
  }
}

validateText(text, 10);
validateText(text2, 15);
validateText(text3, 10);

/////////////////////////////////////////////////////////////////
pulaLinha();
class Validate {
  constructor(text, tamanhoMinimo) {
    this.Text = text;
    this.Tamanho = tamanhoMinimo;
  }

  validateText() {
    if (this.Text.length > this.Tamanho) {
      console.log("Essa frase é valida");
    } else {
      console.log("Essa frase não é valida");
    }
  }

  getText() {
    return this.Text;
  }
}

const textoValidado = new Validate(
  "Um texto para testarmos a nossa classe",
  20
);
const textoValidado2 = new Validate("test", 10);

console.log("Texto 1:");
textoValidado.validateText();
console.log(textoValidado.getText());
pulaLinha();
console.log("Texto 2:");
textoValidado2.validateText();
console.log(textoValidado2.getText());

class ValidateTextType extends Validate {
  constructor(text) {
    super(text, 10);
  }

  validateType() {
    if (!isNaN(this.Text)) {
      console.log("Tipo incorreto");
    }
  }
}

const validText = new ValidateTextType("Um texto para validar");
const invalidText = new ValidateTextType(1);

validText.validateText();
invalidText.validateType();

////////////////////////////////////////////////////////
// functional programming

const req = (callback) => callback("any_data");
const getData = (callback) => req((json) => callback(json));

const result = getData(console.log);

pulaLinha();

// const { Schema } = require("mongoose");

const pessoa = {
  acordar: false,
  idade: 0,
  fome: 0,
  sono: 0,
  necessidades: 0,
};

let { acordado, idade } = pessoa;

acordado = true;
idade = 21;

console.log(acordado, idade);

pulaLinha();

class Animal {
  nome;
  static especie;
  static patas;
  static velocidade;
  static rabo;

  constructor(propriedades) {
    this.nome = propriedades.nome;
    this.especie = propriedades.especie;
    this.patas = propriedades.patas;
    this.rabo = propriedades.rabo;
    this.velocidade = propriedades.velocidade;
  }

  getAnimal() {
    const animal = this;
    return animal;
  }

  validate() {
    console.log("valido");
  }
}

const { nome, validate } = new Animal({
  nome: "Mufasa",
  especie: "Felino",
  patas: "4",
  rabo: true,
  velocidade: "Rápido",
});

validate();
console.log(nome);

// 0.5 pro Renato tenório questão aula promise
let animal;
