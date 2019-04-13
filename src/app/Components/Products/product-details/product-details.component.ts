import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
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
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.prodId = params['id'];
    });
    this.getProduct();
  }
  getProduct() {
    firebase.database().ref("Products").child(this.prodId).once("value", itemSnap => {
      this.product = itemSnap.val();
      this.product.key = itemSnap.key;
      switch (this.product.Status) {
        case "Unverified": this.ver = false;
          break;
        case "Verified": this.ver = true;
          break;
      }
    })
  }

  viewBar() {
    this.navCtrl.navigateForward(`barcode/${this.prodId}`)
  }
}
