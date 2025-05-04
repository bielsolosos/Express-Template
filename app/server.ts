import express from "express";
import helment from "helmet";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./config/swagger.config";
import homeRoutes from "./routes/home.routes";

const app = express();
const PORT = 3000;
//Importa a documentação base do config
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Middleware que registra logs de todos os endpoints
app.use(morgan("dev")); // Logs HTTP
//Middleware que adiciona vários headers de segurança HTTP
app.use(helment());
//Middleware do swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//Middleware que identifica o uso apenas de json
app.use(express.json());

app.use("/", homeRoutes);

app.listen(PORT, () => {
  //Tudo dentro daqui é executado
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação da API em http://localhost:${PORT}/api-docs`);
});
