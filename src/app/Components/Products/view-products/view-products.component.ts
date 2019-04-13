import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
})
export class ViewProductsComponent implements OnInit {

  products: Observable<any> = this.prodService.getProducts();

  constructor(
    private prodService: ProductsService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  gtPDetails(p) {
    this.navCtrl.navigateForward(`product-details/${p.key}`)
  }
}
