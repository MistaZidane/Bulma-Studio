import { TestBed } from '@angular/core/testing';

import { ElementPathService } from './element-path.service';

describe('ElementPathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementPathService = TestBed.get(ElementPathService);
    expect(service).toBeTruthy();
  });
});
