import path from "path";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api teste Express",
      version: "1.0.0",
      description: "Uma API exemplo documentada com Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.ts")], // Caminho onde estão os seus arquivos de rota com anotações
};

export default swaggerOptions;
