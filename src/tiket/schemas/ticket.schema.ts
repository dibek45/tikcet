import { Schema } from "mongoose";

export const TicketSchema = new Schema({
   carrito :Object,
   datosCliente :Object,
   estatusId:Number,
   total:Number
});
