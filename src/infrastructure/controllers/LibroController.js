export default class LibroController {
  constructor({ createLibro, getAllLibros }) {
    this.createLibro = createLibro;
    this.getAllLibros = getAllLibros;
  }

  async create(req, res) {
    try {
      const libro = await this.createLibro.execute(req.body);
      res.status(201).json(libro);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const libros = await this.getAllLibros.execute();
      res.status(200).json(libros);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
