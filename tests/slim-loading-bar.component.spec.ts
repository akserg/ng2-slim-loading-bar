import { TestBed, ComponentFixture }
    from '@angular/core/testing';

import {SlimLoadingBarService}
    from '../src/slim-loading-bar.service';
import {SlimLoadingBarComponent}
    from '../src/slim-loading-bar.component';

describe('SlimLoadingBar', () => {
    let componentFixture:ComponentFixture<SlimLoadingBarComponent>;
    let component:SlimLoadingBarComponent;
    let containerDiv:HTMLDivElement;
    let progressDiv:HTMLDivElement;

    let providers = [SlimLoadingBarService];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SlimLoadingBarComponent],
            providers: [providers]
        });
        TestBed.compileComponents();
    });

    beforeEach(() => {
        componentFixture = TestBed.createComponent<SlimLoadingBarComponent>(SlimLoadingBarComponent);
        let element = componentFixture.elementRef.nativeElement;
        containerDiv = element.querySelector('.slim-loading-bar');
        progressDiv = element.querySelector('.slim-loading-bar-progress');
        component = componentFixture.componentInstance;
        componentFixture.detectChanges();
    });

    it('should be defined', () => {
        expect(containerDiv).toBeDefined();
        expect(progressDiv).toBeDefined();
        expect(component).toBeDefined();
    });

    it ('should change width of progress when calling set progress', () => {
        expect(progressDiv.style.width).toBe('0%');

        // Set progress
        component.progress = '30';
        componentFixture.detectChanges();
        expect(progressDiv.style.width).toBe('30%');
    });

    it ('should change colors of progress when calling set color', () => {
        expect(progressDiv.style.color).toBe('firebrick');

        // Set color
        component.color = 'green';
        componentFixture.detectChanges();
        expect(progressDiv.style.color).toBe('green');
        expect(progressDiv.style.backgroundColor).toBe('green');
    });

    it ('should change height of progress when calling set height', () => {
        expect(progressDiv.style.height).toBe('2px');

        // Set height
        component.height = '3px';
        componentFixture.detectChanges();
        expect(progressDiv.style.height).toBe('3px');
    });

    it ('should change visibility of progress when calling show', () => {
        expect(progressDiv.style.opacity).toBe('1');

        // Hide
        component.show = false;
        componentFixture.detectChanges();
        expect(progressDiv.style.opacity).toBe('0');

        // Show
        component.show = true;
        componentFixture.detectChanges();
        expect(progressDiv.style.opacity).toBe('1');
    });

    it ('should change the transition timing function when calling set transitionTimingFunction', () => {
        component.progress = '30';
        component.transitionTimingFunction = 'ease-in-out';
        componentFixture.detectChanges();
        expect(progressDiv.style.transition).toContain('ease-in-out');
    });
});
