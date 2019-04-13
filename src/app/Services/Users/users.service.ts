import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userRef = this.db.list('User Data/Users', ref => ref.orderByChild("Name"));

  constructor(
    public db: AngularFireDatabase,
  ) { }


  getUsers() {
    return this.userRef.snapshotChanges();
  }

  getUser(key) {
    return this.db.object(`User Data/Users/${key}`).snapshotChanges();
  }




}
