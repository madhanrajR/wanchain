import { Injectable } from '@angular/core';
import{ Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
    /////////////////----Basket--------------////////////////////
public card1:boolean=false;
public card2:boolean=false;
public card3:boolean=false;
public card4:boolean=false;
public card5:boolean=false;
public card6:boolean=false;
public card7:boolean=false;
public card8:boolean=false;

  /////////////////----Basket--------------////////////////////
  public ecard1:boolean=false;
  public ecard2:boolean=false;
  public ecard3:boolean=false;
  public ecard4:boolean=false;
  public ecard5:boolean=false;
  public ecard6:boolean=false;
  public ecard7:boolean=false;
  public ecard8:boolean=false;
  constructor() { }
  /////////////////----Basket--------------////////////////////
  cardc1(){
    this.card1=true;
    this.card2=false;
    this.card3=false;
    this.card4=false;
    this.card5=false;
    this.card6=false;
    this.card7=false;
    this.card8=false;
  }
  cancel1()
  {
    this.card1=false;
  }
  cardc2(){
    this.card1=false;
    this.card2=true;
    this.card3=false;
    this.card4=false;
    this.card5=false;
    this.card6=false;
    this.card7=false;
    this.card8=false;
  }
  cancel2()
  {
    this.card2=false;
  }
  cardc3(){
    this.card1=false;
    this.card2=false;
    this.card3=true;
    this.card4=false;
    this.card5=false;
    this.card6=false;
    this.card7=false;
    this.card8=false;
  }
  cancel3()
  {
    this.card3=false;
  }
  cardc4(){
    this.card1=false;
    this.card2=false;
    this.card3=false;
    this.card4=true;
    this.card5=false;
    this.card6=false;
    this.card7=false;
    this.card8=false;
  }
  cancel4()
  {
    this.card4=false;
  }
  cardc5(){
    this.card1=false;
    this.card2=false;
    this.card3=false;
    this.card4=false;
    this.card5=true;
    this.card6=false;
    this.card7=false;
    this.card8=false;
  }
  cancel5()
  {
    this.card5=false;
  }
  cardc6(){
    this.card1=false;
    this.card2=false;
    this.card3=false;
    this.card4=false;
    this.card5=false;
    this.card6=true;
    this.card7=false;
    this.card8=false;
  }
  cancel6()
  {
    this.card6=false;
  }
  cardc7(){
    this.card1=false;
    this.card2=false;
    this.card3=false;
    this.card4=false;
    this.card5=false;
    this.card6=false;
    this.card7=true;
    this.card8=false;
  }
  cancel7()
  {
    this.card7=false;
  }
  cardc8(){
    this.card1=false;
    this.card2=false;
    this.card3=false;
    this.card4=false;
    this.card5=false;
    this.card6=false;
    this.card7=false;
    this.card8=true;
  }
  cancel8()
  {
    this.card8=false;
  }

  ////////////--------------------------------------/////////////////

  ecardc1(){
    this.ecard1=true;
    this.ecard2=false;
    this.ecard3=false;
    this.ecard4=false;
    this.ecard5=false;
    this.ecard6=false;
    this.ecard7=false;
    this.ecard8=false;
    
  }
  ecancel1()
  {
    this.ecard1=false;
  }
  ecardc2(){
    this.ecard1=false;
    this.ecard2=true;
    this.ecard3=false;
    this.ecard4=false;
    this.ecard5=false;
    this.ecard6=false;
    this.ecard7=false;
    this.ecard8=false;
    
  }
  ecancel2()
  {
    this.ecard2=false;
  }
  ecardc3(){
    this.ecard1=false;
    this.ecard2=false;
    this.ecard3=true;
    this.ecard4=false;
    this.ecard5=false;
    this.ecard6=false;
    this.ecard7=false;
    this.ecard8=false;
   
  }
  ecancel3()
  {
    this.ecard3=false;
  }
  ecardc4(){
    this.ecard1=false;
    this.ecard2=false;
    this.ecard3=false;
    this.ecard4=true;
    this.ecard5=false;
    this.ecard6=false;
    this.ecard7=false;
    this.ecard8=false;
    
  }
  ecancel4()
  {
    this.ecard4=false;
  }
  ecardc5(){
    this.ecard1=false;
    this.ecard2=false;
    this.ecard3=false;
    this.ecard4=false;
    this.ecard5=true;
    this.ecard6=false;
    this.ecard7=false;
    this.ecard8=false;
    
  }
  ecancel5()
  {
    this.ecard5=false;
  }
  ecardc6(){
    this.ecard1=false;
    this.ecard2=false;
    this.ecard3=false;
    this.ecard4=false;
    this.ecard5=false;
    this.ecard6=true;
    this.ecard7=false;
    this.ecard8=false;
    
  }
  ecancel6()
  {
    this.ecard6=false;
  }
  ecardc7(){
    this.ecard1=false;
    this.ecard2=false;
    this.ecard3=false;
    this.ecard4=false;
    this.ecard5=false;
    this.ecard6=false;
    this.ecard7=true;
    this.ecard8=false;
    
  }
  ecancel7()
  {
    this.ecard7=false;
  }

  ecardc8(){
    this.ecard1=false;
    this.ecard2=false;
    this.ecard3=false;
    this.ecard4=false;
    this.ecard5=false;
    this.ecard6=false;
    this.ecard7=false;
    this.ecard8=true;
    
  }
  ecancel8()
  {
    this.ecard8=false;
  }
}
