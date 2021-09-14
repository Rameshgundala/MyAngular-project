import { TestBed } from '@angular/core/testing';

import { RedirectTOoginGuard } from './redirect-toogin.guard';

describe('RedirectTOoginGuard', () => {
  let guard: RedirectTOoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectTOoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
