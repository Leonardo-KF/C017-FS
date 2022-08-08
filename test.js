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
console.log(
  "_______________________________________________________________________________ \n"
);
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
console.log("_______________________________________ \n");
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
