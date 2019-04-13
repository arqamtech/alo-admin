import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SellerService } from 'src/app/Services/Seller/seller.service';
var ListSellersComponent = /** @class */ (function () {
    function ListSellersComponent(sellerService, navCtrl) {
        this.sellerService = sellerService;
        this.navCtrl = navCtrl;
        this.sellers = this.sellerService.getSellers();
    }
    ListSellersComponent.prototype.ngOnInit = function () { };
    ListSellersComponent.prototype.gtSellerDetails = function (s) {
        this.navCtrl.navigateForward("seller/" + s.key);
    };
    ListSellersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list-sellers',
            templateUrl: './list-sellers.component.html',
            styleUrls: ['./list-sellers.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SellerService,
            NavController])
    ], ListSellersComponent);
    return ListSellersComponent;
}());
export { ListSellersComponent };
//# sourceMappingURL=list-sellers.component.js.map