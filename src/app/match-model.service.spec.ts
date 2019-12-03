import { TestBed } from '@angular/core/testing';

import { MatchModelService } from './match-model.service';

describe('MatchModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchModelService = TestBed.get(MatchModelService);
    expect(service).toBeTruthy();
  });
});
