import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AjouterCourseComponent } from './ajouter-course/ajouter-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ListeCoursesComponent } from './liste-courses/liste-courses.component';
import { HomeComponent } from './home/home.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    CoursesComponent,
    ContactComponent,
    LoginAdminComponent,
    AjouterCourseComponent,
    UpdateCourseComponent,
    ListeCoursesComponent,
    HomeComponent,
    LayoutAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
