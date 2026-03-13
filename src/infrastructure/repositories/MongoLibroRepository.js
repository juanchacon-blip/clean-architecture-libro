import LibroRepository from "../../domain/repositories/LibroRepository.js";
import LibroModel      from "../database/models/LibroModel.js";

export default class MongoLibroRepository extends LibroRepository {
  async save(libro) {
    await LibroModel.findOneAndUpdate(
      { titulo: libro.titulo },
      libro,
      { upsert: true, new: true }
    );
    return libro;
  }

  async findAll() {
    return await LibroModel.find();
  }

  async findByTitulo(titulo) {
    return await LibroModel.findOne({ titulo }) ?? null;
  }

  async delete(titulo) {
    const result = await LibroModel.findOneAndDelete({ titulo });
    if (!result) throw new Error(`Libro con titulo "${titulo}" not found`);
  }
}
