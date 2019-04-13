import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  sellerRef = this.db.list('Seller Data/Sellers', ref => ref.orderByChild("TimeStamp"));

  constructor(
    public db: AngularFireDatabase,
    public toastCtrl: ToastController,
  ) { }

  getSellers() {
    return this.sellerRef.snapshotChanges();
  }
  getSeller(key) {
    return this.db.object(`Seller Data/Sellers/${key}`).snapshotChanges();
  }

  async verifySeller(s) {
    this.db.object(`Seller Data/Sellers/${s.key}/Status`).set("Verified").then(() => {
      this.presentToast("Seller Verified");
    }).then(() => {
      this.db.list(`Seller Data/Notifications/${s.key}`).push({
        Type: "Seller Verified",
        Status: "Unread",
        TimeStamp: moment().format(),
      })
    })
  }
  async  unVerifySeller(s) {
    this.db.object(`Seller Data/Sellers/${s.key}/Status`).set("Unverified").then(() => {
      this.presentToast("Seller Unverified");
    }).then(() => {
      this.db.list(`Seller Data/Notifications/${s.key}`).push({
        Type: "Seller Unverified",
        Status: "Unread",
        TimeStamp: moment().format(),
      })
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
