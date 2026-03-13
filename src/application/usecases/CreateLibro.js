import Libro from "../../domain/entities/Libro.js";

export default class CreateLibro {
  constructor(LibroRepository) {
    this.LibroRepository = LibroRepository;
  }

  async execute({ titulo, precio }) {
    const libro = new Libro({ titulo, precio });
    return await this.LibroRepository.save(libro);
  }
}
