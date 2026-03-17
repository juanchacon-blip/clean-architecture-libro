export default class GetAllAutores {
  constructor(AutorRepository) {
    this.AutorRepository = AutorRepository;
  }

  async execute() {
    return await this.AutorRepository.findAll();
  }
}
