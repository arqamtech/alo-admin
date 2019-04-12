import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BannersService } from 'src/app/Services/Banners/banners.service';


@Component({
  selector: 'app-view-banners',
  templateUrl: './view-banners.component.html',
  styleUrls: ['./view-banners.component.scss'],
})
export class ViewBannersComponent implements OnInit {

  banners: Observable<any>;


  constructor(
    private bannersSer: BannersService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.banners = this.bannersSer.getBanners();
  }
}
