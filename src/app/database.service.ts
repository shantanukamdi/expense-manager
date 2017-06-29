import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DatabaseService {

  constructor(
            private af: AngularFireDatabase

  ) { }

  storeToDB( userExpense ){
    this.af.list('/expenses').push(userExpense);
  }

  getData(){
    return this.af.list('/expenses');
  }
}
