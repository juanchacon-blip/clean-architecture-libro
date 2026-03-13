import LibroRepository from "../../domain/repositories/LibroRepository.js";

export default class InMemoryLibroRepository extends LibroRepository {
  constructor() {
    super();
    this.libros = [];
  }

  async save(libro) {
    const index = this.libros.findIndex(l => l.titulo === libro.titulo);
    if (index >= 0) {
      this.libros[index] = libro;
    } else {
      this.libros.push(libro);
    }
    return libro;
  }

  async findAll() {
    return this.libros;
  }
}
