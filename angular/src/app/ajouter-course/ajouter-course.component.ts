import { Component } from '@angular/core';
import { CourService } from '../service/cour.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-course',
  templateUrl: './ajouter-course.component.html',
  styleUrls: ['./ajouter-course.component.css']
})
export class AjouterCourseComponent {
  constructor(private courSer : CourService ,private router : Router){}

  cour ={
    image : "",
    titre : "",
    prix: 0
  }

  image:any;
  selectedImage(e :any){
    this.image = e.target.files[0];
  }

  ajouterCour(){
      let fd = new FormData()
      fd.append('image' , this.image),
      fd.append('titre' , this.cour.titre),
      fd.append('prix' , this.cour.prix.toString());
  
      this.courSer.ajouterCour(fd)
        .subscribe(
          res=>{
            this.router.navigate(['/listeCourses']);
          },
          err=>{
            console.log(err);
          }
        )
  }
}
