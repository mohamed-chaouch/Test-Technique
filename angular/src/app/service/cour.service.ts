import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  constructor( public http : HttpClient ) { }
  private url = "http://localhost:3000/cour";
   
  ajouterCour( cour : any){
    return this.http.post( this.url + '/add' , cour );
  }

  getAllCours(){
    return this.http.get( this.url + '/getAll' );
  }

  updateCour( id :any , courNew : any){
    return this.http.put(this.url + '/update/' + id, courNew);
  }

  deleteCour( id :any ){
    return this.http.delete(this.url + '/delete/' + id);
  }

  getCourById(id : any){
    return this.http.get( this.url + '/getbyid/' + id);
  }



}
