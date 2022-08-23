export function badRequest(error, res) {
  console.log(error);
  res.status(400).send(error.message);
}
