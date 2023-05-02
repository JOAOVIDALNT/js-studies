import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ModalTicketComponent } from './components/modal-ticket/modal-ticket.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalReviewComponent } from './components/modal-review/modal-review.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TicketsComponent,
    ModalTicketComponent,
    ModalReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
