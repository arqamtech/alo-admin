import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BannersService } from 'src/app/Services/Banners/banners.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-view-banners',
  templateUrl: './view-banners.component.html',
  styleUrls: ['./view-banners.component.scss'],
})
export class ViewBannersComponent implements OnInit {

  banners: Observable<any>;


  constructor(
    private bannersSer: BannersService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  gtAddBanner() {
  this.navCtrl.navigateForward("/add-banner")
  }

  getUsers() {
    this.banners = this.bannersSer.getBanners();
  }


  deleteBanner(banner) {
    this.bannersSer.deleteBanner(banner);
  }
}
