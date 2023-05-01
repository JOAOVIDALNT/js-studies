import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { ITicket } from 'src/app/interfaces/ticket';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent {
  @Input() ticket!: ITicket;
  // ticketId: number = 0;

  statusForm = new FormGroup({
    status: new FormControl('', Validators.required)
  });

  constructor(public activeModal: NgbActiveModal, private ticketService: TicketService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.ticketId = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.findById(this.ticket.id).subscribe((result : ITicket) => {
      this.statusForm.setValue({
        status: result.status
      })
    }, (error) => {
      Swal.fire('Algo deu errado', error.message, 'error')
    })
  }

  statusUpdate() {
    const ticket: ITicket = this.statusForm.value as ITicket;
    // this.ticketId = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.updateStatus(this.ticket.id, ticket).subscribe((result) => {
      Swal.fire('Atualizado', 'Status atualizado com sucesso!', 'success');
      return result;
    }, (error) => {
      Swal.fire('Não foi possível atualizar', error.error.message, 'error')
    })
  }
}
