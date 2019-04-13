import { Injectable } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  productsRef = this.db.list("Products");

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
  ) { }


  getProducts() {
    return this.productsRef.snapshotChanges();
  }
  getProduct(key) {
    return this.db.object(`Products/${key}`).snapshotChanges();
  }
  verifyProd(prod) {
    return this.db.object(`Products/${prod.key}/Status`).set("Verified").then(() => {
      this.db.list(`Seller Data/Notifications/${prod.StoreKey}`).push({
        Name: prod.Name,
        ProductKey: prod.key,
        Type: "Product Verified",
        Status: "Unread",
        TimeStamp: moment().format(),
      }).then(() => {
        this.presentToast("Product Unverified");
      });
    })
  }

  unVerifyProd(prod) {
    return this.db.object(`Products/${prod.key}/Status`).set("Pending").then(() => {
      this.db.list(`Seller Data/Notifications/${prod.StoreKey}`).push({
        Name: prod.Name,
        ProductKey: prod.key,
        Type: "Product Unverified",
        Status: "Unread",
        TimeStamp: moment().format(),
      }).then(() => {
        this.presentToast("Product Unverified");
      });
    })
  }




  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
    });
    toast.present();
  }




}
