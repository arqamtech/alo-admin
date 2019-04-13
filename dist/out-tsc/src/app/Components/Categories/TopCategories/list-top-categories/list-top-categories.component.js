import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CateoriesService } from 'src/app/Services/Categories/cateories.service';
import { NavController } from '@ionic/angular';
var ListTopCategoriesComponent = /** @class */ (function () {
    function ListTopCategoriesComponent(catSer, navCtrl) {
        this.catSer = catSer;
        this.navCtrl = navCtrl;
        this.cats = this.catSer.getTopCats();
    }
    ListTopCategoriesComponent.prototype.ngOnInit = function () { };
    ListTopCategoriesComponent.prototype.gtSubCat = function (key) {
        this.navCtrl.navigateForward("sub-categories/" + key);
    };
    ListTopCategoriesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list-top-categories',
            templateUrl: './list-top-categories.component.html',
            styleUrls: ['./list-top-categories.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CateoriesService,
            NavController])
    ], ListTopCategoriesComponent);
    return ListTopCategoriesComponent;
}());
export { ListTopCategoriesComponent };
//# sourceMappingURL=list-top-categories.component.js.map