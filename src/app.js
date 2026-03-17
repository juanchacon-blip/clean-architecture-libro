import express             from "express";
import libroRoutes         from "./infrastructure/config/routes/libroRoutes.js";
import autorRoutes         from "./infrastructure/config/routes/autorRoutes.js";
import { libroController, autorController } from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

app.use("/api", libroRoutes(libroController));
app.use("/api", autorRoutes(autorController));

export default app;
