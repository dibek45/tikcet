import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    empresaID: Number,
    name:String,
    price:Number,
    available:Boolean,
    bestSeller:Boolean,
    tipoEmpresaId:Number,
    description: String,
    img:String,
    categories:[
      {
      _id:String,nombre:String
      }
    ],
    variantes:[Object],
    createdAt: { type: Date, default: Date.now }
});


