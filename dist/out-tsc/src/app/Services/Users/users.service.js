import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
var UsersService = /** @class */ (function () {
    function UsersService(db) {
        this.db = db;
        this.userRef = this.db.list('User Data/Users', function (ref) { return ref.orderByChild("Name"); });
    }
    UsersService.prototype.getUsers = function () {
        return this.userRef.snapshotChanges();
    };
    UsersService.prototype.getUser = function (key) {
        return this.db.object("User Data/Users/" + key).snapshotChanges();
    };
    UsersService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], UsersService);
    return UsersService;
}());
export { UsersService };
//# sourceMappingURL=users.service.js.map