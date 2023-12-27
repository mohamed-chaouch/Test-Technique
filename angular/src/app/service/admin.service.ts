import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( public http : HttpClient ) { }
  private url = "http://localhost:3000/admin";
   
  ajouterAdmin( admin : any){
    return this.http.post( this.url + '/register' , admin );
  }

  loginAdmin( admin : any){
    return this.http.post(this.url + '/login' , admin);
  }

  getAdminById(id : any){
    return this.http.get( this.url + '/getById/' + id);
  }
}
