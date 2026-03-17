export default class AutorController {
  constructor({ createAutor, getAllAutores }) {
    this.createAutor = createAutor;
    this.getAllAutores = getAllAutores;
  }

  async create(req, res) {
    try {
      const autor = await this.createAutor.execute(req.body);
      res.status(201).json(autor);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const autores = await this.getAllAutores.execute();
      res.status(200).json(autores);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
