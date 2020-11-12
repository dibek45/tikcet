import { Document } from "mongoose";



export interface Config extends Document {
   readonly name:string;
   readonly description:string;
   readonly imagenURL:string;
   readonly price:number;
   readonly createAt:Date;
   readonly cordenadas: { lat: number, lng: number}
   readonly nombreEmpresa:string;
   readonly circle :[{lat: number, lng: number, radius: number, color: string}];
   readonly informacion:{ 
                           direccion: string,
                           horarios: [
                                      {inicioDia: string, finDIa:string,inicioHora:string, finHora:string}
                         ]
}

}