import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DatabaseService } from '../database.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  public isModalShown:boolean = false;

  private merchants;
  private date;
  private totalExpense: number;
  private comments;

  private expenses: Array<any>;

  private total: number;

  private isLoading: boolean;

  constructor(private db: DatabaseService, 
              private auth: AuthService, 
              private router: Router ) { 
        this.isLoading = true;
  }

  ngOnInit() {
    this.db.getData().subscribe((data) => {
        this.total = 0;
        this.expenses = data;
        for(var i = 0; i < this.expenses.length; i++){
          this.total += this.expenses[i].totalExpense;
        }    
        this.isLoading = false;
    }, (error) => {
        console.log(error);
    });
    
  }

   public showModal():void {
        this.isModalShown = true;
    }
    
    public hideModal():void {
        this.autoShownModal.hide();
    }
    
    public onHidden():void {
        this.isModalShown = false;
    }

    addExpense(){
      let userExpense = {
        merchants: this.merchants,
        date: this.date,
        comments: this.comments,
        totalExpense: this.totalExpense
      };
      this.merchants = "";
      this.date = "";
      this.comments = "";
      this.totalExpense = 0.00;
      console.log(userExpense);
      this.db.storeToDB(userExpense);
      this.onHidden();
      
    }

    logout(){
      console.log('logout()');

      this.auth.logoutUser().then((success) => {
        this.router.navigate(['login']);
      }, (error) => {
        console.log(error);
      })
    }
}
