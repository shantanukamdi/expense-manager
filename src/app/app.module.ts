import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { AuthService } from './auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatabaseService } from './database.service';
import { RegisterComponent } from './register/register.component';
import { EqualValidator } from './equal-validator.directive'; 

const config = {
    apiKey: "AIzaSyD11K6nGvgYWyQLeQBNaiICZT-890B5dMM",
    authDomain: "demoproject-e1f34.firebaseapp.com",
    databaseURL: "https://demoproject-e1f34.firebaseio.com",
    projectId: "demoproject-e1f34",
    storageBucket: "demoproject-e1f34.appspot.com",
    messagingSenderId: "556861337720"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    EqualValidator 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(config),
    ModalModule.forRoot()
  ],
  providers: [ AngularFireModule, AuthService, AngularFireAuth, DatabaseService, AngularFireDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }
