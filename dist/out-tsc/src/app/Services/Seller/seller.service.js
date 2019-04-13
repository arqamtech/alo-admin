import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
var SellerService = /** @class */ (function () {
    function SellerService(db, toastCtrl) {
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.sellerRef = this.db.list('Seller Data/Sellers', function (ref) { return ref.orderByChild("TimeStamp"); });
    }
    SellerService.prototype.getSellers = function () {
        return this.sellerRef.snapshotChanges();
    };
    SellerService.prototype.getSeller = function (key) {
        return this.db.object("Seller Data/Sellers/" + key).snapshotChanges();
    };
    SellerService.prototype.verifySeller = function (s) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.db.object("Seller Data/Sellers/" + s.key + "/Status").set("Verified").then(function () {
                    _this.presentToast("Seller Verified");
                }).then(function () {
                    _this.db.list("Seller Data/Notifications/" + s.key).push({
                        Type: "Seller Verified",
                        Status: "Unread",
                        TimeStamp: moment().format(),
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    SellerService.prototype.unVerifySeller = function (s) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.db.object("Seller Data/Sellers/" + s.key + "/Status").set("Unverified").then(function () {
                    _this.presentToast("Seller Unverified");
                }).then(function () {
                    _this.db.list("Seller Data/Notifications/" + s.key).push({
                        Type: "Seller Unverified",
                        Status: "Unread",
                        TimeStamp: moment().format(),
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    SellerService.prototype.presentToast = function (msg) {
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
    SellerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase,
            ToastController])
    ], SellerService);
    return SellerService;
}());
export { SellerService };
//# sourceMappingURL=seller.service.js.map