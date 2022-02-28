import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { PdfPrintComponent } from './pdf-print/pdf-print.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DasboardTabSelectionCardsComponent } from './dasboard-tab-selection-cards/dasboard-tab-selection-cards.component';
import { DashboardEditModalComponent } from './dashboard-edit-modal/dashboard-edit-modal.component';
import { DashbordUserPopupModalComponent } from './dashbord-user-popup-modal/dashbord-user-popup-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardsComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    AddUserModalComponent,
    EditUserModalComponent,
    PdfPrintComponent,
    DashboardComponent,
    SidebarComponent,
    DasboardTabSelectionCardsComponent,
    DashboardEditModalComponent,
    DashbordUserPopupModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
