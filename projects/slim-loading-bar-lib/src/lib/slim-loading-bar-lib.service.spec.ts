import { TestBed } from '@angular/core/testing';

import { SlimLoadingBarLibService } from './slim-loading-bar-lib.service';

describe('SlimLoadingBarLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlimLoadingBarLibService = TestBed.get(SlimLoadingBarLibService);
    expect(service).toBeTruthy();
  });
});
