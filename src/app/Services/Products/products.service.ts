import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsRef = this.db.list("Products");

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
  ) { }


  getProducts() {
    return this.productsRef.snapshotChanges();
  }
  getProduct(key) {
    return this.db.list(`Products/${key}`).snapshotChanges();
  }
}
