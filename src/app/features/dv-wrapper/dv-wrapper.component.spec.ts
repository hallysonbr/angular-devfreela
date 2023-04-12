import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvWrapperComponent } from './dv-wrapper.component';

describe('DvWrapperComponent', () => {
  let component: DvWrapperComponent;
  let fixture: ComponentFixture<DvWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
