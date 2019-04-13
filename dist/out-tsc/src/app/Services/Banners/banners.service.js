import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';
var BannersService = /** @class */ (function () {
    function BannersService(db, alertCtrl, toastCtrl, navCtrl) {
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.banner = new FormGroup({
            Name: new FormControl("", Validators.required),
            Image: new FormControl(""),
            PostTime: new FormControl(moment().format()),
        });
        this.bannersRef = this.db.list("Promotionals/Banners");
    }
    BannersService.prototype.addBanner = function (banner) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                firebase.storage().ref("Banners/" + banner.Name).put(banner.Image).then(function () {
                    firebase.storage().ref("Banners/" + banner.Name).getDownloadURL().then(function (dURL) {
                        _this.url = dURL;
                        banner.Image = _this.url;
                    }).then(function () {
                        _this.bannersRef.push(banner).then(function () {
                            _this.navCtrl.navigateRoot('banners');
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    BannersService.prototype.getBanners = function () {
        return this.bannersRef.snapshotChanges();
    };
    BannersService.prototype.deleteBanner = function (banner) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Are you sure you want to Delete this Banner ?',
                            message: 'This banner cannot be recovered again',
                            buttons: [
                                {
                                    text: 'No, Its a mistake',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Yes, I understand',
                                    handler: function () {
                                        _this.delete(banner);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BannersService.prototype.delete = function (banner) {
        var _this = this;
        firebase.storage().ref("Banners/").child(banner.payload.val().Name).delete().then(function () {
            _this.db.list("Promotionals/Banners/" + banner.key).remove().then(function () {
                _this.presentToast("Banner Deleted");
            });
        });
    };
    BannersService.prototype.presentToast = function (msg) {
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
    BannersService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase,
            AlertController,
            ToastController,
            NavController])
    ], BannersService);
    return BannersService;
}());
export { BannersService };
//# sourceMappingURL=banners.service.js.map