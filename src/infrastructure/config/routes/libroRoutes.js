import { Router } from "express";

export default function libroRoutes(controller) {
  const router = Router();

  router.post("/libros", (req, res) => controller.create(req, res));
  router.get("/libros",  (req, res) => controller.getAll(req, res));

  return router;
}
