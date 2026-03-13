import MongoLibroRepository from "../repositories/MongoLibroRepository.js";
import CreateLibro          from "../../application/usecases/CreateLibro.js";
import GetAllLibros         from "../../application/usecases/GetAllLibros.js";
import LibroController      from "../controllers/LibroController.js";

// 1. Repositorio
const repository = new MongoLibroRepository();

// 2. Use cases
const createLibro  = new CreateLibro(repository);
const getAllLibros  = new GetAllLibros(repository);

// 3. Controller
const libroController = new LibroController({
  createLibro,
  getAllLibros,
});

export { libroController };
