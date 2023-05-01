import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ModalTicketComponent } from './components/modal-ticket/modal-ticket.component';
import { UpdateStatusComponent } from './pages/update-status/update-status.component';

const routes: Routes = [
  {path: '', component: TicketsComponent},
  {path: 'tickets/status/:id', component: UpdateStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
