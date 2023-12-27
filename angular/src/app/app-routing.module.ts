import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AjouterCourseComponent } from './ajouter-course/ajouter-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ListeCoursesComponent } from './liste-courses/liste-courses.component';
import { HomeComponent } from './home/home.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : "loginAdmin" , component : LoginAdminComponent },
  {path : "ajouterCourse" , component : AjouterCourseComponent },
  {path : "updateCourse/:id" , component : UpdateCourseComponent },
  {path : "listeCourses" , component : ListeCoursesComponent },
  {path : "layoutAdmin" , component : LayoutAdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
