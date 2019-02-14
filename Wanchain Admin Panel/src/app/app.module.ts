import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { BasketComponent } from './basket/basket/basket.component';
import { ExchangeComponent } from './exchange/exchange/exchange.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { AuthGuard } from './auth.guard';
import {FormsModule} from '@angular/forms'
import { NgxSpinnerModule } from 'ngx-spinner';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'basket',
    component:BasketComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'exchange',
    component:ExchangeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'header',
    component:HeaderComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent,
  //  canActivate:[AuthGuard]
  },
  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasketComponent,
    ExchangeComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
