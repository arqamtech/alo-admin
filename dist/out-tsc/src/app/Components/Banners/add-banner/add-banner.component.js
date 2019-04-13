import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BannersService } from 'src/app/Services/Banners/banners.service';
var AddBannerComponent = /** @class */ (function () {
    function AddBannerComponent(bannerSer) {
        this.bannerSer = bannerSer;
    }
    AddBannerComponent.prototype.ngOnInit = function () { };
    AddBannerComponent.prototype.addBanner = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tempBanner;
            return tslib_1.__generator(this, function (_a) {
                tempBanner = this.bannerSer.banner.value;
                tempBanner.Image = this.img2;
                if (this.bannerSer.banner.valid) {
                    this.bannerSer.addBanner(tempBanner);
                }
                else {
                    this.bannerSer.presentToast("Enter a name for Image");
                }
                return [2 /*return*/];
            });
        });
    };
    AddBannerComponent.prototype.fileChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.img1 = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        var fileList = event.target.files;
        var file = fileList[0];
        this.img2 = file;
    };
    AddBannerComponent.prototype.removeImage = function () {
        this.img1 = null;
    };
    AddBannerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-banner',
            templateUrl: './add-banner.component.html',
            styleUrls: ['./add-banner.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [BannersService])
    ], AddBannerComponent);
    return AddBannerComponent;
}());
export { AddBannerComponent };
//# sourceMappingURL=add-banner.component.js.map