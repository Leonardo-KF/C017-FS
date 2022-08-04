const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let animes = require("./mocks/animes");

const Char = require("./entities/character.entity");
// KISS -> Keep it Simple and Stupid

app.get("/", function (req, res) {
  const char1 = new Char({
    name: "leonardo",
    lastName: "do test",
    skill: "destruição",
    age: "900",
    gender: "male",
  });
  char1.validate();
  console.log(char1.getCharacter());

  res.send(animes);
});

// app.get("/raiz/:number", function (req, res) {
//   let number = req.params.number;
//   const result = number ** 0.5;
//   if (result % 1 === 0) {
//     res.send({
//       message: "Raiz quadrada do numero " + number,
//       result: `${result}`,
//     });
//   } else {
//     res.send({
//       message: "O numero " + number + " não possui raiz exata",
//     });
//   }
// });

app.get("/anime/:id", function (req, res) {
  const animeId = req.params.id;
  let animeFinded;

  animes.map((anime) => {
    if (anime.id === animeId) {
      animeFinded = anime;
    }
  });
  if (animeFinded) {
    res.send(animeFinded);
  } else {
    res.send("Nenhum anime com esse id foi encontrado");
  }
});

app.listen(3000, () => {
  console.log("A aplicação esta rodando na porta 3000");
  console.log("Acesse em: http://localhost:3000");
});
