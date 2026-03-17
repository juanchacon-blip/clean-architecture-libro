import { Router } from "express";

export default function autorRoutes(controller) {
  const router = Router();

  router.post("/autores", (req, res) => controller.create(req, res));
  router.get("/autores",  (req, res) => controller.getAll(req, res));

  return router;
}
