import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { AngularFireDatabase } from 'angularfire2/database';
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, navCtrl, db, prodServ) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.db = db;
        this.prodServ = prodServ;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.prodId = params['id'];
        });
        this.getProduct();
    };
    ProductDetailsComponent.prototype.getProduct = function () {
        var _this = this;
        this.prodServ.getProduct(this.prodId).subscribe(function (snap) {
            _this.product = snap.payload.val();
            _this.product.key = snap.key;
            switch (_this.product.Status) {
                case "Unverified":
                    _this.ver = false;
                    break;
                case "Verified":
                    _this.ver = true;
                    break;
            }
        });
    };
    ProductDetailsComponent.prototype.verifyProd = function () {
        this.prodServ.verifyProd(this.product);
    };
    ProductDetailsComponent.prototype.unVerifyProd = function () {
        this.prodServ.unVerifyProd(this.product);
    };
    ProductDetailsComponent.prototype.viewBar = function () {
        this.navCtrl.navigateForward("barcode/" + this.prodId);
    };
    ProductDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            NavController,
            AngularFireDatabase,
            ProductsService])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map