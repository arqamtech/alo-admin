import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SellerService } from 'src/app/Services/Seller/seller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-sellers',
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.scss'],
})
export class ListSellersComponent implements OnInit {

  sellers: Observable<any> = this.sellerService.getSellers();

  constructor(
    private sellerService: SellerService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }


  gtSellerDetails(s) {
    this.navCtrl.navigateForward(`seller/${s.key}`)
  }

}
