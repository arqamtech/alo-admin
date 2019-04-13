import { TestBed } from '@angular/core/testing';
import { FaqService } from './faq.service';
describe('FaqService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FaqService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=faq.service.spec.js.map