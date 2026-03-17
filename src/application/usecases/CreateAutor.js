import Autor from "../../domain/entities/Autor.js";

export default class CreateAutor {
  constructor(AutorRepository) {
    this.AutorRepository = AutorRepository;
  }

  async execute({ nombre, nacionalidad }) {
    const autor = new Autor({ nombre, nacionalidad });
    return await this.AutorRepository.save(autor);
  }
}
