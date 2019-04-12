import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class BannersService {

  bannerRef = this.db.list("Banners");
  bannersRef = this.db.list("Promotionals/Banners")

  constructor(
    private db: AngularFireDatabase,
  ) { }

  getBanners() {
    return this.bannersRef.snapshotChanges();
  }
}
