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

  products: Observable<any>;
  showSpinner: boolean = true;
  constructor(
    private prodService: ProductsService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.products = this.prodService.getProducts();
    this.products.subscribe(() => this.showSpinner = false);
  }

  gtPDetails(p) {
    this.navCtrl.navigateForward(`product-details/${p.key}`)
  }
}
