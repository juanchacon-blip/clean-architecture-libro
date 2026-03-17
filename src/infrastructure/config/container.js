import MongoLibroRepository from "../repositories/MongoLibroRepository.js";
import CreateLibro          from "../../application/usecases/CreateLibro.js";
import GetAllLibros         from "../../application/usecases/GetAllLibros.js";
import LibroController      from "../controllers/LibroController.js";

import MongoAutorRepository from "../repositories/MongoAutorRepository.js";
import CreateAutor          from "../../application/usecases/CreateAutor.js";
import GetAllAutores        from "../../application/usecases/GetAllAutores.js";
import AutorController      from "../controllers/AutorController.js";

// Libro
const libroRepository = new MongoLibroRepository();
const createLibro     = new CreateLibro(libroRepository);
const getAllLibros     = new GetAllLibros(libroRepository);
const libroController = new LibroController({ createLibro, getAllLibros });

// Autor
const autorRepository = new MongoAutorRepository();
const createAutor     = new CreateAutor(autorRepository);
const getAllAutores    = new GetAllAutores(autorRepository);
const autorController = new AutorController({ createAutor, getAllAutores });

export { libroController, autorController };
