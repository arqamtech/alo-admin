import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  faq = new FormGroup({
    Question: new FormControl("", Validators.required),
    Answer: new FormControl("", Validators.required),
  });

  constructor(
    public db: AngularFireDatabase,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) { }

  //User Functions
  addFaq(f) {
    return this.db.list(`Promotionals/FAQs/VendorFaq`).push(f).then(() => {
      this.presentToast("Faq Added");
    })
  }
  getUserFaqs() {
    return this.db.list(`Promotionals/FAQs/VendorFaq`).snapshotChanges();
  }
  async deleteFaq(f) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure you want to Delete this FAQ ?',
      message: 'This cannot be recovered again',
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(f);
          }
        }
      ]
    });

    await alert.present();
  }

  delete(f) {
    this.db.object(`Promotionals/FAQs/VendorFaq/${f}`).remove().then(() => {
      this.presentToast("Faq Removed");
    });
  }

  //Vendor Functions
  addFaqV(f) {
    return this.db.list(`Promotionals/FAQs/VendorFaq`).push(f).then(() => {
      this.presentToast("Faq Added");
    })
  }
  getUserFaqsV() {
    return this.db.list(`Promotionals/FAQs/VendorFaq`).snapshotChanges();
  }
  async deleteFaqV(f) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure you want to Delete this FAQ ?',
      message: 'This cannot be recovered again',
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(f);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteV(f) {
    this.db.object(`Promotionals/FAQs/VendorFaq/${f}`).remove().then(() => {
      this.presentToast("Faq Removed");
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
