import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { LocalStorageModule } from 'angular-2-local-storage';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from './app.route';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   
         ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
   // ModalModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
