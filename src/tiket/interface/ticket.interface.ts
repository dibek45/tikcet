import { Document } from "mongoose";



export interface Ticket extends Document {
   readonly carrito: any;
   readonly datosCliente: any;
   readonly estatusId:Number;
   readonly total:Number
}