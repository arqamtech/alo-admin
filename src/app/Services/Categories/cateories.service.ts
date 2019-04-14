import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CateoriesService {

  cat = new FormGroup({
    Name: new FormControl("", Validators.required),
    TimeStamp: new FormControl(moment().format(), Validators.required),
  });


  constructor(
    public db: AngularFireDatabase,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
  ) {

  }
  getTopCats() {
    return this.db.list(`Categories`).snapshotChanges();
  }
  async addTopCat(temp) {
    return this.db.list(`Categories`).push(temp);
  }
  async addSubCat(temp, cat) {
    return this.db.list(`SubCategories`).push(temp).then((res) => {
      this.db.list(`SubCatsIndex/${cat.key}`).set(res.key, true);
    });
  }
  async addSubCatItem(temp, subCat) {
    return this.db.list(`SubCategoriesItems`).push(temp).then((res) => {
      this.db.list(`SubCatsItemsIndex/${subCat.key}`).set(res.key, true);
    });
  }

  async confirmDelTopCat(catKey) {
    const alert = await this.alertCtrl.create({
      header: "Delete Category ?",
      message: "This will Delete all the Subcategory and their Items also !!",
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Yes, I understand',
          handler: () => {
            this.delTopCat(catKey);
          }
        }
      ]
    });

    await alert.present();
  }

  async delTopCat(catKey) {
    this.db.list(`Categories/${catKey}`).remove().then(() => {
      this.db.list(`SubCatsIndex/${catKey}`).snapshotChanges().subscribe(snap => {
        snap.forEach(snip => {
          this.delSubCat(snip.key, catKey);
        })
      })
    })
  }

  async confirmDelSubCat(subCatKey, topCatKey) {
    const alert = await this.alertCtrl.create({
      header: "Delete SubCategory ?",
      message: "This will Delete all the Subcategory Items also !!",
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Yes, I understand',
          handler: () => {
            this.delSubCat(subCatKey, topCatKey);
          }
        }
      ]
    });

    await alert.present();
  }

  async delSubCat(subCatKey, topCatKey) {
    return this.db.list(`SubCategories/${subCatKey}`).remove().then(() => {
      this.db.list(`SubCatsIndex/${topCatKey}`).remove().then(() => {
        this.db.list(`SubCatsItemsIndex/${subCatKey}`).snapshotChanges().subscribe(snap => {
          snap.forEach(snip => {
            this.delSubCatItem(snip.key, subCatKey);
          })
        });
      })
    });
  }


  async confirmDelSubCatItem(itemKey, subCat) {
    const alert = await this.alertCtrl.create({
      header: "Delete SubCategory Item ?",
      message: "This is not Reversible !!",
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Yes, I understand',
          handler: () => {
            this.delSubCatItem(itemKey, subCat);
          }
        }
      ]
    });

    await alert.present();
  }
  async delSubCatItem(itemKey, subCatKey) {
    this.db.list(`SubCategoriesItems/${itemKey}`).remove().then(() => {
      this.db.list(`SubCatsItemsIndex/${subCatKey}/${itemKey}`).remove().then(() => {
        this.presentToast("SubCategory Item Removed");
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
  //Product Deletion according to cat Deletion

}
