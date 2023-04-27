import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITicket } from 'src/app/interfaces/ticket';

@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.component.html',
  styleUrls: ['./modal-ticket.component.css']
})
export class ModalTicketComponent {
  @Input() ticket!: ITicket;

  constructor(public activeModal: NgbActiveModal) {}



}
