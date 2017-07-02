import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: String;
  private password: String;
  loading: boolean;
  constructor(private _auth: AuthService,
              public router: Router) { }

  ngOnInit() {
  }

 login(){
    this.loading = true;
    let user = {
      email: this.email,
      password: this.password
    }
    this._auth.loginWithEmailAndPassword(user).then(authData => {
      this.loading = false;
      this.router.navigate(['home']);
    }, (error) => {
       console.log(error);
    });
  }

  navigateToRegister(){
    this.router.navigate(['register']);
  }
}
