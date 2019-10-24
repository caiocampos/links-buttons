import { TestBed } from '@angular/core/testing';

import { LinksButtonsService } from './links-buttons.service';

describe('LinksButtonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinksButtonsService = TestBed.get(LinksButtonsService);
    expect(service).toBeTruthy();
  });
});
