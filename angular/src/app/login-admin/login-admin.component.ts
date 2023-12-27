import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  constructor(private adminSer : AdminService , private router : Router){}
  loginAdmin={
    email : '',
    password : ''
  }

  tokenAdmin : any;
  resultat : any ;
  login() : void{
    this.adminSer.loginAdmin(this.loginAdmin)
      .subscribe(
        res=>{
          this.tokenAdmin = res;
          localStorage.setItem('tokenAdmin' , this.tokenAdmin.mytoken);
          this.router.navigate(['/layoutAdmin']);
        },
        err=>{
          this.resultat = "email or password invalid !!";
        }
      )
  }
}
