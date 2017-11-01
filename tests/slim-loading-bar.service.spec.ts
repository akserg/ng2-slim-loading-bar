import { inject, fakeAsync, tick, TestBed }
    from '@angular/core/testing';

import {SlimLoadingBarService}
    from '../src/slim-loading-bar.service';

describe('SlimLoadingBarService', () => {

    let service: SlimLoadingBarService;
    let providers = [SlimLoadingBarService];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [providers]
        });
    });

    beforeEach(inject([SlimLoadingBarService], (slbs: SlimLoadingBarService) => {
        service = slbs;
    }));

    it('is defined', () => {
        expect(SlimLoadingBarService).toBeDefined();
        expect(service instanceof SlimLoadingBarService).toBeTruthy();
    });

    it('starts at zero when just being injected', () => {
        expect(service.progress).toBe(0);
    });

    it('can change the progress to 30 if you call set progress', () => {
        service.progress = 30;
        expect(service.progress).toBe(30);
    });

    it('increments over time after calling start()', <any>fakeAsync((): void => {
        // var value, flag;
        expect(service.progress).toBe(0);
        service.start();

        tick(500);
        expect(service.progress).toBeGreaterThan(0);
        service.stop();
    }));

    it('is not completed never after calling start() if no other action is taken', <any>fakeAsync((): void => {
        // var value, flag;
        expect(service.progress).toBe(0);
        service.start();

        tick(10 * 60 * 1000); // 10 minutes
        expect(service.progress).toBeLessThan(100);
        service.stop();
    }));

    it('grows in an infinite sum fashion (0.5, 0.75, 0.875, ...) after calling start().', <any>fakeAsync((): void => {
        // var value, flag;
        expect(service.progress).toBe(0);
        service.growSpeed = 1 / 10;
        service.start();

        tick(500);
        expect(service.progress).toBeCloseTo(100 * (1 / 11), 1 / 1000);

        tick(500);
        expect(service.progress).toBeCloseTo(100 * (21 / 121), 1 / 1000);

        tick(38 * 500);
        expect(service.progress).toBeCloseTo(97.7905, 1 / 1000);

        service.stop();
    }));

    it('grow rate after calling calling start() is based in growSpeed.', <any>fakeAsync((): void => {
        // var value, flag;
        expect(service.progress).toBe(0);
        service.growSpeed = 1;
        service.start();

        tick(500);
        expect(service.progress).toBeCloseTo(100 * (1 / 2), 1 / 1000);

        tick(500);
        expect(service.progress).toBeCloseTo(100 * (3 / 4), 1 / 1000);

        tick(8 * 500);
        expect(service.progress).toBeCloseTo(100 * (1023 / 1024), 1 / 1000);

        service.stop();
    }));

    it('have 100 returned from progress after complete()', () => {
        service.start();
        service.complete();
        expect(service.progress).toBe(100);
    });

    it('resets to zero when calling reset() after start() or set()', () => {
        service.progress = 30;
        service.reset();
        expect(service.progress).toBe(0);
    });

    it('will return 100 after calling complete', () => {
        service.progress = 30;
        service.complete();
        expect(service.progress).toBe(100);
    });

    it('return current height when calling height() without parameters', () => {
        expect(service.height).toBe('2px');
    });

    it('set the height when calling height() with parameter', () => {
        service.height = '5px';
        expect(service.height).toBe('5px');
    });

    it('return current color ', () => {
        expect(service.color).toBe('firebrick');
    });
    it('set the color', () => {
        service.color = 'green';
        expect(service.color).toBe('green');
    });

    it('return current transition timing function ', () => {
        expect(service.transitionTimingFunction).toBe('linear');
    });
    it('set the transition timing function', () => {
        service.transitionTimingFunction = 'ease-in-out';
        expect(service.transitionTimingFunction).toBe('ease-in-out');
    });

});
