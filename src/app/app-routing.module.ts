import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "ticket-ordering",
    canActivate: [],
    loadChildren: () =>
      import("./ticket-ordering/ticket-ordering.module").then(
        (m) => m.TicketOrderingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
