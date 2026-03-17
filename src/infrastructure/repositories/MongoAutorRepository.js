import AutorRepository from "../../domain/repositories/AutorRepository.js";
import AutorModel      from "../database/models/AutorModel.js";

export default class MongoAutorRepository extends AutorRepository {
  async save(autor) {
    await AutorModel.findOneAndUpdate(
      { nombre: autor.nombre },
      autor,
      { upsert: true, new: true }
    );
    return autor;
  }

  async findAll() {
    return await AutorModel.find();
  }
}
