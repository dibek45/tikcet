import { Schema } from "mongoose";

export const UserSchema = new Schema({
    userID: Number,
    name:String,
    correo:String,
    password:String,
    imagenURL:String,
    telefono:String,
    createdAt: { type: Date, default: Date.now }
});

