import { TestBed } from '@angular/core/testing';
import { BannersService } from './banners.service';
describe('BannersService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BannersService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=banners.service.spec.js.map