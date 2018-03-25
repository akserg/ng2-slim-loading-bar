import { TestBed } from '@angular/core/testing';
import { SlimLoadingBarService } from '../src/slim-loading-bar.service';
import { SlimLoadingBarComponent } from '../src/slim-loading-bar.component';
describe('SlimLoadingBar', function () {
    var componentFixture;
    var component;
    var containerDiv;
    var progressDiv;
    var providers = [SlimLoadingBarService];
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [SlimLoadingBarComponent],
            providers: [providers]
        });
        TestBed.compileComponents();
    });
    beforeEach(function () {
        componentFixture = TestBed.createComponent(SlimLoadingBarComponent);
        var element = componentFixture.elementRef.nativeElement;
        containerDiv = element.querySelector('.slim-loading-bar');
        progressDiv = element.querySelector('.slim-loading-bar-progress');
        component = componentFixture.componentInstance;
        componentFixture.detectChanges();
    });
    it('should be defined', function () {
        expect(containerDiv).toBeDefined();
        expect(progressDiv).toBeDefined();
        expect(component).toBeDefined();
    });
    it('should change width of progress when calling set progress', function () {
        expect(progressDiv.style.width).toBe('0%');
        // Set progress
        component.progress = '30';
        componentFixture.detectChanges();
        expect(progressDiv.style.width).toBe('30%');
    });
    it('should change colors of progress when calling set color', function () {
        expect(progressDiv.style.color).toBe('firebrick');
        // Set color
        component.color = 'green';
        componentFixture.detectChanges();
        expect(progressDiv.style.color).toBe('green');
        expect(progressDiv.style.backgroundColor).toBe('green');
    });
    it('should change height of progress when calling set height', function () {
        expect(progressDiv.style.height).toBe('2px');
        // Set height
        component.height = '3px';
        componentFixture.detectChanges();
        expect(progressDiv.style.height).toBe('3px');
    });
    it('should change visibility of progress when calling show', function () {
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
});
