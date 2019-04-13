import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BannersService } from 'src/app/Services/Banners/banners.service';
import { NavController } from '@ionic/angular';
var ViewBannersComponent = /** @class */ (function () {
    function ViewBannersComponent(bannersSer, navCtrl) {
        this.bannersSer = bannersSer;
        this.navCtrl = navCtrl;
        this.banners = this.bannersSer.getBanners();
    }
    ViewBannersComponent.prototype.ngOnInit = function () {
    };
    ViewBannersComponent.prototype.gtAddBanner = function () {
        this.navCtrl.navigateForward("/add-banner");
    };
    ViewBannersComponent.prototype.deleteBanner = function (banner) {
        this.bannersSer.deleteBanner(banner);
    };
    ViewBannersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view-banners',
            templateUrl: './view-banners.component.html',
            styleUrls: ['./view-banners.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [BannersService,
            NavController])
    ], ViewBannersComponent);
    return ViewBannersComponent;
}());
export { ViewBannersComponent };
//# sourceMappingURL=view-banners.component.js.map