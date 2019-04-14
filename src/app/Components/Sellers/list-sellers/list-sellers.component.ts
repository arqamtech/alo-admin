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

  sellers: Observable<any>;
  showSpinner: boolean = true;

  constructor(
    private sellerService: SellerService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.sellers = this.sellerService.getSellers();
    this.sellers.subscribe(() => this.showSpinner = false);
  }


  gtSellerDetails(s) {
    this.navCtrl.navigateForward(`seller/${s.key}`)
  }

}
