import express from "express";
import routes from "./src/routes/postsRoutes.js";
import cors from "cors";

const corsOptions = {
  origin: "*", // Allow all origins for easier deployment
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions)); // Apply CORS globally
app.use(express.static("uploads"));

routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Server listening...");
});
