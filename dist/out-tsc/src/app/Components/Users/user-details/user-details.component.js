import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/Users/users.service';
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(router, db, userSer) {
        this.router = router;
        this.db = db;
        this.userSer = userSer;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.userId = params['id'];
        });
        this.getProduct();
    };
    UserDetailsComponent.prototype.getProduct = function () {
        var _this = this;
        this.userSer.getUser(this.userId).subscribe(function (snap) {
            _this.user = snap.payload.val();
            _this.user.key = snap.key;
        });
    };
    UserDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AngularFireDatabase,
            UsersService])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
export { UserDetailsComponent };
//# sourceMappingURL=user-details.component.js.map