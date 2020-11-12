import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {

    constructor(private ticketService: TicketService) { }

    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDTO: any) {
        console.log("llega a controlador")

        const ticket = await this.ticketService.createTicketDomicilio(createProductDTO);
        return res.status(HttpStatus.OK).json({ message: 'Ticket Successfully Created', ticket });
    }

    @Get('/:id')
    async getTickets(@Res() res,@Param() params) {
        const tickets = await this.ticketService.getTicketsByEmpresaID(params.id);
        return res.status(HttpStatus.OK).json(tickets);
    }

    @Put('/:id/:estatusId')
    async updateTickets(@Res() res,@Param() params) {
        console.log("llega de perdida")
        const tickets = await this.ticketService.updateTickets(params.id,params.estatusId);
        return res.status(HttpStatus.OK).json(tickets);
    }

    

}
