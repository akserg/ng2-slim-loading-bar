import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder,
  ComponentFixture,
  fakeAsync,
  tick
} from 'angular2/testing';

import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS}
from 'angular2/platform/testing/browser';

import {Observable} from 'rxjs/Observable';

import {SlimLoadingBarService, SlimLoadingBarEvent, SlimLoadingBarEventType} from '../src/service';
import {SlimLoadingBar} from '../src/component';

export function main() {
    describe('SlimLoadingBar', () => {

        let componentFixture:ComponentFixture;
        let component:SlimLoadingBar;
        let containerDiv:HTMLDivElement;
        let progressDiv:HTMLDivElement;

        beforeEachProviders(() => {
            return [TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS, TestComponentBuilder, SlimLoadingBarService];
        });

        beforeEach(injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
            return tcb.createAsync(SlimLoadingBar).then((cf:ComponentFixture) => {
                componentFixture = cf;
                let element = componentFixture.nativeElement;
                containerDiv = element.querySelector('.slim-loading-bar');
                progressDiv = element.querySelector('.slim-loading-bar-progress');
                component = componentFixture.componentInstance;
                componentFixture.detectChanges();
            });
        }));

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
    });
}
