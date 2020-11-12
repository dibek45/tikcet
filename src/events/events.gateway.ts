import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
   } from '@nestjs/websockets';
   import { Logger } from '@nestjs/common';
   import { Socket, Server } from 'socket.io';
import { TicketService } from 'src/tiket/ticket.service';
  
  @WebSocketGateway()
  export class EventsGateway {
    
  constructor(private _ticket:TicketService){

  }

 @WebSocketServer() server: Server;
 private logger: Logger = new Logger('AppGateway');

 @SubscribeMessage('insertTicketInto')
 handleMessage(client: Socket, payload: string): void {
     console.log("se recibe mensaje"+JSON.stringify(payload));
     console.log(client.id);

     this._ticket.getTicketsByEmpresaID({}).then(res=>{
        this.server.emit(`ticketToClintEmpresaID=2`, res);
     })
 }

 

 afterInit(server: Server) {
  this.logger.log('Init');
 }

 handleDisconnect(client: Socket) {
  this.logger.log(`Client disconnected: ${client.id}`);
 }

 handleConnection(client: Socket, ...args: any[]) {
  this.logger.log(`Client connected: Lo tengo ahora si ${client.id}`);
  //client.join("chatroom1");

 }
  }