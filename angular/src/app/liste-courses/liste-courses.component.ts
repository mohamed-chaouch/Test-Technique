import { Component, OnInit } from '@angular/core';
import { CourService } from '../service/cour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-courses',
  templateUrl: './liste-courses.component.html',
  styleUrls: ['./liste-courses.component.css']
})
export class ListeCoursesComponent implements OnInit{
  constructor(private courSer : CourService , private router : Router){}
  cours : any;

  ngOnInit() : void{
    this.courSer.getAllCours()
      .subscribe(
        res=>{
          this.cours = res;
        },
        err=>{
          console.log(err);
        }
      )
  }

  deleteCour(id :any){
    this.courSer.deleteCour(id)
      .subscribe(
        res=>{
          this.ngOnInit();
        },
        err=>{
          console.log(err);
        }
      )
  }

}
