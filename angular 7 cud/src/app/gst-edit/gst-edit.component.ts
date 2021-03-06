import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  angForm: FormGroup;
  business: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        person_name: ['', Validators.required ],
        business_name: ['', Validators.required ],
      //  business_gst_number: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
        console.log(this.business)
      });
    });
  }

  updateBusiness(person_name, business_name) {
   this.route.params.subscribe(params => {
     console.log(params)
      this.bs.updateBusiness(person_name, business_name,params['id']).subscribe(res=>{
        this.router.navigate(['business']);
      })      
   });
}
}
