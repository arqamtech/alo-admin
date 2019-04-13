import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  prodId;
  product;
  ver: boolean;

  constructor(
    private router: ActivatedRoute,
    private navCtrl: NavController,
    public db: AngularFireDatabase,
    private prodServ: ProductsService,
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.prodId = params['id'];
    });
    this.getProduct();
  }
  getProduct() {
    this.prodServ.getProduct(this.prodId).subscribe(snap => {
      this.product = snap.payload.val();
      this.product.key = snap.key;
      switch (this.product.Status) {
        case "Unverified": this.ver = false;
          break;
        case "Verified": this.ver = true;
          break;
      }
    });
  }

  verifyProd() {
    this.prodServ.verifyProd(this.product);
  }

  unVerifyProd() {
    this.prodServ.unVerifyProd(this.product);
  }





  viewBar() {
    this.navCtrl.navigateForward(`barcode/${this.prodId}`)
  }
}
