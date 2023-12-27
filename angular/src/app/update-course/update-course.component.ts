import { Component, OnInit } from '@angular/core';
import { CourService } from '../service/cour.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit{

  constructor(private courSer : CourService , private act : ActivatedRoute , private router : Router){}
  cour : any = {
    titre:"",
    prix:0
  }

  image:any;
  selectedImage(e :any){
    this.image = e.target.files[0];
  }
 id:any;
  ngOnInit(): void {

    this.id = this.act.snapshot.paramMap.get('id');
    this.courSer.getCourById(this.id)
      .subscribe(
        res=>{
          this.cour = res;
        },
        err=>{
          console.log(err);
        }
      )
  }

  updateCour(){
    let fd = new FormData()
    fd.append('image' , this.image),
    fd.append('titre' , this.cour.titre),
    fd.append('prix' , this.cour.prix.toString());

    this.courSer.updateCour(this.id , fd)
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
