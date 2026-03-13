import { Schema, model } from "mongoose";

const libroSchema = new Schema({
  titulo: { type: String, required: true, unique: true },
  precio: { type: Number, required: true },
});

export default model("Libro", libroSchema);
