import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FaqService } from 'src/app/Services/Faqs/faq.service';
var UserFaqComponent = /** @class */ (function () {
    function UserFaqComponent(faqService) {
        this.faqService = faqService;
        this.faqs = this.faqService.getUserFaqs();
    }
    UserFaqComponent.prototype.ngOnInit = function () {
    };
    UserFaqComponent.prototype.addFaq = function () {
        var _this = this;
        if (this.faqService.faq.valid) {
            var tempFaq = this.faqService.faq.value;
            this.faqService.addFaq(tempFaq).then(function () {
                _this.faqService.faq.reset();
            });
        }
    };
    UserFaqComponent.prototype.deleteFaq = function (f) {
        this.faqService.deleteFaq(f);
    };
    UserFaqComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-faq',
            templateUrl: './user-faq.component.html',
            styleUrls: ['./user-faq.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FaqService])
    ], UserFaqComponent);
    return UserFaqComponent;
}());
export { UserFaqComponent };
//# sourceMappingURL=user-faq.component.js.map