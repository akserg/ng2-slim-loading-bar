import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimLoadingBarLibComponent } from './slim-loading-bar-lib.component';

describe('SlimLoadingBarLibComponent', () => {
  let component: SlimLoadingBarLibComponent;
  let fixture: ComponentFixture<SlimLoadingBarLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlimLoadingBarLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimLoadingBarLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
