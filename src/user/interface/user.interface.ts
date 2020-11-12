import { Document } from "mongoose";



export interface User extends Document {
   readonly name:string;
   readonly correo:string;
   readonly password:string;
   readonly imagenURL:string;
   readonly telefono:string;
   readonly createAt:Date

}

