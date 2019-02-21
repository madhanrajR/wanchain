import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // addBusiness(person_name, business_name, business_gst_number) {
  //   const obj = {
  //     person_name: person_name,
  //     business_name: business_name,
  //     business_gst_number: business_gst_number
  //   };
  //   this.http.post(`${this.uri}/add`, obj)
  //       .subscribe(res => console.log('Done'));
  // }

  addBusiness(person_name, business_name) {
    const obj = {
      // person_name: person_name,
      // business_name: business_name,
      // business_gst_number: business_gst_number

      name : person_name,
      address : business_name
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }


  getBusinesses() {
    return this
           .http
           .get(`${this.uri}/getAll`);
  }

  editBusiness(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(person_name, business_name,id) {

    const obj = {
        // person_name: person_name,
        // business_name: business_name,
        // business_gst_number: business_gst_number
        _id:id,
        name:person_name,
        address:business_name
      };
     return this.http.post(`${this.uri}/update`, obj)
  }

 deleteBusiness(id) {
  const obj = {  
    _id:id,
  };
    return this.http.post(`${this.uri}/delete`,obj);
  }
}
