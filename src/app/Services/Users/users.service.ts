import { Injectable } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userRef = this.db.list('User Data/Users', ref => ref.orderByChild("Name"));

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
  ) { }


  getUsers() {
    return this.userRef.snapshotChanges();
  }

  getUser(key) {
    return this.db.object(`User Data/Users/${key}`).snapshotChanges();
  }





  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
    });
    toast.present();
  }

}
