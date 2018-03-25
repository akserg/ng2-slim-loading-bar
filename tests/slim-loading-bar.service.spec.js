import { inject, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { SlimLoadingBarService } from '../src/slim-loading-bar.service';
describe('SlimLoadingBarService', function () {
    var service;
    var providers = [SlimLoadingBarService];
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [providers]
        });
    });
    beforeEach(inject([SlimLoadingBarService], function (slbs) {
        service = slbs;
    }));
    it('is defined', function () {
        expect(SlimLoadingBarService).toBeDefined();
        expect(service instanceof SlimLoadingBarService).toBeTruthy();
    });
    it('starts at zero when just being injected', function () {
        expect(service.progress).toBe(0);
    });
    it('can change the progress to 30 if you call set progress', function () {
        service.progress = 30;
        expect(service.progress).toBe(30);
    });
    it('increaments over time after calling start()', fakeAsync(function () {
        // var value, flag;
        expect(service.progress).toBe(0);
        service.start();
        tick(500);
        expect(service.progress).toBe(1);
        service.stop();
    }));
    it('have 100 returned from progress after complete()', function () {
        service.start();
        service.complete();
        expect(service.progress).toBe(100);
    });
    it('resets to zero when calling reset() after start() or set()', function () {
        service.progress = 30;
        service.reset();
        expect(service.progress).toBe(0);
    });
    it('will return 100 after calling complete', function () {
        service.progress = 30;
        service.complete();
        expect(service.progress).toBe(100);
    });
    it('return current height when calling height() without parameters', function () {
        expect(service.height).toBe('2px');
    });
    it('set the height when calling height() with parameter', function () {
        service.height = '5px';
        expect(service.height).toBe('5px');
    });
    it('return current color ', function () {
        expect(service.color).toBe('firebrick');
    });
    it('set the color', function () {
        service.color = 'green';
        expect(service.color).toBe('green');
    });
});
