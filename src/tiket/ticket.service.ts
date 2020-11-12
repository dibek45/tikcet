import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from "./interface/ticket.interface"


@Injectable()
export class TicketService {

 constructor(@InjectModel('Ticket') private readonly ticketModel: Model<Ticket>) {}

async createTicketDomicilio(createTicketDTO: any): Promise<Ticket> {
        console.log("llega a servicio")
        const newTicket = new this.ticketModel(createTicketDTO);
        return newTicket.save();
    }

async getTicketsByEmpresaID(busqueda: Object): Promise<Ticket[]> {
        const products = await this.ticketModel.find()
        return products;
}
async updateTickets(id,statusID){

    const products = await  this.ticketModel.update(  {"_id" : id},
    {
   
      $set: {
         "estatusId" :  statusID
            }
    }
 )
        return products;
       
}


}

