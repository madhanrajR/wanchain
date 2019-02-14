import { Component, OnInit ,NgModule} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AminService } from 'src/app/service/amin.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  web3:any
  address:any
 public balance1:string;
  // public balance:any;
  public madhan;
  public home:boolean=true;
  basket:boolean=false;
  exchange:boolean=false;
  constructor(private auth:AuthService,private admin:AminService) 
  { 
    this.web3=this.admin.getWeb3();
    console.log(this.web3);
   var address=this.web3.eth.accounts.privateKeyToAccount('0x'+localStorage.getItem("LoggedInUser"));
      console.log(address)
    
     this.address=address.address;
     this.getbalance()
     console.log(localStorage.getItem("home"),localStorage.getItem("basket"),localStorage.getItem("exchange"));
     
     if(localStorage.getItem("home")=='true')
     {
       this.home1()
     }
    else if(localStorage.getItem("basket")=='true')
     {
       this.basket1()
     }
    else
     {
       this.exchange1()
     }
  }
getbalance()
{
  let meta = this;
  this.web3.eth.getBalance(this.address,function(err,res)
  {
    meta.balance1=String((res/1000000000000000000).toFixed(4));
    console.log(this.balance1);
    
  })
}
home1()
{
  localStorage.setItem("home", 'true')
  localStorage.setItem("basket", 'false')
  localStorage.setItem("exchange", 'false')
this.home=true;
this.basket=false;
this.exchange=false;
}
basket1()
{
  localStorage.setItem("basket",'true')
  localStorage.setItem("home", 'false')
  localStorage.setItem("exchange", 'false')
  this.home=false;
  this.basket=true;
  this.exchange=false;
}
exchange1()
{
  localStorage.setItem("exchange",'true')
  localStorage.setItem("home", 'false')
  localStorage.setItem("basket", 'false')
  this.home=false;
  this.basket=false;
  this.exchange=true;
}
  ngOnInit() {
  }

}
