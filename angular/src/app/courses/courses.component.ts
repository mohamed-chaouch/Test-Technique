import { Component, OnInit } from '@angular/core';
import { CourService } from '../service/cour.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor( public courServ : CourService){ }
  courses:any;

  ngOnInit(): void {
    this.courServ.getAllCours()
      .subscribe(
        res=>{
          this.courses = res;
        },
        err=>{
          console.log(err);
        }
      )      
  }

}
