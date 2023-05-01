import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTicketComponent } from 'src/app/components/modal-ticket/modal-ticket.component';
import Swal from 'sweetalert2';
import { ITicket } from 'src/app/interfaces/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { UpdateStatusComponent } from '../update-status/update-status.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  tickets: ITicket[] = [];

  public paginaAtual = 1;

  constructor(private ticketService: TicketService,
    private modalService: NgbModal) { }


  abrirModalTicket(ticket: ITicket) {
    const modalRef = this.modalService.open(ModalTicketComponent);
    modalRef.componentInstance.ticket = ticket;
  }

  abrirModalStatus(ticket: ITicket) {
    const modalRef = this.modalService.open(UpdateStatusComponent);
    modalRef.componentInstance.ticket = ticket;
  }

  ngOnInit() {
    this.ticketService.findByStatus("PENDENTE").subscribe(result => { this.tickets = result });
  }

  statusUpdate(id: number, ticket: ITicket) {
    this.ticketService.findById(id).subscribe((result) => {
      Swal.fire({
        title: 'Confirme a resolução do chamado',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sim',
        denyButtonText: 'Não'
      }).then((result => {
        if (result.isConfirmed) {
          ticket.status = "RESOLVIDO";
          this.ticketService.updateStatus(id, ticket).subscribe((result) => {
          Swal.fire('Atualizado', 'Status atualizado com sucesso!', 'success');
          this.abrirModalStatus(ticket);
          })
        } else if (result.isDenied) {
          Swal.fire('Cuidado!', 'Não é possível reabrir chamados depois de resolvidos', 'info')
        }
      }))
    })



  }

}



