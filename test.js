import { UserEntity } from "./entities/user.js";

const user = new UserEntity({
  name: "Leonardo",
  email: "bestmail@mail.com",
  password: "senhasegura",
  image: "http://imagem.com",
  characters: [
    {
      id: "702df4dc-538d-48b8-82cf-0fd208ce4c48",
      name: "Tomas Shelby",
      image: "http://imagemShelby.com",
      userId: "ebede37a-7864-4cd5-b034-2e5a2359df39",
    },
  ],
});

user.addCharacter({
  name: "Rick",
  image: "http://imagemrick.com",
});

console.log(user.getUser());
