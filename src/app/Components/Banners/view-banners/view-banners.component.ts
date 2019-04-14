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

  showSpinner: boolean = true;

  constructor(
    private bannersSer: BannersService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.banners = this.bannersSer.getBanners();
    this.banners.subscribe(() => this.showSpinner = false);
  }

  gtAddBanner() {
    this.navCtrl.navigateForward("/add-banner")
  }



  deleteBanner(banner) {
    this.bannersSer.deleteBanner(banner);
  }
}
