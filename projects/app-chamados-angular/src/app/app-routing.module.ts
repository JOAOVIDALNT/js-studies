import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';

const routes: Routes = [
  {path: 'adminendpoint', component: TicketsComponent},
  {path: '', component: CreateTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
