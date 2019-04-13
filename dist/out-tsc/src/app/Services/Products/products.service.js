import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
var ProductsService = /** @class */ (function () {
    function ProductsService(db, navCtrl, toastCtrl) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.productsRef = this.db.list("Products");
    }
    ProductsService.prototype.getProducts = function () {
        return this.productsRef.snapshotChanges();
    };
    ProductsService.prototype.getProduct = function (key) {
        return this.db.object("Products/" + key).snapshotChanges();
    };
    ProductsService.prototype.verifyProd = function (prod) {
        var _this = this;
        return this.db.object("Products/" + prod.key + "/Status").set("Verified").then(function () {
            _this.db.list("Seller Data/Notifications/" + prod.StoreKey).push({
                Name: prod.Name,
                ProductKey: prod.key,
                Type: "Product Verified",
                Status: "Unread",
                TimeStamp: moment().format(),
            }).then(function () {
                _this.presentToast("Product Unverified");
            });
        });
    };
    ProductsService.prototype.unVerifyProd = function (prod) {
        var _this = this;
        return this.db.object("Products/" + prod.key + "/Status").set("Pending").then(function () {
            _this.db.list("Seller Data/Notifications/" + prod.StoreKey).push({
                Name: prod.Name,
                ProductKey: prod.key,
                Type: "Product Unverified",
                Status: "Unread",
                TimeStamp: moment().format(),
            }).then(function () {
                _this.presentToast("Product Unverified");
            });
        });
    };
    ProductsService.prototype.presentToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 4000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase,
            NavController,
            ToastController])
    ], ProductsService);
    return ProductsService;
}());
export { ProductsService };
//# sourceMappingURL=products.service.js.map