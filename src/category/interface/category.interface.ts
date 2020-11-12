import { Document } from "mongoose";



export interface category extends Document {
   readonly _id:string;
   readonly nombre:string;

   

}