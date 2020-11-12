import { Schema } from "mongoose";

export const ConfigSchema = new Schema({
  "empresaID":Number,
    "tipoEmpresaId":Number,
    "adminName": String,
    "permissions": []
})