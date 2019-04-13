import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
var CateoriesService = /** @class */ (function () {
    function CateoriesService(db) {
        this.db = db;
    }
    CateoriesService.prototype.getTopCats = function () {
        return this.db.list("Categories").snapshotChanges();
    };
    CateoriesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], CateoriesService);
    return CateoriesService;
}());
export { CateoriesService };
//# sourceMappingURL=cateories.service.js.map