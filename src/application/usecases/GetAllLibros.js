export default class GetAllLibros {
  constructor(LibroRepository) {
    this.LibroRepository = LibroRepository;
  }

  async execute() {
    return await this.LibroRepository.findAll();
  }
}
