import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardsComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    AddUserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
