import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CateoriesService {

  constructor(
    public db: AngularFireDatabase,
  ) {

  }

  getTopCats() {
    return this.db.list(`Categories`).snapshotChanges();
  }

}
