import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { SellerService } from 'src/app/Services/Seller/seller.service';
var SellerDetailsComponent = /** @class */ (function () {
    function SellerDetailsComponent(router, db, sellerSer) {
        this.router = router;
        this.db = db;
        this.sellerSer = sellerSer;
    }
    SellerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.sellerId = params['id'];
        });
        this.getSeller();
        console.log(this.seller);
    };
    SellerDetailsComponent.prototype.getSeller = function () {
        var _this = this;
        this.sellerSer.getSeller(this.sellerId).subscribe(function (snap) {
            _this.seller = snap.payload.val();
            _this.seller.key = snap.key;
            switch (_this.seller.Status) {
                case "Unverified":
                    _this.ver = false;
                    break;
                case "Verified":
                    _this.ver = true;
                    break;
            }
        });
    };
    SellerDetailsComponent.prototype.vSeller = function () {
        this.sellerSer.verifySeller(this.seller);
    };
    SellerDetailsComponent.prototype.uSeller = function () {
        this.sellerSer.unVerifySeller(this.seller);
    };
    SellerDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-seller-details',
            templateUrl: './seller-details.component.html',
            styleUrls: ['./seller-details.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AngularFireDatabase,
            SellerService])
    ], SellerDetailsComponent);
    return SellerDetailsComponent;
}());
export { SellerDetailsComponent };
//# sourceMappingURL=seller-details.component.js.map