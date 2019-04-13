import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MenuController } from '@ionic/angular';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(db, menuCtrl) {
        this.db = db;
        this.menuCtrl = menuCtrl;
        this.users = 0;
        this.sellers = 0;
        this.products = 0;
        this.banners = 0;
        this.usersRef = this.db.list("User Data/Users");
        this.sellersRef = this.db.list("Seller Data/Sellers");
        this.productsRef = this.db.list("Products");
        this.bannersref = this.db.list("Promotionals/Banners");
        this.menuCtrl.enable(true);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getBanners();
        this.getProducts();
        this.getSellers();
    };
    DashboardComponent.prototype.getUsers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.usersRef.snapshotChanges().subscribe(function (snap) {
                    _this.users = snap.length;
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent.prototype.getSellers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.sellersRef.snapshotChanges().subscribe(function (snap) {
                    _this.sellers = snap.length;
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent.prototype.getProducts = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.productsRef.snapshotChanges().subscribe(function (snap) {
                    _this.products = snap.length;
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent.prototype.getBanners = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.bannersref.snapshotChanges().subscribe(function (snap) {
                    _this.banners = snap.length;
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase,
            MenuController])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map