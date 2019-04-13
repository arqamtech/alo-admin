import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var FaqComponent = /** @class */ (function () {
    function FaqComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FaqComponent.prototype.ngOnInit = function () { };
    FaqComponent.prototype.gtUsers = function () {
        this.navCtrl.navigateForward("faq-users");
    };
    FaqComponent.prototype.gtVendors = function () {
        this.navCtrl.navigateForward("faq-vendors");
    };
    FaqComponent = tslib_1.__decorate([
        Component({
            selector: 'app-faq',
            templateUrl: './faq.component.html',
            styleUrls: ['./faq.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], FaqComponent);
    return FaqComponent;
}());
export { FaqComponent };
//# sourceMappingURL=faq.component.js.map