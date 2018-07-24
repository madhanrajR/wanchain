import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignService } from './sign.service';
import { AppComponent } from './app.component';
import { SigntransComponent } from './signtrans/signtrans.component';

@NgModule({
  declarations: [
    AppComponent,
    SigntransComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
