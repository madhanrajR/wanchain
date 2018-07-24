import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxFsModule} from 'ngx-fs';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { WalletService } from './wallet.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    NgxFsModule
  ],
  providers: [WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
