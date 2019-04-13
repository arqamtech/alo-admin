import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { NavController } from '@ionic/angular';
var ViewProductsComponent = /** @class */ (function () {
    function ViewProductsComponent(prodService, navCtrl) {
        this.prodService = prodService;
        this.navCtrl = navCtrl;
        this.products = this.prodService.getProducts();
    }
    ViewProductsComponent.prototype.ngOnInit = function () {
    };
    ViewProductsComponent.prototype.gtPDetails = function (p) {
        this.navCtrl.navigateForward("product-details/" + p.key);
    };
    ViewProductsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view-products',
            templateUrl: './view-products.component.html',
            styleUrls: ['./view-products.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService,
            NavController])
    ], ViewProductsComponent);
    return ViewProductsComponent;
}());
export { ViewProductsComponent };
//# sourceMappingURL=view-products.component.js.map