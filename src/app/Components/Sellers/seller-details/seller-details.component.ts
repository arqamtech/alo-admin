import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { SellerService } from 'src/app/Services/Seller/seller.service';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.scss'],
})
export class SellerDetailsComponent implements OnInit {

  sellerId;
  seller;
  ver: boolean;

  constructor(
    private router: ActivatedRoute,
    public db: AngularFireDatabase,
    private sellerSer: SellerService,
  ) { }
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.sellerId = params['id'];
    });
    this.getSeller();
    console.log(this.seller);
    
  }



  getSeller() {
    this.sellerSer.getSeller(this.sellerId).subscribe(snap => {
      this.seller = snap.payload.val();
      this.seller.key = snap.key;
      switch (this.seller.Status) {
        case "Unverified": this.ver = false;
          break;
        case "Verified": this.ver = true;
          break;
      }
    });
  }

  vSeller() {
    this.sellerSer.verifySeller(this.seller);
  }
  uSeller() {
    this.sellerSer.unVerifySeller(this.seller);
  }
}
