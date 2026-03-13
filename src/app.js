import express             from "express";
import libroRoutes         from "./infrastructure/config/routes/libroRoutes.js";
import { libroController } from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

app.use("/api", libroRoutes(libroController));

export default app;
