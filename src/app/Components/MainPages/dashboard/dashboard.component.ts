import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MenuController, PopoverController } from '@ionic/angular';
import { NotificationComponent } from '../../Notification/notification/notification.component';
import { NotiPopComponent } from '../../Notification/noti-pop/noti-pop.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  users: number = 0;
  sellers: number = 0;
  products: number = 0;
  banners: number = 0;
  usersRef = this.db.list("User Data/Users");
  sellersRef = this.db.list("Seller Data/Sellers");
  productsRef = this.db.list("Products");
  bannersref = this.db.list("Promotionals/Banners");

  constructor(
    private db: AngularFireDatabase,
    private menuCtrl: MenuController,
    private popoverCtrl: PopoverController,
  ) {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.getUsers();
    this.getBanners();
    this.getProducts();
    this.getSellers();
  }

  async getUsers() {
    this.usersRef.snapshotChanges().subscribe(snap => {
      this.users = snap.length;
    })
  }
  async getSellers() {
    this.sellersRef.snapshotChanges().subscribe(snap => {
      this.sellers = snap.length;
    })
  }
  async getProducts() {
    this.productsRef.snapshotChanges().subscribe(snap => {
      this.products = snap.length;
    })
  }
  async getBanners() {
    this.bannersref.snapshotChanges().subscribe(snap => {
      this.banners = snap.length;
    })
  }

  async  gtNoti(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotiPopComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
