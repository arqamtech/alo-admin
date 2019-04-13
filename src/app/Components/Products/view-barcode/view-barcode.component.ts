import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-view-barcode',
  templateUrl: './view-barcode.component.html',
  styleUrls: ['./view-barcode.component.scss'],
})
export class ViewBarcodeComponent implements OnInit {

  prodId;
  product;

  constructor(
    private router: ActivatedRoute,
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

    })
  }

  pBar() {
    window.print();
  }


}
