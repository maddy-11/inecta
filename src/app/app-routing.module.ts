import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PdfPrintComponent} from './pdf-print/pdf-print.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pdf',
    component: PdfPrintComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
