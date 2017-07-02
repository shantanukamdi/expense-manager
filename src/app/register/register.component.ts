import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private email: string;
  private password: string = "";
  private confirmPassword: string = "";
  private isPasswordEqual: boolean = true;
  private loading: boolean = false;
  constructor(private router: Router,
              private auth: AuthService
  ) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }
  checkPassword(){
    console.log('checkPassword');
    if(this.password === this.confirmPassword){
      this.isPasswordEqual = false;
    }
  }
  register(){
    this.loading = true;
    let user = {
      email: this.email,
      password: this.password
    };

    this.auth.registerUser(user).then(data => {
      console.log(data);
      this.loading = false;
      this.router.navigate(['']);
    }, error => {
      this.loading = false;
      alert(error);
    });
  }
}
