import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BannersService {
  banner = new FormGroup({
    Name: new FormControl("", Validators.required),
    Image: new FormControl(""),
    PostTime: new FormControl(moment().format()),
  });

  url: string;


  bannersRef = this.db.list("Promotionals/Banners")

  constructor(
    private db: AngularFireDatabase,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,

  ) { }

  async addBanner(banner) {
    firebase.storage().ref("Banners/" + banner.Name).put(banner.Image).then(() => {
      firebase.storage().ref("Banners/" + banner.Name).getDownloadURL().then((dURL) => {
        this.url = dURL;
        banner.Image = this.url;
      }).then(() => {
        this.bannersRef.push(banner).then(() => {
          this.navCtrl.navigateRoot('banners');
        })

      })
    })

  }

  getBanners() {
    return this.bannersRef.snapshotChanges();
  }




  async deleteBanner(banner) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure you want to Delete this Banner ?',
      message: 'This banner cannot be recovered again',
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(banner);
          }
        }
      ]
    });

    await alert.present();
  }

  delete(banner) {
    console.log(banner.key);

    firebase.storage().ref("Banners/").child(banner.payload.val().Name).delete().then(() => {
      this.db.list(`Promotionals/Banners/${banner.key}`).remove().then(() => {
        this.presentToast("Banner Deleted");
      });
    });
  }


  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
    });
    toast.present();
  }




}
