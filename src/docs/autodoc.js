const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/animes.route.js"];

swaggerAutogen(outputFile, endpointsFiles);
