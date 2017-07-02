import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor( private afAuth: AngularFireAuth ) { }

  loginWithEmailAndPassword(user){
    let email = user.email;
    let password = user.password;
    console.log("Auth Service");
    console.log(user);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser(){
    return this.afAuth.auth.signOut();
  }

  registerUser(user){
    let email = user.email;
    let password = user.password;
    console.log(user);
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
