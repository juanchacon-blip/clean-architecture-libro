import { Schema, model } from "mongoose";

const autorSchema = new Schema({
  nombre:       { type: String, required: true, unique: true },
  nacionalidad: { type: String, required: true },
});

export default model("Autor", autorSchema);
