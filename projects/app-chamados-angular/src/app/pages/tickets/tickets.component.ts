import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTicketComponent } from 'src/app/components/modal-ticket/modal-ticket.component';
import { ITicket } from 'src/app/interfaces/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  tickets: ITicket[] = [];

  constructor(private ticketService: TicketService,
    private modalService: NgbModal) {}


    abrirModalTicket(ticket: ITicket) {
      const modalRef = this.modalService.open(ModalTicketComponent);
      modalRef.componentInstance.ticket = ticket;
    }

  ngOnInit() {
    this.ticketService.findAllTickets().subscribe(result => {this.tickets = result});
  }

}
