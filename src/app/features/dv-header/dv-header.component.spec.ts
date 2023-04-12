import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvHeaderComponent } from './dv-header.component';

describe('DvHeaderComponent', () => {
  let component: DvHeaderComponent;
  let fixture: ComponentFixture<DvHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
