import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastController, AlertController } from '@ionic/angular';
var FaqService = /** @class */ (function () {
    function FaqService(db, toastCtrl, alertCtrl) {
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.faq = new FormGroup({
            Question: new FormControl("", Validators.required),
            Answer: new FormControl("", Validators.required),
        });
    }
    //User Functions
    FaqService.prototype.addFaq = function (f) {
        var _this = this;
        return this.db.list("Promotionals/FAQs/VendorFaq").push(f).then(function () {
            _this.presentToast("Faq Added");
        });
    };
    FaqService.prototype.getUserFaqs = function () {
        return this.db.list("Promotionals/FAQs/VendorFaq").snapshotChanges();
    };
    FaqService.prototype.deleteFaq = function (f) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Are you sure you want to Delete this FAQ ?',
                            message: 'This cannot be recovered again',
                            buttons: [
                                {
                                    text: 'No, Its a mistake',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Yes, I understand',
                                    handler: function () {
                                        _this.delete(f);
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
    FaqService.prototype.delete = function (f) {
        var _this = this;
        this.db.object("Promotionals/FAQs/VendorFaq/" + f).remove().then(function () {
            _this.presentToast("Faq Removed");
        });
    };
    //Vendor Functions
    FaqService.prototype.addFaqV = function (f) {
        var _this = this;
        return this.db.list("Promotionals/FAQs/VendorFaq").push(f).then(function () {
            _this.presentToast("Faq Added");
        });
    };
    FaqService.prototype.getUserFaqsV = function () {
        return this.db.list("Promotionals/FAQs/VendorFaq").snapshotChanges();
    };
    FaqService.prototype.deleteFaqV = function (f) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Are you sure you want to Delete this FAQ ?',
                            message: 'This cannot be recovered again',
                            buttons: [
                                {
                                    text: 'No, Its a mistake',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Yes, I understand',
                                    handler: function () {
                                        _this.delete(f);
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
    FaqService.prototype.deleteV = function (f) {
        var _this = this;
        this.db.object("Promotionals/FAQs/VendorFaq/" + f).remove().then(function () {
            _this.presentToast("Faq Removed");
        });
    };
    FaqService.prototype.presentToast = function (msg) {
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
    FaqService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase,
            ToastController,
            AlertController])
    ], FaqService);
    return FaqService;
}());
export { FaqService };
//# sourceMappingURL=faq.service.js.map