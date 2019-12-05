import { TestBed } from '@angular/core/testing';

import { RightPanelService } from './right-panel.service';

describe('RightPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RightPanelService = TestBed.get(RightPanelService);
    expect(service).toBeTruthy();
  });
});
