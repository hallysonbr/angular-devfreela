import { TestBed } from '@angular/core/testing';

import { ProjectCreateEditService } from './project-create-edit.service';

describe('ProjectCreateEditService', () => {
  let service: ProjectCreateEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCreateEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
