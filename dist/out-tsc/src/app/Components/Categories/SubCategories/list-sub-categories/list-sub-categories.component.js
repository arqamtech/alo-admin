import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
var ListSubCategoriesComponent = /** @class */ (function () {
    function ListSubCategoriesComponent(navCtrl, router, db) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.db = db;
        this.subCats = [];
    }
    ListSubCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.catKey = params['id'];
        });
        this.getSubCats();
        this.getCat();
    };
    ListSubCategoriesComponent.prototype.getCat = function () {
        this.db.object("Categories/" + this.catKey).snapshotChanges().subscribe(function (snap) {
            console.log(snap.payload.val());
        });
    };
    ListSubCategoriesComponent.prototype.getSubCats = function () {
        var _this = this;
        this.db.list("SubCatsIndex/" + this.catKey).snapshotChanges().subscribe(function (snap) {
            _this.subCats = [];
            snap.forEach(function (snip) {
                _this.db.object("SubCategories/" + snip.key).snapshotChanges().subscribe(function (ssnip) {
                    var temp = ssnip.payload.val();
                    temp.key = ssnip.key;
                    _this.subCats.push(temp);
                });
            });
        });
    };
    ListSubCategoriesComponent.prototype.gtSubCatI = function (key) {
        this.navCtrl.navigateForward("items-sub-categories/" + key);
    };
    ListSubCategoriesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list-sub-categories',
            templateUrl: './list-sub-categories.component.html',
            styleUrls: ['./list-sub-categories.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ActivatedRoute,
            AngularFireDatabase])
    ], ListSubCategoriesComponent);
    return ListSubCategoriesComponent;
}());
export { ListSubCategoriesComponent };
//# sourceMappingURL=list-sub-categories.component.js.map